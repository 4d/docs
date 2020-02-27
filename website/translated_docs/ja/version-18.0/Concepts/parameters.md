---
id: version-18.0-parameters
title: 引数
original_id: parameters
---


## 引数について

メソッドにデータを渡す必要がしばしば発生します。 これは引数によって容易にできます。

**引数** (または **パラメーター**) は、メソッドが処理に必要とするデータのことです。 *引数* と *パラメーター* は厳密には違うものですが、このマニュアルでは同義語として使用されています。 引数は、ビルトインの 4Dコマンドにも渡されます。 以下の例は、“Hello” という文字列を引数としてビルトインの `ALERT` コマンドへ渡します:

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

これらの引数 ($1, $2...) はサブルーチン内で 他のローカル変数と同様に使用できます。 しかしながら、引数として渡した変数の値を変更するコマンドをサブルーチン内で使用する場合 (例: `Find in field`)、$1, $2などを直接渡すことはできません。 まず標準のローカル変数等にコピーする必要があります (例: $myvar:=$1)。

メソッドを実行する専用コマンドを利用するときも、同じ原則で引数を渡します。

```4d
EXECUTE METHOD IN SUBFORM("Cal2";"SetCalendarDate";*;!05/05/10!)  
// サブフォーム "Cal2" のコンテキストにおいて SetCalendarDate を実行し
// その際に引数として日付リテラル !05/05/10! を渡します
```

