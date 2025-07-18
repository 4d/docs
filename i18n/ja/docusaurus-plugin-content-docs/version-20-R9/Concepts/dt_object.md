---
id: object
title: Object
---

オブジェクト型の変数・フィールド・式にはさまざまなデータを格納することができます。 4D のネイティブなオブジェクトの構造は、よくある "プロパティ/値" (または "属性/値") というペア (連想配列) に基づいています。 これらオブジェクトの記法は JSON をもとにしていますが、完全に同じというわけではありません。

- プロパティ名は必ずテキストで表現されます。 プロパティ名には [命名規則](identifiers.md#オブジェクトプロパティ) があります。

- プロパティ値は以下のどれかの型で表現されます:
  - 数値 (実数、整数、等)
  - text
  - null
  - boolean
  - ポインター (`JSON Stringify` コマンドの使用、またはコピーの際に評価されます)
  - 日付 (日付型あるいは ISO日付フォーマット文字列)
  - オブジェクト(1) (オブジェクトは入れ子にすることができます)
  - ピクチャー(2)
  - collection

(1) **非ストリームオブジェクト** である [エンティティ](ORDA/dsMapping.md#エンティティ) や [エンティティセレクション](ORDA/dsMapping.md#エンティティセレクション) などの ORDAオブジェクト、[FileHandle](../API/FileHandleClass.md)、[Webサーバー](../API/WebServerClass.md)... は **オブジェクトフィールド** には保存できません。 保存しようとするとエラーが返されます。しかし、メモリ内の **オブジェクト変数** に保存することは可能です。

(2) デバッガー内でテキストとして表示したり、JSON へと書き出されたりした場合、ピクチャー型のオブジェクトプロパティは "[object Picture]" と表されます。

:::caution

プロパティ名は大文字と小文字を区別するという点に注意してください。

:::

オブジェクト型の変数・フィールド・式を操作するには [オブジェクト記法](#プロパティ) を用いるか、**オブジェクト (ランゲージ)** テーマが提供するコマンドを使用します。 オブジェクト型フィールドに対して処理をおこなうには `QUERY BY ATTRIBUTE`、`QUERY SELECTION BY ATTRIBUTE` や `ORDER BY ATTRIBUTE` など、**クエリ** テーマの特定のコマンドも使用することができます。

オブジェクト記法を使ってアクセスされたそれぞれのプロパティ値は式とみなされます。 4D内で式が期待される場所であれば、どこでもこのような値を使用することができます:

- メソッド (コードエディター) に書いても、外部化(フォーミュラ、`PROCESS 4D TAGS` あるいは Web Server によって処理される 4D tags ファイル、4D Write Proドキュメントなど) しても使用可能です。
- デバッガー及びランタイムエクスプローラーの式エリア内。
- フォームエディターにおいて、フォームオブジェクトのプロパティリスト内。 変数あるいは式フィールド内の他、様々なセレクションリストボックス及びカラムの式 (データソース、背景色、スタイル、フォントカラー等) において使用可能です。

## インスタンス化

オブジェクトはあらかじめインスタンス化しておく必要があります。 初期化しない場合、プロパティ値の取得や変更はシンタックスエラーとなります。

オブジェクトのインスタンス化は、以下のいずれかの方法でおこなうことができます:

- [`New object`](../commands-legacy/new-object.md) コマンドを使用する。
- `{}` 演算子を使用する。

:::info

いくつかの 4Dコマンドや関数はオブジェクトを返します。たとえば、[`Database measures`](../commands-legacy/database-measures.md) や [`File`](../commands/file.md) などです。 この場合、オブジェクトを明示的にインスタンス化する必要はなく、4Dランゲージが代わりにおこなってくれます。

:::

### `New object` コマンド

[`New object`](../commands-legacy/new-object.md) コマンドは、空の、あるいは値の入った新規コレクションを作成し、その参照を返します。

例:

```4d
 var $obVar : Object // オブジェクト型 4D変数の宣言
 $obVar:=New object // オブジェクトのインスタンス化と 4D変数への代入

 var $obFilled : Object 
 $obFilled:=New object("name"; "Smith"; "age";42) // プロパティが格納されたオブジェクトのインスタンス化と変数への代入
```

### `{}` 演算子

`{}` 演算子を使って、**オブジェクトリテラル** を作成することができます。 オブジェクトリテラルとは、オブジェクトのプロパティ名とその値のペアが 0組以上含まれたセミコロン区切りのリストを中括弧 `{}` で囲んだものです。 オブジェクトリテラルのシンタックスは、空の、またはプロパティが格納されたオブジェクトを作成します。

プロパティの値は式とみなされるため、プロパティ値に `{}` を使ってサブオブジェクトを作成することができます。  また、**コレクションリテラル** を作成し、参照することもできます。

例:

```4d
 var $o ; $o2 ; $o3 : Object // オブジェクト変数の宣言
 $o := {} // 空のオブジェクトのインスタンス化
 $o2 := {a: "foo"; b: 42; c: {}; d: ($toto) ? true : false } // プロパティを格納したオブジェクトのインスタンス化
 		// オブジェクト: {"a":"foo","b":42,"c":{},"d":false}

	// 変数を使っても同様にオブジェクトをインスタンス化できます
 var $a : Text
 var $b : Number
 var $c : Object
 $a:="foo"
 $b:=42
 $c:={}
 $o3:={ a: $a; b: $b; c: $c } // {"a":"foo";b":42;"c":{}}

```

`New object` とリテラルを使ったシンタックスは混在させることができます:

```4d
$o:={\
	ob1: {age: 42}; \
	ob2: New object("message"; "Hello"); \
	form1: Formula(return This.ob1.age+10); \
	form2 : Formula(ALERT($1)); \
	col: [1; 2; 3; 4; 5; 6]\
	}

$o.form1()  // 52
$o.form2($o.ob2.message)  // Hello と表示します
$col:=$o.col[5] // 6
```

### 通常オブジェクトと共有オブジェクト

二種類のオブジェクトを作成することができます:

- [`New object`](../commands-legacy/new-object.md) コマンド、またはオブジェクトリテラルのシンタックス (`{}`) を使用して作成する通常 (非共有) コレクション。 通常のオブジェクトは特別なアクセスコントロールをせずに編集可能ですが、プロセス間で共有することはできません。
- [`New shared object`](../commands-legacy/new-shared-object.md) コマンドを使用して作成する共有コレクション。 共有オブジェクトはプロセス間 (プリエンティブ・スレッド含む) で共有可能なオブジェクトです。 共有オブジェクトへのアクセスは `Use...End use` 構造によって管理されています。
  詳細な情報については、[共有オブジェクトと共有コレクション](shared.md) を参照ください。

## プロパティ

オブジェクトのプロパティ値には、トークンのチェーンを通してアクセスします。 オブジェクトプロパティは二通りの方法でアクセスすることができます:

- "ドット"記号を使用する方法:
  > object.propertyName

例:

```4d
     employee.name:="Smith"
```

- 大カッコ内の文字列を使用する方法:
  > object["propertyName"]

例:

```4d
     $vName:=employee["name"]
     // または:
     $property:="name"
     $vName:=employee[$property]

```

オブジェクトプロパティ値には、オブジェクトやコレクションも設定することが可能です。 これらのサブプロパティにアクセスするため、連続した字句を使うことができます:

```4d
 $vAge:=employee.children[2].age
```

オブジェクトを格納、あるいは返すあらゆるランゲージ要素に対してオブジェクト記法を使用できます。たとえば:

- **オブジェクト** 自身 (変数、フィールド、オブジェクトプロパティ、オブジェクト配列、コレクション要素などに保存されているもの)。
  例:

```4d
     $age:=$myObjVar.employee.age // 変数
     $addr:=[Emp]data_obj.address // フィールド
     $city:=$addr.city // オブジェクトプロパティ
     $pop:=$aObjCountries{2}.population // オブジェクト配列
     $val:=$myCollection[3].subvalue // コレクション要素
```

- オブジェクトを返す **4D コマンド**。
  例:
  例:
  例:

```4d
     $measures:=Database measures.DB.tables
```

- オブジェクトを返す **プロジェクトメソッド** または **関数**。
  例:

```4d
      // MyMethod1
     #DECLARE -> $o : Object
     $o:=New object("a";10;"b";20)
     
      //myMethod2
     $result:=MyMethod1.a //10
```

- **コレクション**。
  例:

```4d
     myColl.length // コレクションの長さ
```

### Null 値

オブジェクトを使用するにあたって、**null** 値は **Null** コマンドを通してサポートされています。 このコマンドを使用すると、null 値をオブジェクトプロパティに割り当てたり、それらと比較したりすることができます。 例: このコマンドを使用すると、null 値をオブジェクトプロパティに割り当てたり、それらと比較したりすることができます。 例:

```4d
 myObject.address.zip:=Null
 If(myColl[2]=Null)
```

詳細については [Null と 未定義](dt_null_undefined.md) を参照ください。

### 未定義の値

オブジェクトプロパティを評価した結果、未定義の値が生成されることがあります。 未定義の値を既存のオブジェクトプロパティに代入した場合、その値は初期化、あるいは消去されます。  未定義の値を存在しないオブジェクトのプロパティへと代入した場合は、何も起こりません。

詳細については [Null と 未定義](dt_null_undefined.md) を参照ください。

### ポインター

**注**: オブジェクトは常に参照として渡されるため、通常はポインターを使用する必要はありません。 オブジェクトを引数として渡す際、4D 内部では自動的にポインターに類似したメカニズムを使うことでメモリの消費を最小限に抑え、引数を編集して返すことを可能にします。 つまり、ポインターは必要ないということです。 それでもポインターを使用したい場合には、プロパティ値はポインターを通してアクセスすることができます。

ポインターを使ってオブジェクトプロパティにアクセスするには、直接オブジェクトを使用する場合と方法が似ていますが、"ドット" 記号は省略する必要があります。

- オブジェクト記法によるアクセス:

> pointerOnObject->propertyName

- 大カッコを使用する方法:

> pointerOnObject->["propertyName"]

例:

```4d
 var vObj : Object
 var vPtr : Pointer
 vObj:=New object
 vObj.a:=10
 vPtr:=->vObj
 x:=vPtr->a //x=10
```

## オブジェクト演算子

**オブジェクト参照** に対して比較演算子を使用することができます。つまり、2つ以上の参照が同じオブジェクトのインスタンスを指しているかどうかを評価することができます。

```4d
var $o1:={a: 42} // とあるインスタンスへの参照
var $o2:={a: 42} // 異なるインスタンスへの参照
var $o3:=$o1 // 同じインスタンスへの参照
```

上のコードに基づいて、比較表は次のようになります:

| 演算  | シンタックス                | 戻り値     | 式         | 値     |
| --- | --------------------- | ------- | --------- | ----- |
| 等しい | objectRef = objectRef | Boolean | $o1 = $o3 | true  |
|     |                       |         | $o1 = $o2 | false |
| 異なる | objectRef # objectRef | Boolean | $o1 # $o3 | false |
|     |                       |         | $o1 # $o2 | true  |

## Resources

オブジェクトは、ドキュメント、エンティティロック、そしてメモリなどの *リソース* を使用します。 オブジェクトが必要とする限り、これらのリソースは保持されます。 変数や他のオブジェクトから参照されなくなったことを検知すると、4D はその参照されなくなったオブジェクトが使用していたリソースをすべて自動的に解放するため、通常はこの処理を意識することはありません。

たとえば、[`$entity.lock()`](../API/EntityClass.md#lock) でロックしたエンティティへの参照がなくなると、4D はメモリを解放すると同時に、関連するロックも自動で解放するため、[`$entity.unlock()`](../API/EntityClass.md#unlock) の呼び出しは不要です。

オブジェクトが占有しているすべてのリソースについて、4D による自動解放 (メソッド実行終了時のローカル変数など) を待たずに、すぐに解放したい場合、オブジェクトの **参照をすべて無効化** することができます。 例: 例: 例:

```4d

$doc:=WP Import document("large_novel.4wp")
    ... // $doc に対する処理
$doc:=Null  //  $docが占有するリソースを解放します
    ... // 増えた空きメモリで実行を継続します

```

## 例題

オブジェクト記法を使用すると、オブジェクトを扱う際の 4Dコードを単純化することができます。 同時に、コマンドベースの記法も引き続き完全にサポートされています。

- オブジェクトの読み書き (この例題ではオブジェクト記法とコマンド記法を比較します):

```4d
  // オブジェクト記法を使用
 var $myObj : Object // 4Dオブジェクト変数を宣言
 $myObj:={} // オブジェクトリテラルを作成し、変数に代入
 $myObj.age:=56
 $age:=$myObj.age // 56

  // コマンド記法を使用
 var $myObj2 : Object // 4Dオブジェクト変数を宣言
 OB SET($myObj2;"age";42) // オブジェクトを作成し、ageプロパティを追加
 $age:=OB Get($myObj2;"age") // 42

  // もちろん両方の記法を混用することもできます
 var $myObj3 : Object
 OB SET($myObj3;"age";10)
 $age:=$myObj3.age // 10
```

- プロパティの作成と、オブジェクトを含む値の代入:

```4d
 var $Emp : Object
 $Emp:=New object
 $Emp.city:="London" /// cityプロパティを作成し、その値を"London"に設定します
 $Emp.city:="Paris" // cityプロパティを変更します
 $Emp.phone:=New object("office";"123456789";"home";"0011223344")
  // phoneプロパティを作成し、その値にオブジェクトを設定します
```

- オブジェクト記法を使用すると、サブオブジェクトの値を簡単に取得できます:

```4d
 $vCity:=$Emp.city // "Paris"
 $vPhone:=$Emp.phone.home // "0011223344"
```

- 大カッコ `[ ]` を使用すると文字列を使ってプロパティにアクセスできます:

```4d
 $Emp["city"]:="Berlin" // city プロパティを変更
  // これは変数を通してプロパティを作成する場合に便利です
 var $addr : Text
 $addr:="address"
 For($i;1;4)
    $Emp[$addr+String($i)]:=""
 End for
  /// $Emp object には 4つの空のプロパティ "address1...address4" が作成されました
```
