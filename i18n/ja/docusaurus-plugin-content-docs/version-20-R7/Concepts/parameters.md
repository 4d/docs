---
id: parameters
title: 引数
---

メソッドや関数にデータを渡す必要がしばしば発生します。 これは引数によって容易にできます。

## 概要

**引数** (または **パラメーター**) とは、メソッドや関数が処理に必要とするデータのことです。 _引数_ と _パラメーター_ は厳密には違うものですが、このマニュアルでは同義語として使用されています。 引数は、ビルトインの 4Dコマンドにも渡されます。 以下の例は、“Hello” という文字列を引数としてビルトインの `ALERT` コマンドへ渡します:

```4d
ALERT("Hello")
```

メソッドやクラス関数に引数を渡す場合も同様におこないます。 たとえば、`getArea()` クラス関数が 2つの引数を受け取る場合、このクラス関数を呼び出すには以下のように書きます:

```4d
$area:=$o.getArea(50;100)
```

また、プロジェクトメソッド `DO SOMETHING` が3つの引数を受け取る場合、このメソッドを呼び出すには以下のように書きます:

```4d
DO_SOMETHING($WithThis;$AndThat;$ThisWay)
```

入力引数は、セミコロン (;) で区切ります。

メソッドを実行する専用コマンドを利用するときも、同じ原則で引数を渡します。

```4d
EXECUTE METHOD IN SUBFORM("Cal2";"SetCalendarDate";*;!05/05/20!)  
// サブフォーム "Cal2" のコンテキストにおいて SetCalendarDate を実行し
// その際に引数として日付リテラル !05/05/20! を渡します
```

メソッドやクラス関数からデータを **返す** こともできます。 以下は、文字列のデータ長を返すビルトインの `Length` コマンドを用いたステートメントです。 このステートメントでは、`Length` 関数が _MyLength_ という変数に値を返します。

```4d
MyLength:=Length("How did I get here?")
```

どのようなサブルーチンでも値を返すことができます。 各メソッドやクラス関数につき、定義できる戻り値は一つだけです。

