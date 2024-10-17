---
id: ob-set
title: OB SET
slug: /commands/ob-set
displayed_sidebar: docs
---

<!--REF #_command_.OB SET.Syntax-->**OB SET** ( *objet* ; *propriété* ; *valeur* {; *propriété2* ; *valeur2* ; ... ; *propriétéN* ; *valeurN*} )<!-- END REF-->
<!--REF #_command_.OB SET.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objet | Object, Object | &#8594;  | Objet structuré |
| propriété | Text | &#8594;  | Nom de la propriété à définir |
| valeur | Expression | &#8594;  | Nouvelle valeur de la propriété |

<!-- END REF-->

#### Description 

<!--REF #_command_.OB SET.Summary-->La commande **OB SET** permet de créer ou de modifier une ou plusieurs paires propriété/valeur dans l’objet de langage désigné par le paramètre *objet*.<!-- END REF--> 

*objet* doit avoir été défini via la commande [C\_OBJECT](c-object.md) ou désigner un champ objet 4D. 

**Note :** Cette commande prend en charge les définitions d'attributs dans les *objets* 4D Write Pro, comme la commande *WP SET ATTRIBUTES* (cf. exemple 11). Toutefois, à la différence de *WP SET ATTRIBUTES*, **OB SET** ne permet pas de manipuler directement une variable ou un champ image comme valeur d'attribut.

Passez dans le paramètre *propriété* le libellé de la propriété à créer ou à modifier. Si la propriété existe déjà dans *objet*, sa valeur sera mise à jour. Si elle n’existe pas, elle est créée.   
Attention, le paramètre *propriété* tient compte des majuscules/minuscules. 

Passez dans le paramètre *valeur* la valeur de la propriété à définir. Plusieurs types de données sont pris en charge. A noter que :

* si vous passez un pointeur, il est conservé tel quel, il est évalué à l’aide de la commande [JSON Stringify](json-stringify.md),
* les dates sont stockées au format "YYYY-MM-DDTHH:mm:ss.SSSZ". Lors de la conversion d'une date 4D en texte avant stockage dans l'objet, par défaut le programme tient compte du fuseau horaire local. Vous pouvez modifier ce fonctionnement à l'aide du sélecteur JSON use local time de la commande [SET DATABASE PARAMETER](set-database-parameter.md).
* si vous passez une heure, elle est stockée sous la forme d'un nombre de millisecondes (réel) dans *objet*.
* si vous passez un objet de langage, la commande utilise la référence de l’objet et non une copie.

#### Exemple 1 

Création d’un objet et ajout d’une propriété de type texte :

```4d
 var $Object : Object
 OB SET($Object ;"prénom";"John";"nom";"Smith")
     //$Object = {"prénom":"John","nom":"Smith"}
```

#### Exemple 2 

Création d’un objet et ajout d’une propriété de type booléen :

```4d
 var $Object : Object
 OB SET($Object ;"nom";"smith";"age";42;"client";True)
     //$Object = {"nom":"smith","age":42,"client":true}
```

#### Exemple 3 

Modification d’une propriété :

```4d
     //$Object = {"prénom":"John","nom":"Smith"}
 OB SET($Object ;"prénom";"Paul")
     //$Object = {"prénom":"Paul","nom":"Smith"}
```

#### Exemple 4 

Ajout d’une propriété :

```4d
     //$Object = {"prénom":"John","nom":"Smith"}
 OB SET($Object ;"service";"Comptabilité")
     //$Object = {"prénom":"Paul","nom":"Smith","service":"Comptabilité"}
```

#### Exemple 5 

Renommage d’une propriété :

```4d
 var $Object : Object
 OB SET($Object ;"nom";"James";"age";35)
     //$Object = {"nom":"James","age":35}
 OB SET($Object ;"prénom";OB Get($Object ;"nom"))
     //$Object = {"prénom":""James","nom":"James","age":35}
 OB REMOVE($Object ;"nom")
     //$Object = {"prénom":""James","age":35}
```

