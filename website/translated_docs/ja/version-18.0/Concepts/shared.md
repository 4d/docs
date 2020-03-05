---
id: version-18.0-shared
title: 共有オブジェクトと共有コレクション
original_id: shared
---

## 概要

**共有オブジェクト** および **共有コレクション** はプロセス間でコンテンツを共有することができる、特殊な [オブジェクト](Concepts/dt_object.md) と [コレクション](Concepts/dt_collection.md) です。 [インタープロセス変数](Concepts/variables.md#interprocess-variables) に比べると、共有オブジェクトと共有コレクションは **プリエンプティブ4Dプロセス** と互換性があるという点で利点があります。つまり、`New process` や `CALL WORKER` といったコマンドの引数として、参照の形で渡すことができるということです。

共有オブジェクトと共有コレクションは、標準の `C_OBJECT` と `C_COLLECTION` コマンドで宣言された変数に保存することができますが、専用のコマンドを使用してインスタンス化されている必要があります:

- 共有オブジェクトを作成するには、`New shared object` コマンドを使用します。
- 共有コレクションを作成するには、`New shared collection` コマンドを使用します。

**注:** 共有オブジェクトと共有コレクションは標準の (非共有の) オブジェクトおよびコレクションのプロパティとして設定することができます。

共有オブジェクト/コレクションを編集するには、**Use...End use** 構文を使う必要があります。 共有オブジェクト/コレクションの値を読むにあたっては、**Use...End use** は必要ありません。

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

共有オブジェクト/コレクションを他の共有オブジェクト/コレクションのプロパティあるいは要素に割り当てることは可能で、このとき **共有グループ** が作成されます。 共有グループは、共有オブジェクト/コレクションのプロパティ値あるいは要素として他の共有オブジェクト/コレクションが設定されたときに自動的に作成されます。 共有グループを使用すると共有オブジェクトを入れ子にすることができますが、以下のルールに気をつける必要があります:

- あるグループの共有オブジェクト/コレクションに対して `Use` を使うと、そのグループに所属するすべての共有オブジェクト/コレクションのプロパティ/要素がロックされます。
- 共有オブジェクト/コレクションは一つの共有グループにしか所属することができません。 すでにグループに所属している共有オブジェクト/コレクションを他のグループへと割り当てようとした場合、エラーが返されます。
- 一旦グループ化された共有オブジェクト/コレクションについて、グループを解除することはできません。 一度共有グループに含まれた共有オブジェクト/コレクションは、セッション中はずっと同グループに所属することになります。 親オブジェクト/コレクションから子オブジェクト/コレクションへの参照をすべて削除したとしても、両者のリンクが解除されるわけではありません。 

共有グループのルールについての詳細は、例題2を参照してください。

**注:** 共有グループは、*ロック識別子* と呼ばれる内部プロパティによって管理されています。 For detailed information on this value, please refer to the 4D Developer's guide.

### Read

Reading properties or elements of a shared object/collection is allowed without having to call the `Use...End use` structure, even if the shared object/collection is in use by another process.

However, it is necessary to read a shared object/collection within `Use...End use` when several values are linked together and must be read at once, for consistency reasons.

### Duplication

Calling `OB Copy` with a shared object (or with an object containing shared object(s) as properties) is possible, but will return a standard (not shared) object including its contained objects (if any).

### Storage

**Storage** is a unique shared object, automatically available on each application and machine. This shared object is returned by the `Storage` command. You can use this object to reference all shared objects/collections defined during the session that you want to be available from any preemptive or standard processes.

Note that, unlike standard shared objects, the `storage` object does not create a shared group when shared objects/collections are added as its properties. This exception allows the **Storage** object to be used without locking all connected shared objects or collections.

For more information, refer to the `Storage` command description.

## Use...End use

The formal syntax of the `Use...End use` structure is:

```4d
 Use(Shared_object_or_Shared_collection)
    statement(s)
 End use
```

The `Use...End use` structure defines a sequence of statements that will execute tasks on the *Shared_object_or_Shared_collection* parameter under the protection of an internal semaphore. *Shared_object_or_Shared_collection* can be any valid shared object or shared collection.

Shared objects and shared collections are designed to allow communication between processes, in particular, **preemptive 4D processes**. They can be passed by reference as parameters from a process to another one. For detailed information on shared objects or shared collections, refer to the **Shared objects and shared collections** page. Surrounding modifications on shared objects or shared collections by the `Use...End use` keywords is mandatory to prevent concurrent access between processes.

- Once the **Use** line is successfully executed, all *Shared_object_or_Shared_collection* properties/elements are locked for all other process in write access until the corresponding `End use` line is executed.
- The *statement(s)* sequence can execute any modification on the Shared_object_or_Shared_collection properties/elements without risk of concurrent access.
- If another shared object or collection is added as a property of the *Shared_object_or_Shared_collection* parameter, they become connected within the same shared group (see **Using shared objects or collections**).
- If another process tries to access one of the *Shared_object_or_Shared_collection* properties or connected properties while a **Use...End use** sequence is being executed, it is automatically put on hold and waits until the current sequence is terminated. 
- The **End use** line unlocks the *Shared_object_or_Shared_collection* properties and all objects sharing the same locking identifier.
- Several **Use...End use** structures can be nested in the 4D code. In that case, all locks are stacked and properties/elements will be released only when the last End use call is executed. 

**Note:** If a collection method modifies a shared collection, an internal **Use** is automatically called for this shared collection while the function is executed.

## 例題 1

You want to launch several processes that perform an inventory task on different products and update the same shared object. The main process instantiates an empty shared object and then, launches the other processes, passing the shared object and the products to count as parameters:

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

In the "HowMany" method, inventory is done and the $inventory shared object is updated as soon as possible:

```4d
 C_TEXT($1)
 C_TEXT($what)
 C_OBJECT($2)
 C_OBJECT($inventory)
 $what:=$1 //for better readability
 $inventory:=$2

 $count:=CountMethod($what) //method to count products
 Use($inventory) //use shared object
    $inventory[$what]:=$count  //save the results for this item
 End use
```

## 例題 2

The following examples highlight specific rules when handling shared groups:

```4d
 $ob1:=New shared object
 $ob2:=New shared object
 Use($ob1)
    $ob1.a:=$ob2  //group 1 is created
 End use

 $ob3:=New shared object
 $ob4:=New shared object
 Use($ob3)
    $ob3.a:=$ob4  //group 2 is created
 End use

 Use($ob1) //use an object from group 1
    $ob1.b:=$ob4  //ERROR
  //$ob4 already belongs to another group
  //assignment is not allowed
 End use

 Use($ob3)
    $ob3.a:=Null //remove any reference to $ob4 from group 2
 End use

 Use($ob1) //use an object from group 1
    $ob1.b:=$ob4  //ERROR
  //$ob4 still belongs to group 2
  //assignment is not allowed
 End use
```