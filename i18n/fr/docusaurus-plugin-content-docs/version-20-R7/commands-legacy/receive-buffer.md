---
id: receive-buffer
title: RECEIVE BUFFER
slug: /commands/receive-buffer
displayed_sidebar: docs
---

<!--REF #_command_.RECEIVE BUFFER.Syntax-->**RECEIVE BUFFER** ( *varRéception* )<!-- END REF-->
<!--REF #_command_.RECEIVE BUFFER.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| varRéception | Text | &#8592; | Variable devant recevoir les données |

<!-- END REF-->

#### Description 

<!--REF #_command_.RECEIVE BUFFER.Summary-->La commande **RECEIVE BUFFER** lit les données du port série préalablement ouvert par la commande [SET CHANNEL](set-channel.md).<!-- END REF--> Le port série comporte un buffer qui se remplit de caractères jusqu'à ce qu'une commande les charge. **RECEIVE BUFFER** récupère les caractères présents dans le buffer, les place dans la variable *varRéception* puis vide le buffer. S'il n'y a pas de caractères dans le buffer, la variable *varRéception* est vide. 

**Sous Windows**  
Le buffer du port série sous Windows a une capacité limitée à 10 Ko. Cela signifie que le buffer peut être saturé. Lorsqu'il est plein et que de nouveaux caractères sont reçus, ils remplacent les plus anciens caractères. Les anciens caractères sont perdus ; par conséquent, il est important que le buffer soit lu rapidement lorsque des nouvelles données sont reçues.

**Sous Mac OS**  
Le buffer du port série sous Mac OS X a une capacité en principe illimitée (elle dépend de la mémoire disponible). Si le buffer est saturé et que de nouveaux caractères sont reçus, ils remplacent les plus anciens caractères. Les anciens caractères sont perdus ; par conséquent, il est important que le buffer soit lu rapidement lorsque des nouvelles données sont reçues.

La commande **RECEIVE BUFFER** est différente de [RECEIVE PACKET](receive-packet.md) dans la mesure où elle récupère tout ce qui se trouve dans le buffer et le retourne immédiatement. [RECEIVE PACKET](receive-packet.md), pour sa part, attend de récupérer un caractère spécifique ou un certain nombre de caractères.

Pendant l'exécution d'un **RECEIVE BUFFER**, l'utilisateur peut interrompre l'opération en appuyant sur les touches **Ctrl**+**Alt**+**Maj** (sous Windows) ou **Commande**+**Option**+**Maj** (sous Mac OS). Cette interruption génère une erreur -9994 que vous pouvez intercepter à l'aide d'une méthode installée par la commande [ON ERR CALL](on-err-call.md).

#### Exemple 

La méthode projet ECOUTER PORT SÉRIE utilise **RECEIVE BUFFER** pour récupérer du texte depuis le port série et l'accumuler dans une variable interprocess : 

```4d
  // ECOUTER PORT SÉRIE
  // Ouvrir le port série
 SET CHANNEL(201;Speed 9600+Data bits 8+Stop bits one+Parity none)
 ◊IP_Ecouter_Port_Série:=True
 While(◊IP_Ecouter_Port_Série)
    RECEIVE BUFFER($vtBuffer)
    If((Length($vtBuffer)+Length(◊vtBuffer))>MAXLARGTEXTE)
       ◊vtBuffer:=""
    End if
    ◊vtBuffer:=◊vtBuffer+$Buffer
 End while
```

A ce stade, tout autre process peut lire la variable interprocess *◊vtBuffer* pour exploiter les données en provenance du port série.

Pour cesser d'écouter le port série, exécutez simplement la méthode suivante :

```4d
  // Fin de l'écoute du port série
 ◊IP_Ecouter_Port_Série:=False
```

  
Notez que l'accès à la variable interprocess *◊vtBuffer* doit être protégé par un sémaphore, de manière à ce que les process n'entrent pas en conflit (reportez-vous à la description de la fonction [Semaphore](semaphore.md) pour plus d'informations).

#### Voir aussi 

[ON ERR CALL](on-err-call.md)  
[RECEIVE PACKET](receive-packet.md)  
[Semaphore](semaphore.md)  
[SET CHANNEL](set-channel.md)  
[USE CHARACTER SET](use-character-set.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 172 |
| Thread safe | &check; |
| Modifie les variables | error |
| Interdite sur le serveur ||


