---
id: get-printable-area
title: GET PRINTABLE AREA
slug: /commands/get-printable-area
displayed_sidebar: docs
---

<!--REF #_command_.GET PRINTABLE AREA.Syntax-->**GET PRINTABLE AREA** ( *height* {; *width*} )<!-- END REF-->
<!--REF #_command_.GET PRINTABLE AREA.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| height | Integer | &#8592; | 印刷可能領域の高さ |
| width | Integer | &#8592; | 印刷可能領域の幅 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.GET PRINTABLE AREA.Summary-->GET PRINTABLE AREA コマンドは、印刷可能領域のサイズを引数*height*および*width*へピクセル単位で返します。<!-- END REF-->このサイズは、現在の印刷設定、用紙方向等によって異なります。

返されるサイズは、各ページごとに変わることはありません（例えばページブレークの後）。

このコマンドを[Get printed height](get-printed-height.md "Get printed height") コマンドと一緒に使用すると、印刷可能なピクセル数の認識やページ上のオブジェクトのセンタリングを行うことができるので便利です。

**Note:** 印刷管理ならびに4D用語に関する詳細は、[GET PRINTABLE MARGIN](get-printable-margin.md "GET PRINTABLE MARGIN")コマンドの説明を参照してください。

ページの全体のサイズを知るには:

* このコマンドで返された値に[GET PRINTABLE MARGIN](get-printable-margin.md "GET PRINTABLE MARGIN")コマンドで取得したマージンを加算します。
* または、次の構文を使用します:

```4d
 SET PRINTABLE MARGIN(0;0;0;0) // 用紙マージンを設定
 GET PRINTABLE AREA(hPaper;wPaper) // 用紙サイズ
```

#### 参照 

[GET PRINTABLE MARGIN](get-printable-margin.md)  
[Print form](print-form.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 703 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


