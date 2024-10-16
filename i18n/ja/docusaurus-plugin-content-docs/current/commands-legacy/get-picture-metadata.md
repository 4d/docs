---
id: get-picture-metadata
title: GET PICTURE METADATA
slug: /commands/get-picture-metadata
displayed_sidebar: docs
---

<!--REF #_command_.GET PICTURE METADATA.Syntax-->**GET PICTURE METADATA** ( *picture* ; *metaName* ; *metaContents* {; *metaName2* ; *metaContents2* ; ... ; *metaNameN* ; *metaContentsN*} )<!-- END REF-->
<!--REF #_command_.GET PICTURE METADATA.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| picture | Picture | &#8594;  | メタデータを読むピクチャ |
| metaName | Text | &#8594;  | 取得するブロックの名前またはパス |
| metaContents | Variable | &#8592; | メタデータの内容 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.GET PICTURE METADATA.Summary-->**GET PICTURE METADATA**コマンドを使用して *picture* で指定したピクチャ (4Dのピクチャフィールドや変数) 内のメタデータ (またはメタタグ) の内容を読みだすことができます。<!-- END REF--> メタデータに関する詳細は[SET PICTURE METADATA](set-picture-metadata.md)コマンドの説明を参照してください。

*metaName*引数には取り出すメタデータのタイプを指定する文字列を渡します。以下を渡すことができます:

* タグパスが含まれる *Picture Metadata Names* テーマの定数
* メタデータの完全ブロック名 ("TIFF", "EXIF", "GPS" あるいは"IPTC")。
* 空の文字列 ("")。

*metaContents* 引数にはメタデータを受け取る変数を渡します。

* *metaName*にタグパスを渡した場合、*metaContents* 引数は直接取得した値を含みます。値は変数の型に合わせて変換されます(変数の型が定義されていない場合、デフォルトでテキスト型が使用されます)。テキスト型の変数ではXML (XMP標準) でフォーマットされます。(特にIPTC Keywordsタグのように) メタデータに一つ以上の値が含まれる場合、配列を渡すことができます。
* *metaName*にブロック名か空の文字列を渡すとき、*metaContents* 引数は有効なXML DOM要素参照でなければなりません。この場合、指定されたブロック (あるいは*metaName*に空の文字列を渡した場合はすべてのブロック) の内容は参照された要素に再コピーされます。

#### 例題 1 

DOMツリーストラクチャを使用する

```4d
 $xml:=DOM Create XML Ref("Root") // XML DOMツリーの作成
 
  // TIFFメタデータの読み出し
 $_Xml_TIFF:=DOM Create XML element($xml;"/Root/TIFF")
 GET PICTURE METADATA(vPicture;"TIFF";$_Xml_TIFF)
 
  // GPSメタデータの読み出し
 $_Xml_GPS:=DOM Create XML element($xml;"/Root/GPS")
 GET PICTURE METADATA(vPicture;"GPS";$_Xml_GPS)
```

#### 例題 2 

変数の使用

```4d
 var $dateAsDate : Date
 GET PICTURE METADATA(vPicture;TIFF date time;$dateAsDate)
  // $dateAsDateが日付型のため、日付のみが返される
 
 var $dateAsText : Text
 GET PICTURE METADATA(vPicture;TIFF date time;$dateAsText)
  // 日付のみがXMLフォーマットで返される
 
 C_INTEGER($urgency)
 GET PICTURE METADATA(vPicture;IPTC urgency;$urgency)
```

#### 例題 3 

タグの複数の値が配列に返される

```4d
 ARRAY TEXT($tTkeywords;0)
 GET PICTURE METADATA(vPicture;IPTC keywords;$tTkeywords)
```

コマンドの実行後、$arrTkeywordsは例えば以下のようになります:   

```4d
 $arrTkeywords{1}="France"
 $arrTkeywords{2}="Europe"
```

#### 例題 4 

テキスト変数に複数の値を持つタグを受信する

```4d
 var $vTwords;0 : Text
 GET PICTURE METADATA(vPicture;IPTC keywords;$vTwords)
```

コマンド実行後、$vTwordsは例えば"France;Europe"のようになります。

#### システム変数およびセット 

メタデータの取得が正しく行われると、*OK*システム変数に1が設定され、エラーが発生したり1つ以上のタグが見つからない場合は0が設定されます。どのような場合でも、読みだされた値は返されます。

#### 参照 

[GET PICTURE KEYWORDS](get-picture-keywords.md)  
*Picture Metadata Names*  
*Picture Metadata Values*  
[SET PICTURE METADATA](set-picture-metadata.md)  