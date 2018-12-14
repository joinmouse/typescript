// 选择Choose
enum Choose { 
  Wife = 1, 
  Mother = 2
}
​
function question(choose: Choose) : void{
    console.log('你老婆和你妈妈同时掉进水里你先救哪个?');
    console.log('你的选择是： ' + choose);
}
​
question(Choose.Mother)

// let 变量名称 : 变量类型 = 变量的值
// :冒号这个标点符号，在语义中的作用就是，对冒号之前的东西进行解释和阐述

class Person {
  name: string;
  age: number;
  labels: Array<string>;
  wives: string[]; // 妻子们
  contact: [string, number]; // 元组 联系[联系地址，联系电话]
  other: any; // 备注
  saveMonth: boolean = true; // 是否救落水的妈妈

  constructor(){}

  answer() : Choose{
    if (this.saveMonth === false){
       return Choose.Wife;
    }
    return Choose.Mother;
  }
  hello() : void{
    console.log('hello~ i\'m ' + this.name);
    // return undefined;
    // return null;
  }
  empty(){}
  down() : never {
    while (true){}
    // throw new Error('error')
  }
}

let zhangsan = new Person();

zhangsan.name = "张三";
zhangsan.age = 28;
zhangsan.labels = ["颜值逆天", "年轻多金"];
zhangsan.wives = ["一号","二号","三号"];
zhangsan.contact = ["北京xxxxxxx别墅", 2];
zhangsan.saveMonth = false;
zhangsan.other = '不好不坏的人';

let len = (<string>zhangsan.other).length;
​
console.log(len);
question(zhangsan.answer());
​
zhangsan.hello();
​
console.log(zhangsan.empty());