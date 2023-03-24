---
id: shared
title: 共有オブジェクトと共有コレクション
---

**共有オブジェクト** および **共有コレクション** はプロセス間でコンテンツを共有することができる、特殊な [オブジェクト](Concepts/dt_object.md) と [コレクション](Concepts/dt_collection.md) です。 [インタープロセス変数](Concepts/variables.md#インタープロセス変数) に比べると、共有オブジェクトと共有コレクションは **プリエンプティブ4Dプロセス** と互換性があるという点で利点があります。つまり、`New process` や `CALL WORKER` といったコマンドの引数として、参照の形で渡すことができるということです。

共有オブジェクトと共有コレクションは、標準の `Object` および `Collection` 型の変数に保存することができますが、専用のコマンドを使用してインスタンス化されている必要があります:

- to create a shared object, use the [`New shared object`](https://doc.4d.com/4dv19R/help/command/en/page1471.html) command,
- to create a shared collection, use the [`New shared collection`](../API/CollectionClass.md#new-shared-collection) command.

:::note

Shared objects and collections can be set as properties of standard (not shared) objects or collections.

:::

共有オブジェクト/コレクションを編集するには、**Use...End use** 構文を使う必要があります。 共有オブジェクト/コレクションの値を読むにあたっては、**Use...End use** は必要ありません。

`Storage` コマンドが返す、データベースにおいて固有かつグローバルなカタログは、そのアプリケーション内あるいはコンポーネントからいつでも利用することができ、すべての共有オブジェクトおよびコレクションを保存するのに使用することができます。

## 共有オブジェクト/共有コレクションの使用

Once instantiated with the `New shared object` or `New shared collection` commands, shared object/collection properties and elements can be modified or read from any process of the application, under certain conditions.

### 編集

共有オブジェクトと共有コレクションは、編集することが可能です:

- オブジェクトプロパティの追加・削除
- 値の追加・編集 (共有オブジェクトがサポートしている範囲内で)。これには、他の共有オブジェクトやコレクションの追加・編集も含まれます (この場合、共有グループを作成します。後述参照)

All modification instructions in a shared object or collection require to be protected inside a [`Use...End use`](#use-end-use) block, otherwise an error is generated.

```4d
 $s_obj:=New shared object("prop1";"alpha")
 Use($s_obj)
    $s_obj.prop1:="omega"
 End Use
```

For conveniency, all [collection functions](../API/CollectionClass.md) that modify the shared object or collection insert an internal `Use...End use` block so you do not have to code it yourself. 例:

```4d
$col:=New shared collection()
$col.push("alpha") //.push() internally triggers Use/End use, so no need to do it yourselves
```

If you need to execute several modifications on the same collection, you can protect all modifications with a single `Use...End use` so that modifications are performed atomically.

```4d
$col:=Storage.mySharedCollection
Use($col)
    $col[0]:="omega" //modifying an element requires to be performed inside Use/End use
    $col.push("alpha") //.push() internally triggers Use/End use, but we want to do both modifications atomically
End Use
```


一度に 1プロセスのみ、共有オブジェクト/コレクションを編集することができます。 `Use` は共有オブジェクト/コレクションを他のスレッドからアクセスできないようにロックする一方、`End use` はこのロックを解除します (ロックカウンターが 0 の場合; 後述参照)。 。 `Use...End use` を使わずに共有オブジェクト/コレクションを編集しようとすると、エラーが生成されます。 すでに他のプロセスによって使用されている共有オブジェクト/コレクションに対して、別のプロセスが `Use...End use` を呼び出した場合、先着プロセスが `End use` でロックを解除するまで、その呼び出しは待機状態になります (エラーは生成されません)。 したがって、`Use...End use` 構文内の処理は迅速に実行され、ロックは可及的速やかに解除される必要があります。 そのため、共有オブジェクト/コレクションをインターフェース(ダイアログボックスなど) から直接編集することは避けることが強く推奨されます。

共有オブジェクト/コレクションを他の共有オブジェクト/コレクションのプロパティあるいは要素に割り当てることは可能で、このとき **共有グループ** が作成されます。 共有グループは、共有オブジェクト/コレクションのプロパティ値あるいは要素として他の共有オブジェクト/コレクションが設定されたときに自動的に作成されます。 共有グループを使用すると共有オブジェクトを入れ子にすることができますが、以下のルールに気をつける必要があります:

- あるグループの共有オブジェクト/コレクションに対して `Use` を使うと、そのグループに所属するすべての共有オブジェクト/コレクションのプロパティ/要素がロックされ、ロックカウンターを 1 増加させます。 `End use` はグループのロックカウンターを 1 減らします。カウンターが 0 になると、すべてのリンクされた共有オブジェクト/コレクションのロックが解除されます。
- 共有オブジェクト/コレクションは一つの共有グループにしか所属することができません。 すでにグループに所属している共有オブジェクト/コレクションを他のグループへと割り当てようとした場合、エラーが返されます。
- 一旦グループ化された共有オブジェクト/コレクションについて、グループを解除することはできません。 一度共有グループに含まれた共有オブジェクト/コレクションは、セッション中はずっと同グループに所属することになります。 親オブジェクト/コレクションから子オブジェクト/コレクションへの参照をすべて削除したとしても、両者のリンクが解除されるわけではありません。

共有グループのルールについての詳細は、例題2を参照してください。

**注:** 共有グループは、*ロック識別子* と呼ばれる内部プロパティによって管理されています。 For detailed information on this value, please refer to the 4D Language Reference.

### 読み出し

たとえ共有オブジェクト/コレクションが他のプロセスによって使用中であっても、それらのプロパティや要素は、`Use...End use` 構文を呼び出さずとも取得することが可能です。

ただし、複数の値が互いにリンクしていてそれらを一度に読み出す必要がある場合には、一貫性の観点から、共有オブジェクト/コレクションを `Use...End use` 内で扱う必要があります。

### 複製

共有オブジェクト (あるいは共有オブジェクトをプロパティとして格納しているオブジェクト) に対して `OB Copy` コマンドを使用することは可能ですが、含まれている子オブジェクト含め、標準 (非共有) のオブジェクトが戻り値として返されます。

### ストレージ

**ストレージ** は固有の共有オブジェクトで、各アプリケーションおよびマシン上で利用可能です。 This shared object is returned by the [`Storage`](https://doc.4d.com/4dv19R/help/command/en/page1525.html) command. このオブジェクトは、他のプリエンティブあるいは標準プロセスからでも利用出来るように、セッション中に定義されたすべての共有オブジェクト/コレクションを参照するためのものです。

`ストレージ` オブジェクトは標準の共有オブジェクトとは異なり、共有オブジェクト/コレクションがプロパティとして追加されたときでも共有グループを作成しないという点に注意してください。 この例外的な振る舞いにより、**ストレージ** オブジェクトを使用するたびに、リンクされている共有オブジェクト/コレクションをすべてロックせずに済みます。

詳細な情報については、`Storage` コマンドの詳細を参照してください。

## Use...End use

`Use...End use` 構文の正式なシンタックスは、以下の通りです:

```4d
 Use(Shared_object_or_Shared_collection)
    statement(s) // ステートメント
 End use
```

`Use...End use` 構文は、内部セマフォーの保護下において *Shared_object_or_Shared_collection* 引数に対して処理を実行するステートメントを定義します。 *Shared_object_or_Shared_collection* として任意の有効な共有オブジェクトあるいは共有コレクションを渡すことができます。

共有オブジェクトおよび共有コレクションは、プロセス間の (とくに **プリエンプティブ4Dプロセス** 間の) 通信ができるように設計されています 。 これらはプロセスから他のプロセスへ、参照型の引数として渡すことができます。 共有オブジェクトおよび共有コレクションを扱う際には、複数プロセスによる同時アクセスを避けるために、必ずそれらを `Use...End use` キーワードでくくる必要があります。

- **Use** の実行が成功すると、対応する `End use` が実行されるまで、_Shared_object_or_Shared_collection_ のプすべてのロパティ/要素は他のあらゆるプロセスに対し書き込みアクセスがロックされます。
- _statement(s)_ で実行されるステートメントは、*Shared_object_or_Shared_collection* のプロパティ/要素に対して、競合アクセスのリスクなしに変更も実行することができます。
- _Shared_object_or_Shared_collection_ に他の共有オブジェクトあるいはコレクションがプロパティとして追加された場合、それらも同じ共有グループとして連結されます。
- **Use...End use ** 内ステートメントの実行中に、他のプロセスが _Shared_object_or_Shared_collection_ のプロパティやリンクされたプロパティにアクセスしようとした場合、そのアクセスは自動的に保留され、実行中の処理が終了するまで待機します。
- **End use** は、_Shared_object_or_Shared_collection_ プロパティおよび、同じグループのすべてのオブジェクトのロックを解除します。
- 4D コード内では、複数の **Use...End use** 構文を入れ子にすることができます。 グループの場合、**Use** を使用するごとにグループのロックカウンターが 1 増加し、 **End use** ごとに 1 減少します。最後の **End use** によってロックカウンターが 0 になった場合にのみ、すべてのプロパティ/要素のロックが解除されます。

:::note

Keep in mind that [collection functions](../API/CollectionClass.md) that modify shared collections automatically trigger an internal **Use** for this shared collection while the function is executed.

:::

## 例題 1

それぞれ異なる製品の在庫更新を実行する複数のプロセスを起動し、同じ共有オブジェクトを更新していきます。 まずメインプロセスで空の共有オブジェクトをインスタンス化してから、共有オブジェクトへの参照と対象製品を引数として渡して別プロセス起動します:

```4d
 ARRAY TEXT($_items;0)
 ... // 在庫を確認する製品を配列に格納します
 $nbItems:=Size of array($_items)
 var $inventory : Object
 $inventory:=New shared object
 Use($inventory)
    $inventory.nbItems:=$nbItems
 End use

  // プロセスを起動します
 For($i;1;$nbItems)
    $ps:=New process("HowMany";0;"HowMany_"+$_items{$i};$_items{$i};$inventory)
  // $inventory オブジェクトは参照で渡されます
 End for
```

"HowMany" メソッド内では、在庫確認が終わるとすぐに $inventory 共有オブジェクトが更新されます:

```4d
    // HowMany メソッド
 #DECLARE ($what : Text ; $inventory : Object)

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
