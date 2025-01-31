---
id: web-service-get-result
title: WEB SERVICE GET RESULT
slug: /commands/web-service-get-result
displayed_sidebar: docs
---

<!--REF #_command_.WEB SERVICE GET RESULT.Syntax-->**WEB SERVICE GET RESULT** ( *returnValue* {; *returnName* {; *}} )<!-- END REF-->
<!--REF #_command_.WEB SERVICE GET RESULT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| returnValue | Variable | &#8592; | Webサービスから返された値 |
| returnName | Text | &#8594;  | 取得する引数の名前 |
| * | Operator |  &#8594;  | メモリを解放 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WEB SERVICE GET RESULT.Summary-->**WEB SERVICE GET RESULT**コマンドは、行われた処理の結果としてWebサービスから返された結果を取得するために使用します。<!-- END REF-->このコマンドは[WEB SERVICE CALL](web-service-call.md)コマンドの後に使用しなければなりません。 

*returnValue* 引数はWebサービスから送り返された値を受け取ります。この引数には4D変数を渡します。この変数は通常、プロクシメソッドから返される値に対応する$0です。しかし中間変数を使用することもできます (プロセス変数のみ)。 

**注** **:** 使用する4Dの変数や配列は、事前に*コンパイラ*または*配列*コマンドを使用して宣言しなければなりません。

オプションの*returnName* 引数を使用して、取得する引数の名前を指定します。ほとんどのWebサービスは1つの値しか返さないので、通常この引数は必要ありません。 

オプションの *\** 引数はプログラムに、リクエストの処理に使用したメモリを解放するよう指示します。この引数はWebサーバーから返された最後の値を取得してから指定しなければなりません。

#### 例題 

Webサービスがある都市の時間を返すとします。Webサービスに渡す引数は都市名と国コードです。Webサービスは対応する時間を返します。呼び出しプロクシメソッドは以下のようになります:

```4d
 var $1 : Text
 var $2 : Text
 var $0 : Time
 
 WEB SERVICE SET PARAMETER("city";$1)
 WEB SERVICE SET PARAMETER("country_code";$2)
 
 WEB SERVICE CALL("http://www.citiesoftheworld.com/WS";"WSTime#City_time";"City_time";"http://www.citiesoftheworld.com/namespace/default")
 
 If(OK=1)
    WEB SERVICE GET RESULT($0;"return";*)
 End if
```

#### 参照 

[WEB SERVICE CALL](web-service-call.md)  
[WEB SERVICE SET PARAMETER](web-service-set-parameter.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 779 |
| スレッドセーフである | &check; |


