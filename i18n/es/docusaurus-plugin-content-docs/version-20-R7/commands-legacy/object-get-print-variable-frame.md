---
id: object-get-print-variable-frame
title: OBJECT GET PRINT VARIABLE FRAME
slug: /commands/object-get-print-variable-frame
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET PRINT VARIABLE FRAME.Syntax-->**OBJECT GET PRINT VARIABLE FRAME** ( {* ;} *objeto* ; *tamVariable* {; *subformFijo*} )<!-- END REF-->
<!--REF #_command_.OBJECT GET PRINT VARIABLE FRAME.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)<br/>Si se omite, objeto es un campo o una variable |
| objeto | any | &#8594;  | Nombre de objeto (si * se especifica) o <br/>Campo o variable (si * se omite) |
| tamVariable | Boolean | &#8592; | True = Impresión tamaño variable, False = impresión tamaño fijo |
| subformFijo | Integer | &#8592; | Opción para impresión de subformularios de tamaño fijo |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OBJECT GET PRINT VARIABLE FRAME.Summary-->El comando **OBJECT GET PRINT VARIABLE FRAME** obtiene la configuración actual de las opciones de impresión en tamaño variable del objeto o de los objetos designado(s) por los parámetros *objeto* y *\** .<!-- END REF-->  
  
Las propiedades de impresión de tamaño variable se pueden definir utilizando la lista de propiedades o el comando [OBJECT SET PRINT VARIABLE FRAME](object-set-print-variable-frame.md).  
Si pasa el parámetro opcional *\** indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no se pasa este parámetro, indica que el parámetro *objeto* es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (campo o variable objeto únicamente).  
  
En el parámetro *tamVariable*, el comando devuelve una variable booleana cuyo valor indica el estado activo (**True**) o inactivo (**False**) de la impresión en tamaño variable.  
  
Si el *objeto* es un subformulario y si la impresión en tamaño variable está desactivada (**False**), el comando también devuelve en el parámetro *subformFijo*, la opción de impresión en tamaño fijo del subformulario. Puede comparar el valor devuelto con las siguientes constantes, del tema "*Propiedades de los objetos*":

| Constante                               | Tipo         | Valor | Comentario                                                                                                                                                    |
| --------------------------------------- | ------------ | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Print Frame fixed with multiple records | Entero largo | 2     | El tamaño inicial del marco permanece del mismo tamaño, 4D imprime el formulario varias veces para incluir todos los registros.                               |
| Print Frame fixed with truncation       | Entero largo | 1     | 4D imprime sólo los registros que aparecen en el área del subformulario. El formulario se imprime sólo una vez y los registros que no se imprimen se ignoran. |

#### Ver también 

[OBJECT SET PRINT VARIABLE FRAME](object-set-print-variable-frame.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1241 |
| Hilo seguro | &cross; |


