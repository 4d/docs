---
id: parameters
title: 引数
---


## 引数について

メソッドにデータを渡す必要がしばしば発生します。 これは引数によって容易にできます。

**Parameters** (or **arguments**) are pieces of data that a method needs in order to perform its task. The terms *parameter* and *argument* are used interchangeably throughout this manual. 引数は、ビルトインの 4Dコマンドにも渡されます。 以下の例は、“Hello” という文字列を引数としてビルトインの `ALERT` コマンドへ渡します:

```4d
ALERT("Hello")
```

メソッドに引数を渡す場合も同様におこないます。 たとえば、メソッド DO SOMETHING が3つの引数を受け取る場合、このメソッドを呼び出すには以下のように書きます:

```4d
DO SOMETHING(WithThis;AndThat;ThisWay)
```
引数は、セミコロン (;) で区切ります。 引数の値は呼び出し時に評価されます。

サブルーチン (呼び出されるメソッド) 内で、それぞれの引数の値は自動的に、順に番号が付けられたローカル変数 ($1, $2, $3...) に格納されます。 ローカル変数の番号は、引数の順序を表わします。

```4d
  // DO SOMETHING メソッド
  // すべての引数がテキスト型とします
 C_TEXT($1;$2;$3)
 ALERT("I received "+$1+" and "+$2+" and also "+$3)
  // $1 には WithThis 引数が入ります
  // $2 には AndThat 引数が入ります
  // $3 には ThisWay 引数が入ります
```

Within the subroutine, you can use the parameters $1, $2... in the same way you would use any other local variable. しかしながら、引数として渡した変数の値を変更するコマンドをサブルーチン内で使用する場合 (例: `Find in field`)、$1, $2などを直接渡すことはできません。 まず標準のローカル変数等にコピーする必要があります (例: $myvar:=$1)。

メソッドを実行する専用コマンドを利用するときも、同じ原則で引数を渡します。

```4d
EXECUTE METHOD IN SUBFORM("Cal2";"SetCalendarDate";*;!05/05/10!)  
//pass the !05/05/10! SetCalendarDate を実行し
// その際に引数として日付リテラル !05/05/20! を渡します
```

