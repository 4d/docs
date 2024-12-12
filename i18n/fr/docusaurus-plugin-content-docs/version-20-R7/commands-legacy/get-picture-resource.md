---
id: get-picture-resource
title: GET PICTURE RESOURCE
slug: /commands/get-picture-resource
displayed_sidebar: docs
---

<!--REF #_command_.GET PICTURE RESOURCE.Syntax-->**GET PICTURE RESOURCE** ( *resNum* ; *resDonnées* {; *resFichier*} )<!-- END REF-->
<!--REF #_command_.GET PICTURE RESOURCE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| resNum | Integer | &#8594;  | Numéro de ressource |
| resDonnées | Field, Variable | &#8594;  | Champ ou variable image devant recevoir l'image |
| &#8592; | Contenu de la ressource PICT |
| resFichier | Time | &#8594;  | Numéro de référence de fichier de ressources ou tous les fichiers de ressources ouverts si ce paramètre est omis |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.GET PICTURE RESOURCE.Summary-->La commande **GET PICTURE RESOURCE** retourne dans le champ ou la variable image désigné(e) par *resDonnées* l'image stockée dans la ressource image ("PICT") dont vous passé le numéro dans *resNum*.<!-- END REF-->

Si la ressource n'est pas trouvée, *resDonnées* n'est pas modifié et la variable OK prend la valeur 0 (zéro). 

Si vous passez un numéro de référence de fichier de ressources valide dans *resFichier*, la ressource est recherchée dans ce fichier uniquement. Si vous ne passez pas le paramètre *resFichier*, c'est la première occurrence de la ressource rencontrée dans la chaîne des fichiers de ressources qui sera retournée. 

**Note :** La taille d'une ressource image peut atteindre plusieurs méga-octets, voire davantage.

#### Exemple 

Reportez-vous à l'exemple de la commande [RESOURCE LIST](resource-list.md).

#### Variables et ensembles système 

La variable système OK prend la valeur 1 si la ressource est trouvée, sinon elle prend la valeur 0 (zéro).

#### Gestion des erreurs 

S'il n'y a pas assez de mémoire disponible pour charger l'image, une erreur est générée. Vous pouvez intercepter cette erreur à l'aide d'une méthode de gestion d'erreurs installée par la commande [ON ERR CALL](on-err-call.md).

#### Voir aussi 

[ON ERR CALL](on-err-call.md)  