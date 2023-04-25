export const characterAlternator = (str: string) => {
  const rawWords = str.split(' ');
  let result = '';

  rawWords.forEach((word: string, index: number) => {
    const rawStr = word.split('');

    rawStr.forEach((char: string, index: number) => {
      if (index % 2 === 0) {
        rawStr[index] = char.toUpperCase();
      } else {
        rawStr[index] = char.toLowerCase();
      }
    });
    result += index > 0 ? ' ' + rawStr.join('') : rawStr.join('');
  });

  return result;
};
