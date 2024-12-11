---
id: ob-copy
title: OB Copy
slug: /commands/ob-copy
displayed_sidebar: docs
---

<!--REF #_command_.OB Copy.Syntax-->**OB Copy** ( *objet* {; résoudrePtrs | {; *option* {; *grouperAvec*}}} )  : Object<!-- END REF-->
<!--REF #_command_.OB Copy.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objet | Object, Object | &#8594;  | Objet structuré |
| résoudrePtrs | Boolean | &#8594;  | Vrai = résoudre les pointeurs, Faux ou omis = ne pas les résoudre |
| option | Integer | &#8594;  | ck shared: return a shared object,ck resolve pointers: resolve pointers before copying |
| grouperAvec | Collection, Object | &#8594;  | Collection ou objet partagé(e) à grouper avec l'objet résultant |
| Résultat | Object | &#8592; | Copie de objet |

<!-- END REF-->

#### Description 

<!--REF #_command_.OB Copy.Summary-->La commande **OB Copy** retourne un objet contenant une copie complète des propriétés, sous-objets et valeurs de *objet*.<!-- END REF-->
Si *objet* contient des valeurs de type pointeur, par défaut la copie contient également les pointeurs. Vous pouvez cependant résoudre les pointeurs au moment de la copie : pour cela, passez **Vrai** dans le paramètre *résoudrePtrs*. Dans ce cas, chaque pointeur présent comme valeur dans *objet* sera évalué au moment de la copie et sa valeur dépointée sera utilisée.

**Note :** Si les propriétés de *objet* sont des objets partagés ou des collections partagées, elles sont transformées en objets ou collections standard (non partagés) dans la copie. Utilisez la deuxième syntaxe si vous souhaitez retourner des éléments partagés (voir ci-dessous).

* Deuxième syntaxe : **OB Copy(objet{; option{; grouperAvec}})**

S'il est passé, le paramètre *option* peut contenir l'une des constantes suivantes (ou les deux) :

| **option**          | **Description**                                                                                                                                                                                                                                                                                                                              |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ck resolve pointers | Si l'objet d'origine contient des valeurs de type pointeur, par défaut la copie contient également les pointeurs. Toutefois, vous pouvez résoudre les pointeurs au moment de la copie, en passant ck resolve pointers. Dans ce cas, chaque pointeur contenu dans l'objet est évalué lors de la copie et sa valeur déréférencée est utilisée. |
| ck shared           | Par défaut, **OB Copy** retourne un objet standard (non partagé), même si la commande s'applique à un objet partagé. Passez la constante ck shared pour créer un objet partagé. Dans ce cas, vous pouvez utiliser le paramètre *grouperAvec* pour associer l'objet partagé avec un(e) autre collection/objet (voir ci-sessous).              |

Le paramètre *grouperAvec* vous permet de désigner une collection ou un objet auquel/à laquelle l'objet résultant sera associé.

**Notes :** 

* **OB Copy** peut être utilisée avec un objet sélection d'entité. Par défaut, si ck shared est omis, une sélection d'entité *non partageable* est retournée. Si ck shared est passé, une sélection d'entité *partageable* est retournée. Dans ce contexte, l'option *grouperAvec* est inutile car une sélection d'entité n'a pas d'i*dentifiant de verrouillage.*
* Le même principe s'applique aux sélections d'entités stockées à l'intérieur des propriétés de *objet*. Cependant, la commande est optimisée lorsque ck shared est passé et qu'une sélection d'entité imbriquée est *partageable*: la même référence de sélection d'entité est retournée dans l'objet résultant.
* Les objets datastore, dataclass et entity ne sont pas copiables. Si la commande **OB Copy** est appelée avec eux, une valeur Null est retournée.

#### Exemple 1 

Vous souhaitez dupliquer un objet contenant des valeurs simples :

```4d
 var $Object : Object
 var $JsonString : Text
 
 ARRAY OBJECT($arraySel;0)
 ALL RECORDS([Product])
 While(Not(End selection([Product])))
    OB SET($Object;"id";[Product]ID_Product)
    OB SET($Object;"Product Name";[Product]Product_Name)
    OB SET($Object;"Price";[Product]Price)
    OB SET($Object;"Tax rate";[Product]Tax_rate)
    $ref_value:=OB Copy($Object) //copie directe
    APPEND TO ARRAY($arraySel;$ref_value)
           //le contenu de $ref_value est identique à celui de $Object
    NEXT RECORD([Product])
 End while
     //le contenu de $ref_value
 $JsonString:=JSON Stringify array($arraySel)
```

