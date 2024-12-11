---
id: qr-get-command-status
title: QR Get command status
slug: /commands/qr-get-command-status
displayed_sidebar: docs
---

<!--REF #_command_.QR Get command status.Syntax-->**QR Get command status** ( *zone* ; *numCommande* {; *valeur*} ) : Integer<!-- END REF-->
<!--REF #_command_.QR Get command status.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| zone | Integer | &#8594;  | Référence de la zone |
| numCommande | Integer | &#8594;  | Numéro de commande |
| valeur | Integer, Text | &#8592; | Valeur du sous-élément sélectionné |
| Résultat | Integer | &#8592; | Statut de la commande |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR Get command status.Summary-->La commande **QR Get command status** retourne 0 si la commande désignée par le paramètre *numCommande* est inactivée et 1 si elle est activée.<!-- END REF-->

*valeur* retourne la valeur du sous-élément sélectionné, le cas échéant. Par exemple, si la commande sélectionnée est la liste déroulante des polices (1000) et que la police choisie est l'Arial, *valeur* vaut “Arial” ; si la commande sélectionnée est le menu des couleurs (1002, 1003 ou 1004), *valeur* retourne le numéro de la couleur. 

La commande **QR Get command status** peut être utilisée dans deux types de contextes :

* comme simple instruction pour déterminer si une commande est active ou non.
* dans une méthode installée par [QR ON COMMAND](qr-on-command.md) afin de connaître le sous-élément sélectionné. Dans cette méthode, *$1* contient la référence de la *zone* et *$2* le numéro de la commande.

Passez dans paramètre *numCommande* une des constantes du thème *QR Commandes* :

| Constante                     | Type        | Valeur | Comment                                                   |
| ----------------------------- | ----------- | ------ | --------------------------------------------------------- |
| qr cmd 4D View destination    | Entier long | 2503   |                                                           |
| qr cmd add column             | Entier long | 2608   |                                                           |
| qr cmd alt back color palette | Entier long | 1004   |                                                           |
| qr cmd automatic width        | Entier long | 2605   |                                                           |
| qr cmd average                | Entier long | 507    |                                                           |
| qr cmd back color palette     | Entier long | 1003   |                                                           |
| qr cmd back colors toolbar    | Entier long | 2052   |                                                           |
| qr cmd bold                   | Entier long | 500    |                                                           |
| qr cmd borders                | Entier long | 2609   |                                                           |
| qr cmd center justified       | Entier long | 504    |                                                           |
| qr cmd columns toolbar        | Entier long | 2054   |                                                           |
| qr cmd count                  | Entier long | 510    |                                                           |
| qr cmd default justified      | Entier long | 512    |                                                           |
| qr cmd delete column          | Entier long | 2601   |                                                           |
| qr cmd disk file destination  | Entier long | 2501   |                                                           |
| qr cmd edit column            | Entier long | 2603   |                                                           |
| qr cmd font color palette     | Entier long | 1002   |                                                           |
| qr cmd font dropdown          | Entier long | 1000   |                                                           |
| qr cmd format                 | Entier long | 2606   |                                                           |
| qr cmd generate               | Entier long | 2008   | Utilisation de la commande [QR RUN](qr-run.md) conseillée |
| qr cmd graph destination      | Entier long | 2502   |                                                           |
| qr cmd header and footer      | Entier long | 2005   |                                                           |
| qr cmd hide column            | Entier long | 2602   |                                                           |
| qr cmd hide line              | Entier long | 2607   |                                                           |
| qr cmd HTML file destination  | Entier long | 2504   |                                                           |
| qr cmd insert column          | Entier long | 2600   |                                                           |
| qr cmd italic                 | Entier long | 501    |                                                           |
| qr cmd left justified         | Entier long | 503    |                                                           |
| qr cmd max                    | Entier long | 509    |                                                           |
| qr cmd min                    | Entier long | 508    |                                                           |
| qr cmd move left              | Entier long | 3002   |                                                           |
| qr cmd move right             | Entier long | 3003   |                                                           |
| qr cmd new                    | Entier long | 2000   |                                                           |
| qr cmd open                   | Entier long | 2001   |                                                           |
| qr cmd operators toolbar      | Entier long | 2051   |                                                           |
| qr cmd page setup             | Entier long | 2006   |                                                           |
| qr cmd plain                  | Entier long | 511    |                                                           |
| qr cmd presentation           | Entier long | 2611   |                                                           |
| qr cmd print preview          | Entier long | 2007   |                                                           |
| qr cmd printer destination    | Entier long | 2500   |                                                           |
| qr cmd repeated values        | Entier long | 2604   |                                                           |
| qr cmd revert to save         | Entier long | 2004   |                                                           |
| qr cmd right justified        | Entier long | 505    |                                                           |
| qr cmd save                   | Entier long | 2002   |                                                           |
| qr cmd save as                | Entier long | 2003   |                                                           |
| qr cmd standard deviation     | Entier long | 513    |                                                           |
| qr cmd standard toolbar       | Entier long | 2053   |                                                           |
| qr cmd style toolbar          | Entier long | 2050   |                                                           |
| qr cmd sum                    | Entier long | 506    |                                                           |
| qr cmd totals spacing         | Entier long | 2610   |                                                           |
| qr cmd underline              | Entier long | 502    |                                                           |

Si un numéro de *zone* invalide est passé, l’erreur -9850 est générée.  
Si le paramètre *numCommande* est incorrect, l’erreur -9852 est générée.

#### Voir aussi 

[QR EXECUTE COMMAND](qr-execute-command.md)  
[QR ON COMMAND](qr-on-command.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 792 |
| Thread safe | &check; |
| Modifie les variables | error |
| Interdite sur le serveur ||


