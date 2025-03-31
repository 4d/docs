---
id: wp-get-breaks
title: WP Get breaks
slug: /WritePro/commands/wp-get-breaks
displayed_sidebar: docs
---

<!--REF #_command_.WP Get breaks.Syntax-->**WP Get breaks** ( *objRango* {; *tipoRuptura*} ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Get breaks.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| objRango | Object | &#8594;  | Rango o elemento o documento 4D Write Pro |
| tipoRuptura | Integer | &#8594;  | Tipo de rupturas a devolver |
| Resultado | Collection | &#8592; | Colección de rangos |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WP Get breaks.Summary-->El comando **WP Get breaks** devuelve la colección de todas las roturas insertadas en *targetObj*.<!-- END REF-->

Este comando sólo devuelve las roturas introducidas por un usuario o por el código, y no las generadas automáticamente por 4D Write Pro para la maquetación.

En el parámetro *objTarget*, puede pasar:

* un rango, o
* un elemento (tabla / fila / párrafo / cuerpo / encabezado / pie de página / sección / subsección / caja de texto), o
* un documento 4D Write Pro

Por defecto, se devuelven rupturas de todo tipo. Puede seleccionar un tipo de interrupción específico para devolver pasando una de las siguientes constantes en el parámetro opcional *tipoRuptura*:

| Constante                   | Valor | Comentario                                                                                                                |
| --------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------- |
| wk column break             | 3     | Salto de columna: inserta un salto de columna                                                                             |
| wk continuous section break | 5     | Define un salto de sección continuo (a menudo utilizado para cambiar el número de columnas sin empezar una nueva página). |
| wk line break               | 0     | Salto de línea (en el mismo párrafo)                                                                                      |
| wk page break               | 2     | Salto de página: define una nueva página                                                                                  |
| wk paragraph break          | 4     | Ruptura de párrafo: define un nuevo párrafo                                                                               |
| wk section break            | 1     | Salto de sección: define una nueva sección                                                                                |

**Valor devuelto**

**WP Get breaks** devuelve una colección de objetos de rango, cada uno de los cuales describe una ruptura dentro de targetObj. Una propiedad específica de sólo lectura está disponible en cada objeto de rango, ofreciendo el tipo de ruptura:

| **Propiedad**   | **Tipo** | **Constant**e | **Descripción**               |
| --------------- | -------- | ------------- | ----------------------------- |
| \[ \].breakType | Número   | wk break type | Sólo lectura: tipo de ruptura |

Si *targetObj* es un rango o elemento, las rupturas se devuelven en el orden en que se encuentran. Si *targetObj* es un documento 4D Write Pro, las rupturas se devuelven en el siguiente orden:

1. cuerpo
2. encabezado de la primera página de la sección 1 (si lo hay)
3. pie de página de la sección 1 (si lo hay)
4. encabezado de la página izquierda de la sección 1 (si lo hay)
5. pie de página izquierdo de la sección 1 (si lo hay)
6. encabezado de la página derecha para la sección (si lo hay)
7. pie de página derecho para la sección 1 (si lo hay)
8. encabezado principal de la sección 1 (si lo hay)
9. pie de página principal para la sección 1 (si lo hay)
10. repetir con la sección 2, la sección 3, y así sucesivamente.
11. Cajas de texto.

Se devuelve una colección vacía si *objRango* no contiene ninguna ruptura (o cualquier ruptura del *tipoRuptura* solicitado).

#### Ejemplo 

Quiere reemplazar todos los saltos de línea por saltos de párrafo en el documento:

```4d
 var $_filteredBreaks : Collection
 var $break : Object
 $_filteredBreaks:=WP Get breaks(WParea;wk line break)
 For each($break;$_filteredBreaks)
    WP INSERT BREAK($break;wk paragraph break;wk replace)
 End for each
```

#### Ver también 

[WP Get elements](wp-get-elements.md)  
[WP INSERT BREAK](../commands/wp-insert-break.md)  