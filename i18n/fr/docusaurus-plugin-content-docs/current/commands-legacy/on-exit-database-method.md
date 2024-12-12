---
id: on-exit-database-method
title: On Exit database method
slug: /commands/on-exit-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On Exit database method.Syntax-->**On Exit database method**<!-- END REF-->
<!--REF #_command_.On Exit database method.Params-->
| Ne requiert pas de paramètre |  |
| --- | --- |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### 

<!--REF #_command_.On Exit database method.Summary-->La méthode base **On Exit** est appelée une fois lorsque vous quittez la base.<!-- END REF-->

Les environnements 4D suivants sont concernés :

* 4D en mode local
* 4D en mode distant
* Application 4D compilée et fusionnée avec 4D VolumeDesktop

**Note :** La **On Exit database method** n'est PAS exécutée par 4D Server. Vous devez utiliser la méthode base *Sur arrêt serveur* dans ce contexte. 

La **On Exit database method** est exécutée automatiquement par 4D ; à la différence des méthodes projet, vous ne pouvez pas appeler cette méthode base par programmation. Vous pouvez toutefois l'exécuter depuis l'éditeur de méthodes. Vous pouvez également utiliser des sous-routines.

On sort de la base lorsque l'un des événements suivants se produit :

* L'utilisateur sélectionne la commande **Quitter** dans le menu **Fichier** en mode Développement ou Application (action standard Quitter).
* Un appel à la commande [QUIT 4D](quit-4d.md) a eu lieu.
* Un plug-in 4D a fait appel au point d'entrée [QUIT 4D](quit-4d.md).

Quel que soit le moyen par lequel la base a été quittée, 4D accomplit les actions qui suivent :

* S'il n'existe pas de **On Exit database method**, 4D détruit chaque process un par un, sans distinction. Si un utilisateur est en train de saisir des données, les enregistrements ne seront pas sauvegardés.
* S'il existe une **On Exit database method**, 4D démarre l'exécution de cette méthode dans un process local nouvellement créé. Notez que 4D quittera en tout état de cause — la **On Exit database method** peut assurer le nettoyage et la fermeture de toutes les opérations que vous voulez, mais la fermeture de la base est inéluctable.

Lorsque 4D est sur le point de quitter, le programme :

* demande aux process en cours d'exécution d'interrompre leur exécution dès que possible (uniquement dans les process exécutant du code 4D)
* active leur marqueur "process interrompu".
* déclenche les process qui ont été retardés par [DELAY PROCESS](delay-process.md) ou par d'autres moyens.

4D poursuit l'itération des process tant qu'un process est encore en vie, pour une durée maximale de 13 secondes. Pour répondre à une action de sortie, nous recommandons de définir un marqueur (comme une entrée dans l'objet Storage) dans la méthode base Sur arrêt serveur ou dans votre méthode de sortie personnalisée. Il peut être judicieux d'effectuer une boucle dans cette méthode (10 secondes maximum) pour laisser le temps à vos process en cours de répondre et de quitter correctement. Il n'est pas recommandé d'attendre plus de 10 secondes, pour éviter que 4D ne stoppe le process ou que le système d'exploitation ne stoppe l'application entière.

La **On Exit database method** est l'emplacement idéal pour :

* Sauvegarder (localement, sur disque) les préferences ou paramétrages devant être réutilisés lors de la prochaine session dans la .
* Accomplir toute autre action que vous souhaitez exécuter automatiquement à chaque fermeture de la base.

**Note:** Rappelez-vous que le process créé pour la **On Exit database method** est un process client (local), qui n'existe donc pas sur le poste serveur. Par conséquent, si vous effectuez dans cette méthode base une recherche ou un tri, tout poste client qui tentera de quitter l'application restera "bloqué". Si vous avez besoin d'accéder aux données lorsque le client quitte, vous devez créer depuis cette méthode base un process global qui, lui, pourra accéder aux données. Dans ce cas toutefois, veillez à ce que ce process puisse terminer son exécution (par l'intermédaire de variables interprocess, par exemple) avant d’être stoppé par la **On Exit database method** (à l'aide de [Storage](storage.md) ou d'un objet partagé, par exemple).

