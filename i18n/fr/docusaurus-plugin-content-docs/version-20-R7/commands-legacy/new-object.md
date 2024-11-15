---
id: new-object
title: New object
slug: /commands/new-object
displayed_sidebar: docs
---

<!--REF #_command_.New object.Syntax-->**New object** {( *propriété* ; *valeur* {; *propriété2* ; *valeur2* ; ... ; *propriétéN* ; *valeurN*} )} : Object<!-- END REF-->
<!--REF #_command_.New object.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| propriété | Text | &#8594;  | Nom de la propriété à créer |
| valeur | any | &#8594;  | Valeur de la propriété |
| Résultat | Object | &#8592; | Nouvel objet structuré |

<!-- END REF-->

#### Description 

<!--REF #_command_.New object.Summary-->La commande **New object** crée un objet vide ou pré-rempli et retourne sa référence.<!-- END REF-->

Si vous ne passez aucun paramètre, **New object** crée un objet vide et retourne sa référence. Vous devez assigner cette référence à une variable 4D déclarée avec [C\_OBJECT](c-object.md) ou un champ objet 4D.

**Note :** [C\_OBJECT](c-object.md) déclare une variable de type [Objet](# "Données structurées sous forme d'objet natif 4D") mais ne crée pas d'objet.

Optionnellement, vous pouvez pré-remplir le nouvel objet en passant une ou plusieurs paires *propriété*/*valeur* comme paramètres :

* Dans le paramètre *propriété*, passez le libellé de la propriété à créer. Notez que le libellé du paramètre *propriété* est sensible à la casse.
* Dans le paramètre *valeur*, passez la valeur que vous souhaitez fixer à la propriété. Les types de données suivants sont acceptés :  
   * numérique (réel, entier...) - les valeurs numériques sont toujours stockées sous forme de réels .  
   * texte  
   * booléen  
   * pointeur  
   * blob (4D.Blob)  
   * date  
   * heure  
   * null  
   * image  
   * objet  
   * collection

Notez que :

* si vous passez un pointeur, il est récupéré tel quel ; il sera évalué lors de l'utilisation de commandes telles que [JSON Stringify](json-stringify.md),
* les dates sont stockées sous forme de date "yyyy-mm-dd" ou de chaîne au format "YYYY-MM-DDTHH:mm:ss.SSSZ" en fonction du paramétrage courant relatif au stockage des dates dans les objets (cf. *Page Compatibilité*). Lorsque vous convertissez des dates 4D en texte, avant de les stocker dans l'objet, par défaut, le programme utilise l'heure locale de la zone. Vous pouvez modifier ce comportement en utilisant le sélecteur Dates inside objects de la commande [SET DATABASE PARAMETER](set-database-parameter.md).
* si vous passez une heure, elle est stockée en nombre de millisecondes (réel).

#### Exemple 1 

Cette commande peut créer des objets vides ou des objets remplis :

```4d
 var $obj1 : Object
 var $obj2 : Object
 var $obj3 : Object
 $obj1:=New object
  // $obj1 = {}
 $obj2:=New object("name";"Smith")
  // $obj2 = {name:Smith}
 $obj3:=New object("name";"Smith";"age";40)
  // $obj3 = {name:Smith,age:40}
```

#### Exemple 2 

Création d'un nouvel objet avec un objet en paramètre *valeur* : 

```4d
 var $Children;$Contact : Object
 
  //Création d'un tableau objet
 ARRAY TEXT($arrChildren;3)
 $arrChildren{1}:="Richard"
 $arrChildren{2}:="Susan"
 $arrChildren{3}:="James"
 OB SET ARRAY($Children;"Children";$arrChildren)
 
  //InitialIsation de l'objet
 $Contact:=New object("FirstName";"Alan";"LastName";"Parker";"age";30;"Children";$Children)
  // $Contact = {FirstName:Alan,LastName:Parker,age:30,Children:{Children:[Richard,Susan,James]}}
```

#### Exemple 3 

Cette commande est utile pour passer des objets en paramètres :

```4d
 var $measures : Object
 $measures:=Database measures(New object("path";"DB.cacheReadBytes";"withHistory";True;"historyLength";120))
```

#### Exemple 4 

Avec cette commande, vous pouvez aisément gérer des objets en boucle :

```4d
 ARRAY OBJECT($refs;0)
 var vCounter : Integer
 
 For(vCounter;1;100)
    APPEND TO ARRAY($refs;New object("line";"Line number "+String(vCounter)))
 End for
```

#### Voir aussi 

  
[New shared object](new-shared-object.md)  