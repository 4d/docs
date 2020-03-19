---
id: version-18.0-identifiers
title: 識別子の命名規則
original_id: identifiers
---

この章では、4D ランゲージにおけるさまざまな要素 (変数、テーブル、オブジェクト、フォームなど) の命名規則について説明します。

## 基本ルール

以下の命名規則は 4D フレームワークにおいて全般的に適用されます:

- 識別子の 1文字目は、半角アルファベット、アンダースコア ("_")、あるいはドル記号 ("$") で始めます。
- その後の文字には、半角アルファベット文字・数字・スペース・アンダースコアを使用ができます。
- テーブル・フィールド・メソッド・変数の名称に、ピリオド (".") および大カッコ ("[ ]") は使用できません。
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

## テーブル

大カッコ内 ([...]) に名前を入れることで、テーブルを表します。 テーブル名は、31文字以内で指定します。

例: 

```4d
DEFAULT TABLE([Orders])
FORM SET INPUT([Clients];"Entry")
ADD RECORD([Letters])
```

## フィールド

フィールドが属するテーブルを最初に指定することで、フィールドを表します。 フィールド名はテーブル名のすぐ後に続けます。 フィールド名は31文字以内で指定します。

例: 

```4d
[Orders]Total:=Sum([Line]Amount)
QUERY([Clients];[Clients]Name="Smith")
[Letters]Text:=Capitalize text([Letters]Text)
```

## インタープロセス変数

名前の先頭にインタープロセス記号 (<>) を付けることによって、インタープロセス変数を表します。

インタープロセス変数名は、<> 記号を除いて最大255文字以内で指定することができます。

例: 

```4d
<>vlProcessID:=Current process
<>vsKey:=Char(KeyCode)
If(<>vtName#"")
```

## プロセス変数

(<>記号や$記号から始まらない) 名前を使用して、プロセス変数を表します。 プロセス変数は255文字以内の文字で名前を指定します

例: 

```4d
<>vrGrandTotal:=Sum([Accounts]Amount)
If(bValidate=1)
vsCurrentName:=""
```

## ローカル変数

ドル記号 ($) を名前の先頭につけてローカル変数を表します。 ローカル変数名は、ドル記号 ($) を除いて255文字まで指定することができます。

例: 

```4d
For($vlRecord;1;100)
If($vsTempVar="No")
$vsMyString:="Hello there"
```

## 配列

配列は、配列作成時に配列宣言コマンド (ARRAY LONGINT 等) に渡す名前でもって表されます。 配列は変数であり、スコープに基づいて次の3種類があります:

- インタープロセス配列
- プロセス配列
- ローカル配列

### インタープロセス配列

インタープロセス配列の名前は、先頭にインタープロセス記号 (<>) が付きます。

インタープロセス配列名は、インタープロセス記号 (<>) を除いて255文字以内で指定します。

例: 

```4d
ARRAY TEXT(<>atSubjects;Records in table([Topics]))
SORT ARRAY(<>asKeywords;>)
ARRAY INTEGER(<>aiBigArray;10000)
```

### プロセス配列

(<>記号や$記号から始まらない) 名前を使用して、プロセス配列を表わします。 プロセス配列名は255文字以内で指定します。

例: 

```4d
ARRAY TEXT(atSubjects;Records in table([Topics]))
SORT ARRAY(asKeywords;>)
ARRAY INTEGER(aiBigArray;10000)
```

### ローカル配列

配列名がドル記号 ($) で始まるものは、ローカル配列です。 ローカル配列名は、ドル ($) 記号を除いて255文字以内で指定します。

例: 

```4d
ARRAY TEXT($atSubjects;Records in table([Topics]))
SORT ARRAY($asKeywords;>)
ARRAY INTEGER($aiBigArray;10000)
```

### 配列の要素

中カッコ ("{ }") を使用して、インタープロセス配列、プロセス配列、ローカル配列の要素を参照します。 参照される配列要素は数式で表されます。

例: 

```4d
    // インタープロセス配列の要素を指定します
If(<>asKeywords{1}="Stop")
<>atSubjects{$vlElem}:=[Topics]Subject
$viNextValue:=<>aiBigArray{Size of array(<>aiBigArray)}

    // プロセス配列の要素を指定します
If(asKeywords{1}="Stop")
atSubjects{$vlElem}:=[Topics]Subject
$viNextValue:=aiBigArray{Size of array(aiBigArray)}

    // ローカル配列の要素を指定します
If($asKeywords{1}="Stop")
$atSubjects{$vlElem}:=[Topics]Subject
$viNextValue:=$aiBigArray{Size of array($aiBigArray)}
```

### 二次元配列の要素

中カッコ ("{ }") を2回使用して、2次元配列の要素を参照します。 参照される要素は2組の中カッコ内の2つの数式で表されます。

例: 

