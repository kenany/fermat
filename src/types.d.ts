declare module 'bn' {
  interface BigInteger {
    bitLength(): number;
    byteLength(): number;
    compareTo(b: BigInteger): number;
    equals(b: BigInteger): boolean;
    fromString(s: string, base?: number): BigInteger;
    mod(m: BigInteger): BigInteger;
    shiftLeft(n: number): BigInteger;
    square(): BigInteger;
    testBit(i: number): boolean;
  }

  function nbi(): BigInteger;
  function nbv(i: number): BigInteger;

  export { BigInteger, nbi, nbv };
}

declare module 'lodash.isstring' {
  function isString(value: unknown): value is string;
  export = isString;
}
