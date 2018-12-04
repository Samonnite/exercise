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

## Typeof

typeof 对于**基本类型**，除了 null 之外都可以显示正确的类型。

```
    typeof 1 // 'number'
    typeof '1' // 'string'
    typeof undefined // 'undefined'
    typeof true // 'boolean'
    typeof Symbol() // 'symbol'
    typeof b // b 没有声明，但是还会显示 undefined
```

typeof 对于对象，除了函数都会显示 object

```
    typeof [] // 'object'
    typeof {} // 'object'
    typeof console.log // 'function'
```

对于 null 来说，虽然它是基本类型，但是会显示 object，这是一个存在很久了的 Bug

```
    typeof null // 'object'
```

如果想要获得一个变量的正确类型，可以通过 Object.prototype.toString.call(xx)
这样我们就可以获得类似 [object Type] 的字符串。

## 类型转换

### 转 Boolean

在条件判断是，除了 undefind, null, false, Nan, '', 0, -0, 其他所有值都转为 true,包括所以对象。

### 对象转基本类型

对象在基本转换类型时，首选会调用 valueOf 然后调用 toString，并且这两个方法你是可以重写的。

```
    let a = {
        valueOf() {
            return 0
        }
    }
```
