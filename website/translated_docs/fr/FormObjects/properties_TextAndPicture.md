---
id: propertiesTextAndPicture
title: Texte et Image
---

---
## Background pathname

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

General appearance of the button. The button style also plays a part in the availability of certain options.


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
## Icon Offset

Sets a custom offset value in pixels, which will be used when the button is clicked

The title of the button will be shifted to the right and toward the bottom for the number of pixels entered. This allows applying a customized 3D effect when the button is clicked.

#### Grammaire JSON

| Nom          | Type de données | Valeurs possibles |
| ------------ | --------------- | ----------------- |
| customOffset | number          | minimum : 0       |

#### Objets pris en charge

[Bouton personnalisé](button_overview.md#custom) - [Case à cocher personnalisée](checkbox_overview.md#custom) - [Bouton radio personnalisé](radio_overview.md#custom)



---
## Number of States

This property sets the exact number of states present in the picture used as the icon for a [button with icon](button_overview.md), a [check box](checkbox_overview.md) or a custom [radio button](radio_overview.md). In general, a button icon includes four states: active, clicked, mouse over and inactive.

Each state is represented by a different picture. In the source picture, the states must be stacked vertically:

![](assets/en/property_numberOfStates.png)

The following states are represented:
1. button not clicked / check box unchecked (variable value=0)
2. button clicked / check box checked (variable value=1)
3. roll over
4. disabled


#### Grammaire JSON

| Nom        | Type de données | Valeurs possibles |
| ---------- | --------------- | ----------------- |
| iconFrames | number          | minimum: 1        |

#### Objets pris en charge

[Button](button_overview.md) (all styles except [Help](button_overview.md#help)) - [Check Box](checkbox_overview.md) - [Radio Button](radio_overview.md)





---
## Picture pathname

Sets the path of the picture that will be used as icon for the object.

Le chemin d'accès à saisir est identique à celui de [la propriété Chemin d'accès pour les images statiques](properties_Picture.md#pathname).

> When used as icon for active objects, the picture must be designed to support a variable [number of states](#number-of-states).

#### Grammaire JSON

| Nom  | Type de données | Valeurs possibles                            |
| ---- | --------------- | -------------------------------------------- |
| icon | picture         | Relative or filesystem path in POSIX syntax. |

#### Objets pris en charge

[Button](button_overview.md) (all styles except [Help](button_overview.md#help)) - [Check Box](checkbox_overview.md) - [List Box Header](listbox_overview.md#list-box-headers) - [Radio Button](radio_overview.md)




---
## Title/Picture Position

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

[Button](button_overview.md) (all styles except [Help](button_overview.md#help)) - [Check Box](checkbox_overview.md) - [Radio Button](radio_overview.md)




---
## Vertical Margin

This property allows setting the size (in pixels) of the vertical margins of the button. Cette marge délimite la zone que l'icône et le titre du bouton ne doivent pas dépasser.

This parameter is useful, for example, when the background picture contains borders.

> This property works in conjunction with the [Horizontal Margin](#horizontal-margin) property.

#### Grammaire JSON

| Nom           | Type de données | Valeurs possibles                                    |
| ------------- | --------------- | ---------------------------------------------------- |
| customBorderY | number          | A utiliser avec le style "personnalisé". Minimum : 0 |

#### Objets pris en charge

[Bouton personnalisé](button_overview.md#custom) - [Case à cocher personnalisée](checkbox_overview.md#custom) - [Bouton radio personnalisé](radio_overview.md#custom)




---
## With pop-up menu

This property allows displaying a symbol that appears as a triangle in the button to indicate the presence of an attached pop-up menu:

![](assets/en/FormObjects/property_popup.png)

The appearance and location of this symbol depends on the button style and the current platform.


### Linked and Separated

To attach a pop-up menu symbol to a button, there are two display options available:

|                        Linked                        |                        Separated                        |
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

[Toolbar Button](button_overview.md#toolbar) - [Bevel Button](button_overview.md#bevel) - [Rounded Bevel Button](button_overview.md#Rounded-bevel) - [OS X Gradient Button](button_overview.md#os-x-gradient) - [OS X Textured Button](button_overview.md#os-x-textured) - [Office XP Button](button_overview.md#office-XP) - [Circle Button](button_overview.md#circle) - [Custom](button_overview.md#custom)