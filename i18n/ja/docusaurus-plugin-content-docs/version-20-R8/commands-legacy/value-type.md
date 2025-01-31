---
id: value-type
title: Value type
slug: /commands/value-type
displayed_sidebar: docs
---

<!--REF #_command_.Value type.Syntax-->**Value type** ( *expression* ) : Integer<!-- END REF-->
<!--REF #_command_.Value type.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| expression | Expression | &#8594;  | テストしたい結果を返す式 |
| 戻り値 | Integer | &#8592; | データ型の数字 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Value type.Summary-->Value type コマンドは*expression* 引数に渡した式の評価の結果の値の型を返します。<!-- END REF-->

コマンドが返す数値は、*Field and Variable Types* テーマにある以下の定数と比較することが可能です: 

| 定数            | 型    | 値   |
| ------------- | ---- | --- |
| \_o\_Is float | 倍長整数 | 35  |
| Is BLOB       | 倍長整数 | 30  |
| Is Boolean    | 倍長整数 | 6   |
| Is collection | 倍長整数 | 42  |
| Is date       | 倍長整数 | 4   |
| Is longint    | 倍長整数 | 9   |
| Is null       | 倍長整数 | 255 |
| Is object     | 倍長整数 | 38  |
| Is picture    | 倍長整数 | 3   |
| Is pointer    | 倍長整数 | 23  |
| Is real       | 倍長整数 | 1   |
| Is text       | 倍長整数 | 2   |
| Is time       | 倍長整数 | 11  |
| Is undefined  | 倍長整数 | 5   |
| Is variant    | 倍長整数 | 12  |
| Object array  | 倍長整数 | 39  |

このコマンドはスカラー式の型を返すようにデザインされています。つまり、*expression* 引数に格納されている、あるいはその式から返される値の型です。具体的には、以下の4D式に対して適用可能です:

* オブジェクトプロパティ (*emp.name*)
* コレクション要素 (*myCol\[5\]*)

**注:** 数値型のオブジェクトプロパティは常に実数値としてみなされます:

```4d
 var $o : Object
 $o:=New object("value";42)
 $vType:=Value type($o.value) //$vType=Is real
```

**Value type** コマンドは有効な4D式(フィールド、変数、引数を含む)であれば適用可能です。この場合、[Type](type.md) コマンドとは異なり、**Value type** は*expression* 引数に渡された式の結果の値の*内部的*な型を返し、*宣言された*型を返すわけではありません。4Dランゲージは内部的に値の型を変換することがあるため、**Value type** の結果は宣言された型とは異なることがあります。例えば、4Dは内部的に"*整数64bit*"型のフィールド値を変換します。このため、以下の例のような結果が出ることがあります:

```4d
 $vType1:=Type([myTable]Long64field) //$vType=Is integer 64 bits(64-bit整数型)
 $vType2:=Value type([myTable]Long64field) //$vType=Is real(インタープリタモードでは実数型)
```

他には配列(配列の評価はカレントの要素のインデックスを返します)やコンパイルモードなどが結果の差異に関係します。以下の表はこの差異をまとめたものです:

| **宣言された型**       | [Type](type.md)**結果** | **Value type の結果(インタープリタ版)** | **Value type の結果(コンパイル版)** | **補足**                               |
| ---------------- | --------------------- | ---------------------------- | -------------------------- | ------------------------------------ |
| ARRAY TEXT($t;1) | Text array            | Is real                      | Is longint                 | $t には数値であるカレントの要素インデックスが格納されます       |
| *文字* field       | Is alpha field        | Is text                      | Is text                    | 4Dは内部的には全ての文字列をテキストとして管理します          |
| *整数* field       | Is integer            | Is real                      | Is longint                 | 最適化のため、インタープリタモードは数値は全て実数として管理されます。  |
| *倍長整数* field     | Is longint            | Is real                      | Is longint                 | 同様にコンパイルモードでは全ての整数値は倍超整数とみなされます。(\*) |
| *整数64bit* field  | Is integer 64 bits    | Is real                      | Is longint                 |                                      |

(\*) コンパイルモード、インタープリタモードの両方において有効な数値型の値のテストを書きたい場合には、以下のようなコードの使用を検討してください:

```4d
 If(Value type($myValue)=Is longint)|(Value type($myValue)=Is real)
```

**互換性に関する注意:** 4D v16 R6 以降、日付はオブジェクトプロパティ内では日付型あるいはISO日付フォーマットのテキストとして保存されています。詳細な情報については、[SET DATABASE PARAMETER](set-database-parameter.md) コマンドのDates inside objects セレクターを参照してください。

#### 例題 1 

オブジェクトプロパティの値が取り得る様々な型に対応したい場合を考えます:

```4d
 Case of
    :(Value type($o.value)=Is real)
  //数値を管理
    :(Value type($o.value)=Is text)
  //テキストを管理
    :(Value type($o.value)=Is object)
  //オブジェクト内オブジェクトを管理
       ...
 End case
```

#### 例題 2 

コレクション内の全ての数値の合計を計算したい場合を考えます:

```4d
 var $col : Collection
 var $sum : Real
 $col:=New collection("Hello";20;"World2";15;50;Current date;True;10)
 For($i;0;$col.length-1) //コレクションが0から始まるのでlengthを-1をする
    If(Value type($col[$i])=Is real)
       $sum:=$sum+$col[$i]
    End if
 End for
 ALERT(String($sum)) //95
```

#### 参照 

[OB Get type](ob-get-type.md)  
[Type](type.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1509 |
| スレッドセーフである | &check; |


