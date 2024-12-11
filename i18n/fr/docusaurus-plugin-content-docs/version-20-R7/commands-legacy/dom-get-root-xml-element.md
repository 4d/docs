---
id: dom-get-root-xml-element
title: DOM Get Root XML element
slug: /commands/dom-get-root-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM Get Root XML element.Syntax-->**DOM Get Root XML element** ( *refElément* ) : Text<!-- END REF-->
<!--REF #_command_.DOM Get Root XML element.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| refElément | Text | &#8594;  | Référence d’élément XML |
| Résultat | Text | &#8592; | Référence de l’élément racine ou "" en cas d’erreur |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM Get Root XML element.Summary-->La commande **DOM Get Root XML element** retourne une référence vers l’élément racine du document auquel appartient l’élément XML passé dans le paramètre *refElément*.<!-- END REF--> Cette référence pourra être utilisée avec les autres commandes d'analyse XML.

#### Voir aussi 

[DOM Get parent XML element](dom-get-parent-xml-element.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1053 |
| Thread safe | &check; |
| Modifie les variables | OK, error |
| Interdite sur le serveur ||


