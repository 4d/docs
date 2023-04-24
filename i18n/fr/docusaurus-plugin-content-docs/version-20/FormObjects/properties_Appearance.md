---
id: propertiesAppearance
title: Apparence
---

## Bouton par défaut

La propriété de bouton par défaut désigne le bouton qui obtient le focus initial à l'exécution lorsqu'aucun bouton du formulaire ne possède la propriété [Focusable](properties_Entry.md#focusable).

Il ne peut y avoir qu'un seul bouton par défaut par page de formulaire.

De plus, sous macOS, la propriété du bouton par défaut modifie l'apparence du bouton afin d'indiquer un «choix recommandé» à l'utilisateur. Le bouton par défaut peut être différent du bouton sélectionné. Les boutons par défaut ont une apparence bleue spécifique sur macOS :

![](../assets/en/FormObjects/property_defaultButtonmacOS.en.png)

> Le bouton doit avoir une hauteur standard pour obtenir l'apparence du bouton par défaut.

Sous Windows, le concept de "choix recommandé" n'est pas pris en charge: seul le bouton focalisé a une apparence différente à l'exécution. Cependant, dans l'éditeur de formulaires 4D, le bouton par défaut est représenté par un contour bleu :

![](../assets/en/FormObjects/property_defaultButtonWindows.en.png)

#### Grammaire JSON

| Nom | Type de données | Valeurs possibles |
| --- | --------------- | ----------------- |
|     |                 |                   |
 defaultButton|booléen|true, false |

#### Objets pris en charge

[Bouton](button_overview.md#regular) - [Bouton plat](button_overview.md#regular)

---

## Cacher rectangle de focus

A l'exécution, un champ ou toute zone saisissable est délimité par un rectangle de sélection lorsqu'il a le focus (via la touche Tab ou un simple clic). Vous pouvez masquer ce rectangle en activant cette propriété. Masquer le rectangle de focus peut être utile dans le cas d'interfaces spécifiques.

#### Grammaire JSON

| Nom           | Type de données | Valeurs possibles |
| ------------- | --------------- | ----------------- |
| hideFocusRing | boolean         | true, false       |

#### Objets pris en charge

[Zones 4D Write Pro](writeProArea_overview.md) - [Liste hiérarchique](list_overview.md) - [Zone de saisie](input_overview.md) - [List Box](listbox_overview.md) - [Sous-formulaire](subform_overview.md)

---

## Cacher surlignage sélection

`List boxes de type sélection`

Cette propriété est utilisée pour désactiver la mise en évidence de la sélection dans les list box.

Lorsque cette option est activée, la surbrillance de la sélection n'est plus visible pour les sélections effectuées dans les list box. Les sélections elles-mêmes sont toujours valides et fonctionnent exactement de la même manière que précédemment; cependant, ils ne sont plus représentés graphiquement à l'écran et vous devrez [définir leur apparence par programmation](listbox_overview.md#customizing-appearance-of-selected-rows).

Par défaut, cette option n'est pas activée.

#### Grammaire JSON

| Nom                 | Type de données | Valeurs possibles |
| ------------------- | --------------- | ----------------- |
| hideSystemHighlight | boolean         | true, false       |

#### Objets pris en charge

[List Box](listbox_overview.md)

---

## Barre de défilement horizontale

Un outil d'interface permettant à l'utilisateur de déplacer la zone de visualisation vers la gauche ou la droite.

Valeurs disponibles :

| Liste de propriétés | Valeur JSON | Description                                                                                                                                                                       |
| ------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Oui                 | "visible"   | La barre de défilement est toujours visible, même lorsqu'elle n'est pas nécessaire (en d'autres termes, lorsque la taille du contenu de l'objet est inférieure à celle du cadre). |
| Non                 | "hidden"    | La barre de défilement n'est jamais visible                                                                                                                                       |
| Automatique         | "automatic" | La barre de défilement apparaît automatiquement chaque fois que nécessaire et l'utilisateur peut saisir du texte plus grand que la largeur de l'objet                             |

> Les objets image peuvent avoir des barres de défilement lorsque le format d'affichage de l'image est défini sur "Tronqué (non centré)"

#### Grammaire JSON

| Nom                 | Type de données | Valeurs possibles                |
| ------------------- | --------------- | -------------------------------- |
| scrollbarHorizontal | text            | "visible", "hidden", "automatic" |

#### Objets pris en charge

[Liste hiérarchique](list_overview.md#overview) - [Sous-formulaire](subform_overview.md#overview) - [List Box](listbox_overview.md#overview) - [Zone de saisie](input_overview.md) - [Zone 4D Write Pro](writeProArea_overview.md)

#### Voir également

[Barre de défilement verticale](#vertical-scroll-bar)

---

## Resolution

Définit la résolution d'écran pour le contenu de la zone 4D Write Pro. Par défaut, elle est définie sur 72 dpi (macOS), qui est la résolution standard des formulaires 4D sur toutes les plateformes. La définition de cette propriété sur 96 dpi définira un rendu Windows/Web sur les plateformes macOS et Windows. La définition de cette propriété sur **automatique** signifie que le rendu du document sera différent entre les plates-formes macOS et Windows.

#### Grammaire JSON

| Nom | Type de données | Valeurs possibles |
| --- | --------------- | ----------------- |
|     |                 |                   |
 dpi|number|0=automatic, 72, 96 |

#### Objets pris en charge

[Zone 4D Write Pro](writeProArea_overview.md)

---

## Afficher l'arrière-plan

Affiche/masque les images d'arrière-plan et la couleur d'arrière-plan.

#### Grammaire JSON

| Nom | Type de données | Valeurs possibles |
| --- | --------------- | ----------------- |
|     |                 |                   |
 showBackground|booléen|true (par défaut), false|

#### Objets pris en charge

[Zone 4D Write Pro](writeProArea_overview.md)

---

## Afficher les pieds de page

Affiche/masque les pieds de page lorsque le [mode d'affichage de la page](#view-mode) est défini sur "Page".

#### Grammaire JSON

| Nom | Type de données | Valeurs possibles |
| --- | --------------- | ----------------- |
|     |                 |                   |
 showFooters|booléen|true (par défaut), false|

#### Objets pris en charge

[Zone 4D Write Pro](writeProArea_overview.md)

---

## Afficher la barre de formule

Lorsqu'elle est activée, la barre de formule est visible sous l'interface de la barre d'outils dans la zone 4D View Pro. Si elle n'est pas sélectionnée, la barre de formule est masquée.

> Cette propriété est disponible uniquement pour l'interface de la [barre d'outils](#user-interface).

#### Grammaire JSON

| Nom | Type de données | Valeurs possibles |
| --- | --------------- | ----------------- |
|     |                 |                   |
 withFormulaBar|booléen|true (par défaut), false|

#### Objets pris en charge

[Zone 4D View Pro](viewProArea_overview.md)

---

## Montrer les entêtes

Affiche/masque les en-têtes de la page lorsque le [mode d'affichage de la page](#view-mode) est défini sur "Page".

#### Grammaire JSON

| Nom | Type de données | Valeurs possibles |
| --- | --------------- | ----------------- |
|     |                 |                   |
 showHeaders|booléen|true (par défaut), false|

#### Objets pris en charge

[Zone 4D Write Pro](writeProArea_overview.md)

---

## Montrer les caractères cachés

Affiche/masque les caractères visibles

#### Grammaire JSON

| Nom | Type de données | Valeurs possibles |
| --- | --------------- | ----------------- |
|     |                 |                   |
 showHiddenChars|booléen|true (par défaut), false|

#### Objets pris en charge

[Zone 4D Write Pro](writeProArea_overview.md)

---

## Montrer la règle horizontale

Affiche/masque la règle horizontale lorsque la vue du document est en mode [Page](#view-mode).

#### Grammaire JSON

| Nom | Type de données | Valeurs possibles |
| --- | --------------- | ----------------- |
|     |                 |                   |
 showHorizontalRuler|booléen|true (par défaut), false|

#### Objets pris en charge

[Zone 4D Write Pro](writeProArea_overview.md)

---

## Montrer HTML WYSYWIG

Active/désactive la vue HTML WYSIWYG, dans laquelle tous les attributs avancés de 4D Write Pro qui ne sont pas compatibles avec tous les navigateurs sont supprimés.

#### Grammaire JSON

| Nom | Type de données | Valeurs possibles |
| --- | --------------- | ----------------- |
|     |                 |                   |
 showHTMLWysiwyg|booléen|true, false (par défaut)|

#### Objets pris en charge

[Zone 4D Write Pro](writeProArea_overview.md)

---

## Afficher le cadre de la page

Affiche/masque le cadre de la page lorsque le [mode d'affichage de la page](#view-mode) est défini sur "Page".

#### Grammaire JSON

| Nom | Type de données | Valeurs possibles |
| --- | --------------- | ----------------- |
|     |                 |                   |
 showPageFrames|booléen|true, false|

#### Objets pris en charge

[Zone 4D Write Pro](writeProArea_overview.md)

---

## Afficher les références

Affiche toutes les expressions 4D insérées dans le document 4D Write Pro comme *références*. Lorsque cette option est désactivée, les expressions 4D sont affichées sous forme de *valeurs*. Par défaut, lorsque vous insérez un champ ou une expression 4D, 4D Write Pro calcule et affiche sa valeur actuelle. Sélectionnez cette propriété si vous souhaitez savoir quel champ ou quelle expression est affiché(e). Les références de champ ou d'expression apparaissent alors dans votre document, sur fond gris.

Par exemple, vous avez inséré la date courante avec un format, la date s'affiche :

![](../assets/en/FormObjects/writePro1.png)

Lorsque la propriété Afficher les références est activée, la référence s'affiche :

![](../assets/en/FormObjects/writeProExpr.png)

> Les expressions 4D peuvent être insérées à l'aide de la commande `ST INSERT EXPRESSION`.

#### Grammaire JSON

| Nom | Type de données | Valeurs possibles |
| --- | --------------- | ----------------- |
|     |                 |                   |
 showReferences|booléen|true, false (par défaut)|

#### Objets pris en charge

[Zone 4D Write Pro](writeProArea_overview.md)

---

## Afficher règle verticale

Affiche/masque la règle verticale lorsque la vue du document est en mode [Page](#view-mode).

#### Grammaire JSON

| Nom | Type de données | Valeurs possibles |
| --- | --------------- | ----------------- |
|     |                 |                   |
 showVerticalRuler|booléen|true (par défaut), false|

#### Objets pris en charge

[Zone 4D Write Pro](writeProArea_overview.md)

---

## Onglets

Vous pouvez définir la direction des onglets dans vos formulaires. Cette propriété est disponible sur toutes les plateformes mais ne peut être affichée que sous macOS. Vous pouvez choisir de placer les onglets en haut (standard) ou en bas.

Lorsque des onglets sont affichés avec une direction personnalisée sous Windows, ils retournent automatiquement à la direction standard (en haut).

#### Grammaire JSON

| Nom | Type de données | Valeurs possibles |
| --- | --------------- | ----------------- |
|     |                 |                   |
 labelsPlacement|booléen|"top", "bottom" |

#### Objets pris en charge

[Onglets](tabControl.md)

---

## Interface utilisateur

Vous pouvez ajouter une interface aux zones 4D View Pro pour permettre aux utilisateurs finaux d'effectuer des modifications de base et des manipulations de données. 4D View Pro propose deux interfaces en option, le **ruban** et **la barre d'outils**.

#### Grammaire JSON

| Nom | Type de données | Valeurs possibles |
| --- | --------------- | ----------------- |
|     |                 |                   |
 userInterface|texte|"none" (par défaut), "ribbon", "toolbar" |

#### Objets pris en charge

[Zone 4D View Pro](viewProArea_overview.md)

#### Voir également

[guide de référence 4D View Pro](../ViewPro/getting-started.md)

---

## Barre de défilement verticale

Un outil d'interface permettant à l'utilisateur de déplacer la zone de visualisation de haut en bas.

Valeurs disponibles :

| Liste de propriétés | Valeur JSON | Description                                                                                                                                                                       |
| ------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Oui                 | "visible"   | La barre de défilement est toujours visible, même lorsqu'elle n'est pas nécessaire (en d'autres termes, lorsque la taille du contenu de l'objet est inférieure à celle du cadre). |
| Non                 | "hidden"    | La barre de défilement n'est jamais visible                                                                                                                                       |
| Automatique         | "automatic" | La barre de défilement apparaît automatiquement chaque fois que nécessaire (en d'autres termes, lorsque la taille du contenu de l'objet est supérieure à celle du cadre)          |

> Les objets image peuvent avoir des barres de défilement lorsque le format d'affichage de l'image est défini sur "Tronqué (non centré)"

> Si un objet de saisie de texte n'a pas de barre de défilement, l'utilisateur peut faire défiler les informations à l'aide des flèches du clavier.

#### Grammaire JSON

| Nom               | Type de données | Valeurs possibles                |
| ----------------- | --------------- | -------------------------------- |
| scrollbarVertical | text            | "visible", "hidden", "automatic" |

#### Objets pris en charge

[Liste hiérarchique](list_overview.md#overview) - [Sous-formulaire](subform_overview.md#overview) - [List Box](listbox_overview.md#overview) - [Zone de saisie](input_overview.md) - [Zone 4D Write Pro](writeProArea_overview.md)

#### Voir également

[Barre de défilement horizontale](#horizontal-scroll-bar)

---

## Mode d'affichage

Définit le mode d'affichage du document 4D Write Pro dans la zone de formulaire. Trois valeurs sont disponibles :

- **Page** : le mode d'affichage le plus complet, qui comprend les contours de page, l'orientation, les marges, les sauts de page, les en-têtes et pieds de page, etc.
- **Brouillon** : mode brouillon avec propriétés de base du document
- **Embedded** : mode d'affichage adapté aux zones intégrées; il n'affiche pas les marges, les pieds de page, les en-têtes, les cadres, etc. Ce mode peut également être utilisé pour produire un affichage de type Web (si vous sélectionnez également la [résolution de 96 dpi](#resolution) et les propriétés [Afficher HTML WYSIWYG](#show-html-wysiwyg)).

> La propriété Mode d'affichage est utilisée uniquement pour le rendu à l'écran. Concernant les paramètres d'impression, des règles de rendu spécifiques sont automatiquement utilisées.

#### Grammaire JSON

| Nom | Type de données | Valeurs possibles |
| --- | --------------- | ----------------- |
|     |                 |                   |
 layoutMode|texte|"page", "draft", "embedded"|

#### Objets pris en charge

[Zone 4D Write Pro](writeProArea_overview.md)

---

## Zoom

Définit le pourcentage de zoom pour l'affichage du contenu de la zone 4D Write Pro.

#### Grammaire JSON

| Nom | Type de données | Valeurs possibles |
| --- | --------------- | ----------------- |
|     |                 |                   |
 zoom|numérique|minimum = 0 |

#### Objets pris en charge

[Zone 4D Write Pro](writeProArea_overview.md)
