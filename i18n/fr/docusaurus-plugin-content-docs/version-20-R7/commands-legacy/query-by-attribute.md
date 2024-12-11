---
id: query-by-attribute
title: QUERY BY ATTRIBUTE
slug: /commands/query-by-attribute
displayed_sidebar: docs
---

<!--REF #_command_.QUERY BY ATTRIBUTE.Syntax-->**QUERY BY ATTRIBUTE** ( {*laTable*}{;}{*opConj* ;} *champObjet* ; *cheminAttribut* ; *opRech* ; *valeur* {; *} )<!-- END REF-->
<!--REF #_command_.QUERY BY ATTRIBUTE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table dans laquelle la sélection est créée ou Table par défaut si ce paramètre est omis |
| opConj | * | &#8594;  | Opérateur à utiliser pour combiner plusieurs requêtes (le cas échéant) |
| champObjet | Field | &#8594;  | Champ objet dont les attributs sont à utiliser pour la recherche |
| cheminAttribut | Text | &#8594;  | Nom ou chemin d'attribut |
| opRech | Text, * | &#8594;  | Opérateur de recherche (comparateur) |
| valeur | Text, Number, Date, Time | &#8594;  | Valeur à comparer |
| * | Opérateur | &#8594;  | Attente d'exécution de la recherche |

<!-- END REF-->

#### Description 

<!--REF #_command_.QUERY BY ATTRIBUTE.Summary-->La commande **QUERY BY ATTRIBUTE** recherche les enregistrements répondant au(x) critère(s) de recherche spécifié(s) à l'aide des paramètres *champObjet*, *cheminAttribut*, *opRech* et *valeur* et retourne une sélection d'enregistrements de *laTable*.<!-- END REF-->modifie la sélection courante de *laTable* pour le process courant. Le premier enregistrement de la nouvelle sélection devient l'enregistrement courant. Si vous omettez le paramètre *laTable*, la commande s'applique à la table par défaut. Si aucune table par défaut n'a été définie, une erreur est générée. 

Le paramètre optionnel *opConj* est utilisé pour combiner plusieurs appels à **QUERY BY ATTRIBUTE** en cas de recherche multiple. Les opérateurs de conjonction utilisables sont les mêmes que ceux de la commande [QUERY](query.md) :

| **Conjonction** | **Symbole à utiliser avec QUERY BY ATTRIBUTE** |
| --------------- | ---------------------------------------------- |
| ET              | &                                              |
| OU              | \|                                             |
| Sauf            | #                                              |

Le paramètre *opConj* n'est pas nécessaire pour le premier appel à **QUERY BY ATTRIBUTE** lors d'une recherche complexe, ou si la recherche ne comporte qu'une ligne. Si vous l'omettez à l'intérieur d'une recherche complexe, le ET (&) est utilisé par défaut.

 Dans *champObjet*, passez le champ objet parmi les attributs duquel vous souhaitez effectuer la recherche. Il peut provenir d'une autre table si celle-ci est la table 1 d'une table liée à *laTable* par un lien automatique ou manuel.   
**QUERY BY ATTRIBUTE** prend en charge les attributs utilisateurs de 4D Write Pro lorsque les documents sont stockés dans des champs de type Objet. Pour plus d'informations sur ce point, reportez-vous à la section *Stocker les documents 4D Write Pro dans des champs objet 4D*. 

Dans *cheminAttribut*, passez le chemin de l'attribut dont vous souhaitez comparer les valeurs pour chaque enregistrement, par exemple "enfants.filles.age". Si vous passez un simple nom, par exemple "lieu", vous désignez l'attribut correspondant situé au premier niveau du champ objet.   
Si un attribut "x" est un tableau, **QUERY BY ATTRIBUTE** cherchera les enregistrements contenant un attribut "x" dans lequel au moins un élément correspond aux critères. Pour effectuer une recherche parmi les attributs de tableaux, il est nécessaire d'indiquer à la commande **QUERY BY ATTRIBUTE** que l'attribut "x" est un tableau en ajoutant "\[\]" à son nom dans le paramètre *cheminAttribut* (voir exemple 3). Vous pouvez également insérer une lettre à l'intérieur des crochets (par exemple "\[b\]") pour lier des arguments (reportez-vous au paragraphe *Linking array attribute query arguments* ci-dessous). 

**Notes :** 

