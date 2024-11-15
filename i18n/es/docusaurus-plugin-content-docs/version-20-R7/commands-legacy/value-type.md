---
id: value-type
title: Value type
slug: /commands/value-type
displayed_sidebar: docs
---

<!--REF #_command_.Value type.Syntax-->**Value type** ( *expresion* ) : Integer<!-- END REF-->
<!--REF #_command_.Value type.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| expresion | Expression | &#8594;  | Expresión cuyo valor resultante debe ser probado |
| Resultado | Integer | &#8592; | Número de tipo de dato |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Value type.Summary-->El comando Value type devuelve el tipo del valor resultante de la evaluación de la *expresion* que pasó como parámetro.<!-- END REF--> 

El comando devuelve un valor numérico que se puede comparar con una de las siguientes constantes del tema *Tipos de campos y variables*: 

| Constante     | Tipo         | Valor |
| ------------- | ------------ | ----- |
| \_o\_Is float | Entero largo | 35    |
| Is BLOB       | Entero largo | 30    |
| Is Boolean    | Entero largo | 6     |
| Is collection | Entero largo | 42    |
| Is date       | Entero largo | 4     |
| Is longint    | Entero largo | 9     |
| Is null       | Entero largo | 255   |
| Is object     | Entero largo | 38    |
| Is picture    | Entero largo | 3     |
| Is pointer    | Entero largo | 23    |
| Is real       | Entero largo | 1     |
| Is text       | Entero largo | 2     |
| Is time       | Entero largo | 11    |
| Is undefined  | Entero largo | 5     |
| Is variant    | Entero largo | 12    |
| Object array  | Entero largo | 39    |

Este comando está designado para devolver el tipo de una expresión escalar, por ejemplo el valor almacenado o devuelto por el parámetro *expresion*. En particular, se puede aplicar a las siguientes expresiones 4D:

* Propiedades del objetos (*emp.name*),
* Elementos de la colección (*myCol\[5\]*).

**Nota**: las propiedades numéricas de los objetos siempre se consideran valores reales:

```4d
 var $o : Object
 $o:=New object("value";42)
 $vType:=Value type($o.value) //$vType=Is real
```

**Value type** se puede aplicar a cualquier expresión 4D válida, incluyendo campos, variables y parámetros. En este caso, a diferencia del comando [Type](type.md), **Value type** devuelve el tipo *internal* del valor resultante de la evaluación de la *expresion* y no su tipo declarado. Dado que el lenguaje 4D convierte algunos tipos de valores internamente, el resultado de **Value type** puede diferir del tipo declarado. Por ejemplo, 4D convierte internamente los valores de campo de tipo "*Entero 64 bits*". Esto da los siguientes resultados:

```4d
 $vType1:=Type([myTable]Long64field) //$vType=Is integer 64 bits
 $vType2:=Value type([myTable]Long64field) //$vType=Is real (en modo interpretado)
```

Otras diferencias están relacionadas con arrays (la evaluación de una array devuelve el índice de elementos actual) y el modo compilado. En la tabla siguiente se enumeran estas diferencias:

| **Tipo declarado**     | [Type](type.md) **resultado** | **Value type resultado (interpretado)** | **Value type resultado (compilado)** | **Comentario**                                                                                          |
| ---------------------- | ----------------------------- | --------------------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| ARRAY TEXT($t;1)       | Text array                    | Is real                                 | Is longint                           | $t contiene el índice del elemento actual, que es un número                                             |
| Campo *Alfa*           | Is alpha field                | Is text                                 | Is text                              | 4D maneja internamente todas las cadenas como textos                                                    |
| Campo *Entero*         | Is integer                    | Is real                                 | Is longint                           | Por motivos de optimización, en modo interpretado todos los valores numéricos se consideran reales y... |
| Campo *Entero largo*   | Is longint                    | Is real                                 | Is longint                           | ... en modo compilado, todos los valores enteros se consideran enteros largos (\*)                      |
| Campo *Entero 64 bits* | Is integer 64 bits            | Is real                                 | Is longint                           |                                                                                                         |

(\*) Si desea escribir una prueba para un valor de tipo numérico válido para los modos compilado e interpretado, puede considerar el uso de un código como:

```4d
 If(Value type($myValue)=Is longint)|(Value type($myValue)=Is real)
```

**Nota de compatibilidad:** a partir de 4D v16 R6, las fechas se almacenan en las propiedades objeto, ya sea con el tipo fecha o como texto en formato de fecha ISO. Para más información, consulte el selector Dates inside objects del comando [SET DATABASE PARAMETER](set-database-parameter.md).

#### Ejemplo 1 

Usted desea manejar los varios tipos posibles de un valor propiedad objeto:

```4d
 Case of
    :(Value type($o.value)=Is real)
  //handle a numeric value
    :(Value type($o.value)=Is text)
  //handle a text
    :(Value type($o.value)=Is object)
  //handle a sub-object
       ...
 End case
```

#### Ejemplo 2 

Desea obtener la suma de todos los valores numéricos en una colección:

```4d
 var $col : Collection
 var $sum : Real
 $col:=New collection("Hello";20;"World2";15;50;Current date;True;10)
 For($i;0;$col.length-1) //-1 since collections start at 0
    If(Value type($col[$i])=Is real)
       $sum:=$sum+$col[$i]
    End if
 End for
 ALERT(String($sum)) //95
```

#### Ver también 

[OB Get type](ob-get-type.md)  
[Type](type.md)  