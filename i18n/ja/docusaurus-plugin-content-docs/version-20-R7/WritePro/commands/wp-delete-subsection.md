---
id: wp-delete-subsection
title: WP DELETE SUBSECTION
slug: /WritePro/commands/wp-delete-subsection
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE SUBSECTION.Syntax-->**WP DELETE SUBSECTION** ( *wpSection* ; *subSectionType* )<br/>**WP DELETE SUBSECTION** ( *subSection* )<!-- END REF-->

<!--REF #_command_.WP DELETE SUBSECTION.Params-->

| 引数             | 型       |   | 説明                                                                           |
| -------------- | ------- | - | ---------------------------------------------------------------------------- |
| wpSection      | Object  | → | 4D Write Pro セクション                                                           |
| subSectionType | Integer | → | サブセクションのタイプ(wk first page、wk left page、または wk right page) |
| subSection     | Object  | → | 4D Write Pro サブセクション                                                         |

<!-- END REF-->

#### 説明

**WP DELETE SUBSECTION** コマンドは<!--REF #_command_.WP DELETE SUBSECTION.Summary-->引数で指定した4D Write Pro セクションから、引数で指定したサブセクション要素を削除します。または*subSection* 引数で指定したサブセクションを直接削除します。<!-- END REF--> サブセクション要素にはヘッダー、フッター、カラム、アンカーされた画像などが含まれます。 ドキュメントの本文はそのまま残されるという点に注意してください。

*wpSection* 引数には、サブセクション要素を削除したいセクションを渡します。 セクションは、[WP Get sections](../commands-legacy/wp-get-sections.md) または [WP Get section](../commands-legacy/wp-get-section.md) コマンドを使用することで取得できます。

*subSectionType* 引数は削除するサブセクションを指定します。 以下の定数のいずれかを渡すことができます:

| 定数            | 型       | 値 |
| ------------- | ------- | - |
| wk first page | Integer | 1 |
| wk left page  | Integer | 2 |
| wk right page | Integer | 3 |

:::note

左ページまたは右ページサブセクションを削除すると、反対側のサブセクションも自動的に削除されます。 例えば、右ページサブセクションを削除した場合、左ページサブセクションも自動的に削除されます。

:::

*subSectionType* 引数で指定したタイプのサブセクションが存在しない場合、コマンドは何もしません(エラーは生成されません)。

:::note

サブセクションが削除されると、ヘッダーとフッターに加えアンカーされた画像とテキストボックスも削除されますが、本文はそのまま残されます。

:::

#### 例題 1

最初のセクションの最初のページのサブセクションを削除したい場合を考えます:

```4d
 var $section;$subsection : Object
  // 最初のセクションを取得
 $section:=WP Get section(wpDoc;1)
  // サブセクションを削除
 WP DELETE SUBSECTION($section;wk first page)
```

#### 例題 2

セクション3 の右ページサブセクションを削除したい場合を考えます:

```4d

$subSection:=WP Get subsection(WP Get section($document;3);wk right page)
 WP DELETE SUBSECTION($subSection)
 
```

#### 参照

[WP Get subsection](../commands-legacy/wp-get-subsection.md)\
[WP New subsection](../commands-legacy/wp-new-subsection.md)
