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

**WP DELETE SECTION** は、テキストボックスとピクチャーの属性を再インデックスし、変更後のセクションへと合致するようにアンカーを調整します。 例えばドキュメントに四つのセクションがあり、2番目のセクションが削除された場合、セクション3と4はそれぞれセクション2と3となり、実行前にはセクション3と4にアンカーされていたテキストボックスおよびピクチャーはセクション2と3にアンカーされます。

:::note

画像またはテキストボックスがページ(例:20ページ目)へとアンカーされていて、セクションが削除された後にそのページが残っていない場合には、画像(またはテキストボックス)はドキュメント内に残り続け、後に20ページ目がまたあらわれた場合には、その20ページ目に画像(またはテキストボックス)が再度発生します。

:::

#### 例題

ドキュメントの最初のセクションを削除したい場合を考えます:

```4d

wpDoc:=WP Import document("test.wp")
// セクション1のみを削除する(ドキュメント内にセクションが1つしかない場合を除きエラーは発生しない)
WP DELETE SECTION(wpDoc ; 1) 

```

ドキュメント内のセクション5を削除したい場合を考えます:

```4d

wpDoc:=WP Import document("test.wp")
// セクション 5のみを削除します
WP DELETE SECTION(wpDoc ; 5)

```

ドキュメント内のセクション5、6、7を削除したい場合を考えます:

```4d
 
wpDoc:=WP Import document("test.wp")
WP DELETE SECTION(wpDoc ; 5 ; 3 )

```

セクション5以降の全てのセクションを削除したい場合を考えます:

```4d
 
wpDoc:=WP Import document("test.wp")
// セクション5 以降の全てのセクションを削除する(セクション5 が存在しない場合を除き、エラーは発生しない)
WP DELETE SECTION(wpDoc ; 5 ; MAXLONG )

```

セクション5を取得して削除したい場合を考えます:

```4d
 
wpDoc:=WP Import document("test.wp")
// セクション5 を取得
$section:=WP Get section(wpDoc, 5)
// $section を削除
WP DELETE SECTION($section)

```

#### 参照

[WP Get section](../commands-legacy/wp-get-section.md)\
[WP RESET ATTRIBUTES](wp-reset-attributes.md)
