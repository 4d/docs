---
id: pictures
title: Images
---

## Formats natifs pris en charge

4D intègre une gestion native des images. Cela signifie que les images sont affichées et stockées dans leur format d’origine, sans interprétation dans 4D. Les spécificités des différents formats (ombrages, zones transparentes...) sont conservées en cas de copier-coller et affichées sans altération. This native support is valid for all pictures stored in 4D: static pictures, pictures pasted into forms in Design mode, pictures pasted into fields or variables in Application mode, etc.

4D utilise des API natives pour encoder (écrire) et décoder (lire) les champs et les variables des images sous Windows et macOS. Ces implémentations donnent accès à de nombreux formats natifs, dont le format RAW, couramment utilisé par les appareils photo numériques.

*   Windows, 4D uses WIC (Windows Imaging Component).
*   macOS, 4D uses ImageIO.

The most common picture formats are supported of both platforms: .jpeg, .gif, .png, .tiff, .bmp, etc. On macOS, the .pdf format is also available for encoding and decoding.

La liste complète des formats pris en charge varie en fonction du système d’exploitation et des codecs personnalisés installés sur les postes. To find out which codecs are available, you must use the `PICTURE CODEC LIST` command. Notez que les listes de codecs disponibles pour la lecture et pour l'écriture peuvent différer, étant donné que les codecs d'encodage peuvent nécessiter des licences spécifiques.
> WIC et ImageIO permettent l’utilisation de métadonnées dans les images. Deux commandes, `SET PICTURE METADATA` et `GET PICTURE METADATA`, vous permettent d'en bénéficier dans vos développements.


### Identifiants de codecs d'images

Picture formats recognized by 4D are returned by the `PICTURE CODEC LIST` command as picture Codec IDs. Ces identifiants peuvent être :

*   une extension (par exemple “.gif”)
*   As a MIME type (for example “image/jpeg”)

La forme utilisée pour chaque format dépend du mode de déclaration du codec au niveau du système d’exploitation.

Most of the 4D picture management commands can receive a Codec ID as a parameter. It is therefore imperative to use the system ID returned by the `PICTURE CODEC LIST` command.




### Format d'image non disponible

Une icône spécifique est affichée pour les images stockées dans un format non disponible sur le poste. L'extension du format manquant est inscrite en bas de l'icône :

![](assets/en/Project/picNoFormat.png)

L'icône est automatiquement utilisée partout où l'image doit être affichée :

![](assets/en/Project/picNoFormat2.png)

Cette icône indique que l'image ne peut être ni affichée ni manipulée localement -- mais elle peut être stockée sans altération pour être affichée sur une autre machine. This is the case, for example, for PDF pictures on Windows, or for PICT format pictures.



### Picture Resolution

4D supports high resolution displays on both macOS and Windows platforms for the following:

*   Static pictures
*   3D buttons/radio/check boxes
*   Picture buttons/pop-ups
*   Tab controls
*   Menu icons
*   List box headers

High resolution displays have a higher pixel density than traditional standard displays. For pictures to render correctly on high resolution displays, the number of pixels in the picture must be multiplied by the *scale factor* (*i.e.*, two times larger, three times larger, etc.).

The following table demonstrates the difference between display resolution and picture pixel density.

| Display Type        | Facteur d'échelle                              | Exemple                                                                        |
| ------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------ |
| Résolution standard | 1:1 pixel density.                             | **1x**<br>![](assets/en/Project/pictureScale1.png)<br>*circle.png* |
| Haute résolution    | Pixel density increased by a factor of 2 or 3. | <table><th>2x</th><th>3x</th><tr><td>![](assets/en/Project/pictureScale2.png)<br>*circle@2x.png*</td><td>![](assets/en/Project/pictureScale3.png)<br>*circle@3x.png*</td></tr></table>                                                      |

When using high resolution pictures, the scale factor is specified by adding "@nx" in the picture's name (*n* designates the scale factor). In the table above, you can see that the scale factor is indicated in the names of the high resolution pictures, *circle@2x.png* and *circle@3x.png*.

4D automatically prioritizes pictures with the highest resolution. <br><br> **Example**: When using two screens (one high resolution display, one standard display) and you move a form from one screen to another, 4D  automatically renders the highest possible resolution of the picture. Even if a command or property specifies *circle.png*, *circle@3x.png* will be used (if it exists).
> Note that this prioritization occurs only for displaying pictures onscreen, there is no automatic prioritization made when printing.

This resolution behavior is supported for project databases by all [4D form objects](../FormObjects/formObjectsOverview.html) which support images.




## Coordonnées de la souris dans une image

4D lets you retrieve the local coordinates of the mouse in a picture field or variable in case of a click or a hovering, even if a scroll or zoom has been applied to the picture. Ce mécanisme, proche de celui d'une image map, peut être utilisé par exemple pour gérer les barres de bouton défilables ou bien l'interface de logiciels de cartographie.

Les coordonnées sont retournées dans les [Variables système](https://doc.4d.com/4Dv18/4D/18/System-Variables.300-4505547.en.html) *MouseX* et *MouseY*. Les coordonnées sont exprimées en pixels par rapport à l'angle supérieur gauche de l'image (0,0). Lorsque la souris se trouve en dehors du système de coordonnées de l'image, la valeur -1 est retournée dans *MouseX* et *MouseY*.

Vous pouvez lire la valeur des variables MouseX et MouseY dans le contexte des événements formulaire `Sur clic`, `Sur double clic`, `Sur relâchement bouton`, `Sur début survol` et `Sur survol`.

## Picture Operators

4D allows you to carry out **operations** on 4D pictures, such as concatenation, superimposing, etc. This point is covered in the *Picture Operators* section of the *4D Language Reference*.

