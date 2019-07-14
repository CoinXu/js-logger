/**
 * @date 2018-09-03
 * @author coinxu
 * @description
 */

export enum Level {
  OFF = 0,
  FATAL = 1,
  ERROR = 2,
  WARN = 3,
  INFO = 4,
  DEBUG = 5,
  TRACE = 6,
  ALL = 9007199254740991  // Number.MAX_SAFE_INTEGER
};

// Do not modify this value!
export const STORAGE_NAME_PREFIX = "_edu_1oo_";