* N'oubliez pas que les noms d'attributs tiennent compte des majuscules/minuscules : il est possible d'avoir deux noms d'attributs différents "MonAtt" et "monAtt" dans le même champ d'un enregistrement.
* les noms d'attributs sont "nettoyés" afin d'éliminer les espaces superflus. Par exemple, " mon premier attribut .mon second attribut " est interprété "mon premier attribut .mon second attribut".
* Vous ne pouvez pas rechercher des attributs dont le nom contient des caractères spéciaux tels que "." ou "\[ \]", car ils seront incorrectement interprétés comme des tokens dans la chaine de recherche. Pour plus d'informations, veuillez consulter le paragraphe *Identifiants de propriétés d'objets*.

Le paramètre *opRech* est l'opérateur qui va permettre de comparer *champObjet* et *valeur*. Vous pouvez utiliser l'un des symboles suivants :

| **Comparaison**     | **Symbole à utiliser avec QUERY BY ATTRIBUTE** |
| ------------------- | ---------------------------------------------- |
| Egal à              | \=                                             |
| Différent de(\*)    | #                                              |
| Inférieur à         | <                                              |
| Supérieur à         | \>                                             |
| Inférieur ou égal à | <=                                             |
| Supérieur ou égal à | \>=                                            |

(\*) Lorsqu'il est utilisé avec des éléments de tableau, l'opérateur # signifie "ne contient aucun".

**Note :** Il est possible de définir le comparateur sous la forme d'une expression texte au lieu d'un symbole. Reportez-vous à la description de la commande [QUERY](query.md) pour plus d'informations. 

La *valeur* représente ce qui va être comparé au contenu de *cheminAttribut*. La valeur peut être toute expression du même type que *cheminAttribut*. Le type de la valeur n'est évalué qu'une seule fois, au démarrage de la recherche, et ne l'est donc pas pour chaque enregistrement. Si la recherche porte sur le contenu d'une chaîne de caractères, utilisez dans *valeur* le symbole "@" pour isoler le contenu à rechercher, par exemple "@Dupon@". Il est à noter, dans ce cas, que la recherche ne tire que partiellement parti de l'index (compacité du stockage des données).

Voici la structure type d'une recherche par attribut :

```4d
 QUERY BY ATTRIBUTE([Table] ;[Table]ChampObjet ;"attribut1.attribut2";=;valeur)
```

**Note :** La présence de l'attribut dans le champ objet est un critère implicite pour tous les opérateurs (hormis #). En revanche, pour l'opérateur #, il peut être indéfini (cf. ci-dessous). 

##### Utilisation de l'opérateur # (prise en charge des valeurs Null) 

Lorsque vous effectuez une recherche par attribut à l'aide de l'opérateur #, vous devez prendre en considération les cas où un attribut n'est pas présent dans un enregistrement. Considérons par exemple ce qui suit :   

```4d
 QUERY BY ATTRIBUTE([Personnes];[Personnes]Animaux;"chien.nom";#;"Médor")
```

Cette recherche retournera les enregistrements des personnes ayant un chien dont le nom n'est pas "Médor", mais ne retournera PAS les les enregistrements des personnes n'ayant pas de chien, ou ayant un chien sans nom, c'est-à-dire les enregistrements pour lesquels la valeur de la proprité "chien.nom" est **null**. Le concept est le suivant : le moteur de recherche ne peut pas comparer l'incomparable, à savoir les données manquantes ou inexistantes. Ainsi, les enregistrements qui ne peuvent pas être comparés aux critères de recherche sont exclus de la recherche.

Voici un exemple plus générique :   

```4d
 QUERY BY ATTRIBUTE([Table];[Table]ChampObjet;"attribut1.attribut2";#;valeur)
```
  
  
Cette recherche retournera tous les enregistrements pour lesquels *\[Table\]ChampObjet* contient un objet qui contient un attribut *attribut1* qui est lui-même un objet qui contient un attribut *attribut2* dont la valeur n'est pas *valeur.* Elle ne retournera PAS les enregistrements dans lesquels : 
* le champ objet ne contient pas *attribut1*
* le champ objet ne contient pas *attribut1.* *attribut2*
* le champ objet contient *attribut1.* *attribut2=null*

Ce principe s'applique également aux attributs tableaux. Par exemple, la recherche retournera les enregistrements des personnes ayant une ou plusieurs adresses, mais n'ayant aucune adresse à Paris.  

