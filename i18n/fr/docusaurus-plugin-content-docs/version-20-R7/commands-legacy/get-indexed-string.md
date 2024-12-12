---
id: get-indexed-string
title: Get indexed string
slug: /commands/get-indexed-string
displayed_sidebar: docs
---

<!--REF #_command_.Get indexed string.Syntax-->**Get indexed string** ( *resNum* ; *strNum* {; *resFichier*} ) : Text<!-- END REF-->
<!--REF #_command_.Get indexed string.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| resNum | Integer | &#8594;  | Numéro de ressource ou Attribut 'id' de l'élément 'group' (XLIFF) |
| strNum | Integer | &#8594;  | Numéro de chaîne ou Attribut 'id' de l'élément 'trans-unit' (XLIFF) |
| resFichier | Time | &#8594;  | Numéro de référence de fichier de ressources Si omis : tous les fichiers XLIFF ou les fichiers de ressources ouverts |
| Résultat | Text | &#8592; | Valeur de la chaîne indexée |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.Get indexed string.Summary-->La commande **Get indexed string** retourne :

* soit une des chaînes stockées dans la ressource liste de chaînes ("STR#") dont vous avez passé le numéro d'ID dans *resNum*,
* soit une chaîne stockée dans un fichier XLIFF ouvert dont vous avez passé l'attribut 'id' de l'élément 'group' dans *resNum* (cf. ci-dessous "Compatibilité avec l'architecture XLIFF").<!-- END REF-->

Vous passez le numéro de la chaîne dans *strNum*. Les chaînes d'une ressource liste de chaînes sont numérotées de 1 à N. Pour récupérer toutes les chaînes (et donc leur nombre) d'une ressource liste de chaînes, utilisez la commande [STRING LIST TO ARRAY](string-list-to-array.md).

Si la ressource n'est pas trouvée, ou si la chaîne n'est pas trouvée à l'intérieur de la ressource, une chaîne vide est retournée et la variable système OK prend la valeur 0 (zéro).

Si vous passez un numéro de référence de fichier de ressources valide dans *resFichier*, la ressource est recherchée dans ce fichier uniquement. Si vous ne passez pas le paramètre *resFichier*, c'est la première occurrence de la ressource rencontrée dans la chaîne des fichiers de ressources qui sera retournée. 

**Note :** Chaque chaîne d'une ressource liste de chaînes peut contenir jusqu'à 255 caractères.

##### Compatibilité avec l'architecture XLIFF 

La commande **Get indexed string** est compatible avec l’architecture XLIFF de 4D à compter de la v11 : la commande recherche dans un premier temps les valeurs correspondant à *resNum* et *strNum* dans tous les fichiers XLIFF ouverts (si le paramètre *resFichier* est omis). Dans ce cas, *resNum* désigne l’attribut **id** de l’élément **group** et *strNum* désigne l’attribut **id** de l’élément **trans-unit**. Si la valeur n’est pas trouvée, la commande poursuit la recherche dans les fichiers de ressources ouverts. Pour plus d'informations sur l'architecture XLIFF dans 4D, reportez-vous au manuel Mode Développement.

#### Variables et ensembles système 

OK prend la valeur 1 si la ressource est trouvée, sinon elle prend la valeur 0 (zéro).

#### Voir aussi 

[Get string resource](get-string-resource.md)  
[Get text resource](get-text-resource.md)  
[STRING LIST TO ARRAY](string-list-to-array.md)  