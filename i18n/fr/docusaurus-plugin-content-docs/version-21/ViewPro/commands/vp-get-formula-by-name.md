---
id: vp-get-formula-by-name
title: VP Get formula by name
---

<!-- REF #_method_.VP Get formula by name.Syntax -->

**VP Get formula by name** ( *vpAreaName* : Text ; *name* : Text { ; *scope* : Integer } ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get formula by name.Params -->

| Paramètres | Type    |                             | Description                                                    |                  |
| ---------- | ------- | --------------------------- | -------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | ->                          | Nom d'objet formulaire zone 4D View Pro                        |                  |
| name       | Text    | ->                          | Nom de la plage nommée                                         |                  |
| scope      | Integer | ->                          | "Scope" cible (par défaut=feuille courante) |                  |
| Résultat   | Object  | <- | Définition de la formule nommée ou de la plage nommée          | <!-- END REF --> |

## Description

La commande `VP Get formula by name` <!-- REF #_method_.VP Get formula by name.Summary --> retourne la formule et le commentaire correspondant à la plage nommée ou à la formule nommée passée dans le paramètre *name*, ou **null** si elle n'existe pas dans l'étendue définie<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Passez la plage nommée ou la formule nommée que vous voulez obtenir avec *name*. A noter que les plages nommées sont retournées sous forme de formules contenant des références absolues de cellules.

Vous pouvez définir où obtenir la formule dans *scope* en utilisant soit l'index de la feuille ( la numération commence à 0), soit les constantes suivantes :

- `vk current sheet`
- `vk workbook`

### Objet retourné

L'objet retourné contient les propriétés suivantes :

| Propriété | Type | Description                                                                                                                                                                               |
| --------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| formula   | Text | Texte de la formule correspondant à la formule nommée ou à la plage nommée. Pour les plages nommées, la formule est une séquence de coordonnées absolues. |
| comment   | Text | Commentaire correspondant à la formule nommée ou à la plage nommée                                                                                                                        |

## Exemple

```4d
$range:=VP Cell("ViewProArea";0;0)
VP ADD RANGE NAME("Total1";$range)
 
$formula:=VP Get formula by name("ViewProArea";"Total1")
  //$formula.formula=Sheet1!$A$1
 
$formula:=VP Get formula by name("ViewProArea";"Total")
  //$formula=null (si non existant)
```

## Voir également

[VP ADD FORMULA NAME](vp-add-formula-name.md)<br/>
[VP Get names](vp-get-names.md)