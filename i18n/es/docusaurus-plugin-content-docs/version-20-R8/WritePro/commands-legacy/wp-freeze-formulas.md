---
id: wp-freeze-formulas
title: WP FREEZE FORMULAS
slug: /WritePro/commands/wp-freeze-formulas
displayed_sidebar: docs
---

<!--REF #_command_.WP FREEZE FORMULAS.Syntax-->**WP FREEZE FORMULAS** ( *objTarget* {; *recalcular*} )<!-- END REF-->
<!--REF #_command_.WP FREEZE FORMULAS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| objTarget | Object | &#8594;  | Rango o elemento o documento 4D Write Pro |
| recalcular | Integer | &#8594;  | Opción para controlar el recálculo |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WP FREEZE FORMULAS.Summary-->El comando **WP FREEZE FORMULAS** "congela" el contenido de las fórmulas en *objTarget*.<!-- END REF-->

El comando reemplaza cada fórmula en *objTarget* con su valor calculado (ya sea texto o imagen estática). Esto crea un documento portátil ya que solo las referencias de las fórmulas se guardan en el parámetro *objTarget*. 

En el parámetro *objTarget*, puede pasar:

* un rango, o
* un elemento (tabla / línea / celda(s) / párrafo / cuerpo / encabezado / pie de página / sección / subsección / imagen en línea o anclada / caja de texto), o
* un documento 4D Write Pro.

**Notas:** 

* Si *objTarget* designa un área fuera de la pantalla donde las fórmulas no se han calculado previamente, se evaluarán antes de congelarse. En particular, las fórmulas no se calculan cuando se carga un documento fuera de pantalla.
* Cuando se pasa una sección en *objTarget*, sólo se congelan las fórmulas de las imágenes o las fórmulas de las cajas de texto ancladas a esta sección o a todas las secciones. Si están ancladas a una página o a la vista anidada, sus fórmulas no se congelan. Pase el documento en *objTarget* para congelar todas las fórmulas de los elementos anclados.

El parámetro opcional *recalcular* permite definir si las fórmulas de *objTarget* deben ser recalculadas antes de ser congeladas. Puedes pasar una constante del tema "4D Write Pro":

| Constante                       | Tipo         | Valor | Comentario                                                                                                               |
| ------------------------------- | ------------ | ----- | ------------------------------------------------------------------------------------------------------------------------ |
| wk do not recompute expressions | Entero largo | 2     | Especifica que todas las extpresiones en el documento no se vuelvan a calcular para imprimir o congelar.                 |
| wk recompute expressions        | Entero largo | 0     | Indica que todas las expresiones en el documento se vuelvan a calcular antes de imprimir o congelar. (valor por defecto) |

Por defecto, si se omite *recalcular*, las expresiones se recalculan.

**Atención**: *Líneas de arrastre*, si los hay, se transforman como lìneas normales cuando se congela el *objTarget*. Como resultado, si se modifica el tamaño o la orientación de la página, o si se exporta el documento, es posible que se desplacen en la disposición resultante.

#### Ejemplo 

Para congelar las fórmulas en un documento sin recalcular:

```4d
 WP FREEZE FORMULAS(WriteProArea)
```

Para congelar todas las fórmulas en la primera sección de un documento:

```4d
 WP FREEZE FORMULAS(WP Get section(WriteProArea;1);wk do not recompute expressions)
```

#### Ver también 

[WP COMPUTE FORMULAS](wp-compute-formulas.md)  
[WP Get formulas](wp-get-formulas.md)  
[WP INSERT FORMULA](../commands/wp-insert-formula.md)  