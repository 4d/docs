---
id: form-first-page
title: FORM FIRST PAGE
slug: /commands/form-first-page
displayed_sidebar: docs
---

<!--REF #_command_.FORM FIRST PAGE.Syntax-->**FORM FIRST PAGE**<!-- END REF-->
<!--REF #_command_.FORM FIRST PAGE.Params-->
| Ne requiert pas de paramètre |  |
| --- | --- |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.FORM FIRST PAGE.Summary-->La commande **FORM FIRST PAGE** change la page courante d'un formulaire pour afficher la première page du formulaire.<!-- END REF--> Si aucun formulaire n'est affiché ou chargé via la commande [FORM LOAD](../commands/form-load.md), ou si la première page du formulaire est déjà affichée, **FORM FIRST PAGE** ne fait rien.

#### Exemple 

Cet exemple est une méthode appelée par une commande de menu. Elle affiche la première page du formulaire :

```4d
 FORM FIRST PAGE
```

#### Voir aussi 

[FORM Get current page](form-get-current-page.md)  
[FORM GOTO PAGE](form-goto-page.md)  
[FORM LAST PAGE](form-last-page.md)  
[FORM NEXT PAGE](form-next-page.md)  
[FORM PREVIOUS PAGE](form-previous-page.md)  