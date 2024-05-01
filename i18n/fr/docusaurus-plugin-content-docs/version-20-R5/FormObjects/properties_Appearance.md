---
id: propertiesAppearance
title: Apparence
---

## Bouton par défaut

The default button property designates the button that gets the initial focus at runtime when no button of the form has the [Focusable](properties_Entry.md#focusable) property.

Il ne peut y avoir qu'un seul bouton par défaut par page de formulaire.

In addition, on macOS, the default button property modifies the button's appearance in order to indicate a "recommended choice" to the user and is automatically bound to the **Enter** key, even if it does not have the focus. Le bouton par défaut peut être différent du bouton sélectionné. Les boutons par défaut ont une apparence bleue spécifique sur macOS :

![](../assets/en/FormObjects/property_defaultButtonmacOS.en.png)

> Le bouton doit avoir une hauteur standard pour obtenir l'apparence du bouton par défaut.

On Windows, the concept of "recommended choice" is not supported: only the focused button has a different appearance at runtime and the **Enter** key is bound to the focused button. Cependant, dans l'éditeur de formulaires 4D, le bouton par défaut est représenté par un contour bleu :

![](../assets/en/FormObjects/property_defaultButtonWindows.en.png)

#### Grammaire JSON

| Nom           | Type de données | Valeurs possibles |
| ------------- | --------------- | ----------------- |
| defaultButton | boolean         | true, false       |

#### Objets pris en charge

[Regular Button](button_overview.md#regular) - [Flat Button](button_overview.md#regular)

---

## Cacher rectangle de focus

A l'exécution, un champ ou toute zone saisissable est délimité par un rectangle de sélection lorsqu'il a le focus (via la touche Tab ou un simple clic). Vous pouvez masquer ce rectangle en activant cette propriété. Masquer le rectangle de focus peut être utile dans le cas d'interfaces spécifiques.

#### Grammaire JSON

| Nom           | Type de données | Valeurs possibles |
| ------------- | --------------- | ----------------- |
| hideFocusRing | boolean         | true, false       |

#### Objets pris en charge

[4D Write Pro area](writeProArea_overview.md) - [Hierarchical List](list_overview.md) - [Input](input_overview.md) - [List Box](listbox_overview.md) - [Subform](subform_overview.md)

---

## Cacher surlignage sélection

`List boxes de type sélection`

Cette propriété est utilisée pour désactiver la mise en évidence de la sélection dans les list box.

Lorsque cette option est activée, la surbrillance de la sélection n'est plus visible pour les sélections effectuées dans les list box. Selections themselves are still valid and work in exactly the same way as previously; however, they are no longer represented graphically onscreen, and you will need to [define their appearance programmatically](listbox_overview.md#customizing-appearance-of-selected-rows).

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

| Liste de propriétés | Valeur JSON | Description                                                                                                                                                                                                          |
| ------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Oui                 | "visible"   | La barre de défilement est toujours visible, même lorsqu'elle n'est pas nécessaire (en d'autres termes, lorsque la taille du contenu de l'objet est inférieure à celle du cadre). |
| Non                 | "hidden"    | La barre de défilement n'est jamais visible                                                                                                                                                                          |
| Automatique         | "automatic" | La barre de défilement apparaît automatiquement chaque fois que nécessaire et l'utilisateur peut saisir du texte plus grand que la largeur de l'objet                                                                |

> Les objets image peuvent avoir des barres de défilement lorsque le format d'affichage de l'image est défini sur "Tronqué (non centré)"

#### Grammaire JSON

| Nom                 | Type de données | Valeurs possibles                |
| ------------------- | --------------- | -------------------------------- |
| scrollbarHorizontal | text            | "visible", "hidden", "automatic" |

#### Objets pris en charge

[Hierarchical List](list_overview.md#overview) - [Subform](subform_overview.md#overview) - [List Box](listbox_overview.md#overview) - [Input](input_overview.md) - [4D Write Pro area](writeProArea_overview.md)

#### Voir également

[Vertical scroll bar](#vertical-scroll-bar)

---

## Resolution

Définit la résolution d'écran pour le contenu de la zone 4D Write Pro. Par défaut, elle est définie sur 72 dpi (macOS), qui est la résolution standard des formulaires 4D sur toutes les plateformes. La définition de cette propriété sur 96 dpi définira un rendu Windows/Web sur les plateformes macOS et Windows. Setting this property to **automatic** means that document rendering will differ between macOS and Windows platforms.

#### Grammaire JSON

| Nom | Type de données | Valeurs possibles   |
| --- | --------------- | ------------------- |
| dpi | number          | 0=automatic, 72, 96 |

#### Objets pris en charge

[4D Write Pro area](writeProArea_overview.md)

---

## Afficher l'arrière-plan

Affiche/masque les images d'arrière-plan et la couleur d'arrière-plan.

#### Grammaire JSON

| Nom            | Type de données | Valeurs possibles                        |
| -------------- | --------------- | ---------------------------------------- |
| showBackground | boolean         | true (default), false |

#### Objets pris en charge

[4D Write Pro area](writeProArea_overview.md)

---

## Afficher les pieds de page

Displays/hides the footers when [Page view mode](#view-mode) is set to "Page".

#### Grammaire JSON

| Nom         | Type de données | Valeurs possibles                        |
| ----------- | --------------- | ---------------------------------------- |
| showFooters | boolean         | true (default), false |

#### Objets pris en charge

[4D Write Pro area](writeProArea_overview.md)

---

## Afficher la barre de formule

Lorsqu'elle est activée, la barre de formule est visible sous l'interface de la barre d'outils dans la zone 4D View Pro. Si elle n'est pas sélectionnée, la barre de formule est masquée.

> This property is available only for the [Toolbar](#user-interface) interface.

#### Grammaire JSON

| Nom            | Type de données | Valeurs possibles                        |
| -------------- | --------------- | ---------------------------------------- |
| withFormulaBar | boolean         | true (default), false |

#### Objets pris en charge

[4D View Pro area](viewProArea_overview.md)

---

## Montrer les entêtes

Displays/hides the headers when [Page view mode](#view-mode) is set to "Page".

#### Grammaire JSON

| Nom         | Type de données | Valeurs possibles                        |
| ----------- | --------------- | ---------------------------------------- |
| showHeaders | boolean         | true (default), false |

#### Objets pris en charge

[4D Write Pro area](writeProArea_overview.md)

---

## Montrer les caractères cachés

Affiche/masque les caractères visibles

#### Grammaire JSON

| Nom             | Type de données | Valeurs possibles                        |
| --------------- | --------------- | ---------------------------------------- |
| showHiddenChars | boolean         | true (default), false |

#### Objets pris en charge

[4D Write Pro area](writeProArea_overview.md)

---

## Montrer la règle horizontale

Displays/hides the horizontal ruler when the document view is in [Page mode](#view-mode).

#### Grammaire JSON

| Nom                 | Type de données | Valeurs possibles                        |
| ------------------- | --------------- | ---------------------------------------- |
| showHorizontalRuler | boolean         | true (default), false |

#### Objets pris en charge

[4D Write Pro area](writeProArea_overview.md)

---

## Montrer HTML WYSYWIG

Active/désactive la vue HTML WYSIWYG, dans laquelle tous les attributs avancés de 4D Write Pro qui ne sont pas compatibles avec tous les navigateurs sont supprimés.

#### Grammaire JSON

| Nom             | Type de données | Valeurs possibles                           |
| --------------- | --------------- | ------------------------------------------- |
| showHTMLWysiwyg | boolean         | true, false (par défaut) |

#### Objets pris en charge

[4D Write Pro area](writeProArea_overview.md)

---

## Afficher le cadre de la page

Displays/hides the page frame when [Page view mode](#view-mode) is set to "Page".

#### Grammaire JSON

| Nom            | Type de données | Valeurs possibles |
| -------------- | --------------- | ----------------- |
| showPageFrames | boolean         | true, false       |

#### Objets pris en charge

[4D Write Pro area](writeProArea_overview.md)

---

## Afficher les références

Displays all 4D expressions inserted in the 4D Write Pro document as _references_. When this option is disabled, 4D expressions are displayed as _values_. Par défaut, lorsque vous insérez un champ ou une expression 4D, 4D Write Pro calcule et affiche sa valeur actuelle. Sélectionnez cette propriété si vous souhaitez savoir quel champ ou quelle expression est affiché(e). Les références de champ ou d'expression apparaissent alors dans votre document, sur fond gris.

Par exemple, vous avez inséré la date courante avec un format, la date s'affiche :

![](../assets/en/FormObjects/writePro1.png)

Lorsque la propriété Afficher les références est activée, la référence s'affiche :

![](../assets/en/FormObjects/writeProExpr.png)

> 4D expressions can be inserted using the `ST INSERT EXPRESSION` command.

#### Grammaire JSON

| Nom            | Type de données | Valeurs possibles                           |
| -------------- | --------------- | ------------------------------------------- |
| showReferences | boolean         | true, false (par défaut) |

#### Objets pris en charge

[4D Write Pro area](writeProArea_overview.md)

---

## Afficher règle verticale

Displays/hides the vertical ruler when the document view is in [Page mode](#view-mode).

#### Grammaire JSON

| Nom               | Type de données | Valeurs possibles                        |
| ----------------- | --------------- | ---------------------------------------- |
| showVerticalRuler | boolean         | true (default), false |

#### Objets pris en charge

[4D Write Pro area](writeProArea_overview.md)

---

## Onglets

Vous pouvez définir la direction des onglets dans vos formulaires. Cette propriété est disponible sur toutes les plateformes mais ne peut être affichée que sous macOS. Vous pouvez choisir de placer les onglets en haut (standard) ou en bas.

Lorsque des onglets sont affichés avec une direction personnalisée sous Windows, ils retournent automatiquement à la direction standard (en haut).

#### Grammaire JSON

| Nom             | Type de données | Valeurs possibles |
| --------------- | --------------- | ----------------- |
| labelsPlacement | boolean         | "top", "bottom"   |

#### Objets pris en charge

[Tab Control](tabControl.md)

---

## Interface utilisateur

Vous pouvez ajouter une interface aux zones 4D View Pro pour permettre aux utilisateurs finaux d'effectuer des modifications de base et des manipulations de données. 4D View Pro offers two optional interfaces to choose from, **Ribbon** and **Toolbar**.

#### Grammaire JSON

| Nom           | Type de données | Valeurs possibles                                           |
| ------------- | --------------- | ----------------------------------------------------------- |
| userInterface | text            | "none" (par défaut), "ribbon", "toolbar" |

#### Objets pris en charge

[4D View Pro area](viewProArea_overview.md)

#### Voir également

[4D View Pro reference guide](../ViewPro/getting-started.md)

---

## Barre de défilement verticale

Un outil d'interface permettant à l'utilisateur de déplacer la zone de visualisation de haut en bas.

Valeurs disponibles :

| Liste de propriétés | Valeur JSON | Description                                                                                                                                                                                                          |
| ------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Oui                 | "visible"   | La barre de défilement est toujours visible, même lorsqu'elle n'est pas nécessaire (en d'autres termes, lorsque la taille du contenu de l'objet est inférieure à celle du cadre). |
| Non                 | "hidden"    | La barre de défilement n'est jamais visible                                                                                                                                                                          |
| Automatique         | "automatic" | La barre de défilement apparaît automatiquement chaque fois que nécessaire (en d'autres termes, lorsque la taille du contenu de l'objet est supérieure à celle du cadre)                          |

> Les objets image peuvent avoir des barres de défilement lorsque le format d'affichage de l'image est défini sur "Tronqué (non centré)"

> Si un objet de saisie de texte n'a pas de barre de défilement, l'utilisateur peut faire défiler les informations à l'aide des flèches du clavier.

#### Grammaire JSON

| Nom               | Type de données | Valeurs possibles                |
| ----------------- | --------------- | -------------------------------- |
| scrollbarVertical | text            | "visible", "hidden", "automatic" |

#### Objets pris en charge

[Hierarchical List](list_overview.md#overview) - [Subform](subform_overview.md#overview) - [List Box](listbox_overview.md#overview) - [Input](input_overview.md) - [4D Write Pro area](writeProArea_overview.md)

#### Voir également

[Horizontal scroll bar](#horizontal-scroll-bar)

---

## Mode d'affichage

Définit le mode d'affichage du document 4D Write Pro dans la zone de formulaire. Trois valeurs sont disponibles :

- **Page**: the most complete view mode, which includes page outlines, orientation, margins, page breaks, headers and footers, etc.
- **Draft**: draft mode with basic document properties
- **Embedded**: view mode suitable for embedded areas; it does not display margins, footers, headers, page frames, etc. This mode can also be used to produce a web-like view output (if you also select the [96 dpi resolution](#resolution) and the [Show HTML WYSIWYG](#show-html-wysiwyg) properties).

> La propriété Mode d'affichage est utilisée uniquement pour le rendu à l'écran. Concernant les paramètres d'impression, des règles de rendu spécifiques sont automatiquement utilisées.

#### Grammaire JSON

| Nom        | Type de données | Valeurs possibles           |
| ---------- | --------------- | --------------------------- |
| layoutMode | text            | "page", "draft", "embedded" |

#### Objets pris en charge

[4D Write Pro area](writeProArea_overview.md)

---

## Zoom

Définit le pourcentage de zoom pour l'affichage du contenu de la zone 4D Write Pro.

#### Grammaire JSON

| Nom  | Type de données | Valeurs possibles |
| ---- | --------------- | ----------------- |
| zoom | number          | minimum = 0       |

#### Objets pris en charge

[4D Write Pro area](writeProArea_overview.md)
