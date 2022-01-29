---
title: 'CSS 小记'
date: '2022-2-2'
description: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
---

# CSS 3小记

## 代码规范简略

### 文件规范

- 样式文件必须带上 `@charset `规则，并且在第一行书写，字符使用 `UTF-8`

    + 推荐

        ```css
        @charset "UTF-8";
        
        .class{}
        ```

    + 不推荐

        ~~~css
        /**
         * @desc File Info
         * @author Author Name
         * @date 2015-10-10
         */
        
        /* @charset规则不在文件首行首个字符开始 */
        @charset "UTF-8";
        
        .jdc{}
        ~~~

### 选择器

- 尽量 少用 通用选择符 `*`

- 不使用 ID 选择器

- 不使用无具体语义定义的标签标签选择器

    + 

        ~~~css
        /* 推荐 */
        .jdc {}
        .jdc li {}
        .jdc li p{}
        
        /* 不推荐 */
        *{}
        #jdc {}
        .jdc div{}
        ~~~

        

### 代码易读性

- 颜色值 `rgb()`、`rgba()`、`hsl()` 等，其中不需要空格，小数不写0

    - 

        ~~~css
        /* 推荐 */
        .jdc {
            color: rgba(255,255,255,.5);
        }
        
        /* 不推荐 */
        .jdc {
            color: rgba( 255, 255, 255, 0.5 );
        }
        ~~~

        

- 十六进制尽量简写

- 不要为 0 指明单位

### 属性书写顺序

- 建议遵循以下顺序：

    1. 布局定位属性：`display / position / float / clear / visibility / overflow`

    2. 自身属性：`width / height / margin / padding / border / background`

    3. 文本属性：`color / font / text-decoration / text-align / vertical-align / white- space / break-word`

    4. 其他属性（CSS 3）：`content / cursor / border-radius / box-shadow / text-shadow / background:linear-gradient …`

        ~~~css
        .jdc {
            display: block;
            position: relative;
            float: left;
            width: 100px;
            height: 100px;
            margin: 0 10px;
            padding: 20px 0;
            font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
            color: #333;
            background: rgba(0,0,0,.5);
            -webkit-border-radius: 10px;
            -moz-border-radius: 10px;
            -o-border-radius: 10px;
            -ms-border-radius: 10px;
            border-radius: 10px;
        }
        ~~~

        

## 字体小记

### Unicode字体

- 可以使用 `Unicode代码` 替换字体名称提高兼容性

    ~~~css
    h1 {
        font-family: "\5B8B\4F53";
    }
    ~~~

    

### font-weight 字重取值

- `normal`：正常，数值 400
- `bold`：粗体，数值 700
- `bolder`：比继承的更重
- `lighter`：比继承的更轻
- 数字：取值范围 `100 ~ 900`，100一跳，更高的按900计算



### font-style 中 italic 和 oblique区别

- `italic`：将使用系列字体的斜体，对没有斜体的字体无效
- `oblique`：对没有斜体的字体使用，强制倾斜

### font 综合设定

- 可以单独使用 `font `属性进行统一设置

    ```css
    /* 除了font-size 和 font-famliy 其他可省略 */
    .class{
        font: font-style font-weight font-size/line-height font-famliy;
    }
    ```

### font-size 对 div 间距的影响

- 在块级元素中，即使为子元素设置 `margin：0` 但是浏览器依然会添加一个间距，并且随着父元素的 `font-size` 属性改变，将此项设置为 0 即可消除 

## 选择器

### 结构伪类选择器

- `:nth-child(n) `：匹配父元素的第 n 个元素，可以使用 `even` 和 `odd` 选择偶数、奇数，还可以使用公式，如 `2n` 从 0 开始选择 2 的倍数等

### 目标伪类选择器

- `:target`：匹配当前页面中选中的锚点

    ~~~css
    /* 
    *	HTML 结构
    *	<a href="#hh1">hh1</a> 
    *	<h1 id="hh1">lorem</h1>
    */
    
    h1:target {
        color: yellow;
    }
    ~~~

    

### 伪类和伪元素的区别

- `伪类` ：是选择器的一种，用于选择处于**特定状态**的元素，表现的像是在元素上添加了一个类一样，所以称为伪类。
- `伪元素` ：效果相似，不过表现得更像是添加了一个元素。
- 参考文档：[[伪类和伪元素 - 学习 Web 开发 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)]

### `.class1.class2` 和 `.class1 .class2`  的区别

