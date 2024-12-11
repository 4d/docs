---
id: get-resource-properties
title: Get resource properties
slug: /commands/get-resource-properties
displayed_sidebar: docs
---

<!--REF #_command_.Get resource properties.Syntax-->**Get resource properties** ( *resType* ; *resNum* {; *resFichier*} ) : Integer<!-- END REF-->
<!--REF #_command_.Get resource properties.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| resType | Text | &#8594;  | Type de ressource (4 caractères) |
| resNum | Integer | &#8594;  | Numéro de référence de ressource (ID) |
| resFichier | Time | &#8594;  | Numéro de référence du fichier de ressource ou Tous les fichiers de ressources ouverts si omis |
| Résultat | Integer | &#8592; | Attributs de la ressource |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get resource properties.Summary-->**Get resource properties** retourne les attributs de la ressource dont le type est passé dans le paramètre *resType* et le numéro de référence dans *resNum*.<!-- END REF-->

Si vous ne passez pas le paramètre *resFichier*, la ressource est recherchée dans les fichiers de ressources ouverts. Si vous passez un numéro de référence de fichier de ressource dans le paramètre *resFichier*, la ressource n'est recherchée que dans ce fichier. 

Si la ressource n'existe pas, **Get resource properties** retourne *0* (zéro) et la variable OK prend également la valeur *0* (zéro).

La valeur numérique retournée par **Get resource properties** doit être considérée comme une valeur binaire dont chaque bit a une signification particulière. Pour une description des attributs des ressources et leurs effets, référez-vous à la commande .

#### Exemple 

Référez-vous à l'exemple de la commande [Get resource name](get-resource-name.md).

#### Variables et ensembles système 

La variable OK prend la valeur 0 si la ressource n'existe pas, sinon elle prend la valeur 1.


#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 515 |
| Thread safe | &check; |
| Modifie les variables | OK |
| Interdite sur le serveur ||


