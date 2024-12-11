---
id: php-execute
title: PHP Execute
slug: /commands/php-execute
displayed_sidebar: docs
---

<!--REF #_command_.PHP Execute.Syntax-->**PHP Execute** ( *scriptPath* {; *functionName* {; *phpResult* {; *param*} {; *param2* ; ... ; *paramN*}}} ) : Boolean<!-- END REF-->
<!--REF #_command_.PHP Execute.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| scriptPath | Text | &#8594;  | PHPスクリプトへのパスまたは<br/>"" でPHP関数を実行 |
| functionName | Text | &#8594;  | 実行するPHP関数 |
| phpResult | *, Variable, Field | &#8592; | PHP関数実行結果または結果を受け取らない場合* |
| param | Text, Boolean, Real, Integer, Date, Time | &#8594;  | PHP関数の引数 |
| 戻り値 | Boolean | &#8592; | True = 正しく実行された<br/>False = 実行時にエラーがあった |

<!-- END REF-->

:::info 互換性

**4D のビルトインPHPインタープリターは削除されました**。[`4D.SystemWorkerクラス`](../API/SystemWorkerClass.md) を使用して外部PHPインタープリターをご利用ください。

:::

#### 説明 

<!--REF #_command_.PHP Execute.Summary-->**PHP Execute**コマンドはPHPスクリプトや関数を実行するために使用します。<!-- END REF-->.

*scriptPath*引数には、実行するPHPスクリプトのパス名を渡します。ファイルがデータベースストラクチャと同階層に存在する場合、相対パス名を指定できます。そうでなければ完全パスです。パス名はシステムシンタックスあるいはPOSIXシンタックスで表現できます。  
標準のPHP関数を直接実行したい場合は、*scriptPath*に空の文字列 ("") を渡します。関数名は二番目の引数に渡さなければなりません。

*scriptPath*スクリプト内の特定の関数を実行したい場合、*functionName*引数にPHP関数名を渡します。この引数に空の文字列を渡したり*functionName*引数を省略した場合、スクリプト全体が実行されます。

**Note**: PHPの関数名は大文字小文字を区別します。括弧は使用せず、関数名のみを入力してください。

*phpResult*引数はPHP関数の実行結果を受け取ります。以下のいずれかを渡せます:

* 結果を受け取る変数、配列、またはフィールド
* 関数が結果を返さないか、結果を受け取る必要がない場合、\* 文字。

*phpResult*にはテキスト、倍長整数、実数、ブール、または日付型、および (配列を除く) BLOBや時間型のフィールドを渡すことができます。4Dは後述の*返されるデータの変換*で説明する原則に基づき、データの変換と必要な調整を実行します。

* *functionName*引数に関数名を渡すと、*phpResult*はPHPの開発者が関数のコードから**return**コマンドで返す値を受け取ります。
* *functionName*引数に関数名を渡さずにコマンドを使用した場合、*phpResult*はPHPの開発者がechoや類似のコマンドで返す値を受け取ります。

引数を期待するPHP関数を呼び出す場合、1つ以上の値を渡すために*param1...N*を使用します。値はセミコロンで分けられなければなりません。文字、テキスト、ブール、実数、整数、倍長整数、日付、時間タイプの値を渡すことができます。ピクチャとBLOBとオブジェクト型は渡せません。配列を送信することができます。この場合、[PHP Execute](php-execute.md)コマンドには配列へのポインタを渡さなければなりません。そうしない場合、配列のカレントのインデックスが整数として送信されます (例題参照)。コマンドはポインタ、ピクチャおよび2D配列を除き、すべてのタイプの配列へのポインタを受け入れます。  
*param1...N*引数はUTF-8のJSONフォーマットでPHPに送信されます。これらの引数はPHPの*functionName*関数に渡される前に、PHPの**json\_decode**コマンドで自動でデコードされます。

**注:** 技術的な理由で、FastCGIプロトコル経由で渡す引数のサイズは64KBを超えてはなりません。テキスト型の引数を使用する際にはこの制限を考慮にいれる必要があります。

4D側でコマンドが正しく実行できると、言い換えれば実行環境の起動、スクリプトのオープン、そしてPHPインタープリターとの通信に成功すると、コマンドからTrueが返されます。 そうでない場合、[ON ERR CALL](on-err-call.md)でとらえることができ、[Last errors](last-errors.md) で解析できるエラーが生成されます。   
さらにスクリプト自身がPHPエラーを生成するかもしれません。この場合[PHP GET FULL RESPONSE](php-get-full-response.md)コマンドを使用してエラーの発生元を解析しなければなりません (例題4参照)。

**注** **:** PHPを使用してエラー管理を設定できます。詳細は例えば以下のページを参照してください: <http://www.php.net/manual/en/errorfunc.configuration.php#ini.error-reporting>.

