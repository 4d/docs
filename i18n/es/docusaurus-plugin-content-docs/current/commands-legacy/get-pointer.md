---
id: get-pointer
title: Get pointer
slug: /commands/get-pointer
displayed_sidebar: docs
---

<!--REF #_command_.Get pointer.Syntax-->**Get pointer** ( *nomVar* ) : Pointer<!-- END REF-->
<!--REF #_command_.Get pointer.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| nomVar | Text | &#8594;  | Nombre de una variable proceso o interproceso |
| Resultado | Pointer | &#8592; | Puntero hacia una variable proceso o interproceso |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Get pointer.Summary-->El comando **Get pointer** devuelve un puntero hacia una variable proceso o interproceso cuyo nombre se pasa en *nomVar*.<!-- END REF-->

Para obtener un puntero hacia un campo, utilice [Field](field.md). Para obtener un puntero hacia una tabla, utilice [Table](table.md).

**Nota:** puede pasar a **Get pointer** expresiones como por ejemplo, *nomArray+"{3}"*, así como también elementos de array 2D (*nomArray* *+"{3}{5}"*).  
Sin embargo, puede pasar elementos de variables (*nomArray* *+"{myVar}"*). 

#### Ejemplo 1 

En un formulario, usted construye una matriz de 5 x 10 de variables editables llamadas v1, v2... v50\. Para inicializar todas estas variables, usted escribe:

```4d
  // ...
 For($vlVar;1;50)
    $vpVar:=Get pointer("v"+String($vlVar))
    $vpVar->:=""
 End for
```

#### Ejemplo 2 

Utilizar punteros a elementos de arrays de dos dimensiones:

```4d
 $pt:=Get pointer("a{1}{2}")
  //$pt=->a{1}{2}
 $pt2:=Get pointer("atCities"+"{2}{6}")
  //$pt2=->atCities{2}{6}
```

#### Ver también 

[Field](field.md)  
[Table](table.md)  