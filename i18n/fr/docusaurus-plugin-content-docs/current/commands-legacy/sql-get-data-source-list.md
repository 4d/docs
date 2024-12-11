---
id: sql-get-data-source-list
title: SQL GET DATA SOURCE LIST
slug: /commands/sql-get-data-source-list
displayed_sidebar: docs
---

<!--REF #_command_.SQL GET DATA SOURCE LIST.Syntax-->**SQL GET DATA SOURCE LIST** ( *typeSource* ; *tabNomsSources* ; *tabPilotes* )<!-- END REF-->
<!--REF #_command_.SQL GET DATA SOURCE LIST.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| typeSource | Integer | &#8594;  | Type de source : utilisateur ou système |
| tabNomsSources | Text array | &#8592; | Tableau des noms de sources de données |
| tabPilotes | Text array | &#8592; | Tableau des pilotes des sources |

<!-- END REF-->

#### Description 

<!--REF #_command_.SQL GET DATA SOURCE LIST.Summary-->La commande **SQL GET DATA SOURCE LIST** retourne dans les tableaux *tabNomsSources* et *tabPilotes* les noms et les pilotes des sources de données de type *typeSource* définies dans le gestionnaire ODBC du système d’exploitation.<!-- END REF-->

4D vous permet de vous connecter directement via le langage à une source de données ODBC externe et d’exécuter des requêtes SQL au sein d’une structure [Begin SQL](begin-sql.md)/[End SQL](end-sql.md). Le principe d’utilisation est le suivant : la commande **SQL GET DATA SOURCE LIST** permet d’obtenir la liste des sources de données présentes sur le poste. La commande [SQL LOGIN](sql-login.md) permet alors de désigner la source à utiliser. Vous pouvez ensuite exécuter des requêtes SQL dans une structure [Begin SQL](begin-sql.md)/[End SQL](end-sql.md) sur la source “courante”. Pour effectuer à nouveau des requêtes sur le moteur interne de 4D, il suffit de passer la commande [SQL LOGOUT](sql-logout.md). Pour plus d’informations sur les commandes SQL dans l’éditeur de méthodes, reportez-vous au manuel Guide de référence 4D SQL.

Passez dans *typeSource* le type de source de données que vous souhaitez obtenir. Vous pouvez utiliser l’une des constantes suivantes, placées dans le thème “*SQL*” :

| Constante          | Type        | Valeur |
| ------------------ | ----------- | ------ |
| System data source | Entier long | 2      |
| User data source   | Entier long | 1      |

**Note :** Cette commande ne prend pas en compte les sources de données de type fichier. 

La commande remplit et dimensionne les tableaux *tabNomsSources* et *tabPilotes* avec les valeurs correspondantes. 

**Note :** Si vous souhaitez vous connecter à une source de données 4D externe via ODBC, vous devez au préalable installer le pilote 4D ODBC sur votre poste. Pour plus d'informations, reportez-vous au manuel d'installation de 4D ODBC Driver. 

#### Exemple 

Cet exemple utilise une source de données utilisateur :

```4d
 ARRAY TEXT(tdsn;0)
 ARRAY TEXT(tdsnPilotes;0)
 GET DATA SOURCE LIST(User data source;tdsn;tdsnPilotes)
```

#### Variables et ensembles système 

Si la commande est correctement exécutée, la variable système OK prend la valeur 1\. Sinon, elle prend la valeur 0 et une erreur est générée.

#### Voir aussi 

[SQL Get current data source](sql-get-current-data-source.md)  
[SQL LOGIN](sql-login.md)  
[SQL LOGOUT](sql-logout.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 989 |
| Thread safe | &check; |
| Modifie les variables | OK |
| Interdite sur le serveur ||


