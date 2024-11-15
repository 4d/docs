---
id: object-get-text-orientation
title: OBJECT Get text orientation
slug: /commands/object-get-text-orientation
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get text orientation.Syntax-->**OBJECT Get text orientation** ( {* ;} *objeto* ) : Integer<!-- END REF-->
<!--REF #_command_.OBJECT Get text orientation.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es un campo o una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o <br/>Campo o variable (si se omite *) |
| Resultado | Integer | &#8592; | Ángulo de rotación de texto |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.OBJECT Get text orientation.Summary-->El comando **OBJECT Get text orientation** devuelve el valor de orientación actual aplicado al texto del objeto o de los objetos designado(s) por los parámetros *objeto* y *\**.<!-- END REF-->

Puede configurar la opción "Orientación" para un objeto en modo de diseño utilizando la lista de propiedades, o utilizando el comando [OBJECT SET TEXT ORIENTATION](object-set-text-orientation.md).

Si pasa el parámetro opcional *\** indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no se pasa este parámetro, indica que el parámetro *objeto* es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (campo o variable objeto únicamente).

El valor que se devuelve corresponde a una de las siguientes constantes, que se encuentran en el tema "*Propiedades de los objetos*":

| Constante             | Tipo         | Valor | Comentario                                            |
| --------------------- | ------------ | ----- | ----------------------------------------------------- |
| Orientation 0°        | Entero largo | 0     | Sin rotación (valor por defecto)                      |
| Orientation 180°      | Entero largo | 180   | Orientación del texto a 180° en el sentido horario    |
| Orientation 90° left  | Entero largo | 270   | Orientación del texto a 90° en el sentido antihorario |
| Orientation 90° right | Entero largo | 90    | Orientación del texto a 90° en el sentido horario     |

#### Ejemplo 

Dado el siguiente objeto (donde se aplicó una orientación "90 ° a la izquierda" en el editor de formularios):

![](../assets/en/commands/pict1209704.fr.png)

Cuando se ejecuta el formulario, si se llama a la siguiente declaración:

```4d
 OBJECT SET TEXT ORIENTATION(*;"myText";Orientation 180°)
```

... a continuación, el objeto aparece de la siguiente manera:

![](../assets/en/commands/pict1209706.fr.png)

```4d
 $vOrt:=OBJECT Get text orientation(*;"myText") //$vOrt=180
```

#### Ver también 

[OBJECT SET TEXT ORIENTATION](object-set-text-orientation.md)  