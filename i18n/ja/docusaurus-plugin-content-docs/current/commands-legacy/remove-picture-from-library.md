---
id: remove-picture-from-library
title: REMOVE PICTURE FROM LIBRARY
slug: /commands/remove-picture-from-library
displayed_sidebar: docs
---

<!--REF #_command_.REMOVE PICTURE FROM LIBRARY.Syntax-->**REMOVE PICTURE FROM LIBRARY** ( picRef | picName )<!-- END REF-->
<!--REF #_command_.REMOVE PICTURE FROM LIBRARY.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| picRef &#124; picName | 倍長整数, 文字 | &#8594;  | ピクチャライブラリ画像の参照番号 または ピクチャライブラリ画像の名前 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.REMOVE PICTURE FROM LIBRARY.Summary-->REMOVE PICTURE FROM LIBRARY コマンドは、*picRef*引数に渡した参照番号または*picName*引数の名前を持つピクチャをピクチャライブラリから消去します。<!-- END REF-->

参照番号または名前を持つピクチャがない場合は、このコマンドは何も行いません。

**4D Server:** REMOVE PICTURE FROM LIBRARYコマンドはサーバマシン上で実行される (ストアードプロシージャやトリガ) メソッドの中から使用することはできません。REMOVE PICTURE FROM LIBRARYコマンドをサーバマシン上で呼び出しても、無視され、何も行われません。

**警告:** デザインオブジェクト (階層リスト項目、メニュー項目等) は、ピクチャライブラリのピクチャを参照することができます。プログラムによってピクチャライブラリのピクチャを修正する際は、注意する必要があります。

#### 例題 1 

以下の例は、ピクチャライブラリから参照番号4444のピクチャを削除します。

```4d
 REMOVE PICTURE FROM LIBRARY(4444)
```

#### 例題 2 

以下の例は、ドル記号 (*$*) で始まる名前を持つピクチャをピクチャライブラリから削除します:

```4d
 PICTURE LIBRARY LIST($alPicRef;$asPicName)
 For($vlPicture;1;Size of array($alPicRef))
    If($asPicName{$vlPicture}="$@")
       REMOVE PICTURE FROM LIBRARY($alPicRef{$vlPicture})
    End if
 End for
```

#### 参照 

[GET PICTURE FROM LIBRARY](get-picture-from-library.md)  
[PICTURE LIBRARY LIST](picture-library-list.md)  
[SET PICTURE TO LIBRARY](set-picture-to-library.md)  