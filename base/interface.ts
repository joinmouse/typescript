/* 
 * 对象的类型: 接口(Interface) 
*/

// 定义接口类型Perosn, 可选属性? 
interface Person1 {
  name: string,
  age: number
}
interface Person2 {
  name: string,
  age?: number
}

let tom: Person1 = {
  name: 'toma',
  age: 1
}