---
id: get-text-resource
title: Get text resource
slug: /commands/get-text-resource
displayed_sidebar: docs
---

<!--REF #_command_.Get text resource.Syntax-->**Get text resource** ( *resNum* {; *resFichier*} ) : Text<!-- END REF-->
<!--REF #_command_.Get text resource.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| resNum | Integer | &#8594;  | Numéro de ressource |
| resFichier | Time | &#8594;  | Numéro de référence de fichier de ressources ou tous les fichiers de ressources ouverts si ce paramètre est omis |
| Résultat | Text | &#8592; | Contenu de la ressource TEXT |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.Get text resource.Summary-->La commande **Get text resource** retourne le texte stocké dans la ressource texte ("TEXT") dont vous avez passé le numéro d'ID dans *resNum*.<!-- END REF-->

Si la ressource n'est pas trouvée, un texte vide est retourné et la variable système OK prend la valeur 0 (zéro).

Si vous passez un numéro de référence de fichier de ressources valide dans *resFichier*, la ressource est recherchée dans ce fichier uniquement. Si vous ne passez pas le paramètre *resFichier*, c'est la première occurrence de la ressource rencontrée dans la chaîne des fichiers de ressources qui sera retournée. 

**Note :** Une ressource texte peut contenir jusqu'à 32 000 caractères.

#### Exemple 

L'exemple suivant affiche le contenu de la ressource texte d'ID=20800 qui doit se trouver dans au moins un des fichiers de ressources ouverts :

```4d
 ALERT(Get text resource(20800))
```

#### Variables et ensembles système 

OK prend la valeur 1 si la ressource est trouvée, sinon elle prend la valeur 0 (zéro).

#### Voir aussi 

[Get indexed string](get-indexed-string.md)  
[Get string resource](get-string-resource.md)  
[STRING LIST TO ARRAY](string-list-to-array.md)  