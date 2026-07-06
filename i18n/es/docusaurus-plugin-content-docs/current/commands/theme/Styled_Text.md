---
id: Styled_Text_theme
title: Texto multiestilo
sidebar_label: Texto multiestilo
slug: /commands/theme/Styled-Text
---

|                                                                                                         |
| ------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #_command_.ST COMPUTE EXPRESSIONS.Syntax -->](../../commands/st-compute-expressions)<br/> |
| [<!-- INCLUDE #_command_.ST FREEZE EXPRESSIONS.Syntax -->](../../commands/st-freeze-expressions)<br/>   |
| [<!-- INCLUDE #_command_.ST GET ATTRIBUTES.Syntax -->](../../commands/st-get-attributes)<br/>           |
| [<!-- INCLUDE #_command_.ST Get content type.Syntax -->](../../commands/st-get-content-type)<br/>       |
| [<!-- INCLUDE #_command_.ST Get expression.Syntax -->](../../commands/st-get-expression)<br/>           |
| [<!-- INCLUDE #_command_.ST GET OPTIONS.Syntax -->](../../commands/st-get-options)<br/>                 |
| [<!-- INCLUDE #_command_.ST Get plain text.Syntax -->](../../commands/st-get-plain-text)<br/>           |
| [<!-- INCLUDE #_command_.ST Get text.Syntax -->](../../commands/st-get-text)<br/>                       |
| [<!-- INCLUDE #_command_.ST GET URL.Syntax -->](../../commands/st-get-url)<br/>                         |
| [<!-- INCLUDE #_command_.ST INSERT EXPRESSION.Syntax -->](../../commands/st-insert-expression)<br/>     |
| [<!-- INCLUDE #_command_.ST INSERT URL.Syntax -->](../../commands/st-insert-url)<br/>                   |
| [<!-- INCLUDE #_command_.ST SET ATTRIBUTES.Syntax -->](../../commands/st-set-attributes)<br/>           |
| [<!-- INCLUDE #_command_.ST SET OPTIONS.Syntax -->](../../commands/st-set-options)<br/>                 |
| [<!-- INCLUDE #_command_.ST SET PLAIN TEXT.Syntax -->](../../commands/st-set-plain-text)<br/>           |
| [<!-- INCLUDE #_command_.ST SET TEXT.Syntax -->](../../commands/st-set-text)<br/>                       |

## Trabajando con comandos de manejo de texto

### Interfaz de usuario

Los comandos que pueden utilizarse para manipular objetos de texto por programación no tienen en cuenta ninguna etiqueta de estilo integrada en el texto. Sólo actúan sobre el texto visualizado. Esto afecta a los siguientes comandos:

- comandos del tema [Interfaz de usuario](./User_Interface.md)
- [`HIGHLIGHT TEXT`](../../commands/highlight-text)
- [`GET HIGHLIGHT`](../../commands/get-highlight)

Cuando se utilizan estos comandos con comandos que manipulan cadenas de caracteres, es necesario filtrar los caracteres de formato utilizando el comando [`ST Get plain text`](../../commands/st-get-plain-text):

```4d
 HIGHLIGHT TEXT([Products]Notes;1;Length(ST Get plain text([Products]Notes))+1)
```

### Objetos (formularios)

Los comandos que se pueden utilizar para modificar el estilo de los objetos (por ejemplo, [`OBJECT SET FONT`](../../commands/object-set-font)) se aplican a todo el objeto y no a la selección.

Si el objeto no tiene el foco cuando se ejecuta el comando, la modificación se aplica simultáneamente al objeto (el área de texto) y a su variable asociada. Si el objeto tiene el foco, la modificación se aplica al objeto, pero no a la variable asociada. La modificación solo se aplica a la variable cuando el objeto pierde el foco. Tenga presente este principio a la hora de programar áreas de texto.

:::note

Si la opción [**Guardar con etiquetas de estilo predeterminadas**](../../FormObjects/properties_Text.md#store-with-default-style-tags) está marcada para el objeto, el uso de estos comandos provocará una modificación de las etiquetas guardadas con cada objeto.

:::

Tenga en cuenta también que sólo las propiedades por defecto son afectadas por estos comandos (así como las propiedades guardadas por medio de las etiquetas predeterminadas). Las etiquetas de estilo personalizadas se mantienen tal y como están. Por ejemplo, se da un área de estilo múltiple donde se guardaron las etiquetas predeterminadas:

![](../../assets/en/FormObjects/multistyle-ex1.png)

El texto sin formato del área es el siguiente:

```html
<span style="text-align:left;font-family:'Segoe UI';font-size:9pt;color:#009900">This is the word <span style="color:#D81E05">red</span></span>
```

Si ejecuta el siguiente código:

```4d
OBJECT SET COLOR(*;"myArea";-(Blue+(256*Yellow)))
```

El color rojo permanece:

![](../../assets/en/FormObjects/multistyle-ex2.png)

y el código es:

```html
<span style="text-align:left;font-family:'Segoe UI';font-size:9pt;color:#0000FF">This is the word <span style="color:#D81E05">red</span></span>
```

Se trata de los siguientes comandos:

- [`OBJECT SET RGB COLORS`](../../commands/object-set-rgb-colors)
- [`OBJECT SET FONT`](../../commands/object-set-font)
- [`OBJECT SET FONT STYLE`](../../commands/object-set-font-style)
- [`OBJECT SET FONT SIZE`](../../commands/object-set-font-size)

En el contexto de las áreas multiestilo, estos comandos sólo deben utilizarse para definir estilos por defecto. Para gestionar los estilos durante la ejecución de la base de datos, recomendamos utilizar los comandos del tema "Texto con estilo".

### Get edited text

Cuando se utiliza con un área de texto enriquecido, el comando [`Get edited text`](../../commands/get-edited-text) devuelve el texto del área actual, incluidas las etiquetas de estilo.

Para recuperar el texto "sin formato" (texto sin etiquetas) que se está editando, debe utilizar el comando [`ST Get plain text`](../../commands/st-get-plain-text):

```4d
ST Get plain text(Get edited text)
```

### Consulta y orden por comandos

Las consultas y ordenaciones realizadas entre objetos con varios estilos tienen en cuenta las etiquetas de estilo guardadas en el objeto. Si se ha modificado el estilo de una palabra, la búsqueda de esa palabra no dará resultado.

Para poder realizar búsquedas y ordenaciones válidas, debe utilizar el comando [`ST Get plain text`](../../commands/st-get-plain-text). Por ejemplo:

```4d
QUERY BY FORMULA([MyTable];ST Get plain text([MyTable]MyFieldStyle)="very well")
```

