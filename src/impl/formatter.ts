/**
 * @date 2018-09-03
 * @author coinxu
 * @description
 */

import { Formatter, FormatterOptions } from "@inter/logger";
import { Level } from "@/constants";

const LEVEN_NAME = {
  FATAL: "FATAL",
  ERROR: "ERROR",
  WARN: "WARN",
  INFO: "INFO",
  DEBUG: "DEBUG",
  TRACE: "TRACE"
};

/**
 * 返回当前时间格式化字符串：YYYY-MM-DD HH:mm:ss
 */
function timestamp(): string {
  const d: Date = new Date();
  const year: number = d.getFullYear();
  const month: number = d.getMonth() + 1;
  const date: number = d.getDate();

  const hours: number = d.getHours();
  const seconds: number = d.getSeconds();
  const minutes: number = d.getMinutes();
  const ms: number = d.getMilliseconds();

  return "" + year
    + "-" + (month < 10 ? ("0" + month) : month)
    + "-" + (date < 10 ? ("0" + date) : date)
    + " " + (hours < 10 ? ("0" + hours) : hours)
    + ":" + (seconds < 10 ? ("0" + seconds): seconds)
    + ":" + (minutes < 10 ? ("0" + minutes) : minutes)
    + ":" + ((ms < 10 ? "00" : ms < 100 ? "0" : "") + ms);
};


export default function(options: FormatterOptions): string {
  let name: string = "";

  switch(options.level) {
    case Level.FATAL:
      name = LEVEN_NAME.FATAL;
      break;

    case Level.ERROR:
      name = LEVEN_NAME.ERROR;
      break;

    case Level.WARN:
      name = LEVEN_NAME.WARN;
      break;

    case Level.INFO:
      name = LEVEN_NAME.INFO;
      break;

    case Level.DEBUG:
      name = LEVEN_NAME.DEBUG;
      break;

    case Level.TRACE:
      name = LEVEN_NAME.TRACE;
      break;

    default:
      name = "";
  }

  return (options.namespace ? `[${options.namespace}]` : "")
    + (name ? `[${name}] ` : "")
    + options.message;
}
