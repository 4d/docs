---
id: on-sql-authentication-database-method
title: On SQL Authentication database method
slug: /commands/on-sql-authentication-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On SQL Authentication database method.Syntax-->$1, $2, $3 -> On SQL Authentication database method -> $0<!-- END REF-->
<!--REF #_command_.On SQL Authentication database method.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| $1 | Texte | &#8592; | Nom d’utilisateur |
| $2 | Texte | &#8592; | Mot de passe |
| $3 | Texte | &#8592; | (Facultatif) Adresse IP du client à l’origine de la requête |
| $0 | Booléen | &#8592; | Vrai = requête acceptée, Faux = requête rejetée |

<!-- END REF-->

#### 

<!--REF #_command_.On SQL Authentication database method.Summary-->La **On SQL Authentication database method** permet de filtrer les requêtes adressées au serveur SQL intégré de 4D.<!-- END REF--> Le filtrage peut être effectué sur la base du nom, du mot de passe ainsi que (facultativement) de l’adresse IP de l’utilisateur. Le développeur peut utiliser sa propre table d’utilisateurs ou celle des utilisateurs 4D pour évaluer les identifiants de connexion. Une fois la connexion authentifiée, la commande [CHANGE CURRENT USER](change-current-user.md) doit être appelée afin de contrôler les accès de la requête au sein de la base 4D. 

Lorsqu’elle existe, la **On SQL Authentication database method** est automatiquement appelée par 4D ou 4D Server à chaque connexion externe au serveur SQL. Le système interne de gestion des utilisateurs de 4D n’est alors pas sollicité. La connexion n'est acceptée que si la méthode base retourne **Vrai** dans $0 et si la commande [CHANGE CURRENT USER](change-current-user.md) a été exécutée avec succès. Si l'une des deux conditions n'est pas remplie, la requête est rejetée. 

**Note :** L’instruction [SQL LOGIN](sql-login.md)(SQL\_INTERNAL;$utilisateur;$motdepasse) ne déclenche pas l’appel de la **On SQL Authentication database method** car il s’agit dans ce cas d’une connexion interne. 

La méthode base reçoit jusqu’à trois paramètres de type Texte, passés par 4D ($1, $2 et $3), et retourne un booléen, $0\. Voici la description de ces paramètres :

| **Paramètres** | **Type** | **Description**                                                 |
| -------------- | -------- | --------------------------------------------------------------- |
| $1             | Texte    | Nom d’utilisateur                                               |
| $2             | Texte    | Mot de passe                                                    |
| $3             | Texte    | (Facultatif) Adresse IP du client à l’origine de la requête(\*) |
| $0             | Booléen  | Vrai = requête acceptée, Faux = requête rejetée                 |

(\*) 4D retourne les adresses IPv4 dans un format hybride IPv6 comprenant un préfixe de 96 bits, par exemple ::ffff:192.168.2.34 pour l'adresse IPv4 192.168.2.34\. Pour plus d'informations, reportez-vous à la section *Prise en charge d’IP v6*. 

Vous devez déclarer ces paramètres de la manière suivante :

```4d
  //Méthode base Sur authentification SQL
 var $1;$2;$3 : Text
 var $0 : Boolean
 ... // Code pour la méthode
```

Le mot de passe ($2) est reçu en texte standard. 

Vous devez contrôler les identifiants de la connexion SQL dans la **On SQL Authentication database method**. Par exemple, vous pouvez contrôler le nom et le mot de passe à l’aide d’une table d’utilisateurs personnalisée. Si les identifiants sont valides, passez Vrai dans $0\. Sinon, passez **Faux** dans $0, dans ce cas la connexion est rejetée.

Si vous avez passé **Vrai** dans $0, vous devez ensuite appeler avec succès la commande [CHANGE CURRENT USER](change-current-user.md) dans la **On SQL Authentication database method** pour que la requête soit acceptée et que 4D ouvre une session SQL pour l’utilisateur.   
L’utilisation de la commande [CHANGE CURRENT USER](change-current-user.md) permet de mettre en place un système d'authentification virtuelle ayant comme double avantage le contrôle des actions au sein de la connexion et le masquage pour l’extérieur des identifiants de la connexion dans la session SQL 4D.

**Note :** Si la **On SQL Authentication database method** n’existe pas, la connexion est évaluée à l’aide du système intégré de gestion des utilisateurs de 4D s’il est actif, c’est-à-dire si un mot de passe a été attribué au Super\_Utilisateur. Si le système n'est pas actif, les utilisateurs sont connectés avec les droits du Super\_Utilisateur (accès libre). 

Cet exemple de **On SQL Authentication database method** vérifie que la demande de connexion provient du réseau interne, valide les identifiants puis affecte les droits d’utilisateur "sql\_user" pour la session SQL.

```4d
 var $1;$2;$3 : Text
 var $0 : Boolean
  //$1 : utilisateur
  //$2 : mot de passe
  //{$3 : Adresse IP du client}
 ON ERR CALL("SQL_error")
 If(checkInternalIP($3))
  //La méthode checkInternalIP vérifie que l’adresse IP est interne
    If($1="victor") & ($2="hugo")
       CHANGE CURRENT USER("sql_user";"")
       If(OK=1)
          $0:=True
       Else
          $0:=False
       End if
    Else
       $0:=False
    End if
 Else
    $0:=False
 End if
```
