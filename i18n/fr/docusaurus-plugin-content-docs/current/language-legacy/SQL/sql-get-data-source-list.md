---
id: sql-get-data-source-list
title: SQL GET DATA SOURCE LIST
slug: /commands/sql-get-data-source-list
displayed_sidebar: docs
---

<!--REF #_command_.SQL GET DATA SOURCE LIST.Syntax-->**SQL GET DATA SOURCE LIST** ( *typeSource* : Integer ; *tabNomsSources* : Text array ; *tabPilotes* : Text array )<!-- END REF-->
<!--REF #_command_.SQL GET DATA SOURCE LIST.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| typeSource | Integer | &#8594;  | Type de source : utilisateur ou système |
| tabNomsSources | Text array | &#8592; | Tableau des noms de sources de données |
| tabPilotes | Text array | &#8592; | Tableau des pilotes des sources |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|19 R5|Renommé|
|11 SQL|Créé|

</details>
</div>

## Description 

<!--REF #_command_.SQL GET DATA SOURCE LIST.Summary-->La commande **SQL GET DATA SOURCE LIST** retourne dans les tableaux *tabNomsSources* et *tabPilotes* les noms et les pilotes des sources de données de type *typeSource* définies dans le gestionnaire ODBC du système d’exploitation.<!-- END REF-->

4D vous permet de vous connecter directement via le langage à une source de données ODBC externe et d’exécuter des requêtes SQL au sein d’une structure [Begin SQL](../commands/begin-sql)/[End SQL](../commands/end-sql). Le principe d’utilisation est le suivant : la commande **SQL GET DATA SOURCE LIST** permet d’obtenir la liste des sources de données présentes sur le poste. La commande [SQL LOGIN](../commands/sql-login) permet alors de désigner la source à utiliser. Vous pouvez ensuite exécuter des requêtes SQL dans une structure [Begin SQL](../commands/begin-sql)/[End SQL](../commands/end-sql) sur la source “courante”. Pour effectuer à nouveau des requêtes sur le moteur interne de 4D, il suffit de passer la commande [SQL LOGOUT](../commands/sql-logout). Pour plus d’informations sur les commandes SQL dans l’éditeur de méthodes, reportez-vous au manuel Guide de référence 4D SQL.

Passez dans *typeSource* le type de source de données que vous souhaitez obtenir. Vous pouvez utiliser l’une des constantes suivantes, placées dans le thème “*SQL*” :

| Constante          | Type        | Valeur |
| ------------------ | ----------- | ------ |
| System data source | Entier long | 2      |
| User data source   | Entier long | 1      |

**Note :** Cette commande ne prend pas en compte les sources de données de type fichier. 

La commande remplit et dimensionne les tableaux *tabNomsSources* et *tabPilotes* avec les valeurs correspondantes. 

**Note :** Si vous souhaitez vous connecter à une source de données 4D externe via ODBC, vous devez au préalable installer le pilote 4D ODBC sur votre poste. Pour plus d'informations, reportez-vous au manuel d'installation de 4D ODBC Driver. 

## Exemple 

Cet exemple utilise une source de données utilisateur :

```4d
 ARRAY TEXT(tdsn;0)
 ARRAY TEXT(tdsnPilotes;0)
 GET DATA SOURCE LIST(User data source;tdsn;tdsnPilotes)
```

## Variables et ensembles système 

Si la commande est correctement exécutée, la variable système OK prend la valeur 1\. Sinon, elle prend la valeur 0 et une erreur est générée.

## Voir aussi 

[SQL Get current data source](../commands/sql-get-current-data-source)  
[SQL LOGIN](../commands/sql-login)  
[SQL LOGOUT](../commands/sql-logout)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 989 |
| Thread safe | no |
| Modifie les variables | OK |


