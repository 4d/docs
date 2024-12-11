---
id: distinct-values
title: DISTINCT VALUES
slug: /commands/distinct-values
displayed_sidebar: docs
---

<!--REF #_command_.DISTINCT VALUES.Syntax-->**DISTINCT VALUES** ( *leChamp* ; *tableau* {; *tabNbVal*} )<!-- END REF-->
<!--REF #_command_.DISTINCT VALUES.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| leField | Field | &#8594;  | Champ à utiliser |
| tableau | Array | &#8592; | Tableau devant recevoir les données du champ indexable |
| tabNbVal | Integer array, Real array | &#8592; | Tableau devant recevoir le nombre d'occurrences de chaque valeur |

<!-- END REF-->

#### Description 

<!--REF #_command_.DISTINCT VALUES.Summary-->**DISTINCT VALUES** crée et remplit le tableau *tableau* avec toutes les valeurs distinctes provenant du champ *leChamp* pour la sélection courante de la table du champ et, optionnellement, retourne dans *tabNbVal* le nombre d'occurrences de chaque valeur.<!-- END REF-->

Vous pouvez passer à cette commande tout type de champ **indexable**, c’est-à-dire dont le type supporte l’indexation mais qui n'est pas forcément indexé. Toutefois, l’exécution de la commande avec des champs non indexés est plus lente qu'avec des champs indexés. A noter également que dans ce cas, la commande perd l'enregistrement courant.   
**DISTINCT VALUES** analyse et extrait les valeurs distinctes pour les enregistrements sélectionnés uniquement. 

**Note :** Lorsque vous exécutez **DISTINCT VALUES** au sein d'une transaction non encore terminée, la commande tient compte des enregistrements créés au cours de la transaction.

Le tableau utilisé par **DISTINCT VALUES** doit être du même type que le champ passé en premier paramètre, sinon le tableau est retypé. Il y a une exception à cette règle : si le champ est de type Image (et est associé à un index de mots-clés), le tableau correspondant doit être de type Texte.

Après l'appel, la taille du tableau est égale au nombre de valeurs distinctes trouvées dans la sélection. La commande ne modifie pas la sélection courante ni l'enregistrement courant. Les éléments dans *tableau* sont triés par ordre croissant car **DISTINCT VALUES** utilise l'index du champ. Si cet ordre vous convient, vous n'avez donc pas besoin d'appeler [SORT ARRAY](sort-array.md) après l'exécution de **DISTINCT VALUES**.

**Note :** Lorsque **DISTINCT VALUES** est exécutée avec un champ texte ou image associé à un index de mots-clés, la commande remplit le tableau avec les mots-clés de l'index. A la différence des autres types de données, les valeurs retournées diffèrent donc en fonction de l'existence de l'index. Dans le cas d'un champ texte, l'index de mots-clés est toujours pris en compte, même si le champ est également associé à un index standard. Si le champ texte ou image n’est pas associé à un index de mots-clés, le tableau est retourné vide.

La commande accepte en paramètre optionnel un tableau *tabNbVal*. Lorsqu'il est passé, ce tableau retourne, pour chaque valeur distincte de *leChamp* présente dans *tableau*, le nombre d'occurrences détectées dans la sélection courante. Le tableau *tabNbVal* est automatiquement dimensionné au même nombre d'éléments que *tableau*. Par exemple, pour une sélection qui contient trois enregistrements avec les valeurs de champs "A", "B" et "A", *tableau* contiendra {A;B} et *tabNbVal* contiendra {2;1}. Vous pouvez passer un tableau Entier long ou un tableau Réel dans *tabNbVal*. 

**Note :** Le paramètre *tabNbVal* n'est pas pris en charge pour les champs texte ou image associés à des index de mots-clés (dans ce contexte, il est retourné vide). 

**ATTENTION :** **DISTINCT VALUES** peut créer des tableaux de taille importante, en fonction de la taille de la sélection courante, ainsi que du type et de la taille des données à charger. Comme les tableaux résident en mémoire, il peut être utile de tester la taille des tableaux créés après l'exécution de la commande, ou d'utiliser une méthode projet d'interception d'erreurs installée par la commande [ON ERR CALL](on-err-call.md). 

**4D Server :** Cette commande est optimisée pour 4D Server. Le tableau est créé et les valeurs sont calculées sur le serveur. Seul le tableau est envoyé au client. 

##### 

**Note :** Cette commande ne prend pas en charge les champs de type Objet.

#### Exemple 1 

L'exemple suivant crée une liste de villes à partir de la sélection courante et indique à l'utilisateur le nombre de villes dans lesquelles la société dispose de magasins : 

```4d
 ALL RECORDS([Revendeurs]) // Créer une sélection d'enregistrements
 DISTINCT VALUES([Revendeurs]Ville;taVilles)
 ALERT("Cette société dispose de magasins dans "+String(Taille tableau(taVilles))+" villes.")
```

#### Exemple 2 

Vous souhaitez obtenir la liste complète des mots-clés contenus dans l’index des mots-clés du champ "Photos" : 

```4d
 ALL RECORDS([IMAGES])
 ARRAY TEXT(<>_MesMotsCles;10)
 DISTINCT VALUES([IMAGES]Photos;<>_MesMotsCles)
```

#### Exemple 3 

Pour calculer des statistiques, vous voulez trier le nombre de valeurs distinctes d'un champ par ordre décroissant :

```4d
 ARRAY TEXT($_issue_type;0)
 ARRAY LONGINT($_issue_type_instance;0)
 DISTINCT VALUES([Issue]iType;$_issue_type;$_issue_type_instances)
 SORT ARRAY($_issue_type_instances;$_issue_type;<)
```

#### Voir aussi 

  
[GET TEXT KEYWORDS](get-text-keywords.md)  
[ON ERR CALL](on-err-call.md)  
[SELECTION RANGE TO ARRAY](selection-range-to-array.md)  
[SELECTION TO ARRAY](selection-to-array.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 339 |
| Thread safe | &check; |


