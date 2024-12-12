---
id: object-set-text-orientation
title: OBJECT SET TEXT ORIENTATION
slug: /commands/object-set-text-orientation
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET TEXT ORIENTATION.Syntax-->**OBJECT SET TEXT ORIENTATION** ( {* ;} *objeto* ; *orientacion* )<!-- END REF-->
<!--REF #_command_.OBJECT SET TEXT ORIENTATION.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es un campo o una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o<br/>Campo o variable (si se omite *) |
| orientacion | Integer | &#8594;  | Valor de orientación del objeto |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.OBJECT SET TEXT ORIENTATION.Summary-->El comando **OBJECT SET TEXT ORIENTATION** modifica la orientación del contenido del objeto o de los objetos designados por los parámetros *objeto* y *\** para el proceso actual.<!-- END REF-->

La propiedad "Orientación", disponible en el editor de formularios, realiza rotaciones de áreas de texto de manera permanente en sus formularios. A diferencia de esta propiedad, el comando **OBJECT SET TEXT ORIENTATION** aplica la rotación al contenido del objeto, pero no al objeto en sí. Para obtener más información, consulte el Manual de *Diseño*.  
  
Si pasa el parámetro opcional *\** indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no pasa este parámetro, indica que el parámetro objeto es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (campo o variable objeto únicamente).  
Sólo los textos estáticos, así como las variables y campos no editables se pueden girar. Si se aplica este comando a un objeto que no sea compatible con la orientación de texto, el comando no hace nada.  
  
En el parámetro *orientacion*, pase la orientación absoluta que desea asignar al objeto. Debe utilizar una de las siguientes constantes, del tema "*Propiedades de los objetos*":  
  
| Constante             | Tipo         | Valor | Comentario                                            |
| --------------------- | ------------ | ----- | ----------------------------------------------------- |
| Orientation 0°        | Entero largo | 0     | Sin rotación (valor por defecto)                      |
| Orientation 180°      | Entero largo | 180   | Orientación del texto a 180° en el sentido horario    |
| Orientation 90° left  | Entero largo | 270   | Orientación del texto a 90° en el sentido antihorario |
| Orientation 90° right | Entero largo | 90    | Orientación del texto a 90° en el sentido horario     |
  
  
**Nota**: sólo se admiten los ángulos correspondientes a estos valores. Si pasa cualquier otro valor, se ignorará.

#### Ejemplo 

Desea aplicar una orientación de 270° a una variable en su formulario:

```4d
 OBJECT SET ENTERABLE(*;"myVar";False)
  // Obligatorio si la variable es editable
 OBJECT SET TEXT ORIENTATION(*;"myVar";Orientation 90° left)
```

#### Ver también 

[OBJECT Get text orientation](object-get-text-orientation.md)  