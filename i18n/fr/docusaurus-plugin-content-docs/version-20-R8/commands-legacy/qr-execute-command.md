---
id: qr-execute-command
title: QR EXECUTE COMMAND
slug: /commands/qr-execute-command
displayed_sidebar: docs
---

<!--REF #_command_.QR EXECUTE COMMAND.Syntax-->**QR EXECUTE COMMAND** ( *zone* ; *numCommande* )<!-- END REF-->
<!--REF #_command_.QR EXECUTE COMMAND.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| zone | Integer | &#8594;  | Référence de la zone |
| numCommande | Integer | &#8594;  | Commande de menu à exécuter |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR EXECUTE COMMAND.Summary-->La commande **QR EXECUTE COMMAND** exécute la commande de bouton de la barre d'outils dont la référence est passée dans le paramètre *numCommande*.<!-- END REF--> En général, cette commande est utilisée pour exécuter une commande de menu sélectionnée par l'utilisateur et interceptée dans votre code via la commande [QR ON COMMAND](qr-on-command.md).

Passez dans le paramètre *numCommande* une valeur ou l'une des constantes suivantes du thème *QR Commandes* (seuls les événements listés sont pris en charge) :

| Constante            | Valeur | Comment                                                   |
| -------------------- | ------ | --------------------------------------------------------- |
| qr cmd generate      | 2008   | Utilisation de la commande [QR RUN](qr-run.md) conseillée |
| qr cmd open          | 2001   |                                                           |
| qr cmd page setup    | 2006   |                                                           |
| qr cmd print preview | 2007   |                                                           |
| qr cmd save          | 2002   |                                                           |
| qr cmd save as       | 2003   |                                                           |

Si un numéro de *zone* invalide est passé, l’erreur -9850 est générée.

Si le paramètre *numCommande* est incorrect, l’erreur -9852 est générée.

#### Voir aussi 

[QR Get command status](qr-get-command-status.md)  
[QR ON COMMAND](qr-on-command.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 791 |
| Thread safe | &cross; |
| Modifie les variables | error |


