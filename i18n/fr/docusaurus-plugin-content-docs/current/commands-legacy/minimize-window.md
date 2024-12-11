---
id: minimize-window
title: MINIMIZE WINDOW
slug: /commands/minimize-window
displayed_sidebar: docs
---

<!--REF #_command_.MINIMIZE WINDOW.Syntax-->**MINIMIZE WINDOW** {( *fenêtre* )}<!-- END REF-->
<!--REF #_command_.MINIMIZE WINDOW.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| fenêtre | Integer | &#8594;  | Numéro de référence de la fenêtre Si omis = Toutes les fenêtres (Windows) ou Fenêtre de premier plan du process courant (Mac OS) |

<!-- END REF-->

#### Description 

<!--REF #_command_.MINIMIZE WINDOW.Summary-->La commande **MINIMIZE WINDOW** provoque un zoom arrière de la fenêtre dont vous avez passé le numéro de référence dans *fenêtre* ou, si ce paramètre est omis, de toutes les fenêtres de l'application (sous Windows) ou de la fenêtre de premier plan du process courant (sous Mac OS).<!-- END REF-->

Cette commande produit le même effet qu'un clic sur la case de réduction d'une fenêtre de l'application 4D ayant été préalablement maximisée : 

##### Sous Windows 

La fenêtre est réduite et retrouve sa taille initiale. Si vous ne passez pas le paramètre *fenêtre*, toutes les fenêtres de l'application sont redimensionnées à leur taille initiale.

![](../assets/en/commands/pict39369.fr.png)

Case de réduction sous Windows

##### Sous Mac OS 

La fenêtre est réduite et retrouve sa taille initiale. Si vous ne passez pas le paramètre *fenêtre*, la fenêtre de premier plan du process courant est minimisée.   
![](../assets/en/commands/pict39370.fr.png)

Case de zoom/réduction sous Mac OS 

Si la ou les fenêtres concernées n'ont pas été préalablement maximisées (manuellement ou à l'aide de [MAXIMIZE WINDOW](maximize-window.md)), la commande ne fait rien. De même, si le type de *fenêtre* ne comporte pas de case de zoom, la commande ne fait rien (pour plus d'informations sur ce point, reportez-vous à la section *Types de fenêtres (compatibilité)*). 

**Note :** Ne confondez pas cette fonction avec la réduction de la fenêtre sous forme d'icône (Windows) ou dans le Dock (Mac OS), accessible par l'intermédiaire du bouton suivant :  
![](../assets/en/commands/pict39371.fr.png)  
Windows

![](../assets/en/commands/pict39372.fr.png)  
Mac OS

#### Voir aussi 

[MAXIMIZE WINDOW](maximize-window.md)  
[REDUCE RESTORE WINDOW](reduce-restore-window.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 454 |
| Thread safe | &check; |
| Interdite sur le serveur ||


