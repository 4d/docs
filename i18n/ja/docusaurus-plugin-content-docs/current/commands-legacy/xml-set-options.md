---
id: xml-set-options
title: XML SET OPTIONS
slug: /commands/xml-set-options
displayed_sidebar: docs
---

<!--REF #_command_.XML SET OPTIONS.Syntax-->**XML SET OPTIONS** ( elementRef | document  ; *selector* ; *value* {; *selector2* ; *value2* ; ... ; *selectorN* ; *valueN*} )<!-- END REF-->
<!--REF #_command_.XML SET OPTIONS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| elementRef &#124; document | テキスト | &#8594;  | XMLルート要素参照、または開かれたドキュメント参照 |
| selector | Integer | &#8594;  | 設定するオプション |
| value | Integer | &#8594;  | オプションの値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.XML SET OPTIONS.Summary-->**XML SET OPTIONS** コマンドを使用して、 第一引数に渡されたXML構造のXMLオプションの値を変更できます。<!-- END REF-->

このコマンドは"ツリー"タイプ (DOM) や"ドキュメント" タイプ (SAX) のXML構造に適用できます。第一引数にはルート要素参照 (*elementRef*)、あるいは開かれたSAXドキュメント (*document*) を渡します。

変更したいオプションを*selector* 引数に渡し、新しい値を*value* 引数に渡します。*selector*/*value* のペアは必要なだけ渡すことができます。"*XML*"テーマ内にある、以下の定数を使用してください:

このコマンドで設定されるオプションは、4DからXMLの方向でのみ利用されます (4DへのXML値の読み込みには効果ありません)。以下のコマンドがこのオプションを使用します:
* [DOM SET XML ATTRIBUTE](dom-set-xml-attribute.md)
* [DOM SET XML ELEMENT VALUE](dom-set-xml-element-value.md)
* [SAX ADD XML ELEMENT VALUE](sax-add-xml-element-value.md)

| 定数                   | 型    | 値 | コメント                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------------- | ---- | - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| XML binary encoding  | 倍長整数 | 5 | バイナリデータを変換する方法を指定します。<br/>とりうる値は:<br/>XML Base64 (デフォルト値): バイナリデータは単純にBase64に変換されるXML Data URI scheme: バイナリデータはBase64に変換され、"data:;base64"ヘッダが追加される。このフォーマットは主に、ブラウザが自動でピクチャをデコードできるようにするために使用されます。またSVGピクチャの挿入にも必要です。詳細は<http://en.wikipedia.org/wiki/Data%5FURI%5Fscheme>を参照してください。                                                                                                                                                                                                                                                                                                                                                                                                              |
| XML date encoding    | 倍長整数 | 2 | 4D日付の変換方法を指定します。例えば日本のタイムゾーンで !2003/01/01! の例で、とりうる値は (時差によりUTCでは日付が異なる場合があります):<br/>XML ISO (デフォルト値): タイムゾーンの指定なしでxs:datetimeフォーマットを使用します。結果は: "2003-01-01"。時間部がSQLなどを使用して4D値に含まれていても、それは失われます。XML Local: タイムゾーンを指定してxs:dateフォーマットを使用します。結果は: "2003-01-01 +09:00"。時間部がSQLなどを使用して4D値に含まれていても、それは失われます。XML Datetime local: タイムゾーンを指定してxs:dateTime (ISO 8601) フォーマットを使用します。時間部がSQLなどを使用して4D値に含まれている場合、このフォーマットでは時間部が保持されます。結果は: "<Date>2003-01-01T00:00:00 +09:00</Date>"。XML UTC: xs:dateフォーマットを使用します。結果は: "2003-01-01Z"。時間部がSQLなどを使用して4D値に含まれていても、それは失われます。XML Datetime UTC: xs:dateTime (ISO 8601)フォーマットを使用します。時間部がSQLなどを使用して4D値に含まれている場合、このフォーマットでは時間部が保持されます。結果は: "<Date>2003-01-01T00:00:00Z</Date>". |
| XML indentation      | 倍長整数 | 4 | XMLドキュメントのインデントを指定します。<br/>とりうる値:<br/>XML With indentation (デフォルト値): ドキュメントはインデントされるXML No indentation: ドキュメントはインデントされない。内容は一行中に置かれます。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| XML picture encoding | 倍長整数 | 6 | (Base64にエンコードされる前に) ピクチャの変換の方法を指定します。<br/>とりうる値:<br/>XML Convert to PNG (デフォルト値): Base64にエンコードされる前に、ピクチャはPNGに変換されます。XML Native codec: Base64にエンコードされる前に、ピクチャは最初のネイティブなストレージCODECに変換されます。SVGピクチャをエンコードするためにこれらのオプションを使用しなければなりません (XML SET OPTIONSコマンドの例題参照)。                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| XML string encoding  | 倍長整数 | 1 | 4D文字列を要素値に変換する方法を指定します。これはXMLでエスケープ文字の利用が必須である属性の変換には影響しません。<br/>とりうる値:<br/>XML With escaping (デフォルト値): 4D文字列をXML要素値に変換する際、文字の置き換えを行います。テキスト型のデータは自動で解析され、禁止されている文字 (<&>") はXML実体参照 (&<> '") に置き換えられます。XML Raw data: 4D文字列は生データとして送信されます。4Dはエンコードや解析を行いません。4Dの値は可能であればXMLフラグメントに変換され、ターゲット要素の子要素として挿入されます。値をXMLフラグメントとして扱えない場合、新しいCDATAノードに生データとして挿入されます。                                                                                                                                                                                                                                                                                                                                         |
| XML time encoding    | 倍長整数 | 3 | 4Dの時間を変換する方法を指定します。例：?02/00/46? (日本時間)。エンコーディングは時刻を表すか時間を表すかにより異なります。<br/>時刻の場合:<br/>XML Datetime UTC: UTC (Universal Time Coordinated) で表現された時刻。UTCへの変換は自動です。結果: "<Duration>0000-00-00T17:00:46Z</Duration>".XML Datetime local: 時刻は4Dエンジンが実行されているマシンの時差を使用して表現されます。結果: "<Duration>0000-00-00T02:00:46+09:00</Duration>".XML Datetime local absolute (デフォルト値): 時刻は時差なしで表現されます。値は変更されません。結果: "<Duration>0000-00-00T02:00:46</Duration>". 時間の場合:<br/>XML Seconds: 00:00:00からの経過秒数。時間をあらわすため、値は変更されません。結果: "<Duration>7246</Duration>".XML Duration: XML Schema Part 2に準拠した時間表現。時間をあらわすため、値は変更されません。結果: "<Duration>PT02H00M46S</Duration>".                                                 |

**注:** 

* XML LocalおよびXML Datetime local 値はUTC (Universal Time Coordinated)で表現された日付を提供しません。日付は変更されず、時差が付加されます。このフォーマットは変換してその逆変換をおこなうような場合に便利です。
* XML UTCおよびXML Datetime UTC 値はフォーマット上は先と同じですが、UTCで表現されます。相互の互換性のために、このフォーマットを優先的に使用すべきです。値は変更されません。

以下のオプションを使用すると、一部のデフォルトxmlパーサー機能を変更することができます:

| 定数                             | 型    | 値 | コメント                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------------ | ---- | - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| XML DOM case sensitivity       | 倍長整数 | 8 | [DOM Get XML element](dom-get-xml-element.md) および [DOM Count XML elements](dom-count-xml-elements.md) コマンドにおける要素名の大文字と小文字の区別を指定します。<br/>取り得る値:<br/>XML case sensitive (デフォルト値): コマンドは大文字と小文字を区別します。XML case insensitive: コマンドは大文字と小文字を区別しません。                                                                                                                 |
| XML external entity resolution | 倍長整数 | 7 | 外部エンティティがXMLドキュメント内で解決されるかどうかを管理します。デフォルトではセキュリティ上の理由から、DOMとSAXの4D XML解析は外部エンティティ解決を許可していません。このセレクターのスコープは呼び出しプロセス(プリエンプティブの場合)、あるいは全てのコオペラティブプロセス(コオペラティブプロセスから呼び出された場合)である点に注意して下さい。これは全てのXMLドキュメント全体的に適用されます(最初の引数は無視されますので、空の文字列を渡して下さい)。<br/>**取りうる値:**XML enabled: XMLドキュメント内での外部エンティティ解決を許可します。XML disabled (デフォルト値): 外部エンティティ解決を許可しない(外部エンティティ宣言は解析エラーを生成します) |

#### 例題 

SVG ピクチャの挿入:

```4d
 XML SET OPTIONS($pictElemRef;XML binary encoding;XML data URI scheme)
 XML SET OPTIONS($pictElemRef;XML picture encoding;XML native codec)
 DOM SET XML ATTRIBUTE($pictElemRef;"xlink:href";PictVar)
```

#### 参照 

[DOM SET XML ATTRIBUTE](dom-set-xml-attribute.md)  
[DOM SET XML DECLARATION](dom-set-xml-declaration.md)  
[DOM SET XML ELEMENT VALUE](dom-set-xml-element-value.md)  
[SAX ADD XML ELEMENT VALUE](sax-add-xml-element-value.md)  
[XML GET OPTIONS](xml-get-options.md)  