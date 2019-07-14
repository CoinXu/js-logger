import { Transports as ITransports, TransportsOptions } from "@inter/logger";
export declare class ConsoleTransports implements ITransports {
    private logger;
    push(message: string, options: TransportsOptions): void;
}
