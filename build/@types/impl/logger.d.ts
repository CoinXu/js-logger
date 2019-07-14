import { Logger as ILogger, LoggerOptions } from "@inter/logger";
import { Level } from "@/constants";
export declare class Logger implements ILogger {
    private static LoggerMap;
    private static GlobalLoggerConfig;
    static create(namespace?: string | LoggerOptions, options?: LoggerOptions): Logger;
    static setGlobalOptions(options: LoggerOptions): void;
    private options;
    private logger;
    constructor(options?: LoggerOptions);
    setOptions(options: LoggerOptions): void;
    getOptions(): LoggerOptions;
    setLevel(level: Level): void;
    fatal(template: string, ...args: any[]): void;
    error(template: string, ...args: any[]): void;
    warn(template: string, ...args: any[]): void;
    info(template: string, ...args: any[]): void;
    debug(template: string, ...args: any[]): void;
    trace(template: string, ...args: any[]): void;
}
