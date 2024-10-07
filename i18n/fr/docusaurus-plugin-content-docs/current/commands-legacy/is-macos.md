---
id: is-macos
title: Is macOS
slug: /commands/is-macos
displayed_sidebar: docs
---

<!--REF #_command_.Is macOS.Syntax-->**Is macOS** -> Résultat<!-- END REF-->
<!--REF #_command_.Is macOS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Booléen | &#x1F850; | Vrai si le système d'exploitation est macOS, sinon Faux |

<!-- END REF-->

#### Description 

<!--REF #_command_.Is macOS.Summary-->La commande **Is macOS** retourne Vrai si le système d'exploitation courant est macOS.<!-- END REF--> 

#### Exemple 

Vous voulez déterminer si le système d'exploitation courant est macOS :

```4d
 If(Is macOS)
    ALERT("C'est macOS")
 Else
    ALERT("Ce n'est pas macOS")
 End if
```

#### Voir aussi 

[Get system info](get-system-info.md)  
[Is Windows](is-windows.md)  