---
title: Markdown 教程
published: 2025-01-20
pinned: false
description: 一个简单的 Markdown 博客文章示例。
tags: [Markdown, 博客]
category: 示例
licenseName: "未授权"
author: emn178
sourceLink: "https://github.com/emn178/markdown"
draft: false
---

# Markdown 教程

一个 Markdown 示例，展示如何编写 Markdown 文件。本文档集成了核心语法和扩展（GFM）。

- [块级元素](#块级元素)
  - [段落和换行](#段落和换行)
  - [标题](#标题)
  - [区块引用](#区块引用)
  - [列表](#列表)
  - [代码块](#代码块)
  - [水平分隔线](#水平分隔线)
  - [表格](#表格)
- [行内元素](#行内元素)
  - [链接](#链接)
  - [强调](#强调)
  - [代码](#代码)
  - [图片](#图片)
  - [删除线](#删除线)
- [其他](#其他)
  - [自动链接](#自动链接)
  - [反斜杠转义](#反斜杠转义)
- [行内 HTML](#行内HTML)

## 块级元素

### 段落和换行

#### 段落

HTML 标签：`<p>`

一个或多个空行。（空行是指只包含**空格**或**制表符**的行。）

代码：

    这将是在行内的。

    这是第二个段落。

预览：

---

这将是在行内的。

这是第二个段落。

---

#### 换行

HTML 标签：`<br />`

在行尾添加**两个或更多空格**。

代码：

    这将不会是在行内的。

预览：

---

这将不会是在行内的。  
（这里行尾有两个空格，所以换行）

---

### 标题

Markdown 支持两种标题样式，Setext 和 atx。

#### Setext

HTML 标签：`<h1>`，`<h2>`

使用**等号（=）**作为 `<h1>` 的“下划线”，**连字符（-）**作为 `<h2>` 的“下划线”，数量不限。

代码：

    这是一个 H1
    =============
    这是一个 H2
    -------------

预览：

---

# 这是一个 H1

## 这是一个 H2

---

#### atx

HTML 标签：`<h1>` 至 `<h6>`

在行首使用 1 到 6 个**井号（#）**，分别对应 `<h1>` 至 `<h6>`。

代码：

    # 这是一个 H1
    ## 这是一个 H2
    ###### 这是一个 H6

预览：

---

# 这是一个 H1

## 这是一个 H2

###### 这是一个 H6

---

你也可以选择“闭合” atx 样式的标题。闭合的井号**不需要与**开头的井号数量匹配。

代码：

    # 这是一个 H1 #
    ## 这是一个 H2 ##
    ### 这是一个 H3 ######

预览：

---

# 这是一个 H1

## 这是一个 H2

### 这是一个 H3

---

### 区块引用

HTML 标签：`<blockquote>`

Markdown 使用电子邮件风格的 **>** 字符进行区块引用。如果你将文本硬换行并在每行前加上 `>`，效果最好。

代码：

    > 这是一个包含两个段落的区块引用。Lorem ipsum dolor sit amet,
    > consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
    > Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
    >
    > Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
    > id sem consectetuer libero luctus adipiscing.

预览：

---

> 这是一个包含两个段落的区块引用。Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
>
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.

---

Markdown 允许你偷懒，只对硬换行段落的第一行放 `>`。

代码：

    > 这是一个包含两个段落的区块引用。Lorem ipsum dolor sit amet,
    consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
    Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

    > Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
    id sem consectetuer libero luctus adipiscing.

预览：

---

> 这是一个包含两个段落的区块引用。Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.

---

区块引用可以嵌套（即区块引用中的区块引用），只需添加更多层级的 `>`。

代码：

    > 这是第一级引用。
    >
    > > 这是嵌套的区块引用。
    >
    > 回到第一级。

预览：

---

> 这是第一级引用。
>
> > 这是嵌套的区块引用。
>
> 回到第一级。

---

区块引用可以包含其他 Markdown 元素，包括标题、列表和代码块。

代码：

    > ## 这是一个标题。
    >
    > 1.   这是第一个列表项。
    > 2.   这是第二个列表项。
    >
    > 这里是一些示例代码：
    >
    >     return shell_exec("echo $input | $markdown_script");

预览：

---

> ## 这是一个标题。
>
> 1.  这是第一个列表项。
> 2.  这是第二个列表项。
>
> 这里是一些示例代码：
>
>     return shell_exec("echo $input | $markdown_script");

---

### 列表

Markdown 支持有序（编号）和无序（项目符号）列表。

#### 无序

HTML 标签：`<ul>`

无序列表使用**星号（\*）**、**加号（+）**和**连字符（-）**。

代码：

    *   红色
    *   绿色
    *   蓝色

预览：

---

- 红色
- 绿色
- 蓝色

---

等价于：

代码：

    +   红色
    +   绿色
    +   蓝色

以及：

代码：

    -   红色
    -   绿色
    -   蓝色

#### 有序

HTML 标签：`<ol>`

有序列表使用数字后跟句点：

代码：

    1.  Bird
    2.  McHale
    3.  Parish

预览：

---

1.  Bird
2.  McHale
3.  Parish

---

有时可能会意外触发有序列表，例如写成这样：

代码：

    1986. 多么棒的赛季。

预览：

---

1986. 多么棒的赛季。

---

你可以**使用反斜杠（\）转义**句点：

代码：

    1986\. 多么棒的赛季。

预览：

---

1986\. 多么棒的赛季。

---

#### 缩进

##### 区块引用

要在列表项中放入区块引用，区块引用的 `>` 分隔符需要缩进：

代码：

    *   一个包含区块引用的列表项：

        > 这是一个区块引用
        > 在列表项内部。

预览：

---

- 一个包含区块引用的列表项：

  > 这是一个区块引用
  > 在列表项内部。

---

##### 代码块

要在列表项中放入代码块，代码块需要缩进两次 —— **8 个空格**或**两个制表符**：

代码：

    *   一个包含代码块的列表项：

            <代码放在这里>

预览：

---

- 一个包含代码块的列表项：

      <代码放在这里>

---

##### 嵌套列表

代码：

    * A
      * A1
      * A2
    * B
    * C

预览：

---

- A
  - A1
  - A2
- B
- C

---

### 代码块

HTML 标签：`<pre>`

将代码块的每一行缩进至少 **4 个空格**或 **1 个制表符**。

代码：

    这是一个普通段落：

        这是一个代码块。

预览：

---

这是一个普通段落：

    这是一个代码块。

---

代码块会持续到遇到未缩进的行（或文章结束）。

在代码块内部，**和号（&）**以及尖**括号（< 和 >）**会自动转换为 HTML 实体。

代码：

        <div class="footer">
            &copy; 2004 Foo Corporation
        </div>

预览：

---

    <div class="footer">
        &copy; 2004 Foo Corporation
    </div>

---

以下章节“围栏代码块”和“语法高亮”是扩展功能，你可以使用另一种方式来编写代码块。

#### 围栏代码块

只需用 ` ``` ` 包裹你的代码（如下所示），就不需要缩进四个空格了。

代码：

    这里是一个示例：

    ```
    function test() {
      console.log("注意此函数前的空行？");
    }
    ```

预览：

---

这里是一个示例：

```
function test() {
  console.log("注意此函数前的空行？");
}
```

---

#### 语法高亮

在你的围栏代码块中，添加一个可选的语言标识符，我们会通过语法高亮进行处理（[支持的语言列表](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml)）。

代码：

    ```ruby
    require 'redcarpet'
    markdown = Redcarpet.new("Hello World!")
    puts markdown.to_html
    ```

预览：

---

```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```

---

### 水平分隔线

HTML 标签：`<hr />`
在一行中放置**三个或更多的连字符（-）、星号（\*）或下划线（\_）**。你可以在连字符或星号之间使用空格。

代码：

    * * *
    ***
    *****
    - - -
    ---------------------------------------
    ___

预览：

---

---

---

---

---

---

---

---

### 表格

HTML 标签：`<table>`

这是一个扩展功能。

使用**竖线（|）**分隔列，**连字符（-）**分隔表头，并使用**冒号（:）**表示对齐方式。

外部的**竖线（|）**和对齐方式是可选的。每个单元格至少要有 **3 个分隔符** 用于分隔表头。

代码：

```
| 左对齐 | 居中对齐 | 右对齐 |
|:-------|:--------:|-------:|
| aaa    | bbb      | ccc    |
| ddd    | eee      | fff    |

 A | B
---|---
123|456


A |B
--|--
12|45
```

预览：

---

| 左对齐 | 居中对齐 | 右对齐 |
| :----- | :------: | -----: |
| aaa    |   bbb    |    ccc |
| ddd    |   eee    |    fff |

| A   | B   |
| --- | --- |
| 123 | 456 |

| A   | B   |
| --- | --- |
| 12  | 45  |

---

## 行内元素

### 链接

HTML 标签：`<a>`

Markdown 支持两种链接样式：行内式和参考式。

#### 行内式

行内链接格式如下：`[链接文本](URL "标题")`

标题是可选的。

代码：

    这是一个 [示例](http://example.com/ "标题") 行内链接。

    [此链接](http://example.net/) 没有标题属性。

预览：

---

这是一个 [示例](http://example.com/ "标题") 行内链接。

[此链接](http://example.net/) 没有标题属性。

---

如果引用同一服务器上的本地资源，可以使用相对路径：

代码：

    详情请参阅我的 [关于](/about/) 页面。

预览：

---

详情请参阅我的 [关于](/about/) 页面。

---

#### 参考式

你可以预先定义链接引用。格式如下：`[id]: URL "标题"`

标题也是可选的。然后引用链接，格式如下：`[链接文本][id]`

代码：

    [id]: http://example.com/  "此处为可选标题"
    这是一个 [示例][id] 参考式链接。

预览：

---

[id]: http://example.com/ "此处为可选标题"

这是一个 [示例][id] 参考式链接。

---

即：

- 方括号中包含链接标识符（**不区分大小写**，可以从左边缘可选地缩进最多三个空格）；
- 后跟一个冒号；
- 后跟一个或多个空格（或制表符）；
- 后跟链接的 URL；
- 链接 URL 可以选择用尖括号包围；
- 可选地后跟链接的标题属性，用双引号、单引号或圆括号括起来。

以下三个链接定义是等价的：

代码：

    [foo]: http://example.com/  "可选标题"
    [foo]: http://example.com/  '可选标题'
    [foo]: http://example.com/  (可选标题)
    [foo]: <http://example.com/>  "可选标题"

使用空方括号时，链接文本本身用作名称。

代码：

    [Google]: http://google.com/
    [Google][]

预览：

---

[Google]: http://google.com/

[Google][]

---

### 强调

HTML 标签：`<em>`，`<strong>`

Markdown 将**星号（\*）**和**下划线（\_）**视为强调的指示符。**单个分隔符**表示 `<em>`；**双个分隔符**表示 `<strong>`。

代码：

    *单个星号*

    _单个下划线_

    **双个星号**

    __双个下划线__

预览：

---

*单个星号*

_单个下划线_

**双个星号**

__双个下划线__

---

但如果在 \* 或 \_ 周围放置空格，它们将被视为字面星号或下划线。

你也可以使用反斜杠转义：

代码：

    \*这段文字被字面星号包围\*

预览：

---

\*这段文字被字面星号包围\*

---

### 代码

HTML 标签：`<code>`

使用**反引号（`）**包裹。

代码：

    使用 `printf()` 函数。

预览：

---

使用 `printf()` 函数。

---

要在代码区间中包含字面反引号，可以使用**多个反引号**作为开始和结束分隔符：

代码：

    ``这里有一个字面反引号（`）。``

预览：

---

``这里有一个字面反引号（`）。``

---

围绕代码区间的反引号分隔符可以包含空格 —— 开始后一个，结束前一个。这允许你将字面反引号放在代码区间的开头或结尾：

代码：

    代码区间中的单个反引号：`` ` ``

    代码区间中以反引号分隔的字符串：`` `foo` ``

预览：

---

代码区间中的单个反引号：`` ` ``

代码区间中以反引号分隔的字符串：`` `foo` ``

---

### 图片

HTML 标签：`<img />`

Markdown 使用一种旨在类似链接语法的图片语法，支持两种样式：行内式和参考式。

#### 行内式

行内图片语法如下：`![替代文本](URL "标题")`

标题是可选的。

代码：

    ![替代文本](/path/to/img.jpg)

    ![替代文本](/path/to/img.jpg "可选标题")

预览：

---

![替代文本](https://s2.loli.net/2024/08/20/5fszgXeOxmL3Wdv.webp)

![替代文本](https://s2.loli.net/2024/08/20/5fszgXeOxmL3Wdv.webp "可选标题")

---

即：

- 一个感叹号：!；
- 后跟一组方括号，包含图片的替代文本；
- 后跟一组圆括号，包含图片的 URL 或路径，以及可选的用双引号或单引号括起来的标题属性。

#### 参考式

参考式图片语法如下：`![替代文本][id]`

代码：

    [img id]: https://s2.loli.net/2024/08/20/5fszgXeOxmL3Wdv.webp  "可选标题属性"
    ![替代文本][img id]

预览：

---

[img id]: https://s2.loli.net/2024/08/20/5fszgXeOxmL3Wdv.webp "可选标题属性"

![替代文本][img id]

---

### 删除线

HTML 标签：`<del>`

这是一个扩展功能。

GFM 添加了删除线文本的语法。

代码：

```
~~错误文本。~~
```

预览：

---

~~错误文本。~~

---

## 其他

### 自动链接

Markdown 支持一种快捷方式，用于创建 URL 和电子邮件地址的“自动”链接：只需用尖括号将 URL 或电子邮件地址包围起来。

代码：

    <http://example.com/>

    <address@example.com>

预览：

---

<http://example.com/>

<address@example.com>

---

GFM 会自动链接标准 URL。

代码：

```
https://github.com/emn178/markdown
```

预览：

---

https://github.com/emn178/markdown

---

### 反斜杠转义

Markdown 允许你使用反斜杠转义来生成原本在 Markdown 格式化语法中具有特殊含义的字面字符。

代码：

    \*字面星号\*

预览：

---

\*字面星号\*

---

Markdown 为以下字符提供反斜杠转义：

代码：

    \   反斜杠
    `   反引号
    *   星号
    _   下划线
    {}  花括号
    []  方括号
    ()  圆括号
    #   井号
    +   加号
    -   减号（连字符）
    .   句点
    !   感叹号

## 行内 HTML

对于 Markdown 语法未涵盖的任何标记，你可以直接使用 HTML 本身。无需添加前缀或分隔符来表明你正在从 Markdown 切换到 HTML；只需使用标签即可。

代码：

    这是一个普通段落。

    <table>
        <tr>
            <td>Foo</td>
        </tr>
    </table>

    这是另一个普通段落。

预览：

---

这是一个普通段落。

<table>
    <tr>
        <td>Foo</td>
    </tr>
</table>

这是另一个普通段落。

---

请注意，Markdown 格式化语法**在块级 HTML 标签内部不会处理**。

与块级 HTML 标签不同，Markdown 语法**在行内级标签内部会被处理**。

代码：

    <span>**可以处理**</span>

    <div>
        **不能处理**
    </div>

预览：

---

<span>**可以处理**</span>

<div>
  **不能处理**
</div>

```
