---
id: collection
title: Collection
---

コレクションとは、類似または混在した型 (テキスト、数値、日付、オブジェクト、ブール、コレクション、null) の値が順番に並べられたリストです。

Collection type variables are managed using [object notation](dt_object.md#properties)).

コレクション要素にアクセスするには、大カッコ内に要素番号を渡します:

```4d
collectionRef[expression]
```

You can pass any valid 4D expression which returns a positive integer in _expression_. 例:

```4d
 myCollection[5]  //access to 6th element of the collection
 myCollection[$var]
```

**Warning:** Collection elements are numbered from 0.

コレクションの要素に値を代入したり、コレクション要素の値を取得したりすることができます:

```4d
 myCol[10]:="My new element"
 $myVar:=myCol[0]
```

コレクションの最後の要素を超える要素番号 (インデックス) を指定した場合、コレクションは自動的にリサイズされ、途中のすべての値には null 値が割り当てられらます:

```4d
 var myCol : Collection
 myCol:=New collection("A";"B")
 myCol[5]:="Z"
  //myCol[2]=null
  //myCol[3]=null
  //myCol[4]=null
```

## インスタンス化

コレクションはあらかじめインスタンス化しておく必要があります。 初期化しない場合、要素の取得や変更はシンタックスエラーとなります。

コレクションのインスタンス化は、以下のいずれかの方法でおこなうことができます:

- using the [`New collection`](../API/CollectionClass.md#new-collection) command,
- using the `[]` operator.

:::info

Several 4D commands and functions return collections, for example [`Get Monitored Activity`](https://doc.4d.com/4dv19R/help/command/en/page1713.html) or [`collection.copy`](../API/CollectionClass.md#copy). この場合、コレクションを明示的にインスタンス化する必要はなく、4Dランゲージが代わりにおこなってくれます。

:::

### `New collection` command

The [`New collection`](../API/CollectionClass.md#new-collection) command creates a new empty or prefilled collection and returns its reference.

例:

```4d
 var $colVar : Collection //declaration of a collection type 4D variable
 $colVar:=New collection //instantiation of the collection and assignment to the 4D variable
 
 var $colFilled : Collection
 $colFilled:=New collection("a";"b";1;42;{}) //instantiation and assignment of a prefilled collection
```

### `[]` operator

The `[]` operator allows you to create a **collection literal**. A collection literal is a list of zero or more expressions, each of which represents a collection element, enclosed in square brackets (`[]`). コレクションリテラルを使ってコレクションを作成すると、指定された値を要素としてインスタンス化され、その長さは指定された要素の数になります。

Since any element is considered an expression, you can create sub-collections using `[]` in elements.  You can also create and reference **object literals**.

要素が未定義の場合、コレクションにおいては Null となります。

例:

```4d
var $col1; $col2; $users : Collection
$col1:=[] //empty collection
$col2:=[1;2;3;4;5;6] //collection of numbers
//collection of objects
$users:=[{name: "Alice"; \
	height: 183; \
	eyecolor: "hazel"; \
	id: $col2[5]\
	}; \
	{name: "Bob"; \
	height: 172; \
	eyecolor: "blue"\
	}]
```

:::note

If you create a collection literal containing a single element, make sure you do not use a name corresponding to an existing table name, otherwise the table syntax `[tableName]` will take priority.

:::

### 通常コレクションと共有コレクション

二種類のコレクションを作成することができます:

- regular (non-shared) collections, using the [`New collection`](API/CollectionClass.md#new-collection) command or collection literal syntax (`[]`). 通常のコレクションは特別なアクセスコントロールをせずに編集可能ですが、プロセス間で共有することはできません。
- shared collections, using the [`New shared collection`](API/CollectionClass.md#new-shared-collection) command. 共有コレクションはプロセス間 (プリエンティブ・スレッド含む) で共有可能なコレクションです。 Access to these collections is controlled by [`Use...End use`](Concepts/shared.md#useend-use) structures.

For more information, refer to the [Shared objects and collections](shared.md) section.

## コレクション関数

4D collection references benefit from special class functions (sometimes named _member functions_). Collection functions are listed in the [Class API Reference](../API/CollectionClass.md) section.

例:

```4d
$newCol:=$col.copy() // $col を $newCol にディープ・コピー
$col.push(10;100) // 10 と 100 をコレクションに追加
```

一部の関数は元のコレクションを変更して返すので、つぎのように連続して呼び出すことが可能です:

```4d
 $col:=New collection(5;20)
 $col2:=$col.push(10;100).sort() //$col2=[5,10,20,100]
```

### propertyPath 引数

Several functions accept a _propertyPath_ as parameter. この引数は以下のように用いることができます:

- オブジェクトプロパティ名、 例えば "lastName"
- オブジェクトプロパティパス (ドット文字で繋げられたサブプロパティの階層シーケンスなど)。例: "employee.children.firstName"

**Warning:** When using functions and _propertyPath_ parameters, you cannot use ".", "[ ]", or spaces in property names since it will prevent 4D from correctly parsing the path:

```4d
 $vmin:=$col.min("My.special.property") //undefined
 $vmin:=$col.min(["My.special.property"]) //error
```

## 未定義

Reading the **length** property of an undefined collection produces 0:

```4d
     var $c : Collection //variable created but no collection is defined
     $size:=$c.length //$size = 0
```
