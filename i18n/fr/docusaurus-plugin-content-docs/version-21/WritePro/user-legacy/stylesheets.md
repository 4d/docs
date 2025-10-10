---
id: stylesheets
title: Feuilles de style
displayed_sidebar: docs
slug: /WritePro/stylesheets
---


Une feuille de style est un objet composé d’un ensemble de paramètres d’attributs définis pour gérer l’apparence de vos documents 4D Write Pro. Ces paramètres peuvent s’appliquer aux paragraphes et aux caractères, tels que la police à afficher, sa taille, sa couleur et son poids. Une fois la feuille de style définie, elle est sauvegardée en tant qu’objet dans le document 4D Write Pro afin d’être réutilisée facilement. Les feuilles de style vous permettent de donner à vos documents un aspect unique et distinctif, tout en gagnant du temps et au moindre effort.

## Style par défaut

Tous les documents 4D Write Pro ont une feuille de style de paragraphe par défaut, nommée “Normal”. De nouvelles feuilles de style (créées à l’aide de la commande [WP New style sheet](../commands-legacy/wp-new-style-sheet)) sont héritées automatiquement du style Normal. Les attributs modifiés par une feuille de style ont uniquement une incidence sur les paragraphes auxquels ils s’appliquent, le reste du document conserve les paramètres par défaut (Normal). Si une feuille de style est supprimée, les attributs qui ont été modifiés reprennent le style Normal.

Le style Normal définit une valeur par défaut à chaque feuille de style dans un document 4D Write Pro et peut être récupéré à l’aide de la commande [WP Get style sheet](../commands-legacy/wp-get-style-sheet). La feuille de style Normal peut être modifiée (mais ne peut pas être renommée) à l’aide de la commande [WP SET ATTRIBUTES](../commands/wp-set-attributes). Si les feuilles de style créées avec la commande [WP New style sheet](../commands-legacy/wp-new-style-sheet) sont supprimées avec la commande [WP DELETE STYLE SHEET](../commands-legacy/wp-delete-style-sheet), la feuille de style Normal ne peut pas être supprimée.

## Attributs des feuilles de style de paragraphe et de caractère

Les feuilles de style vous permettent de définir les attributs de paragraphes entiers ou de caractères spécifiques :

- **Paragraphe** - La majorité des attributs pouvant être modifiés s’appliquent uniquement aux paragraphes. Les feuilles de style de paragraphe incluent les paramètres de style de caractère ainsi que les attributs de formatage qui ne peuvent s’appliquer qu’au niveau des paragraphes (ex : marges, bordures, tabulations, etc.).
- **Caractère** - Les feuilles de style de caractère utilisent uniquement les attributs appropriés pour distinguer le style du texte (un ou plusieurs caractères) du style du paragraphe (ex : en-têtes, titres, texte surligné, etc.).

À noter que les styles de paragraphe s’appliquent à l’ensemble des paragraphes. Si vous souhaitez appliquer un style uniquement à une partie spécifique du paragraphe, vous devez utiliser une feuille de style de caractère.

## Priorité des feuilles de style

Plusieurs feuilles de style de paragraphe et de caractère peuvent être intégrées au même document 4D Write Pro. Il est important de noter que la priorité des feuilles de style est déterminée selon l’ordre dans lequel elles s’appliquent :

- Si vous appliquez une feuille de style de paragraphe suivie d’une feuille de style de caractère, la feuille de style de caractère sera prioritaire par rapport à la feuille de style de paragraphe. Par exemple, vous pouvez appliquer une feuille de style de paragraphe au corps de votre document et créer ensuite une feuille de caractère “gras” et l’appliquer à certains mots. La feuille de paragraphe continuera de s’appliquer au reste du texte, mais la feuille de style de caractère sera prioritaire pour les mots qui avaient été désignés.
- Si vous appliquez une feuille de style de caractère suivie d’une feuille de style de paragraphe, la feuille de style de paragraphe s’appliquera à l’ensemble du texte et tous les styles de caractères liés à la feuille de style de caractère seront supprimés.

## Appliquer les feuilles de style

Les feuilles de style s’appliquent à l’aide de la commande [WP SET ATTRIBUTES](../commands/wp-set-attributes) et des constantes `wk style sheet` ou `wk new line style sheet` (ou à l’aide de la notation objets).

## Récupérer les feuilles de style

La commande [WP Get style sheets](../commands-legacy/wp-get-style-sheets) vous permet de récupérer toutes les feuilles de style d’un document en fonction de leur type. La commande [WP Get style sheet](../commands-legacy/wp-get-style-sheet) vous permet de récupérer une feuille de style via son nom.

## Importer et exporter des feuilles de style

Les feuilles de style étant stockées sous forme d’objets, elles peuvent être facilement importées dans d’autres documents 4D Write Pro ou maintenues lorsqu’elles sont exportées sous plusieurs formats.

- **Import** - Vous pouvez obtenir tous les objets de la feuille de style d’un document 4D Write Pro spécifique et les utiliser dans un nouveau document à l’aide de la commande [WP IMPORT STYLE SHEETS](../commands-legacy/wp-import-style-sheets).
- **Export** - Les commandes [WP EXPORT DOCUMENT](../commands/wp-export-document) ou [WP EXPORT VARIABLE](../commands/wp-export-variable.md) exportent vos documents avec leurs feuilles de style.

## Attributs des feuilles de style

Les attributs de paragraphe et de caractère ci-dessous peuvent être modifiés à l’aide des commandes [WP SET ATTRIBUTES](../commands/wp-set-attributes) et [WP RESET ATTRIBUTES](../commands/wp-reset-attributes), ou récupérés à l’aide de la commande [WP GET ATTRIBUTES](../commands/wp-get-attributes).

:::note

Note : Certains attributs sont liés. Ainsi, lorsque vous ajoutez l’un de ces attributs, les autres attributs liés sont également créés avec les valeurs par défaut. La valeur par défaut des attributs liés peut être différente de la valeur définie dans la feuille de style Normal. Par exemple, si vous définissez uniquement une bordure gauche de couleur rouge, les autres bordures seront noires (valeur par défaut) même si les bordures du style Normal étaient précédemment définies comme violettes.

:::


| Attributs                        | Paragraphe | Caractère | Lié à |
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


