// InstanceType 的作用是获取构造函数类型的实例类型。

// 定义：

// node_modules/typescript/lib/lib.es5.d.ts

/**
 * Obtain the return type of a constructor function type
 */
type InstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer R ? R : any;

//示例：

class C {
  x = 0;
  y = 0;
}

type T0 = InstanceType<typeof C>; // C
type T1 = InstanceType<any>; // any
type T2 = InstanceType<never>; // never
type T3 = InstanceType<string>; // Error
type T4 = InstanceType<Function>; // Error

export {}
