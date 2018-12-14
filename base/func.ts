/*
* 函数声明(Function Declaration)
*/
function sum(x: number, y: number): number {
  return x+y
}


/*
* 函数表达式(Function Expression)
*/
let mySum:(x: number, y: number) => number = function(x: number, y: number): number {
  return x+y
}

/*
 * 利用接口来定义函数的形状
*/
interface SearchFunc {
  (source: string, subString: string): boolean
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  return source.search(subString) !== -1
}

/* 
 * 重载: 允许一个函数接受不同数量或类型的参数时，作出不同的处理
*/
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('');
  }
}