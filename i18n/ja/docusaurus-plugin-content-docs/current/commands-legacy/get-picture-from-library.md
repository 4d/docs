---
id: get-picture-from-library
title: GET PICTURE FROM LIBRARY
slug: /commands/get-picture-from-library
displayed_sidebar: docs
---

<!--REF #_command_.GET PICTURE FROM LIBRARY.Syntax-->**GET PICTURE FROM LIBRARY** ( picRef | picName ; *picture* )<!-- END REF-->
<!--REF #_command_.GET PICTURE FROM LIBRARY.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| picRef &#124; picName | 倍長整数, 文字 | &#8594;  | ピクチャライブラリ画像の参照番号 または ピクチャライブラリ画像の名前 |
| picture | Picture | &#8592; | ピクチャライブラリのピクチャ |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.GET PICTURE FROM LIBRARY.Summary-->GET PICTURE FROM LIBRARY コマンドは、*picRef*に渡された参照番号または*picName*に渡された名前を持つピクチャライブラリの画像を*picture*引数に返します。<!-- END REF-->

参照番号または名前に対応するピクチャがない場合、GET PICTURE FROM LIBRARYコマンドは*picture*を変更しません。

#### 例題 1 

以下の例は、参照番号がローカル変数$vlPicRef変数に格納されたピクチャをvgMyPicture変数に返します:  

```4d
 GET PICTURE FROM LIBRARY($vlPicRef;vgMyPicture)
```

  
#### 例題 2 

次の例では$DDcom\_Prot\_MyPictureに、ピクチャライブラリ中に保存されている"DDcom\_Prot\_Button1"という名前の画像を返します:  
  
```4d
 GET PICTURE FROM LIBRARY("DDcom_Prot_Button1";$DDcom_Prot_MyPicture)
```

#### 例題 3 

[PICTURE LIBRARY LIST](picture-library-list.md "PICTURE LIBRARY LIST")コマンドの例題参照 

#### システム変数およびセット 

ピクチャライブラリが存在すればOK変数に１が設定され、そうでなければ0が設定されます。

#### エラー管理 

ピクチャに返すための十分なメモリがない場合、エラーコード-108が生成されます。エラー処理メソッドを使って、このエラーを受け取ることができます。

#### 参照 

[PICTURE LIBRARY LIST](picture-library-list.md)  
[REMOVE PICTURE FROM LIBRARY](remove-picture-from-library.md)  
[SET PICTURE TO LIBRARY](set-picture-to-library.md)  