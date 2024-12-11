---
id: choose
title: Choose
slug: /commands/choose
displayed_sidebar: docs
---

<!--REF #_command_.Choose.Syntax-->**Choose** ( *critère* ; *valeur* {; *valeur2* ; ... ; *valeurN*} )  : any<!-- END REF-->
<!--REF #_command_.Choose.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| critère | Boolean, Integer | &#8594;  | Valeur à tester |
| valeur | Expression | &#8594;  | Valeurs possibles |
| Résultat | any | &#8592; | Valeur de critère |

<!-- END REF-->

#### Description 

<!--REF #_command_.Choose.Summary-->La commande **Choose** retourne l’une des valeurs passées dans les paramètres *valeur*, *valeur2*, etc.<!-- END REF--> en fonction de la valeur du paramètre *critère*. 

Vous pouvez passer un paramètre *critère* de type booléen ou numérique :

* Si *critère* est un booléen, **Choose** retourne *valeur* si le booléen vaut Vrai et *valeur2* si le booléen vaut Faux. Dans ce cas, la commande attend exactement trois paramètres : *critère*, *valeur* et *valeur2*.
* Si *critère* est un entier, **Choose** retourne la valeur dont la position correspond à *critère*. Attention, la numérotation des valeurs débute à 0 (la position de *valeur* est 0). Dans ce cas, la commande attend au minimum deux paramètres : *critère* et *valeur*.

La commande accepte tous les types de données pour le(s) paramètre(s) *valeur*, hormis les images, pointeurs, BLOBS et tableaux. Veillez cependant à ce que toutes les valeurs passées soient du même type, 4D n’effectue pas de vérification sur ce point.

Si aucune *valeur* ne correspond à *critère*, **Choose** retourne une valeur “nulle” en rapport avec le type du paramètre *valeur* (par exemple 0 pour le type numérique, “” pour le type chaîne, etc.).

Cette commande permet de générer du code concis en remplacement des tests du type “Au cas ou” sur plusieurs lignes (cf. exemple 2). Elle est également très utile dans les emplacements où des formules peuvent être exécutées : éditeur de recherches, appliquer une formule, éditeur d’états rapides, colonne calculée de list box, etc.

**Attention :** Avant d'être exécutée, la commande **Choose** évalue chaque paramètre valeur. Cela signifie que : 

* Si valeur est une expression dynamique qui entraîne des effets secondaires (mise à jour d'un compteur, modifications en tous genres), ces effets se produiront dans tous les cas ;
* Si un paramètre valeur n'est pas une expression valide, **Choose** retournera une erreur dans tous les cas. Par exemple, le code suivant retournera une erreur :  
```4d  
 $res:=Choose(True;"red1";"blue"+2) //erreur  
```

#### Exemple 1 

Voici une utilisation type de la commande avec un critère booléen :

```4d
 vTitre:=Choose([Personne]Masculin;"Mr";"Madame")
```

Ce code est strictement équivalent à :

```4d
 If([Personne]Masculin)
    vTitre:="Mr"
 Else
    vTitre:="Madame"
 End if
```

#### Exemple 2 

Voici une utilisation type de la commande avec un critère numérique :

```4d
 vStatut:=Choose([Personne]Statut;"Célibataire";"Marié";"Veuf";"Divorcé")
```

Ce code est strictement équivalent à :

```4d
 Case of
    :([Personne]Statut=0)
       vStatut:="Célibataire"
    :([Personne]Statut=1)
       vStatut:="Marié"
    :([Personne]Statut=2)
       vStatut:="Veuf"
    :([Personne]Statut=3)
       vStatut:="Divorcé"
 End case
```


#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 955 |
| Thread safe | &check; |
| Interdite sur le serveur ||