入力および出力値は呼び出し時に [評価](#引数の渡し方-値か参照か) され、その値はそれぞれ自動的にサブルーチン (呼び出されたメソッドまたはクラス関数) 内のローカル変数に格納されます。 パラメーターは、呼び出されるコード内で [宣言](#パラメーターの宣言) する必要があります。

:::info 互換性

引数が連番のローカル変数 ($0、$1 など) に自動的にコピーされ、`C_TEXT($1;$2)` のようなコンパイラー指示子を使って宣言される従来のシンタックスは、4D 20 R7 より **非推奨** となりました。

:::

## パラメーターの宣言

呼び出されたメソッドやクラス関数において、引数の値はローカル変数に代入されます。 通常、引数は **パラメーター名** とその **データ型** をコロン (:) で区切って宣言します。

- クラス関数の場合、引数は関数のプロトタイプとともに宣言されます。つまり、`Function` または `Class Constructor` キーワードを使うときに宣言されます。
- メソッドの場合 (プロジェクトメソッド、フォームオブジェクトメソッド、データベースメソッド、トリガー)、引数はメソッドコード先頭の `#DECLARE` キーワードを使って宣言されます。

例:

```4d
Function getArea($width : Integer; $height : Integer) -> $area : Integer
```

```4d
 //myProjectMethod
#DECLARE ($i : Integer) -> $myResult : Object
```

次のルールが適用されます:

- 宣言文はメソッドや関数のコードの先頭に位置していなければなりません。宣言文より前に置けるのはコメントと改行のみであり、それ以外の場合にはエラーが表示されます。
- 引数名は必ず `$` 文字で始まり、[プロパティ名の命名規則](identifiers.md#オブジェクトプロパティ) に準拠している必要があります。
- 複数のパラメーター (およびその型) を宣言する場合は、それらをセミコロン (;) で区切ります。
- 複数行シンタックスがサポートされています ("\\" 文字を使用)。

たとえば、`getArea()` 関数に 2つの引数を渡して呼び出す場合:

```4d
$area:=$o.getArea(50;100)
```

クラス関数において、引数の値はそれぞれ対応するパラメーターに代入されます:

```4d
// クラス: Polygon
Function getArea($width : Integer; $height : Integer)-> $area : Integer
	$area:=$width*$height
```

> パラメーターの型が宣言されていない場合には、[`Variant`](dt_variant.md) 型として定義されます。

データベースメソッドを含むすべての 4Dメソッドにおいて `#DECLARE` キーワードの使用がサポートされています。 たとえば、`On Web Authentication` データベースメソッドにおいて、次のように名前付き引数を宣言できます:

```4d
	// On Web Authentication データベースメソッド
#DECLARE ($url : Text; $header : Text; \
  $BrowserIP : Text; $ServerIP : Text; \
  $user : Text; $password : Text) \
  -> $RequestAccepted : Boolean
$entitySelection:=ds.User.query("login=:1"; $user)
// ハッシュパスワードを確認...
```

### 戻り値

関数の戻り値は、入力パラメーターリストに矢印 (->) を追加し、それに続けて宣言します。 例:

```4d
Function add($x : Variant; $y : Integer) -> $result : Integer
```

矢印と出力変数名を省略して、コロン (:) 記号の後に戻り値のデータ型だけを指定した場合には、戻り値は [return文](#return-expression) を使って管理します。 例:

```4d
Function add($x : Variant; $y : Integer): Integer
	return $x+$y
```

:::warning

戻り値を含む引数の宣言をおこなうのは、一度だけです。 特に、同じ型であっても、同じ引数を入力と出力の両方として宣言することはできません。 例:

```qs
	// 無効な宣言
Function myTransform ($x : Integer) -> $x : Integer
	// エラー: $x が2回宣言されています
```

:::

### サポートされているデータ型

名前付き引数の場合、[`var` キーワードでサポートされている](variables.md#var-キーワードによる宣言) データ型 (クラスオブジェクト含む) を使用できます。 例:

```4d
Function saveToFile($entity : cs.ShapesEntity; $file : 4D.File)
```

:::note

テーブルや配列の式は [ポインターを介した参照として](dt_pointer.md#メソッドの引数としてのポインター) 渡す必要があります。

:::

### 初期化

引数は宣言されると、[**その型に対応するデフォルト値**](data-types.md#デフォルト値) に初期化されます。別の値が代入されない限り、セッション中はこの値が保持されます。

## `return {expression}`

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R4 | 追加 |

</details>

`return`文は、関数やメソッドの実行を終了させ、呼び出し元に式を返すために使用します。

たとえば、次の関数は引数 $x の 2乗を返します。$x は数値です。

```4d
Function square($x : Integer) -> $result : Integer
   return $x * $x
```

:::note

内部的に、`return x` は `myReturnValue:=x` を実行し、呼び出し元に戻ります。 `return` が式なしで使われた場合、関数またはメソッドは宣言された戻り値の型 (あれば)の null値を返し、それ以外の場合には _undefined_ です。

:::

`return`文は、[戻り値](#戻り値) の標準的なシンタックスと併用することができます (戻り値は宣言された型でなくてはなりません)。 ただし、<code>return</code> はコードの実行を直ちに終了させることに注意が必要です。 例:

```4d
Function getValue -> $v : Integer
	$v:=10
	return 20
	// 20 が返されます

Function getValue -> $v : Integer
	return 10
	$v:=20 // 実行されません
	// 10 が返されます
```

## 引数の間接参照 (${N})

4Dメソッドおよび関数は、可変長の引数を受け取ることができます。 `For...End for` ループや [`Count parameters`](https://doc.4d.com/4dv20/help/command/ja/page259.html) コマンド、**引数の間接参照シンタックス** を使って、これらの引数を扱うことができます。 メソッド内で、間接参照は `${N}` のように表示します。ここの `N` は数値式です。

### 可変長引数の使い方

引数の数値を合計した結果を、引数として渡された表示形式で返すようなメソッドを考えてみましょう。 合計される数値の数は、メソッドが呼ばれるたびに変わります。 このメソッドでは数値と表示形式を引数としてメソッドに渡さなければなりません。

以下は `MySum` メソッドです:

```4d
 #DECLARE($format : Text) -> $result : Text
 $sum:=0
 For($i;2;Count parameters)
    $sum:=$sum+${$i}
 End for
 $result:=String($sum;$format)
```

このメソッドの引数は正しい順序で渡す必要があります。最初に表示形式、次に可変個の数値引数です。

```4d
 Result:=MySum("##0.00";125,2;33,5;24) // "182.70"
 Result:=MySum("000";1;2;200) // "203"
```

0、1、またはそれ以上のパラメーターを宣言してある場合でも、任意の数の引数を渡すことができます。 呼び出されたコード内では、`${N}` シンタックスを使って引数を利用でき、可変長引数の型はデフォルトで [バリアント](dt_variant.md) です ([可変長引数の記法](#可変長引数の宣言) を使ってこれらを宣言できます)。 [`Count parameters`](https://doc.4d.com/4dv20/help/command/ja/page259.html) コマンドを使用して、パラメーターが存在することをあらかじめ確認しておく必要があります。 例:

```4d
// foo メソッド
#DECLARE($p1: Text;$p2 : Text; $p3 : Date)
For($i;1;Count parameters)
	ALERT("param "+String($i)+" = "+String(${$i}))
End for
```

このメソッドは次のように呼び出せます:

```4d
foo("hello";"world";!01/01/2021!;42;?12:00:00?) // 追加の引数が受け渡されます
```

> 引数の間接参照は以下の条件を守ることにより、正しく動作します: 引数の一部のみを間接参照する場合、直接参照する引数の後に間接参照引数を配置するようにします。

### 可変長引数の宣言

可変長引数を宣言することは必須ではありません。 宣言なしの可変長引数は自動的に [バリアント](dt_variant.md)型となります。

ただし、コード実行中に型が一致しないエラーを回避するために、関数のプロトタイプ、クラスコンストラクター、およびメソッドで "..." を使用して可変長のパラメーターを宣言できます (可変長引数)。 "..." に続いて型を指定することで、引数の型を指定します。

```4d
#DECLARE ( ... : Text ) // 可変長の Text型引数

```

```4d
Function myfunction ( ... : Text)

```

複数のパラメーターを宣言する場合は、可変長の表記は最後に使用する必要があります。例:

```4d
#DECLARE ( param: Real ; ... : Text )

```

```4d
Function myfunction (var1: Integer ; ... : Text)
```

#### 例題

引数として渡されたすべての数値を合計した結果を返す `SumNumbers` というメソッドがあるとします:

```4d

#DECLARE( ... : Real) : Real



var $number; $total : Real

For each ($number; 1; Count parameters)
	$total+=${$number}
End for each

return $total

```

このメソッドは、可変長の実数引数を渡して呼び出すことができます。 引数の型が間違っている場合は、メソッドが実行される前にエラーが返されます:

```4d

$total1:=SumNumbers // 0 を返します
$total2:=SumNumbers(1; 2; 3; 4; 5) // 15 を返します
$total3:=SumNumbers(1; 2; "hello"; 4; 5) // エラー

```

:::note 互換性

可変長引数を宣言するための従来のシンタックス (`C_TEXT(${4})`) は 4D 20 R7 より非推奨となりました。

:::

## トリガーと On Drag Over

コンテキストによっては、"Compiler_" メソッドでの宣言をサポートしていないため、別途処理されます:

- トリガー - トリガーの結果である $0 パラメーター (倍長整数) は、明確に定義されていなければコンパイラーによって型指定されます。 定義する場合は、トリガーの中でおこなう必要があります。

## 引数の型間違い

間違った型の引数を呼び出すことは、正しい実行を妨げる [エラー](error-handling.md) となります。 たとえば、次のようなメソッドを書いたとします:

```4d
// method1
#DECLARE($value : Text)
```

```4d
// method2
method1(42) // 型間違い。期待されるのはテキスト
```

このケースは、コンテキストに応じて 4D で処理されます。

- [コンパイル済みプロジェクト](interpreted.md) では、可能な限りコンパイル時にエラーが生成されます。 それ以外の場合は、メソッドの呼び出し時にエラーが生成されます。
- インタープリタープロジェクトでは:
  - [名前付きシンタックス](#名前付き引数) (`#DECLARE` または `Function`) を使用して引数が宣言されている場合は、メソッドの呼び出し時にエラーが発生します。
  - 旧式の (`C_XXX`) シンタックスを使用して宣言されている場合、エラーは発生せず、呼び出されたメソッドは期待される型の空の値を受け取ります。

## オブジェクトプロパティを名前付き引数として使用する

引数としてオブジェクトを渡すことによって **名前付き引数** を扱うことができます。 このプログラミング方法はシンプルかつ柔軟なだけでなく、コードの可読性も向上させます。

たとえば、`CreatePerson` メソッドを例にとると:

```4d
  // CreatePerson メソッド
 var $person : Object
 $person:=New object("Name";"Smith";"Age";40)
 ChangeAge($person)
 ALERT(String($person.Age))  
```

`ChangeAge` メソッドを次のように書けます:

```4d
  // ChangeAge メソッド
 #DECLARE ($para : Object)
 $para.Age:=$para.Age+10
 ALERT($para.Name+" は "+String($para.Age)+" 歳です。")
```

これは [任意パラメーター](#任意パラメーター) を指定するにあたって非常に便利な方法です (後述参照)。 この場合、引数の不足は次のように対処できます:

- `Null` 値と比較することで、必要な引数がすべて提供されているかをチェックします
- 引数の値をプリセットします
- 渡されていない引数は空値として扱います

上述の `ChangeAge` メソッドの例では、Age およびName プロパティはどちらも必須であるため、引数オブジェクトに含まれていなければエラーが発生します。 これを避けるには、次のように記述することができます:

```4d
  // ChangeAge メソッド
 #DECLARE ($para : Object)
 $para.Age:=Num($para.Age)+10
 ALERT(String($para.Name)+" は "+String($para.Age)+" 歳です。")
```

すると、引数が不足してもエラーは生成されず、両方が欠落した場合の結果は " は 10歳です" となってしまうにせよ、いずれの引数も任意となります。

名前付き引数を利用すると、アプリケーションの保守やリファクタリングが簡単かつ安全におこなえます。 さきほどの例で、加算する年数を場合に応じて変えたほうが適切であると、あとから気づいたとします。 メソッドのパラメーターとして、加算年数を追加しなくてはなりません。 この場合、次のように書けます:

```4d
$person:=New object("Name";"Smith";"Age";40;"toAdd";10)
ChangeAge($person)

// ChangeAge メソッド
#DECLARE ($para : Object)  
If ($para.toAdd=Null)
	$para.toAdd:=10
End if
$para.Age:=Num($para.Age)+$para.toAdd
ALERT(String($para.Name)+" は "+String($para.Age)+" 歳です。")
```

このように、既存のコードを変える必要はありません。 変更後のコードは変更前と同じように動作しますが、引数によって加算年数に数値を指定することもできるようになりました。

名前付き引数を使うと、すべてのパラメーターを任意にすることができます。 上の例ではすべてのパラメーターが任意で、いずれを指定してもよく、順序は考慮されません。

## 任意パラメーター

_4D ランゲージリファレンス_ において、コマンドシンタックス中の { } 文字 (中括弧) はその引数が省略可能であることを示します。 たとえば、`ALERT (message{; okButtonTitle})` は _okButtonTitle_ が省略できることを意味します。 この場合、次のような呼び出し方が可能です:

```4d
ALERT("Are you sure?";"Yes I am") // 2つの引数
ALERT("Time is over") // 1つの引数
```

4Dメソッドや関数も、このような任意パラメーターを受け入れます。 任意の数のパラメーターを宣言することができます。 宣言されているよりも少ない引数をメソッドや関数に渡した場合、指定されなかったパラメーターは、[そのタイプに応じたデフォルト値](data-types.md#デフォルト値) として、呼び出されたコードの中で処理されます。 例:

```4d
// myClass クラスの "concate" 関数
Function concate ($param1 : Text ; $param2 : Text)->$result : Text
$result:=$param1+" "+$param2
```

```4d
  // 呼び出し元メソッド
 $class:=cs.myClass.new()
 $class.concate("Hello") // "Hello "
 $class.concate() // スペースのみ: " "
```

:::note

宣言されているよりも多い数のパラメーターをメソッドや関数に渡すこともできます。 呼び出されたコードにおいて、これらは [${N} シンタックス](#parameter-indirection-n) を使うことで利用可能です。

:::

`Count parameters` コマンドを使用すると、メソッドに渡された引数の数を確認することができるため、数に応じて異なる処理をおこなえます。

次の例はテキストメッセージを表示し、2つの引数が渡されていればディスク上のドキュメントに、3つ以上の場合は 4D Write Pro エリアにそのテキストを書き出します。

```4d
// APPEND TEXT プロジェクトメソッド
// APPEND TEXT ( Text { ; Text { ; Object } } )
// APPEND TEXT ( メッセージ { ; パス { ; 4DWPエリア } } )

 #DECLARE ($message : Text; $path : Text; $wpArea : Object)

 ALERT($message)
 If(Count parameters>=3)
    WP SET TEXT($wpArea;$1;wk append)
 Else
    If(Count parameters>=2)
       TEXT TO DOCUMENT($path;$message)
    End if
 End if
```

このプロジェクトメソッドをアプリケーションに追加したあとは、次のように呼び出すことができます:

```4d
APPEND TEXT(vtSomeText) // メッセージを表示します
APPEND TEXT(vtSomeText;$path) // メッセージを表示して、 $path のドキュメントに書き出します
APPEND TEXT(vtSomeText;"";$wpArea) // メッセージを表示して、 $wpArea の4D Write Pro ドキュメントに追記します
```

:::tip

任意パラメーターが必要な場合、[オブジェクトプロパティを名前付き引数として使用する](#オブジェクトプロパティを名前付き引数として使用する) と型の制限がなく、柔軟で便利です。

:::

## 引数の渡し方: 値か参照か

引数を渡すとき、4D は呼び出し元メソッドのコンテキストにおいてその式を評価し、**結果の値** をクラス関数またはサブルーチンのローカル変数に格納します。 これらのローカル変数に格納されているのは、呼び出し元で使用されているフィールドや変数、式ではなく、渡された値のみです。 スコープがローカルに限られているため、クラス関数 / サブルーチン内でローカル変数の値を変えても、呼び出し元メソッドには影響ありません。 例:

```4d
	// MY_METHOD メソッド
DO_SOMETHING([People]Name) // [People]Name の値が "williams" だとします
ALERT([People]Name)

	// DO_SOMETHING メソッド
 #DECLARE($param : Text)
 $param:=Uppercase($param)
 ALERT($param)
```

`DO_SOMETHING` メソッドによって表示されたアラートボックスでは "WILLIAMS" と表示され、`MY_METHOD` メソッドによって表示されるアラートボックスでは "williams" と表示されます。 `DO_SOMETHING` メソッドは $param の値をローカルな範囲で変更しましたが、これは `MY_METHOD` メソッドがサブルーチンに渡す引数として指定した [People]Last Name フィールドの値には影響しません。

もし `DO_SOMETHING` メソッド内でフィールドの値を変更したいのであれば、2通りのやり方があります:

1. サブルーチンに渡す式としてフィールドではなく、フィールドへのポインターを指定することができます。この場合、以下のようにコードを書きます:

```4d
  // MY_METHOD メソッド
DO_SOMETHING(->[People]Name) // [People]Name の値が "williams" だとします
ALERT([People]Last Name)

  // DO_SOMETHING メソッド
#DECLARE($param : Text)
$param->:=Uppercase($param->)
ALERT($param->)
```

この例では、引数として指定された式はフィールドではなく、フィールドへのポインターです。 そのため、`DO_SOMETHING` メソッド内において、$param はフィールドの値ではなく、フィールドへのポインターになっています。 $param 引数によって **参照** される対象 (上記コード内での $param->) はフィールドそのものです。 その結果、参照されている対象を変更すると、その影響はサブルーチンのスコープを超え、実際のフィールドも変更されます。 さきほどの例題においては、両方のアラートボックスに "WILLIAMS" と表示されます。

2. `DO_SOMETHING` メソッドに "何かさせる" 代わりに、値を返すようにメソッドを書き直すこともできます。 たとえば、以下のようなコードです:

```4d
	// MY_METHOD メソッド
 [People]Name:=DO_SOMETHING([People]Name) // [People]Name の値が "williams" だとします
 ALERT([People]Name)

	// DO_SOMETHING メソッド
 #DECLARE ($param : Text) -> ($result : Text)
 $result:=Uppercase($param)
 ALERT($result)
```

このようにサブルーチンの戻り値を使うことを "関数を使う" と言います。 詳細については [戻り値](#戻り値) の章を参照ください。

### 特殊ケース: オブジェクトやコレクションの場合

オブジェクトやコレクションのデータタイプは参照 (つまり、内部的な _ポインター_) を介した形でのみ扱われることに注意が必要です。

したがって、`$param、$return...` には _値_ ではなく _参照_ が格納されます。 `$param、$return...` の値をサブルーチン内で変更した場合、その変更は元となるオブジェクトやコレクションが使用されているところへと伝播します。 これは [ポインター](dt_pointer.md#メソッドの引数としてのポインター) に対する原理と同じものですが、`$param、$return...` の使用にあたって参照を外す必要はありません。

次の例では、`CreatePerson` メソッドはオブジェクトを作成したのち、それを引数として `ChangeAge` に渡します:

```4d
  // CreatePerson メソッド
 var $person : Object
 $person:=New object("Name";"Smith";"Age";40)
 ChangeAge($person)
 ALERT(String($person.Age))  
```

`ChangeAge` メソッドは受け取ったオブジェクトの Age 属性に 10を加えます:

```4d
  // ChangeAge メソッド
 #DECLARE ($person : Object)
 $person.Age:=$person.Age+10
 ALERT(String($person.Age))
```

`CreatePerson` メソッドを実行すると、サブルーチンにおいても同じオブジェクト参照が扱われているため、両方のアラートボックスにおいて ”50” と表示されます。

**4D Server:** "サーバー上で実行" オプションが使用された場合など、同じマシン上で実行されないメソッド間で引数が渡される場合、参照渡しは利用できません。 このような場合には、参照の代わりにオブジェクトとコレクションのコピーが引数として渡されます。
