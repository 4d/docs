---
id: propertiesPicture
title: Picture
---

## Chemin d'accès

Chemin d'une image source statique pour un [bouton image](pictureButton_overview.md), [un menu pop-up ](picturePopupMenu_overview.md) ou une [image ou une image statique](staticPicture.md). Vous devez utiliser la syntaxe POSIX.

Les emplacements suivants peuvent être utilisés pour le chemin d'images statiques :

- in the **Resources** folder of the project. Appropriate when you want to share static pictures between several forms in the project. Dans ce cas, le chemin d'accès se trouve dans "/RESOURCES/<picture path\>".
- dans un dossier d'images (nommé **Images** par exemple) dans le dossier du formulaire. Convient lorsque les images statiques sont utilisées uniquement dans le formulaire et/ou lorsque vous souhaitez pouvoir déplacer ou dupliquer le formulaire entier dans un ou plusieurs projets. Dans ce cas, le chemin d'accès est "<picture path\>" et est déterminé à la racine du dossier du formulaire.
- dans une variable image 4D. L'image doit être chargée en mémoire lors de l'exécution du formulaire. In this case, the Pathname is "var:<variableName\>".

#### Grammaire JSON

|   Nom   | Type de données | Valeurs possibles                                                                           |
|:-------:|:---------------:| ------------------------------------------------------------------------------------------- |
| picture |      text       | Relative or filesystem path in POSIX syntax, or "var:<variableName\>" for picture variable |

#### Objets pris en charge

[Bouton image](pictureButton_overview.md) - [Pop-up Menu image](picturePopupMenu_overview.md) - [Image statique](staticPicture.md)

---

## Affichage

### Image non tronquée

`Grammaire JSON : "scaled"`

Le format **Non tronquée** permet à 4D de redimensionner l'image pour qu'elle corresponde aux dimensions de la zone.

![](../assets/en/FormObjects/property_pictureFormat_ScaledToFit.png)

### Mosaïque

`Grammaire JSON : "tiled"`

Lorsque la zone qui contient une image avec le format **Mosaïque** est agrandie, l'image n'est pas déformée mais est répliquée autant de fois que nécessaire pour remplir entièrement la zone.

![](../assets/en/FormObjects/property_pictureFormat_Replicated.png)

Si le champ est réduit à une taille plus petite que celle de l'image d'origine, l'image est tronquée (non centrée).

### Centre / Tronquée (non centrée)

`Grammaire JSON : "truncatedCenter" / "truncatedTopLeft"`

Le format **Centre** permet à 4D de centrer l'image dans la zone et de rogner toute partie qui ne rentre pas dans la zone. 4D rogne de manière égale à partir de chaque bord et du haut et du bas.

Avec le format **Image tronquée (non centrée)**, 4D place le coin supérieur gauche de l'image dans le coin supérieur gauche de la zone et rogne toute partie qui ne rentre pas dans la zone. 4D rogne à partie de la droite et du bas.
> Lorsque le format de l'image est **tronquée (non centrée)**, il est possible d'ajouter des barres de défilement à la zone de saisie.

![](../assets/en/FormObjects/property_pictureFormat_Truncated.png)

#### Grammaire JSON

| Nom           | Type de données | Valeurs possibles                                        |
| ------------- | --------------- | -------------------------------------------------------- |
| pictureFormat | string          | "scaled", "tiled", "truncatedCenter", "truncatedTopLeft" |

#### Objets pris en charge

[Image statique](staticPicture.md)
