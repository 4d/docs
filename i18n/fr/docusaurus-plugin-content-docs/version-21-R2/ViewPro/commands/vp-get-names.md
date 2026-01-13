---
id: vp-get-names
title: VP Get names
---

<!-- REF #_method_.VP Get names.Syntax -->

**VP Get names** ( vpAreaName : Text { ; scope : Integer } ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get names.Params -->

| Paramètres | Type       |                             | Description                                                    |                  |
| ---------- | ---------- | --------------------------- | -------------------------------------------------------------- | ---------------- |
| vpAreaName | Text       | ->                          | Nom d'objet formulaire zone 4D View Pro                        |                  |
| scope      | Integer    | ->                          | "Scope" cible (par défaut=feuille courante) |                  |
| Résultat   | Collection | <- | Noms existant dans la zone définie                             | <!-- END REF --> |

## Description

La commande `VP Get names` <!-- REF #_method_.VP Get names.Summary -->retourne une collection de tous les "noms" définis dans la feuille courante ou dans le champ d'application désigné par le paramètre *scope*<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Vous pouvez définir où obtenir les noms dans *scope* en utilisant soit l'index de la feuille (la numération commence à partir de 0), soit les constantes suivantes :

- `vk current sheet`
- `vk workbook`

### Collection retournée

La collection retournée contient un objet par nom. Les propriétés d'objets suivantes peuvent être retournées :

| Propriété                                                                               | Type | Description                |
| --------------------------------------------------------------------------------------- | ---- | -------------------------- |
| result\[ ].name    | Text | nom de cellule ou de plage |
| result\[ ].formula | Text | formula                    |
| result\[ ].comment | Text | Commentaire associé au nom |

Les propriétés disponibles dépendent du type d'élément nommé (cellule nommée, plage nommée ou formule nommée).

## Exemple

```4d
var $list : Collection


$list:=VP Get names("ViewProArea";2) //noms de la 3e feuille
```

## Voir également

[VP ADD FORMULA NAME](vp-add-formula-name.md)<br/>
[VP ADD RANGE NAME](vp-add-range-name.md)<br/>
[VP Get formula by name](vp-get-formula-by-name.md)<br/>
[VP Name](vp-name.md)
