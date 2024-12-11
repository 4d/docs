---
id: qr-on-command
title: QR ON COMMAND
slug: /commands/qr-on-command
displayed_sidebar: docs
---

<!--REF #_command_.QR ON COMMAND.Syntax-->**QR ON COMMAND** ( *zone* ; *nomMéthode* )<!-- END REF-->
<!--REF #_command_.QR ON COMMAND.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| zone | Integer | &#8594;  | Référence de la zone |
| nomMéthode | Text | &#8594;  | Nom de la méthode à appeler |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR ON COMMAND.Summary-->La commande **QR ON COMMAND** exécute la méthode projet 4D dont le nom est passé dans le paramètre *nomMéthode* lorsqu'une commande de l'éditeur d'états rapides est appelée via la sélection d'un menu ou le clic sur un bouton.<!-- END REF-->

Si le paramètre *zone* vaut 0 (zéro), la méthode *nomMéthode* sera appelée pour toutes les zones de l'éditeur d'états rapides jusqu'à ce que la base soit refermée ou que l'instruction suivante soit exécutée : **QR ON COMMAND**(0;"").

La méthode *nomMéthode* reçoit deux paramètres :

* *$1* contient la référence de la zone (Entier long).
* *$2* contient le numéro de la commande sélectionnée (Entier long). Vous pouvez comparer cette valeur aux constantes suivantes du thème *QR Commandes* :  

| Constante            | Type        | Valeur | Comment                                                   |  
| -------------------- | ----------- | ------ | --------------------------------------------------------- |  
| qr cmd generate      | Entier long | 2008   | Utilisation de la commande [QR RUN](qr-run.md) conseillée |  
| qr cmd page setup    | Entier long | 2006   |                                                           |  
| qr cmd print preview | Entier long | 2007   |                                                           |

**Note :** Si vous souhaitez compiler votre base à l'aide du *Compilateur*, vous devez déclarer explicitement les paramètres $1 et $2 en entiers longs, même si vous ne les utilisez pas.

Si vous souhaitez que la commande initiale choisie par l'utilisateur soit exécutée, utilisez l'instruction suivante dans la méthode *nomMéthode* : [QR EXECUTE COMMAND](qr-execute-command.md)($1;$2).

Si un numéro de *zone* invalide est passé, l’erreur -9850 est générée.

#### Voir aussi 

*QR Commandes*  
[QR EXECUTE COMMAND](qr-execute-command.md)  
[QR Get command status](qr-get-command-status.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 790 |
| Thread safe | &check; |
| Modifie les variables | error |
| Interdite sur le serveur ||


