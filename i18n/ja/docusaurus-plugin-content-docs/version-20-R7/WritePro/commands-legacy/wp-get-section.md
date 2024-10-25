---
id: wp-get-section
title: WP Get section
slug: /WritePro/commands/wp-get-section
displayed_sidebar: docs
---

<!--REF #_command_.WP Get section.Syntax-->**WP Get section** ( *targetObj* ) | (*wpDoc* ; *sectionIndex* ) -> 戻り値<!-- END REF-->
<!--REF #_command_.WP Get section.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | レンジまたは要素の参照 |
| wpDoc | Object | &#8594;  | 4D Write Pro ドキュメント |
| sectionIndex | Integer | &#8594;  | セクションのインデックス |
| 戻り値 | Object | &#8592; | 4D Write Pro セクション |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WP Get section.Summary-->**WP Get section** コマンドは、*targetObj* 引数のレンジと交差する最初のセクションまたは要素、あるいは*wpDoc* 引数のドキュメント内で*sectionIndex* 引数で指定されたセクションを返します。<!-- END REF-->

* 第1シンタックス(*targetObj* 引数)を使用する場合、コマンドはレンジまたは要素と交差する最初のセクションを返します。*targetObj* 引数には以下のものを渡すことができます:  
   * レンジ  
   * 要素(表 / 行 / 段落 / 本文 / テキストボックス / ヘッダー / フッター )。サブセクションあるいはアンカーされたピクチャーを渡すことはできません(その場合エラーが返されます)。  
レンジまたは要素がヘッダーまたはフッターに所属する場合、**WP Get section** はヘッダーあるいはフッターが付属するセクションを返します。レンジまたは要素がテキストボックスであるか、テキストボックスに所属している場合、**WP Get section** は常に最初のセクションを返します(ただしテキストボックスがセクションにアンカーされている場合を除く、その場合はセクションが返されます)。
* 第2シンタックス(*wpDoc* 引数)を使用する場合、コマンドは*sectionIndex* 引数のセクションに対応するセクションを返します(*sectionIndex* は1以上の値でなければなりません)。  
*sectionIndex* 指定した引数に対して定義されたセクションがなかった場合、コマンドは未定義のオブジェクトを返します(エラーは返されません)。

**注:** セクションあるはレンジからサブセクションを取得したい場合には、[WP Get subsection](wp-get-subsection.md) コマンドを使用してください。

#### 例題 

最初のセクションを取得したい場合を考えます:

```4d
 var $section : Object
  // 最初のセクションの参照を取得
 $section:=WP Get section(wpDoc;1)
```

#### 参照 

[WP Get sections](wp-get-sections.md)  
[WP Get subsection](wp-get-subsection.md)  