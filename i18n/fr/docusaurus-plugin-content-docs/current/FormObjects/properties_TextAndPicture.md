---
id: propertiesTextAndPicture
title: Texte et Image
---

## Chemin d'accès arrière-plan

Définit le chemin d'accès de l'image qui sera dessinée en arrière-plan de l'objet. Si l'objet utilise une [icône](#picture-pathname) avec [différents états](#number-of-states), l'image de fond prendra automatiquement en charge le même nombre d'états.

Le chemin d'accès à saisir est identique à celui de [la propriété Chemin d'accès pour les images statiques](properties_Picture.md#pathname).

#### Grammaire JSON

| Nom                     | Type de données | Valeurs possibles                                                                                                                        |
| ----------------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| customBackgroundPicture | string          | Chemin relatif en syntaxe POSIX. Doit être utilisé avec l'option "Personnalisé" de la propriété "Style". |

#### Objets pris en charge

[Bouton personnalisé](button_overview.md#custom) - [Case à cocher personnalisée](checkbox_overview.md#custom) - [Bouton radio personnalisé](radio_overview.md#custom)

#### Commandes

[OBJECT Get format](../commands-legacy/object-get-format.md) [OBJECT Get minimum-value](../commands-legacy/object-get-minimum-value.md) - [OBJECT SET FORMAT](../commands-legacy/object-set-format.md)

---

## Styles de bouton

Aspect général du bouton. Le style du bouton joue également un rôle dans la disponibilité de certaines options.

#### Grammaire JSON

|  Nom  | Type de données | Valeurs possibles                                                                                                                                                  |
| :---: | :-------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| style |       text      | "regular", "flat", "toolbar", "bevel", "roundedBevel", "gradientBevel", "texturedBevel", "office", "help", "circular", "disclosure", "roundedDisclosure", "custom" |

#### Objets pris en charge

[Bouton](button_overview.md) - [Bouton radio](radio_overview.md) - [Case à cocher](checkbox_overview.md) - [Bouton radio](radio_overview.md)

#### Commandes

[OBJECT Get format](../commands-legacy/object-get-format.md) [OBJECT Get minimum-value](../commands-legacy/object-get-minimum-value.md) - [OBJECT SET FORMAT](../commands-legacy/object-set-format.md)

---

## Marge horizontale

Cette propriété permet de définir la taille (en pixels) des marges horizontales du bouton. Cette marge délimite la zone que l'icône et le titre du bouton ne doivent pas dépasser.

Ce paramètre est utile, par exemple, lorsque l'image de fond contient des bordures :

| Avec / Sans          | Exemple                                                      |
| -------------------- | ------------------------------------------------------------ |
| Sans marge           | ![](../assets/en/FormObjects/property_horizontalMargin1.png) |
| Avec marge 13 pixels | ![](../assets/en/FormObjects/property_horizontalMargin2.png) |

> Cette propriété fonctionne avec la propriété [Marge verticale](#vertical-margin).

#### Grammaire JSON

| Nom           | Type de données | Valeurs possibles                                                                   |
| ------------- | --------------- | ----------------------------------------------------------------------------------- |
| customBorderX | number          | A utiliser avec le style "personnalisé". Minimum: 0 |

#### Objets pris en charge

[Bouton personnalisé](button_overview.md#custom) - [Case à cocher personnalisée](checkbox_overview.md#custom) - [Bouton radio personnalisé](radio_overview.md#custom)

#### Commandes

[OBJECT Get format](../commands-legacy/object-get-format.md) [OBJECT Get minimum-value](../commands-legacy/object-get-minimum-value.md) - [OBJECT SET FORMAT](../commands-legacy/object-set-format.md)

---

## Emplacement de l'icône

Désigne l'emplacement d'une icône par rapport à l'objet formulaire.

#### Grammaire JSON

| Nom           | Type de données | Valeurs possibles       |
| ------------- | --------------- | ----------------------- |
| iconPlacement | string          | "none", "left", "right" |

#### Objets pris en charge

[List Box Header](listbox_overview.md#list-box-headers)

#### Commandes

[OBJECT Get format](../commands-legacy/object-get-format.md) [OBJECT Get minimum-value](../commands-legacy/object-get-minimum-value.md) - [OBJECT SET FORMAT](../commands-legacy/object-set-format.md)

---

## Décalage icône

Définit une valeur de décalage personnalisée en pixels, qui sera utilisée lorsque le bouton est cliqué

Le titre du bouton sera décalé vers la droite et vers le bas pour le nombre de pixels saisis. Cela permet d'appliquer un effet 3D personnalisé lorsque le bouton est cliqué.

#### Grammaire JSON

| Nom          | Type de données | Valeurs possibles           |
| ------------ | --------------- | --------------------------- |
| customOffset | number          | minimum : 0 |

#### Objets pris en charge

[Bouton personnalisé](button_overview.md#custom) - [Case à cocher personnalisée](checkbox_overview.md#custom) - [Bouton radio personnalisé](radio_overview.md#custom)

#### Commandes

[OBJECT Get format](../commands-legacy/object-get-format.md) [OBJECT Get minimum-value](../commands-legacy/object-get-minimum-value.md) - [OBJECT SET FORMAT](../commands-legacy/object-set-format.md)

---

## Nombre d'états

This property sets the exact number of states present in the picture used as the icon for a [button with icon](button_overview.md), a [check box](checkbox_overview.md) or a custom [radio button](radio_overview.md).

L'image peut contenir de 2 à 6 états.

- 2 états : faux, vrai
- 3 états : faux, vrai, rollover,
- 4 états : faux, vrai, rollover, désactivé,
- 5 états (case à cocher et bouton radio seulement) : faux, vrai, faux rollover, vrai rollover, désactivé
- 6 états (case à cocher et bouton radio seulement) : faux, vrai, faux rollover, vrai rollover, faux désactivé, vrai désactivé.

:::note

- "faux" signifie que le bouton n'a pas été cliqué/n'a pas été sélectionné ou que la case à cocher n'a pas été cochée (valeur de la variable = 0).
- "vrai" signifie que le bouton a été cliqué/sélectionné ou que la case a été cochée (valeur de la variable = 1).

:::

Chaque état est représenté par une image différente. Dans l'image source, les états doivent être empilés verticalement :

![](../assets/en/FormObjects/six-states.png)

#### Grammaire JSON

| Nom        | Type de données | Valeurs possibles                                                                  |
| ---------- | --------------- | ---------------------------------------------------------------------------------- |
| iconFrames | number          | Nombre d'états dans l'image de l'icône. Minimum: 1 |

#### Objets pris en charge

[Bouton](button_overview.md) (tous les styles sauf[Aide](button_overview.md#help)) - [Case à cocher](checkbox_overview.md) - [Bouton radio](radio_overview.md)

#### Commandes

[OBJECT Get format](../commands-legacy/object-get-format.md) [OBJECT Get minimum-value](../commands-legacy/object-get-minimum-value.md) - [OBJECT SET FORMAT](../commands-legacy/object-set-format.md)

---

## Chemin d'accès de l'image

Définit le chemin d'accès de l'image qui sera utilisée comme icône de l'objet.

Le chemin d'accès à saisir est identique à celui de [la propriété Chemin d'accès pour les images statiques](properties_Picture.md#pathname).

> Lorsqu'elle est utilisée comme icône pour les objets actifs, l'image doit être conçue pour prendre en charge [un nombre d'états](#number-of-states) variable.

#### Grammaire JSON

| Nom  | Type de données | Valeurs possibles                                              |
| ---- | --------------- | -------------------------------------------------------------- |
| icon | picture         | Chemin relatif ou filesystem en syntaxe POSIX. |

#### Objets pris en charge

[Bouton](button_overview.md) (tous les styles sauf[Aide](button_overview.md#help)) - [Case à cocher](checkbox_overview.md) - [En-tête List box](listbox_overview.md#list-box-headers)[Bouton radio](listbox_overview.md#list-box-headers)

#### Commandes

[OBJECT Get format](../commands-legacy/object-get-format.md) [OBJECT Get minimum-value](../commands-legacy/object-get-minimum-value.md) - [OBJECT SET FORMAT](../commands-legacy/object-set-format.md)

---

## Position Titre/Image

Cette propriété permet de modifier l’emplacement relatif du titre par rapport à l’icône associée. Cette propriété n’a pas d’effet lorsque le bouton contient uniquement un titre (pas d’image associée) ou une image (pas de titre). Par défaut, lorsqu’un bouton 3D contient un titre et une image, le texte est placé en-dessous de l’image.

Voici le résultat des différentes options de cette propriété :

| Option       | Description                                                                                                                                                                              | Exemple                                                           |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| **Left**     | Le texte est placé à gauche de l’icône. Le contenu du bouton est aligné à droite.                                                                        | ![](../assets/en/FormObjects/property_titlePosition_left.en.png)  |
| **Top**      | Le texte est placé au-dessus de l’icône. Le contenu du bouton est centré.                                                                                | ![](../assets/en/FormObjects/property_titlePosition_top.png)      |
| **Right**    | Le texte est placé à droite de l’icône. Le contenu du bouton est aligné à gauche.                                                                        | ![](../assets/en/FormObjects/property_titlePosition_right.png)    |
| **Bottom**   | Le texte est placé en-dessous de l’icône. Le contenu du bouton est centré.                                                                               | ![](../assets/en/FormObjects/property_titlePosition_bottom.png)   |
| **Centered** | Le texte de l’icône est centré verticalement et horizontalement dans le bouton. Ce paramétrage convient par exemple pour du texte inclus dans une icône. | ![](../assets/en/FormObjects/property_titlePosition_centered.png) |

#### Grammaire JSON

| Nom           | Type de données | Valeurs possibles                          |
| ------------- | --------------- | ------------------------------------------ |
| textPlacement | string          | "left", "top", "right", "bottom", "center" |

#### Objets pris en charge

[Bouton](button_overview.md) (tous les styles sauf[Aide](button_overview.md#help)) - [Case à cocher](checkbox_overview.md) - [Bouton radio](radio_overview.md)

#### Commandes

[OBJECT Get format](../commands-legacy/object-get-format.md) [OBJECT Get minimum-value](../commands-legacy/object-get-minimum-value.md) - [OBJECT SET FORMAT](../commands-legacy/object-set-format.md)

---

## Image collée au titre

This property allows you to define whether the title and the picture of the button should be visually adjoined or separated, according to the [Title/Picture position](#titlepicture-position) and [Horizontal Alignment](properties_Text.md#horizontal-alignment) properties.

Cette propriété n’a pas d’effet lorsque le bouton contient uniquement un titre (pas d’image associée) ou une image (pas de titre).

Par défaut, lorsqu'un bouton contient un titre et une image, les éléments sont joints. The following graphic shows the effect of the `imageHugsTitle` property (true when property is enabled) with different button alignments:

![](../assets/en/FormObjects/hugs.png)

#### Grammaire JSON

| Nom            | Type de données | Valeurs possibles                           |
| -------------- | --------------- | ------------------------------------------- |
| imageHugsTitle | boolean         | true (par défaut), false |

#### Objets pris en charge

[Button](button_overview.md) (all styles except Help) - [Check Box](checkbox_overview.md) (all styles except Regular, Flat, Disclosure and Collapse/Expand) - [Radio Button](radio_overview.md) (all styles except Regular, Flat, Disclosure and Collapse/Expand).

#### Commandes

[OBJECT Get format](../commands-legacy/object-get-format.md) [OBJECT Get minimum-value](../commands-legacy/object-get-minimum-value.md) - [OBJECT SET FORMAT](../commands-legacy/object-set-format.md)

---

## Marge verticale

Cette propriété permet de définir la taille (en pixels) des marges verticales du bouton. Cette marge délimite la zone que l'icône et le titre du bouton ne doivent pas dépasser.

Ce paramètre est utile, par exemple, lorsque l'image de fond contient des bordures.

> Cette propriété fonctionne avec la propriété [Marge horizontale](#horizontal-margin).

#### Grammaire JSON

| Nom           | Type de données | Valeurs possibles                                                                   |
| ------------- | --------------- | ----------------------------------------------------------------------------------- |
| customBorderY | number          | A utiliser avec le style "personnalisé". Minimum: 0 |

#### Objets pris en charge

[Bouton personnalisé](button_overview.md#custom) - [Case à cocher personnalisée](checkbox_overview.md#custom) - [Bouton radio personnalisé](radio_overview.md#custom)

#### Commandes

[OBJECT Get format](../commands-legacy/object-get-format.md) [OBJECT Get minimum-value](../commands-legacy/object-get-minimum-value.md) - [OBJECT SET FORMAT](../commands-legacy/object-set-format.md)

---

## Avec pop-up menu

Cette propriété permet d’afficher un symbole en forme de triangle indiquant qu’un pop up menu lui est associé :

![](../assets/en/FormObjects/property_popup.png)

L’apparence et l’emplacement de ce symbole dépend du style de bouton et de la plate-forme courante.

### Séparé et Lié

Pour associer un symbole de pop up menu à un bouton, vous disposez de deux options d’affichage :

|                           Lié                           |                           Séparé                           |
| :-----------------------------------------------------: | :--------------------------------------------------------: |
| ![](../assets/en/FormObjects/property_popup_linked.png) | ![](../assets/en/FormObjects/property_popup_separated.png) |

> La disponibilité effective d’un mode “Séparé” dépend du style de bouton et de la plate-forme.

Chaque option précise la relation entre le bouton et le pop up menu associé :

- Lorsque le pop up menu est **séparé**, un clic sur la partie gauche du bouton exécute directement l’action courante du bouton ; cette action peut être modifiée via le pop up menu accessible dans la partie droite du bouton.
- Lorsque le pop up menu est **lié**, un simple clic sur le bouton ne déclenche aucune autre action que l’affichage du pop up menu. Seule la sélection de l’action dans le pop up menu provoque son déclenchement.

:::info

Refer to the [`On Alternative Click` event description](../Events/onAlternativeClick.md) for more information on the handling of events in this case.

:::

### Gestion du pop up menu

Il est important de noter que la propriété “Avec pop up menu” gère uniquement l’aspect graphique du bouton. The display of the pop-up menu and its values must be handled entirely by the developer, more particularly using [`form events`](../Events/overview.md) and the [`Dynamic pop up menu`](../commands-legacy/dynamic-pop-up-menu.md) and [`Pop up menu`](../commands-legacy/pop-up-menu.md) commands.

#### Grammaire JSON

| Nom            | Type de données | Valeurs possibles                                    |
| :------------- | --------------- | ---------------------------------------------------- |
| popupPlacement | string          | <li>"none"</li><li>"linked"</li><li>"separated"</li> |

#### Objets pris en charge

[Toolbar Button](button_overview.md#toolbar) - [Bevel Button](button_overview.md#bevel) - [Rounded Bevel Button](button_overview.md#rounded-bevel) - [OS X Gradient Button](button_overview.md#os-x-gradient) - [OS X Textured Button](button_overview.md#os-x-textured) - [Office XP Button](button_overview.md#office-xp) - [Circle Button](button_overview.md#circle) - [Custom](button_overview.md#custom)

#### Commandes

[OBJECT Get format](../commands-legacy/object-get-format.md) [OBJECT Get minimum-value](../commands-legacy/object-get-minimum-value.md) - [OBJECT SET FORMAT](../commands-legacy/object-set-format.md)

