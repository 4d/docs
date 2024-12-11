---
id: find-in-array
title: Find in array
slug: /commands/find-in-array
displayed_sidebar: docs
---

<!--REF #_command_.Find in array.Syntax-->**Find in array** ( *tableau* ; *valeur* {; *départ*} ) : Integer<!-- END REF-->
<!--REF #_command_.Find in array.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| tableau | Array | &#8594;  | Tableau dans lequel effectuer la recherche |
| valeur | Expression | &#8594;  | Valeur de même type à rechercher dans le tableau |
| départ | Integer | &#8594;  | Elément à partir duquel commencer la recherche |
| Résultat | Integer | &#8592; | Numéro du premier élément trouvé correspondant à valeur |

<!-- END REF-->

#### Description 

<!--REF #_command_.Find in array.Summary-->**Find in array** retourne le numéro du premier élément de *tableau* qui correspond à *valeur*.<!-- END REF-->peut être utilisé avec des tableaux de type Texte, Numérique, Date, Pointeur, Objet et Booléen. Les paramètres *tableau* et *valeur* doivent être du même type.

*valeur* doit correspondre exactement à l'élément recherché (les mêmes règles que pour l'opérateur d'égalité sont mises en oeuvre, voir [Opérateurs basiques](https://developer.4d.com/docs/fr/Concepts/operators/#op%C3%A9rateurs-basiques)). Si aucun élément n'est trouvé, **Find in array** renvoie -1.

**Note :** Avec les tableaux d'objets, vous ne pouvez utiliser que des références d'objets dans le paramètre valeur. 

Si *départ* est spécifié, **Find in array** commence la recherche à l'élément spécifié par *départ*. Si *départ* n'est pas spécifié, **Find in array** commence la recherche à l'élément 1.

#### Exemple 1 

La méthode projet suivante efface tous les éléments vides du tableau alpha ou texte passé en paramètre : 

```4d
  // Méthode projet NETTOYER TABLEAU
  // NETTOYER TABLEAU ( Pointeur )
  // NETTOYER TABLEAU ( -> Tableau Texte ou Alpha )
 
 var $1 : Pointer
 Repeat
    $vlElem:=Find in array($1->;"")
    If($vlElem>0)
       DELETE FROM ARRAY($1->;$vlElem)
    End if
 Until($vlElem<0)
```

Une fois que cette méthode projet est implémentée dans votre base, vous pouvez écrire, par exemple :

```4d
 ARRAY TEXT(TabValeurs;...)
  // ...
  // Use le tableau comme vous voulez
  // ...
  // Eliminer les éléments chaînes vides
 NETTOYER TABLEAU(->TabValeurs)
```

#### Exemple 2 

La méthode projet suivante sélectionne le premier élément d'un tableau dont le pointeur passé comme premier paramètre correspond à la valeur de la variable ou du champ dont le pointeur est passé en second paramètre :

```4d
  // Méthode projet SELECTIONNER ELEMENT
  // SELECTIONNER ELEMENT ( Pointeur ; Pointeur)
  // SELECTIONNER ELEMENT ( -> Tableau Texte ou Alpha ; -> Champ ou variable de type Texte ou Alpha )
 
 $1->:=Find in array($1->;$2->)
 If($1->=-1)
    $1->:=0 // Si aucun élément n'est trouvé, fixer le tableau à aucun élément sélectionné
 End if
```

Une fois que cette méthode projet est implémentée dans la base, vous pouvez écrire, par exemple :

```4d
  // Méthode objet du pop-up menu TabTitres
 Case of
    :(Form event code=On Load)
       SELECTIONNER ELEMENT(->TabTitres;->[Personnes]Titre)
 End case
```

**Note :** Cet exemple utilise l'**élément sélectionné** du tableau. Gardez à l'esprit que l'élément sélectionné ne sera pas significatif si le tableau comporte plus de 32767 éléments (cf. section *Tableaux et objets de formulaire*). Il est dans ce cas nécessaire d'utiliser une variable entier long pour stocker le résultat de **Find in array**.

#### Exemple 3 

Vous voulez trouver une référence d'objet :

```4d
 ARRAY OBJECT($objects;100)
 $o1:={a10;b"xyz"}
 $o2:={a10;b"xyz"}
 
 $objects{20}:=$o1
 var $p : Integer
 
 $p:=Find in array($objects;$o1) //$p = 20 
 $p:=Find in array($objects;$o2) //$p = -1 
 $p:=Find in array($objects;{a10;b"xyz"}) //$p = -1
```

#### Voir aussi 

[Count in array](count-in-array.md)  
[DELETE FROM ARRAY](delete-from-array.md)  
[Find in sorted array](find-in-sorted-array.md)  
[INSERT IN ARRAY](insert-in-array.md)  
[Size of array](size-of-array.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 230 |
| Thread safe | &check; |
| Interdite sur le serveur ||


