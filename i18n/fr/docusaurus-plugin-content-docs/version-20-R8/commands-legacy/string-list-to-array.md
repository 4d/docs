---
id: string-list-to-array
title: STRING LIST TO ARRAY
slug: /commands/string-list-to-array
displayed_sidebar: docs
---

<!--REF #_command_.STRING LIST TO ARRAY.Syntax-->**STRING LIST TO ARRAY** ( *resNum* ; *tabChaînes* {; *resFichier*} )<!-- END REF-->
<!--REF #_command_.STRING LIST TO ARRAY.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| resNum | Integer | &#8594;  | Numéro de ressource ou Attribut 'id' de l'élément 'group' (XLIFF) |
| tabChaînes | Text array | &#8592; | Chaînes de la ressource STR# ou Chaînes de l'élément 'group' (XLIFF) |
| resFichier | Time | &#8594;  | Numéro de référence de fichier de ressources Si omis : tous les fichiers XLIFF ou les fichiers de ressources ouverts |

<!-- END REF-->

#### Description 

<!--REF #_command_.STRING LIST TO ARRAY.Summary-->La commande **STRING LIST TO ARRAY** remplit le tableau *chaînes* avec : 

* soit les chaînes stockées dans la ressource de type liste de chaînes ("STR#") dont vous avez passé le numéro d'ID dans *resNum*.<!-- END REF-->
* soit une chaîne stockée dans un fichier XLIFF ouvert dont vous avez passé l'attribut 'id' de l'élément 'group' dans *resNum* (cf. ci-dessous "Compatibilité avec l'architecture XLIFF").

Si la ressource n'est pas trouvée, le tableau *chaînes* reste inchangé et la variable système OK prend la valeur 0 (zéro).

Si vous passez un numéro de référence de fichier de ressources valide dans *resFichier*, la ressource est recherchée dans ce fichier uniquement. Si vous ne passez pas le paramètre *resFichier*, c'est la première occurrence de la ressource rencontrée dans la chaîne des fichiers de ressources qui sera retournée. 

Si vous ne pré-déclarez pas le tableau *chaînes* avant d'appeler **STRING LIST TO ARRAY**, la commande crée un tableau de type Texte. Si vous pré-déclarez le tableau, vous pouvez lui assigner le type Alpha ou Texte.

**Note :** Chaque chaîne d'une ressource liste de chaînes peut contenir jusqu'à 255 caractères.

**Conseil :** Lorsque vous utilisez des ressources listes de chaînes, limitez-vous à des ressources de 32 Ko maximum et quelques centaines de chaînes par ressource.

#### Compatibilité avec l'architecture XLIFF 

La commande **STRING LIST TO ARRAY** est compatible avec l’architecture XLIFF de 4D v11 : la commande recherche dans un premier temps la valeur correspondant à *resNum* dans tous les fichiers XLIFF ouverts (si le paramètre *resFichier* est omis) et remplit le tableau *chaînes* avec les valeurs correspondantes. Dans ce cas, *resNum* désigne l’attribut **id** de l’élément **group** et le tableau *chaînes* contient toutes les chaînes de l’élément. Si la valeur n’est pas trouvée, la commande poursuit la recherche dans les fichiers de ressources ouverts.  
Pour plus d'informations sur l'architecture XLIFF dans 4D, reportez-vous au manuel Mode Développement.

#### Variables et ensembles système 

La variable système OK prend la valeur 1 si la ressource est trouvée, sinon elle prend la valeur 0 (zéro).

#### Voir aussi 

[Get indexed string](get-indexed-string.md)  
[Get string resource](get-string-resource.md)  
[Get text resource](get-text-resource.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 511 |
| Thread safe | &cross; |
| Modifie les variables | OK |


