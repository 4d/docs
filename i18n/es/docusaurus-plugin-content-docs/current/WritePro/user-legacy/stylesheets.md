---
id: stylesheets
title: Hojas de estilo
displayed_sidebar: docs
slug: /WritePro/user/stylesheets
---


Una hoja de estilo es un objeto de un conjunto definido de configuraciones de atributos utilizadas para controlar la apariencia de sus documentos 4D Write Pro. Esta configuración se puede aplicar a párrafos y caracteres, como la fuente a mostrar, así como el tamaño, el color y el peso de la fuente. Una vez que se define una hoja de estilo, se guarda como un objeto en el documento 4D Write Pro para que pueda reutilizarse fácilmente. Las hojas de estilo le permiten dar a sus documentos un aspecto distintivo y único, al tiempo que le ahorra tiempo y esfuerzo.

## Estilo por defecto

Todos los documentos 4D Write Pro tienen una hoja de estilo de párrafo predeterminada, “Normal”. Las nuevas hojas de estilo (creadas con el comando [WP New style sheet](../commands-legacy/wp-new-style-sheet)) se heredan automáticamente del estilo Normal. Los atributos modificados por una hoja de estilo solo afectan a los párrafos a los que se aplican, el resto del documento conserva la configuración Normal predeterminada. Si se elimina una hoja de estilo, los atributos modificados volverán al estilo Normal.

El estilo Normal define un valor predeterminado para cada atributo de hoja de estilo en un documento 4D Write Pro y se puede recuperar con el comando [WP Get style sheet](../commands-legacy/wp-get-style-sheet). La hoja de estilo Normal se puede modificar (pero no renombrar) con el comando [WP SET ATTRIBUTES](../commands/wp-set-attributes). Si bien las hojas de estilo creadas con el comando [WP New style sheet](../commands-legacy/wp-new-style-sheet) se pueden eliminar con el comando [WP DELETE STYLE SHEET](../commands-legacy/wp-delete-style-sheet), la hoja de estilo Normal no se puede eliminar.

## Atributos de hojas de estilo de párrafo y de carácter

Las hojas de estilo le permiten definir los atributos de párrafos enteros o caracteres específicos:

- **Párrafo** - La gran mayoría de los atributos que se pueden modificar se aplican solo a los párrafos. Las hojas de estilo de párrafo incluyen configuraciones de estilo de caracteres, así como atributos de formato que solo se pueden aplicar a nivel de párrafo (por ejemplo, márgenes, bordes, pestañas, etc.).
- **Carácter** - Las hojas de estilo de caracteres utilizan solo los atributos apropiados para distinguir el texto (uno o más caracteres) del estilo de párrafo (por ejemplo, encabezados, títulos, texto subrayado, etc.).

Tenga en cuenta que los estilos de párrafo se aplican a párrafos completos. Para aplicar un estilo solo a una parte específica de un párrafo, debe utilizar una hoja de estilo de caracteres.

## Precedencia de hoja de estilo

Se pueden combinar varias hojas de estilo de párrafos y caracteres en el mismo documento 4D Write Pro. Es importante tener en cuenta que la prioridad de la hoja de estilo está determinada por el orden en que se aplican.

- Si aplica una hoja de estilo de párrafo y luego aplica una hoja de estilo de carácter, la hoja de estilo de carácter tendrá prioridad sobre la hoja de estilo de párrafo. Por ejemplo, podría aplicar una hoja de estilo de párrafo al cuerpo de su documento, luego podría crear una hoja de estilo de caracteres “en negrita” y aplicarla a palabras específicas. La hoja de estilo de párrafo se aplicará al resto del texto, sin embargo, la hoja de estilo de caracteres tendrá prioridad para las palabras designadas.
- Si aplica una hoja de estilo de carácter y luego aplica una hoja de estilo de párrafo, la hoja de estilo de párrafo se aplicará a todo el texto y se eliminarán todos los estilos de caracteres de la hoja de estilo de caracteres.

## Aplicando hojas de estilo

Las hojas de estilo se aplican con el comando [WP SET ATTRIBUTES](../commands/wp-set-attributes) utilizando las constantes `wk style sheet` o `wk new line style sheet` (utilizando notación de objetos).

## Recuperando hojas de estilo