```4d
    // 2次元インタープロセス配列の要素を指定します
If(<>asKeywords{$vlNextRow}{1}="Stop")
<>atSubjects{10}{$vlElem}:=[Topics]Subject
$viNextValue:=<>aiBigArray{$vlSet}{Size of array(<>aiBigArray{$vlSet})}

    // 2次元プロセス配列の要素を指定します
If(asKeywords{$vlNextRow}{1}="Stop")
atSubjects{10}{$vlElem}:=[Topics]Subject
$viNextValue:=aiBigArray{$vlSet}{Size of array(aiBigArray{$vlSet})}

    // 2次元ローカル配列の要素を指定します
If($asKeywords{$vlNextRow}{1}="Stop")
$atSubjects{10}{$vlElem}:=[Topics]Subject
$viNextValue:=$aiBigArray{$vlSet}{Size of array($aiBigArray{$vlSet})}
```

## オブジェクト属性

オブジェクト記法が有効化されているとき、ドット (".") をオブジェクト名 (あるいは属性名) と属性名の間に置くことでオブジェクト属性 (オブジェクトプロパティとも呼びます) を指定します。 属性名は255文字以内の文字列で指定し、また大文字と小文字を区別することに注意してください。

例: 

```4d
myObject.myAttribute:="10"
$value:=$clientObj.data.address.city
```

