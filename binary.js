/**
 * @param {number} n
 * @return {number}
 */

const convertToBinary = (num) => {
  let binary = '';

  while (num != 0) {
    binary += num % 2;
    num = Math.floor(num / 2);
  }

  while (binary.length != 32) {
    binary += '0';
  }

  return binary;
};

const convertToDec = (binary) => {
  let res = 0;

  for (let i = binary.length - 1; i != 0; i--) {
    res += Number(binary[i]) * Math.pow(2, i);
  }

  return res;
};
var reverseBits = function (n) {
  let binary = convertToBinary(n);
  let dec = convertToDec(binary);

  return dec;
};

console.log(reverseBits(43261596));
