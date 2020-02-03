---
id: version-18 R2-pictures
title: Images
original_id: pictures
---

## Formats natifs pris en charge

4D intègre une gestion native des images. Cela signifie que les images sont affichées et stockées dans leur format d’origine, sans interprétation dans 4D. Les spécificités des différents formats (ombrages, zones transparentes...) sont conservées en cas de copier-coller et affichées sans altération. Cette prise en charge native est valide pour toutes les images stockées dans 4D : images de la bibliothèque, images collées dans les formulaires en mode Développement, images collées dans les champs ou variables en mode Application, etc.

4D utilise des API natives pour encoder (écrire) et décoder (lire) les champs et les variables des images sous Windows et macOS. Ces implémentations donnent accès à de nombreux formats natifs, dont le format RAW, couramment utilisé par les appareils photo numériques.

*   Windows, 4D uses WIC (Windows Imaging Component).
*   macOS, 4D uses ImageIO.

Les formats d'image les plus courants sont pris en charge par les deux plates-formes : jpeg, gif, png, tiff, bmp, etc. Sous macOS, le format pdf est également disponible pour l'encodage et le décodage.

La liste complète des formats pris en charge varie en fonction du système d’exploitation et des codecs personnalisés installés sur les postes. To find out which codecs are available, you must use the PICTURE CODEC LIST command. Notez que les listes de codecs disponibles pour la lecture et pour l'écriture peuvent différer, étant donné que les codecs d'encodage peuvent nécessiter des licences spécifiques.
> WIC and ImageIO permit the use of metadata in pictures. Two commands, SET PICTURE METADATA and GET PICTURE METADATA, let you benefit from metadata in your developments.


### Identifiants de codecs d'images

Picture formats recognized by 4D are returned by the PICTURE CODEC LIST command as picture Codec IDs. Ces identifiants peuvent être :

*   une extension (par exemple “.gif”)
*   Un type Mime (par exemple “image/jpg”)

La forme utilisée pour chaque format dépend du mode de déclaration du codec au niveau du système d’exploitation.

La plupart des commandes de gestion d'images de 4D attendent un identifiant de codec en paramètre. It is therefore imperative to use the system ID returned by the PICTURE CODEC LIST command.




### Format d'image non disponible

Une icône spécifique est affichée pour les images stockées dans un format non disponible sur le poste. The extension of the missing format is shown at the bottom of the icon:

![](assets/en/Project/picNoFormat.png)

L'icône est automatiquement utilisée partout où l'image doit être affichée :

![](assets/en/Project/picNoFormat2.png)

Cette icône indique que l'image ne peut être ni affichée ni manipulée localement -- mais elle peut être stockée sans altération pour être affichée sur une autre machine. This is the case, for instance, for PDF pictures on Windows, or for PICT format pictures.



## Picture Resolution

4D supports both standard and high resolution displays on both macOS and Windows platforms.

High resolution displays have a higher pixel density than traditional standard displays. For pictures to render correctly on high resolution displays, the number of pixels in the picture must be multiplied by the *scale factor* (*i.e.*, two times larger, three times larger, etc.).

The following table demonstrates the difference between display resolution and picture pixel density.

| Display Type        | Scale Factor                                   | Exemple                                                            |
| ------------------- | ---------------------------------------------- | ------------------------------------------------------------------ |
| Standard Resolution | 1:1 pixel density.                             | **1x**<br>![](assets/en/Project/pictureScale1.png)<br>*circle.png* |
| High Resolution     | Pixel density increased by a factor of 2 or 3. | <table><th>2x</th><th>3x</th><tr><td>![](assets/en/Project/pictureScale2.png)<br>*circle@2x.png*</td><td>![](assets/en/Project/pictureScale3.png)<br>*circle@3x.png*</td></tr></table>                                          |

When using high resolution pictures, the scale factor is specified by adding "@nx" in the picture's name (*n* designates the scale factor). In the table above, you can see that the scale factor is indicated in the names of the high resolution pictures, *circle@2x.png* and *circle@3x.png*.
> 4D automatically prioritizes pictures with the highest resolution. <br><br> **Example**: When using two screens (one high resolution display, one standard display) and you move a form from one screen to another, 4D  automatically renders the highest possible resolution of the picture. Even if a command or property specifies *circle.png*, *circle@3x.png* will be used (if it exists).

This resolution behavior is supported by all [4D form objects](../FormObjects/formObjectsOverview.html) which support images.


## Mouse Coordinates in a Picture

4D vous permet de récupérer les coordonnées locales de la souris dans un champ ou une variable image en cas de clic ou de survol, même si un défilement ou un zoom a été appliqué à l'image. Ce mécanisme, proche de celui d'une image map, peut être utilisé par exemple pour gérer les barres de bouton défilables ou bien l'interface de logiciels de cartographie.

The coordinates are returned in the MouseX and MouseY System Variables. Les coordonnées sont exprimées en pixels par rapport à l'angle supérieur gauche de l'image (0,0). If the mouse is outside of the picture coordinates system, -1 is returned in MouseX and MouseY.

You can get the value of these variables as part of the On Clicked, On Double Clicked, On Mouse up, On Mouse Enter, or On Mouse Move form events.

## Picture Operators

4D allows you to carry out operations on 4D pictures, such as concatenation, superimposing, etc. This point is covered in the Picture Operators section.

