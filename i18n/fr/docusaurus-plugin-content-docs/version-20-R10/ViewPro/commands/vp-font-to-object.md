---
id: vp-font-to-object
title: VP Font to object
---

<!-- REF #_method_.VP Font to object.Syntax -->

**VP Font to object** (  *font* : Text ) : Object<!-- END REF -->

<!-- REF #_method_.VP Font to object.Params -->

| Paramètres | Type   |                             | Description                                                     |
| ---------- | ------ | --------------------------- | --------------------------------------------------------------- |
| font       | Text   | ->                          | Chaîne raccourcie pour la police (shorthand) |
| Résultat   | Object | <- | Objet police                                                    |

<!-- END REF -->

## Description

La commande utilitaire `VP Font to object` <!-- REF #_method_.VP Font to object.Summary -->retourne un objet à partir d'une chaîne de raccourci de police<!-- END REF -->. .

Dans le paramètre *font*, passez une chaîne de caractères abrégée pour spécifier les différentes propriétés d'une police (par exemple, "12 pt Arial"). Vous pouvez en savoir plus sur les chaînes de caractères [dans cette page](https://www.w3schools.com/cssref/pr_font_font.asp) par exemple.

L'objet retourné contient les attributs de police définis comme propriétés. Pour plus d'informations sur les propriétés disponibles, voir la commande [VP Object to font](vp-object-to-font.md).

## Exemple 1

Le code suivant :

```4d
$font:=VP Font to object("16pt arial")
```

retournera l'objet $font suivant :

```4d
{

family:arial
size:16pt
}
```

## Exemple 2

Voir l'exemple pour [`VP Object to font`](vp-object-to-font.md).

## Voir également

[4D View Pro Style Objects and Style Sheets](../configuring.md#style-objects--style-sheets)<br/>
[VP Object to font](vp-object-to-font.md)<br/>
[VP SET CELL STYLE](vp-set-cell-style.md)<br/>
[VP SET DEFAULT STYLE](vp-set-default-style.md)
