---
id: version-18 R2 BETA-pictures
title: Images
original_id: pictures
---

## Formats natifs pris en charge

4D intègre une gestion native des images. Cela signifie que les images sont affichées et stockées dans leur format d’origine, sans interprétation dans 4D. Les spécificités des différents formats (ombrages, zones transparentes...) sont conservées en cas de copier-coller et affichées sans altération. Cette prise en charge native est valide pour toutes les images stockées dans 4D : images de la bibliothèque, images collées dans les formulaires en mode Développement, images collées dans les champs ou variables en mode Application, etc.

4D utilise des API natives pour encoder (écrire) et décoder (lire) les champs et les variables des images sous Windows et macOS. Ces implémentations donnent accès à de nombreux formats natifs, dont le format RAW, couramment utilisé par les appareils photo numériques.

* Sous Windows, 4D utilise WIC (Windows Imaging Component). 
* sous macOS, 4D utilise ImageIO.

Les formats d'image les plus courants sont pris en charge par les deux plates-formes : jpeg, gif, png, tiff, bmp, etc. Sous macOS, le format pdf est également disponible pour l'encodage et le décodage.

La liste complète des formats pris en charge varie en fonction du système d’exploitation et des codecs personnalisés installés sur les postes. Pour connaître les codecs disponibles, vous devez utiliser la commande PICTURE CODEC LIST. Notez que les listes de codecs disponibles pour la lecture et pour l'écriture peuvent différer, étant donné que les codecs d'encodage peuvent nécessiter des licences spécifiques.

> WIC et ImageIO permettent l’utilisation de métadonnées dans les images. Deux commandes, SET PICTURE METADATA et GET PICTURE METADATA, vous permettent d'en bénéficier dans vos développements.

### Identifiants de codecs d'images

Les formats d'images reconnus par 4D sont retournés par la commande PICTURE CODEC LIST sous forme d'identifiants de codecs d'images. Ces identifiants peuvent être :

* une extension (par exemple “.gif”)
* Un type Mime (par exemple “image/jpg”)

La forme utilisée pour chaque format dépend du mode de déclaration du codec au niveau du système d’exploitation.

La plupart des commandes de gestion d'images de 4D attendent un identifiant de codec en paramètre. Il est donc impératif d'utiliser l'identifiant système retourné par la commande PICTURE CODEC LIST.

### Format d'image non disponible

Une icône spécifique est affichée pour les images stockées dans un format non disponible sur le poste. L'extension du format manquant est inscrite en bas de l'icône :

![](assets/en/Project/picNoFormat.png)

L'icône est automatiquement utilisée partout où l'image doit être affichée :

![](assets/en/Project/picNoFormat2.png)

Cette icône indique que l'image ne peut être ni affichée ni manipulée localement -- mais elle peut être stockée sans altération pour être affichée sur une autre machine. C'est le cas, par exemple, pour les images PDF sous Windows ou les images au format PICT.

## Résolution d'image

4D supports both standard and high resolution displays on both macOS and Windows platforms.

High resolution displays have a higher pixel density than traditional standard displays. For pictures to render correctly on high resolution displays, the number of pixels in the picture must be multiplied by the *scale factor* (*i.e.*, two times larger, three times larger, etc.).

The following table demonstrates the difference between display resolution and picture pixel density.

| Display Type        | Facteur d'échelle                              | Exemple                                                          |
| ------------------- | ---------------------------------------------- | ---------------------------------------------------------------- |
| Résolution standard | 1:1 pixel density.                             | **1x**  
![](assets/en/Project/pictureScale1.png)  
*circle.png* |
| Haute résolution    | Pixel density increased by a factor of 2 or 3. |                                                                  |


<table>
  <th>
    2x
  </th>
  
  <th>
    3x
  </th>
  
  <tr>
    <td>
      ![](assets/en/Project/pictureScale2.png)<br />*circle@2x.png*
    </td>
    
    <td>
      ![](assets/en/Project/pictureScale3.png)<br />*circle@3x.png*
    </td>
  </tr>
</table>

When using high resolution pictures, the scale factor is specified by adding "@nx" in the picture's name (*n* designates the scale factor). In the table above, you can see that the scale factor is indicated in the names of the high resolution pictures, *circle@2x.png* and *circle@3x.png*.

> 4D automatically prioritizes pictures with the highest resolution. <br />  
> **Example**: When using two screens (one high resolution display, one standard display) and you move a form from one screen to another, 4D automatically renders the highest possible resolution of the picture. Even if a command or property specifies *circle.png*, *circle@3x.png* will be used (if it exists).

This resolution behavior is supported by all [4D form objects](../FormObjects/formObjectsOverview.html) which support images.

## Coordonnées de la souris dans une image

4D vous permet de récupérer les coordonnées locales de la souris dans un champ ou une variable image en cas de clic ou de survol, même si un défilement ou un zoom a été appliqué à l'image. Ce mécanisme, proche de celui d'une image map, peut être utilisé par exemple pour gérer les barres de bouton défilables ou bien l'interface de logiciels de cartographie.

The coordinates are returned in the MouseX and MouseY System Variables. Les coordonnées sont exprimées en pixels par rapport à l'angle supérieur gauche de l'image (0,0). If the mouse is outside of the picture coordinates system, -1 is returned in MouseX and MouseY.

You can get the value of these variables as part of the On Clicked, On Double Clicked, On Mouse up, On Mouse Enter, or On Mouse Move form events.

## Opérateurs sur les images

4D vous permet d'effectuer des opérations sur des images 4D, telles que la concaténation, la superposition, etc. Ce point est traité dans la section Opérateurs sur les images.