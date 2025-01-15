---
id: on-host-database-event-database-method
title: On Host Database Event database method
slug: /commands/on-host-database-event-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On Host Database Event database method.Syntax-->$1 -> On Host Database Event database method<!-- END REF-->
<!--REF #_command_.On Host Database Event database method.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| $1 | Integer | &#8592; | Code d'événement |

<!-- END REF-->

#### Description 

<!--REF #_command_.On Host Database Event database method.Summary-->La **On Host Database Event database method** permet aux composants 4D d’exécuter du code lors de l’ouverture et de la fermeture de la base hôte.<!-- END REF-->

**Note :** Pour des raisons de sécurité, l’exécution de cette méthode base doit être autorisée explicitement dans la base hôte pour qu’elle puisse être appelée. Pour plus d’informations sur ce point, reportez-vous au manuel *Mode Développement*. 

La **On Host Database Event database method** est exécutée uniquement dans les bases utilisées en tant que composants de bases hôtes (lorsqu’elle est autorisée dans les Propriétés de la base hôte). Elle est appelée lorsque des événements liés à l’ouverture et la fermeture de la base hôte se produisent. 

Pour traiter un événement, vous devez tester la valeur du paramètre *$1* à l’intérieur de la méthode, et la comparer à l’une des constantes suivantes, placées dans le thème *Evénements de la base* :

| Constante                       | Type        | Valeur | Comment                                                                                                                                                                                                                                                                                                                    |
| ------------------------------- | ----------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| On after host database exit     | Entier long | 4      | La [Semaphore](semaphore.md) de la base hôte vient de terminer son exécution                                                                                                                                                                                                                                               |
| On after host database startup  | Entier long | 2      | La de la base hôte vient de terminer son exécution                                                                                                                                                                                                                                                                         |
| On before host database exit    | Entier long | 3      | La base hôte est en cours de fermeture. La [Semaphore](semaphore.md) de la base hôte n’a pas encore été appelée. <br/>La [Semaphore](semaphore.md) de la base hôte n’est pas appelée tant que la [On Host Database Event database method](on-host-database-event-database-method.md) du composant est en exécution |
| On before host database startup | Entier long | 1      | La base hôte vient juste d’être lancée. La de la base hôte n’a pas encore été appelée. <br/>La de la base hôte n’est pas appelée tant que la [On Host Database Event database method](on-host-database-event-database-method.md) du composant est en exécution                                                     |

Ce principe permet aux composants 4D de charger et de sauvegarder des préférences ou des états utilisateurs liés à l’exploitation de la base hôte. 

#### Exemple 

Exemple de structure type d’une méthode base sur événement base hôte :

```4d
     // Méthode base sur événement base hôte
 var $1 : Integer
 Case of
          :($1=On before host database startup)
              // placer ici le code à exécuter avant le "Sur ouverture" de la base hôte
 
          :($1=On after host database startup)
              // placer ici le code à exécuter après le "Sur ouverture" de la base hôte
 
          :($1=On before host database exit)
              // placer ici le code à exécuter avant le "Sur fermeture" de la base hôte
 
          :($1=On after host database exit)
              // placer ici le code à exécuter après le "Sur fermeture" de la base hôte
 End case
```
