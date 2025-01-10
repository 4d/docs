---
id: markers
title: Taquets
---

Ces propriétés vous permettent de spécifier l'emplacement précis des taquets sur la règle verticale d'un **formulaire table**. Les taquets sont principalement utilisés dans les formulaires de sortie. Ils contrôlent les informations listées et définissent les zones d'en-tête, de ruptures, de détail et de pied de page du formulaire. Tout objet placé dans ces zones est affiché ou imprimé à l'endroit approprié.

Chaque fois qu'un formulaire est utilisé pour la sortie, que ce soit pour l'affichage ou l'impression, les lignes de taquet de sortie prennent effet et les zones sont affichées ou imprimées aux endroits désignés. Les taquets prennent également effet lorsqu'un formulaire est utilisé comme formulaire liste dans une zone de sous-formulaire. Ils n'ont aucun effet quand un formulaire est utilisé pour la saisie.

Les méthodes qui sont associées à des objets dans ces zones sont exécutées lorsque les zones sont imprimées ou affichées tant que les événements appropriés ont été activés. Par exemple, une méthode objet placée dans la zone d'en-tête est exécutée lorsque l'événement `On Header` a lieu.

---

## Zone de rupture

Les zones de rupture sont affichées une fois à la fin de la liste des enregistrements et sont imprimées une fois après que les enregistrements ont été imprimés dans un état.

