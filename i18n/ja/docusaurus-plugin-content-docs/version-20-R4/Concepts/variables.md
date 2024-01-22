---
id: variables
title: 変数
---

4D のデータは、根本的に異なっている 2つの方法で保持されます。 **Fields** store data permanently on disk; **variables** store data temporarily in memory.

データベースを作成する際には、フィールドに名前とデータタイプを指定します。 Variables are much the same—you also give them names and different types (see [Data types](Concepts/data-types.md)).

いったん作成された変数は、アプリケーションで必要とされる場所に使用できます。 たとえば、テキスト変数を同じタイプのフィールドに格納するには次のように書きます:

```4d
 [MyTable]MyField:=MyText
```

変数はランゲージの要素です。画面上に表示されることのない、裏方に徹した変数を作成・利用することができます。 もちろん、フォーム上に変数の値を表示することもできます (ポインターやBLOBを除く)。また、変数に値を入力したり、変数の値をレポートに印刷したりすることも可能です。 このとき、入力可や入力不可の変数オブジェクトはフィールドオブジェクトと同様に振舞い、提供されるコントロールも類似しています。 フォーム上のボタン、リストボックス、スクロールエリア、ピクチャーボタンなどのオブジェクトも変数を使って制御することができるほか、保存不要な計算結果を表示させることもできます。

## 変数の宣言

You usually create variables by declaring them. 4D ランゲージでは、変数の宣言方法は2つあります:

- using the `var` keyword (recommended specially if your code uses objects and classes, and this syntax enhances code editor suggestions and type-ahead features),
- using one of the "Compiler" or "Arrays" theme 4D language commands (legacy syntax).

