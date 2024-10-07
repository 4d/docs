---
id: wp-delete-subsection
title: WP DELETE SUBSECTION
slug: /WritePro/commands/wp-delete-subsection
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE SUBSECTION.Syntax-->**WP DELETE SUBSECTION** ( *wpSection* ; *subSectionType* )<!-- END REF-->
<!--REF #_command_.WP DELETE SUBSECTION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| wpSection | オブジェクト | &#x1F852; | 4D Write Pro のセクション |
| subSectionType | 倍長整数 | &#x1F852; | サブセクションのタイプ(wk first page, wk left page, または wk right page) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WP DELETE SUBSECTION.Summary-->**WP DELETE SUBSECTION** コマンドは、*wpSection* 引数で指定した4D Write Pro セクションから、*subSectionType* タイプのサブセクションを削除します。<!-- END REF-->

*wpSection* 引数には、サブセクションを削除したいセクションを渡します。このセクションは、[WP Get sections](wp-get-sections.md) または [WP Get section](wp-get-section.md) コマンドを使用して取得することができます。

*subSectionType* 引数は削除するサブセクションを指定します。以下の定数のいづれか一つを渡すことができます:

| 定数            | 型    | 値 |
| ------------- | ---- | - |
| wk first page | 倍長整数 | 1 |
| wk left page  | 倍長整数 | 2 |
| wk right page | 倍長整数 | 3 |

**注:** 左ページまたは右ページのサブセクションを削除すると、自動的にその反対側のサブセクションも削除されます。例えば、右ページサブセクションを削除すると、左ページサブセクションも自動的に削除されます。

*subSectionType* 引数で指定したタイプのサブセクションが存在しない場合、コマンドは何もしません(エラーは生成されません)。

#### 例題 

最初のセクションの最初のページのサブセクションを削除したい場合を考えます:

```4d
 var $section;$subsection : Object
  // 最初のセクションを取得
 $section:=WP Get section(wpDoc;1)
  // 最初のページのサブセクションを削除
 WP DELETE SUBSECTION($section;wk first page)
```

#### 参照 

[WP Get subsection](wp-get-subsection.md)  
[WP New subsection](wp-new-subsection.md)  