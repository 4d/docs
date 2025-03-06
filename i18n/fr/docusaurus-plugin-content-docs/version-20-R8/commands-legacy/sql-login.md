---
id: sql-login
title: SQL LOGIN
slug: /commands/sql-login
displayed_sidebar: docs
---

<!--REF #_command_.SQL LOGIN.Syntax-->**SQL LOGIN** {( *source* ; *nomUtilisateur* ; *motDePasse* ; * )}<!-- END REF-->
<!--REF #_command_.SQL LOGIN.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| source | Text | &#8594;  | Nom de publication de base 4D ouAdresse IP de base distante ouNom de source de données dans le gestionnaire ODBC ou"" pour afficher le dialogue de sélection |
| nomUtilisateur | Text | &#8594;  | Nom d’utilisateur enregistré dans la source de données |
| motDePasse | Text | &#8594;  | Mot de passe de l’utilisateur |
| * | Opérateur | &#8594;  | Appliquer à Debut SQL/Fin SQL Si omis : ne pas appliquer (base locale), si passé : appliquer |

<!-- END REF-->

#### Description 

<!--REF #_command_.SQL LOGIN.Summary-->La commande **SQL LOGIN** vous permet d’ouvrir une connexion avec une source de données SQL, définie dans le paramètre *source*.<!-- END REF--> Elle désigne la cible des requêtes SQL exécutées ultérieurement dans le process courant : 

* via la commande [SQL EXECUTE](sql-execute.md),
* via le code placé à l’intérieur des balises [Begin SQL](begin-sql.md)/[End SQL](end-sql.md) (si le paramètre *\** est passé).

La source de données SQL peut être soit :

* une base 4D Server externe à laquelle vous accédez directement,
* une source ODBC externe,
* la base 4D locale (base interne).

Vous pouvez passer dans *source* l’une des valeurs suivantes : une adresse IP, un nom de publication de base 4D, un nom de source de données ODBC, une chaîne vide ou la constante SQL\_INTERNAL.

* **adresse IP**  
Syntaxe : **IP:<Adresse IP>{:<PortTCP>}**  
Dans ce cas, la commande ouvre une connexion directe avec la base 4D Server exécutée sur l’ordinateur ayant l’adresse IP définie. Sur l’ordinateur "cible", le serveur SQL doit être lancé. Si vous passez un numéro de port TCP, il doit avoir été spécifié comme port de publication du serveur SQL dans la base "cible". Si vous ne passez pas de numéro de port TCP, le port par défaut sera utilisé (19812). Le numéro de port TCP du serveur SQL peut être modifié dans la page "SQL" des Propriétés de la base. Reportez-vous aux exemples 4 et 5.  
Si vous avez activé le SSL pour le serveur SQL "cible" (option accessible via les Propriétés de la base), vous devez ajouter le mot-clé ":ssl" à la suite de l'adresse IP et du port TCP (obligatoire dans ce cas) afin que le serveur puisse traiter correctement la requête (voir exemple 6).
* **nom de publication de base 4D**  
Syntaxe : **4D:<Nom\_de\_Publication>**  
Dans ce cas, la commande ouvre une connexion directe avec la base 4D Server dont le nom de publication sur le réseau correspond au nom spécifié. Le nom de publication réseau d’une base est défini dans la page "Client-Serveur" des Propriétés de la base.  
Reportez-vous à l’exemple 4.  
**Note :** Le numéro de port TCP du serveur SQL 4D cible (qui publie la base 4D) et le numéro de port TCP du serveur SQL de l’application 4D ouvrant la connexion doivent être identiques.
* **nom de source de données ODBC valide**  
Syntaxe : **ODBC:<Ma\_DSN>** ou **<Ma\_DSN>**  
Dans ce cas, le paramètre *source* contient le nom de la source de données telle qu'elle a été définie dans le gestionnaire du pilote ODBC.  
**Notes :**  
   * Par compatibilité avec les versions précédentes de 4D, il est possible d'omettre le préfixe "ODBC:". Toutefois pour des raisons de lisibilité du code il est conseillé d’utiliser ce préfixe. Reportez-vous à l’exemple 2.  
   * Sous Windows, le nom de la source de données doit respecter les majuscules/minuscules. Par exemple, si la source de données a été définie en "4D\_v16", passer la valeur "4D\_V16" échouera.  
   * Sous Windows et Mac, le préfixe "ODBC:" doit être saisi en majuscules. Si vous passez "odbc:", la connexion échouera.
