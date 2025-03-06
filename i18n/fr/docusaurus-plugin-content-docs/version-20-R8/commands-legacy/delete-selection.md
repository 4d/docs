---
id: delete-selection
title: DELETE SELECTION
slug: /commands/delete-selection
displayed_sidebar: docs
---

<!--REF #_command_.DELETE SELECTION.Syntax-->**DELETE SELECTION** {( *laTable* )}<!-- END REF-->
<!--REF #_command_.DELETE SELECTION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table de laquelle supprimer la sélection courante ou Table par défaut si ce paramètre est omis |

<!-- END REF-->

#### Description 

<!--REF #_command_.DELETE SELECTION.Summary-->La commande **DELETE SELECTION** supprime la sélection courante d'enregistrements de *laTable*.<!-- END REF--> Si la sélection courante est vide, **DELETE SELECTION** ne fait rien. Après la suppression des enregistrements, la sélection courante est vide. Les enregistrements supprimés pendant une transaction sont verrouillés pour les autres utilisateurs et/ou process jusqu'à ce que la transaction soit validée ou annulée. 

**Attention :** La suppression d'une sélection d'enregistrements est une opération définitive. Elle ne peut être annulée par la suite. 

Désélectionner l'option **Enregistrement(s) définitivement supprimé(s)** dans l'Inspecteur des tables vous permet d'augmenter la vitesse des suppressions lors de l'utilisation de **DELETE SELECTION** (cf. paragraphe *Enregistrement(s) définitivement supprimé(s)* dans le manuel *Mode Développement*).

#### Exemple 1 

L'exemple suivant affiche tous les enregistrements de la table \[Personnes\] et permet à l'utilisateur de sélectionner ceux qu'il souhaite effacer. L'exemple est en deux parties. La première est la méthode affichant les enregistrements. La seconde est la méthode objet d'un bouton 'Supprimer'. Voici la première méthode : 

```4d
 ALL RECORDS([Personnes]) // Sélection de tous les enregistrements
 FORM SET OUTPUT([Personnes];"FormSortie") // Définition du formulaire listant les enregistrements
 DISPLAY SELECTION([Personnes]) // Affichage de tous les enregistrements
```

Voici la méthode objet du bouton Supprimer, apparaissant dans le pied de page du formulaire sortie. La méthode utilise les enregistrements sélectionnés par l'utilisateur (l'ensemble système UserSet) pour effacer la sélection (notez que si l'utilisateur ne sélectionne aucun enregistrement, **DELETE SELECTION** ne fait rien) :

```4d
  // Demander confirmation que l'utilisateur veut réellement supprimer les enregistrements
 CONFIRM("Vous avez sélectionné "+String(Enregistrements dans ensemble("UserSet"))+
 " enregistrements à supprimer."+Char(13)+"Cliquez sur OK pour confirmer l'opération.")
 If(OK=1)
    USE SET("UserSet") // Use l'ensemble défini par l'utilisateur
    DELETE SELECTION([Personnes]) // Supprimer la sélection d'enregistrements
 End if
 ALL RECORDS([Personnes]) // Sélection de tous les enregistrements
```

#### Exemple 2 

Lorsqu'un **DELETE SELECTION** rencontre un enregistrement verrouillé, celui-ci n'est pas supprimé. Tous les enregistrements verrouillés sont placés dans un ensemble système nommé LockedSet. Après l'exécution de **DELETE SELECTION**, vous pouvez tester cet ensemble afin de vérifier si des enregistrements étaient verrouillés. La boucle suivante s'exécutera jusqu'à ce que tous les enregistrements aient été supprimés.

```4d
 Repeat // Répéter pour chaque enregistrement verrouillé
    DELETE SELECTION([CetteTable])
    If(Records in set("LockedSet")#0) // Si des enregistrements sont verrouillés
       USE SET("LockedSet") // Sélectionner les enregistrements verrouillés
    End if
 Until(Records in set("LockedSet")=0) // Jusqu'à ce qu'il n'y en ait plus
```

#### Voir aussi 

[DISPLAY SELECTION](display-selection.md)  
[MODIFY SELECTION](modify-selection.md)  
*Présentation des ensembles*  
[TRUNCATE TABLE](truncate-table.md)  
*Verrouillage d'enregistrements*  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 66 |
| Thread safe | &check; |
| Change la sélection courante ||


