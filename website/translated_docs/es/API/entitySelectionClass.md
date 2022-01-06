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

La función `.copy()` <!-- REF #EntitySelectionClass.copy().Summary -->devuelve una copia de la entity selection original<!-- END REF -->.

> Esta función no modifica la selección de entidades original.

Por defecto, si se omite el parámetro *option*, la función devuelve una nueva entity selection alterable (incluso si la función se aplica a una entity selection compartible). Pasa la constante `ck shared` en el parámetro *option* si quiere crear una entity selection compartible.

> Para más información sobre propiedad compartible de entity selections, consulte la sección [Entity selections compartibles o modificables](ORDA/entities.md#shareable-or-alterable-entity-selections).

#### Ejemplo

Se crea una nueva entidad vacía de selección de productos cuando se carga el formulario:

```4d
 Case of
    :(Form event code=On Load)
       Form.products:=ds.Products.newSelection()
 End case

```

A continuación, esta selección de entidades se actualiza con productos y se desea compartir los productos entre varios procesos. Se copia la selección de la entidad Form.products como compartible:

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
| Parámetros    | Tipo       |    | Descripción                                                    |
| ------------- | ---------- |:--:| -------------------------------------------------------------- |
| attributePath | Texto      | -> | Ruta del atributo cuyos valores distintos desea obtener        |
| option        | Integer    | -> | `dk diacrítico`: evaluación diacrítica ("A" # "a" por ejemplo) |
| Resultado     | Collection | <- | Colección con sólo valores distintos                           |
<!-- END REF -->

#### Descripción

La función `.distinct()` <!-- REF #EntitySelectionClass.distinct().Summary -->devuelve una colección que contiene sólo valores distintos (diferentes) del *attributePath* en la selección de la entidad<!-- END REF -->.

La colección devuelta se clasifica automáticamente. Los valores **Null** no se devuelven.

En el parámetro *attributePath*, pase el atributo de entidad cuyos valores distintos quiere obtener. Sólo se pueden manejar valores escalares (texto, número, booleano o fecha). Si *attributePath* lleva a una propiedad de objeto que contiene valores de diferentes tipos, primero se agrupan por tipo y se ordenan después. Los tipos se devuelven en el siguiente orden:

1.  booleanos
2.  strings
3.  numbers
4.  fechas

Se puede utilizar la notación `[]` para designar una colección cuando *attributePath* es una ruta dentro de un objeto (ver ejemplos).

Por defecto, se realiza una evaluación no diacrítica. Si desea que la evaluación distinga entre mayúsculas y minúsculas o que diferencie los caracteres acentuados, pase la constante `dk diacritical` en el parámetro *option*.

Se devuelve un error si:

*   *attributePath* is a related attribute,
*   *attributePath* is not found in the entity selection dataclass.

#### Ejemplos

Quiere obtener una colección que contenga un solo elemento por nombre de país:

```4d
 var $countries : Collection
 $countries:=ds.Employee.all().distinct("address.country")
```

`nicknames` es una colección y `extra` es un atributo de objeto:

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
| Parámetros | Tipo               |    | Descripción                                                                                                       |
| ---------- | ------------------ |:--:| ----------------------------------------------------------------------------------------------------------------- |
| mode       | Integer            | -> | `dk stop dropping on first error`: detiene la ejecución del método en la primera entidad no suprimible            |
| Resultado  | 4D.EntitySelection | <- | Entity selection vacía si se ejecuta con éxito, si no entity selection que contengan las entidades no eliminables |
<!-- END REF -->

#### Descripción

La función `.drop()` <!-- REF #EntitySelectionClass.drop().Summary -->elimina las entidades pertenecientes a la selección de entidades de la tabla relacionada con su dataclass en el datastore<!-- END REF -->. La entity selection permanece en la memoria.
> La eliminación de entidades es permanente y no se puede deshacer. Se recomienda llamar a esta acción en una transacción para tener una opción de recuperación.

Si se encuentra una entidad bloqueada durante la ejecución de `.drop()`, no se elimina. Por defecto, el método procesa todas las entidades de la selección de entidades y devuelve las entidades no eliminables en la selección de entidades. Si quiere que el método detenga la ejecución en la primera entidad no suprimible encontrada, pase la constante `dk stop dropping on first error` en el parámetro *mode*.

#### Ejemplo

Ejemplo sin la opción `dk stop dropping on first error`:

```4d
 var $employees; $notDropped : cs.EmployeeSelection
 $employees:=ds.Employee.query("firstName=:1";"S@")
 $notDropped:=$employees.drop() // $notDropped es una entity selection que contiene todas las entidades que no suprimidas
 If($notDropped.length=0) //La acción de eliminación es exitosa, todas las entidades han sido eliminadas
    ALERT("You have dropped "+String($employees.length)+" employees") //La selección de entidades eliminada permanece en la memoria
 Else
    ALERT("Problem during drop, try later")
 End if
```

Ejemplo con la opción `dk stop dropping on first error`:

```4d
 var $employees; $notDropped : cs.EmployeeSelection
 $employees:=ds.Employee.query("firstName=:1";"S@")
 $notDropped:=$employees.drop(dk stop dropping on first error) //$notDropped es una entity selection que contiene la primera entidad no suprimida
 If($notDropped.length=0) //La acción de eliminación es exitosa, todas las entidades han sido eliminadas
    ALERT("You have dropped "+String($employees.length)+" employees") //La selección de entidades eliminada permanece en la memoria
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
| Parámetros    | Tipo       |    | Descripción                                                                                 |
| ------------- | ---------- |:--:| ------------------------------------------------------------------------------------------- |
| attributePath | Texto      | -> | Ruta del atributo cuyos valores deben ser extraídos en la nueva colección                   |
| targetPath    | Texto      | -> | Ruta o nombre del atributo objetivo                                                         |
| option        | Integer    | -> | `ck keep null`: incluye los atributos null en la colección devuelta (ignorados por defecto) |
| Resultado     | Collection | <- | Colección que contiene los valores extraídos                                                |
<!-- END REF -->

#### Descripción

La función `.extract()` <!-- REF #EntitySelectionClass.extract().Summary -->retorna una colección que contiene los valores de *attributePath* extraídos de la entity selection<!-- END REF -->.

*attributePath* puede referirse a:

*   a scalar dataclass attribute,
*   entidad relacionada,
*   entidades relacionadas.

Si *attributePath* no es válido, se devuelve una colección vacía.

Esta función acepta dos sintaxis.

**.extract( attributePath : Text { ; option : Integer } ) : Collection**

Con esta sintaxis, `.extract()` llena la colección devuelta con los valores *attributePath* de la entity selection.

Por defecto, las entidades para las que *attributePath* es *null* o indefinida se ignoran en la colección resultante. Puede pasar la constante `ck keep null` en el parámetro *option* para incluir estos valores como elementos **null** en la colección devuelta.

*   Dataclass attributes with [.kind](DataClassAttributeClass.md#kind) = "relatedEntity" are extracted as a collection of entities (duplications are kept).
*   Dataclass attributes with [.kind](DataClassAttributeClass.md#kind) = "relatedEntities" are extracted as a collection of entity selections.


**.extract ( attributePath ; targetPath { ; ...attributePathN ; ... targetPathN}) : Collection**

Con esta sintaxis, `.extract()` llena la colección devuelta con las propiedades *attributePath*. Cada elemento de la colección devuelta es un objeto con las propiedades *targetPath* llenadas con las propiedades *attributePath* correspondientes. Null values are kept (*option* parameter is ignored with this syntax).

Si se dan varios *attributePath*, debe darse un *targetPath* para cada uno. Sólo se extraen los pares válidos \[*attributePath*, *targetPath*].

*   Dataclass attributes with [.kind](DataClassAttributeClass.md#kind) = "relatedEntity" are extracted as an entity.
*   Dataclass attributes with [.kind](DataClassAttributeClass.md#kind) = "relatedEntities" are extracted as an entity selection.

> Las entidades de una colección de entidades a las que se accede por medio de \[ ] no se recargan desde la base de datos.


#### Ejemplo

Dada la siguiente tabla y relación:

![](assets/en/API/entityselection.PNG)

```4d
 var $firstnames; $addresses; $mailing; $teachers : Collection
  //
  //
  //$firstnames es una colección de cadenas


 $firstnames:=ds.Teachers.all().extract("firstname")
  //
  //$addresses es una colección de entidades relacionadas con la dataclass Address
  //Se extraen los valores null de Address
 $addresses:=ds.Teachers.all().extract("address";ck keep null)
  //
  //
  //$mailing es una colección de objetos con las propiedades "who" y "to"
  //El contenido de la propiedad "who" es de tipo Cadena
  //El contenido de la propiedad "to" es de tipo entity (dataclass Address)
 $mailing:=ds.Teachers.all().extract("lastname";"who";"address";"to")
  //
  //
  //$mailing es una colección de objetos con las propiedades "who" y "city"
  //El contenido de la propiedad "who" es de tipo Cadena
  //El contenido de la propiedad "city" es de tipo Cadena
 $mailing:=ds.Teachers.all().extract("lastname";"who";"address.city";"city")
  //
  //$teachers es una colección de objetos con las propiedades "where" y "who"
  //El contenido de la propiedad "where" es de tipo Cadena
  //El contenido de la propiedad "who" es una entity selection (dataclass Teachers)
 $teachers:=ds.Address.all().extract("city";"where";"teachers";"who")
  //
  //$teachers es una colección de entity selections
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
| Parámetros | Tipo      |    | Descripción                                                                              |
| ---------- | --------- |:--:| ---------------------------------------------------------------------------------------- |
| Resultado  | 4D.Entity | <- | Referencia a la primera entidad de la entity selection (Null si la selección está vacía) |
<!-- END REF -->

#### Descripción

La función `.first()` <!-- REF #EntitySelectionClass.first().Summary -->devuelve una referencia a la entidad en la primera posición de la entity selection<!-- END REF -->.

El resultado de esta función es similar a:

```4d
 $entity:=$entitySel[0]
```

Sin embargo, hay una diferencia entre ambas afirmaciones cuando la selección está vacía:


```4d
 var $entitySel : cs.EmpSelection
 var $entity : cs.EmpEntity
 $entitySel:=ds.Emp.query("lastName = :1";"Nonexistentname") //ninguna entidad correspondiente
  //entity selection is then empty
 $entity:=$entitySel.first() //devuelve Null
 $entity:=$entitySel[0]  //genera un error
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
| Parámetros | Tipo         |    | Descripción                                      |
| ---------- | ------------ |:--:| ------------------------------------------------ |
| Resultado  | 4D.DataClass | <- | DataClass a la que pertenece la entity selection |
<!-- END REF -->

#### Descripción

La función `.getDataClass()` <!-- REF #EntitySelectionClass.getDataClass().Summary -->devuelve la dataclass de la entity selection<!-- END REF -->.

Esta función es principalmente útil en el contexto del código genérico.

#### Ejemplo

El siguiente código genérico duplica todas las entidades de la entity selection:

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
| Parámetros | Tipo     |    | Descripción                                                       |
| ---------- | -------- |:--:| ----------------------------------------------------------------- |
| Resultado  | Booleano | <- | True si la entity selection es modificable, de lo contrario False |
<!-- END REF -->

#### Descripción

La función `.isAlterable()` <!-- REF #EntitySelectionClass.isAlterable().Summary -->devuelve True si la entity selection es modificable<!-- END REF -->, y False si no lo es.

Para más información, consulte la sección [Entity selections compartibles o modificables](ORDA/entities.md#shareable-or-alterable-entity-selections).

#### Ejemplo

Va a mostrar `Form.products` en un [list box](FormObjects/listbox_overview.md) para que el usuario pueda añadir nuevos productos. Quiere asegurarse de que es modificable para que el usuario pueda añadir nuevos productos sin error:

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
| Parámetros | Tipo     |    | Descripción                                                    |
| ---------- | -------- |:--:| -------------------------------------------------------------- |
| Resultado  | Booleano | <- | True si la entity selection es ordenada, de lo contrario False |
<!-- END REF -->

#### Descripción

La función `.isOrdered()` <!-- REF #EntitySelectionClass.isOrdered().Summary -->devuelve True si la entity selection está ordenada<!-- END REF -->, y False si está desordenada.
> Esta función siempre devuelve True cuando la entity selection proviene de un datastore remoto.

Para más información, consulte [Entity selection ordenadas o desordenadas](ORDA/dsMapping.md#ordered-or-unordered-entity-selection).


#### Ejemplo


```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 var $isOrdered : Boolean
 $employees:=ds.Employee.newSelection(dk keep ordered)
 $employee:=ds.Employee.get(714) // Obtiene la entidad con llave primaria 714

  //En una entity selection ordenada, podemos añadir la misma entidad varias veces (los duplicados se mantienen)
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
| Parámetros | Tipo      |    | Descripción                                                                                    |
| ---------- | --------- |:--:| ---------------------------------------------------------------------------------------------- |
| Resultado  | 4D.Entity | <- | Referencia a la última entidad de la entity selection (Null si la entity selection está vacía) |
<!-- END REF -->

#### Descripción

La función `.last()` <!-- REF #EntitySelectionClass.last().Summary -->devuelve una referencia a la entidad en última posición de la entity selection<!-- END REF -->.

El resultado de esta función es similar a:

```4d
 $entity:=$entitySel[length-1]
```

Si la entity selection está vacía, la función devuelve Null.


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

La propiedad `.length` <!-- REF #EntitySelectionClass.length.Summary -->devuelve el número de entidades en la entity selection<!-- END REF -->. Si la entity selection está vacía, devuelve 0.

Las entity selections siempre tienen una propiedad `.length`.


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
| Resultado     | any   | <- | Valor más alto del atributo                        |
<!-- END REF -->

#### Descripción

La función `.max()` <!-- REF #EntitySelectionClass.max().Summary -->devuelve el valor más alto (o máximo) entre todos los valores de *attributePath* en la entity selection<!-- END REF -->. En realidad devuelve el valor de la última entidad de la selección de entidades tal y como se ordenaría de forma ascendente utilizando la función [`.orderBy()`](#orderby).

Si se pasa en *attributePath* una ruta a una propiedad de objeto que contiene diferentes tipos de valores, la función `.max()` devolverá el valor máximo dentro del primer tipo escalar en el orden de la lista de tipos 4D por defecto (ver la descripción de [`.sort()`](CollectionClass.md#sort)).

`.max()` devuelve **undefined** si la entity selection está vacía o si *attributePath* no se encuentra en el atributo objeto.


Se devuelve un error si:

*   *attributePath* is a related attribute,
*   *attributePath* designates an attribute that does not exist in the entity selection dataclass.



#### Ejemplo

Queremos encontrar el salario más alto entre todas las empleadas:

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
| Resultado     | any   | <- | Valor más bajo del atributo                        |
<!-- END REF -->

#### Descripción

La función `.min()` <!-- REF #EntitySelectionClass.min().Summary --> devuelve el valor más bajo (o mínimo) entre todos los valores de attributePath en la entity selection<!-- END REF -->.  En realidad devuelve el valor de la primera entidad de la selección si se ordenara de forma ascendente utilizando la función [`.orderBy()`](#orderby) (excluyendo los valores **null**).

Si se pasa en *attributePath* una ruta a una propiedad objeto que contiene diferentes tipos de valores, la función `.min()` devolverá el valor mínimo dentro del primer tipo de valor escalar en el orden de la lista de tipos (ver la descripción de [`.sort()`](CollectionClass.md#sort)).

`.min()` devuelve **undefined** si la entity selection está vacía o si *attributePath* no se encuentra en el atributo objeto.

Se devuelve un error si:

*   *attributePath* is a related attribute,
*   *attributePath* designates an attribute that does not exist in the entity selection dataclass.


#### Ejemplo

En este ejemplo, queremos encontrar el salario más bajo entre todas las empleadas:

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
| Parámetros      | Tipo               |    | Descripción                                                                    |
| --------------- | ------------------ |:--:| ------------------------------------------------------------------------------ |
| entity          | 4D.Entity          | -> | Entidad a sustraer                                                             |
| entitySelection | 4D.EntitySelection | -> | Entity selection a sustraer                                                    |
| Resultado       | 4D.EntitySelection | <- | Nueva entity selection o una nueva referencia en la entity selection existente |
<!-- END REF -->

#### Descripción

La función `.minus()` <!-- REF #EntitySelectionClass.minus().Summary -->excluye de la entity selection a la que se aplica la *entity* o las entidades de *entitySelection* y devuelve la entity selection resultante<!-- END REF -->.

*   If you pass *entity* as parameter, the function creates a new entity selection without *entity* (if *entity* belongs to the entity selection). If *entity* was not included in the original entity selection, a new reference to the entity selection is returned.
*   If you pass *entitySelection* as parameter, the function returns an entity selection containing the entities belonging to the original entity selection without the entities belonging to *entitySelection*.
> You can compare [ordered and/or unordered entity selections](ORDA/dsMapping.md#ordered-or-unordered-entity-selection). The resulting selection is always unordered.

Si la entity selection inicial o la entity selection inicial y la del parámetro *entitySelection* están vacías, se devuelve una entity selection vacía.

Si *entitySelection* está vacía o si *entity* es Null, se devuelve una nueva referencia a la entity selection original.

Si la entity selection inicial y el parámetro no están relacionados con la misma dataclass, se produce un error.


#### Ejemplo 1

```4d
 var $employees; $result : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity

 $employees:=ds.Employee.query("lastName = :1";"H@") 
  // la entity selection $employees contiene la entidad con llave primaria 710 y otras entidades
  // por ejemplo. "Colin Hetrick", "Grady Harness", "Sherlock Holmes" (primary key 710)

 $employee:=ds.Employee.get(710) // Devuelve "Sherlock Holmes"

 $result:=$employees.minus($employee) //$result contiene "Colin Hetrick", "Grady Harness"
```


#### Ejemplo 2

Queremos tener una selección de empleadas llamadas "Jones" que vivan en Nueva York :

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
| Parámetros      | Tipo               |    | Descripción                                                                   |
| --------------- | ------------------ |:--:| ----------------------------------------------------------------------------- |
| entity          | 4D.Entity          | -> | Entidad a intersectar                                                         |
| entitySelection | 4D.EntitySelection | -> | Entity selection a intersectar                                                |
| Resultado       | 4D.EntitySelection | <- | Nueva entity selection o una nueva referencia a la entity selection de origen |
<!-- END REF -->

#### Descripción

La función `.or()` <!-- REF #EntitySelectionClass.or().Summary -->combina la entity selection con el parámetro *entity* o *entitySelection* utilizando el operador lógico (no excluyente) OR<!-- END REF -->; devuelve una nueva entitySelection no ordenada que contiene todas las entidades de la entitySelection y del parámetro.

*   If you pass *entity* as parameter, you compare this entity with the entity selection. If the entity belongs to the entity selection, a new reference to the entity selection is returned. Otherwise, a new entity selection containing the original entity selection and the entity is returned.
*   If you pass *entitySelection* as parameter, you compare entity selections. A new entity selection containing the entities belonging to the original entity selection or *entitySelection* is returned (or is not exclusive, entities referenced in both selections are not duplicated in the resulting selection).
> You can compare [ordered and/or unordered entity selections](ORDA/dsMapping.md#ordered-or-unordered-entity-selection). The resulting selection is always unordered.

Si la entity selection inicial y la del parámetro *entitySelection* están vacías, se devuelve una entity selection vacía. Si la entity selection original está vacía, se devuelve una referencia a *entitySelection* o una entity selection que sólo contiene *entity*.

Si *entitySelection* está vacía o si *entity* es Null, se devuelve una nueva referencia a la entity selection original.

Si la entity selection inicial y el parámetro no están relacionados con la misma dataclass, se produce un error.


#### Ejemplo 1

```4d
 var $employees1; $employees2; $result : cs.EmployeeSelection
 $employees1:=ds.Employee.query("lastName = :1";"H@") //Devuelve "Colin Hetrick","Grady Harness"
 $employees2:=ds.Employee.query("firstName = :1";"C@") //Devuelve "Colin Hetrick", "Cath Kidston"
 $result:=$employees1.or($employees2) //$result contiene "Colin Hetrick", "Grady Harness","Cath Kidston"
```

#### Ejemplo 2

```4d
 var $employees; $result : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@") // Devuelve "Colin Hetrick","Grady Harness", "Sherlock Holmes"
 $employee:=ds.Employee.get(686) //la entidad con llave primaria 686 no pertenece a la entity selection $employees 
  //Coincide con la empleada "Mary Smith"

 $result:=$employees.or($employee) //$result contiene "Colin Hetrick", "Grady Harness", "Sherlock Holmes", "Mary Smith"
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
| Parámetros  | Tipo               |    | Descripción                                                                    |
| ----------- | ------------------ |:--:| ------------------------------------------------------------------------------ |
| pathString  | Texto              | -> | Ruta(s) de atributos e instrucciones de clasificación para la entity selection |
| pathObjects | Collection         | -> | Colección de objetos criterio                                                  |
| Resultado   | 4D.EntitySelection | <- | Nueva entity selection en el orden especificado                                |
<!-- END REF -->

#### Descripción

La función `.orderBy()` <!-- REF #EntitySelectionClass.orderBy().Summary -->devuelve una nueva entity selection ordenada que contiene todas las entidades de la entity selection en el orden especificado por los criterios *pathString* o *pathObjects*<!-- END REF -->.
> * Este método no modifica la selección de entidades original.
*   For more information, please refer to the [Ordered or unordered entity selection](ORDA/dsMapping.md#ordered-or-unordered-entity-selection) section.

Debe utilizar un parámetro de criterio para definir cómo deben ordenarse las entidades. Se soportan dos parámetros diferentes:

*   *pathString* (Text) : This parameter contains a formula made of 1 to x attribute paths and (optionally) sort orders, separated by commas. La sintaxis es:

```4d
"attributePath1 {desc or asc}, attributePath2 {desc or asc},..."
```

El orden en que se pasan los atributos determina la prioridad de ordenación de las entidades. Por defecto, los atributos se clasifican en orden ascendente. You can set the sort order of a property in the criteria string, separated from the property path by a single space: pass "asc" to sort in ascending order or "desc" in descending order.

*   *pathObjects* (collection): each element of the collection contains an object structured in the following way:

```4d
{
    "propertyPath": string,
    "descending": boolean
}
```

Por defecto, los atributos se clasifican en orden ascendente ("descending" es false).

Puede añadir tantos objetos en la colección de criterios como sea necesario.
> Los valores Null se evalúan como inferiores a los otros valores.

#### Ejemplo


```4d
// orden con fórmula
 $sortedEntitySelection:=$entitySelection.orderBy("firstName asc, salary desc")
 $sortedEntitySelection:=$entitySelection.orderBy("firstName")

  // orden con collection con o sin órdenes de clasificación
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
| Parámetros    | Tipo               |    | Descripción                                   |
| ------------- | ------------------ |:--:| --------------------------------------------- |
| formulaString | Texto              | -> | Cadena formula                                |
| formulaObj    | Objeto             | -> | Objeto formula                                |
| sortOrder     | Integer            | -> | `dk ascending` (por defecto) o`dk descending` |
| parámetros    | Objeto             | -> | Parámetros de la fórmula                      |
| Resultado     | 4D.EntitySelection | <- | Nueva entity selection ordenada               |
<!-- END REF -->

#### Descripción

La función `.orderByFormula()` <!-- REF #EntitySelectionClass.orderByFormula().Summary -->devuelve una nueva entity selection ordenada<!-- END REF --> que contiene todas las entidades de la entity selection en el orden definido a través de los parámetros *formulaString* o *formulaObj* y, opcionalmente, *sortOrder* y *settings*.
> Esta función no modifica la selección de entidades original.

Puede utilizar un parámetro *formulaString* o un parámetro *formulaObj*:

- *formulaString*: you pass a 4D expression such as "Year of(this.birthDate)".
- *formulaObj*: pass a valid formula object created using the `Formula` or `Formula from string` command.

La fórmula de *formulaString* o *formulaObj* se ejecuta para cada entidad de la entity selection y su resultado se utiliza para definir la posición de la entidad en la entity selection devuelta. El resultado debe ser de un tipo ordenable (booleano, fecha, número, texto, hora, null).
> Un resultado null es siempre el valor más pequeño.

Por defecto, si se omite el parámetro *sortOrder*, la selección de entidades resultante se clasifica en orden ascendente. Opcionalmente, puede pasar uno de los siguientes valores en el parámetro *sortOrder*:

| Constante     | Valor | Comentario                     |
| ------------- | ----- | ------------------------------ |
| dk ascending  | 0     | Orden ascendente (por defecto) |
| dk descending | 1     | Orden descendente              |

Dentro de *formulaString* o *formulaObj*, la entidad procesada y, por tanto, sus atributos están disponibles a través del comando `This` (por ejemplo, `This.lastName`).

Puede pasar parámetros a la fórmula utilizando la propiedad `args/0> (objeto) del parámetro <code>settings`: la fórmula recibe el objeto `settings.args` en $1.

#### Ejemplo 1

Clasificar a los alumnos mediante una fórmula dada como texto:

```4d
 var $es1; $es2 : cs.StudentsSelection
 $es1:=ds.Students.query("nationality=:1";"French")
 $es2:=$es1.orderByFormula("length(this.lastname)") //ascendente por defecto
 $es2:=$es1.orderByFormula("length(this.lastname)";dk descending)
```

El mismo orden de clasificación pero utilizando un objeto fórmula:

```4d
 var $es1; $es2 : cs.StudentsSelection
 var $formula : Object
 $es1:=ds.Students.query("nationality=:1";"French")
 $formula:=Formula(Length(This.lastname))
 $es2:=$es1.orderByFormula($formula) // ascendente por defecto
 $es2:=$es1.orderByFormula($formula;dk descending)
```


#### Ejemplo 2

Una fórmula se da como un objeto fórmula con parámetros; el objeto `settings.args` se recibe como $1 en el método ***computeAverage***.

En este ejemplo, el campo objeto "marks" de la dataClass **Students** contiene las notas de los estudiantes para cada asignatura. Se utiliza un solo objeto fórmula para calcular la nota media de un alumno con diferentes coeficientes para schoolA y schoolB.

```4d
 var $es1; $es2 : cs.StudentsSelection
 var $formula; $schoolA; $schoolB : Object
 $es1:=ds.Students.query("nationality=:1";"French")
 $formula:=Formula(computeAverage($1))

 $schoolA:=New object() //settings object
 $schoolA.args:=New object("english";1;"math";1;"history";1) // Coeficientes para calcular una media

  //Ordenar a los estudiantes según los criterios de la escuela A
 $es2:=$es1.entitySelection.orderByFormula($formula;$schoolA)

 $schoolB:=New object() //object settings 
 $schoolB.args:=New object("english";1;"math";2;"history";3) // Coeficientes para calcular un promedio

  //Ordenar a los estudiantes según los criterios de la escuela B
 $es2:=$es1.entitySelection.orderByFormula($formula;dk descending;$schoolB)
```

```4d
  //
  // método computeAverage 
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
| Versión | Modificaciones                             |
| ------- | ------------------------------------------ |
| v17 R6  | Soporte de los parámetros Formula          |
| v17 R5  | Soporte de los marcadores para los valores |
| v17     | Añadidos                                   |

</details>

<!-- REF #EntitySelectionClass.query().Syntax -->
**.query**( *queryString* : Text { ; *...value* : any } { ; *querySettings* : Object } ) : 4D.EntitySelection <br>**.query**( *formula* : Object { ; *querySettings* : Object } ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.query().Params -->
| Parámetros    | Tipo               |    | Descripción                                                                                                                                                                              |
| ------------- | ------------------ |:--:| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| queryString   | Texto              | -> | Criterios de búsqueda como cadena                                                                                                                                                        |
| formula       | Objeto             | -> | Criterios de búsqueda como objeto fórmula                                                                                                                                                |
| value         | any                | -> | Valor(es) a utilizar para los marcadores de posición indexados                                                                                                                           |
| querySettings | Objeto             | -> | Opciones de búsqueda: parameters, attributes, args, allowFormulas, context, queryPath, queryPlan                                                                                         |
| Resultado     | 4D.EntitySelection | <- | Nueva selección de entidades formada por las entidades de la entity selection que cumplen los criterios de búsqueda especificados en *queryString* o*formula*|<!-- END REF -->

|

#### Descripción

La función `.query()` <!-- REF #EntitySelectionClass.query().Summary -->busca entidades que cumplan los criterios de búsqueda especificados en *queryString* o *formula* y (opcionalmente) *value*(s) entre todas las entidades de la selección de entidades<!-- END REF -->, y devuelve un nuevo objeto de tipo `EntitySelection` que contiene todas las entidades encontradas. Se aplica carga diferida.
> Esta función no modifica la selección de entidades original.

Si no se encuentran entidades coincidentes, se devuelve una `EntitySelection` vacía.

Para obtener información detallada sobre cómo construir una consulta utilizando los parámetros *queryString*, *value<* y *querySettings*, consulte la descripción de la función de dataClass [`.query()`](DataClassClass.md#query).
> Por defecto, si se omite la declaración **order by** en *queryString*, la entity selection devuelta es [no ordenada](ORDA/dsMapping.md#ordered-or-unordered-entity-selection). Sin embargo, tenga en cuenta que, en modo Cliente/Servidor, se comporta como una selección de entidades ordenada (las entidades se añaden al final de la selección).

#### Ejemplo 1


```4d
 var $entitySelectionTemp : cs.EmployeeSelection
 $entitySelectionTemp:=ds.Employee.query("lastName = :1";"M@")
 Form.emps:=$entitySelectionTemp.query("manager.lastName = :1";"S@")
```


#### Ejemplo 2

Se pueden encontrar más ejemplos de búsquedas en la página [`.query()`](DataClassClass.md#query) DataClass.

#### Ver también

[`.query()`](DataClassClass.md#query) para dataclass

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

La propiedad `.queryPath` <!-- REF #EntitySelectionClass.queryPath.Summary -->contiene una descripción detallada de la búsqueda tal y como fue realizada por 4D<!-- END REF -->. Esta propiedad está disponible para los objetos de tipo `EntitySelection` generados a través de búsquedas si la propiedad `"queryPath":true` fue pasada en el parámetro *querySettings* de la función [`.query()`](#query).

Para más información, consulte el párrafo **querySettings** en la página [`.query()`](DataClassClass.html#query) Dataclass. 

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

La propiedad `.queryPlan` <!-- REF #EntitySelectionClass.queryPlan.Summary --> contiene una descripción detallada de la búsqueda justo antes de su ejecución (es decir, la búsqueda planeada)<!-- END REF -->. Esta propiedad está disponible para los objetos de tipo `EntitySelection` generados a través de búsquedas si la propiedad `"queryPlan":true` fue pasada en el parámetro *querySettings* de la función [`.query()`](#query).

Para más información, consulte el párrafo **querySettings** en la página [`.query()`](DataClassClass.html#query) Dataclass. 

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
> Esta función sólo funciona con un datastore remoto (cliente/servidor o conexión `Open datastore`).

La función `.refresh()` <!-- REF #EntitySelectionClass.refresh().Summary -->invalida inmediatamente los datos de la entity selection en la caché local de ORDA<!-- END REF --> para que la próxima vez que 4D requiera la entity selection, ésta sea recargada desde la base.

Por defecto, la caché local de ORDA se invalida después de 30 segundos. En el contexto de las aplicaciones cliente/servidor que utilizan tanto ORDA como el lenguaje clásico, este método le permite asegurarse de que una aplicación remota siempre funcionará con los datos más recientes.

#### Ejemplo 1

En este ejemplo, el código clásico y el código ORDA modifican los mismos datos simultáneamente:

```4d
 //En un 4D remoto

 var $selection : cs.StudentsSelection
 var $student : cs.StudentsEntity

 $selection:=ds.Students.query("lastname=:1";"Collins")
  //La primera entidad se carga en la caché de ORDA
 $student:=$selection.first()

  //Actualización con un 4D clásico, la caché ORDA no es consciente de si
 QUERY([Students];[Students]lastname="Collins")
 [Students]lastname:="Colin"
 SAVE RECORD([Students])

  //para obtener la última versión, hay que invalidar la caché de ORDA
 $selection.refresh()
  // Aunque la caché no haya caducado, la primera entidad se recarga desde el disco
 $student:=$selection.first()

  //$student.lastname contains "Colin"
```


#### Ejemplo 2

Un list box muestra la entity selection Form.students y en la que varios clientes trabajan.

```4d
// Método formulario:
 Case of
    :(Form event code=On Load)
       Form.students:=ds.Students.all()
 End case
  //
  //
  // En client #1, el usuario carga, actualiza y guarda la primera entidad
  // En client #2, el usuario carga, actualiza y guarda la misma entidad
  //
  //
  // En client #1:
 Form.students.refresh() // Invalida la caché ORDA para la entity selection Form.students 
  // El contenido del list box se refresca desde la base con la actualización realizada por el cliente #2
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
| Parámetros | Tipo               |    | Descripción                                                               |
| ---------- | ------------------ |:--:| ------------------------------------------------------------------------- |
| startFrom  | Integer            | -> | Índice para iniciar la operación (incluído)                               |
| end        | Integer            | -> | Índice final (no incluido)                                                |
| Resultado  | 4D.EntitySelection | <- | Nueva entity selection que contiene la entidades extraídas (shallow copy) |
<!-- END REF -->

#### Descripción

La función `.slice()` <!-- REF #EntitySelectionClass.slice().Summary -->devuelve una parte de una selección de entidades en una nueva entity selection<!-- END REF -->, seleccionada desde el índice *startFrom* hasta el índice *end* (*end* no se incluye) o hasta la última entidad de la entity selection. Este método devuelve una shallow copy (copia superficial) de la entity selection (utiliza las mismas referencias de entidades).
> Esta función no modifica la selección de entidades original.

La entity selection devuelta contiene las entidades especificadas por *startFrom* y todas las entidades subsiguientes hasta, pero sin incluir, la entidad especificada por *end*. Si sólo se especifica el parámetro *startFrom*, la entity selection devuelta contiene todas las entidades entre *startFrom* y la última entidad de la entity selection original.

*   If *startFrom* < 0, it is recalculated as *startFrom:=startFrom+length* (it is considered as the offset from the end of the entity selection). If the calculated value < 0, *startFrom* is set to 0.
*   If *startFrom >= length*, the function returns an empty entity selection.
*   If *end* < 0, it is recalculated as *end:=end+length*.
*   If *end < startFrom* (passed or calculated values), the method does nothing.

Si la entity selection contiene entidades que se han eliminado mientras tanto, también se devuelven.

#### Ejemplo 1

Quiere obtener una selección de las primeras 9 entidades de la entity selection:

```4d
var $sel; $sliced : cs.EmployeeSelection
$sel:=ds.Employee.query("salary > :1";50000)
$sliced:=$sel.slice(0;9) //
```


#### Ejemplo 2

Asumiendo que tenemos ds.Employee.all().length = 10

```4d
var $slice : cs.EmployeeSelection
$slice:=ds.Employee.all().slice(-1;-2) //intenta devolver entidades del índice 9 al 8, pero como 9 > 8, devuelve una entity selection vacía

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
| Resultado     | Real  | <- | Suma de los valores de la entity selection         |
<!-- END REF -->

#### Descripción


La función `.sum()` <!-- REF #EntitySelectionClass.sum().Summary -->devuelve la suma de todos los valores de *attributePath* en la entity selection<!-- END REF -->.

`.sum()` devuelve 0 si la entity selection está vacía.

La suma sólo puede hacerse en valores de tipo numérico. Si *attributePath* es una propiedad objeto, sólo se tienen en cuenta los valores numéricos para el cálculo (se ignoran otros tipos de valores). En este caso, si *attributePath* lleva a una propiedad que no existe en el objeto o no contiene ningún valor numérico, `.sum()` devuelve 0.

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
| Parámetros   | Tipo       |    | Descripción                                                                                  |
| ------------ | ---------- |:--:| -------------------------------------------------------------------------------------------- |
| filterString | Texto      | -> | Cadena con la(s) ruta(s) de atributos de la entidad a extraer                                |
| filterCol    | Collection | -> | Colección de rutas de atributos de entidad a extraer                                         |
| options      | Integer    | -> | `dk with primary key`: añade la llave primaria <br>`dk with stamp<`: añade el sello |
| begin        | Integer    | -> | Designa el índice inicial                                                                    |
| howMany      | Integer    | -> | Número de entidades a extraer                                                                |
| Resultado    | Collection | <- | Colección de objetos que contienen atributos y valores de la selección de entidades          |
<!-- END REF -->

#### Descripción

La función `.toCollection()` <!-- REF #EntitySelectionClass.toCollection().Summary -->crea y devuelve una colección donde cada elemento es un objeto que contiene un conjunto de propiedades y valores <!-- END REF -->correspondientes a los nombres y valores de los atributos de la entity selection.

Si no se pasa ningún parámetro de filtro o si el primer parámetro contiene una cadena vacía o "*", se extraen todos los atributos. Los atributos con la propiedad [kind](DataClassAttributeClass.md#kind) como "relatedEntity" se extraen con el formulario simple: un objeto con la propiedad \_\_KEY (llave primaria). Los atributos con la propiedad kind como "relatedEntities" no se extraen.

O bien, puede designar los atributos de la entidad a extraer utilizando un parámetro de filtro. Puede utilizar uno de estos dos filtros:

*   *filterString* --a string with property paths separated with commas: "propertyPath1, propertyPath2, ...".
*   *filterCol* --a collection of strings containing property paths: \["propertyPath1","propertyPath2",...]


Si se especifica un filtro para un atributo de tipo `relatedEntity`:

*   propertyPath = "relatedEntity" -> it is extracted with simple form
*   propertyPath = "relatedEntity.*" -> all the properties are extracted
*   propertyPath = "relatedEntity.propertyName1, relatedEntity.propertyName2, ..." -> only those properties are extracted


Si se especifica un filtro para un atributo de tipo `relatedEntities`:

*   propertyPath = "relatedEntities.*" -> all the properties are extracted
*   propertyPath = "relatedEntities.propertyName1, relatedEntities.propertyName2, ..." -> only those properties are extracted



En el parámetro *options*, puede pasar el selector `ddk with primary key` y/o `dk with stamp` para añadir las llaves primarias de la entidad y/o los sellos en los objetos extraídos.

El parámetro *begin* permite indicar el índice de inicio de las entidades a extraer. Puede pasar cualquier valor entre 0 y la longitud de la entity selection -1.

El parámetro *howMany* permite especificar el número de entidades a extraer, empezando por la especificada en *begin*. Las entidades descartadas no se devuelven pero se tienen en cuenta en *howMany*. Por ejemplo, si *howMany*= 3 y hay 1 entidad descartada, sólo se extraen 2 entidades.

Si *howMany* > longitud de la entity selection, el método devuelve (length - *begin*) objetos.

Se devuelve una colección vacía si:

*   the entity selection is empty, or
*   *begin* is greater than the length of the entity selection.


#### Ejemplo 1

En todos los ejemplos de esta sección se utilizará la siguiente estructura:

![](assets/en/API/dataclassAttribute4.png)


Ejemplo sin parámetros de filtro ni de opciones:

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

Ejemplo con descarte y filtrado en las propiedades:

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

Ejemplo con el tipo `relatedEntity` con una forma simple:


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

Ejemplo con el parámetro *filterCol*:

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

Ejemplo con la extracción de todas las propiedades de una relatedEntity:

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

Ejemplo con la extracción de algunas las propiedades de relatedEntity:

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

Ejemplo con la extracción de algunas las propiedades de `relatedEntities`:

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

Ejemplo con la extracción de todas las propiedades de `relatedEntities`:

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