| .*class1*.*class2*  | .name1.name2  | 选择 class 属性中同时有 name1 和 name2 的所有元素。 |
| ------------------- | ------------- | --------------------------------------------------- |
| .*class1* .*class2* | .name1 .name2 | 选择作为类名 name1 元素后代的所有类名 name2 元素。  |

## 背景设定

### background-origin

- 相对于容器框定位 **背景图片**，背景颜色并不会被影响

- 如果设置了 `background-attachment: fixed` 则该属性无效

- 测试链接：[[w3school在线测试工具](https://www.w3school.com.cn/tiy/c.asp?f=css_background-origin&p=3)]

    | 值          | 描述                                                      |
    | ----------- | --------------------------------------------------------- |
    | padding-box | 背景相对于内边框定位                                      |
    | border-box  | 背景相对于外边框定位                                      |
    | content-box | 相对于内容定位（如设置了padding后，内容和边距乡居很远时） |

    

### background-clip

- 规定背景的绘制区域，影响**背景颜色**
- Chromium 内核的浏览器需要使用属性 `-webkit-background-clip: text` 才能生效
- 示例参考：[[background-clip](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-clip)]

| 值                                   | 描述                                                       |
| ------------------------------------ | ---------------------------------------------------------- |
| border-box、padding-box、content-box | 与 `background-origin` 效果相近                            |
| text                                 | 背景被剪裁成文字的前景色（需设置属性`color: transparent`） |

### background

- `attachment`、`box`、`background-color`、`bg-img` 、`position`、`repeat`、`bg-size` 
- `box` 表示 `bg-clip` 和 `bg-origin` 综合。
    - 如果只写一个，则同时设定 `bg-clip` 和 `bg-origin` ；
    - 如果写两个，则先设定 `bg-origin`
- 参考文献：[[background](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background)]

## 边框

### border-radius

- `border-radius：[ 数值 | 百分比 ]{1,4} [ / [ 数值 | 百分比 ]{1,4} ]`

- 综合属性：`border-top-left-radius`、`border-top-right-radius`、`border-bottom-right-radius`、`border-bottom-left-radius`
- 分为两组，每组 1-4 个参数，第一组设置四角切圆的**水平半径**，第二组设置**垂直半径**
- 详情参考：[[CSS圆角（border-radius）完全解析](http://c.biancheng.net/css3/border-radius.html)]

| 参数数量 | 对应位置                         |
| -------- | -------------------------------- |
| 2        | （左上，右下）、（右上，左下）   |
| 3        | 左上、（右上，左下）、右下       |
| 4        | 左上、右上、右下、左下（顺时针） |

### border-*-radius

- `border-*-radius：[ 数值 | 百分比 ]{1,2}` ：提供 1-2 个参数，两个参数对应相切圆的**水平半径**和**垂直半径**

    ~~~css
    div {
        width: 200px;
        height: 100px;
        border-top-left-radius: 55px 25px;
    }
    ~~~

    > <img src="C:\Users\kailite\OneDrive\文档\我的笔记\前端学习笔记\images\image-20211111222925364.png" alt="image-20211111222925364" style="zoom: 50%;" />

## 边距

### 内边框合并问题解决

- 子元素中设置了 `margin` 并不会直接生效，而是会与父元素的 `margin` 合并，导致子元素的 `margin` 失效
    - 可以为父元素定义 `broder` 或者 `padding` 来规避
    - 可以为父元素添加 `overflow: hidden`

### 盒模型尺寸计算

- 盒子的实际宽度为：`width` + `padding` + `border`，所有指定宽度的时候要考虑 `padding`

- 可以使用 `box-sizing` 属性修改

    - `content-box`：默认模式，边框和内边距会改变盒子的实际宽度
    - `border-box`：压缩内容空间，保持已定的宽度

    ```css
    div {
        width: 40px;
        padding: 0 10px;
        /* 此时div实际宽度为 40 + 10 + 10 */
    }
    ```

    

## 清除浮动

      ### 为什么清楚浮动

- 添加了 `float`属性的box会脱离标准文档流，不占用原本的空间，导致遮挡底部的元素。
- 通过清除父元素的浮动，保持元素布局不变。 

### 方法

- 额外标签法
    - 在浮动的元素旁添加一个空元素，并设置清除浮动属性 `clear: both` 清除两侧浮动。

+ `overflow: hidden`

    + 为父元素添加 `overflow: hidden` 触发BFC，
    + BFC：(Block Formatting Context块级格式化上下文) 属于普通流，具有 BFC 特征的元素，其内部元素的布局变化不会影响到 BFC 元素外的其他元素
    + BFC 解释：[[10 分钟理解 BFC 原理 - 知乎](https://zhuanlan.zhihu.com/p/25321647)]

+ 使用伪元素清楚浮动

    + 与额外标签法相同，不过是使用伪元素设置 `clear: both`

        ```css
        .clearfix::after {
            /* content必须设置，其他属性用于隐藏after */
            content: "";
            display: block;
            height: 0;
            visibility: hidden;
            /* 清楚浮动 */
            clear: both;
        }
        ```

        

+ 使用双伪元素清楚浮动

    + 

## 文字显示

### white-space

- 设置文本在有限空间内的显示规则

- 参考： [[white-space (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/white-space)]

    | 值       | 效果                                         |
    | -------- | -------------------------------------------- |
    | normal   | 默认，多余的空格和回车会被浏览器忽略         |
    | pre      | 保留文本样式，与 `<pre>` 标签功能相同        |
    | nowarp   | 不换行，强制一行显示。                       |
    | pre-warp | 保留多余的空格和回车，未设置的按默认样式换行 |
    | pre-line | 仅保留回车，未设置的按默认样式换行           |

    

### text-overflow

- 设置溢出文本的显示方式

- 必须先设置 `white-space: nowarp` 和 `overflow: hidden` 才能生效 

    | 值                             | 效果                 |
    | ------------------------------ | -------------------- |
    | clip                           | 直接修剪             |
    | ellipsis                       | 使用...代替          |
    | string(实验特性，edge暂不支持) | 使用给定的字符串代替 |

    

## flex 布局

### flex属性

- 参考资料：

    - [[详解 flex-grow 与 flex-shrink - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/24372279)]
    - [[flex - CSS（层叠样式表） | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex)]

- `flex` 属性为 `flex-grow` 、 `flex-shrink` 、 `flex-basic` 缩写

- `flex-grow` 指定元素所占空间份数

    - 如果 `flex-grow` 值的和小于1，即每个子元素的值指定为小数，此时基数按 1 计算

    - > 父元素宽度 500px，三个子元素的 width 分别为 100 px，150 px，100px。
        >
        > 于是剩余空间为 150 px
        >
        > 三个元素的 flex-grow 分别是 1，2，3，于是 sum 为 6
        > 则三个元素所得到的多余空间分别是：
        >
        > - 150 * 1 / 6 = 25 px
        > - 150 * 2 / 6 = 50 px
        > - 150 * 3 / 6 = 75 px
        >
        > 三个元素最终的宽度分别为 125 px，200 px，175 px。

    - > 还是上面一个例子，但是三个元素的 flex-grow 分别是 0.1，0.2，0.3，那么计算公式将变成下面这样：
        >
        > - 150 * 0.1 / 1 = 15 px
        > - 150 * 0.2 / 1 = 30 px
        > - 150 * 0.3 / 1 = 45 px
        >
        > 150 px - 15 px - 30 px - 45 px = 60 px，即还有 60 px 没有分配给任何子元素。
        > 三个元素的最终宽度分别为：
        >
        > - 100px + 15 px = 115 px
        > - 150 px + 30 px = 180 px
        > - 100 px + 45 px = 145 px

- `flex-shrink` 指定父元素空间不足时，子元素的收缩系数

    - > 父元素 500 px。三个子元素分别设置为 150 px，200 px，300 px。
        >
        > 三个子元素的 flex-shrink 的值分别为 1，2，3。
        >
        > 首先，计算子元素溢出多少：150 + 200 + 300 - 500 = -150 px。
        >
        > 那这 -150 px 将由三个元素的分别收缩一定的量来弥补。
        >
        > 具体的计算方式为：每个元素收缩的权重为其 flex-shrink 乘以其宽度。
        >
        > 所以总权重为 1 * 150 + 2 * 200 + 3 * 300 = 1450
        >
        > 三个元素分别收缩：
        >
        > - 150 * 1(flex-shrink) * 150(width) / 1450 = -15.5
        > - 150 * 2(flex-shrink) * 200(width) / 1450 = -41.4
        > - 150 * 3(flex-shrink) * 300(width) / 1450 = -93.1
        >
        > 三个元素的最终宽度分别为：
        >
        > - 150 - 15.5 = 134.5
        > - 200 - 41.4 = 158.6
        > - 300 - 93.1 = 206.9

    - 

- `flax-basic` 指定元素布局前的大小

    - 默认值为 `auto` ，此时取`width ` 值，与 `width` 同时存在时，权重高于 `width`

