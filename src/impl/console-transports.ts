/**
 * @date 2018-09-03
 * @author coinxu
 * @description 使用Console实例传输日志
 */

import { Transports as ITransports, TransportsOptions } from "@inter/logger";
import { Level } from "@/constants";

export class ConsoleTransports implements ITransports {

  private logger = console;

  public push(message: string, options: TransportsOptions): void {
    if (options.level === Level.FATAL || options.level === Level.ERROR) {
      this.logger.error(message);
    } else if (options.level === Level.WARN) {
      this.logger.warn(message);
    } else if (options.level === Level.INFO) {
      this.logger.info(message);
    } else if (options.level === Level.DEBUG) {
      this.logger.debug(message);
    } else if (options.level === Level.TRACE) {
      this.logger.trace(message);
    }
  }
};
