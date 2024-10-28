---
id: vp-get-show-print-lines
title: VP Get show print lines
---

<!-- REF #_method_.VP Get show print lines.Syntax -->

**VP Get show print lines** ( *vpAreaName* : Text {; *sheet* : Integer } ) : Boolean<!-- END REF -->

<!-- REF #_method_.VP Get show print lines.Params -->

| Paramètres | Type    |                             | Description                                                |                  |
| ---------- | ------- | --------------------------- | ---------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | ->                          | Nom d'objet formulaire zone 4D View Pro                    |                  |
| sheet      | Integer | <- | Numéro d'indice de la feuille                              |                  |
| Résultat   | Boolean | <- | True si les lignes d'impression sont visibles, sinon False | <!-- END REF --> |

#### Description

La commande `VP Get show print lines`<!-- REF #_method_.VP Get show print lines.Summary -->retourne `True` si les lignes d'aperçu avant impression sont visibles et `False` si elles sont masquées.<!-- END REF -->

Dans *vpAreaName*, passez le nom de la zone 4D View Pro.

Dans *sheet*, passez le numéro de la page cible. Si *sheet* est omis, la commande s'applique à la feuille courante.

> La numérotation démarre à 0.

#### Exemple

Le code suivant permet de vérifier si les lignes d'aperçu sont visibles ou masquées dans le document :

```4d
 var $result : Boolean
 $result:=VP Get show print lines("ViewProArea";1)
```

#### Voir également

[VP SET SHOW PRINT LINES](vp-set-show-print-lines.md)