**Note:** For a good execution of code, you need to make sure that all `$1`, `$2`... parameters are correctly declared within called methods (see [Declaring parameters](#declaring-parameters) below).


### 引数としてサポートされている式

引数はあらゆる [式](Concepts/quick-tour.md#式のタイプ) の形で渡すことができますが、例外があります:

- テーブル
- arrays

テーブルや配列の式は [ポインターを介した参照として](Concepts/dt_pointer.md#メソッドの引数としてのポインター) 渡す必要があります。


## 関数

メソッドからデータを返すこともできます。 値を返すメソッドを関数と呼びます。

値を返す 4Dコマンドや 4Dプラグインコマンドも関数と呼びます。

以下は、文字列のデータ長を返すビルトインの `Length` 関数を用いたステートメントです。 The statement puts the value returned by `Length` in a variable called *MyLength*. という変数に値を返します。

```4d
MyLength:=Length("How did I get here?")
```

どのようなサブルーチンでも値を返すことができます。 返す値は、ローカル変数 `$0` に格納します。

たとえば、`Uppercase4` という以下の関数は、始めの 4文字を大文字に変換した文字列を返します:

```4d
// Uppercase4 メソッド
$0:=Uppercase(Substring($1;1;4))+Substring($1;5)
```

以下は、Uppercase4 を関数として使用する例です:

```4d
NewPhrase:=Uppercase4("This is good.")
```

In this example, the variable *NewPhrase* gets “THIS is good.”

戻り値 `$0` はサブルーチン内のローカル変数です。 したがって、サブルーチン内で通常のローカル変数のように使用できます。 たとえば、前述の `DO SOMETHING` メソッドの例において、`$0` は最初に大文字に変換した `$1` の値を割り当てられ、その後 `ALERT` コマンドの引数として使われました。 このように、サブルーチン内の他のローカル変数と同じように `$0` を使うことができます。 サブルーチン終了時に、その時点での `$0` の値を呼び出し元のメソッドに戻すのは 4Dがおこないます。


## パラメーターの宣言

[インタープリターモード](Concepts/interpreted.md) では必須ではないものの、問題を避けるにはメソッドの各パラメーターを宣言しておくべきでしょう。

次の例では `OneMethodAmongOthers` プロジェクトメソッドに設定されている 3つのパラメーターをそれぞれ宣言しています:

```4d
  // OneMethodAmongOthers プロジェクトメソッド
  // OneMethodAmongOthers ( 実数 ; 日付 { ; 倍長整数 } )
  // OneMethodAmongOthers ( 数量 ; 日付 { ; 割合 } )

 C_REAL($1) // 1番目のパラメーターは実数型です
 C_DATE($2) // 2番目のパラメーターは日付型です
 C_LONGINT($3) // 3番目のパラメーターは倍長整数型です
```

次の例では `Capitalize` プロジェクトメソッドは第1パラメーターにテキスト型の引数を受け取り、戻り値としてテキスト型の値を返します:

```4d
  // Capitalize プロジェクトメソッド
  // Capitalize ( Text ) -> テキスト
  // Capitalize ( Source string ) -> 大文字の文字列

 C_TEXT($0;$1)
 $0:=Uppercase(Substring($1;1;1))+Lowercase(Substring($1;2))
```

`New process` コマンドなどでプロセスメソッドを呼び出す場合にも、そのメソッドが引数を受け取るのであれば、それらは明示的に宣言されていなくてはなりません。 たとえば:

```4d
C_TEXT($string)
C_LONGINT($idProc;$int)
C_OBJECT($obj)

$idProc:=New process("foo_method";0;"foo_process";$string;$int;$obj)
```

"foo_method" において各パラメーターが適切に宣言されている場合のみ、コンパイルモードで上のコードを実行することができます:

```4d
//foo_method
C_TEXT($1)
C_LONGINT($2)
C_OBJECT($3)
...
```

**Note:** For compiled mode, you can group all local variable parameters for project methods in a specific method with a name starting with "Compiler". 専用メソッド内で各メソッドのパラメーターをあらかじめ宣言する場合は、次のように書きます:
```4d
 C_REAL(OneMethodAmongOthers;$1)
```
詳細については [インタープリターモードとコンパイルモード](Concepts/interpreted.md) を参照ください。

パラメーターの宣言は次のコンテキストにおいても必須となります (これらのコンテキストは "Compiler" メソッドによる一括宣言をサポートしません)。

- データベースメソッド たとえば、`On Web Connection データベースメソッド` は 6つのテキスト型の引数 $1 〜 $6 を受け取ります。 たとえすべての引数を使用しない場合でも、データベースメソッドの先頭で次のように宣言しなくてはなりません:

```4d
// On Web Connection
C_TEXT($1;$2;$3;$4;$5;$6)
```

- トリガー トリガーの結果である $0 パラメーター (倍長整数) は、明確に定義されていなければコンパイラーによって型指定されます。 定義する場合は、トリガーの中でおこなう必要があります。

- `On Drag Over` フォームイベントを受け入れるオブジェクト `On Drag Over` フォームイベントの結果である $0 パラメーター (倍長整数) は、明確に定義されていなければコンパイラーが型を決定します。 定義する場合は、オブジェクトメソッドの中でおこなう必要があります。 **Note:** The compiler does not initialize the $0 parameter. したがって、`On Drag Over` フォームイベントを使用したら、直ちに $0 を初期化しなければなりません。 たとえば:
```4d
 C_LONGINT($0)
 If(Form event=On Drag Over)
    $0:=0
    ...
    If($DataType=Is picture)
       $0:=-1
    End if
    ...
 End if
```

## 引数の渡し方: 値か参照か

When you pass a parameter, 4D always evaluates the parameter expression in the context of the calling method and sets the **resulting value** to the $1, $2... local variables in the subroutine (see [Using parameters](#using-parameters)). これらのローカル変数に格納されているのは、呼び出し元で使用されているフィールドや変数、式ではなく、渡された値のみです。 スコープがローカルに限られているため、サブルーチン内でローカル変数の値を変えても、呼び出し元メソッドには影響ありません。 たとえば:

```4d
    // MY_METHOD メソッド
DO_SOMETHING([People]Name) // [People]Name の値が "williams" だとします
ALERT([People]Name)

    // DO_SOMETHING メソッド
 $1:=Uppercase($1)
 ALERT($1)
```

`DO_SOMETHING` メソッドによって表示されたアラートボックスでは "WILLIAMS" と表示され、`MY_METHOD` メソッドによって表示されるアラートボックスでは "williams" と表示されます。 `DO_SOMETHING` メソッドは $1 の値をローカルな範囲で変更しましたが、これは `MY_METHOD` メソッドがサブルーチンに渡す引数として指定した [People]Last Name フィールドの値には影響しません。

もし `DO_SOMETHING` メソッド内でフィールドの値を変更したいのであれば、2通りのやり方があります:

1. サブルーチンに渡す式としてフィールドではなく、フィールドへのポインターを指定することができます。この場合、以下のようにコードを書きます:

```4d
  // MY_METHOD メソッド
 DO_SOMETHING(->[People]Name) // [People]Name の値が "williams" だとします
 ALERT([People]Last Name)

  // DO_SOMETHING メソッド
 $1->:=Uppercase($1->)
 ALERT($1->)
```

この例では、引数として指定された式はフィールドではなく、フィールドへのポインターです。 そのため、`DO_SOMETHING` メソッド内において、$1 はフィールドの値ではなく、フィールドへのポインターになっています。 The object **referenced** by $1 ($1-> in the code above) is the actual field. その結果、参照されている対象を変更すると、その影響はサブルーチンのスコープを超え、実際のフィールドも変更されます。 さきほどの例題においては、両方のアラートボックスに "WILLIAMS" と表示されます。

2. `DO_SOMETHING` メソッドに "何かさせる" 代わりに、値を返すようにメソッドを書き直すこともできます。 たとえば、以下のようにコードです:

```4d
    // MY_METHOD メソッド
 [People]Name:=DO_SOMETHING([People]Name) // もとの [People]Name の値が "williams" だとします
 ALERT([People]Name)

    // DO_SOMETHING メソッド
 $0:=Uppercase($1)
 ALERT($0)
```

This second technique of returning a value by a subroutine is called “using a function.” This is described in the [Functions](#functions) paragraph.


### 特殊ケース: オブジェクトやコレクションの場合

You need to pay attention to the fact that Object and Collection data types can only be handled through a reference (i.e. an internal *pointer*).

Consequently, when using such data types as parameters, `$1, $2...` do not contain *values* but *references*. `$1、$2...` の値をサブルーチン内で変更した場合、その変更は元となるオブジェクトやコレクションが使用されているところへと伝播します。 これは [ポインター](Concepts/dt_pointer.md#メソッドの引数としてのポインター) に対する原理と同じものですが、`$1、$2...` の使用にあたって参照を外す必要はありません。

次の例では、`CreatePerson` メソッドはオブジェクトを作成したのち、それを引数として `ChangeAge` に渡します:

```4d
  // CreatePerson メソッド
 C_OBJECT($person)
 $person:=New object("Name";"Smith";"Age";40)
 ChangeAge($person)
 ALERT(String($person.Age))  
```

`ChangeAge` メソッドは受け取ったオブジェクトの Age 属性に 10を加えます:

```4d
  //ChangeAge
 C_OBJECT($1)
 $1.Age:=$1.Age+10
 ALERT(String($1.Age))
```

`CreatePerson` メソッドを実行すると、サブルーチンにおいても同じオブジェクト参照が扱われているため、両方のアラートボックスにおいて ”50” と表示されます。

**4D Server:** When parameters are passed between methods that are not executed on the same machine (using for example the "Execute on Server" option), references are not usable. このような場合には、参照の代わりにオブジェクトとコレクションのコピーが引数として渡されます。


## 名前付き引数

Using objects as parameters allow you to handle **named parameters**. このプログラミング方法はシンプルかつ柔軟なだけでなく、コードの可読性も向上させます。

たとえば、`CreatePerson` メソッドを例にとると:

```4d
  // CreatePerson メソッド
 C_OBJECT($person)
 $person:=New object("Name";"Smith";"Age";40)
 ChangeAge($person)
 ALERT(String($person.Age))  
```
`ChangeAge` メソッドを次のように書けます:

```4d
  //ChangeAge
 C_OBJECT($1;$para)
 $para:=$1  
 $para.Age:=$para.Age+10
 ALERT($para.Name+" は "+String($para.Age)+" 歳です。")
```

これは [任意パラメーター](#任意パラメーター) を指定するにあたって非常に便利な方法です (後述参照)。 この場合、引数の不足は次のように対処できます:
- `Null` 値と比較することで、必要な引数がすべて提供されているかをチェックします
- 引数の値をプリセットします
- 渡されていない引数は空値として扱います

上述の `ChangeAge` メソッドの例では、Age およびName プロパティはどちらも必須であるため、引数オブジェクトに含まれていなければエラーが発生します。 これを避けるには、次のように記述することができます:

```4d
  //ChangeAge
 C_OBJECT($1;$para)
 $para:=$1  
 $para.Age:=Num($para.Age)+10
 ALERT(String($para.Name)+" は "+String($para.Age)+" 歳です。")
```
すると、引数が不足してもエラーは生成されず、両方が欠落した場合の結果は " is 10 years old" となってしまうにせよ、いずれの引数も任意となります。

名前付き引数を利用すると、アプリケーションの保守やリファクタリングが簡単かつ安全におこなえます。 さきほどの例で、加算する年数を場合に応じて変えたほうが適切であると、あとから気づいたとします。 メソッドのパラメーターとして、加算年数を追加しなくてはなりません。 この場合、次のように書けます:

```4d
$person:=New object("Name";"Smith";"Age";40;"toAdd";10)
ChangeAge($person)

// ChangeAge メソッド
C_OBJECT($1;$para)
$para:=$1  
If ($para.toAdd=Null)
    $para.toAdd:=10
End if
$para.Age:=Num($para.Age)+$para.toAdd
ALERT(String($para.Name)+" は "+String($para.Age)+" 歳です。")
```
このように、既存のコードを変える必要はありません。 変更後のコードは変更前と同じように動作しますが、引数によって加算年数に数値を指定することもできるようになりました。

名前付き引数を使うと、すべてのパラメーターを任意にすることができます。 上の例ではすべてのパラメーターが任意で、いずれを指定しても順序はありません。


## 任意パラメーター

In the *4D Language Reference* manual, the { } characters (braces) indicate optional parameters. For example, `ALERT (message{; okButtonTitle})` means that the *okButtonTitle* parameter may be omitted when calling the command. この場合、次のような呼び出し方が可能です:
```4d
ALERT("Are you sure?";"Yes I am") // 2つの引数
ALERT("Time is over") // 1つの引数
```

プロジェクトメソッドも同様に、同じ型の引数であれば、右側に不定数の引数を受け取ることができます。 任意パラメーターの問題は、それらが指定されない場合への対処が必要だということです。欠落がエラーに繋がってはいけません。 使用されなかったパラメーターにデフォルト値を代入するやり方が効果的です。

> 任意パラメーターが必要な場合、[名前付き引数](#名前付き引数) を利用すると型の制限がなく、柔軟で便利です。

`Count parameters` コマンドを使用すると、メソッドに渡された引数の数を確認することができるため、数に応じて異なる処理をおこなえます。

次の例はテキストメッセージを表示し、2つの引数が渡されていればディスク上のドキュメントに、3つ以上の場合は 4D Write Pro エリアにそのテキストを書き出します。

```4d
// APPEND TEXT プロジェクトメソッド
// APPEND TEXT ( テキスト { ; テキスト { ; オブジェクト } } )
// APPEND TEXT ( メッセージ { ; パス { ; 4DWPエリア } } )

 C_TEXT($1;$2)
 C_OBJECT($3)

 ALERT($1)
 If(Count parameters>=3)
    WP SET TEXT($3;$1;wk append)
 Else
    If(Count parameters=2)
       TEXT TO DOCUMENT($2;$1)
    End if
 End if>
```
このプロジェクトメソッドをアプリケーションに追加したあとは、次のように呼び出すことができます:

```4d  
APPEND TEXT(vtSomeText) // メッセージを表示します
APPEND TEXT(vtSomeText;$path) // メッセージを表示して、 $path のドキュメントに書き出します
APPEND TEXT(vtSomeText;"";$wpArea) // メッセージを表示して、 $wpArea の4D Write Pro ドキュメントに追記します
```


## 引数の間接参照

プロジェクトメソッドが受け取る引数は直接的に $1, $2, ... などと指定する以外にも、間接的に ${ 数値変数 } という形で指定することができます。 This principle is called **parameter indirection**. 同じ型の不定数の引数を受け取るメソッドの場合、`Count parameters` コマンドと組み合わせることで、これらの引数を `For...End for` ループと引数関節参照シンタックスで操作することができます。

次の例では `SEND PACKETS` プロジェクトメソッドは第1パラメーターに時間を受け取り、第2パラメーター以降は1以上のテキストを受け取ります:

```4d
  //SEND PACKETS Project Method
  //SEND PACKETS ( Time ; Text { ; Text2... ; TextN } )
  //SEND PACKETS ( docRef ; Data { ; Data2... ; DataN } )

 C_TIME($1)
 C_TEXT(${2})
 C_LONGINT($vlPacket)

 For($vlPacket;2;Count parameters)
    SEND PACKET($1;${$vlPacket})
 End for
```

引数の間接参照は以下の条件を守ることにより、正しく動作します: 引数の一部のみを間接参照する場合、直接参照する引数の後に間接参照引数を配置するようにします。 メソッド内で、間接参照は${$i}のように表示します。$iは数値変数です。 ${$i} is called a **generic parameter**.

以下は間接参照の例です。引数の数値を合計した結果を、引数として渡された表示形式で返すような関数を考えてみましょう。 合計される数値の数は、メソッドが呼ばれるたびに変わります。 このメソッドでは数値と表示形式を引数としてメソッドに渡さなければなりません。

この関数は、以下のようにして呼び出します:

```4d
 Result:=MySum("##0.00";125,2;33,5;24)

```

この場合、数値を合計し、指定した形式に編集された文字列 "182.70" が返されます。 関数の引数は正しい順序で渡す必要があります。最初に表示形式、次に数値です。

以下は `MySum` 関数です:
```4d
 $Sum:=0
 For($i;2;Count parameters)
    $Sum:=$Sum+${$i}
 End for
 $0:=String($Sum;$1)
```

この関数は様々な呼び出し方ができます:

```4d
 Result:=MySum("##0.00";125,2;33,5;24)
 Result:=MySum("000";1;18;4;23;17)
```


### ジェネリックパラメーターの宣言

他のローカル変数と同様、ジェネリックパラメーターはコンパイラーに指示する必要はありません。 ただし、曖昧になりそうな場合や最適化のために必要な場合は コンパイラ支持子に ${N} を渡す、以下のシンタックスを使用することができます (N は最初のジェネリックパラメーターの番号です):

```4d
 C_LONGINT(${4})
```

このコマンドは、4番目以降に間接参照されるすべての引数のデータ型が倍長整数であることを意味します。 $1、$2、$3には、いかなるデータ型も使用できますが、 $2を間接参照した場合には、間接参照の型宣言の影響を受けます。 このため、たとえば $2 が実数であっても、間接参照されれば倍長整数と見なされます。

**Note:** The number in the declaration has to be a constant and not a variable.
