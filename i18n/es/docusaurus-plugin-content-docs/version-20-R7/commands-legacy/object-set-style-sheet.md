---
id: object-set-style-sheet
title: OBJECT SET STYLE SHEET
slug: /commands/object-set-style-sheet
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET STYLE SHEET.Syntax-->**OBJECT SET STYLE SHEET** ( {* ;} *objeto* ; *nomHojaEstilo* )<!-- END REF-->
<!--REF #_command_.OBJECT SET STYLE SHEET.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)<br/>Si se omite, objeto es un campo o una variable |
| objeto | any | &#8594;  | Nombre de objeto (si * se especifica) o<br/>Campo o variable (si * se omite) |
| nomHojaEstilo | Text | &#8594;  | Nombre de la hoja de estilo |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.OBJECT SET STYLE SHEET.Summary-->El comando **OBJECT SET STYLE SHEET** modifica, para el proceso actual, la hoja de estilo asociada al objeto(s) designado(s) por los parámetros *objeto* y *\** .<!-- END REF--> Una hoja de estilo modifica la fuente, el tamaño de fuente y (excepto para las hojas de estilo automáticas) el estilo de fuente.

Al pasar el parámetro opcional *\** se indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no se pasa este parámetro, indica que el parámetro objeto es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (campo o variable objeto únicamente).

Pase en el parámetro *nomHojaEstilo*, el nombre de la hoja de estilo a aplicar al *objeto*. También puede pasar:

* el nombre de una hoja de estilos existente (si la hoja de estilo no existe, se devuelve un error, que puede interceptar utilizando un método instalado por el comando [ON ERR CALL](on-err-call.md)).
* una cadena vacía ("") para no aplicar la hoja de estilo al *objeto*, o
* una de las siguiente constantes del tema "*Estilos de fuente*" para aplicar una hoja de estilo automática:  

| Constante                         | Tipo   | Valor                               | Comentario                                                                                                                 |  
| --------------------------------- | ------ | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |  
| Automatic style sheet             | Cadena | \_\_automatic\_\_                   | Se utiliza de forma predeterminada para todos los objetos                                                                  |  
| Automatic style sheet\_additional | Cadena | \_\_automatic\_additional\_text\_\_ | Soportado por los textos estáticos, campos y variables solamente. Se utiliza para texto adicional en las cajas de diálogo. |  
| Automatic style sheet\_main       | Cadena | \_\_automatic\_main\_text\_\_       | Soportado por los textos estáticos, campos y variables solamente. Se utiliza para texto principal en las cajas de diálogo. |

Si una hoja de estilo ya se había asociado al objeto en modo Diseño, la llamada de este comando la reemplaza para el proceso actual.

Si durante la sesión, utiliza los comandos [ST SET ATTRIBUTES](st-set-attributes.md), [ST SET TEXT](st-set-text.md), [OBJECT SET FONT](object-set-font.md) o [OBJECT SET FONT SIZE](object-set-font-size.md) en el *objeto* con el fin de modificar su fuente o el tamaño de fuente, la referencia a la hoja de estilos se borra automáticamente del objeto, incluso si asigna los mismos atributos que los de la hoja de estilos. Sin embargo, si se modifica el estilo (negrita, cursiva, etc.), por ejemplo con los comandos [ST SET ATTRIBUTES](st-set-attributes.md) o [OBJECT SET FONT STYLE](object-set-font-style.md), se añaden estas nuevas propiedades a la hoja de estilo por la duración de la sesión.

##### Nota de compatibilidad 

En la **arquitectura proyecto**, este comando sólo soporta las tres hojas de estilo automáticas.   
  

#### Ver también 

*Estilos de fuente*  
[GET STYLE SHEET INFO](get-style-sheet-info.md)  
[LIST OF STYLE SHEETS](list-of-style-sheets.md)  
[OBJECT Get style sheet](object-get-style-sheet.md)  