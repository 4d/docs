---
id: ranges
title: Plages
displayed_sidebar: docs
slug: /WritePro/user/ranges
---



4D Write Pro permet de sélectionner et de manipuler par programmation les contenus des documents. Comme le contenu sélectionné peut inclure du texte, des images, des tableaux, etc. et également des balises (invisibles) de formatage, 4D Write Pro travaille avec des objets appelés **plages**.

Une plage est un objet qui représente une portion de document 4D Write Pro :

- Une plage de caractères, de paragraphes, d’images ou de tableaux est définie grâce à l’emplacement des caractères dans le document parent,
- Une plage de cellules, de colonnes et de lignes est définie grâce à l’emplacement des cellules et sont ancrées au tableau parent.

Une plage est utilisée pour désigner les éléments à sélectionner ou pour manipuler des attributs sur une partie du document (à l’aide des commandes [`WP GET ATTRIBUTES`](../commands/wp-get-attributes) et [`WP SET ATTRIBUTES`](../commands/wp-set-attributes)).

Il existe différents types de plages. Vous pouvez connaître le type d’une plage à l’aide de l’attribut `wk type` (en lecture seule). Chaque plage contient plusieurs attributs privés qui la définissent :

| Constante    | Valeur | Commentaire |
|--------------|--------|-------------|
| `wk end`     | `end`  | (Attribut de plage en lecture seule) Position fin de plage. Valeur : entier long |
| `wk owner`   | `owner`| (Attribut en lecture seule) Possesseur de la plage. Valeur : objet |
| `wk start`   | `start`| (Attribut de plage en lecture seule) Position début de plage. Valeur : entier long |
| `wk type`    | `type` | (Attribut de plage en lecture seule) Type d’objet 4D Write Pro. Valeurs possibles :<br> - `wk type default` : Plage sans type défini<br> - `wk type paragraph` : Plage de type paragraphe<br> - `wk type image` : Image (ancrée ou en ligne)<br> - `wk type image anchored` : Image ancrée<br> - `wk type image inline` : Image en ligne<br> - `wk type container` : En-tête ou pied, par exemple<br> - `wk type table` : Référence de tableau<br> - `wk type table row` : Référence de ligne de tableau<br> - `wk type table cell` : Référence de cellule de tableau<br> - `wk type table column` : Référence de colonne de tableau (uniquement pour plage colonne)<br> - `wk type body` : Référence de corps (body) |

Les plages de lignes, colonnes et cellules de [tables](./handling-tables.md) disposent d’attributs privés spécifiques permettant de les définir :

| Constante              | Valeur            | Commentaire |
|------------------------|-------------------|-------------|
| `wk cell count`        | `cellCount`       | Nombre total de cellules dans la ligne.<br>**Type de valeur** : Entier long *(valeur pour `wk type table row`)* |
| `wk column count`      | `columnCount`     | *(Disponible pour les tableaux, les documents et les sections)* Nombre de colonnes.<br>**Type de valeur** : Entier long<br>Pour un tableau : attribut en lecture seule<br>Pour un document ou une section : attribut en lecture/écriture. Valeur par défaut = 1 (colonne unique). Valeur maximum = 20 |
| `wk first column`      | `firstColumn`     | *(Attribut en lecture seule)* Numéro de la première colonne du tableau incluse dans la plage.<br>**Valeur** : Entier long |
| `wk first row`         | `firstRow`        | *(Attribut en lecture seule)* Numéro de la première ligne du tableau incluse dans la plage.<br>**Valeur** : Entier long |
| `wk header row count`  | `headerRowCount`  | *(Lecture/Écriture)* Nombre de lignes du tableau pour lesquelles l’attribut `wk header` est défini sur True.<br>La valeur maximale est 5. Si vous indiquez une valeur supérieure à 5, `wk header` est défini sur True pour les cinq premières lignes uniquement *(voir [Répétition des en-têtes](./handling-tables.md#repeated-headers))* |
| `wk row count`         | `rowCount`        | *(Attribut en lecture seule)* Nombre total de lignes.<br>**Valeur** : Entier long |
| `wk table`             | `table`           | *(Attribut en lecture seule)* Le tableau parent.<br>**Type de valeur** : Objet |
| `wk table ID`          | `tableID`         | *(Attribut en lecture seule)* ID du tableau parent.<br>**Valeur** : Chaîne |



Plusieurs commandes vous permettent de définir les plages d’un document :

- [WP Text range](../commands-legacy/wp-text-range.md) retourne une nouvelle plage correspondant aux limites que vous avez passées en paramètres.
- [WP Selection range](../commands-legacy/wp-selection-range) retourne une nouvelle plage correspondant à la sélection utilisateur courante.
- [WP Picture range](../commands-legacy/wp-picture-range) retourne une nouvelle plage contenant uniquement les images.
- [WP Paragraph range](../commands-legacy/wp-paragraph-range) retourne une nouvelle plage contenant uniquement les paragraphes.
- [WP Table range](../commands-legacy/wp-table-range) retourne une nouvelle plage contenant uniquement les tableaux.

Vous pouvez obtenir des informations sur la position d’une plage dans un document (numéro de page, numéro de colonne…) à l’aide de la commande [WP Get position](../commands-legacy/wp-get-position).