**注:** オブジェクト属性名にはさらにルールが適用されます (オブジェクト属性は ECMAScript の仕様に沿う必要があります)。 詳細については、[オブジェクト記法の使用](Concepts/dt_object.md#オブジェクト記法の使用) を参照ください。

## Forms

You designate a form by using a string expression that represents its name. A form name can contain up to 31 characters.

例: 

```4d
FORM SET INPUT([People];"Input")
FORM SET OUTPUT([People];"Output")
DIALOG([Storage];"Note box"+String($vlStage))
```

## Form objects

You designate a form object by passing its name as a string, preceded by the * parameter. A form object name can contain up to 255 characters.

例: 

```4d
OBJECT SET FONT(*;"Binfo";"Times")
```

**Note:** Do not confuse form objects (buttons, list boxes, variables that can be entered, etc.) and objects in the 4D language. 4D language objects are created and manipulated via object notation or dedicated commands.

## Project methods

You designate a project method (procedure or function) by using its name. A method name can contain up to 31 characters.

**Note:** A project method that does not return a result is also called a procedure. A project method that returns a result is also called a function.

例: 

```4d
If(New client)
DELETE DUPLICATED VALUES
APPLY TO SELECTION([Employees];INCREASE SALARIES)
```

**Tip:** It is a good programming technique to adopt the same naming convention as the one used by 4D for built-in methods. Use uppercase characters for naming your methods; however if a method is a function, capitalize the first character of its name. By doing so, when you reopen a database for maintenance after a few months, you will already know if a method returns a result by simply looking at its name in the Explorer window.

**Note:** When you call a method, you just type its name. However, some 4D built-in commands, such as `ON EVENT CALL`, as well as all the Plug-In commands, expect the name of a method as a string when a method parameter is passed. 例: 

例: 

```4d
    //This command expects a method (function) or formula
QUERY BY FORMULA([aTable];Special query)
    //This command expects a method (procedure) or statement
APPLY TO SELECTION([Employees];INCREASE SALARIES)
    //But this command expects a method name
ON EVENT CALL("HANDLE EVENTS")
```

Project methods can accept parameters (arguments). メソッドに引数を渡す場合は、メソッド名の後の括弧 () に引数を入れ、 セミコロン (;) で区切ります。 引数は受け取り側のメソッドにて、受け取り順に番号が付けられたローカル変数 ($1, $2, ...$n) に格納されます。 In addition, multiple consecutive (and last) parameters can be addressed with the syntax ${n}where n, numeric expression, is the number of the parameter.

Inside a function, the $0 local variable contains the value to be returned.

例: 

```4d
    //Within DROP SPACES $1 is a pointer to the field [People]Name
DROP SPACES(->[People]Name)

    //Within Calc creator:
    //- $1 is numeric and equal to 1
    //- $2 is numeric and equal to 5
    //- $3 is text or string and equal to "Nice"
    //- The result value is assigned to $0
$vsResult:=Calc creator(1;5;"Nice")

    //Within Dump:
    //- The three parameters are text or string
    //- They can be addressed as $1, $2 or $3
    //- They can also be addressed as, for instance, ${$vlParam} where $vlParam is 1, 2 or 3
    //- The result value is assigned to $0
vtClone:=Dump("is";"the";"it")
```

## Plug-In Commands

You designate a plug-in command by using its name as defined by the plug-in. A plug-in command name can contain up to 31 characters.

例: 

```4d
$error:=SMTP_From($smtp_id;"henry@gmail.com")
```

## Sets

From the scope point of view, there are two types of sets:

- Interprocess sets
- Process sets

4D Server also includes:

- Client sets

### Interprocess Sets

A set is an interprocess set if the name of the set is preceded by the symbols (<>) — a “less than” sign followed by a “greater than” sign.

An interprocess set name can contain up to 255 characters, not including the <> symbols.

### Process Sets

You denote a process set by using a string expression that represents its name (which cannot start with the <> symbols or the dollar sign $). A set name can contain up to 255 characters.

### Client Sets

The name of a client set is preceded by the dollar sign ($). A client set name can contain up to 255 characters, not including the dollar sign.

**Note:** Sets are maintained on the Server machine. In certain cases, for efficiency or special purposes, you may need to work with sets locally on the Client machine. To do so, you use Client sets.

例: 

```4d
    //Interprocess sets
USE SET("<>Deleted Records")
CREATE SET([Customers];"<>Customer Orders")
If(Records in set("<>Selection"+String($i))>0)
    //Process sets
USE SET("Deleted Records")
CREATE SET([Customers];"Customer Orders")
If(Records in set("<>Selection"+String($i))>0)
    //Client sets
USE SET("$Deleted Records")
CREATE SET([Customers];"$Customer Orders")
If(Records in set("$Selection"+String($i))>0)
```

## Named Selections

From the scope point of view, there are two types of named selections:

- Interprocess named selections
- Process named selections.

### Interprocess Named Selections

A named selection is an interprocess named selection if its name is preceded by the symbols (<>) — a “less than” sign followed by a “greater than” sign.

An interprocess named selection name can contain up to 255 characters, not including the <> symbols.

### Process Named Selections

You denote a process named selection by using a string expression that represents its name (which cannot start with the <> symbols nor the dollar sign $). A named selection name can contain up to 255 characters.

例: 

```4d
    //Interprocess Named Selection
USE NAMED SELECTION([Customers];"<>ByZipcode")
    //Process Named Selection
USE NAMED SELECTION([Customers];"<>ByZipcode")
```

## Processes

In the single-user version, or in Client/Server on the Client side, there are two types of processes:

- Global processes
- Local processes.

### Global Processes

You denote a global process by using a string expression that represents its name (which cannot start with the dollar sign $). A process name can contain up to 255 characters.

### Local Processes

You denote a local process if the name of the process is preceded by a dollar ($) sign. The process name can contain up to 255 characters, not including the dollar sign.

例: 

```4d
    //Starting the global process "Add Customers"
$vlProcessID:=New process("P_ADD_CUSTOMERS";48*1024;"Add Customers")
    //Starting the local process "$Follow Mouse Moves"
$vlProcessID:=New process("P_MOUSE_SNIFFER";16*1024;"$Follow Mouse Moves")
```

## Summary of Naming Conventions

The following table summarizes 4D naming conventions.

| Identifier                   | Max. Length | 例題                         |
| ---------------------------- | ----------- | -------------------------- |
| テーブル                         | 31          | [Invoices]                 |
| フィールド                        | 31          | [Employees]Last Name       |
| Interprocess Variable/Array  | <> + 31     | <>vlNextProcessID          |
| Process Variable/Array       | 31          | vsCurrentName              |
| Local Variable/Array         | $ + 31      | $vlLocalCounter            |
| Object attribute             | 255         | $o.myAttribute             |
| Form                         | 31          | "My Custom Web Input"      |
| Form object                  | 255         | "MyButton"                 |
| Project method               | 31          | M_ADD_CUSTOMERS          |
| Plug-in Routine              | 31          | PDF SET ROTATION           |
| Interprocess Set             | <> + 255    | "<>Records to be Archived" |
| Process Set                  | 255         | "Current selected records" |
| Client Set                   | $ + 255     | "$Previous Subjects"       |
| Named Selection              | 255         | "Employees A to Z"         |
| Interprocess Named Selection | <> + 255    | "<>Employees Z to A"       |
| Local Process                | $ + 255     | "$Follow Events"           |
| Global Process               | 255         | "*P_INVOICES_MODULE*"    |
| Semaphore                    | 255         | "mysemaphore"              |


**Note:** If non-Roman characters are used in the names of the identifiers, their maximum length may be smaller.

## Resolving Naming Conflicts

Be sure to use unique names for the different elements in your database. If a particular object has the same name as another object of a different type (for example, if a field is named Person and a variable is also named Person), 4D uses a priority system.

4D identifies names used in procedures in the following order:

1. フィールド
2. コマンド
3. メソッド
4. Plug-in routines
5. Predefined constants
6. Variables.

For example, 4D has a built-in command called `Date`. If you named a method *Date*, 4D would recognize it as the built-in `Date` command, and not as your method. This would prevent you from calling your method. If, however, you named a field “Date”, 4D would try to use your field instead of the `Date` command.