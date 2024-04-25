---
id: vp-convert-to-picture
title: VP Convert to picture
---

<!-- REF #_method_.VP Convert to picture.Syntax -->

**VP Convert to picture** ( _vpObject_ : Object {; _rangeObj_ : Object} ) : Picture<!-- END REF -->

<!-- REF #_method_.VP Convert to picture.Params -->

| Paramètres | Type   |    | Description                                     |                  |
| ---------- | ------ | -- | ----------------------------------------------- | ---------------- |
| vpObject   | Object | -> | Objet 4D View Pro contenant la zone à convertir |                  |
| rangeObj   | Object | -> | Objet plage                                     |                  |
| Résultat   | Object | <- | Image SVG de la zone                            | <!-- END REF --> |

#### Description

The `VP Convert to picture` command <!-- REF #_method_.VP Convert to picture.Summary -->converts the _vpObject_ 4D View Pro object (or the _rangeObj_ range within _vpObject_) to a SVG picture<!-- END REF -->.

Cette commande est utile, par exemple :

- pour intégrer un document 4D View Pro dans un autre document, tel qu'un document 4D Write Pro
- pour imprimer un document 4D View Pro sans le charger dans une zone 4D View Pro.

In _vpObject_, pass the 4D View Pro object that you want to convert. This object must have been previously parsed using [VP Export to object](vp-export-to-object.md) or saved using [VP EXPORT DOCUMENT](vp-export-document.md).

> SVG conversion process requires that expressions and formats (cf. [Cell Format](../configuring.md#cell-format)) included in the 4D View Pro area be evaluated at least once, so that they can be correctly exported. Si vous convertissez un document qui n'a pas été évalué au préalable, les expressions ou les formats peuvent être rendus de manière inattendue.

In _rangeObj_, pass a range of cells to convert. Par défaut, si ce paramètre est omis, tout le contenu du document est converti.

Les contenus de document sont convertis en tenant compte de leurs attributs d'affichage, y compris les formats (voir la note ci-dessus), la visibilité des en-têtes, des colonnes et des lignes. La conversion des éléments suivants est prise en charge :

- Texte : style / police / taille / alignement / rotation / format
- Arrière-plan de cellule : couleur / image
- Bordure de cellule : épaisseur / couleur / style
- Fusion de cellules
- Images
- Hauteur de lignes
- Largeur de colonnes
- Visibilité : colonnes / lignes cachées.

> Gridline visibility depends on document attribute defined with [VP SET PRINT INFO](vp-set-print-info.md).

#### Résultat

La commande retourne une image au format SVG.

#### Exemple

Vous souhaitez convertir une zone 4D View Pro en SVG, prévisualiser le résultat et l'envoyer dans une variable image :

```4d
C_OBJECT($vpAreaObj)
C_PICTURE($vPict)
$vpAreaObj:=VP Export to object("ViewProArea")
$vPict:=VP Convert to picture($vpAreaObj) //exporter toute la zone
```

#### Voir également

[VP EXPORT DOCUMENT](vp-export-document.md)<br/>
[VP Export to object](vp-export-to-object.md)<br/>
[VP SET PRINT INFO](vp-set-print-info.md)
