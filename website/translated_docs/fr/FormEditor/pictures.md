---
id: pictures
title: Images
---

## Formats natifs pris en charge

4D intègre une gestion native des images. Cela signifie que les images sont affichées et stockées dans leur format d’origine, sans interprétation dans 4D. Les spécificités des différents formats (ombrages, zones transparentes...) sont conservées en cas de copier-coller et affichées sans altération. This native support is valid for all pictures stored in 4D forms: [static pictures](FormObjects/staticPicture.md) pasted in Design mode, pictures pasted into [inputs objects](FormObjects/input_overview.md) at runtime, etc.

The most common picture formats are supported of both platforms: .jpeg, .gif, .png, .tiff, .bmp, etc. On macOS, the .pdf format is also available for encoding and decoding.

> La liste complète des formats pris en charge varie en fonction du système d’exploitation et des codecs personnalisés installés sur les postes. To find out which codecs are available, you must use the `PICTURE CODEC LIST` command (see also the [picture data type](Concepts/dt_picture.md) description).




### Format d'image non disponible

Une icône spécifique est affichée pour les images stockées dans un format non disponible sur le poste. L'extension du format manquant est inscrite en bas de l'icône :

![](assets/en/FormEditor/picNoFormat.png)

L'icône est automatiquement utilisée partout où l'image doit être affichée :

![](assets/en/FormEditor/picNoFormat2.png)

Cette icône indique que l'image ne peut être ni affichée ni manipulée localement -- mais elle peut être stockée sans altération pour être affichée sur une autre machine. This is the case, for example, for PDF pictures on Windows, or for PICT format pictures.





## Coordonnées de la souris dans une image

4D lets you retrieve the local coordinates of the mouse in an [input object](FormObjects/input_overview.md) associated with a [picture expression](FormObjects/properties_Object.md#expression-type), in case of a click or a hovering, even if a scroll or zoom has been applied to the picture. Ce mécanisme, proche de celui d'une image map, peut être utilisé par exemple pour gérer les barres de bouton défilables ou bien l'interface de logiciels de cartographie.

The coordinates are returned in the *MouseX* and *MouseY* [System Variables](https://doc.4d.com/4Dv18/4D/18/System-Variables.300-4505547.en.html). Les coordonnées sont exprimées en pixels par rapport à l'angle supérieur gauche de l'image (0,0). If the mouse is outside of the picture coordinates system, -1 is returned in *MouseX* and *MouseY*.

Vous pouvez lire la valeur des variables MouseX et MouseY dans le contexte des événements formulaire `Sur clic`, `Sur double clic`, `Sur relâchement bouton`, `Sur début survol` et `Sur survol`.
