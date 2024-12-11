---
id: post-click
title: POST CLICK
slug: /commands/post-click
displayed_sidebar: docs
---

<!--REF #_command_.POST CLICK.Syntax-->**POST CLICK** ( *sourisX* ; *sourisY* {; *process*} {; *} )<!-- END REF-->
<!--REF #_command_.POST CLICK.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| sourisX | Integer | &#8594;  | Coordonnée horizontale |
| sourisY | Integer | &#8594;  | Coordonnée verticale |
| process | Integer | &#8594;  | Numéro de référence du process de destination ou File d'attente des événements de l'application si ce paramètre est omis ou si vous passez 0 |
| * | Operator |  &#8594;  | Si spécifié, utiliser le système de coordonnées globales Si omis, utiliser le système de coordonnées locales |

<!-- END REF-->

#### Description 

<!--REF #_command_.POST CLICK.Summary-->La commande **POST CLICK** simule un clic souris.<!-- END REF--> Elle produit les mêmes effets que lorsque l'utilisateur clique réellement avec le bouton de la souris.

Vous passez les coordonnées horizontale et verticale du clic dans *sourisX* et *sourisY*. Si vous passez le paramètre *\**, vous exprimez ces coordonnées par rapport à l'écran. Si vous omettez le paramètre *\**, vous exprimez ces coordonnées par rapport à la fenêtre de premier plan du process dont le numéro est passé dans *process*.

Si vous passez le paramètre *process*, le clic est envoyé au process dont vous avez passé le numéro. Si vous passez *0* (zéro) ou si vous omettez ce paramètre, le clic est envoyé au niveau de l'application et le gestionnaire de 4D l'affectera au process approprié.

#### Voir aussi 

[POST EVENT](post-event.md)  
[POST KEY](post-key.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 466 |
| Thread safe | &check; |
| Interdite sur le serveur ||


