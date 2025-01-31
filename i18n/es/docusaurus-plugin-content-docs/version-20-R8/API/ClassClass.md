---
id: ClassClass
title: Class
---

Cuando una clase usuario es [definida](Concepts/classes.md#class-definition) en el proyecto, se carga en el entorno del lenguaje 4D. Una clase es un objeto en sí mismo, de la clase "Class", que tiene propiedades y una función.

### Resumen

|                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #ClassClass.isSessionSingleton.Syntax -->](#issessionsingleton)<br/><!-- INCLUDE #ClassClass.isSessionSingleton.Summary --> |
| [<!-- INCLUDE #ClassClass.isShared.Syntax -->](#isshared)<br/><!-- INCLUDE #ClassClass.isShared.Summary -->                               |
| [<!-- INCLUDE #ClassClass.isSingleton.Syntax -->](#issingleton)<br/><!-- INCLUDE #ClassClass.isSingleton.Summary -->                      |
| [<!-- INCLUDE #ClassClass.me.Syntax -->](#me)<br/><!-- INCLUDE #ClassClass.me.Summary -->                                                 |
| [<!-- INCLUDE #ClassClass.name.Syntax -->](#name)<br/><!-- INCLUDE #ClassClass.name.Summary -->                                           |
| [<!-- INCLUDE #ClassClass.new().Syntax -->](#new)<br/><!-- INCLUDE #ClassClass.new().Summary -->                                          |
| [<!-- INCLUDE #ClassClass.superclass.Syntax -->](#superclass)<br/><!-- INCLUDE #ClassClass.superclass.Summary -->                         |

<!-- REF ClassClass.isSessionSingleton.Desc -->

## .isSessionSingleton

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20 R7       | Añadidos       |

</details>

<!-- REF #ClassClass.isSessionSingleton.Syntax -->**.isSessionSingleton** : Boolean<!-- END REF -->

#### Descripción

La propiedad `.isSessionSingleton` <!-- REF #ClassClass.isSessionSingleton.Summary -->devuelve `true` si la clase usuario ha sido definida como una [clase singleton de sesión](../Concepts/classes.md#singleton-classes)<!-- END REF -->, y `false` en caso contrario.

Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF ClassClass.isShared.Desc -->

## .isShared

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20 R5       | Añadidos       |

</details>

<!-- REF #ClassClass.isShared.Syntax -->**.isShared** : Boolean<!-- END REF -->

#### Descripción

La propiedad `.isShared` <!-- REF #ClassClass.isShared.Summary -->devuelve `true` si la clase de usuario ha sido definida como [clase compartida](../Concepts/classes.md#shared-classes)<!-- END REF -->, y `false` en caso contrario.

Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF ClassClass.isSingleton.Desc -->

## .isSingleton

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20 R5       | Añadidos       |

</details>

<!-- REF #ClassClass.isSingleton.Syntax -->**.isSingleton** : Boolean<!-- END REF -->

#### Descripción

La propiedad `.isSingleton` <!-- REF #ClassClass.isSingleton.Summary -->devuelve `true` si la clase usuario ha sido definida como una [clase singleton](../Concepts/classes.md#singleton-classes)<!-- END REF -->, y `false` en caso contrario.

Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF ClassClass.me.Desc -->

## .me

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20 R5       | Añadidos       |

</details>

<!-- REF #ClassClass.me.Syntax -->**.me** : 4D.Class<!-- END REF -->

#### Descripción

La propiedad `.me` <!-- REF #ClassClass.me.Summary -->devuelve la instancia única de la clase singleton `cs.className`<!-- END REF -->. Si la clase singleton nunca fue instanciada de antemano, esta propiedad llama al constructor de la clase sin parámetros y crea la instancia. En caso contrario, devuelve la instancia singleton existente.

Si `cs.className` no es una [clase singleton](../Concepts/classes.md#singleton-classes), `.me` es **undefined** por defecto.

Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF ClassClass.name.Desc -->

## .name

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R3       | Añadidos       |

</details>

<!-- REF #ClassClass.name.Syntax -->**.name** : Text<!-- END REF -->

#### Descripción

La propiedad `.name` <!-- REF #ClassClass.name.Summary -->contiene el nombre del objeto `4D.Class`<!-- END REF -->. .

Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF ClassClass.new().Desc -->

## .new()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R3       | Añadidos       |

</details>

<!-- REF #ClassClass.new().Syntax -->**.new**( { *...param* : any } ) : 4D.Class<!-- END REF -->

<!-- REF #ClassClass.new().Params -->

| Parámetros | Tipo                     |                             | Descripción                                                      |
| ---------- | ------------------------ | :-------------------------: | ---------------------------------------------------------------- |
| param      | any                      |              ->             | Parámetro(s) a pasar a la función constructor |
| Result     | 4D.Class | <- | Nuevo objeto de la clase                                         |

<!-- END REF -->

#### Descripción

La función `.new()` <!-- REF #ClassClass.new().Summary -->crea y devuelve un objeto `cs.className` que es una nueva instancia de la clase sobre la que se llama<!-- END REF -->. Esta función está disponible automáticamente en todas las clases a partir del [class store `cs`](Concepts/classes.md#cs).

Puede pasar uno o más parámetros opcionales *param*, que se pasarán a la [función class constructor](Concepts/classes.md#class-constructor) (si existe) en la definición de la clase *className*. Dentro de la función constructor, el [`This`](Concepts/classes.md#this) está vinculado al nuevo objeto que se está construyendo.

:::note Notas

- Si se llama a `.new()` en una [clase singleton](../Concepts/classes.md#singleton-classes) que ya ha sido instanciada, se devuelve la instancia singleton, no una nueva instancia.
- Si se llama a `.new()` en una clase inexistente, se devuelve un error.

:::

#### Ejemplos

Para crear una nueva instancia de la clase Person:

```4d
var $person : cs.Person  
$person:=cs.Person.new() //crear la nueva instancia  
//$person contiene las funciones de la clase
```

Para crear una nueva instancia de la clase Person con parámetros:

```4d
//Class: Person.4dm
Class constructor($firstname : Text; $lastname : Text; $age : Integer)
	This.firstName:=$firstname
	This.lastName:=$lastname
	This.age:=$age
```

```4d
//En un método
var $person : cs.Person  
$person:=cs.Person.new("John";"Doe";40)  
//$person.firstName = "John"
//$person.lastName = "Doe"
//$person.age = 40
```

<!-- END REF -->

<!-- REF ClassClass.superclass.Desc -->

## .superclass

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R3       | Añadidos       |

</details>

<!-- REF #ClassClass.superclass.Syntax -->**.superclass** : 4D.Class<!-- END REF -->

#### Descripción

La propiedad `.superclass` <!-- REF #ClassClass.superclass.Summary -->devuelve la clase padre de la clase<!-- END REF -->. Una superclase puede ser un objeto `4D.Class`, o un objeto `cs.className`. Si la clase no tiene una clase padre, la propiedad devuelve **null**.

Una superclase de una clase usuario se declara en una clase utilizando la palabra clave [`Class extends <superclass>`](Concepts/classes.md#class-extends-classname).

Esta propiedad es de **solo lectura**.

#### Ejemplos

```4d
$sup:=4D.File.superclass //Document
$sup:=4D.Document.superclass //Object
$sup:=4D.Object.superclass //null

// Si creó una clase MyFile
// with `Class extends File`
$sup:=cs.MyFile.superclass //File

```

**Ver también:** [Super](Concepts/classes.md#super)

<!-- END REF -->
