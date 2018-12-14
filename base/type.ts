/* 
* 基本数据类型(原始数据类型) 
*/

// 布尔
let isDone: boolean = false;
let u: undefined = undefined;
let n: null = null

// void表示没有任何返回值的函数
function alertName(): void {
  alert('My name is Tom');
}

// any 用来表示允许赋值为任意类型, 声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值.
let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7


// 联合类型(union types)
let a: string | number;
a = 'aaa';
a = 8