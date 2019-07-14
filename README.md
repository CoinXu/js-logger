Logger for edu100 frontend group.

# Features
+ [x] Diffrent levels
+ [x] Custom formatter
+ [X] Custom transportor
+ [ ] Cache
+ [ ] Compress

# Install
```bash
yarn add edu100-logger --registry=http://npm.100.com
```

# Import
```js
import { Logger, Level } from 'edu100-logger';
```

# Documentation

## Logger

### Logger#setGlobalOptions(options: LoggerOptions): void
Set a custom formatter:

```js
Logger.setGlobalOptions({
	format(options) {
		return `GlobalFormatter: [options.level] ${options.message}`;
	}
});
```

### Logger#create(namespace?: string, create?: LoggerOptions): Logger
Basic usage:

```js
Logger.create('demo').info('hello %s', 'world');
```

Custom transport:

```js
class Transport {
	// must implement method push
	push(message, options) {
		if (options.level === Level.ERROR) {
			fetch('http://example.com/your/log/server/post', { body: message });
		} else {
			console.log(message);
		}
	}
}
const logger = Logger.create('demo', {
	transports: [new Transport()]
});
logger.info('hello %s', 'world');
```

Custom format:

```js
const logger = Logger.create('demo', {
	format(options) {
		return `MyFormatter: ${options.namespace} ${options.level} ${options.message}`
	}
});
```

### Logger.fatal(template: string, ...args: any[]): void;
### Logger.error(template: string, ...args: any[]): void;
### Logger.warn(template: string, ...args: any[]): void;
### Logger.info(template: string, ...args: any[]): void;
### Logger.debug(template: string, ...args: any[]): void;
### Logger.trace(template: string, ...args: any[]): void;
### Logger.setLevel(level: Level): void

## Level(enum)
```ts
enum Level {
  OFF = 0,
  FATAL = 1,
  ERROR = 2,
  WARN = 3,
  INFO = 4,
  DEBUG = 5,
  TRACE = 6,
  ALL = 9007199254740991  // Number.MAX_SAFE_INTEGER
};
```

## Interpolations identifier
1. %j: Outputs a JavaScript object.
2. %d: Outputs an integer.
3. %s: Outputs a string.
4. %f: Outputs a floating-point value.

# Example
```js
import { Logger Level } from 'edu100-logger';

const logger = new Logger();
logger.info('string: %s, float: %f, json: %j, int: %i', 'abc', 1.0, { a: 1 }, 1);
// 2018-09-03 15:49:03:265 [INFO] string: abc, float: 1, json: {"a":1}, int: 1
```
