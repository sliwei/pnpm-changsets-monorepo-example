console.log('This is a package');
console.log('Hello World!');

export const isEven = (x: number, sta?: boolean) => {
  if (sta) {
    return true
  }
  return x % 2 === 0
};
