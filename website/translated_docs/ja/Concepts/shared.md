---
id: shared
title: 共有オブジェクトと共有コレクション
---

## 概要
**Shared objects** and **shared collections** are specific [objects](Concepts/dt_object.md) and [collections](Concepts/dt_collection.md) whose contents are shared between processes. In contrast to [interprocess variables](Concepts/variables.md#interprocess-variables), shared objects and shared collections have the advantage of being compatible with **preemptive 4D processes**: they can be passed by reference as parameters to commands such as `New process` or `CALL WORKER`.

共有オブジェクトと共有コレクションは、標準の `C_OBJECT` と `C_COLLECTION` コマンドで宣言された変数に保存することができますが、専用のコマンドを使用してインスタンス化されている必要があります:

- 共有オブジェクトを作成するには、`New shared object` コマンドを使用します。
- 共有コレクションを作成するには、`New shared collection` コマンドを使用します。

**Note:** Shared objects and collections can be set as properties of standard (not shared) objects or collections.

In order to modify a shared object/collection, the **Use...End use** structure must be called. Reading a shared object/collection value does not require **Use...End use**.

`Storage` コマンドが返す、データベースにおいて固有かつグローバルなカタログは、そのデータベース内あるいはコンポーネントからいつでも利用することができ、すべての共有オブジェクトおよびコレクションを保存するのに使用することができます。

## 共有オブジェクト/共有コレクションの使用
`New shared object` あるいは `New shared collection` コマンドでインスタンス化されると、その共有オブジェクト/コレクションの属性と要素はどのプロセスからでも編集/読み出しができるようになります。

### 編集
共有オブジェクトと共有コレクションは、編集することが可能です:

- オブジェクトプロパティの追加・削除
- 値の追加・編集 (共有オブジェクトがサポートしている範囲内で)。これには、他の共有オブジェクトやコレクションの追加・編集も含まれます (この場合、共有グループを作成します。後述参照)

ただし、共有オブジェクトあるいは共有コレクションを編集するコードは、必ず `Use...End use` 構文に組み込まれている必要があり、そうでない場合にはエラーが返されます。

```4d
 $s_obj:=New shared object("prop1";"alpha")
 Use($s_obj)
    $s_obj.prop1:="omega"
 End Use
```

一度に 1プロセスのみ、共有オブジェクト/コレクションを編集することができます。 `Use` は共有オブジェクト/コレクションを他のスレッドからアクセスできないようにロックする一方、`End use` はこのロックを解除します。 `Use...End use` を使わずに共有オブジェクト/コレクションを編集しようとすると、エラーが生成されます。 すでに他のプロセスによって使用されている共有オブジェクト/コレクションに対して、別のプロセスが `Use...End use` を呼び出した場合、先着プロセスが `End use` でロックを解除するまで、その呼び出しは待機状態になります (エラーは生成されません)。 したがって、`Use...End use` 構文内の処理は迅速に実行され、ロックは可及的速やかに解除される必要があります。 そのため、共有オブジェクト/コレクションをインターフェース(ダイアログボックスなど) から直接編集することは避けることが強く推奨されます。

Assigning shared objects/collections to properties or elements of other shared objects/collections is allowed and creates **shared groups**. 共有グループは、共有オブジェクト/コレクションのプロパティ値あるいは要素として他の共有オブジェクト/コレクションが設定されたときに自動的に作成されます。 共有グループを使用すると共有オブジェクトを入れ子にすることができますが、以下のルールに気をつける必要があります:

- あるグループの共有オブジェクト/コレクションに対して `Use` を使うと、そのグループに所属するすべての共有オブジェクト/コレクションのプロパティ/要素がロックされます。
- 共有オブジェクト/コレクションは一つの共有グループにしか所属することができません。 すでにグループに所属している共有オブジェクト/コレクションを他のグループへと割り当てようとした場合、エラーが返されます。
- 一旦グループ化された共有オブジェクト/コレクションについて、グループを解除することはできません。 一度共有グループに含まれた共有オブジェクト/コレクションは、セッション中はずっと同グループに所属することになります。 親オブジェクト/コレクションから子オブジェクト/コレクションへの参照をすべて削除したとしても、両者のリンクが解除されるわけではありません。

共有グループのルールについての詳細は、例題2を参照してください。

**Note:** Shared groups are managed through an internal property named *locking identifier*. この値についての詳細は、[ランゲージリファレンス](https://doc.4d.com/4Dv18/4D/18/Shared-objects-and-shared-collections.300-4505654.ja.html#3648963) を参照ください。

### 読み出し
たとえ共有オブジェクト/コレクションが他のプロセスによって使用中であっても、それらのプロパティや要素は、`Use...End use` 構文を呼び出さずとも取得することが可能です。

ただし、複数の値が互いにリンクしていてそれらを一度に読み出す必要がある場合には、一貫性の観点から、共有オブジェクト/コレクションを `Use...End use` 内で扱う必要があります。

### 複製
共有オブジェクト (あるいは共有オブジェクトをプロパティとして格納しているオブジェクト) に対して `OB Copy` コマンドを使用することは可能ですが、含まれている子オブジェクト含め、標準 (非共有) のオブジェクトが戻り値として返されます。

### ストレージ
**Storage** is a unique shared object, automatically available on each application and machine. この共有オブジェクトは `Storage` コマンドから返されます。 このオブジェクトは、他のプリエンティブあるいは標準プロセスからでも利用出来るように、セッション中に定義されたすべての共有オブジェクト/コレクションを参照するためのものです。

`ストレージ` オブジェクトは標準の共有オブジェクトとは異なり、共有オブジェクト/コレクションがプロパティとして追加されたときでも共有グループを作成しないという点に注意してください。 This exception allows the **Storage** object to be used without locking all connected shared objects or collections.

詳細な情報については、`Storage` コマンドの詳細を参照してください。

## Use...End use
`Use...End use` 構文の正式なシンタックスは、以下の通りです:

```4d
 Use(Shared_object_or_Shared_collection)
    statement(s) // ステートメント
 End use
```

The `Use...End use` structure defines a sequence of statements that will execute tasks on the *Shared_object_or_Shared_collection* parameter under the protection of an internal semaphore. *Shared_object_or_Shared_collection* can be any valid shared object or shared collection.

Shared objects and shared collections are designed to allow communication between processes, in particular, **preemptive 4D processes**. これらはプロセスから他のプロセスへ、参照型の引数として渡すことができます。 For detailed information on shared objects or shared collections, refer to the **Shared objects and shared collections** page. 共有オブジェクトおよび共有コレクションを扱う際には、複数プロセスによる同時アクセスを避けるために、必ずそれらを `Use...End use` キーワードでくくる必要があります。

- Once the **Use** line is successfully executed, all _Shared_object_or_Shared_collection_ properties/elements are locked for all other process in write access until the corresponding `End use` line is executed.
- The _statement(s)_ sequence can execute any modification on the Shared_object_or_Shared_collection properties/elements without risk of concurrent access.
- If another shared object or collection is added as a property of the _Shared_object_or_Shared_collection_ parameter, they become connected within the same shared group (see **Using shared objects or collections**).
- If another process tries to access one of the _Shared_object_or_Shared_collection_ properties or connected properties while a **Use...End use** sequence is being executed, it is automatically put on hold and waits until the current sequence is terminated.
- The **End use** line unlocks the _Shared_object_or_Shared_collection_ properties and all objects sharing the same locking identifier.
- Several **Use...End use** structures can be nested in the 4D code. この場合、すべてのロックはスタックされ、プロパティ/要素は最後の **End use** が実行されたときに解除されます。

**Note:** If a collection method modifies a shared collection, an internal **Use** is automatically called for this shared collection while the function is executed.


## 例題 1

それぞれ異なる製品の在庫更新を実行する複数のプロセスを起動し、同じ共有オブジェクトを更新していきます。 まずメインプロセスで空の共有オブジェクトをインスタンス化してから、共有オブジェクトへの参照と対象製品を引数として渡して別プロセス起動します:

```4d
 ARRAY TEXT($_items;0)
 ... //fill the array with items to count
 $nbItems:=Size of array($_items)
 C_OBJECT($inventory)
 $inventory:=New shared object
 Use($inventory)
    $inventory.nbItems:=$nbItems
 End use

  //Create processes
 For($i;1;$nbItems)
    $ps:=New process("HowMany";0;"HowMany_"+$_items{$i};$_items{$i};$inventory)
  //$inventory object sent by reference
 End for
```

"HowMany" メソッド内では、在庫確認が終わるとすぐに $inventory 共有オブジェクトが更新されます:

```4d
 C_TEXT($1)
 C_TEXT($what)
 C_OBJECT($2)
 C_OBJECT($inventory)
 $what:=$1 // 可読性のため
 $inventory:=$2

 $count:=CountMethod($what) // 在庫確認用のメソッド
 Use($inventory) // 共有オブジェクトを使用します
    $inventory[$what]:=$count  // 当該製品の在庫を保存します
 End use
```

## 例題 2

以下の例題は、共有グループを扱う際のルールについて説明しています:

```4d
 $ob1:=New shared object
 $ob2:=New shared object
 Use($ob1)
    $ob1.a:=$ob2  // グループ1 が作成されます
 End use

 $ob3:=New shared object
 $ob4:=New shared object
 Use($ob3)
    $ob3.a:=$ob4  // グループ2 が作成されます
 End use

 Use($ob1) // グループ1のオブジェクトを使用します
    $ob1.b:=$ob4  // これはエラーになります
  // $ob4 はすでに他のグループに所属しているため
  // 代入することはできません
 End use

 Use($ob3)
    $ob3.a:=Null // グループ2から$ob4 への参照をすべて解除します

 End use

 Use($ob1) // グループ1のオブジェクトを使用します
    $ob1.b:=$ob4  // これもエラーになります
  // $ob4 は依然としてグループ2に所属しているため
  // 代入は不可能です
 End use
```
