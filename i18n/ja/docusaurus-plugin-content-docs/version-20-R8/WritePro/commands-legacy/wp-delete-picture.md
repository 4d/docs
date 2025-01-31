---
id: wp-delete-picture
title: WP DELETE PICTURE
slug: /WritePro/commands/wp-delete-picture
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE PICTURE.Syntax-->**WP DELETE PICTURE** ( *imgObj* )<!-- END REF-->
<!--REF #_command_.WP DELETE PICTURE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| imgObj | Object | &#8594;  | 画像オブジェクト(インラインまたはアンカー) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WP DELETE PICTURE.Summary-->**WP DELETE PICTURE** コマンドは、*imgObj* 引数によって定義された画像を削除します。<!-- END REF-->

画像が存在しない場合、コマンドは何もしません。

#### 例題 

画像を、そのID を使用して削除したい場合を考えます:

```4d
 var $myPicture : Object
 
  // 画像を取得
 $myPicture:=WP Get element by ID(myDoc;"Logo")
 
  // この画像を削除
 WP DELETE PICTURE($myPicture)
```

#### 参照 

[WP Add picture](../commands/wp-add-picture.md)  
*ピクチャーを管理する*  