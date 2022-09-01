---
id: identifiers
title: 識別子の命名規則
---

この章では、4D ランゲージにおけるさまざまな要素 (変数、オブジェクトプロパティ、テーブル、フォームなど) の命名規則について説明します。

> 非ローマ文字 (日本語など) が識別子に使用された場合、その最大長は短かくなることがあります。

## 配列

[変数](#変数) と同じルールが適用されます。

## クラス

クラス名は31文字以内で指定します。

クラス名は、ドット記法のための標準的な [プロパティ名の命名規則](Concepts/dt_object.md#オブジェクトプロパティ識別子) に準拠している必要があります。

> 競合防止のため、[データベーステーブル](#tables) と同じ名前のクラスを作成するのは推奨されないこと

## 関数

関数名は、ドット記法のための標準的な [プロパティ名の命名規則](#オブジェクトプロパティ) に準拠している必要があります。

> **Tip:** アンダースコア ("_") 文字で関数名を開始すると、その関数は 4Dコードエディターの自動補完機能から除外されます。

## オブジェクトプロパティ

プロパティ名 (オブジェクト *属性* とも呼びます) は255文字以内の文字列で指定します。

オブジェクトプロパティは、スカラー値・ORDA要素・クラス関数・他のオブジェクト等を参照できます。 参照先に関わらず、**[ドット記法](dt_object.md#object-properties) を使用するには** オブジェクトプロパティ名は次の命名規則に従う必要があります:

- 1文字目は、文字、アンダースコア(_)、あるいはドル記号 ($) でなければなりません。
- その後の文字には、文字・数字・アンダースコア(_)・ドル記号 ($) が使用できます。
- 大文字・小文字は区別されます。

例:

```4d
myObject.myAttribute:="10"
$value:=$clientObj.data.address.city
```

> 大カッコ [ ] に文字列を含める記法を利用すれば、プロパティ名にはあらゆる文字を使用することができます (例: `myObject["1. First property"]`)。

詳細は [ECMA Script standard](https://www.ecma-international.org/ecma-262/5.1/#sec-7.6) を参照ください。

## パラメーター

引数名は必ず `$` 文字で始まります。また、[変数名](#variables) と同じルールが適用されます。

例:

```4d
Function getArea($width : Integer; $height : Integer)-> $area : Integer

#DECLARE ($i : Integer ; $param : Date) -> $myResult : Object
```

## プロジェクトメソッド

プロジェクトメソッド名は 31文字以内で指定します。

- 1文字目は、文字、数字、あるいはアンダースコア(_) でなければなりません。
- その後の文字には、文字・数字・アンダースコア(_)・スペースが使用できます。
- 予約語を使用しないでください。予約語にはコマンド名 (`Date`, `Time` 等)、キーワード (`If`, `For` 等)、そして定数 (`Euro`, `Black`, `Friday` 等) が含まれます。
- 大文字・小文字は区別されます。

例:

```4d
If(New client)
DELETE DUPLICATED VALUES
APPLY TO SELECTION([Employees];INCREASE SALARIES)
```

**Tip:** 4Dのビルトインコマンドと同じ命名規約を利用することは良いプログラミングテクニックです。 メソッド名には大文字を使用しますが、メソッドが値を返す場合には最初の文字だけを大文字にします。 このように命名することにより、数ヶ月後に保守のためプロジェクトを再度開いたときに、エクスプローラーウィンドウでその名前を見ただけで、メソッドが結果を返すかどうかがわかります。

 > メソッドを呼び出すには、メソッド名を書きます。 しかし `ON EVENT CALL` など一部の 4Dのビルトインコマンドやプラグインコマンドに、引数としてメソッド名を渡す場合には、文字列 (ダブルクォートで括る) として渡します。

例:

```4d
 // このコマンドはメソッド (関数) またはフォーミュラを受け取ります
QUERY BY FORMULA([aTable];Special query)
 // このコマンドはメソッド (プロシージャ) またはステートメントを受け取ります
APPLY TO SELECTION([Employees];INCREASE SALARIES)
 // このコマンドはメソッド名を文字列で受け取ります
ON EVENT CALL("HANDLE EVENTS")
```

## テーブルとフィールド

大カッコ内 (\[...]) に名前を入れることで、テーブルを表します。 フィールドを表すには、そのフィールドが属するテーブルをまず指定し、フィールド名を続けて書きます。

テーブル名およびフィールド名は、31文字以内で指定します。

- 1文字目は、文字、アンダースコア(_)、あるいはドル記号 ($) でなければなりません。
- その後の文字には、半角アルファベット文字・数字・スペース・アンダースコアを使用ができます。
- 予約語を使用しないでください。予約語にはコマンド名 (`Date`, `Time` 等)、キーワード (`If`, `For` 等)、そして定数 (`Euro`, `Black`, `Friday` 等) が含まれます。
- SQLで処理する場合には追加のルールがあります: 文字 _0123456789abcdefghijklmnopqrstuvwxyz のみを使用できます。また、名前に SQLキーワード (コマンド、属性 等) が含まれていてはなりません。

例:

```4d
FORM SET INPUT([Clients];"Entry")
ADD RECORD([Letters])
[Orders]Total:=Sum([Line]Amount)
QUERY([Clients];[Clients]Name="Smith")
[Letters]Text:=Capitalize text([Letters]Text)

```

> 競合防止のため、[クラス](#クラス) と同じ名前のテーブルを作成するのは推奨されません。

## Variables

The name of a variable can be up to 31 characters, not including the scope symbols (`$` or `<>`).

- A variable name must begin with a letter, an underscore, or a dollar ("$") for [parameters](parameters.md) and [local variables](variables.md#local-variables), or `<>` for [interprocess variables](variables.md#interprocess-variables).
- 変数の1文字目に数字を使うことは許可されていますが、推奨されません。また、[`var` 宣言のシンタックス](variables.md#var-キーワードによる宣言) ではサポートされていません。
- その後の文字には、文字・数字・アンダースコア(_) が使用できます。
- 変数名にスペースを使うことは許可されていますが、推奨されません。また、[`var` 宣言のシンタックス](variables.md#var-キーワードによる宣言) ではサポートされていません。
- 予約語を使用しないでください。予約語にはコマンド名 (`Date`, `Time` 等)、キーワード (`If`, `For` 等)、そして定数 (`Euro`, `Black`, `Friday` 等) が含まれます。
- 変数名においては、大文字・小文字は区別されません。

例:

```4d
For($vlRecord;1;100) // ローカル変数
$vsMyString:="Hello there" // ローカル変数
var $vName; $vJob : Text // ローカル変数 
If(bValidate=1) // プロセス変数
<>vlProcessID:=Current process() // インタープロセス変数
```

## その他の識別子

4Dランゲージにおいては、識別子が文字列として扱われる要素も多数存在します: **フォーム**, **フォームオブジェクト**, **命名セレクション**, **プロセス**, **セット**, **メニューバー**, 等。

Such string names can contain up to 255 characters, not including the `$` or `<>` characters (if any).

- 文字列名にはあらゆる文字を使用できます。
- 文字列名においては、大文字・小文字は区別されません。

例:

```4d
DIALOG([Storage];"Note box"+String($vlStage))
OBJECT SET FONT(*;"Binfo";"Times")
USE NAMED SELECTION([Customers];"Closed")//Process Named Selection
USE NAMED SELECTION([Customers];"<>ByZipcode") //Interprocess Named Selection
 //Starting the global process "Add Customers"
$vlProcessID:=New process("P_ADD_CUSTOMERS";48*1024;"Add Customers")
 //Starting the local process "$Follow Mouse Moves"
$vlProcessID:=New process("P_MOUSE_SNIFFER";16*1024;"$Follow Mouse Moves")
CREATE SET([Customers];"Customer Orders")//Process set
USE SET("<>Deleted Records") //Interprocess set
If(Records in set("$Selection"+String($i))>0) //Client set

```
