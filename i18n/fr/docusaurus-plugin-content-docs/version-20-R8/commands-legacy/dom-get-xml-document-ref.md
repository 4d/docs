---
id: dom-get-xml-document-ref
title: DOM Get XML document ref
slug: /commands/dom-get-xml-document-ref
displayed_sidebar: docs
---

<!--REF #_command_.DOM Get XML document ref.Syntax-->**DOM Get XML document ref** ( *refElément* ) : Text<!-- END REF-->
<!--REF #_command_.DOM Get XML document ref.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| refElément | Text | &#8594;  | Référence d’un élément existant dans un arbre DOM |
| Résultat | Text | &#8592; | Référence du premier élément de l'arbre DOM (noeud document) |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM Get XML document ref.Summary-->La commande **DOM Get XML document ref** permet de récupérer la référence de l’élément "document" de l’arbre DOM dont vous avez passé la référence dans *refElément*.<!-- END REF--> L’élément document est le premier élément d’un arbre DOM ; c’est le parent de l’élément racine. 

La référence de l’élément document vous permet de manipuler les noeuds "Doctype" et "Instructions de traitement". Elle ne peut être utilisée qu’avec les commandes [DOM Append XML child node](dom-append-xml-child-node.md) et [DOM GET XML CHILD NODES](dom-get-xml-child-nodes.md).

A ce niveau, vous pouvez uniquement ajouter des instructions de traitement, des commentaires ou remplacer le noeud Doctype. Vous ne pouvez pas y créer de noeud CDATA ou texte. 

#### Exemple 

Dans cet exemple nous cherchons à retrouver la déclaration de DTD du document XML :

```4d
 var $refRoot : Text
 $refRoot:=DOM Parse XML source("")
 If(OK=1)
    var $refDocument : Text
  // on cherche le noeud document, puisque c'est le noeud auquel est
  // rattaché le nœud DOCTYPE avant le noeud root
    $refDocument:=DOM Get XML document ref($refRoot)
    ARRAY TEXT($arrType;0)
    ARRAY TEXT($arrValue;0)
  // sur ce nœud on cherche parmi les enfants le nœud de type DOCTYPE
    DOM GET XML CHILD NODES($refDocument;$arrType;$arrValue)
    var $text : Text
    $text:=""
    $pos:=Find in array($arrType;XML DOCTYPE)
    If($pos>-1)
  // On récupère dans $text la déclaration de DTD
       $text:=$text+"Doctype: "+$arrValue{$pos}+Char(Carriage return)
    End if
    DOM CLOSE XML($refRoot)
 End if
```

#### Voir aussi 

[DOM Append XML child node](dom-append-xml-child-node.md)  
[DOM GET XML CHILD NODES](dom-get-xml-child-nodes.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1088 |
| Thread safe | &check; |


