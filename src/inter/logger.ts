/**
 * @date 2018-09-03
 * @author coinxu
 * @description
 */

import { Level } from "@/constants";

/**
 * 日志格式化函数传入的配置项，在格式化函数中可以根据配置项返回消息。
 */
export interface FormatterOptions {
  // 当次传入的消息
  message: string;
  // 日志级别
  level: Level;
  // namespace（如果有的话）
  namespace?: string;
};

/**
 * 格式化函数原型，必须返回string类型。
 */
export interface Formatter {
  (options: FormatterOptions): string;
};

/**
 * 日志传输类接收到日志时接收到的参数
 */
export interface TransportsOptions {
  namespace: string;
  level: Level;
};

/**
 * 日志传输类接口，必须实现push方法，可以在push函数中将函数传输到各处。
 * 其中，message为经过formatter函数之后的消息。
 */
export interface Transports {
  push(message: string, options: TransportsOptions): void;
};

/**
 * Logger类配置参数，namespace作为一个日志实例的唯一标识。
 * level指明了当前日志实例输出的日志级别。
 */
export interface LoggerOptions {
  namespace?: string;
  transports?: Transports[];
  level?: Level;
  format?: Formatter;
};

/**
 * Logger类接口，必须实现如下方法。
 */
export interface Logger {
  fatal(template: string, ...args: any[]): void;
  error(template: string, ...args: any[]): void;
  warn(template: string, ...args: any[]): void;
  info(template: string, ...args: any[]): void;
  debug(template: string, ...args: any[]): void;
  trace(template: string, ...args: any[]): void;
  // 设置日志级别
  setLevel(level: Level): void;
  // 返回当前实例配置参数
  getOptions(): LoggerOptions;
};

/**
 * Logger构造器上挂载的方法
 */
export interface LoggerConstructor {
  new(options?: LoggerOptions): Logger;
  /**
   * 使用namespace与options创建一个新的实例。
   * 之所以不直接new Logger，是因为要保证每个namespace的logger实例全局唯一。
   * 所以在实现的建议将constructor设置为私有，不允许直接new。
   */
  create(namespace?: string, options?: LoggerOptions): Logger;

  /**
   * 配置全局选项。
   * 全局配置项将会应用于所有的日志实例。一旦该函数被调用，应将所有已存在的实例配置项也更新。
   */
  setGlobalOptions(options: LoggerOptions): void;
};
