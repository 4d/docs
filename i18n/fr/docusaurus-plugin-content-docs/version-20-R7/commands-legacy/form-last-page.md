---
id: form-last-page
title: FORM LAST PAGE
slug: /commands/form-last-page
displayed_sidebar: docs
---

<!--REF #_command_.FORM LAST PAGE.Syntax-->**FORM LAST PAGE**<!-- END REF-->
<!--REF #_command_.FORM LAST PAGE.Params-->
| Ne requiert pas de paramètre |  |
| --- | --- |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.FORM LAST PAGE.Summary-->La commande **FORM LAST PAGE** change la page courante d'un formulaire pour afficher la dernière page du formulaire.<!-- END REF--> Si aucun formulaire n'est affiché ou chargé via la commande [FORM LOAD](form-load.md), ou si la dernière page du formulaire est déjà affichée, **FORM LAST PAGE** ne fait rien.

#### Exemple 

Cet exemple est une méthode appelée par une commande de menu. Elle affiche la dernière page du formulaire courant :

```4d
 FORM LAST PAGE
```

#### Voir aussi 

[FORM FIRST PAGE](form-first-page.md)  
[FORM Get current page](form-get-current-page.md)  
[FORM GOTO PAGE](form-goto-page.md)  
[FORM NEXT PAGE](form-next-page.md)  
[FORM PREVIOUS PAGE](form-previous-page.md)  