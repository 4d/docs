---
id: dom-append-xml-child-node
title: DOM Append XML child node
slug: /commands/dom-append-xml-child-node
displayed_sidebar: docs
---

<!--REF #_command_.DOM Append XML child node.Syntax-->**DOM Append XML child node** ( *refElément* ; *typeEnfant* ; *valeurEnfant* ) : Text<!-- END REF-->
<!--REF #_command_.DOM Append XML child node.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| refElément | Text | &#8594;  | Référence d’élément XML |
| typeEnfant | Integer | &#8594;  | Type d’enfant à ajouter |
| valeurEnfant | Text, Blob | &#8594;  | Texte ou variable (Texte ou BLOB) dont la valeur doit être insérée en tant que noeud enfant |
| Résultat | Text | &#8592; | Référence de l’élément XML enfant |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM Append XML child node.Summary-->La commande **DOM Append XML child node** permet d’ajouter la valeur *valeurEnfant* au noeud XML désigné par *refElément*.<!-- END REF--> 

Le type de noeud créé est défini par le paramètre *typeEnfant*. Passez dans ce paramètre l’une des constantes suivantes, placées dans le thème *XML* :  

| Constante                  | Type        | Valeur |
| -------------------------- | ----------- | ------ |
| XML CDATA                  | Entier long | 7      |
| XML comment                | Entier long | 2      |
| XML DATA                   | Entier long | 6      |
| XML DOCTYPE                | Entier long | 10     |
| XML ELEMENT                | Entier long | 11     |
| XML processing instruction | Entier long | 3      |

Passez dans *valeurEnfant* les données à insérer. Vous pouvez passer une chaîne ou une variable 4D (chaîne ou BLOB). Le contenu de ce paramètre sera toujours converti en texte. 

**Note :** Si le paramètre *refElément* désigne le noeud Document (noeud de plus haut niveau), la commande insère un noeud "Doctype" avant tout autre noeud. Il en va de même pour les instructions de traitement et les commentaires, qui sont toujours insérés avant le noeud racine (mais après le noeud Doctype). 

#### Exemple 1 

Ajout d’un noeud de type texte :

```4d
 Reference:=DOM Create XML element(refElement;"monElement")
 DOM SET XML ELEMENT VALUE(Reference ;"Bonjour")
 temp:=DOM Create XML element(Reference ;"br")
 temp:=DOM Append XML child node(Reference;XML DATA;"La")
 temp:=DOM Create XML element(Reference;"br")
 temp:=DOM Append XML child node(Reference;XML DATA;"France")
```

Résultat :  

```XML
<monElement>Bonjour<br/>La<br/>France</monElement> 
```

#### Exemple 2 

Ajout d’un noeud de type instruction de traitement :

```4d
 $Txt_instruction:="xml-stylesheet type = \"text/xsl\" href=\"style.xsl\""
 Reference:=DOM Append XML child node(refElement;XML Processing Instruction;$Txt_instruction )
```

Résultat (inséré avant le premier élément) :  

```XML
<?xml-stylesheet type="text/xsl" href="style.xsl"?> 
```

#### Exemple 3 

Ajout d’un noeud de type commentaire :

```4d
 Reference:=DOM Append XML child node(refElement;XML Comment;"Hello world")
```

Résultat :  

```XML
<!--Hello world-->
```

#### Exemple 4 

Ajout d’un noeud de type CDATA :

```4d
 Reference:=DOM Append XML child node(refElement;XML CDATA;"12 < 18")
```

Résultat :  

```XML
<element><![CDATA[12 < 18]]></element>
```

#### Exemple 5 

Ajout ou remplacement d’un noeud de type déclaration Doctype :

```4d
 Reference:=DOM Append XML child node(refElement;XML DOCTYPE;"Books SYSTEM \"Book.DTD\"")
```

Résultat (inséré avant le premier élément) :  

```XML
<!DOCTYPE Books SYSTEM "Book.DTD">
```

#### Exemple 6 

Ajout ou remplacement d’un noeud de type Elément.

* si le paramètre *valeurEnfant* est un fragment XML, il est inséré en tant que noeuds enfants :  
```4d  
 Reference:=DOM Append XML child node(refElement;XML ELEMENT;"simoneva")  
```  
    
Résultat :  
```XML  
<parent>  
    <child>simon</child>  
    <child>eva</child>  
</parent>  
```
* sinon, un nouvel élément enfant vide est ajouté :  
```4d  
 Reference:=DOM Append XML child node(refElement;XML ELEMENT;"tbreak")  
```  
    
Résultat :  
```XML  
<parent>  
     <tbreak/>  
 </parent>  
```

Si le contenu de *valeurEnfant* est invalide, une erreur est retournée. 

#### Voir aussi 

[DOM GET XML CHILD NODES](dom-get-xml-child-nodes.md)  
[DOM Get XML document ref](dom-get-xml-document-ref.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1080 |
| Thread safe | &check; |