#### Exemple 2 

Vous dupliquez un objet contenant des pointeurs (première syntaxe) :

```4d
 var $ref : Object
 
 OB SET($ref;"name";->[Company]name) //objet avec pointeurs
 OB SET($ref;"country";->[Company]country)
 ARRAY OBJECT($sel;0)
 ARRAY OBJECT($sel2;0)
 
 ALL RECORDS([Company])
 
 While(Not(End selection([Company])))
       $ref_comp:=OB Copy($ref) // copie sans évaluation des pointeurs
           //$ref_comp={"name":"->[Company]name","country":"->[Company]Country"}
       $ref_comp2:=OB Copy($ref;True) //copie avec évaluation des pointeurs
           //$ref_comp={"name":"4D SAS","country":"France"}
       APPEND TO ARRAY($sel;$ref_comp)
       APPEND TO ARRAY($sel2;$ref_comp2)
       NEXT RECORD([Company])
 End while
 
 $Object:=JSON Stringify array($sel)
 $Object2:=JSON Stringify array($sel2)
 
     // $Object = [{"name":"","country":""},{"name":"","country":""},...]
     // $Object2 = [{"name":"4D SAS","country":"France"},{"name":"4D, Inc","country":"USA"},{"name":"Catalan","country":"France"}...]
```

#### Exemple 3 

Nous souhaitons copier l'objet standard (non partagé) *$* *person* dans l'objet partagé *$sharedObject.* Pour ce faire, nous devons créer une copie partagée de l'objet (*$sharedObject).* 

```4d
 var $person;$copy;$sharedObject : Object
 var $text : Text
 
 $text:=Document to text(Get 4D folder(Current resources folder)+"person.txt")
 $person:=JSON Parse($text) //$person est un objet standard
 $sharedObject:=New shared object()
 $copy:=OB Copy($person;ck shared) //$copy est un objet partagé
 
  //Il peut alors être inséré dans $sharedObject 
 Use($sharedObject)
    $sharedObject.person:=$copy
 End use
```

#### Exemple 4 

*$obj* contient un pointeur (propriété "name") sur le champ "name" de l'enregistrement courant.

```4d
 var $obj;$objWithPtr;$sharedObjWithPtr : Object
 $obj:=New object()
 
  //$obj est un objet avec un pointeur
 OB SET($obj;"name";->[Persons]name)
 
 ALL RECORDS([Persons])
  //Il existe maintenant un enregistrement courant sur la table [Persons] donc [Persons]name est rempli
  //
  // Si nous voulons copier $obj comme objet standard avec évaluation des pointeurs
  // Nous faisons comme suit :
 $objWithPtr:=OB Copy($obj;True)
  //
  // Si nous voulons copier $obj comme objet partagé avec évaluation des pointeurs
  // Nous faisons comme suit :
 $sharedObjWithPtr:=OB Copy($obj;ck resolve pointers+ck shared)
```

#### Exemple 5 

Nous souhaitons copier *$sharedObj* dans *$sharedColl.* Etant donné qu'ils appartiennent à différents groupes partagés, une copie directe pourrait générer une erreur. Nous devons effectuer une copie de *$sharedObj* et désigneR *$sharedColl* comme étant un groupe partagé de la copie.

```4d
 var $sharedObj;$objCopy : Object
 var $sharedColl : Collection
 
  //$sharedObj appartient à un groupe partagé
 $sharedObj:=New shared object("lastname";"Smith";"address";New shared object("city";"New York"))
  //$sharedColl appartient à un autre groupe partagé
 $sharedColl:=New shared collection(New shared object("lastname";"Brown"))
 
 $objCopy:=OB Copy($sharedObj;ck shared;$sharedColl)
  //$objCopy est maintenant dans le même groupe partagé que $sharedColl
 
  //$objCopy peut alors être inséré dans $sharedColl sans erreur
 Use($sharedColl)
    $sharedColl.push($objCopy)
 End use
```

#### Voir aussi 

[OB Get](ob-get.md)  
*Objets partagés et collections partagées*  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1225 |
| Thread safe | &check; |
| Interdite sur le serveur ||


