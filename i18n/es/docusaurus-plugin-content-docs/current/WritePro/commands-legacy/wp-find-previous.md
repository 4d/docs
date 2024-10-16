---
id: wp-find-previous
title: WP Find previous
slug: /WritePro/commands/wp-find-previous
displayed_sidebar: docs
---

<!--REF #_command_.WP Find previous.Syntax-->**WP Find previous**  ( *objTarget* ; *buscarAntes* ; *buscarValor* ; *buscarCondicion* {; *remplazarValor*} ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Find previous.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| objTarget | Object | &#8594;  | Rango o elemento o documento 4D Write Pro |
| buscarAntes | Object | &#8594;  | Rango antes del cual comenzar la búsqueda |
| buscarValor | Text | &#8594;  | Buscar valor |
| buscarCondicion | Integer | &#8594;  | Regla(s) de búsqueda |
| remplazarValor | Text | &#8594;  | Cadena de reemplazo |
| Resultado | Object | &#8592; | Rango del valor encontrado/reemplazado |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WP Find previous.Summary-->El comando **WP Find previous**  busca el *objTarget*, antes del rango *buscarAntes*, para *buscarValor* basado en *condicionBusq*.<!-- END REF--> Se puede utilizar un parámetro opcional para reemplazar los resultados encontrados.

**Nota**: **WP Find previous** no busca ni reemplaza el texto en fórmulas. Utilice el comando [WP Get formulas](wp-get-formulas.md) en este caso.

En el parámetro *objTarget*, pase un objeto que contenga:

* un rango, o
* un elemento (tabla / fila / celda(s) / párrafo / cuerpo / cabecera / pie de página / sección / subsección), o
* un documento de 4D Write Pro.

Pase un rango en el parámetro *buscarAntes*. La búsqueda comenzará inmediatamente antes del rango definido.

**Nota**: si *objTarget* es el documento 4D Write Pro y *buscarAntes* está en una caja de texto, el comando busca primero en la caja de texto padre y después en la(s) caja(s) de texto anterior(es), pie(s) de página, encabezado(s), y finalmente en el cuerpo en orden descendente (de acuerdo con la ordenación de abajo). 

El parámetro *buscarValor* permite pasar el texto a buscar dentro del *objTarget*. 

  
Puede especificar cómo se realiza la búsqueda con el parámetro *buscarCondicion*. Puede utilizar una (o una combinación) de las siguientes constantes:

| Constante                | Comentario                                                                                                                                                                                                                                                                                                    |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| wk case insensitive      | Las cadenas se comparan sin tener en cuenta las diferencias de mayúsculas y minúsculas. Tenga en cuenta que se tienen en cuenta los signos diacríticos. Por ejemplo, "A" se considera igual que "a", pero "a" no se considera igual que "à".                                                                  |
| wk diacritic insensitive | Las cadenas se comparan, pero la marca diacrítica (por ejemplo, el acento o el símbolo) de las letras se ignora. Por ejemplo, "a" se considera igual que "à".                                                                                                                                                 |
| wk find reverse          | La búsqueda se realiza en orden inverso.                                                                                                                                                                                                                                                                      |
| wk kana insensitive      | Para el idioma japonés. Las cadenas se comparan según el significado (no el estilo de escritura). Por ejemplo, "あ" se considera igual que "ア". <br/><br/> Cuando se define esta opción, wk width insensitive  está implícito (se considera definido), sin embargo, lo contrario no es cierto. |
| wk keep character style  | Al reemplazar el texto, se mantiene el estilo de caracteres existente (si es posible).                                                                                                                                                                                                                        |
| wk override protected    | La protección de lectura/escritura se ignora y las cadenas en áreas protegidas pueden ser reemplazadas.                                                                                                                                                                                                       |
| wk use keyboard language | Para la comparación de cadenas, utilice la propiedad de idioma del teclado del objeto formulario que se está editando en lugar del idioma de los datos actuales (por defecto). **Nota**: se ignora si el documento está fuera de la pantalla.                                                                 |
| wk whole word            | Sólo se consideran las cadenas que son palabras completas. No se tienen en cuenta las cadenas que coinciden con otras cadenas. Por ejemplo, "where" no se considera cuando se encuentra dentro de "somewhere".                                                                                                |
| wk width insensitive     | Para el idioma japonés. Las cadenas se comparan por la anchura de los caracteres. Por ejemplo, "ｱ" se considera igual que "ア".                                                                                                                                                                                |

**Nota**: las cadenas se comparan con el lenguaje de datos actual a menos que se utilice wk use keyboard language.

En el parámetro opcional *remplazarValor*, se puede pasar un texto para que ocupe el lugar de cualquier instancia del texto en *buscarValor* que se encuentre en el *objTarget*.

**Rango devuelto** 
  
La función devuelve un rango del valor encontrado o reemplazado:

* operaciones de búsqueda - los rangos coinciden con las posiciones de las cadenas encontradas
* operaciones de reemplazo - los rangos coinciden con las posiciones de las cadenas reemplazadas

Si *objTarget* es un rango o elemento, los valores encontrados se devuelven en el orden en que se encuentran. Si *objTarget* es un documento 4D Write Pro, los valores encontrados se devuelven en el siguiente orden:

1. cuerpo
2. encabezado de la primera página de la sección 1 (si existe)
3. pie de página de la sección 1 (si lo hay)
4. encabezado de la página izquierda de la sección 1 (si lo hay)
5. pie de página izquierdo de la sección 1 (si lo hay)
6. encabezado de la página derecha para la sección (si lo hay)
7. pie de página derecho para la sección 1 (si lo hay)
8. encabezado principal de la sección 1 (si lo hay)
9. pie de página principal para la sección 1 (si la hay)
10. repetir con la sección 2, la sección 3, y así sucesivamente.
11. cajas de texto

Se devuelve un rango vacío si no se encuentran resultados.  
  
#### Ejemplo 

```4d
 var $userSel ;$target ;$alphaRanges ;$previousRanges: object
 var $options : Integer
 
  // definir las opciones de búsqueda
 $options:=wk case insensitive+wk diacritic insensitive
 
  // obtener la posición actual del usuario
 $userSel:=WP Selection range(*;"WParea")
 
  // definir el objetivo
 $target:=WP Get body(WParea) // buscar sólo dentro del cuerpo
 
  // lanzar la BÚSQUEDA de ocurrencias ANTERIORES de la cadena "alpha" (basada en la selección actual)
 $previousRanges:=WP Find previous($target;"alpha";$options)
```

#### Ver también 

[WP Find all](wp-find-all.md)  
[WP Find next](wp-find-next.md)  