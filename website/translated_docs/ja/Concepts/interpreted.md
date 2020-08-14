---
id: interpreted-compiled
title: インタープリターモードとコンパイル済みモード
---

4D アプリケーションは **インタープリター** または **コンパイル済み** モードで実行することができます:

- インタープリターモードにおいて、コードは実行時に読み込まれてマシン語に翻訳されます。 コードはいつでも追加・変更することができ、アプリケーションは自動的に更新されます。
- コンパイル済みモードにおいては、コンパイル時にすべてのコードが一括で読み込まれて翻訳されます。 コンパイル後のアプリケーションにはアセンブリレベルの指示のみが残され、コード編集はできません。

コンパイルには以下のようなメリットがあります:

- **Speed**: Your application can run from 3 to 1,000 times faster.
- **Code checking**: Your application is scanned for the consistency of code. 論理的矛盾や構文的矛盾を検出します。
- **Protection**: Once your application is compiled, you can delete the interpreted code. Then, the compiled application is functionally identical to the original, except that the structure and methods cannot be viewed or modified, deliberately or inadvertently.
- **Stand-alone double-clickable applications**: compiled applications can also be transformed into stand-alone applications (.EXE files) with their own icon.
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

## インタープリターでコンパイラー指示子を使用する場合

Compiler directives are not required for uncompiled applications. The interpreter automatically types each variable according to how it is used in each statement, and a variable can be freely retyped throughout the application project.

Because of this flexibility, it is possible that an application can perform differently in interpreted and compiled modes.

たとえば、あるところでは次のように記述して:

```4d
C_LONGINT(MyInt)
```

and elsewhere in the project, you write:
```4d
MyInt:=3.1416
```

この例では、コンパイラー指示子が代入ステートメントより *先に* 解釈されれば、インタープリターでもコンパイル後でも `Myint` には同じ値 (3) が代入されます。

4D のインタープリターは、コンパイラー指示子を使用して変数の型を定義します。 コード内でコンパイラー指示子が検出されると、インタープリターはそれに従って変数の型を定義します。 それ以降のステートメントで間違った値を代入しようとすると (たとえば、数値変数に文字を割り当てるなど)、代入はおこなわれず、エラーが生成されます。

The order in which the two statements appear is irrelevant to the compiler, because it first scans the entire project for compiler directives. しかし、インタープリターは系統立てて処理するわけではなく、 実行される順にステートメントを解釈します。 ユーザーが何をおこなうかによって、この順序は当然異なります。 For this reason, it is important to design your project so that your compiler directives are executed prior to any statements containing declared variables.


## ポインターの使用で型の矛盾を避ける

変数の型は変更することができません。 しかし、ポインターを活用して異なるデータ型の変数を参照することはできます。 たとえば、次のコードはインタープリターおよびコンパイル済みモードの両方で動作します:

```4d
C_POINTER($p)
C_TEXT($name)
C_LONGINT($age)

$name:="Smith"
$age:=50

$p:=->$name // テキストへのポインター
$p->:="Wesson" // テキストの代入

$p:=->$age  
// 数値へのポインターに変更
$p->:=55 // 数値の代入
```

値の型に関わらず、その値の長さ (文字の数) を返す関数を考えてみましょう:

```4d
  // Calc_Length 文字の数を返す関数
  // $1 = 数値、テキスト、時間、ブール型の変数へのポインター

C_POINTER($1)
C_TEXT($result)  
C_LONGINT($0)
$result:=String($1->)
$0:=Length($result)
```

この関数は次のように使えます:
```4d
$var1:="my text"
$var2:=5.3
$var3:=?10:02:24?
$var4:=True

$vLength:=Calc_Length(->$var1)+Calc_Length(->$var2)+Calc_Length (->$var3)+Calc_Length(->$var4)

ALERT("長さの合計: "+String($vLength))
```
