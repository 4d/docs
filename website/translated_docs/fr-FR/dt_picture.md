---
id: picture
title: Images
---

Un champ, une variable ou expression de type image peut constituer une image Windows ou Macintosh. In general, this includes any picture that can be put on the pasteboard or read from the disk using 4D or Plug-In commands.

## Formats natifs pris en charge

4D intègre une gestion native des images. Cela signifie que les images sont affichées et stockées dans leur format d’origine, sans interprétation dans 4D. Les spécificités des différents formats (ombrages, zones transparentes...) sont conservées en cas de copier-coller et affichées sans altération. Cette prise en charge native est valide pour toutes les images stockées dans 4D : images de la bibliothèque, images collées dans les formulaires en mode Développement, images collées dans les champs ou variables en mode Application, etc.

4D utilise des API natives pour encoder (écrire) et décoder (lire) les champs et les variables des images sous Windows et macOS. Ces implémentations donnent accès à de nombreux formats natifs, dont le format RAW, couramment utilisé par les appareils photo numériques.

- Sous Windows, 4D utilise WIC (Windows Imaging Component)
- Sous macOS, 4D utilise ImageIO. 

Les formats d'image les plus courants sont pris en charge par les deux plates-formes : jpeg, gif, png, tiff, bmp, etc. Sous macOS, le format pdf est également disponible pour l'encodage et le décodage.

La liste complète des formats pris en charge varie en fonction du système d’exploitation et des codecs personnalisés installés sur les postes. Pour connaître les codecs disponibles, vous devez utiliser la commande `LISTE CODECS IMAGES`. Notez que les listes de codecs disponibles pour la lecture et pour l'écriture peuvent différer, étant donné que les codecs d'encodage peuvent nécessiter des licences spécifiques.

**Note :** WIC et ImageIO permettent l’utilisation de métadonnées dans les images. Deux commandes, `FIXER METADONNEES IMAGE` et `LIRE METADONNEES IMAGE`, vous permettent d'en bénéficier dans vos développements.

### Identifiants de codecs d'images

Les formats d'images reconnus par 4D sont retournés par la commande `LISTE CODECS IMAGES` sous forme d'identifiants de codecs d'images. Ces identifiants peuvent être :

- une extension (par exemple “.gif”)
- Un type Mime (par exemple “image/jpg”)

La forme utilisée pour chaque format dépend du mode de déclaration du codec au niveau du système d’exploitation. La plupart des commandes de gestion d'images de 4D attendent un identifiant de codec en paramètre. Il est donc impératif d'utiliser l'identifiant système retourné par la commande `LISTE CODECS IMAGES`.

### Format d'image non disponible

Une icône spécifique est affichée pour les images stockées dans un format non disponible sur le poste. L'extension du format manquant est inscrite en bas de l'icône. L'icône est automatiquement utilisée partout où l'image doit être affichée :

![](assets/en/Concepts/missingpict.en.png)

Cette icône indique que l'image ne peut être ni affichée ni manipulée localement -- mais elle peut être stockée sans altération pour être affichée sur une autre machine. C'est le cas, par exemple, pour les images PDF sous Windows ou les images au format PICT.

## Opérateurs sur les images

| Opération                 | Syntaxe         | Retourne | Action                                                                                                                                                                   |
| ------------------------- | --------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Concaténation horizontale | Image1 + Image2 | Image    | Place Image2 à la droite d'Image1                                                                                                                                        |
| Concaténation verticale   | Image1 / Image2 | Image    | Place Image2 au-dessous d'Image1                                                                                                                                         |
| Superposition exclusive   | Image1 & Image2 | Image    | Superpose Image2 à Image1 (Image2 est au premier plan). Donne le même résultat que `COMBINER IMAGES(pict3;pict1;Superposition;pict2)`                                    |
| Superposition inclusive   | Image1 | Image2 | Image    | Superpose Image2 à Image1 et retourne le masque résultant si les deux images sont de même taille. Donne le même résultat que `$equal:=Equal pictures(Pict1;Pict2;Pict3)` | Déplacement horizontal |Image + Nombre |Image |Déplace Image horizontalement d'un nombre de pixels égal à Nombre | Déplacement vertical |Image / Nombre |Image |Déplace Image verticalement d'un nombre de pixels égal à Nombre| Redimensionnement |Image * Nombre |Image |Redimensionne Image au pourcentage Nombre| Extension horizontale |Image *+ Nombre |Image |Redimensionne Image horizontalement au pourcentage Nombre| Extension verticale |Image */ Nombre |Image |Redimensionne Image verticalement au pourcentage Nombre| 

