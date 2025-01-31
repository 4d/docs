---
id: vp-get-sheet-options
title: VP Get sheet options
---

<!-- REF #_method_.VP Get sheet options.Syntax -->

**VP Get sheet options** ( *vpAreaName* : Text {; *sheet* : Integer } ) ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get sheet options.Params -->

| Paramètres | Type    |                             | Description                                                                 |                  |
| ---------- | ------- | --------------------------- | --------------------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | ->                          | Nom d'objet formulaire zone 4D View Pro                                     |                  |
| sheet      | Integer | ->                          | Numéro d'indice de la feuille (feuille courante si omis) |                  |
| Résultat   | Object  | <- | Objet options de la feuille                                                 | <!-- END REF --> |

#### Description

La commande `VP Get sheet options` <!-- REF #_method_.VP Obtenir les options de la feuille.Summary -->retourne un objet contenant les options de la feuille courante de la zone *vpAreaName* <!-- END REF -->.

Passez le nom de la zone 4D View Pro dans *vpAreaName*. Si vous passez un nom inexistant, une erreur est retournée.

Dans le paramètre optionnel *sheet*, vous pouvez désigner une feuille spécifique (la numérotation commence à zéro). Si le paramètre est omis ou si vous passez `vk current sheet`, la feuille courante est utilisée.

#### Objet retourné

La commande retourne un objet contenant les valeurs courantes pour toutes les options de feuille disponibles. La valeur d'une option peut avoir été modifiée par l'utilisateur ou par la méthode [VP SET SHEET OPTIONS](vp-set-sheet-options.md).

Pour consulter la liste complète des options, voir [Options feuille](../configuring.md#sheet-options).

#### Exemple

```4d
$options:=VP Get sheet options("ViewProArea")
 If($options.colHeaderVisible) //les en-têtes des colonnes sont visibles
    ... //faire quelque chose
 End if
```

#### Voir également

[4D VIEW PRO SHEET OPTIONS](../configuring.md#sheet-options)<br/>
[VP SET SHEET OPTIONS](vp-set-sheet-options.md)
