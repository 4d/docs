---
id: get-string-resource
title: Get string resource
slug: /commands/get-string-resource
displayed_sidebar: docs
---

<!--REF #_command_.Get string resource.Syntax-->**Get string resource** ( *resNum* {; *resFichier*} ) : Text<!-- END REF-->
<!--REF #_command_.Get string resource.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| resNum | Integer | &#8594;  | Numéro de ressource |
| resFichier | Time | &#8594;  | Numéro de référence de fichier de ressources ou tous les fichiers de ressources ouverts si ce paramètre est omis |
| Résultat | Text | &#8592; | Contenu de la ressource STR |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get string resource.Summary-->La commande **Get string resource** retourne la chaîne stockée dans la ressource chaîne ("STR ") dont vous avez passé le numéro d'ID dans *resNum*.<!-- END REF-->

Si la ressource n'est pas trouvée, une chaîne vide est retournée et la variable système OK prend la valeur 0 (zéro).

Si vous passez un numéro de référence de fichier de ressources valide dans *resFichier*, la ressource est recherchée dans ce fichier uniquement. Si vous ne passez pas le paramètre *resFichier*, c'est la première occurrence de la ressource rencontrée dans la chaîne des fichiers de ressources qui sera retournée. 

**Note :** Une ressource chaîne peut contenir jusqu'à 255 caractères.

#### Exemple 

L'exemple suivant affiche le contenu de la ressource chaîne d'ID=20911 qui doit se trouver dans au moins un des fichiers de ressources ouverts :

```4d
 ALERT(Get string resource(20911))
```

#### Variables et ensembles système 

La variable système OK prend la valeur 1 si la ressource est trouvée, sinon elle prend la valeur 0 (zéro).

#### Voir aussi 

[Get indexed string](get-indexed-string.md)  
[Get text resource](get-text-resource.md)  
[STRING LIST TO ARRAY](string-list-to-array.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 506 |
| Thread safe | &cross; |
| Modifie les variables | OK |


