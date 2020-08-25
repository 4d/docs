---
id: entities
title: データ操作
---

ORDA では、[エンティティ](dsMapping.md#entity) および [エンティティセレクション](dsMapping.md#エンティティセレクション) を介してデータにアクセスします。 これらのオブジェクトを使って、データストアのデータを作成・更新・クエリ・ソートすることができます。


## エンティティの作成

データクラス内に新しいエンティティを作成する方法は二つあります:

*   エンティティはデータベースレコードへの参照であるため、"クラシックな" 4Dランゲージを使用してレコードを作成し、それを`entity.next( )` や `entitySelection.first( )` といった ORDAメソッドで参照することでエンティティを作成できます。
*   また、`dataClass.new( )` メソッドを使用することでもエンティティも作成することができます。

エンティティはメモリ内にしか作成されないという点に注意してください。 データストアに追加したい場合、`entity.save( )` メソッドを呼ぶ必要があります。

エンティティ属性は、エンティティオブジェクトのプロパティとして直接利用可能です。 詳細な情報については、[エンティティ属性の使用](#エンティティ属性の使用) を参照してください。

たとえば、カレントデータストア内の "Employee" データクラスに新しいエンティティを作成し、firstname と name 属性に "John" と "Dupont" を割り当てたい場合を考えます:

```4d
var $myEntity : cs.EmployeeEntity
$myEntity:=ds.Employee.new() // エンティティ型の新規オブジェクトを作成します
$myEntity.name:="Dupont" // 'Dupont' を 'name' 属性に代入します
$myEntity.firstname:="John" // 'John' を 'firstname' 属性に代入します
$myEntity.save() // エンティティを保存します
```
> エンティティは、それが作成されたプロセス内でのみ定義されます。 そのため、たとえばエンティティへの参照を、インタープロセス変数内に保存して他のプロセスで使用する、といったことはできません。

## エンティティと参照

エンティティには、4Dレコードへの参照が格納されています。 異なるエンティティが同じ 4Dレコードを参照することもあり得ます。 また、エンティティは 4Dオブジェクト変数に保存可能であることから、異なる変数が同じエンティティへの参照を格納していることもあり得ます。

以下のコードを実行した場合:

```4d
 var $e1; $e2 : cs.EmployeeEntity
 $e1:=ds.Employee.get(1) // ID 1をもつ社員にアクセスします
 $e2:=$e1
 $e1.name:="Hammer"
  //$e1 も $e2 も、どちらも同じエンティティへの参照を共有します
  //$e2.name の中身も "Hammer" です
```

これは以下のように図解することができます:

![](assets/en/Orda/entityRef1.png)

次に、以下のコードを実行した場合:

```4d
 var $e1; $e2 : cs.EmployeeEntity
 $e1:=ds.Employee.get(1)
 $e2:=ds.Employee.get(1)
 $e1.name:="Hammer"
  //変数 $e1 はエンティティへの参照を格納しています
  //変数 $e2 は別のエンティティへの参照を格納しています
  //$e2.name の中身は "smith" です
```

これは以下のように図解することができます:

![](assets/en/Orda/entityRef2.png)

しかし、両方のエンティティが同じレコードを参照していることに注意してください。 どちらの場合でも、`entity.save( )` メソッドを呼び出した場合、レコードは更新されます (衝突が発生した場合を除きます。[エンティティロッキング](#エンティティロッキング) 参照)。

実際には、`$e1` も `$e2` もエンティティそのものではなく、エンティティへの参照です。 これはつまり、どのような関数やメソッドにも直接受け渡すことができ、ポインターのように振る舞うということです。そしてこれは 4Dポインターよりもずっと高速です。 たとえば:

```4d
 For each($entity;$selection)
    do_Capitalize($entity)
 End for each
```

そして do_Capitalize メソッドが以下のような形であった場合:

```4d
 $entity:=$1
 $name:=$entity.lastname
 If(Not($name=Null))
    $name:=Uppercase(Substring($name;1;1))+Lowercase(Substring($name;2))
 End if
 $entity.lastname:=$name
```

他の 4D のオブジェクトと同様にエンティティを扱うことができ、[引数](Concepts/parameters.md) としてその参照を渡すことができます。
> エンティティでは、クラシックな 4D言語のような "カレントレコード" という概念はありません。 エンティティは、いくつでも必要な数を同時に使用することができます。 また、エンティティには自動ロックの機構が備わっています ([エンティティロッキング](#エンティティロッキング) 参照)。 エンティティの読み込みには、[レイジーローディング](glossary.md#レイジーローディング) 機構が使用されます。これはつまり必要な分の情報だけが読み込まれるということです。 いずれにせよ、クライアント/サーバーでは必要であればエンティティを直接自動的に読み込むことも可能です。


## エンティティ属性の使用

エンティティ属性はデータを保存し、対応するテーブルの対応するフィールドをマップします。 ストレージ型のエンティティ属性はエンティティオブジェクトの単純なプロパティとして設定や取得ができますが、**リレートエンティティ (relatedEntity)** 型と **リレートエンティティズ (relatedEntities)** 型のエンティティ属性はエンティティあるいはエンティティセレクションを返します。
> 属性の型についての詳細な情報については、[ストレージ属性とリレーション属性](dsMapping.md#ストレージ属性とリレーション属性) の段落を参照してください。

たとえば、ストレージ属性を設定するためには:

```4d
 $entity:=ds.Employee.get(1) // ID1 の社員エンティティを取得します
 $name:=$entity.lastname // 社員のラストネームを取得します。例: "Smith"
 $entity.lastname:="Jones" // 社員のラストネームを変更します
```
> ピクチャー属性は、パスを指定してエンティティに直接代入することはできません。

リレート属性にアクセスできるかどうかは、属性の型によります。 たとえば、以下のようなストラクチャーがあるとき:

![](assets/en/Orda/entityAttributes.png)

リレートされたオブジェクトを通してデータにアクセスすることができます:

```4d
 $entity:=ds.Project.all().first().theClient // 先頭プロジェクトに関連する Company エンティティを取得します
 $EntitySel:=ds.Company.all().first().companyProjects // 先頭の会社に関連する Project エンティティセレクションを取得します
```

上記の例において、*theClient* と *companyProjects* はどちらもプライマリーリレーション属性であり、二つのデータクラス間の直接的なリレーションを表すことに注意してください。 しかしながら、複数のレベルのリレーションを通したパスに基づいてリレーション属性をビルドすることも可能です(循環参照含む)。 たとえば、以下のようなストラクチャーの場合を考えます:

![](assets/en/Orda/entityAttributes2.png)

社員はそれぞれマネージャーにもなりえますし、マネージャーを持つこともできます。 ある社員のマネージャーのマネージャーを取得したい場合、以下のように書くことができます:

```4d
 $myEmp:=ds.Employee.get(50)
 $manLev2:=$myEmp.manager.manager.lastname
```

## リレーション属性への値の代入

ORDAアーキテクチャーでは、リレーション属性はエンティティにリレートされたデータを直接格納します:

*   N対1型リレーション属性 (**リレートエンティティ (relatedEntity)** 型) は一つのエンティティを格納します。
*   1対N型リレーション属性 (**リレートエンティティズ (relatedEntities)** 型) はエンティティセレクションを格納します。

以下の (単純化された) ストラクチャーを見てみましょう:

![](assets/en/Orda/entityAttributes3.png)

この例では、"Employee" データクラスに属するエンティティの "employer" 属性には、エンティティ型のオブジェクト (あるいは null値) が格納されます。 "Company" データクラスに属するエンティティの "staff" 属性には、エンティティセレクション型のオブジェクト (あるいは null値) が格納されます。
> ORDAでは、リレーションの自動あるいは手動プロパティは何の効力も持ちません。

"employer" 属性に直接値を代入したい場合には、"Company" データクラスの既存エンティティを渡す必要があります。 たとえば:

```4d
 $emp:=ds.Employee.new() // 新規の社員エンティティを作成します
 $emp.lastname:="Smith" // 属性に値を代入します
 $emp.employer:=ds.Company.query("name =:1";"4D")[0]  // リレーション属性に会社エンティティを代入します
 $emp.save()
```

4D では、"1" エンティティにリレートされている N エンティティ側のリレーション属性への入力を容易にするための追加の手段が提供されています: リレーション属性に代入する際に、"1" エンティティのプライマリーキーを直接渡す方法です。 これが動作するためには、数値あるいはテキスト型のデータ (プライマリーキー値) をリレーション属性に渡します。 すると 4D はデータクラス内の該当するエンティティを自動的に検索してくれます。 たとえば:

```4d
 $emp:=ds.Employee.new()
 $emp.lastname:="Wesson"
 $emp.employer:=2 // リレーション属性にプライマリーキーを代入します
  // 4D はプライマリーキー (この場合、ID) の値が 2 である会社を検索し、
  // それを社員に代入します
 $emp.save()
```

これはとくに、リレーショナルデータベースから大量のデータを読み込むときに有用です。 このような読み込みでは通常 "ID" カラムが含まれており、これはリレーション属性に直接割り当て可能なプライマリーキーを参照しています。

これはまた、1 データクラス側で対応するエンティティを事前に作成することなく N エンティティ側のプライマリーキーを割り当てることができるということです。 リレートされているデータクラスに存在しないプライマリーキーを割り当てた場合、それは保管され、"1" データクラス側でエンティティが作成されたときに 4D によって割り当てられます。

"N" データクラス側のリレーション属性を通して、"1" リレートエンティティの属性値を、直接代入・変更することができます。 たとえば、Employee エンティティにリレートされている Company エンティティの name 属性を変更したい場合、以下のように書くことができます:

```code4d
 $emp:=ds.Employee.get(2) // プライマリーキーが 2 の Employee エンティティを読み込みます
 $emp.employer.name:="4D, Inc." // リレートされている Company の name 属性を変更します
 $emp.employer.save() // リレーション属性の変更を保存します
  // リレートされているエンティティも更新されます
```

## エンティティセレクションの作成

You can create an object of type entity selection as follows:

*   Querying the entities in a dataclass (see the `dataClass.query()` method);
*   Using the `dataClass.all( )` method to select all the entities in a dataclass;
*   Using the `Create entity selection` command or the `dataClass.newSelection()` method to create a blank entity collection object;

*   Using one of the various methods from the **ORDA - EntitySelection** theme that returns a new entity selection, such as `entitySelection.or()`;

*   Using a relation attribute of type "related entities" (see below).

You can simultaneously create and use as many different entity selections as you want for a dataclass. Keep in mind that an entity selection only contains references to entities. Different entity selections can contain references to the same entities.
> An entity selection is only defined in the process where it was created. You cannot, for example, store a reference to an entity selection in an interprocess variable and use it in another process.

## Entity selections and attributes

### Entity selections and Storage attributes

All storage attributes (text, number, boolean, date) are available as properties of entity selections as well as entities. When used in conjunction with an entity selection, a scalar attribute returns a collection of scalar values. たとえば:

```4d
 $locals:=ds.Person.query("city = :1";"San Jose") //entity selection of people
 $localEmails:=$locals.emailAddress //collection of email addresses (strings)
```

This code returns in *$localEmails* a collection of email addresses as strings.

### Entity selections and Relation attributes

In addition to the variety of ways you can query, you can also use relation attributes as properties of entity selections to return new entity selections. たとえば、以下のようなストラクチャーの場合を考えます:

![](assets/en/Orda/entitySelectionRelationAttributes.png)

```4d
 $myParts:=ds.Part.query("ID < 100") //Return parts with ID less than 100
 $myInvoices:=$myParts.invoiceItems.invoice
  //All invoices with at least one line item related to a part in $myParts
```

The last line will return in $myInvoices an entity selection of all invoices that have at least one invoice item related to a part in the entity selection myParts. When a relation attribute is used as a property of an entity selection, the result is always another entity selection, even if only one entity is returned. When a relation attribute is used as a property of an entity selection and no entities are returned, the result is an empty entity selection, not null.


## エンティティロッキング

You often need to manage possible conflicts that might arise when several users or processes load and attempt to modify the same entities at the same time. Record locking is a methodology used in relational databases to avoid inconsistent updates to data. The concept is to either lock a record upon read so that no other process can update it, or alternatively, to check when saving a record to verify that some other process hasn’t modified it since it was read. The former is referred to as **pessimistic record locking** and it ensures that a modified record can be written at the expense of locking records to other users. The latter is referred to as **optimistic record locking** and it trades the guarantee of write privileges to the record for the flexibility of deciding write privileges only if the record needs to be updated. In pessimistic record locking, the record is locked even if there is no need to update it. In optimistic record locking, the validity of a record’s modification is decided at update time.

ORDA provides you with two entity locking modes:

- an automatic "optimistic" mode, suitable for most applications,
- a "pessimistic" mode allowing you to lock entities prior to their access.

### Automatic optimistic lock

This automatic mechanism is based on the concept of "optimistic locking" which is particularly suited to the issues of web applications. This concept is characterized by the following operating principles:

*   All entities can always be loaded in read-write; there is no *a priori* "locking" of entities.
*   Each entity has an internal locking stamp that is incremented each time it is saved.
*   When a user or process tries to save an entity using the `entity.save( )` method, 4D compares the stamp value of the entity to be saved with that of the entity found in the data (in the case of a modification):
    *   When the values match, the entity is saved and the internal stamp value is incremented.
    *   When the values do not match, it means that another user has modified this entity in the meantime. The save is not performed and an error is returned.

The following diagram illustrates optimistic locking:

1. Two processes load the same entity.<br><br>![](assets/en/Orda/optimisticLock1.png)

2. The first process modifies the entity and validates the change. The `entity.save( )` method is called. The 4D engine automatically compares the internal stamp value of the modified entity with that of the entity stored in the data. Since they match, the entity is saved and its stamp value is incremented.<br><br>![](assets/en/Orda/optimisticLock2.png)

3. The second process also modifies the loaded entity and validates its changes. The `entity.save( )` method is called. Since the stamp value of the modified entity does not match the one of the entity stored in the data, the save is not performed and an error is returned.<br><br>![](assets/en/Orda/optimisticLock3.png)


This can also be illustrated by the following code:

```4d
 $person1:=ds.Person.get(1) //Reference to entity
 $person2:=ds.Person.get(1) //Other reference to same entity
 $person1.name:="Bill"
 $result:=$person1.save() //$result.success=true, change saved
 $person2.name:="William"
 $result:=$person2.save() //$result.success=false, change not saved
```

In this example, we assign to $person1 a reference to the person entity with a key of 1. Then, we assign another reference of the same entity to variable $person2. Using $person1, we change the first name of the person and save the entity. When we attempt to do the same thing with $person2, 4D checks to make sure the entity on disk is the same as when the reference in $person1 was first assigned. Since it isn't the same, it returns false in the success property and doesn’t save the second modification.

When this situation occurs, you can, for example, reload the entity from the disk using the `entity.reload( )` method so that you can try to make the modification again. The `entity.save( )` method also proposes an "automerge" option to save the entity in case processes modified attributes that were not the same.

### Pessimistic lock

You can lock and unlock entities on demand when accessing data. When an entity is getting locked by a process, it is loaded in read/write in this process but it is locked for all other processes. The entity can only be loaded in read-only mode in these processes; its values cannot be edited or saved.

This feature is based upon two methods of the `Entity` class:

*   `entity.lock()`
*   `entity.unlock()`

For more information, please refer to the descriptions for these methods.


### Concurrent use of 4D classic locks and ORDA pessimistic locks

Using both classic and ORDA commands to lock records is based upon the following principles:

*   A lock set with a classic 4D command on a record prevents ORDA to lock the entity matching the record.
*   A lock set with ORDA on an entity prevents classic 4D commands to lock the record matching the entity.

These principles are shown in the following diagram:

![](assets/en/Orda/concurrent1.png)

**Transaction locks** also apply to both classic and ORDA commands. In a multiprocess or a multi-user application, a lock set within a transaction on a record by a classic command will result in preventing any other processes to lock entities related to this record (or conversely), until the transaction is validated or canceled.

*   Example with a lock set by a classic command:<br><br>![](assets/en/Orda/concurrent2.png)
*   Example with a lock set by an ORDA method:<br><br>![](assets/en/Orda/concurrent3.png)



## Client/server optimization

4D provides an automatic optimization for ORDA requests that use entity selections or load entities in client/server configurations. This optimization speeds up the execution of your 4D application by reducing drastically the volume of information transmitted over the network.

The following optimization mechanisms are implemented:

*   When a client requests an entity selection from the server, 4D automatically "learns" which attributes of the entity selection are actually used on the client side during the code execution, and builds a corresponding "optimization context". This context is attached to the entity selection and stores the used attributes. It will be dynamically updated if other attributes are used afterwards.

*   Subsequent requests sent to the server on the same entity selection automatically reuse the optimization context and only get necessary attributes from the server, which accelerates the processing. For example in an entity selection-based list box, the learning phase takes place during the display of the first rows, next rows display is very optimized.

*   An existing optimization context can be passed as a property to another entity selection of the same dataclass, thus bypassing the learning phase and accelerating the application (see [Using the context property](#using-the-context-property) below).

The following methods automatically associate the optimization context of the source entity selection to the returned entity selection:

*   `entitySelection.and()`
*   `entitySelection.minus()`
*   `entitySelection.or()`
*   `entitySelection.orderBy()`
*   `entitySelection.slice()`
*   `entitySelection.drop()`


**例題**

Given the following code:

```4d
 $sel:=$ds.Employee.query("firstname = ab@")
 For each($e;$sel)
    $s:=$e.firstname+" "+$e.lastname+" works for "+$e.employer.name // $e.employer refers to Company table
 End for each
```

Thanks to the optimization, this request will only get data from used attributes (firstname, lastname, employer, employer.name) in *$sel* after a learning phase.



### Using the context property

You can increase the benefits of the optimization by using the **context** property. This property references an optimization context "learned" for an entity selection. It can be passed as parameter to ORDA methods that return new entity selections, so that entity selections directly request used attributes to the server and bypass the learning phase.

A same optimization context property can be passed to unlimited number of entity selections on the same dataclass. All ORDA methods that handle entity selections support the **context** property (for example `dataClass.query( )` or `dataClass.all( )` method). Keep in mind, however, that a context is automatically updated when new attributes are used in other parts of the code. Reusing the same context in different codes could result in overloading the context and then, reduce its efficiency.
> A similar mechanism is implemented for entities that are loaded, so that only used attributes are requested (see the `dataClass.get( )` method).



**Example with `dataClass.query( )` method:**

```4d
 var $sel1; $sel2; $sel3; $sel4; $querysettings; $querysettings2 : Object
 var $data : Collection
 $querysettings:=New object("context";"shortList")
 $querysettings2:=New object("context";"longList")

 $sel1:=ds.Employee.query("lastname = S@";$querysettings)
 $data:=extractData($sel1) // In extractData method an optimization is triggered and associated to context "shortList"

 $sel2:=ds.Employee.query("lastname = Sm@";$querysettings)
 $data:=extractData($sel2) // In extractData method the optimization associated to context "shortList" is applied

 $sel3:=ds.Employee.query("lastname = Smith";$querysettings2)
 $data:=extractDetailedData($sel3) // In extractDetailedData method an optimization is triggered and associated to context "longList"

 $sel4:=ds.Employee.query("lastname = Brown";$querysettings2)
 $data:=extractDetailedData($sel4) // In extractDetailedData method the optimization associated to context "longList" is applied
```

### Entity selection-based list box

Entity selection optimization is automatically applied to entity selection-based list boxes in client/server configurations, when displaying and scrolling a list box content: only the attributes displayed in the list box are requested from the server.

A specific "page mode" context is also provided when loading the current entity through the **Current item** property expression of the list box (see [Collection or entity selection type list boxes](FormObjects/listbox_overview.md#list-box-types)). This feature allows you to not overload the list box initial context in this case, especially if the "page" requests additional attributes. Note that only the use of **Current item** expression will create/use the page context (access through `entitySelection\[index]` will alter the entity selection context).

Subsequent requests to server sent by entity browsing methods will also support this optimization. The following methods automatically associate the optimization context of the source entity to the returned entity:

*   `entity.next( )`
*   `entity.first( )`
*   `entity.last( )`
*   `entity.previous( )`

For example, the following code loads the selected entity and allows browsing in the entity selection. Entities are loaded in a separate context and the list box initial context is left untouched:

```4d
 $myEntity:=Form.currentElement //current item expression
  //... do something
 $myEntity:=$myEntity.next() //loads the next entity using the same context
```
