---
id: form-previous-page
title: FORM PREVIOUS PAGE
slug: /commands/form-previous-page
displayed_sidebar: docs
---

<!--REF #_command_.FORM PREVIOUS PAGE.Syntax-->**FORM PREVIOUS PAGE**<!-- END REF-->
<!--REF #_command_.FORM PREVIOUS PAGE.Params-->
| Ne requiert pas de paramètre |  |
| --- | --- |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.FORM PREVIOUS PAGE.Summary-->**FORM PREVIOUS PAGE** change la page courante d'un formulaire pour afficher la page précédente.<!-- END REF--> Si aucun formulaire n'est affiché ou chargé via la commande [FORM LOAD](../commands/form-load.md), ou si la page affichée est la première page du formulaire, **FORM PREVIOUS PAGE** ne fait rien.

#### Exemple 

Cet exemple est une méthode appelée par une commande de menu. Elle provoque l'affichage la page qui précède celle qui est actuellement affichée :

```4d
 FORM PREVIOUS PAGE
```

#### Voir aussi 

[FORM FIRST PAGE](form-first-page.md)  
[FORM Get current page](form-get-current-page.md)  
[FORM GOTO PAGE](form-goto-page.md)  
[FORM LAST PAGE](form-last-page.md)  
[FORM NEXT PAGE](form-next-page.md)  