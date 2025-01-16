---
id: xml-get-error
title: XML GET ERROR
slug: /commands/xml-get-error
displayed_sidebar: docs
---

<!--REF #_command_.XML GET ERROR.Syntax-->**XML GET ERROR** ( *refElément* ; *texteErreur* {; *ligne* {; *colonne*}} )<!-- END REF-->
<!--REF #_command_.XML GET ERROR.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| refElément | Text | &#8594;  | Référence d’élément XML |
| texteErreur | Variable | &#8592; | Texte de l’erreur |
| ligne | Variable | &#8592; | Numéro de ligne |
| colonne | Variable | &#8592; | Numéro de colonne |

<!-- END REF-->

#### Description 

<!--REF #_command_.XML GET ERROR.Summary-->La commande **XML GET ERROR** retourne dans le paramètre *texteErreur* la description de l’erreur rencontrée lors du traitement de l’élément XML désigné par le paramètre *refElément*.<!-- END REF--> Les informations retournées sont fournies par la librairie Xerces.dll. 

Les paramètres optionnels *ligne* et *colonne* désignent précisément l’emplacement de l’erreur : ils récupèrent respectivement le numéro de la ligne et, dans cette ligne, la position du premier caractère de l’expression à l’origine de l’erreur. 

#### Variables et ensembles système 

Si la commande a été correctement exécutée, la variable système OK prend la valeur 1\. Si une erreur se produit, elle prend la valeur 0.

#### Voir aussi 

[DOM Get XML information](dom-get-xml-information.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 732 |
| Thread safe | &check; |
| Modifie les variables | OK |


