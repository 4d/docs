---
id: set-group-access
title: SET GROUP ACCESS
slug: /commands/set-group-access
displayed_sidebar: docs
---

<!--REF #_command_.SET GROUP ACCESS.Syntax-->**SET GROUP ACCESS** {( *groupes* )}<!-- END REF-->
<!--REF #_command_.SET GROUP ACCESS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| groupes | Collection | &#8594;  | Nom(s) de groupe(s) au(x)quel(s) le compte utilisateur doit appartenir durant la session |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET GROUP ACCESS.Summary-->La commande **SET GROUP ACCESS** modifie l'adhésion du compte utilisateur pour la session courante.<!-- END REF--> Elle redéfinit les groupes précédents et définit les nouvelles adhésions dans les *groupes* listés. 

**Notes :** 

* La portée de cette commande est la session courante. L'appel à la commande [CHANGE CURRENT USER](change-current-user.md) par la suite, redéfinit par exemple les adhésions.
* Cette commande peut être appelée uniquement depuis un 4D distant ou des applications 4D monopostes. Elle n'est pas autorisée sur 4D Server.

Dans *groupes*, passez une collection de nom(s) de groupe(s) existant(s) au(x)quel(s) le compte l'utilisateur 4D appartient (si un nom de groupe n'existe pas, il est ignoré). Si vous passez une collection vide, le compte utilisateur 4D n'appartiendra plus à aucun groupe.

Si vous omettez le paramètre *groupes*, les adhésions du compte utilisateur 4D sont redéfinies sur les adhésions stockées sur disque.

**Note:** Lorsqu'une adhésion à un groupe fournit un accès à une fonctionnalité "sérialisé" (ex : un plug-in), une licence correspondante est utilisée et demeurera associée au compte utilisateur 4D jusqu'à la fin de la session, même si la commande **SET GROUP ACCESS** est appelée et si l'adhésion au groupe est annulée.

#### Exemple 

Vous souhaitez ajouter l'utilisateur courant aux groupes "admin" et "plugins" dans la session :

```4d
 $groups:=New collection("admin";"plugins")
 SET GROUP ACCESS($groups)
```

#### Voir aussi 

[Get group access](get-group-access.md)  
[Get plugin access](get-plugin-access.md)  
[SET PLUGIN ACCESS](set-plugin-access.md)  
[SET USER ALIAS](set-user-alias.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1737 |
| Thread safe | &check; |
| Interdite sur le serveur ||


