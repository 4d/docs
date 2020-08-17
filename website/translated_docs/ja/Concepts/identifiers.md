---
id: identifiers
title: 識別子の命名規則
---

この章では、4D ランゲージにおけるさまざまな要素 (変数、テーブル、オブジェクト、フォームなど) の命名規則について説明します。


## 基本ルール
以下の命名規則は 4D フレームワークにおいて全般的に適用されます:

- 識別子の 1文字目は、半角アルファベット、アンダースコア ("_")、あるいはドル記号 ("$") で始めます。
- その後の文字には、半角アルファベット文字・数字・スペース・アンダースコアを使用ができます。
- ピリオド (".") および大カッコ ("[ ]") は、テーブル・フィールド・メソッド・変数の名称に使用できません。
- カンマ (,)・スラッシュ(/)・引用符(")・コロン(:) の使用は禁止されています。
- 演算子として用いられる記号 ("*" や "+" など) の使用は禁止されています。
- 予約語を使用しないでください。予約語にはコマンド名 (`Date`, `Time` 等)、キーワード (If, For 等)、そして定数が含まれます。
- 名前の最後につけたスペースは無視されます。

### ORDA に適用される追加ルール

- スペースは使えません。
- ピリオド (".") および大カッコ ("[ ]") は使用できません。
- 大文字・小文字は区別されます。

### SQL で処理する場合の追加ルール

- 文字 _0123456789abcdefghijklmnopqrstuvwxyz のみを使用できます。
- 名前に SQLキーワード (コマンド、属性 等) が含まれていてはなりません。

**注:** ストラクチャーエディターのインスペクター下部にある ”SQL” エリアには、テーブル名やフィールド名として許可されない文字があると警告が表示されます。




## 配列

配列は、配列作成時に配列宣言コマンド (ARRAY LONGINT 等) に渡す名前でもって表されます。 Arrays are variables, and like variables, the name of an array can be up to 31 characters, not including the scope symbols, and there are three different types of arrays:

- The name of a **local** array is preceded by the dollar sign ($).
- The name of a **process** array cannot start with the <> symbols nor the dollar sign $).
- The name of an **interprocess** array is preceded by the symbols (<>) — a “less than” sign followed by a “greater than” sign.

例:
```4d
ARRAY TEXT($atSubjects;Records in table([Topics])) //local array
SORT ARRAY(asKeywords;>) //process array
ARRAY BOOLEAN(<>settings;Records in table([MySettings])) //interprocess array
```


### 配列の要素
中カッコ ("{ }") を使用して、インタープロセス配列、プロセス配列、ローカル配列の要素を参照します。 参照される配列要素は数式で表されます。

例:
```4d   
    //Addressing an element of a local array
If($asKeywords{1}="Stop")
$atSubjects{$vlElem}:=[Topics]Subject
$viNextValue:=$aiBigArray{Size of array($aiBigArray)}
```

### 二次元配列の要素
中カッコ ("{ }") を2回使用して、2次元配列の要素を参照します 。 参照される要素は2組の中カッコ内の2つの数式で表されます。

例:
```4d 
    //Addressing an element of a two-dimensional process array
If(asKeywords{$vlNextRow}{1}="Stop")
atSubjects{10}{$vlElem}:=[Topics]Subject
$viNextValue:=aiBigArray{$vlSet}{Size of array(aiBigArray{$vlSet})}
```

## フィールド

フィールドが属するテーブルを最初に指定することで、フィールドを表します。 フィールド名はテーブル名のすぐ後に続けます。 フィールド名は31文字以内で指定します。

例:
```4d
[Orders]Total:=Sum([Line]Amount)
QUERY([Clients];[Clients]Name="Smith")
[Letters]Text:=Capitalize text([Letters]Text)
```

## フォームオブジェクト

フォームオブジェクトを引数としてコマンドに渡すには、文字列の名称の前に、任意パラメーターである * 記号を使います。 オブジェクト名には最大で255バイトまで含めることができます。

例:
```4d
OBJECT SET FONT(*;"Binfo";"Times")
```

**注:** フォームオブジェクト (ボタン、リストボックス、入力可能な変数など) と 4Dランゲージのオブジェクト型を混同しないようにしてください。 4Dランゲージのオブジェクト型はオブジェクト記法と専用のコマンドを使用して作成し、管理されます。

## Forms

フォームの名前は文字列を使用して表します。 フォーム名は31文字以内で指定します。

例:
```4d
FORM SET INPUT([People];"Input")
FORM SET OUTPUT([People];"Output")
DIALOG([Storage];"Note box"+String($vlStage))
```

