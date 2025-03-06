---
id: svg-export-to-picture
title: SVG EXPORT TO PICTURE
slug: /commands/svg-export-to-picture
displayed_sidebar: docs
---

<!--REF #_command_.SVG EXPORT TO PICTURE.Syntax-->**SVG EXPORT TO PICTURE** ( *elementRef* ; *pictVar* {; *exportType*} )<!-- END REF-->
<!--REF #_command_.SVG EXPORT TO PICTURE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | ルートXML要素参照 |
| pictVar | Picture | &#8594;  | XMLツリーを受け取るピクチャ変 (SVG ピクチャ) |
| exportType | Integer | &#8594;  | 0 = データソースを保持しない、1 = データソースをコピー(デフォルト)、2 = データソースを移動 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SVG EXPORT TO PICTURE.Summary-->SVG EXPORT TO PICTURE コマンドはXMLツリーのSVGフォーマットのピクチャを、*pictVar* 引数で指定したピクチャフィードや変数に保存するために使用できます。<!-- END REF-->SVGフォーマットに関する詳細はの節を参照してください。

*elementRef*にはSVGピクチャを含むXMLのルート要素参照を渡します。

*pictVar*にはSVGピクチャを受け取る4Dのピクチャフィールドまたは変数の参照を渡します。ピクチャはネイティブフォーマットで書き出され、表示される際にはSVG描画エンジンにより再描画されます。

オプションの*exportType* 引数を使用して、コマンドがXMLデータソースを扱う方法を指定できます。テーマの以下のいずれかの定数を渡すことができます:

| 定数                   | 型    | 値 | コメント                                                                                                                        |
| -------------------- | ---- | - | --------------------------------------------------------------------------------------------------------------------------- |
| Copy XML data source | 倍長整数 | 1 | 4DはピクチャとともにDOMツリーのコピーを保持します。ピクチャをデータベースのピクチャフィールドに保存して、いつでも再び表示したり、書きだしたりできます。これは書き出しの際に*exportType* 引数が省略されたときのデフォルトモードです。 |
| Get XML data source  | 倍長整数 | 0 | 4DはXMLデータソースの読み込みのみを行います。XMLデータソースはピクチャと一緒には保持されません。これはコマンドの実行速度を大幅に向上させますが、DOMツリーが保持されないため、ピクチャを格納したり書きだしたりすることはできません。     |
| Own XML data source  | 倍長整数 | 2 | 4DはDOMツリーをピクチャとともに書き出します。ピクチャを格納したり書きだしたりでき、かつコマンドの実行も速いです。しかし*elementRef* XML参照を他の4Dコマンドで使用することはできなくなります。                  |

#### 例題 

以下の例題は4Dピクチャに“Hello World”を表示します:  

```4d
 var vpict : Picture
 $svg:=DOM Create XML Ref("svg";"http://www.w3.org/2000/svg")
 $ref:=DOM Create XML element($svg;"text";"font-size";26;"fill";"red")
 DOM SET XML ATTRIBUTE($ref;"y";"1em")
 DOM SET XML ELEMENT VALUE($ref;"Hello World")
 SVG EXPORT TO PICTURE($svg;vpict;Copy XML data source)
 DOM CLOSE XML($svg)
```

![](../assets/en/commands/pict14520.ja.png)

#### 参照 

[DOM EXPORT TO FILE](dom-export-to-file.md)  
[DOM EXPORT TO VAR](dom-export-to-var.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1017 |
| スレッドセーフである | &check; |


