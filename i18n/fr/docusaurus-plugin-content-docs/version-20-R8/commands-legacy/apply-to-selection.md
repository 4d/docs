---
id: apply-to-selection
title: APPLY TO SELECTION
slug: /commands/apply-to-selection
displayed_sidebar: docs
---

<!--REF #_command_.APPLY TO SELECTION.Syntax-->**APPLY TO SELECTION** ( *laTable* ; *formule* )<!-- END REF-->
<!--REF #_command_.APPLY TO SELECTION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table dans laquelle appliquer la formule |
| formule | Expression | &#8594;  | Ligne de code ou méthode |

<!-- END REF-->

#### Description 

<!--REF #_command_.APPLY TO SELECTION.Summary-->La commande **APPLY TO SELECTION** applique *formule* à chaque enregistrement de la sélection courante de *laTable*.<!-- END REF--> La *formule* peut être une ligne d'instructions ou une méthode (dans ce cas, le nom de la méthode doit être saisi sans ""). Si *formule* entraîne la modification d'un enregistrement de *laTable*, l'enregistrement modifié est sauvegardé. Si *formule* ne modifie pas d'enregistrement, aucune sauvegarde n'est réalisée. Si la sélection courante est vide, **APPLY TO SELECTION** ne fait rien. La *formule* peut faire appel à un champ d'une table liée si le lien est automatique.

**Attention :** Les paramètres ($1...$n) ne sont pas pris en charge par *formule*. 

La commande **APPLY TO SELECTION** peut être utilisée pour récupérer et traiter des informations sur une sélection d'enregistrements (par exemple, calcul d'un total), ou pour modifier une sélection (par exemple, mettre en majuscule la première lettre d'un champ). Si cette commande est utilisée à l'intérieur d'une transaction, toutes les opérations réalisées pourront être annulées si la transaction n'est pas validée.

**4D Server :** Le serveur n'exécute aucune des commandes passées dans *formule*. Chaque enregistrement de la sélection est renvoyé sur le poste client pour traitement et modification.

Un thermomètre de progression s'affiche pendant l'exécution d'un **APPLY TO SELECTION**. Un appel préalable à la commande [MESSAGES OFF](messages-off.md) permet de supprimer ce thermomètre. Lorsque le thermomètre de progression est affiché, l'utilisateur peut annuler l'opération.

#### Exemple 1 

L'exemple suivant met en majuscule tous les noms de la table : 

```4d
 APPLY TO SELECTION([Emp];[Emp]Nom:=Uppercase([Emp]Nom))
```

#### Exemple 2 

Lorsque **APPLY TO SELECTION** rencontre un enregistrement verrouillé et le modifie, celui-ci n'est pas sauvegardé. Tous les enregistrements verrouillés rencontrés par la commande sont placés dans un ensemble système appelé LockedSet. Après l'exécution d'un **APPLY TO SELECTION**, il est recommandé de tester l'ensemble LockedSet pour vérifier la présence d'enregistrements verrouillés. La boucle suivante s'exécute jusqu'à ce que tous les enregistrements aient été modifiés :

```4d
 Repeat // For each enregistrement verrouillé
    APPLY TO SELECTION([Emp];[Emp]Nom:=Uppercase([Emp]Nom))
    USE SET("LockedSet") // Sélection des enregistrements verrouillés uniquement
  // Jusqu'à ce qu'il n'y ait plus d'enregistrement verrouillé
 Until(Records in set("LockedSet")=0)
```

#### Exemple 3 

Cet exemple utilise une méthode : 

```4d
 ALL RECORDS([Emp])
 APPLY TO SELECTION([Emp];Capitales)
```

#### Variables et ensembles système 

Si l'utilisateur clique sur le bouton Stop dans le thermomètre de progression, la variable système OK prend la valeur 0\. Sinon, elle prend la valeur 1.

#### Voir aussi 

[EDIT FORMULA](edit-formula.md)  
*Présentation des ensembles*  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 70 |
| Thread safe | &check; |
| Modifie les variables | OK |


