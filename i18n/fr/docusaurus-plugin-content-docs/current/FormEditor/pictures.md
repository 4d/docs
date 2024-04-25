---
id: pictures
title: Images
---

4D inclut une prise en charge spécifique des images utilisées dans vos formulaires.

## Formats natifs pris en charge

4D intègre une gestion native des images. Cela signifie que les images sont affichées et stockées dans leur format d’origine, sans interprétation dans 4D. The specific features of the different formats (shading, transparent areas, etc.) will be retained when they are copied and pasted, and will be displayed without alteration. This native support is valid for all pictures stored in 4D forms: [static pictures](FormObjects/staticPicture.md) pasted in Design mode, pictures pasted into [inputs objects](FormObjects/input_overview.md) at runtime, etc.

Les formats d'image les plus courants sont pris en charge par les deux plates-formes : jpeg, gif, png, tiff, bmp, etc. Sous macOS, le format pdf est également disponible pour l'encodage et le décodage.

> La liste complète des formats pris en charge varie en fonction du système d’exploitation et des codecs personnalisés installés sur les postes. To find out which codecs are available, you must use the `PICTURE CODEC LIST` command (see also the [picture data type](Concepts/dt_picture.md) description).

### Format d'image non disponible

Une icône spécifique est affichée pour les images stockées dans un format non disponible sur le poste. L'extension du format manquant est inscrite en bas de l'icône :

![](../assets/en/FormEditor/picNoFormat.png)

L'icône est automatiquement utilisée partout où l'image doit être affichée :

![](../assets/en/FormEditor/picNoFormat2.png)

Cette icône indique que l'image ne peut être ni affichée ni manipulée localement -- mais elle peut être stockée sans altération pour être affichée sur une autre machine. C'est le cas, par exemple, pour les images PDF sous Windows ou les images au format PICT.

## Images de haute résolution

4D prend en charge des images haute résolution sur les plateformes macOS et Windows. Les images haute résolution peuvent être définies par le facteur d'échelle ou le dpi.

### Facteur d'échelle

Les écrans haute résolution ont une densité de pixels plus élevée que les écrans standard traditionnels. For pictures to render correctly on high resolution displays, the number of pixels in the picture must be multiplied by the _scale factor_ (_i.e._, two times larger, three times larger, etc.).

When using high resolution pictures, you can specify the scale factor by adding "@nx" in the picture's name (where _n_ designates the scale factor). In the table below, you can see that the scale factor is indicated in the names of the high resolution pictures, _circle@2x.png_ and _circle@3x.png_.

| Type d'affichage    | Facteur d'échelle                                                  | Exemple                                                                                                                                                                                         |
| ------------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Résolution standard | densité de pixel 1:1.              | **1x**<br/>![](../assets/en/FormEditor/pictureScale1.png) _circle.png_                                                                                                          |
| Haute résolution    | Densité de pixel augmentée d'un facteur de 2 ou 3. | <table><th>2x</th><th>3x</th><tr><td>![](../assets/en/FormEditor/pictureScale2.png)*circle@2x.png*</td><td>![](../assets/en/FormEditor/pictureScale3.png)<br/>*circle@3x.png*</td></tr></table> |

Les images haute résolution avec la convention @nx peuvent être utilisées dans les objets suivants :

- [Static pictures](FormObjects/staticPicture.md)
- [Buttons](FormObjects/button_overview.md)/[radio](FormObjects/radio_overview.md)/[check boxes](FormObjects/checkbox_overview.md)
- [Picture buttons](FormObjects/pictureButton_overview.md)/[Picture pop-ups](FormObjects/picturePopupMenu_overview.md)
- [Tab controls](FormObjects/tabControl.md)
- [List box headers](FormObjects/listbox_overview.md#list-box-headers)
- [Menu icons](Menus/properties.md#item-icon)

4D priorise automatiquement les images avec la résolution la plus élevée. 4D priorise automatiquement les images avec la résolution la plus élevée. Even if a command or property specifies _circle.png_, _circle@3x.png_ will be used (if it exists).

> A noter que cette résolution se produit uniquement pour l'affichage des images à l'écran, aucune hiérarchisation automatique n'est effectuée lors de l'impression.

### DPI

While 4D automatically prioritizes the highest resolution,  there are, however, some behavioral differences depending on screen and image dpi\*(\*)\*, and picture format:

| Opération                                                                                                                                                   | Comportement                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Déposer ou Coller                                                                                                                                           | If the picture has:<ul><li>**72dpi or 96dpi** - The picture is "[Center](FormObjects/properties_Picture.md#center--truncated-non-centered)" formatted and the object containing the picture has the same number of pixels.</li><li>**Other dpi** - The picture is "[Scaled to fit](FormObjects/properties_Picture.md#scaled-to-fit)" formatted and the object containing the picture is equal to (picture's number of pixels \* screen dpi) / (picture's dpi)</li> <li>**No dpi** - The picture is "[Scaled to fit](FormObjects/properties_Picture.md#scaled-to-fit)" formatted.</li></ul> |
| [Automatic Size](https://doc.4d.com/4Dv19/4D/19/Setting-object-display-properties.300-5416671.en.html#148057) (Form Editor context menu) | If the picture's display format  is:<ul><li>**[Scaled](FormObjects/properties_Picture.md#scaled-to-fit)** - The object containing the picture is resized according to (picture's number of pixels \* screen dpi) / (picture's dpi) </li> <li>**Not scaled** - The object containing the picture has the same number of pixels as the picture.</li></ul>                                                                                                                                                                                                                                                    |

_(\*) Typically,  macOS = 72dpi, Windows = 96dpi_

## Images en mode sombre (macOS uniquement)

You can define specific pictures and icons to be used instead of standard pictures when [forms use the dark scheme](properties_FormProperties.md#color-scheme).

Une image en mode sombre est définie comme suit :

- dark mode picture has the same name as the standard (light scheme) version with the suffix "`_dark`"
- l'image en mode sombre est stockée à côté de la version standard.

At runtime, 4D will automatically load the light or dark image according to the [current form color scheme](https://doc.4d.com/4dv19/help/command/en/1761.html).

![](../assets/en/FormEditor/darkicon.png)

## Coordonnées de la souris dans une image

4D lets you retrieve the local coordinates of the mouse in an [input object](FormObjects/input_overview.md) associated with a [picture expression](FormObjects/properties_Object.md#expression-type), in case of a click or a hovering, even if a scroll or zoom has been applied to the picture. Ce mécanisme, proche de celui d'une image map, peut être utilisé par exemple pour gérer les barres de bouton défilables ou bien l'interface de logiciels de cartographie.

The coordinates are returned in the _MouseX_ and _MouseY_ [System Variables](https://doc.4d.com/4Dv18/4D/18/System-Variables.300-4505547.en.html). Les coordonnées sont exprimées en pixels par rapport à l'angle supérieur gauche de l'image (0,0). If the mouse is outside of the picture coordinates system, -1 is returned in _MouseX_ and _MouseY_.

You can get the value of these variables as part of the [`On Clicked`](Events/onClicked.md), [`On Double Clicked`](Events/onDoubleClicked.md), [`On Mouse up`](Events/onMouseUp.md), [`On Mouse Enter`](Events/onMouseEnter.md), or [`On Mouse Move`](Events/onMouseMove.md) form events.
