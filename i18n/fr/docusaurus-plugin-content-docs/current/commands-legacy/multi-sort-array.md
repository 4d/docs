---
id: multi-sort-array
title: MULTI SORT ARRAY
slug: /commands/multi-sort-array
displayed_sidebar: docs
---

<!--REF #_command_.MULTI SORT ARRAY.Syntax-->**MULTI SORT ARRAY** ( *tableau* {; *sensDuTri*}{; *tableau2* ; *sensDuTri2* ; ... ; *tableauN* ; *sensDuTriN*} ) <br/>
**MULTI SORT ARRAY** ( *tabPointeurs* ; *tabTris* )<!-- END REF-->
<!--REF #_command_.MULTI SORT ARRAY.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| tableau | Array | &#8594;  | Tableau(x) à trier |
| sensDuTri | * | &#8594;  | ">" pour effectuer un tri croissant ou "<" pour effectuer un tri décroissant Si omis  = pas de tri |
| MULTI SORT ARRAY ( tabPointeurs ; tabTris ) |
| Paramètre | Type | Description |
| tabPointeurs | Pointer array | &#8594;  | Tableau de pointeurs de tableaux |
| tabTris | Integer array | &#8594;  | Tableau d’ordres de tri (1 = tri par ordre croissant, -1 = tri par ordre décroissant, 0 = synchronisation avec des tris précédents) |

<!-- END REF-->

#### Description 

<!--REF #_command_.MULTI SORT ARRAY.Summary-->La commande **MULTI SORT ARRAY** vous permet d’effectuer un tri multi-critères sur un ensemble de tableaux.<!-- END REF-->

Cette commande admet deux syntaxes différentes.

* **Première syntaxe : TABLEAU MULTI TRI (tableau{; sensDuTri}{; tableau2; sensDuTri2; ...; tableauN; sensDuTriN})**

Cette syntaxe est la plus simple, elle permet de passer directement les noms des tableaux synchronisés auxquels vous souhaitez appliquer un tri multi-critères.

Vous pouvez passer un nombre illimité de couples (*tableau;> ou <*) et/ou de tableaux seuls. Tous les tableaux passés en paramètres sont triés de manière synchronisée.

Pour utiliser le contenu d’un tableau comme critère de tri, passez le paramètre *sensDuTri*. La valeur du paramètre (*\>* ou *<*) définit l’ordre (croissant ou décroissant) dans lequel le tableau sera trié. Si le paramètre *sensDuTri* est omis, le contenu du tableau n’est pas utilisé comme critère de tri.

**Note :** Attention, au moins un critère de tri doit être passé pour que la commande fonctionne. Si aucun critère de tri n’est défini, une erreur est générée.

Les niveaux de tris sont déterminés par l’ordre dans lequel les tableaux sont passés à la commande : la position d’un tableau avec critère dans la syntaxe détermine son niveau de tri.

* **Seconde syntaxe : TABLEAU MULTI TRI (tabPointeurs; tabTris)**

Cette syntaxe, plus complexe, est précieuse pour les développements génériques (par exemple, vous pouvez créer une méthode générique de tri des tableaux de tout type, ou encore générer l’équivalent d’un [SORT ARRAY](sort-array.md) générique).

La paramètre *tabPointeurs* contient le nom d’un tableau de pointeurs de tableaux ; chaque élément de ce tableau est un pointeur désignant un tableau à trier. Les tris seront effectués dans l’ordre des pointeurs de tableaux défini par *tabPointeurs*. **Attention**, tous les tableaux pointés par *tabPointeurs* doivent avoir le même nombre d'éléments.

**Note :** *tabPointeurs* peut être un tableau de pointeurs local ($nomTabPtr), process (nomTabPtr) ou interprocess (<>nomTabPtr). En revanche, les éléments de ce tableau doivent pointer sur des tableaux process ou interprocess uniquement.

