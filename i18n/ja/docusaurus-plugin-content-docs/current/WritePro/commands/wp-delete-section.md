---
id: wp-delete-section
title: WP DELETE SECTION
slug: /WritePro/commands/wp-delete-section
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE SECTION.Syntax-->**WP DELETE SECTION** ( *section* )<br/> **WP DELETE SECTION** ( *wpDoc* ; *indexNumber* {; *count*} )<!-- END REF-->

<!--REF #_command_.WP DELETE SECTION.Params-->

| 引数          | 型       |   | 説明                  |
| ----------- | ------- | - | ------------------- |
| section     | Object  | → | 4D Write Pro セクション  |
| wpDoc       | Object  | → | 4D Write Pro ドキュメント |
| indexNumber | Integer | → | 削除するセクションのインデックス    |
| count       | Integer | → | 削除するセクションの数         |

<!-- END REF-->

#### 説明

**WP DELETE SECTION** コマンドは<!--REF #_command_.WP DELETE SECTION.Summary-->*section* 引数に渡されたオブジェクトのセクションを削除します。または、*indexNumber* 引数で指定されたセクションから*count* 引数で指定された個数分だけ1つ以上のセクションを削除します。<!-- END REF-->. セクションが削除されると、ヘッダー、フッター、本文の一部、アンカーされた画像、テキストボックス、終了セクションブレーク(セクションブレークまたは継続的なセクションブレークかに関わらず)など、そのセクションに関連づけられていたものも削除されます。

**WP DELETE SECTION** コマンドを使用して全てのセクションを削除しようとした場合、あるいはドキュメントにセクションが1つしか含まれていないような場合にはエラーが発生します。

**WP DELETE SECTION** re-indexes the anchorSection attribute of text boxes and pictures to adjust their anchors to their sections after changes. For example, if a document has four sections and the second section is deleted, sections 3 and 4 will become sections 2 and 3 and text boxes and pictures that were previously anchored to sections 3 and 4 will now be anchored to sections 2 and 3.

:::note

If an image or textbox is anchored to a page (e.g., page 20) and this page no longer exists after a section has been deleted, the image (or textbox) will remain in the document and will reappear on page 20 if this page ever exists again later.

:::

#### 例題

To remove the first section of the document:

```4d

wpDoc:=WP Import document("test.wp")
// remove section 1 only (without error unless there is only one section in the document)
WP DELETE SECTION(wpDoc ; 1) 

```

To remove section 5 of the document:

```4d

wpDoc:=WP Import document("test.wp")
// remove section 5 only
WP DELETE SECTION(wpDoc ; 5)

```

To remove section 5, 6 and 7 of the document:

```4d
 
wpDoc:=WP Import document("test.wp")
WP DELETE SECTION(wpDoc ; 5 ; 3 )

```

To remove all sections starting from 5:

```4d
 
wpDoc:=WP Import document("test.wp")
// remove all sections starting at section 5 (without error unless section 5 does not exist)
WP DELETE SECTION(wpDoc ; 5 ; MAXLONG )

```

To retrieve and remove section 5:

```4d
 
wpDoc:=WP Import document("test.wp")
// get section 5
$section:=WP Get section(wpDoc, 5)
// remove $section
WP DELETE SECTION($section)

```

#### 参照

[WP Get section](../commands-legacy/wp-get-section.md)\
[WP RESET ATTRIBUTES](wp-reset-attributes.md)