El comando [WP Get style sheets](../commands-legacy/wp-get-style-sheets) le permite recuperar todas las hojas de estilo de un documento de acuerdo con su tipo específico. El comando [WP Get style sheet](../commands-legacy/wp-get-style-sheet) permite recuperar una sola hoja de estilo por su nombre.

## Importar y exportar hojas de estilo

Debido a que las hojas de estilo se almacenan como objetos, pueden importarse fácilmente en otros documentos 4D Write Pro o mantenerse cuando se exportan en múltiples formatos.

- **Importar** - puede obtener todos los objetos de hoja de estilo de un documento 4D Write Pro designado y usarlos en un nuevo documento con el comando [WP IMPORT STYLE SHEETS](../commands-legacy/wp-import-style-sheets).
- **Exportar** - los comandos [WP EXPORT DOCUMENT](../commands/wp-export-document) o [WP EXPORT VARIABLE](../commands/wp-export-variable.md) exportan sus documentos con hojas de estilo.

## Atributos de hojas de estilo

Los siguientes atributos de hoja de estilo de párrafos y caracteres se pueden modificar con los comandos [WP SET ATTRIBUTES](../commands/wp-set-attributes) y [WP RESET ATTRIBUTES](../commands/wp-reset-attributes), o recuperarse con el comando [WP GET ATTRIBUTES](../commands/wp-get-attributes).

:::note

Nota: algunos atributos están vinculados entre sí. Por lo tanto, al agregar solo uno de estos atributos, los demás atributos vinculados también se crearán con los valores predeterminados. Para los atributos vinculados, el valor predeterminado puede ser diferente del valor definido en la hoja de estilo Normal. Por ejemplo, si solo define un borde izquierdo rojo, los otros bordes serán negros (valor predeterminado) incluso si en la hoja de estilo Normal se habían definido previamente como púrpura.

:::


