---
id: propertiesAppearance
title: Apparence
---

---
## Default Button

The default button property designates the button that gets the initial focus at runtime when no button of the form has the [Focusable](properties_Entry.md#focusable) property.

There can only be one default button per form page.

In addition, on macOS, the default button property modifies the button's appearance in order to indicate a "recommended choice" to the user. The default button can be different from the focused button. Default buttons have a specific blue appearance on macOS:

![](assets/en/FormObjects/property_defaultButtonmacOS.en.png)

> Button must have a standard height to get the default button appearance.

On Windows, the concept of "recommended choice" is not supported: only the focused button has a different appearance at runtime. However, in the 4D form editor, the default button is represented with a blue outline:

![](assets/en/FormObjects/property_defaultButtonWindows.en.png)


#### Grammaire JSON

| Nom | Type de données | Valeurs possibles |
| --- | --------------- | ----------------- |
|     |                 |                   |
 defaultButton|boolean|true, false |

#### Objets pris en charge

[Regular Button](button_overview.md#regular) - [Flat Button](button_overview.md#regular)




---
## Cacher rectangle de focus

During execution, a field or any enterable area is outlined by a selection rectangle when it has the focus (via the Tab key or a single click). You can hide this rectangle by enabling this property. Hiding the focus rectangle may be useful in the case of specific interfaces.

#### Grammaire JSON

| Nom           | Type de données | Valeurs possibles |
| ------------- | --------------- | ----------------- |
| hideFocusRing | boolean         | true, false       |

#### Objets pris en charge

[4D Write Pro area](writeProArea_overview.md) - [Hierarchical List](list_overview.md) - [Input](input_overview.md) - [List Box](listbox_overview.md) - [Subform](subform_overview.md)



---
## Cacher surlignage sélection
`Selection type list boxes`

This property is used to disable the selection highlight in list boxes.

When this option is enabled, the selection highlight is no longer visible for selections made in list boxes. Selections themselves are still valid and work in exactly the same way as previously; however, they are no longer represented graphically onscreen, and you will need to [define their appearance programmatically](listbox_overview.md#customizing-appearance-of-selected-rows).

By default, this option is not enabled.


#### Grammaire JSON

| Nom                 | Type de données | Valeurs possibles |
| ------------------- | --------------- | ----------------- |
| hideSystemHighlight | boolean         | true, false       |

#### Objets pris en charge

[List Box](listbox_overview.md)




---
## Barre de défilement horizontale

An interface tool allowing the user to move the viewing area to the left or right.

Available values:

| Liste de propriétés | Valeur JSON | Description                                                                                                                                                                       |
| ------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Oui                 | "visible"   | La barre de défilement est toujours visible, même lorsqu'elle n'est pas nécessaire (en d'autres termes, lorsque la taille du contenu de l'objet est inférieure à celle du cadre). |
| Non                 | "hidden"    | The scrollbar is never visible                                                                                                                                                    |
| Automatique         | "automatic" | The scrollbar appears automatically whenever necessary and the user can enter text larger than the object width                                                                   |


> Picture objects can have scrollbars when the display format of the picture is set to “Truncated (non-centered).”


#### Grammaire JSON

| Nom                 | Type de données | Valeurs possibles                |
| ------------------- | --------------- | -------------------------------- |
| scrollbarHorizontal | Texte           | "visible", "hidden", "automatic" |

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

Displays all 4D expressions inserted in the 4D Write Pro document as *references*. When this option is disabled, 4D expressions are displayed as *values*. By default when you insert a 4D field or expression, 4D Write Pro computes and displays its current value. Select this property if you wish to know which field or expression is displayed. The field or expression references then appear in your document, with a gray background.

For example, you have inserted the current date along with a format, the date is displayed:

![](assets/en/FormObjects/writePro1.png)

With the Show references property on, the reference is displayed:

![](assets/en/FormObjects/writeProExpr.png)

> 4D expressions can be inserted using the `ST INSERT EXPRESSION` command.


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

[guide de référence 4D View Pro](https://doc.4d.com/4Dv18/4D/18/4D-View-Pro-Reference.100-4522233.en.html)

---
## Barre de défilement verticale

Un outil d'interface permettant à l'utilisateur de déplacer la zone de visualisation de haut en bas.

Available values:

| Liste de propriétés | Valeur JSON | Description                                                                                                                                                                       |
| ------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Oui                 | "visible"   | La barre de défilement est toujours visible, même lorsqu'elle n'est pas nécessaire (en d'autres termes, lorsque la taille du contenu de l'objet est inférieure à celle du cadre). |
| Non                 | "hidden"    | The scrollbar is never visible                                                                                                                                                    |
| Automatique         | "automatic" | La barre de défilement apparaît automatiquement chaque fois que nécessaire (en d'autres termes, lorsque la taille du contenu de l'objet est supérieure à celle du cadre)          |

> Picture objects can have scrollbars when the display format of the picture is set to “Truncated (non-centered).”


> Si un objet de saisie de texte n'a pas de barre de défilement, l'utilisateur peut faire défiler les informations à l'aide des flèches du clavier.


#### Grammaire JSON

| Nom               | Type de données | Valeurs possibles                |
| ----------------- | --------------- | -------------------------------- |
| scrollbarVertical | Texte           | "visible", "hidden", "automatic" |

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


