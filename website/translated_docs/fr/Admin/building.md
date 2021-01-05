---
id: building
title: Générer un package projet
---

4D Developer inclut un générateur d’application final pour créer un package de projet (version finale). Ce générateur simplifie le processus de finalisation et de déploiement des applications compilées 4D. Il gère automatiquement les fonctionnalités spécifiques de différents systèmes d'exploitation et facilite le déploiement d'applications client-serveur.

Le générateur d'applications vous permet de :

*   Générer une structure compilée, sans code interprété,
*   Générer une application autonome exécutable, c'est-à-dire fusionnée avec 4D Volume Desktop, le moteur de base de données 4D,
*   Générer différentes applications à partir de la même structure compilée via un projet XML,
*   Générer des applications client-serveur homogènes,
*   Générer des applications client-serveur avec mise à jour automatique des composants client et serveur.
*   Enregistrer vos paramètres de génération pour une utilisation ultérieure (bouton *Enregistrer les paramètres*).



## Aperçu du générateur d'application

Générer un package de projet peut être réalisée à l'aide de :

- soit la commande [BUILD APPLICATION](https://doc.4d.com/4Dv18R4/4D/18-R4/BUILD-APPLICATION.301-4982852.en.html),
- soit la[ fenêtre Générateur d'application](#application-builder).

Pour afficher la boîte de dialogue du générateur d'application, sélectionnez **Développement** > **Générer l'application...** dans la barre de menus.

![](assets/en/Project/buildappProj.png)

La boîte de dialogue du générateur d'application comprend plusieurs pages accessibles via des onglets :

![](assets/en/Project/appbuilderProj.png)


La génération ne peut s'effectuer qu'une fois le projet compilé. Si vous sélectionnez cette commande sans avoir préalablement compilé le projet ou si le code compilé ne correspond pas au code interprété, une boîte de dialogue d'avertissement apparaît indiquant que le projet doit être (re)compilé.


### Paramètres du générateur d'application

Chaque paramètre de générateur d'application est stocké en tant que clé XML dans le fichier de l'application nommé "buildApp.4DSettings", situé dans le dossier Settings du projet.

Les paramètres par défaut sont utilisés lors de la première utilisation de la boîte de dialogue du Générateur d'application. Le contenu du fichier est mis à jour, si nécessaire, lorsque vous cliquez sur **Construire** ou **Enregistrer les paramètres**. Vous pouvez définir plusieurs autres fichiers de paramètres XML pour le même projet et les utiliser à l'aide de la commande [BUILD APPLICATION](https://doc.4d.com/4Dv17R6/4D/17-R6/BUILD-APPLICATION.301-4311300.en.html).

Les clés XML fournissent des options supplémentaires à celles affichées dans la boîte de dialogue du Générateur d'application. La description de ces clés est détaillée dans le manuel [4D Clés XML BuildApplication](https://doc.4d.com/4Dv18R4/4D/18-R4/4D-XML-Keys-BuildApplication.100-5068211.en.html).

### Fichier d'historique

Lorsqu'une application est créée, 4D génère un fichier journal nommé *BuildApp.log.xml* dans le dossier **Logs** du projet. Le fichier d'historique stocke les informations suivantes pour chaque génération :

- Le début et la fin de la génération des cibles,
- Le nom et le chemin d'accès complet des fichiers générés,
- La date et l'heure de la génération,
- Toutes les erreurs qui se sont produites,
- Tout problème de signature (par exemple, un plug-in non signé).

La vérification de ce fichier peut vous aider à gagner du temps lors des prochaines étapes de déploiement, si vous avez l'intention, par exemple, de notariser votre application.

> Utilisez la commande `Get 4D file (Build application log file)` pour obtenir l'emplacement du fichier journal.



## Nom de l'application et dossier de destination

![](assets/en/Project/buidappstructureProj.png)

Entrez le nom de l'application dans **Nom de l'application**.

Spécifiez le dossier de l'application générée dans le**Dossier de destination**. Si le dossier spécifié n'existe pas déjà, 4D vous créera un dossier *Build*.



## Page de structure compilée

Cet onglet vous permet de générer un fichier de structure compilé standard et/ou un composant compilé :

![](assets/en/Project/appbuilderProj.png)


### Générer une structure compilée

Génère une application contenant uniquement du code compilé.

Cette fonctionnalité crée un fichier *.4dz* dans un dossier *Compiled Database/\<project name>*. Par exemple, si vous avez nommé votre application «MyProject», 4D créera :

*\<destination\>/Compiled Database/MyProject/MyProject.4dz*

> Un fichier .4dz est essentiellement une version compressée du dossier du projet. Les fichiers .4dz peuvent être utilisés par 4D Server, la licence 4D Volume (applications fusionnées) et 4D Developer (4D). La taille compacte et optimisée des fichiers .4dz facilite le déploiement des packages de projet.


#### Inclure les dossiers associés

Lorsque vous cochez cette option, tous les dossiers liés au projet sont recopiés dans le dossier Build en tant que dossiers *Components* et *Resources*. Pour plus d'informations sur ces dossiers, veuillez vous reporter à la [description de l'architecture du projet](Project/architecture.md).


### Générer un composant

Génère un composant compilé à partir de la structure.

Un composant est un fichier de structure 4D standard dans lequel des fonctionnalités spécifiques ont été développées. Une fois le composant configuré et installé dans un autre projet 4D (le projet d'application hôte), ses fonctionnalités sont accessibles depuis le projet hôte.

Si vous avez nommé votre application *Moncomposant*, 4D créera un dossier *Component* contenant le dossier *MyComponent.4dbase* :

*\<destination>/Components/MyComponent.4dbase/MyComponent.4DZ*.

Le dossier *MyComponent.4dbase* contient :
-   fichier *MyComponent.4DZ*
-   Un dossier *Resources* - toutes les ressources associées sont automatiquement copiées dans ce dossier. Les autres composants et/ou dossiers de plugins ne sont pas copiés (un composant ne peut pas utiliser de plug-ins ou d'autres composants).


## Page Application

Cet onglet vous permet de créer une version autonome et monoposte de votre application :

![](assets/en/Project/standaloneProj.png)

### Créer une application autonome

Cochez l'option **Créer une application autonome** et cliquez sur **Générer** pour créer une application autonome (double-cliquable) directement à partir de votre projet d'application.

Les éléments suivants sont requis pour la création :
- 4D Volume Desktop (le moteur de base de données 4D),
- une [licence appropriée](#licenses)

Sous Windows, cette fonctionnalité crée un fichier exécutable (.exe). Sous macOS, il gère la création de progiciels.

Le principe consiste à fusionner le fichier 4D Volume Desktop avec votre fichier de structure compilé. Les fonctionnalités offertes par le fichier 4D Volume Desktop sont liées à l’offre commerciale à laquelle vous avez souscrite. Pour plus d’informations sur ce point, reportez-vous à la documentation commerciale et au site Internet de [4D Sas (http://www.4d.com/)](http://www.4d.com/).

Vous pouvez définir un fichier de données par défaut ou permettre à l'utilisateur de créer et d'utiliser son propre fichier de données (cf. section [Gestion du fichier de données dans les applications finales](https://doc.4d.com/4Dv17R6/4D/17-R6/Data-file-management-in-final-applications.300-4354729.en.html)).

Il est possible d'automatiser la mise à jour des applications monopostes fusionnées moyennant l'utilisation d'une séquence de commandes du langage (cf. section [Mise à jour auto des applications serveur ou monopostes](https://doc.4d.com/4Dv17R6/4D/17-R6/Automatic-updating-of-server-or-single-user-applications.300-4354721.en.html)).

#### Emplacement du 4D Volume Desktop

Afin de créer une application autonome, il convient d'abord de désigner le dossier contenant le fichier 4D Volume Desktop :

*   *sous Windows*, le dossier contient notamment les fichiers 4D Volume Desktop.4DE, 4D Volume Desktop.RSR ainsi que différents fichiers et dossiers nécessaires à son fonctionnement. Ces éléments doivent être placés au premier niveau du dossier sélectionné.
*   *sous macOS*, 4D Volume Desktop est fourni sous la forme d’un progiciel structuré contenant divers fichiers et dossiers génériques.

Pour sélectionner le dossier de 4D Volume Desktop, cliquez sur le bouton **[...]**. Une boîte de dialogue vous permettant de désigner le dossier (Windows) ou le progiciel (macOS) de 4D Volume Desktop apparaît.

Une fois le dossier sélectionné, son chemin d’accès complet est affiché et, s’il contient effectivement 4D Volume Desktop, l’option de génération d’application exécutable est activée.

> Le numéro de version de 4D Volume Desktop doit correspondre à celui du 4D Developer Edition. Par exemple, si vous utilisez 4D Developer v18, vous devez sélectionner un 4D Volume Desktop v18.

#### Mode de liaison des données

Cette option vous permet de sélectionner le mode de liaison entre l'application fusionnée et le fichier de données local. Deux modes de liaison sont disponibles :

*   **Nom de l'application** (défaut) - Dans ce mode, l'application 4D ouvre automatiquement le dernier fichier de données ouvert correspondant à la structure. Cela vous permet de déplacer librement le dossier de l'application sur le disque. Il est conseillé en général pour les applications fusionnées, à moins que vous n'ayez spécifiquement besoin de dupliquer l'application.

*   **Chemin de l'application** - Dans ce mode, l'application 4D fusionnée va lire le contenu du fichier *lastDataPath.xml* et tenter d'ouvrir le fichier de données dont l'attribut "executablePath" correspond au chemin d'accès de l'application. Si cette clé est trouvée, son fichier de données correspondant (défini via son attribut "dataFilePath") est ouvert. Sinon, le dernier fichier de données utilisé est ouvert (mode par défaut).

Pour plus d'informations sur le mode de liaison des données, reportez-vous au paragraphe [Dernier fichier de données ouvert](#last-data-file-opened).


#### Fichiers générés

Lorsque vous cliquez sur le bouton **Générer**, 4D crée automatiquement un dossier **Final Application** dans le **Dossier de destination** défini. Dans le dossier Final Application, se trouve un sous-dossier contenant le nom de l'application spécifiée.

Si vous avez nommé votre application "MyProject", vous trouverez les fichiers suivants dans ce sous-dossier (MyProject):

*   *Sous Windows*
    *   MonAppli.exe qui est votre exécutable et MonAppli.Rsr qui contient les ressources de l’application
    *   Les dossiers 4D Extensions et Resources ainsi que les diverses librairies (DLL), le dossier Native Components et SAS Plugins -fichiers nécessaires au fonctionnement de l’application
    *   Un dossier Database contenant notamment un dossier Resources et un fichier MyProject.4DZ. Ils constituent la structure compilée du projet et son dossier Resources. **Note** : Ce dossier contient également le dossier *Default Data*, s'il a été défini (cf. [Gestion du fichier de données dans les applications finales](#data-file-management-in-final-applicatons)).
    *   (Facultatif) Un dossier Components et/ou un dossier Plugins contenant les fichiers des composants et/ou des plug-ins éventuellement inclus dans le projet. Pour plus d’informations sur ce point, reportez-vous à la section [Plugins et composants](#plugins-and-components).
    *   Un dossier Licences contenant, sous forme de fichier XML, la liste des numéros de licence ayant été intégrés dans l’application. Pour plus d’informations sur ce point, reportez-vous à la section [Licences & Certificat](#licenses-and-certificate).
    *   Les éléments supplémentaires éventuellement ajoutés dans le dossier 4D Volume Desktop (cf. paragraphe [Personnaliser le dossier 4D Volume Desktop](#customizing-4d-volume-desktop-folder)).

    Tous ces éléments doivent être conservés dans le même dossier afin que l’exécutable fonctionne.

*   *macOS*
    -   Un progiciel (package) nommé MyProject.app contenant votre application et tous les éléments nécessaires à son fonctionnement, y compris les plug-ins, composants et licences. Pour plus d’informations sur l’intégration des composants et des plug-ins, reportez-vous à la section [Page Plugins et composants](#plugins-and-components). Pour plus d’informations sur l’intégration des licences, reportez-vous à la [Page Licences & Certificat](#licenses-and-certificate). **Note **: Sous Mac Os, la commande [Fichier application](https://doc.4d.com/4Dv18R4/4D/18-R4/Application-file.301-4982855.en.html) du langage 4D retourne le chemin d’accès du fichier NomApplication (situé dans le dossier Contents:macOS du progiciel) et non celui du fichier .comp (dossier Contents:Resources du progiciel).


#### Personnaliser le dossier 4D Volume Desktop

Lors de la construction de l’application exécutable, 4D duplique le contenu du dossier 4D Volume Desktop dans le dossier *Final Application*. Vous pouvez donc parfaitement personnaliser le contenu du dossier 4D Volume Desktop d’origine en fonction de vos besoins. Vous pouvez, par exemple :

*   Installer une version de 4D Volume Desktop correspondant à une langue spécifique ;
*   Ajouter un dossier *PlugIns* personnalisé ;
*   Personnaliser le contenu du dossier *Resources*.
> Sous Mac Os, 4D Volume Desktop est fourni sous forme de progiciel. Vous devrez tout d’abord afficher son contenu (effectuez **Control+clic** sur son icône) afin de pouvoir le modifier.


#### Emplacements des fichiers Web

Si votre application exécutable est utilisée en tant que serveur Web, les fichiers et dossiers requis par le serveur doivent être installés à des emplacements spécifiques. Ces éléments sont les suivants :

*   fichiers *cert.pem* et *key.pem* (facultatifs) : ces fichiers sont utilisés pour les connexions TLS ainsi que par les commandes de cryptage des données,
*   dossier racine Web par défaut.

Des éléments doivent être installée :

- **Sous Windows** : dans le sous-dossier *Final Application\MonAppli\Database*.
- **Sous macOS** : à côté du progiciel *MonProjet.app*.





## Page Client/Serveur

4D vous permet de générer des applications client/serveur personnalisées, homogènes, multi-plateformes et avec option de mise à jour automatique.

![](assets/en/Project/buildappCSProj.png)

### Qu'est-ce qu'une application Client/Serveur ?

Une application client/serveur est issue de la combinaison de trois éléments :

- Un projet 4D compilé,
- L’application 4D Server,
- L’application 4D Volume Desktop (macOS et/ou Windows).

Une fois générée, une application client/serveur se compose de deux parties homogènes : la partie Serveur (unique), et la partie Cliente (à installer sur chaque poste client).

En outre, l’application client/serveur est personnalisée et son maniement est simplifié :

- Pour lancer la partie serveur, l’utilisateur double-clique simplement sur l’application serveur : il n’est pas nécessaire de sélectionner le fichier projet.
- Pour lancer la partie cliente, l’utilisateur double-clique simplement sur l’application cliente, qui se connecte directement à l’application serveur : il n’est pas nécessaire de choisir un serveur dans une boîte de dialogue de connexion. Le client cible le serveur soit via son nom, lorsque client et serveur sont sur le même sous-réseau, soit via son adresse IP, à définir via la clé XML `IPAddress` dans le fichier buildapp.4DSettings. Si la connexion échoue, [des mécanismes alternatifs spécifiques peuvent être mis en place](#management-of-client-connections). Il est également possible de “forcer” l’affichage de la boîte de dialogue de connexion standard en maintenant la touche **Option** (macOS) ou **Alt** (Windows) enfoncée lors du lancement de l’application cliente. Seule la partie cliente peut se connecter à la partie serveur correspondante. Si un utilisateur tente de se connecter à la partie serveur à l’aide d’une application 4D standard, un message d’erreur est retourné et la connexion est impossible.
- Une application client/serveur peut être paramétrée de telle sorte que la partie cliente [puisse être mise à jour automatiquement via le réseau](#copy-of-client-applications-in-the-server-application).
- Il est également possible d'automatiser la mise à jour de la partie serveur moyennant l'utilisation d'une séquence de commandes du langage ([SET UPDATE FOLDER](https://doc.4d.com/4Dv17R6/4D/17-R6/SET-UPDATE-FOLDER.301-4311308.en.html) et [RESTART 4D](https://doc.4d.com/4Dv17R6/4D/17-R6/RESTART-4D.301-4311311.en.html)).



### Construire application serveur

Cochez cette option pour générer la partie serveur de votre application pendant la phase de construction. Vous devez désigner sur votre disque l’emplacement de l’application 4D Server à utiliser. Ce 4D Server doit correspondre à la plate-forme courante (qui sera également la plate-forme de l’application du serveur).

#### Emplacement de 4D Server

Cliquez sur le bouton **[...]** et utilisez la boîte de dialogue *Rechercher un dossier* pour localiser l'application 4D Server. Sous macOS, vous devez sélectionner directement le package 4D Server.

#### Version courante

Utilisée pour indiquer le numéro de version courante de l'application générée. Vous pourrez par la suite accepter ou refuser les connexions des applications clientes en fonction de leur numéro de version. The interval of compatibility for client and server applications is set using specific [XML keys](#build-application-settings)).

#### Data linking mode

This option lets you choose the linking mode between the merged application and the local data file.

#### Mode de liaison des données

Cette option vous permet de sélectionner le mode de liaison entre l'application fusionnée et le fichier de données local. Deux modes de liaison sont disponibles :

*   **Nom de l'application** (défaut) - Dans ce mode, l'application 4D ouvre automatiquement le dernier fichier de données ouvert correspondant à la structure. Cela vous permet de déplacer librement le dossier de l'application sur le disque. Il est conseillé en général pour les applications fusionnées, à moins que vous n'ayez spécifiquement besoin de dupliquer l'application.

*   **Chemin de l'application** - Dans ce mode, l'application 4D fusionnée va lire le contenu du fichier *lastDataPath.xml* et tenter d'ouvrir le fichier de données dont l'attribut "executablePath" correspond au chemin d'accès de l'application. Si cette clé est trouvée, son fichier de données correspondant (défini via son attribut "dataFilePath") est ouvert. Sinon, le dernier fichier de données utilisé est ouvert (mode par défaut).

Pour plus d'informations sur le mode de liaison des données, reportez-vous au paragraphe [Dernier fichier de données ouvert](#last-data-file-opened).


### Construire application cliente

Cochez cette option pour générer la partie cliente de votre application lors de la phase de construction.

#### 4D Volume Desktop

Vous devez désigner sur votre disque l’emplacement de l’application 4D Volume Desktop à utiliser. Ce 4D Volume Desktop doit correspondre à la plate-forme courante (qui sera également la plate-forme de l’application cliente). Si vous souhaitez générer une version de l’application cliente pour la plate-forme “concurrente”, vous devez répéter l'opération en utilisant une application 4D tournant sur cette plate-forme. Cette étape est nécessaire uniquement pour la version initiale de l'application cliente car les mises à jour suivantes pourront être gérées directement depuis une seule plate-forme via le mécanisme des mises à jour automatiques. Vous devez désigner sur votre disque l’emplacement de l’application 4D Volume Desktop à utiliser. Ce 4D Volume Desktop doit correspondre à la plate-forme courante (qui sera également la plate-forme de l’application cliente). Si vous souhaitez générer une version de l’application cliente pour la plate-forme “concurrente”, vous devez répéter l'opération en utilisant une application 4D tournant sur cette plate-forme. Cette étape est nécessaire uniquement pour la version initiale de l'application cliente car les mises à jour suivantes pourront être gérées directement depuis une seule plate-forme via le mécanisme des mises à jour automatiques. Pour plus d’informations sur ce point, reportez-vous au paragraphe [Personnaliser les dossiers 4D Server et/ou 4D Client](#customizing-4d-server-and-or-4d-client-folders).

> Le numéro de version de 4D Volume Desktop doit correspondre à celui du 4D Developer Edition. Par exemple, si vous utilisez 4D Developer v18, vous devez sélectionner un 4D Volume Desktop v18.

Si vous souhaitez que l'application cliente se connecte au serveur via une adresse spécifique (autre que le nom du serveur publié sur le sous-réseau), vous devez utiliser la clé XML `IPAddress` dans le fichier buildapp.4DSettings. Pour plus d'informations sur ce fichier, reportez-vous à la description de la commande`BUILD APPLICATION`. Vous pouvez également mettre en place des mécanismes spécifiques en cas d'échec de la connexion. Les différents scénarios proposés sont décrits dans la section [Gestion de la connexion des applications clientes](#management-of-client-connections).

#### Copie des applications clientes dans l'application serveur

Les options de cette zone permettent de mettre en place le mécanisme de mise à jour des parties clientes de vos applications client/serveur via le réseau à chaque nouvelle version de l’application générée.

- **Permettre la mise à jour automatique de l’application cliente Windows** - Cochez ces options pour que votre application client/serveur Windows bénéficie du mécanisme de mise à jour automatique des parties clientes via le réseau.
- **Permettre la mise à jour automatique de l’application cliente Macintosh ** - Cochez ces options pour que votre application client/serveur Macintosh bénéficie du mécanisme de mise à jour automatique des parties clientes via le réseau.

*   **Permettre la mise à jour automatique de l’application cliente Macintosh** - Si vous souhaitez créer une application cliente multi-plate-forme, vous devez en outre désigner sur votre disque l’emplacement de l’application 4D Volume Desktop correspondant à la plate-forme “concurrente” de la plate-forme de génération.

    Par exemple, si vous construisez votre application sous Windows, vous devez désigner à l’aide du bouton **[...]** l’application 4D Volume Desktop Mac Os (fournie sous forme de package).



#### Comment proposer une mise à jour ?

Dans la pratique, la proposition de mise à jour des applications clientes découle automatiquement de la mise à jour de l’application serveur.

Le principe est le suivant : lors de la génération d’une nouvelle version de l’application client-serveur depuis le générateur d’applications, la nouvelle partie cliente est copiée sous forme compressée dans le sous-dossier **Upgrade4DClient** du dossier **NomApplication** Server (sous macOS, ces dossiers sont inclus dans le progiciel serveur). Si vous avez suivi le processus de génération d’une application cliente multi-plate-forme, un fichier *. 4darchive* de mise à jour est disponible pour chaque plate-forme :

Pour provoquer la mise à jour des applications clientes, il suffit de remplacer l’ancienne version de l’application serveur par la nouvelle puis de l’exécuter. Le reste du processus est automatique.

Côté client, au moment où l’“ancienne” application cliente tente de se connecter à l’application serveur mise à jour, une boîte de dialogue s’affiche sur le poste client, lui indiquant qu’une nouvelle version est disponible. L’utilisateur peut mettre sa version à jour ou annuler la boîte de dialogue.

*   Si l’utilisateur clique sur **OK**, la nouvelle version est téléchargée sur le poste client via le réseau. A l’issue du téléchargement, l’ancienne application client quitte, la nouvelle est lancée et se connecte au serveur. A l’issue du téléchargement, l’ancienne application client quitte, la nouvelle est lancée et se connecte au serveur.
*   Si l’utilisateur clique sur **Annuler**, la mise à jour est annulée ; si l’ancienne version de l’application cliente n’appartient pas à l’intervalle des numéros de version acceptés par le serveur (cf. paragraphe suivant), l’application quitte et la connexion est impossible. Sinon (par défaut), la connexion est établie.

#### Comment forcer la mise à jour ?

Dans certains cas, vous pourrez souhaiter que les applications clientes ne puissent pas annuler le téléchargement des mises à jour. Par exemple, si vous avez utilisé une nouvelle version de l’application source 4D Server, il est impératif que la nouvelle version de l’application cliente soit installée sur chaque poste client.

Pour forcer la mise à jour, il vous suffit d’exclure les versions courantes des applications clientes (N-1 et précédentes) de l’intervalle des numéros de version compatibles avec l’application serveur. Dans ce cas, le mécanisme de mise à jour n’autorisera pas la connexion des applications clientes non mises à jour. Par exemple, si la nouvelle version de l’application client-serveur est 6, vous pouvez stipuler que toute application cliente ayant un numéro de version strictement inférieur à 6 ne sera pas autorisé à se connecter.

Le [numéro de version courante](#current_version) est défini dans la page Client/Serveur du générateur d’application. Les intervalles de numéros autorisés sont définis dans le projet d’application via des [clés XML](#build-application-settings) spécifiques.


#### En cas d’erreur

Si 4D ne peut pas effectuer la mise à jour de l’application cliente, le poste client affiche le message d’erreur suivant : “La mise à jour de l’application cliente a échoué. L’application va maintenant quitter.”

Les causes possibles de cette erreur sont multiples. Lorsque vous rencontrez ce message, il est conseillé de contrôler en premier lieu les paramètres suivants :

*   **Chemins d’accès** : vérifiez la validité des chemins d’accès définis dans le projet d’application via la boîte de dialogue du Générateur d’applications ou via des clés XML (par exemple *ClientMacFolderToWin*). Vérifiez en particulier les chemins d’accès aux versions de 4D Volume Desktop.
*   **Privilèges lecture/écriture** : sur la machine cliente, vérifiez que l’utilisateur courant dispose de droits d’accès en écriture pour l’application cliente mise à jour.


### Fichiers générés

A l’issue du processus de génération d’une application client-serveur, vous devez trouver dans le dossier de destination un nouveau dossier nommé **Client Server executable**. Ce dossier contient deux sous-dossiers, *\<ApplicationName>Client* et *\<ApplicationName>Server*.
> Ces dossiers ne sont pas générés si une erreur est survenue. Dans ce cas, ouvrez le [fichier d’historique](#log-file) pour connaître la cause de l’erreur.

Le dossier *\<ApplicationName>Client* contient la partie cliente de l’application correspondant à la plate-forme d’exécution du générateur d’application. Ce dossier doit être installé sur chaque poste client. Le dossier *\<ApplicationName>Server* contient la partie serveur de l'application.

Le contenu de ces dossiers diffère en fonction de la plate-forme courante :

*   *Sous Windows*, chaque dossier contient le fichier exécutable de l’application, nommé *\<ApplicationName>Client.exe* pour la partie cliente et *\<ApplicationName>Server.exe* pour la partie serveur, ainsi que les fichiers .rsr correspondants. Les dossiers contiennent également divers fichiers et dossiers nécessaires au fonctionnement des applications et les éléments personnalisés éventuellement placés dans les dossiers 4D Volume Desktop et 4D Server d’origine.
*   *Sous macOS*, chaque dossier contient uniquement le progiciel de l’application, nommé \<ApplicationName> Client pour la partie cliente et \<ApplicationName> Server pour la partie serveur. Chaque progiciel contient tous les éléments nécessaires à son fonctionnement. Sous macOS, un progiciel est lancé via un double-clic.

    > Les progiciels macOS générés contiennent les mêmes éléments que les sous-dossiers Windows. You can display their contents (**Control+click** on the icon) in order to be able to modify them.

If you checked the “Allow automatic update of client application” option, an additional subfolder called *Upgrade4DClient* is added in the *\<ApplicationName>Server* folder/package. </blockquote></li> </ul>

Si vous avez coché l’option “Permettre la mise à jour automatique de l’application cliente”, un sous-dossier supplémentaire nommé *Upgrade4DClient* est ajouté dans le dossier/progiciel *\<ApplicationName>Server*. Ce sous-dossier contient l’application cliente au format macOS et/ou Windows sous forme de fichier compressé. Ce fichier est utilisé lors de la mise à jour automatique des applications clientes.


#### Emplacements des fichiers Web

Si la partie serveur et/ou la partie cliente de votre application exécutable est utilisée en tant que serveur Web, les fichiers et dossiers requis par le serveur doivent être installés à des emplacements spécifiques. Ces éléments sont les suivants :

- fichiers *cert.pem* et *key.pem* (facultatifs) : ces fichiers sont utilisés pour les connexions SSL ainsi que par les commandes de cryptage des données,
- Dossier racine Web (DossierWeb) par défaut.

Des éléments doivent être installée :
*   **Sous Windows**
    *   **Application serveur** : dans le sous-dossier *Client Server executable\ \<ApplicationName>Server\Server Database*.
    *   **Application cliente** : dans le sous-dossier *Client Server executable\ \<ApplicationName>Client*.

*   **sous macOS**
    *   **Application serveur** : à côté du progiciel *\<ApplicationName>Server*.
    *   **Application cliente** : à côté du progiciel *\<ApplicationName>Client*.


### Intégrer une structure compilée dans la partie cliente

4D permet d'intégrer une structure compilée dans une application cliente. Cette fonctionnalité peut être utilisée, par exemple, pour fournir aux utilisateurs une application "portail" donnant accès aux différentes applications serveur, via la commande `OPEN DATABASE` exécutant un fichier `.4dlink`.

Pour activer cette fonctionnalité, ajoutez les clés `DatabaseToEmbedInClientWinFolder` et/ou `DatabaseToEmbedInClientMacFolder` dans le fichier de configuration *buildApp*. Lorsque l'une de ces clés est présente, le processus de génération de l'application cliente génère une application monoposte : la structure compilée, au lieu du fichier *EnginedServer.4Dlink*, est placée dans le dossier "Database".

- Si un dossier "Data" par défaut existe dans l'application monoposte, une licence est intégrée.
- Si un dossier "Data" par défaut n'existe pas dans l'application monoposte, elle sera exécutée sans le fichier de données et sans licence.

Le scénario standard est le suivant :

1. Dans la boîte de dialogue du Générateur d'application, sélectionnez l'option "Générer une structure compilée" pour produire un .4DC ou un .4DZ pour utiliser l'application en monoposte.
2. Dans le fichier *buildApp.4DSettings* de l'application client-serveur, utilisez la ou les clés xml suivantes pour indiquer le chemin du dossier contenant l'application compilée monoposte :
    - `DatabaseToEmbedInClientWinFolder`
    - `DatabaseToEmbedInClientMacFolder`
3. Générez l'application client-serveur. Cela produira les effets suivants :
    - le dossier de l'application monoposte est copié intégralement dans le dossier "Database" du client fusionné
    - le fichier *EnginedServer.4Dlink* du dossier "Database" n'est pas généré
    - les fichiers .4DC, .4DZ, .4DIndy de la copie de l'application monoposte sont renommés à l'aide du client fusionné
    - la clé `PublishName` n'est pas copiée dans le *info.plist* du client fusionné
    - si l'application monoposte ne possède pas de dossier "Data" par défaut, le client fusionné sera exécuté sans données.

Les fonctionnalités de mise à jour automatique de 4D Server (clé [CurrentVers](#current-version), commande `SET UPDATE FOLDER`, etc.) fonctionnent avec une application monoposte, comme avec une application distante standard. Lors de la connexion, l'application monoposte compare sa clé `CurrentVers` à la plage de version 4D Server. Si elle se trouve en dehors de plage, l'application cliente monoposte mise à jour est téléchargée depuis le serveur et l'Updater lance le processus de mise à jour locale.


### Personnalisation des noms de dossier de cache client et/ou serveur

Les dossiers de cache client et serveur sont utilisés pour stocker des éléments partagés tels que des ressources ou des composants. Ils sont nécessaires pour gérer les échanges entre le serveur et les clients distants. Les applications client/serveur utilisent les chemins d'accès par défaut pour les dossiers de cache système client et serveur.

Dans certains cas spécifiques, vous devrez personnaliser les noms de ces dossiers pour implémenter des architectures spécifiques (voir ci-dessous). 4D vous fournit les clés `ClientServerSystemFolderName` et `ServerStructureFolderName` à définir dans le fichier de paramètres *buildApp*.


#### Dossier de cache client

La personnalisation du nom du dossier de cache côté client peut être utile lorsque votre application cliente est utilisée pour se connecter à plusieurs serveurs fusionnés qui sont similaires mais qui utilisent des ensembles de données différents. Dans ce cas, pour enregistrer plusieurs téléchargements inutiles de ressources locales identiques, vous pouvez utiliser le même dossier de cache local personnalisé.

- Configuration par défaut (*pour chaque connexion à un serveur, un dossier cache spécifique est téléchargé/mis à jour*) :

![](assets/en/Admin/cachea.png)

- À l'aide de la clé `ClientServerSystemFolderName` (*un seul dossier de cache est utilisé pour tous les serveurs*) :

![](assets/en/Admin/cacheb.png)


#### Dossier de cache du serveur

La personnalisation du nom du dossier de cache côté serveur est utile lorsque vous exécutez plusieurs applications serveur identiques créées avec différentes versions de 4D sur le même ordinateur. Si vous souhaitez que chaque serveur utilise son propre ensemble de ressources, vous devez personnaliser le dossier de cache du serveur.

- Configuration par défaut (*les mêmes applications serveur partagent le même dossier de cache*) :

![](assets/en/Admin/cacheServera.png)

- À l'aide de la clé `ServerStructureFolderName` (*un dossier de cache dédié est utilisé pour chaque application serveur*) :

![](assets/en/Admin/cacheServerb.png)




## Page Plugins et composants

Dans cet onglet, définissez chaque [plug-in](Concepts/plug-ins.md) et chaque [composant](Concepts/components.md) que vous utiliserez dans votre application autonome ou client/serveur.

La page liste les éléments chargés par l'application 4D courante :

![](assets/en/Project/buildapppluginsProj.png)

*    La colonne **Actif** indique les éléments qui seront intégrés dans l’application générée. Par défaut, tous les éléments sont inclus. Pour exclure un plug-in ou un composant, désélectionnez la case qui lui est associée.

*   Colonne **Plugins et composants** - Affiche le nom du plug-in/composant.

*   Colonne **ID** - Affiche le numéro d'identification du plug-in/composant (le cas échéant).

*   La colonne **Type** indique le type de l’élément : plug-in ou composant.

Si vous souhaitez intégrer d’autres plug-ins ou composants dans l’application exécutable, il vous suffit de les placer dans un dossier **PlugIns** ou **Components** à côté de l’application 4D Volume Desktop ou de l’application 4D Server. Le mécanisme de copie du contenu du dossier de l’application source (cf. paragraphe [Personnaliser le dossier 4D Volume Desktop](#customizing-4d-volume-desktop-folder)) permet d’intégrer tout type de fichier à l’application exécutable.

En cas de conflit entre deux versions différentes d’un même plug-in (l’une chargée par 4D et l’autre placée dans le dossier de l’application source), la priorité revient au plug-in installé dans le dossier de 4D Volume Desktop/4D Server. En revanche, la présence de deux instances d’un même composant empêchera l’ouverture de l’application.
> L’utilisation de plug-ins et/ou de composants compilés dans une version de déploiement nécessite des numéros de licence adéquats.






## Page Licences & Certificat

La page Licences & Certificat vous permet de :

*   spécifier le ou les numéro(s) de licence que vous souhaitez intégrer dans votre application exécutable monoposte
*   signer l'application à l'aide d'un certificat sous macOS.

![](assets/en/Admin/buildappCertif.png)

### Licences

Cet onglet affiche la liste des licences de déploiement disponibles que vous pouvez intégrer dans votre application. Par défaut, la liste est vide. Vous devez explicitement ajouter votre licence *4D Developer Professional* ainsi que chaque licence* 4D Desktop Volume* liée à utiliser dans l’application générée. Vous pouvez ajouter un numéro 4D Developer Professional et ses licences associées autres que ceux en cours d’utilisation.

Pour ajouter ou supprimer des licences, utilisez les boutons **[+]** et **[-]** situés en bas de la fenêtre.

Lorsque vous cliquez sur le bouton \[+], une boîte de dialogue d’ouverture de document apparaît, affichant par défaut le contenu du dossier *[Licenses]* de votre poste. Pour plus d'informations sur l'emplacement de ce dossier, reportez-vous à la commande [Get 4D folder](https://doc.4d.com/4Dv17R6/4D/17-R6/Get-4D-folder.301-4311294.en.html).

Vous devez désigner les fichiers contenant votre licence Developer et ainsi que vos licences de déploiement. Ces fichiers ont été générés ou mis à jour au moment de l’acquisition de la licence *4D Developer Professional* et des licences *4D Desktop Volume*.

Une fois que vous avez sélectionné un fichier, la liste indique les caractéristiques de la licence qu’il contient.

*   **N° Licence** : numéro de licence du produit
*   **Licence** : nom du produit
*   **Date d'expiration** : date d'expiration de la licence (le cas échéant)
*   **Chemin d'accès** : emplacement sur le disque

Si la licence est invalide, un message vous le signale.

Vous pouvez désigner autant de fichiers valides que vous voulez. Lors de la génération de l’application exécutable, 4D utilisera les licences les plus appropriées.
> Des licences "R" dédiées sont requises pour générer des applications basées sur des versions "R-release" (les numéros de licence des produits "R" débutent par "R-4DDP").

A l’issue de la génération, un nouveau fichier de licence de déploiement est automatiquement inclus dans un dossier Licences placé à côté de l’application exécutable (Windows) ou dans le progiciel (macOS).


### Certification des applications sous OS X

Le Générateur d’application permet de signer les applications 4D fusionnées sous macOS (applications monoposte, 4D Server et parties clientes sous macOS). Signer une application permet d’autoriser son exécution par la fonctionnalité Gatekeeper de macOS lorsque l’option "Mac App Store et Développeurs identifiés" est sélectionnée (cf. "A propos de Gatekeeper" ci-dessous).

- Cochez l'option **Signer l’application** pour inclure la certification dans le processus de génération de l’application pour macOS :

![](assets/en/Admin/buildapposxcertProj.png)

L'option est affichée sous Windows et macOS mais n’est prise en compte que pour les versions macOS.

*   **Nom du certificat** : saisissez dans cette zone le nom de votre certificat développeur validé par Apple. Le nom d’un certificat est généralement le nom du certificat dans l’utilitaire Trousseau d’accès (la partie en rouge dans l'exemple suivant) :

![](assets/en/Project/certificate.png)

Pour obtenir un certificat de développeur auprès d’Apple, Inc., vous pouvez utiliser les commandes du menu Trousseaux d’accès ou vous connecter à la page suivante : [http://developer.apple.com/library/mac/#documentation/Security/Conceptual/CodeSigningGuide/Procedures/Procedures.html](http://developer.apple.com/library/mac/#documentation/Security/Conceptual/CodeSigningGuide/Procedures/Procedures.html).
> Le certificat requiert la présence de l’utilitaire codesign d’Apple. Cet utilitaire est fourni par défaut et se trouve généralement dans le dossier "/usr/bin/". En cas d’erreur, vérifiez que cet utilitaire est présent sur votre disque.

* **Générer un certificat auto-signé** - exécute le «Certificate Assistant» qui vous permet de générer un certificat auto-signé. Si vous ne disposez pas d'un certificat de développeur Apple, vous devez fournir un certificat auto-signé. Avec ce certificat, aucun message d'alerte ne s'affiche si l'application est déployée en interne. Si l'application est déployée en externe (c'est-à-dire via http ou e-mail), au lancement, macOS affiche un message d'alerte indiquant que le développeur de l'application n'est pas identifié. L'utilisateur peut "forcer" l'ouverture de l'application. <p>Dans le «Certificate Assistant», veillez à sélectionner les options appropriées : ![](assets/en/Admin/Cert1.png) ![](assets/en/Admin/Cert2.png)

> 4D recommande de souscrire au programme Apple Developer Program pour accéder aux "Developer Certificates" nécessaires à la notarisation des applications (voir ci-dessous).



#### A propos de Gatekeeper

Gatekeeper est une fonction de sécurité d’OS X permettant de contrôler l’exécution des applications téléchargées depuis Internet. Si une application téléchargée ne provient pas de l’Apple Store ou n’est pas signée, elle est rejetée et ne peut être lancée.

L'option **Signer l'application** du Générateur d’application de 4D permet de générer des applications compatibles avec cette option par défaut.


#### À propos de la notarisation

La notarisation des applications est fortement recommandée par Apple à partir de macOS 10.14.5 (Mojave) et 10.15 (Catalina), car les applications non notariées déployées via Internet sont bloquées par défaut.

Sous 4D v18, les [fonctionnalités de signature intégrées](#os-x-signing-certificate) ont été mises à jour pour répondre à toutes les exigences d'Apple pour permettre l'utilisation du service de notarisation d'Apple. La notarisation elle-même doit être réalisée par le développeur et est indépendante de 4D (à noter également qu'elle nécessite l'installation de Xcode). Veuillez vous référer à [ce post du blog 4D](https://blog.4d.com/how-to-notarize-your-merged-4d-application/) qui fournit une description, par étapes, du processus de notarisation.

Pour plus d'informations sur le concept de notarisation, veuillez consulter [cette page sur le site Apple developer](https://developer.apple.com/documentation/xcode/notarizing_your_app_before_distribution/customizing_the_notarization_workflow).

## Personnaliser les icônes d’une application

4D associates a default icon with stand-alone, server, and client applications, however you can customize the icon for each application.

*   **macOs** - When building a double-clickable application, 4D handles the customizing of the icon. In order to do this, you must create an icon file (icns type), prior to building the application file, and place it next to the project folder.
> Apple, Inc. provides a specific tool for building *icns* icon files (for more information, please refer to [Apple documentation](https://developer.apple.com/library/archive/documentation/GraphicsAnimation/Conceptual/HighResolutionOSX/Optimizing/Optimizing.html#//apple_ref/doc/uid/TP40012302-CH7-SW2)).

    Your icon file must have the same name as the project file and include the *.icns* extension. 4D automatically takes this file into account when building the double-clickable application (the *.icns* file is renamed *ApplicationName.icns* and copied into the Resources folder; the *CFBundleFileIcon* entry of the *info.plist* file is updated).

*   **Windows** - When building a double-clickable application, 4D handles the customizing of its icon. In order to do this, you must create an icon file (*.ico* extension), prior to building the application file, and place it next to the project folder.

    Your icon file must have the same name as the project file and include the *.ico* extension. 4D automatically takes this file into account when building the double-clickable application.

You can also set specific [XML keys](https://doc.4d.com/4Dv17R6/4D/17-R6/4D-XML-Keys-BuildApplication.100-4465602.en.html) in the buildApp.4DSettings file to designate each icon to use. The following keys are available:

- RuntimeVLIconWinPath
- RuntimeVLIconMacPath
- ServerIconWinPath
- ServerIconMacPath
- ClientMacIconForMacPath
- ClientWinIconForMacPath
- ClientMacIconForWinPath
- ClientWinIconForWinPath



## Management of data file(s)

### Opening the data file

When a user launches a merged application or an update (single-user or client/server applications), 4D tries to select a valid data file. Several locations are examined by the application successively.

The opening sequence for launching a merged application is:

1. 4D tries to open the last data file opened, [as described below](#last-data-file-opened) (not applicable during initial launch).
2. If not found, 4D tries to open the data file in a default data folder next to the .4DZ file in read-only mode.
3. If not found, 4D tries to open the standard default data file (same name and same location as the .4DZ file).
4. If not found, 4D displays a standard "Open data file" dialog box.


### Last data file opened

#### Path of last data file
Any standalone or server applications built with 4D stores the path of the last data file opened in the application's user preferences folder.

The location of the application's user preferences folder corresponds to the path returned by the following statement:

```4d
userPrefs:=Get 4D folder(Active 4D Folder)
```

The data file path is stored in a dedicated file, named *lastDataPath.xml*.

Thanks to this architecture, when you provide an update of your application, the local user data file (last data file used) is opened automatically at first launch.

This mechanism is usually suitable for standard deployments. However, for specific needs, for example if you duplicate your merged applications, you might want to change the way that the data file is linked to the application (described below).

#### Configuring the data linking mode

With your compiled applications, 4D automatically uses the last data file opened. By default, the path of the data file is stored in the application's user preferences folder and is linked to the **application name**.

This may be unsuitable if you want to duplicate a merged application intended to use different data files. Duplicated applications actually share the application's user preferences folder and thus, always use the same data file -- even if the data file is renamed, because the last file used for the application is opened.

4D therefore lets you link the data file path to the application path. Dans ce cas, le fichier de données sera relié via un chemin spécifique et ne sera plus simplement le dernier fichier utilisé. You therefore link your data **by application path**.

This mode allows you to duplicate your merged applications without breaking the link to the data file. However, with this option, if the application package is moved on the disk, the user will be prompted for a data file, since the application path will no longer match the "executablePath" attribute (after a user has selected a data file, the *lastDataPath.xml* file is updated accordingly).


*Duplication when data linked by application name:* ![](assets/en/Project/datalinking1.png)

*Duplication when data linked by application path:* ![](assets/en/Project/datalinking2.png)

You can select the data linking mode during the build application process. Vous pouvez :

- Use the [Application page](#application) or [Client/Server page](#client-server) of the Build Application dialog box.
- Use the **LastDataPathLookup** XML key (single-user application or server application).


### Defining a default data folder

4D allows you to define a default data file at the application building stage. Au premier lancement de l'application, en l'absence de fichier local (cf. [séquence de lancement décrite ci-dessus](#opening-the-data-file)), le fichier de données par défaut est automatiquement ouvert silencieusement en mode lecture seule par 4D. Cela vous donne un meilleur contrôle sur la création et/ou l'ouverture des fichiers de données lors du premier lancement d'une application fusionnée.

More specifically, the following cases are covered:

- Avoiding the display of the 4D "Open Data File" dialog box when launching a new or updated merged application. You can detect, for example at startup, that the default data file has been opened and thus execute your own code and/or dialogs to create or select a local data file.
- Allowing the distribution of merged applications with read-only data (for demo applications, for instance).


To define and use a default data file:

- You provide a default data file (named "Default.4DD") and store it in a default folder (named "Default Data") inside the application project folder. This file must be provided along with all other necessary files, depending on the project configuration: index (.4DIndx), external Blobs, journal, etc. Il est de votre responsabilité de livrer un fichier de données par défaut valide. Note however that since a default data file is opened in read-only mode, it is recommended to uncheck the "Use Log File" option in the original structure file before creating the data file.
- When the application is built, the default data folder is integrated into the merged application. All files within this default data folder are also embedded.

The following graphic illustrates this feature:

![](assets/en/Project/DefaultData.png)

When the default data file is detected at first launch, it is silently opened in read-only mode, thus allowing you to execute any custom operations that do not modify the data file itself.


## Management of client connection(s)

The management of connections by client applications covers the mechanisms by which a merged client application connects to the target server, once it is in its production environment.

### Connection scenario

The connection procedure for merged client applications supports cases where the dedicated server is not available. The startup scenario for a 4D client application is the following:

- The client application tries to connect to the server using the discovery service (based upon the server name, broadcasted on the same subnet).  
  OR  
  If valid connection information is stored in the "EnginedServer.4DLink" file within the client application, the client application tries to connect to the specified server address.
- If this fails, the client application tries to connect to the server using information stored in the application's user preferences folder ("lastServer.xml" file, see last step).
- If this fails, the client application displays a connection error dialog box.
    - If the user clicks on the **Select...** button (when allowed by the 4D developer at the build step, see below), the standard "Server connection" dialog box is displayed.
    - If the user clicks on the **Quit** button, the client application quits.
- If the connection is successful, the client application saves this connection information in the application's user preferences folder for future use.

### Storing the last server path

The last used and validated server path is automatically saved in a file named "lastServer.xml" in the application's user preferences folder. This folder is stored at the following location:

```4d
userPrefs:=Get 4D folder(Active 4D Folder)
```

This mechanism addresses the case where the primary targeted server is temporary unavailable for some reason (maintenance mode for example). Lorsque ce cas se produit pour la première fois, la boîte de dialogue de sélection de serveur est affichée (si elle est autorisée, cf. ci-dessous) et l'utilisateur peut manuellement sélectionner un serveur alternatif, dont le chemin est alors sauvegardé si la connexion est établie et validée. Any subsequent unavailability would be handled automatically through the "lastServer.xml" path information.

> - When client applications cannot permanently benefit from the discovery service, for example because of the network configuration, it is recommended that the developer provide a host name at build time using the [IPAddress](https://doc.4d.com/4Dv17R6/4D/17-R6/IPAddress.300-4465710.en.html) key in the "BuildApp.4DSettings" file. Le mécanisme de sauvegarde du chemin du dernier serveur est conçu pour les cas d'indisponibilité temporaire uniquement.  
> - Pressing the **Alt/Option** key at startup to display the server selection dialog box is still supported in all cases.



### Availability of the server selection dialog box in case of error

You can choose whether or not to display the standard server selection dialog box on merged client applications when the server cannot be reached. The configuration depends on the value of the [ServerSelectionAllowed](https://doc.4d.com/4Dv17R6/4D/17-R6/ServerSelectionAllowed.300-4465714.en.html) XML key on the machine where the application was built:

- **Display of an error message with no access possible to the server selection dialog box**. Fonctionnement par défaut. The application can only quit.  
  `ServerSelectionAllowed`: **False** or key omitted ![](assets/en/Project/connect1.png)

- **Display of an error message with access to the server selection dialog box possible**. The user can access the server selection window by clicking on the **Select...** button.   
  `ServerSelectionAllowed`: **True** ![](assets/en/Project/connect2.png) ![](assets/en/Project/connect3.png)
