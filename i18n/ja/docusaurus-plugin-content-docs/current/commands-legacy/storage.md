---
id: storage
title: Storage
slug: /commands/storage
displayed_sidebar: docs
---

<!--REF #_command_.Storage.Syntax-->**Storage**  : Object<!-- END REF-->
<!--REF #_command_.Storage.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Object | &#8592; | 登録された共有オブジェクトおよび共有コレクションのカタログ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Storage.Summary-->**Storage** メソッドはカレントのマシンあるいはコンポーネント上において、*Storage* オブジェクトに登録した共有オブジェクトまたは共有コレクションの一覧を返します。<!-- END REF-->から返されたカタログは、4Dによって自動的に作成され、プリエンプティブプロセスを含めてデータベースの全てのプロセスが利用可能です。マシンとコンポーネント一つにつき**Storage** カタログは一つしかありません。C/S アプリケーションにおいては、サーバーに**Storage** 共有オブジェクトを一つ、リモート4D アプリケーションに**Storage** 共有オブジェクトを一つ持つことが可能です。データベースがコンポーネントを使用する場合、一つのコンポーネントに対し**Storage** オブジェクトは一つです。

**Storage** から返されたカタログを使用すると、あらゆるプリエンプティブプロセスあるいは標準プロセスで使用可能な共有オブジェクトあるいは共有コレクションを、すべて参照することができます。共有オブジェクトあるいは共有コレクションをカタログに登録するためには、その参照を**Storage** から返された共有オブジェクトに追加します。

**Storage** から返されたカタログは*共有オブジェクト*であるため、*共有オブジェクトと共有コレクション* の章で説明されているルールに従いますが、以下の点に注意する必要があります:

* このオブジェクトは共有オブジェクトあるいは共有コレクションのみ格納することができます。他の値(非共有オブジェクトあるいはコレクション、null値、スカラー値)を追加しようとした場合、エラーが生成されます。
* このオブジェクトにプロパティを追加する際には、それは*Use...End use* 構造でくくられている必要があり、そうでない場合にはエラーが返されます。ただし、属性の読み出しは*Use...End use* 構造の外側でも可能です。
* *Use...End use* 構造でくくられているとき、**Storage** の第1階層は他のプロセスからはロックされます。
* 標準の共有オブジェクトとは異なり、**Storage** から返されたオブジェクトは、属性として追加された共有オブジェクトあるいはコレクションとは*ロック識別子*を**共有しません**(この点についての詳細な説明については、*ロック識別子* の章を参照して下さい)。

#### 例題 1 

典型的な例としては、**Storage** オブジェクトをの中で初期化する場合が考えられます:

```4d
 Use(Storage)
    Storage.counters:=New shared object("customers";0;"invoices";0)
 End use
```

#### 例題 2 

この例では**Storage** 値を設定する標準的な方法を紹介しています: 

```4d
 Use(Storage)
    Storage.mydata:=New shared object
    Use(Storage.mydata)
       Storage.mydata.prop1:="Smith"
       Storage.mydata.prop2:=100
    End use
 End use
```

#### 例題 3 

**Storage** では以下の例で紹介するように、*レイジー初期化*を使用することでsingleton を実装することができます。

**注:** Singleton パターンについてのより詳細な情報については、[Wikipediaの記事](https://ja.wikipedia.org/wiki/Singleton%5F%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3)を参照してください。

```4d
 var $0 : Integer
 var $counterValue : Integer
 var counter : Object //プロセスのcounter への参照を作成
 
 If(counter=Null) //参照がNullであれば、Storageから参照を取得
    Use(Storage) //Storage のUse は一度限りで十分!
       If(Storage.counter=Null)
          Storage.counter:=New shared object("operation";0)
       End if
       counter:=Storage.counter //counter共有オブジェクトの参照を取得
    End use
 End if
 Use(counter) //共有オブジェクトcounter を直接使用(Storage を使用する必要はなし!)
    counter.operation:=counter.operation+1
    $counterValue:=counter.operation
 End use
 
 $0:=$counterValue
```

#### 参照 

*共有オブジェクトと共有コレクション*  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1525 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


