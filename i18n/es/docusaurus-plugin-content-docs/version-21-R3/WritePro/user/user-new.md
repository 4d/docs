---
id: user-new
title: user WP
draft: true
---

para importar

<!-- REF lists-WP.Desc -->

## Listas

4D Write Pro admite listas planas (de un solo nivel) y listas jerárquicas (de varios niveles).

### Listas de un solo nivel

4D Write Pro soporta dos tipos principales de listas de un solo nivel:

- listas desordenadas: donde los elementos de la lista se marcan con viñetas, viñetas personalizadas o imágenes utilizadas como marcadores.
- listas ordenadas: en las que los elementos de la lista se marcan con números o letras

Pueden crearse utilizando:

- la barra de herramientas o la barra lateral de la [interfaz de 4D Write Pro](https://doc.4d.com/4Dv20/4D/20.2/Entry-areas.300-6750367.en.html#5865253)
- las [acciones estándar](./standard-actions) `listStyleType` o `listStyleImage`,
- o [por programación](../commands-legacy/4d-write-pro-attributes.md#lists) utilizando [WP SET ATTRIBUTE](../commands/wp-set-attributes).

Cuando se crea una lista utilizando una acción estándar (`listStyleType` o `listStyleImage`) o la barra de herramientas/barra lateral, 4D Write Pro inserta automáticamente un margen antes del texto para que el marcador se sitúe en él. El valor del margen insertado corresponde al desplazamiento de la tabulación por defecto (`wk tab default`).

![](../../assets/en/WritePro/margin-bullets.png)

Cuando la lista se crea usando [el comando WP SET ATTRIBUTE](../commands-legacy/4d-write-pro-attributes.md#lists), no se gestiona ningún margen específico, por defecto se añade el marcador en el límite izquierdo del párrafo. El desarrollador puede añadir un margen personalizado si es necesario.

:::tip Entrada de blog relacionada

[4D Write Pro - Añadir un margen automáticamente cuando las viñetas se definen con acciones estándar](https://blog.4d.com/4d-write-pro-adding-a-margin-automatically-when-bullets-are-set-using-standard-actions)

:::

### Listas de múltiples niveles

Las listas multinivel contienen una hoja de estilo de nivel raíz y una o más hojas de estilo de subnivel. Las listas multinivel contienen una hoja de estilo de nivel raíz y una o más hojas de estilo de subnivel. Multi-level lists are based on [hierarchical list style sheets](../user-legacy/stylesheets.md#hierarchical-list-style-sheets).

Cuando se crea un nuevo subnivel, la numeración de niveles vuelve a empezar en 1. Cuando añade o elimina un elemento en su lista de nivel múltiple, los números se ajustan automáticamente.

![](../../assets/en/WritePro/multilevel-lists.png)

Las listas de varios niveles se crean con el comando [WP New style sheet](../commands/wp-new-style-sheet.md) y se pueden aplicar a un párrafo mediante [WP SET ATTRIBUTE](../commands/wp-set-attributes.md).

Listas de varios niveles pueden ser gestionadas usando:

- el párrafo [atributos de la hoja de estilo](../commands-legacy/4d-write-pro-attributes.md#style-sheets) (como `wk list level index`, `wk list level count` y `wk list concat string format`)
- [acciones estándar](../user-legacy/standard-actions.md) dedicadas para la gestión de niveles (`listLevelAppend`, `listLevelInc`, `listLevelDec`)
- acciones estándar específicas para la gestión de marcadores de numeración (`listConcatStringFormat`, `listNumberFormat`).

:::tip Entrada de blog relacionada

[4D Write Pro - Creación de listas con viñetas o numeradas de varios niveles usando hojas de estilo de listas jerárquicas](https://blog.4d.com/4d-write-pro-creating-multi-level-bullet-or-numbered-lists-using-hierarchical-paragraph-style-sheets)

:::

<!-- END REF -->

<!-- REF hierarchical-list.Desc -->

## Hojas de estilo de listas jerárquicas

Las hojas de estilo de listas jerárquicas se utilizan para crear [listas multinivel](../user-legacy/using-a-4d-write-pro-area.md#multi-level-lists).

Para crear una hoja de estilo de lista jerárquica, utilice [WP New style sheet](../commands/wp-new-style-sheet.md) e introduzca en *listLevelCount* el número de niveles que desee. A continuación, se define una jerarquía de hojas de estilo de párrafo relacionadas: una hoja de estilo de **nivel raíz** y una o varias hojas de estilo de **subnivel** vinculadas a ella. Cada nivel representa una profundidad en la lista (nivel 1, nivel 2, nivel 3, etc.) y se llama automáticamente "Nombre de nivel raíz + lvl + índice", por ejemplo "Mylist lvl 2".

Para personalizar los estilos de lista jerarquica, se puede personalizar el objeto de hoja de estilos de párrafo utilizando [los atributos de la hoja de estilos](../commands-legacy/4d-write-pro-attributes.md#style-sheets).

Las hojas de estilo de lista jerárquica están totalmente soportadas por los siguientes comandos: [`WP Get style sheet`](../commands/wp-get-style-sheet.md), [`WP SET ATTRIBUTES`](../commands/wp-set-attributes.md), [`WP DELETE STYLE SHEET`](../commands/wp-delete-style-sheet.md).

### Ejemplo

El siguiente ejemplo crea una hoja de estilo de lista jerárquica de tres niveles y la aplica a los párrafos.

```4d
// Crear 3 hojas de estilo de lista jerárquica
Nueva hoja de estilo WP (wpArea; párrafo de tipo wk; "MyList"; 3)

// Recuperar cada nivel
var $level1; $level2; $level3 : Objeto
$level1:=WP Get style sheet (wpArea; "MyList"; 1) // Nivel raíz
$level2:=WP Get style sheet (wpArea; "MyList"; 2) // Primer subnivel
$level3:=WP Get style sheet (wpArea; "MyList"; 3) // Segundo subnivel

// Personaliza los estilos
WP SET ATTRIBUTES($level1; {listStyleType: wk upper latin; fontBold: wk true})
WP SET ATTRIBUTES($level2; {listConcatStringFormat: True})
WP SET ATTRIBUTES($level3; {listStringFormatLtr: "(#)"})

// Aplicar hojas de estilo de lista jerárquica a los párrafos
var $paragraphs : Collection
$paragraphs:=WP Get elements(wpArea; wk type paragraph)

WP SET ATTRIBUTES($paragraphs[0]; wk style sheet; $level1)
WP SET ATTRIBUTES($paragraphs[1]; wk style sheet; $level2)
WP SET ATTRIBUTES($paragraphs[2]; wk style sheet; $level3)
```

resultado:

![](../../assets/en/WritePro/hierarchical-paragraph-stylesheets-1.png)

Para eliminar el primer subnivel:

```4d
WP DELETE STYLE SHEET(wpArea; "MyList"; 2)
```

resultado:

![](../../assets/en/WritePro/hierarchical-paragraph-stylesheets-2.png)

### Valores de atributos predefinidos

Cuando se crean, las hojas de estilo de listas jerárquicas utilizan valores predefinidos:

- `wk margin left` = 0,75 cm \* (número de niveles anteriores) o 0,25 pulgadas \* (número de niveles anteriores), dependiendo de la unidad de diseño actual
- `wk list type` = `wk decimal`
- `wk name` se deriva del nombre de la hoja de estilo raíz (Sólo lectura para subniveles)
- `wk list level count` se fija en el valor especificado para todos los niveles

  - Ejemplo:

    - Nivel de raíz: `"MyList"`
    - Primer subnivel: `"MyList nivel 2"`
    - Segundo subnivel: `"MyList lvl 3"`

<!-- END REF -->

