---
id: formula
title: Formula
slug: /commands/formula
displayed_sidebar: docs
---

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                                         |
| ----------- | ------------------------------------------------------ |
| 17 R6       | Renombrado (New formula -> Formula) |
| 17 R3       | Añadidos                                               |

</details>

<!-- REF #_command_.Formula.Syntax -->**Formula** ( *formulaExp* : Expression ) : 4D.Function<!-- END REF -->

<!-- REF #_command_.Formula.Params -->

| Parámetros | Tipo                        |     | Descripción                             |
| ---------- | --------------------------- | :-: | --------------------------------------- |
| formulaExp | Expression                  |  →  | Fórmula a devolver como objeto          |
| Result     | 4D.Function |  ←  | Función nativa que encapsula la fórmula |

<!-- END REF -->

#### Descripción

El comando `Formula` <!-- REF #_command_.Formula.Summary -->crea un objeto `4D Function` basado en la expresión *formulaExp*<!-- END REF -->. *formulaExp* puede ser tan simple como un valor único o complejo, como un método proyecto con parámetros.

Tener una fórmula como objeto permite pasarla como parámetro (atributo calculado) a los comandos o a los métodos o ejecutarla desde varios componentes sin necesidad de declararla como "compartida por los componentes y la base de datos local". Cuando se llama, el objeto fórmula se evalúa en el contexto de la base de datos o del componente que lo creó.

La fórmula devuelta puede ser llamada con:

- los métodos [`.call()`](#call) o [`.apply()`](#apply), o
- la sintaxis de notación objeto (ver [objeto formula](#formula-object)).

```4d
 var $f : 4D.Function
 $f:=Formula(1+2)
 $o:=New object("myFormula";$f)

  //tres formas diferentes de llamar a la fórmula
 $f.call($o) //devuelve 3
 $f.apply($o) //devuelve 3
 $o.myFormula() //devuelve 3
```

Puede pasar [parámetros](#passing-parameters) a `Formula`, como se muestra a continuación en el [ejemplo 4](#example-4).

Se puede especificar el objeto sobre el que se ejecuta la fórmula, como se ve en [ejemplo 5](#ejemplo-5). Se puede acceder a las propiedades del objeto mediante el comando `This`.

Si *formulaExp* utiliza variables locales, sus valores se copian y almacenan en el objeto fórmula devuelto durante su creación. Cuando se ejecuta, la fórmula utiliza estos valores copiados en lugar del valor actual de las variables locales. Tenga en cuenta que no se soporta el uso de arrays como variables locales.

El objeto creado por `Formula` puede guardarse, por ejemplo, en un campo de base de datos o en un documento blob.

#### Ejemplo 1

Una fórmula simple:

```4d
 var $f : 4D.Function
 $f:=Formula(1+2)

 var $o : Object
 $o:=New object("f";$f)

 $result:=$o.f() // devuelve 3
```

#### Ejemplo 2

Una fórmula utilizando variables locales:

```4d


 $value:=10
 $o:=New object("f";Formula($value))
 $value:=20

 $result:=$o.f() // devuelve 10
```

#### Ejemplo 3

Una fórmula sencilla que utiliza parámetros:

```4d
 $o:=New object("f";Formula($1+$2))
 $result:=$o.f(10;20) //devuelve 30
```

#### Ejemplo 4

Una fórmula utilizando un método proyecto con parámetros:

```4d
 $o:=New object("f";Formula(myMethod))
 $result:=$o.f("param1";"param2") // equivalente a $result:=myMethod("param1";"param2")
```

#### Ejemplo 5

Utilizando `This`:

```4d
 $o:=New object("fullName";Formula(This.firstName+" "+This.lastName))
 $o.firstName:="John"
 $o.lastName:="Smith"
 $result:=$o.fullName() //devuelve "John Smith"
```

#### Ejemplo 6

Llamar a una fórmula utilizando la notación de objetos:

```4d
 var $feta; $robot : Object
 var $calc : 4D.Function
 $robot:=New object("name";"Robot";"price";543;"quantity";2)
 $feta:=New object("name";"Feta";"price";12.5;"quantity";5)

 $calc:=Formula(This.total:=This.price*This.quantity)

  //define la fórmula de las propiedades del objeto
 $feta.calc:=$calc
 $robot.calc:=$calc

  //llama la fórmula
 $feta.calc() // $feta={name:Feta,price:12.5,quantity:5,total:62.5,calc:"[object Formula]"}
 $robot.calc() // $robot={name:Robot,price:543,quantity:2,total:1086,calc:"[object Formula]"}
```

#### Ver también

[4D Blog - Formula: More power behind simplicity](https://blog.4d.com/new-formula-more-power-behind-simplicity/)\
[4D Blog - Formula: Think outside the box](https://blog.4d.com/new-formula-think-outside-the-box/)\
[4D Blog - Write your own methods for objects](https://blog.4d.com/write-your-own-methods-for-objects/)\
[Formula from string](formula-from-string.md)

#### Propiedades

|                |                                                                 |
| -------------- | --------------------------------------------------------------- |
| Command number | 1597                                                            |
| Thread safe    | &amp;amp;amp;amp;amp;amp;amp;amp;amp;check; |
