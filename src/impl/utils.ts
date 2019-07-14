/**
 * @date 2018-09-03
 * @author coinxu
 * @description
 */

const toPrimitiveString = Object.prototype.toString;

/**
 * 返回数据的primitive类型，如Array,Object,Number,Arguments等
 */
function getPrimitiveType(value: any): string {
  return toPrimitiveString.call(value).slice(8, -1);
}

/**
 * %j
 */
function toJSONString(value: any): string {
  const type: string = getPrimitiveType(value);

  if (type === "Object" || type === "Array") {
    return JSON.stringify(value);
  }

  return String(value);
}

/**
 * %d or %i
 */
function toIntgerString(value: any): string {
  return String(parseInt(value));
}

/**
 * %f
 */
function toFloatString(value: any): string {
  return String(parseFloat(value));
}

/**
 * %s
 */
function toString(value: any): string {
  return String(value);
}

// %j  Outputs a JavaScript object. Clicking the object name opens more information about it in the inspector.
// %d or %i  Outputs an integer. Number formatting is supported, for example
//           console.log("Foo %.2d", 1.1) will output the number as two significant figures with a leading 0: Foo 01
// %s  Outputs a string.
// %f  Outputs a floating-point value. Formatting is supported, for example
//     console.log("Foo %.2f", 1.1) will output the number to 2 decimal places: Foo 1.10

function getTypeString(type: string, value: any): string {
  if (type === "s") {
    return toString(value);
  }

  if (type === "f") {
    return toFloatString(value);
  }

  if (type === "i" || type === "d") {
    return toIntgerString(value);
  }

  if (type === "j") {
    return toJSONString(value);
  }

  return toString(value);
}

export function template(template: string, args: any[]): string {
  if (args.length === 0) {
    return template;
  }

  const message: string[] = [];
  const length: number = template.length;

  let index: number = 0;
  let i: number;
  let c: string;
  let type: string;

  for (i = 0; i < length; i++){
    c = template[i];
    if (c === "%") {
      message.push(getTypeString(template[i + 1], args[index++]));
      i++;
    } else {
      message.push(c);
    }
  }

  return message.join("");
};
