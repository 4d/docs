---
id: resolve-pointer
title: RESOLVE POINTER
slug: /commands/resolve-pointer
displayed_sidebar: docs
---

<!--REF #_command_.RESOLVE POINTER.Syntax-->**RESOLVE POINTER** ( *pointer* ; *varName* ; *tableNum* ; *fieldNum* )<!-- END REF-->
<!--REF #_command_.RESOLVE POINTER.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| pointer | Pointer | &#8594;  | 参照オブジェクトを取得するポインタ |
| varName | Text | &#8592; | 参照された変数の名前または空の文字列 |
| tableNum | Integer | &#8592; | 参照されたテーブルまたは配列要素の番号 または 0 あるいは -1 |
| fieldNum | Integer | &#8592; | 参照されたフィールドの番号 または 0 あるいは -1 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.RESOLVE POINTER.Summary-->RESOLVE POINTER コマンドは、*pointer*式によって参照されるオブジェクトの情報を取得し、引数*varName*、*tableNum*、*fieldNum*に返します。<!-- END REF-->

参照されるオブジェクトの種類によって、RESOLVE POINTERコマンドは、以下のような値を返します:

| **参照されるオブジェクト** | 引数           |              |         |
| --------------- | ------------ | ------------ | ------- |
| **varName**     | **tableNum** | **fieldNum** |         |
| なし (NILポインタ)    | "" (空の文字列)   | 0            | 0       |
| 変数              | 変数名          | \-1          | \-1     |
| 配列              | 配列名          | \-1          | \-1     |
| 配列要素            | 配列名          | 要素番号         | \-1     |
| 2次元配列要素         | 2次元配列の名前     | 要素の行番号       | 要素の列番号  |
| テーブル            | "" (空の文字列)   | テーブル番号       | 0       |
| フィールド           | "" (空の文字列)   | テーブル番号       | フィールド番号 |

**Notes:** 

* *pointer*に渡す値がポインタ式でない場合には、シンタックスエラーが発生します。
* RESOLVE POINTER コマンドは、ローカル変数のポインタには使用できません。何故なら、ローカル変数は、同じ名前で異なる場所で定義できるため、目的のローカル変数を特定することができないからです。

#### 例題 1 

フォーム内で、v1, v2... v100という名前で入力可能な変数100個を作成します。これを実行するには、以下のような手順を実行します: 

a. 入力可能な変数を1つ作成し、vと名付ける。

b. オブジェクトのプロパティを設定する。

c. オブジェクトに以下のメソッドを作成する:

```4d
 DoSomething(Self) // DoSomething はデータベースのプロジェクトメソッド
```

d. この時点で、必要な回数だけ変数を複製することも、フォームエディタの「グリッドで変数作成」機能を使用することもできる。

e. DoSomethingメソッド内で、このメソッドが呼び出される変数のインデックスを知る必要がある場合には、以下のように記述する:

```4d
 RESOLVE POINTER($1;$vsVarName;$vlTableNum;$vlFieldNum)
 $vlVarNum:=Num(Substring($vsVarName;2))
```

この方法でフォームを作成することによって、100個の変数のためのメソッドを一度書くだけで済むことに注目してください。DoSomething (1), DoSomething (2)...,DoSomething (100)を作成する必要はありません。  

#### 例題 2 

デバッグのために、メソッドへの2番目の引数 ($2) がテーブルへのポインタであることを確認する必要があるとします。この場合、メソッドの最初で、以下のように記述します: 

```4d
  // ...
 If(<>DebugOn)
    RESOLVE POINTER($2;$vsVarName;$vlTableNum;$vlFieldNum)
    If(Not(($vlTableNum>0) & ($vlFieldNum=-1) & ($vsVarName="")))
  // 警告: ポインタはテーブルへの参照ではない
       TRACE
    End if
 End if
  // ...
```

  
#### 例題 3 

DRAG AND DROP PROPERTIES コマンドの例を参照.

#### 例題 4 

以下に二次元配列の例があります:

```4d
 ARRAY TEXT(atCities;100;50)
 var $city : Pointer
 atCities{1}{2}:="Rome"
 atCities{1}{5}:="Paris"
 atCities{2}{6}:="New York"
  // ...他の値
 $city:=->atCities{1}{5}
 RESOLVE POINTER($city;$var;$rowNum;$colNum)
  //$var="atCities"
  //$rowNum="1"
  //$colNum="5"
```

#### 参照 

[Field](field.md)  
[Get pointer](get-pointer.md)  
[Is a variable](is-a-variable.md)  
[Is nil pointer](is-nil-pointer.md)  
[Table](table.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 394 |
| スレッドセーフである | &check; |


