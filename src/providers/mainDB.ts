import { Sequelize } from "sequelize";
import localConfigs from "../utils/globalConfig";
import { getLogger } from "../utils/logger";
import Models from "../models/index";

const logger = getLogger();

export class mainDB {
  sequelize: Sequelize;
  constructor() {
    const cfg = localConfigs().db;
    this.sequelize = new Sequelize(cfg.database, cfg.user, cfg.password, {
      host: cfg.host,
      port: cfg.port,
      dialect: "mysql",
      logging(sql) {
        logger.debug(`SQL: ${sql}`);
      },
    });

    Object.keys(Models).forEach((modelName) => {
      // esta linea llama a la funcion que retorna el modelo y le envía la instancia de este objeto
      Models[modelName as any]?.(this);
    });
  }

  async connect() {
    try {
      await this.sequelize.sync();
      await this.sequelize.authenticate();
      logger.debug("Connection has been established successfully.");
    } catch (error) {
      logger.error("Unable to connect to the database:", error);
    }
  }
}
