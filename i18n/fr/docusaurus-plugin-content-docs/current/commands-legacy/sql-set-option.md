---
id: sql-set-option
title: SQL SET OPTION
slug: /commands/sql-set-option
displayed_sidebar: docs
---

<!--REF #_command_.SQL SET OPTION.Syntax-->**SQL SET OPTION** ( *option* ; *valeur* )<!-- END REF-->
<!--REF #_command_.SQL SET OPTION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| option | Integer | &#8594;  | Numéro d’option à définir |
| valeur | Integer, Text | &#8594;  | Nouvelle valeur de l’option |

<!-- END REF-->

#### Description 

<!--REF #_command_.SQL SET OPTION.Summary-->La commande **SQL SET OPTION** permet de modifier la *valeur* de l’option passée dans le paramètre *option*.<!-- END REF--> 

Vous pouvez passer dans *option* l’une des constantes suivantes, placées dans le thème *SQL* :

| Constante              | Type        | Valeur | Comment                                                                                                                                                                                                                                                                                                               |
| ---------------------- | ----------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SQL asynchronous       | Entier long | 1      | 0 = connexion synchrone (valeur par défaut), 1 (ou valeur différente de 0) = connexion asynchrone                                                                                                                                                                                                                     |
| SQL charset            | Entier long | 100    | Encodage du texte utilisé pour les requêtes envoyées aux sources externes (via le SQL pass-through). La modification est effective pour le process courant et la connexion courante. <br/>Valeurs possibles : identifiant MIBEnum (cf. note 2) ou valeur -2 (cf. note 3)<br/>Par défaut : 106 (UTF-8) |
| SQL connection timeout | Entier long | 5      | Durée maximale d’attente lors de l’exécution de la commande SQL LOGIN. Cette valeur doit être fixée avant l’ouverture de la connexion pour être prise en compte<br/>Valeurs possibles : durée en secondes<br/>Par défaut : pas de timeout                                                             |
| SQL max data length    | Entier long | 3      | Longueur maximale des données retournées                                                                                                                                                                                                                                                                              |
| SQL max rows           | Entier long | 2      | Nombre maximum de lignes dans l’ensemble résultant (utilisé pour les prévisualisations)                                                                                                                                                                                                                               |
| SQL query timeout      | Entier long | 4      | Durée maximale d’attente de la réponse lors de l’exécution de la commande SQL EXECUTER. <br/>Valeurs : durée en secondes<br/>Par défaut : pas de timeout                                                                                                                                              |

**Notes :**  
1\. Lorsque vous travaillez avec le moteur SQL interne de 4D, l’option SQL Asynchronous est inutile. En effet, ce type de connexion est toujours synchrone.  
2\. Les numéros MIBEnum sont référencés à l’adresse suivante : <http://www.iana.org/assignments/character-sets>.  
3\. Lorsque vous passez -2 comme *valeur* à SQL Charset, l’encodage utilisé par le serveur SQL de 4D est automatiquement adapté à la plate-forme d’exécution (encodage non-UTF) :

* sous Windows, ISO8859-1 est utilisé,
* sous Mac OS, MAC-ROMAN est utilisé.

#### Variables et ensembles système 

Si la commande a été correctement exécutée, la variable système OK retourne 1, sinon elle retourne 0.

#### Voir aussi 

[SQL GET OPTION](sql-get-option.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 818 |
| Thread safe | &check; |
| Modifie les variables | OK |
| Interdite sur le serveur ||


