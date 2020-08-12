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
Si vous avez nommé votre application *Moncomposant*, 4D créera un dossier Component contenant le dossier *MyComponent.4dbase* : <p>*\<destination>/Components/name.4dbase/\<name>.4DZ*.

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

On Windows, this feature creates an executable file (.exe). On macOS, it handles the creation of software packages.

The principle consists of merging a compiled structure file with 4D Volume Desktop. Les fonctionnalités offertes par le fichier 4D Volume Desktop sont liées à l’offre commerciale à laquelle vous avez souscrite. For more information about this point, refer to the sales documentation and to the [4D Store](http://www.4d.com/).

You can define a default data file or allow users to create and use their own data file (see the [Data file management in final applications](https://doc.4d.com/4Dv17R6/4D/17-R6/Data-file-management-in-final-applications.300-4354729.en.html) section).

It is possible to automate the update of merged single-user applications by means of a sequence of language commands (see [Automatic updating of server or single-user applications](https://doc.4d.com/4Dv17R6/4D/17-R6/Automatic-updating-of-server-or-single-user-applications.300-4354721.en.html).

#### 4D Volume Desktop Location

In order to build a stand-alone application, you must first designate the folder containing the 4D Volume Desktop file:

*   *Windows* - the folder contains the 4D Volume Desktop.4DE, 4D Volume Desktop.RSR, as well as various files and folders required for its operation. These items must be placed at the same level as the selected folder.
*   *macOS* - 4D Volume Desktop is provided in the form of a structured software package containing various generic files and folders.

To select the 4D Volume Desktop folder, click on the **[...]** button. A dialog box appears allowing you to designate the 4D Volume Desktop folder (Windows) or package (macOS).

Once the folder is selected, its complete pathname is displayed and, if it actually contains 4D Volume Desktop, the option for building an executable application is activated.

> The 4D Volume Desktop version number must match the 4D Developer Edition version number. For example, if you use 4D Developer v18, you must select a 4D Volume Desktop v18.

#### Data linking mode

This option lets you choose the linking mode between the merged application and the local data file. Two data linking modes are available:

*   **By application name** (default) - The 4D application automatically opens the most recently opened data file corresponding to the structure file. Cela vous permet de déplacer librement le dossier de l'application sur le disque. This option should generally be used for merged applications, unless you specifically need to duplicate your application.

*   **By application path** - The merged 4D application will parse the application's *lastDataPath.xml* file and try to open the data file with an "executablePath" attribute that matches the application's full path. Si cette clé est trouvée, son fichier de données correspondant (défini via son attribut "dataFilePath") est ouvert. Otherwise, the last opened data file is opened (default mode).

For more information about the data linking mode, refer to the [Last data file opened](#last-data-file-opened) section.


#### Generated files

When you click on the **Build** button, 4D automatically creates a **Final Application** folder in the specified **Destination Folder**. Inside the Final Application folder is a subfolder with the name of the specified application in it. Inside the Final Application folder is a subfolder with the name of the specified application in it.

If you have specified "MyProject" as the name of the application, you will find the following files in this subfolder (aka MyProject):

*   *Windows*
    *   MyProject.exe  - Your executable and a MyProject.rsr (the application resources)
    *   4D Extensions folder, Resources folder, various libraries (DLL), Native Components folder, SASL Plugins folder - Files necessary for the operation of the application
    *   Database folder  - Includes a Resources folder and  MyProject.4DZ file. Ils constituent la structure compilée de la base et son dossier Resources. **Note**: This folder also contains the *Default Data* folder, if it has been defined (see [Data file management in final applications](#data-file-management-in-final-applicatons).</p>
    *   (Optional) Components folder and/or Plugins folder - Contains any components and/or plug-in files included in the database. For more information about this, refer to the [Plugins and components](#plugins-and-components) section.
    *   Licenses folder - An XML file of license numbers integrated into the application. For more information about this, refer to the [Licenses & Certificate](#licenses-and-certificate) section.
    *   Additional items added to the 4D Volume Desktop folder, if any (see [Customizing the 4D Volume Desktop folder](#customizing-4d-volume-desktop-folder)).

    All these items must be kept in the same folder in order for the executable to operate.

*   *macOS*
    -   A software package named MyProject.app containing your application and all the items necessary for its operation, including the plug-ins, components and licenses. Pour plus d’informations sur l’intégration des composants et des plug-ins, reportez-vous à la section [Page Plugins et composants](#plugins-and-components). Pour plus d’informations sur l’intégration des licences, reportez-vous à la [Page Licences & Certificat](#licenses-and-certificate). **Note**: In macOS, the [Application file](https://doc.4d.com/4Dv17R6/4D/17-R6/Application-file.301-4311297.en.html) command of the 4D language returns the pathname of the ApplicationName file (located in the Contents:macOS folder of the software package) and not that of the .comp file (Contents:Resources folder of the software package).


#### Customizing 4D Volume Desktop folder

When building a stand-alone application, 4D copies the contents of the 4D Volume Desktop folder into Destination folder > *Final Application* folder. Vous pouvez donc parfaitement personnaliser le contenu du dossier 4D Volume Desktop d’origine en fonction de vos besoins. You can, for example:

*   Install a 4D Volume Desktop version corresponding to a specific language;
*   Add a custom *PlugIns* folder;
*   Customize the contents of the *Resources* folder.
> In macOS, 4D Volume Desktop is provided in the form of a software package. In order to modify it, you must first display its contents (**Control+click** on the icon).


#### Location of Web files

If your stand-alone application is used as a Web server, the files and folders required by the server must be installed in specific locations. These items are the following:

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

- To launch the server portion, the user simply double-clicks on the server application. The database does not need to be selected.
- To launch the client portion, the user simply double-clicks the client application, which connects directly to the server application. Il n’est pas nécessaire de choisir une base de données dans une boîte de dialogue de connexion. Le client cible le serveur soit via son nom, lorsque client et serveur sont sur le même sous-réseau, soit via son adresse IP, à définir via la clé XML `IPAddress` dans le fichier buildapp.4DSettings. Si la connexion échoue, [des mécanismes alternatifs spécifiques peuvent être mis en place](#management-of-client-connections). You can "force" the display of the standard connection dialog box by holding down the **Option** (macOS) or **Alt** (Windows) key while launching the client application. Seule la partie cliente peut se connecter à la partie serveur correspondante. If a user tries to connect to the server portion using a standard 4D application, an error message is returned and connection is impossible.
- A client/server application can be set so that the client portion [can be updated automatically over the network](#copy-of-client-applications-in-the-server-application).
- It is also possible to automate the update of the server part through the use of a sequence of language commands ([SET UPDATE FOLDER](https://doc.4d.com/4Dv17R6/4D/17-R6/SET-UPDATE-FOLDER.301-4311308.en.html) and [RESTART 4D](https://doc.4d.com/4Dv17R6/4D/17-R6/RESTART-4D.301-4311311.en.html)).



### Build server application

Check this option to generate the server part of your application during the building phase. Vous devez désigner sur votre disque l’emplacement de l’application 4D Server à utiliser. This 4D Server must correspond to the current platform (which will also be the platform of the server application). This 4D Server must correspond to the current platform (which will also be the platform of the server application).

#### 4D Server location

Click on the **[...]** button and use the *Browse for folder* dialog box to locate the 4D Server application. In macOS, you must select the 4D Server package directly.

#### Current version

Used to indicate the current version number for the application generated. Vous pourrez par la suite accepter ou refuser les connexions des applications clientes en fonction de leur numéro de version. The interval of compatibility for client and server applications is set using specific [XML keys](#build-application-settings)).

#### Data linking mode

This option lets you choose the linking mode between the merged application and the local data file.

#### Data linking mode

This option lets you choose the linking mode between the merged application and the local data file. Two data linking modes are available:

*   **By application name** (default) - The 4D application automatically opens the most recently opened data file corresponding to the structure file. Cela vous permet de déplacer librement le dossier de l'application sur le disque. This option should generally be used for merged applications, unless you specifically need to duplicate your application.

*   **By application path** - The merged 4D application will parse the application's *lastDataPath.xml* file and try to open the data file with an "executablePath" attribute that matches the application's full path. Si cette clé est trouvée, son fichier de données correspondant (défini via son attribut "dataFilePath") est ouvert. Otherwise, the last opened data file is opened (default mode).

For more information about the data linking mode, refer to the [Last data file opened](#last-data-file-opened) section.


### Build client application

Checking this option generates the client part of your application during the building phase.

#### 4D Volume Desktop

You must designate the location on your disk of the 4D Volume Desktop application to be used. Ce 4D Volume Desktop doit correspondre à la plate-forme courante (qui sera également la plate-forme de l’application cliente). Si vous souhaitez générer une version de l’application cliente pour la plate-forme “concurrente”, vous devez répéter l'opération en utilisant une application 4D tournant sur cette plate-forme. Cette étape est nécessaire uniquement pour la version initiale de l'application cliente car les mises à jour suivantes pourront être gérées directement depuis une seule plate-forme via le mécanisme des mises à jour automatiques. For more information about this point, see [Customizing 4D Server and/or 4D Client folders](#customizing-4d-server-and-or-4d-client-folders).

> The 4D Volume Desktop version number must match the 4D Developer Edition version number. For example, if you use 4D Developer v18, you must select a 4D Volume Desktop v18.

If you want the client application to connect to the server using a specific address (other than the server name published on the sub-network), you must use the `IPAddress` XML key in the buildapp.4DSettings file. Pour plus d'informations sur ce fichier, reportez-vous à la description de la commande`BUILD APPLICATION`. Vous pouvez également mettre en place des mécanismes spécifiques en cas d'échec de la connexion. The different scenarios proposed are described in the [Management of connections by client applications](#management-of-client-connections) paragraph.

#### Copy of client applications in the server application

The options of this area to set up the mechanism for updating the client parts of your client/server applications using the network each time a new version of the application is generated.

- **Allow automatic update of Windows client application** - Check these options so that your Windows client/server application can take advantage of the automatic update mechanism for clients via the network.
- **Allow automatic update of Macintosh client application** - Check these options so that your Macintosh client/server application can take advantage of the automatic update mechanism for clients via the network.

*   **Allow automatic update of Macintosh client application** - If you want to create a cross-platform client application, you must designate the location on your disk of the 4D Volume Desktop application that corresponds to the “concurrent” platform of the build platform.

    For example, if you build your application in Windows, you must use the **[...]** button to designate the 4D Volume Desktop macOS application (provided as a package).



#### Displaying update notification

The client application update notification is carried out automatically following the server application update.

It works as follows: when a new version of the client/server application is built using the application builder, the new client portion is copied as a compressed file in the **Upgrade4DClient** subfolder of the **ApplicationName** Server folder (in macOS, these folders are included in the server package). If you have followed the process for generating a cross-platform client application, a .*4darchive* update file is available for each platform:

To trigger client application update notifications, simply replace the old version of the server application with the new one and then execute it. The rest of the process is automatic. The rest of the process is automatic.

On the client side, when the “old” client application tries to connect to the updated server application, a dialog box is displayed on the client machine, indicating that a new version is available. The user can either update their version or cancel the dialog box.

*   If the user clicks **OK**, the new version is downloaded to the client machine over the network. A l’issue du téléchargement, l’ancienne application client quitte, la nouvelle est lancée et se connecte au serveur. The old version of the application is then placed in the machine’s recycle bin.
*   If the user clicks **Cancel**, the update is cancelled; if the old version of the client application is not in the range of versions accepted by the server (please refer to the following paragraph), the application is closed and connection is impossible. Otherwise (by default), the connection is established.

#### Forcing automatic updates

In some cases, you may want to prevent client applications from being able to cancel the update download. For example, if you used a new version of the 4D Server source application, the new version of the client application must absolutely be installed on each client machine.

To force the update, simply exclude the current version number of client applications (X-1 and earlier) in the version number range compatible with the server application. Dans ce cas, le mécanisme de mise à jour n’autorisera pas la connexion des applications clientes non mises à jour. For example, if the new version of the client-server application is 6, you can stipulate that any client application with a version number lower than 6 will not be allowed to connect.

The [current version number](build-server-application) is set on the Client/Server page of the Build Application dialog box.

The [current version number](build-server-application) is set on the Client/Server page of the Build Application dialog box. The intervals of authorized numbers are set in the application project using specific [XML keys](#build-application-settings).


#### Update Error

If 4D cannot carry out the update of the client application, the client machine displays the following error message: “The update of the client application failed. The application is now going to quit.”

There are many possible causes for this error. When you get this message, it is advisable to check the following parameters first off:

*   **Pathnames** - Check the validity of the pathnames set in the application project via the Application builder dialog box or via XML keys (for example *ClientMacFolderToWin*). More particularly, check the pathnames to the versions of 4D Volume Desktop.
*   **Read/write privileges** - On the client machine, check that the current user has write access rights for the client application update.


### Generated files

Once a client/server application is built, you will find a new folder in the destination folder named **Client Server executable**. This folder contains two subfolders, *\<ApplicationName>Client* and *\<ApplicationName>Server*.
> These folders are not generated if an error occurs. In this case, open the [log file](#log-file) in order to find out the cause of the error.

The *\<ApplicationName>Client* folder contains the client portion of the application corresponding to the execution platform of the application builder. Ce dossier doit être installé sur chaque poste client. The *\<ApplicationName>Server* folder contains the server portion of the application. The *\<ApplicationName>Server* folder contains the server portion of the application.

The contents of these folders vary depending on the current platform:

*   *Windows* - Each folder contains the application executable file, named *\<ApplicationName>Client.exe* for the client part and *\<ApplicationName>Server.exe* for the server part as well as the corresponding .rsr files. The folders also contain various files and folders necessary for the applications to work and customized items that may be in the original 4D Volume Desktop and 4D Server folders.
*   *macOS* - Each folder contains only the application package, named \<ApplicationName> Client for the client part and \<ApplicationName> Server for the server part. Chaque progiciel contient tous les éléments nécessaires à son fonctionnement. Under macOS, launch a package by double-clicking it.

    > The macOS packages built contain the same items as the Windows subfolders. You can display their contents (**Control+click** on the icon) in order to be able to modify them.

If you checked the “Allow automatic update of client application” option, an additional subfolder called *Upgrade4DClient* is added in the *\<ApplicationName>Server* folder/package. </blockquote>

If you checked the “Allow automatic update of client application” option, an additional subfolder called *Upgrade4DClient* is added in the *\<ApplicationName>Server* folder/package. Ce sous-dossier contient l’application cliente au format macOS et/ou Windows sous forme de fichier compressé. This file is used during the automatic client application update.

#### Customizing 4D Volume Desktop folder

When building a double-clickable application, 4D copies the contents of the 4D Volume Desktop folder into the Final Application subfolder of the destination folder. Vous pouvez donc parfaitement personnaliser le contenu du dossier 4D Volume Desktop d’origine en fonction de vos besoins. You can, for instance:

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

*    **Active** column - Indicates that the items will be integrated into the application package built. Par défaut, tous les éléments sont inclus. To exclude a plug-in or a component, deselect the check box next to it.

*   **Plugins and components** column - Displays the name of the plug-in/component.

*   **ID** column - Displays the plug-in/component's identification number (if any).

*   **Type** column - Indicates the type of item: plug-in or component.

If you want to integrate other plug-ins or components into the executable application, you just need to place them in a **PlugIns** or **Components** folder next to the 4D Volume Desktop application or next to the 4D Server application. The mechanism for copying the contents of the source application folder (see [Customizing the 4D Volume Desktop folder](#customizing-4d-volume-desktop-folder)) can be used to integrate any type of file into the executable application.

If there is a conflict between two different versions of the same plug-in (one loaded by 4D and the other located in the source application folder), priority goes to the plug-in installed in the 4D Volume Desktop/4D Server folder. However, if there are two instances of the same component, the application will not open.
> The use of plug-ins and/or components in a deployment version requires the necessary license numbers.






## Licenses & Certificate page

The Licences & Certificate page can be used to:

*   designate the license number(s) that you want to integrate into your single-user stand-alone application
*   sign the application by means of a certificate in macOS.


![](assets/en/Project/buildapplicenseProj.png)

### Licenses

This tab displays the list of available deployment licenses that you can integrate into your application. Par défaut, la liste est vide. You must explicitly add your *4D Developer Professional* license as well as each *4D Desktop Volume* license to be used in the application built. You can add another 4D Developer Professional number and its associated licenses other than the one currently being used.

To remove or add a license, use the **[+]** and **[-]** buttons at the bottom of the window.

When you click on the \[+] button, an open file dialog box appears displaying by default the contents of the *Licenses* folder of your machine.

When you click on the \[+] button, an open file dialog box appears displaying by default the contents of the *Licenses* folder of your machine. For more information about the location of this folder, refer to the [Get 4D folder](https://doc.4d.com/4Dv17R6/4D/17-R6/Get-4D-folder.301-4311294.en.html) command.

You must designate the files that contain your Developer license as well as those containing your deployment licenses. These files were generated or updated when the *4D Developer Professional* license and the *4D Desktop Volume* licenses were purchased. These files were generated or updated when the *4D Developer Professional* license and the *4D Desktop Volume* licenses were purchased.

Once you have selected a file, the list will indicate the characteristics of the license that it contains.

*   **License #** - Product license number
*   **License** - Name of the product
*   **Expiration date** - Expiration date of the license (if any)
*   **Path** -  Location on disk

If a license is not valid, a message will warn you.

You can designate as many valid files as you want.

You can designate as many valid files as you want. When building an executable application, 4D will use the most appropriate license available.
> Dedicated "R" licenses are required to build applications based upon "R-release" versions (license numbers for "R" products start with "R-4DDP").

After the application is built, a new deployment license file is automatically included in the Licenses folder next to the executable application (Windows) or in the package (macOS).


### OS X signing certificate

The application builder can sign merged 4D applications under macOS (single-user applications, 4D Server and client parts under macOS). Signing an application authorizes it to be executed using the Gatekeeper functionality of macOS when the "Mac App Store and identified Developers" option is selected (see "About Gatekeeper" below).

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

This mechanism is usually suitable for standard deployments.

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

4D therefore lets you link the data file path to the application path. Dans ce cas, le fichier de données sera relié via un chemin spécifique et ne sera plus simplement le dernier fichier utilisé. You therefore link your data **by application path**. You therefore link your data **by application path**.

This mode allows you to duplicate your merged applications without breaking the link to the data file. However, with this option, if the application package is moved on the disk, the user will be prompted for a data file, since the application path will no longer match the "executablePath" attribute (after a user has selected a data file, the *lastDataPath.xml* file is updated accordingly).


*Duplication when data linked by application name:* ![](assets/en/Project/datalinking1.png)

*Duplication when data linked by application path:* ![](assets/en/Project/datalinking2.png)

You can select the data linking mode during the build application process. You can either:

- Use the [Application page](#application) or [Client/Server page](#client-server) of the Build Application dialog box.
- Use the **LastDataPathLookup** XML key (single-user application or server application).


### Defining a default data folder

4D allows you to define a default data file at the application building stage. Au premier lancement de l'application, en l'absence de fichier local (cf. [séquence de lancement décrite ci-dessus](#opening-the-data-file)), le fichier de données par défaut est automatiquement ouvert silencieusement en mode lecture seule par 4D. This gives you better control over data file creation and/or opening when launching a merged application for the first time. This gives you better control over data file creation and/or opening when launching a merged application for the first time.

More specifically, the following cases are covered:

- Avoiding the display of the 4D "Open Data File" dialog box when launching a new or updated merged application. You can detect, for example at startup, that the default data file has been opened and thus execute your own code and/or dialogs to create or select a local data file.
- Allowing the distribution of merged applications with read-only data (for demo applications, for instance).


To define and use a default data file:

- You provide a default data file (named "Default.4DD") and store it in a default folder (named "Default Data") inside the database project folder. Ce fichier doit être accompagné de tous les fichiers nécessaires, en fonction de la configuration de la base : .4dIndx, blobs externes, journal, etc. Il est de votre responsabilité de livrer un fichier de données par défaut valide. Note however that since a default data file is opened in read-only mode, it is recommended to uncheck the "Use Log File" option in the original structure file before creating the data file.
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