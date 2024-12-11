---
id: sequence-number
title: Sequence number
slug: /commands/sequence-number
displayed_sidebar: docs
---

<!--REF #_command_.Sequence number.Syntax-->**Sequence number** {( *laTable* )} : Integer<!-- END REF-->
<!--REF #_command_.Sequence number.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table à numéroter automatiquement ou Table par défaut si ce paramètre est omis |
| Résultat | Integer | &#8592; | Numéro automatique |

<!-- END REF-->

#### Description 

<!--REF #_command_.Sequence number.Summary-->**Sequence number** retourne le prochain numéro automatique de *laTable*.<!-- END REF--> Ce numéro est unique pour chaque table. C'est une valeur qui ne se répète pas et qui est incrémentée à chaque enregistrement nouvellement créé dans la table(\*). 

(\*) Pour des raisons d'optimisation, la numérotation automatique est activée uniquement au premier appel de la commande **Sequence number** ou d'une des fonctions qui y accèdent (cf. ci-dessous). De plus, le compteur peut être réinitialisé via [SET DATABASE PARAMETER](set-database-parameter.md). Par conséquent, la valeur retournée ne correspond pas nécessairement au nombre d'enregistrements ayant été créés dans *laTable*. 

Par défaut, la numérotation commence à 1 ; vous pouvez toutefois modifier la numérotation automatique des enregistrements de *laTable* à l'aide de la commande [SET DATABASE PARAMETER](set-database-parameter.md). 

**Note :** S'il n'y a pas d'enregistrement courant et que la numérotation a été modifiée via la commande [SET DATABASE PARAMETER](set-database-parameter.md), le numéro est bien réservé pour la prochaine création d'enregistrement mais ne sera retourné par la fonction **Sequence number** que lorsque la commande [SAVE RECORD](save-record.md) sera effectivement appelée. 

Le numéro retourné par cette fonction pour *laTable* est identique à celui généré si vous avez coché l'option **Incrémentation auto** dans l'Inspecteur de Structure pour un champ de *laTable* ou si vous fixez #N comme valeur par défaut pour un champ de *laTable* dans un formulaire (référez-vous au manuel *Mode Développement* de 4D). 

**Note :** L'incrémentation automatique peut également être définie via l'attribut SQL AUTO\_INCREMENT.

La fonction **Sequence number** est utile dans les cas suivants :

* Si la numérotation doit s'incrémenter d'un nombre supérieur à 1
* Si le numéro doit reprendre une partie d'un code

Pour stocker ce numéro à l'aide d'une méthode, il faut créer un champ de type Entier long dans la table et y affecter la numérotation automatique.  
Si la numérotation doit débuter à une valeur différente de 1, ajoutez simplement la différence à la fonction **Sequence number**. Par exemple, si le numéro doit commencer à 1000, vous pouvez utiliser la ligne de code suivante pour affecter le numéro :

```4d
 [Table1]NumAuto:=Sequence number([Table1])+999
```

#### Exemple 

L'exemple suivant fait partie d'une méthode formulaire. Ces lignes de code testent s'il s'agit d'un nouvel enregistrement (si le numéro de facture est égal à une chaîne vide). Si l'enregistrement est nouveau, un numéro est affecté à la facture. Ce numéro de facture est construit avec deux informations : le numéro unique et le numéro de référence de l'utilisateur, qui était saisi à l'ouverture de la base. Le numéro unique est formaté en tant que chaîne avec une longueur de cinq caractères :

```4d
 If([Factures]NumFacture="") // S'il s'agit d'une nouvelle facture, créer un numéro de facture
  // Le numéro de facture est une chaîne qui se termine par le numéro de référence de l'utilisateur
    [Factures]NumFacture:=String(Numerotation automatique;"00000")+[Factures]Utilisateur
 End if
```

#### Voir aussi 

*A propos des numéros d'enregistrements*  
[Record number](record-number.md)  
[Selected record number](selected-record-number.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 244 |
| Thread safe | &check; |
| Interdite sur le serveur ||