* **chaîne vide**  
Syntaxe : ***""***  
Dans ce cas la commande provoque l’affichage de la boîte de dialogue de connexion, permettant de désigner manuellement la source de données à laquelle se connecter :  
![](../assets/en/commands/pict33536.fr.png)  
Cette boîte de dialogue comporte plusieurs pages. La page TCP/IP se compose des éléments suivants :  
   * Nom cible : ce menu est construit à l’aide de deux listes :  
         * la liste des bases ouvertes récemment en connexion directe. Le mécanisme de mise à jour de cette liste est identique à celui de l’application 4D, à la différence près que le dossier contenant les fichiers .4DLink est nommé "Favorites SQL vXX" au lieu de "Favorites vXX".  
         * la liste des applications 4D Server dont le serveur SQL est lancé et dont le port TCP pour les connexions SQL est égal à celui de l’application source. Cette liste est mise à jour dynamiquement à chaque nouvel appel de la commande **SQL LOGIN** sans le paramètre *source*. Le caractère "^" placé devant un nom de base indique que la connexion est effectuée en mode sécurisé via SSL.  
   * Adresse réseau : cette zone affiche l’adresse IP et éventuellement le port TCP de la base sélectionnée dans le menu Nom cible. Vous pouvez également saisir dans cette zone une adresse IP puis cliquer sur le bouton Connexion afin de vous connecter à la base 4D Server correspondante. Vous pouvez également spécifier le port TCP, en saisissant deux points (:) puis le numéro du port à la suite de l’adresse. Par exemple : 192.168.93.105:19855  
   * Utilisateur et Mot de passe : ces zones permettent de saisir les identifiants de la connexion.  
   * Les pages DSN utilisateur et DSN système affichent respectivement la liste des sources de données ODBC utilisateur et système définies dans le gestionnaire ODBC de la machine. Ces pages permettent de sélectionner une source de données et de saisir des identifiants afin d’ouvrir une connexion avec une source ODBC externe.

> Si la connexion est établie, la variable système OK prend la valeur 1\. Sinon, elle prend la valeur 0 et une erreur est générée. Cette erreur peut être interceptée via une méthode de gestion d’erreurs installée par la commande [ON ERR CALL](on-err-call.md).

* **constante SQL\_INTERNAL**  
Syntaxe : **SQL\_INTERNAL**  
Dans ce cas, la commande redirige les requêtes SQL suivantes vers la base 4D interne.

**Attention :** Les préfixes utilisés dans le paramètre *source* (IP, ODBC, 4D) doivent être écrits en majuscules. 

Le paramètre *utilisateur* contient le nom de l’utilisateur autorisé à se connecter à la source de données externe. Par exemple, avec Oracle®, ce nom d’utilisateur peut être “Scott”.

Le paramètre *motDePasse* contient le mot de passe de l’utilisateur autorisé à se connecter. Par exemple, avec Oracle®, ce mot de passe peut être “tiger”.

**Note :** Dans le cas d’une connexion directe, si vous passez des chaînes vides dans les paramètres *utilisateur* et *motDePasse*, la connexion ne sera acceptée que si les mots de passe 4D ne sont pas activés dans la base cible. Sinon, la connexion est refusée.

Le paramètre facultatif *\** permet de changer la cible du code SQL exécuté au sein des balises [Begin SQL](begin-sql.md)/[End SQL](end-sql.md). Si vous ne passez pas ce paramètre, le code placé dans les balises [Begin SQL](begin-sql.md)/[End SQL](end-sql.md) sera toujours adressé au moteur SQL interne de 4D, sans tenir compte du paramétrage défini par la commande **SQL LOGIN**. Si vous passez ce paramètre, le code SQL exécuté au sein des balises [Begin SQL](begin-sql.md)/[End SQL](end-sql.md) sera adressé à la *source* définie par la commande. 

Pour refermer la connexion courante et libérer la mémoire, il suffit d’exécuter la commande [SQL LOGOUT](sql-logout.md). Toutes les requêtes SQL sont alors dirigées vers la base 4D SQL interne.   
Si vous appelez une nouvelle fois **SQL LOGIN** sans avoir refermé explicitement la connexion courante, elle est automatiquement refermée. 

**Note :** En cas d'échec d'une tentative de connexion externe via **SQL LOGIN**, la base 4D interne devient automatiquement la source de données courante.

Tous les paramètres sont facultatifs. Si aucun paramètre n’est passé, la commande provoquera l’affichage de la boîte de dialogue de connexion ODBC, permettant de désigner manuellement la source de données à laquelle se connecter. 

La portée de cette commande est le process. Autrement dit, si vous souhaitez ouvrir deux connexions distinctes, vous devez créer deux process et ouvrir chaque connexion dans chaque process. 

**Attention :** Il n'est pas possible d'ouvrir une connexion ODBC dans les contextes décrits ci-dessous. Ces configurations conduisent au blocage de l'application :

* connexion via ODBC depuis l'application en exécution vers elle-même
* connexion via ODBC depuis une application 4D vers 4D Server alors qu'une connexion client/serveur classique est déjà ouverte entre les deux applications.

#### Exemple 1 

Cette instruction provoque l’affichage de la boîte de dialogue du gestionnaire ODBC : 

```4d
 SQL LOGIN
```

#### Exemple 2 

Ouverture d’une connexion via le protocole ODBC avec la source de données externe "MonOracle". Les requêtes SQL exécutées via la commande [SQL EXECUTE](sql-execute.md) et les requêtes incluses dans les balises [Begin SQL](begin-sql.md)/[End SQL](end-sql.md) seront redirigées vers cette connexion :

```4d
 SQL LOGIN("ODBC:MonOracle";"Scott";"tiger";*)
```

