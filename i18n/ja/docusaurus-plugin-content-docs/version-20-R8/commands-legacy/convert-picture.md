---
id: convert-picture
title: CONVERT PICTURE
slug: /commands/convert-picture
displayed_sidebar: docs
---

<!--REF #_command_.CONVERT PICTURE.Syntax-->**CONVERT PICTURE** ( *picture* ; *codec* {; *compression*} )<!-- END REF-->
<!--REF #_command_.CONVERT PICTURE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| picture | Picture | &#8594;  | 変換するピクチャ |
| &#8592; | 変換されたピクチャ |
| codec | Text | &#8594;  | ピクチャCodec ID |
| compression | Real | &#8594;  | 圧縮の品質 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.CONVERT PICTURE.Summary-->CONVERT PICTURE コマンドは*picture*を新しいタイプに変換します。<!-- END REF-->引数で生成するピクチャのタイプを指定します。Codecには拡張子 (例 “.gif”), またはMimeタイプ(例 “image/jpeg”)が使用できます。利用可能なCodecのリストは [PICTURE CODEC LIST](picture-codec-list.md) コマンドを使用して取得できます。

*picture* フィールドや変数が複合型 (例えばコピー/ペーストアクションの結果のピクチャ) の場合、codecタイプに対応する情報のみが結果ピクチャに保持されます。

**Note:** リクエストされた *codec* のタイプが*picture*の元のタイプと同じ場合、変換は実行されず、そのままのピクチャが返されます (*compression*引数が使用された場合を除く、後述参照)。 

オプションの*compression*引数が渡されると、互換性のあるCODEC利用時に、結果のピクチャに適用する圧縮品質を指定できます。*compression*に は圧縮品質を指定する0から1の間の値を渡します。0が圧縮優先で1が品質優先です。この引数はCODECが圧縮をサポートし (例えばJPEGやHDPhoto)、さらにWICやImageIO APIによりサポートされている場合にのみ考慮されます。ピクチャ管 理APIに関する詳細情報は、 *ピクチャ* を参照してください。*compression*引数を省略するとデフォルトで品質優先 (compression =1) が適用されます。 

**注:** **CONVERT PICTURE** を、64-bit 版4D ではサポートされていないタイプのピクチャー(PICT など)に使用したい場合、変換は、オリジナルのタイプがサポートされている32-bit 版の4D で実行するようにしてください。詳細な情報については、*32-bit版から64-bit版への移行* のページを参照してください。

#### 例題 1 

vpPhoto ピクチャをjpegフォーマットに変換: 

```4d
 CONVERT PICTURE(vpPhoto;".jpg")
```

#### 例題 2 

60%の品質でピクチャを変換:

```4d
 CONVERT PICTURE(vPicture;".JPG";0.6)
```

#### 参照 

[PICTURE CODEC LIST](picture-codec-list.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1002 |
| スレッドセーフである | &check; |


