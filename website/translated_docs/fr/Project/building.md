---
id: building
title: Générer un package projet
---

4D Developer inclut un générateur d’application final pour créer un package de projet (version finale). Ce générateur simplifie le processus de finalisation et de déploiement des applications compilées 4D. Il gère automatiquement les fonctionnalités spécifiques de différents systèmes d'exploitation et facilite le déploiement d'applications client-serveur.

Le générateur d'applications vous permet de :

* Générer une base de données compilée, sans code interprété,
* Générer une application autonome exécutable, c'est-à-dire fusionnée avec 4D Volume Desktop, le moteur de base de données 4D,
* Générer différentes applications à partir de la même base de données compilée via un projet XML,
* Générer des applications client-serveur homogènes,
* Générer des applications client-serveur avec mise à jour automatique des composants client et serveur.
* Enregistrer vos paramètres de génération pour une utilisation ultérieure (bouton *Enregistrer les paramètres*).

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

Si vous avez nommé votre application *Moncomposant*, 4D créera un dossier Component contenant le dossier *MyComponent.4dbase* :

<

p>*\<destination>/Components/name.4dbase/\<name>.4DZ*.

Le dossier *MyComponent.4dbase* contient : - Un fichier *MyComponent.4DZ* - Un dossier *Resources* - toutes les Ressources sont automatiquement recopiées dans ce dossier. Les éventuels dossiers “Components” ou “Plugins” ne sont pas recopiés (un composant ne peut pas utiliser de plug-ins ni d'autres composants).

## Page Application

Cet onglet vous permet de générer directement une version monoposte indépendante de votre application :

![](assets/en/Project/standaloneProj.png)

### Générer une application indépendante

En cochant l'option **Générer une application exécutable** et en cliquant sur **Construire**, vous générerez une application autonome (exécutable) directement depuis votre base projet.

Pour réaliser la génération, vous aurez besoin des éléments suivants :

- 4D Volume Desktop (le moteur de la base 4D),
- une[licence appropriée](#licenses) 

Sous Windows, cette fonctionnalité crée un fichier exécutable (.exe). Sous Mac Os, cette fonction génère des progiciels (packages).

Le principe consiste à fusionner le fichier 4D Volume Desktop avec votre fichier de structure compilé. Les fonctionnalités offertes par le fichier 4D Volume Desktop sont liées à l’offre commerciale à laquelle vous avez souscrite. Pour plus d’informations sur ce point, reportez-vous à la documentation commerciale et au site Internet [4D SAS (http://www.4d.com/)](http://www.4d.com/).

Vous pouvez définir un fichier de données par défaut ou permettre à l'utilisateur de créer et d'utiliser son propre fichier de données (cf. section [Gestion du fichier de données dans les applications finales](https://doc.4d.com/4Dv17R6/4D/17-R6/Data-file-management-in-final-applications.300-4354729.en.html)).

Il est possible d'automatiser la mise à jour des applications monopostes fusionnées moyennant l'utilisation d'une séquence de commandes du langage (cf. section [Mise à jour auto des applications serveur ou monopostes](https://doc.4d.com/4Dv17R6/4D/17-R6/Automatic-updating-of-server-or-single-user-applications.300-4354721.en.html)).

#### Emplacement de 4D Volume Desktop

Pour pouvoir générer une application autonome, vous devez dans un premier temps désigner l’emplacement du dossier de 4D Volume Desktop :

* *Windows* - le dossier contient notamment les fichiers 4D Volume Desktop.4DE, 4D Volume Desktop.RSR ainsi que différents fichiers et dossiers nécessaires à son fonctionnement. Ces éléments doivent être placés au premier niveau du dossier sélectionné..
* *macOS* - 4D Volume Desktop est fourni sous la forme d’un progiciel structuré contenant divers fichiers et dossiers génériques.

Pour sélectionner le dossier de 4D Volume Desktop, cliquez sur le bouton**[...]**. Une boîte de dialogue vous permettant de désigner le dossier (Windows) ou le progiciel (macOS) de 4D Volume Desktop apparaît.

Une fois le dossier sélectionné, son chemin d’accès complet est affiché et, s’il contient effectivement 4D Volume Desktop, l’option de génération d’application exécutable est activée.

> Le numéro de version de 4D Volume Desktop doit correspondre à celle du 4D Developer Edition. Par exemple, si vous utilisez 4D Developer v18, vous devez sélectionner un 4D Volume Desktop v18.

#### Mode de liaison des données

Cette option vous permet de sélectionner le mode de liaison entre l'application fusionnée et le fichier de données local. Deux modes de liaison sont disponibles, choisissez le mode qui correspond le mieux à vos besoins :

* **Nom de l'application** (défaut) - l'application 4D ouvre automatiquement le dernier fichier de données ouvert correspondant à la structure. Cela vous permet de déplacer librement le dossier de l'application sur le disque. Il est conseillé en général pour les applications fusionnées, à moins que vous n'ayez spécifiquement besoin de dupliquer l'application.

* **Chemin de l'application** - L'application 4D fusionnée va lire le contenu du fichier *lastDataPath.xml* des préférences de l'utilisateur et tenter d'ouvrir le fichier de données dont l'attribut "executablePath" correspond au chemin d'accès de l'application. Si cette clé est trouvée, son fichier de données correspondant (défini via son attribut "dataFilePath") est ouvert. Sinon, le dernier fichier de données utilisé est ouvert (mode par défaut).

Pour plus d'informations sur le mode de liaison des données, reportez-vous au paragraphe [Dernier fichier de données ouvert](#last-data-file-opened).

#### Fichiers générés

Lorsque vous cliquez sur le bouton **Construire**, crée automatiquement un dossier **Final Application** dans le **“Dossier de destination”**. Dans le dossier Final Application, il existe un sous-dossier dont le nom correspond à l'application spécifiée et qu'il contient.

Si vous avez défini “MonAppli” dans la zone “Nom de l’application”, vous devez trouver dans ce sous-dossier (MyProject) les fichiers suivants :

* *Sous Windows*
    
    * MonAppli.exe qui est votre exécutable et MonAppli.RSR qui contient les ressources de l’application.
    * Les dossiers 4D Extensions et Resources ainsi que les diverses librairies (DLL), les dossiers Native Components et SASL Plugins, nécessaires au fonctionnement de l’application
    * Un dossier Database contenant notamment le dossier Resources et le fichier MyProject.4DZ. Ils constituent la structure compilée de la base et son dossier Resources. **Note **: Ce dossier contient également le dossier *Default Data*, s'il a été défini (cf. [Gestion du fichier de données dans les applications finales](#data-file-management-in-final-applicatons)).
    * (Facultatif) Un dossier Components et/ou un dossier Plugins contenant les fichiers des composants et/ou des plug-ins éventuellement inclus dans la base. Pour plus d’informations sur ce point, reportez-vous à la section Page [Plugins et composants](#plugins-and-components).
    * Un dossier Licences contenant sous forme de fichier XML la liste des numéros de licence ayant été intégrés dans l’application. Pour plus d’informations sur ce point, reportez-vous à la section [Licences & Certificat](#licenses-and-certificate). 
    * Les éléments supplémentaires éventuellement ajoutés dans le dossier 4D Volume Desktop (cf. [Personnaliser le dossier 4D Volume Desktop](#customizing-4d-volume-desktop-folder)).
    
    Tous ces éléments doivent être conservés dans le même dossier afin que l’exécutable fonctionne.

* Sous macOS</em></p> 
    - Un progiciel (package) nommé MyProject.app contenant votre application et tous les éléments nécessaires à son fonctionnement, y compris les plug-ins, composants et licences. Pour plus d’informations sur l’intégration des composants et des plug-ins, reportez-vous à la section [Page Plugins et composants](#plugins-and-components). Pour plus d’informations sur l’intégration des licences, reportez-vous à la [Page Licences & Certificat](#licenses-and-certificate). **Note **: Sous Mac Os, la commande [Fichier application](https://doc.4d.com/4Dv17R6/4D/17-R6/Application-file.301-4311297.en.html) du langage 4D retourne le chemin d’accès du fichier NomApplication (situé dans le dossier Contents:MacOS du progiciel) et non celui du fichier .comp (dossier Contents:Resources du progiciel). 

#### Personnaliser le dossier 4D Volume Desktop

Lors de la construction de l’application exécutable, 4D duplique le contenu du dossier 4D Volume Desktop dans le dossier *Final Application* du dossier de destination. Vous pouvez donc parfaitement personnaliser le contenu du dossier 4D Volume Desktop d’origine en fonction de vos besoins. Vous pouvez, par exemple :

* installer une version de 4D Volume Desktop correspondant à une langue spécifique ;
* ajouter un dossier *PlugIns* personnalisé ;
* personnaliser le contenu du dossier *Resources*.

> Sous Mac Os, 4D Volume Desktop est fourni sous forme de progiciel. Pour le modifier, vous devrez tout d’abord afficher son contenu (effectuez **Control+clic** sur son icône).

#### Emplacements des fichiers Web

Si votre application exécutable est utilisée en tant que serveur Web, les fichiers et dossiers requis par le serveur doivent être installés à des emplacements spécifiques. Ces éléments sont les suivants :

* fichiers *cert.pem* et *key.pem* (facultatifs) : ces fichiers sont utilisés pour les connexions SSL ainsi que par les commandes de cryptage des données,
* dossier racine Web par défaut,

Ces éléments doivent être installés :

- **Sous Windows** : dans le sous-dossier *Final Application\MonAppli\Database*.
- **Sous Mac OS** : à côté du progiciel *MyProject.app*.

## Page Client/Serveur 

Dans cet onglet, vous pouvez générer des applications client/serveur personnalisées, homogènes, multi-plate-formes et avec option de mise à jour automatique.

![](assets/en/Project/buildappCSProj.png) 

### Qu’est-ce qu’une application client/serveur ?

Une application client/serveur est issue de la combinaison de trois éléments :

- une base de données 4D compilée,
- l’application 4D Server,
- l’application 4D Volume Desktop (macOS et/ou Windows).

Une fois générée, une application client/serveur se compose de deux parties homogènes, la partie Serveur (unique), et la partie Cliente (à installer sur chaque poste client).

En outre, l’application client/serveur est personnalisée et son maniement est simplifié :

- Pour lancer la partie serveur, l’utilisateur double-clique simplement sur l’application serveur. Il n’est pas nécessaire de sélectionner la base.
- Pour lancer la partie cliente, l’utilisateur double-clique simplement sur l’application cliente, qui se connecte directement à l’application serveur. Il n’est pas nécessaire de choisir une base de données dans une boîte de dialogue de connexion. Le client cible le serveur soit via son nom, lorsque client et serveur sont sur le même sous-réseau, soit via son adresse IP, à définir via la clé XML `IPAddress` dans le fichier buildapp.4DSettings. Si la connexion échoue, [des mécanismes alternatifs spécifiques peuvent être mis en place](#management-of-client-connections). Il est également possible de “forcer” l’affichage de la boîte de dialogue de connexion standard en maintenant la touche **Option** (macOS) ou **Alt** (Windows) enfoncée lors du lancement de l’application cliente. Seule la partie cliente peut se connecter à la partie serveur correspondante. Si un utilisateur tente de se connecter à la partie serveur à l’aide d’une application 4D standard, un message d’erreur est retourné et la connexion est impossible.
- Une application client/serveur peut être paramétrée de telle sorte que la partie cliente [puisse être mise à jour automatiquement via le réseau](#copy-of-client-applications-in-the-server-application).
- Il est également possible d'automatiser la mise à jour de la partie serveur moyennant l'utilisation d'une séquence de commandes du langage ([SET UPDATE FOLDER](https://doc.4d.com/4Dv17R6/4D/17-R6/SET-UPDATE-FOLDER.301-4311308.en.html) and [RESTART 4D](https://doc.4d.com/4Dv17R6/4D/17-R6/RESTART-4D.301-4311311.en.html)).

### Construire application serveur

Cochez cette option pour générer la partie serveur de votre application lors de la phase de construction. Vous devez désigner sur votre disque l’emplacement de l’application 4D Server à utiliser. Ce 4D Server doit correspondre à la plate-forme courante (qui sera également la plate-forme de l’application serveur).

#### Emplacement de 4D Server

Cliquez sur le **bouton [...]** et utilisez la boîte de dialogue de *recherche de dossier* pour localiser l’application 4D Server. Sous macOs, vous devez sélectionner directement le progiciel (package) de 4D Server.

#### Current version

Permet d’indiquer le numéro de version courante de l’application générée. Vous pourrez par la suite accepter ou refuser les connexions des applications clientes en fonction de leur numéro de version. L’intervalle de compatibilité des applications clientes et serveur est défini à l’aide de [clés XML](#build-application-settings) spécifiques.

#### Mode de liaison des données

Cette option vous permet de sélectionner le mode de liaison entre l'application fusionnée et le fichier de données local. Deux modes de liaison sont disponibles, choisissez le mode qui correspond le mieux à vos besoins :

* **Nom de l'application** (défaut) - L'application 4D ouvre automatiquement le dernier fichier de données ouvert correspondant à la structure. Cela vous permet de déplacer librement le dossier de l'application sur le disque. Il est conseillé en général pour les applications fusionnées, à moins que vous n'ayez spécifiquement besoin de dupliquer l'application.

* **Chemin de l'application** - L'application 4D fusionnée va lire le contenu du fichier *lastDataPath.xml* des préférences de l'utilisateur et tenter d'ouvrir le fichier de données dont l'attribut "executablePath" correspond au chemin d'accès de l'application. Si cette clé est trouvée, son fichier de données correspondant (défini via son attribut "dataFilePath") est ouvert. Otherwise, the last opened data file is opened (default mode).

For more information about the data linking mode, refer to the [Last data file opened](#last-data-file-opened) section.

### Build client application

Checking this option generates the client part of your application during the building phase.

#### 4D Volume Desktop

You must designate the location on your disk of the 4D Volume Desktop application to be used. This 4D Volume Desktop must correspond to the current platform (which will also be the platform of the client application). If you want to build a client application for a “concurrent” platform, you must carry out an additional build operation using a 4D application running on that platform. This is only necessary for the initial version of the client application since subsequent updates can be handled directly on the same platform using the automatic update mechanism. For more information about this point, see [Customizing 4D Server and/or 4D Client folders](#customizing-4d-server-and-or-4d-client-folders).

> The 4D Volume Desktop version number must match the 4D Developer Edition version number. For example, if you use 4D Developer v18, you must select a 4D Volume Desktop v18.

If you want the client application to connect to the server using a specific address (other than the server name published on the sub-network), you must use the `IPAddress` XML key in the buildapp.4DSettings file. For more information about this file, refer to the description of the `BUILD APPLICATION` command. You can also implement specific mechanisms in the event of a connection failure. The different scenarios proposed are described in the [Management of connections by client applications](#management-of-client-connections) paragraph.

#### Copy of client applications in the server application

The options of this area to set up the mechanism for updating the client parts of your client/server applications using the network each time a new version of the application is generated.

- **Allow automatic update of Windows client application** - Check these options so that your Windows client/server application can take advantage of the automatic update mechanism for clients via the network. 
- **Allow automatic update of Macintosh client application** - Check these options so that your Macintosh client/server application can take advantage of the automatic update mechanism for clients via the network.

- **Allow automatic update of Macintosh client application** - If you want to create a cross-platform client application, you must designate the location on your disk of the 4D Volume Desktop application that corresponds to the “concurrent” platform of the build platform.
    
    For example, if you build your application in Windows, you must use the **[...]** button to designate the 4D Volume Desktop macOS application (provided as a package).

#### Displaying update notification

The client application update notification is carried out automatically following the server application update.

It works as follows: when a new version of the client/server application is built using the application builder, the new client portion is copied as a compressed file in the **Upgrade4DClient** subfolder of the **ApplicationName** Server folder (in macOS, these folders are included in the server package). If you have followed the process for generating a cross-platform client application, a .*4darchive* update file is available for each platform:

To trigger client application update notifications, simply replace the old version of the server application with the new one and then execute it. The rest of the process is automatic.

On the client side, when the “old” client application tries to connect to the updated server application, a dialog box is displayed on the client machine, indicating that a new version is available. The user can either update their version or cancel the dialog box.

* If the user clicks **OK**, the new version is downloaded to the client machine over the network. Once the download is complete, the old client application is closed and the new version is launched and connects to the server. The old version of the application is then placed in the machine’s recycle bin.
* If the user clicks **Cancel**, the update is cancelled; if the old version of the client application is not in the range of versions accepted by the server (please refer to the following paragraph), the application is closed and connection is impossible. Otherwise (by default), the connection is established.

#### Forcing automatic updates

In some cases, you may want to prevent client applications from being able to cancel the update download. For example, if you used a new version of the 4D Server source application, the new version of the client application must absolutely be installed on each client machine.

To force the update, simply exclude the current version number of client applications (X-1 and earlier) in the version number range compatible with the server application. In this case, the update mechanism will not allow non-updated client applications to connect. For example, if the new version of the client-server application is 6, you can stipulate that any client application with a version number lower than 6 will not be allowed to connect.

The [current version number](build-server-application) is set on the Client/Server page of the Build Application dialog box. The intervals of authorized numbers are set in the application project using specific [XML keys](#build-application-settings).

#### Update Error

If 4D cannot carry out the update of the client application, the client machine displays the following error message: “The update of the client application failed. The application is now going to quit.”

There are many possible causes for this error. When you get this message, it is advisable to check the following parameters first off:

* **Pathnames** - Check the validity of the pathnames set in the application project via the Application builder dialog box or via XML keys (for example *ClientMacFolderToWin*). More particularly, check the pathnames to the versions of 4D Volume Desktop.
* **Read/write privileges** - On the client machine, check that the current user has write access rights for the client application update.

### Generated files

Once a client/server application is built, you will find a new folder in the destination folder named **Client Server executable**. This folder contains two subfolders, *\<ApplicationName>Client* and *\<ApplicationName>Server*.

> These folders are not generated if an error occurs. In this case, open the [log file](#log-file) in order to find out the cause of the error.

The *\<ApplicationName>Client* folder contains the client portion of the application corresponding to the execution platform of the application builder. This folder must be installed on each client machine. The *\<ApplicationName>Server* folder contains the server portion of the application.

The contents of these folders vary depending on the current platform:

* *Windows* - Each folder contains the application executable file, named *\<ApplicationName>Client.exe* for the client part and *\<ApplicationName>Server.exe* for the server part as well as the corresponding .rsr files. The folders also contain various files and folders necessary for the applications to work and customized items that may be in the original 4D Volume Desktop and 4D Server folders.
* *macOS* - Each folder contains only the application package, named \<ApplicationName> Client for the client part and \<ApplicationName> Server for the server part. Each package contains all the necessary items for the application to work. Under macOS, launch a package by double-clicking it.
    
    >     The macOS packages built contain the same items as the Windows subfolders. You can display their contents (**Control+click** on the icon) in order to be able to modify them. 
    >     

If you checked the “Allow automatic update of client application” option, an additional subfolder called *Upgrade4DClient* is added in the *\<ApplicationName>Server* folder/package. This subfolder contains the client application in macOS and/or Windows format as a compressed file. This file is used during the automatic client application update.

#### Customizing 4D Volume Desktop folder

When building a double-clickable application, 4D copies the contents of the 4D Volume Desktop folder into the Final Application subfolder of the destination folder. You are then able to customize the contents of the original 4D Volume Desktop folder according to your needs. You can, for instance:

- Install a 4D Volume Desktop version corresponding to a specific language;
- Add a custom PlugIns folder;
- Customize the contents of the Resources folder.

#### Location of Web files

If the server and/or client part of your double-clickable application is used as a Web server, the files and folders required by the server must be installed in specific locations. These items are the following:

- *cert.pem* and *key.pem* files (optional): These files are used for SSL connections and by data encryption commands,
- Default Web root folder (WebFolder).

Items must be installed: * **on Windows** * **Server application** - in the *Client Server executable\ \<ApplicationName>Server\Server Database* subfolder. * **Client application** - in the *Client Server executable\ \<ApplicationName>Client* subfolder.

* **on macOS** 
    * **Server application** - next to the *\<ApplicationName>Server* software package.
    * **Client application** - next to the *\<ApplicationName>Client* software package.

## Plugins & components page

On this tab, you set each [plug-in](Concepts/plug-ins.md) and each [component](Concepts/components.md) that you will use in your stand-alone or client/server application.

The page lists the elements loaded by the current 4D application:

![](assets/en/Project/buildapppluginsProj.png)

* **Active** column - Indicates that the items will be integrated into the application package built. All the items are checked by default. To exclude a plug-in or a component, deselect the check box next to it.

* **Plugins and components** column - Displays the name of the plug-in/component.

* **ID** column - Displays the plug-in/component's identification number (if any).

* **Type** column - Indicates the type of item: plug-in or component.

If you want to integrate other plug-ins or components into the executable application, you just need to place them in a **PlugIns** or **Components** folder next to the 4D Volume Desktop application or next to the 4D Server application. The mechanism for copying the contents of the source application folder (see [Customizing the 4D Volume Desktop folder](#customizing-4d-volume-desktop-folder)) can be used to integrate any type of file into the executable application.

If there is a conflict between two different versions of the same plug-in (one loaded by 4D and the other located in the source application folder), priority goes to the plug-in installed in the 4D Volume Desktop/4D Server folder. However, if there are two instances of the same component, the application will not open.

> The use of plug-ins and/or components in a deployment version requires the necessary license numbers.

## Licenses & Certificate page

The Licences & Certificate page can be used to:

* designate the license number(s) that you want to integrate into your single-user stand-alone application
* sign the application by means of a certificate in macOS.

![](assets/en/Project/buildapplicenseProj.png)

### Licenses

This tab displays the list of available deployment licenses that you can integrate into your application. By default, the list is empty. You must explicitly add your *4D Developer Professional* license as well as each *4D Desktop Volume* license to be used in the application built. You can add another 4D Developer Professional number and its associated licenses other than the one currently being used.

To remove or add a license, use the **[+]** and **[-]** buttons at the bottom of the window.

When you click on the \[+] button, an open file dialog box appears displaying by default the contents of the *Licenses* folder of your machine. For more information about the location of this folder, refer to the [Get 4D folder](https://doc.4d.com/4Dv17R6/4D/17-R6/Get-4D-folder.301-4311294.en.html) command.

You must designate the files that contain your Developer license as well as those containing your deployment licenses. These files were generated or updated when the *4D Developer Professional* license and the *4D Desktop Volume* licenses were purchased.

Once you have selected a file, the list will indicate the characteristics of the license that it contains.

* **License #** - Product license number
* **License** - Name of the product
* **Expiration date** - Expiration date of the license (if any)
* **Path** - Location on disk

If a license is not valid, a message will warn you.

You can designate as many valid files as you want. When building an executable application, 4D will use the most appropriate license available.

> Dedicated "R" licenses are required to build applications based upon "R-release" versions (license numbers for "R" products start with "R-4DDP").

After the application is built, a new deployment license file is automatically included in the Licenses folder next to the executable application (Windows) or in the package (macOS).

### OS X signing certificate

The application builder can sign merged 4D applications under macOS (single-user applications, 4D Server and client parts under macOS). Signing an application authorizes it to be executed using the Gatekeeper functionality of macOS when the "Mac App Store and identified Developers" option is selected (see "About Gatekeeper" below).

- Check the **Sign application** option to include certification in the application builder procedure for OS X. 4D will check the availability of elements required for certification when the build occurs: 

![](assets/en/Project/buildapposxcertProj.png)

This option is displayed under both Windows and macOS, but it is only taken into account for macOS versions.

* **Name of certificate** - Enter the name of your developer certificate validated by Apple in this entry area. The certificate name is usually the name of the certificate in the Keychain Access utility (part in red in the following example):

![](assets/en/Project/certificate.png)

To obtain a developer certificate from Apple, Inc., you can use the commands of the Keychain Access menu or go here: <http://developer.apple.com/library/mac/#documentation/Security/Conceptual/CodeSigningGuide/Procedures/Procedures.html>.

> This certificate requires the presence of the Apple codesign utility, which is provided by default and usually located in the “/usr/bin/” folder. If an error occurs, make sure that this utility is present on your disk.

#### About Gatekeeper

Gatekeeper is a security feature of OS X that controls the execution of applications downloaded from the Internet. If a downloaded application does not come from the Apple Store or is not signed, it is rejected and cannot be launched.

The **Sign application** option of the 4D application builder lets you generate applications that are compatible with this option by default.

#### About Notarization

Application notarization is highly recommended by Apple as of macOS 10.14.5 (Mojave) and 10.15 (Catalina), since non-notarized applications deployed via the internet are blocked by default.

In 4D v18, the [built-in signing features](#os-x-signing-certificate) have been updated to meet all of Apple's requirements to allow using the Apple notary service. The notarization itself must be conducted by the developer and is independent from 4D. Note also that it requires installing Xcode.

For more information on the notarization, please refer to [this page on the Apple developer website](https://developer.apple.com/documentation/xcode/notarizing_your_app_before_distribution/customizing_the_notarization_workflow).

## Customizing application icons

4D associates a default icon with stand-alone, server, and client applications, however you can customize the icon for each application.

* **macOs** - When building a double-clickable application, 4D handles the customizing of the icon. In order to do this, you must create an icon file (icns type), prior to building the application file, and place it next to the project folder.
    
    > Apple, Inc. provides a specific tool for building *icns* icon files (for more information, please refer to [Apple documentation](https://developer.apple.com/library/archive/documentation/GraphicsAnimation/Conceptual/HighResolutionOSX/Optimizing/Optimizing.html#//apple_ref/doc/uid/TP40012302-CH7-SW2)).
    
    Your icon file must have the same name as the project file and include the *.icns* extension. 4D automatically takes this file into account when building the double-clickable application (the *.icns* file is renamed *ApplicationName.icns* and copied into the Resources folder; the *CFBundleFileIcon* entry of the *info.plist* file is updated).

* **Windows** - When building a double-clickable application, 4D handles the customizing of its icon. In order to do this, you must create an icon file (*.ico* extension), prior to building the application file, and place it next to the project folder.
    
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

```code4d
userPrefs:=Get 4D folder(Active 4D Folder)
```

The data file path is stored in a dedicated file, named *lastDataPath.xml*.

Thanks to this architecture, when you provide an update of your application, the local user data file (last data file used) is opened automatically at first launch.

This mechanism is usually suitable for standard deployments. However, for specific needs, for example if you duplicate your merged applications, you might want to change the way that the data file is linked to the application (described below).

#### Configuring the data linking mode

With your compiled applications, 4D automatically uses the last data file opened. By default, the path of the data file is stored in the application's user preferences folder and is linked to the **application name**.

This may be unsuitable if you want to duplicate a merged application intended to use different data files. Duplicated applications actually share the application's user preferences folder and thus, always use the same data file -- even if the data file is renamed, because the last file used for the application is opened.

4D therefore lets you link the data file path to the application path. In this case, the data file will be linked using a specific path and will not just be the last file opened. You therefore link your data **by application path**.

This mode allows you to duplicate your merged applications without breaking the link to the data file. However, with this option, if the application package is moved on the disk, the user will be prompted for a data file, since the application path will no longer match the "executablePath" attribute (after a user has selected a data file, the *lastDataPath.xml* file is updated accordingly).

*Duplication when data linked by application name:* ![](assets/en/Project/datalinking1.png)

*Duplication when data linked by application path:* ![](assets/en/Project/datalinking2.png)

You can select the data linking mode during the build application process. You can either:

- Use the [Application page](#application) or [Client/Server page](#client-server) of the Build Application dialog box.
- Use the **LastDataPathLookup** XML key (single-user application or server application).

### Defining a default data folder

4D allows you to define a default data file at the application building stage. When the application is launched for the first time, if no local data file is found (see [opening sequence described above](#opening-the-data-file)), the default data file is automatically opened silently in read-only mode by 4D. This gives you better control over data file creation and/or opening when launching a merged application for the first time.

More specifically, the following cases are covered:

- Avoiding the display of the 4D "Open Data File" dialog box when launching a new or updated merged application. You can detect, for example at startup, that the default data file has been opened and thus execute your own code and/or dialogs to create or select a local data file.
- Allowing the distribution of merged applications with read-only data (for demo applications, for instance).

To define and use a default data file:

- You provide a default data file (named "Default.4DD") and store it in a default folder (named "Default Data") inside the database project folder. This file must be provided along with all other necessary files, depending on the database configuration: index (.4DIndx), external Blobs, journal, etc. It is your responsibility to provide a valid default data file. Note however that since a default data file is opened in read-only mode, it is recommended to uncheck the "Use Log File" option in the original structure file before creating the data file.
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

```code4d
userPrefs:=Get 4D folder(Active 4D Folder)
```

This mechanism addresses the case where the primary targeted server is temporary unavailable for some reason (maintenance mode for example). When this case occurs for the first time, the server selection dialog box is displayed (if allowed, see below) and the user can manually select an alternate server, whose path is then saved if the connection is successful. Any subsequent unavailability would be handled automatically through the "lastServer.xml" path information.

> - When client applications cannot permanently benefit from the discovery service, for example because of the network configuration, it is recommended that the developer provide a host name at build time using the [IPAddress](https://doc.4d.com/4Dv17R6/4D/17-R6/IPAddress.300-4465710.en.html) key in the "BuildApp.4DSettings" file. The mechanism addresses cases of temporary unavailability. 
> - Pressing the **Alt/Option** key at startup to display the server selection dialog box is still supported in all cases.

### Availability of the server selection dialog box in case of error

You can choose whether or not to display the standard server selection dialog box on merged client applications when the server cannot be reached. The configuration depends on the value of the [ServerSelectionAllowed](https://doc.4d.com/4Dv17R6/4D/17-R6/ServerSelectionAllowed.300-4465714.en.html) XML key on the machine where the application was built:

- **Display of an error message with no access possible to the server selection dialog box**. Default operation. The application can only quit.  
    `ServerSelectionAllowed`: **False** or key omitted ![](assets/en/Project/connect1.png)

- **Display of an error message with access to the server selection dialog box possible**. The user can access the server selection window by clicking on the **Select...** button.  
    `ServerSelectionAllowed`: **True** ![](assets/en/Project/connect2.png) ![](assets/en/Project/connect3.png)