When variables are declared, they are initialized to the [**default value corresponding to their type**](data-types.md#default-values), which they will keep during the session as long as they have not been [assigned](#assigning-data). Alternatively, when declaring variables, you can [initialize](#initializing-variables-in-the-declaration-line) their value along with their data type all within one line.

:::note

Although it is not recommended, you can create variables simply by using them; you do not necessarily need to formally declare them. For example, to create a variable that will hold the current date plus 30 days, you can write:

```4d
 MyDate:=Current date+30 //MyDate is created  
 // 4D guesses it is of date type  
 // and assigns the current date plus 30 days
```

When a variable is created before being declared, it is not initialized at the declaration step.

:::

To declare a variable of any type, use the following syntax:

`var <varName>{; <varName2>;...}{ : <varType>}`

例:

```4d
var $myText : Text  // テキスト変数
var myDate1; myDate2 : Date  // 複数の日付変数
var $myFile : 4D.File  // File クラスオブジェクト変数
var $myVar // バリアント型変数
```

`varName` is the variable name, it must comply with the [4D rules](Concepts/identifiers.md) about identifiers.
This syntax only supports [local and process variables](#local-process-and-interprocess-variables) declarations, thus excluding [interprocess variables](#interprocess-variables) and [arrays](Concepts/arrays.md).

`varType` can be:

- a [basic type](Concepts/data-types.md), in which case the variable contains a value of the declared type,
- a [class reference](Concepts/classes.md) (4D class or user class), in which case the variable contains a reference to an object of the defined class.

If `varType` is omitted, a variable of the **variant** type is created.

The following table lists all supported `varType` values:

| varType                     | 内容                                               |
| --------------------------- | ------------------------------------------------ |
| `Text`                      | テキスト値                                            |
| `Date`                      | 日付値                                              |
| `Time`                      | 時間値                                              |
| `Boolean`                   | ブール値                                             |
| `Integer`                   | 倍長整数値                                            |
| `Real`                      | 実数値                                              |
| `Pointer`                   | ポインター値                                           |
| `Picture`                   | ピクチャー値                                           |
| `Blob`                      | スカラーBLOB値                                        |
| `Collection`                | コレクション値                                          |
| `Variant`                   | バリアント値                                           |
| `Object`                    | デフォルトクラス (4D.Object) のオブジェクト  |
| `4D.<className>`            | 4Dクラス名のオブジェクト                                    |
| `cs.<className>`            | ユーザークラス名のオブジェクト                                  |
| `cs.<namespace><className>` | Object of the `<namespace>` component class name |

### 例題

- 基本のデータ型の、ローカル変数およびプロセス変数の宣言:

```4d
var $myText; myText; $vt : Text
var myVar //variant

var $o : Object    
// 次と同義です:
var $o : 4D.Object
// C_OBJECT($o) とも同義です
```

- 4Dクラス型のオブジェクト変数の宣言:

```4d
var $myFolder : 4D.Folder
var $myFile : 4D.File
```

- ユーザークラス型のオブジェクト変数の宣言:

```4d
var $myClass : cs.MyClass
var $dataclass : cs.Employee
var $entity : cs.EmployeeEntity
```

## 宣言と同時に変数を初期化する

変数を宣言する際には、1つのステートメントでデータ型と初期値の両方を指定することができます。 次に例を示します:

```4d
var $a : Text:="hello"
var $b : Date:=!2023-09-12!
var $c : Object:=New object()
var $d : cs.Customer:=cs.Customer.new()
```

変数は、データ型を明示的に指定せずに宣言および初期化することもできます。その場合、変数の型は 4D によって推論されます。 次に例を示します:

```4d
var $text:="hello"  // Inferred as Text 
var $number:=20  // Inferred as Real 
var $obj:={}  // Inferred as an Object 
var $mycol:=[]  // Inferred as a Collection  

```

:::note

The inferred type might be different between [interpreted and compiled mode](interpreted.md) if the evaluation of the value is too ambiguous. この場合、コンパイラーによって警告が生成され、バリアント型が使用されます。 たとえば、次の $a の型はインタープリターモードでは正しくテキスト型と推論されますが、シンタックスチェックを実行すると警告が生成され、$a はコンパイル済みモードでバリアントとして型付けされます。

```4d
var $class:={test: "a"}
var $a:=$class.test

```

:::

4D は最も一般的なタイプを推論しようとします。 For instance, it uses the Real type rather than the Integer type when a variable is initialized with an integer value (e.g., `var $a:=10 //Real type is inferred`). このような場合や、クラスのインスタンス化など複雑な型を持つ変数を初期化する場合は、明示的に型を指定することが推奨されます。

ほとんどの場合、変数の型は自動的に決まります。 例外は、プロセス変数やインタープロセス変数に値を代入した場合で、その場合は警告メッセージが表示されます。

:::note

複数同時の代入はサポートされていません:

```4d
var $a; $b : Integer:=15 //error

```

:::

## 変数への代入

変数を対象に、データを格納したり、格納したデータを別の対象にコピーしたりすることができます。 Putting data into a variable is called **assigning the data to the variable** and is done with the assignment operator (:=). 代入演算子はフィールドに対してデータを代入する場合にも使います。

代入演算子は、変数を作成し、変数にデータを代入するために使用します。 作成する変数名を代入演算子の左側に書きます。 例:

```4d
MyNumber:=3
```

creates the variable _MyNumber_ and puts the number 3 into it. MyNumber が既に存在していれば、そこに数値 3が代入されます。

> It is usually not recommended to create variables without [declaring their type](#declaring-variables).

もちろん、変数からデータを取り出すことができなければ、便利とはいえません。 再度代入演算子を使用します。 If you need to put the value of MyNumber in a field called [Products]Size, you would write _MyNumber_ on the right side of the assignment operator:

```4d
[Products]Size:=MyNumber
```

In this case, _[Products]Size_ would be equal to 3. この例はとても単純ですが、ある場所から別の場所へランゲージによってデータを転送させる基本的な手順を表しています。

配列要素にデータを代入するには中カッコ ({...}) を使用します:

```4d
atNames{1}:="Richard"
```

## ローカル、プロセス、およびインタープロセス変数

You can create three types of variables: **local**, **process**, and **interprocess**. これらの変数の違いは使用できるスコープにあります。また、それらを使用することのできるオブジェクトも異なります。

### ローカル変数

ローカル変数はその名のとおりメソッド内でローカルであり、変数が作成されたメソッドの範囲内でのみ使用可能で、その他のメソッドからはアクセスできません。 メソッド内でローカルであるというのは、正式には「スコープがローカルである」といいます。 ローカル変数は、その使用範囲をメソッド内に限定するために用います。

ローカル変数は、以下のような目的のために使用されます:

- 他の変数名との重複を避ける。
- データを一時的に使用する。
- プロセス変数の数を減らす。

ローカル変数の名前は必ずドル記号 ($) で始め、この記号を除く31文字までの文字を指定できます。 これより長い名前を指定すると、4D は余分の32文字以降を切り捨てます。

多くのメソッドや変数を持つアプリケーションプロジェクトで作業する場合、現在作業しているメソッドの範囲内で一時的に変数が必要となる場合がよくあります。 この場合、同じ変数名が他で使用されていないかどうかを気にすることなくローカル変数を作成することができます。

アプリケーションではしばしば、ユーザーによる少量のデータ入力を必要とする場合があります。 The `Request` command can obtain this information. このコマンドはデータ入力を求めるダイアログボックスを表示し、 ユーザーがデータを入力すると、その情報を戻り値として返します。 このようなデータは通常、メソッド内で長時間維持する必要はありません。 これは、ローカル変数を使用する典型的な例といえます。 次に例を示します:

```4d
 $vsID:=Request("Please enter your ID:")
 If(OK=1)
    QUERY([People];[People]ID =$vsID)
 End if
```

このメソッドは、ユーザーに ID を入力するように要求します。 ローカル変数 $vsID にレスポンスが代入され、ユーザーが入力した ID に基づいた検索がおこなわれます。 このメソッドが終了した時点で、$vsID ローカル変数はメモリから消去されます。 この変数は 1回のみ、このメソッド内でしか使われないため、これ以上維持する必要はありません。

**Note:** Parameters $1, $2... passed to methods are local variables. For more information, please refer to [Parameters](Concepts/parameters.md).

### プロセス変数

プロセス変数は、同じプロセスの範囲内に限り使用可能です。 この変数はプロセスメソッドと、そのプロセス内で呼び出された他のメソッドで使用することができます。

プロセス変数には名前に付ける接頭辞がありません。 プロセス変数の名前は、最大31文字までの長さで指定できます。

インタープリターモードでは、変数は動的にメモリ上に作成・消去されます。 これに対してコンパイルモードでは、作成したすべてのプロセス (ユーザープロセス) で同じプロセス変数定義が共有されますが、変数のインスタンスはプロセス毎に異なるものとなります。 たとえば、プロセスP_1 とプロセスP_2 の両方においてプロセス変数 myVar が存在していても、それらはそれぞれ別のインスタンスです。

A process can “peek and poke” process variables from another process using the commands `GET PROCESS VARIABLE` and `SET PROCESS VARIABLE`. これらのコマンドの利用は、以下のような状況に限定することが、良いプログラミングの作法です:

- コード内の特定の箇所におけるプロセス間通信
- プロセス間のドラッグ＆ドロップ処理
- クライアント/サーバーにおいて、クライアントマシン上のプロセスとサーバーマシン上のストアドプロシージャー間の通信

For more information, see the chapter **Processes** and the description of these commands.

### インタープロセス変数

インタープロセス変数はプロジェクト全体で使用することができ、すべてのコオペラティブプロセスで共有されます。 これらは主としてプロセス間で情報を共有するために使われます。

> プリエンプティブプロセスにおいては使用できないことと、コードの保守管理を煩雑にすることから、インタープロセス変数の使用は推奨されません。

The name of an interprocess variable always begins with the symbols `<>` — a “less than” sign followed by a “greater than” sign— followed by 31 characters.

クライアント/サーバーでは、各マシン (クライアントマシンとサーバーマシン) で同じインタープロセス変数定義を共有しますが、マシンごとに各変数のインスタンスが存在します。
