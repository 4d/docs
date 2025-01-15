---
id: listbox-collapse
title: LISTBOX COLLAPSE
slug: /commands/listbox-collapse
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX COLLAPSE.Syntax-->**LISTBOX COLLAPSE** ( {* ;} *objeto* {; *recursivo* {; *selector* {; *grueso* {; *columna*}}}} )<!-- END REF-->
<!--REF #_command_.LISTBOX COLLAPSE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena), Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre del objeto (si se especifica *) o Variables (si se omite *) |
| recursivo | Boolean | &#8594;  | True = contraer los subniveles<br/>False = no contraer los subniveles |
| selector | Integer | &#8594;  | Parte del list box a contraer |
| grueso | Integer | &#8594;  | Número de línea de la ruptura a contraer o <br/>Número de nivel del listbox a contraer |
| columna | Integer | &#8594;  | Número de columna de la ruptura a contraer |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.LISTBOX COLLAPSE.Summary-->El comando LISTBOX COLLAPSE se utiliza para contraer líneas de ruptura del objeto list box designado por los parámetros *objeto* y *\** parámetros.<!-- END REF-->

Si pasa el parámetro opcional \*, indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no pasa este parámetro, indica que el parámetro *objeto* es una variable. En este caso, se pasa una referencia de variable en lugar de una cadena.

Si el list box no está configurado en modo jerárquico, el comando no hace nada. Para obtener más información acerca de los list boxes jerárquicos, por favor diríjase a la sección *List box jerárquicos*.

El parámetro opcional *recursivo* se utiliza para configurar la contracción de los subniveles jerárquicos del list box. Pase True u omita este parámetro para que el comando contraiga todos los niveles y subniveles. Si pasa False, sólo el primer nivel se contraerá. 

El parámetro opcional *selector* se utiliza para especificar el alcance de la orden. Puede pasar una de las siguientes constantes, que se encuentran en el tema , en este parámetro:

| Constante    | Tipo         | Valor | Comentario                                                                                                                                                                                                                                                                                                                         |
| ------------ | ------------ | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| lk all       | Entero largo | 0     | El comando afecta todos los subniveles (valor por defecto, utilizado si el parámetro se omite).                                                                                                                                                                                                                                    |
| lk selection | Entero largo | 1     | El comando afecta los subniveles seleccionados.                                                                                                                                                                                                                                                                                    |
| lk break row | Entero largo | 2     | El comando afecta el subnivel al que pertenece la "celda" designada por los parámetros *línea* y *columna*. Note que estos parámetros representan los números de línea y de columna en el listbox en modo estándar y no en su representación jerárquica. Si los parámetros *línea* y *columna* se omiten, el comando no hace nada. |
| lk level     | Entero largo | 3     | El comando afecta todas las líneas de ruptura correspondientes a la columna *nivel*. Este parámetro designa un número de columna en el list box en modo estándar y no en su representación jerárquica. Si se omite el parámetro *nivel*, el comando no hace nada.                                                                  |

Si la selección o el list box no contienen una línea de ruptura o si todas las líneas de ruptura ya están contraídas, el comando no hace nada.

#### Ejemplo 

Este ejemplo colapsa el primer nivel de líneas de ruptura de la selección en el list box:

```4d
 LISTBOX COLLAPSE(*;"MiListbox";False;lk selection)
```

#### Ver también 

[LISTBOX EXPAND](listbox-expand.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1101 |
| Hilo seguro | &cross; |


