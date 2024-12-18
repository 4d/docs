---
id: picture-library-list
title: PICTURE LIBRARY LIST
slug: /commands/picture-library-list
displayed_sidebar: docs
---

<!--REF #_command_.PICTURE LIBRARY LIST.Syntax-->**PICTURE LIBRARY LIST** ( *picRefs* ; *picNames* )<!-- END REF-->
<!--REF #_command_.PICTURE LIBRARY LIST.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| picRefs | Integer array | &#8592; | ピクチャライブラリ画像の参照番号 |
| picNames | Text array | &#8592; | ピクチャライブラリ画像の名前 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.PICTURE LIBRARY LIST.Summary-->PICTURE LIBRARY LIST コマンドは、データベースのピクチャライブラリの中に現在格納されているピクチャの参照番号と名前を返します。<!-- END REF-->

このコマンドを呼び出すと、*picRefs*配列の中に参照番号、*picNames*配列の中にピクチャ名が返されます。この2つの配列は同期します。つまり*picRefs*配列のn番目の要素は、ピクチャライブラリ内で*picNames*配列のn番目の要素内に返されるピクチャ名が持つ参照番号になります。

必要であればコマンドは自動で*picRefs*と*picNames*配列を作成しサイズ調整します。

ピクチャライブラリのピクチャの名前は最大255文字です。

ピクチャライブラリの中にピクチャがない場合、両方の配列は空で返されます。

ピクチャライブラリの中に現在格納されているピクチャの数を取得するには、[Size of array](size-of-array.md "Size of array")コマンドを使って、2つの配列のどちらかのサイズを取得します。

#### 例題 1 

以下のコードは、配列*alPicRef*と*asPicName*の中にピクチャライブラリのカタログを返します:

```4d
 PICTURE LIBRARY LIST(alPicRef;asPicName)
```

#### 例題 2 

以下の例は、ピクチャライブラリが空であるかどうかを検査します:

```4d
 PICTURE LIBRARY LIST(alPicRef;asPicName)
 If(Size of array(alPicRef)=0)
    ALERT("The Picture Library is empty.")
 Else
    ALERT("The Picture Library contains "+String(Size of array(alPicRef))+" pictures.")
 End if
```

#### 例題 3 

以下の例は、ピクチャライブリをディスク上のドキュメントに書き出します::

```4d
 PICTURE LIBRARY LIST($alPicRef;$asPicName)
 $vlNbPictures:=Size of array($alPicRef)
 If($vlNbPictures>0)
    SET CHANNEL(12;"")
    If(OK=1)
       $vsTag:="4DV6PICTURELIBRARYEXPORT"
       SEND VARIABLE($vsTag)
       SEND VARIABLE($vlNbPictures)
       gError:=0
       For($vlPicture;1;$vlNbPictures)
          $vlPicRef:=$alPicRef{$vlPicture}
          $vsPicName:=$asPicName{$vlPicture}
          GET PICTURE FROM LIBRARY($alPicRef{$vlPicture};$vgPicture)
          If(OK=1)
             SEND VARIABLE($vlPicRef)
             SEND VARIABLE($vsPicName)
             SEND VARIABLE($vgPicture)
          Else
             $vlPicture:=$vlPicture+1
             gError:=-108
          End if
       End for
       SET CHANNEL(11)
       If(gError#0)
          ALERT("The Picture Library could not be exported, retry with more memory.")
          DELETE DOCUMENT(Document)
       End if
    End if
 Else
    ALERT("The Picture Library is empty.")
 End if
```

#### 参照 

[GET PICTURE FROM LIBRARY](get-picture-from-library.md)  
[REMOVE PICTURE FROM LIBRARY](remove-picture-from-library.md)  
[SET PICTURE TO LIBRARY](set-picture-to-library.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 564 |
| スレッドセーフである | &cross; |