#### Exemple 6 

Utilisation d’un pointeur :

```4d
     //$Object = {"prénom":"Paul","nom":"Smith"}
 var $nom : Text
 OB SET($Object ;"nom";->$nom)
     //$Object = {"prénom":"Paul","nom":"->$nom"}
 $JsonString:=JSON Stringify($Object)
     //$JsonString="{"prénom":"Paul","nom":""}
 $nom:="Wesson"
 $JsonString:=JSON Stringify($Object)
     //$JsonString="{"prénom":"Paul","nom":"Wesson"}
```

#### Exemple 7 

Utilisation d’un objet :

```4d
 var $ref_smith : Object
 OB SET($ref_smith ;"nom";"Smith")
 var $ref_emp : Object
 OB SET($ref_emp ;"employé";$ref_smith)
 $Json_string :=JSON Stringify($ref_emp)
     // $ref_emp = {"employé":{"nom":"Smith"}} (objet)
     // $Json_string = "{"employé":{"nom":"Smith"}}" (chaîne)
```

Vous pouvez également changer une valeur à la volée :

```4d
 OB SET($ref_smith ;"nom";"Smyth")
     // $ref_smith = {"employé":{"nom":"Smyth"}}
 $string :=JSON Stringify($ref_emp) 
     // $string = "{"employee":{"nom":"Smyth"}}"
```

#### Exemple 8 

Si vous avez défini le champ \[Rect\]Desc en tant que champ objet, vous pouvez écrire :

```4d
 CREATE RECORD([Rect])
 [Rect]Name:="Blue square"
 OB SET([Rect]Desc;"x";"50";"y";"50";"color";"blue")
 SAVE RECORD([Rect])
```

#### Exemple 9 

Vous souhaitez exporter des données en JSON contenant une date 4D que vous souhaitez convertir en chaîne sans fuseau horaire. A noter que la conversion a lieu au moment du stockage de la date dans l’objet, il faut donc appeler la commande [SET DATABASE PARAMETER](set-database-parameter.md) avant [OB SET](ob-set.md) : 

```4d
 var $o : Object
 $vDateParam:=Get database parameter(Dates dans objets) //on garde le paramétrage courant
 SET DATABASE PARAMETER(Dates dans objets;String type without time zone)
 OB SET($o ;"maDate";Current date) // conversion JSON
 $json:=JSON Stringify($o)
 SET DATABASE PARAMETER(Dates dans objets;$vDateParam)
```

#### Exemple 10 

Dans la méthode d'un formulaire contenant une zone 4D Write Pro, vous pouvez écrire :

```4d
 If(FORM Event=On Validate)
    OB SET([MyDocuments]My4DWP;"myatt_Last edition by";Current user)
    OB SET([MyDocuments]My4DWP;"myatt_Category";"Memo")
 End if
```

Vous pouvez également lire les attributs personnalisés des documents :

```4d
 vAttrib:=OB Get([MyDocuments]My4DWP;"myatt_Last edition by")
```

#### Exemple 11 

Vous souhaitez assigner une collection en tant que valeur d'une propriété. Vous pouvez écrire :

```4d
 var $person : Object
 var $myCol : Collection
 
 $person:=New object
 $myCol:=New collection("Mike";25;"Denis";12;"Henry";4;True)
 OB SET($person;"Name";"Jones";"Children";$myCol)
```

#### Exemple 12 

Vous souhaitez stocker une image dans un champ objet. Vous pouvez écrire :

```4d
 var $vPict : Picture
 READ PICTURE FILE("photo.jpg";$vPict)
 If(OK=1)
    OB SET([Emp]Children;"photo";$vPict)
 End if
```

#### Voir aussi 

[OB Get](ob-get.md)  
[OB REMOVE](ob-remove.md)  
[OB SET ARRAY](ob-set-array.md)  
[OB SET NULL](ob-set-null.md)  