## 命名セレクション

A named selection name can contain up to 255 characters, not including scope character(s).

- You denote a **process** named selection by using a string expression that represents its name (which cannot start with the <> symbols nor the dollar sign $).
- You denote an **interprocess** named selection if its name is preceded by the symbols (<>) — a “less than” sign followed by a “greater than” sign.

例:
```4d
USE NAMED SELECTION([Customers];"Closed")//Process Named Selection
USE NAMED SELECTION([Customers];"<>ByZipcode") //Interprocess Named Selection
```


## オブジェクト属性

You designate an object attribute (also called object property) by placing a point (".") between the name of the object and the name of the attribute. 属性名は255文字以内の文字列で指定し、また大文字と小文字を区別することに注意してください。

例:
```4d
myObject.myAttribute:="10"
$value:=$clientObj.data.address.city
```

**注:** オブジェクト属性名にはさらにルールが適用されます (オブジェクト属性は ECMAScript の仕様に沿う必要があります)。 For more information, see \[additional rules above\](#additional-rules-for-object-property-and-ORDA names) and [Object property identifiers](Concepts/dt_object.md#object-property-identifiers).


## プラグインコマンド

プラグインにより定義された名前を使用して、プラグインコマンドを表します。 プラグインコマンド名は 31文字以内で指定します。

例:
```4d
$error:=SMTP_From($smtp_id;"henry@gmail.com")
```

## プロセス

A process name can contain up to 255 characters, not including scope character.

In the single-user version, or in Client/Server on the Client side, there are two process scopes: **global** or **local**.

- You denote a **global** process by using a string expression that represents its name (which cannot start with the dollar sign $).
- You denote a **local** process if the name of the process is preceded by a dollar ($) sign.

例:
```4d
    // グローバルプロセス "Add Customers" を開始します
$vlProcessID:=New process("P_ADD_CUSTOMERS";48*1024;"Add Customers")
    // ローカルプロセス "$Follow Mouse Moves" を開始します
$vlProcessID:=New process("P_MOUSE_SNIFFER";16*1024;"$Follow Mouse Moves")
```


## プロジェクトメソッド

プロジェクトメソッド (プロシージャーおよび関数) は名前によって表されます。 メソッド名は31文字以内で指定します。

**注:** 結果を返さないプロジェクトメソッドはプロシージャーとも呼ばれます。 結果を返すプロジェクトメソッドを関数と呼びます。

例:
```4d
If(New client)
DELETE DUPLICATED VALUES
APPLY TO SELECTION([Employees];INCREASE SALARIES)
```

**Tip:** 4Dのビルトインコマンドと同じ命名規約を利用することは良いプログラミングテクニックです。 メソッド名には大文字を使用しますが、メソッドが関数の場合には最初の文字だけを大文字にします。 このように命名することにより、数ヶ月後に保守のためプロジェクトを再度開いたときに、エクスプローラーウィンドウでその名前を見ただけで、メソッドが結果を返すかどうかがわかります。

**注:** メソッドを呼び出すには、そのメソッド名を入力します。 しかし `ON EVENT CALL` など一部の 4Dのビルトインコマンドやプラグインコマンドにメソッド名を引数として渡す場合には文字列 (ダブルクォートで括る) として渡します。 例:
```4d
    // このコマンドはメソッド (関数) またはフォーミュラを受け取ります
QUERY BY FORMULA([aTable];Special query)
    // このコマンドはメソッド (プロシージャ) またはステートメントを受け取ります
APPLY TO SELECTION([Employees];INCREASE SALARIES)
    // このコマンドはメソッド名を文字列で受け取ります
ON EVENT CALL("HANDLE EVENTS")
```

プロジェクトメソッドには引数を渡すことができます。 メソッドに引数を渡す場合は、メソッド名の後の括弧 () に引数を入れ、 セミコロン (;) で区切ります。 引数は受け取り側のメソッドにて、受け取り順に番号が付けられたローカル変数 ($1, $2, ...$n) に格納されます。 さらに、複数の連続する引数は、${n}というシンタックスを用いて使用できます。nは数値で引数の番号を示します。

関数の戻り値は、ローカル変数 $0 に代入することで指定します。

例:
```4d
    // DROP SPACES メソッド内で、$1 はフィールド [People]Name へのポインターです
DROP SPACES(->[People]Name)

    // Calc creator メソッド内で、
    //- $1 は数値の 1
    //- $2 は数値の 5
    //- $3 テキストまたは文字列の "Nice"
    //- 戻り値は $0 に代入されます
$vsResult:=Calc creator(1;5;"Nice")

    // Dump メソッド内で、
    //- 3つの引数はテキストまたは文字列です
    //- これらの引数は $1, $2, $3 で参照できます
    //- また、これらの引数を ${$vlParam} で間接的に参照することもできます ($vlParamは1, 2, 3)
    //- 戻り値は $0 に代入されます
vtClone:=Dump("is";"the";"it")
```

## セット

A set name can contain up to 255 characters, not including scope character()s).