**注:** よりよいコード実行のため、サブルーチンが受け取る引数 `$1`, `$2`... が正確に宣言されていることを確認してください ([パラメーターの宣言](#declaring-parameters) 参照)

### 引数としてサポートされている式

引数はあらゆる [式](Concepts/quick-tour.md#expression-types) の形で渡すことができますが、例外があります:

- テーブル
- arrays

テーブルや配列の式は [ポインターを介した参照として](Concepts/dt_pointer.md#pointers-as-parameters-to-methods) 渡す必要があります。

## 関数

メソッドからデータを返すこともできます。 値を返すメソッドを関数と呼びます。

値を返す 4Dコマンドや 4Dプラグインコマンドも関数と呼びます。

以下は、文字列のデータ長を返すビルトインの `Length` 関数を用いたステートメントです。 このステートメントでは、`Length` 関数が *MyLength* という変数に値を返します。

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

変数 *NewPhrase* には“THIS is good.” が格納されます。

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

**注:** プロジェクトメソッドのパラメーター宣言は、コンパイルモード用にまとめて、"Compiler" で始まる名称の専用メソッドにておこなうことができます。 専用メソッド内で各メソッドのパラメーターをあらかじめ宣言する場合は、次のように書きます:

```4d
 C_REAL(OneMethodAmongOthers;$1) 
```

詳細については [インタープリターモードとコンパイルモード](Concepts/interpreted.md) を参照ください。

Parameter declaration is also mandatory in the following contexts (these contexts do not support declaration in a "Compiler" method):

- Database methods For example, the `On Web Connection Database Method` receives six parameters, $1 to $6, of the data type Text. At the beginning of the database method, you must write (even if all parameters are not used):

```4d
// On Web Connection
C_TEXT($1;$2;$3;$4;$5;$6)
```

- Triggers The $0 parameter (Longint), which is the result of a trigger, will be typed by the compiler if the parameter has not been explicitly declared. Nevertheless, if you want to declare it, you must do so in the trigger itself.

- Form objects that accept the `On Drag Over` form event The $0 parameter (Longint), which is the result of the `On Drag Over` form event, is typed by the compiler if the parameter has not been explicitly declared. Nevertheless, if you want to decalre it, you must do so in the object method. **Note:** The compiler does not initialize the $0 parameter. So, as soon as you use the `On Drag Over` form event, you must initialize $0. たとえば:

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

## Values or references

When you pass a parameter, 4D always evaluates the parameter expression in the context of the calling method and sets the **resulting value** to the $1, $2... local variables in the subroutine (see [Using parameters](#using-parameters)). The local variables/parameters are not the actual fields, variables, or expressions passed by the calling method; they only contain the values that have been passed. Since its scope is local, if the value of a parameter is modified in the subroutine, it does not change the value in the calling method. たとえば:

```4d
    //Here is some code from the method MY_METHOD
DO_SOMETHING([People]Name) //Let's say [People]Name value is "williams"
ALERT([People]Name)

    //Here is the code of the method DO_SOMETHING
 $1:=Uppercase($1)
 ALERT($1)
```

The alert box displayed by `DO_SOMETHING` will read "WILLIAMS" and the alert box displayed by `MY_METHOD` will read "williams". The method locally changed the value of the parameter $1, but this does not affect the value of the field `[People]Name` passed as parameter by the method `MY_METHOD`.

There are two ways to make the method `DO_SOMETHING` change the value of the field:

1. Rather than passing the field to the method, you pass a pointer to it, so you would write:

```4d
  //Here is some code from the method MY_METHOD
 DO_SOMETHING(->[People]Name) //Let's say [People]Name value is "williams"
 ALERT([People]Last Name)

  //Here the code of the method DO_SOMETHING
 $1->:=Uppercase($1->)
 ALERT($1->)
```

Here the parameter is not the field, but a pointer to it. Therefore, within the `DO SOMETHING` method, $1 is no longer the value of the field but a pointer to the field. The object **referenced** by $1 ($1-> in the code above) is the actual field. Consequently, changing the referenced object goes beyond the scope of the subroutine, and the actual field is affected. In this example, both alert boxes will read "WILLIAMS".

2. Rather than having the method `DO_SOMETHING` "doing something," you can rewrite the method so it returns a value. Thus you would write:

```4d
    //Here is some code from the method MY METHOD
 [People]Name:=DO_SOMETHING([People]Name) //Let's say [People]Name value is "williams"
 ALERT([People]Name)

    //Here the code of the method DO SOMETHING
 $0:=Uppercase($1)
 ALERT($0)
```

This second technique of returning a value by a subroutine is called “using a function.” This is described in the [Functions](#functions) paragraph.

### Particular cases: objects and collections

You need to pay attention to the fact that Object and Collection data types can only be handled through a reference (i.e. an internal *pointer*).

Consequently, when using such data types as parameters, `$1, $2...` do not contain *values* but *references*. Modifying the value of the `$1, $2...` parameters within the subroutine will be propagated wherever the source object or collection is used. This is the same principle as for [pointers](Concepts/dt_pointer.md#pointers-as-parameters-to-methods), except that `$1, $2...` parameters do not need to be dereferenced in the subroutine.

For example, consider the `CreatePerson` method that creates an object and sends it as a parameter:

```4d
  //CreatePerson
 C_OBJECT($person)
 $person:=New object("Name";"Smith";"Age";40)
 ChangeAge($person)
 ALERT(String($person.Age))  
```

The `ChangeAge` method adds 10 to the Age attribute of the received object

```4d
  //ChangeAge
 C_OBJECT($1)
 $1.Age:=$1.Age+10
 ALERT(String($1.Age))
```

When you execute the `CreatePerson` method, both alert boxes will read "50" since the same object reference is handled by both methods.

**4D Server:** When parameters are passed between methods that are not executed on the same machine (using for example the "Execute on Server" option), references are not usable. In these cases, copies of object and collection parameters are sent instead of references.

## Named parameters

Using objects as parameters allow you to handle **named parameters**. This programming style is simple, flexible, and easy to read.

For example, using the `CreatePerson` method:

```4d
  //CreatePerson
 C_OBJECT($person)
 $person:=New object("Name";"Smith";"Age";40)
 ChangeAge($person)
 ALERT(String($person.Age))  
```

In the `ChangeAge` method you can write:

```4d
  //ChangeAge
 C_OBJECT($1;$para)
 $para:=$1  
 $para.Age:=$para.Age+10
 ALERT($para.Name+" is "+String($para.Age)+" years old.")
```

This provides a powerful way to define [optional parameters](#optional-parameters) (see also below). To handle missing parameters, you can either:

- check if all expected parameters are provided by comparing them to the `Null` value, or
- preset parameter values, or
- use them as empty values.

In the `ChangeAge` method above, both Age and Name properties are mandatory and would produce errors if they were missing. To avoid this case, you can just write:

```4d
  //ChangeAge
 C_OBJECT($1;$para)
 $para:=$1  
 $para.Age:=Num($para.Age)+10
 ALERT(String($para.Name)+" is "+String($para.Age)+" years old.")
```

Then both parameters are optional; if they are not filled, the result will be " is 10 years old", but no error will be generated.

Finally, with named parameters, maintaining or refactoring applications is very simple and safe. Imagine you later realize that adding 10 years is not always appropriate. You need another parameter to set how many years to add. You write:

```4d
$person:=New object("Name";"Smith";"Age";40;"toAdd";10)
ChangeAge($person)

//ChangeAge
C_OBJECT($1;$para)
$para:=$1  
If ($para.toAdd=Null)
    $para.toAdd:=10
End if
$para.Age:=Num($para.Age)+$para.toAdd
ALERT(String($para.Name)+" is "+String($para.Age)+" years old.")
```

The power here is that you will not need to change your existing code. It will always work as in the previous version, but if necessary, you can use another value than 10 years.

With named variables, any parameter can be optional. In the above example, all parameters are optional and anyone can be given, in any order.

## Optional parameters

In the *4D Language Reference* manual, the { } characters (braces) indicate optional parameters. For example, `ALERT (message{; okButtonTitle})` means that the *okButtonTitle* parameter may be omitted when calling the command. You can call it in the following ways:

```4d
ALERT("Are you sure?";"Yes I am") //2 parameters
ALERT("Time is over") //1 parameter
```

4D project methods also accept such optional parameters, starting from the right. The issue with optional parameters is how to handle the case where some of them are missing in the called method - it should never produce an error. A good practice is to assign default values to unused parameters.

> When optional parameters are needed in your methods, you might also consider using [Named parameters](#named-parameters) which provide a flexible way to handle variable numbers of parameters.

Using the `Count parameters` command from within the called method, you can detect the actual number of parameters and perform different operations depending on what you have received.

The following example displays a text message and can insert the text into a document on disk or in a 4D Write Pro area:

```4d
// APPEND TEXT Project Method
// APPEND TEXT ( Text { ; Text { ; Object } } )
// APPEND TEXT ( Message { ; Path { ; 4DWPArea } } )

 C_TEXT($1;$2)
 C_OBJECT($3)

 ALERT($1)
 If(Count parameters>=3)
    WP SET TEXT($3;$1;wk append)
 Else
    If(Count parameters>=2)
       TEXT TO DOCUMENT($2;$1)
    End if
 End if
```

After this project method has been added to your application, you can write:

```4d
APPEND TEXT(vtSomeText) //Will only display the  message
APPEND TEXT(vtSomeText;$path) //Displays text message and appends it to document at $path
APPEND TEXT(vtSomeText;"";$wpArea) //Displays text message and writes it to $wpArea
```

## Parameter indirection

4D project methods accept a variable number of parameters of the same type, starting from the right. This principle is called **parameter indirection**. Using the `Count parameters` command you can then address those parameters with a `For...End for` loop and the parameter indirection syntax.

In the following example, the project method `SEND PACKETS` accepts a time parameter followed by a variable number of text parameters:

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

Parameter indirection is best managed if you respect the following convention: if only some of the parameters are addressed by indirection, they should be passed after the others. Within the method, an indirection address is formatted: ${$i}, where $i is a numeric variable. ${$i} is called a **generic parameter**.

For example, consider a function that adds values and returns the sum formatted according to a format that is passed as a parameter. Each time this method is called, the number of values to be added may vary. We must pass the values as parameters to the method and the format in the form of a character string. The number of values can vary from call to call.

This function is called in the following manner:

```4d
 Result:=MySum("##0.00";125,2;33,5;24)

```

In this case, the calling method will get the string “182.70”, which is the sum of the numbers, formatted as specified. The function's parameters must be passed in the correct order: first the format and then the values.

Here is the function, named `MySum`:

```4d
 $Sum:=0
 For($i;2;Count parameters)
    $Sum:=$Sum+${$i}
 End for
 $0:=String($Sum;$1)
```

This function can now be called in various ways:

```4d
 Result:=MySum("##0.00";125,2;33,5;24)
 Result:=MySum("000";1;18;4;23;17)
```

### Declaring generic parameters

As with other local variables, it is not mandatory to declare generic parameters by compiler directive. However, it is recommended to avoid any ambiguity. To declare these parameters, you use a compiler directive to which you pass ${N} as a parameter, where N specifies the first generic parameter.

```4d
 C_LONGINT(${4})
```

This command means that starting with the fourth parameter (included), the method can receive a variable number of parameters of longint type. $1, $2 and $3 can be of any data type. However, if you use $2 by indirection, the data type used will be the generic type. Thus, it will be of the data type Longint, even if for you it was, for instance, of the data type Real.

**Note:** The number in the declaration has to be a constant and not a variable.