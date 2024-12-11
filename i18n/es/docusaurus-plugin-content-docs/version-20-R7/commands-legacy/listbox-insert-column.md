---
id: listbox-insert-column
title: LISTBOX INSERT COLUMN
slug: /commands/listbox-insert-column
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX INSERT COLUMN.Syntax-->**LISTBOX INSERT COLUMN** ( {* ;} *objeto* ; *posicionCol* ; *nomCol* ; *variableCol* ; *nomEncabezado* ; *varTitulo* {; *nomPie* ; *nomVar*} )<!-- END REF-->
<!--REF #_command_.LISTBOX INSERT COLUMN.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| posicionCol | Integer | &#8594;  | Ubicación de la columna a insertar |
| nomCol | Text | &#8594;  | Nombre del objeto de la columna |
| variableCol | Array, Field, Variable, Pointer | &#8594;  | Nombre de la variable de la columna |
| nomEncabezado | Text | &#8594;  | Nombre del objeto del título de la columna |
| varTitulo | Integer, Pointer | &#8594;  | Variable de título de la columna |
| nomPie | Text | &#8594;  | Nombre del objeto de pie de la columna |
| nomVar | Variable, Pointer | &#8594;  | Variable de pie de la columna |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.LISTBOX INSERT COLUMN.Summary-->El comando **LISTBOX INSERT COLUMN** inserta una columna en el list box designado por los parámetros *objeto* y *\**.<!-- END REF--> 

**Nota**: este comando no hace nada si se aplica a la primera columna de un lisbox mostrado en modo jerárquico.

Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (cadena). Si omite este parámetro, indica que el parámetro *objeto* es una variable. En ese caso, no pasa una cadena, sino una referencia de variable. Para mayor información sobre nombres de objetos, consulte la sección *Propiedades de los objetos*. 

La nueva columna se inserta justo en frente de la columna definida por el parámetro *posicionCol*. Si el parámetro *posicionCol* es superior al número total de columnas, la columna se añade después de la última columna. 

Pase el nombre del objeto y de la variable de la columna insertada en los parámetros *nomCol* y *variableCol*. 

* Con un array tipo list box, el nombre de la variable debe coincidir con el nombre del array cuyo contenido se mostrará en la columna.  
Puede pasar un puntero **Nil (->\[\])** si utiliza el comando en un contexto dinámico cuando el formulario se ejecuta (ver abajo).
* Con una selección tipo list box, debe pasar un campo o variable en el parámetro *variableCol*. El contenido de la columna será entonces el valor del campo o de la variable, evaluado para cada registro de la selección asociada al list box. Este tipo de contenidos sólo puede ser utilizado cuando la propiedad "Fuente de datos" del list box es Selección actual o Selección temporal (ver la sección *Gestión programada de los objetos de tipo List box*). Puede utilizar los campos o las variables de tipo cadena, numérico, Fecha, Hora, Imagen y Booleano.

En el contexto de list boxes basadas en las selecciones de registros, **LISTBOX INSERT COLUMN** permite insertar elementos simples (campos o variables). Si quiere manipular expresiones más complejas (tales como fórmulas o métodos), debe utilizar el comando [LISTBOX INSERT COLUMN FORMULA](listbox-insert-column-formula.md).

Los list box de tipo colección o selección de entidades también son soportados, sin embargo, dado que el parámetro *variableCol* no acepta expresiones, debe utilizar el comando [LISTBOX SET COLUMN FORMULA](listbox-set-column-formula.md) para asignar la fuente de datos. Es más preciso utilizar el comando [LISTBOX INSERT COLUMN FORMULA](listbox-insert-column-formula.md)  en este caso.

**Nota:** no es posible combinar en un mismo list box columnas de tipo array (fuente de datos array) y columnas de tipo campo o variable (fuente de datos selección).

Pase el nombre del objeto y de la variable del título de la columna insertada en los parámetros *nomEncabezado* y *var* *Encabezado* Parámetros.

Puede pasar en los parámetros *nomPie* y *variablePie*, el nombre del objeto y la variable del pie de la columna insertada.

**Nota:** los nombres de los objetos deben ser únicos en un formulario. Debe asegurarse de que los nombres pasados en los parámetros *nomCol*, *nomTitulo* y *nomPie* no hayan sido utilizados. De lo contrario, la columna no sea crea y se genera un error. 

##### Inserción dinámica 

Puede utilizar este comando para insertar columnas en los list box de forma dinámica durante la ejecución del formulario. 4D manejará automáticamente la definición de las variables necesarias (pie de página y encabezado).  
  
Para ello, **LISTBOX INSERT COLUMN** acepta un puntero **Nil (->\[\])** como valor valor para los parámetros *variableCol* (list box de tipo array únicamente) *varEncabezado* y *variablePie*. En este caso, cuando se ejecuta el comando, 4D crea las variables requeridas dinámicamente (para más información, consulte la sección ).  
  
Note que las variables de encabezado y de pie de página siempre se crean con un tipo específico (entero largo y texto, respectivamente). Por el contrario, las variables de columna no se pueden escribir durante la creación porque los list boxes aceptan diferentes tipos de arrays para estas variables (array texto, array entero, etc.). Esto significa que usted tiene que definir el tipo de array manualmente (ver el ejemplo 3). Es importante realizar esta escribiendo antes de llamar a comandos como [LISTBOX INSERT ROWS](listbox-insert-rows.md) para insertar nuevos elementos en el array. O bien, puede utilizar [APPEND TO ARRAY](append-to-array.md) tanto para definir el tipo del array como para la inserción de elementos.

#### Ejemplo 1 

Nos gustaría añadir una columna al final del list box:  

```4d
 var NomVarTitulo;$Ultimo;RecNum : Integer
 ALL RECORDS([Tabla 1])
 $RecNum:=Records in table([Tabla 1])
 ARRAY PICTURE(Imagen;$RecNum)
 
 $Ultimo:=LISTBOX Get number of columns(*;"ListBox1")+1
 LISTBOX INSERT COLUMN(*;"ListBox1";$Ultimo;"ColumnImagen";Imagen;"imagenTitulo";NomVarTitulo)
```

#### Ejemplo 2 

Nos gustaría añadir una columna a la derecha del list box y asociarle los valores del campo \[Transporte\]Tarifas:  

```4d
 $Ultimo:=LISTBOX Get number of columns(*;"ListBox1")+1
 LISTBOX INSERT COLUMN(*;"ListBox1";$Ultimo;"CampoCol";[Transporte]Tarifas;"nomTitulo";varTitulo)
```

#### Ejemplo 3 

Usted desea insertar una columna de forma dinámica en un array de tipo list box y definir su encabezado:

```4d
 var $NilPtr : Pointer
 LISTBOX INSERT COLUMN(*;"MyListBox";1;"MyNewColumn";$NilPtr;"MyNewHeader";$NilPtr)
 ColPtr:=OBJECT Get pointer(Object named;"MyNewColumn")
 ARRAY TEXT(ColPtr->;10)
  //Definition of header
 headprt:=OBJECT Get pointer(Object named;"MyNewHeader")
 OBJECT SET TITLE(headprt->;"Inserted header")
```

#### Ver también 

[LISTBOX DELETE COLUMN](listbox-delete-column.md)  
[LISTBOX INSERT COLUMN FORMULA](listbox-insert-column-formula.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 829 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