La paramètre *tabTri*s contient le nom d’un tableau dont chaque élément indique l’ordre de tri (-1, 0 ou 1) de l’élément du tableau de pointeurs correspondant :  
\-1 = Tri par ordre décroissant.  
0 = Le tableau n’est pas utilisé comme critère de tri mais doit être trié en fonction des autres tris.   
1 = Tri par ordre croissant.

A chaque élément du tableau *tabPointeurs* doit correspondre un élément du tableau *tabTri*s. Les deux tableaux doivent donc avoir exactement le même nombre d’éléments.

**Notes :** 

1. Vous ne pouvez pas trier de tableaux de type Pointeur ou Image. Vous pouvez trier les éléments d’un tableau à deux dimensions (c’est-à-dire t2DTableau{$vlCetElément}), mais vous ne pouvez pas trier le tableau 2D lui-même (c’est-à-dire t2DTableau).
2. Vous pouvez trier les tableaux de type Objet. Les éléments Null sont regroupés et les éléments du tableau sont triés selon un ordre interne.

#### Exemple 1 

L’exemple suivant utilise la première syntaxe : il crée quatre tableaux et les trie par ville (ordre croissant) puis par salaire (ordre décroissant), les deux derniers tableaux *tab\_Noms* et *tab\_NumTel* étant synchronisés en fonction des critères de tri précédents :

```4d
 ALL RECORDS([Employés])
 SELECTION TO ARRAY([Employés]Ville;tab_Villes;[Employés]Salaire;tab_Salaire;[Employés]Nom;
 tab_Noms;[Employés]NumTel;tab_NumTel)
 MULTI SORT ARRAY(tab_Villes;>;tab_Salaire;<;tab_Noms;tab_NumTel)
```

Si vous souhaitez que le tableau des noms soit utilisé comme troisième critère de tri, il vous suffit d’ajouter *\>* ou *<* derrière le paramètre *tab\_Noms*.   
A noter que la syntaxe :

```4d
 MULTI SORT ARRAY(tab_Villes;>;tab_Salaire;tab_Noms;tab_NumTel)
```

équivaut strictement à :

```4d
 SORT ARRAY(tab_Villes;tab_Salaire;tab_Noms;tab_NumTel;>)
```

#### Exemple 2 

L’exemple suivant utilise la seconde syntaxe : il crée quatre tableaux et les trie par ville (ordre croissant) et société (ordre décroissant), les deux derniers tableaux tab\_Noms et tab\_NumTel étant synchronisés en fonction des critères de tri précédents :

```4d
 ALL RECORDS([Employés])
 SELECTION TO ARRAY([Employés]Ville;tab_Villes;[Employés]Société;tab_Société;[Employés]Nom;
 tab_Noms;[Employés]NumTel;tab_NumTel)
 ARRAY POINTER(tab_Pointeurs;4)
 ARRAY LONGINT(tab_Tris;4)
 tab_Pointeurs{1}:=->tab_Villes
 tab_Tris{1}:=1
 tab_Pointeurs{2}:=->tab_Société
 tab_Tris{2}:=-1
 tab_Pointeurs{3}:=->tab_Noms
 tab_Tris{3}:=0
 tab_Pointeurs{4}:=->tab_NumTel
 tab_Tris{4}:=0
 MULTI SORT ARRAY(tab_Pointeurs;tab_Tris)
```

Si vous souhaitez que le tableau des noms soit utilisé comme troisième critère de tri, il vous suffit d’assigner la valeur 1 à l’élément tab\_Tris{3}. Ou bien, si vous souhaitez que les tableaux soient triés uniquement sur le critère des villes, assignez la valeur 0 aux éléments tab\_Tris{2}, tab\_Tris{3} et tab\_Tris{4}. De cette manière, vous obtenez un résultat identique à [SORT ARRAY](sort-array.md)(tab\_Villes;tab\_Société;tab\_Noms;tab\_NumTel;>). 

#### Voir aussi 

[ORDER BY](order-by.md)  
[SELECTION TO ARRAY](selection-to-array.md)  
[SORT ARRAY](sort-array.md)  