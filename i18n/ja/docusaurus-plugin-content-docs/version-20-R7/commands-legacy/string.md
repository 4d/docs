---
id: string
title: String
slug: /commands/string
displayed_sidebar: docs
---

<!--REF #_command_.String.Syntax-->**String** ( *expression* {; *format* {; *addTime*}} ) : Text<!-- END REF-->
<!--REF #_command_.String.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| expression | Expression | &#8594;  | 文字列式を返したい式 (実数、整数、倍長整数、日付、時間、文字列、 テキスト、ブール、未定義を指定可能) |
| format | Integer, Text | &#8594;  | 表示フォーマット |
| addTime | Time | &#8594;  | expressionが日付の時、文字列に追加する時間 |
| 戻り値 | Text | &#8592; | 式の文字列式 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.String.Summary-->**String**コマンドは、*expression*に渡した数値、日付、時間、文字列、またはブールを文字列に変換します。<!-- END REF-->

オプションの*format*を指定しない場合、適当なデフォルトの形式で文字列が返されます。*format*を指定すると、結果の文字列は指定した形式になります。

オプションの*addTime*引数は、日付に時間を複合フォーマットで追加します。この引数は*epression*引数が日付型の時にのみ使用できます (後述)。

**数値式**  
*expression*が数値（実数、整数、倍長整数）である場合、オプションで文字列フォーマットを渡すことができます。次に例を示します。

| **例題**                             | **結果**               | **コメント**         |
| ---------------------------------- | -------------------- | ---------------- |
| String(2^15)                       | "32768"              | デフォルトフォーマット      |
| String(2^15;"###,##0 Inhabitants") | "32,768 Inhabitants" |                  |
| String(1/3;"##0.00000")            | "0.33333"            |                  |
| String(1/3)                        | "0.3333333333333 "   | デフォルトフォーマット(\*)  |
| String(Arctan(1)\*4)               | "3.14159265359 "     | デフォルトフォーマット(\*)  |
| String(Arctan(1)\*4;"##0.00")      | "3.14"               |                  |
| String(-1;"&x")                    | "0xFFFFFFFF"         |                  |
| String(-1;"&$")                    | "$FFFFFFFF"          |                  |
| String(0 ?+ 7;"&x")                | "0x0080"             |                  |
| String(0 ?+ 7;"&$")                | "$80"                |                  |
| String(0 ?+ 14;"&x")               | "0x4000"             |                  |
| String(0 ?+ 14;"&$")               | "$4000"              |                  |
| String(50,3;"&xml")                | "50.3"               | 必ず "." を小数点として使用 |
| String(Num(1=1);"True;;False")     | "True"               |                  |
| String(Num(1=2);"True;;False")     | "False"              |                  |
| String(Log(-1))                    | ""                   | 未定義の数値           |
| String(1/0)                        | "INF"                | 正の無限数            |
| String(-1/0)                       | "-INF"               | 負の無限数            |

(\*) 4D v14 R3 以降、実数をテキストへと変換するアルゴリズムは、有効数字13桁に基づいて計算されています(それ以前のバージョンの4Dは15桁)

フォーマットは、フォームの数値フォーマットと同じ方法で指定します。数値フォーマットの詳細については4D Design Referenceマニュアルの*表示フォーマット*を参照してください。カスタムフォーマットの書式名を*format*に渡すことができます。カスタムフォーマットの名前は“|”で始めなければなりません。  
  
**注:** コンパイルモードにおいて、**String** 関数は "整数64bit" 型フィールドと互換性がありません。

**日付式**

*expression*が日付式の場合で、*format* 引数を省略した場合、文字列はシステムで指定されたデフォルトフォ－マットを使用して返されます。

それ以外の場合、*format* 引数には、以下のものを渡すことができます:

* *Date Display Formats* テーマ内の以下の定数を通して利用可能な定義済みフォーマット(倍長整数値): 
 
