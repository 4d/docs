---
id: building
title: Générer un package projet
---

4D Developer inclut un générateur d’application final pour créer un package de projet (version finale). Ce générateur simplifie le processus de finalisation et de déploiement des applications compilées 4D. Il gère automatiquement les fonctionnalités spécifiques de différents systèmes d'exploitation et facilite le déploiement d'applications client-serveur.

Le générateur d'applications vous permet de :

*   Générer une base de données compilée, sans code interprété,
*   Générer une application autonome exécutable, c'est-à-dire fusionnée avec 4D Volume Desktop, le moteur de base de données 4D,
*   Générer différentes applications à partir de la même base de données compilée via un projet XML,
*   Générer des applications client-serveur homogènes,
*   Générer des applications client-serveur avec mise à jour automatique des composants client et serveur.
*   Enregistrer vos paramètres de génération pour une utilisation ultérieure (bouton *Enregistrer les paramètres*).



## Aperçu du générateur d'application

Générer un package de projet peut être réalisée à l'aide de :

- soit la commande [BUILD APPLICATION](https://doc.4d.com/4Dv17R6/4D/17-R6/BUILD-APPLICATION.301-4311300.en.html),
- soit la[ fenêtre Générateur d'application](#application-builder).

Pour afficher la boîte de dialogue du générateur d'application, sélectionnez **Développement** > **Générer l'application...** dans la barre de menus.

![](assets/en/Project/buildappProj.png)

La boîte de dialogue du générateur d'application comprend plusieurs pages accessibles via des onglets :

![](assets/en/Project/appbuilderProj.png)


La génération ne peut s'effectuer qu'une fois la base de données compilée. Si vous sélectionnez cette commande sans avoir préalablement compilé la base de données ou si le code compilé ne correspond pas au code interprété, une boîte de dialogue d'avertissement apparaît indiquant que la base de données doit être (re) compilée.


### Paramètres du générateur d'application

Chaque paramètre de générateur d'application est stocké en tant que clé XML dans le fichier de l'application nommé "buildApp.4DSettings", situé dans le dossier Settings de la base de données.

Les paramètres par défaut sont utilisés lors de la première utilisation de la boîte de dialogue du Générateur d'application. Le contenu du fichier est mis à jour, si nécessaire, lorsque vous cliquez sur **Construire** ou **Enregistrer les paramètres**. Vous pouvez définir plusieurs autres fichiers de paramètres XML pour le même projet et les utiliser à l'aide de la commande [BUILD APPLICATION](https://doc.4d.com/4Dv17R6/4D/17-R6/BUILD-APPLICATION.301-4311300.en.html).

Les clés XML fournissent des options supplémentaires à celles affichées dans la boîte de dialogue du Générateur d'application. La description de ces clés est détaillée dans le manuel [4D Clés XML BuildApplication](https://doc.4d.com/4Dv17R6/4D/17-R6/4D-XML-Keys-BuildApplication.100-4465602.en.html).

### Fichier d'historique

Lors de la génération d’une application, 4D génère un fichier d'historique dans le dossier **Logs**. Le fichier d'historique stocke les informations suivantes pour chaque génération :
- Le début et la fin de la génération des cibles,
- Le nom et le chemin d'accès complet des fichiers générés,
- La date et l'heure de la génération,
- Toutes les erreurs qui se sont produites.



## Nom de l'application et dossier de destination

![](assets/en/Project/buidappstructureProj.png)

Entrez le nom de l'application dans **Nom de l'application**.

Spécifiez le dossier de l'application générée dans le**Dossier de destination**. Si le dossier spécifié n'existe pas déjà, 4D vous créera un dossier *Build*.



## Page de structure compilée

Cet onglet vous permet de générer un fichier de structure compilé standard et/ou un composant compilé :

![](assets/en/Project/appbuilderProj.png)


### Générer une structure compilée

Génère une base de données contenant uniquement du code compilé.

Cette fonctionnalité crée un fichier *.4dz* dans un dossier *Compiled Database*. Si vous avez nommé votre application «MyProject», 4D créera :

*\<destination\>/Compiled Database/\<nomdelabase>/\MyProject.4dz*

> Un fichier .4dz est essentiellement une version compressée du dossier du projet. Les fichiers .4dz peuvent être utilisés par 4D Server, la licence 4D Volume (applications fusionnées) et 4D Developer. La taille compacte et optimisée des fichiers .4dz facilite le déploiement des packages de projet.


#### Inclure les dossiers associés

Lorsque vous cochez cette option, tous les dossiers liés à la base de données sont recopiés dans le dossier Build en tant que dossiers *Components* et *Resources*. Pour plus d'informations sur ces dossiers, voir [Architecture de la base de données](https://livedoc.4d.com/4D-Design-Reference-18/Managing-4D-databases/Description-of-4D-files.300-4575698.en.html#100374).


### Générer un composant

Génère un composant compilé à partir de la structure.

Un composant est un fichier de structure 4D standard dans lequel des fonctionnalités spécifiques ont été développées. Une fois le composant configuré et installé dans une autre base 4D (la base hôte), ses fonctionnalités sont accessibles depuis la base hôte. Pour plus d’informations sur les composants, reportez-vous au chapitre "Développer et installer des composants 4D".
Si vous avez nommé votre application *Moncomposant*, 4D créera un dossier Component contenant le dossier *MyComponent.4dbase* : <p>*\<destination>/Components/name.4dbase/\<name>.4DZ*. </li> </ul>

The *MyComponent.4dbase* folder contains:
-   *MyComponent.4DZ* file
-   A *Resources* folder - any associated Resources are automatically copied into this folder. Any other components and/or plugins folders are not copied (a component cannot use plug-ins or other components).


## Application page

This tab allows you can build a stand-alone, single-user version of your application:

![](assets/en/Project/standaloneProj.png)

### Build stand-alone Application

Checking the **Build stand-alone Application** option and clicking **Build** will create a stand-alone (double-clickable) application directly from your database project.

The following elements are required for the build:
- 4D Volume Desktop (the 4D database engine),
- an [appropriate license](#licenses)

On Windows, this feature creates an executable file (.exe).

The following elements are required for the build:
- 4D Volume Desktop (the 4D database engine),
- an [appropriate license](#licenses)

On Windows, this feature creates an executable file (.exe).

Les éléments suivants sont requis pour la génération :
- 4D Volume Desktop (le moteur de base de données 4D),
- une [licence appropriée](#licenses)

Sous Windows, cette fonctionnalité crée un fichier exécutable (.exe). Sous Mac Os, cette fonction génère des progiciels (packages).

Le principe consiste à fusionner le fichier 4D Volume Desktop avec votre fichier de structure compilé. Les fonctionnalités offertes par le fichier 4D Volume Desktop sont liées à l’offre commerciale à laquelle vous avez souscrite. Pour plus d’informations sur ce point, reportez-vous à la documentation commerciale et au site Internet [4D SAS (http://www.4d.com/)](http://www.4d.com/).

Vous pouvez définir un fichier de données par défaut ou permettre à l'utilisateur de créer et d'utiliser son propre fichier de données (cf. section [Gestion du fichier de données dans les applications finales](https://doc.4d.com/4Dv17R6/4D/17-R6/Data-file-management-in-final-applications.300-4354729.en.html)).

Il est possible d'automatiser la mise à jour des applications monopostes fusionnées moyennant l'utilisation d'une séquence de commandes du langage (cf. section [Mise à jour auto des applications serveur ou monopostes](https://doc.4d.com/4Dv17R6/4D/17-R6/Automatic-updating-of-server-or-single-user-applications.300-4354721.en.html)).

#### Emplacement de 4D Volume Desktop

Pour pouvoir générer une application autonome, vous devez d'abord désigner le dossier contenant le fichier 4D Volume Desktop :

*   *Windows* - le dossier contient notamment les fichiers 4D Volume Desktop.4DE, 4D Volume Desktop.RSR ainsi que différents fichiers et dossiers nécessaires à son fonctionnement. Ces éléments doivent être placés au même niveau que le dossier sélectionné.
*   *macOS* - 4D Volume Desktop est fourni sous la forme d’un progiciel structuré contenant divers fichiers et dossiers génériques.

Pour sélectionner le dossier de 4D Volume Desktop, cliquez sur le bouton**[...]**. Une boîte de dialogue vous permettant de désigner le dossier (Windows) ou le progiciel (macOS) de 4D Volume Desktop apparaît.

Une fois le dossier sélectionné, son chemin d’accès complet est affiché et, s’il contient effectivement 4D Volume Desktop, l’option de génération d’application exécutable est activée.

> Le numéro de version de 4D Volume Desktop doit correspondre à celui de la version de 4D Developer Edition. Par exemple, si vous utilisez 4D Developer v18, vous devez sélectionner un 4D Volume Desktop v18.

#### Mode de liaison des données

Cette option vous permet de sélectionner le mode de liaison entre l'application fusionnée et le fichier de données local. Deux modes de liaison sont disponibles, choisissez le mode qui correspond le mieux à vos besoins :

*   **Nom de l'application** (défaut) - L'application 4D ouvre automatiquement le dernier fichier de données ouvert correspondant à la structure. Cela vous permet de déplacer librement le dossier de l'application sur le disque. Il est conseillé en général pour les applications fusionnées, à moins que vous n'ayez spécifiquement besoin de dupliquer l'application.

*   **Chemin de l'application** - L'application 4D fusionnée va lire le contenu du fichier *lastDataPath.xml* des préférences de l'utilisateur et tenter d'ouvrir le fichier de données dont l'attribut "executablePath" correspond au chemin d'accès de l'application. Si cette clé est trouvée, son fichier de données correspondant (défini via son attribut "dataFilePath") est ouvert. Sinon, le dernier fichier de données utilisé est ouvert (mode par défaut).

Pour plus d'informations sur le mode de liaison des données, reportez-vous au paragraphe [Dernier fichier de données ouvert](#last-data-file-opened).


#### Fichiers générés

Lorsque vous cliquez sur le bouton **Construire**, crée automatiquement un dossier **Final Application** dans le **“Dossier de destination”**. Inside the Final Application folder is a subfolder with the name of the specified application in it. Inside the Final Application folder is a subfolder with the name of the specified application in it.

If you have specified "MyProject" as the name of the application, you will find the following files in this subfolder (aka MyProject):

*   *Windows*
    *   MyProject.exe  - Your executable and a MyProject.rsr (the application resources)
    *   4D Extensions folder, Resources folder, various libraries (DLL), Native Components folder, SASL Plugins folder - Files necessary for the operation of the application
    *   Database folder  - Includes a Resources folder and  MyProject.4DZ file. Ils constituent la structure compilée de la base et son dossier Resources. **Note ** : Ce dossier contient également le dossier *Default Data*, s'il a été défini (cf. [Gestion du fichier de données dans les applications finales](#data-file-management-in-final-applicatons)).</p>
    *   (Facultatif) Un dossier Components et/ou un dossier Plugins contenant les fichiers des composants et/ou des plug-ins éventuellement inclus dans la base. Pour plus d’informations sur ce point, reportez-vous à la section Page [Plugins et composants](#plugins-and-components).
    *   Un dossier Licences contenant sous forme de fichier XML la liste des numéros de licence ayant été intégrés dans l’application. For more information about this, refer to the [Licenses & Certificate](#licenses-and-certificate) section.
    *   Additional items added to the 4D Volume Desktop folder, if any (see [Customizing the 4D Volume Desktop folder](#customizing-4d-volume-desktop-folder)).

    All these items must be kept in the same folder in order for the executable to operate.

*   *macOS*
    -   A software package named MyProject.app containing your application and all the items necessary for its operation, including the plug-ins, components and licenses. Pour plus d’informations sur l’intégration des composants et des plug-ins, reportez-vous à la section [Page Plugins et composants](#plugins-and-components). Pour plus d’informations sur l’intégration des licences, reportez-vous à la [Page Licences & Certificat](#licenses-and-certificate). **Note**: In macOS, the [Application file](https://doc.4d.com/4Dv17R6/4D/17-R6/Application-file.301-4311297.en.html) command of the 4D language returns the pathname of the ApplicationName file (located in the Contents:macOS folder of the software package) and not that of the .comp file (Contents:Resources folder of the software package).


#### Customizing 4D Volume Desktop folder

When building a stand-alone application, 4D copies the contents of the 4D Volume Desktop folder into Destination folder > *Final Application* folder. Vous pouvez donc parfaitement personnaliser le contenu du dossier 4D Volume Desktop d’origine en fonction de vos besoins. You can, for example:

*   Install a 4D Volume Desktop version corresponding to a specific language;
*   Add a custom *PlugIns* folder;
*   Customize the contents of the *Resources* folder.
> In macOS, 4D Volume Desktop is provided in the form of a software package. Pour le modifier, vous devrez tout d’abord afficher son contenu (effectuez **Control+clic** sur son icône).


#### Emplacements des fichiers Web

Si votre application exécutable est utilisée en tant que serveur Web, les fichiers et dossiers requis par le serveur doivent être installés à des emplacements spécifiques. These items are the following:

*   *cert.pem* and *key.pem* files (optional): These files are used for SSL connections and by data encryption commands,
*   default Web root folder.

Items must be installed:

- **on Windows**: in the *Final Application\MyProject\Database* subfolder.
- **on macOS**: next to the *MyProject.app* software package.





## Client/Server page

On this tab, you can build customized client-server applications that are homogenous, cross-platform and with an automatic update option.

![](assets/en/Project/buildappCSProj.png)

### What is a Client/Server application?

A client/server application comes from the combination of three items:

- A compiled 4D database,
- The 4D Server application,
- The 4D Volume Desktop application (macOS and/or Windows).

Once built, a client/server application is composed of two customized parts: the Server portion (unique) and the Client portion (to install on each client machine).

Also, the client/server application is customized and its handling simplified:

- To launch the server portion, the user simply double-clicks on the server application. </p>

![](assets/en/Project/buildappCSProj.png)

### What is a Client/Server application?

A client/server application comes from the combination of three items:

- A compiled 4D database,
- The 4D Server application,
- The 4D Volume Desktop application (macOS and/or Windows).

Once built, a client/server application is composed of two customized parts: the Server portion (unique) and the Client portion (to install on each client machine).

Also, the client/server application is customized and its handling simplified:

- To launch the server portion, the user simply double-clicks on the server application. </p>

Also, the client/server application is customized and its handling simplified:

- To launch the server portion, the user simply double-clicks on the server application. Il n’est pas nécessaire de sélectionner la base.
- Pour lancer la partie cliente, l’utilisateur double-clique simplement sur l’application cliente, qui se connecte directement à l’application serveur. Il n’est pas nécessaire de choisir une base de données dans une boîte de dialogue de connexion. Le client cible le serveur soit via son nom, lorsque client et serveur sont sur le même sous-réseau, soit via son adresse IP, à définir via la clé XML `IPAddress` dans le fichier buildapp.4DSettings. Si la connexion échoue, [des mécanismes alternatifs spécifiques peuvent être mis en place](#management-of-client-connections). Il est également possible de “forcer” l’affichage de la boîte de dialogue de connexion standard en maintenant la touche **Option** (macOS) ou **Alt** (Windows) enfoncée lors du lancement de l’application cliente. Seule la partie cliente peut se connecter à la partie serveur correspondante. Si un utilisateur tente de se connecter à la partie serveur à l’aide d’une application 4D standard, un message d’erreur est retourné et la connexion est impossible.
- Une application client/serveur peut être paramétrée de telle sorte que la partie cliente [puisse être mise à jour automatiquement via le réseau](#copy-of-client-applications-in-the-server-application).
- Il est également possible d'automatiser la mise à jour de la partie serveur moyennant l'utilisation d'une séquence de commandes du langage ([SET UPDATE FOLDER](https://doc.4d.com/4Dv17R6/4D/17-R6/SET-UPDATE-FOLDER.301-4311308.en.html) et [RESTART 4D](https://doc.4d.com/4Dv17R6/4D/17-R6/RESTART-4D.301-4311311.en.html)).



### Construire application serveur

Cochez cette option pour générer la partie serveur de votre application lors de la phase de construction. Vous devez désigner sur votre disque l’emplacement de l’application 4D Server à utiliser. Ce 4D Server doit correspondre à la plate-forme courante (qui sera également la plate-forme de l’application du serveur). This 4D Server must correspond to the current platform (which will also be the platform of the server application).

#### 4D Server location

Click on the **[...]** button and use the *Browse for folder* dialog box to locate the 4D Server application. Sous macOs, vous devez sélectionner directement le progiciel (package) de 4D Server.

#### Current version

Permet d’indiquer le numéro de version courante de l’application générée. Vous pourrez par la suite accepter ou refuser les connexions des applications clientes en fonction de leur numéro de version. The interval of compatibility for client and server applications is set using specific [XML keys](#build-application-settings)).

#### Data linking mode

This option lets you choose the linking mode between the merged application and the local data file.

#### Mode de liaison des données

Cette option vous permet de choisir le mode de liaison entre l'application fusionnée et le fichier de données local. Deux modes de liaison sont disponibles, choisissez le mode qui correspond le mieux à vos besoins :

*   **Nom de l'application** (défaut) - L'application 4D ouvre automatiquement le dernier fichier de données ouvert correspondant à la structure. Cela vous permet de déplacer librement le dossier de l'application sur le disque. Il est conseillé en général pour les applications fusionnées, à moins que vous n'ayez spécifiquement besoin de dupliquer l'application.

*   **Chemin de l'application** - L'application 4D fusionnée va lire le contenu du fichier *lastDataPath.xml* des préférences de l'utilisateur et tenter d'ouvrir le fichier de données dont l'attribut "executablePath" correspond au chemin d'accès de l'application. Si cette clé est trouvée, son fichier de données correspondant (défini via son attribut "dataFilePath") est ouvert. Sinon, le dernier fichier de données est ouvert (mode par défaut).

Pour plus d'informations sur le mode de liaison de données, reportez-vous à la section [Dernier fichier de données ouvert](#last-data-file-opened). The interval of compatibility for client and server applications is set using specific [XML keys](#build-application-settings)).

#### Data linking mode

This option lets you choose the linking mode between the merged application and the local data file.

#### Data linking mode

This option lets you choose the linking mode between the merged application and the local data file. Otherwise, the last opened data file is opened (default mode).

For more information about the data linking mode, refer to the [Last data file opened](#last-data-file-opened) section.


### Build client application

Checking this option generates the client part of your application during the building phase.

#### 4D Volume Desktop

You must designate the location on your disk of the 4D Volume Desktop application to be used.

#### 4D Volume Desktop

Vous devez désigner l'emplacement sur votre disque de l'application 4D Volume Desktop à utiliser. Ce 4D Volume Desktop doit correspondre à la plate-forme courante (qui sera également la plate-forme de l’application cliente). Si vous souhaitez générer une version de l’application cliente pour la plate-forme “concurrente”, vous devez répéter l'opération en utilisant une application 4D tournant sur cette plate-forme. Cette étape est nécessaire uniquement pour la version initiale de l'application cliente car les mises à jour suivantes pourront être gérées directement depuis une seule plate-forme via le mécanisme des mises à jour automatiques. Pour plus d’informations sur ce point, reportez-vous au paragraphe [Personnaliser les dossiers 4D Server et/ou Client](#customizing-4d-server-and-or-4d-client-folders).

> Le numéro de version de 4D Volume Desktop doit correspondre à celui du 4D Developer Edition. Par exemple, si vous utilisez 4D Developer v18, vous devez sélectionner un 4D Volume Desktop v18.

Si vous souhaitez que l'application cliente se connecte au serveur via une adresse spécifique (autre que le nom du serveur publié sur le sous-réseau), vous devez utiliser la clé XML `IPAddress` dans le fichier buildapp.4DSettings. Pour plus d'informations sur ce fichier, reportez-vous à la description de la commande`BUILD APPLICATION`. Vous pouvez également mettre en place des mécanismes spécifiques en cas d'échec de la connexion. The different scenarios proposed are described in the [Management of connections by client applications](#management-of-client-connections) paragraph.

#### Copy of client applications in the server application

The options of this area to set up the mechanism for updating the client parts of your client/server applications using the network each time a new version of the application is generated.

- **Allow automatic update of Windows client application** - Check these options so that your Windows client/server application can take advantage of the automatic update mechanism for clients via the network.
- **Allow automatic update of Macintosh client application** - Check these options so that your Macintosh client/server application can take advantage of the automatic update mechanism for clients via the network.

*   **Allow automatic update of Macintosh client application** - If you want to create a cross-platform client application, you must designate the location on your disk of the 4D Volume Desktop application that corresponds to the “concurrent” platform of the build platform.

    For example, if you build your application in Windows, you must use the **[...]** button to designate the 4D Volume Desktop macOS application (provided as a package).



#### Displaying update notification

The client application update notification is carried out automatically following the server application update.

It works as follows: when a new version of the client/server application is built using the application builder, the new client portion is copied as a compressed file in the **Upgrade4DClient** subfolder of the **ApplicationName** Server folder (in macOS, these folders are included in the server package). Si vous avez suivi le processus de génération d’une application cliente multi-plate-forme, un fichier *. 4darchive* de mise à jour est disponible pour chaque plate-forme :

Pour provoquer la mise à jour des applications clientes, il suffit de remplacer l’ancienne version de l’application serveur par la nouvelle puis de l’exécuter. The rest of the process is automatic. The rest of the process is automatic.

On the client side, when the “old” client application tries to connect to the updated server application, a dialog box is displayed on the client machine, indicating that a new version is available. L’utilisateur peut mettre sa version à jour ou annuler la boîte de dialogue.

*   Si l’utilisateur clique sur **OK**, la nouvelle version est téléchargée sur le poste client via le réseau. A l’issue du téléchargement, l’ancienne application client quitte, la nouvelle est lancée et se connecte au serveur. L’ancienne application est alors placée dans la corbeille de la machine.
*   Si l’utilisateur clique sur **Annuler**, la mise à jour est annulée ; si l’ancienne version de l’application cliente n’appartient pas à l’intervalle des numéros de version acceptés par le serveur (cf. paragraphe suivant), l’application quitte et la connexion est impossible. Sinon (par défaut), la connexion est établie.

#### Comment forcer la mise à jour ?

Dans certains cas, vous pourrez souhaiter que les applications clientes ne puissent pas annuler le téléchargement des mises à jour. Par exemple, si vous avez utilisé une nouvelle version de l’application source 4D Server, il est impératif que la nouvelle version de l’application cliente soit installée sur chaque poste client.

Pour forcer la mise à jour, il vous suffit d’exclure les versions courantes des applications clientes (N-1 et précédentes) de l’intervalle des numéros de version compatibles avec l’application serveur. Dans ce cas, le mécanisme de mise à jour n’autorisera pas la connexion des applications clientes non mises à jour. For example, if the new version of the client-server application is 6, you can stipulate that any client application with a version number lower than 6 will not be allowed to connect.

The [current version number](build-server-application) is set on the Client/Server page of the Build Application dialog box. For example, if the new version of the client-server application is 6, you can stipulate that any client application with a version number lower than 6 will not be allowed to connect.

The [current version number](build-server-application) is set on the Client/Server page of the Build Application dialog box.

The [current version number](build-server-application) is set on the Client/Server page of the Build Application dialog box. Les intervalles de numéros autorisés sont définis dans le projet d’application via des [clés XML](#build-application-settings) spécifiques.


#### En cas d’erreur

Si 4D ne peut pas effectuer la mise à jour de l’application cliente, le poste client affiche le message d’erreur suivant : “La mise à jour de l’application cliente a échoué. L’application va maintenant quitter.”

Les causes possibles de cette erreur sont multiples. Lorsque vous rencontrez ce message, il est conseillé de contrôler en premier lieu les paramètres suivants :

*   **Chemins d’accès** - Vérifiez la validité des chemins d’accès définis dans le projet d’application via la boîte de dialogue du Générateur d’applications ou via des clés xml (par exemple *ClientMacFolderToWin*). Vérifiez en particulier les chemins d’accès aux versions de 4D Volume Desktop.
*   **Privilèges lecture/écriture** - Sur la machine cliente, vérifiez que l’utilisateur courant dispose de droits d’accès en écriture pour l’application cliente mise à jour.


### Fichiers générés

A l’issue du processus de génération d’une application client-serveur, vous devez trouver dans le dossier de destination un nouveau dossier nommé **Client Server executable**. Ce dossier contient deux sous-dossiers, *<NomApplication>Client* et *<NomApplication> Server*.
> Ces dossiers ne sont pas générés si une erreur est survenue. Dans ce cas, ouvrez le [fichier d’historique](#log-file) pour connaître la cause de l’erreur.

Le dossier *<NomApplication>Client* contient la partie cliente de l’application correspondant à la plate-forme d’exécution du générateur d’application. Ce dossier doit être installé sur chaque poste client. Le dossier *\<ApplicationName>Server* contient la partie serveur de l'application. The *\<ApplicationName>Server* folder contains the server portion of the application.

The contents of these folders vary depending on the current platform:

*   *Windows* - Each folder contains the application executable file, named *\<ApplicationName>Client.exe* for the client part and *\<ApplicationName>Server.exe* for the server part as well as the corresponding .rsr files. Les dossiers contiennent également divers fichiers et dossiers nécessaires au fonctionnement des applications et les éléments personnalisés éventuellement placés dans les dossiers 4D Volume Desktop et 4D Server d’origine.
*   *macOS* - Chaque dossier contient uniquement le progiciel de l’application, nommé <ApplicationName> Client pour la partie cliente et <ApplicationName>Server pour la partie serveur. Chaque progiciel contient tous les éléments nécessaires à son fonctionnement. Sous macOS, un progiciel est lancé via un double-clic.

    > Les progiciels Mac Os générés contiennent les mêmes éléments que les sous-dossiers Windows. You can display their contents (**Control+click** on the icon) in order to be able to modify them.

If you checked the “Allow automatic update of client application” option, an additional subfolder called *Upgrade4DClient* is added in the *\<ApplicationName>Server* folder/package. </blockquote>

If you checked the “Allow automatic update of client application” option, an additional subfolder called *Upgrade4DClient* is added in the *\<ApplicationName>Server* folder/package. Ce sous-dossier contient l’application cliente au format macOS et/ou Windows sous forme de fichier compressé. Ce fichier est utilisé lors de la mise à jour automatique des applications clientes.

#### Personnaliser le dossier 4D Volume Desktop

Lors de la construction d'une application exécutable, 4D duplique le contenu du dossier 4D Volume Desktop dans le sous-dossier Final Application du dossier de destination. Vous pouvez donc parfaitement personnaliser le contenu du dossier 4D Volume Desktop d’origine en fonction de vos besoins. You can, for instance:

- Install a 4D Volume Desktop version corresponding to a specific language;
- Add a custom PlugIns folder;
- Customize the contents of the Resources folder.

#### Location of Web files

If the server and/or client part of your double-clickable application is used as a Web server, the files and folders required by the server must be installed in specific locations. These items are the following:

- *cert.pem* and *key.pem* files (optional): These files are used for SSL connections and by data encryption commands,
- Default Web root folder (WebFolder).

Items must be installed:
*   **on Windows**
    *   **Server application** - in the *Client Server executable\ \<ApplicationName>Server\Server Database* subfolder.
    *   **Client application** - in the *Client Server executable\ \<ApplicationName>Client* subfolder.

*   **on macOS**
    *   **Server application** - next to the *\<ApplicationName>Server* software package.
    *   **Client application** - next to the *\<ApplicationName>Client* software package.





## Plugins & components page

On this tab, you set each [plug-in](Concepts/plug-ins.md) and each [component](Concepts/components.md) that you will use in your stand-alone or client/server application.

The page lists the elements loaded by the current 4D application:

![](assets/en/Project/buildapppluginsProj.png)

*    **Active** column - Indicates that the items will be integrated into the application package built.

The page lists the elements loaded by the current 4D application:

![](assets/en/Project/buildapppluginsProj.png)

*    **Active** column - Indicates that the items will be integrated into the application package built.

Cette page contient une liste des éléments chargés par l'application 4D courante :

![](assets/en/Project/buildapppluginsProj.png)

*    Colonne **active** - Indique que les éléments seront intégrés dans le package créé. Par défaut, tous les éléments sont inclus. To exclude a plug-in or a component, deselect the check box next to it.

*   **Plugins and components** column - Displays the name of the plug-in/component.

*   **ID** column - Displays the plug-in/component's identification number (if any).

*   **Type** column - Indicates the type of item: plug-in or component.

If you want to integrate other plug-ins or components into the executable application, you just need to place them in a **PlugIns** or **Components** folder next to the 4D Volume Desktop application or next to the 4D Server application. Le mécanisme de copie du contenu du dossier de l’application source (cf. paragraphe [Personnaliser le dossier 4D Volume Desktop](#customizing-4d-volume-desktop-folder)) permet d’intégrer tout type de fichier à l’application exécutable.

En cas de conflit entre deux versions différentes d’un même plug-in (l’une chargée par 4D et l’autre placée dans le dossier de l’application source), la priorité revient au plug-in installé dans le dossier de 4D Volume Desktop/4D Server. However, if there are two instances of the same component, the application will not open.
> The use of plug-ins and/or components in a deployment version requires the necessary license numbers.






## Licenses & Certificate page

The Licences & Certificate page can be used to:

*   designate the license number(s) that you want to integrate into your single-user stand-alone application
*   sign the application by means of a certificate in macOS.

![](assets/en/Admin/buildappCertif.png)

### Licenses

This tab displays the list of available deployment licenses that you can integrate into your application. Par défaut, la liste est vide. Vous devez explicitement ajouter votre licence *4D Developer Professional* ainsi que chaque licence* 4D Desktop Volume* liée à utiliser dans l’application générée. You can add another 4D Developer Professional number and its associated licenses other than the one currently being used.

To remove or add a license, use the **[+]** and **[-]** buttons at the bottom of the window.

When you click on the \[+] button, an open file dialog box appears displaying by default the contents of the *Licenses* folder of your machine.

When you click on the \[+] button, an open file dialog box appears displaying by default the contents of the *Licenses* folder of your machine.

When you click on the \[+] button, an open file dialog box appears displaying by default the contents of the *Licenses* folder of your machine. Pour plus d'informations sur l'emplacement de ce dossier, reportez-vous à la commande [Get 4D folder](https://doc.4d.com/4Dv17R6/4D/17-R6/Get-4D-folder.301-4311294.en.html) command.

Vous devez désigner les fichiers contenant votre licence Developer et ainsi que vos licences de déploiement. These files were generated or updated when the *4D Developer Professional* license and the *4D Desktop Volume* licenses were purchased. These files were generated or updated when the *4D Developer Professional* license and the *4D Desktop Volume* licenses were purchased.

Once you have selected a file, the list will indicate the characteristics of the license that it contains.

*   **License #** - Product license number
*   **License** - Name of the product
*   **Expiration date** - Expiration date of the license (if any)
*   **Path** -  Location on disk

If a license is not valid, a message will warn you.

You can designate as many valid files as you want.

You can designate as many valid files as you want.

You can designate as many valid files as you want. Lors de la génération de l’application exécutable, 4D utilisera les licences les plus appropriées.
> Des licences "R" dédiées sont requises pour générer des applications basées sur des versions "R-release" (les numéros de licence des produits "R" débutent par "R-4DDP").

A l’issue de la génération, un nouveau fichier de licence de déploiement est automatiquement inclus dans un dossier Licences placé à côté de l’application exécutable (Windows) ou dans le progiciel (macOS).


### Certification des applications sous macOS

Le Générateur d’application permet de signer les applications 4D fusionnées sous macOS (applications monoposte, 4D Server et parties clientes sous macOS). Signing an application authorizes it to be executed using the Gatekeeper functionality of macOS when the "Mac App Store and identified Developers" option is selected (see "About Gatekeeper" below).

- Check the **Sign application** option to include certification in the application builder procedure for OS X. 4D will check the availability of elements required for certification when the build occurs:

![](assets/en/Project/buildapposxcertProj.png)

This option is displayed under both Windows and macOS, but it is only taken into account for macOS versions.

*   **Name of certificate** - Enter the name of your developer certificate validated by Apple in this entry area. The certificate name is usually the name of the certificate in the Keychain Access utility (part in red in the following example):

![](assets/en/Project/certificate.png)

To obtain a developer certificate from Apple, Inc., you can use the commands of the Keychain Access menu or go here: [http://developer.apple.com/library/mac/#documentation/Security/Conceptual/CodeSigningGuide/Procedures/Procedures.html](http://developer.apple.com/library/mac/#documentation/Security/Conceptual/CodeSigningGuide/Procedures/Procedures.html).
> This certificate requires the presence of the Apple codesign utility, which is provided by default and usually located in the “/usr/bin/” folder. If an error occurs, make sure that this utility is present on your disk.


#### About Gatekeeper

Gatekeeper is a security feature of OS X that controls the execution of applications downloaded from the Internet. If a downloaded application does not come from the Apple Store or is not signed, it is rejected and cannot be launched. If a downloaded application does not come from the Apple Store or is not signed, it is rejected and cannot be launched.

The **Sign application** option of the 4D application builder lets you generate applications that are compatible with this option by default.


#### About Notarization

Application notarization is highly recommended by Apple as of macOS 10.14.5 (Mojave) and 10.15 (Catalina), since non-notarized applications deployed via the internet are blocked by default.

In 4D v18, the [built-in signing features](#os-x-signing-certificate) have been updated to meet all of Apple's requirements to allow using the Apple notary service. The notarization itself must be conducted by the developer and is independent from 4D (note also that it requires installing Xcode). Please refer to [this 4D blog post](https://blog.4d.com/how-to-notarize-your-merged-4d-application/) that provides a step-by-step description of the notarization process. Please refer to [this 4D blog post](https://blog.4d.com/how-to-notarize-your-merged-4d-application/) that provides a step-by-step description of the notarization process.

For more information on the notarization concept, please refer to [this page on the Apple developer website](https://developer.apple.com/documentation/xcode/notarizing_your_app_before_distribution/customizing_the_notarization_workflow).

## Customizing application icons

4D associates a default icon with stand-alone, server, and client applications, however you can customize the icon for each application.

*   **macOs** - When building a double-clickable application, 4D handles the customizing of the icon.

## Customizing application icons

4D associates a default icon with stand-alone, server, and client applications, however you can customize the icon for each application.

*   **macOs** - When building a double-clickable application, 4D handles the customizing of the icon. In order to do this, you must create an icon file (icns type), prior to building the application file, and place it next to the project folder.
> Apple, Inc. provides a specific tool for building *icns* icon files (for more information, please refer to [Apple documentation](https://developer.apple.com/library/archive/documentation/GraphicsAnimation/Conceptual/HighResolutionOSX/Optimizing/Optimizing.html#//apple_ref/doc/uid/TP40012302-CH7-SW2)).

    Your icon file must have the same name as the project file and include the *.icns* extension. 4D automatically takes this file into account when building the double-clickable application (the *.icns* file is renamed *ApplicationName.icns* and copied into the Resources folder; the *CFBundleFileIcon* entry of the *info.plist* file is updated).

*   **Windows** - When building a double-clickable application, 4D handles the customizing of its icon. In order to do this, you must create an icon file (*.ico* extension), prior to building the application file, and place it next to the project folder.

    Your icon file must have the same name as the project file and include the *.ico* extension. 4D prend automatiquement ce fichier en compte lors de la construction de l'application exécutable.

Vous pouvez également définir des [clés XML](https://doc.4d.com/4Dv17R6/4D/17-R6/4D-XML-Keys-BuildApplication.100-4465602.en.html) dans le fichier buildApp.4DSettings pour désigner chaque icône devant être utilisée. The following keys are available:

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

This mechanism is usually suitable for standard deployments.

L'emplacement du dossier des préférences utilisateur de l'application correspond au chemin retourné par l'instruction suivante :

```4d
userPrefs:=Get 4D folder(Active 4D Folder)
```

Le chemin du fichier de données est stocké dans un fichier dédié, nommé *lastDataPath.xml*.

Grâce à cette architecture, lorsque vous fournissez une mise à jour de votre application, le fichier de données utilisateur local (dernier fichier de données utilisé) s'ouvre automatiquement au premier lancement.

Ce mécanisme convient généralement aux déploiements standard. Cependant, dans des cas spécifiques, par exemple si vous dupliquez vos applications fusionnées, vous pouvez avoir besoin de modifier la manière dont le fichier de données est lié à l'application.

#### Configurer le mode de liaison des données

4D utilise automatiquement, avec vos applications compilées, le dernier fichier de données ouvert. Par défaut, lorsque la nouvelle architecture est activée, le chemin d'accès du fichier de données est stocké dans le dossier de préférences de l'utilisateur de l'application et est lié au **nom de l'application**.

Ce fonctionnement peut s'avérer inadapté si vous souhaitez dupliquer une application fusionnée destinée à utiliser différents fichiers de données. En effet, les applications dupliquées vont en fait partager le même dossier de préférences de l'utilisateur et donc, toujours utiliser le même fichier de données -- même si le fichier de données est renommé, car l'application utilisera toujours le dernier fichier de données ouvert par l'application.

4D vous permet donc de lier votre chemin de fichier de données au chemin de l'application. Dans ce cas, le fichier de données sera relié via un chemin spécifique et ne sera plus simplement le dernier fichier utilisé. You therefore link your data **by application path**. You therefore link your data **by application path**.

This mode allows you to duplicate your merged applications without breaking the link to the data file. Cependant, avec cette option, si le package de l’application est déplacé sur le disque, un fichier de données est demandé à l’utilisateur, car le chemin de l’application ne correspond plus à l’attribut "executablePath" (après avoir sélectionné un fichier de données, le Le fichier *lastDataPath.xml* est mis à jour en conséquence).


*Duplication lorsque les données sont liées par le nom de l'application: * ![](assets/en/Project/datalinking1.png)

*Duplication lorsque les données sont liées par le chemin de l'application: * ![](assets/en/Project/datalinking2.png)

Vous pouvez sélectionner le mode de liaison de données pendant le processus d'application de génération. Vous pouvez soit :

- Utiliser la [page Application](#application) ou la [page Client/Serveur](#client-server) de la boîte de dialogue Générer une application.
- Utiliser la clé XML **LastDataPathLookup** (application monoposte ou application serveur).


### Définition d'un dossier de données par défaut

4D vous permet de définir un fichier de données par défaut lors de la génération de l'application. Au premier lancement de l'application, en l'absence de fichier local (cf. [séquence de lancement décrite ci-dessus](#opening-the-data-file)), le fichier de données par défaut est automatiquement ouvert silencieusement en mode lecture seule par 4D. Cela vous donne un meilleur contrôle sur la création et/ou l'ouverture des fichiers de données lors du premier lancement d'une application fusionnée. This gives you better control over data file creation and/or opening when launching a merged application for the first time.

More specifically, the following cases are covered:

- Avoiding the display of the 4D "Open Data File" dialog box when launching a new or updated merged application. Vous pouvez détecter, par exemple dans la , que le fichier de données par défaut a été ouvert et donc, exécuter votre propre code et/ou boîtes de dialogue permettant de créer ou de sélectionner un fichier de données local.
- Permettre la distribution d'applications fusionnées comportant des données en lecture seulement (par exemple des applications de démonstration).


Pour définir et utiliser un fichier de données par défaut :

- Vous devez fournir un fichier de données par défaut (nommé "Default.4DD") et le stocker dans un dossier spécifique (nommé "Default Data") à l'intérieur du package de la base (4dbase). Ce fichier doit être accompagné de tous les fichiers nécessaires, en fonction de la configuration de la base : .4dIndx, blobs externes, journal, etc. Il est de votre responsabilité de livrer un fichier de données par défaut valide. A noter cependant que, comme le fichier de données par défaut est ouvert en mode lecture seule, il est recommandé de désélectionner l'option "Utiliser le fichier d'historique" dans le fichier de structure original avant de créer le fichier de données.
- Au moment de la génération de l'application, le dossier de données par défaut est intégré dans l'application fusionnée. Tous les fichiers présents dans ce dossier par défaut sont également embarqués.

Le schéma suivant illustre cette fonctionnalité :

![](assets/en/Project/DefaultData.png)

Lorsque le fichier de données par défaut est détecté au premier lancement, il est silencieusement ouvert en mode lecture seulement, vous permettant ainsi d'exécuter toute opération personnalisée (à condition qu'elle ne modifie pas le fichier de données lui-même).


## Gestion de la connexion des applications clientes

La gestion des connexions des applications clientes recouvre les mécanismes par lesquels une application cliente fusionnée se connectera au serveur cible, une fois en environnement de production.

### Scénario de connexion

Le processus de connexion des applications clientes fusionnées prend en charge les cas où le serveur dédié n'est pas disponible. Le scénario du démarrage d'une application cliente 4D est le suivant :

- L'application cliente tente de se connecter au serveur via le service de découverte (basé sur le nom du serveur, publié sur le même sous-réseau que l'application cliente).  
  OU  
  Si des informations de connexion valides sont présentes dans le fichier "EnginedServer.4DLink" à l'intérieur de son dossier, l'application cliente tente de se connecter à l'adresse du serveur spécifiée dans ce fichier.
- En cas d'échec, l'application cliente tente de se connecter au serveur à l'aide des informations présentes dans le dossier de préférences utilisateur de l'application (fichier "lastServer.xml").
- En cas d'échec, l'application cliente affiche une boîte de dialogue d'erreur de connexion.
    - Si l'utilisateur clique sur le bouton **Sélectionner...** (lorsque c'est autorisé par le développeur 4D à l'étape de création, voir ci-dessous), la boîte de dialogue standard "Connexion serveur" s'affiche.
    - Si l'utilisateur clique sur le bouton **Quitter**, l'application cliente se ferme.
- Si la connexion réussit, l'application cliente enregistre ces informations de connexion dans le dossier des préférences utilisateur de l'application pour une utilisation ultérieure.

### Stockage du dernier chemin du serveur

Le dernier chemin d'accès au serveur utilisé et validé est automatiquement enregistré dans un fichier nommé "lastServer.xml" dans le dossier des préférences utilisateur de l'application. Ce dossier est situé à l'emplacement suivant :

```4d
userPrefs:=Get 4D folder(Active 4D Folder)
```

Ce mécanisme permet de prendre en charge le cas où le serveur cible primaire est temporairement indisponible pour une raison quelconque (par exemple pour une opération de maintenance). Lorsque ce cas se produit pour la première fois, la boîte de dialogue de sélection de serveur est affichée (si elle est autorisée, cf. ci-dessous) et l'utilisateur peut manuellement sélectionner un serveur alternatif, dont le chemin est alors sauvegardé si la connexion est établie et validée. Toute indisponibilité ultérieure sera alors automatiquement prise en charge à l'aide des paramètres de connexion présents dans le fichier "lastServer.xml".

> - Lorsque les applications clientes ne peuvent pas bénéficier du service de découverte, par exemple à cause de la configuration réseau, il reste recommandé que le développeur indique un nom d'hôte lors de la génération de l'application à l'aide de la clé [IPAddress](https://doc.4d.com/4Dv17R6/4D/17-R6/IPAddress.300-4465710.en.html) dans le fichier "BuildApp.xml". Le mécanisme de sauvegarde du chemin du dernier serveur est conçu pour les cas d'indisponibilité temporaire uniquement.  
> - Dans tous les cas, il est possible de maintenir la touche **Alt/Option** au démarrage de l'application cliente afin d'afficher la boîte de dialogue de sélection du serveur.



### Accès à la boîte de dialogue de sélection de serveur en cas d'erreur

Vous pouvez choisir d'afficher ou non la boîte de dialogue standard de sélection de serveur sur les applications clientes fusionnées lorsque le serveur ne répond pas. La configuration dans ce cas dépend de l'option de la valeur de la clé XML [ServerSelectionAllowed](https://doc.4d.com/4Dv17R6/4D/17-R6/ServerSelectionAllowed.300-4465714.en.html) sur le poste qui génère l'application client/serveur. Vous disposez de trois possibilités :

- **Affichage d'un message d'erreur sans accès possible à la boîte de dialogue de sélection de serveur**. Fonctionnement par défaut. L'application peut uniquement quitter.  
  `ServerSelectionAllowed` : **False** ou clé omise ![](assets/en/Project/connect1.png)

- **Affichage d'un message d'erreur avec accès possible à la boîte de dialogue de sélection de serveur.**. The user can access the server selection window by clicking on the **Select...** button.   
  `ServerSelectionAllowed`: **True** ![](assets/en/Project/connect2.png) ![](assets/en/Project/connect3.png)