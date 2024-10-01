---
id: vp-get-table-dirty-rows
title: VP Get table dirty rows
---

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R8   | Ajout         |

</details>

<!-- REF #_method_.VP Get table dirty rows.Syntax -->

**VP Get table dirty rows** ( *vpAreaName* : Text ; *tableName* : Text { ; *reset* : Boolean {; *sheet* : Integer }} ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get table dirty rows.Params -->

| Paramètres | Type       |                             | Description                                                                                                     |                  |
| ---------- | ---------- | --------------------------- | --------------------------------------------------------------------------------------------------------------- | ---------------- |
| vpAreaName | Text       | ->                          | Nom d'objet formulaire zone 4D View Pro                                                                         |                  |
| tableName  | Text       | ->                          | Nom de table                                                                                                    |                  |
| reset      | Boolean    | ->                          | True to clear the dirty status from the current table, False to keep it untouched. Default=True |                  |
| sheet      | Integer    | ->                          | Numéro d'indice de la feuille (feuille courante si omis)                                     |                  |
| Résultat   | Collection | <- | Collection d'objets avec tous les éléments modifiés depuis la dernière réinitialisation                         | <!-- END REF --> |

#### Description

La commande `VP Get table dirty rows` <!-- REF #_method_.VP Get table dirty rows.Summary -->retourne une collection d'objets *dirty row*, contenant les éléments qui ont été modifiés depuis la dernière réinitialisation dans la table spécifiée *tableName*<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro.

Dans *tableName*, passez le nom de la table pour laquelle vous souhaitez obtenir les lignes modifiées. Seules les colonnes modifiées liées à un [contexte de données](vp-set-data-context.md) seront prises en compte.

Par défaut, appeler la commande effacera le statut *dirty* de la table courante. Pour garder ce statut intact, passez `False` dans le paramètre *reset*.

Dans *sheet*, passez le numéro de la page cible. Si aucun numéro n'est spécifié ou si vous passez -1, la commande s'applique à la feuille courante.

> La numérotation démarre à 0.

Chaque objet *dirty row* dans la collection retournée contient les propriétés suivantes:

| Propriété    | Type    | Description                        |
| ------------ | ------- | ---------------------------------- |
| item         | object  | Objet modifié de la ligne modifiée |
| originalItem | object  | Objet avant modification           |
| row          | integer | Index de la ligne modifiée         |

Si *tableName* n'est pas trouvé ou s'il ne contient pas de colonne modifiée, la commande retourne une collection vide.

#### Exemple

Vous souhaitez compter le nombre de lignes éditées :

```4d
var $dirty : Collection
$dirty:=VP Get table dirty rows("ViewProArea"; "ContextTable"; False)
VP SET NUM VALUE(VP Cell("ViewProArea"; 0; 0); $dirty.length)
```

#### Voir également

[VP CREATE TABLE](vp-create-table.md)<br/>
[VP Find table](vp-find-table.md)<br/>
[VP SET TABLE COLUMN ATTRIBUTES](vp-set-table-column-attributes.md)<br/>
[VP RESIZE TABLE](vp-resize-table.md)
