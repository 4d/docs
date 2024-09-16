---
id: vp-get-table-range
title: VP Get table range
---

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R7   | Ajout         |

</details>

<!-- REF #_method_.VP Get table range.Syntax -->

**VP Get table range** ( _vpAreaName_ : Text ; _tableName_ : Text {; _onlyData_ : Integer {; _sheet_ : Integer }} ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get table range.Params -->

| Paramètres | Type    |                             | Description                                                                    |                  |
| ---------- | ------- | --------------------------- | ------------------------------------------------------------------------------ | ---------------- |
| vpAreaName | Text    | ->                          | Nom d'objet formulaire zone 4D View Pro                                        |                  |
| tableName  | Text    | ->                          | Nom de table                                                                   |                  |
| onlyData   | Integer | ->                          | `vk table full range` (par défaut) ou `vk table data range` |                  |
| sheet      | Integer | ->                          | Numéro d'indice de la feuille (feuille courante si omis)    |                  |
| Résultat   | Object  | <- | Plage contenant la table                                                       | <!-- END REF --> |

#### Description

La commande `VP Get table range` <!-- REF #_method_.VP Get table range.Summary -->retourne la plage de _tableName_<!-- END REF -->.

Dans _vpAreaName_, passez le nom de la zone 4D View Pro.

Dans le paramètre _onlyData_, vous pouvez passer l'une des constantes suivantes pour indiquer si vous souhaitez obtenir uniquement les données :

| Constante             | Valeur | Description                                                                                          |
| --------------------- | ------ | ---------------------------------------------------------------------------------------------------- |
| `vk table full range` | 0      | Get the cell range for the table area with footer and header (default if omitted) |
| `vk table data range` | 1      | Get the cell range for the table data area only                                                      |

Dans _sheet_, passez le numéro de la page cible. Si aucun numéro n'est spécifié, la commande s'applique à la feuille en cours.

> La numérotation démarre à 0.

Si _tableName_ n'est pas trouvé, la commande retourne **null**.

#### Voir également

[VP RESIZE TABLE](vp-resize-table.md)<br/>
[VP Find table](vp-find-table.md)
