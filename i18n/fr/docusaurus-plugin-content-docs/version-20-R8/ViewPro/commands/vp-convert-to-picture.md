---
id: vp-convert-to-picture
title: VP Convert to picture
---

<!-- REF #_method_.VP Convert to picture.Syntax -->

**VP Convert to picture** ( *vpObject* : Object {; *rangeObj* : Object} ) : Picture<!-- END REF -->

<!-- REF #_method_.VP Convert to picture.Params -->

| Paramètres | Type    |                             | Description                                     |                  |
| ---------- | ------- | --------------------------- | ----------------------------------------------- | ---------------- |
| vpObject   | Object  | ->                          | Objet 4D View Pro contenant la zone à convertir |                  |
| rangeObj   | Object  | ->                          | Objet plage                                     |                  |
| Résultat   | Picture | <- | Image SVG de la zone                            | <!-- END REF --> |

#### Description

La commande `VP Convert to picture` <!-- REF #_method_.VP Convert to picture.Summary -->convertit l'objet 4D View Pro *vpObject* (ou la plage *rangeObj* dans *vpObject*) en une image SVG<!-- END REF -->.

Cette commande est utile, par exemple :

- pour intégrer un document 4D View Pro dans un autre document, tel qu'un document 4D Write Pro
- pour imprimer un document 4D View Pro sans le charger dans une zone 4D View Pro.

Dans *vpObject*, passez l'objet 4D View Pro que vous souhaitez convertir. Cet objet doit avoir été préalablement analysé à l'aide de [VP Export to object](vp-export-to-object.md) ou enregistré avec [VP EXPORT DOCUMENT](vp-export-document.md).

> Le processus de conversion SVG exige que les expressions et les formats (cf. [Format des cellules](../configuring.md#cell-format)) inclus dans la zone 4D View Pro soient évalués au moins une fois, afin qu'ils puissent être correctement exportés. Si vous convertissez un document qui n'a pas été évalué au préalable, les expressions ou les formats peuvent être rendus de manière inattendue.

Dans *rangeObj*, passez une plage de cellules à convertir. Par défaut, si ce paramètre est omis, tout le contenu du document est converti.

Les contenus de document sont convertis en tenant compte de leurs attributs d'affichage, y compris les formats (voir la note ci-dessus), la visibilité des en-têtes, des colonnes et des lignes. La conversion des éléments suivants est prise en charge :

- Texte : style / police / taille / alignement / rotation / format
- Arrière-plan de cellule : couleur / image
- Bordure de cellule : épaisseur / couleur / style
- Fusion de cellules
- Images
- Hauteur de lignes
- Largeur de colonnes
- Visibilité : colonnes / lignes cachées.

> La visibilité du quadrillage dépend de l'attribut du document défini avec [VP SET PRINT INFO](vp-set-print-info.md).

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
