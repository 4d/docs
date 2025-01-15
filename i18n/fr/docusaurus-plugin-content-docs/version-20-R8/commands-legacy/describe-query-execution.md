---
id: describe-query-execution
title: DESCRIBE QUERY EXECUTION
slug: /commands/describe-query-execution
displayed_sidebar: docs
---

<!--REF #_command_.DESCRIBE QUERY EXECUTION.Syntax-->**DESCRIBE QUERY EXECUTION** ( *statut* )<!-- END REF-->
<!--REF #_command_.DESCRIBE QUERY EXECUTION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| statut | Boolean | &#8594;  | Vrai=Enregistrer la description des requêtes, Faux=Stopper l'enregistrement |

<!-- END REF-->

#### Description 

<!--REF #_command_.DESCRIBE QUERY EXECUTION.Summary-->La commande **DESCRIBE QUERY EXECUTION** permet d’activer ou d’inactiver le mode d’analyse de l’exécution des recherches pour le process courant.<!-- END REF--> La commande fonctionne uniquement dans le contexte des commandes de recherche du langage 4D telles que [QUERY](query.md). 

L’appel de la commande avec le paramètre *statut* à **Vrai** active le mode d’analyse des recherches. Dans ce mode, le moteur de 4D enregistrera en interne deux séries d’informations spécifiques lors de chaque requête effectuée par la suite sur les données :

* la description détaillée de la recherche juste avant son exécution, c’est-à-dire la recherche prévue (le plan de recherche),
* la description détaillée de la recherche telle qu’elle a réellement été exécutée (le chemin de recherche).

Les informations enregistrées incluent le type de recherche (indexée, séquentielle), le nombre d’enregistrements trouvés et le temps nécessaire à l’exécution de chaque critère de recherche. Vous pouvez ensuite lire ces informations à l’aide des commandes [Last query plan](last-query-plan.md) et [Last query path](last-query-path.md).

En général, la description du plan d’une recherche et celle de son chemin sont identiques, mais elles peuvent toutefois différer car 4D peut mettre en oeuvre des optimisations dynamiques au cours de l’exécution de la recherche, dans le but d’améliorer les performances. Par exemple, une recherche indexée peut être convertie dynamiquement en recherche séquentielle si le moteur de 4D estime qu’elle sera plus rapide — c’est le cas notamment lorsque le nombre d’enregistrements parmi lesquels effectuer la recherche est faible.

Passez **Faux** dans le paramètre *statut* lorsque vous n’avez plus besoin d’analyser les recherches. Le mode d’analyse de l’exécution des recherches peut ralentir l’application.

#### Exemple 

L’exemple suivant illustre le type d’information obtenue via ces commandes :

```4d
 var $vResultPlan;$vResultPath : Text
 DESCRIBE QUERY EXECUTION(True)  //mode analyse
 QUERY([Employés];[Employés]Nom="T@";*)  // Chercher les employés dont le nom débute par T...
 QUERY([Employés];&;[Sociétés]Nom="H@";*) // travaillant pour une société dont le nom débute par H
 QUERY([Employés];&;[Employés]Salaire>2500;*) // dont le salaire est > 2500
 QUERY([Employés];&;[Villes]nbHab<50000)  // habitant dans une ville de moins de 50000 habitants
 $vResultPlan:=Last query plan(Description in text format)
 $vResultPath:=Last query path(Description in text format)
 DESCRIBE QUERY EXECUTION(False)  //Fin du mode analyse
```

A l’issue de l’exécution de ce code, *$vResultPlan* et *$vResultPath* contiennent les descriptions des recherches effectuées, par exemple : 

```RAW
$vResultPlan :    Employés.Nom == T@ And  Employés.Salaire > 2500 And Join on Table : Sociétés  :   Employés.Société = Sociétés.Nom [index : Sociétés.Nom ] LIKE H@ And Join  on Table : Villes  :  Employés.Ville = Villes.Nom [index : Villes.nbHab  ] < 50000$vResultPath : (Employés.Nom == T@ And  Employés.Salaire > 2500) And (Join on Table : Sociétés  :   Employés.Société = Sociétés.Nom with filter {[index : Sociétés.Nom ]  LIKE H@}) And (Join on Table : Villes  :  Employés.Ville = Villes.Nom  with filter {[index : Villes.nbHab ] < 50000})   (3 records found in 1  ms)
```

Si la constante Description in XML format est passée à la commande [Last query path](last-query-path.md), *$vResultPath* contient la description de la recherche exprimée en XML :

```XML
$vResultPath : 
   <QueryExecution>
      <steps description="And" time="0" recordsfounds="1227">
         <steps description="[Merge] : ACTORS with CITIES" time="13" recordsfounds="1227">
            <steps  description="[Join] : ACTORS.Birth_City_ID =CITIES.City_ID" time="13"  recordsfounds="1227"/>
         </steps>
      </steps>
   </QueryExecution>
```

#### Voir aussi 

[Last query path](last-query-path.md)  
[Last query plan](last-query-plan.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1044 |
| Thread safe | &check; |


