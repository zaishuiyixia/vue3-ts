// 1、typeof操作符
//在 TypeScript 中，typeof 操作符可以用来获取一个变量声明或对象的类型。

interface Person {
  name: string;
  age: number;
}

const sem: Person = { name: 'semlinker', age: 30 };
type Sem= typeof sem; // -> Person

function toArray(x: number): Array<number> {
  return [x];
}

type Func = typeof toArray; // -> (x: number) => number[]


// 2、keyof操作符
// keyof 操作符可以用来一个对象中的所有 key 值：

interface Person {
    name: string;
    age: number;
}

type K1 = keyof Person; // "name" | "age"
type K2 = keyof Person[]; // "length" | "toString" | "pop" | "push" | "concat" | "join" 
type K3 = keyof { [x: string]: Person };  // string | number

// 3、in操作符
// in 用来遍历枚举类型：

type Keys = "a" | "b" | "c"

type Obj =  {
  [p in Keys]: any
} // -> { a: any, b: any, c: any }

// infer
// infer 最早出现在此 PR 中，表示在 extends 条件语句中待推断的类型变量。

//简单示例如下：

type ParamType<T> = T extends (...args: infer P) => any ? P : T;
//在这个条件语句 T extends (...args: infer P) => any ? P : T 中，infer P 表示待推断的函数参数。
//整句表示为：如果 T 能赋值给 (...args: infer P) => any，则结果是 (...args: infer P) => any 类型中的参数 P，否则返回为 T。

interface User {
  name: string;
  age: number;
}

type Func2 = (user: User) => void;

type Param = ParamType<Func2>; // Param = User
type AA = ParamType<string>; // string


//extends 有时候我们定义的泛型不想过于灵活或者说想继承某些类等，可以通过 extends 关键字添加泛型约束。

interface ILengthwise {
  length: number;
}

function loggingIdentity<T extends ILengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
//现在这个泛型函数被定义了约束，因此它不再是适用于任意类型：

loggingIdentity(3);  // Error, number doesn't have a .length property
//这时我们需要传入符合约束类型的值，必须包含必须的属性：

loggingIdentity({length: 10, value: 3});

export {}
