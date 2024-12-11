---
id: set-about
title: SET ABOUT
slug: /commands/set-about
displayed_sidebar: docs
---

<!--REF #_command_.SET ABOUT.Syntax-->**SET ABOUT** ( *libelléElément* ; *méthode* )<!-- END REF-->
<!--REF #_command_.SET ABOUT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| libelléElément | Text | &#8594;  | Nouvelle ligne de menu A propos... |
| méthode | Text | &#8594;  | Nom de la méthode à exécuter lorsque la ligne est choisie |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET ABOUT.Summary-->La commande **SET ABOUT** remplace la ligne de menu **A propos de 4D.<!-- END REF-->..** du menu **Aide** (sous Windows) ou du menu **application** (Mac OS X) par *libelléLigne*.

Après l'appel de cette commande, lorsqu'un utilisateur sélectionne la ligne de menu en mode Développement ou Application, la méthode *méthode* est appelée. Typiquement, cette méthode affiche une boîte de dialogue qui fournit des informations sur les versions de votre application.

Cette commande est utilisable avec 4D (tous modes), 4D Desktop et 4D Server. Son exécution sur le poste serveur provoque la création d’un nouveau process.

**Note :** Sous Windows, cette commande modifie la ligne "A propos de 4D" du menu **Aide** créé par la commande [SET HELP MENU](set-help-menu.md).

#### Exemple 1 

L'exemple suivant remplace la commande de menu **A propos** par la commande de menu **A propos du programmateur**. La méthode A PROPOS affiche une fenêtre d'A propos personnalisée :

```4d
 SET ABOUT("A propos du programmateur";"A PROPOS")
```

#### Exemple 2 

L'exemple suivant réinitialise la commande de menu d'A propos de 4D :

```4d
 SET ABOUT("A propos de 4D®";"")
```

#### Voir aussi 

[SET HELP MENU](set-help-menu.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 316 |
| Thread safe | &check; |
| Interdite sur le serveur ||


