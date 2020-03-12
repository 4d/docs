---
id: interpreted-compiled
title: インタープリターモードとコンパイル済みモード
---

4D アプリケーションは **インタープリター** または **コンパイル済み** モードで実行することができます:

- インタープリターモードにおいて、コードは実行時に読み込まれてマシン語に翻訳されます。 コードはいつでも追加・変更することができ、アプリケーションは自動的に更新されます。
- コンパイル済みモードにおいては、コンパイル時にすべてのコードが一括で読み込まれて翻訳されます。 コンパイル後のアプリケーションにはアセンブリレベルの指示のみが残され、コード編集はできません。 

コンパイルには以下のようなメリットがあります:

- **速度**: データベースの実行速度を3倍から1000倍速くします。
- **コードチェック**: データベースアプリケーションコードの整合性をチェックし、 論理的矛盾や構文的矛盾を検出します。
- **保護**: データベースをコンパイルすると、インタープリターコードを削除できます。 コンパイルされたデータベースは、故意的にも不注意からもストラクチャーやメソッドの表示・修正ができないこと以外は、オリジナルのデータベースと同じに動作します。
- **ダブルクリックで起動するアプリケーション**: コンパイル後のデータベースは、独自のアイコンを持つスタンドアロンアプリケーション (.EXEファイル) に作り変えることもできます。
- **プリエンプティブモードでの実行**: プリエンプティブプロセスとして実行できるのは、コンパイルされたコードに限られます。 

## インタープリターコードとコンパイル済みコードの違い

アプリケーションの動作は同じであっても、インタープリターモードとコンパイル済みモードにはいくつかの相違点があり、コンパイルされるコードを書くにあたってはこれらを意識しておく必要があります。 基本的に、4D のインタープリターはコンパイラーより柔軟です。

| コンパイル済みコード                                                                               | インタープリターコード                      |
| ---------------------------------------------------------------------------------------- | -------------------------------- |
| 変数名とメソッド名が被ってはいけません。                                                                     | エラーは生成されませんが、メソッドが優先されます。        |
| コンパイラ指示子 (例: `C_LONGINT`) によって、またはコンパイル時にコンパイラーによって、すべての変数は型指定されなければなりません。               | 変数の型は実行中に決定していくことができます (推奨されません) |
| 変数や配列のデータタイプは変更できません。                                                                    | 変数や配列のデータタイプは変更可能です (推奨されません)    |
| 1次元配列を2次元配列に、また2次元配列を1次元配列に変更することはできません。                                                 | 可能です。                            |
| コンパイラーにより変数のタイプ定義はおこなわれますが、フォーム上の変数のようにデータタイプが明確でない場合は、コンパイラー指示子を使用して変数のデータタイプを指定するべきです。 |                                  |
| `Undefined` 関数は、常に False を返します。 変数は常に定義されています。                                           |                                  |
| メソッドの "プリエンプティブプロセスで実行可能" プロパティにチェックを入れていた場合、コードは他のスレッドアンセーフなコマンドやメソッドを呼び出してはいけません。      | プリエンプティブプロセスプロパティは無視されます。        |
| 特定のループの場合、割り込みを可能にするには `IDLE` コマンドが必要です。                                                 | いつでも割り込み可能です。                    |


## Using Compiler Directives with the Interpreter

Compiler directives are not required for uncompiled databases. The interpreter automatically types each variable according to how it is used in each statement, and a variable can be freely retyped throughout the database.

Because of this flexibility, it is possible that a database can perform differently in interpreted and compiled modes.

For example, if you write:

```4d
C_LONGINT(MyInt)
```

and elsewhere in the database, you write:

```4d
MyInt:=3.1416
```

In this example, `MyInt` is assigned the same value (3) in both the interpreted and compiled modes, provided the compiler directive is interpreted *prior* to the assignment statement.

The 4D interpreter uses compiler directives to type variables. When the interpreter encounters a compiler directive, it types the variable according to the directive. If a subsequent statement tries to assign an incorrect value (e.g., assigning an alphanumeric value to a numeric variable) the assignment will not take place and will generate an error.

The order in which the two statements appear is irrelevant to the compiler, because it first scans the entire database for compiler directives. The interpreter, however, is not systematic. It interprets statements in the order in which they are executed. That order, of course, can change from session to session, depending on what the user does. For this reason, it is important to design your database so that your compiler directives are executed prior to any statements containing declared variables.

## Using pointers to avoid retyping

A variable cannot be retyped. However, it is possible to use a pointer to refer to variables of different data types. For example, the following code is allowed in both interpreted and compiled modes:

```4d
C_POINTER($p)
C_TEXT($name)
C_LONGINT($age)

$name:="Smith"
$age:=50

$p:=->$name //text target for the pointer
$p->:="Wesson" //assigns a text value

$p:=->$age  
// new target of different type for the pointer
$p->:=55 //assigns a number value
```

Imagine a function that returns the length (number of charaters) of values that can be of any type.

```4d
  // Calc_Length (how many characters)
  // $1 = pointer to flexible variable type, numeric, text, time, boolean

C_POINTER($1)
C_TEXT($result)  
C_LONGINT($0)
$result:=String($1->)
$0:=Length($result)
```

Then this method can be called:

```4d
$var1:="my text"
$var2:=5.3
$var3:=?10:02:24?
$var4:=True

$vLength:=Calc_Length(->$var1)+Calc_Length(->$var2)+Calc_Length (->$var3)+Calc_Length(->$var4)

ALERT("Total length: "+String($vLength))
```