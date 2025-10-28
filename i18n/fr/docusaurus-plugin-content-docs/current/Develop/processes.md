---
id: processes
title: Processes et Workers
---

Le multitâche dans 4D est la capacité d'exécuter plusieurs opérations simultanément. Ces opérations sont appelées **process**. Les process multiples sont comme plusieurs utilisateurs sur le même ordinateur, chacun travaillant à sa propre tâche. Cela signifie essentiellement que chaque méthode peut être exécutée en tant que tâche distincte de la base de données.

Si vous écrivez du code thread-safe, vous pouvez créer des [**process préemptifs**](preemptive.md) qui pourront tirer parti des ordinateurs multi-cœurs dans vos applications compilées, pour une exécution plus rapide.

:::note

L'application 4D crée des process pour ses propres besoins, par exemple le process Main pour gérer l'affichage des fenêtres de l'interface utilisateur, le process Design pour gérer les fenêtres et les éditeurs de l'environnement de Développement (notez que tous deux sont des [process workers](#process-workers)), le process Web Server, le process Cache Manager, le process Indexing ou le process On Event Manager.

:::

## Créer et supprimer des process

Il existe plusieurs façons de créer un nouveau process :

- Exécuter une méthode en mode Développement en sélectionnant la case à cocher **Nouveau process** dans la boîte de dialogue d'exécution de méthode. La méthode choisie dans ce dialogue est la méthode process.
- La méthode passée en tant que paramètre à la commande `New process` est la méthode process. The method passed as a parameter to the [`New process`](../commands/new-process) command is the process method.
- Utiliser la commande [`Execute on server`](../commands-legacy/execute-on-server.md) afin de créer une procédure stockée sur le serveur. La méthode passée en paramètre à la commande est la méthode process.
- Utiliser la commande [`CALL WORKER`](../commands-legacy/call-worker.md). Si le process du worker n'existe pas déjà, il est créé.

:::note

Dans les applications Desktop, des process peuvent être exécutés lors de la sélection de commandes de menu. Dans l'[Éditeur de barre de menus](../Menus/creating.md), sélectionnez la commande de menu et cliquez sur la case à cocher **Démarrer un nouveau process**. La méthode associée à la commande de menu est la méthode de process.

:::

Un process peut être effacé dans les conditions suivantes (les deux premières sont automatiques) :

- Lorsque l'exécution de la méthode du process est terminée
- Lorsque l'utilisateur quitte l'application
- Si vous arrêtez le process de manière procédurale ou si vous utilisez le bouton **Abort** dans le débogueur ou dans l'Explorateur d'exécution
- Si vous appelez la commande [`KILL WORKER`](../commands-legacy/kill-worker.md) (pour supprimer un process worker uniquement).

Un process peut créer un autre process. Les process ne sont pas organisés de manière hiérarchique - tous les process sont égaux, quel que soit le process à partir duquel ils ont été créés. Une fois que le process "parent" a créé un process "enfant", le process enfant se poursuit, que le process parent soit toujours en cours d'exécution ou non.

## Éléments d'un process

Chaque process contient des éléments spécifiques qu'il peut traiter indépendamment des autres process.

### Éléments de langage

- Variables : Chaque process possède ses propres [variables process] (../Concepts/variables#variables-process). Les variables process ne sont reconnues que dans le cadre de leur process natif.
- Ensembles process : Chaque process a ses propres ensembles process. `LockedSet` est un ensemble process. Les ensembles process sont effacés dès que la méthode process est terminée.
- [Méthode de gestion des erreurs](../Concepts/error-handling#installing-an-error-handling-method) : Chaque process peut avoir sa propre méthode de gestion des erreurs.
- [Fenêtre du débogueur](../Debugging/debugger#calling-the-debugger) : Chaque process peut avoir sa propre fenêtre de débogage.

### Éléments d'interface

Les éléments d'interface sont utilisés dans les [Applications Desktop](../category/desktop-applications). Il s'agit des éléments suivants :

- [Barre de menus](../Menus/creating.md) : Chaque process peut avoir sa propre barre de menus courante. La barre de menus du process au premier plan est la barre de menus courante de l'application.
- Une ou plusieurs fenêtres : Chaque processus peut avoir plusieurs fenêtres ouvertes simultanément. A l'inverse, des process peuvent n'avoir pas de fenêtre du tout.
- Une fenêtre active (de premier plan) : Bien qu'un process puisse disposer de plusieurs fenêtres ouvertes simultanément, chaque process n'a qu'une fenêtre active. Pour avoir plusieurs fenêtres actives à la fois, vous devez démarrer plusieurs process.
- Formulaires d'entrée et de sortie : Les formulaires d'entrée et de sortie par défaut peuvent être définis de manière procédurale pour chaque table dans chaque process.

:::info

- Par défaut, les process ne comportent pas de barre de menus, ce qui signifie que les raccourcis standard du menu **Edition** (notamment couper / copier / coller) ne sont pas disponibles dans les fenêtres des process. Lorsque vous appelez les dialogues ou les éditeurs de 4D (éditeur de formules, éditeur de recherches...) depuis un process, assurez-vous que l'équivalent d'un menu **Edition** est installé dans le process si vous souhaitez que l'utilisateur bénéficie des raccourcis clavier de type copier/coller.
- Les process exécutés sur le serveur (procédures stockées) et les [process préemptifs](preemptive.md) ne doivent pas contenir d'éléments d'interface.

:::

:::note

Chaque process a également une sélection courante et un enregistrement courant par table. Pour plus d'informations sur ces concepts, veuillez vous référer à [doc.4d.com](https://doc.4d.com/4Dv20/4D/20.1/Displaying-and-selecting-records.300-6602144.fr.html).

:::

## Remote processes

When you create a process on a remote 4D, a "twin" process is created on the server to handle data access and database context as soon as it is necessary, i.e. the first time the process on the remote 4D needs to access data.

For optimization reason, while no server access is required, for example if the process on the remote 4D runs an event-handling method or controls floating windows, no twin process is created on the server.

## Process Workers

L'utilisation d'un process Worker est un moyen simple et puissant d'échanger des informations entre les process. Cette fonctionnalité est basée sur un système de messagerie asynchrone qui permet d'appeler des process et des formulaires et de leur demander d'exécuter des méthodes avec des paramètres dans leur propre contexte.

Un process worker peut être "engagé" par n'importe quel process (en utilisant la commande [`CALL WORKER`](../commands-legacy/call-worker.md)) pour exécuter des méthodes projet avec des paramètres dans leur propre contexte, permettant ainsi l'accès à des informations partagées.

:::info

Dans les applications Desktop, une méthode projet peut également être exécutée avec des paramètres dans le contexte de n'importe quel formulaire en utilisant la commande [`CALL FORM`](../commands-legacy/call-form.md).

:::

Cette fonctionnalité répond aux besoins suivants en matière de communication interprocess de 4D :

- Étant donné qu'ils sont pris en charge par les process coopératifs et préemptifs, ils constituent la solution idéale pour la communication interprocess dans les [process préemptifs](preemptive.md) ([les variables interprocess sont dépréciées](https://doc.4d.com/4Dv20/4D/20/Deprecated-or-Removed-Features.100-6259787.en.html#5868705) et ne sont pas autorisées dans les process préemptifs).
- Ils constituent une alternative simple aux sémaphores, qui peuvent être lourds à mettre en place et complexes à utiliser

:::note

Although they have been designed mainly for interprocess communication in the context of preemptive processes, [`CALL WORKER`](../commands/call-worker) and [`CALL FORM`](../commands/call-form) can be used with cooperative processes.

:::

### Utilisation des workers

Un worker est utilisé pour demander à un process d'exécuter des méthodes projet. Un worker est composé de :

- un nom unique (*attention : le nom est sensible à la casse*), également utilisé pour nommer le process qui lui est associé
- un process associé, qui peut exister ou non à un moment donné
- une boîte aux lettres
- une méthode de démarrage (facultatif)

You ask a worker to execute a project method by calling the [`CALL WORKER`](../commands/call-worker) command. Le worker et sa boîte aux lettres sont créés lors de la première utilisation ; le process qui lui est associé est également lancé automatiquement lors de la première utilisation. Si le process worker meurt par la suite, la boîte aux lettres reste ouverte et tout nouveau message dans la boîte lancera un nouveau process worker.

L'animation suivante illustre cette séquence :

![](../assets/en/Develop/WorkerAnimation.gif)

Unlike a process created with the [`New process`](../commands/new-process) command, a worker process **remains alive after the execution of the process method ends**. Cela signifie que toutes les exécutions de méthodes pour le même worker seront exécutées dans le même process, qui conserve toutes les informations relatives à l'état du process (variables process, enregistrement courant et sélection courante, etc.). Par conséquent, les méthodes exécutées successivement accèdent aux mêmes informations et les partagent, ce qui permet la communication entre les process. La boîte aux lettres du worker traite les appels successifs de manière asynchrone.

[`CALL WORKER`](../commands/call-worker) encapsulates both the method name and command arguments in a message that is posted in the worker's message box. Le process worker est alors lancé, s'il n'existe pas déjà, et il lui est demandé d'exécuter le message. This means that [`CALL WORKER`](../commands/call-worker) will usually return before the method is actually executed (processing is asynchronous). For this reason, [`CALL WORKER`](../commands/call-worker) does not return any value. If you need a worker to send information back to the process which called it (callback), you need to use [`CALL WORKER`](../commands/call-worker) again to pass the information needed to the caller. Bien entendu, dans ce cas, l'appelant lui-même doit être un worker.

It is not possible to use [`CALL WORKER`](../commands/call-worker) to execute a method in a process created by the [`New process`](../commands/new-process) command. Seuls les process worker ont une boîte aux lettres et peuvent donc être appelés par `CALL WORKER`. Note that a process created by [`New process`](../commands/new-process) can call a worker, but cannot be called back.

Worker processes can be created on 4D Server through stored procedures: for example, you can use the `Execute on server` command to execute a method that calls the [`CALL WORKER`](../commands/call-worker) command.

Un process worker est fermé par un appel à la commande [`KILL WORKER`](../commands-legacy/kill-worker.md), qui vide la boîte aux lettres du worker et demande au process associé d'arrêter de traiter les messages et de terminer son exécution dès que la tâche en cours est terminée.

La méthode de démarrage d'un worker est la méthode utilisée pour créer le worker (à la première utilisation). If [`CALL WORKER`](../commands/call-worker) is called with an empty *method* parameter, then the startup method is automatically reused as method to execute.

The main process created by 4D when opening a database for user and application modes is a worker process and can be called using [`CALL WORKER`](../commands/call-worker). Note that the name of the main process may vary depending on the 4D localization language, but it always has the process number 1; as a result, it's more convenient to designate it by process number instead of process name when calling [`CALL WORKER`](../commands/call-worker).

### Identifier les process worker

Tous les process worker, à l'exception du process principal, ont le type de process `Worker process` (5) renvoyé par la commande [`Process info`](../commands/process-info.md).

Des [icônes spécifiques](../ServerWindow/processes#process-type) identifient les process worker.

### Voir également

Pour plus d'informations, veuillez consulter [cet article de blog](https://blog.4d.com/4d-summit-2016-laurent-esnault-presents-workers-and-ui-in-preemptive-mode/) sur l'utilisation des workers.
