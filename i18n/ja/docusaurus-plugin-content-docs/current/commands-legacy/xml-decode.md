---
id: xml-decode
title: XML DECODE
slug: /commands/xml-decode
displayed_sidebar: docs
---

<!--REF #_command_.XML DECODE.Syntax-->**XML DECODE** ( *xmlValue* ; *4Dvar* )<!-- END REF-->
<!--REF #_command_.XML DECODE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| xmlValue | Text | &#8594;  | XML構造から取得したテキスト型の値 |
| 4Dvar | Field, Variable | &#8592; | 変換したXMLの値を受け取る4D変数またはフィールド |

<!-- END REF-->

#### 説明 

<!--REF #_command_.XML DECODE.Summary-->XML DECODE コマンドはXML文字列に格納されている値を4D型の値に変換します。<!-- END REF--> 変換は以下のルールに基づいて自動で行われます: 

| **値** | **例**                                                                                 | 日本語システム上での変換例                                                                                                              |
| ----- | ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 数値    | <Price>8,5</Price><Price>8.5</Price>                                                  | 実数: 8.5                                                                                                                    |
| ブール   | <Double>1</Double> <Double>0</Double> または<Double>true</Double> <Double>false</Double> | ブール: True/False                                                                                                            |
| BLOB  | Base64 デコード                                                                           |                                                                                                                            |
| ピクチャ  | Base64 デコード + BLOB to picture コマンド                                                    |                                                                                                                            |
| 日付    | 2009-10-25T01:03:20+01:00                                                             | 時間部とタイムゾーンを取り除く: !10/25/2009!                                                                                              |
| 時間    | 2009-10-25T01:03:20+01:00                                                             | 日付部を取り除く: ?01:03:20? 警告:タイムゾーンは、ローカル時間と異なる場合にのみ使用されます。例: "2009-10-25T01:03:20+05:00" は、UTC+1のローカル時間では、?21:03:20? とデコードされます |

*4Dvar* 引数の型が未定義の場合、デフォルトでテキスト型が使用されます。

#### 例題 

XMLドキュメントから、属性として格納されているデータを読み込む。  
XMLドキュメントの例:  

```XML
<CD  Date="2003-01-01T00:00:00Z" Description="This double CD reissued by EMI  in 1995 combines 
4 Stabat mater hymns. One by Rossini interpreted by the  Berlin Symphony Orchestra, directed by Karl Forster. 
Followed by a work  of Verdi, by the Philharmonic Orchestra, directed by Carlo Maria  Giulini. On the second CD, 
you will find Francis Poulenc interpreted by  Régine Crespin. This compilation ends with a little-known version, that  of the Polish composer Karol Szymanowski. Polish National Radio Symphony  Orchestra directed by Antoni Wit" 
Double="true" 
Duration="7246"  
Type="Sacred music" 
CD_ID="5" 
Performer="Various" 
Price="8.5" 
Title="4  Stabat mater"/>
```

```4d
 Repeat
    MyEvent:=SAX Get XML node(DocRef)
 
    Case of
       :(MyEvent=XML Start Element)
          ARRAY TEXT(arrAttrNames;0)
          ARRAY TEXT(arrAttrValues;0)
          SAX GET XML ELEMENT(DocRef;vName;vPrefix;arrAttrNames;arrAttrValues)
          If(vName="CD")
             CREATE RECORD([CD])
             For($i;1;Size of array(arrAttrNames))
                $attrName:=arrAttrNames{$i}
                Case of
                   :($attrName="CD_ID")
                      XML DECODE(arrAttrValues{$i};[CD]CD_ID)
                   :($attrName="Title")
                      [CD]Work:=arrAttrValues{$i}
                   :($attrName="Price")
                      XML DECODE(arrAttrValues{$i};[CD]Price)
                   :($attrName="Date")
                      XML DECODE(arrAttrValues{$i};[CD]Date entered)
                   :($attrName="Duration")
                      XML DECODE(arrAttrValues{$i};[CD]Total_duration)
                   :($attrName="Double")
                      XML DECODE(arrAttrValues{$i};[CD]Double_CD)
                End case
             End for
          End if
          ...
    End case
 Until(MyEvent=XML End Document)
```

#### 参照 

[BASE64 DECODE](base64-decode.md)  
[BASE64 ENCODE](base64-encode.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1091 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