| Atributos                        | Párrafo | Caracter | Asociado con |
|----------------------------------|-----------|-----------|-------------|
| `wk avoid widows and orphans`    | X         |           |             |
| `wk background clip`             | X         |           |             |
| `wk background color`            | X         | X         |             |
| `wk background height`           | X         |           | `wk background width` |
| `wk background image`            | X         |           |             |
| `wk background image url`        | X         |           |             |
| `wk background origin`           | X         |           |             |
| `wk background position horizontal` | X      |           | `wk background position vertical` |
| `wk background position vertical`   | X      |           | `wk background position horizontal` |
| `wk background repeat`           | X         |           |             |
| `wk background width`            | X         |           | `wk background height` |
| `wk border color`                | X         |           | `wk border color bottom`, `wk border color left`, `wk border color right`, `wk border color top` |
| `wk border color bottom`         | X         |           | `wk border color`, `wk border color left`, `wk border color right`, `wk border color top` |
| `wk border color left`           | X         |           | `wk border color`, `wk border color bottom`, `wk border color right`, `wk border color top` |
| `wk border color right`          | X         |           | `wk border color`, `wk border color bottom`, `wk border color left`, `wk border color top` |
| `wk border color top`            | X         |           | `wk border color`, `wk border color bottom`, `wk border color left`, `wk border color right` |
| `wk border radius`               | X         |           |             |
| `wk border style`                | X         |           | `wk border style bottom`, `wk border style left`, `wk border style right`, `wk border style top` |
| `wk border style bottom`         | X         |           | `wk border style`, `wk border style left`, `wk border style right`, `wk border style top` |
| `wk border style left`           | X         |           | `wk border style`, `wk border style bottom`, `wk border style right`, `wk border style top` |
| `wk border style right`          | X         |           | `wk border style`, `wk border style bottom`, `wk border style left`, `wk border style top` |
| `wk border style top`            | X         |           | `wk border style`, `wk border style bottom`, `wk border style left` |
| `wk border width`                | X         |           | `wk border width bottom`, `wk border width left`, `wk border width right`, `wk border width top` |
| `wk border width bottom`         | X         |           | `wk border width`, `wk border width left`, `wk border width right`, `wk border width top` |
| `wk border width left`           | X         |           | `wk border width`, `wk border width bottom`, `wk border width right`, `wk border width top` |
| `wk border width right`          | X         |           | `wk border width`, `wk border width bottom`, `wk border width left`, `wk border width top` |
| `wk border width top`            | X         |           | `wk border width`, `wk border width bottom`, `wk border width left`, `wk border width right` |
| `wk direction`                   | X         |           |             |
| `wk font`                        | X         | X         | `wk font bold`, `wk font italic`, `wk font size` |
| `wk font bold`                   | X         | X         | `wk font`, `wk font family`, `wk font italic`, `wk font size` |
| `wk font family`                 | X         | X         | `wk font`, `wk font bold`, `wk font italic`, `wk font size` |
| `wk font italic`                 | X         | X         | `wk font`, `wk font bold`, `wk font family`, `wk font size` |
| `wk font size`                   | X         | X         | `wk font`, `wk font bold`, `wk font family`, `wk font italic` |
| `wk line height`                 | X         |           |             |
| `wk list font`                   | X         |           |             |
| `wk list string format LTR`      | X         |           |             |
| `wk list string format RTL`      | X         |           |             |
| `wk list style image`            | X         |           |             |
| `wk list style image height`     | X         |           |             |
| `wk list style image url`        | X         |           |             |
| `wk list style type`             | X         |           |             |
| `wk margin`                      | X         |           | `wk margin bottom`, `wk margin left`, `wk margin right`, `wk margin top` |
| `wk margin bottom`               | X         |           | `wk margin`, `wk margin left`, `wk margin right`, `wk margin top` |
| `wk margin left`                 | X         |           | `wk margin`, `wk margin bottom`, `wk margin right`, `wk margin top` |
| `wk margin right`                | X         |           | `wk margin`, `wk margin bottom`, `wk margin left`, `wk margin top` |
| `wk margin top`                  | X         |           | `wk margin`, `wk margin bottom`, `wk margin left`, `wk margin right` |
| `wk min height`                  | X         |           |             |
| `wk min width`                   | X         |           |             |
| `wk name`                        | X         | X         |             |
| `wk new line style sheet`        | X         |           |             |
| `wk owner`                       | X         | X         |             |
| `wk padding`                     | X         |           | `wk padding bottom`, `wk padding left`, `wk padding right`, `wk padding top` |
| `wk padding bottom`              | X         |           | `wk padding`, `wk padding left`, `wk padding right`, `wk padding top` |
| `wk padding box`                 | X         |           |             |
| `wk padding left`                | X         |           | `wk padding`, `wk padding bottom`, `wk padding right`, `wk padding top` |
| `wk padding right`               | X         |           | `wk padding`, `wk padding bottom`, `wk padding left`, `wk padding top` |
| `wk padding top`                 | X         |           | `wk padding`, `wk padding bottom`, `wk padding left`, `wk padding right` |
| `_o_wk page break inside`        | X         |           |             |
| `wk tab default`                 | X         |           | `wk tabs`, `wk tab stop offsets`, `wk tab stop types`, `wk tab stop leadings` |
| `wk tabs`                        | X         |           | `wk tab default`, `wk tab stop offsets`, `wk tab stop types`, `wk tab stop leadings` |
| `wk tab stop offsets`            | X         |           | `wk tabs`, `wk tab default`, `wk tab stop types`, `wk tab stop leadings` |
| `wk tab stop types`              | X         |           | `wk tabs`, `wk tab default`, `wk tab stop offsets`, `wk tab stop leadings` |
| `wk tab stop leadings`           | X         |           | `wk tabs`, `wk tab default`, `wk tab stop offsets`, `wk tab stop types` |
| `wk text align`                  | X         |           |             |
| `wk text color`                  | X         | X         |             |
| `wk text indent`                 | X         |           |             |
| `wk text linethrough color`      | X         | X         |             |
| `wk text linethrough style`      | X         | X         | `wk text underline style` |
| `wk text shadow color`           | X         | X         | `wk text shadow offset` |
| `wk text shadow offset`          | X         | X         | `wk text shadow color` |
| `wk text transform`              | X         | X         |             |
| `wk text underline color`        | X         | X         |             |
| `wk text underline style`        | X         | X         | `wk text linethrough style` |
| `wk type`                        | X (read only) | X (read only) |             |
| `wk vertical align`              | X         | X         |             |
| `wk width`                       | X         |           |             |