```4d
 QUERY BY ATTRIBUTE([Personnes];[Personnes]OB_Field;"locations[].city";#;"paris")
```

  
**Note :** Pour obtenir spécifiquement les enregistrements dans lesquels l'attribut est indéfini, vous pouvez utiliser un objet vide (cf. exemple 2). A noter toutefois que la recherche de valeurs NULL dans les éléments de tableaux n'est prise en charge.

##### Construire des recherches multiples 

Voici les règles à observer pour la construction de recherche par attribut à lignes multiples :

* La première ligne ne doit pas contenir d'opérateur de conjonction,
* Les suivantes peuvent débuter par un opérateur de conjonction. Si vous l'omettez, l'opérateur ET (&) est utilisé par défaut.
* Toutes les lignes, à l'exception de la dernière, doivent s'achever par le symbole *\**.
* **QUERY BY ATTRIBUTE** peut être combiné à des commandes [QUERY](query.md) classiques (voir exemple).
* Pour lancer la recherche, ne passez pas le paramètre *\** dans la dernière ligne. Autre solution : vous pouvez exécuter la commande [QUERY](query.md) sans autre paramètre que la table.

**Note :** Chaque table maintient sa propre construction de recherche courante. Cela signifie que vous pouvez créer de multiples recherches simultanément, une pour chaque table. 

Quelle que soit la manière dont la recherche a été définie :

* Si l'exécution d'une recherche nécessite un certain temps, 4D affiche automatiquement un message contenant un thermomètre de progression. Ce type de message peut être désactivé à l'aide des commandes [MESSAGES ON](messages-on.md) et [MESSAGES OFF](messages-off.md). Si le thermomètre de progression est affiché, l'utilisateur peut cliquer sur le bouton Stop pour interrompre l'opération. Si la recherche s'est correctement déroulée, la variable système OK prend la valeur 1\. Sinon, si la recherche est interrompue, OK prend la valeur 0 (zéro).
* Si des champs objet indexés sont spécifiés, la recherche est optimisée à chaque fois que c'est possible (la recherche commence par les champs indexés), réduisant au maximum la durée de l'opération.

##### Valeurs date dans l'objet 

Les dates sont stockées dans les objets en fonction des paramètres de la base ; par défaut, la *timezone* est prise en compte (voir le sélecteur JSON use local time dans la commande [SET DATABASE PARAMETER](set-database-parameter.md)). 

```json
!1973-05-22! -> "1973-05-21T23:00:00.000Z"
```

Ce paramétrage est également respecté durant les recherches, donc vous n'avez pas à vous en préoccuper si vous utilisez toujours votre base dans la même zone et si les paramètres sont identiques sur chaque machine qui accède aux données. Dans ce contexte, la recherche suivante retournera bien les enregistrements dont l'attribut Anniversaire est égal à !1973-05-22! (stocké "1973-05-21T23:00:00.00Z") :

```4d
 QUERY BY ATTRIBUTE([Personnes];[Personnes]OB_Info;"Anniversaire";=;!1973-05-22!)
```

Si vous ne souhaitez pas utiliser le paramétrage GMT, vous pouvez exécuter l'instruction suivante :

```4d
 SET DATABASE PARAMETER(JSON use local time;0)
```

Attention, la portée de ce paramètre est limitée au process. Si vous exécutez cette instruction, le 1er Octobre 1965 sera stocké "1965-10-01T00:00:00.000Z" mais vous devrez fixer le même paramètre avant de lancer vos recherches :

```4d
 SET DATABASE PARAMETER(JSON use local time;0)
 QUERY BY ATTRIBUTE([Personnes];[Personnes]OB_Info;"Anniversaire";=;1976-11-27!)
```

##### Utilisation de la propriété virtuelle length 

Vous pouvez utiliser la propriété virtuelle "length" avec cette commande. Cette propriété est automatiquement disponible pour tous les attributs de type tableau, et retourne la taille du tableau, c'est-à-dire le nombre d'éléments qu'il contient. Elle peut être utilisée dans le contexte de l'exécution de la commande **QUERY BY ATTRIBUTE** (cf. exemple 4).

##### Lier les critères pour les recherches dans les éléments de tableau 

(Nouveauté 4D v16 R2) Lorsque vous effectuez des recherches multiples combinées via l'opérateur "ET" parmi des éléments de tableaux, vous pouvez souhaiter que seuls les enregistrements dont au moins un élément de tableau répond à tous les critères soient trouvés, et non ceux répondant à tous les critères mais dans différents éléments. Pour cela, vous devez *lier* les critères de recherche afin que seuls les éléments individuels contenant tous les critères liés soient trouvés. 

