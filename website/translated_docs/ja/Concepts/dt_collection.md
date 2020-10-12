---
id: コレクション
title: コレクション
---

Collections are ordered lists of values of similar or mixed types (text, number, date, object, boolean, collection, or null).

Collection type variables are managed using object notation (see [Syntax basics](Concepts/dt_object.md#syntax-basics)).

コレクション要素にアクセスするには、大カッコ内に要素番号を渡します:

```4d
collectionRef[expression]
```

You can pass any valid 4D expression which returns a positive integer in *expression*. 例:

```4d
 myCollection[5]  // コレクションの6番目の要素にアクセス
 myCollection[$var]
```

**注:** コレクション要素は0 番から始まるということに注意してください。

You can assign a value to a collection element or get a collection element value:

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

## 初期化

`New collection` コマンドを使うなどして、コレクションはあらかじめ初期化しておく必要があります。初期化しない場合、要素の取得や変更はシンタックスエラーとなります。

例:

```4d
 var $colVar : Collection //creation of collection type 4D variable
 $colVar:=New collection //initialization of the collection and assignment to the 4D variable
```

### 通常コレクションと共有コレクション

二種類のコレクションを作成することができます:

- regular (non-shared) collections, using the [`New collection`](API/collectionClass.md#new-collection) command. 通常のコレクションは特別なアクセスコントロールをせずに編集可能ですが、プロセス間で共有することはできません。
- shared collections, using the [`New shared collection`](API/collectionClass.md#new-shared-collection) command. 共有コレクションはプロセス間 (プリエンティブ・スレッド含む) で共有可能なコレクションです。 Access to these collections is controlled by [`Use...End use`](Concepts/shared.md#useend-use) structures.

詳細な情報については、[共有オブジェクトと共有コレクション](Concepts/shared.md) を参照ください。

## Collection functions

4D collection references benefit from special class functions (sometimes named *member functions*). Collection functions are listed in the [Class API Reference](API/collectionClass.md) section.

たとえば:

```4d
$newCol:=$col.copy() // $col を $newCol にディープ・コピー
$col.push(10;100) // 10 と 100 をコレクションに追加
```

Some functions return the original collection after modification, so that you can run the calls in a sequence:

```4d
 $col:=New collection(5;20)
 $col2:=$col.push(10;100).sort() // $col2=[5,10,20,100]
```


### propertyPath 引数


Several functions accept a _propertyPath_ as parameter. この引数は以下のように用いることができます:

- オブジェクトプロパティ名、 例えば "lastName"
- オブジェクトプロパティパス (ドット文字で繋げられたサブプロパティの階層シーケンスなど)。例: "employee.children.firstName"

**Warning:** When using functions and propertyPath parameters, you cannot use ".", "[ ]", or spaces in property names since it will prevent 4D from correctly parsing the path:

```4d
 $vmin:=$col.min("My.special.property") // undefined
 $vmin:=$col.min(["My.special.property"]) // エラー
```