---
id: qr-set-header-and-footer
title: QR SET HEADER AND FOOTER
slug: /commands/qr-set-header-and-footer
displayed_sidebar: docs
---

<!--REF #_command_.QR SET HEADER AND FOOTER.Syntax-->**QR SET HEADER AND FOOTER** ( *area* ; *selector* ; *leftTitle* ; *centerTitle* ; *rightTitle* ; *height* {; *picture* {; *pictAlignment*}} )<!-- END REF-->
<!--REF #_command_.QR SET HEADER AND FOOTER.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | エリア参照 |
| selector | Integer | &#8594;  | 1 = ヘッダ, 2 = フッタ |
| leftTitle | Text | &#8594;  | 左側に表示されるテキスト |
| centerTitle | Text | &#8594;  | 中央に表示されるテキスト |
| rightTitle | Text | &#8594;  | 右側に表示されるテキスト |
| height | Integer | &#8594;  | ヘッダまたはフッタの高さ |
| picture | Picture | &#8594;  | 表示するピクチャ |
| pictAlignment | Integer | &#8594;  | ピクチャの整列属性 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.QR SET HEADER AND FOOTER.Summary-->QR SET HEADER AND FOOTER コマンドを使用し、ヘッダまたはフッタの内容とサイズを設定することができます。<!-- END REF-->

*selector*を使用して、ヘッダまたはフッタを選択します:

* *selector*に1を指定すると、ヘッダ情報を設定できます。
* *selector*に2を指定すると、フッタ情報を設定できます。

*leftTitle*, *centerTitle* および *rightTitle*にはそれぞれ、左側、中央、右側にあるヘッダまたはフッタの値を指定します。

*height*には、そのレポートに対して選択した単位で表わされたヘッダまたはフッタの高さを指定します。

*picture*には、ヘッダまたはフッタに表示されるピクチャを指定します。

*pictAlignment*には、*picture*に渡されたピクチャの整列属性を指定します。

* *pictAlignment*が1の場合、そのピクチャは左揃えです。
* *pictAlignment*が2の場合、そのピクチャは中央揃えです。
* *pictAlignment*が3の場合、そのピクチャは右揃えです。

無効な*area*番号を渡した場合、エラー番号-9850が生成されます。  
無効な*selector*引数を渡した場合、エラー番号-9852が生成されます。

#### 例題 

次のコードは、MyAreaのクイックレポートのヘッダタイトルとして“Center title”を設定し、ヘッダの高さを200ピクセルに設定します:

```4d
 QR SET HEADER AND FOOTER(MyArea;1;"";"Center title";"";200)
```

#### 参照 

[QR GET HEADER AND FOOTER](qr-get-header-and-footer.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 774 |
| スレッドセーフである | &cross; |
| システム変数を更新する | error |