**Notes :**

- In order to use the | operator, Pict1 and Pict2 must have exactly the same dimension. If both pictures are a different size, the operation Pict1 | Pict2 produces a blank picture.
- The `COMBINE PICTURES` command can be used to superimpose pictures while keeping the characteristics of each source picture in the resulting picture.
- The picture operators return vectorial pictures if the two source pictures are vectorial. Remember, however, that pictures printed by the display format On Background are printed bitmapped.
- Additional operations can be performed on pictures using the `TRANSFORM PICTURE` command.
- There is no comparison operators on pictures, however 4D proposes the `Equal picture` command to compare two pictures. 
- 4D lets you retrieve the local coordinates of the mouse in a picture field or variable in case of a click or a hovering, even if a scroll or zoom has been applied to the picture. This mechanism, similar to that of a picture map, can be used, for example, to handle scrollable button bars or the interface of cartography software. The coordinates are returned in the *MouseX* and *MouseY* **System Variables**. The coordinates are expressed in pixels with respect to the top left corner of the picture (0,0). If the mouse is outside of the picture coordinates system, -1 is returned in *MouseX* and *MouseY*. You can get the value of these variables as part of the **On Clicked**, **On Double Clicked**, **On Mouse up**, **On Mouse Enter**, or **On Mouse Move** form events.

### Exemples

Toutes les images qui sont affichées utilisent le format d'affichage **Image sur fond**.

Voici l'image cercle : ![](assets/en/Concepts/Concepts/Circle.en.png)

Voici l'image rectangle : ![](assets/en/Concepts/Concepts/rectangle.en.png)

Dans les exemples ci-dessous, chaque expression est suivie de sa représentation graphique.

Concaténation horizontale

```code4d
 cercle+rectangle // Placer le rectangle à droite du cercle
rectangle+cercle // Placer le cercle à droite du rectangle
```

![](assets/en/Concepts/concatHor.en.png) ![](assets/en/Concepts/concatHor2.en.png)

Concaténation verticale

```code4d
 cercle/rectangle // Placer le rectangle sous cercle
rectangle/cercle // Placer le cercle sous le rectangle
```

![](assets/en/Concepts/concatVer.en.png) ![](assets/en/Concepts/concatVer2.en.png)

Superposition exclusive

```code4d
Pict3:=Pict1 & Pict2 // Superposer Pict2 à Pict1
```

![](assets/en/Concepts/superimpoExc.fr.png)

Superposition inclusive

```code4d
Pict3:=Pict1|Pict2 // Récupérer le masque résultant de la superposition de deux images de même taille
```

![](assets/en/Concepts/superimpoInc.fr.png)

Déplacement horizontal

```code4d
rectangle+50 // Déplacer le rectangle 50 pixels vers la droite
rectangle-50 // Déplacer le rectangle 50 pixels vers la gauche
```

![](assets/en/Concepts/hormove.en.png)

Déplacement vertical

```code4d
rectangle/50 // Déplacer le rectangle 50 pixels vers le bas
rectangle/-20 // Déplacer le rectangle 20 pixels vers le haut
```

![](assets/en/Concepts/vertmove.en.png)![](assets/en/Concepts/vertmove2.en.png)

Redimensionnement

```code4d
rectangle*1.5 // Augmenter la taille du rectangle de 50%
 rectangle*0.5 // Réduire la taille du rectangle de 50%
```

![](assets/en/Concepts/resize.en.png)![](assets/en/Concepts/resisze2.en.png)

Extension horizontale

```code4d
cercle*+3 `Multiplier par 3 la largeur du cercle
 cercle*+0,25 ` La largeur du cercle est réduite à un quart de sa taille originale
```

![](assets/en/Concepts/Horscaling.en.png)![](assets/en/Concepts/Horscaling2.en.png)

Extension verticale

```code4d
cercle*/2 // Doubler la hauteur du cercle
 cercle*/0.25 // La hauteur du cercle est réduite à un quart de sa taille originale
```

![](assets/en/Concepts/vertscaling.en.png)![](assets/en/Concepts/veticalscaling2.en.png)