##### 返されるデータの変換 

以下の表は*phpResult*引数の型に基づき、返されるデータが4Dによりどのように解釈され変換されるかを説明しています。

| ***phpResult*引数の型** | **4Dによる処理**                                                                                                                                                       | **例**                                                               |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| BLOB                | 4Dは受信したデータを変更せずに取り出します(\*)。                                                                                                                                       |                                                                     |
| テキスト                | 4DはUTF-8でエンコードされたデータを期待します (\*)。PHPの開発者はPHPの**utf8\_encode**コマンドを使用する必要があるかもしれません。                                                                                | PHPスクリプトの例: echo utf8\_encode(myText)                               |
| 日付                  | 4Dは (PHPでときにDATE\_ATOMと呼ばれる) RFC 3339フォーマットの文字列として送信される日付を期待します。このフォーマットは"YYYY-MM-DDTHH:MM:SS"という形式で、例えば2005-08-15T15:52:01+00:00のようになります。4Dは時間部を無視し、UTCの日付を返します。 |                                                                     |
| Time                | 4DはRFC 3339フォーマットの文字列として送信される時間を期待します (日付型参照)。4Dは日付部を無視し、ローカルタイムゾーンの日付を考慮した上で、0時からの経過秒数を返します。                                                                     | 2時間30分45秒を送信するPHPスクリプトの例: echo date(  DATE\_ATOM, mktime( 2,30,45)) |
| 整数または実数             | 4Dは数字や+、-、およびeに続く指数で表現された数値を解釈します。'.'や','文字はすべて小数区切り文字として解釈されます。                                                                                                  | PHPスクリプトの例: echo -1.4e-16;                                          |
| ブール                 | PHPから文字列"true"または非ヌルと数値評価される値を受け取ると4DはTrueを返します。                                                                                                                  | PHPスクリプトの例: echo (a==b);                                            |
| 配列                  | 4Dは、PHP配列がJSONフォーマットで返されるものと見なします。                                                                                                                                | 2つのテキストを返すPHPスクリプトの例: echo json\_encode( array( "hello", "world")); |

(\*) デフォルトでHTTPヘッダーは返されません:  
\- *functionName*引数に関数名を渡して[PHP Execute](php-execute.md)を使用すると、*phpResult*にHTTPヘッダーが返されることはありません。ヘッダーは[PHP GET FULL RESPONSE](php-get-full-response.md)コマンドを使用してのみ取得できます。  
\- 関数名なし (*functionName*引数を省略するかからの文字列を渡す) で[PHP Execute](php-execute.md)を使用するとき、[PHP SET OPTION](php-set-option.md)コマンドを使用してPHP Raw resultオプションをTrueに設定することでHTTPヘッダーを返すことができます。

**注:** PHPを使用して大量のデータを取得する必要がある場合、通常関数の戻り値を使用するよりも、(**echo**や同等のコマンドを使用して) *stdOut*バッファーを経由した方が効率的です。詳細は[PHP GET FULL RESPONSE](php-get-full-response.md)コマンドの説明を参照してください。

##### 環境変数を使用する 

[SET ENVIRONMENT VARIABLE](set-environment-variable.md)コマンドを使用してスクリプトが使用する環境変数を指定できます。警告: [LAUNCH EXTERNAL PROCESS](launch-external-process.md) や**PHP Execute** を呼出した後、一連の環境変数は消去されます。

##### 特別な関数 

4Dは以下の特別な関数を提供します:

* **quit\_4d\_php**: PHPインタープリターとそのすべての子プロセスを終了するために使用します。スクリプトを実行中の子プロセスが一つでも存在していると、インタープリターは終了せず、**PHP Execute**コマンドはFalseを返します。
* **relaunch\_4d\_php**: PHPインタープリターを再起動するために使用します。

**PHP Execute**から最初のリクエストが送信されると、インタープリターが自動で再起動されることに留意してください。

#### 例題 1 

"myPhpFile.php"スクリプトを関数指定なしで呼び出します。スクリプトは以下の通りです:

```PHP

```

以下の4Dコードを実行すると:

```4d
 var $result : Text
 var $isOK : Boolean
 $isOK:=PHP Execute("C:\\php\\myPhpFile.php";"";$result)
 ALERT($Result)
```

カレントのPHP バージョンが表示されます。

#### 例題 2 

"myNewScript.php"内のmyPhpFunction関数を引数付きで呼び出します。スクリプトは以下の通りです:

```PHP

```

関数を呼び出します:

```4d
 var $result : Text
 var $param1 : Text
 var $param2 : Text
 var $isOk : Boolean
 $param1 :="Hello"
 $param2 :="4D world!"
 $isOk:=PHP Execute("C:\\MyFolder\\myNewScript.php";"myPhpFunction";$result;$param1;$param2)
 ALERT($result) // "Hello 4D world!"が表示される
```

