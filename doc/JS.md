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

### 四则运算符

只有当加法运算时，其中一方是字符串，会把另一个也转为字符串。其他运算只要其中一方是数字，那么另一个会转为数字。
并且加法运算会触发三种类型转换：将值转为原始值，转换为数字，转换为字符串。

```
    1 + '1' // '11'
    2 * '2' // 4
    [1, 2] + [2, 1] // '1,22,1'
    // [1, 2].toString() -> '1,2'
    // [2, 1].toString() -> '2,1'
    // '1,2' + '2,1' = '1,22,1'
```

对于加号需要注意这个表达式 'a' + + 'b'

```
    'a' + + 'b' // -> "aNaN"
    // 因为 + 'b' -> NaN
    // 你也许在一些代码中看到过 + '1' -> 1
```

### 比较运算符

1. 如果是对象，就通过 toPrimitive 转换对象
2. 如果是字符串，就通过 unicode 字符索引来比较

# 原型

每个函数都有 **prototype** 属性，除了 Function.prototype.bind，该属性指向原型。

每个对象都有 __proto___ 属性，指向了创建该对象的构造函数的原型。其实这个属性指向了

[[prototype]]，但是 [[prototype]] 是内部属性，我们并不能访问到，所以使用 __proto___ 来访问。

对象可以通过 __proto___ 来寻找不属于该对象的属性，__proto___ 将对象连接起来组成了原型链。

# new

1. 生成一个新的对象
2. 链接到原型
3. 绑定 this
4. 返回新对象

对于实例对象而言，都是通过 new 产生的，无论是 function Foo() 还是 let a = {}。

对于创建一个对象来说，更推荐使用字面量的方式创建对象（无论性能上还是可读性）。因为你使用 new Object() 的方式创建对象需要通过作用域链一层层找到 Object，但是你使用字面量的方式就没这个问题。

```
    function Foo() {}
    // function 就是个语法糖
    // 内部等同于 new Function()
    let a = { b: 1 }
    // 这个字面量内部也是使用了 new Object()
```

# this

```
    function foo() {
        console.log(this.a)
    }
    var a = 1
    foo()

    var obj = {
        a: 2,
        foo: foo
    }
    obj.foo()

    // 以上两者情况 `this` 只依赖于调用函数前的对象，优先级是第二个情况大于第一个情况

    // 以下情况是优先级最高的，`this` 只会绑定在 `c` 上，不会被任何方式修改 `this` 指向
    var c = new foo()
    c.a = 3
    console.log(c.a)

    // 还有种就是利用 call，apply，bind 改变 this，这个优先级仅次于 new
```

箭头函数其实是没有 this 的，这个函数中的 this 只取决于他外面的第一个不是箭头函数的函数的 this。
在这个例子中，因为调用 a 符合前面代码中的第一个情况，所以 this 是 window。并且 this 一旦绑定了上下文，就不会被任何代码改变。


# 执行上下文

当执行JS代码时，会产生三种执行上下文

1. 全局执行上下文
2. 函数执行上下文
3. eval执行上下文
