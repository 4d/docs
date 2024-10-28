---
id: method-get-modification-date
title: METHOD GET MODIFICATION DATE
slug: /commands/method-get-modification-date
displayed_sidebar: docs
---

<!--REF #_command_.METHOD GET MODIFICATION DATE.Syntax-->**METHOD GET MODIFICATION DATE** ( *path* ; *modDate* ; *modTime* {; *} )<!-- END REF-->
<!--REF #_command_.METHOD GET MODIFICATION DATE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| path | Text, Text配列 | &#8594;  | メソッドパスを格納したテキストまたはテキスト配列 |
| modDate | Date, Date配列 | &#8592; | メソッド更新日 |
| modTime | Time, Integer array | &#8592; | メソッド更新時刻 |
| * | 演算子 | &#8594;  | 指定時 = コンポーネントで実行されたとき、コマンドはホストデータベースに適用される (コンポーネントのコンテキスト以外ではこの引数は無視されます) |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.METHOD GET MODIFICATION DATE.Summary-->**METHOD GET MODIFICATION DATE**コマンドは*path*引数で指定されたメソッドの更新日と時刻をそれぞれ*modDate*と*modTime*引数に返します。<!-- END REF-->

配列または変数に基づく2タイプのシンタックスを使用できます:  

```4d
 var tVpath : Text // 変数
 var vDate : Date
 var vTime : Time
 METHOD GET MODIFICATION DATE(tVpath;vDate;vTime) // 1つのメソッドの日付と時刻
```

```4d
 ARRAY TEXT(arrPaths;0) // 配列
 ARRAY DATE(arrDates;0)
 ARRAY LONGINT(arrTimes;0)
 METHOD GET MODIFICATION DATE(arrPaths;arrDates;arrTimes) // 複数メソッドの日付と時刻
```

この2つのシンタックスを混合して使用することはできません。 

コマンドがコンポーネントから実行されると、デフォルトでコンポーネントメソッドに適用されます。*\** 引数を渡すとホストデータベースのメソッドにアクセスします。

#### 例題 1 

複数のメソッドの変更日時を探したい場合を考えます:

```4d
 ARRAY TEXT(arrPaths;0)
 APPEND TO ARRAY(arrPaths;"MyMethod1")
 APPEND TO ARRAY(arrPaths;"MyMethod2")
 ...
 ARRAY DATE(arrDates;0)
 ARRAY LONGINT(arrTimes;0)
 METHOD GET MODIFICATION DATE(arrPaths;arrDates;arrTimes)
```

#### 例題 2 

モジュール内にある、"Web\_"の接頭辞がつくメソッドの変更日を取得したい場合を考えます。パスに"@"記号を使用することはできませんが、以下のように書くことができます:

```4d
 ARRAY TEXT($_webMethod;0)
 METHOD GET NAMES($_webMethod;"Web_@")
 ARRAY DATE($_date;0)
 ARRAY LONGINT($_time;0)
 METHOD GET MODIFICATION DATE($_webMethod;$_date;$_time)
```

  
