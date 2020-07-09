---
id: parameters
title: 引数
---


## 概要

メソッドにデータを渡す必要がしばしば発生します。 これは引数によって容易にできます。

**引数** (または **パラメーター**) は、メソッドが処理に必要とするデータのことです。 *引数* と *パラメーター* は厳密には違うものですが、このマニュアルでは同義語として使用されています。 引数は、ビルトインの 4Dコマンドにも渡されます。 以下の例は、“Hello” という文字列を引数としてビルトインの `ALERT` コマンドへ渡します:

```4d
ALERT("Hello")
```

Parameters are passed to methods or class functions in the same way. For example, if a class function named `getArea()` accepts two parameters, a call to the class function might look like this:

    $area:=$o.getArea(50;100)
    

Or, if a project method named `DO_SOMETHING` accepts three parameters, a call to the method might look like this:

```4d
DO_SOMETHING($WithThis;$AndThat;$ThisWay)
```

引数は、セミコロン (;) で区切ります。 Their value is [evaluated](#values-or-references) at the moment of the call and copied into local variables within the called class function or method, either in named variables (class functions only) or sequentially numbered variables (methods and class functions).

## 名前付き引数 (クラス関数)

Inside called class functions, parameter values are assigned to local variables. You can declare class function parameters using a **parameter name** along with a **parameter type**, separated by colon. 引数名は [ECMAScript](https://www.ecma-international.org/ecma-262/5.1/#sec-7.6) に準拠している必要があります. Multiple parameters (and types) are separated by semicolons (;).

For example, when you call a `getArea()` function with two parameters:

    $area:=$o.getArea(50;100)
    

In the class function code, the value of each parameter is copied into the corresponding declared parameter:

```4d
// Class: Polygon
Function getArea($width: Integer; $height : Integer)
    var $0 : Integer
    $0:=$width*$height
```

> If the type is not defined, the parameter will be defined as `Variant`.
> 
> Sequential parameters can be used in conjunction with named parameters. たとえば:
> 
> ```4d
Function add($x : Integer)
  var $0,$2 : Integer
  $0:=$x+$2
```

### Supported data types

With named parameters, you can use the same data types as those which are [supported by the `var` keyword](variables.md#using-the-var-keyword), including for example:

```4d
Function saveToFile($entity : cs.ShapesEntity; $file : 4D.File)
```

## Sequential parameters

You can declare methods or class function parameters using sequentially numbered variables: **$1**, **$2**, **$3**, and so on. ローカル変数の番号は、引数の順序を表わします。

> This syntax is supported for methods and class functions. However for class functions, it is recommended to use named parameters syntax.

For example, when you call a `DO_SOMETHING` project method with three parameters:

```4d
DO_SOMETHING($WithThis;$AndThat;$ThisWay)
```

In the method code, the value of each parameter is automatically copied into $1, $2, $3 variables:

```4d
  //Code of the method DO_SOMETHING
  //Assuming all parameters are of the text type
 C_TEXT($1;$2;$3)
 ALERT("I received "+$1+" and "+$2+" and also "+$3)
  //$1 contains the $WithThis parameter
  //$2 contains the $AndThat parameter
  //$3 contains the $ThisWay parameter
```

メソッドを実行する専用コマンドを利用するときも、同じ原則で引数を渡します。

```4d
EXECUTE METHOD IN SUBFORM("Cal2";"SetCalendarDate";*;!05/05/20!)  
//pass the !05/05/20! SetCalendarDate を実行し
// その際に引数として日付リテラル !05/05/10! を渡します
```

**注:** よりよいコード実行のため、サブルーチンが受け取る引数 `$1`, `$2`... が正確に宣言されていることを確認してください ([パラメーターの宣言](#パラメーターの宣言) 参照)

### Input/Output variables

これらの引数 ($1, $2...) はサブルーチン内で 他のローカル変数と同様に使用できます。 しかしながら、引数として渡した変数の値を変更するコマンドをサブルーチン内で使用する場合 (例: `Find in field`)、$1, $2などを直接渡すことはできません。 まず標準のローカル変数等にコピーする必要があります (例: $myvar:=$1)。

### Supported data types

You can use any [expression](Concepts/quick-tour.md#expression-types) as sequential parameter, except:

- テーブル
- arrays

テーブルや配列の式は [ポインターを介した参照として](Concepts/dt_pointer.md#メソッドの引数としてのポインター) 渡す必要があります。

### Using objects properties as named parameters

引数としてオブジェクトを渡すことによって **名前付き引数** を扱うことができます。 このプログラミング方法はシンプルかつ柔軟なだけでなく、コードの可読性も向上させます。

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

### Declaring variables for sequential parameters

Even if it is not mandatory in [interpreted mode](Concepts/interpreted.md), you must declare each sequential variable in the called methods to prevent any trouble.

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

> For compiled mode, you can group all local variable parameters for project methods in a specific method with a name starting with "Compiler". 専用メソッド内で各メソッドのパラメーターをあらかじめ宣言する場合は、次のように書きます:

```4d
 // Compiler_method
 C_REAL(OneMethodAmongOthers;$1) 
```

詳細については [インタープリターモードとコンパイルモード](Concepts/interpreted.md) を参照ください。

パラメーターの宣言は次のコンテキストにおいても必須となります (これらのコンテキストは "Compiler" メソッドによる一括宣言をサポートしません)。

- Database methods - For example, the `On Web Connection Database Method` receives six parameters, $1 to $6, of the data type Text. たとえすべての引数を使用しない場合でも、データベースメソッドの先頭で次のように宣言しなくてはなりません:

```4d
// On Web Connection
C_TEXT($1;$2;$3;$4;$5;$6)
```

- Triggers - The $0 parameter (Longint), which is the result of a trigger, will be typed by the compiler if the parameter has not been explicitly declared. 定義する場合は、トリガーの中でおこなう必要があります。

- Form objects that accept the `On Drag Over` form event - The $0 parameter (Longint), which is the result of the `On Drag Over` form event, is typed by the compiler if the parameter has not been explicitly declared. 定義する場合は、オブジェクトメソッドの中でおこなう必要があります。 **注:** コンパイラーは $0 を初期化しません。 したがって、`On Drag Over` フォームイベントを使用したら、直ちに $0 を初期化しなければなりません。 たとえば:

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
````

### Parameter indirection

4D project methods accept a variable number of parameters of the same type, starting from the right. This principle is called **parameter indirection**. Using the `Count parameters` command you can then address those parameters with a `For...End for` loop and the parameter indirection syntax.

In the following example, the project method `SEND PACKETS` accepts a time parameter followed by a variable number of text parameters:

```4d
  //SEND PACKETS Project Method
  //SEND PACKETS ( Time ; Text { ; Text2... ; テキストN } )
  //SEND PACKETS ( docRef ; Data { ; Data2... ; DataN } )

 C_TIME($1)
 C_TEXT(${2})
 C_LONGINT($vlPacket)

 For($vlPacket;2;Count parameters)
    SEND PACKET($1;${$vlPacket})
 End for
```

引数の間接参照は以下の条件を守ることにより、正しく動作します: 引数の一部のみを間接参照する場合、直接参照する引数の後に間接参照引数を配置するようにします。 メソッド内で、間接参照は${$i}のように表示します。$iは数値変数です。 ${$i}を **ジェネリックパラメータ** (generic parameter) と呼びます。

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

他のローカル変数と同様、ジェネリックパラメーターはコンパイラーに指示する必要はありません。 ただし、曖昧になりそうな場合や最適化のために必要な場合は コンパイラ支持子に ${N} を渡す、以下のシンタックスを使用することができます (N は最初のジェネリックパラメーターの番号です):

```4d
 C_LONGINT(${4})
```

このコマンドは、4番目以降に間接参照されるすべての引数のデータ型が倍長整数であることを意味します。 $1、$2、$3には、いかなるデータ型も使用できますが、 $2を間接参照した場合には、間接参照の型宣言の影響を受けます。 このため、たとえば $2 が実数であっても、間接参照されれば倍長整数と見なされます。

> The number in the declaration has to be a constant and not a variable.

## Returning values

Data can be returned from methods and class functions. For example, the following line is a statement that uses the built-in command, `Length`, to return the length of a string. このステートメントでは、`Length` 関数が *MyLength* という変数に値を返します。

```4d
MyLength:=Length("How did I get here?")
```

どのようなサブルーチンでも値を返すことができます。 返す値は、ローカル変数 `$0` に格納します。

The return parameter ($0) is not supported in the named parameter list. そのため、関数のコード内にて宣言する必要があります。 たとえば:

```4d
Function add($x : Variant;$y : Integer)
    var $0 : Text
```

For example, the following method, called `Uppercase4`, returns a string with the first four characters of the string passed to it in uppercase:

```4d
// Uppercase4 メソッド
$0:=Uppercase(Substring($1;1;4))+Substring($1;5)
```

The following is an example that uses the Uppercase4 method:

```4d
$NewPhrase:=Uppercase4("This is good.")
```

In this example, the variable *$NewPhrase* gets “THIS is good.”

The returned value, `$0`, is a local variable within the subroutine. したがって、サブルーチン内で通常のローカル変数のように使用できます。 たとえば:

```4d
// Do_something メソッド
$0:=Uppercase($1)
ALERT($0)
```

この例において、`$0` は大文字に変換した引数 `$1` の値を割り当てられ、その後 `ALERT` コマンドに引数として渡されました。 このように、サブルーチン内の他のローカル変数と同じように `$0` を使うことができます。 サブルーチン終了時に、その時点での `$0` の値を呼び出し元のメソッドに戻すのは 4Dがおこないます。

## 任意パラメーター

*4D ランゲージリファレンス* において、コマンドシンタックス中の { } 文字 (中括弧) はその引数が省略可能であることを示します。 たとえば、`ALERT (message{; okButtonTitle})` は *okButtonTitle* が省略できることを意味します。 この場合、次のような呼び出し方が可能です:

```4d
ALERT("Are you sure?";"Yes I am") // 2つの引数
ALERT("Time is over") // 1つの引数
```

プロジェクトメソッドも同様に、同じ型の引数であれば、右側に不定数の引数を受け取ることができます。 任意パラメーターの問題は、それらが指定されない場合への対処が必要だということです。欠落がエラーに繋がってはいけません。 使用されなかったパラメーターにデフォルト値を代入するやり方が効果的です。

> When optional parameters are needed in your methods, you might also consider using [object properties as named parameters](#using-objects-properties-as-named-parameters) which provide a flexible way to handle variable numbers of parameters.

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

## 引数の渡し方: 値か参照か

When you pass a parameter, 4D always evaluates the parameter expression in the context of the calling method and sets the **resulting value** to the local variables in the class function or subroutine. これらのローカル変数に格納されているのは、呼び出し元で使用されているフィールドや変数、式ではなく、渡された値のみです。 Since its scope is local, if the value of a parameter is modified in the class function/subroutine, it does not change the value in the calling method. たとえば:

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

この例では、引数として指定された式はフィールドではなく、フィールドへのポインターです。 そのため、`DO_SOMETHING` メソッド内において、$1 はフィールドの値ではなく、フィールドへのポインターになっています。 $1 引数によって **参照** される対象 (上記コード内での $1-&gt;) はフィールドそのものです。 その結果、参照されている対象を変更すると、その影響はサブルーチンのスコープを超え、実際のフィールドも変更されます。 さきほどの例題においては、両方のアラートボックスに "WILLIAMS" と表示されます。

2. `DO_SOMETHING` メソッドに "何かさせる" 代わりに、値を返すようにメソッドを書き直すこともできます。 たとえば、以下のようにコードです:

```4d
    // MY_METHOD メソッド
 [People]Name:=DO_SOMETHING([People]Name) // もとの [People]Name の値が "williams" だとします
 ALERT([People]Name)

    // DO_SOMETHING メソッド
 $0:=Uppercase($1)
 ALERT($0)
```

This second technique of returning a value by a subroutine is called “using a function.” This is described in the [Returning values](#returning-values) paragraph.

### 特殊ケース: オブジェクトやコレクションの場合

オブジェクトやコレクションのデータタイプは参照 (つまり、内部的な *ポインター*) を介した形でのみ扱われることに注意が必要です。

したがって、`$1、$2...` には *値* ではなく *参照* が格納されます。 `$1、$2...` の値をサブルーチン内で変更した場合、その変更は元となるオブジェクトやコレクションが使用されているところへと伝播します。 これは [ポインター](Concepts/dt_pointer.md#メソッドの引数としてのポインター) に対する原理と同じものですが、`$1、$2...` の使用にあたって参照を外す必要はありません。

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

**4D Server:** "サーバー上で実行" オプションが使用された場合など、同じマシン上で実行されないメソッド間で引数が渡される場合、参照渡しは利用できません。 このような場合には、参照の代わりにオブジェクトとコレクションのコピーが引数として渡されます。