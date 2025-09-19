---
id: stylesheets
title: Folhas de estilo
displayed_sidebar: docs
slug: /WritePro/user/stylesheets
---


Uma folha de estilo é um objeto de um conjunto definido de configurações de atributos utilizadas para controlar a aparência de seus documentos 4D Write Pro. Esta configuração pode ser aplicada a parágrafos e caracteres, como a fonte a mostrar, assim como o tamanho, a cor e o peso da fonte. Quando tiver definido uma folha de estilo, é guardada como um objeto no documento 4D Write Pro para que possa ser reutilizada facilmente. As folhas de estilo lhe permitem dar a seus documentos um aspecto diferente e único, enquanto poupa tempo e esforço.

## Estilo “normal”

Todos os documentos 4D Write Pro têm uma folha de estilo de parágrafo definida por padrão, “Normal”. As novas folhas de estilo (criadas com o comando [WP New style sheet](../commands-legacy/wp-new-style-sheet)) se herdam automaticamente do estilo Normal. Os atributos modificados por uma folha de estilo só afetam aos parágrafos aos que forem aplicados, o resto de documento conserva a configuração Normal por padrão. Se for eliminada uma folha de estilo, os atributos modificados voltarão ao estilo Normal.

O estilo Normal define um valor predeterminado para cada atributo de folha de estilo em um documento 4D Write Pro e pode ser recuperado com o comando [WP Get style sheet](../commands-legacy/wp-get-style-sheet). A folha de estilo Normal pode ser modificada (mas não renomeada) com o comando [WP SET ATTRIBUTES](../commands/wp-set-attributes). Apesar das folhas de estilo criadas com o comando [WP New style sheet](../commands-legacy/wp-new-style-sheet) poderem ser eliminadas com o comando [WP DELETE STYLE SHEET](../commands-legacy/wp-delete-style-sheet), a folha de estilo Normal não pode ser reliminada.

## Folhas de estilo de atributos de parágrafo e de caracteres

As folhas de estilo lhe permitem definir os atributos de parágrafos completos ou caracteres específicos:

- **Parágrafo** - a grande maioria dos atributos que podem ser modificados se aplicam aos parágrafos. As folhas de estilo de parágrafo incluem configurações de estilo de caracteres, assim como atributos de formato que apenas podem ser aplicados a nível de parágrafo (por exemplo, margens, bordas, abas, etc.).
- **Caracteres** - as folhas de estilo de caracteres utilizam apenas os atributos apropriados para diferenciar o texto (um ou mais caracteres) do estilo de parágrafo (por exemplo, cabeçalhos, títulos, texto sublinhado, etc.).

Lembre que os estilos de parágrafo se aplicam a parágrafos completos. Para aplicar um estilo apenas a uma parte específica de um parágrafo, deve utilizar uma folha de estilo de caracteres.

## Precedência de folha de estilo

Podem ser combinadas várias folhas de estilo de parágrafos e caracteres dentro do mesmo documento 4D Write Pro. É importante lembrar que a prioridade da folha de estilo estiver determinada pela ordem em que se aplicam.

- Se aplicar uma folha de estilo de parágrafo e depois aplicar uma folha de estilo de caracteres, a folha de estilo de caracteres terá prioridade sobre a folha de estilo de parágrafo. Por exemplo, poderia aplicar uma folha de estilo de parágrafo ao corpo de seu documento, depois poderia criar uma folha de estilo de caracteres “em negrito” e aplicá-la a palavras específicas. A folha de estilo de parágrafo se aplicará ao resto del texto, sin embargo, a folha de estilo de caracteres terá prioridade para as palavras designadas.
- Se aplicar uma folha de estilo de caracteres e depois aplicar uma folha de estilo de parágrafo, a folha de estilo de parágrafo se aplicará a todo o texto e se eliminarão todos os estilos de caracteres da folha de estilos de caracteres.

## Aplicando folhas de estilo

As folhas de estilo se aplicam com o comando [WP SET ATTRIBUTES](../commands/wp-set-attributes) utilizando as constantes `wk style sheet` ou `wk new line style sheet` (utilizando notação de objetos).

## Recuperando folhas de estilo

O comando [WP Get style sheets](../commands-legacy/wp-get-style-sheets) lhe permite recuperar todas as folhas de estilo de um documento de acordo com seu tipo específico. O comando [WP Get style sheet](../commands-legacy/wp-get-style-sheet) lhe permite recuperar uma única folha de estilo por seu nome.

## Importar e exportar folhas de estilo

Devido a que as folhas de estilo se armazenam como objetos, podem ser facilmente importadas entre a outros documentos 4D Write Pro ou ser mantidas quando são exportadas em múltiplos formatos.

- **Importar** - pode obter todos os objetos de folha de estilo de um documento 4D Write Pro designado e usá-los em um novo documento com o comando [WP IMPORT STYLE SHEETS](../commands-legacy/wp-import-style-sheets).
- **Exportar** - os comandos [WP EXPORT DOCUMENT](../commands/wp-export-document) ou [WP EXPORT VARIABLE](../commands/wp-export-variable.md) exportam seus documentos com suas folhas de estilo.

## Atributos de folhas de estilo

Os atributos abaixo de folha de estilo de parágrafos e caracteres se podem modificar com os comandos [WP SET ATTRIBUTES](../commands/wp-set-attributes) e [WP RESET ATTRIBUTES](../commands/wp-reset-attributes), ou se recuperam com o comando [WP GET ATTRIBUTES](../commands/wp-get-attributes).

:::note

Nota: alguns atributos estão vinculados entre si. Por lo tanto, ao agregar apenas um desses atributos, os outros atributos vinculados também se criarão com os valores predeterminados. Para os atributos vinculados, o valor predeterminado pode ser diferente do valor definido na folha de estilo Normal. Por exemplo, se definir apenas uma borda esquerda vermelha, os outros bordas serão pretas (valor por defeito) mesmo se as bordas na folha de estilo Normal tinham sido previamente definidas como púrpura.

:::


| Atributos                        | Parágrafo | Caractere | Associado com |
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


