---
id: ds
title: ds
displayed_sidebar: docs
---

<!--REF #_command_.ds.Syntax-->**ds** { ( *localID* : Text ) } : cs.DataStore <!-- END REF -->

<!--REF #_command_.ds.Params-->

| 引数      | 型         |                            | 説明                        |
| ------- | --------- | -------------------------- | ------------------------- |
| localID | テキスト      | &#8594 | 参照を取得したいリモートデータストアのローカルID |
| 戻り値     | DataStore | &#8592 | データストア参照                  |

<!-- END REF-->

#### 説明

`ds` コマンドは、<!-- REF #_command_.ds.Summary -->カレントの 4Dデータベース、または *localID* で指定したデータベースに合致するデータストアの参照を返します<!-- END REF -->。

*localID* を省略した (または空の文字列 "" を渡した) 場合には、ローカル4Dデータベース (4D Server でリモートデータベースを開いている場合にはそのデータベース) に合致するデータストアの参照を返します。 データストアは自動的に開かれ、`ds` を介して直接利用することができます。

開かれているリモートデータストアのローカルIDを *localID* パラメーターに渡すと、その参照を取得できます。 The datastore must have been previously opened with the [`Open datastore`](open-datastore.md) command by the current database (host or component). このコマンドを使用したときにローカルIDが定義されます。

> ローカルIDのスコープは、当該データストアを開いたデータベースです。

*localID* に合致するデータストアが見つからない場合、コマンドは **Null** を返します。

Objects available in the `cs.Datastore` are mapped from the target database with respect to the [ORDA general rules](../ORDA/dsMapping.md#general-rules).

#### 例題 1

4Dデータベースのメインデータストアを使用します:

```4d
var $result : cs.EmployeeSelection
$result:=ds.Employee.query("firstName = :1";"S@")
```

#### 例題 2

```4d
 var $connectTo; $firstFrench; $firstForeign : Object

 var $frenchStudents; $foreignStudents : cs.DataStore

 $connectTo:=New object("type";"4D Server";"hostname";"192.168.18.11:8044")
 $frenchStudents:=Open datastore($connectTo;"french")

 $connectTo.hostname:="192.168.18.11:8050"
 $foreignStudents:=Open datastore($connectTo;"foreign")
  //...
  //...
 $firstFrench:=getFirst("french";"Students")
 $firstForeign:=getFirst("foreign";"Students")
```

```4d
  //getFirst method
  //getFirst(localID;dataclass) -> entity
 #DECLARE( $localId : Text; $dataClassName : Text ) -> $entity : 4D.Entity

 $entity:=ds($localId)[$dataClassName].all().first()
```

#### 参照

[Open datastore](open-datastore.md)
