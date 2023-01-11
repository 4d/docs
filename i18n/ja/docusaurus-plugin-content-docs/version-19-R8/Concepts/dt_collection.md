---
id: collection
title: Collection
---

コレクションとは、類似または混在した型 (テキスト、数値、日付、オブジェクト、ブール、コレクション、null) の値が順番に並べられたリストです。

コレクション型の変数を扱うには、オブジェクト記法を使用します ([オブジェクト記法の使用](Concepts/dt_object.md#オブジェクト記法の使用) 参照)。

コレクション要素にアクセスするには、大カッコ内に要素番号を渡します:

```4d
collectionRef[expression]
```

*expression* には正の整数を返す有効な 4D式であればどんなものでも渡すことができます。 例:

```4d
 myCollection[5]  // コレクションの6番目の要素にアクセス
 myCollection[$var]
```

**注:** コレクション要素は0 番から始まるということに注意してください。

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

## 初期化

`New collection` コマンドを使うなどして、コレクションはあらかじめ初期化しておく必要があります。初期化しない場合、要素の取得や変更はシンタックスエラーとなります。

例:

```4d
 var $colVar : Collection // コレクション型の 4D変数の宣言
 $colVar:=New collection // コレクションの初期化と 4D変数への代入
```

### 通常コレクションと共有コレクション

二種類のコレクションを作成することができます:

- [`New collection`](API/CollectionClass.md#new-collection) コマンドを使用して作成する通常 (非共有) コレクション。 通常のコレクションは特別なアクセスコントロールをせずに編集可能ですが、プロセス間で共有することはできません。
- [`New shared collection`](API/CollectionClass.md#new-shared-collection) コマンドを使用して作成する共有コレクション。 共有コレクションはプロセス間 (プリエンティブ・スレッド含む) で共有可能なコレクションです。 共有コレクションへのアクセスは [`Use...End use`](Concepts/shared.md#useend-use) 構造によって管理されています。

詳細な情報については、[共有オブジェクトと共有コレクション](Concepts/shared.md) を参照ください。

## コレクション関数

4D コレクションへの参照は、コレクションの *メンバー関数* と呼ばれる特別なクラス関数を利用することができます。 コレクション関数は [クラス API リファレンス](API/CollectionClass.md) にまとめられています。

例:

```4d
$newCol:=$col.copy() // $col を $newCol にディープ・コピー
$col.push(10;100) // 10 と 100 をコレクションに追加
```

一部の関数は元のコレクションを変更して返すので、つぎのように連続して呼び出すことが可能です:

```4d
 $col:=New collection(5;20)
 $col2:=$col.push(10;100).sort() // $col2=[5,10,20,100]
```


### propertyPath 引数


いくつかのコレクション関数は引数として _propertyPath_ を受け入れます。 この引数は以下のように用いることができます:

- オブジェクトプロパティ名、 例えば "lastName"
- オブジェクトプロパティパス (ドット文字で繋げられたサブプロパティの階層シーケンスなど)。例: "employee.children.firstName"

**警告:** 関数に propertyPath 引数を渡す場合、そのプロパティ名には "." (ドット)、"[ ]" (大カッコ)、あるいは " " (スペース) を使えません。これらを使用するとパスを正しく解析できなくなります:

```4d
 $vmin:=$col.min("My.special.property") // undefined
 $vmin:=$col.min(["My.special.property"]) // エラー
```