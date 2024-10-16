---
id: dom-export-to-var
title: DOM EXPORT TO VAR
slug: /commands/dom-export-to-var
displayed_sidebar: docs
---

<!--REF #_command_.DOM EXPORT TO VAR.Syntax-->**DOM EXPORT TO VAR** ( *refElément* ; *vVarXml* )<!-- END REF-->
<!--REF #_command_.DOM EXPORT TO VAR.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| refElément | Text | &#8594;  | Référence d’élément XML racine |
| vVarXml | Text, Blob | &#8592; | Variable devant recevoir l’arbre XML |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM EXPORT TO VAR.Summary-->La commande **DOM EXPORT TO VAR** permet de sauvegarder un arbre XML dans une variable texte ou BLOB.<!-- END REF--> 

Passez dans *refElément* la référence de l’élément racine à exporter. 

Passez dans *vVarXml* le nom de la variable devant contenir l’arbre XML. Cette variable peut être de type Texte ou BLOB. Vous pouvez choisir le type en fonction des opérations à effectuer par la suite ou de la taille que l’arbre peut atteindre (rappelons qu'en mode Non unicode les variables de type Texte sont limitées à 32 K de texte, en mode Unicode cette limite est de 2 Go). 

Attention, en mode Non unicode si vous utilisez une variable Texte pour stocker l'élément *refElément*, il sera encodé en Mac “courant” (c'est-à-dire Mac Roman sur la plupart des systèmes occidentaux). Cela signifie que le texte retourné ne sera plus dans l'encodage d'origine (encoding="xxx"). Dans ce cas, la variable *vVarXml* permet de visualiser ou de stocker le code obtenu mais PAS de générer un document XML valide (via la commande [SEND PACKET](send-packet.md) par exemple). 

En mode Unicode, l'encodage d'origine est conservé dans la variable.

##### Notes sur le traitement des caractères de fin de ligne et des BOM 

En XML, les sauts de ligne ne sont pas significatifs, qu'ils soient présents à l'intérieur ou entre des éléments XML. En interne, le XML utilise des caractères normalisés LF comme séparateurs de lignes.

Lors des opérations d'import et d'export, les caractères de saut de ligne peuvent être convertis. Lors d'un import, le parseur XML remplace les caractères CRLF (sauts de ligne standard sous Windows) par des caractères LF. Pendant l'export, les caractères LF sont remplacés par des caractères CRLF sous Windows (pas de remplacement sous macOS).

**Note** : Si vous souhaitez conserver les retours chariot, vous devez les inclure dans un élément XML CDATA afin qu'ils ne soient pas traités par l'analyseur XML. Vous pouvez également utiliser le caractère "<br/>", qui est un retour chariot explicite qui ne sera pas traité par le parseur en lieu et place des caractères CRLF.

Par défaut, les fichiers XML sont écrits sans BOM (Byte order mask). 

Vous pouvez contrôler le traitement des fins de ligne XML et du BOM à l'aide de la commande [XML SET OPTIONS](xml-set-options.md). 

**Note de compatibilité** : Dans les bases /projets créés avec des versions de 4D allant jusqu'à la v19.x, 4D utilise par défaut CR comme caractère de fin de ligne sur macOS et ainsi qu'un BOM. Pour activer les nouveaux paramètres par défaut, vérifiez les paramètres de compatibilité (voir la page Compatibilité) ou utilisez la commande [XML SET OPTIONS](xml-set-options.md). 

#### Exemple 

Cet exemple sauvegarde l’arbre vRefElem dans une variable texte : 

```4d
 var vtMonTexte : Text
 DOM EXPORT TO VAR(vRefElem;vtMonTexte)
```

#### Variables et ensembles système 

Si la commande a été exécutée correctement, la variable système OK prend la valeur 1, sinon elle prend la valeur 0 et une erreur est générée (par exemple, si la référence de l’élément n’est pas valide).

#### Voir aussi 

[DOM EXPORT TO FILE](dom-export-to-file.md)  
[SVG EXPORT TO PICTURE](svg-export-to-picture.md)  