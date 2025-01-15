---
id: super
title: Super
displayed_sidebar: docs
---

<!-- REF #_command_.Super.Syntax -->**Super**( ...param : any )<br/>**Super** : Object<!-- END REF -->

<!-- REF #_command_.Super.Params -->

| Parámetros | Tipo   |                             | Descripción                                                              |
| ---------- | ------ | --------------------------- | ------------------------------------------------------------------------ |
| param      | any    | ->                          | Parámetro(s) a pasar al constructor de la clase padre |
| Result     | Object | <- | Padre del objeto                                                         |

<!-- END REF -->

La palabra clave `Super` <!-- REF #_command_.Super.Summary -->permite llamar a la `superclass`, es decir, la clase padre<!-- END REF -->.

`Super` tiene dos propósitos diferentes:

1. Inside a [constructor code]((../Concepts/classes.md#class-constructor), `Super` is a command that allows to call the constructor of the superclass. When used in a constructor, the `Super` command appears alone and must be used before the [`This`](this.md) keyword is used.

- Si todos los class constructors en el árbol de herencia no son llamados correctamente, se genera el error -10748. Es responsabilidad del desarrollador 4D asegurarse de que las llamadas sean válidas.
- Si el comando `This` es llamado en un objeto cuyas superclases no han sido construidas, se genera el error -10743.
- Si se llama a `Super` fuera de un contexto de objeto, o en un objeto cuyo constructor de superclase ya ha sido llamado, se genera el error -10746.

```4d
// dentro del constructor myClass
var $text1; $text2 : Texto
Super($text1) //llamada del constructor de la superclase con un parámetro texto
Este. aram:=$text2 // usar un segundo parámetro
```

2. Inside a [class function](#class-function), `Super` designates the prototype of the [`superclass`](../API/ClassClass.md#superclass) and allows to call a function of the superclass hierarchy.

```4d
Super.doSomething(42) //llama a la función "doSomething"  
//declarada en superclases
```

#### Ejemplo 1

Este ejemplo ilustra el uso de `Super` en un class constructor. El comando es llamado para evitar duplicar las partes del constructor que son comunes entre las clases `Rectangle` y `Square`.

```4d
// Class: Rectangle
Class constructor($width : Integer; $height : Integer)
 This.name:="Rectangle"
 This.height:=$height
 This.width:=$width


Function sayName()
 ALERT("Hi, I am a "+This.name+".")

// Function definition
Function getArea() : Integer

 return (This.height)*(This.width)
```

```4d
//Class: Square

Class extends Rectangle

Class constructor ($side : Integer)

 // It calls the parent class's constructor with lengths
 // provided for the Rectangle's width and height
 Super($side;$side)
 // In derived classes, Super must be called 
 // before you can use 'This'
 This.name:="Square"

Function getArea() : Integer
 return This.height*This.width
```

#### Ejemplo 2

This example illustrates the use of `Super` in a class function. Ha creado la clase `Rectangle` con una función:

```4d
//Class: Rectangle

Function nbSides() : Text
 return "I have 4 sides"
```

También creó la clase `Square` con una función que llama a la función superclase:

```4d
//Class: Square

Class extends Rectangle

Function description() : Text
  return Super.nbSides()+" which are all equal"
```

Entonces puede escribir en un método proyecto:

```4d
var $square : Objeto
var $message : Texto
$square:=cs.Square.new()
$message:=$square.description() //tengo 4 lados iguales
```

#### Ver también

[**Concept page for Classes**](../Concepts/classes.md).

#### Propiedades

|                |                                                                     |
| -------------- | ------------------------------------------------------------------- |
| Command number | 1706                                                                |
| Thread safe    | &amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;check; |
