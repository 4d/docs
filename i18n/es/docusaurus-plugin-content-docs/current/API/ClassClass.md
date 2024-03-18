---
id: ClassClass
title: Class
---


Cuando una clase usuario es [definida](Concepts/classes.md#class-definition) en el proyecto, se carga en el entorno del lenguaje 4D. Una clase es un objeto en sí mismo, de la clase "Class", que tiene propiedades y una función.



### Resumen


|                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #ClassClass.isShared.Syntax -->](#isshared)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #ClassClass.isShared.Summary -->|
| [<!-- INCLUDE #ClassClass.isSingleton.Syntax -->](#issingleton)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #ClassClass.isSingleton.Summary -->|
| [<!-- INCLUDE #ClassClass.me.Syntax -->](#me)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #ClassClass.me.Summary -->|
| [<!-- INCLUDE #ClassClass.name.Syntax -->](#name)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #ClassClass.name.Summary -->|
| [<!-- INCLUDE #ClassClass.new().Syntax -->](#new)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #ClassClass.new().Summary --> |
| [<!-- INCLUDE #ClassClass.superclass.Syntax -->](#superclass)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #ClassClass.superclass.Summary --> |



<!-- REF ClassClass.isShared.Desc -->
## .isShared

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v20 R5  | Añadidos       |

</details>

<!-- REF #ClassClass.isShared.Syntax -->**.isShared** : Boolean<!-- END REF -->

#### Descripción

The `.isShared` property <!-- REF #ClassClass.isShared.Summary -->returns `true` if the user class has been defined as [shared class](../Concepts/classes.md#shared-classes)<!-- END REF -->, and `false` otherwise.

Esta propiedad es **de sólo lectura**.

<!-- END REF -->


<!-- REF ClassClass.isSingleton.Desc -->
## .isSingleton

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v20 R5  | Añadidos       |

</details>

<!-- REF #ClassClass.isSingleton.Syntax -->**.isSingleton** : Boolean<!-- END REF -->

#### Descripción

The `.isSingleton` property <!-- REF #ClassClass.isSingleton.Summary -->returns `true` if the user class has been defined as a [singleton class](../Concepts/classes.md#singleton-classes)<!-- END REF -->, and `false` otherwise.

Esta propiedad es **de sólo lectura**.

<!-- END REF -->


<!-- REF ClassClass.me.Desc -->
## .me

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v20 R5  | Añadidos       |

</details>

<!-- REF #ClassClass.me.Syntax -->**.me** : 4D.Class<!-- END REF -->

#### Descripción

The `.me` property <!-- REF #ClassClass.me.Summary -->returns the singleton instance of the `cs.className` singleton class<!-- END REF -->. If the singleton class was never instantiated beforehand, this property calls the class constructor without parameters and creates the instance. Otherwise, it returns the existing singleton instance.

If `cs.className` is not a [singleton class](../Concepts/classes.md#singleton-classes), `.me` is **undefined** by default.

Esta propiedad es **de sólo lectura**.

<!-- END REF -->


<!-- REF ClassClass.name.Desc -->
## .name

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v18 R3  | Añadidos       |

</details>

<!-- REF #ClassClass.name.Syntax -->**.name** : Text<!-- END REF -->

#### Descripción

La propiedad `.name` <!-- REF #ClassClass.name.Summary -->contiene el nombre del objeto `4D.Class`<!-- END REF -->. .

Esta propiedad es **de sólo lectura**.

<!-- END REF -->



<!-- REF ClassClass.new().Desc -->
## .new()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v18 R3  | Añadidos       |

</details>

<!-- REF #ClassClass.new().Syntax -->**.new**( { *...param* : any } ) : 4D.Class<!-- END REF -->



<!-- REF #ClassClass.new().Params -->
| Parámetros | Tipo     |    | Descripción                                   |
| ---------- | -------- |:--:| --------------------------------------------- |
| param      | any      | -> | Parámetro(s) a pasar a la función constructor |
| Result     | 4D.Class | <- | Nuevo objeto de la clase                      |
<!-- END REF -->


#### Descripción

La función `.new()` <!-- REF #ClassClass.new().Summary -->crea y devuelve un objeto `cs.className` que es una nueva instancia de la clase sobre la que se llama<!-- END REF -->. Esta función está disponible automáticamente en todas las clases del class store [`cs`](Concepts/classes.md#cs).

You can pass one or more optional *param* parameters, which will be passed to the [class constructor](Concepts/classes.md#class-constructor) function (if any) in the *className* class definition. Dentro de la función constructor, [`This`](Concepts/classes.md#this) está ligado al nuevo objeto que se está construyendo.

:::note Notas

- If `.new()` is called on a [singleton class](../Concepts/classes.md#singleton-classes) that has already been instantiated, the singleton instance is returned, not a new instance.
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

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v18 R3  | Añadidos       |

</details>

<!-- REF #ClassClass.superclass.Syntax -->**.superclass** : 4D.Class<!-- END REF -->

#### Descripción

La propiedad `.superclass` <!-- REF #ClassClass.superclass.Summary -->devuelve la clase padre de la clase<!-- END REF -->. Una superclase puede ser un objeto `4D.Class`, o un objeto `cs.className`. Si la clase no tiene una clase padre, la propiedad devuelve **null**.

Una superclase de clase usuario se declara en una clase utilizando la palabra clave the [`Class extends <superclass>`](Concepts/classes.md#class-extends-classname).

Esta propiedad es **de sólo lectura**.

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
