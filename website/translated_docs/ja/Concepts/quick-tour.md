---
id: quick-tour
title: 概要
sidebar_label: 概要
---

4D ランゲージを使用して "Hello, world!" メッセージを表示するには複数の方法があります。 一番簡単な方法はおそらく、プロジェクトメソッドにコードを1行、次のように書くやり方です:

```code4d
ALERT("Hello, World!")
```

このコードは、 "Hello, World!" メッセージが表示された、OK ボタンの付いたプラットフォームの標準的なアラートダイアログボックスを開きます。 コードを実行するには、メソッドエディターの左上にある実行ボタンをクリックします:

![alt-text](assets/en/Concepts/helloworld.png)

あるいは、フォーム内のボタンにこのコードを付けた場合、フォームを実行した状態でボタンをクリックすると同様にアラートメッセージが表示されます。 いずれの方法でも、前述の1行のコードを実行するだけで目的達成です！

## 値の代入

変数、フィールド、配列要素などを対象に、データを格納したり、格納したデータを別の対象にコピーしたりすることができます。 変数にデータを格納することを、変数にデータを代入すると言い、代入演算子 (:=) を使っておこないます。 代入演算子はフィールドや配列要素に対してデータを代入する場合にも使います。

```code4d
$MyNumber:=3 // MyNumber 変数に数値の3を代入します
[Products]Size:=$MyNumber // [Products]Size フィールドに MyNumber 変数の値を代入します
arrDays{2}:="Tuesday" // arrDays 配列の第二要素に文字列 "Tuesday" を代入します
MyVar:=Length("Acme") // MyVar 変数に関数の結果 (数値の4) を代入します
$myDate:=!2018/01/21! // 日付リテラルを代入します
$myHour:=?08:12:55? // 時間リテラルを代入します
```

代入演算 := は必ず他の演算と区別しなければなりません。 代入演算子は、式を組み合わせて新しい一つのものにするのではなく、演算子の右側の式の値を左側の変数やフィールドにコピーします。

**重要:** 代入演算子 (:=) と比較演算子 (=) とを混同しないように注意してください。 (=) とは異なる代入演算子が採用されたのは意図的なことで、他のプログラミング言語で (==) や (===) の使用によって度々起こる間違いを避けるためです。 このような間違いはコンパイラーにとっても発見しにくく、時間を消耗するトラブルシューティングのもとです。

## 変数

4D ランゲージは強い型付けの言語ですが、多くの場合に柔軟性も発揮します。 `C_XXX` コマンドを使って、型付けのされた変数を作成します。 たとえば、日付型の変数を作成するには、次のように書くことができます:

```code4d
C_DATE(MyDate) // MyDate 変数を日付型として宣言
```

推奨はされませんが、変数を使用することで作成することもできます。フィールドとは異なり、変数は必ずしも正式に宣言する必要はありません。 たとえば、今日の日付に30日足した値を格納した変数が欲しい場合、次のように書くことができます:

```code4d
MyOtherDate:=Current date+30
```

上のコードは "MyOtherDate に現在の日付プラス30日を代入します" という意味です。この1行で変数が作成され、変数に (仮の) データ型とデータが割り当てられます。 このように代入によって作成された変数はデータ型が規定されていないと解釈され、コードの違う行では別のデータ型の値を代入することもでき、その際にはデータ型を動的に変化させます。 `C_XXX` によって宣言された変数はデータ型を変化させることはできません。 コンパイルモードにおいては、その作成方法にかかわらず、変数のデータ型は変更できません。

## Commands

4D コマンドとは、処理を実行するために 4D に組み込まれている命令文のことです。 すべての 4D コマンド、たとえば `CREATE RECORD` や `ALERT` などのコマンドはテーマ別に *4D ランゲージリファレンス* に記載されています。 コマンドに引数を渡す場合は、コマンド名の後の括弧 () に引数を入れ、セミコロン (;) で区切ります。 Example:

```code4d
COPY DOCUMENT("folder1\\name1";"folder2\\" ; "new")
```

コレクションやオブジェクトにコマンドが属している場合、それらは名前付きメソッドであり、ドット記法を用いて使用します。 For example:

```code4d
$c:=New collection(1;2;3;4;5)
$nc:=$c.slice(0;3) //$nc=[1,2,3]  

$lastEmployee:=$employee.last()
```

4D プラグインや 4D コンポーネントを利用して、4D 開発環境に新しくコマンドを追加することもできます。

4D のユーザーコミュニティーや、サードパーティーデベロッパーによるプラグインが多数存在します。 たとえば, [4d-plugin-pdf-pages](https://github.com/miyako/4d-plugin-pdf-pages) プラグインを macOS で使用した場合:

```code4d
PDF REMOVE PAGE(path;page)
```

4D SVG はアプリケーションの機能を拡張するユーティリティコンポーネントの一例です:

```code4d
// 図の描画
svgRef:=SVG_New
objectRef:=SVG_New_arc(svgRef;100;100;90;90;180)
```

4D SVG は 4D に含まれています。

## 定数 

4D proposes an extensed set of predefined constants, whose values are accessible by name. For example, `Read Mode` is a constant (value 2). Predefined constants appear underlined by default in the 4D Method editor. They allow writing more readable code.

```code4d
vRef:=Open document("PassFile";"TEXT";Read Mode) // open doc in read only mode
```

## Methods

4D provides a large number of built-in methods (or commands) but also lets you can create your own **project methods**. Project methods are user-defined methods that contain commands, operators, and other parts of the language. Project methods are generic methods, but there are other kinds of methods: Object methods, Form methods, Table methods (Triggers), and Database methods.

A method is composed of statements; each statement consists of one line in the method. A statement performs an action, and may be simple or complex.

For example, the following line is a statement that will display a confirmation dialog box:

```code4d
CONFIRM("Do you really want to close this account?";"Yes";"No")
```

A method also contains tests and loops that control the flow of the execution. 4D methods support `If...Else...End if` and `Case of...Else...End case` branching structures as well as looping structures: `While...End while`, `Repeat...Until`, `For...End for`, and `For each...End for each`:

The following example goes through all the characters of the text vtSomeText:

```code4d
For($vlChar;1;Length(vtSomeText))
    //Do something with the character if it is a TAB
    If(Character code(vtSomeText[[$vlChar]])=Tab)
        //...
    End if
End for
```

A project method can call another project method with or without parameters (arguments). The parameters are passed to the method in parentheses, following the name of the method. Each parameter is separated from the next by a semicolon (;). The parameters are available within the called method as consecutively numbered local variables: $1, $2,…, $n. A method can return a single value in the $0 parameter. When you call a method, you just type its name:

```code4d
$myText:="hello"
$myText:=Do_Something($myText) //Call the Do_Something method
ALERT($myText) //"HELLO"

  //Here the code of the method Do_Something
$0:=Uppercase($1)
```

## Data Types

In the language, the various types of data that can be handled are referred to as data types. There are basic data types (string, numeric, date, time, Boolean, picture, pointers, arrays), and also composite data types (BLOBs, objects, collections).

Note that string and numeric data types can be associated with more than one type of field. When data is put into a field, the language automatically converts the data to the correct type for the field. For example, if an integer field is used, its data is automatically treated as numeric. In other words, you need not worry about mixing similar field types when using the language; it will manage them for you.

However, when using the language it is important that you do not mix different data types. In the same way that it makes no sense to store “ABC” in a Date field, it makes no sense to put “ABC” in a variable used for dates. In most cases, 4D is very tolerant and will try to make sense of what you are doing. For example, if you add a number to a date, 4D will assume that you want to add that number of days to the date, but if you try to add a string to a date, 4D will tell you that the operation cannot work.

There are cases in which you need to store data as one type and use it as another type. The language contains a full complement of commands that let you convert from one data type to another. For example, you may need to create a part number that starts with a number and ends with characters such as “abc”. In this case, you might write:

```code4d
[Products]Part Number:=String(Number)+"abc"
```

If *Number* is 17, then *[Products]Part Number* will get the string “17abc”.

The data types are fully defined in the section [Data Types](Concepts/data-types.md).

## Objects and collections

You can handle 4D language objects and collections using the object notation to get or to set their values. For example:

```code4d
employee.name:="Smith"
```

You can also use a string within square brackets, for example:

```code4d
$vName:=employee["name"]
```

Since an object property value can be an object or a collection, object notation accepts a sequence of symbols to access sub-properties, for example:

```code4d
$vAge:=employee.children[2].age
```

Note that if the object property value is an object that encapsulates a method (a formula), you need to add parenthesis () to the property name to execute the method:

    $f:=New object
    $f.message:=New formula(ALERT("Hello world!"))
    $f.message() //displays "Hello world!"
    

To access a collection element, you have to pass the element number embedded in square brackets:

```code4d
C_COLLECTION(myColl)
myColl:=New collection("A";"B";1;2;Current time)
myColl[3]  //access to 4th element of the collection
```

## Operators

When you use the language, it is rare that you will simply want a piece of data. It is more likely that you will want to do something to or with that data. You perform such calculations with operators. Operators, in general, take two pieces of data and perform an operation on them that results in a new piece of data. You are already familiar with many operators. For example, 1 + 2 uses the addition (or plus sign) operator to add two numbers together, and the result is 3. This table shows some familiar numeric operators:

| Operator | Operation      | Example            |
| -------- | -------------- | ------------------ |
| +        | Addition       | 1 + 2 results in 3 |
| –        | Subtraction    | 3 – 2 results in 1 |
| *        | Multiplication | 2 * 3 results in 6 |
| /        | Division       | 6 / 2 results in 3 |

Numeric operators are just one type of operator available to you. 4D supports many different types of data, such as numbers, text, dates, and pictures, so there are operators that perform operations on these different data types.

The same symbols are often used for different operations, depending on the data type. For example, the plus sign (+) performs different operations with different data:

| Data Type       | Operation     | Example                                                                                              |
| --------------- | ------------- | ---------------------------------------------------------------------------------------------------- |
| Number          | Addition      | 1 + 2 adds the numbers and results in 3                                                              |
| String          | Concatenation | “Hello ” + “there” concatenates (joins together) the strings and results in “Hello there”            |
| Date and Number | Date addition | !1989-01-01! + 20 adds 20 days to the date January 1, 1989, and results in the date January 21, 1989 |

The operators are fully defined in the chapter Operators and its subsections.

## Expressions

Simply put, expressions return a value. In fact, when using the 4D language, you use expressions all the time and tend to think of them only in terms of the value they represent. Expressions are also sometimes referred to as formulas.

Expressions are made up of almost all the other parts of the language: commands, operators, variables, fields, object properties, and collection elements. You use expressions to build statements (lines of code), which in turn are used to build methods. The language uses expressions wherever it needs a piece of data.

Expressions rarely “stand alone.” There are several places in 4D where an expression can be used by itself. It includes:

- Formula editor (apply formula, query with formula, order by formula)
- The `EXECUTE FORMULA` command
- The Property list, where an expression can be used as a data source for most of widgets
- Debugger where the value of expressions can be checked
- Quick Report editor as a formula for a column

### Expression types

You refer to an expression by the data type it returns. There are several expression types. The following table gives examples of each type of expression.

| Expression               | Type               | Description                                                                                                                                                                     |
| ------------------------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| “Hello”                  | String             | The word Hello is a string constant, indicated by the double quotation marks.                                                                                                   |
| “Hello ” + “there”       | String             | Two strings, “Hello ” and “there”, are added together (concatenated) with the string concatenation operator (+). The string “Hello there” is returned.                          |
| “Mr. ” + [People]Name    | String             | Two strings are concatenated: the string “Mr. ” and the current value of the Name field in the People table. If the field contains “Smith”, the expression returns “Mr. Smith”. |
| Uppercase("smith")       | String             | This expression uses `Uppercase`, a command from the language, to convert the string “smith” to uppercase. It returns “SMITH”.                                                  |
| 4                        | Number             | This is a number constant, 4.                                                                                                                                                   |
| 4 * 2                    | Number             | Two numbers, 4 and 2, are multiplied using the multiplication operator (*). The result is the number 8.                                                                         |
| myButton                 | Number             | This is a variable associated to a button. It returns the current value of the button: 1 if it was clicked, 0 if not.                                                           |
| !1997-01-25!             | Date               | This is a date constant for the date 1/25/97 (January 25, 1997).                                                                                                                |
| Current date+ 30         | Date               | This is a date expression that uses the `Current date` command to get today’s date. It adds 30 days to today’s date and returns the new date.                                   |
| ?8:05:30?                | Time               | This is a time constant that represents 8 hours, 5 minutes, and 30 seconds.                                                                                                     |
| ?2:03:04? + ?1:02:03?    | Time               | This expression adds two times together and returns the time 3:05:07.                                                                                                           |
| True                     | Boolean            | This command returns the Boolean value TRUE.                                                                                                                                    |
| 10 # 20                  | Boolean            | This is a logical comparison between two numbers. The number sign (#) means “is not equal to”. Since 10 “is not equal to” 20, the expression returns TRUE.                      |
| “ABC” = “XYZ”            | Boolean            | This is a logical comparison between two strings. They are not equal, so the expression returns FALSE.                                                                          |
| My Picture + 50          | Picture            | This expression takes the picture in My Picture, moves it 50 pixels to the right, and returns the resulting picture.                                                            |
| ->[People]Name           | Pointer            | This expression returns a pointer to the field called [People]Name.                                                                                                             |
| Table (1)                | Pointer            | This is a command that returns a pointer to the first table.                                                                                                                    |
| JSON Parse (MyString)    | Object             | This is a command that returns MyString as an object (if proper format)                                                                                                         |
| JSON Parse (MyJSONArray) | Collection         | This is a command that returns MyJSONArray as a collection (if proper format)                                                                                                   |
| Form.pageNumber          | Object property    | An object property is an expression that can be of any supported type                                                                                                           |
| Col[5]                   | Collection element | A collection element is an expression that can be of any supported type                                                                                                         |
| $entitySel[0]            | Entity             | A element of an ORDA entity selection is an expression of the entity type. This kind of expression is **non-assignable**                                                        |

### Assignable vs non-assignable expressions

An expression can simply be a literal constant, such as the number 4 or the string "Hello", or a variable like `$myButton`. It can also use operators. For example, 4 + 2 is an expression that uses the addition operator to add two numbers together and return the result 6. In any cases, these expressions are **non-assignable**, which means that you cannot assign a value to them. In 4D, expressions can be **assignable**. An expression is assignable when it can be used on the right side of an assignation. For example:

```code4d
//$myVar variable is assignable, you can write:  
$myVar:="Hello" //assign "Hello" to myVar
//Form.pageNumber is assignable, you can write:  
Form.pageNumber:=10 //assign 10 to Form.pageNumber
//Form.pageTotal-Form.pageNumber is not assignable:
Form.pageTotal- Form.pageNumber:=10 //error, non-assignable
```

In general, expressions that use an operator are non-assignable. For example, `[Person]FirstName+" "+[Person]LastName` is not assignable.

## Pointers

The 4D language provides an advanced implementation of pointers, that allow writing powerful and modular code. You can use pointers to reference tables, fields, variables, arrays, and array elements.

A pointer to an element is created by adding a "->" symbol before the element name, and can be dereferenced by adding the "->" symbol after the pointer name.

```code4d
MyVar:="Hello"
MyPointer:=->MyVar
ALERT(MyPointer->)
```

## Comments

Comments are inactive lines of code. These lines are not interpreted by the 4D language and are not executed when the code is called.

There are two ways to create comments:

- `//` for single line comments
- `/*...*/` for inline or multiline commnents.

Both styles of comments can be used simultaneously.

#### Single line comments (//)

Insert `//` at the beginning of a line or after a statement to add a single line comment. Example:

```code4d
//This is a comment
For($vCounter;1;100) //Starting loop
  //comment
  //comment
  //comment
 End for
```

#### Inline or multiline comments (/* */)

Surround contents with `/*` ... `*/` characters to create inline comments or multiline comment blocks. Both inline and multiline comment blocks begin with `/*` and end with `*/`.

- **Inline comments** can be inserted anywhere in the code. Example:

```code4d
For /* inline comment */ ($vCounter;1;100)
    ...
End for
```

- **Multiline comment blocks** allows commenting an unlimited number of lines. Comment blocks can be nested (useful since the 4D code editor supports block collapsing). Example:

```code4d
For ($vCounter;1;100)
/*
comments  
    /* 
    other comments
    */
*/
...
End for
```