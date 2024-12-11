---
id: set-picture-to-library
title: SET PICTURE TO LIBRARY
slug: /commands/set-picture-to-library
displayed_sidebar: docs
---

<!--REF #_command_.SET PICTURE TO LIBRARY.Syntax-->**SET PICTURE TO LIBRARY** ( *picture* ; *picRef* ; *picName* )<!-- END REF-->
<!--REF #_command_.SET PICTURE TO LIBRARY.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| picture | Picture | &#8594;  | 新しいピクチャ |
| picRef | Integer | &#8594;  | ピクチャライブラリ画像の参照番号 |
| picName | Text | &#8594;  | ピクチャの新しい名前 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SET PICTURE TO LIBRARY.Summary-->SET PICTURE TO LIBRARY コマンドは、新規ピクチャを作成、またはピクチャライブラリにあるピクチャを置き換えます。<!-- END REF-->

このコマンドを呼び出す前に、下記の引数を渡してください:

* *picRef*にピクチャ参照番号（1～32767の範囲）
* *picture*にピクチャ自身
* *picName*にピクチャの名前（最大255文字）

同じ参照番号を持つ既存のピクチャライブラリのピクチャがある場合、そのピクチャの内容は置き換えられ、引数*picture*と*picName*に渡された値でピクチャと名前が変更されます。

*picRef*に渡された参照番号を持つピクチャライブラリのピクチャがない場合、新規ピクチャがピクチャライブラリに追加されます。

**4D Server:** SET PICTURE TO LIBRARYコマンドはサーバマシン上で実行される (ストアードプロシージャやトリガ) メソッドの中から使用することはできません。SET PICTURE TO LIBRARYコマンドをサーバマシン上で呼び出しても、無視され、何も行われません。

**警告:** デザインオブジェクト (階層リスト項目、メニュー項目等) は、ピクチャライブラリのピクチャを参照することができます。プログラムによってピクチャライブラリのピクチャを修正する際は、注意する必要があります。

**Note:** *picture*に空のピクチャを渡すか、*picRef*に負数またはヌル値を渡すと、コマンドは何も行いません。

#### 例題 1 

以下の例は、ピクチャライブラリの現在の内容に関わらず、最初にユニークなピクチャ参照番号を探すことによってピクチャライブラリに新規ピクチャを追加します:

```4d
 PICTURE LIBRARY LIST($alPicRef;$asPicNames)
 Repeat
    $vlPicRef:=1+Abs(Random)
 Until(Find in array($alPicRef;$vlPicRef)<0)
 SET PICTURE TO LIBRARY(vgPicture;$vlPicRef;"New Picture")
```

#### 例題 2 

以下の例は、[PICTURE LIBRARY LIST](picture-library-list.md "PICTURE LIBRARY LIST")の3番目の例題で作成した、ディスク上のドキュメントに格納されたピクチャをピクチャライブラリの中に読み込みます:

```4d
 SET CHANNEL(10;"")
 If(OK=1)
    RECEIVE VARIABLE($vsTag)
    If($vsTag="4DV6PICTURELIBRARYEXPORT")
       RECEIVE VARIABLE($vlNbPictures)
       If($vlNbPictures>0)
          For($vlPicture;1;$vlNbPictures)
             RECEIVE VARIABLE($vlPicRef)
             If(OK=1)
                RECEIVE VARIABLE($vsPicName)
             End if
             If(OK=1)
                RECEIVE VARIABLE($vgPicture)
             End if
             If(OK=1)
                SET PICTURE TO LIBRARY($vgPicture;$vlPicRef;$vsPicName)
             Else
                $vlPicture:=$vlNbPictures+1
                ALERT("This file looks like being damaged.")
             End if
          End for
       Else
          ALERT("This file looks like being damaged.")
       End if
    Else
       ALERT("The file “"+Document+"” is not a Picture Library export file.")
    End if
    SET CHANNEL(11)
    End
```

#### エラー管理 

ピクチャライブラリにピクチャを追加するための十分なメモリがない場合、エラーコード-108が生成されます。また、I/Oエラーが返される（例えば、ストラクチャファイルがロックされている等）点にも注意してください。エラー処理メソッドを使って、このエラーを受け取ることができます。

#### 参照 

[GET PICTURE FROM LIBRARY](get-picture-from-library.md)  
[PICTURE LIBRARY LIST](picture-library-list.md)  
[REMOVE PICTURE FROM LIBRARY](remove-picture-from-library.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 566 |
| スレッドセーフである | &check; |
| システム変数を更新する | error |
| サーバー上での使用は不可 ||


