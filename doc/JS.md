## 内置类型
**两大类**：*基本类型*和*引用类型*。  
**基本类型**：string,number,boolean,null,undefind,symbol。   
其中 JS 的数字类型是浮点类型的，没有整型   
NaN 也属于 number 类型，并且 NaN 不等于自身   

对于基本类型来说，如果使用字面量的方式，那么这个变量只是个字面量，只有在必要的时候才会转换为对应的类型。   

对象（Object）是**引用类型**，在使用过程中会遇到浅拷贝和深拷贝的问题。   

```
let a = { name: 'FE' }
let b = a
b.name = 'EF'
console.log(a.name) // EF
```
