//必须有length属性，不一定是对象里有length属性，像是字符串、数组均可
interface ILength {
  length: number
}
//对泛型限制
function getLength<T extends ILength>(arg: T) {
  return arg.length
}

getLength("abc")
getLength(["abc", "cba"])
getLength({length: 100})
