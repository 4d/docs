---
id: listbox-set-row-font-style
title: LISTBOX SET ROW FONT STYLE
slug: /commands/listbox-set-row-font-style
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET ROW FONT STYLE.Syntax-->**LISTBOX SET ROW FONT STYLE** ( {* ;} *objeto* ; *fila* ; *estilo* )<!-- END REF-->
<!--REF #_command_.LISTBOX SET ROW FONT STYLE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si * se especifica) o <br/>Variable (si * se omite) |
| fila | Integer | &#8594;  | Número de fila |
| estilo | Integer | &#8594;  | Estilo de fuente |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.LISTBOX SET ROW FONT STYLE.Summary-->**Nota:** este comando sólo funciona con los list boxes de tipo array.<!-- END REF-->  
  
El comando **LISTBOX SET ROW FONT STYLE** establece un estilo de fuente para una fila o una celda en el list box tipo array designado por los parámetros *objeto* y *\** .  
  
Al pasar el parámetro opcional *\** indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no se pasa este parámetro, indica que el parámetro objeto es una variable. En este caso, se pasa una referencia de variable en lugar de una cadena.  
  
Puede designar un list box o una columna de list box en el parámetro de *objeto*:

* Cuando el *objeto* designa un list box, el comando se aplica a la fila.
* Cuando el *objeto* designa una columna de list box, el comando se aplica a la celda ubicada en la intersección de la columna/fila.

En *fila*, pase el número de la fila en la que desea aplicar el nuevo estilo.  
  
**Nota:** el comando no tiene en cuenta ningún estado oculto/visible de las filas del list box.  
  
En *estilo*, se pasa un valor de estilo. Debe utilizar uno (o una combinación) de las constantes que se encuentran en el tema *Estilos de fuente*:  
  
| Constante | Tipo         | Valor |
| --------- | ------------ | ----- |
| Bold      | Entero largo | 1     |
| Italic    | Entero largo | 2     |
| Plain     | Entero largo | 0     |
| Underline | Entero largo | 4     |
  
  
Si un array de estilos de fuente se ha asociado con el list box o columna, sólo el elemento correspondiente a la fila se modifica. En otras palabras, la ejecución del comando tiene el mismo efecto, en este caso, como modificación de un elemento del array estilo de fuente.  
Si no hay un array estilo de fuente asociado con el list box o columna, se creará de forma dinámica cuando se llama a este comando. Se puede acceder a ellos usando el comando [LISTBOX Get array](listbox-get-array.md).  
  
Si las propiedades de estilo en conflicto se establecen para la columna o el list box, se aplica un orden de prioridad. Para obtener más información, consulte el manual de *Diseño*.  
  
**Nota:** dado que los estilos de array para las columnas tienen prioridad sobre los de los list boxes, al aplicar este comando a un list box, sólo tendrá efecto si no hay estilo de array asignado a las columnas.

#### Ejemplo 

Dado un array de tipo list box con las siguientes características:

* un array de estilo de fuente asociado con el list box (ArrGlobalStyle)
* un array de estilo de fuente asociado con la columna 5 (ArrCol5Style)
* las otras columnas no tienen arrays de estilo.

```4d
 LISTBOX SET ROW FONT STYLE(*;"Col5";3;Bold)
  // equivalente a ArrCol5Style{3}:=Bold
```

![](../assets/en/commands/pict1205512.fr.png)

```4d
 LISTBOX SET ROW FONT STYLE(*;"List Box";3;Italic+Underline)
  // equivalente a ArrGlobalStyle{3}:=Italic+Underline
```

![](../assets/en/commands/pict1205514.fr.png)

Después de la segunda declaración, todas las celdas de la tercera fila cambian de fila a subrayadas en cursiva, a excepción de la celda de la quinta columna que queda sólo en negrilla (los arrays de estilo de columna tienen prioridad sobre los arrays de list box).

#### Ver también 

[LISTBOX Get row font style](listbox-get-row-font-style.md)  
[LISTBOX SET ROW COLOR](listbox-set-row-color.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1268 |
| Hilo seguro | &cross; |


