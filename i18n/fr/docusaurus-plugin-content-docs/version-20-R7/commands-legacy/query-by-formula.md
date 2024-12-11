---
id: query-by-formula
title: QUERY BY FORMULA
slug: /commands/query-by-formula
displayed_sidebar: docs
---

<!--REF #_command_.QUERY BY FORMULA.Syntax-->**QUERY BY FORMULA** ( *laTable* {; *formule*} )<!-- END REF-->
<!--REF #_command_.QUERY BY FORMULA.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table dans laquelle effectuer la recherche |
| formule | Boolean | &#8594;  | Formule de recherche |

<!-- END REF-->

#### Description 

<!--REF #_command_.QUERY BY FORMULA.Summary-->**QUERY BY FORMULA** effectue une recherche d'enregistrements dans *laTable*.<!-- END REF-->modifie la sélection courante de *laTable* pour le process courant et fait du premier enregistrement le nouvel enregistrement courant. 

**QUERY BY FORMULA** et la commande [QUERY SELECTION BY FORMULA](query-selection-by-formula.md) fonctionnent exactement de la même manière, à la différence près que **QUERY BY FORMULA** effectue sa recherche parmi la totalité des enregistrements de la table alors que [QUERY SELECTION BY FORMULA](query-selection-by-formula.md) se cantonne aux enregistrements de la sélection courante.

Les deux commandes appliquent *formule* à chaque enregistrement de la table ou de la sélection. *formule* est une expression booléenne qui doit retourner **VRAI** ou **FAUX**. Si *formule* retourne **Vrai**, l'enregistrement est inclus dans la nouvelle sélection.

*formule* peut être simple (par exemple la comparaison d'un champ à une valeur) ou complexe (réalisation d'un calcul ou même évaluation de valeurs dans une table liée). Ce peut être une fonction 4D, ou une fonction ou une expression que vous avez créée. Lorsque vous travaillez avec des champs de type Alpha ou Texte, vous pouvez utiliser dans *formule* des jokers (@) ainsi que l'opérateur "contient" (%) pour la recherche par mots-clés. Pour plus d'informations, reportez-vous à la description de la commande [QUERY](query.md).

**Attention :** Les paramètres ($1...$n) ne sont pas pris en charge par formule. 

Si vous omettez le paramètre *formule*, 4D affiche la boîte de dialogue de recherche (l'utilisateur peut ajouter une ligne de formule en effectuant **Alt+clic** sur le bouton **\[+\]**).

Lorsque la recherche est terminée, le premier enregistrement de la nouvelle sélection est chargé depuis le disque et devient l'enregistrement courant.

Ces commandes sont optimisées et peuvent notamment tirer parti des index. Lorsque le type de requête le permet, ces commandes exécutent des requêtes équivalentes à un [QUERY](query.md). Par exemple, l’instruction **QUERY BY FORMULA(\[matable\]; \[matable\]monchamp=valeur)** sera exécutée comme [QUERY](query.md)**(\[matable\]; \[matable\]monchamp=valeur)**, ce qui permettra d’utiliser l’index. 4D pourra également optimiser les requêtes contenant des parties non optimisables, en exécutant d’abord les parties optimisables puis en combinant les résultats avec le reste de la requête. Par exemple, l’instruction **QUERY BY FORMULA(\[matable\];Longueur(monchamp)=valeur)** ne sera pas optimisée. En revanche, **QUERY BY FORMULA(\[matable\];Longueur(monchamp)=valeur1 | monchamp=valeur2)** sera partiellement optimisée.

Ces commandes effectuent des "jointures" à la manière du SQL lorsque vous comparez des champs de tables différentes. Avec ce principe, les recherches sont optimisées et il n’est pas nécessaire qu’un lien automatique structurel existe entre les tables. Par exemple, vous pouvez exécuter une instruction du type **QUERY BY FORMULA(\[Table\_A\];(\[Table\_A\]champ\_X = \[Table\_B\]champ\_Y) & (\[Table\_B\]champ\_Y = "abc"))** (cf. exemple 3). La première partie de la formule (*\[Table\_A\]champ\_X = \[Table\_B\]champ\_Y*) établit la jointure entre les deux champs et la seconde partie (*\[Table\_B\]champ\_Y = "abc"*) définit le ou les critère(s) de recherche. Les règles suivantes s'appliquent : 

* au moins un critère de recherche doit être défini
* *formule* ne peut pas contenir plus d'une comparaison de champ d'une même table.

S'ils existent, les liens entre les tables ne sont en principe pas utilisés. Toutefois, ces commandes utilisent les liens automatiques dans les cas suivants :

\- si la formule ne peut se décomposer en éléments de la forme *{ champ ; comparateur ; valeur}*  
\- si deux champs de la même table sont comparés.

**Note de compatibilité :** Pour des raisons de compatibilité avec des bases converties à partir de versions antérieures à la v11, il est possible de désactiver le mécanisme de jointures via la commande [SET DATABASE PARAMETER](set-database-parameter.md).

**4D Server :** Cette commande est exécutée sur le serveur, ce qui optimise son exécution. A noter qu’en cas d’appel direct de variables dans la *formule*, la requête est calculée avec la valeur de la variable sur le poste client. Par exemple, l’instruction **QUERY BY FORMULA(\[matable\];\[matable\]monchamp=mavariable)** sera exécutée sur le serveur mais avec le contenu de la variable *mavariable* du client. 

**Note de compatibilité :** Jusqu'à 4D Server v11, cette commande était exécutée sur le poste client. Par compatibilité, ce fonctionnement est maintenu dans les bases de données converties. Toutefois, une propriété de compatibilité et un sélecteur de la commande [SET DATABASE PARAMETER](set-database-parameter.md) permettent d'adopter l'exécution sur serveur dans les bases de données converties.

#### Exemple 1 

L'exemple suivant recherche les enregistrements de toutes les factures qui ont été saisies au mois de décembre, sans tenir compte de l'année. Le principe est d'appliquer la fonction [Month of](month-of.md) à chaque enregistrement. Cette recherche ne pourrait pas être effectuée d'une autre manière sans créer un champ séparé pour le mois :

```4d
 QUERY BY FORMULA([Factures];Month of([Factures]Saisie)=12)
  // Chercher les factures saisies en décembre
```

#### Exemple 2 

L'exemple suivant recherche les enregistrements de toutes les personnes dont le nom comporte plus de dix caractères :

```4d
 QUERY BY FORMULA([Personnes];Length([Personnes]Nom)>10)
  // Chercher les personnes dont le nom fait plus de dix caractères
```

#### Exemple 3 

Dans cet exemple, on utilise une jointure pour rechercher toutes les lignes de factures du client "ACME" même si les tables ne sont pas liées :

```4d
 QUERY BY FORMULA([ligne_factures];([ligne_factures]facture_id=[facture]id&[facture]client="ACME"))
```

#### Voir aussi 

[QUERY](query.md)  
[QUERY BY SQL](query-by-sql.md)  
[QUERY SELECTION](query-selection.md)  
[QUERY SELECTION BY FORMULA](query-selection-by-formula.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 48 |
| Thread safe | &check; |
| Change l'enregistrement courant ||
| Change la sélection courante ||


