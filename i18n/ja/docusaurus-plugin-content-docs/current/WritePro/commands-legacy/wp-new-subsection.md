---
id: wp-new-subsection
title: WP New subsection
slug: /WritePro/commands/wp-new-subsection
displayed_sidebar: docs
---

<!--REF #_command_.WP New subsection.Syntax-->**WP New subsection** ( *wpSection* ; *subSectionType* ) -> 戻り値<!-- END REF-->
<!--REF #_command_.WP New subsection.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| wpSection | Object | &#8594;  | 4D Write Pro セクション |
| subSectionType | Integer | &#8594;  | サブセクションのタイプ(wk first page, wk left page, or wk right page) |
| 戻り値 | Object | &#8592; | 新しいサブセクション |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WP New subsection.Summary-->**WP New subsection** コマンドは、*wpSection* 引数で指定した4D Write Pro セクション内に*subSectionType* 引数で指定した型の新しいサブセクションを作成し、それを返します。<!-- END REF-->

*wpSection* 引数には、新しいサブセクションを作成したいセクションを渡します。このセクションは[WP Get sections](wp-get-sections.md) あるいは [WP Get section](wp-get-section.md) コマンドを使用することで取得できます。

*subSectionType* 引数は作成するサブセクションを指定します。以下の定数のいずれかを渡すことができます:

| 定数            | 型    | 値 |
| ------------- | ---- | - |
| wk first page | 倍長整数 | 1 |
| wk left page  | 倍長整数 | 2 |
| wk right page | 倍長整数 | 3 |

**注:** 左ページあるいは右ページサブセクションをを作成すると、それの反対側のサブセクションも自動的に作成されます。例えば、左ページサブセクションを作成すると、右ページサブセクションも自動的に定義されます。

*subSectionType* のサブセクションがすでに存在する場合、エラーが返されます。

#### 例題 

左ページと右ページのサブセクションを作成したい場合を考えます:

```4d
 var $section;$subsection : Object
  // 最初のセクションを取得
 $section:=WP Get section(wpDoc;1)
  // 左ページのセクションを作成 - 右セクションも同時に作成されます。
 $subsection:=WP New subsection($section;wk left page)
```

#### 参照 

[WP DELETE SUBSECTION](../commands/wp-delete-subsection.md)  
[WP Get subsection](wp-get-subsection.md)  