Par exemple, avec les deux enregistrements suivants :

*Enregistrement 1 :*  
\[Personnes\]nom : "Martin"  
\[Personnes\]OB\_Field :   
 "locations" : \[ {  
 "kind":"home",  
 "city":"Paris"   
 } \]

*Enregistrement 2 :*  
\[Personnes\]nom : "Smith"  
\[Personnes\]OB\_Field :   
 "locations" : \[ {  
 "kind":"home",  
 "city":"Lyon"   
 } , {  
 "kind":"office",  
 "city":"Paris"   
 } \]

Vous souhaitez trouver les personnes qui ont un type d'adresse "home" dans la ville "Paris". Si vous écrivez : 

```4d
 QUERY BY ATTRIBUTE([Personnes];[Personnes]OB_Field;"locations[].city";=;"Paris";*)
 QUERY BY ATTRIBUTE([Personnes];[Personnes]OB_Field;"locations[].kind";=;"home")
```

... la recherche retournera "Martin" et "Smith" car "Smith" a un élément "locations" dont le "kind" est "home" et un (autre) élément "locations" dont la "city" est "Paris".

 Si vous souhaitez uniquement récupérer les enregistrements correspondant aux critères mais dans un même élément, vous devez **lier les critères**. Pour lier des critères de recherche :

* Ajoutez une lettre entre les \[\] dans le premier chemin à lier et répétez la même lettre dans tous les critères liés. Par exemple : **locations\[a\].city** et **locations\[a\].kind**. Vous pouvez utiliser toute lettre de l'alphabet Latin (majuscules/minuscules indifférenciées).
* Pour ajouter d'autres critères liés dans la même recherche, utilisez une autre lettre (voir exemple ci-dessous). Vous pouvez donc créer jusqu'à 26 combinaisons de critères liés dans une seule recherche.

Avec les mêmes enregistrements que précédemment, si vous écrivez :

```4d
 QUERY BY ATTRIBUTE([Personnes];[Personnes]OB_Field;"locations[a].city";=;"Paris";*)
 QUERY BY ATTRIBUTE([Personnes];[Personnes]OB_Field;"locations[a].kind";=;"home")
```

... la recherche retournera uniquement "Martin" car il a un élément "locations" dont le "kind" est "home" et dont la "city" est "Paris". La recherche ne retournera pas "Smith" car les valeurs "Paris" et "home" ne se trouvent pas dans le même élément de tableau. Reportez-vous ci-dessous pour plus d'exemples d'utilisations de cette fonctionnalité. 

**Note :** Utiliser la syntaxe liée dans une ligne de recherche unique donnera les mêmes résultats qu'une recherche standard, hormis avec l'opérateur "#" : dans ce cas, des résultats invalides peuvent être retournés. Par conséquent, cette syntaxe spécifique n'est pas prise en charge. 

#### Exemple 1 

Dans cet exemple, l'attribut "age" est soit une chaîne soit un entier et nous souhaitons trouver les personnes dont l'âge est situé entre 20 et 29\. Les deux premières lignes interrogent l'attribut en tant qu'entier (>=20 et < 30) et les suivantes interrogent l'attribut en tant que chaîne (débute par "2" mais est différent de "2").

```4d
 QUERY BY ATTRIBUTE([Personnes];[Personnes]OB_Info;"age";>=;20;*)
 QUERY BY ATTRIBUTE([Personnes];&;[Personnes]OB_Info;"age";<;30;*)
 QUERY BY ATTRIBUTE([Personnes];|;[Personnes]OB_Info;"age";=;"2@";*)
 QUERY BY ATTRIBUTE([Personnes];&;[Personnes]OB_Info;"age";#;"2") //pas de * final pour lancer l'exécution
```

#### Exemple 2 

La commande **QUERY BY ATTRIBUTE** peut être utilisée pour rechercher des enregistrements dans lesquels certains attributs sont définis (ou non définis). Pour cela, vous devez utiliser un objet vide : 

```4d
  //Trouver les enregistrements où l'email est défini dans le champ objet
 var $undefined : Object
 QUERY BY ATTRIBUTE([Personnes];[Personnes]Info;"email";#;$undefined)
```

