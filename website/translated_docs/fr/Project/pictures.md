---
id: pictures
title: Images
---

## Formats natifs pris en charge

4D intègre une gestion native des images. Cela signifie que les images sont affichées et stockées dans leur format d’origine, sans interprétation dans 4D. Les spécificités des différents formats (ombrages, zones transparentes...) sont conservées en cas de copier-coller et affichées sans altération. Cette prise en charge native est valide pour toutes les images stockées dans 4D : images de la bibliothèque, images collées dans les formulaires en mode Développement, images collées dans les champs ou variables en mode Application, etc.

4D utilise des API natives pour encoder (écrire) et décoder (lire) les champs et les variables des images sous Windows et macOS. Ces implémentations donnent accès à de nombreux formats natifs, dont le format RAW, couramment utilisé par les appareils photo numériques.

*   Sous Windows, 4D utilise WIC (Windows Imaging Component).
*   sous macOS, 4D utilise ImageIO.

The most common picture formats are supported of both platforms: .jpeg, .gif, .png, .tiff, .bmp, etc. On macOS, the .pdf format is also available for encoding and decoding.

La liste complète des formats pris en charge varie en fonction du système d’exploitation et des codecs personnalisés installés sur les postes. Pour connaître les codecs disponibles, vous devez utiliser la commande `PICTURE CODEC LIST`. Notez que les listes de codecs disponibles pour la lecture et pour l'écriture peuvent différer, étant donné que les codecs d'encodage peuvent nécessiter des licences spécifiques.
> WIC et ImageIO permettent l’utilisation de métadonnées dans les images. Deux commandes, `SET PICTURE METADATA` et `GET PICTURE METADATA`, vous permettent d'en bénéficier dans vos développements.


### Identifiants de codecs d'images

Picture formats recognized by 4D are returned by the `PICTURE CODEC LIST` command as picture Codec IDs. Ces identifiants peuvent être :

*   une extension (par exemple “.gif”)
*   As a MIME type (for example “image/jpeg”)

La forme utilisée pour chaque format dépend du mode de déclaration du codec au niveau du système d’exploitation.

La plupart des commandes de gestion d'images de 4D attendent un identifiant de codec en paramètre. It is therefore imperative to use the system ID returned by the `PICTURE CODEC LIST` command.




### Format d'image non disponible

Une icône spécifique est affichée pour les images stockées dans un format non disponible sur le poste. L'extension du format manquant est inscrite en bas de l'icône :

![](assets/en/Project/picNoFormat.png)

L'icône est automatiquement utilisée partout où l'image doit être affichée :

![](assets/en/Project/picNoFormat2.png)

Cette icône indique que l'image ne peut être ni affichée ni manipulée localement -- mais elle peut être stockée sans altération pour être affichée sur une autre machine. This is the case, for example, for PDF pictures on Windows, or for PICT format pictures.



### Résolution d'image

4D prend en charge les affichages haute résolution sur les plateformes macOS et Windows pour les éléments suivants :

*   Static pictures
*   Boutons 3D/radio/cases à cocher
*   Boutons d'image/pop-ups
*   Tab controls
*   Menu icons
*   En-têtes de list box

High resolution displays have a higher pixel density than traditional standard displays. For pictures to render correctly on high resolution displays, the number of pixels in the picture must be multiplied by the *scale factor* (*i.e.*, two times larger, three times larger, etc.).

Le tableau suivant montre la différence entre la résolution d'affichage et la densité de pixels de l'image.

| Display Type        | Facteur d'échelle                              | Exemple                                                                        |
| ------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------ |
| Résolution standard | 1:1 pixel density.                             | **1x**<br>![](assets/en/Project/pictureScale1.png)<br>*circle.png* |
| Haute résolution    | Pixel density increased by a factor of 2 or 3. | <table><th>2x</th><th>3x</th><tr><td>![](assets/en/Project/pictureScale2.png)<br>*circle@2x.png*</td><td>![](assets/en/Project/pictureScale3.png)<br>*circle@3x.png*</td></tr></table>                                                      |

Lors de l'utilisation d'images de haute résolution, le facteur d'échelle est spécifié en ajoutant "@nx" dans le nom de l'image (*n* désigne le facteur d'échelle). Dans le tableau ci-dessus, vous constatez que le facteur d'échelle est indiqué dans les noms d' images de haute résolution, *circle@2x.png* et *circle@3x.png*.

4D automatically prioritizes pictures with the highest resolution. <br><br> **Example**: When using two screens (one high resolution display, one standard display) and you move a form from one screen to another, 4D  automatically renders the highest possible resolution of the picture. Even if a command or property specifies *circle.png*, *circle@3x.png* will be used (if it exists).
> A noter que cette hiérarchisation se produit uniquement pour l'affichage des images à l'écran, aucune hiérarchisation automatique n'est effectuée lors de l'impression.

Ce comportement de résolution est pris en charge pour les bases projet par tous les [objets de formulaire 4D](../FormObjects/formObjectsOverview.html) prenant en charge les images.




## Coordonnées de la souris dans une image

4D vous permet de récupérer les coordonnées locales de la souris dans un champ ou une variable image en cas de clic ou de survol, même si un défilement ou un zoom a été appliqué à l'image. Ce mécanisme, proche de celui d'une image map, peut être utilisé par exemple pour gérer les barres de bouton défilables ou bien l'interface de logiciels de cartographie.

Les coordonnées sont retournées dans les [Variables système](https://doc.4d.com/4Dv18/4D/18/System-Variables.300-4505547.en.html) *MouseX* et *MouseY*. Les coordonnées sont exprimées en pixels par rapport à l'angle supérieur gauche de l'image (0,0). Lorsque la souris se trouve en dehors du système de coordonnées de l'image, la valeur -1 est retournée dans *MouseX* et *MouseY*.

Vous pouvez lire la valeur des variables MouseX et MouseY dans le contexte des événements formulaire `Sur clic`, `Sur double clic`, `Sur relâchement bouton`, `Sur début survol` et `Sur survol`.

## Opérateurs sur les images

4D vous permet d'effectuer des **opérations** sur des images 4D, telles que la concaténation, la superposition, etc. Ce point est traité dans la section *Opérateurs sur les images* du *Manuel de Langage de 4D*.

