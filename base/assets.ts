/*
 * 类型断言, 不是类型转换!!!
*/

function getLength(something: string | number): number {
  // 将something断言成string
  if ((<string>something).length) {
    return (<string>something).length;
  } else {
    return something.toString().length;
  }
}