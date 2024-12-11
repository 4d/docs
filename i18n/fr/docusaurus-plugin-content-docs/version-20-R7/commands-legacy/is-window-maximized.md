---
id: is-window-maximized
title: Is window maximized
slug: /commands/is-window-maximized
displayed_sidebar: docs
---

<!--REF #_command_.Is window maximized.Syntax-->**Is window maximized** ( *window* ) : Boolean<!-- END REF-->
<!--REF #_command_.Is window maximized.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| window | Integer | &#8594;  | Numéro de référence de la fenêtre |
| Résultat | Boolean | &#8592; | Vrai si la fenêtre est maximisée, sinon Faux |

<!-- END REF-->

#### Description 

<!--REF #_command_.Is window maximized.Summary-->La commande **Is window maximized** retourne **Vrai** si la fenêtre dont le numéro de référence est passé dans *window* est actuellement maximisée, et **Faux** dans le cas contraire.<!-- END REF--> 

#### Exemple 

Vous souhaitez passer entre l'état maximisé et l'état précédent :

```4d
 If(Is window maximized($winRef))
    MINIMIZE WINDOW($winRef)
 Else
    MAXIMIZE WINDOW($winRef)
 End if
```

#### Voir aussi 

[Is window reduced](is-window-reduced.md)  
[MAXIMIZE WINDOW](maximize-window.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1830 |
| Thread safe | &check; |
| Interdite sur le serveur ||


