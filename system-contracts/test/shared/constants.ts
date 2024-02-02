import { BigNumber } from "ethers";

export const TEST_BOOTLOADER_FORMAL_ADDRESS = "0x0000000000000000000000000000000000009001";
export const TEST_ACCOUNT_CODE_STORAGE_SYSTEM_CONTRACT_ADDRESS = "0x0000000000000000000000000000000000009002";
export const TEST_NONCE_HOLDER_SYSTEM_CONTRACT_ADDRESS = "0x0000000000000000000000000000000000009003";
export const TEST_KNOWN_CODE_STORAGE_CONTRACT_ADDRESS = "0x0000000000000000000000000000000000009004";
export const TEST_IMMUTABLE_SIMULATOR_SYSTEM_CONTRACT_ADDRESS = "0x0000000000000000000000000000000000009005";
export const TEST_DEPLOYER_SYSTEM_CONTRACT_ADDRESS = "0x0000000000000000000000000000000000009006";
export const TEST_FORCE_DEPLOYER_ADDRESS = "0x0000000000000000000000000000000000009007";
export const TEST_L1_MESSENGER_SYSTEM_CONTRACT_ADDRESS = "0x0000000000000000000000000000000000009008";
export const TEST_MSG_VALUE_SYSTEM_CONTRACT_ADDRESS = "0x0000000000000000000000000000000000009009";
export const TEST_ETH_TOKEN_SYSTEM_CONTRACT_ADDRESS = "0x000000000000000000000000000000000000900a";
export const TEST_BOOTLOADER_UTILITIES_ADDRESS = "0x000000000000000000000000000000000000900c";
export const TEST_COMPRESSOR_CONTRACT_ADDRESS = "0x000000000000000000000000000000000000900e";
export const TEST_COMPLEX_UPGRADER_CONTRACT_ADDRESS = "0x000000000000000000000000000000000000900f";
export const TEST_PUBDATA_CHUNK_PUBLISHER_ADDRESS = "0x0000000000000000000000000000000000009011";

// event writer should be on the original address because event logs are filtered by address
export const REAL_EVENT_WRITER_CONTRACT_ADDRESS = "0x000000000000000000000000000000000000800d";
export const REAL_DEPLOYER_SYSTEM_CONTRACT_ADDRESS = "0x0000000000000000000000000000000000008006";
export const REAL_ACCOUNT_CODE_STORAGE_SYSTEM_CONTRACT_ADDRESS = "0x0000000000000000000000000000000000008002";
export const REAL_KECCAK256_CONTRACT_ADDRESS = "0x0000000000000000000000000000000000008010";

export const EMPTY_STRING_KECCAK = "0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470";
export const TWO_IN_256 = BigNumber.from(2).pow(256);
export const ONE_BYTES32_HEX = "0x0000000000000000000000000000000000000000000000000000000000000001";
