---
id: query-by-sql
title: QUERY BY SQL
slug: /commands/query-by-sql
displayed_sidebar: docs
---

<!--REF #_command_.QUERY BY SQL.Syntax-->**QUERY BY SQL** ( {*laTable* ;} *formuleSQL* )<!-- END REF-->
<!--REF #_command_.QUERY BY SQL.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table de laquelle retourner une sélection d’enregistrements ou Table par défaut si ce paramètre est omis |
| formuleSQL | Text | &#8594;  | Formule de recherche SQL valide représentant la clause WHERE de la requête SELECT |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.QUERY BY SQL.Summary-->La commande **QUERY BY SQL** permet de tirer directement parti du moteur SQL intégré de 4D.<!-- END REF--> Elle exécute une requête SELECT simple qui peut être écrite ainsi :

```SQL
SELECT *   FROM laTable    WHERE 
```

*laTable* est le nom de la table passé en premier paramètre et *formuleSQL* la chaîne de recherche passée en deuxième paramètre. 

Par exemple, l’instruction suivante :

```4d
 QUERY BY SQL([Employees];"name=’smith’")
```

équivaut à la requête SQL :

```SQL
SELECT * FROM Employees WHERE "name=’smith’"
```

La commande **QUERY BY SQL** est semblable à la commande [QUERY BY FORMULA](query-by-formula.md). Elle effectue une recherche parmi les enregistrements de la table définie. Elle modifie la sélection courante de *table* pour le process courant et fait du premier enregistrement de la nouvelle sélection le nouvel enregistrement courant.

**Note :** La commande **QUERY BY SQL** ne peut pas être utilisée dans le contexte d'une connexion SQL externe, elle s'adresse directement au moteur SQL intégré de 4D.

**QUERY BY SQL** applique *formuleSQL* à chaque enregistrement de la sélection de la table. *formuleSQL* est une expression booléenne qui doit retourner VRAI ou FAUX. Comme vous le savez peut-être, dans la norme SQL, une condition de recherche peut avoir un résultat VRAI, FAUX ou NULL. Tous les enregistrements (rows) pour lesquels la condition de recherche retourne VRAI sont inclus dans la nouvelle sélection courante.

L’expression *formuleSQL* peut être simple, comme par exemple la comparaison d’un champ (colonne) à une valeur ; elle peut également être complexe, comme la réalisation d’un calcul. Comme [QUERY BY FORMULA](query-by-formula.md), **QUERY BY SQL** peut évaluer des valeurs dans les tables liées (cf. exemple 4). *formuleSQL* doit être une instruction SQL valide, conforme à la norme SQL-2 et tenant compte de l’implémentation actuelle du SQL dans 4D. Pour plus d’information la prise en charge du SQL dans 4D, reportez-vous au manuel Guide de référence 4D SQL.

Le paramètre *formuleSQL* peut contenir des références à des expressions 4D. La syntaxe à utiliser est la même que pour les commandes SQL intégrées ou le code inclus dans les balises [Begin SQL](begin-sql.md)/[End SQL](end-sql.md), c’est-à-dire : *<<MaVar>>* ou *:MaVar*  
Pour plus d’informations sur ce point, reportez-vous à la section *Présentation des commandes du thème SQL*.

**Note :** Cette commande est compatible avec les commandes [SET QUERY LIMIT](set-query-limit.md) et [SET QUERY DESTINATION](set-query-destination.md).

**Rappel :** Les références aux variables locales ne sont pas possibles en mode compilé. Pour plus d'informations sur la programmation SQL dans 4D, reportez-vous à la section *Présentation des commandes du thème SQL*.   

##### A propos des liens 

**QUERY BY SQL** n’utilise pas les liens entre les tables définis dans l’éditeur de structure de 4D. Si vous souhaitez tirer parti des données liées, vous devez ajouter une clause JOIN dans la requête. Par exemple, considérons la structure suivante, dans laquelle un lien N vers 1 relie les champs \[Personnes\]Ville à \[Villes\]Nom :

