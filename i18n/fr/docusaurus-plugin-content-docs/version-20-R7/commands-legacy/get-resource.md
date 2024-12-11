---
id: get-resource
title: GET RESOURCE
slug: /commands/get-resource
displayed_sidebar: docs
---

<!--REF #_command_.GET RESOURCE.Syntax-->**GET RESOURCE** ( *resType* ; *resNum* ; *resDonnées* {; *resFichier*} )<!-- END REF-->
<!--REF #_command_.GET RESOURCE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| resType | Text | &#8594;  | Type de ressource (4 caractères) |
| resNum | Integer | &#8594;  | Numéro de ressource |
| resDonnées | Blob | &#8594;  | Champ ou variable BLOB devant recevoir les données |
| &#8592; | Contenu de la ressource |
| resFichier | Time | &#8594;  | Numéro de référence de fichier de ressources ou Tous les fichiers de ressources ouverts si omis |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET RESOURCE.Summary-->La commande **GET RESOURCE** retourne dans le champ ou la variable BLOB *resDonnées* le contenu de la ressource dont le type et le numéro sont passés dans *resType* et *resNum*.<!-- END REF-->

**Important :** Vous devez passer une chaîne de 4 caractères dans *resType*.

Si la ressource n'est pas trouvée, le paramètre *resDonnées* est laissé inchangé et la variable OK prend la valeur 0 (zéro). 

Si vous passez un numéro de référence de fichier de ressources valide dans *resFichier*, la ressource sera recherchée dans ce fichier seulement. Si ne passez pas le paramètre *resFichier*, la première occurrence de la ressource trouvée en remontant la chaîne des fichiers de ressources sera retournée.

**Note :** La taille d'une ressource peut atteindre plusieurs méga-octets.

#### Indépendance de plate-forme 

 Rappelez-vous que vous travaillez avec des ressources issues de Mac OS. Quelle que soit la plate-forme utilisée, les valeurs internes des ressources comme des entiers longs sont stockées avec l'ordre d'octets ("byte ordering") Mac OS. Sous Windows, pour les données des ressources standard (telles que les ressources listes de chaînes et les ressources images) l'ordre des octets est automatiquement inversé ("byte swapping") si nécessaire. D'un autre côté, si vous créez et utilisez vos propres structures internes de données, c'est à vous d'effectuer l'inversion d'octets des données lorsque vous les extrayez d'un BLOB (par exemple en passant Macintosh byte ordering à une commande telle que [BLOB to longint](blob-to-longint.md)).

#### Exemple 

Reportez-vous à l'exemple de la commande .

#### Variables et ensembles système 

Si la ressource est trouvée, la variable système OK prend la valeur 1\. Sinon, elle prend la valeur 0 (zéro).

#### Gestion des erreurs 

S'il n'y a pas assez de mémoire disponible pour charger l'image, une erreur est générée. Vous pouvez intercepter cette erreur à l'aide d'une méthode de gestion d'erreurs installée par la commande [ON ERR CALL](on-err-call.md).

#### Voir aussi 

*Ressources*  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 508 |
| Thread safe | &check; |
| Modifie les variables | OK, error |
| Interdite sur le serveur ||


