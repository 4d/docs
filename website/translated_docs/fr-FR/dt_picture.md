---
id: picture
title: Images
---

Un champ, une variable ou expression de type image peut constituer une image Windows ou Macintosh. En règle générale, n'importe quelle image peut être mise sur le conteneur de données ou lue à partir du disque, à l'aide des commandes 4D ou des commandes de plug-in.

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

- A noter que pour que l'opérateur | puisse être utilisé, Image1 et Image2 doivent être strictement de la même dimension. Si les deux images sont de taille différente, l’opération Image1 | Image2 produit une image vide.
- La commande `COMBINER IMAGES` permetd'effectuer des superpositions en conservant les caractéristiques de chaque image source dans l'image résultante.
- Les opérateurs sur les images retournent des images vectorielles si les deux images sont elles aussi vectorielles (rappelez-vous qu'une image imprimée avec le format d'affichage Sur fond est imprimée en tant que bitmap).
- Des opération supplémentaires peuvent être réalisées sur des images à l'aide de la commande `TRANSFORMER IMAGES`.
- Il n'existe pas d'opérateurs de comparaison pour les images; en revanche 4D propose d'utiliser la commande `Images egales` pour comparer deux images. 
- 4D vous permet de récupérer les coordonnées locales de la souris dans un champ ou une variable image en cas de clic ou de survol, même si un défilement ou un zoom a été appliqué à l'image. Ce mécanisme, proche de celui d'une image map, peut être utilisé par exemple pour gérer les barres de bouton défilables ou bien l'interface de logiciels de cartographie. Les coordonnées sont retournées dans les **Variables système** *MouseX* et *MouseY*. Les coordonnées sont exprimées en pixels par rapport à l'angle supérieur gauche de l'image (0,0). Lorsque la souris se trouve en dehors du système de coordonnées de l'image, la valeur -1 est retournée dans *MouseX* et *MouseY*. Vous pouvez lire la valeur des variables MouseX et MouseY dans le contexte des événements formulaire **Sur clic**, **Sur double clic**, **Sur relâchement bouton**, **Sur début survol** et **Sur survol**.

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