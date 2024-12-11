---
id: match-regex
title: Match regex
slug: /commands/match-regex
displayed_sidebar: docs
---

<!--REF #_command_.Match regex.Syntax-->**Match regex** ( *motif* ; *laChaîne* ; *début* {; pos_trouvée ; long_trouvée}{; *} ) -> Résultat <br/>
**Match regex** ( *motif* ; *laChaîne* ) -> Résultat<!-- END REF-->
<!--REF #_command_.Match regex.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| motif | Text | &#8594;  | Expression régulière |
| laChaîne | Text | &#8594;  | Chaîne dans laquelle s’effectue la recherche |
| début | Integer | &#8594;  | Position dans laChaîne où doit débuter la recherche |
| pos_trouvée | Integer array, Integer | &#8592; | Position de l’occurence |
| long_trouvée | Integer array, Integer | &#8592; | Longueur de l’occurence |
| * | Opérateur | &#8594;  | Si passé : rechercher uniquement à la position indiquée |
| Résultat | Boolean | &#8592; | Vrai = la recherche a trouvé une occurrence, Faux sinon |
| Match regex ( motif ; laChaîne ) -> Résultat |
| Paramètre | Type | Description |
| motif | Text | &#8594;  | Expression régulière (égalité complète) |
| laChaîne | Text | &#8594;  | Chaîne dans laquelle s'effectue la recherche |
| Résultat | Boolean | &#8592; | Vrai = la recherche a trouvé une occurrence, Faux sinon |

<!-- END REF-->

#### Description 

<!--REF #_command_.Match regex.Summary-->La commande **Match regex** permet de tester la conformité d’une chaîne de caractères par rapport à un ensemble de règles synthétisé au moyen d’un méta-langage appelé “expression régulière” ou “expression rationnelle”.<!-- END REF--> L’abrévation regex est communément employée pour désigner ces familles de notations. 

Passez dans *motif* l’expression régulière à rechercher. Il s’agit d’une suite de caractères chargée de décrire une chaîne de caractères, à l’aide de caractères spéciaux.

Passez dans *laChaîne* la chaîne dans laquelle rechercher l’expression régulière.

Passez dans *début* la position dans *laChaîne* où doit débuter la recherche.

Si *pos\_trouvée* et *long\_trouvée* sont des variables, la commande retourne la position et la longueur de l’occurrence dans ces variables. Si vous passez des tableaux, la commande retourne la position et la longueur de l’occurrence dans l’élément zéro des tableaux et les positions et longueurs des groupes capturés par l’expression régulière dans les éléments suivants.

Le paramètre *\** indique, s’il est passé, que la recherche doit s’effectuer à la position définie par *début* sans chercher plus loin en cas d’échec.

La commande retourne **Vrai** si la recherche a trouvé une occurrence.

Pour plus d’informations sur les regex, reportez-vous par exemple à l’adresse suivante :  
<http://fr.wikipedia.org/wiki/Expression%5Frationnelle>

Pour plus d’informations sur la syntaxe de l’expression régulière passée dans le paramètre *motif*, reportez-vous à l’adresse suivante :  
*https://unicode-org.github.io/icu/userguide/strings/regexp.html#regular-expressions*

#### Exemple 1 

Recherche d’égalité complète (syntaxe simple) :  
*vtrouvé:=Match regex(motif;montexte)*

```4d
 QUERY BY FORMULA([Employés];Match regex(".*smith.*";[Employés]nom))
```

#### Exemple 2 

Recherche dans le texte par position :  
*vtrouvé:=Match regex( motif;montexte; début; pos\_trouvée; long\_trouvée)*  
Exemple pour afficher tous les tags de $1 :

```4d
 début:=1
 Repeat
    vtrouvé:=Match regex("<.*>";$1;début;pos_trouvée;long_trouvée)
    If(vtrouvé)
       ALERT(Substring($1;pos_trouvée;long_trouvée))
       début:=pos_trouvée+long_trouvée
    End if
 Until(Not(vtrouvé))
```

#### Exemple 3 

Recherche avec prise en charge des “groupes capturés” via des parenthèses. ( ) permet de définir des groupes dans les regex :  
*vtrouvé:=* *Match regex( motif;montexte; début; tab\_pos\_trouvée; tab\_long\_trouvée)*  

```4d
 ARRAY LONGINT(tab_pos_trouvée;0)
 ARRAY LONGINT(tab_long_trouvée;0)
 vtrouvé:=Match regex("(.*)truc(.*)";$1;1;tab_pos_trouvée;tab_long_trouvée)
 If(vtrouvé)
    $group1:=Substring($1;tab_pos_trouvée{1};tab_long_trouvée{1})
    $group2:=Substring($1;tab_pos_trouvée{2};tab_long_trouvée{2})
 End if
```

#### Exemple 4 

Recherche en limitant la comparaison de motif à la position indiquée :  
Rajouter une étoile à la fin d’une des deux syntaxes précédentes.

```4d
 vtrouvé:=Match regex("a.b";"---a-b---";1;$pos_trouvée;$long_trouvée)
  //retourne Vrai
 vtrouvé:=Match regex("a.b";"---a-b---";1;$pos_trouvée;$long_trouvée;*)
  //retourne Faux
 vtrouvé:=Match regex("a.b";"---a-b---";4;$pos_trouvée;$long_trouvée;*)
  //retourne Vrai
```

**Note :** Les positions et longueurs retournées n’ont de sens qu’en mode Unicode ou si le texte manipulé est de type ASCII 7 bits.

#### Gestion des erreurs 

En cas d’erreur, la commande génère une erreur que vous pouvez intercepter via une méthode installée par la commande APPELER SUR ERREUR.


#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1019 |
| Thread safe | &check; |
| Modifie les variables | error |
| Interdite sur le serveur ||


