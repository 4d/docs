---
id: hide-process
title: HIDE PROCESS
slug: /commands/hide-process
displayed_sidebar: docs
---

<!--REF #_command_.HIDE PROCESS.Syntax-->**HIDE PROCESS** ( *process* )<!-- END REF-->
<!--REF #_command_.HIDE PROCESS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| process | Integer | &#8594;  | Numéro du process à cacher |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.HIDE PROCESS.Summary-->**HIDE PROCESS** masque toutes les fenêtres appartenant au process dont le numéro est *process*.<!-- END REF--> Tous les éléments d'interface de *process* sont cachés jusqu'au [SHOW PROCESS](show-process.md) suivant. La barre de menus du process est aussi cachée. L'ouverture d'une fenêtre alors que le process est caché ne provoquera aucun redessinement d'écran. Si le process est déjà caché, cette commande ne fait rien.

La seule exception à cette règle est la fenêtre du débogueur. Si la fenêtre du débogueur est affichée lorsque *process* est caché, *process* est affiché et passe au premier plan.

Si vous ne voulez pas qu'un process soit affiché lorsqu'il est créé, **HIDE PROCESS** doit être la première commande à appeler dans la méthode du process. Les process Process principal et Gestionnaire du cache ne peuvent pas être cachés à l'aide de cette commande.

Lorsqu'un process est caché, il est toujours en cours d'exécution.

Si vous souhaitez ne cacher qu'une fenêtre du process, utilisez la commande [HIDE WINDOW](hide-window.md).

#### Exemple 

L'exemple suivant cachera toutes les fenêtres appartenant au process courant :

```4d
 HIDE PROCESS(Current process)
```

#### Voir aussi 

[Process state](process-state.md)  
[SHOW PROCESS](show-process.md)  