- You denote a **process** set by using a string expression that represents its name (which cannot start with the <> symbols or the dollar sign $).
- You denote an **interprocess** set if the name of the set is preceded by the symbols (<>) — a “less than” sign followed by a “greater than” sign.
- On 4D Server, the name of a **client** set is preceded by the dollar sign ($). クライアントセット名は、ドル記号を除いて255文字以内で指定します。

> Sets are maintained on the Server machine. 効率や特殊目的のために、クライアントマシン上でローカルにセットを使用したい場合があります。 To do so, you use client sets.

例:
```4d
CREATE SET([Customers];"Customer Orders")//Process set
USE SET("<>Deleted Records") //Interprocess set
If(Records in set("$Selection"+String($i))>0) //Client set
```




## テーブル

大カッコ内 ([...]) に名前を入れることで、テーブルを表します。 テーブル名は、31文字以内で指定します。

例:
```4d
DEFAULT TABLE([Orders])
FORM SET INPUT([Clients];"Entry")
ADD RECORD([Letters])
```

## 変数

The name of a variable can be up to 31 characters, not including the scope symbols.

- You designate a **local** variable by placing a dollar sign ($) before the variable name.
- You designate a **process** variable by using its name (which cannot start with the <> symbols nor the dollar sign $)
- You designate an **interprocess** variable by preceding the name of the variable with the symbols (<>) — a “less than” sign followed by a “greater than” sign.

例:

```4d
For($vlRecord;1;100) //local variable
$vsMyString:="Hello there" //local variable
If(bValidate=1) //process variable
<>vlProcessID:=Current process //interprocess variable
```



## Summary of Identifiers

次の表は、4Dの命名規則についてまとめています。

| 識別子              | 最大 長     | 例題                         |
| ---------------- | -------- | -------------------------- |
| テーブル             | 31       | [Invoices]                 |
| フィールド            | 31       | [Employees]Last Name       |
| インタープロセス変数/配列    | <> + 31  | <>vlNextProcessID          |
| プロセス変数/配列        | 31       | vsCurrentName              |
| ローカル変数/配列        | $ + 31   | $vlLocalCounter            |
| オブジェクト属性         | 255      | $o.myAttribute             |
| フォーム             | 31       | "My Custom Web Input"      |
| フォームオブジェクト       | 255      | "MyButton"                 |
| プロジェクトメソッド       | 31       | M_ADD_CUSTOMERS          |
| プラグインコマンド        | 31       | PDF SET ROTATION           |
| インタープロセスセット      | <> + 255 | "<>Records to be Archived" |
| プロセスセット          | 255      | "Current selected records" |
| クライアントセット        | $ + 255  | "$Previous Subjects"       |
| 命名セレクション         | 255      | "Employees A to Z"         |
| インタ－プロセス命名セレクション | <> + 255 | "<>Employees Z to A"       |
| ローカルプロセス         | $ + 255  | "$Follow Events"           |
| グロ－バルプロセス        | 255      | "*P_INVOICES_MODULE*"    |
| セマフォー            | 255      | "mysemaphore"              |

**注:** 非ローマ文字 (日本語など) が識別子に使用された場合、その最大長は短かくなることがあります。

## 名前が重複する場合

プロジェクト内の要素に対して、ぞれぞれ重複しない名前を使用するようにしてください。 特定の要素が別タイプの要素と同じ名前を持つ場合 (たとえばフィールドが Person という名前で、変数も Person という名前の場合)、4Dは優先順位システムを使用します。

4Dは、メソッドで使用される名前を次の順位で識別します:

1. フィールド
2. コマンド
3. Methods
4. プラグインコマンド
5. 定義済み定数
6. 変数

たとえば、4Dには `Date` というビルトインコマンドがあります。 メソッドに *Date* という名前を付けても、4Dはビルトインコマンドの `Date` として認識し、メソッドとしては認識しません。 つまり、そのメソッドの呼び出しはできないということです。 しかしながら、フィールドを "Date" と命名した場合には、4Dは `Date` コマンドの代わりにフィールドとしての使用を試みます。

