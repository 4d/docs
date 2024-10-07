---
id: is-windows
title: Is Windows
slug: /commands/is-windows
displayed_sidebar: docs
---

<!--REF #_command_.Is Windows.Syntax-->**Is Windows** -> Résultat<!-- END REF-->
<!--REF #_command_.Is Windows.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Booléen | &#x1F850; | Vrai si le système d'exploitation est Windows, Sinon Faux |

<!-- END REF-->

#### Description 

<!--REF #_command_.Is Windows.Summary-->La commande **Is Windows** retourne Vrai si le système d'exploitation courant est Windows.<!-- END REF-->

#### Exemple 

Vous voulez savoir si le système d'exploitation courant est Windows :

```4d
 If(Is Windows)
    ALERT("C'est Windows")
 Else
    ALERT("Ce n'est pas Windows")
 End if
```

#### Voir aussi 

[Get system info](get-system-info.md)  
[Is macOS](is-macos.md)  