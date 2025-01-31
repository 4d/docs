---
id: super
title: Super
displayed_sidebar: docs
---

<!-- REF #_command_.Super.Syntax -->**Super**( ...param : any )<br/>**Super** : Object<!-- END REF -->

<!-- REF #_command_.Super.Params -->

| Parâmetro  | Tipo   |                             | Descrição                                                      |
| ---------- | ------ | --------------------------- | -------------------------------------------------------------- |
| param      | any    | ->                          | Parâmetro(s) a passar para o construtor pai |
| Resultados | Object | <- | Pai do objecto                                                 |

<!-- END REF -->

A palavra-chave `Super` <!-- REF #_command_.Super.Summary -->permite chamadas à `superclasse`, ou seja, a classe pai<!-- END REF -->.

`Super` tem dois objectivos diferentes:

1. Inside a [constructor code]((../Concepts/classes.md#class-constructor), `Super` is a command that allows to call the constructor of the superclass. When used in a constructor, the `Super` command appears alone and must be used before the [`This`](this.md) keyword is used.

- Se todos os construtores de classe na árvore de herança não forem correctamente chamados, é gerado o erro -10748. É o programador 4D que se certifica de que as chamadas são válidas.
- Se o comando `This` for chamado em um objeto cujas superclasses não foram construídas, o erro -10743 será gerado.
- Se o `Super` é chamado fora do escopo do objeto, ou em um objeto cujo construtor de superclasse já foi chamado, erro -10746 é gerado.

```4d
// dentro do construtor myClass
var $text1; $text2 : Text
Super($text1) //chama o construtor da superclasse com um parâmetro de texto
This.param:=$text2 // usa o segundo parâmetro
```

2. Inside a [class function](#class-function), `Super` designates the prototype of the [`superclass`](../API/ClassClass.md#superclass) and allows to call a function of the superclass hierarchy.

```4d
Super.doSomething(42) //chamada a função "doSomething"  
//declarada em superclasses
```

#### Exemplo 1

Este exemplo ilustra o uso do `Super` em um construtor de classe. O comando é chamado para evitar duplicar as partes do construtor que são comuns entre as classes `Rectangle` e `Square`.

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

#### Exemplo 2

This example illustrates the use of `Super` in a class function. Você criou a classe `Rectangle` com uma função:

```4d
//Class: Rectangle

Function nbSides() : Text
 return "I have 4 sides"
```

Você também criou a classe `Square` com uma função que chama a função da superclasse:

```4d
//Class: Square

Class extends Rectangle

Function description() : Text
  return Super.nbSides()+" which are all equal"
```

Depois pode escrever num método projecto:

```4d
Parâmetros
```

#### Veja também

[**Página conceito para classes**](../Concepts/classes.md).

#### Propriedades

|                |                                 |
| -------------- | ------------------------------- |
| Command number | 1706                            |
| Thread safe    | &amp;check; |
