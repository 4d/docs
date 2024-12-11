---
id: post-key
title: POST KEY
slug: /commands/post-key
displayed_sidebar: docs
---

<!--REF #_command_.POST KEY.Syntax-->**POST KEY** ( *code* {; *modifiers* {; *process*}} )<!-- END REF-->
<!--REF #_command_.POST KEY.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| code | Integer | &#8594;  | Code d'un caractère ou code de touche de fonction |
| modifiers | Integer | &#8594;  | Etat des touches Modifier |
| process | Integer | &#8594;  | Numéro de référence du process de destination ou File d'attente des événements de l'application si paramètre omis ou égal à 0 |

<!-- END REF-->

#### Description 

<!--REF #_command_.POST KEY.Summary-->La commande **POST KEY** simule la frappe d'une touche sur le clavier.<!-- END REF--> Elle produit les mêmes effets que lorsque l'utilisateur tape réellement un caractère au clavier. 

Vous passez le code du caractère dans le paramètre *code*. 

Si vous n'utilisez pas le paramètre *modifiers*, aucun "modifier" (Majuscule, Option, etc...) n'est simulé. Si vous utilisez le paramètre *modifiers*, vous devez passer une constante ou une combinaison de constantes du thème *Evénements (Modifiers)* :

| Constante              | Type        | Valeur | Comment                                                   |
| ---------------------- | ----------- | ------ | --------------------------------------------------------- |
| Activate window bit    | Entier long | 0      |                                                           |
| Activate window mask   | Entier long | 1      |                                                           |
| Caps lock key bit      | Entier long | 10     | Windows et OS X                                           |
| Caps lock key mask     | Entier long | 1024   | Windows et OS X                                           |
| Command key bit        | Entier long | 8      | Touche Ctrl sous Windows, touche Commande sous OS X       |
| Command key mask       | Entier long | 256    | Touche Ctrl sous Windows, touche Commande sous OS X       |
| Control key bit        | Entier long | 12     | Touche Ctrl sous OS X, ou clic droit sous Windows et OS X |
| Control key mask       | Entier long | 4096   | Touche Ctrl sous OS X, ou clic droit sous Windows et OS X |
| Mouse button bit       | Entier long | 7      |                                                           |
| Mouse button mask      | Entier long | 128    |                                                           |
| Option key bit         | Entier long | 11     | Touche Alt (aussi appelée Option sous OS X)               |
| Option key mask        | Entier long | 2048   | Touche Alt (aussi appelée Option sous OS X)               |
| Right control key bit  | Entier long | 15     |                                                           |
| Right control key mask | Entier long | 32768  |                                                           |
| Right option key bit   | Entier long | 14     |                                                           |
| Right option key mask  | Entier long | 16384  |                                                           |
| Right shift key bit    | Entier long | 13     |                                                           |
| Right shift key mask   | Entier long | 8192   |                                                           |
| Shift key bit          | Entier long | 9      | Windows et OS X                                           |
| Shift key mask         | Entier long | 512    | Windows et OS X                                           |

Par exemple, pour simuler la touche Majuscule, passez la valeur Shift key mask.

Si vous passez le paramètre *process*, la frappe clavier est envoyée au process dont le numéro de référence est spécifié. Si vous passez *0* (zéro) dans ce paramètre ou si vous l'omettez, la frappe clavier est envoyée au niveau de l'application et le gestionnaire de 4D l'affectera au process approprié.

#### Exemple 

Reportez-vous à l'exemple de la fonction [Process number](process-number.md).

#### Voir aussi 

*Codes ASCII*  
*Codes des touches de fonction*  
[POST CLICK](post-click.md)  
[POST EVENT](post-event.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 465 |
| Thread safe | &check; |
| Interdite sur le serveur ||