**Note :** En environnement client/serveur, la **On Exit database method** s'exécute différemment selon que l'utilisateur quitte manuellement (via la commande de menu **Quitter** ou l'appel de la commande [QUIT 4D](quit-4d.md)) ou que 4D Server est éteint, ce qui force tous les clients à quitter.   
Lorsqu'on quitte 4D Server et que l'on accorde un délai aux utilisateurs (par exemple 10 minutes), chaque poste client connecté affiche un message d'avertissement et si l'utilisateur quitte durant le délai imparti, la **On Exit database method** s'exécute normalement. Cependant, dans les autres cas (i.e. l'utilisateur ne répond pas à temps, ou le serveur quitte sans délai, ou encore le client est déconnecté manuellement par l'Administrateur), la **On Exit database method** est exécutée en même que la connexion au serveur est refermée. Par conséquent, le code de la **On Exit database method** ne peut pas lancer d'autre process local ou serveur, et ne peut pas attendre que les autres process soient annulés (et ces process ne peuvent plus continuer d'accéder au serveur). S'il tente de le faire, une erreur réseau est générée (erreur 10001 ou 10002) puisque la connexion au serveur est déjà refermée.

Pour stopper proprement les process en cours dans le cas où l'application est forcée de quitter, vous devez tester la commande [Process aborted](process-aborted.md) dans chaque boucle (Boucle, Tant que, Repeter) qui peut potentiellement durer plus d'une seconde. [Process aborted](process-aborted.md) retourne **vrai** si 4D (mode local, distant ou 4D Server) est sur le point de quitter, signifiant que les traitements vont stopper immédiatement. Dans ce cas, annulez tous les traitements ([CANCEL TRANSACTION](cancel-transaction.md), etc.) et quittez le plus vite possible. Alors que vous avez du temps si l'utilisateur quitte manuellement, vous n'en avez pas lorsque l'application est forcée de quitter.

#### Exemple 

L'exemple suivant illustre un cas typique où vous lancez un ou plusieurs process d'arrière-plan pour réaliser des tâches régulières, fonctionnant sans fin, dans la Méthode base On startup (ou dans le Méthode base On server startup). Un marqueur dans l'objet `Storage` de l'application est utilisé pour leur indiquer de terminer la tâche - et pour s'assurer qu'ils ont terminé.

- Dans la Méthode base On startup

```4d
 Use(Storage)
    Storage.global:=Nouvel objet partagé("ExitNow";False)
 End use
 $p:=New process("Serverjob";0;"Background job#1")
 $p1:=New process("Check_Invoices";0;"Background job#2")
```

- Voici un exemple d'une méthode d'arrière-plan :

```4d
  // effectuer des tâches régulières en arrière-plan sur le serveur
 While(Not(Bool(Storage.global.ExitNow)))
  //  Exécuter des tâches comptables, calculer des données, etc.
  // ...
    RETARDER PROCESS(Process courant;60*60) //sleep pendant une minute, puis répéter la boucle
 End while
```

- Dans la Méthode base On exit :

```4d
 Use(Storage.global)
    Storage.global.ExitNow:=True //demander à tous les workers en arrière-plan de s'arrêter
 End use
 
 $time:=Current time
 $finished:=False
 While((($time+10)>(Current time+0))&(Not($finished)))  // maximum 10 secondes
    $list:=Get process activity(Processes only) // obtenir la liste de tous les process 
    $sublist:=$list.processes.query("name='Background job@' and state >=0") 
    //existe-t-il encore une tâche en arrière-plan en cours ?
    $finished:=($sublist.length=0)
    If($sublist.length>0)
       For each($job;$sublist)
          RESUME PROCESS($job.number) //s'assurer que tous les process sont actifs
        End each
       End if
    End while
```

#### Voir aussi 

[On Startup database method](on-startup-database-method.md)  
[QUIT 4D](quit-4d.md)  