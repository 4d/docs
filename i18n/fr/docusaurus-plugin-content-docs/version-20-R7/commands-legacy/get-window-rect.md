---
id: get-window-rect
title: GET WINDOW RECT
slug: /commands/get-window-rect
displayed_sidebar: docs
---

<!--REF #_command_.GET WINDOW RECT.Syntax-->**GET WINDOW RECT** ( *gauche* ; *haut* ; *droite* ; *bas* {; *fenêtre*} )<!-- END REF-->
<!--REF #_command_.GET WINDOW RECT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| gauche | Integer | &#8592; | Coordonnée gauche de l'intérieur de la fenêtre |
| haut | Integer | &#8592; | Coordonnée supérieure de l'intérieur de la fenêtre |
| droite | Integer | &#8592; | Coordonnée droite de l'intérieur de la fenêtre |
| bas | Integer | &#8592; | Coordonnée inférieure de l'intérieur de la fenêtre |
| fenêtre | Integer | &#8594;  | Numéro de référence de la fenêtre ou Fenêtre de premier plan du process si omis ou Fenêtre MDI si -1 (Windows) |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.GET WINDOW RECT.Summary-->La commande **GET WINDOW RECT** retourne les coordonnées globales de la fenêtre dont vous avez passé le numéro de référence dans le paramètre *fenêtre*.<!-- END REF--> Si la fenêtre n'existe pas, les variables des paramètres sont inchangées.

Si vous omettez le paramètre *fenêtre*, **GET WINDOW RECT** s'applique à la fenêtre de premier plan du process courant. 

Les coordonnées retournées sont exprimées relativement au coin supérieur gauche de la zone de contenu de la fenêtre d'application (sous Windows mode MDI) ou de l'écran principal (macOS et Windows en mode SDI). Les coordonnées retournent le rectangle correspondant à la zone de contenu de la fenêtre (en excluant les barres de titres et les bordures). 

**Note :** Sous Windows, si vous passez -1 dans *fenêtre*, **GET WINDOW RECT** retourne les coordonnées de la fenêtre d'application (fenêtre MDI) relativement à l'écran. Dans ce cas en mode SDI, **GET WINDOW RECT** retourne les coordonnées (0;0;0;0). 

#### Exemple 

Reportez-vous à l'exemple de la commande [WINDOW LIST](window-list.md).

#### Voir aussi 

[CONVERT COORDINATES](convert-coordinates.md)  
[SET WINDOW RECT](set-window-rect.md)  