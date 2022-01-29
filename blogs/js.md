---
title: 'JS 小记'
date: '2022-2-2'
description: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
---


# js 小记🐥

## 函数基础知识

### 函数的声明

- 函数表达式（匿名函数）

    ~~~javascript
    // 此时的函数为匿名函数，fun是变量名称，可以使用变量名对函数进行调用
    var fun = function(a, b) {return a* b}
    fun(1, 2);
    ~~~

- Function() 构造函数

    ~~~javascript
    var myFunction = new Function("a", "b", "return a * b");
    var x = myFunction(4, 3);
    ~~~

- 自调用函数

    - 函数定义后会立即执行
    - 在函数体包裹一个括号，然后再跟上一个括号。

    ~~~javascript
    (function () {
        var x = "Hello!!";
    })();
    
    ~~~

- 箭头函数

    - 箭头函数是 `ES6` 的语法，且不会被提升

    ~~~javascript
    (x1, x2) => {函数体}
    (x1, x2) => 单一表达式 // 等价于 (x1, x2) => {return 表达式;}
    
    x => {函数体} // 单一参数时，括号可省略
    
    () => {函数体} // 没有参数时，需要写一对括号
    
    ~~~

### 函数参数对应问题

- 如果实参比形参多，则从前往后取实参进行对应
- 如果实参比形参少，则未被赋值的形参会默认为 `undefined`
- **如果实参数量不确定，可以使用 `arguments` 获取实参**
    - `arguments` 类似数组，可以向数组一样使用下标获取传入的参数
    - 可以使用 `arguments.length` 获取参数数量

### return 返回值

- 如果函数不写 `return` 那么默认返回 `undefined` 
- `return` 后跟多个数值时，返回最后一个

### 预解析

- JavaScript 会与解析代码，把**变量声明**和**函数声明**提前到当前作用域的最前方。

    - 变量提升，仅提升变量声明，不会提升赋值操作，**包括函数表达式的变量**。
    - 函数提升，提升函数声明到最前，不执行函数。

    ~~~javascript
    f1();
    console.log(c);
    console.log(b);
    console.log(a);
    
    function f1() {
        var a = b = c = 9;
        console.log(a);
        console.log(b);
        console.log(c);
    }
    
    // 相当于以下执行顺序 
    function f1() {
        var a
        a = b = c = 9;  // 此处执行相当于 var a = 9; b = 9; c = 9;
        				// 而非 var a = 9, b = 9, c = 9;
        				// 导致 只有 a 时局部变量，b、c 没有声明直接赋值，则为全局变量
        console.log(a);
        console.log(b);
        console.log(c);
    }
    
    f1();
    console.log(c);
    console.log(b);	//b、c正常输出，结果为 9
    console.log(a); //所有此处 a 输出报错，原因为未定义
    ~~~

    

## 对象小记🐥

### 对象的创建

- 字面量的方式创建

    ~~~javascript
    var obj = {
        x : 'a';
        fun : function() {};// 此函数为匿名函数，与使用字面量声明函数的方式相同
    }
    ~~~

- new Object

    ~~~javascript
    var obj = new Object();
    obj.x = 'a';
    obj.fun = function() {};
    ~~~

- 构造函数

    ~~~ javascript
    function Construct(x, fun) { // 先创建一个构造函数，设置需要定义的对象变量为形参
        this.x = x;		// 对象变量赋值
        this.fun = fun;  // 不需要return
    }
    
    var obj = new Construct('a', function(){});
    ~~~

- **`new` 关键字做了什么**

    - [[new 运算符 - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new)]

    1. 创建一个空对象（object）
    2. 让 `this` 指向新创建的对象
    3. 执行构造函数的代码，为新对象添加属性
    4. 如果函数没有返回对象，返回 `this` （即其指向的对象） 

