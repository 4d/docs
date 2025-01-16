---
id: resource-list
title: RESOURCE LIST
slug: /commands/resource-list
displayed_sidebar: docs
---

<!--REF #_command_.RESOURCE LIST.Syntax-->**RESOURCE LIST** ( *resType* ; *resIDs* ; *resNames* {; *resFile*} )<!-- END REF-->
<!--REF #_command_.RESOURCE LIST.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| resType | Text | &#8594;  | 4文字のリソースタイプ |
| resIDs | Integer array | &#8592; | リソースID番号 |
| resNames | Text array | &#8592; | リソース名 |
| resFile | Time | &#8594;  | リソースファイル参照番号、または 省略時、開かれている全てのリソースファイル |

<!-- END REF-->

#### 説明 

<!--REF #_command_.RESOURCE LIST.Summary-->RESOURCE LIST コマンドは、*resType*に渡したタイプのリソースIDとリソース名から、*resIDs*と*resNames*の配列を作成します。<!-- END REF-->

**重要**: *resType*には4文字を受渡す必要があります。.

オプション引数*resFile*に有効なリソースファイル参照番号を渡すと、そのファイルのリソースのみが返されます。*resFile*を省略した場合、現在開いているリソースファイルのすべてのリソースがリストされます。

RESOURCE LISTを呼び出す前に配列を事前定義する場合は、*resIDs*を倍長整数配列に、*resNames*を文字列またはテキスト配列として定義します。配列の事前定義を行わない場合、このコマンドは*resIDs*を倍長整数配列、*resNames*をテキスト配列として作成します。

このコマンドの実行後、[Size of array](size-of-array.md "Size of array")を*resIDs*または*resNames*の配列に対して適用し、見つかったリソースの数を調べることができます。

#### 例題 1 

以下の例は、配列*$alResID*と*$atResName*にデータベースのストラクチャファイル内に存在するストリングリストリソースのIDと名前を返します: 

```4d
 If(On Windows)
    $vhStructureResFile:=Open resource file(Replace string(Structure file;".4DB";".RSR"))
 Else
    $vhStructureResFile:=Open resource file(Structure file)
 End if
 If(OK=1)
    RESOURCE LIST("STR#";$alResID;$atResName;$vhStructureResFile)
 End if
```

#### 例題 2 

以下の例は、現在開かれているリソースファイル内にあるピクチャリソースをデータベースのピクチャライブラリの中にコピーします: 

```4d
 RESOURCE LIST("PICT";$alResID;$atResName)
 Open window(50;50;550;120;5;"Copying PICT resources...")
 For($vlElem;1;Size of array($alResID))
    GET PICTURE RESOURCE($alResID{$vlElem};$vgPicture)
    If(OK=1)
       $vsName:=$atResName{$vlElem}
       If($vsName="")
          $vsName:="PICT resID="+String($alResID{$vlElem})
       End if
       ERASE WINDOW
       GOTO XY(2;1)
       MESSAGE("Adding picture “"+$vsName+"” to the DB picture library.")
       SET PICTURE TO LIBRARY($vgPicture;$alResID{$vlElem};$vsName)
    End if
 End for
 CLOSE WINDOW
```

#### 参照 

[RESOURCE TYPE LIST](resource-type-list.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 500 |
| スレッドセーフである | &cross; |


