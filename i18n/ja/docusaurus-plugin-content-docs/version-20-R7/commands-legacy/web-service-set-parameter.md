---
id: web-service-set-parameter
title: WEB SERVICE SET PARAMETER
slug: /commands/web-service-set-parameter
displayed_sidebar: docs
---

<!--REF #_command_.WEB SERVICE SET PARAMETER.Syntax-->**WEB SERVICE SET PARAMETER** ( *name* ; *value* {; *soapType*} )<!-- END REF-->
<!--REF #_command_.WEB SERVICE SET PARAMETER.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| name | Text | &#8594;  | SOAPリクエストに含める引数の名前 |
| value | Variable | &#8594;  | 引数の値を格納する4D変数 |
| soapType | Text | &#8594;  | 引数のSOAPタイプ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WEB SERVICE SET PARAMETER.Summary-->**WEB SERVICE SET PARAMETER**コマンドはクライアントのSOAPリクエストで引数の定義を行います。<!-- END REF-->リクエスト中の引数毎にこのコマンドを呼び出します (このコマンドの呼び出し回数は引数の数に応じます)。

*name*には、SOAPリクエストに現れる引数の名前を渡します。

*value*には、引数に渡す値を格納した4D変数を渡します。プロクシメソッドの場合、この変数は通常、プロクシメソッドが呼び出されるときに渡される引数*$1*, *$2*, *$3*, 等です。しかし中間変数を使用することもできます。

**Note:** それぞれの4D変数や配列は*コンパイラ*や*配列*テーマのコマンドで事前に宣言しなければなりません。

デフォルトで4Dは*value*の内容に基づき、*name* 引数にもっとも適切なSOAPタイプを使用します。指定されたタイプはリクエストに含まれます。   
しかし、引数のSOAPタイプを指定したい時があります。この場合、オプションの*soapType* 引数に以下の文字列の一つを渡すことができます (主たるデータタイプ):

| **soapType**                | **説明**                                    |
| --------------------------- | ----------------------------------------- |
| string                      | 文字列                                       |
| int                         | 倍長整数                                      |
| boolean                     | ブール                                       |
| float                       | 32-bit 実数                                 |
| decimal                     | 小数付き実数                                    |
| double                      | 64-bit 実数                                 |
| duration                    | 年, 月, 日, 時間, 分, 秒による期間, 例えば               |
| P1Y2M3DT10H30M              |                                           |
| datetime                    | ISO8601フォーマットの日付と時間、例 2003-05-31T13:20:00 |
| time                        | 時間、例 13:20:00                             |
| date                        | 日付、例 2003-05-31                           |
| gyearmonth                  | 年と月 (グレゴリオ暦)、例 2003-05                    |
| gyear                       | 年 (グレゴリオ暦)、例 2003                         |
| gmonthday                   | 月と日 (グレゴリオ暦)、例 --05-31                    |
| gday                        | 日 (グレゴリオ暦)、例 ---31                        |
| gmonth                      | 月 (グレゴリオ暦)、例 --10--                       |
| hexbinary                   | 16進表現の値                                   |
| base64binary                | BLOB                                      |
| anyuri                      | Uniform Resource Identifier (URI)、例       |
| http://www.company.com/page |                                           |
| qname                       | 有効な XML 名 (名前空間とローカル部分)                   |
| notation                    | 記法属性                                      |

* **Notes:**  
   * XMLデータタイプに関する詳細は、URL <http://www.w3.org/TR/xmlschema-2/> を参照してください。  
   * このコマンドはBlobオブジェクト(4D.Blob 型)をサポートしません。詳細はdeveloper.4d.com *Passing blobs and blob objects to 4D commands* を参照してください。

#### 例題 

この例題は2つの引数を定義します: 

```4d
 var $1 : Text
 var $2 : Text
 WEB SERVICE SET PARAMETER("city";$1)
 WEB SERVICE SET PARAMETER("country";$2)
```

#### 参照 

[WEB SERVICE CALL](web-service-call.md)  
[WEB SERVICE GET RESULT](web-service-get-result.md)  