---
id: listbox-select-rows
title: LISTBOX SELECT ROWS
slug: /commands/listbox-select-rows
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SELECT ROWS.Syntax-->**LISTBOX SELECT ROWS** ( {* ;} *objeto* ; *seleccion* {; *accion*} )<!-- END REF-->
<!--REF #_command_.LISTBOX SELECT ROWS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, el objeto es un nombre de objeto (cadena) Si se omite, el objeto es una variable |
| objeto | any | &#8594;  | Nombre del objeto (si se especifica *) o Variable (si se omite *) |
| seleccion | Object, Collection | &#8594;  | Objeto o colección que describe las líneas a seleccionar |
| accion | Integer | &#8594;  | lk replace selection (por defecto si se omite), lk add to selection, lk remove from selection |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.LISTBOX SELECT ROWS.Summary-->El comando **LISTBOX SELECT ROWS** selecciona las líneas de un list box selección de entidad o un list box colección que corresponde a las entidades u objetos contenidos en el parámetro de *seleccion*.<!-- END REF-->

Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no pasa este parámetro, indica que el parámetro *objeto* es una variable. En este caso, pasa una referencia variable en lugar de una cadena. Para más información sobre los nombres de los objetos, consulte la sección *Propiedades de los objetos*.

En el parámetro *seleccion*, pase un [Objeto](# "Datos estructurados como forma de objeto nativo 4D") o una Coleccion según el tipo de list box:

**List box** **selección de entidades** 

Para un **list box selección de entidades**, pase un objeto selección de entidades que contenga entidades de la misma clase de datos que el list box. Si la *seleccion* es un objeto selección de entidades de una clase de datos diferente del list box, se devuelve un error.

**List box** **colección** 

Para un **list box** colección, pase una subcolección de objetos que pertenecen al list box. Si su list box contiene valores escalares, pase una subcolección de valores.

**Notas:**

* Si *seleccion* no es un objeto selección de entidades / colección válido, se devuelve un error.
* Si *seleccion* es una selección de entidades / colección vacía, de forma predeterminada (con la acción "reemplazar", ver más abajo) todas las líneas del list box están deseleccionadas. Para otras acciones, el comando no hace nada.
* Si *seleccion* contiene entidades / elementos que no se muestran en el list box, se ignoran.

  
El parámetro *accion* opcional, si se pasa, se utiliza para definir la acción de selección a ejecutar cuando ya exista una selección de líneas en el list box. Puede pasar un valor o una de las siguientes constantes (ubicadas en el tema “*Listbox*”):

| Constante                | Tipo         | Valor | Comentario                                                                                                                                                                                                                                                                               |
| ------------------------ | ------------ | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| lk add to selection      | Entero largo | 1     | La línea seleccionada se añade a la selección existente. Si la línea seleccionada ya pertenece a la selección existente, el comando no hace nada.                                                                                                                                        |
| lk remove from selection | Entero largo | 2     | La línea seleccionada se remueve de la selección existente. Si la línea especificada no pertenece a la selección existente, el comando no hace nada.                                                                                                                                     |
| lk replace selection     | Entero largo | 0     | La línea seleccionada se convierte en la nueva selección, reemplazando la selección existente. El comando tiene el mismo efecto que un clic de usuario en una línea (sin embargo, el evento On Clicked no se genera). Esta es la acción por defecto (si se omite el parámetro *acción*). |

De forma predeterminada, si se omite el parámetro *accion*, el comando reemplaza las filas definidas por el parámetro *seleccion*.

**Nota**: el comando supone que cada objeto o entidad se muestra solo una vez en el list box. 

#### Ejemplo 1 

Este código le permite seleccionar facturas en una selección de entidades utilizando solo una petición de servidor:

```4d
  //En el evento On Load event del formulario tenemos: Form.invoices:=ds.Invoices.all()
  //El ListBox "Invoices" muestra la selección de entidades Form.invoices
 
 var $cash : Object
 var $card : Object
 
  //Seleccionar las facturas pagadas en efectivo
 $cash:=Form.invoices.query("paymentMethod=:1";"Cash")
 LISTBOX SELECT ROWS(*;"Invoices";$cash;lk replace selection)
```

#### Ejemplo 2 

Ejemplo con una colección de objetos:

```4d
 var $name : Text
 $name:=Request("Enter a name")
 If(OK=1)
  // Form.studentsColl is a collection of objects
    $selection:=Form.studentsColl.query("lastname = :1";$name)
    LISTBOX SELECT ROWS(*;"LBStudents";$selection;lk add selection)
 End if
```

#### Ver también 

[LISTBOX SELECT ROW](listbox-select-row.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1715 |
| Hilo seguro | &cross; |


