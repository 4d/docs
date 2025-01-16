---
id: trigger-event
title: Trigger event
slug: /commands/trigger-event
displayed_sidebar: docs
---

<!--REF #_command_.Trigger event.Syntax-->**Trigger event**  : Integer<!-- END REF-->
<!--REF #_command_.Trigger event.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Integer | &#8592; | 0=Hors de tout événement de trigger, 1=Sauvegarde d'un nouvel enregistrement, 2=Sauvegarde d'un enregistrement existant, 3=Suppression d'un enregistrement |

<!-- END REF-->

#### Description 

<!--REF #_command_.Trigger event.Summary-->La commande **Trigger event** est appelée dans un trigger et renvoie une valeur numérique qui indique le type de l'événement de la base, ou la raison pour laquelle le trigger a été appelé.<!-- END REF--> 4D fournit les constantes prédéfinies suivantes, placées dans le thème *Evénements trigger* :

| Constante                       | Type        | Valeur |
| ------------------------------- | ----------- | ------ |
| On Deleting Record Event        | Entier long | 3      |
| On Saving Existing Record Event | Entier long | 2      |
| On Saving New Record Event      | Entier long | 1      |

Si, dans un trigger, vous effectuez des opérations de base de données sur plusieurs enregistrements (par exemple mise à jour de plusieurs enregistrements dans la table *\[Produits\]* et ajout d'enregistrement dans la table *\[Factures\]*), vous pouvez rencontrer des situations (comme des enregistrements verrouillés) qui empêchent le trigger d'exécuter correctement les opérations pour lesquelles il est appelé. Il vous faut alors stopper les actions de la base et retourner une erreur pour que le process appelant sache que la requête n'a pu être exécutée. Ce process doit également être en mesure d'annuler les opérations non exécutées. Autrement dit, lorsqu'une telle situation se produit, vous avez besoin de savoir dans le trigger si vous êtes en transaction avant même d'essayer de faire quoi que ce soit. Pour cela, utilisez la fonction [In transaction](in-transaction.md).

Dans 4D, il n'y a pas de limite, à part la mémoire disponible, aux appels de triggers en cascade. Pour optimiser l'exécution d'un trigger, vous pouvez écrire le code de vos triggers non seulement en fonction de l'événement de la base mais aussi du niveau de l'appel lorsque les triggers sont appelés en cascade. Par exemple, pendant l'événement trigger **Sur suppression enregistrement** pour la table *\[Factures\]*, vous pouvez ne pas effectuer la mise à jour du champ *\[Clients\]Ventes* si la suppression de l'enregistrement de la table *\[Factures\]* fait partie de la suppression en cascade des factures liées à l'enregistrement dans la table *\[Clients\]* que vous êtes en train de supprimer. Pour cela, utilisez les routines [Trigger level](trigger-level.md) et [TRIGGER PROPERTIES](trigger-properties.md).

#### Exemple 

Utilisez la fonction **Trigger event** pour structurer vos triggers comme ci-dessous :

```4d
  // Un trigger de la table [toute table]
 var $0 : Integer
 $0:=0 // S'assurer que la requête de la base sera accordée
 Case of
    :(Trigger event=On Saving New Record Event)
  // Exécuter les actions appropriées pour la sauvegarde d'un nouvel enregistrement
    :(Trigger event=On Saving Existing Record Event)
  // Exécuter les actions appropriées pour la sauvegarde d'un enregistrement existant
    :(Trigger event=On Deleting Record Event)
  // Exécuter les actions appropriées pour la suppression d'un enregistrement
 End case
```

#### Voir aussi 

[In transaction](in-transaction.md)  
*Présentation des triggers*  
[Trigger level](trigger-level.md)  
[TRIGGER PROPERTIES](trigger-properties.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 369 |
| Thread safe | &check; |


