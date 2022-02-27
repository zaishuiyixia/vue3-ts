let message: string|null = "Hello World"
//ES11新增操作符??，空值合并操作符
const content = message ?? "你好啊, 李银河"
// const content = message ? message: "你好啊, 李银河"
console.log(content)

export {}
