---
id: ClassClass
title: Class
---

When a user class is [defined](Concepts/classes.md#class-definition) in the project, it is loaded in the 4D language environment. Una clase es un objeto en sí mismo, de la clase "Class", que tiene propiedades y una función.

### Resumen

|                                                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #ClassClass.isShared.Syntax -->](#isshared)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #ClassClass.isShared.Summary -->          |
| [<!-- INCLUDE #ClassClass.isSingleton.Syntax -->](#issingleton)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #ClassClass.isSingleton.Summary --> |
| [<!-- INCLUDE #ClassClass.me.Syntax -->](#me)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #ClassClass.me.Summary -->                            |
| [<!-- INCLUDE #ClassClass.name.Syntax -->](#name)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #ClassClass.name.Summary -->                      |
| [<!-- INCLUDE #ClassClass.new().Syntax -->](#new)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #ClassClass.new().Summary -->                     |
| [<!-- INCLUDE #ClassClass.superclass.Syntax -->](#superclass)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #ClassClass.superclass.Summary -->    |

<!-- REF ClassClass.isShared.Desc -->

## .isShared

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20 R5       | Añadidos       |

</details>

<!-- REF #ClassClass.isShared.Syntax -->**.isShared** : Boolean<!-- END REF -->

#### Descripción

The `.isShared` property <!-- REF #ClassClass.isShared.Summary -->returns `true` if the user class has been defined as [shared class](../Concepts/classes.md#shared-classes)<!-- END REF -->, and `false` otherwise.

This property is **read-only**.

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

The `.isSingleton` property <!-- REF #ClassClass.isSingleton.Summary -->returns `true` if the user class has been defined as a [singleton class](../Concepts/classes.md#singleton-classes)<!-- END REF -->, and `false` otherwise.

This property is **read-only**.

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

The `.me` property <!-- REF #ClassClass.me.Summary -->returns the singleton instance of the `cs.className` singleton class<!-- END REF -->. Si la clase singleton nunca fue instanciada de antemano, esta propiedad llama al constructor de la clase sin parámetros y crea la instancia. En caso contrario, devuelve la instancia singleton existente.

If `cs.className` is not a [singleton class](../Concepts/classes.md#singleton-classes), `.me` is **undefined** by default.

This property is **read-only**.

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

The `.name` property <!-- REF #ClassClass.name.Summary -->contains the name of the `4D.Class` object<!-- END REF -->. .

This property is **read-only**.

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

| Parámetros | Tipo                     |     | Descripción                                                      |
| ---------- | ------------------------ | :-: | ---------------------------------------------------------------- |
| param      | any                      |  -> | Parámetro(s) a pasar a la función constructor |
| Result     | 4D.Class |  <- | Nuevo objeto de la clase                                         |

<!-- END REF -->

#### Descripción

The `.new()` function <!-- REF #ClassClass.new().Summary -->creates and returns a `cs.className` object which is a new instance of the class on which it is called<!-- END REF -->. This function is automatically available on all classes from the [`cs` class store](Concepts/classes.md#cs).

You can pass one or more optional _param_ parameters, which will be passed to the [class constructor](Concepts/classes.md#class-constructor) function (if any) in the _className_ class definition. Within the constructor function, the [`This`](Concepts/classes.md#this) is bound to the new object being constructed.

:::note Notas

- If `.new()` is called on a [singleton class](../Concepts/classes.md#singleton-classes) that has already been instantiated, the singleton instance is returned, not a new instance.
- If `.new()` is called on a non-existing class, an error is returned.

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

The `.superclass` property <!-- REF #ClassClass.superclass.Summary -->returns the parent class of the class<!-- END REF -->. A superclass can be a `4D.Class` object, or a `cs.className` object. If the class does not have a parent class, the property returns **null**.

A superclass of a user class is declared in a class by using the [`Class extends <superclass>`](Concepts/classes.md#class-extends-classname) keyword.

This property is **read-only**.

#### Ejemplos

```4d
$sup:=4D.File.superclass //Document
$sup:=4D.Document.superclass //Object
$sup:=4D.Object.superclass //null

// If you created a MyFile class  
// with `Class extends File`
$sup:=cs.MyFile.superclass //File

```

**See also:** [Super](Concepts/classes.md#super)

<!-- END REF -->
