---
id: DataClassAttributeClass
title: DataClassAttribute
---

Los atributos Dataclass están disponibles como propiedades de sus respectivas clases. Por ejemplo:

```4d
 nameAttribute:=ds.Company.name //referencia a un atributo de clase
 revenuesAttribute:=ds.Company["revenues"] //método alternativo
```

Este código asigna a *nameAttribute* y *revenuesAttribute* referencias a los atributos name y revenues de la clase Company. Esta sintaxis NO devuelve los valores mantenidos dentro del atributo, sino que devuelve referencias a los propios atributos. Para manejar los valores, es necesario pasar por [**Entidades**](EntityClass.md).

Los objetos `DataClassAttribute` tienen propiedades que puede leer para obtener información sobre los atributos de su clase de datos.

> Los objetos del atributo Dataclass pueden ser modificados, pero la estructura subyacente de la base de datos no será alterada.

### Resumen

|                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE DataClassAttributeClass.autoFilled.Syntax -->](#autofilled)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.autoFilled.Summary -->|
| [<!-- INCLUDE DataClassAttributeClass.fieldNumber.Syntax -->](#fieldnumber)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.fieldNumber.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.fieldType.Syntax -->](#fieldtype)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.fieldType.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.indexed.Syntax -->](#indexed)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.indexed.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.inverseName.Syntax -->](#inversename)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.inverseName.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.keywordIndexed.Syntax -->](#keywordindexed)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.keywordIndexed.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.kind.Syntax -->](#kind)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.kind.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.mandatory.Syntax -->](#mandatory)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.mandatory.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.name.Syntax -->](#name)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.name.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.relatedDataClass.Syntax -->](#relateddataclass)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.relatedDataClass.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.type.Syntax -->](#type)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.type.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.unique.Syntax -->](#unique)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.unique.Summary --> |

<!-- REF DataClassAttributeClass.autoFilled.Desc -->
## .autoFilled

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |

</details>

<!-- REF DataClassAttributeClass.autoFilled.Syntax -->

**.autoFilled** : Boolean<!-- END REF -->

#### Descripción

The `.autoFilled` property <!-- REF DataClassAttributeClass.autoFilled.Summary -->contains True if the attribute value is automatically filled by 4D<!-- END REF -->. Esta propiedad corresponde a las siguientes propiedades de campo 4D:

* "Autoincremento", para campos de tipo numérico
* "Auto UUID", para los campos UUID (tipo alfa).

Esta propiedad no se devuelve si `.kind` = "relatedEntity" o "relatedEntities".
> Para la programación genérica, se puede utilizar **Bool**(dataClassAttribute.autoFilled) para obtener un valor válido (false) aunque no se devuelva `.autoFilled`.

<!-- END REF -->

<!-- REF DataClassAttributeClass.fieldNumber.Desc -->
## .fieldNumber

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |

</details>

<!-- REF DataClassAttributeClass.fieldNumber.Syntax -->

**.fieldNumber** : Integer<!-- END REF -->

#### Descripción

The `.fieldNumber` property <!-- REF DataClassAttributeClass.fieldNumber.Summary -->contains the internal 4D field number of the attribute<!-- END REF -->.

Esta propiedad no se devuelve si `.kind` = "relatedEntity" o "relatedEntities".
> Para la programación genérica, puede utilizar **Num**(dataClassAttribute.fieldNumber) para obtener un valor válido (0) aunque no se devuelva `.fieldNumber`.

<!-- END REF -->

<!-- REF DataClassAttributeClass.fieldType.Desc -->
## .fieldType

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |

</details>

<!-- REF DataClassAttributeClass.fieldType.Syntax -->

**.fieldType** : Integer<!-- END REF -->

#### Descripción

The `.fieldType` property <!-- REF DataClassAttributeClass.fieldType.Summary -->contains the 4D database type of the attribute<!-- END REF -->. .

**Valores posibles:**

| dataClassAttribute.kind | fieldType                        | Comentario            |
| ----------------------- | -------------------------------- | --------------------- |
| storage                 | Tipo de campo 4D correspondiente | Ver el comando `Type` |
| relatedEntity           | 38 (Is object)                   |                       |
| relatedEntities         | 42 (Is collection)               |                       |

<!-- END REF -->

<!-- REF DataClassAttributeClass.indexed.Desc -->
## .indexed

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |

</details>

<!-- REF DataClassAttributeClass.indexed.Syntax -->

**.indexed**: Booleano<!-- END REF -->

#### Descripción

The `.indexed` property <!-- REF DataClassAttributeClass.indexed.Summary -->contains **True** if there is a B-tree or a Cluster B-tree index on the attribute<!-- END REF -->.

Esta propiedad no se devuelve si `.kind` = "relatedEntity" o "relatedEntities".
> Para la programación genérica, se puede utilizar **Bool**(dataClassAttribute.indexed) para obtener un valor válido (false) aunque no se devuelva `.indexed`.

<!-- END REF -->

<!-- REF DataClassAttributeClass.inverseName.Desc -->
## .inverseName

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |

</details>

<!-- REF DataClassAttributeClass.inverseName.Syntax -->

**.inverseName**: Texto<!-- END REF -->

#### Descripción

The `.inverseName` property <!-- REF DataClassAttributeClass.inverseName.Summary -->returns the name of the attribute which is at the other side of the relation<!-- END REF -->.

Esta propiedad no se devuelve si `.kind` = "storage". Debe ser del tipo "relatedEntity" o "relatedEntities".
> Para la programación genérica, puede utilizar **String**(dataClassAttribute.inverseName) para obtener un valor válido ("") aunque no se devuelva `.inverseName`.  

<!-- END REF -->

<!-- REF DataClassAttributeClass.keywordIndexed.Desc -->
## .keywordIndexed

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |

</details>

<!-- REF DataClassAttributeClass.keywordIndexed.Syntax -->

**.keywordIndexed**: Boolean<!-- END REF -->

#### Descripción

The `.keywordIndexed` property <!-- REF DataClassAttributeClass.keywordIndexed.Summary -->contains **True** if there is a keyword index on the attribute<!-- END REF -->.

Esta propiedad no se devuelve si [`.kind`](#kind) = "relatedEntity" o "relatedEntities".
> Para la programación genérica, se puede utilizar **Bool**(dataClassAttribute.keywordIndexed) para obtener un valor válido (false) aunque no se devuelva `.keywordIndexed`.

<!-- END REF -->

<!-- REF DataClassAttributeClass.kind.Desc -->
## .kind

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |

</details>

<!-- REF DataClassAttributeClass.kind.Syntax -->

**.kind** : Text<!-- END REF -->

#### Descripción

The `.kind` property <!-- REF DataClassAttributeClass.kind.Summary -->returns the category of the attribute<!-- END REF -->. El valor devuelto puede ser uno de los siguientes:

* "storage": atributo de almacenamiento (o escalar), es decir, atributo que almacena un valor, no una referencia a otro atributo
* "relatedEntity": N -> 1 atributo de relación (referencia a una entidad)
* "relatedEntities": 1 -> N atributo de relación (referencia a una selección de entidades)

#### Ejemplo

Dada la siguiente tabla y relación:

![](../assets/en/API/dataclassAttribute3.png)

```4d
 var $attKind : Text
 $attKind:=ds.Employee.lastname.kind //$attKind="storage"
 $attKind:=ds.Employee.manager.kind //$attKind="relatedEntity"
 $attKind:=ds.Employee.directReports.kind //$attKind="relatedEntities"
```

<!-- END REF -->

<!-- REF DataClassAttributeClass.mandatory.Desc -->
## .mandatory

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |

</details>

<!-- REF DataClassAttributeClass.mandatory.Syntax -->

**.mandatory**: Booleano<!-- END REF -->

#### Descripción

The `.mandatory` property <!-- REF DataClassAttributeClass.mandatory.Summary -->contains True if Null value input is rejected for the attribute<!-- END REF -->.

Esta propiedad no se devuelve si [`.kind`](#kind) = "relatedEntity" o "relatedEntities".
> Para la programación genérica, se puede utilizar **Bool**(dataClassAttribute.mandatory) para obtener un valor válido (false) aunque no se devuelva `.mandatory`.
> **Atención**: esta propiedad corresponde a la propiedad del campo "Reject NULL value input" a nivel de la base de datos 4D. No tiene relación con la propiedad "Obligatorio" existente, que es una opción de control de entrada de datos para una tabla.

<!-- END REF -->

<!-- REF DataClassAttributeClass.name.Desc -->
## .name

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |

</details>

<!-- REF DataClassAttributeClass.name.Syntax -->

**.name** : Text<!-- END REF -->

#### Descripción

La propiedad `.name` <!-- REF DataClassAttributeClass.name.Summary -->The `.name` property<!-- END REF -->.

#### Ejemplo

```4d
 var $attName : Text
 $attName:=ds.Employee.lastname.name //$attName="lastname"
```

<!-- END REF -->

<!-- REF DataClassAttributeClass.relatedDataClass.Desc -->
## .relatedDataClass

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |

</details>

<!-- REF DataClassAttributeClass.relatedDataClass.Syntax -->

**.relatedDataClass**: Text<!-- END REF -->

#### Descripción
> Para la programación genérica, se puede utilizar**Bool**(dataClassAttribute.unique) para obtener un valor válido (false) aunque no se devuelva `.unique`.

The `.relatedDataClass` property <!-- REF DataClassAttributeClass.relatedDataClass.Summary -->returns the name of the dataclass related to the attribute<!-- END REF -->.

#### Ejemplo

Dadas las siguientes tablas y relaciones:

![](../assets/en/API/dataclassAttribute4.png)

```4d
 var $relClass1; $relClassN : Text
 $relClass1:=ds.Employee.employer.relatedDataClass //$relClass1="Company"
 $relClassN:=ds.Employee.directReports.relatedDataClass //$relClassN="Employee"
```

<!-- END REF -->

<!-- REF DataClassAttributeClass.type.Desc -->
## .type

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |

</details>

<!-- REF DataClassAttributeClass.type.Syntax -->

**.type** : Text<!-- END REF -->

#### Descripción

The `.type` property <!-- REF DataClassAttributeClass.type.Summary -->contains the conceptual value type of the attribute<!-- END REF -->, useful for generic programming.

El tipo de valor conceptual depende del atributo [`.kind`](#kind).

**Valores posibles:**

| dataClassAttribute.kind | type                                                    | Comentario                                                                                                                                 |
| ----------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| storage                 | "number", "date", "object", "bool", "image", o "string" | "number" se devuelve para cualquier tipo numérico, incluyendo la duración. "string" se devuelve para los tipos de campo uuid, alfa y texto |
| relatedEntity           | related dataClass name                                  | Ej.: "Companies"                                                                                                                           |
| relatedEntities         | related dataClass name + "Selection" suffix             | Ej.: "EmployeeSelection"                                                                                                                   |

<!-- END REF -->

<!-- REF DataClassAttributeClass.unique.Desc -->
## .unique

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |

</details>

<!-- REF DataClassAttributeClass.unique.Syntax -->

**.unique** : Boolean<!-- END REF -->

#### Descripción

The `.unique` property <!-- REF DataClassAttributeClass.unique.Summary -->contains True if the attribute value must be unique<!-- END REF -->. Esta propiedad corresponde a la propiedad de campo 4D "Unique".

Esta propiedad no se devuelve si [`.kind`](#kind) = "relatedEntity" o "relatedEntities".
> Para la programación genérica, se puede utilizar**Bool**(dataClassAttribute.unique) para obtener un valor válido (false) aunque no se devuelva `.unique`.

<!-- END REF -->
