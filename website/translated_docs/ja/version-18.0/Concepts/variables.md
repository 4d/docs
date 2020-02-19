---
id: version-18.0-variables
title: 変数
original_id: variables
---

4D のデータは、根本的に異なっている 2つの方法で保持されます。 **フィールド** はディスクに永続的にデータを保存するのに対し、**変数** はメモリ上に一時的にデータを格納します。

データベースを作成する際には、フィールドに名前とデータタイプを指定します。 同様に、変数にも名前と [データタイプ](Concepts/data-types.md) を指定します。

変数はランゲージの要素です。画面上に表示されることのない、裏方に徹した変数を作成・利用することができます。 もちろん、フォーム上に変数の値を表示することもできます (ポインターやBLOBを除く)。また、変数に値を入力したり、変数の値をレポートに印刷したりすることも可能です。 このとき、入力可や入力不可の変数オブジェクトはフィールドオブジェクトと同様に振舞い、提供されるコントロールも類似しています。 フォーム上のボタン、リストボックス、スクロールエリア、ピクチャーボタンなどのオブジェクトも変数を使って制御することができるほか、保存不要な計算結果を表示させることもできます。

## 変数の作成

変数を作成するには、"コンパイラー" または "配列" テーマのコマンドを使って変数を宣言します。

**注:** 配列とは、変数の一種です。 配列とは、同じタイプの変数を番号付きで並べたものです。 詳細については [配列](Concepts/arrays.md) を参照ください。

たとえば、テキスト変数を宣言するには次のように書きます:

```4d
 C_TEXT(myText)
```

**注:** この方法は推奨されませんが、単純に使用することによって変数を作成することもできます。フィールドのように、正式にそれらを定義することは必須ではありません。 たとえば、今日の日付に30日を加えた日付を保持する変数が必要な場合、以下のように書くことができます:

```4d
 MyDate:=Current date+30 // MyDateを作成し、そこに30日後の日付が代入されます
```

いったん作成された変数は、データベースで必要とされる場所に使用できます。 たとえば、テキスト変数を同じタイプのフィールドに格納するには次のように書きます:

```4d
 [MyTable]MyField:=MyText
```

いくつかの基本的な変数宣言の例です:

```4d
 C_BLOB(vxMyBlob) // プロセス変数 vxMyBlob を BLOB型として宣言します
 C_DATE($vdCurDate) // ローカル変数 $vdCurDate を日付型として宣言します
 C_LONGINT(vg1;vg2;vg3) // 3つのプロセス変数 vg1, vg2, vg3 を倍長整数型として宣言します
 C_OBJECT($vObj) // ローカル変数 $vObj をオブジェクト型として宣言します
 C_COLLECTION($vCol) // ローカル変数 $vCol をコレクション型として宣言します
 ARRAY LONGINT(alAnArray;10) // プロセス変数 alAnArray を 10個の倍長整数型要素を持つ配列として宣言します
```

## 変数への代入

変数を対象に、データを格納したり、格納したデータを別の対象にコピーしたりすることができます。 変数にデータを格納することを、**変数にデータを代入する**と言い、代入演算子 (:=) を使っておこないます。 代入演算子はフィールドに対してデータを代入する場合にも使います。

代入演算子は、変数を作成し、変数にデータを代入するために使用します。 作成する変数名を代入演算子の左側に書きます。 たとえば:

```4d
MyNumber:=3
```

は変数 *MyNumber* を作成し、数値 3を代入します。 MyNumber が既に存在していれば、そこに数値 3が代入されます。

もちろん、変数からデータを取り出すことができなければ、便利とはいえません。 再度代入演算子を使用します。 [Products]Size というフィールドに *MyNumber* 変数の値を代入するには、代入演算子の右側に MyNumber を書きます:

```4d
[Products]Size:=MyNumber
```

これで、*[Products]Size* の値は3になります。 この例はとても単純ですが、ある場所から別の場所へランゲージによってデータを転送させる基本的な手順を表しています。

配列要素にデータを代入するには中カッコ ({...}) を使用します:

```4d
atNames{1}:="Richard"
```

## ローカル、プロセス、およびインタープロセス変数

**ローカル**、**プロセス**、および **インタープロセス** という、3種類の変数の変数を作成することができます。 これらの変数の違いは使用できるスコープにあります。また、それらを使用することのできるオブジェクトも異なります。

### ローカル変数

ローカル変数はその名のとおりメソッド内でローカルであり、変数が作成されたメソッドの範囲内でのみ使用可能で、その他のメソッドからはアクセスできません。 メソッド内でローカルであるというのは、正式には「スコープがローカルである」といいます。ローカル変数は、その使用範囲をメソッド内に限定するために用います。

ローカル変数は、以下のような目的のために使用されます:

- 他の変数名との重複を避ける。
- データを一時的に使用する。
- プロセス変数の数を減らす。

ローカル変数の名前は必ずドル記号 ($) で始め、この記号を除く31文字までの文字を指定できます。 これより長い名前を指定すると、4D は余分の32文字以降を切り捨てます。

多くのメソッドや変数を持つデータベースで作業する場合、現在作業しているメソッドの範囲内で一時的に変数が必要となる場合がよくあります。 この場合、同じ変数名が他で使用されていないかどうかを気にすることなくローカル変数を作成することができます。

Frequently, in a database, small pieces of information are needed from the user. The command can obtain this information. It displays a dialog box with a message prompting the user for a response. When the user enters the response, the command returns the information the user entered. You usually do not need to keep this information in your methods for very long. This is a typical way to use a local variable. Here is an example:

```4d
 $vsID:=Request("Please enter your ID:")
 If(OK=1)
    QUERY([People];[People]ID =$vsID)
 End if
```

This method simply asks the user to enter an ID. It puts the response into a local variable, $vsID, and then searches for the ID that the user entered. When this method finishes, the $vsID local variable is erased from memory. This is fine, because the variable is needed only once and only in this method.

**Note:** Parameters $1, $2... passed to methods are local variables. For more information, please refer to [Parameters](Concepts/parameters.md).

### Process variables

A process variable is available only within a process. It is accessible to the process method and any other method called from within the process.

A process variable does not have a prefix before its name. A process variable name can contain up to 31 characters.

In interpreted mode, variables are maintained dynamically; they are created and erased from memory “on the fly.” In compiled mode, all processes you create (user processes) share the same definition of process variables, but each process has a different instance for each variable. For example, the variable myVar is one variable in the process P_1 and another one in the process P_2.

A process can “peek and poke” process variables from another process using the commands `GET PROCESS VARIABLE` and `SET PROCESS VARIABLE`. It is good programming practice to restrict the use of these commands to the situation for which they were added to 4D:

- Interprocess communication at specific places or your code
- Handling of interprocess drag and drop
- In Client/Server, communication between processes on client machines and the stored procedures running on the server machines

For more information, see the chapter **Processes** and the description of these commands.

### Interprocess variables

Interprocess variables are available throughout the database and are shared across all cooperative processes. They are primarily used to share information between processes.

> Use of interprocess variables is not recommended since they are not available from preemptive processes and tend to make the code less maintainable.

The name of an interprocess variable always begins with the symbols (<>) — a “less than” sign followed by a “greater than” sign— followed by 31 characters.

In Client/Server, each machine (Client machines and Server machine) share the same definition of interprocess variables, but each machine has a different instance for each variable.