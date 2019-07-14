import { Level } from "@/constants";
export interface FormatterOptions {
    message: string;
    level: Level;
    namespace?: string;
}
export interface Formatter {
    (options: FormatterOptions): string;
}
export interface TransportsOptions {
    namespace: string;
    level: Level;
}
export interface Transports {
    push(message: string, options: TransportsOptions): void;
}
export interface LoggerOptions {
    namespace?: string;
    transports?: Transports[];
    level?: Level;
    format?: Formatter;
}
export interface Logger {
    fatal(template: string, ...args: any[]): void;
    error(template: string, ...args: any[]): void;
    warn(template: string, ...args: any[]): void;
    info(template: string, ...args: any[]): void;
    debug(template: string, ...args: any[]): void;
    trace(template: string, ...args: any[]): void;
    setLevel(level: Level): void;
    getOptions(): LoggerOptions;
}
export interface LoggerConstructor {
    new (options?: LoggerOptions): Logger;
    create(namespace?: string, options?: LoggerOptions): Logger;
    setGlobalOptions(options: LoggerOptions): void;
}
