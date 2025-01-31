---
id: find-in-field
title: Find in field
slug: /commands/find-in-field
displayed_sidebar: docs
---

<!--REF #_command_.Find in field.Syntax-->**Find in field** ( *champCible* ; *valeur* ) : Integer<!-- END REF-->
<!--REF #_command_.Find in field.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| champCible | Field | &#8594;  | Champ sur lequel effectuer la recherche |
| valeur | Field, Variable | &#8594;  | Valeur à rechercher |
| &#8592; | Valeur trouvée |
| Résultat | Integer | &#8592; | Numéro de l’enregistrement trouvé ou -1 si pas d’enregistrement trouvé |

<!-- END REF-->

#### Description 

<!--REF #_command_.Find in field.Summary-->La commande **Find in field** retourne le numéro du premier enregistrement dont le champ *champCible* est égal à la valeur *valeur*.<!-- END REF-->  
Si aucun enregistrement ne correspond au critère, **Find in field** retourne -1\. 

Après l’appel, le paramètre *valeur* contient la valeur effectivement trouvée. Ce fonctionnement permet d’effectuer des recherches utilisant le caractère “@” sur des champs de type alpha, et pour lesquelles il est nécessaire de récupérer la valeur trouvée. 

**Note :** Du fait de ce principe, vous ne pouvez pas utiliser un *paramètre* ($1, $2...) dans *valeur* car cela entraînerait des dysfonctionnements en mode compilé. De même, si vous passez un champ dans le paramètre *valeur*, gardez à l'esprit que sa valeur sera réaffectée si la recherche aboutit (la commande [Modified record](modified-record.md), notamment, retournera Vrai pour l'enregistrement courant de la table).

La commande ne modifie ni la sélection courante, ni l’enregistrement courant.

Cette fonction, très rapide, est particulièrement utile pour prévenir la création de doublons au moment de la saisie de données.

**Note historique :** Dans les anciennes versions de 4D, la commande **Find in field** était nommée **Trouver clef index** et ne fonctionnait qu'avec les champs indexés. La commande a été renommée et la limitation supprimée à compter de 4D v11 SQL. 

#### Exemple 1 

Dans une base de données de CD audio, vous souhaitez vérifier, au moment de la saisie d’un nouveau nom de chanteur, si celui-ci n’existe pas déjà dans la base. Comme il peut exister des homonymes, vous ne souhaitez pas toutefois que le champ \[Chanteur\]Nom soit unique. Pour cela, dans le formulaire d’entrée, vous écrivez dans la méthode objet du champ \[Chanteur\]Nom :

```4d
 If(FORM Event=On Data Change)
    $EnrgNum:=Find in field([Chanteur]Nom;[Chanteur]Nom)
    If($EnrgNum #-1) // Si ce nom a déjà été saisi
       CONFIRM("Un chanteur de ce nom existe déjà. Voulez-vous visualiser sa fiche ?";"Oui";"Non")
       If(OK=1)
          GOTO RECORD([Chanteur];$EnrgNum)
       End if
    End if
 End if
```

#### Exemple 2 

Voici un exemple permettant de vérifier l'existence d'une valeur :

```4d
 var $id;$1 : Integer
 $id:=$1
 If(Find in field([MaTable]MonID;$id)>=0)
    $0:=True
 Else
    $0:=False
 End if
```

Remarquez le >= qui permet de couvrir tous les cas. En effet, la fonction retourne un numéro d'enregistrement et le premier enregistrement porte le numéro 0.


#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 653 |
| Thread safe | &check; |


