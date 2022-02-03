import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  // noinspection JSNonASCIINames,NonAsciiCharacters
  MAINNET = 137,
  TESTNET = 3,
  ROPSTEN = 3,
  // RINKEBY = 4,
  // GÖRLI = 5,
  // KOVAN = 42,
  POLYGON = 137,
  MUMBAI = 80001,
  // FANTOM = 250,
  // FANTOM_TESTNET = 4002,
  // XDAI = 100,
  // BSC = 56,
  // BSC_TESTNET = 97,
  // ARBITRUM = 42161,
  // ARBITRUM_TESTNET = 79377087078960,
  // MOONBEAM_TESTNET = 1287,
  // AVALANCHE = 43114,
  // AVALANCHE_TESTNET = 43113,
  // HECO = 128,
  // HECO_TESTNET = 256,
  // HARMONY = 1666600000,
  // HARMONY_TESTNET = 1666700000,
  // OKEX = 66,
  // OKEX_TESTNET = 65,
  // CELO = 42220,
  // PALM = 11297108109,
  // PALM_TESTNET = 11297108099,
  // MOONRIVER = 1285,
  // FUSE = 122,
  // TELOS = 40
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS = '0xff6dca94678a420190aAee00485c5F2d1B6bae7e'

export const INIT_CODE_HASH = '0xcb54e91f48528688ead76d80df1d5639f715890a9d260928f22572e311dcfc26'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const FEES_NUMERATOR = JSBI.BigInt(9975)
export const FEES_DENOMINATOR = JSBI.BigInt(10000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
