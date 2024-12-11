---
id: dom-export-to-file
title: DOM EXPORT TO FILE
slug: /commands/dom-export-to-file
displayed_sidebar: docs
---

<!--REF #_command_.DOM EXPORT TO FILE.Syntax-->**DOM EXPORT TO FILE** ( *refElément* ; *cheminFichier* )<!-- END REF-->
<!--REF #_command_.DOM EXPORT TO FILE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| refElément | Text | &#8594;  | Référence d’élément XML racine |
| cheminFichier | Text | &#8594;  | Chemin d’accès complet du fichier |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM EXPORT TO FILE.Summary-->La commande **DOM EXPORT TO FILE** permet de sauvegarder un arbre XML dans un fichier sur disque.<!-- END REF--> 

Passez dans *refElément* la référence de l’élément racine à exporter.   
Passez dans *cheminFichier* le chemin d’accès complet du fichier d’export à utiliser ou à créer. Si le fichier n’existe pas, il est créé.   
Si vous passez uniquement un nom de fichier (sans chemin d’accès), le fichier sera recherché ou créé à côté du fichier de structure.  
Si vous passez une chaîne vide (*""*), une boîte de dialogue standard d’ouverture et de création de fichier apparaît.

##### Notes sur le traitement des caractères de fin de ligne et des BOM 

En XML, les sauts de ligne ne sont pas significatifs, qu'ils soient présents à l'intérieur ou entre des éléments XML. En interne, le XML utilise des caractères normalisés LF comme séparateurs de lignes.

Lors des opérations d'import et d'export, les caractères de saut de ligne peuvent être convertis. Lors d'un import, le parseur XML remplace les caractères CRLF (sauts de ligne standard sous Windows) par des caractères LF. Pendant l'export, les caractères LF sont remplacés par des caractères CRLF sous Windows (pas de remplacement sous macOS).

**Note** : Si vous souhaitez conserver les retours chariot, vous devez les inclure dans un élément XML CDATA afin qu'ils ne soient pas traités par l'analyseur XML. Vous pouvez également utiliser le caractère "<br/>", qui est un retour chariot explicite qui ne sera pas traité par le parseur en lieu et place des caractères CRLF.

Par défaut, les fichiers XML sont écrits sans BOM (Byte order mask). 

Vous pouvez contrôler le traitement des fins de ligne XML et du BOM à l'aide de la commande [XML SET OPTIONS](xml-set-options.md). 

**Note de compatibilité** : Dans les bases /projets créés avec des versions de 4D allant jusqu'à la v19.x, 4D utilise par défaut CR comme caractère de fin de ligne sur macOS et ainsi qu'un BOM. Pour activer les nouveaux paramètres par défaut, vérifiez les paramètres de compatibilité (voir la page Compatibilité) ou utilisez la commande [XML SET OPTIONS](xml-set-options.md). 

#### Exemple 

Cet exemple sauvegarde l’arbre *vRefElem* dans le fichier MonDoc.xml :

```4d
 DOM EXPORT TO FILE(vRefElem;"C:\\dossier\MonDoc.xml")
```

#### Variables et ensembles système 

Si la commande a été exécutée correctement, la variable système OK prend la valeur 1, sinon elle prend la valeur 0 et une erreur est générée. 

#### Gestion des erreurs 

Une erreur est générée lorsque :

* la référence de l’élément n’est pas valide,
* le chemin d’accès spécifié n’est pas valide,
* le volume de stockage retourne une erreur (disque plein, etc.).

#### Voir aussi 

[DOM EXPORT TO VAR](dom-export-to-var.md)  
[SVG EXPORT TO PICTURE](svg-export-to-picture.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 862 |
| Thread safe | &check; |
| Modifie les variables | OK, error |
| Interdite sur le serveur ||