La zone de rupture est située entre la ligne du taquet du corps et la ligne du taquet de la zone de rupture. Il peut y avoir [plusieurs zones de rupture](#zones-supplementaires) dans votre état.

Vous agrandissez ou réduisez la zone de rupture en faisant glisser le taquet vers le bas ou vers le haut. Vous pouvez utiliser une zone de rupture pour afficher des informations qui ne font pas partie des enregistrements (instructions, date courante, heure courante, etc.) ou pour afficher un trait ou un autre élément graphique qui marque la fin de l’affichage écran. Dans un état imprimé, vous pouvez utiliser une zone de rupture pour calculer et imprimer des sous-totaux et des calculs globaux.

#### Grammaire JSON

| Nom         | Type de données               | Valeurs possibles                                                                                                                                  |
| ----------- | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| markerBreak | integer \| integer collection | Position du taquet de rupture ou collection des positions de taquets de rupture en pixels.<br/>Valeur minimale : 0 |

---

## Zone de corps

La zone de corps (ou de détail) du formulaire est affichée à l'écran et imprimée une fois pour chacun des enregistrements d’un état. La zone de corps est définie comme étant la zone comprise entre le taquet de la zone d’en-tête et le taquet de la zone de corps.

Vous agrandissez ou réduisez la taille de cette zone en faisant glisser le taquet C vers le bas ou vers le haut. Tout élément placé dans cette zone est affiché ou imprimé une fois pour chacun des enregistrements. La plupart du temps, vous placez des champs ou des variables dans cette zone afin que les données de chaque enregistrement soient imprimées ou affichées, mais il est aussi possible d’y placer d’autres éléments.

#### Grammaire JSON

| Nom        | Type de données | Valeurs possibles                                                       |
| ---------- | --------------- | ----------------------------------------------------------------------- |
| markerBody | integer         | Position du taquet de corps. Minimum: 0 |

---

## Zone de pied de page

La zone de pied de page est affichée à l’écran sous la liste des enregistrements. Elle est toujours imprimée en bas de chaque page d’un état. La zone pied de page est définie comme étant la zone située entre le taquet de la zone de rupture (R) et le taquet de pied de page (P).

Pour agrandir ou réduire la taille de cette zone, faites glisser le taquet vers le bas ou vers le haut.

Vous pouvez utiliser la zone de pied de page pour imprimer la date courante, le numéro de page, des éléments graphiques ou tout texte que vous souhaitez voir apparaître en bas de chaque page de votre état. Pour les formulaires de sortie conçus pour être utilisés à l’écran, la zone de pied de page peut contenir des boutons permettant de lancer une recherche ou un tri, d’imprimer des enregistrements ou de quitter le formulaire courant. Tous les objets actifs sont acceptés.

#### Grammaire JSON

| Nom          | Type de données | Valeurs possibles           |
| ------------ | --------------- | --------------------------- |
| markerFooter | integer         | minimum : 0 |

---

## Zone d’en-tête

La zone d’en-tête est affichée en haut de chaque écran et est imprimée en haut de chaque page de l’état. C’est la zone située au dessus du taquet E.

Vous agrandissez ou réduisez sa taille en déplaçant ce taquet vers le bas ou vers le haut. Vous pouvez utiliser la zone d’en-tête pour les noms de colonnes, les instructions, des informations supplémentaires ou des images telles qu’un logo ou un motif de décoration.

Vous pouvez également placer et utiliser des objets actifs dans la zone d'en-tête des formulaires de sortie affichés sous forme de sous-formulaires, dans la fenêtre d'affichage des enregistrements ou en utilisant les commandes `DISPLAY SELECTION` et `MODIFY SELECTION`. Les objets actifs suivants sont acceptés :

- Boutons, boutons image,
- Combo boxes, drop-down lists, picture pop-up menus,
- listes hiérarchiques, list boxes
- Boutons radio, cases à cocher, cases à cocher 3D,
- Indicateurs de progression, règles, steppers, spinners.

Les actions standard telles que `Add Subrecord`, `Cancel` (listes affichées en utilisant `DISPLAY SELECTION` et `MODIFY SELECTION`) ou `Automatic splitter` peuvent être assignées aux boutons insérés. Les événements suivants s'appliquent aux objets actifs que vous insérez dans la zone d'en-tête : `On Load`, `On Clicked`, `On Header`, `On Printing Footer`, `On Double Clicked`, `On Drop`, `On Drag Over`, `On Unload`. A noter que la méthode formulaire est appelée avec l’événement `On Header` après l’appel des méthodes de tous les objets de la zone.

Le formulaire peut contenir des [zones d'en-tête supplémentaires](#zones-supplementaires) pour être associé à des ruptures supplémentaires. Un en-tête de niveau 1 est imprimé juste avant que les enregistrements regroupés par le premier champ trié soient imprimés.

#### Grammaire JSON

| Nom          | Type de données               | Valeurs possibles                                                                                                                                |
| ------------ | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| markerHeader | integer \| integer collection | Position du taquet d'en-tête ou collection des positions de taquets d'en-tête en pixels.<br/>Valeur minimale : 0 |

## Zones supplémentaires

Vous pouvez créer des zones de rupture et d'en-tête supplémentaires pour un rapport. Ces zones supplémentaires vous permettent d'imprimer des sous-totaux et d'autres calculs dans un rapport et d'afficher efficacement d'autres informations.

Des zones supplémentaires sont définies lorsque vous utilisez une collection de positions dans les propriétés [Zone de rupture](#form-break) et [Zone d'en-tête](#form-header).

> Dans l'éditeur de formulaires de 4D, vous créez des lignes de contrôle supplémentaires en maintenant la touche **Alt** enfoncée tout en cliquant sur le taquet de contrôle approprié.

Un formulaire commence toujours par les zones entête, corps, niveau de rupture 0, et pied de page.

Le niveau de rupture 0 englobe tous les enregistrements ; il prend place une fois que tous les enregistrements ont été imprimés. Les taquets de rupture supplémentaires sont désignés par des nombres, un taquet libellé R1 a pour signification "Rupture de niveau 1", etc.

Une rupture de niveau 1 prend place après l’impression des enregistrements groupés par le premier argument du tri.

| Libellé | Description         | S’imprime après les groupes créés par |
| ------- | ------------------- | ------------------------------------- |
| R1      | Rupture de niveau 1 | Premier argument de tri               |
| R2      | Rupture de niveau 2 | Deuxième argument de tri              |
| R3      | Rupture de niveau 3 | Troisième argument de tri             |

Des taquets de contrôle supplémentaires des en-têtes sont associés aux ruptures. Un en-tête de niveau 1 est imprimé juste avant que les enregistrements regroupés par le premier champ trié soient imprimés.

| Libellé | Description         | S’imprime après les groupes créés par |
| ------- | ------------------- | ------------------------------------- |
| E1      | En-tête de niveau 1 | Premier argument de tri               |
| E2      | En-tête de niveau 2 | Deuxième argument de tri              |
| E3      | En-tête de niveau 3 | Troisième argument de tri             |

Si vous utilisez la fonction `Subtotal` pour initialiser le traitement des ruptures, vous devez créer autant de zones de ruptures que de niveaux de ruptures générés par le tri, moins une. Si vous n’avez pas besoin d’une zone de rupture, vous pouvez réduire sa taille en faisant coïncider son taquet de contrôle avec celui d’une autre zone. S’il y a davantage de niveaux de tri que de zones de rupture, la dernière zone de rupture sera répétée lors de l’impression.
