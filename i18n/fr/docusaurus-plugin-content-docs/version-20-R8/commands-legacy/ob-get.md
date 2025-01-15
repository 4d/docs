---
id: ob-get
title: OB Get
slug: /commands/ob-get
displayed_sidebar: docs
---

<!--REF #_command_.OB Get.Syntax-->**OB Get** ( *objet* ; *propriété* {; *type*} ) : any<!-- END REF-->
<!--REF #_command_.OB Get.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objet | Object, Object | &#8594;  | Objet structuré |
| propriété | Text | &#8594;  | Nom de la propriété à lire |
| type | Integer | &#8594;  | Type dans lequel convertir la valeur |
| Résultat | any | &#8592; | Valeur courante de la propriété |

<!-- END REF-->

#### Description 

<!--REF #_command_.OB Get.Summary-->La commande **OB Get** retourne la valeur courante de la *propriété* de l’*objet*, convertie optionnellement dans le *type* défini.<!-- END REF-->doit avoir été défini via la commande *C\_OBJECT* ou désigner un champ objet 4D.

**Note :** Cette commande prend en charge les définitions d'attributs dans les *objets* 4D Write Pro, comme la commande *WP GET ATTRIBUTES* (cf. exemple 9). Toutefois, à la différence de *WP GET ATTRIBUTES*, **OB Get** ne permet pas de manipuler directement une variable ou un champ image comme valeur d'attribut.

Passez dans le paramètre *propriété* le libellé de la propriété à lire. Attention, le paramètre *propriété* tient compte des majuscules/minuscules. 

Par défaut, 4D retournera la valeur de la propriété dans son type d’origine. Vous pouvez "forcer" le typage de la valeur retournée à l’aide du paramètre optionnel *type*. Pour cela, vous pouvez passer dans *type* une des constantes suivantes, placées dans le thème *Types champs et variables* :

| Constante  | Type        | Valeur |
| ---------- | ----------- | ------ |
| Is Boolean | Entier long | 6      |
| Is date    | Entier long | 4      |
| Is longint | Entier long | 9      |
| Is object  | Entier long | 38     |
| Is pointer | Entier long | 23     |
| Is real    | Entier long | 1      |
| Is text    | Entier long | 2      |
| Is time    | Entier long | 11     |

La commande retourne la valeur de la *propriété*. Plusieurs types de données sont pris en charge. A noter que :

* un pointeur est retourné tel quel, il peut être évalué à l’aide de la commande [JSON Stringify](json-stringify.md),
* les dates sont retournées au format "YYYY-MM-DDTHH:mm:ss.SSSZ"
* dans les valeurs réelles, le séparateur décimal est toujours le point "."
* les heures sont retournées sous forme d’un nombre. A noter que [OB SET](ob-set.md) stocke les heures sous forme de millisecondes, conformément au standard javascript, tandis que 4D attend un nombre de secondes. Pour une interprétation correcte par **OB Get** d'une heure stockée, vous devez utiliser la constante Is time.

#### Exemple 1 

Récupération d’une valeur de type texte :

```4d
 var $ref : Object
 var $prénom : Text
 OB SET($ref;"Prénom";"Harry")
 $prénom:=OB Get($ref;"Prénom")  // $prénom = "Harry" (texte)
```

#### Exemple 2 

Récupération d’une valeur numérique convertie en entier long :

```4d
 OB SET($ref ;"age";42)
 $age:=OB Get($ref ;"age") // $age est un réel (défaut)
 $age:=OB Get($ref ;"age";Is longint) // $age est un entier long
```

#### Exemple 3 

Récupération des valeurs d’un objet :

```4d
 var $ref1;$ref2 : Object
 OB SET($ref1;"nom";"Smith") //$ref1={"nom":"Smith"}
 OB SET($ref2;"fils";$ref1) //$ref2={"fils":{"nom":"Smith"}}
 $fils:=OB Get($ref2;"fils") //$fils={"name":"john"} (objet)
 $nomfils:=OB Get($fils ;"nom") //$nomfils="john" (texte)
```

