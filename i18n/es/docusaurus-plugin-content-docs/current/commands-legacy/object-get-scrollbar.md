---
id: object-get-scrollbar
title: OBJECT GET SCROLLBAR
slug: /commands/object-get-scrollbar
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET SCROLLBAR.Syntax-->**OBJECT GET SCROLLBAR** ( {* ;} *objeto* ; *horizontal* ; *vertical* )<!-- END REF-->
<!--REF #_command_.OBJECT GET SCROLLBAR.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable o un campo |
| objeto | any | &#8594;  | Nombre del objeto (si se especifica *) o variable o campo (si se omite*) |
| horizontal | Boolean, Integer | &#8592; | True = mostrado, False = oculto |
| vertical | Boolean, Integer | &#8592; | True = mostrado, False = oculto |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OBJECT GET SCROLLBAR.Summary-->El comando OBJECT GET SCROLLBAR se utiliza para mostrar u ocultar las barras de desplazamiento horizontal y/o vertical en el objeto designado por los parámetros *objeto* y *\**.<!-- END REF-->   
  
Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no pasa este parámetro, indica que el parámetro *objeto* es un campo o una variable. En este caso, se pasa una referencia de campo o variable (campo o variable objeto únicamente) en lugar de una cadena. 

En los parámetros *horizontal* y *vertical*, puede pasar variables de tipo Booleano o entero largo:

* Cuando pase variables Booleanas, el valor devuelto refleja el estado **actual** de la barra de desplazamiento:  
   * Si la barra de desplazamiento se ha definido como oculta, el parámetro recibe False,  
   * Si la barra de desplazamiento se ha definido como visible, el parámetro recibe True,  
   * Si la barra de desplazamiento se ha definido en modo automático, el parámetro recibe True o False dependiendo del estado de visualización actual del objeto.
* Cuando pase variables enteras largas, el valor devuelto refleja la visibilidad definida para la barra de desplazamiento:  
   * Si la barra de desplazamiento se ha definido como oculta, el parámetro recibe 0,  
   * Si la barra de desplazamiento se ha definido como visible, el parámetro recibe 1,  
   * Si la barra de desplazamiento se ha definido en modo automático, el parámetro recibe 2.

Este comando se puede utilizar con los siguientes objetos de formulario:

* campos y variables objeto texto o imagen
* list boxes,
* listas jerárquicas,
* subformularios.
Para obtener más información, consulte la descripción del comando [OBJECT SET SCROLLBAR](object-set-scrollbar.md).

#### Ver también 

[OBJECT SET SCROLLBAR](object-set-scrollbar.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1076 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