```4d
  //Trouver les enregistrements où le zip code n'est PAS défini dans le champ objet
 var $undefined : Object
 QUERY BY ATTRIBUTE([Personnes];[Personnes]Info;"zip code";=;$undefined)
```

**Note :** Cette syntaxe spécifique n'est pas prise en charge avec les attributs de type tableau. La recherche de valeurs NULL dans les attributs de tableau donne des résultats invalides. 

#### Exemple 3 

Vous voulez chercher un champ contenant des attributs tableaux. Avec les deux enregistrements suivants :

*Enregistrement 1 :*  
\[Personnes\]nom : "martin"  
\[Personnes\]OBFied :   
 "locations" : \[ {  
 "kind":"office",  
 "city":"paris"   
 } \]

*Enregistrement 2 :*   
\[Personnes\]nom : "smith"  
\[Personnes\]OBFied :   
 "locations" : \[ {  
 "kind":"home",  
 "city":"lyon"   
 } , {  
 "kind":"office",  
 "city":"paris"   
 } \]

... **QUERY BY ATTRIBUTE** trouvera les personnes ayant une localisation à "paris" par cette recherche :

```4d
  //on indique l'attribut tableau avec la syntaxe "[]"
 QUERY BY ATTRIBUTE([Personnes];[Personnes]OB_Field;"locations[].city";=;"paris")
  //trouve "martin" et "smith"
```

**Note :** Si vous avez défini plusieurs critères sur le même attribut tableau, les critères correspondants ne s'appliqueront pas nécessairement au même élément de tableau. Dans l'exemple ci-dessous, la recherche retournera "smith" car l'attribut a un élément "locations" dont le "kind" est "home" et un élément "locations" dont le "city" est "paris", même s'il ne s'agit pas du même élément :

```4d
 QUERY BY ATTRIBUTE([Personnes];[Personnes]OB_Field;"locations[].kind";=;"home";*)
 QUERY BY ATTRIBUTE([Personnes];&;[Personnes]OB_Field;"locations[].city";=;"paris")
  //trouve "smith"
```

#### Exemple 4 

Cet exemple illustre l'utilisation de la propriété virtuelle "length". Votre base de données comporte un champ objet \[Customer\]full\_Data avec les données suivantes :

![](../assets/en/commands/pict2994114.en.png)

Vous souhaitez obtenir les enregistrements des clients qui ont deux enfants ou plus. Vous pouvez écrire :

```4d
 QUERY BY ATTRIBUTE([Customer];[Customer]full_Data;"Children.length";>=;2)
```

#### Exemple 5 

Ces exemples illustrent les différentes combinaisons de liaisons de critères disponibles avec les tableaux. Soit une base contenant les enregistrements suivants :

*Enregistrement 1 :*  
\[Personnes\]Nom : "Sam"  
\[Personnes\]OBField :   
 "Enfants": \[ {  
 "Nom": "Harry",  
 "Age": "15",  
 "Jouets": \[ {  
 "Nom": "Voiture",  
 "Coul": "Bleu"   
 }, {  
 "Nom": "Teddy Bear",  
 "Coul": "Marron"   
 } \]  
 }, {  
 "Nom": "Betty",  
 "Age": "9",  
 "Jouets": \[ {  
 "Nom": "Voiture",  
 "Coul": "Vert"   
 }, {  
 "Nom": "Puzzle",  
 "Coul": "Bleu"   
 } \]  
 } \]

*Enregistrement 2 :*  
\[Personnes\]Nom : "Louis"  
\[Personnes\]OBField :   
 "Enfants": \[ {  
 "Nom": "Harry",  
 "Age": "15",  
 "Jouets": \[ {  
 "Nom": "Pistolet à eau",  
 "Coul": "Bleu"   
 } \]  
 }, {  
 "Nom": "Betty",  
 "Age": "3",  
 "Jouets": \[ {  
 "Nom": "Voiture",  
 "Coul": "Bleu"   
 }, {  
 "Nom": "Puzzle",  
 "Coul": "Vert"   
 } \]  
 } \]

*Enregistrement 3 :*  
\[Personnes\]Nom : "Victor"  
\[Personnes\]OBField :   
 "Enfants": \[ {  
 "Nom": "Harry",  
 "Age": "9",  
 "Jouets": \[ {  
 "Nom": "Poupée",  
 "Coul": "Rose"   
 }, {  
 "Nom": "Puzzle",  
 "Coul": "Bleu"   
 } \]  
 }, {  
 "Nom": "Betty",  
 "Age": "15",  
 "Jouets": \[ {  
 "Nom": "Pistolet à eau",  
 "Coul": "Bleu"   
 } \]  
 } \]

