---
id: wp-is-font-style-supported
title: WP Is font style supported
slug: /WritePro/commands/wp-is-font-style-supported
displayed_sidebar: docs
---

<!--REF #_command_.WP Is font style supported.Syntax-->**WP Is font style supported**  ( *rangoObj* ; *estiloFuenteWP* ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Is font style supported.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| rangoObj | Object | &#8594;  | Rango o referencia del elemento |
| estiloFuenteWP | Integer | &#8594;  | Constante de estilo de fuente |
| Resultado | Boolean | &#8592; | True si alguna parte de rangoObj soporta estiloFuenteWP; False en caso contrario |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WP Is font style supported.Summary-->El nuevo comando **WP Is font style supported**  devuelve True si el estilo *estiloFuenteWP* es soportado por alguna parte del texto en *rangoObj*.<!-- END REF-->

En *rangoObj*, puede pasar:

* un rango, o
* un elemento (tabla / línea / párrafo / imagen en línea / cuerpo / encabezado / pie de página)

En *estiloFuenteWP*, pase una de las siguientes constantes de estilo del tema de constantes "4D Write Pro":

| Constante                 | Tipo   | Valor                | Comentario                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------------- | ------ | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| wk font bold              | Cadena | fontBold             | Especifica el grosor del texto (depende de los estilos de fuente disponibles). Valores posibles: wk true para pasar los caracteres seleccionados en negrita; con el comando [WP GET ATTRIBUTES](../commands/wp-get-attributes.md), wk true se devuelve si al menos un carácter seleccionado soporta el estilo de fuente negrita. wk false (por defecto) para eliminar el estilo de fuente negrita de los caracteres seleccionados si los hay; con el comando [WP GET ATTRIBUTES](../commands/wp-get-attributes.md), wk false se devuelve si ninguno de los caracteres seleccionados soporta el estilo de fuente negrita.                                         |
| wk font italic            | Cadena | fontItalic           | Define el estilo itálica del texto (depende de los estilos de fuente disponibles). Valores posibles: wk true para pasar a estilo itálica u oblicua los caracteres seleccionados; con el comando [WP GET ATTRIBUTES](../commands/wp-get-attributes.md), wk true se devuelve si al menos un carácter seleccionado soporta el estilo de fuente itálica u oblicua. wk false (por defecto) para eliminar el estilo itálica u oblicua de los caracteres seleccionados si los hay; con el comando [WP GET ATTRIBUTES](../commands/wp-get-attributes.md), wk false se devuelve si ninguno de los caracteres seleccionados soporta el estilo de fuente itálica u oblicua. |
| wk text linethrough style | Cadena | textLinethroughStyle | Especifica el estilo de tachado de texto (si la hay). Valores posibles:wk none (por defecto): no hay efecto de tachadowk solid: dibuja una línea continua en el texto seleccionadowk dotted: dibuja una línea de puntos en el texto seleccionadowk dashed: dibuja una línea discontinua en el texto seleccionadowk double: dibuja una línea doble en el texto seleccionadowk semi transparent: línea atenuada en el texto seleccionado. Se puede combinar con otro estilo de línea. wk word: dibuja una línea en palabras solamente (excluye los espacios en blanco). Se puede combinar con otro estilo de línea.                        |
| wk text underline style   | Cadena | textUnderlineStyle   | Especifica el estilo de subrayado de texto (si lo hay). Valores posibles:wk none (predeterminado): no subrayadowk solid: dibuja un subrayado continuowk dotted: dibuja un subrayado punteadowk dashed: dibuja un subrayado discontinuowk double: dibuja un subrayado doble wk semi transparent: subrayado atenuado. Se puede combinar con otro estilo de línea.wk word: dibuja un subrayado para palabras solamente (no incluye espacios en blanco). Se puede combinar con otro estilo de línea.                                                                                                                                         |

Por lo general, este comando se ofrece para permitir a los desarrolladores implementar objetos de interfaz personalizada, como un menú pop-up que ofrece opciones de estilo basadas en el texto seleccionado.
