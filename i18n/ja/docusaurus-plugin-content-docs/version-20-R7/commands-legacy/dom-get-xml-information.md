---
id: dom-get-xml-information
title: DOM Get XML information
slug: /commands/dom-get-xml-information
displayed_sidebar: docs
---

<!--REF #_command_.DOM Get XML information.Syntax-->**DOM Get XML information** ( *elementRef* ; *xmlInfo* ) : Text<!-- END REF-->
<!--REF #_command_.DOM Get XML information.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | XMLルート要素参照 |
| xmlInfo | Integer | &#8594;  | 取得する情報のタイプ |
| 戻り値 | Text | &#8592; | XML情報の値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.DOM Get XML information.Summary-->DOM Get XML information コマンドを使用して、*elementRef*で指定したXML要素に関する様々な情報を取得できます。<!-- END REF-->

*xmlInfo*には、取得する情報のタイプを指定するコードを渡します。テーマの以下の定数を使用できます:

| 定数           | 型    | 値 | コメント                                                   |
| ------------ | ---- | - | ------------------------------------------------------ |
| DOCTYPE Name | 倍長整数 | 3 | DOCTYPE マーカで定義されているルート要素の名前。                           |
| Document URI | 倍長整数 | 6 | DTDのURI                                                |
| Encoding     | 倍長整数 | 4 | 使用されているエンコーディング (UTF-8, ISO...).                       |
| PUBLIC ID    | 倍長整数 | 1 | ドキュメントが従うDTDの公開識別子 (FPI, DOCTYPE xxx PUBLICタグが存在する場合)。 |
| SYSTEM ID    | 倍長整数 | 2 | システム識別子。                                               |
| Version      | 倍長整数 | 5 | 受け入れられたXMLバージョン。                                       |

#### 参照 

[XML GET ERROR](xml-get-error.md)  