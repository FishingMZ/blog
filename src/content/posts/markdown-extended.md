---
title: Markdown 扩展功能
published: 2024-05-01
updated: 2024-11-29
description: '了解 Mizuki 中更多 Markdown 功能'
image: ''
tags: [Demo, Example, Markdown, Mizuki]
category: 'Examples'
draft: false 
---

## GitHub 仓库卡片
你可以添加指向 GitHub 仓库的动态卡片，在页面加载时，仓库信息会通过 GitHub API 获取。

::github{repo="matsuzaka-yuki/Mizuki"}

使用以下代码创建 GitHub 仓库卡片： `::github{repo="matsuzaka-yuki/Mizuki"}`.

```markdown
::github{repo="matsuzaka-yuki/Mizuki"}
```

## 提示框

支持以下类型的提示框：`note`（注意）、`tip`（提示）、`important`（重要）、`warning`（警告）、`caution`（警告）

:::note
突出显示用户即使在浏览时也应考虑的信息。
:::

:::tip
帮助用户更成功的可选信息。
:::

:::important
用户成功所必需的关键信息。
:::

:::warning
由于潜在风险而需要用户立即关注的关键内容。
:::

:::caution
某个行为的负面潜在后果。
:::

### 基本语法

```markdown
:::note
突出显示用户即使在浏览时也应考虑的信息。
:::

:::tip
帮助用户更成功的可选信息。
:::
```

### 自定义标题

提示框的标题可以自定义。

:::note[我的自定义标题]
这是一个带有自定义标题的提示框。
:::

```markdown
:::note[我的自定义标题]
这是一个带有自定义标题的提示框。
:::
```

### GitHub 语法

> [!TIP]
> [GitHub 语法](https://github.com/orgs/community/discussions/16925) 也支持

```
> [!NOTE]
> GitHub 语法同样受支持。

> [!TIP]
> GitHub 语法同样受支持。
```

### 隐藏内容

你可以为文本添加隐藏内容。文本同样支持 **Markdown** 语法。

内容 :spoiler[被隐藏了 **嘿嘿**]！

```markdown
内容 :spoiler[被隐藏了 **嘿嘿**]！
