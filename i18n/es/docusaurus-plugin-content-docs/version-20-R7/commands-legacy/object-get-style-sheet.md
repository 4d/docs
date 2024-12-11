---
id: object-get-style-sheet
title: OBJECT Get style sheet
slug: /commands/object-get-style-sheet
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get style sheet.Syntax-->**OBJECT Get style sheet** ( {* ;} *objeto* ) : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get style sheet.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)<br/>Si se omite, objeto es un campo o una variable |
| objeto | any | &#8594;  | Nombre de objeto (si * se especifica) o <br/>Campo o variable (si * se omite) |
| Resultado | Text | &#8592; | Nombre de la hoja de estilo |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OBJECT Get style sheet.Summary-->El comando **OBJECT Get style sheet** devuelve el nombre de la hoja de estilos asociada al objeto o a los objetos designado(s) por los parámetros *objeto* y *\** .<!-- END REF-->  
  
La hoja de estilo puede haber sido asignada en modo Diseño utilizando la lista de propiedades o para el proceso actual usando el comando [OBJECT SET STYLE SHEET](object-set-style-sheet.md).  
  
Al pasar el parámetro opcional *\** indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no se pasa este parámetro, indica que el parámetro *objeto* es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (campo o variable objeto únicamente).  
  
El comando puede devolver:

* un nombre de hoja de estilos,
* una cadena vacía ("") si no se asigna ninguna hoja de estilos o
* si una hoja de estilo "Automático" está asignada, una de las siguientes constantes que se encuentran en el tema "*Estilos de fuente*":  

| Constante                         | Tipo   | Valor                               | Comentario                                                                                                                 |  
| --------------------------------- | ------ | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |  
| Automatic style sheet             | Cadena | \_\_automatic\_\_                   | Se utiliza de forma predeterminada para todos los objetos                                                                  |  
| Automatic style sheet\_additional | Cadena | \_\_automatic\_additional\_text\_\_ | Soportado por los textos estáticos, campos y variables solamente. Se utiliza para texto adicional en las cajas de diálogo. |  
| Automatic style sheet\_main       | Cadena | \_\_automatic\_main\_text\_\_       | Soportado por los textos estáticos, campos y variables solamente. Se utiliza para texto principal en las cajas de diálogo. |

Si el comando designa varios objetos, la hoja de estilo devuelta sólo tiene sentido si se asigna a todos los objetos.

#### Nota de compatibilidad 

En la **arquitectura proyecto**, este comando sólo soporta las tres hojas de estilo automáticas.   
  

#### Ver también 

*Estilos de fuente*  
[OBJECT SET STYLE SHEET](object-set-style-sheet.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1258 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


