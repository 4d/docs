---
id: bring-to-front
title: BRING TO FRONT
slug: /commands/bring-to-front
displayed_sidebar: docs
---

<!--REF #_command_.BRING TO FRONT.Syntax-->**BRING TO FRONT** ( *process* )<!-- END REF-->
<!--REF #_command_.BRING TO FRONT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| process | Integer | &#8594;  | Numéro du process à passer au premier plan |

<!-- END REF-->

#### Description 

<!--REF #_command_.BRING TO FRONT.Summary-->**BRING TO FRONT** passe les fenêtres du process de numéro *process* au premier plan.<!-- END REF--> Toutes les fenêtres appartenant à *process* passent au premier plan. Si le process est déjà au premier plan, la commande ne fait rien. Si le process est caché, il faut utiliser la commande [SHOW PROCESS](show-process.md) pour faire d'abord apparaître le process, sinon **BRING TO FRONT** ne fait rien.

Le Process principal et le Process de structure peuvent être passés au premier plan à l'aide de cette commande.

**Note :** Si le process contient plusieurs fenêtres et que vous souhaitez passer au premier plan une fenêtre spécifique, il est préférable d'utiliser par exemple la commande [SET WINDOW RECT](set-window-rect.md). 

#### Exemple 

L'exemple suivant est une méthode qui peut être exécutée à partir d'une commande de menu. Elle vérifie si le process au premier plan est le process <>Clients. Sinon, ce process passe au premier plan :

```4d
 If(Frontmost process#<>Clients) // Si la liste des clients n'est pas affichée
    BRING TO FRONT(<>Clients) // Passer cette liste au premier plan
 End if
```

#### Voir aussi 

[HIDE PROCESS](hide-process.md)  
[Process state](process-state.md)  
[SHOW PROCESS](show-process.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 326 |
| Thread safe | &check; |
| Interdite sur le serveur ||


