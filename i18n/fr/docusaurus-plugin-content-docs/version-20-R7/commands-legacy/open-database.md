---
id: open-database
title: OPEN DATABASE
slug: /commands/open-database
displayed_sidebar: docs
---

<!--REF #_command_.OPEN DATABASE.Syntax-->**OPEN DATABASE** ( *cheminFichier* )<!-- END REF-->
<!--REF #_command_.OPEN DATABASE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| cheminFichier | Text | &#8594;  | Nom ou chemin d'accès complet du fichier de base de données à ouvrir (.4db, .4dc, .4dbase ou .4dlink) |

<!-- END REF-->

#### Note 

<!--REF #_command_.OPEN DATABASE.Summary-->La commande **OPEN DATABASE** referme la base de données 4D courante et ouvre à la volée la base désignée par le paramètre *cheminFichier*.<!-- END REF--> Cette commande est utile dans le cadre de tests automatiques, pour rouvrir une base après compilation, ou pour permettre à une application 4D fusionnée de sélectionner le serveur de la base auquel se connecter.

Dans le paramètre *filePath*, passez le nom le chemin d'accès complet de la base de données à ouvrir. Vous pouvez utiliser un fichier ayant l'une des extensions suivantes :

* .4db (fichier de structure interprété),
* .4dc (fichier de structure compilé),
* .4dbase (package macOS),
* .4dproject (fichier de la base projet)
* .4dz (fichier de déploiement des bases projets)
* .4dlink (fichier de raccourci).

Si vous passez uniquement un nom de fichier, il doit être placé au même niveau que le fichier de structure de la base courante. 

Si le chemin d'accès est valide, 4D quitte la base ouverte et ouvre la base spécifiée. En mode monoposte, la [On Exit database method](on-exit-database-method.md) de la base refermée et la [On Startup database method](on-startup-database-method.md) (ou la [On Server Open Connection database method](on-server-open-connection-database-method.md)) de la base ouverte sont successivement appelées.

**Attention :** Comme la commande entraîne la fermeture de l'application courant avant d'ouvrir la base spécifiée, il est généralement déconseillé de l'appeler dans la ou dans une méthode appelée par cette méthode base.

La commande est exécutée de manière asynchrone : après son appel, 4D continue d'exécuter le reste de la méthode. Ensuite, l'application se comporte comme si la commande **Quitter** du menu **Fichier** avait été sélectionnée : les boîtes de dialogue d'ouverture sont annulées, tous les process ouverts sont tenus de se terminer en moins de dix secondes, etc.

Si le fichier de base cible n'est pas trouvé ou est invalide, une erreur système standard du gestionnaire de fichiers est retournée et 4D ne fait rien.

#### Exemple 1 

```4d
 OPEN DATABASE("C:\\databases\\Invoices\\Invoices.4db")
```

#### Exemple 2 

Vous souhaitez sélectionner un serveur au démarrage, à partir d'une application monoposte. Vous pouvez exécuter ce code avec un process lancé par la [On Startup database method](on-startup-database-method.md) :

```4d
 var $xml : Text
 $xml:=""
 $databaseName:="myServer"
 $IP:="192.168.6.7:19813"
 
 If(Shift down)
    $IP:=Request("Adresse IP à connecter à "+$databaseName;$IP)
 Else
    ok:=1
 End if
 
 If(ok=1)
    $xml:=Replace string($xml;"{databaseName}";$databaseName)
    $xml:=Replace string($xml;"{IP}";$IP)
    var $link : Object
    $link:=Folder(fk user preferences folder).file("server.4dlink")
    $link.setText($xml)
    OPEN DATABASE($link.platformPath)
 Else
    QUIT 4D
 End if
```


#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1321 |
| Thread safe | &check; |