```RAW
[Personnes]   Nom   Ville[Villes]   Nom   Population
```

Avec la commande [QUERY BY FORMULA](query-by-formula.md), vous pourriez écrire :

```4d
 QUERY BY FORMULA([Personnes];[Villes]Population>1000)
```

Avec **QUERY BY SQL**, vous devez écrire l’instruction suivante, que le lien existe ou non :

```4d
 QUERY BY SQL([Personnes];"personnes.ville=villes.nom AND villes.population>1000")
```

**Note :** Les liens 1 vers N et N vers N sont également traités par **QUERY BY SQL** d’une manière différente de [QUERY BY FORMULA](query-by-formula.md).

#### Exemple 1 

Cet exemple recherche les bureaux dont les ventes sont supérieures à 100\. La requête SQL est : 

```SQL
SELECT * FROM Bureaux WHERE Ventes > 100
```

En utilisant la commande **QUERY BY SQL** :

```4d
 C_STRING(30;$formuleRequete)
 $formuleRequete:="Ventes > 100"
 QUERY BY SQL([Bureaux];$formuleRequete)
```

#### Exemple 2 

Cet exemple recherche les commandes comprises entre 3000 et 4000\. La requête SQL est :   

```SQL
SELECT * FROM Commandes WHERE Total BETWEEN 3000 AND 4000
```

En utilisant la commande **QUERY BY SQL** :

```4d
 C_STRING(40;$formuleRequete)
 $formuleRequete:="Total BETWEEN 3000 AND 4000"
 QUERY BY SQL([Ventes];$formuleRequete)
```

#### Exemple 3 

Cet exemple montre comment trier le résultat de la requête sur un critère spécifique. La requête SQL est : 

```SQL
SELECT * FROM PersonnesWHERE Ville =’Paris’ORDER BY Nom
```

En utilisant la commande **QUERY BY SQL** :

```4d
 C_STRING(40;$formuleRequete)
 $formuleRequete:="Ville = ‘Paris’ ORDER BY Nom"
 QUERY BY SQL([Personnes];$formuleRequete)
```

#### Exemple 4 

Cet exemple montre une requête utilisant des tables liées dans 4D. Via le SQL vous devez utiliser un JOIN pour recréer cette relation. Considérons les deux tables suivantes : 

```RAW
   [Factures] avec les champs (colonnes) suivants :      ID_Fact : Entier long      Date_Fact : Date      Total : Réel   [Lignes_Factures] avec les champs (colonnes) suivants :      ID_Ligne : Entier long      ID_Fact : Entier long      Code : Alpha (10)
```

Un lien de N vers 1 relie le champ \[Lignes\_Factures\]ID\_Fact au champ \[Factures\]ID\_Fact.  
Avec la commande [QUERY BY FORMULA](query-by-formula.md), vous pourriez écrire :

```4d
 QUERY BY FORMULA([Lignes_Factures];([Lignes_Factures]Code="FX-200") & (Month of([Factures]Date_Fact)=4))
```

La requête SQL est :

```SQL
SELECT ID_LigneFROM Lignes_Factures, FacturesWHERE Lignes_Factures.ID_Fact=Factures.ID_FactAND Lignes_Factures.Code='FX-200'AND MONTH(Factures.Date_Fact) = 4
```

En utilisant la commande **QUERY BY SQL** :

```4d
 C_STRING(40;$formuleRequete)
 $formuleRequete:="Lignes_Factures.ID_Fact=Factures.ID_Fact AND Lignes_Factures.Code=’FX-200’ AND MONTH(Factures.Date_Fact)=4"
 QUERY BY SQL([Lignes_Factures];$formuleRequete)
```

#### Variables et ensembles système 

Si le format de la condition de recherche est correct, la variable système OK prend la valeur 1\. Sinon, elle prend la valeur 0, le résultat de la commande est une sélection vide et une erreur est retournée. Cette erreur peut être interceptée par une méthode installée à l’aide de la commande [ON ERR CALL](on-err-call.md).

#### Voir aussi 

[QUERY BY FORMULA](query-by-formula.md)  