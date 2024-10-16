---
id: create-selection-from-array
title: CREATE SELECTION FROM ARRAY
slug: /commands/create-selection-from-array
displayed_sidebar: docs
---

<!--REF #_command_.CREATE SELECTION FROM ARRAY.Syntax-->**CREATE SELECTION FROM ARRAY** ( *laTable* ; *tabEnrg* {; *nom*} )<!-- END REF-->
<!--REF #_command_.CREATE SELECTION FROM ARRAY.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table de la sélection |
| tabEnrg | Integer, Boolean array | &#8594;  | Tableau de n° d’enregistrements, ou Tableau de booléens (Vrai = l’enregistrement est dans la sélection, Faux = il n’est pas dans la sélection) |
| nom | Text | &#8594;  | Nom de la sélection temporaire à créer, ou Appliquer la commande à la sélection courante si ce paramètre est omis ou vide |

<!-- END REF-->

#### Description 

<!--REF #_command_.CREATE SELECTION FROM ARRAY.Summary-->La commande **CREATE SELECTION FROM ARRAY** construit la sélection temporaire *nom* à partir :

* soit du tableau de numéros d’enregistrements absolus *tabEnrg* de *laTable*,
* soit du tableau de booléens *tabEnrg* ; dans ce cas, les valeurs du tableau indiquent l’appartenance (Vrai) ou non (Faux) de chaque enregistrement de *laTable* à la sélection *nom*.<!-- END REF-->

**Attention** : Une sélection nommée est créée et chargée en mémoire. Par conséquent, assurez-vous que vous disposez de suffisamment de mémoire avant d'exécuter cette commande.

Si vous ne passez pas le paramètre *nom* ou si vous passez une chaîne vide, la commande s’appliquera à la sélection courante de *laTable*, qui sera donc mise à jour.

Lorsque vous utilisez la commande avec un tableau d’entiers longs, tous les numéros du tableau représentent la liste des numéros d’enregistrements qui feront partie de la sélection *nom*. Si un numéro est invalide (enregistrement non créé), l’erreur -10503 est générée.

**Note :** Attention, vous devez veiller à ce que le tableau ne contienne pas d'éléments ayant la même valeur, sinon la sélection résultante sera incorrecte.

Lorsque vous utilisez la commande avec un tableau de booléens, le Nième élément du tableau représente l’intégration (Vrai) ou non (Faux) de l’enregistrement numéro N dans la sélection *nom*. En principe, le nombre d’éléments du tableau doit être égal au nombre d’enregistrements de *laTable*. Si le tableau est plus petit que le nombre d’enregistrements, seuls les enregistrements définis par le tableau pourront faire partie de la sélection.

**Note :** Avec un tableau de booléens, la commande utilise les éléments du numéro 0 au numéro N-1.

**Attention** : N'oubliez pas qu'un numéro d'enregistrement peut être réutilisé si l'enregistrement est supprimé et qu'un autre enregistrement est créé (voir *A propos des numéros d'enregistrements*).

#### Gestion des erreurs 

Si un numéro d'enregistrement est invalide (enregistrement non créé), l’erreur -10503 est générée. Vous pouvez intercepter cette erreur à l'aide d'une méthode installée par la commande [ON ERR CALL](on-err-call.md).

#### Voir aussi 

[CLEAR NAMED SELECTION](clear-named-selection.md)  
[COPY NAMED SELECTION](copy-named-selection.md)  
[CREATE SET FROM ARRAY](create-set-from-array.md)  
[LONGINT ARRAY FROM SELECTION](longint-array-from-selection.md)  
[SELECTION TO ARRAY](selection-to-array.md)  
[USE NAMED SELECTION](use-named-selection.md)  