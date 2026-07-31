---
id: async
title: Exécution asynchrone
---

4D prend en charge les modes d'exécution **synchrone** et **asynchrone**, ce qui permet aux développeurs de choisir la meilleure approche en fonction des performances, de la réactivité et de la répartition de la charge de travail.

## Principes de base

#### Exécution synchrone

L'exécution synchrone suit un flux **séquentiel**, un pas à pas où chaque instruction doit être terminée avant que la suivante ne commence. Cela signifie que le fil d'exécution est bloqué jusqu'à la fin de l'opération.

L'exécution synchrone est utilisée lorsque :

- L'exécution des tâches doit suivre un ordre strict.
- L'impact sur les performances est minime (par exemple, opérations rapides).
- L'exécution s'effectue dans un contexte monotâche où le blocage est acceptable.

L'exécution synchrone bloque l'interface utilisateur et convient mieux aux tâches rapides et ordonnées pour lesquelles le blocage est acceptable.

#### Exécution asynchrone

L'exécution asynchrone est orientée événements (**event-driven**) et permet aux autres opérations de se terminer. Elle s'appuie sur des **callbacks**, des **workers** et des **event handlers** pour gérer le flux d'exécution.

L'exécution asynchrone est utilisée pour :

- Une opération prend un certain temps (par exemple, attente d'une réponse du serveur).
- La réactivité est essentielle (par exemple, interactions avec l'interface utilisateur).
- Les tâches d'arrière-plan, la communication réseau ou le traitement parallèle sont effectués.

Choisir entre l'exécution synchrone et l'exécution asynchrone :

| Scénario                                                  | Meilleure approche |
| --------------------------------------------------------- | ------------------ |
| Opérations rapides avec un minimum de traitement          | **Synchrone**      |
| Tâches nécessitant un ordre d'exécution strict            | **Synchrone**      |
| Tâches d'arrière-plan de longue durée                     | **Asynchrone**     |
| Interactions de longue durée avec l'interface utilisateur | **Asynchrone**     |
| Interactions de courte durée avec l'interface utilisateur | **Synchrone**      |
| Charges de travail multi-tâches, hautes performances      | **Asynchrone**     |

## Principes fondamentaux

4D offre des capacités intégrées d'exécution **asynchrone** par le biais de diverses classes et commandes. Elles permettent l'exécution de tâches en arrière-plan, la communication réseau et le traitement de données volumineuses, tout en attendant que d'autres opérations se terminent sans bloquer le process en cours.

Le concept général de la gestion asynchrone des événements dans 4D est basé sur un modèle de messagerie asynchrone utilisant des **workers** (process qui écoutent les événements) et des **callbacks** (fonctions ou formules automatiquement invoquées lorsqu'un événement se produit). Au lieu d'attendre un résultat (mode synchrone), vous fournissez une fonction qui sera automatiquement appelée lorsque l'événement souhaité se produira. Les callbacks peuvent être passés sous forme de fonctions de classe (recommandé) ou d'objets Formula.

Ce modèle est commun à [`CALL WORKER`](../commands/call-worker), [`CALL FORM`](../commands/call-form), et aux [classes qui prennent en charge l'exécution aynchrone](#asynchronous-programming-with-4d-classes). Toutes ces commandes/classes lancent une opération qui s'exécute en arrière-plan. L'instruction qui lance l'opération rend la main immédiatement, sans attendre la fin de l'opération.

### Workers

La programmation asynchrone repose sur un système de [**workers**](../Develop/processes.md#worker-processes) (process workers), qui permet d'exécuter du code en parallèle sans bloquer le process principal. Ceci est particulièrement utile pour les tâches longues (telles que les appels HTTP, l'exécution de process externes, le traitement en arrière-plan), tout en gardant l'interface utilisateur réactive.

L'utilisation de process workers dans la programmation asynchrone **est obligatoire** puisque les process "classiques" terminent automatiquement leur exécution à la fin de la méthode du process, ce qui ne permet pas d'utiliser des callbacks. Un process worker reste en vie et peut **écouter les événements**.

### File d'attente d'événements (boîte aux lettres)

Chaque worker (ou fenêtre de formulaire pour [`CALL FORM`](../commands/call-form)) a sa propre file d'attente de messages. [`CALL WORKER`](../commands/call-worker) ou [`CALL FORM`](../commands/call-form) ajoute simplement un message dans cette file d'attente. Le worker traite les messages un par un, dans l'ordre où ils arrivent, dans son propre contexte. Les variables process, les sélections courantes, etc. sont conservées.

### Communication bidirectionnelle par messages

Le process appelant envoie un message, puis le workerl'exécute. Le worker peut à son tour renvoyer un message (via [`CALL WORKER`](../commands/call-worker) ou [`CALL FORM`](../commands/call-form)) à l'appelant ou à un autre worker pour notifier un événement (fin de tâche, données reçues, erreur, progression, etc.). Ce mécanisme remplace le retour classique des appels synchrones.

### Écoute d'événements

Dans le cadre d'un développement orienté événements (*event-driven development*), il est évident qu'une partie du code doit être en mesure d'écouter les événements entrants. Les événements peuvent être générés par l'interface utilisateur (comme un clic souris sur un objet ou une touche de clavier enfoncée) ou par toute autre interaction telle qu'une requête http ou la fin d'une autre action. Un clic sur un bouton déclenche le code associé au bouton. Par exemple, lorsqu'un formulaire est affiché à l'aide de la commande [`DIALOG`](../commands/dialog), les actions de l'utilisateur peuvent déclencher des événements que votre code peut traiter.

Dans le contexte de l'exécution asynchrone, les fonctionnalités suivantes placent votre code en mode d'écoute :

- [`CALL WORKER`](../commands/call-worker) exécute le code pour lequel il a été appelé, puis retourne à un statut d'écoute à partir duquel il peut être appelé par la suite.
- [`CALL FORM`](../commands/call-form) ouvre un formulaire et lui fait écouter les messages entrants de la file d'attente des événements.
- un appel à `wait()` écoute `terminate()` ou `shutdown()` dans un callback depuis n'importe quelle autre instance.

### Déclenchement d'événements

Les événements sont automatiquement déclenchés au cours de l'exécution et transmis aux callbacks correspondants. Vous pouvez forcer le déclenchement d'événements en appelant `terminate()` ou `shutdown()` pendant un `wait()`.

### Contexte d'exécution du callback

Lorsque 4D exécute un de vos callbacks, il le fait dans le contexte du process courant (worker), c'est-à-dire que si votre objet est instancié dans un formulaire, la fonction callback sera exécutée dans le contexte de ce même formulaire.

Pour que les callbacks fonctionnent correctement en mode totalement asynchrone, l'opération doit généralement être lancée depuis un worker (via `CALL WORKER`). S'ils sont lancés à partir d'un process gérant l'interface utilisateur, certains callbacks peuvent ne pas être appelés tant que l'interface utilisateur n'écoute pas les événements.

### Libération d'un objet asynchrone

En 4D, tout objet est libéré [dès lors qu'il n'y a plus de référence](../Concepts/dt_object.md#resources) à cet objet en mémoire. Cela se produit généralement à la fin de l'exécution d'une méthode pour les variables locales.

Pour les classes asynchrones, une **référence supplémentaire** est toujours maintenue par 4D dans le process qui a instancié l'objet. Cette référence n'est libérée que lorsque l'opération est terminée, c'est-à-dire après le déclenchement de l'événement `onTerminate`. Ce référencement automatique permet à votre objet de survivre même si vous ne l'avez pas référencé spécifiquement dans une variable.

Si vous voulez "forcer" la libération d'un objet à tout moment, utilisez une fonction `.shutdown()` ou `terminate()` ; elle déclenche l'événement onTerminate\\` et libère ainsi l'objet.

### Exemples illustrant le concept commun

| Fonctionnalité                  | Lancement asynchrone                                                                  | Gestion des callbacks et des événements                             |
| ------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| CALL WORKER                     | CALL WORKER("wk" ; "MyMethod" ; $params)                           | MyMethod est appelée avec $params                                   |
| CALL FORM                       | CALL FORM($win; "MyMethod"; $params)                               | MyMethod est appelée avec $params                                   |
| 4D.SystemWorker | 4D.SystemWorker.new(cmd; $options) | Callbacks: onData, onResponse, onError, onTerminate |

## Programmation asynchrone avec les classes 4D

Plusieurs classes 4D prennent en charge les traitements asynchrones :

- [`HTTPRequest`](../API/HTTPRequestClass.md) - Gère les requêtes et les réponses HTTP asynchrones.
- [`SystemWorker`](../API/SystemWorkerClass.md) - Exécute des process externes de manière asynchrone.
- [`TCPConnection`](../API/TCPConnectionClass.md) - Gère les connexions client TCP avec des callbacks événementiels.
- [`TCPListener`](../API/TCPListenerClass.md) - Gère les connexions au serveur TCP.
- [`UDPSocket`](../API/UDPSocketClass.md) - Envoie et reçoit des paquets UDP.
- [`WebSocket`](../API/WebSocketClass.md) - Gère les connexions des clients WebSocket.
- [`WebSocketServer`](../API/WebSocketServerClass.md) - Gère les connexions serveur WebSocket.

Toutes ces classes suivent les mêmes règles en matière d'exécution asynchrone. Leur constructeur accepte un paramètre *options* qui est utilisé pour configurer votre objet asynchrone. Il est recommandé que l'objet *options* soit une instance de [classe utilisateur](../Concepts/classes.md) qui possède des fonctions de callback. Par exemple, vous pouvez créer une fonction `onResponse()` dans la classe, qui sera automatiquement appelée de manière asynchrone lorsqu'un événement *response* est déclenché.

Nous recommandons la séquence suivante :

1. Vous créez la classe utilisateur dans laquelle vous déclarez les fonctions de callback, par exemple `cs.Params` avec les fonctions `onError()` et `onResponse()`.
2. Vous instanciez la classe utilisateur (dans notre exemple en utilisant `cs.Params.new()`) qui configurera votre objet asynchrone.
3. Vous appelez le constructeur de la classe 4D (par exemple `4D.SystemWorker.new()`) et vous passez l'objet *options* en paramètre. Il démarre immédiatement les opérations passées sans délai.

Voici un exemple complet de mise en œuvre d'un objet *options* basé sur une classe utilisateur :

```4d
// création de code asynchrone
var $options:=cs.Params.new(10) //voir le code de la classe cs.Params ci-dessous
var $systemworker:=4D.SystemWorker.new("/bin/ls -l /Users " ;$options) 


// Classe "Params"

Class constructor($timeout : Real)
    This.dataType:="text"
    This.data:=""
    This.dataError:=""
    This.timeout:=$timeout

Function onResponse($systemWorker : Object)
     This._createFile("onResponse" ; $systemWorker.response)

Function onData($systemWorker : Object ; $info : Object)
     This.data+=$info.data
     This._createFile("onData";this.data)

Function onDataError($systemWorker : Object ; $info : Object)
     This.dataError+=$info.data
     This._createFile("onDataError";this.dataError)

Function onTerminate($systemWorker : Object)
     var $textBody : Text
     $textBody:="Response : "+$systemWorker.response
     $textBody+="ResponseError : "+$systemWorker.responseError
     This._createFile("onTerminate" ; $textBody)

Function _createFile($title : Text ; $textBody : Text)
     TEXT TO DOCUMENT(Get 4D folder(Current resources folder)+$title+".txt" ; $textBody)

```

Notez que `onResponse`, `onData`, `onDataError`, et `onTerminate` sont des fonctions prises en charge par [`4D.SystemWorker`](../API/SystemWorkerClass.md).

Une fois la classe utilisateur instanciée ; 4D est mis en mode [écoute d'événements](#event-listening) auquel cas 4D peut [déclencher un événement](#event-triggering) qui appelle la fonction correspondante dans la classe utilisateur.

:::tip

Dans certains cas, vous pouvez vouloir utiliser des formules comme valeurs de propriété au lieu de fonctions de classe. Bien qu'il ne s'agisse pas la meilleure pratique, une syntaxe telle que la suivante est acceptée :

```4d
var $options.onResponse:=Formula(myMethod) 
```

:::

## Exécution synchrone dans du code asynchrone

Même lorsque vous utilisez un code moderne et asynchrone, vous pouvez avoir besoin d'introduire un certain degré d'exécution synchrone. Par exemple, vous pouvez souhaiter qu'une fonction attende un certain temps avant d'obtenir un résultat. Cela peut être le cas avec des connexions réseau rapides garanties ou des system workers. Alors, vous pouvez imposer une exécution synchrone en utilisant la fonction `wait()`.

La fonction **`.wait()`** met en pause l'exécution du process courant et place 4D en mode [écoute d'événements](#event-listening). Gardez à l'esprit que tout événement reçu de n'importe quelle source sera pris en compte, et pas seulement de l'objet sur lequel la fonction `wait()` a été appelée.

La fonction `wait()` rend la main lorsque l'événement `onTerminate` a été déclenché sur l'objet, ou lorsque le délai d'attente fourni (le cas échéant) a expiré. Par conséquent, vous pouvez sortir explicitement d'un `.wait()` en appelant `shutdown()` ou `terminate()` à l'intérieur d'un callback. Sinon, on sort du `.wait()` lorsque l'opération en cours se termine.

Exemple :

```4d
var $options:=cs.Params.new() 
var $systemworker:=4D.SystemWorker.new("/bin/ls -l /Users " ;$options) 
$systemworker.wait(0.5) // Attend jusqu'à 0,5 secondes pour obtenir des informations sur le fichier.
```

## Voir également

[Blog post: Lancer un process externe de manière asynchrone](https://blog.4d.com/launch-an-external-process-asynchronously/)<br/>
[Appel asynchrone](../aikit/asynchronous-call.md)

