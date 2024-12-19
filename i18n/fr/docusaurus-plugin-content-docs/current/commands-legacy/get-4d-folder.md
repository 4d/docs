---
id: get-4d-folder
title: Get 4D folder
slug: /commands/get-4d-folder
displayed_sidebar: docs
---

<!--REF #_command_.Get 4D folder.Syntax-->**Get 4D folder** {( *dossier* {; *options*} {; *})} : Text<!-- END REF-->
<!--REF #_command_.Get 4D folder.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| dossier | Integer | &#8594;  | Type de dossier (si omis=dossier 4D actif) |
| options | Object | &#8594;  | Configuration du chemin du dossier base 4D Client |
| * | Opérateur | &#8594;  | Retourne le dossier de la base hôte |
| Résultat | Text | &#8592; | Chemin d'accès du dossier désigné |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get 4D folder.Summary-->La commande **Get 4D folder** renvoie le chemin d'accès du dossier 4D actif de l'application courante, ou du dossier de l'environnement 4D spécifié par les paramètres *dossier* et *options*, s'ils sont passés.<!-- END REF-->  
Cette commande vous permet d'obtenir avec certitude le chemin d'accès réel des dossiers utilisés par l'application. En utilisant cette commande, vous êtes certain que votre code fonctionnera correctement sur toute plate-forme, quelles que soient la langue du système et l'application 4D.

Vous pouvez passer dans *dossier* une des constantes suivantes, placées dans le thème *Environnement 4D* (voir ci-dessous pour une description de chacun de ces dossiers) :

| Constante                   | Type        | Valeur |
| --------------------------- | ----------- | ------ |
| 4D Client database folder   | Entier long | 3      |
| Active 4D Folder            | Entier long | 0      |
| Current resources folder    | Entier long | 6      |
| Data folder                 | Entier long | 9      |
| Database folder             | Entier long | 4      |
| Database folder Unix syntax | Entier long | 5      |
| HTML Root folder            | Entier long | 8      |
| Licenses folder             | Entier long | 1      |
| Logs folder                 | Entier long | 7      |
| MobileApps folder           | Entier long | 10     |

Le paramètre *options* vous permet de personnaliser le chemin du dossier de ressources local. Il est uniquement pris en compte lors de l'utilisation de la constante 4D Client database folder (voir ci-dessous). 

**Note :** Si la commande **Get 4D folder** est appelée depuis un 4D distant, le chemin retourné est celui sur la machine distante, pas sur 4D Server.

##### Dossier 4D actif 

Les applications de l'environnement 4D utilisent un dossier spécifique pour stocker les informations suivantes :

