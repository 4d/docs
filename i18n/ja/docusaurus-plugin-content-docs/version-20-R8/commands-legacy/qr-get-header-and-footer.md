---
id: qr-get-header-and-footer
title: QR GET HEADER AND FOOTER
slug: /commands/qr-get-header-and-footer
displayed_sidebar: docs
---

<!--REF #_command_.QR GET HEADER AND FOOTER.Syntax-->**QR GET HEADER AND FOOTER** ( *area* ; *selector* ; *leftTitle* ; *centerTitle* ; *rightTitle* ; *height* {; *picture* {; *pictAlignment*}} )<!-- END REF-->
<!--REF #_command_.QR GET HEADER AND FOOTER.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | エリア参照 |
| selector | Integer | &#8594;  | 1 = ヘッダ, 2 = フッタ |
| leftTitle | Text | &#8592; | 左側に表示されるテキスト |
| centerTitle | Text | &#8592; | 中央に表示されるテキスト |
| rightTitle | Text | &#8592; | 右側に表示されるテキスト |
| height | Integer | &#8592; | ヘッダまたはフッタの高さ |
| picture | Picture | &#8592; | 表示するピクチャ |
| pictAlignment | Integer | &#8592; | ピクチャの整列属性 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.QR GET HEADER AND FOOTER.Summary-->QR GET HEADER AND FOOTER コマンドを使用し、ヘッダまたはフッタの内容とサイズを取得できます。<!-- END REF-->

*selector* を使用して、ヘッダまたはフッタを選択します:

* *selector*に1を指定すると、ヘッダ情報を取得できます。
* *selector*に2を指定すると、フッタ情報を取得できます。

*leftTitle*, *centerTitle* そして *rightTitle*にはそれぞれ左側、中央、右側にあるヘッダまたはフッタの値が返されます。

*height*には、そのレポートに対して選択された単位で表わされたヘッダまたはフッタの高さが返されます。

*picture*には、ヘッダまたはフッタに表示されるピクチャが返されます。

*pictAlignment*には、ヘッダまたはフッタに表示されるピクチャの整列属性が返されます。

* *pictAlignment*が1の場合、そのピクチャは左揃えです。
* *pictAlignment*が2の場合、そのピクチャは中央揃えです。
* *pictAlignment*が3の場合、そのピクチャは右揃えです。

無効な*area*番号を渡した場合、エラー番号-9850が生成されます。  
無効な*selector*引数を渡した場合、エラー番号-9852が生成されます。

#### 例題 

次のコードは、ヘッダタイトルの値とヘッダサイズを取得し、それを警告として表示します:

```4d
 QR GET HEADER AND FOOTER(MyArea;1;$LeftText;$CenterText;$RightText;$height)
 Case of
    :($LeftText #"")
       ALERT("The left title is "+Char(34)+$LeftText+Char(34))
    :($CenterText #"")
       ALERT("The center title is "+Char(34)+$CenterText+Char(34))
    :($RightText #"")
       ALERT("The right title is "+Char(34)+$RightText+Char(34))
    Else
       ALERT("No header title in this report.")
 End case
 ALERT("The height of the header is "+String($height))
```

#### 参照 

[QR SET HEADER AND FOOTER](qr-set-header-and-footer.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 775 |
| スレッドセーフである | &cross; |
| システム変数を更新する | error |


