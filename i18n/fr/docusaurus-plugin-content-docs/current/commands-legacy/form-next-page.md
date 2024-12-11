---
id: form-next-page
title: FORM NEXT PAGE
slug: /commands/form-next-page
displayed_sidebar: docs
---

<!--REF #_command_.FORM NEXT PAGE.Syntax-->**FORM NEXT PAGE**<!-- END REF-->
<!--REF #_command_.FORM NEXT PAGE.Params-->
| Ne requiert pas de paramètre |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.FORM NEXT PAGE.Summary-->**FORM NEXT PAGE** change la page courante d'un formulaire pour afficher la page suivante.<!-- END REF--> Si aucun formulaire n'est affiché ou chargé via la commande [FORM LOAD](../commands/form-load.md), ou si la page affichée est la dernière page du formulaire, **FORM NEXT PAGE** ne fait rien.

#### Exemple 

Cet exemple est une méthode appelée par une commande de menu. Elle provoque l'affichage la page qui suit celle qui est actuellement affichée :

```4d
 FORM NEXT PAGE
```

#### Voir aussi 

[FORM FIRST PAGE](form-first-page.md)  
[FORM Get current page](form-get-current-page.md)  
[FORM GOTO PAGE](form-goto-page.md)  
[FORM LAST PAGE](form-last-page.md)  
[FORM PREVIOUS PAGE](form-previous-page.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 248 |
| Thread safe | &check; |
| Interdite sur le serveur ||


