---
id: listbox-get-print-information
title: LISTBOX GET PRINT INFORMATION
slug: /commands/listbox-get-print-information
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX GET PRINT INFORMATION.Syntax-->**LISTBOX GET PRINT INFORMATION** ( {* ;} *objeto* ; *selector* ; *info* )<!-- END REF-->
<!--REF #_command_.LISTBOX GET PRINT INFORMATION.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| selector | Integer | &#8594;  | Información a obtener |
| info | Integer | &#8592; | Valor actual |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.LISTBOX GET PRINT INFORMATION.Summary-->El comando LISTBOX GET PRINT INFORMATION devuelve la información actual relativa a la impresión del objeto list box designado por los parámetros *objeto* y *\** .<!-- END REF--> Este comando permite controlar la impresión del contenido del list box.

Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no pasa este parámetro, indica que el parámetro *objeto* es una variable. En este caso, se pasa una referencia de variable en lugar de una cadena. 

Este comando debe llamarse en el contexto de la impresión de un list box mediante el comando [Print object](print-object.md). Fuera de este contexto, no devuelve valores significativos.

Pase en *selector* un valor que indique la información a encontrar y en *info* una variable de tipo numérico o BLOB. Puede pasar en *selector* una de las siguientes constantes, del tema "*Listbox*":

| Constante                  | Tipo         | Valor | Comentario                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------------------- | ------------ | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| lk last printed row number | Entero largo | 0     | Devuelve en *info* el número de la última línea impresa. Permite conocer el número de la próxima línea a imprimir. <br/>El número devuelto puede ser mayor al número de líneas efectivamente impresas si el list box contiene las líneas invisibles o si se llama al comando [OBJECT SET SCROLL POSITION ](object-set-scroll-position.md). Por ejemplo, si se han impreso las líneas 1, 18 y 20, *info* es 20\. |
| lk printed height          | Entero largo | 3     | Devuelve en *info* la altura en píxeles del objeto efectivamente impreso (incluyendo encabezados, líneas, etc.). Recuerde que si el número de líneas a imprimir es inferior a la "capacidad" del list box, su altura se reduce automáticamente.                                                                                                                                                                         |
| lk printed rows            | Entero largo | 1     | Devuelve en *info* el número de líneas efectivamente impresas durante la última llamada al comando [Print object](print-object.md "Print object"). Este número incluye las posibles líneas de ruptura añadidas en el caso de un list box jerárquico. Por ejemplo, *info* es 10 si el list box contiene 20 líneas y las líneas impares están ocultas.                                                                    |
| lk printing is over        | Entero largo | 2     | Devuelve en *info* un booleano indicando si la última línea (visible) del list box se ha impreso. True = la línea se imprimió; De lo contrario, False.                                                                                                                                                                                                                                                                  |

Para mayor información sobre los principios de impresión de list boxes, consulte *Impresión de list boxes*.

#### Ejemplo 1 

Impresión hasta que todas las líneas se impriman:

```4d
 OPEN PRINTING JOB
 FORM LOAD("SalesForm")
 
 $Over:=False
 Repeat
    $Total:=Print object(*;"mylistbox")
    LISTBOX GET PRINT INFORMATION(*;"mylistbox";lk printing is over;$Over)
    PAGE BREAK
 Until($Over)
 
 CLOSE PRINTING JOB
```

#### Ejemplo 2 

Impresión de al menos 500 líneas del list box, conociendo que algunas líneas están ocultas:

```4d
 $GlobalPrinted:=0
 Repeat
    $Total:=Print object(*;"mylistbox")
    LISTBOX GET PRINT INFORMATION(*;"mylistbox";lk printed rows;$Printed)
    $GlobalPrinted:=$GlobalPrinted+$Printed
    PAGE BREAK
 Until($GlobalPrinted>=500)
```


#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1110 |
| Hilo seguro | &cross; |


