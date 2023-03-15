
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';
import { resolvers } from './resolvers/index';

//  Obtenemos el schema de nuestro archivo .graphql
const typeDefs = readFileSync('./schema.graphql').toString('utf-8')

//  Creamos una instancia de ApolloServer con el esquema de tipo y los resolvedores
const server = new ApolloServer({
    typeDefs,
    resolvers,
});


//  Iniciamos el servidor y lo ponemos a escuchar en el puerto 4000
//  Nota: El servidor se inicia de forma asíncrona, por lo que debemos usar async/await
//  puesto que debido a configuraciones de NodeJS, no podemos usar promesas directamente
//  en el archivo principal.
const main = async () => {
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 }
    });

    console.log(`🚀  Server ready at: ${url}`);
};

main();
