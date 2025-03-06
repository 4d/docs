---
id: begin-sql
title: Begin SQL
slug: /commands/begin-sql
displayed_sidebar: docs
---

<!--REF #_command_.Begin SQL.Syntax-->**Begin SQL**<!-- END REF-->
<!--REF #_command_.Begin SQL.Params-->
| Ne requiert pas de paramètre |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.Begin SQL.Summary-->**Begin SQL** est un mot-clé permettant d'indiquer dans l'éditeur de méthodes le début d'une séquence de commandes SQL, qui devront être interprétées par la source de données courante du process (moteur SQL intégré de 4D ou toute source définie via la commande [SQL LOGIN](sql-login.md)).<!-- END REF-->

Une séquence de commandes SQL initiée par **Begin SQL** doit être refermée par le mot-clé [End SQL](end-sql.md).

Les principes de fonctionnement de ces mots-clés sont les suivants :

* Vous pouvez placer un ou plusieurs blocs de balises **Begin SQL**/[End SQL](end-sql.md) dans la même méthode. Vous pouvez générer des méthodes entièrement composées de code SQL ou mixer du code 4D et du code SQL dans la même méthode.
* Vous pouvez écrire plusieurs instructions SQL sur une même ligne ou sur différentes lignes en les séparant par un “;”. Par exemple, vous pouvez écrire :  
```4d  
 Begin SQL  
    INSERT INTO SALESREPS (NAME, AGE) VALUES (‘Henry’,40);  
    INSERT INTO SALESREPS (NAME, AGE) VALUES (‘Bill’,35)  
 End SQL  
```  
    
ou :  
```4d  
 Begin SQL  
    INSERT INTO SALESREPS (NAME, AGE) VALUES (‘Henry’,40);INSERT INTO SALESREPS (NAME, AGE) VALUES (‘Bill’,35)  
 End SQL  
```

A noter que le *Débogueur* de 4D évaluera le code SQL ligne par ligne. Dans certains cas, il peut être préférable d’utiliser plusieurs lignes.

#### Voir aussi 

[End SQL](end-sql.md)  
[SQL Get current data source](sql-get-current-data-source.md)  
[SQL LOGIN](sql-login.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 948 |
| Thread safe | &check; |


