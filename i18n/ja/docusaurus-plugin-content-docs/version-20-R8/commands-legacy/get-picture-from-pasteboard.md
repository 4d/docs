---
id: get-picture-from-pasteboard
title: GET PICTURE FROM PASTEBOARD
slug: /commands/get-picture-from-pasteboard
displayed_sidebar: docs
---

<!--REF #_command_.GET PICTURE FROM PASTEBOARD.Syntax-->**GET PICTURE FROM PASTEBOARD** ( *picture* )<!-- END REF-->
<!--REF #_command_.GET PICTURE FROM PASTEBOARD.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| picture | Picture | &#8592; | ペーストボードから取り出したピクチャ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.GET PICTURE FROM PASTEBOARD.Summary-->**GET PICTURE FROM PASTEBOARD** は、ペーストボード内に存在するピクチャーを*picture*フィールドや変数に返します。<!-- END REF-->

**注:** コピー/ペースト操作では、ペーストボードはクリップボードと同じです。

#### 例題 

以下のボタンオブジェクトメソッドは、ペーストボード中にピクチャ (jpeg または gif フォーマット)があれば、フィールド \[Employees\]Photoに代入します:

```4d
 If(Pasteboard data size("com.4d.private.picuture.jpeg")>0)|(Pasteboard data size("com.4d.private.picture.gif")>0))
    GET PICTURE FROM PASTEBOARD([Employees]Photo)
 Else
    ALERT("The pasteboard does not contain any pictures.")
 End if
```

#### システム変数およびセット 

ピクチャが正しく取り出されるとOKに1が、そうでなければ0が設定されます。

#### 参照 

[GET PASTEBOARD DATA](get-pasteboard-data.md)  
[Get text from pasteboard](get-text-from-pasteboard.md)  
[Pasteboard data size](pasteboard-data-size.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 522 |
| スレッドセーフである | &cross; |
| システム変数を更新する | OK |


