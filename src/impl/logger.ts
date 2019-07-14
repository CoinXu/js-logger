/**
 * @date 2018-09-03
 * @author coinxu
 * @description
 */

import {
  Logger as ILogger, Transports as ITransports, FormatterOptions, LoggerOptions
} from "@inter/logger";
import { template as parse } from "@impl/utils";
import { ConsoleTransports } from "@impl/console-transports";
import { Level } from "@/constants";
import formatter from "@impl/formatter";

const hasOwnProperty = Object.prototype.hasOwnProperty;

export class Logger implements ILogger {

  /* ------------------------------------ *
   * static property
   * ------------------------------------ */
  private static LoggerMap: { [key: string]: Logger } = {};

  /*
   * Global config for each logger instance.
   */
  private static GlobalLoggerConfig: LoggerOptions = {
    namespace: "",
    transports: [new ConsoleTransports()],
    level: Level.ALL,
    format: formatter
  };

  /**
   * Factory for class `Logger`, Use sigleton design pattern.
   *
   * @example
   * ```js
   * const foo: Logger = Logger.create('foo');
   * const bar: Logger = Logger.create('bar', { namespace: 'bar' });
   * ```
   */
  public static create(namespace?: string | LoggerOptions,
                       options?: LoggerOptions): Logger {
    if (typeof namespace === "object") {
      options = <LoggerOptions>namespace;
      namespace = "";
    }

    namespace = namespace || "__DEFAULT_LOGGER_DO_NOT_USE_THIS_NAMESPACE__";

    if (!hasOwnProperty.call(Logger.LoggerMap, namespace)) {
      Logger.LoggerMap[namespace] = new Logger({
        namespace,
        ...options
      });
    }

    return Logger.LoggerMap[namespace];
  }

  /**
   * 1. update global options.
   * 2. update options of each logger instance that created by Logger.create method.
   */
  public static setGlobalOptions(options: LoggerOptions): void {
    // Update `GlobalLoggerConfig`
    for (const propKey in options) {
      if (hasOwnProperty.call(options, propKey)) {
        Logger.GlobalLoggerConfig[propKey] = options[propKey];
      }
    }

    // Update created logger's options
    for (const namespace in Logger.LoggerMap) {
      if (hasOwnProperty.call(Logger.LoggerMap, namespace)) {
        Logger.LoggerMap[namespace].setOptions(options);
      }
    }
  }

  /* ------------------------------------ *
   * instance property
   * ------------------------------------ */
  private options: LoggerOptions;

  private logger(template: string, level: Level, args: any[]): void {
    if (this.options.level > level) {
      const { namespace } = this.options;
      const options: FormatterOptions = {
        message: parse(template, args),
        namespace,
        level
      };
      const message: string = this.options.format(options);

      for (const transportor of this.options.transports) {
        transportor.push(message, {
          namespace,
          level
        });
      }
    }
  }

  public constructor(options?: LoggerOptions) {
    this.options = {
      ...Logger.GlobalLoggerConfig,
      ...options
    };
  }

  public setOptions(options: LoggerOptions): void {
    for (const propKey in options) {
      if (hasOwnProperty.call(options, propKey)) {
        this.options[propKey] = options[propKey];
      }
    }
  }

  public getOptions(): LoggerOptions {
    return this.options;
  }

  public setLevel(level: Level): void {
    this.options.level = level;
  }

  public fatal(template: string, ...args: any[]): void {
    this.logger(template, Level.FATAL, args);
  }

  public error(template: string, ...args: any[]): void {
    this.logger(template, Level.ERROR, args);
  }

  public warn(template: string, ...args: any[]): void {
    this.logger(template, Level.WARN, args);
  }

  public info(template: string, ...args: any[]): void {
    this.logger(template, Level.INFO, args);
  }

  public debug(template: string, ...args: any[]): void {
    this.logger(template, Level.DEBUG, args);
  }

  public trace(template: string, ...args: any[]): void {
    this.logger(template, Level.TRACE, args);
  }
};
