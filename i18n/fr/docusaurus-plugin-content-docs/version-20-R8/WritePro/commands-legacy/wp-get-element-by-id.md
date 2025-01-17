---
id: wp-get-element-by-id
title: WP Get element by ID
slug: /WritePro/commands/wp-get-element-by-id
displayed_sidebar: docs
---

<!--REF #_command_.WP Get element by ID.Syntax-->**WP Get element by ID** ( *docWP* ; *ID* ) -> Résultat<!-- END REF-->
<!--REF #_command_.WP Get element by ID.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| docWP | Object | &#8594;  | Document 4D Write Pro |
| ID | Text | &#8594;  | Identifiant de l'élément à retrouver |
| Résultat | Object | &#8592; | Élément 4D Write Pro |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP Get element by ID.Summary-->La commande **WP Get element by ID** retourne un objet contenant l'élément de *docWP* passé dans le paramètre *ID*.<!-- END REF--> 

Dans le paramètre *docWP*, passez un document 4D Write Pro. 

Passez l'attribut ID de l'élément à retrouver dans le paramètre *ID*. L'élément peut être à l'intérieur du document, comme une image, un paragraphe, un tableau, une ligne, etc., ou le document lui-même. Si aucun élément dans le document ne possède l'ID spécifié, une valeur **null** est retournée.

**Note :** La valeur du paramètre *ID* est sensible à la casse.

#### Exemple 1 

Pour obtenir l'image avec l'ID "img1" :

```4d
 var obImage : Object
 obImage:=WP Get element by ID(myDoc;"img1")
```

#### Exemple 2 

Vous souhaitez retrouver un élément tableau et le modifier en l'entourant d'une large bordure violette :

```4d
 var $element : Object
 $element:=WP Get element by ID(myDoc;"Table1")
 WP SET ATTRIBUTES($element;wk border style;wk solid)
 WP SET ATTRIBUTES($element;wk border width;"4px")
 WP SET ATTRIBUTES($element;wk border color;"purple")
```

#### Exemple 3 

Vous souhaitez retrouver un élément et modifier son ID :

```4d
 $colTable:=WP Create table range([INFO]Sample)
 $elements:=WP Get elements($colTable)
 $elem:=WP Get element by ID([INFO]Sample;"Paris")
 If($elem#Null)
    $elem.ID:="Lyon"
 End if
```

#### Voir aussi 

[WP Get elements](wp-get-elements.md)  