#### Exemple 3 

Ouverture d'une connexion avec le moteur SQL interne de 4D : 

```4d
 SQL LOGIN(SQL_INTERNAL;$utilisateur;$motdepasse)
```

#### Exemple 4 

Ouverture d’une connexion directe avec l’application 4D Server exécutée sur le poste ayant l’adresse IP 192.168.45.34 et répondant sur le port TCP par défaut. Les requêtes SQL exécutées via la commande [SQL EXECUTE](sql-execute.md) seront redirigées vers cette connexion, les requêtes incluses dans les balises [Begin SQL](begin-sql.md)/[End SQL](end-sql.md) ne seront pas redirigées. 

```4d
 SQL LOGIN("IP:192.168.45.34";"John";"azerty")
```

#### Exemple 5 

Ouverture d’une connexion directe avec l’application 4D Server exécutée sur le poste ayant l’adresse IP 192.168.45.34 et répondant sur le port TCP 20150\. Les requêtes SQL exécutées via la commande [SQL EXECUTE](sql-execute.md) et les requêtes incluses dans les balises [Begin SQL](begin-sql.md)/[End SQL](end-sql.md) seront redirigées vers cette connexion. 

```4d
 SQL LOGIN("IP:192.168.45.34:20150";"John";"azerty";*)
```

#### Exemple 6 

Ouverture d’une connexion directe en SSL avec l’application 4D Server exécutée sur le poste ayant l’adresse IP 192.168.45.34 et répondant sur le port TCP par défaut. Le SSL doit avoir été activé pour le serveur SQL sur l'application 4D Server :

```4d
 SQL LOGIN("IP:192.168.45.34:19812:ssl";"Admin";"sd156") // Notez le ":ssl" après l'adresse IP et le port TCP
```

#### Exemple 7 

Ouverture d'une connexion directe avec l'application 4D Server exécutée sur la machine ayant l'adresse IPv6 2a01:e35:2e41:c960:dc39:3eb0:f29b:3747 et répondant sur le port TCP 20150\. Les requêtes SQL exécutées via la commande [SQL EXECUTE](sql-execute.md) seront redirigées sur cette connexion ; les requêtes inclues dans les mots-clés [Begin SQL](begin-sql.md)/[End SQL](end-sql.md) ne seront pas redirigées.

```4d
 SQL LOGIN("IP:[2a01:e35:2e41:c960:dc39:3eb0:f29b:3747]:20150";"John";"qwerty")
```

#### Exemple 8 

Ouverture d’une connexion directe avec l’application 4D Server qui publie sur le réseau local une base dont le nom de publication est "DB\_Compta". Le port TCP utilisé pour le serveur SQL des deux bases (défini dans la page "SQL" des Propriétés de la base) doit être identique (19812 par défaut). Les requêtes SQL exécutées via la commande [SQL EXECUTE](sql-execute.md) seront redirigées vers cette connexion, les requêtes incluses dans les balises [Begin SQL](begin-sql.md)/[End SQL](end-sql.md) ne seront pas redirigées. 

```4d
 SQL LOGIN("4D:DB_Compta";"John";"azerty")
```

#### Exemple 9 

Cet exemple illustre les possibilités de connexion offertes par la commande SQL LOGIN : 

```4d
 ARRAY TEXT(aNames;0)
 ARRAY LONGINT(aAges;0)
 SQL LOGIN("ODBC:MonORACLE";"Marc";"azerty")
 If(OK=1)
  //La requête suivante sera redirigée vers la base ORACLE externe
    SQL EXECUTE("SELECT Name, Age FROM PERSONS";aNames;aAges)
  //La requête suivante sera dirigée vers la base 4D locale
    Begin SQL
       SELECT Name, Age
       FROM PERSONS
       INTO :aNames, :aAges;
    End SQL
  //La commande SQL LOGIN suivante referme la connexion courante
  //avec la base externe ORACLE et ouvre une nouvelle connexion avec
  //une base externe MySQL
    SQL LOGIN("ODBC:MySQL";"Jean";"qwerty";*)
    If(OK=1)
  //La requête suivante sera redirigée vers la base MySQL externe
       SQL EXECUTE("SELECT Name, Age FROM PERSONS";aNames;aAges)
  //La requête suivante sera aussi redirigée vers la base MySQL externe
       Begin SQL
          SELECT Name, Age
          FROM PERSONS
          INTO :aNames, :aAges;
       End SQL
       SQL LOGOUT
  //La requête suivante sera dirigée vers la base 4D locale
       Begin SQL
          SELECT Name, Age
          FROM PERSONS
          INTO :aNames, :aAges;
       End SQL
    End if
 End if
```

#### Variables et ensembles système 

Si la connexion est correctement établie, la variable système OK prend la valeur 1, sinon elle prend la valeur 0\. 

#### Voir aussi 

[Begin SQL](begin-sql.md)  
[End SQL](end-sql.md)  
[SQL LOGOUT](sql-logout.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 817 |
| Thread safe | &cross; |
| Modifie les variables | OK |


