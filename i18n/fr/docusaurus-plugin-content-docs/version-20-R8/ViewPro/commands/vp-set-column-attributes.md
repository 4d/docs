---
id: vp-set-column-attributes
title: VP SET COLUMN ATTRIBUTES
---

<!-- REF #_method_.VP SET COLUMN ATTRIBUTES.Syntax -->

**VP SET COLUMN ATTRIBUTES** ( *rangeObj* : Object  ; *propertyObj* : Object) <!-- END REF -->

<!-- REF #_method_.VP SET COLUMN ATTRIBUTES.Params -->

| Paramètres  | Type   |    | Description                                |                  |
| ----------- | ------ | -- | ------------------------------------------ | ---------------- |
| rangeObj    | Object | -> | Objet plage                                |                  |
| propertyObj | Object | -> | Objet contenant des propriétés de colonnes | <!-- END REF --> |

#### Description

The `VP SET COLUMN ATTRIBUTES` command <!-- REF #_method_.VP SET COLUMN ATTRIBUTES.Summary --> applies the attributes defined in the *propertyObj* to the columns in the *rangeObj*<!-- END REF -->.

In *rangeObj*, pass an object containing a range. Si la plage contient des colonnes et des lignes, les attributs s'appliquent uniquement aux colonnes.

The *propertyObj* parameter lets you specify the attributes to apply to the columns in the *rangeObj*. Ces attributs sont :

| Propriété | Type    | Description                                                                         |
| --------- | ------- | ----------------------------------------------------------------------------------- |
| width     | number  | Largeur de colonne exprimée en pixels                                               |
| pageBreak | boolean | Vrai pour insérer un saut de page avant la première colonne de la plage, sinon faux |
| visible   | boolean | Vrai si la colonne est visible, sinon faux                                          |
| resizable | boolean | Vrai si la colonne peut être redimensionnée, sinon faux                             |
| header    | text    | Texte de l'en-tête de la colonne                                                    |

#### Exemple

Pour modifier la taille de la deuxième colonne et définir un en-tête, le code suivant :

```4d
C_OBJECT($column;$properties)
 
$column:=VP Column("ViewProArea";1) //column B
$properties:=New object("width";100;"header";"Hello World")
 
VP SET COLUMN ATTRIBUTES($column;$properties)
```

![](../../assets/en/ViewPro/cmd_vpSetColumnAttributes.PNG)

#### Voir également

[VP Column](vp-column.md)<br/>
[VP Get column attributes](vp-get-column-attributes.md)<br/>
[VP Get row attributes](vp-get-row-attributes.md)<br/>
[VP SET ROW ATTRIBUTES](vp-set-row-attributes.md)
