---
id: on-server-close-connection-database-method
title: On Server Close Connection database method
slug: /commands/on-server-close-connection-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On Server Close Connection database method.Syntax-->$1, $2, $3 -> On Server Close Connection database method<!-- END REF-->
<!--REF #_command_.On Server Close Connection database method.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| $1 | Integer | &#8592; | Numéro d'utilisateur utilisé en interne par 4D Server pour identifier les utilisateurs |
| $2 | Integer | &#8592; | Numéro de connexion utilisé en interne par 4D Server pour identifier une connexion |
| $3 | Integer | &#8592; | Obsolète : Retourne toujours 0 mais doit être déclaré |

<!-- END REF-->

#### Description 

<!--REF #_command_.On Server Close Connection database method.Summary-->La **On Server Close Connection database method** est exécutée sur le poste serveur à chaque fois qu'un process 4D Client est refermé.<!-- END REF-->

Comme pour la [On Server Open Connection database method](on-server-open-connection-database-method.md), 4D Server passe trois paramètres de type Entier long à la **On Server Close Connection database method**. En revanche, 4D Server n'attend pas de résultat en retour.

Par conséquent, la méthode doit contenir la déclaration explicite des trois paramètres Entier long :

```4d
 var $1;$2;$3 : Integer
```

Le tableau suivant détaille les informations fournies par les trois paramètres passés à la méthode base :

| **Paramètre** | **Description**                                                                        |
| ------------- | -------------------------------------------------------------------------------------- |
| $1            | Numéro d'utilisateur utilisé en interne par 4D Server pour identifier les utilisateurs |
| $2            | Numéro de connexion utilisé en interne par 4D Server pour identifier une connexion     |
| $3            | Obsolète : Retourne toujours 0 mais doit être déclaré                                  |

La **On Server Close Connection database method** est le pendant inverse de la [On Server Open Connection database method](on-server-open-connection-database-method.md). Pour plus d'informations sur ce point, ainsi que pour la description des **process 4D Client**, reportez-vous à la description de cette méthode base. 

#### Exemple 

Reportez-vous au premier exemple de la [On Server Open Connection database method](on-server-open-connection-database-method.md).
