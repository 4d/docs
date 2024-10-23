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

<!--REF #_command_.On Exit database method.Summary-->La **On Exit database method** est appelée une fois lorsque vous quittez la base.<!-- END REF-->

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

#### Note 

L'exemple ci-dessous liste les méthodes utilisées dans une base qui note les événements significatifs se produisant lors d'une session de travail. Les étapes sont écrites dans un document texte appelé “Journal”.

* La initialise la variable interprocess *◊vbQuit4D*, qui signale tous les process utilisés, qu'on sorte ou non de la base. Elle crée aussi le fichier journal, s'il n'existe pas déjà.

```4d
  // Méthode base Sur ouverture
 var ◊vtIPMessage : Text
 var ◊vbQuit4D : Boolean
 ◊vbQuit4D:=False
 
 If(Test path name("Journal") # Is a document)
    $vhDocRef:=Create document("Journal")
    If(OK=1)
       CLOSE DOCUMENT($vhDocRef)
    End if
 End if
 ECRIRE JOURNAL("Ouverture Session")
```

* La méthode projet ECRIRE JOURNAL, utilisée comme sous-routine par les autres méthodes, écrit l'information qu'elle reçoit dans le fichier journal :

```4d
  // Méthode Projet ECRIRE JOURNAL
  // ECRIRE JOURNAL ( Texte )
  // ECRIRE JOURNAL ( Description Evenement )
 var $1 : Text
 var $vhDocRef : Time
 
 While(Semaphore("$Journal"))
    DELAY PROCESS(Current process;1)
 End while
 $vhDocRef:=Append document("Journal")
 If(OK=1)
    PROCESS PROPERTIES(Current process;$vsProcessNom;$vlEtat;$vlTempsEcoule;$vbVisible)
    SEND PACKET($vhDocRef;String(Date du jour)+Caractere(9)+Chaine(Heure courante)+Caractere(9)+Chaine(Numero du process courant)+Caractere(9)+$vsProcessNom+Caractere(9)+$1+Caractere(13))
    CLOSE DOCUMENT($vhDocRef)
 End if
 CLEAR SEMAPHORE("$Journal")
```

Notez que le document est ouvert et refermé à chaque fois. Notez aussi l'emploi d'un sémaphore comme “protection d'accès” au document — nous ne voulons pas que deux process essaient d'accéder au fichier journal en même temps.

* La méthode projet M\_AJOUT\_ENRG est exécutée lorsque la commande de menu **Ajouter enregistrement** est sélectionnée en mode Application :

```4d
  // Méthode Projet M_AJOUT_ENRG
 
 CHANGER BARRE(1)
 Repeat
    ADD RECORD([Table1];*)
    If(OK=1)
       ECRIRE JOURNAL("Ajout d'enregistrement #"+String(Numero enregistrement([Table1]))+" dans Table1")
    End if
 Until((OK=0) | ◊vbQuit4D)
```

Cette méthode effectue une boucle jusqu'à ce que l'utilisateur annule la saisie de données ou que la base soit refermée. 

* Le formulaire entrée de la *\[Table1\]* inclut le traitement des événements On Outside Call. Ainsi, même si un process est en saisie de données, on en sort "en douceur", et l'utilisateur peut sauvegarder (ou non) la saisie en cours :

```4d
  // Méthode formulaire [Table1];"Entrée"
 Case of
    :(FORM Event=On Outside Call)
       If(◊vtIPMessage="QUITTER")
          CONFIRM("Voulez-vous sauvegarder les modifications dans cet enregistrement ?")
          If(OK=1)
             ACCEPT
          Else
             CANCEL
          End if
       End if
 End case
```

* La méthode projet M\_QUIT est exécutée lorsque la commande **Quitter** du menu **Fichier** en mode Application est sélectionnée :

```4d
  // Méthode Projet M_QUIT
 $vlProcessID:=New process("ON_QUIT";32*1024;"$ON_QUIT")
```

Cette méthode utilise une astuce. Lorsque la commande [QUIT 4D](quit-4d.md) est appelée, elle a un effet immédiat. En conséquence, le process dans lequel elle est appelée est placé en “mode arrêt”, jusqu'à ce que la base ait été effectivement refermée. Comme ce process peut être un des process dans lequel est effectuée la saisie de données, l'appel à [QUIT 4D](quit-4d.md) est réalisé dans un process local qui n'est démarré que pour ce but. Voici la méthode ON\_QUIT:

```4d
  // Méthode projet ON_QUIT
 CONFIRM("Etes-vous certain de vouloir quitter ?")
 If(OK=1)
    ECRIRE JOURNAL("Sortie de la base")
    QUIT 4D
  // QUITTER 4D a un effet immédiat. Aucune ligne de code n'est exécutée par la suite.
  // ...
 End if
```

* Enfin, voici la **On Exit database method**, qui signale à tous les process utilisateur qu'“il est temps de partir !”. Elle met *◊vbQuit4D* à Vrai et envoie des messages interprocess aux process utilisateur qui gèrent la saisie de données :

```4d
  // Méthode base Sur fermeture
 ◊vbQuit4D:=True
 Repeat
    $vbfini:=True
    For($vlProcess;1;Count tasks)
       PROCESS PROPERTIES($vlProcess;$vsProcessNom;$vlEtat;$vlTempsEcoule;$vbVisible)
       If(((($vsProcessNom="ML_@") | ($vsProcessNom="M_@"))) & ($vlEtat>=0))
          $vbfini:=False
          ◊vtIPMessage:="QUITTER"
          BRING TO FRONT($vlProcess)
          CALL PROCESS($vlProcess)
          $vhStart:=Current time
          Repeat
             DELAY PROCESS(Current process;60)
          Until((Process state($vlProcess)<0) | ((Current time-$vhStart)>=?00:01:00?))
       End if
    End for
 Until($vbfini)
 ECRIRE JOURNAL("Fermeture de session")
```

**Note :** Les process dont les noms commencent par "ML\_..." ou "M\_..." sont démarrés par les commandes de menus pour lesquelles la propriété **Démarrer un process** a été sélectionnée. Dans cet exemple, ce sont les process démarrés suite à la sélection de la commande de menu **Ajouter enregistrement**.

Le test *(Heure courante-$vhStart)>=?00:01:00?* permet à la méthode base de sortir de la boucle “en attente de l'autre process”, si l'autre process ne réagit pas pendant une minute.

* Voici un exemple type de fichier Journal produit par la base :  
| 2/6/03 | 15:47:25 | 1 | Process principal | Ouverture de Session                   |  
| ------ | -------- | - | ----------------- | -------------------------------------- |  
| 2/6/03 | 15:55:43 | 5 | ML\_1             | Ajout d'enregistrement #23 dans Table1 |  
| 2/6/03 | 15:55:46 | 5 | ML\_1             | Ajout d'enregistrement #24 dans Table1 |  
| 2/6/03 | 15:55:54 | 6 | $On\_QUIT         | Sortie de la base                      |  
| 2/6/03 | 15:55:58 | 7 | $xx               | Fermeture de session                   |

**Note** : *$xx* est le nom du process local démarré par 4D pour exécuter la **On Exit database method**.

#### Voir aussi 

[On Startup database method](on-startup-database-method.md)  
[QUIT 4D](quit-4d.md)  