---
id: object-set-print-variable-frame
title: OBJECT SET PRINT VARIABLE FRAME
slug: /commands/object-set-print-variable-frame
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET PRINT VARIABLE FRAME.Syntax-->**OBJECT SET PRINT VARIABLE FRAME** ( {* ;} *objeto* ; *marcoVariable* {; *subformFijo*} )<!-- END REF-->
<!--REF #_command_.OBJECT SET PRINT VARIABLE FRAME.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)<br/>Si se omite, objeto es un campo o una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o <br/>Campo o variable (si se omite *) |
| marcoVariable | Boolean | &#8594;  | True = Impresión de marco variable, False = Impresión de marco fijo |
| subformFijo | Integer | &#8594;  | Opciones de impresión de subformularios en tamaño fijo |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.OBJECT SET PRINT VARIABLE FRAME.Summary-->El comando **OBJECT SET PRINT VARIABLE FRAME** modifica la propiedad de marco de impresión variable del objeto o de los objetos designados por los parámetros *objeto* y *\**.<!-- END REF-->

Esta propiedad está disponible para los siguientes objetos:

* variables y campos de tipo Texto e Imagen (ver *Impresión tamaño variable* en el manual de *Diseño*)
* áreas 4D Write Pro (ver *Utilizar un área 4D Write Pro* en el manual 4D Write Pro).
* Subformularios. Los subformularios tienen una opción adicional para la impresión de tamaño fijo (ver *Impresión* en el manual de *Diseño*); el comando puede ser utilizado para configurar esta opción utilizando el parámetro *subformFijo*.
Si aplica este comando a un objeto que no soporta esta propiedad, el comando no hace nada.  

Si pasa el parámetro opcional *\** indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no se pasa este parámetro, indica que el parámetro *objeto* es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (campo o variable objeto únicamente).

Pase un booleano en el parámetro *marcoVariable*: si pasa **True**, el objeto se imprime con un marco variable. Si pasa **False**, se imprime con un marco fijo.  
  
El parámetro opcional *subformFijo* le permite configurar una opción adicional cuando pasa **False** en el parámetro *marcoVariable* y el objeto es un subformulario (se ignora en todos los demás casos). En este caso, se puede definir el modo de impresión de marco fijo para el subformulario. Puede pasar una de las siguientes constantes, que se encuentran en el tema "*Propiedades de los objetos*":

| Constante                               | Tipo         | Valor | Comentario                                                                                                                                                    |
| --------------------------------------- | ------------ | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Print Frame fixed with multiple records | Entero largo | 2     | El tamaño inicial del marco permanece del mismo tamaño, 4D imprime el formulario varias veces para incluir todos los registros.                               |
| Print Frame fixed with truncation       | Entero largo | 1     | 4D imprime sólo los registros que aparecen en el área del subformulario. El formulario se imprime sólo una vez y los registros que no se imprimen se ignoran. |

#### Ver también 

[OBJECT GET PRINT VARIABLE FRAME](object-get-print-variable-frame.md)  