|定数                          | 値   | コメント                                     |  
| --------------------------- | --- | ---------------------------------------- |  
| Blank if null date          | 100 | 0の代わりに""                                 |  
| Date RFC 1123               | 10  | Fri, 10 Sep 2010 13:07:20 GMT            |  
| Internal date abbreviated   | 6   | Dec 29, 2006                             |  
| Internal date long          | 5   | December 29, 2006                        |  
| Internal date short         | 7   | 2006/12/29                               |  
| Internal date short special | 4   | 06/12/29 (しかし 1986/12/29 または 2096/12/29) |  
| ISO Date                    | 8   | 2006-12-29T00:00:00                      |  
| ISO Date GMT                | 9   | 2010-09-13T16:11:53Z                     |  
| System date abbreviated     | 2   |                                          |  
| System date long            | 3   |                                          |  
| System date short           | 1   |                                          |  
    
例:  
```4d  
 $vsResult:=String(!2023-11-27!) //"11/27/2023"  
 $vsResult:=String(!2023-11-27!;Internal date long) // "November 27, 2023"  
 $vsResult:=String(!2023-11-27!;ISO Date GMT) // "2023-11-26T23:00:00Z" in French timezone  
```
* または [パターンに基づいてビルトされたカスタマイズされたフォーマット](https://developer.4d.com/docs/Project/date-time-formats) (文字列値)  
例:  
    
```4d  
 $vsResult:=String(!2023-11-27!;"EEEE d MMMM y GGGG") //"Monday 27 November 2023 Anno Domini"  
 $vsResult:=String(!2023-11-27!;"E dd/MM/yyyy zzzz") //"Mon 27/11/2023 GMT+01:00" in French timezone  
```

**注意:** 表示フォーマットはシステム設定に応じて変化する可能性があります。

***addTime* 引数** 
日付式を処理している場合、 *addTime* 引数に時間を渡すこともできます。この引数を使用することで、日付と時間を組み合わせることができ、それによって現在のスタンダード(ISO Date GMT および Date RFC 1123 定数)に合致するタイムスタンプを生成することができます。これらのフォーマットは特にXML およびWeb の処理において特に有用です。*addTime* 引数は*expression* 引数が日付型の場合にのみ使用できます。

この引数は定義済み日付フォーマットとパターンベース日付フォーマットの両方に対して使用することができます。例:

```4d
 $dateTime:=String(!2010-09-09!;ISO date GMT;Current time) //"2010-09-09T08:30:41Z"
 $dateTime2:=String(!2023-11-27!;"E dd/MM/yyyy 'at' hh:mm aa O";?11:15:00?) //"Mon 27/11/2023 at 11:15 AM GMT+1"
```

**日付/時間** **複合フォーマットに関するメモ** **:**

* ISO Date GMTフォーマットはISO8601標準に対応します。日付と時間を含みタイムゾーン (GMT) を考慮します。  
```4d  
 $mydate:=String(Current date;ISO Date GMT;Current time) // 2010-09-13T16:11:53Zを返します。  
```  
    
上記の例の最後の"Z"はGMTフォーマットの終了を表します。  
*addTime*引数を渡さない場合、ローカルタイムの午前０時として扱いGMTに変換します (例題参照)。そのため日付がローカルタイムに対して前後することがあります。  
```4d  
 $mydate:=String(Current date;ISO Date GMT) // 2010-09-12T15:00:00Zを返す  
```
* ISO DateフォーマットはISO Date GMTフォーマットと同様に日付と時間を含みますが、タイムゾーンを考慮しません。当初よりこのフォーマットはISO8601標準に準拠しておらず、非常に特殊な目的のために予約されたものです。  
```4d  
 $mydate:=String(!13/09/2010!;ISO Date) // 2010-09-13T00:00:00 を返す（タイムゾーンに依存しない）  
 &NBSP;&NBSP;&NBSP;&NBSP;$mydate:=String(Current date;ISO Date;Current time) // 2010-09-13T18:11:53 を返す  
```
* Date RFC 1123フォーマットは日付と時間の組み合わせをRFC 822と1123で定義された標準に基づきフォーマットします。このフォーマットはたとえばHTTPヘッダーでcookieの有効期限を設定する際に必要となります。  
```4d  
 $mydate:=String(Current date;Date RFC 1123;Current time) // Fri, 10 Sep 2010 13:07:20 GMTを返す  
```  
    
表現される日時は、タイムゾーンが考慮されます(GMTゾーン)。日付のみを渡した場合、コマンドはローカルタイムの00:00をGMT時間で表現して返すため、ローカルのタイムゾーンによっては日付が前後にずれる可能性があります:  
```4d  
 $mydate:=String(!2010-09-09!;Date RFC 1123) // Wed, 08 Sep 2010 22:00:00 GMT を返す  
```

**時間式**  
*expression*が時間型で、*format* 引数を省略した場合、デフォルトフォ－マット( HH:MM:SS )を使用して文字列が返されます。

それ以外の場合、*format* 引数には、以下のものを渡すことができます:

* *Time Display Formats* テーマ内の以下の定数を通して利用可能な定義済みのフォーマット(倍長整数値): 
 
|定数                           | 値   | コメント                    |  
| ---------------------------- | --- | ----------------------- |  
| Blank if null time           | 100 | 0の代わりに""                |  
| HH MM                        | 2   | 01:02                   |  
| HH MM AM PM                  | 5   | 1:02 AM                 |  
| HH MM SS                     | 1   | 01:02:03                |  
| Hour min                     | 4   | 1時2分                    |  
| Hour min sec                 | 3   | 1時2分3秒                  |  
| ISO time                     | 8   | 0000-00-00T01:02:03     |  
| Min sec                      | 7   | 62分3秒                   |  
| MM SS                        | 6   | 62:03                   |  
| System time long             | 11  | 1:02:03 AM HNEC (Macのみ) |  
| System time long abbreviated | 10  | 1:02:03 AM (Macのみ)      |  
| System time short            | 9   | 01:02:03                |  
    
例:  
    
```4d  
 $vsResult:=String(?17:30:45?;HH MM AM PM) //"5:30 PM"  
 $vsResult:=String(?17:30:45?;Hour Min Sec) //"17 hours 30 minutes 45 seconds"  
```
* または [パターンに基づいてビルドされたカスタマイズされたフォーマット](https://developer.4d.com/docs/Project/date-time-formats) (文字列値)  
例:  
    
```4d  
 $vsResult:=String(?17:30:45?;"hh:mm aa O") //"05:30 PM GMT+1"  
 $vsResult:=String(?17:30:45?;"'It is' K a") //"It is 5 PM"  
```

**文字列式**  
*expression*が文字列またはテキスト型の場合、コマンドは引数に渡した値と同じ値を返します。これは特にポインタを使用している汎用プログラミングで有効です。  
この場合、*format*引数は渡されても無視されます。

**ブール式**  
*expression*がブール 型の場合、コマンドはアプリケーションのランゲージに文字列 "True" または"False"を返します(例えば、4Dのフランス語バージョンでは、“Vrai”または“Faux”)。  
この場合、*format*引数は渡されても無視されます。

**未定義の式**  
*expression* が未定義に評価される場合、コマンドは空の文字列を返します。これは式の結果(オブジェクト属性など)が、たとえ未定義であっても文字列として返されることを期待したい場合などに有効です。

**Null 式**  
*expression* がNull に評価される場合、コマンドは"null"の文字列を返します。これはある式(例: オブジェク属性)の結果が、nullである可能性があるが、文字列として返されることを期待する場合に有用です。

#### 参照 

[Bool](bool.md)  
[Date](date.md)  
[Num](num.md)  
[Time string](time-string.md)  
[Timestamp](timestamp.md)  