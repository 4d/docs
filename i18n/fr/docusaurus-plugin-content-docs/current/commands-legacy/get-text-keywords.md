---
id: get-text-keywords
title: GET TEXT KEYWORDS
slug: /commands/get-text-keywords
displayed_sidebar: docs
---

<!--REF #_command_.GET TEXT KEYWORDS.Syntax-->**GET TEXT KEYWORDS** ( *texte* ; *tabMotsClés* {; *} )<!-- END REF-->
<!--REF #_command_.GET TEXT KEYWORDS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| texte | Text | &#8594;  | Texte original |
| tabMotsClés | Text array | &#8592; | Tableau contenant les mots-clés |
| * | Opérateur | &#8594;  | Si passé = mots uniques |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET TEXT KEYWORDS.Summary-->La commande **GET TEXT KEYWORDS** découpe la totalité du *texte* en mots et crée, pour chaque mot obtenu, un élément dans le tableau texte *tabMotsClés*.<!-- END REF--> 

Le découpage en mots est effectué à l’aide du même algorithme que celui que 4D utilise pour construire les *Index de mots-clés*. Cet algorithme est basé sur la librairie ICU. Pour plus d’informations sur les séparateurs pris en compte, reportez-vous à l’adresse suivante : <http://userguide.icu-project.org/boundaryanalysis>. 

**Note :** A la demande des utilisateurs, une exception a été introduite pour les langages français et italien : le caractère apostrophe ' suivi d’une voyelle ou de la lettre h est considéré comme séparateur de mot. Par exemple, les chaînes "L'homme" ou "l'arbre" seront bien découpées en "L’"+"homme" et "l'"+"arbre".

L’algorithme utilisé diffère si l’option **N’utiliser que les caractères non alphanumériques pour les mots-clés** est cochée ou non dans les [Propriétés de la base](https://developer.4d.com/docs/fr/settings/database/#comparaison-de-texte).

Passez dans le paramètre *texte* le texte original à découper. Ce texte peut être stylé, dans ce cas les balises de style sont simplement ignorées. 

Passez dans le paramètre *tabMotsClés* le tableau texte qui sera rempli par la commande avec les mots extraits du texte. 

Si vous passez le paramètre optionnel *\**, la commande ne stockera chaque mot-clé qu’une seule fois dans *tabMotsClés*. Par défaut, si ce paramètre est omis, tous les mots extraits du texte sont stockés dans le tableau, même s’ils apparaissent plusieurs fois.

Cette commande permet d’effectuer de façon simple des recherches parmi des enregistrements contenant des textes de grande taille, en ayant la garantie d’utiliser les mêmes mots-clés que 4D. Par exemple, soit un texte contenant "10.000 Jean-Pierre BC45". Si le découpage en mots-clés donne "10.000" + "Jean" + "Pierre" + "BC45", le tableau contiendra 4 éléments. Par programmation, il est alors facile d’effectuer une boucle dans ce tableau afin de trouver les enregistrements contenant un ou plusieurs de ces mots-clés à l’aide de l’opérateur % (voir exemples).

#### Exemple 1 

Dans un formulaire contenant une zone de recherche, l’utilisateur peut saisir un ou plusieurs mot(s). Lorsqu’il valide, on recherche les enregistrements dont le champ *MonChamp* contient au moins un des mots saisis par l’utilisateur. 

```4d
  // vSearch est la variable de la zone de saisie dans le formulaire
 GET TEXT KEYWORDS(vSearch;tSearch;*)
  //* pour le cas où l’utilisateur saisirait le même mot plusieurs fois
 CREATE SET([MaTable];"Globaltrouve")
 $n:=Size of array(tSearch)
 For($i;1;$n)
    QUERY([MaTable];[MaTable]MonChamp% tSearch{$i})
    CREATE SET(([MaTable];"trouve")
    UNION("Globaltrouve";"trouve";"Globaltrouve")
 End for
 USE SET("Globaltrouve")
```

#### Exemple 2 

Dans le même formulaire que précédemment, on recherche les enregistrements dont le champ *MonChamp* contient tous les mots saisis par l’utilisateur. 

```4d
  // vSearch est la variable de la zone de saisie dans le formulaire
 GET TEXT KEYWORDS(vSearch;tSearch;*)
 $n:=Size of array(tSearch)
 QUERY([MaTable];[MaTable]ID >=0;*)
  // initialiser la recherche = tous les enregistrements
 For($i;1;$n)
    QUERY([MaTable];&;[MaTable]MonChamp% tSearch{$i};*)
  // ajouter le critère
 End for
 QUERY([MaTable]) //recherche
```

#### Exemple 3 

Pour compter les mots d’un texte :

```4d
 GET TEXT KEYWORDS(vTexte;tMots) // tous les mots
 $n:=Size of array(tMots)
 GET TEXT KEYWORDS(vTexte;tMots;*) // mots différents
 $m:=Size of array(tMots)
 ALERT("Ce texte contient "+String($n)+" mots distincts parmi "+Chaine($m))
```

#### Voir aussi 

[DISTINCT VALUES](distinct-values.md)  