---
id: onAfterEdit
title: On After Edit
---

| Code | Peut être appelé par                                                                                                                                                                                                                                                                                                                                                                                   | Définition                                                            |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------- |
| 45   | [Zone 4D View Pro](FormObjects/viewProArea_overview) - [Zone 4D Write Pro](FormObjects/writeProArea_overview) - [Combo Box](FormObjects/comboBox_overview.md) - Formulaire - [Zone de saisie](FormObjects/input_overview.md) - [Liste hiérarchique](FormObjects/list_overview.md) - [List Box](FormObjects/listbox_overview.md) - [Colonne List Box](FormObjects/listbox_overview.md#list-box-columns) | Le contenu de l'objet saisissable qui a le focus vient d'être modifié |

## Description

### Cas général

Cet événement peut être utilisé pour filtrer la saisie de données dans les objets saisissables au clavier au niveau le plus bas.

Lorsqu'il est utilisé, cet événement est généré après chaque modification apportée au contenu d'un objet saisissable, quelle que soit l'action qui a provoqué la modification, c'est-à-dire :

- Actions d'édition standard qui modifient le contenu comme les actions coller, couper, supprimer ou annuler;
- Déposer une valeur (action similaire à coller);
- Toute entrée au clavier effectuée par l'utilisateur; dans ce cas, l'événement `On After Edit` est généré après les événements [`On Before Keystroke`](onBeforeKeystroke.md) et [`On After Keystroke`](onAfterKeystroke.md), s'ils sont utilisés.
- Toute modification apportée à l'aide d'une commande de langage qui simule une action de l'utilisateur (c'est-à-dire `POST KEY`).

Dans le cadre de l'événement `On After Edit`, les données textuelles en cours de saisie sont retournées par la commande [`Get edited text`](https://doc.4d.com/4dv19/help/command/en/page655.html).

### 4D View Pro

L'objet retourné par la commande `FORM Event` contient :

| Propriété   | Type        | Description                                                                                         |
| ----------- | ----------- | --------------------------------------------------------------------------------------------------- |
| code        | entier long | On After Edit                                                                                       |
| Description | text        | "On After Edit"                                                                                     |
| objectName  | text        | Nom de la zone 4D View Pro                                                                          |
| sheetName   | text        | Nom de la feuille de l'événement                                                                    |
| action      | text        | "editChange", "valueChanged", "DragDropBlock", "DragFillBlock", "formulaChanged", "clipboardPasted" |

En fonction de la valeur de la propriété `action`, l'[objet event](overview.md#event-object) contiendra des propriétés supplémentaires.

#### action = editChange

| Propriété   | Type    | Description                              |
| ----------- | ------- | ---------------------------------------- |
| range       | object  | Plage de cellule                         |
| editingText | variant | La valeur provenant de l'éditeur courant |

#### action = valueChanged

| Propriété | Type    | Description                                |
| --------- | ------- | ------------------------------------------ |
| range     | object  | Plage de cellule                           |
| oldValue  | variant | Valeur de la cellule avant la modification |
| newValue  | variant | Valeur de la cellule après la modification |

#### action = DragDropBlock

| Propriété | Type    | Description                                       |
| --------- | ------- | ------------------------------------------------- |
| fromRange | object  | Plage de cellule source (qui est glissée)         |
| toRange   | object  | Plage de cellule de destination (qui est déposée) |
| copy      | boolean | Indique si la plage source est copiée ou non      |
| insert    | boolean | Indique si la plage source est insérée ou non     |

#### action = DragFillBlock

| Propriété | Type   | Description                        |
| --------- | ------ | ---------------------------------- |
| fillRange | object | Plage utilisée pour le remplissage |
 autoFillType|longint|Valeur utilisée pour le remplissage.<li>0 : les cellules contiennent toutes les données (valeurs, formatage et formules)</li><li>1 : les cellules contiennent des données automatiquement séquentielles</li><li>2 : les cellules contiennent uniquement le formatage</li><li>3 : les cellules contiennent des valeurs mais pas de formatage</li><li>4 : les valeurs des cellules sont supprimées</li><li>5 : Les cellules sont remplies automatiquement</li>| |fillDirection|longint|Direction du remplissage.<li>0 : les cellules à gauche sont remplies</li><li>1 : les cellules à droite sont remplies</li><li>2 : Les cellules ci-dessus sont remplies</li><li>3 : Les cellules ci-dessous sont remplies</li>|

#### action = formulaChanged

| Propriété | Type   | Description       |
| --------- | ------ | ----------------- |
| range     | object | Plage de cellule  |
| formula   | text   | La formule saisie |

#### action = clipboardPasted

| Propriété   | Type        | Description                                                                                                                                                                                                       |
| ----------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| range       | object      | Plage de cellule                                                                                                                                                                                                  |
| pasteOption | entier long | Indique ce qui est collé à partir du presse-papiers :<li>0 : tout est collé (valeurs, mise en forme et formules)</li><li>1 : seules les valeurs sont collées</li><li>2 : seul le formatage est collé</li><li>3 : seules les formules sont collées</li><li>4 : les valeurs et la mise en forme sont collées (pas les formules)</li><li>5 : Les formules et la mise en forme sont collées (pas les valeurs)</li> |
| pasteData   | object      | Les données du presse-papiers à coller<li>"text" (texte) : le texte du presse-papiers</li><li>"html" (texte) : le code HTML du presse-papiers</li>                                                                                                                        |

#### Exemple

Voici un exemple qui gère l'événement `On After Edit` :

```4d
 If(FORM Event.code=On After Edit)
    If(FORM Event.action="valueChanged")
       ALERT("WARNING: You are currently changing the value\  
       from "+String(FORM Event.oldValue)+\  
       " to "+String(FORM Event.newValue)+"!")
    End if
 End if
    End if
 End if
```

L'exemple ci-dessus pourrait générer un objet événement tel que celui-ci :

```
{

"code":45;
"description":"On After Edit";
"objectName":"ViewProArea"
"sheetname":"Sheet1";
"action":"valueChanged";
"range": {area:ViewProArea,ranges:[{column:1,row:2,sheet:1}]};
"oldValue":"The quick brown fox";
"newValue":"jumped over the lazy dog";
}
```
