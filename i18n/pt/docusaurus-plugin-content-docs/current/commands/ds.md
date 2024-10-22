---
id: ds
title: ds
displayed_sidebar: docs
---

<!--REF #_command_.ds.Syntax-->**ds** { ( *localID* : Text ) } : cs.DataStore <!-- END REF -->

<!--REF #_command_.ds.Params-->

| Parâmetro  | Tipo      |                            | Descrição                                       |
| ---------- | --------- | -------------------------- | ----------------------------------------------- |
| localID    | Text      | &#8594; | ID local del armazém de dados remoto a devolver |
| Resultados | DataStore | &#8592; | Referencia ao armazém de dados                  |

<!-- END REF-->

#### Descrição

O comando `ds` <!-- REF #_command_.ds.Summary -->retorna uma referência ao datastore que corresponde ao banco de dados 4D atual ou ao banco de dados designado por *localID*<!-- END REF -->.

Se omitir o parâmetro localID (ou se passa uma string vazia ""), o comando devolve uma referência ao armazém de dados que coincide com a base de dados local de 4D (ou  a base de datos de 4D Server em caso de abrir uma base de dados remota em 4D Server). O repositório de dados é aberto automaticamente e está disponível diretamente por meio do `ds`.

Você também pode obter uma referência em um datastore remoto aberto passando seu ID local no parâmetro *localID*. The datastore must have been previously opened with the [`Open datastore`](open-datastore.md) command by the current database (host or component). A identificação local se define quando se utilizar este comando.

> O escopo do id local do banco de dados no qual o armazen de dados foi aberto.

Se nenhum datastore *localID* for encontrado, o comando retornará **Null**.

Objects available in the `cs.Datastore` are mapped from the target database with respect to the [ORDA general rules](../ORDA/dsMapping.md#general-rules).

#### Exemplo 1

Usar a datastore principal do banco de dados 4D:

```4d
var $result : cs.EmployeeSelection
$result:=ds.Employee.query("firstName = :1";"S@")
```

#### Exemplo 2

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

#### Veja também

[Open datastore](open-datastore.md)
