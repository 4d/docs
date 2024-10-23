---
id: on-server-shutdown-database-method
title: On Server Shutdown database method
slug: /commands/on-server-shutdown-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On Server Shutdown database method.Syntax-->**On Server Shutdown database method**<!-- END REF-->
<!--REF #_command_.On Server Shutdown database method.Params-->
| Ne requiert pas de paramètre |  |
| --- | --- |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### 

<!--REF #_command_.On Server Shutdown database method.Summary-->La **On Server Shutdown database method** est appelée une fois sur le poste serveur lorsque la base courante est refermée sur 4D Server.<!-- END REF--> La **On Server Shutdown database method** n'est appelée dans aucun environnement 4D autre que 4D Server.

Pour refermer la base courante sur le serveur, vous pouvez sélectionner la commande de menu **Fermer la base...** sur le serveur. Vous pouvez également choisir la commande **Quitter** ou appeler la commande [QUIT 4D](quit-4d.md) au sein d'une procédure stockée exécutée sur le serveur.

Lorsque le processus de fermeture de la base a été engagé, 4D effectue les actions suivantes :

* S'il n'y a pas de **On Server Shutdown database method**, 4D Server tue un à un chaque process en cours d'exécution, sans distinction.
* S'il existe une **On Server Shutdown database method**, 4D Server exécute cette méthode dans un nouveau process local. Vous pouvez donc utiliser cette méthode base pour informer les autres process, via la communication interprocess, qu'ils doivent mettre fin à leur exécution. Notez que dans tous les cas 4D Server quittera en fin de compte —la **On Server Shutdown database method** peut effectuer toutes les opérations de nettoyage et de fermeture que vous voulez, mais elle ne peut refuser de quitter, et finira par se terminer.

La **On Server Shutdown database method** est l'emplacement idéal pour :

* Stopper les procédures stockées lancées automatiquement à l'ouverture de la base.
* Sauvegarder (localement, sur disque) des préférences ou des paramétrages à réutiliser au début de la session suivante dans la *On Server Startup Database Method*.
* Effectuer toute autre action que vous souhaitez déclencher automatiquement à chaque fois que vous quittez la base.

**Important** : Si vous utilisez la **On Server Shutdown database method** pour refermer des procédures stockées, tenez compte du fait que le serveur quitte dès la fin de l'exécution de la **On Server Shutdown database method** (et non des procédures stockées). Si des procédures stockées tournent encore à cet instant, elles sont purement et simplement tuées.   
Par conséquent, si vous voulez être certain que les procédures stockées se terminent avant que le serveur ne les tue, il faut que la **On Server Shutdown database method** leur signale qu'elles doivent mettre fin à leur exécution (par le test d'une variable interprocess, par exemple) mais aussi qu'elle leur laisse le temps de se refermer (boucle de n secondes ou test d'une autre variable interprocess).

Si vous voulez que du code soit exécuté automatiquement sur un poste client lorsqu'un 4D distant met un terme à sa connexion au serveur, utilisez la [Semaphore](semaphore.md).
