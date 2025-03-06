---
id: current-machine
title: Current machine
slug: /commands/current-machine
displayed_sidebar: docs
---

<!--REF #_command_.Current machine.Syntax-->**Current machine**  : Text<!-- END REF-->
<!--REF #_command_.Current machine.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Text | &#8592; | Nom de la machine sur le réseau |

<!-- END REF-->

#### Description 

<!--REF #_command_.Current machine.Summary-->La commande   **Current machine** retourne le nom de la machine tel qu'il a été défini dans les paramètres réseau du système d'exploitation.<!-- END REF-->

#### Exemple 

Même si vous n'utilisez pas la version client/serveur de 4D, votre application peut comprendre des services réseaux qui nécessitent que votre machine soit correctement configurée. Dans la de votre application, vous pouvez écrire :

```4d
 If((Current machine="")|(Current system user=""))
  //Afficher une boîte de dialogue demandant à l'utilisateur de configurer ses paramètres réseau
 End if
```

#### Voir aussi 

[Current system user](current-system-user.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 483 |
| Thread safe | &check; |