#### Exemple 4 

Modifications de l’âge d’un employé :

```4d
 var $ref_john;$ref_jim : Object
 OB SET($ref_john;"nom";"John";"age";35)
 OB SET($ref_jim;"nom";"Jim";"age";40)
 APPEND TO ARRAY($myArray;$ref_john) // on crée un tableau objet
 APPEND TO ARRAY($myArray;$ref_jim)
     // on passe l’âge de John de 35 à 25
 OB SET($myArray{1};"age";25)
     // On remplace l’âge de "John" dans le tableau
 For($i;1;Size of array($myArray))
       If(OB Get($myArray{$i};"nom")="John")
          OB SET($myArray{$i};"age";36)  //au lieu de 25
              // $ref_john={"nom":"John","age":36}
       End if
 End for
```

#### Exemple 5 

Lorsque vous récupérez une date, la valeur résultante dépend du paramétrage courant de la base. 

* Si l'option "Utiliser le type date au lieu du format ISO dans les objets" n'est pas cochée :

```4d
 var $object : Object
 var $anniv : Date
 var $chainAnniv : Text
 OB SET($object;"Anniversaire";!30/01/2010!)
 $anniv:=OB Get($object;"Anniversaire";Is date) //30/01/10
 $chainAnniv:=OB Get($object;"Anniversaire") //"2010-01-29T23:00:00.000Z" (Paris)
```

* Si l'option "Utiliser le type date au lieu du format ISO dans les objets" est cochée :

```4d
 var $object : Object
 var $anniv : Date
 OB SET($object;"Anniversaire";!30/01/2010!)
 $anniv:=OB Get($object;"Anniversaire") //30/01/10, pas besoin de Is date
```

**Note :** Pour plus d'informations sur ce paramétrage, reportez-vous à la *Page Compatibilité*.

#### Exemple 6 

Utilisation d'objets imbriqués :

```4d
 var $ref1;$child;$children : Object
 var $childName : Text
 OB SET($ref1;"firstname";"John";"lastname";"Monroe")
     //{"firstname":"john","lastname";"Monroe"}
 OB SET($children;"children";$ref1)
 $child:=OB Get($children;"children")
     //$son = {"firstname":"John","lastname":"Monroe"} (objet)
 $childName:=OB Get($child;"lastname")
     //$childName = "Monroe" (texte)
     //ou bien
 $childName:=OB Get(OB Get($children;"children");"lastname")
     // $childName = "Monroe" (texte)
```

#### Exemple 7 

Récupération dans 4D d'une heure stockée dans un objet :

```4d
 var $obj_o : Object
 var $set_h;$get_h : Time
 
 $set_h:=?01:00:00?+1
 OB SET($obj_o;"myHour";$set_h)
  // $obj_o = {"myHour":3601}
  // L'heure est stockée en secondes
 $get_h:=OB Get($obj_o;"myHour";Is time)
  // $get_h = ?01:00:01?
```

#### Exemple 8 

Exemples de manipulation de champs objet 4D :

```4d
  // Définir une valeur
 OB SET([Personnes]Identity_OB;"Prénom";$firstName)
 OB SET([Personnes]Identity_OB;"Nom";$lastName)
 
  // Lire une valeur
 $firstName:=OB Get([Personnes]Identity_OB;"Prénom")
 $lastName:=OB Get([Personnes]Identity_OB;"Nom")
```

#### Exemple 9 

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

#### Exemple 10 

Vous voulez connaître la taille d'une image stockée dans un objet :

```4d
 var $vSize : Integer
 $vSize:=Picture size(OB Get($object;"photo";Is picture))
```

**Note :** si vous assignez le résultat de la commande à une variable image, la constante Est une image n'est pas nécessaire. Exemple :  

```4d
 var $vPict : Picture
 $vPict:=OB Get($object;"photo") //"Est une image" est inutile dans ce cas
```

#### Voir aussi 

[OB Copy](ob-copy.md)  
[OB SET](ob-set.md)  
*Types champs et variables*  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1224 |
| Thread safe | &check; |


