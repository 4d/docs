---
id: resolve-pointer
title: RESOLVE POINTER
slug: /commands/resolve-pointer
displayed_sidebar: docs
---

<!--REF #_command_.RESOLVE POINTER.Syntax-->**RESOLVE POINTER** ( *puntero* ; *nomVar* ; *numTabla* ; *numCamp* )<!-- END REF-->
<!--REF #_command_.RESOLVE POINTER.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| puntero | Pointer | &#8594;  | Puntero del cual recuperar el objeto referenciado |
| nomVar | Text | &#8592; | Nombre de la variable referenciada o cadena vacía |
| numTabla | Integer | &#8592; | Número de la tabla o del elemento del array referenciado o 0 o -1 |
| numCamp | Integer | &#8592; | Número del campo referenciado o 0 |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.RESOLVE POINTER.Summary-->El comando RESOLVE POINTER recupera la información del objeto referenciado por la expresión de puntero *puntero* y la devuelve en los parámetros *nomVar*, *numTabla,* y *numCamp*.<!-- END REF-->

Dependiendo de la naturaleza del objeto referenciado, RESOLVE POINTER devuelve los siguientes valores:

| **Objeto referenciado** | **Parámetros**        |                                |                                   |
| ----------------------- | --------------------- | ------------------------------ | --------------------------------- |
| nomVar                  | numTabla              | numCamp                        |                                   |
| Nada (NIL pointer)      | "" (cadena vacía)     | 0                              | 0                                 |
| Variable                | Nombre de la variable | \-1                            | \-1                               |
| Array                   | Nombre del array      | \-1                            | 0                                 |
| Elemento de array       | Nombre del array      | número del elemento            | \-1                               |
| Elemento de array 2D    | Nombre del array 2D   | número de la fila del elemento | número de la columna del elemento |
| Tabla                   | "" (cadena vacía)     | número de la tabla             | 0                                 |
| Campo                   | "" (cadena vacía)     | número de la tabla             | número del campo                  |

**Notas:** 
  
• Si el valor que pasa en *puntero* no es una expresión de tipo puntero, se generará un error de sintaxis.  
• El comando RESOLVE POINTER no funciona con punteros a variables locales. De hecho, por definición muchas variables locales con el mismo nombre podrían existir en diferentes lugares, de manera que no es posible para el comando encontrar la variable correcta.

#### Ejemplo 1 

En un formulario, usted crea un grupo de 100 variables editables llamadas v1, v2... v100\. Para hacer esto, usted realiza los siguientes pasos:

a. Crea una variable editable que llama v. 

b. Define las propiedades del objeto. 

c. Asocia el siguiente método al objeto:

```4d
 HacerAlgo(Self) // HacerAlgo es un método de proyecto de su base
```

  
d. En este punto, puede duplicar la variable tantas veces como sea necesario, o utilizar la funcionalidad Duplicar sobre matriz en el editor de formularios.

e. En el método HacerAlgo, si necesita conocer el índice de la variable para la cual se llama el método, escribe:

```4d
 RESOLVE POINTER($1;$vsNomVar;$vlNumTabla;$vlNumCampo)
 $vlNomVar:=Num(Substring($vsNomVar;2))
```

Note que construyendo su formulario de esta manera, usted escribe los métodos para las 100 variables sólo una vez; no necesita escribir HacerAlgo (1), HacerAlgo (2)...,HacerAlgo (100).

#### Ejemplo 2 

Por propósitos de depuración, necesita verificar que el segundo parámetro ($2) de un método es un puntero a una tabla. Al comienzo de este método, escribe: 

```4d
  // ...
 If(◊DebugOn)
    RESOLVE POINTER($2;$vsNomVar;$vlNumTabla;$vlNumCampo)
    If(Not(($vlNumTabla>0) & ($vlNumCampo=-1) & ($vsNomVar="")))
  // ATENCIÓN: El puntero no es una referencia a una tabla
       TRACE
       End
    End if
  // ...
```

#### Ejemplo 3 

Ver el ejemplo del comando DRAG AND DROP PROPERTIES.

#### Ejemplo 4 

Este es un ejemplo de puntero a un array 2D:

```4d
 ARRAY TEXT(atCities;100;50)
 var $city : Pointer
 atCities{1}{2}:="Rome"
 atCities{1}{5}:="Paris"
 atCities{2}{6}:="New York"
  // ...otros valores
 $city:=->atCities{1}{5}
 RESOLVE POINTER($city;$var;$rowNum;$colNum)
  //$var="atCities"
  //$rowNum="1"
  //$colNum="5"
```

#### Ver también 

[Field](field.md)  
[Get pointer](get-pointer.md)  
[Is a variable](is-a-variable.md)  
[Is nil pointer](is-nil-pointer.md)  
[Table](table.md)  