Recherche des personnes qui ont un enfant de 15 ans nommé "Betty" :

```4d
 QUERY BY ATTRIBUTE([Personnes];[Personnes]OBField;"Enfants[a].Nom";=;"Betty";*)
 QUERY BY ATTRIBUTE([Personnes];&;[Personnes]OBField;"Enfants[a].Age";=;"15")
  //retourne "Victor"
 
 QUERY BY ATTRIBUTE([Personnes];[Personnes]OBField;"Enfants[].Nom";=;"Betty";*)
 QUERY BY ATTRIBUTE([Personnes];&;[Personnes]OBField;"Enfants[].Age";=;"15")
  //retourne "Sam", "Louis" et "Victor"
```

Recherche des personnes qui ont un enfant de 15 ans nommé "Betty" et un enfant de 9 ans nommé "Harry" :

```4d
 QUERY BY ATTRIBUTE([Personnes];[Personnes]OBField;"Enfants[a].Nom";=;"Betty";*)
 QUERY BY ATTRIBUTE([Personnes];&;[Personnes]OBField;"Enfants[a].Age";=;"15";*)
 QUERY BY ATTRIBUTE([Personnes];[Personnes]OBField;"Enfants[b].Nom";=;"Harry";*)
 QUERY BY ATTRIBUTE([Personnes];&;[Personnes]OBField;"Enfants[b].Age";=;"9")
  //retourne "Victor"
 
 QUERY BY ATTRIBUTE([Personnes];[Personnes]OBField;"Enfants[].Nom";=;"Betty";*)
 QUERY BY ATTRIBUTE([Personnes];&;[Personnes]OBField;"Enfants[].Age";=;"15";*)
 QUERY BY ATTRIBUTE([Personnes];[Personnes]OBField;"Enfants[].Nom";=;"Harry";*)
 QUERY BY ATTRIBUTE([Personnes];&;[Personnes]OBField;"Enfants[].Age";=;"9")
  //retourne "Sam" et "Victor"
```

Recherche des personnes qui ont un enfant de 15 ans nommé "Harry" qui a une voiture bleue en jouet (recherche dans un tableau de tableaux):

```4d
 QUERY BY ATTRIBUTE([Personnes];[Personnes]OBField;"Enfants[a].Nom";=;"Harry";*)
 QUERY BY ATTRIBUTE([Personnes];&;[Personnes]OBField;"Enfants[a].Age";=;"15";*)
 QUERY BY ATTRIBUTE([Personnes];&;[Personnes]OBField;"Enfants[a].Jouets[b].Nom";=;"Voiture";*)
 QUERY BY ATTRIBUTE([Personnes];&;[Personnes]OBField;"Enfants[a].Jouets[b].Coul";=;"Bleu")
  //retourne "Sam"
 
 QUERY BY ATTRIBUTE([Personnes];[Personnes]OBField;"Enfants[].Nom";=;"Harry";*)
 QUERY BY ATTRIBUTE([Personnes];&;[Personnes]OBField;"Enfants[].Age";=;"15";*)
 QUERY BY ATTRIBUTE([Personnes];&;[Personnes]OBField;"Enfants[].Jouets[].Nom";=;"Voiture";*)
 QUERY BY ATTRIBUTE([Personnes];&;[Personnes]OBField;"Enfants[].Jouets[].Coul";=;"Bleu")
  //retourne "Sam" et "Louis"
```

#### Variables et ensembles système 

Si la recherche est correctement effectuée, la variable système OK prend la valeur 1.  
La variable OK prend la valeur 0 si :

* l'utilisateur clique sur le bouton **Annuler** / **Stop**,
* en mode 'recherche et verrouillage' (cf. commande [SET QUERY AND LOCK](set-query-and-lock.md)), la recherche a trouvé au moins un enregistrement verrouillé. Dans ce cas également, l'ensemble système LockedSet est mis à jour.

#### Voir aussi 

  
[QUERY SELECTION BY ATTRIBUTE](query-selection-by-attribute.md)  
*Structure des objets de langage 4D*  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1331 |
| Thread safe | &check; |
| Modifie les variables | OK |
| Change l'enregistrement courant ||
| Change la sélection courante ||
| Interdite sur le serveur ||


