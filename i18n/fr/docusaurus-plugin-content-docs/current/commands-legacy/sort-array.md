---
id: sort-array
title: SORT ARRAY
slug: /commands/sort-array
displayed_sidebar: docs
---

<!--REF #_command_.SORT ARRAY.Syntax-->**SORT ARRAY** ( *tableau* {; *tableau2* ; ... ; *tableauN*}{; > ou <} )<!-- END REF-->
<!--REF #_command_.SORT ARRAY.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| tableau | Array | &#8594;  | Tableau(x) à trier |
| > ou < | Opérateur | &#8594;  | ">" pour effectuer un tri par ordre croissant ou "<" pour effectuer un tri par ordre décroissant (tri croissant si omis) |

<!-- END REF-->

#### Description 

<!--REF #_command_.SORT ARRAY.Summary-->La commande **SORT ARRAY** trie un ou plusieurs tableau(x) par ordre croissant ou décroissant.<!-- END REF-->

* Vous ne pouvez pas trier de tableaux de type [Pointeur](# "A reference to another variable (including arrays and array elements), table, or field") ou [Image](# "Can be any Windows or Macintosh picture"). Vous pouvez trier un élément d'un tableau à deux dimensions (c'est-à-dire *t2DTableau{$vlCetElément}*), mais vous ne pouvez pas trier le tableau 2D lui-même (c'est-à-dire *t2DTableau*).
* Vous pouvez trier les tableaux de type Object. Les éléments Null sont regroupés et les éléments du tableau sont triés selon un ordre interne.

Le second paramètre spécifie l'ordre du tri : croissant ou décroissant. Si ce paramètre est égal au symbole “supérieur à” (>), l'ordre du tri est croissant. S'il est égal au symbole “inférieur à” (<), l'ordre du tri est décroissant. S'il est omis, l'ordre du tri est croissant.

Si plus d'un tableau est spécifié, les tableaux sont triés en fonction de l'ordre défini pour le premier tableau (les tris multi-niveaux ne sont pas possibles dans ce cas). Utilisez plutôt la commande [MULTI SORT ARRAY](multi-sort-array.md) si vous souhaitez effectuer des tris de tableaux synchronisés.

#### Exemple 1 

L'exemple suivant crée deux tableaux et les trie en fonction du nom de la société :

```4d
 ALL RECORDS([Personnes])
 SELECTION TO ARRAY([Personnes]Noms;tabNoms;[Personnes]Sociétés;tabSociétés)
 SORT ARRAY(tabSociétés;tabNoms;>)
```

Cependant, comme **SORT ARRAY** n'effectue pas de tris multi-niveaux, les noms des personnes apparaîtront en désordre à l'intérieur de chaque société. Pour que les noms des personnes soient triés pour chaque société, vous devrez plutôt écrire :

```4d
 ALL RECORDS([Personnes])
 ORDER BY([Personnes];[Personnes]Sociétés;>;[Personnes]Noms;>)
 SELECTION TO ARRAY([Personnes]Noms;tabNoms;[Personnes]Sociétés;tabSociétés)
```

#### Exemple 2 

Vous affichez les noms d'une table \[Personnes\] dans une fenêtre flottante. Cette liste de noms peut être triée de A vers Z ou de Z vers A en fonction du bouton sur lequel vous cliquez, dans la fenêtre. Comme il se peut que certaines personnes portent le même nom, vous avez également créé un champ *\[Personnes\]Numéro ID* qui est un champ indexé unique. Lorsque vous cliquez sur un nom dans la liste, vous voulez récupérer l'enregistrement correspondant. En utilisant un tableau synchronisé et caché des numéros d'ID, vous êtes certain d'accéder à l'enregistrement correspondant au nom sélectionné :

```4d
  // Méthode objet du tableau tabNoms
 Case of
    :(Form event code=On Load)
       ALL RECORDS([Personnes])
       SELECTION TO ARRAY([Personnes]Noms;tabNoms;[Personnes]Numéro ID;tabIDs)
       SORT ARRAY(tabNoms;tabIDs;>)
    :(Form event code=Sur libération)
       CLEAR VARIABLE(tabNoms)
       CLEAR VARIABLE(tabIDs)
    :(Form event code=On Clicked)
       If(tabNoms#0)
  // Use le tableau tabIDs pour récupérer le bon enregistrement
          QUERY([Personnes];[Personnes]Numéro IDr=tabIDs{tabNoms})
  // Traiter ici l'enregistrement
       End if
 End case
 
  // Méthode objet du bouton bAversZ
  // Tri croissant des tableaux en conservant la synchronisation
 SORT ARRAY(tabNoms;tabIDs;>)
 
  // Méthode objet du bouton bZversA
  // Tri décroissant des tableaux en conservant la synchronisation
 SORT ARRAY(tabNoms;tabIDs;<)
```

#### Voir aussi 

[Find in sorted array](find-in-sorted-array.md)  
[MULTI SORT ARRAY](multi-sort-array.md)  
[ORDER BY](order-by.md)  
[SELECTION TO ARRAY](selection-to-array.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 229 |
| Thread safe | &check; |


