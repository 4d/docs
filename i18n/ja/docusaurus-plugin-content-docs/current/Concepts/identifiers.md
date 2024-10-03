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

> 競合防止のため、[データベーステーブル](#テーブルとフィールド) と同じ名前のクラスを作成するのは推奨されないこと

## 関数

関数名は、ドット記法のための標準的な [プロパティ名の命名規則](#オブジェクトプロパティ) に準拠している必要があります。

> **Tip:** アンダースコア ("_") 文字で関数名を開始すると、その関数は 4Dコードエディターの自動補完機能から除外されます。

## オブジェクトプロパティ

プロパティ名 (オブジェクト _属性_ とも呼びます) は255文字以内の文字列で指定します。

オブジェクトプロパティは、スカラー値・ORDA要素・クラス関数・他のオブジェクト等を参照できます。 参照先に関わらず、**[ドット記法](dt_object.md#オブジェクトプロパティ) を使用するには** オブジェクトプロパティ名は次の命名規則に従う必要があります:

- 1文字目は、文字、アンダースコア(_)、あるいはドル記号 ($) でなければなりません。
- その後の文字には、文字・数字・アンダースコア(_)・ドル記号 ($) が使用できます。
- 大文字・小文字は区別されます。

例:

```4d
myObject.myAttribute:="10"
$value:=$clientObj.data.address.city
```

:::tip

アンダースコア ("_") 文字でオブジェクトプロパティ名を開始すると、そのプロパティは 4Dコードエディターの自動補完機能から除外されます。 たとえば、`$o._myPrivateProperty` を宣言した場合、コードエディターにおいて `"$o. "`とタイプしても、このプロパティは候補として提示されません。

:::

詳細は [ECMA Script standard](https://www.ecma-international.org/ecma-262/5.1/#sec-7.6) を参照ください。

:::note

大カッコ [ ] に文字列を含める記法を利用すれば、プロパティ名にはあらゆる文字を使用することができます (例: `myObject["1. First property"]`).

:::

## 引数

引数名は必ず `$` 文字で始まります。また、[変数名](#変数) と同じルールが適用されます。

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

## 変数

変数名は、スコープ記号 (`$` および `<>`) を除いて最大31文字以内で指定することができます。

- A variable name must begin with a letter, an underscore, or a dollar ("$") for [parameters](parameters.md) and [local variables](variables.md#local-variables), or `<>` for [interprocess variables](variables.md#interprocess-variables) (deprecated).
- その後の文字には、文字・数字・アンダースコア(_) が使用できます。
- Do not use reserved names, i.e. 4D command names (`Date`, `Time`, etc), keywords (`If`, `For`, etc.), system variable names (`OK`, `document`...), or constant names (`Euro`, `Black`, `Friday`, etc.).
- 変数名においては、大文字・小文字は区別されません。

例:

```4d
For($vlRecord;1;100) //local variable
$vsMyString:="Hello there" //local variable
var $vName; $vJob : Text //local variales
If(bValidate=1) //process variable
<>vlProcessID:=Current process() //interprocess variable
```

### 互換性

Some naming practices were previously allowed but are no longer supported when the [direct typing mode is enabled](../Project/compiler.md#enabling-direct-typing) (introduced in 4D 20 R7). Enabling this mode will produce syntax errors if:

- a variable name has a digit as first character,
- a variable name contains space characters,
- you declared variables named $0, $1, etc.

## その他の識別子

4Dランゲージにおいては、識別子が文字列として扱われる要素も多数存在します: **フォーム**, **フォームオブジェクト**, **命名セレクション**, **プロセス**, **セット**, **メニューバー**, 等。

このような文字列名は、(該当する場合はスコープ記号を除いて) 255文字以内で指定します。

- 文字列名にはあらゆる文字を使用できます。
- 文字列名においては、大文字・小文字は区別されません。

例:

```4d
DIALOG([Storage];"Note box"+String($vlStage))
OBJECT SET FONT(*;"Binfo";"Times")
USE NAMED SELECTION([Customers];"Closed")// プロセス命名セレクション
USE NAMED SELECTION([Customers];"<>ByZipcode") // インタープロセス命名セレクション
 // グローバルプロセス "Add Customers" の開始:
$vlProcessID:=New process("P_ADD_CUSTOMERS";48*1024;"Add Customers")
 // ローカルプロセス "$Follow Mouse Moves" の開始:
$vlProcessID:=New process("P_MOUSE_SNIFFER";16*1024;"$Follow Mouse Moves")
CREATE SET([Customers];"Customer Orders")// プロセスセット
USE SET("<>Deleted Records") // インタープロセスセット
If(Records in set("$Selection"+String($i))>0) // クライアントセット

```
