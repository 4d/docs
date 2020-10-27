---
id: propertiesTextAndPicture
title: Texte et Image
---

---
## Chemin d'accès arrière-plan

Définit le chemin d'accès de l'image qui sera dessinée en arrière-plan de l'objet. Si l'objet utilise une [icône](#picture-pathname) avec [différents états](#number-of-states), l'image de fond prendra automatiquement en charge le même nombre d'états.

Le chemin d'accès à saisir est identique à celui de [la propriété Chemin d'accès pour les images statiques](properties_Picture.md#pathname).

#### Grammaire JSON

| Nom                     | Type de données | Valeurs possibles                                                                                        |
| ----------------------- | --------------- | -------------------------------------------------------------------------------------------------------- |
| customBackgroundPicture | string          | Chemin relatif en syntaxe POSIX. Doit être utilisé avec l'option "Personnalisé" de la propriété "Style". |


#### Objets pris en charge

[Bouton personnalisé](button_overview.md#custom) - [Case à cocher personnalisée](checkbox_overview.md#custom) - [Bouton radio personnalisé](radio_overview.md#custom)




---
## Styles de bouton

Aspect général du bouton. Le style du bouton joue également un rôle dans la disponibilité de certaines options.


#### Grammaire JSON

|  Nom  | Type de données | Valeurs possibles                                                                                                                                                  |
|:-----:|:---------------:| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| style |      Texte      | "regular", "flat", "toolbar", "bevel", "roundedBevel", "gradientBevel", "texturedBevel", "office", "help", "circular", "disclosure", "roundedDisclosure", "custom" |


#### Objets pris en charge

[Bouton](button_overview.md) - [Bouton radio](radio_overview.md) - [Case à cocher](checkbox_overview.md) - [Bouton radio](radio_overview.md)




---
## Marge horizontale

Cette propriété permet de définir la taille (en pixels) des marges horizontales du bouton. Cette marge délimite la zone que l'icône et le titre du bouton ne doivent pas dépasser.

Ce paramètre est utile, par exemple, lorsque l'image de fond contient des bordures :

| Avec / Sans          | Exemple                                                   |
| -------------------- | --------------------------------------------------------- |
| Sans marge           | ![](assets/en/FormObjects/property_horizontalMargin1.png) |
| Avec marge 13 pixels | ![](assets/en/FormObjects/property_horizontalMargin2.png) |
> Cette propriété fonctionne avec la propriété [Marge verticale](#vertical-margin).

#### Grammaire JSON

| Nom           | Type de données | Valeurs possibles                                    |
| ------------- | --------------- | ---------------------------------------------------- |
| customBorderX | number          | A utiliser avec le style "personnalisé". Minimum : 0 |

#### Objets pris en charge

[Bouton personnalisé](button_overview.md#custom) - [Case à cocher personnalisée](checkbox_overview.md#custom) - [Bouton radio personnalisé](radio_overview.md#custom)




---

## Emplacement de l'icône

Désigne l'emplacement d'une icône par rapport à l'objet formulaire.

#### Grammaire JSON

| Nom           | Type de données | Valeurs possibles           |
| ------------- | --------------- | --------------------------- |
| iconPlacement | string          | "aucun", "gauche", "droite" |

#### Objets pris en charge

[Entête de List Box](listbox_overview.md#list-box-headers)





---
## Décalage icône

Définit une valeur de décalage personnalisée en pixels, qui sera utilisée lorsque le bouton est cliqué

Le titre du bouton sera décalé vers la droite et vers le bas pour le nombre de pixels saisis. Cela permet d'appliquer un effet 3D personnalisé lorsque le bouton est cliqué.

#### Grammaire JSON

| Nom          | Type de données | Valeurs possibles |
| ------------ | --------------- | ----------------- |
| customOffset | number          | minimum : 0       |

#### Objets pris en charge

[Bouton personnalisé](button_overview.md#custom) - [Case à cocher personnalisée](checkbox_overview.md#custom) - [Bouton radio personnalisé](radio_overview.md#custom)



---
## Nombre d'états

Cette propriété définit le nombre exact d'états présents dans l'image utilisée comme icône pour un [bouton avec icône](button_overview.md), une [case à cocher](checkbox_overview.md) ou un [bouton radio](radio_overview.md) personnalisé. En général, une icône de bouton comprend quatre états : actif, cliqué, survolé et inactif.

Chaque état est représenté par une image différente. Dans l'image source, les états doivent être empilés verticalement :

![](assets/en/property_numberOfStates.png)

Les états suivants sont représentés :
1. bouton non cliqué / case non cochée (valeur de la variable = 0)
2. bouton cliqué / case cochée (valeur de la variable = 1)
3. survolé
4. disabled


#### Grammaire JSON

| Nom        | Type de données | Valeurs possibles |
| ---------- | --------------- | ----------------- |
| iconFrames | number          | minimum: 1        |

#### Objets pris en charge

[Bouton](button_overview.md) (tous les styles sauf[Aide](button_overview.md#help)) - [Case à cocher](checkbox_overview.md) - [Bouton radio](radio_overview.md)





---
## Chemin d'image

Définit le chemin d'accès de l'image qui sera utilisée comme icône de l'objet.

Le chemin d'accès à saisir est identique à celui de [la propriété Chemin d'accès pour les images statiques](properties_Picture.md#pathname).

> When used as icon for active objects, the picture must be designed to support a variable [number of states](#number-of-states).

#### Grammaire JSON

| Nom  | Type de données | Valeurs possibles                            |
| ---- | --------------- | -------------------------------------------- |
| icon | picture         | Relative or filesystem path in POSIX syntax. |

#### Objets pris en charge

[Bouton](button_overview.md) (tous les styles sauf[Aide](button_overview.md#help)) - [Case à cocher](checkbox_overview.md) - [En-tête List box](listbox_overview.md#list-box-headers)[Bouton radio](listbox_overview.md#list-box-headers)




---
## Position Titre/Image

This property allows modifying the relative location of the button title in relation to the associated icon. This property has no effect when the button contains only a title (no associated picture) or a picture (no title). By default, when a button contains a title and a picture, the text is placed below the picture.

Here are the results using the various options for this property:

| Option       | Description                                                                                                                                      | Exemple                                                        |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------- |
| **Gauche**   | The text is placed to the left of the icon. The contents of the button are aligned to the right.                                                 | ![](assets/en/FormObjects/property_titlePosition_left.en.png)  |
| **Haut**     | The text is placed above the icon. The contents of the button are centered.                                                                      | ![](assets/en/FormObjects/property_titlePosition_top.png)      |
| **Droite**   | The text is placed to the right of the icon. The contents of the button are aligned to the left.                                                 | ![](assets/en/FormObjects/property_titlePosition_right.png)    |
| **Bas**      | The text is placed below the icon. The contents of the button are centered.                                                                      | ![](assets/en/FormObjects/property_titlePosition_bottom.png)   |
| **Centered** | The text of the icon is centered vertically and horizontally in the button. This parameter is useful, for example, for text included in an icon. | ![](assets/en/FormObjects/property_titlePosition_centered.png) |

#### Grammaire JSON

| Nom           | Type de données | Valeurs possibles                          |
| ------------- | --------------- | ------------------------------------------ |
| textPlacement | string          | "left", "top", "right", "bottom", "center" |

#### Objets pris en charge

[Bouton](button_overview.md) (tous les styles sauf[Aide](button_overview.md#help)) - [Case à cocher](checkbox_overview.md) - [Bouton radio](radio_overview.md)




---
## Marge verticale

Cette propriété permet de définir la taille (en pixels) des marges verticales du bouton. Cette marge délimite la zone que l'icône et le titre du bouton ne doivent pas dépasser.

Ce paramètre est utile, par exemple, lorsque l'image de fond contient des bordures.

> Cette propriété fonctionne avec la propriété [Marge horizontale](#horizontal-margin).

#### Grammaire JSON

| Nom           | Type de données | Valeurs possibles                                    |
| ------------- | --------------- | ---------------------------------------------------- |
| customBorderY | number          | A utiliser avec le style "personnalisé". Minimum : 0 |

#### Objets pris en charge

[Bouton personnalisé](button_overview.md#custom) - [Case à cocher personnalisée](checkbox_overview.md#custom) - [Bouton radio personnalisé](radio_overview.md#custom)




---
## Avec pop-up menu

Cette propriété permet d’afficher un symbole en forme de triangle indiquant qu’un pop up menu lui est associé :

![](assets/en/FormObjects/property_popup.png)

L’apparence et l’emplacement de ce symbole dépend du style de bouton et de la plate-forme courante.


### Séparé et Lié

Pour associer un symbole de pop up menu à un bouton, vous disposez de deux options d’affichage :

|                        Séparé                        |                        Separated                        |
|:----------------------------------------------------:|:-------------------------------------------------------:|
| ![](assets/en/FormObjects/property_popup_linked.png) | ![](assets/en/FormObjects/property_popup_separated.png) |
> The actual availability of a "separated" mode depends on the style of the button and the platform.

Each option specifies the relation between the button and the attached pop-up menu:

<li>When the pop-up menu is **separated**, clicking on the left part of the button directly executes the current action of the button; this action can be modified using the pop-up menu accessible in the right part of the button. <li>When the pop-up menu is **linked**, a simple click on the button only displays the pop-up menu. Only the selection of the action in the pop-up menu causes its execution.


### Managing the pop-up menu

It is important to note that the "With Pop-up Menu" property only manages the graphic aspect of the button. The display of the pop-up menu and its values must be handled entirely by the developer, more particularly using `form events` and the **[Dynamic pop up menu](https://doc.4d.com/4Dv18/4D/18/Dynamic-pop-up-menu.301-4505524.en.html)** and **[Pop up menu](https://doc.4d.com/4Dv17R5/4D/17-R5/Pop-up-menu.301-4127438.en.html)** commands.


#### Grammaire JSON

| Nom            | Type de données | Valeurs possibles                                                                                    |
|:-------------- | --------------- | ---------------------------------------------------------------------------------------------------- |
| popupPlacement | string          | <li>"none"<li>"linked"<li>"separated" |


#### Objets pris en charge

[Bouton barre outils](button_overview.md#toolbar) - [Bouton Bevel](button_overview.md#bevel) - [Bouton bevel circulaire](button_overview.md#Rounded-bevel) - [Bouton OS X Gradient](button_overview.md#os-x-gradient) - [Bouton OS X Textured](button_overview.md#os-x-textured) - [Bouton Office XP](button_overview.md#office-XP) - [Bouton cercle](button_overview.md#circle) - [Personnalisé](button_overview.md#custom)