---
id: printing-page
title: Printing page
slug: /commands/printing-page
displayed_sidebar: docs
---

<!--REF #_command_.Printing page.Syntax-->**Printing page**  : Integer<!-- END REF-->
<!--REF #_command_.Printing page.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Integer | &#8592; | 現在印刷中のページのページ番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Printing page.Summary-->Printing pageは、印刷中のページ番号を返します。<!-- END REF-->このコマンドは、[PRINT SELECTION](print-selection.md "PRINT SELECTION")コマンドまたはデザインモードのプリント...メニューの選択によって印刷する場合にのみ使用することができます。

#### 例題 

以下の例は、両面印刷フォーマットのレポートにページ番号を設定します。ページ番号の位置を変更するために、フォームはページ番号を表示する変数を2つ持っています。変数 (*vLeftPageNum*) は、偶数のページ番号を印刷します。変数 (*vRightPageNum*) は、奇数のページ番号を印刷します。この例は、偶数ページを判定し適切な変数に値を代入します:

```4d
 Case of
    :(Form event code=On Printing Footer) //v17 以前ではForm event を使用すること
       If((Printing page% 2)=0) // モジューロが0, 偶数ページ
          vLeftPageNum:=String(Printing page) // 左ページ番号を設定
          vRightPageNum:="" // 右ページ番号をクリア
       Else // 奇数ページ
          vLeftPageNum:="" // 左ページ番号をクリア
          vRightPageNum:=String(Printing page) // 右ページ番号を設定
       End if
 End case
```

#### 参照 

[PRINT SELECTION](print-selection.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 275 |
| スレッドセーフである | &cross; |


