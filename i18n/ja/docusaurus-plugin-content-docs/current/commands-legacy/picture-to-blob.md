---
id: picture-to-blob
title: PICTURE TO BLOB
slug: /commands/picture-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.PICTURE TO BLOB.Syntax-->**PICTURE TO BLOB** ( *picture* ; *pictureBlob* ; *codec* )<!-- END REF-->
<!--REF #_command_.PICTURE TO BLOB.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| picture | Picture | &#8594;  | ピクチャフィールドまたは変数 |
| pictureBlob | Blob | &#8592; | 変換されたピクチャを受け取るBLOB |
| codec | Text | &#8594;  | ピクチャCodec ID |

<!-- END REF-->

#### 説明 

<!--REF #_command_.PICTURE TO BLOB.Summary-->PICTURE TO BLOB コマンドは、4D変数やフィールドに格納されたピクチャを他のフォーマットに変換し、変換後のピクチャをBLOB内に納めます。<!-- END REF-->

ピクチャタイプの4Dフィールドや変数を*picture*引数に渡します。*pictureBlob*引数には、変換後のピクチャを納めるBLOB変数やフィールドを渡します。

*codec* 引数には変換フォーマットを指定する文字列を渡します。   
Codecは拡張子 (例 “.gif”), または Mimeタイプ (例 “image/jpeg”) です。利用可能なCodecは [PICTURE CODEC LIST](picture-codec-list.md) コマンドで取得できます。

このコマンドを実行すると、*picturBlob*には指定したフォーマットのピクチャが納められます。

変換が正常に終了すると、システム変数OKには1が代入されます。変換が失敗した(変換できない)場合、システム変数OKに0が代入され、生成されたBLOBは空です(0バイト)。

#### 例題 

特定のフォーマットの画像をGIFフォーマットへと変換し、静的なWeb ページに表示したい場合を考えます。以下のようなコードを使用することが考えられます:

```4d
 var $picture : Picture
 var $BLOB : Blob
 var $path : Text
 
 $path:=Get 4D folder(Current resources folder)+"Images"+Folder separator+"Sunrise.psd" //Resources フォルダー内の画像フォルダにあるピクチャーを探す
 READ PICTURE FILE($path;$picture) //ピクチャーをピクチャー変数へと代入
 
 PICTURE TO BLOB($picture;$BLOB;".gif") //ピクチャーを".gif" フォーマットへと変換
 WEB SEND BLOB($BLOB;"image/gif")
```

#### 参照 

[BLOB TO PICTURE](blob-to-picture.md)  
[PICTURE CODEC LIST](picture-codec-list.md)  
[WRITE PICTURE FILE](write-picture-file.md)  