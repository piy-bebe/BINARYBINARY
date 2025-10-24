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

  for (let i = 0, j = binary.length - 1; i < binary.length; i++, j--) {
    res += Number(binary[i]) * Math.pow(2, j);
  }

  return res;
};
var reverseBits = function (n) {
  let binary = convertToBinary(n);
  let dec = convertToDec(binary);

  return dec;
};

console.log(reverseBits(43261596));
