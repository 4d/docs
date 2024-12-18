---
id: post-event
title: POST EVENT
slug: /commands/post-event
displayed_sidebar: docs
---

<!--REF #_command_.POST EVENT.Syntax-->**POST EVENT** ( *quoi* ; *message* ; *quand* ; *sourisX* ; *sourisY* ; *modifiers* {; *process*} )<!-- END REF-->
<!--REF #_command_.POST EVENT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| quoi | Integer | &#8594;  | Type d'événement |
| message | Integer | &#8594;  | Message de l'événement |
| quand | Integer | &#8594;  | Moment de l'événement exprimé en ticks |
| sourisX | Integer | &#8594;  | Coordonnée horizontale de la souris |
| sourisY | Integer | &#8594;  | Coordonnée verticale de la souris |
| modifiers | Integer | &#8594;  | Etat des touches Modifier |
| process | Integer | &#8594;  | Numéro de référence du process de destination ou File d'attente des événements de l'application si ce paramètre est omis ou si vous passez 0 |

<!-- END REF-->

#### Description 

<!--REF #_command_.POST EVENT.Summary-->La commande **POST EVENT** simule un événement (clavier ou souris).<!-- END REF--> Elle produit les mêmes effets que lorsque l'utilisateur agit réellement par l'intermédiaire du clavier ou de la souris.

Vous devez passer une des constantes prédéfinies suivantes dans le paramètre *quoi* :

| Constante        | Type        | Valeur |
| ---------------- | ----------- | ------ |
| Auto key event   | Entier long | 5      |
| Key down event   | Entier long | 3      |
| Key up event     | Entier long | 4      |
| Mouse down event | Entier long | 1      |
| Mouse up event   | Entier long | 2      |

Si l'événement est lié à la souris, passez *0* (zéro) dans le paramètre *message*. Si l'événement est lié au clavier, passez dans *message* le code du caractère simulé.

Généralement, vous passez la valeur retournée par la fonction [Tickcount](tickcount.md) dans *quand*.

Si l'événement est lié à la souris, passez les coordonnées horizontale et verticale du clic dans *sourisX* et *sourisY*. 

Dans le paramètre *modifiers*, vous devez passer une constante ou une combinaison de constantes du thème *Evénements (Modifiers)* :

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

Par exemple, pour simuler la touche Majuscule, passez la valeur Shift key bit.

Si vous passez le paramètre *process*, l'événement est envoyé au process dont vous avez passé le numéro. Si vous passez *0* (zéro) ou si vous omettez ce paramètre, l'événement est envoyé au niveau de l'application et le gestionnaire de 4D l'affectera au process approprié.

#### Voir aussi 

[POST CLICK](post-click.md)  
[POST KEY](post-key.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 467 |
| Thread safe | &cross; |


