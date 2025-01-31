---
id: wp-get-elements
title: WP Get elements
slug: /WritePro/commands/wp-get-elements
displayed_sidebar: docs
---

<!--REF #_command_.WP Get elements.Syntax-->**WP Get elements** ( *objCible* {; *typeElement*} ) -> Résultat<!-- END REF-->
<!--REF #_command_.WP Get elements.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objCible | Object | &#8594;  | Plage ou élément ou document 4D Write Pro |
| typeElement | Integer | &#8594;  | Choix du type d'éléments à retrouver |
| Résultat | Collection | &#8592; | Collection contenant des références d'éléments |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP Get elements.Summary-->La commande **WP Get elements** retourne une collection d'objets contenant des paragraphes, images, tableaux et/ou lignes de tableaux.<!-- END REF-->

Dans le paramètre *objCible*, vous pouvez passer :

* une plage, ou
* un élément (tableau / ligne / paragraphe / corps / en-tête / pied / section / sous-section / zone de texte), ou
* un document 4D Write Pro

**Note :** Si vous passez une sous-section dans *objCible*, la commande retourne les éléments de la section parente.

Si une plage ou un élément typé(e) est passé(e), la commande renverra une collection contenant uniquement les éléments du type correspondant (sauf si vous spécifiez un type grâce au paramètre *typeElement*, voir ci-dessous). Sinon, la commande retourne une collection contenant tous les éléments disponibles dans *objCible*.

Vous pouvez passer le paramètre optionnel *typeElement* pour spécifier les types d'éléments à renvoyer dans la collection. Les types suivants sont disponibles :

| Constante              | Valeur | Comment                                          |
| ---------------------- | ------ | ------------------------------------------------ |
| wk type default        | 0      | Type de plage par défaut                         |
| wk type image          | 2      | Images ancrées et/ou en ligne                    |
| wk type image anchored | 200    | Référence d'image ancrée pour objets documents   |
| wk type image inline   | 100    | Référence d'image en ligne pour objets documents |
| wk type paragraph      | 1      | Plage de type paragraphe                         |
| wk type table          | 4      | Référence de tableau                             |
| wk type table row      | 5      | Référence de ligne de tableau                    |
| wk type text box       | 300    |                                                  |

**Note :**

* Si vous passez le sélecteur wk type default, la commande renvoie une collection non filtrée.
* Si vous passez le sélecteur wk type paragraph, wk type image ou wk type table, la collection retournée contiendra uniquement les éléments du type indiqué, même s'ils diffèrent du type spécifié dans le paramètre *typeElement*.
* Si une plage indiquée dans *objCible* contient un élément qui n'est pas entièrement contenu dans la plage, l'élément entier sera inclus dans les résultats. Par exemple, si la plage inclut une partie d'un tableau (mais pas tout le tableau), la référence de l'élément tableau entier est renvoyée, en revanche seules les références de cellules (paragraphes) comprises dans la plage sont incluses.
* Si vous passez wk type text box dans le paramètre typeElement, objCible ne pourra contenir qu'un document 4D Write Pro. Une erreur sera renvoyée si vous passez autre chose qu'un document objet dans objCible dans ce cas.

##### Tri des éléments 

Les éléments contenus dans la collection retournée sont classés différemment selon le contenu d'*objCible :*

* Si vous avez passé une plage ou un élément dans *objCible* (paragraphe, tableau, corps, en-tête, pied, etc.), les éléments de la collection sont triés par ordre d'apparition dans le document.
* Si vous avez passé un document 4D Write Pro dans *objCible*, toutes les zones du document étant retournées, les éléments de la collection sont triés en fonction de leur ID (à l'exception des images ancrées lorsque le paramètre wk type image anchored est utilisé; dans ce cas, ils sont triés par ordre Z). Les éléments en ligne de type *typeElement* présents dans les **zones de texte** (le cas échéant) sont renvoyés à la fin de la collection.

Si vous souhaitez par exemple alterner la couleur de fond des paragraphes présents dans le corps d'un document, passez l'élément "body" (et non le document) dans l'*objCible*, afin de vous assurer que l'ordre des éléments de la collection corresponde à celui des paragraphes du document.

#### Exemple 1 

Vous voulez récupérer une collection de tous les paragraphes dans un document :

```4d
 var $docElements : Collection
 $docElements:=WP Get elements($myDoc;wk type paragraph)
  //retourne une collection contenant seulement les éléments paragraphes
```

#### Exemple 2 

 Vous souhaitez alterner l'alignement et la couleur des paragraphes dans un document :

```4d
 var $col : Collection
 var $obj : Object
 var $body : Object
 var $i;$n : Integer
 $col:=New collection
 $body:=WP Get body(myDoc)
 $col:=WP Get elements($body;wk type paragraph)
 $i:=0
 $n:=$col.length
 For($i;0;$n-1)
    $obj:=$col[$i]
    WP RESET ATTRIBUTES($obj)
    WP SET ATTRIBUTES($obj;wk font bold;wk false)
    WP SET ATTRIBUTES($obj;wk font italic;wk false)
    If($i%2=0)
       WP SET ATTRIBUTES($obj;wk text align;wk left)
       WP SET ATTRIBUTES($obj;wk font bold;wk true)
       WP SET ATTRIBUTES($obj;wk text color;"#804040")
       WP SET ATTRIBUTES($obj;wk margin right;"5cm")
       WP SET ATTRIBUTES($obj;wk margin left;"1cm")
    Else
       WP SET ATTRIBUTES($obj;wk text align;wk right)
       WP SET ATTRIBUTES($obj;wk font italic;wk true)
       WP SET ATTRIBUTES($obj;wk text color;"#404020")
       WP SET ATTRIBUTES($obj;wk margin left;"5cm")
       WP SET ATTRIBUTES($obj;wk margin right;"1cm")
    End if
 End for
```

#### Voir aussi 

[WP Get breaks](wp-get-breaks.md)  
[WP Get element by ID](wp-get-element-by-id.md)  
[WP Table range](wp-table-range.md)  