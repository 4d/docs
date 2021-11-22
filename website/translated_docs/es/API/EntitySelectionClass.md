---
id: EntitySelectionClass
title: EntitySelection
---


An entity selection is an object containing one or more reference(s) to [entities](ORDA/dsMapping.md#entity) belonging to the same [Dataclass](ORDA/dsMapping.md#dataclass). An entity selection can contain 0, 1 or X entities from the dataclass -- where X can represent the total number of entities contained in the dataclass.

Entity selections can be created from existing selections using various functions of the [`DataClass` class](DataClassClass.md) such as [`.all()`](DataClassClass.md#all) or [`.query()`](DataClassClass.md#query), or functions of the `EntityClass` class itself, such as [`.and()`](#and) or [`orderBy()`](#orderby). You can also create blank entity selections using the [`dataClass.newSelection()`](DataClassClass.md#newselection) function or the [`Create new selection`](#create-new-selection) command.

### Resumen

|                                                                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE EntitySelectionClass.index.Syntax -->](#91index93)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE EntitySelectionClass.index.Summary -->|
| [<!-- INCLUDE EntitySelectionClass.attributeName.Syntax -->](#attributename)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE EntitySelectionClass.attributeName.Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.add().Syntax -->](#add)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.add().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.and().Syntax -->](#and)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.and().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.average().Syntax -->](#average)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.average().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.contains().Syntax -->](#contains)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.contains().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.count().Syntax -->](#count)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.count().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.distinct().Syntax -->](#distinct)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.distinct().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.drop().Syntax -->](#drop)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.drop().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.extract().Syntax -->](#extract)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.extract().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.first().Syntax -->](#first)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.first().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.getDataClass().Syntax -->](#getdataclass)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.getDataClass().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.isAlterable().Syntax -->](#isalterable)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.isAlterable().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.isOrdered().Syntax -->](#isordered)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.isOrdered().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.last().Syntax -->](#last)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.last().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.length.Syntax -->](#length)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.length.Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.max().Syntax -->](#max)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.max().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.min().Syntax -->](#min)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.min().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.minus().Syntax -->](#minus)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.minus().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.or().Syntax -->](#or)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.or().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.orderBy().Syntax -->](#orderby)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.orderBy().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.orderByFormula().Syntax -->](#orderbyformula)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.orderByFormula().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.query().Syntax -->](#query)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.query().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.queryPath.Syntax -->](#querypath)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.queryPath.Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.queryPlan.Syntax -->](#queryplan)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.queryPlan.Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.refresh().Syntax -->](#refresh)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.refresh().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.selected().Syntax -->](#selected)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.selected().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.slice().Syntax -->](#slice)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.slice().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.sum().Syntax -->](#sum)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.sum().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.toCollection().Syntax -->](#tocollection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.toCollection().Summary -->|



## Create entity selection

<!-- REF #_command_.Create entity selection.Syntax -->
**Create entity selection** ( *dsTable* : Table { ; *settings* : Object } ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #_command_.Create entity selection.Params -->
| Parámetros | Tipo               |    | Descripción                                                                                     |
| ---------- | ------------------ |:--:| ----------------------------------------------------------------------------------------------- |
| dsTable    | Tabla              | -> | Tabla de la base 4D cuya selección actual se utilizará para construir la selección de entidades |
| parámetros | Objeto             | -> | Opciones de construcción: context                                                               |
| Resultado  | 4D.EntitySelection | <- | Selección de entidades que coinciden con la clase de datos relacionada con la tabla dada        |
<!-- END REF -->


#### Descripción

El comando `Create entity selection` construye y devuelve una nueva, [alterable](ORDA/entities.md#shareable-or-alterable-entity-selections) selección de entidad relacionada con la clase de datos que coincide con la tabla *dsTable* dada, según la selección actual de esta tabla.

Si la selección actual está ordenada, se crea una selección de entidades [ordenada](ORDA/dsMapping.md#ordered-or-unordered-entity-selection) (se mantiene el orden de la selección actual). Si la selección actual no está ordenada, se crea una selección de entidades no ordenada.

Si la tabla *dsTable* no está expuesto en [`ds`](API/DataStoreClass.md#ds), se devuelve un error. Este comando no puede utilizarse con un datastore remoto.

En el parámetro opcional *settings*, puede pasar un objeto que contenga la siguiente propiedad:

| Propiedad | Tipo  | Descripción                                                                                                       |
| --------- | ----- | ----------------------------------------------------------------------------------------------------------------- |
| context   | Texto | Label for the [optimization context](ORDA/entities.md#clientserver-optimization) applied to the entity selection. |


#### Ejemplo

```4d
var $employees : cs.EmployeeSelection
ALL RECORDS([Employee])
$employees:=Create entity selection([Employee]) 
// The $employees entity selection now contains a set of reference
// on all entities related to the Employee dataclass
```

#### Ver también

[`dataClass.newSelection()`](DataClassClass.md#newselection)


## USE ENTITY SELECTION

<!-- REF #_command_.USE ENTITY SELECTION.Syntax -->
**USE ENTITY SELECTION** (*entitySelection*)<!-- END REF -->

<!-- REF #_command_.USE ENTITY SELECTION.Params -->
| Parámetros      | Tipo            |    | Descripción         |
| --------------- | --------------- |:--:| ------------------- |
| entitySelection | EntitySelection | -> | An entity selection |
<!-- END REF -->

#### Descripción

The `USE ENTITY SELECTION` command updates the current selection of the table matching the dataclass of the *entitySelection* parameter, according to the content of the entity selection.

This command cannot be used with a [Remote datastore](../ORDA/remoteDatastores.md).

> After a call to `USE ENTITY SELECTION`, the first record of the updated current selection (if not empty) becomes the current record, but it is not loaded in memory. If you need to use the values of the fields in the current record, use the `LOAD RECORD` command after the `USE ENTITY SELECTION` command.

#### Ejemplo

```4d
var $entitySel : Object

$entitySel:=ds.Employee.query("lastName = :1";"M@") //$entitySel is related to the Employee dataclass
REDUCE SELECTION([Employee];0)
USE ENTITY SELECTION($entitySel) //The current selection of the Employee table is updated
```


<!-- REF EntitySelectionClass.index.Desc -->
## &#91;*index*&#93;

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17     | Añadidos       |

</details>

<!-- REF EntitySelectionClass.index.Syntax -->
***&#91;index&#93;*** : 4D.Entity<!-- END REF -->


#### Descripción

La notación `EntitySelection[index]` <!-- REF EntitySelectionClass.index.Summary -->permite acceder a las entidades dentro de la selección de entidades utilizando la sintaxis de colección estándar<!-- END REF -->: pase la posición de la entidad que desea obtener en el parámetro *index*.

Tenga en cuenta que la entidad correspondiente se vuelve a cargar desde el almacén de datos.

*index* puede ser cualquier número entre 0 y `.length`-1.

*   If *index* is out of range, an error is returned.
*   If *index* corresponds to a dropped entity, a Null value is returned.
> **Atención**: `EntitySelection[index]` es una expresión no asignable, lo que significa que no puede utilizarse como referencia editable de la entidad con métodos como [`.lock()`](EntityClass.md#lock) o [`.save()`](EntityClass.md#save). Para trabajar con la entidad correspondiente, es necesario asignar la expresión devuelta a una expresión asignable, como una variable. Ejemplos:

```4d
 $sel:=ds.Employee.all() //creación de la entity selection
  //declaraciones no válidas:
 $result:=$sel[0].lock() //NO funcionará
 $sel[0].lastName:="Smith" //NO funcionará
 $result:=$sel[0].save() //NO funcionará
  //valid code:
 $entity:=$sel[0]  //OK
 $entity.lastName:="Smith" //OK
 $entity.save() //OK
```

#### Ejemplo


```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@")
 $employee:=$employees[2]  // La tercera entidad de la selección de entidades $employees se recarga de la base de datos
```

<!-- END REF -->




<!-- REF EntitySelectionClass.attributeName.Desc -->
## .*attributeName*

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17     | Añadidos       |
</details>

<!-- REF EntitySelectionClass.attributeName.Syntax -->
***.attributeName*** : Collection<br>***.attributeName*** : 4D.EntitySelection<!-- END REF -->


#### Descripción

Todo atributo de dataclass puede ser utilizado como una propiedad de una entity selection para devolver <!-- REF EntitySelectionClass.attributeName.Summary -->una "proyección" de los valores del atributo en la entity selection<!-- END REF -->. Los valores proyectados pueden ser una colección o una nueva selección de entidades, dependiendo de [kind](DataClassAttributeClass.md#kind) (`storage` o `relation`) del atributo.

*   If *attributeName* kind is `storage`: `.attributeName` returns a collection of values of the same type as *attributeName*.
*   If *attributeName* kind is `relatedEntity`: `.attributeName` returns a new entity selection of related values of the same type as *attributeName*. Duplications are removed (an unordered entity selection is returned).
*   If *attributeName* kind is `relatedEntities`: `.attributeName` returns a new entity selection of related values of the same type as *attributeName*. Duplications are removed (an unordered entity selection is returned).


When a relation attribute is used as a property of an entity selection, the result is always another entity selection, even if only one entity is returned. En este caso, si no se devuelve ninguna entidad, el resultado es una selección de entidades vacía.

Si el atributo no existe en la selección de entidades, se devuelve un error.






#### Ejemplo 1

Proyección de valores de almacenamiento:


```4d
 var $firstNames : Collection
 $entitySelection:=ds.Employee.all()
 $firstNames:=$entitySelection.firstName // firstName es un string
```

La colección resultante es una colección de cadenas, por ejemplo:

```4d
[
    "Joanna",
    "Alexandra",
    "Rick"
]
```

#### Ejemplo 2

Proyección de la entidad relacionada:

```4d
 var $es; $entitySelection : cs.EmployeeSelection
 $entitySelection:=ds.Employee.all()
 $es:=$entitySelection.employer // employer está relacionado a la dataClass Company
```

El objeto resultante es una selección de entidades de la empresa con los duplicados eliminados (si los hay).

#### Ejemplo 3

Proyección de entidades relacionadas:

```4d
 var $es : cs.EmployeeSelection
 $es:=ds.Employee.all().directReports // directReports está relacionado a la dataclass Employee
```

El objeto resultante es una entity selection de la dataclass Employee sin duplicados (si los hay).

<!-- END REF -->




<!-- REF EntitySelectionClass.add().Desc -->
## .add()

<details><summary>Histórico</summary>
| Versión | Modificaciones                            |
| ------- | ----------------------------------------- |
| v18 R5  | Only supports alterable entity selections |
| v17     | Añadidos                                  |
</details>


<!-- REF #EntitySelectionClass.add().Syntax -->
**.add**( *entity* : 4D.Entity ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.add().Params -->
| Parámetros | Tipo               |    | Descripción                                           |
| ---------- | ------------------ |:--:| ----------------------------------------------------- |
| entity     | 4D.Entity          | -> | Entidad que debe añadirse a la entity selection       |
| Resultado  | 4D.EntitySelection | -> | Selección de entidades incluyendo la *entity* añadida |
<!-- END REF -->


#### Descripción

La función `.add()` <!-- REF #EntitySelectionClass.add().Summary -->añade la *entity* especificada a la entity selection y devuelve la selección de entidades modificada<!-- END REF -->.
> Esta función modifica la entity selection original.

**Atención:** la entity selection debe ser *alterable*, es decir, ha sido creado, por ejemplo, por [`.newSelection()`](DataClassClass.md#newselection) o `Create entity selection`, de lo contrario `.add()` devolverá un error. Las entity selections compartibles no aceptan la adición de entidades. Para más información, consulte la sección [Entity selections compartibles o modificables ](ORDA/entities.md#shareable-or-alterable-entity-selections) section.


*   If the entity selection is ordered, *entity* is added at the end of the selection. If a reference to the same entity already belongs to the entity selection, it is duplicated and a new reference is added.
*   If the entity selection is unordered, *entity* is added anywhere in the selection, with no specific order.
> For more information, please refer to the [Ordered or unordered entity selection](ORDA/dsMapping.md#ordered-or-unordered-entity-selection) section.

La entity selection modificada es devuelta por la función, de modo que las llamadas a la función pueden encadenarse.

Se produce un error si *entity* y la entity selection no están relacionadas con la misma dataclass. Si *entity* es Null, no se produce ningún error.

#### Ejemplo 1

```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"S@")
 $employee:=ds.Employee.new()
 $employee.lastName:="Smith"
 $employee.save()
 $employees.add($employee) //La entidad $employee se añade a la entity selection $employees
```

#### Ejemplo 2

Las llamadas a la función se pueden encadenar:

```4d
 var $sel : cs.ProductSelection
 var $p1;$p2;$p3 : cs.ProductEntity

 $p1:=ds.Product.get(10)
 $p2:=ds.Product.get(11)
 $p3:=ds.Product.get(12)
 $sel:=ds.Product.query("ID > 50")
 $sel:=$sel.add($p1).add($p2).add($p3)
```

<!-- END REF -->


<!-- REF EntitySelectionClass.and().Desc -->
## .and()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17     | Añadidos       |
</details>

<!-- REF #EntitySelectionClass.and().Syntax -->
**.and**( *entity* : 4D.Entity ) : 4D.EntitySelection<br>**.and**( *entitySelection* : 4D.EntitySelection ) : 4D.EntitySelection<!-- END REF -->


<!-- REF #EntitySelectionClass.and().Params -->
| Parámetros      | Tipo               |    | Descripción                                                               |
| --------------- | ------------------ |:--:| ------------------------------------------------------------------------- |
| entity          | 4D.Entity          | -> | Entidad a intersectar                                                     |
| entitySelection | 4D.EntitySelection | -> | Entity selection a intersectar                                            |
| Resultado       | 4D.EntitySelection | <- | Entity selection resultante de la intersección con el operador lógico AND |
<!-- END REF -->


#### Descripción

La función `.and()` <!-- REF #EntitySelectionClass.and().Summary -->combina la entity selection con el parámetro *entity* o *entitySelection* utilizando el operador lógico AND<!-- END REF -->; devuelve una nueva entity selection no ordenada que contiene sólo las entidades a las que se hace referencia tanto en la entity selection y el parámetro.

*   If you pass *entity* as parameter, you combine this entity with the entity selection. If the entity belongs to the entity selection, a new entity selection containing only the entity is returned. Otherwise, an empty entity selection is returned.
*   If you pass *entitySelection* as parameter, you combine both entity selections. A new entity selection that contains only the entities that are referenced in both selections is returned. If there is no intersecting entity, an empty entity selection is returned.
> You can compare [ordered and/or unordered entity selections](ORDA/dsMapping.md#ordered-or-unordered-entity-selection). The resulting selection is always unordered.

Si la entity selection inicial o el parámetro *entitySelection* están vacíos, o si *entity* es Null, se devuelve una entity selection vacía.

Si la entity selection inicial y el parámetro no están relacionados con la misma dataclass, se produce un error.


#### Ejemplo 1


```4d
 var $employees; $result : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@")   
  //la entity selection $employees contiene la entidad
  //con la llave primaria 710 y otras entidades
  //por ejemplo. "Colin Hetrick" / "Grady Harness" / "Sherlock Holmes" (primary key 710)
 $employee:=ds.Employee.get(710) // Devuelve "Sherlock Holmes"

 $result:=$employees.and($employee) //$result es una selección de entidades que contiene   
  //sólo la entidad con llave primaria 710 ("Sherlock Holmes")
```


#### Ejemplo 2

Queremos tener una selección de empleados llamados "Jones" que vivan en Nueva York:

```4d
 var $sel1; $sel2; $sel3 : cs.EmployeeSelection
 $sel1:=ds.Employee.query("name =:1";"Jones")
 $sel2:=ds.Employee.query("city=:1";"New York")
 $sel3:=$sel1.and($sel2)
```

<!-- END REF -->


<!-- REF EntitySelectionClass.average().Desc -->
## .average()

<details><summary>Histórico</summary>
| Versión | Modificaciones                              |
| ------- | ------------------------------------------- |
| v18 R6  | Returns undefined if empty entity selection |
| v17     | Añadidos                                    |

</details>

<!-- REF #EntitySelectionClass.average().Syntax -->
**.average**( *attributePath* : Text ) : Real<!-- END REF -->

<!-- REF #EntitySelectionClass.average().Params -->
| Parámetros    | Tipo  |    | Descripción                                                                                                                 |
| ------------- | ----- |:--:| --------------------------------------------------------------------------------------------------------------------------- |
| attributePath | Texto | -> | Ruta del atributo a utilizar para el cálculo                                                                                |
| Resultado     | Real  | <- | Media aritmética (promedio) de los valores de las entidades para el atributo (No se define para una entity selection vacía) |
<!-- END REF -->

#### Descripción

La función `.average()` <!-- REF #EntitySelectionClass.average().Summary -->devuelve la media aritmética (promedio) de todos los valores no nulos de *attributePath* en la entity selection<!-- END REF -->.

Pase en el parámetro *attributePath* la ruta del atributo a evaluar.

Sólo se tienen en cuenta los valores numéricos para el cálculo. Tenga en cuenta, sin embargo, que si el *attributePath* de la selección de entidades contiene tipos de valores mixtos, `.average()` tiene en cuenta todos los elementos escalares para calcular el valor medio.
> Los valores de tipo Date se convierten en valores numéricos (segundos) y se utilizan para calcular la media.

`.average()` devuelve **undefined** si la entity selection está vacía o *attributePath* no contiene valores numéricos.

Se devuelve un error si:

*   *attributePath* is a related attribute,
*   *attributePath* designates an attribute that does not exist in the entity selection dataclass.


#### Ejemplo

Queremos obtener una lista de empleados cuyo salario es superior al salario medio:

```4d
 var $averageSalary : Real
 var $moreThanAv : cs.EmployeeSelection
 $averageSalary:=ds.Employee.all().average("salary")
 $moreThanAv:=ds.Employee.query("salary > :1";$averageSalary)
```

<!-- END REF -->



<!-- REF EntitySelectionClass.contains().Desc -->
## .contains()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17     | Añadidos       |

</details>

<!-- REF #EntitySelectionClass.contains().Syntax -->
**.contains**( *entity* : 4D.Entity ) : Boolean<!-- END REF -->

<!-- REF #EntitySelectionClass.contains().Params -->
| Parámetros | Tipo      |    | Descripción                                                               |
| ---------- | --------- |:--:| ------------------------------------------------------------------------- |
| entity     | 4D.Entity | -> | Entidad a evaluar                                                         |
| Resultado  | Booleano  | <- | True si la entidad pertenece a la entity selection, de lo contrario False |
<!-- END REF -->

#### Descripción

La función `.contains()` <!-- REF #EntitySelectionClass.contains().Summary -->devuelve true si la referencia de entidad pertenece a la entity selection<!-- END REF -->, y false en caso contrario.

En *entity*, especifique la entidad a buscar en la entity selection. Si la entidad es Null, la función devolverá false.

Si *entity* y la entity selection no pertenecen a la misma dataclass, se produce un error.

#### Ejemplo

```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity

 $employees:=ds.Employee.query("lastName=:1";"H@")
 $employee:=ds.Employee.get(610)

 If($employees.contains($employee))
    ALERT("La entidad con llave primaria 610 tiene un apellido que empieza por H")
 Else
    ALERT("La entidad con llave primaria 610 no tiene un apellido que empiece por H")
 End if
```

<!-- END REF -->



<!-- REF EntitySelectionClass.count().Desc -->
## .count()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17     | Añadidos       |

</details>

<!-- REF #EntitySelectionClass.count().Syntax -->
**.count**( *attributePath* : Text ) : Real<!-- END REF -->

<!-- REF #EntitySelectionClass.count().Params -->
| Parámetros    | Tipo  |    | Descripción                                                         |
| ------------- | ----- |:--:| ------------------------------------------------------------------- |
| attributePath | Texto | -> | Ruta del atributo que se utilizará para el cálculo                  |
| Resultado     | Real  | <- | Número de valores de *attributePath* no null en la entity selection |
<!-- END REF -->

#### Descripción

La función `.count()` <!-- REF #EntitySelectionClass.count().Summary -->devuelve el número de entidades en la entity selection con un valor no null en *attributePath*<!-- END REF -->.
> Sólo se tienen en cuenta los valores escalares. Los valores de tipo objeto o colección se consideran valores nulos.

Se devuelve un error si:

*   *attributePath* is a related attribute,
*   *attributePath* is not found in the entity selection dataclass.

#### Ejemplo

Queremos averiguar el número total de empleados de una empresa sin contar a los que no se les ha especificado el cargo:

```4d
 var $sel : cs.EmployeeSelection
 var $count : Real

 $sel:=ds.Employee.query("employer = :1";"Acme, Inc")
 $count:=$sel.count("jobtitle")
```

<!-- END REF -->


<!-- REF EntitySelectionClass.copy().Desc -->
## .copy()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R5  | Añadidos       |

</details>

<!-- REF #EntitySelectionClass.copy().Syntax -->
**.copy**( { *option* : Integer } ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.copy().Params -->
| Parámetros | Tipo               |    | Descripción                                            |
| ---------- | ------------------ |:--:| ------------------------------------------------------ |
| option     | Integer            | -> | `ck shared`: devuelve una entity selection compartible |
| Resultado  | 4D.EntitySelection | <- | Copia de la entity selection                           |
<!-- END REF -->

#### Descripción

The `.copy()` function <!-- REF #EntitySelectionClass.copy().Summary -->returns a copy of the original entity selection<!-- END REF -->.

> This function does not modify the original entity selection.

By default, if the *option* parameter is omitted, the function returns a new, alterable entity selection (even if the function is applied to a shareable entity selection). Pass the `ck shared` constant in the *option* parameter if you want to create a shareable entity selection.

> For information on the shareable property of entity selections, please refer to the [Shareable or alterable entity selections](ORDA/entities.md#shareable-or-alterable-entity-selections) section.

#### Ejemplo

You create a new, empty entity selection of products when the form is loaded:

```4d
 Case of
    :(Form event code=On Load)
       Form.products:=ds.Products.newSelection()
 End case

```

Then this entity selection is updated with products and you want to share the products between several processes. You copy the Form.products entity selection as a shareable one:

```4d
 ...
  // La selección de entidades de Form.products se actualiza
 Form.products.add(Form.selectedProduct)

 Use(Storage)
    If(Storage.products=Null)
       Storage.products:=New shared object()
    End if

    Use(Storage.products)
       Storage.products:=Form.products.copy(ck shared)
    End use
 End use
```

<!-- END REF -->


<!-- REF EntitySelectionClass.distinct().Desc -->
## .distinct()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17     | Añadidos       |

</details>

<!-- REF #EntitySelectionClass.distinct().Syntax -->
**.distinct**( *attributePath* : Text { ; *option* : Integer } ) : Collection<!-- END REF -->

<!-- REF #EntitySelectionClass.distinct().Params -->
| Parámetros    | Tipo       |    | Descripción                                                      |
| ------------- | ---------- |:--:| ---------------------------------------------------------------- |
| attributePath | Texto      | -> | Ruta del atributo cuyos valores distintos desea obtener          |
| option        | Integer    | -> | `dk diacritical`: diacritical evaluation ("A" # "a" for example) |
| Resultado     | Collection | <- | Colección con sólo valores distintos                             |
<!-- END REF -->

#### Descripción

The `.distinct()` function <!-- REF #EntitySelectionClass.distinct().Summary -->returns a collection containing only distinct (different) values from the *attributePath* in the entity selection<!-- END REF -->.

La colección devuelta se clasifica automáticamente. Los valores **Null** no se devuelven.

In the *attributePath* parameter, pass the entity attribute whose distinct values you want to get. Only scalar values (text, number, boolean, or date) can be handled. If the *attributePath* leads to an object property that contains values of different types, they are first grouped by type and sorted afterwards. Los tipos se devuelven en el siguiente orden:

1.  booleanos
2.  strings
3.  numbers
4.  fechas

You can use the `[]` notation to designate a collection when *attributePath* is a path within an object (see examples).

Por defecto, se realiza una evaluación no diacrítica. If you want the evaluation to be case sensitive or to differentiate accented characters, pass the `dk diacritical` constant in the *option* parameter.

Se devuelve un error si:

*   *attributePath* is a related attribute,
*   *attributePath* is not found in the entity selection dataclass.

#### Ejemplos

You want to get a collection containing a single element per country name:

```4d
 var $countries : Collection
 $countries:=ds.Employee.all().distinct("address.country")
```

`nicknames` is a collection and `extra` is an object attribute:

```4d
$values:=ds.Employee.all().distinct("extra.nicknames[].first")
```

<!-- END REF -->



<!-- REF EntitySelectionClass.drop().Desc -->
## .drop()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17     | Añadidos       |

</details>

<!-- REF #EntitySelectionClass.drop().Syntax -->
**.drop**( { *mode* : Integer } ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.drop().Params -->
| Parámetros | Tipo               |    | Descripción                                                                                      |
| ---------- | ------------------ |:--:| ------------------------------------------------------------------------------------------------ |
| mode       | Integer            | -> | `dk stop dropping on first error`: stops method execution on first non-droppable entity          |
| Resultado  | 4D.EntitySelection | <- | Empty entity selection if successful, else entity selection containing non-droppable entity(ies) |
<!-- END REF -->

#### Descripción

The `.drop()` function <!-- REF #EntitySelectionClass.drop().Summary -->removes the entities belonging to the entity selection from the table related to its dataclass within the datastore<!-- END REF -->. The entity selection remains in memory.
> Removing entities is permanent and cannot be undone. It is recommended to call this action in a transaction in order to have a rollback option.

If a locked entity is encountered during the execution of `.drop()`, it is not removed. By default, the method processes all entities of the entity selection and returns non-droppable entities in the entity selection. If you want the method to stop execution at the first encountered non-droppable entity, pass the `dk stop dropping on first error` constant in the *mode* parameter.

#### Ejemplo

Example without the `dk stop dropping on first error` option:

```4d
 var $employees; $notDropped : cs.EmployeeSelection
 $employees:=ds.Employee.query("firstName=:1";"S@")
 $notDropped:=$employees.drop() // $notDropped is an entity selection containing all the not dropped entities
 If($notDropped.length=0) //The delete action is successful, all the entities have been deleted
    ALERT("You have dropped "+String($employees.length)+" employees") //The dropped entity selection remains in memory
 Else
    ALERT("Problem during drop, try later")
 End if
```

Example with the `dk stop dropping on first error` option:

```4d
 var $employees; $notDropped : cs.EmployeeSelection
 $employees:=ds.Employee.query("firstName=:1";"S@")
 $notDropped:=$employees.drop(dk stop dropping on first error) //$notDropped is an entity selection containing the first not dropped entity
 If($notDropped.length=0) //The delete action is successful, all the entities have been deleted
    ALERT("You have dropped "+String($employees.length)+" employees") //The dropped entity selection remains in memory
 Else
    ALERT("Problem during drop, try later")
 End if
```


<!-- END REF -->



<!-- REF EntitySelectionClass.extract().Desc -->
## .extract()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R3  | Añadidos       |

</details>


<!-- REF #EntitySelectionClass.extract().Syntax -->**.extract**( *attributePath* : Text { ; *option* : Integer } ) : Collection<br>**.extract**( *attributePath* { ; *targetPath* } { ; *...attributePathN* : Text ; *targetPathN* : Text } ) : Collection<!-- END REF -->


<!-- REF #EntitySelectionClass.extract().Params -->
| Parámetros    | Tipo       |    | Descripción                                                                             |
| ------------- | ---------- |:--:| --------------------------------------------------------------------------------------- |
| attributePath | Texto      | -> | Attribute path whose values must be extracted to the new collection                     |
| targetPath    | Texto      | -> | Target attribute path or attribute name                                                 |
| option        | Integer    | -> | `ck keep null`: include null attributes in the returned collection (ignored by default) |
| Resultado     | Collection | <- | Collection containing extracted values                                                  |
<!-- END REF -->

#### Descripción

The `.extract()` function <!-- REF #EntitySelectionClass.extract().Summary -->returns a collection containing *attributePath* values extracted from the entity selection<!-- END REF -->.

*attributePath* can refer to:

*   a scalar dataclass attribute,
*   entidad relacionada,
*   entidades relacionadas.

If *attributePath* is invalid, an empty collection is returned.

This function accepts two syntaxes.

**.extract( attributePath : Text { ; option : Integer } ) : Collection**

With this syntax, `.extract()` populates the returned collection with the *attributePath* values of the entity selection.

By default, entities for which *attributePath* is *null* or undefined are ignored in the resulting collection. You can pass the `ck keep null` constant in the *option* parameter to include these values as **null** elements in the returned collection.

*   Dataclass attributes with [.kind](DataClassAttributeClass.md#kind) = "relatedEntity" are extracted as a collection of entities (duplications are kept).
*   Dataclass attributes with [.kind](DataClassAttributeClass.md#kind) = "relatedEntities" are extracted as a collection of entity selections.


**.extract ( attributePath ; targetPath { ; ...attributePathN ; ... targetPathN}) : Collection**

With this syntax, `.extract()` populates the returned collection with the *attributePath* properties. Each element of the returned collection is an object with *targetPath* properties filled with the corresponding *attributePath* properties. Null values are kept (*option* parameter is ignored with this syntax).

If several *attributePath* are given, a *targetPath* must be given for each. Only valid pairs \[*attributePath*, *targetPath*] are extracted.

*   Dataclass attributes with [.kind](DataClassAttributeClass.md#kind) = "relatedEntity" are extracted as an entity.
*   Dataclass attributes with [.kind](DataClassAttributeClass.md#kind) = "relatedEntities" are extracted as an entity selection.

> Entities of a collection of entities accessed by \[ ] are not reloaded from the database.


#### Ejemplo

Dada la siguiente tabla y relación:

![](assets/en/API/entityselection.PNG)

```4d
 var $firstnames; $addresses; $mailing; $teachers : Collection
  //
  //
  //$firstnames is a collection of Strings


 $firstnames:=ds.Teachers.all().extract("firstname")
  //
  //$addresses is a collection of entities related to dataclass Address
  //Null values for address are extracted
 $addresses:=ds.Teachers.all().extract("address";ck keep null)
  //
  //
  //$mailing is a collection of objects with properties "who" and "to"
  //"who" property content is String type 
  //"to" property content is entity type (Address dataclass)
 $mailing:=ds.Teachers.all().extract("lastname";"who";"address";"to")
  //
  //
  //$mailing is a collection of objects with properties "who" and "city"
  //"who" property content is String type 
  //"city" property content is String type 
 $mailing:=ds.Teachers.all().extract("lastname";"who";"address.city";"city")
  //
  //$teachers is a collection of objects with properties "where" and "who"
  //"where" property content is String
  //"who" property content is an entity selection (Teachers dataclass)
 $teachers:=ds.Address.all().extract("city";"where";"teachers";"who")
  //
  //$teachers is a collection of entity selections
 $teachers:=ds.Address.all().extract("teachers")
```

<!-- END REF -->



<!-- REF EntitySelectionClass.first().Desc -->
## .first()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17     | Añadidos       |

</details>

<!-- REF #EntitySelectionClass.first().Syntax -->
**.first()** : 4D.Entity<!-- END REF -->

<!-- REF #EntitySelectionClass.first().Params -->
| Parámetros | Tipo      |    | Descripción                                                                        |
| ---------- | --------- |:--:| ---------------------------------------------------------------------------------- |
| Resultado  | 4D.Entity | <- | Reference to the first entity of the entity selection (Null if selection is empty) |
<!-- END REF -->

#### Descripción

The `.first()` function <!-- REF #EntitySelectionClass.first().Summary -->returns a reference to the entity in the first position of the entity selection<!-- END REF -->.

The result of this function is similar to:

```4d
 $entity:=$entitySel[0]
```

There is, however, a difference between both statements when the selection is empty:


```4d
 var $entitySel : cs.EmpSelection
 var $entity : cs.EmpEntity
 $entitySel:=ds.Emp.query("lastName = :1";"Nonexistentname") //no matching entity
  //entity selection is then empty
 $entity:=$entitySel.first() //returns Null
 $entity:=$entitySel[0]  //generates an error
```

#### Ejemplo


```4d
 var $entitySelection : cs.EmpSelection
 var $entity : cs.EmpEntity
 $entitySelection:=ds.Emp.query("salary > :1";100000)
 If($entitySelection.length#0)
    $entity:=$entitySelection.first()
 End if
```

<!-- END REF -->



<!-- REF EntitySelectionClass.getDataClass().Desc -->
## .getDataClass()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |

</details>

<!-- REF #EntitySelectionClass.getDataClass().Syntax -->
**.getDataClass()** : 4D.DataClass<!-- END REF -->


<!-- REF #EntitySelectionClass.getDataClass().Params -->
| Parámetros | Tipo         |    | Descripción                                            |
| ---------- | ------------ |:--:| ------------------------------------------------------ |
| Resultado  | 4D.DataClass | <- | Dataclass object to which the entity selection belongs |
<!-- END REF -->

#### Descripción

The `.getDataClass()` function <!-- REF #EntitySelectionClass.getDataClass().Summary -->returns the dataclass of the entity selection<!-- END REF -->.

This function is mainly useful in the context of generic code.

#### Ejemplo

The following generic code duplicates all entities of the entity selection:

```4d
  //método duplicate_entities 
  //duplicate_entities($entity_selection)

 #DECLARE ( $entitySelection : 4D.EntitySelection )  
 var $dataClass : 4D.DataClass
 var $entity; $duplicate : 4D.Entity
 var $status : Object
 $dataClass:=$entitySelection.getDataClass()
 For each($entity;$entitySelection)
    $duplicate:=$dataClass.new()
    $duplicate.fromObject($entity.toObject())
    $duplicate[$dataClass.getInfo().primaryKey]:=Null //restablecer la llave primaria
    $status:=$duplicate.save()
 End for each
```

<!-- END REF -->


<!-- REF EntitySelectionClass.isAlterable().Desc -->
## .isAlterable()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v18 R5  | Añadidos       |

</details>

<!-- REF #EntitySelectionClass.isAlterable().Syntax -->
**.isAlterable()** : Boolean<!-- END REF -->

<!-- REF #EntitySelectionClass.isAlterable().Params -->
| Parámetros | Tipo     |    | Descripción                                                |
| ---------- | -------- |:--:| ---------------------------------------------------------- |
| Resultado  | Booleano | <- | True if the entity selection is alterable, False otherwise |
<!-- END REF -->

#### Descripción

The `.isAlterable()` function <!-- REF #EntitySelectionClass.isAlterable().Summary -->returns True if the entity selection is alterable<!-- END REF -->, and False if the entity selection is not alterable.

For more information, please refer to [Shareable or alterable entity selections](ORDA/entities.md#shareable-or-alterable-entity-selections).

#### Ejemplo

You are about to display `Form.products` in a [list box](FormObjects/listbox_overview.md) to allow the user to add new products. You want to make sure it is alterable so that the user can add new products without error:

```4d
If (Not(Form.products.isAlterable()))
    Form.products:=Form.products.copy()
End if
...
Form.products.add(Form.product)
```


<!-- END REF -->


<!-- REF EntitySelectionClass.isOrdered().Desc -->
## .isOrdered()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v17     | Añadidos       |

</details>

<!-- REF #EntitySelectionClass.isOrdered().Syntax -->
**.isOrdered()** : Boolean<!-- END REF -->

<!-- REF #EntitySelectionClass.isOrdered().Params -->
| Parámetros | Tipo     |    | Descripción                                              |
| ---------- | -------- |:--:| -------------------------------------------------------- |
| Resultado  | Booleano | <- | True if the entity selection is ordered, False otherwise |
<!-- END REF -->

#### Descripción

The `.isOrdered()` function <!-- REF #EntitySelectionClass.isOrdered().Summary -->returns True if the entity selection is ordered<!-- END REF -->, and False if it is unordered.
> This function always returns True when the entity selection comes from a remote datastore.

For more information, please refer to [Ordered or unordered entity selection](ORDA/dsMapping.md#ordered-or-unordered-entity-selection).


#### Ejemplo


```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 var $isOrdered : Boolean
 $employees:=ds.Employee.newSelection(dk keep ordered)
 $employee:=ds.Employee.get(714) // Gets the entity with primary key 714

  //In an ordered entity selection, we can add the same entity several times (duplications are kept)
 $employees.add($employee)
 $employees.add($employee)
 $employees.add($employee)

 $isOrdered:=$employees.isOrdered()
 If($isOrdered)
    ALERT("The entity selection is ordered and contains "+String($employees.length)+" employees")
 End if
```



<!-- END REF -->


<!-- REF EntitySelectionClass.last().Desc -->
## .last()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17     | Añadidos       |

</details>

<!-- REF #EntitySelectionClass.last().Syntax -->
**.last()** : 4D.Entity<!-- END REF -->

<!-- REF #EntitySelectionClass.last().Params -->
| Parámetros | Tipo      |    | Descripción                                                                           |
| ---------- | --------- |:--:| ------------------------------------------------------------------------------------- |
| Resultado  | 4D.Entity | <- | Reference to the last entity of the entity selection (Null if empty entity selection) |
<!-- END REF -->

#### Descripción

The `.last()` function <!-- REF #EntitySelectionClass.last().Summary -->returns a reference to the entity in last position of the entity selection<!-- END REF -->.

The result of this function is similar to:

```4d
 $entity:=$entitySel[length-1]
```

If the entity selection is empty, the function returns Null.


#### Ejemplo


```4d
 var $entitySelection : cs.EmpSelection
 var $entity : cs.EmpEntity
 $entitySelection:=ds.Emp.query("salary < :1";50000)
 If($entitySelection.length#0)
    $entity:=$entitySelection.last()
 End if
```

<!-- END REF -->



<!-- REF EntitySelectionClass.length.Desc -->
## .length

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17     | Añadidos       |

</details>

<!-- REF #EntitySelectionClass.length.Syntax -->
**.length**: Integer<!-- END REF -->


#### Descripción

The `.length` property <!-- REF #EntitySelectionClass.length.Summary -->returns the number of entities in the entity selection<!-- END REF -->. If the entity selection is empty, it returns 0.

Entity selections always have a `.length` property.


#### Ejemplo

```4d
 var $vSize : Integer
 $vSize:=ds.Employee.query("gender = :1";"male").length
 ALERT(String(vSize)+" male employees found.")
```


<!-- END REF -->


<!-- REF EntitySelectionClass.max().Desc -->
## .max()

<details><summary>Histórico</summary>
| Versión | Modificaciones                              |
| ------- | ------------------------------------------- |
| v17     | Añadidos                                    |
| v18 R6  | Returns undefined if empty entity selection |

</details>

<!-- REF #EntitySelectionClass.max().Syntax -->
**.max**( *attributePath* : Text ) : any<!-- END REF -->


<!-- REF #EntitySelectionClass.max().Params -->
| Parámetros    | Tipo  |    | Descripción                                        |
| ------------- | ----- |:--:| -------------------------------------------------- |
| attributePath | Texto | -> | Ruta del atributo que se utilizará para el cálculo |
| Resultado     | any   | <- | Highest value of attribute                         |
<!-- END REF -->

#### Descripción

The `.max()` function <!-- REF #EntitySelectionClass.max().Summary -->returns the highest (or maximum) value among all the values of *attributePath* in the entity selection<!-- END REF -->. It actually returns the value of the last entity of the entity selection as it would be sorted in ascending order using the [`.orderBy()`](#orderby) function.

If you pass in *attributePath* a path to an object property containing different types of values, the `.max()` function will return the maximum value within the first scalar type in the default 4D type list order (see [`.sort()`](CollectionClass.md#sort) description).

`.max()` returns **undefined** if the entity selection is empty or *attributePath* is not found in the object attribute.


Se devuelve un error si:

*   *attributePath* is a related attribute,
*   *attributePath* designates an attribute that does not exist in the entity selection dataclass.



#### Ejemplo

We want to find the highest salary among all the female employees:

```4d
 var $sel : cs.EmpSelection
 var $maxSalary : Real
 $sel:=ds.Employee.query("gender = :1";"female")
 $maxSalary:=$sel.max("salary")
```

<!-- END REF -->


<!-- REF EntitySelectionClass.min().Desc -->
## .min()

<details><summary>Histórico</summary>
| Versión | Modificaciones                              |
| ------- | ------------------------------------------- |
| v17     | Añadidos                                    |
| v18 R6  | Returns undefined if empty entity selection |


</details>

<!-- REF #EntitySelectionClass.min().Syntax -->
**.min**( *attributePath* : Text ) : any<!-- END REF -->

<!-- REF #EntitySelectionClass.min().Params -->
| Parámetros    | Tipo  |    | Descripción                                        |
| ------------- | ----- |:--:| -------------------------------------------------- |
| attributePath | Texto | -> | Ruta del atributo que se utilizará para el cálculo |
| Resultado     | any   | <- | Lowest value of attribute                          |
<!-- END REF -->

#### Descripción

The `.min()` function <!-- REF #EntitySelectionClass.min().Summary --> returns the lowest (or minimum) value among all the values of attributePath in the entity selection<!-- END REF -->.  It actually returns the first entity of the entity selection as it would be sorted in ascending order using the [`.orderBy()`](#orderby) function (excluding **null** values).

If you pass in *attributePath* a path to an object property containing different types of values, the `.min()` function will return the minimum value within the first scalar value type in the type list order (see [`.sort()`](CollectionClass.md#sort) description).

`.min()` returns **undefined** if the entity selection is empty or *attributePath* is not found in the object attribute.

Se devuelve un error si:

*   *attributePath* is a related attribute,
*   *attributePath* designates an attribute that does not exist in the entity selection dataclass.


#### Ejemplo

In this example, we want to find the lowest salary among all the female employees:

```4d
 var $sel : cs.EmpSelection
 var $minSalary : Real
 $sel:=ds.Employee.query("gender = :1";"female")
 $minSalary:=$sel.min("salary")
```

<!-- END REF -->


<!-- REF EntitySelectionClass.minus().Desc -->
## .minus()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17     | Añadidos       |

</details>

<!-- REF #EntitySelectionClass.minus().Syntax -->
**.minus**( *entity* : 4D.Entity ) : 4D.EntitySelection<br>**.minus**( *entitySelection* : 4D.EntitySelection ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.minus().Params -->
| Parámetros      | Tipo               |    | Descripción                                                              |
| --------------- | ------------------ |:--:| ------------------------------------------------------------------------ |
| entity          | 4D.Entity          | -> | Entidad a sustraer                                                       |
| entitySelection | 4D.EntitySelection | -> | Entity selection to substract                                            |
| Resultado       | 4D.EntitySelection | <- | New entity selection or a new reference on the existing entity selection |
<!-- END REF -->

#### Descripción

The `.minus()` function <!-- REF #EntitySelectionClass.minus().Summary -->excludes from the entity selection to which it is applied the *entity* or the entities of *entitySelection* and returns the resulting entity selection<!-- END REF -->.

*   If you pass *entity* as parameter, the function creates a new entity selection without *entity* (if *entity* belongs to the entity selection). If *entity* was not included in the original entity selection, a new reference to the entity selection is returned.
*   If you pass *entitySelection* as parameter, the function returns an entity selection containing the entities belonging to the original entity selection without the entities belonging to *entitySelection*.
> You can compare [ordered and/or unordered entity selections](ORDA/dsMapping.md#ordered-or-unordered-entity-selection). The resulting selection is always unordered.

If the original entity selection or both the original entity selection and the *entitySelection* parameter are empty, an empty entity selection is returned.

If *entitySelection* is empty or if *entity* is Null, a new reference to the original entity selection is returned.

Si la entity selection inicial y el parámetro no están relacionados con la misma dataclass, se produce un error.


#### Ejemplo 1

```4d
 var $employees; $result : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity

 $employees:=ds.Employee.query("lastName = :1";"H@") 
  // The $employees entity selection contains the entity with primary key 710 and other entities
  // for ex. "Colin Hetrick", "Grady Harness", "Sherlock Holmes" (primary key 710)

 $employee:=ds.Employee.get(710) // Devuelve "Sherlock Holmes"

 $result:=$employees.minus($employee) //$result contiene "Colin Hetrick", "Grady Harness"
```


#### Ejemplo 2

We want to have a selection of female employees named "Jones" who live in New York :

```4d
 var $sel1; $sel2; $sel3 : cs.EmployeeSelection
 $sel1:=ds.Employee.query("name =:1";"Jones")
 $sel2:=ds.Employee.query("city=:1";"New York")
 $sel3:=$sel1.and($sel2).minus(ds.Employee.query("gender='male'"))
```

<!-- END REF -->


<!-- REF EntitySelectionClass.or().Desc -->
## .or()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17     | Añadidos       |

</details>

<!-- REF #EntitySelectionClass.or().Syntax -->
**.or**( *entity* : 4D.Entity ) : 4D.EntitySelection<br>**.or**( *entitySelection* : 4D.EntitySelection ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.or().Params -->
| Parámetros      | Tipo               |    | Descripción                                                            |
| --------------- | ------------------ |:--:| ---------------------------------------------------------------------- |
| entity          | 4D.Entity          | -> | Entidad a intersectar                                                  |
| entitySelection | 4D.EntitySelection | -> | Entity selection a intersectar                                         |
| Resultado       | 4D.EntitySelection | <- | New entity selection or new reference to the original entity selection |
<!-- END REF -->

#### Descripción

The `.or()` function <!-- REF #EntitySelectionClass.or().Summary -->combines the entity selection with the *entity* or *entitySelection* parameter using the logical (not exclusive) OR operator<!-- END REF -->; it returns a new, unordered entity selection that contains all the entities from the entity selection and the parameter.

*   If you pass *entity* as parameter, you compare this entity with the entity selection. If the entity belongs to the entity selection, a new reference to the entity selection is returned. Otherwise, a new entity selection containing the original entity selection and the entity is returned.
*   If you pass *entitySelection* as parameter, you compare entity selections. A new entity selection containing the entities belonging to the original entity selection or *entitySelection* is returned (or is not exclusive, entities referenced in both selections are not duplicated in the resulting selection).
> You can compare [ordered and/or unordered entity selections](ORDA/dsMapping.md#ordered-or-unordered-entity-selection). The resulting selection is always unordered.

If the original entity selection and the *entitySelection* parameter are empty, an empty entity selection is returned. If the original entity selection is empty, a reference to *entitySelection* or an entity selection containing only *entity* is returned.

If *entitySelection* is empty or if *entity* is Null, a new reference to the original entity selection is returned.

Si la entity selection inicial y el parámetro no están relacionados con la misma dataclass, se produce un error.


#### Ejemplo 1

```4d
 var $employees1; $employees2; $result : cs.EmployeeSelection
 $employees1:=ds.Employee.query("lastName = :1";"H@") //Returns "Colin Hetrick","Grady Harness"
 $employees2:=ds.Employee.query("firstName = :1";"C@") //Returns "Colin Hetrick", "Cath Kidston"
 $result:=$employees1.or($employees2) //$result contains "Colin Hetrick", "Grady Harness","Cath Kidston"
```

#### Ejemplo 2

```4d
 var $employees; $result : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@") // Returns "Colin Hetrick","Grady Harness", "Sherlock Holmes"
 $employee:=ds.Employee.get(686) //the entity with primary key 686 does not belong to the $employees entity selection
  //It matches the employee "Mary Smith"

 $result:=$employees.or($employee) //$result contains "Colin Hetrick", "Grady Harness", "Sherlock Holmes", "Mary Smith"
```

<!-- END REF -->


<!-- REF EntitySelectionClass.orderBy().Desc -->
## .orderBy()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17     | Añadidos       |

</details>

<!-- REF #EntitySelectionClass.orderBy().Syntax -->
**.orderBy**( *pathString* : Text ) : 4D.EntitySelection<br>**.orderBy**( *pathObjects* : Collection ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.orderBy().Params -->
| Parámetros  | Tipo               |    | Descripción                                                           |
| ----------- | ------------------ |:--:| --------------------------------------------------------------------- |
| pathString  | Texto              | -> | Attribute path(s) and sorting instruction(s) for the entity selection |
| pathObjects | Collection         | -> | Collection of criteria objects                                        |
| Resultado   | 4D.EntitySelection | <- | New entity selection in the specified order                           |
<!-- END REF -->

#### Descripción

The `.orderBy()` function <!-- REF #EntitySelectionClass.orderBy().Summary -->returns a new ordered entity selection containing all entities of the entity selection in the order specified by *pathString* or *pathObjects* criteria<!-- END REF -->.
> * This method does not modify the original entity selection.
*   For more information, please refer to the [Ordered or unordered entity selection](ORDA/dsMapping.md#ordered-or-unordered-entity-selection) section.

You must use a criteria parameter to define how the entities must be sorted. Two different parameters are supported:

*   *pathString* (Text) : This parameter contains a formula made of 1 to x attribute paths and (optionally) sort orders, separated by commas. La sintaxis es:

```4d
"attributePath1 {desc or asc}, attributePath2 {desc or asc},..."
```

The order in which the attributes are passed determines the sorting priority of the entities. By default, attributes are sorted in ascending order. You can set the sort order of a property in the criteria string, separated from the property path by a single space: pass "asc" to sort in ascending order or "desc" in descending order.

*   *pathObjects* (collection): each element of the collection contains an object structured in the following way:

```4d
{
    "propertyPath": string,
    "descending": boolean
}
```

By default, attributes are sorted in ascending order ("descending" is false).

You can add as many objects in the criteria collection as necessary.
> Null values are evaluated as less than other values.

#### Ejemplo


```4d
// order by formula
 $sortedEntitySelection:=$entitySelection.orderBy("firstName asc, salary desc")
 $sortedEntitySelection:=$entitySelection.orderBy("firstName")

  // order by collection with or without sort orders
 $orderColl:=New collection
 $orderColl.push(New object("propertyPath";"firstName";"descending";False))
 $orderColl.push(New object("propertyPath";"salary";"descending";True))
 $sortedEntitySelection:=$entitySelection.orderBy($orderColl)

 $orderColl:=New collection
 $orderColl.push(New object("propertyPath";"manager.lastName"))
 $orderColl.push(New object("propertyPath";"salary"))
 $sortedEntitySelection:=$entitySelection.orderBy($orderColl)
```


<!-- END REF -->


<!-- REF EntitySelectionClass.orderByFormula().Desc -->
## .orderByFormula( )

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R6  | Añadidos       |

</details>

<!-- REF #EntitySelectionClass.orderByFormula().Syntax -->
**.orderByFormula**( *formulaString* : Text { ; *sortOrder* : Integer } { ; *settings* : Object} ) : 4D.EntitySelection<br>**.orderByFormula**( *formulaObj* : Object { ; *sortOrder* : Integer } { ; *settings* : Object} ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.orderByFormula().Params -->
| Parámetros    | Tipo               |    | Descripción                                 |
| ------------- | ------------------ |:--:| ------------------------------------------- |
| formulaString | Texto              | -> | Formula string                              |
| formulaObj    | Objeto             | -> | Formula object                              |
| sortOrder     | Integer            | -> | `dk ascending` (default) or `dk descending` |
| parámetros    | Objeto             | -> | Parameter(s) for the formula                |
| Resultado     | 4D.EntitySelection | <- | New ordered entity selection                |
<!-- END REF -->

#### Descripción

The `.orderByFormula()` function <!-- REF #EntitySelectionClass.orderByFormula().Summary -->returns a new, ordered entity selection<!-- END REF --> containing all entities of the entity selection in the order defined through the *formulaString* or *formulaObj* and, optionally, *sortOrder* and *settings* parameters.
> This function does not modify the original entity selection.

You can use either a *formulaString* or a *formulaObj* parameter:

- *formulaString*: you pass a 4D expression such as "Year of(this.birthDate)".
- *formulaObj*: pass a valid formula object created using the `Formula` or `Formula from string` command.

The *formulaString* or *formulaObj* is executed for each entity of the entity selection and its result is used to define the position of the entity in the returned entity selection. The result must be of a sortable type (boolean, date, number, text, time, null).
> A null result is always the smallest value.

By default if you omit the *sortOrder* parameter, the resulting entity selection is sorted in ascending order. Optionnally, you can pass one of the following values in the *sortOrder* parameter:

| Constante     | Valor | Comentario                     |
| ------------- | ----- | ------------------------------ |
| dk ascending  | 0     | Ascending sort order (default) |
| dk descending | 1     | Orden descendente              |

Within the *formulaString* or *formulaObj*, the processed entity and thus its attributes are available through the `This` command (for example, `This.lastName`).

You can pass parameter(s) to the formula using the `args` property (object) of the `settings` parameter: the formula receives the `settings.args` object in $1.

#### Ejemplo 1

Sorting students using a formula provided as text:

```4d
 var $es1; $es2 : cs.StudentsSelection
 $es1:=ds.Students.query("nationality=:1";"French")
 $es2:=$es1.orderByFormula("length(this.lastname)") //ascending by default
 $es2:=$es1.orderByFormula("length(this.lastname)";dk descending)
```

Same sort order but using a formula object:

```4d
 var $es1; $es2 : cs.StudentsSelection
 var $formula : Object
 $es1:=ds.Students.query("nationality=:1";"French")
 $formula:=Formula(Length(This.lastname))
 $es2:=$es1.orderByFormula($formula) // ascending by default
 $es2:=$es1.orderByFormula($formula;dk descending)
```


#### Ejemplo 2

A formula is given as a formula object with parameters; `settings.args` object is received as $1 in the ***computeAverage*** method.

In this example, the "marks" object field in the **Students** dataClass contains students' grades for each subject. A single formula object is used to compute a student's average grade with different coefficients for schoolA and schoolB.

```4d
 var $es1; $es2 : cs.StudentsSelection
 var $formula; $schoolA; $schoolB : Object
 $es1:=ds.Students.query("nationality=:1";"French")
 $formula:=Formula(computeAverage($1))

 $schoolA:=New object() //settings object
 $schoolA.args:=New object("english";1;"math";1;"history";1) // Coefficients to compute an average

  //Order students according to school A criteria
 $es2:=$es1.entitySelection.orderByFormula($formula;$schoolA)

 $schoolB:=New object() //settings object
 $schoolB.args:=New object("english";1;"math";2;"history";3) // Coefficients to compute an average

  //Order students according to school B criteria
 $es2:=$es1.entitySelection.orderByFormula($formula;dk descending;$schoolB)
```

```4d
  //
  // computeAverage method
  // -----------------------------
 #DECLARE ($coefList : Object) -> $result : Integer
 var $subject : Text
 var $average; $sum : Integer

 $average:=0
 $sum:=0

 For each($subject;$coefList)
    $sum:=$sum+$coefList[$subject]
 End for each

 For each($subject;This.marks)
    $average:=$average+(This.marks[$subject]*$coefList[$subject])
 End for each

 $result:=$average/$sum
```

<!-- END REF -->



<!-- REF EntitySelectionClass.query().Desc -->
## .query()

<details><summary>Histórico</summary>
| Versión | Modificaciones                     |
| ------- | ---------------------------------- |
| v17 R6  | Support of Formula parameters      |
| v17 R5  | Support of placeholders for values |
| v17     | Añadidos                           |

</details>

<!-- REF #EntitySelectionClass.query().Syntax -->
**.query**( *queryString* : Text { ; *...value* : any } { ; *querySettings* : Object } ) : 4D.EntitySelection <br>**.query**( *formula* : Object { ; *querySettings* : Object } ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.query().Params -->
| Parámetros    | Tipo               |    | Descripción                                                                                                                                                   |
| ------------- | ------------------ |:--:| ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| queryString   | Texto              | -> | Criterios de búsqueda como cadena                                                                                                                             |
| formula       | Objeto             | -> | Criterios de búsqueda como objeto fórmula                                                                                                                     |
| value         | any                | -> | Valor(es) a utilizar para los marcadores de posición indexados                                                                                                |
| querySettings | Objeto             | -> | Opciones de búsqueda: parameters, attributes, args, allowFormulas, context, queryPath, queryPlan                                                              |
| Resultado     | 4D.EntitySelection | <- | New entity selection made up of entities from entity selection meeting the search criteria specified in *queryString* or *formula*|<!-- END REF -->

|

#### Descripción

The `.query()` function <!-- REF #EntitySelectionClass.query().Summary -->searches for entities that meet the search criteria specified in *queryString* or *formula* and (optionally) *value*(s) among all the entities in the entity selection<!-- END REF -->, and returns a new object of type `EntitySelection` containing all the entities that are found. Se aplica carga diferida.
> This function does not modify the original entity selection.

Si no se encuentran entidades coincidentes, se devuelve una `EntitySelection` vacía.

For detailed information on how to build a query using *queryString*, *value*, and *querySettings* parameters, please refer to the DataClass [`.query()`](DataClassClass.md#query) function description.
> By default if you omit the **order by** statement in the *queryString*, the returned entity selection is [not ordered](ORDA/dsMapping.md#ordered-or-unordered-entity-selection). Note however that, in Client/Server mode, it behaves like an ordered entity selection (entities are added at the end of the selection).

#### Ejemplo 1


```4d
 var $entitySelectionTemp : cs.EmployeeSelection
 $entitySelectionTemp:=ds.Employee.query("lastName = :1";"M@")
 Form.emps:=$entitySelectionTemp.query("manager.lastName = :1";"S@")
```


#### Ejemplo 2

More examples of queries can be found in the DataClass [`.query()`](DataClassClass.md#query) page.

#### Ver también

[`.query()`](DataClassClass.md#query) for dataclass

<!-- END REF -->



<!-- REF EntitySelectionClass.queryPath.Desc -->
## .queryPath

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17     | Añadidos       |

</details>

<!-- REF #EntitySelectionClass.queryPath.Syntax -->
**.queryPath** : Text<!-- END REF -->


#### Descripción

The `.queryPath` property <!-- REF #EntitySelectionClass.queryPath.Summary -->contains a detailed description of the query as it was actually performed by 4D<!-- END REF -->. This property is available for `EntitySelection` objects generated through queries if the `"queryPath":true` property was passed in the *querySettings* parameter of the [`.query()`](#query) function.

For more information, refer to the **querySettings parameter** paragraph in the Dataclass[`.query()`](DataClassClass.html#query) page. 

<!-- END REF -->



<!-- REF EntitySelectionClass.queryPlan.Desc -->
## .queryPlan

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17     | Añadidos       |

</details>

<!-- REF #EntitySelectionClass.queryPlan.Syntax -->
**.queryPlan** : Text<!-- END REF -->


#### Descripción

The `.queryPlan` property <!-- REF #EntitySelectionClass.queryPlan.Summary --> contains a detailed description of the query just before it is executed (i.e., the planned query)<!-- END REF -->. This property is available for `EntitySelection` objects generated through queries if the `"queryPlan":true` property was passed in the *querySettings* parameter of the [`.query()`](#query) function.

For more information, refer to the **querySettings parameter** paragraph in the Dataclass[`.query()`](DataClassClass.html#query) page. 

<!-- END REF -->


<!-- REF EntitySelectionClass.refresh().Desc -->
## .refresh()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R3  | Añadidos       |

</details>

<!-- REF #EntitySelectionClass.refresh().Syntax -->
**.refresh()**<!-- END REF -->

<!-- REF #EntitySelectionClass.refresh().Params -->
| Parámetros | Tipo |  | Descripción                  |
| ---------- | ---- |::| ---------------------------- |
|            |      |  | No requiere ningún parámetro |
<!-- END REF -->

#### Descripción
> This function only works with a remote datastore (client / server or `Open datastore` connection).

The `.refresh()` function <!-- REF #EntitySelectionClass.refresh().Summary -->immediately "invalidates" the entity selection data in the local ORDA cache<!-- END REF --> so that the next time 4D requires the entity selection, it will be reloaded from the database.

By default, the local ORDA cache is invalidated after 30 seconds. In the context of client / server applications using both ORDA and the classic language, this method allows you to make sure a remote application will always work with the latest data.

#### Ejemplo 1

In this example, classic and ORDA code modify the same data simultaneously:

```4d
 //On a 4D remote

 var $selection : cs.StudentsSelection
 var $student : cs.StudentsEntity

 $selection:=ds.Students.query("lastname=:1";"Collins")
  //The first entity is loaded in the ORDA cache
 $student:=$selection.first()

  //Update with classic 4D, ORDA cache is not aware of if
 QUERY([Students];[Students]lastname="Collins")
 [Students]lastname:="Colin"
 SAVE RECORD([Students])

  //to get the latest version, the ORDA cache must be invalidated
 $selection.refresh()
  // Even if cache is not expired, the first entity is reloaded from disk
 $student:=$selection.first()

  //$student.lastname contains "Colin"
```


#### Ejemplo 2

A list box displays the Form.students entity selection and several clients work on it.

```4d
// Form method:
 Case of
    :(Form event code=On Load)
       Form.students:=ds.Students.all()
 End case
  //
  //
  // On client #1, the user loads, updates, and saves the first entity
  // On client #2, the user loads, updates, and saves the same entity
  //
  //
  // On client #1:
 Form.students.refresh() // Invalidates the ORDA cache for the Form.students entity selection
  // The list box content is refreshed from the database with update made by client #2
```


<!-- END REF -->


<!-- REF EntitySelectionClass.selected().Desc -->
## .selected()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v19 R3  | Añadidos       |

</details>

<!-- REF #EntitySelectionClass.selected().Syntax -->
**.selected**( *selectedEntities* : 4D.EntitySelection ) : Object<!-- END REF -->

<!-- REF #EntitySelectionClass.selected().Params -->
| Parámetros       | Tipo               |    | Descripción                                                                                        |
| ---------------- | ------------------ |:--:| -------------------------------------------------------------------------------------------------- |
| selectedEntities | 4D.EntitySelection | -> | Selección de entidades con entidades para las cuales conocer el rango en la selección de entidades |
| Resultado        | Objeto             | <- | Rango(s) de entidades seleccionadas en la selección de entidades                                   |
<!-- END REF -->

#### Descripción

La función `.selected()` <!-- REF #EntitySelectionClass.selected().Summary -->devuelve un objeto que describe la(s) posición(es) de *selectedEntities* en la selección de entidades original<!-- END REF -->.
> This function does not modify the original entity selection.

Pase en el parámetro *selectedEntities* una selección de entidades que contenga entidades de las que desee conocer la posición en la selección de entidades original. *selectedEntities* debe ser una selección de entidades que pertenezca a la misma clase de datos que la selección de entidades original, de lo contrario se produce un error 1587 - "La selección de entidades procede de una clase de datos incompatible".

#### Resultado

El objeto devuelto contiene las siguientes propiedades:

| Propiedad      | Tipo       | Descripción                             |
| -------------- | ---------- | --------------------------------------- |
| ranges         | Collection | Colección de objetos de rango           |
| ranges[].start | Integer    | Primer índice de entidad en el rango    |
| ranges[].end   | Integer    | Último índice de la entidad en el rango |

Si una propiedad `ranges` contiene una sola entidad, `start` = `end`. El índice comienza en 0.

La función devuelve una colección vacía en la propiedad `ranges` si la selección de entidades original o la selección de entidades *selectedEntities* está vacía.

#### Ejemplo

```4d
var $invoices; $cashSel; $creditSel : cs.Invoices
var $result1; $result2 : Object

$invoices:=ds.Invoices.all()

$cashSelection:=ds.Invoices.query("payment = :1"; "Cash")
$creditSel:=ds.Invoices.query("payment IN :1"; New collection("Cash"; "Credit Card"))

$result1:=$invoices.selected($cashSelection)
$result2:=$invoices.selected($creditSel)

//$result1 = {ranges:[{start:0;end:0},{start:3;end:3},{start:6;end:6}]}
//$result2 = {ranges:[{start:0;end:1},{start:3;end:4},{start:6;end:7}]}

```

<!-- END REF -->







<!-- REF EntitySelectionClass.slice().Desc -->
## .slice()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17     | Añadidos       |

</details>

<!-- REF #EntitySelectionClass.slice().Syntax -->
**.slice**( *startFrom* : Integer { ; *end* : Integer } ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.slice().Params -->
| Parámetros | Tipo               |    | Descripción                                                    |
| ---------- | ------------------ |:--:| -------------------------------------------------------------- |
| startFrom  | Integer            | -> | Index to start the operation at (included)                     |
| end        | Integer            | -> | Índice final (no incluido)                                     |
| Resultado  | 4D.EntitySelection | <- | New entity selection containing sliced entities (shallow copy) |
<!-- END REF -->

#### Descripción

The `.slice()` function <!-- REF #EntitySelectionClass.slice().Summary -->returns a portion of an entity selection into a new entity selection<!-- END REF -->, selected from the *startFrom* index to the *end* index (*end* is not included) or to the last entity of the entity selection. This method returns a shallow copy of the entity selection (it uses the same entity references).
> This function does not modify the original entity selection.

The returned entity selection contains the entities specified by *startFrom* and all subsequent entities up to, but not including, the entity specified by *end*. If only the *startFrom* parameter is specified, the returned entity selection contains all entities from *startFrom* to the last entity of the original entity selection.

*   If *startFrom* < 0, it is recalculated as *startFrom:=startFrom+length* (it is considered as the offset from the end of the entity selection). If the calculated value < 0, *startFrom* is set to 0.
*   If *startFrom >= length*, the function returns an empty entity selection.
*   If *end* < 0, it is recalculated as *end:=end+length*.
*   If *end < startFrom* (passed or calculated values), the method does nothing.

If the entity selection contains entities that were dropped in the meantime, they are also returned.

#### Ejemplo 1

You want to get a selection of the first 9 entities of the entity selection:

```4d
var $sel; $sliced : cs.EmployeeSelection
$sel:=ds.Employee.query("salary > :1";50000)
$sliced:=$sel.slice(0;9) //
```


#### Ejemplo 2

Assuming we have ds.Employee.all().length = 10

```4d
var $slice : cs.EmployeeSelection
$slice:=ds.Employee.all().slice(-1;-2) //tries to return entities from index 9 to 8, but since 9 > 8, returns an empty entity selection

```

<!-- END REF -->


<!-- REF EntitySelectionClass.sum().Desc -->
## .sum( )

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17     | Añadidos       |


</details>

<!-- REF #EntitySelectionClass.sum().Syntax -->
**.sum**( *attributePath* : Text ) : Real<!-- END REF -->

<!-- REF #EntitySelectionClass.sum().Params -->
| Parámetros    | Tipo  |    | Descripción                                        |
| ------------- | ----- |:--:| -------------------------------------------------- |
| attributePath | Texto | -> | Ruta del atributo que se utilizará para el cálculo |
| Resultado     | Real  | <- | Sum of entity selection values                     |
<!-- END REF -->

#### Descripción


The `.sum()` function <!-- REF #EntitySelectionClass.sum().Summary -->returns the sum for all *attributePath* values in the entity selection<!-- END REF -->.

`.sum()` returns 0 if the entity selection is empty.

The sum can only be done on values of number type. The sum can only be done on values of number type. In this case, if *attributePath* leads to a property that does not exist in the object or does not contain any numeric values, `.sum()` returns 0.

Se devuelve un error si:

*   *attributePath* is not a numerical or an object attribute,
*   *attributePath* is a related attribute,
*   *attributePath* is not found in the entity selection dataclass.



#### Ejemplo

```4d
var $sel : cs.EmployeeSelection
var $sum : Real

$sel:=ds.Employee.query("salary < :1";20000)
$sum:=$sel.sum("salary")
```

<!-- END REF -->


<!-- REF EntitySelectionClass.toCollection().Desc -->
## .toCollection( )

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17     | Añadidos       |

</details>

<!-- REF #EntitySelectionClass.toCollection().Syntax -->
**.toCollection**( { *options* : Integer { ; *begin* : Integer { ; *howMany* : Integer } } ) : *Collection*<br>**.toCollection**( *filterString* : Text {; *options* : Integer { ; *begin* : Integer { ; *howMany* : Integer }}} ) : *Collection*<br>**.toCollection**( *filterCol* : Collection {; *options* : Integer { ; *begin* : Integer { ; *howMany* : Integer }}} ) : *Collection*<!-- END REF -->

<!-- REF #EntitySelectionClass.toCollection().Params -->
| Parámetros   | Tipo       |    | Descripción                                                                          |
| ------------ | ---------- |:--:| ------------------------------------------------------------------------------------ |
| filterString | Texto      | -> | String with entity attribute path(s) to extract                                      |
| filterCol    | Collection | -> | Collection of entity attribute path(s) to extract                                    |
| options      | Integer    | -> | `dk with primary key`: adds the primary key<br>`dk with stamp`: adds the stamp |
| begin        | Integer    | -> | Designates the starting index                                                        |
| howMany      | Integer    | -> | Number of entities to extract                                                        |
| Resultado    | Collection | <- | Colección de objetos que contienen atributos y valores de la selección de entidades  |
<!-- END REF -->

#### Descripción

The `.toCollection()` function <!-- REF #EntitySelectionClass.toCollection().Summary -->creates and returns a collection where each element is an object containing a set of properties and values <!-- END REF -->corresponding to the attribute names and values for the entity selection.

If no filter parameter is passed or the first parameter contains an empty string or "*", all the attributes are extracted. Attributes with [kind](DataClassAttributeClass.md#kind) property as "relatedEntity" are extracted with the simple form: an object with property \_\_KEY (primary key). Attributes with kind property as "relatedEntities" are not extracted.

Or, you can designate the entity attributes to extract using a filter parameter. You can use one of these two filters:

*   *filterString* --a string with property paths separated with commas: "propertyPath1, propertyPath2, ...".
*   *filterCol* --a collection of strings containing property paths: \["propertyPath1","propertyPath2",...]


If a filter is specified for an attribute of the `relatedEntity` kind:

*   propertyPath = "relatedEntity" -> it is extracted with simple form
*   propertyPath = "relatedEntity.*" -> all the properties are extracted
*   propertyPath = "relatedEntity.propertyName1, relatedEntity.propertyName2, ..." -> only those properties are extracted


If a filter is specified for an attribute of the `relatedEntities` kind:

*   propertyPath = "relatedEntities.*" -> all the properties are extracted
*   propertyPath = "relatedEntities.propertyName1, relatedEntities.propertyName2, ..." -> only those properties are extracted



In the *options* parameter, you can pass the `dk with primary key` and/or `dk with stamp` selector(s) to add the entity's primary keys and/or stamps in extracted objects.

The *begin* parameter allows you to indicate the starting index of the entities to extract. You can pass any value between 0 and entity selection length-1.

The *howMany* parameter lets you specify the number of entities to extract, starting with the one specified in *begin*. Dropped entities are not returned but are taken into account according to *howMany*. For example, if *howMany*= 3 and there is 1 dropped entity, only 2 entities are extracted.

If *howMany* > length of the entity selection, the method returns (length - *begin*) objects.

An empty collection is returned if:

*   the entity selection is empty, or
*   *begin* is greater than the length of the entity selection.


#### Ejemplo 1

En todos los ejemplos de esta sección se utilizará la siguiente estructura:

![](assets/en/API/dataclassAttribute4.png)


Example without filter or options parameter:

```4d
 var $employeesCollection : Collection
 var $employees : cs.EmployeeSelection

 $employeesCollection:=New collection
 $employees:=ds.Employee.all()
 $employeesCollection:=$employees.toCollection()
```

Devuelve:

```4d
[
    {
        "ID": 416,
        "firstName": "Gregg",
        "lastName": "Wahl",
        "salary": 79100,
        "birthDate": "1963-02-01T00:00:00.000Z",
        "woman": false,
        "managerID": 412,
        "employerID": 20,
        "photo": "[object Picture]",
        "extra": null,
        "employer": {
            "__KEY": 20
        },
        "manager": {
            "__KEY": 412

        }
    },
    {
        "ID": 417,
        "firstName": "Irma",
        "lastName": "Durham",
        "salary": 47000,
        "birthDate": "1992-06-16T00:00:00.000Z",
        "woman": true,
        "managerID": 412,
        "employerID": 20,
        "photo": "[object Picture]",
        "extra": null,
        "employer": {
            "__KEY": 20
        },
        "manager": {
            "__KEY": 412
        }
    }
]
```

#### Ejemplo 2

Ejemplo con opciones:

```4d
var $employeesCollection : Collection
var $employees : cs.EmployeeSelection

$employeesCollection:=New collection
$employees:=ds.Employee.all()
$employeesCollection:=$employees.toCollection("";dk with primary key+dk with stamp)
```

Devuelve:

```4d
[
    {
        "__KEY": 416,
        "__STAMP": 1,
        "ID": 416,
        "firstName": "Gregg",
        "lastName": "Wahl",
        "salary": 79100,
        "birthDate": "1963-02-01T00:00:00.000Z",
        "woman": false,
        "managerID": 412,
        "employerID": 20,
        "photo": "[object Picture]",
        "extra": null,
        "employer": {
            "__KEY": 20
        },
        "manager": {
            "__KEY": 412
        }
    },
    {
        "__KEY": 417,
        "__STAMP": 1,
        "ID": 417,
        "firstName": "Irma",
        "lastName": "Durham",
        "salary": 47000,
        "birthDate": "1992-06-16T00:00:00.000Z",
        "woman": true,
        "managerID": 412,
        "employerID": 20,
        "photo": "[object Picture]",
        "extra": null,
        "employer": {
            "__KEY": 20
        },
        "manager": {
            "__KEY": 412
        }
    }]
```

#### Ejemplo 3

Example with slicing and filtering on properties:

```4d
var $employeesCollection; $filter : Collection
var $employees : cs.EmployeeSelection

$employeesCollection:=New collection
$filter:=New collection
$filter.push("firstName")
$filter.push("lastName")

$employees:=ds.Employee.all()
$employeesCollection:=$employees.toCollection($filter;0;0;2)
```

Devuelve:

```4d
[
    {
        "firstName": "Gregg",
        "lastName": "Wahl"
    },
    {
        "firstName": "Irma",
        "lastName": "Durham"
    }
]

```


#### Ejemplo 4

Example with `relatedEntity` type with simple form:


```4d
var $employeesCollection : Collection
$employeesCollection:=New collection
$employeesCollection:=$employees.toCollection("firstName,lastName,employer")
```

devuelve:

```4d
[
    {
        "firstName": "Gregg",
        "lastName": "Wahl",
        "employer": {
            "__KEY": 20
        }
    },
    {
        "firstName": "Irma",
        "lastName": "Durham",
        "employer": {
            "__KEY": 20
        }
    },
    {
        "firstName": "Lorena",
        "lastName": "Boothe",
        "employer": {
            "__KEY": 20
        }
    }
   ]
```

#### Ejemplo 5

Example with *filterCol* parameter:

```4d
var $employeesCollection; $coll : Collection
$employeesCollection:=New collection
$coll:=New collection("firstName";"lastName")
$employeesCollection:=$employees.toCollection($coll)
```

Devuelve:

```4d
[
    {
        "firstName": "Joanna",
        "lastName": "Cabrera"
    },
    {
        "firstName": "Alexandra",
        "lastName": "Coleman"
    }
]
```

#### Ejemplo 6

Example with extraction of all properties of a relatedEntity:

```4d
var $employeesCollection; $coll : Collection
$employeesCollection:=New collection
$coll:=New collection
$coll.push("firstName")
$coll.push("lastName")
$coll.push("employer.*")
$employeesCollection:=$employees.toCollection($coll)
```

Devuelve:

```4d
[
    {
        "firstName": "Gregg",
        "lastName": "Wahl",
        "employer": {
            "ID": 20,
            "name": "India Astral Secretary",
            "creationDate": "1984-08-25T00:00:00.000Z",
            "revenues": 12000000,
            "extra": null
        }
    },
    {
        "firstName": "Irma",
        "lastName": "Durham",
        "employer": {
            "ID": 20,
            "name": "India Astral Secretary",
            "creationDate": "1984-08-25T00:00:00.000Z",
            "revenues": 12000000,
            "extra": null
        }
    },
    {
        "firstName": "Lorena",
        "lastName": "Boothe",
        "employer": {
            "ID": 20,
            "name": "India Astral Secretary",
            "creationDate": "1984-08-25T00:00:00.000Z",
            "revenues": 12000000,
            "extra": null
        }
    }
  ]
```

#### Ejemplo 7

Example with extraction of some properties of a relatedEntity:

```4d
var $employeesCollection : Collection
$employeesCollection:=New collection
$employeesCollection:=$employees.toCollection("firstName, lastName, employer.name")
```

```4d
[
    {
        "firstName": "Gregg",
        "lastName": "Wahl",

        "employer": {
            "name": "India Astral Secretary"
        }
    },
    {
        "firstName": "Irma",
        "lastName": "Durham",
        "employer": {
            "name": "India Astral Secretary"
        }
    },
    {
        "firstName": "Lorena",
        "lastName": "Boothe",
        "employer": {
            "name": "India Astral Secretary"
        }
    }]
```

#### Ejemplo 8

Example with extraction of some properties of `relatedEntities`:

```4d
 var $employeesCollection : Collection
 $employeesCollection:=New collection
 $employeesCollection:=$employees.toCollection("firstName, lastName, directReports.firstName")
```

Devuelve:

```4d
[
    {
        "firstName": "Gregg",
        "lastName": "Wahl",
        "directReports": []
    },
    {
        "firstName": "Mike",
        "lastName": "Phan",
        "directReports": [
            {
                "firstName": "Gary"
            },
            {
                "firstName": "Sadie"
            },
            {
                "firstName": "Christie"
            }
        ]
    },
    {
        "firstName": "Gary",

        "lastName": "Reichert",
        "directReports": [
            {
                "firstName": "Rex"
            },
            {
                "firstName": "Jenny"
            },
            {
                "firstName": "Lowell"
            }
        ]
    }]
```

#### Ejemplo 9

Example with extraction of all properties of `relatedEntities`:

```4d
var $employeesCollection : Collection
$employeesCollection:=New collection
$employeesCollection:=$employees.toCollection("firstName, lastName, directReports.*")

```

```4d
[
    {
        "firstName": "Gregg",
        "lastName": "Wahl",
        "directReports": []
    },    
    {
        "firstName": "Mike",
        "lastName": "Phan",
        "directReports": [
            {
                "ID": 425,
                "firstName": "Gary",
                "lastName": "Reichert",
                "salary": 65800,
                "birthDate": "1957-12-23T00:00:00.000Z",
                "woman": false,
                "managerID": 424,
                "employerID": 21,
                "photo": "[object Picture]",
                "extra": null,
                "employer": {
                    "__KEY": 21
                },
                "manager": {
                    "__KEY": 424
                }
            },
            {
                "ID": 426,
                "firstName": "Sadie",
                "lastName": "Gallant",
                "salary": 35200,
                "birthDate": "2022-01-03T00:00:00.000Z",
                "woman": true,
                "managerID": 424,
                "employerID": 21,
                "photo": "[object Picture]",
                "extra": null,
                "employer": {
                    "__KEY": 21
                },
                "manager": {
                    "__KEY": 424
                }
            }
                   ]
    },
    {
        "firstName": "Gary",
        "lastName": "Reichert",
        "directReports": [
            {
                "ID": 428,
                "firstName": "Rex",
                "lastName": "Chance",
                "salary": 71600,
                "birthDate": "1968-08-09T00:00:00.000Z",
                "woman": false,

                "managerID": 425,
                "employerID": 21,
                "photo": "[object Picture]",
                "extra": null,
                "employer": {
                    "__KEY": 21
                },
                "manager": {
                    "__KEY": 425
                }
            },
            {
                "ID": 429,
                "firstName": "Jenny",
                "lastName": "Parks",
                "salary": 51300,
                "birthDate": "1984-05-25T00:00:00.000Z",
                "woman": true,
                "managerID": 425,
                "employerID": 21,
                "photo": "[object Picture]",
                "extra": null,
                "employer": {
                    "__KEY": 21
                },
                "manager": {
                    "__KEY": 425
                }
            }
           ]
 }
]
```


<!-- END REF -->




<style> h2 { background: #d9ebff;}</style>
