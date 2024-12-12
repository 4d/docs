---
id: object-get-list-name
title: OBJECT Get list name
slug: /commands/object-get-list-name
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get list name.Syntax-->**OBJECT Get list name** ( {* ;} *objeto* {; *tipoLista*} ) : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get list name.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre del objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *), o Campo o variable (si se omite *) |
| tipoLista | Integer | &#8594;  | Tipo de lista: lista de selección, lista de obligatorios o lista de excluidos |
| Resultado | Text | &#8592; | Nombre de la lista (definida en modo Diseño) |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.OBJECT Get list name.Summary-->El comando OBJECT Get list name devuelve el nombre de la lista asociada al objeto o a un grupo de objetos designados por *objeto*.<!-- END REF--> 4D le permite asociar una lista de opciones (creada con el editor de la listas en modo Diseño) a los objetos de formulario utilizando el editor de formularios o el comando [OBJECT SET LIST BY NAME](object-set-list-by-name.md).  
  
Si pasa el parámetro opcional *\**, indica que el parámetro objeto es un nombre de objeto (cadena). Si no pasa este parámetro, indica que el parámetro *objeto* es un campo o una variable. En este caso, se pasa una referencia de campo o de variable (campo o variable objeto únicamente) en lugar de una cadena.

Puede utilizar el parámetro opcional *tipoLista* para designar el tipo de lista que desea obtener. Por defecto, si omite este parámetro, el comando devuelve el nombre de la lista de opciones (lista de valores) asociado al objeto. También puede obtener los nombres de las listas obligatorias o de las listas de excluidos pasando, en *tipoLista*, una de las siguientes constantes que se encuentran en el tema "*Propiedades de los objetos*":  
  
| Constante     | Tipo         | Valor | Comentario                                                                                         |
| ------------- | ------------ | ----- | -------------------------------------------------------------------------------------------------- |
| Choice list   | Entero largo | 0     | Lista simple de selección de valores (opción "Lista" en la Lista de Propiedades) (por defecto)     |
| Excluded list | Entero largo | 2     | Lista de valores no aceptados para la entrada (Opción "Exclusiones" en la lista de propiedades)    |
| Required list | Entero largo | 1     | Lista sólo los valores aceptados para la entrada (Opción "Obligatoria" en la Lista de Propiedades) |
  
  
Si ninguna lista del tipo definido está asociada al *objeto*, el comando devuelve una cadena vacía ("").

#### Ver también 

[OBJECT Get list reference](object-get-list-reference.md)  
[OBJECT SET LIST BY NAME](object-set-list-by-name.md)  