* Fichiers de préférences utilisés par les applications 4D
* Fichier shortcuts.xml (raccourcis clavier personnalisés)
* Dossier Macros v2 (macros commandes de l'éditeur de méthodes)
* Dossiers Favorites v1x, par exemple Favorites v13 (chemins d'accès des bases locales et distantes ayant été ouvertes)
* Dossier Logs pour les journaux de maintenance et lorsque les données sont en lecture seule

Le dossier 4D actif se trouve par défaut à l'emplacement suivant :

* Sous Windows: *{Disk}:\\Users\\{userName}\\AppData\\Roaming\\{applicationName}*
* Sous macOS: *{Disk}:Users:{userName}:Library:Application Support:{applicationName}*


##### Dossier Licenses 

Dossier contenant les fichiers de licences de la machine.

Note : Dans le cas d'une application fusionnée avec 4D Volume Desktop, le dossier des licences est inclus dans le package de l'application.

##### Dossier données 

Dossier contenant le fichier de données courant. Le chemin du dossier est exprimé avec la syntaxe standard de la plate-forme courante. 

##### Dossier base 4D Client 

Dossier 4D créé automatiquement sur chaque machine 4D cliente pour stocker les fichiers et dossiers liés à la base de données (ressources, plug-ins, dossier Ressources, etc.). La commande peut retoruner :

* le chemin de l'application courante lorsqu'elle est appelée sur une machine distante et que le paramètre *options* est omis,
* le chemin de n'importe quelle application lorsque le paramètre *options* est utilisé (auquel cas **Get 4D folder** peut être appelée sur n'importe quelle machine).

Par défaut, le chemin est : 

* Sous Windows: {**Disk}:\\Users\\{UserAccount}\\AppData\\Local\\{ApplicationName}\\{StructureName\_IP\_Port\_key}*  
ex: C:\\Users\\John Doe\\AppData\\Local\\myApp\\myApp\_192\_168\_2\_134\_19813\_157
* Sous macOS: *{Disk}:Users:{UserAccount}:Library:Caches:{ApplicationName} Client:{StructureName\_IP\_Port\_key}.*  
ex: :Users:John Doe:Library:Caches:myApp Client:myApp\_192\_168\_2\_134\_19813\_933

Différents dossiers sont utilisés si plusieurs instances de l'application *cliente sont lancées simultanément sur la même machine* *.* 

**Note :** Sous Windows, dans les projets clients fusionnés, l'emplacement de ce dossier est modifié si la clé xml BuildApp *ShareLocalResourcesOnWindowsClient* est utilisée.

**Utilisation de Dossier base 4D Client avec le paramètre** *options*

Vous pouvez utiliser le paramètre *options* si vous voulez calculer le chemin du dossier local pour n'importe quelle base *4D. Dans ce cas, le chemin est construit selon les informations que vous fournissez dans l'objet* *options* et la commande peut être utilisée sur 4D, 4D Server ou une application distante. Grâce à cette fonctionnalité, vous pouvez précalculer les chemins de vos dossiers de ressources locaux, afin notamment de précharger leur contenu. 

Vous pouvez passer les propriétés suivantes dans l'objet *options* :

| **Propriété**                      | **Type**  | **Description**                                                                                                                                                        |
| ---------------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| remoteAppPath                      | Texte     | Optionnel - Chemin système de l'exécutable de l'application distante. Par défaut, le chemin de l'exécutable de l'application courante.                                 |
| buildApplicationName               | Texte     | Optionnel - Nom de application (identique à la valeur de la clé xml BuildApp *BuildApplicationName*). Par défaut, le nom de l'application courante.                    |
| structureName                      | Texte     | Obligatoire sauf si l'attribut *clientServerSystemFolderName* est défini - Nom de la structure.                                                                        |
| ipAddress                          | Texte     | Obligatoire sauf si l'attribut *clientServerSystemFolderName* est défini - Adresse IP du serveur (identique à la valeur de la clé xml BuildApp *IPAddress*).           |
| portNumber                         | Numérique | Obligatoire sauf si l'attribut *clientServerSystemFolderName* est défini - Port de publication du serveur (identique à la valeur de la clé xml BuildApp *PortNumber*). |
| clientServerSystemFolderName       | Texte     | Optionnel - Nom personnalisé du dossier local des ressources (identique à la valeur de la clé xml BuildApp *ClientServerSystemFolderName*).                            |
| shareLocalResourcesOnWindowsClient | Booléen   | Optionnel - Dossier partagé des ressources local (identique à la valeur de la clé xml BuildApp *ShareLocalResourcesOnWindowsClient*).                                  |

**Note :** Le chemin retourné est exprimé à l'aide de la syntaxe système de la machine qui exécute la commande. 

##### Dossier base 

Dossier contenant le fichier de structure de la base. Le chemin d’accès est exprimé avec la syntaxe standard de la plate-forme courante.   
Avec l'application 4D Client, cette constante équivaut strictement à la constante précédente 4D Client database folder : la commande retourne le chemin d’accès du dossier créé en local.

##### Dossier base syntaxe Unix 

Dossier contenant le fichier de structure de la base. Cette constante désigne le même dossier que la précédente, mais le chemin d’accès retourné est exprimé avec la syntaxe Unix (Posix), du type /Users/... Cette syntaxe est principalement utile lorsque vous utilisez la commande [LAUNCH EXTERNAL PROCESS](launch-external-process.md) sous OS X. 

##### Dossier Resources courant 

Dossier Resources de la base. Ce dossier contient les éléments additionnels (images, textes) utilisés pour l'interface de la base. Un composant peut disposer de son propre dossier Resources. Le dossier Resources est situé à côté du fichier de structure de la base.  
En mode client/serveur, ce dossier permet d'organiser le transfert de données personnalisées (images, fichiers, sous-dossiers...) entre le poste serveur et les postes clients. Le contenu de ce dossier est mis à jour automatiquement sur chaque client au moment de sa connexion. Tous les mécanismes de référencement associé au dossier Resources sont pris en charge en mode client/serveur (dossier .lproj, XLIFF, images...) . En outre, 4D fournit divers outils permettant de gérer et de mettre à jour dynamiquement ce dossier, notamment un Explorateur de ressources.

**Note :** Si le dossier *Resources* n'existe pas pour la base, l'exécution de la commande **Get 4D folder** avec la constante Current resources folder provoque sa création. 

##### Dossier Logs 

Dossier Logs de la base. Ce dossier centralise les fichiers d’historique de la base courante. Il est créé au même niveau que le fichier de structure. Le dossier Logs contient les fichiers d’historique suivants :

* conversion de la base,
* requêtes du serveur Web,
* vérification et réparation des données,
* vérification et réparation de la structure,
* journal d'activités sauvegarde/restitution,
* débogage des commandes,
* requêtes 4D Server (généré sur les clients et sur le serveur)..

**Note :** Si le dossier Logs n'existe pas pour la base, l'exécution de la commande **Get 4D folder** avec la constante Logs folder provoque sa création. 

##### Dossier racine HTML 

Dossier racine HTML courant de la base. Le chemin d’accès retourné est exprimé avec la syntaxe standard de la plate-forme courante. Le dossier racine HTML est le dossier dans lequel le serveur Web de 4D va chercher les pages et fichiers Web demandés. Par défaut, il est nommé **DossierWeb** et est placé à côté de fichier de structure (ou de sa copie locale dans le cas de 4D en mode distant). Son emplacement peut être défini dans la page Web/Configuration des Propriétés de la base ou dynamiquement via la commande [WEB SET ROOT FOLDER](web-set-root-folder.md).

Remarque : sous Windows, dans les projets clients fusionnés, l'emplacement de ce dossier est modifié si la clé BuildApp *ShareLocalResourcesOnWindowsClient* est utilisée.   
  
##### Dossier MobileApps 

Dossier contenant tous les fichiers de session existants (.json) utilisés par l'application 4D pour référencer les sessions des utilisateurs d'applications mobiles (c'est-à-dire les sessions ouvertes par des apps 4D for iOS). Les fichiers de sessions sont groupés par sous-dossier d'applications et sont créés automatiquement. Pour plus d'informations, veuillez vous reporter à la [go mobile documentation](https://developer.4d.com/go-mobile/).

Ce dossier est situé au même niveau que le fichier de données courant.

##### 

Le paramètre optionnel \* est utile dans le cas d'une architecture utilisant des composants : il peut être utilisé pour déterminer la base de données (hôte ou composant) pour laquelle vous souhaitez obtenir le chemin du dossier. Ce paramètre est uniquement valable pour les dossiers Database folder, Database folder UNIX syntax et Current resources folder. Il est ignoré dans tous les autres cas.

Lorsque la commande est appelée depuis un composant :

* Si le paramètre \* est passé, la commande renvoie le nom de chemin du dossier de la base de données hôte,
* Si le paramètre \* n'est pas passé, la commande renvoie le nom de chemin du dossier du composant.

Le dossier de la base de données (Database folder et Database folder syntaxe UNIX) renvoyé diffère selon le type d'architecture du composant :

* Dans le cas d'un dossier/package .4dbase, la commande renvoie le nom de chemin du dossier/package .4dbase,
* Dans le cas d'un fichier .4db ou .4dc, la commande renvoie le chemin d'accès au dossier "Components",
* Dans le cas d'un alias ou d'un raccourci, la commande renvoie le chemin du dossier contenant la base de données matricielle originale. Le résultat diffère selon le format de cette base de données (dossier/package .4dbase ou fichier .4db/.4dc), comme décrit ci-dessus.

Lorsque la commande est appelée depuis la base de données hôte, elle renvoie toujours le nom du chemin d'accès au dossier de la base de données hôte, que le paramètre \* soit passé ou non.

#### Exemple 1 

Pendant le démarrage d'une base mono-utilisateur, vous voulez charger (ou créer) vos propres paramètres et les stocker dans un dossier 4D. Pour cela, dans la [On Startup database method](on-startup-database-method.md), vous pouvez écrire les lignes de code similaires aux lignes suivantes :

```4d
 $vsNomDocPref:=Get 4D folder+"MesPrefs.prf" // Construire le chemin d'accès au fichier Préférences
  // Vérifier si le fichier existe
 If(Test path name($vsNomDocPref)#Is a document)
    $vtRefDocPref:=Create document($vsNomDocPref.prf) // Si non, il faut le créer
 Else
    $vtRefDocPref:=Open document($vsNomDocPref.prf) // Si oui, il faut l'ouvrir
 End if
 If(OK=1)
  // Traiter le contenu du document
    CLOSE DOCUMENT($vtRefDocPref)
 Else
  // Gérer l'erreur
 End if
```

#### Exemple 2 

Cet exemple illustre l’emploi de la constante Database folder UNIX syntax sous Mac OS pour lister le contenu du dossier de la base :

```4d
 $cheminposix:="\""+Get 4D folder(Database folder Unix syntax)+"\""
 $mondossier:="ls -l "+$cheminposix
 $in:=""
 $out:=""
 $err:=""
 LAUNCH EXTERNAL PROCESS($mondossier;$in;$out;$err)
```

**Note :** Sous Mac OS, il est nécessaire d’encadrer les chemins d’accès avec des guillemets lorsqu’ils contiennent des noms de fichiers ou de dossiers comportant des espaces. La séquence d’échappement "\\" permet d’insérer le caractère guillemets dans la chaîne. Vous pouvez également utiliser l’instruction [Char](char.md)(Double quote). 

#### Variables et ensembles système 

Si le paramètre *dossier* est invalide ou si le chemin d'accès retourné est vide, la variable système OK prend la valeur 0.

#### Voir aussi 

[COMPONENT LIST](component-list.md)  
[System folder](system-folder.md)  
[Temporary folder](temporary-folder.md)  
[Test path name](test-path-name.md)  
[WEB SET ROOT FOLDER](web-set-root-folder.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 485 |
| Thread safe | &check; |
| Modifie les variables | OK |


