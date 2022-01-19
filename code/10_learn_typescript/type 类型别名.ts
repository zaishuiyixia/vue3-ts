// 类型别名
// TypeScript 提供了为类型注解设置别名的便捷语法，你可以使用 type SomeName = someValidTypeAnnotation 来创建别名，比如：

type Pet = 'cat' | 'dog';
let pet: Pet;

pet = 'cat'; // Ok
pet = 'dog'; // Ok
pet = 'zebra'; // Compiler error
