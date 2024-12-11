---
id: dom-insert-xml-element
title: DOM Insert XML element
slug: /commands/dom-insert-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM Insert XML element.Syntax-->**DOM Insert XML element** ( *refElémentCible* ; *refElémentSource* ; *indexEnfant* ) : Text<!-- END REF-->
<!--REF #_command_.DOM Insert XML element.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| refElémentCible | Text | &#8594;  | Référence de l’élément XML parent |
| refElémentSource | Text | &#8594;  | Référence de l’élément XML à insérer |
| indexEnfant | Integer | &#8594;  | Index de l’enfant de l’élément cible avant lequel le nouvel élément doit être inséré |
| Résultat | Text | &#8592; | Référence du nouvel élément XML |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM Insert XML element.Summary-->La commande **DOM Insert XML element** permet d’insérer un nouvel élément XML parmi les enfants de l’élément XML dont la référence est passée dans le paramètre *refElémentCible*.<!-- END REF--> 

Passez dans *refElémentSource* l’élément à insérer. Cet élément doit être passé en tant que référence d’un élément XML existant dans un arbre DOM. 

Le paramètre *indexEnfant* permet de désigner l’enfant de l’élément parent avant lequel le nouvel élément doit être inséré. Passez un numéro d’index dans ce paramètre. Si la valeur est invalide (par exemple s’il n’existe pas d’élément enfant de cet index), le nouvel élément sera ajouté avant le premier enfant de l’élément parent. 

La commande retourne la référence de l’élément XML obtenu.

#### Exemple 

Dans la structure suivante, nous souhaitons inverser le premier et le deuxième livre :

```XML
<?xml version="1.0" encoding="UTF-8" standalone="no" ?>
<BookCatalog>
  <Book>
          <Title>Services Web Open Source</Title>
          <Author>Collectif</Author>
          <Date>2003</Date>
          <ISBN>2-7440-1507-5</ISBN>
          <Publisher>Wrox</Publisher>
    </Book>
<Book>
          <Title>Construire des services Web XML</Title>
          <Author>Scott Short</Author>
          <Date>2002</Date>
          <ISBN>2-10-006476-2</ISBN>
          <Publisher>Microsoft Press</Publisher>
    </Book>
</BookCatalog>
```

Pour cela, il suffit d’exécuter le code suivant :

```4d
 var $refRoot : Text
 $refRoot:=DOM Parse XML source("") //sélection du document XML
 If(OK=1)
    var $newStruct : Text
    $newStruct:=DOM Create XML Ref("BookCatalog")
 
    $refBook:=DOM Find XML element($refRoot;"/BookCatalog/Book[1]")
    $refNewElement:=DOM Append XML element($newStruct;$refBook)
 
    $refBook:=DOM Find XML element($refRoot;"/BookCatalog/Book[2]")
    var $refNewElement : Text
    $refNewElement:=DOM Insert XML element($newStruct;$refBook;1)
 
    DOM CLOSE XML($newStruct)
    DOM CLOSE XML($refRoot)
 End if
```

#### Voir aussi 

[DOM Append XML element](dom-append-xml-element.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1083 |
| Thread safe | &check; |
| Interdite sur le serveur ||


