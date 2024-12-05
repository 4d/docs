---
id: vp-get-table-column-attributes
title: VP Get column attributes
---

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R7   | Ajout         |

</details>

<!-- REF #_method_.VP Get table column attributes.Syntax -->

**VP Get table column attributes** ( *vpAreaName* : Text ; *tableName* : Text ; *column* : Integer {; *sheet* : Integer } ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get table column attributes.Params -->

| Paramètres | Type    |                             | Description                                                                 |                  |
| ---------- | ------- | --------------------------- | --------------------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | ->                          | Nom d'objet formulaire zone 4D View Pro                                     |                  |
| tableName  | Text    | ->                          | Nom de table                                                                |                  |
| column     | Integer | ->                          | Numéro de colonne de la table                                               |                  |
| sheet      | Integer | ->                          | Numéro d'indice de la feuille (feuille courante si omis) |                  |
| Résultat   | Object  | <- | Numéro d'indice de *column*                                                 | <!-- END REF --> |

#### Description

La commande `VP Get table column attributes` <!-- REF #_method_.VP Get table column attributes.Summary -->retourne les attributs courants de la colonne spécifiée *column* dans la table *tableName*<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro.

Dans *sheet*, passez le numéro de la page cible. Si aucun numéro n'est spécifié ou si vous passez -1, la commande s'applique à la feuille courante.

> La numérotation démarre à 0.

La commande retourne un objet décrivant les attributs courants de la *column*:

| Propriété           | Type    | Description                                                                                                                                     |
| ------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| dataField           | text    | Nom de la propriété de la colonne de la table dans le contexte de données. Not returned if the table is displayed automatically |
| name                | text    | Nom de la colonne de la table.                                                                                                  |
| footerText          | text    | Valeur du pied de colonne.                                                                                                      |
| footerFormula       | text    | Formule de pied de colonne.                                                                                                     |
| filterButtonVisible | boolean | True if the table column's filter button is displayed, False otherwise.                                                         |

Si *tableName* n'est pas trouvé ou si l'index *column* est supérieur au nombre de colonnes, la commande retourne **null**.

#### Exemple

```4d
var $attributes : Object
$attributes:=VP Get table column attributes("ViewProArea"; $tableName; 1)
If ($attributes.dataField#"")
     ...
End if
```

#### Voir également

[VP CREATE TABLE](vp-create-table.md)<br/>
[VP Find table](vp-find-table.md)<br/>
[VP SET TABLE COLUMN ATTRIBUTES](vp-set-table-column-attributes.md)<br/>
[VP RESIZE TABLE](vp-resize-table.md)
