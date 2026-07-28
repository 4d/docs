---
id: sql-cancel-load
title: SQL CANCEL LOAD
slug: /commands/sql-cancel-load
displayed_sidebar: docs
---

<!--REF #_command_.SQL CANCEL LOAD.Syntax-->**SQL CANCEL LOAD**<!-- END REF-->
<!--REF #_command_.SQL CANCEL LOAD.Params-->
<div class="no-index">

| Ne requiert pas de paramètre |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|2004|Créé|

</details>
</div>

## Description 

<!--REF #_command_.SQL CANCEL LOAD.Summary-->La commande **SQL CANCEL LOAD** met fin à la requête SELECT courante et initialise les paramètres du curseur.<!-- END REF--> 

Cette commande permet d’exécuter plusieurs requêtes SELECT au sein d’une même connexion (c’est-à-dire un même curseur) initiée par la commande [SQL LOGIN](../commands/sql-login). 

## Exemple 

Dans cet exemple, deux requêtes sont exécutées dans la même connexion : 

```4d
 var Monblob : Blob
 var MonTexte : Text
 SQL LOGIN("mysql";"root";"")
 
 SQLStmt:="SELECT blob_field FROM app_testTable"
 SQL EXECUTE(SQLStmt;Monblob)
 While(Not(SQL End selection))
    SQL LOAD RECORD
 End while
 
  //Réinitialisation du curseur
 SQL CANCEL LOAD
 
 SQLStmt:="SELECT Name FROM Employee"
 SQL EXECUTE(SQLStmt;MonTexte)
 While(Not(SQL End selection))
    SQL LOAD RECORD
 End while
```

## Variables et ensembles système 

Si la commande a été correctement exécutée, la variable système OK retourne 1, sinon elle retourne 0.

## Voir aussi 

[SQL LOAD RECORD](../commands/sql-load-record)  
[SQL LOGIN](../commands/sql-login)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 824 |
| Thread safe | no |
| Modifie les variables | OK |