#### 例題 3 

PHPインタープリターを終了します:

```4d
 $ifOk:=PHP Execute("";"quit_4d_php")
```

#### 例題 4 

エラー管理:

```4d
  // エラー管理メソッドをインストール
 phpCommError:="" // PHPErrorHandler内で更新される
 $T_saveErrorHandler :=Method called on error
 ON ERR CALL("PHPErrorHandler")

 // スクリプトを実行
 var $T_result : Text
 If(PHP Execute("C:\\MyScripts\\MiscInfos.php";"";$T_result))
  // エラーなし, $T_Resultには結果が返される
 Else
  // エラーが検知された, PHPErrorHandlerメソッドにより管理
    If(phpCommError="")
       ... // PHPエラー, PHP GET FULL RESPONSEを使用する
    Else
       ALERT(phpCommError)
    End if
 End if
 
  // エラー管理メソッドをアンインストール
 ON ERR CALL($T_saveErrorHandler)


```

PHP\_errHandlerメソッドは以下の通りです :

```4d
 phpCommError:=""
 GET LAST ERROR STACK(arrCodes;arrComps;arrLabels)
 For($i;1;Size of array(arrCodes))
    phpCommError:=phpCommError+String(arrCodes{$i})+" "+arrComps{$i}+" "+
    arrLabels{$i}+"\r"
 End for
```

#### 例題 5 

実行前に4Dで動的にスクリプトを作成します:

```4d
 DOCUMENT TO BLOB("C:\\Scripts\\MyScript.php";$blobDoc)
 If(OK=1)
    $strDoc:=BLOB to text($blobDoc;UTF8 text without length)
 
    $strPosition:=Position("function2Rename";$strDoc)
 
    $strDoc:=Insert string($strDoc;"_v2";Length("function2Rename")+$strPosition)
 
    TEXT TO BLOB($strDoc;$blobDoc;UTF8 text without length)
    BLOB TO DOCUMENT("C:\\Scripts\\MyScript.php";$blobDoc)
    If(OK#1)
       ALERT("スクリプトの作成中にエラーが発生しました。")
    End if
 End if
```

その後スクリプトを実行します:

```4d
 $err:=PHP Execute("C:\\Scripts\\MyScript.php";"function2Rename_v2";*)
```

#### 例題 6 

日付と時間タイプの値を直接受け取ります。スクリプトは以下の通りです:

```PHP

```

4D側で日付を受け取ります:

```4d
 var $phpResult_date : Date
 $result :=PHP Execute("C:\php_scripts\ReturnDate.php";"";$phpResult_date)
  //$phpResult_date は !2009/05/04!

4D側で時間を受け取ります:
 
 var $phpResult_time : Time
 $result :=PHP Execute("C:\php_scripts\ReturnDate.php";"";$phpResult_time)
 
  //$phpResult_time は ?01 :02 :03?


```

#### 例題 7 

配列にデータを配分します:

```4d
 ARRAY TEXT($arText ;0)
 ARRAY LONGINT($arLong ;0)
 $p1 :=","
 $p2 :="11,22,33,44,55"
 $phpok :=PHP Execute("";"explode";$arText;$p1;$p2)
 $phpok :=PHP Execute("";"explode";$arLong;$p1;$p2)
 
  // $arTextには文字値 "11", "22", "33",... が格納されます。
  // $arLongには数値 11, 22, 33,... が格納されます。
```

#### 例題 8 

配列を初期化します:

```4d
 ARRAY TEXT($arText ;0)
 $phpok :=PHP Execute("";"array_pad";$arText;->$arText;50;"undefined")
  // PHPで以下を実行: $arrTest = array_pad($arrTest, 50, ’undefined’);
  // $arTextは50 要素の"undefined"で埋められます。
```

#### 例題 9 

配列を使用して引数を渡します:

```4d
 ARRAY INTEGER($arInt;0)
 $phpok :=PHP Execute("";"json_decode";$arInt;"[13,51,69,42,7]")
  // PHPで以下を実行: $arInt = json_decode(’[13,51,69,42,7]’);
  // 配列に初期値が設定されます
```

#### 例題 10 

以下の例は、文字列の始めと終わりの余分なスペースまたは不可視の文字を除去するtrimファンクションの基本的な使用法です:

```4d
 var $T_String : Text
 $T_String:="   Hello  "
 var $B : Boolean
 $B:=PHP Execute("";"trim";$T_String;$T_String)
```

trimファンクションについてのより詳細な情報については、PHPドキュメントを参照して下さい。

#### 参照 

*4DでPHPスクリプトを実行する*  
[PHP GET FULL RESPONSE](php-get-full-response.md)  
[PHP SET OPTION](php-set-option.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1058 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


