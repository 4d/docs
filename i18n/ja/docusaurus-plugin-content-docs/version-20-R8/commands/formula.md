---
id: formula
title: Formula
slug: /commands/formula
displayed_sidebar: docs
---

<details><summary>履歴</summary>

| リリース  | 内容                                               |
| ----- | ------------------------------------------------ |
| 17 R6 | 名称変更 (New formula -> Formula) |
| 17 R3 | 追加                                               |

</details>

<!-- REF #_command_.Formula.Syntax -->**Formula** ( *formulaExp* : Expression ) : 4D.Function<!-- END REF -->

<!-- REF #_command_.Formula.Params -->

| 引数         | 型                           |     | 説明                                  |
| ---------- | --------------------------- | :-: | ----------------------------------- |
| formulaExp | 式                           |  →  | オブジェクトとして返されるフォーミュラ                 |
| 戻り値        | 4D.Function |  ←  | フォーミュラを格納しているネイティブな Function オブジェクト |

<!-- END REF -->

#### 説明

`Formula` コマンドは、<!-- REF #_command_.Formula.Summary -->*formulaExp* の式に基づいた `4D Function` オブジェクトを作成します<!-- END REF -->。 *formulaExp* には単一の値のようにシンプルなものから、引数を持つプロジェクトメソッドのように複雑なものまで指定することができます。

フォーミュラがオブジェクトとして存在することで、コマンドやメソッドに対して引数 (計算された属性) として渡したり、"コンポーネントとホストデータベース間で共有" として宣言せずとも様々なコンポーネントから実行したりできるようになります。 呼び出されたフォーミュラオブジェクトは、それを作成したデータベースあるいはコンポーネントのコンテキストにおいて評価されます。

返されたフォーミュラは以下の方法で呼び出すことが可能です:

- [`.call()`](#call) あるいは [`.apply()`](#apply) 関数
- オブジェクト記法シンタックス ([Formula オブジェクト](#formula-オブジェクト) 参照)

```4d
 var $f : 4D.Function
 $f:=Formula(1+2)
 $o:=New object("myFormula";$f)

  // フォーミュラを呼び出す 3つの方法
 $f.call($o) // 3 を返します
 $f.apply($o) // 3 を返します
 $o.myFormula() // 3 を返します
```

フォーミュラには [引数](#引数の受け渡し) を渡すことができます ([例題4](#例題-4) 参照)。

フォーミュラの実行対象となるオブジェクトを指定することができます ([例題5](#例題-5) 参照)。 このオブジェクトのプロパティは、`This` コマンドでアクセス可能です。

*formulaExp* がローカル変数を使用する場合、返されるフォーミュラオブジェクトの作成時にその値がそこにコピーされ保存されます。 実行時、フォーミュラはそのローカル変数の現在値ではなく、コピーされた値を使用します。 ローカル変数として配列を使用することはサポートされていない点に注意してください。

`Formula` によって作成されたオブジェクトは、たとえばデータベースのフィールドや Blob ドキュメントなどに保存可能です。

#### 例題 1

単純なフォーミュラの例:

```4d
 var $f : 4D.Function
 $f:=Formula(1+2)

 var $o : Object
 $o:=New object("f";$f)

 $result:=$o.f() // 3 を返します
```

#### 例題 2

ローカル変数を使用するフォーミュラの例:

```4d


 $value:=10
 $o:=New object("f";Formula($value))
 $value:=20

 $result:=$o.f() // 10 を返します
```

#### 例題 3

引数を用いたシンプルなフォーミュラの例:

```4d
 $o:=New object("f";Formula($1+$2))
 $result:=$o.f(10;20) // 30 を返します
```

#### 例題 4

引数を用いたプロジェクトメソッドを使用する例:

```4d
 $o:=New object("f";Formula(myMethod))
 $result:=$o.f("param1";"param2") // $result:=myMethod("param1";"param2") と同等です
```

#### 例題 5

`This` を使用する例:

```4d
 $o:=New object("fullName";Formula(This.firstName+" "+This.lastName))
 $o.firstName:="John"
 $o.lastName:="Smith"
 $result:=$o.fullName() // "John Smith" を返します
```

#### 例題 6

オブジェクト記法を使用してフォーミュラを呼び出す例:

```4d
 var $feta; $robot : Object
 var $calc : 4D.Function
 $robot:=New object("name";"Robot";"price";543;"quantity";2)
 $feta:=New object("name";"Feta";"price";12.5;"quantity";5)

 $calc:=Formula(This.total:=This.price*This.quantity)

  // フォーミュラをオブジェクトプロパティに設定します
 $feta.calc:=$calc
 $robot.calc:=$calc

  // フォーミュラを呼び出します
 $feta.calc() // $feta={name:Feta,price:12.5,quantity:5,total:62.5,calc:"[object Formula]"}
 $robot.calc() // $robot={name:Robot,price:543,quantity:2,total:1086,calc:"[object Formula]"}
```

#### 参照

[4D Blog - フォーミュラ: シンプルさの裏にある、さらなるパワー](https://blog.4d.com/ja/new-formula-more-power-behind-simplicity/)\
[4D Blog - フォーミュラ: 既成概念にとらわれない発想](https://blog.4d.com/ja/new-formula-think-outside-the-box/)\
[4D Blog - 独自のメソッドをオブジェクトにカプセル化する](https://blog.4d.com/ja/write-your-own-methods-for-objects/)\
[Formula from string](formula-from-string.md)

#### プロパティ

|         |                                                                 |
| ------- | --------------------------------------------------------------- |
| コマンド番号  | 1597                                                            |
| スレッドセーフ | &amp;amp;amp;amp;amp;amp;amp;amp;amp;check; |
