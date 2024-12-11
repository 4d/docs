---
id: set-picture-metadata
title: SET PICTURE METADATA
slug: /commands/set-picture-metadata
displayed_sidebar: docs
---

<!--REF #_command_.SET PICTURE METADATA.Syntax-->**SET PICTURE METADATA** ( *picture* ; *metaName* ; *metaContents* {; *metaName2* ; *metaContents2* ; ... ; *metaNameN* ; *metaContentsN*} )<!-- END REF-->
<!--REF #_command_.SET PICTURE METADATA.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| picture | Picture | &#8594;  | メタデータを設定するピクチャ |
| metaName | Text | &#8594;  | 設定するブロックの名前またはパス |
| metaContents | Variable | &#8594;  | メタデータの内容 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SET PICTURE METADATA.Summary-->SET PICTURE METADATA コマンドを使用すると、picture (4Dピクチャフィールドまたは変数) 内のメタデータ (またはメタタグ) の内容を書き込んだり更新したりできます。<!-- END REF-->

メタデータはピクチャに挿入された追加の情報です。4Dでは4タイプの標準メタデータEXIF, GPS, IPTC そして TIFFを処理できます。

**Note:** これらのメタデータタイプについては以下のドキュメントを参照できます: <http://www.iptc.org/std/IIM/4.1/specification/IIMV4.1.pdf> (IPTC) および <http://exif.org/Exif2-2.PDF> (TIFF, EXIF, GPS). 

*metaName*引数には設定や更新を行うメタデータタイプを指定する文字列を渡します。以下を渡すことができます:

* 新しい*Picture Metadata Names*テーマの定数。このテーマには4Dがサポートするすべてのタグがグループ化されています。それぞれの定数はタグパスを含んでいます (例 "TIFF/DateTime")。
* メタデータの完全なブロック名 ("TIFF", "EXIF", "GPS" あるいは "IPTC")。
* 空の文字列 ("")。

*metaContents* 引数にはメタデータの新しい値を渡します:

* *metaName*にタグパス定数を渡した場合、設定する値を直接、または新しい*Picture Metadata Values*テーマの適切な定数を、*metaContents*引 数に渡せます。値は指定されたメタデータに応じて、テキスト、倍長整数、実数、日付、時間タイプを使用できます。メタデータが一つ以上の値を含む場合、配列を使用できます。文字列を渡すときはXML (XMP標準) でフォーマットされていなければなりません。空の文字列 ("") を渡すと既存のメタデータが消去されます。*metaName* 引数が未定義であった場合、空の文字列が使用されます。
* *metaName*にブロック名か空の文字列を渡すときは、*metaContents*引数には設定するメタデータを含むXML DOM参照を渡します。空の文字列の場合、すべてのメタデータが更新されます。

Windowsではコマンド実行時にエラーが発生すると、*OK* 変数が0に設定されます。Mac OSでは技術的な理由で、メタデータ書き込みエラーを検知できません。そのためこのコマンドはMac OSでは*OK* 変数を更新しません。

**警告:** 特定のメタデータはリードオンリーであり、SET PICTURE METADATA では書き込むことはできません。例えば、TIFF XResolution/TIFF YResolution、EXIF Color Space、EXIF Pixel X Dimension/EXIF Pixel Y Dimensionなどは修正できません。

**注:**

* 特定のピクチャーフォーマット (特にJPEGとTIFF) だけがメタデータをサポートします。逆にGIFやBMPなどのフォーマットはメタデータを受け入れません。メタデータ付きのピクチャーを、それをサポートしないフォーマットに変換すると、情報は失われます。
* OS X 10.7 (Lion)では、ピクチャーのメタデータをエンコード・デコードするために使用されるネイティブフレームワーク内のバグによって、GPS座標が不正確になることがあります。この場合、OSをOS X 10.8 (Mountain Lion)または 10.9 (Maverick)にアップデートすることが強く推奨されます。

#### 例題 1 

配列を使用して"Keywords"メタデータの値を複数設定します:

```4d
 ARRAY TEXT($arrTkeywords;2)
 $arrTkeywords{1}:="France"
 $arrTkeywords{2}:="Europe"
 SET PICTURE METADATA(vPicture;IPTC keywords;$arrTkeywords)
```

#### 例題 2 

DOM参照を使用してGPSブロックを設定します:

```4d
 var $domMetas : Text
 $domMetas:=DOM Parse XML source("metas.xml")
 var $gpsRef : Text
 $gpsRef:=DOM Find XML element($domMetas;"Metadatas/GPS")
 If(OK=1)
    SET PICTURE METADATA(vImage;"GPS";$refGPS)
  //ここで $gpsRef はGPS要素を指しています
    ...
 End if
 DOM CLOSE XML($domMetas)
```

#### 注 

すべてのメタデータがDOM要素参照で処理されるとき、タグは名前がブロック名 (TIFF, IPTC等)である要素に付加される属性として格納されます (参照された要素の子)。特定のメタデータブロックが操作されると、ブロックタグは、コマンドにより参照される要素に直接、属性として格納されます。

#### 参照 

[GET PICTURE KEYWORDS](get-picture-keywords.md)  
[GET PICTURE METADATA](get-picture-metadata.md)  
*Picture Metadata Names*  
*Picture Metadata Values*  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1121 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK |
| サーバー上での使用は不可 ||


