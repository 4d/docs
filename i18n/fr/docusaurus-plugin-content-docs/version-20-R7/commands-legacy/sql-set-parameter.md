---
id: sql-set-parameter
title: SQL SET PARAMETER
slug: /commands/sql-set-parameter
displayed_sidebar: docs
---

<!--REF #_command_.SQL SET PARAMETER.Syntax-->**SQL SET PARAMETER** ( *objet* ; *typeParam* )<!-- END REF-->
<!--REF #_command_.SQL SET PARAMETER.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objet | Object | &#8594;  | Objet 4D à utiliser (variable, tableau ou champ) |
| typeParam | Integer | &#8594;  | Type du paramètre |

<!-- END REF-->

#### Description 

<!--REF #_command_.SQL SET PARAMETER.Summary-->La commande **SQL SET PARAMETER** permet d’utiliser la valeur d’une variable, d’un tableau ou d’un champ 4D dans les requêtes SQL.<!-- END REF-->

**Note :** Il est également possible d’insérer directement le nom d'un objet 4D à utiliser (variable, tableau ou champ) entre les caractères *<<* et *\>>* dans le texte de la requête (cf. exemple 1). Pour plus d'informations sur ce point, reportez-vous à la section *Présentation des commandes du thème SQL*. 

* Passez dans le paramètre *objet* l’objet 4D (variable, tableau ou champ) à utiliser dans la requête.
* Passez dans le paramètre *typeParam* le type SQL du paramètre. Vous pouvez passer une valeur ou utiliser l’une des constantes suivantes, placées dans le thème "*SQL*" :  

| Constante        | Type        | Valeur | Comment                                                                                                                       |  
| ---------------- | ----------- | ------ | ----------------------------------------------------------------------------------------------------------------------------- |  
| SQL param in     | Entier long | 1      |                                                                                                                               |  
| SQL param in out | Entier long | 2      | Utilisable uniquement dans le contexte d'une procédure stockée SQL (paramètre entrée-sortie défini dans la procédure stockée) |  
| SQL param out    | Entier long | 4      | Utilisable uniquement dans le contexte d'une procédure stockée SQL (paramètre sortie défini dans la procédure stockée)        |

La valeur de l’objet 4D est substituée au caractère *?* dans la requête SQL (syntaxe standard). Si la requête comporte plusieurs caractères *?*, plusieurs appels à **SQL SET PARAMETER** seront nécessaires. Les valeurs des objets 4D seront affectées séquentiellement dans la requête, dans l’ordre d’exécution des commandes. 

**Attention :** Cette commande permet de manipuler les *paramètres* passés à la requête SQL. Il n'est pas possible d'utiliser le type SQL param out pour associer un objet 4D au *résultat* d'une requête SQL. Le résultat d'une requête SQL est récupéré par exemple via le paramètre *objetLié* de la commande [SQL EXECUTE](sql-execute.md) (cf. section *Présentation des commandes du thème SQL*). La commande **SQL SET PARAMETER** est généralement utilisée pour définir des paramètres passés à la requête (SQL param in) ; les types SQL param out et SQL param in out sont réservés à une utilisation dans le contexte de procédures stockées SQL pouvant retourner des paramètres. 

#### Exemple 1 

Cet exemple permet d’exécuter une requête SQL faisant directement appel à des variables 4D associées :

```4d
 var MonTexte : Text
 var MonEntierLong : Integer
 
 SQL LOGIN("mysql";"root";"")
 SQLStmt:="insert into app_testTable (alpha_field, longint_field) VALUES (<>, <>)"
 For(vCounter;1;10)
    MonTexte:="Texte"+String(vCounter)
    MonEntierLong:=vCounter
    SQL EXECUTE(SQLStmt)
    SQL CANCEL LOAD
 End for
 SQL LOGOUT
```

#### Exemple 2 

Même exemple que le précédent, mais en utilisant la commande **SQL SET PARAMETER** :

```4d
 var MonTexte : Text
 var MonEntierLong : Integer
 
 SQL LOGIN("mysql";"root";"")
 SQLStmt:="insert into app_testTable (alpha_field, longint_field) VALUES (?,?)"
 For(vCounter;1;10)
    MonTexte:="Texte"+String(vCounter)
    MonEntierLong:=vCounter
    SQL SET PARAMETER(MonTexte;SQL param in)
    SQL SET PARAMETER(MonEntierLong;SQL param in)
    SQL EXECUTE(SQLStmt)
    SQL CANCEL LOAD
 End for
 SQL LOGOUT
```

#### Variables et ensembles système 

Si la commande a été correctement exécutée, la variable système OK retourne 1, sinon elle retourne 0.


#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 823 |
| Thread safe | &cross; |
| Modifie les variables | OK |


