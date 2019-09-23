---
id: building
title: Building a project package
---

4D includes a final application builder to create a project package (final build). This builder simplifies the finalization and deployment process for 4D compiled applications. It automatically handles the specific features of different operating systems and facilitates the deployment of client-server applications. 

The application builder allows you to:

*	Build a compiled database, without interpreted code,
*	Build a stand-alone, double-clickable application, *i.e.*, merged with 4D Volume Desktop, the 4D database engine,
*	Build different applications from the same compiled database via an XML project,
*	Build homogeneous client-server applications,
*	Build client-server applications with automatic updating of client and server parts.
*	Save your build settings for future use (*Save settings* button).

Building a project package creates .4DZ file. This file is essentially a zipped (packed) version of the project folder. The compact and optimized size makes project packages easy to deploy.

## Application Builder

Application building is carried out using the Build Application window. To display this window, select **Design** > **Build Application...** from the toolbar.

![](assets/en/Project/buildappProj.png)

Building can only be carried out once the database is compiled. If you select this command without having previously compiled the database, or if the compiled code does not correspond to the interpreted code, a warning dialog box appears indicating that the database must be (re)compiled.

The application building window includes several pages that can be accessed using tabs. 


### Compiled structure 

On this tab, you can:
*	Name the application and specify the destination folder for the application. If the destination folder does not already exist, 4D will create a *BUILD* folder for you.
*	Specify the type of application to create.


![](assets/en/Project/appbuilderProj.png)
	
#### Application name and destination folder

![](assets/en/Project/buidappstructureProj.png)

Enter the name of the application in **Application Name**.

Specify the folder for the built application in **Destination Folder**. If the specified folder does not already exist, 4D will create a *Build* folder for you.


#### Build compiled structure / component

You can build a standard compiled structure file and/or a compiled component. 


*	**Build compiled structure** - builds a database containing only compiled code. 
	
	If you have named your application, “MyProject”, 4D will create a a *Compiled Database* folder: <p>*\<destination>/Compiled Database/\<database name>/\<name>.4DZ*. <p>This folder contains:
	*	 *MyProject.4dz* file - This is essentially a zipped version of the project folder. Compact and with an optimized size, .4dz project files can be easily deployed. .4dz files can be used by: 4D Server, 4D Volume license (merged applications), and 4D Developer

	**Include related folders**<br> 
	When you check this option, any folders related to the database are copied into the Build folder as *Components* and *Resources* folders. For more information about these folders, refer to [Database Architecture](https://livedoc.4d.com/4D-Design-Reference-18/Managing-4D-databases/Description-of-4D-files.300-4575698.en.html#100374).


*	**Build component** - builds a compiled component from the structure.
	
	A component is a standard 4D structure file in which specific functionalities have been developed. Once the component has been configured and installed in another 4D database (the host database), its functionalities are accessible from the host database. For more information about components, refer to the Developing and installing 4D components chapter. 

	If you have named your application, *MyComponent*, 4D will create a Components folder containing *MyComponent.4dbase* folder: <p>*\<destination>/Components/name.4dbase/\<name>.4DZ*. <p>The *MyComponent.4dbase* folder contains:
	*	*MyComponent.4DZ* file
	*	A *Resources* folder - any associated Resources are automatically copied into this folder. However, any other components and/or plugins are not copied (a component cannot use plug-ins or other components).

### Application

On this tab, you can build a single-user (.exe) version of the application by checking the **Build stand-alone Application** option.

![](assets/en/Project/standaloneProj.png)

>You just must have 4D Volume Desktop, the 4D database engine, and an appropriate license. 

This will build a stand-alone (double-clickable) application directly from your database project: <p>*\<destination>/Final Application/\<name>/\<name>.exe*. 

Stand-alone versions of your 4D compiled database projects can be created directly in 4D using the [Build Application](https://livedoc.4d.com/4D-Language-Reference-18/4D-Environment/BUILD-APPLICATION.301-4505371.en.html) command. In macOS, this command handles the creation of software packages.

The principle consists of merging a compiled structure file with 4D Volume Desktop. The functionality provided by the 4D Volume Desktop file is linked with the product offer to which you have subscribed. For more information about this point, refer to the sales documentation and to the [4D Store](http://www.4d.com/).

You can define a default data file or allow users to create and use their own data file (see the [Data file management in final applications](https://livedoc.4d.com/4D-Design-Reference-18/Finalizing-and-deploying-final-applications/Data-file-management-in-final-applications.300-4575558.en.html) section).

It is possible to automate the update of merged single-user applications by means of a sequence of language commands (see [Automatic updating of server or single-user applications](https://livedoc.4d.com/4D-Design-Reference-18/Finalizing-and-deploying-final-applications/Automatic-updating-of-server-or-single-user-applications.300-4575550.en.html)).

#### 4D Volume Desktop Location


In order to build a stand-alone application, you must first designate the location of the 4D Volume Desktop folder and select the folder containing the 4D Volume Desktop file:

*	*Windows* -the folder contains the 4D Volume Desktop.4DE, 4D Volume Desktop.RSR, as well as various files and folders required for its operation. These items must be placed at the same level as the selected folder.
*	*macOS* - 4D Volume Desktop is provided in the form of a structured software package containing various generic files and folders.

To select the 4D Volume Desktop folder, click on the **[...]** button. A dialog box appears allowing you to designate the 4D Volume Desktop folder (Windows) or package (Mac OS.

Once the folder is selected, its complete pathname is displayed and, if it actually contains 4D Volume Desktop, the option for building an executable application is activated.

> As of 4D v15, the 4D Volume Desktop version number must match the 4D Developer Edition version number. For example, if you use 4D Developer v15.4, you must select a 4D Volume Desktop v15.4.

#### Data linking mode

This option lets you choose the linking mode between the merged application and the local data file. Two data linking modes are available:

*	**By application name** (default) - The 4D application automatically opens the most recently opened data file corresponding to the structure file. This allows you to move the application package freely on the disk.  This options should generally be used for merged applications, unless you specifically need to duplicate your application. 

*	**By application path** - The merged 4D application will parse the application's *lastDataPath.xml* file and try to open the data file with an "executablePath" attribute that matches the application's full path. If such an entry is found, its corresponding data file (defined through its "dataFilePath" attribute) is opened. Otherwise, the last opened data file is opened (default mode).
	
	This mode allows you to duplicate your merged applications without breaking the link to the data file. However, with this option, if the application package is moved on the disk, the user will be prompted for a data file, since the application path will no longer match the "executablePath" attribute (after a user has selected a data file, the *lastDataPath.xml* file is updated accordingly).

For more information about the data linking mode, refer to the [Configuring the data linking mode](https://livedoc.4d.com/4D-Design-Reference-18/Finalizing-and-deploying-final-applications/Data-file-management-in-final-applications.300-4575558.en.html#2893496) section.


#### Generated files  

When you click on the Build button, 4D automatically creates a **Final Application** folder in the specified **Destination Folder**. Inside the Final Application folder is a subfolder with the name of the specified application in it. 

If you have specified “MyProject” as the name of the application, you will find the following files in this subfolder (aka MyProject):

*	*Windows*
	*	MyProject.exe  - Your executable and a MyProject.rsr (the application resources)
	*	4D Extensions folder, Resources folder, various libraries (DLL), Native Components folder, SASL Plugins folder - Files necessary for the operation of the application
	*	Database folder  - Includes a Resources folder and  MyProject.4DZ file. They make up the compiled structure of the database as well as the database Resources folder. 
**Note**: This folder also contains the *Default Data* folder, if it has been defined (see [Data file management in final applications](https://livedoc.4d.com/4D-Design-Reference-18/Finalizing-and-deploying-final-applications/Data-file-management-in-final-applications.300-4575558.en.html)).
	*	(Optional) Components folder - Contains any components and/or plug-in files included in the database. For more information about this, refer to the [Plugins and components](#plugins-and-components) section.
	*	Licenses folder  - An XML file of license numbers integrated into the application. For more information about this, refer to the [Licenses & Certificate](#licenses-and-certificate) section.	
	*	Additional items added to the 4D Volume Desktop folder, if any (see [Customizing the 4D Volume Desktop folder](#customizing-4d-volume-desktop-folder)).
	
	All these items must be kept in the same folder in order for the executable to operate.

*	*macOS*
	-	A software package named MyProject.app containing your application and all the items necessary for its operation, including the plug-ins, components and licenses. For more information about integrating plug-ins and components, refer to the [Plugins and components](#plugins-and-components) section. For more information about integrating licenses, refer to the [Licenses & Certificate](#licenses-and-certificate) section. **Note**: In macOS, the [Application file](https://livedoc.4d.com/4D-Language-Reference-18/4D-Environment/Application-file.301-4505368.en.html) command of the 4D language returns the pathname of the ApplicationName file (located in the Contents:macOS folder of the software package) and not that of the .comp file (Contents:Resources folder of the software package). 

#### Customizing 4D Volume Desktop folder

When building a stand-alone application, 4D copies the contents of the 4D Volume Desktop folder into Destination folder > *Final Application* folder. You're then able to customize the contents of the original 4D Volume Desktop folder according to your needs. You can, for example:

*	Install a 4D Volume Desktop version corresponding to a specific language;
*	Add a custom *PlugIns* folder;
*	Customize the contents of the *Resources* folder.

>In macOS, 4D Volume Desktop is provided in the form of a software package. In order to modify it, you must first display its contents (**Control+click** on the icon).


#### Location of Web files  

If your stand-alone application is used as a Web server, the files and folders required by the server must be installed in specific locations. These items are the following:

*	*cert.pem* and *key.pem* files (optional): These files are used for SSL connections and by data encryption commands,
*	default Web root folder,
*logweb.txt* file (Web requests log).

>	**Windows** - Items must be installed in the *Final Application\MyProject\Database* subfolder.<br> 
>	**macOS** - Items must be installed next to the *MyProject.app* software package.

 

#####   Customizing a stand-alone application icon

4D associates a default icon with double-clickable applications, however you can customize the icon for each application.

*	**macOs** - When building a double-clickable application, 4D handles the customizing of the icon. 
	
	In order to do this, you must create an icon file (icns type), prior to building the application file, and place it next to the interpreted structure file.
	
	>Apple, Inc. provides a specific tool for building *icns* icon files (for more information, please refer to [Apple documentation](https://developer.apple.com/library/archive/documentation/GraphicsAnimation/Conceptual/HighResolutionOSX/Optimizing/Optimizing.html#//apple_ref/doc/uid/TP40012302-CH7-SW2)).

	Your icon file must have the same name as the interpreted structure file and include the *.icns* extension. 

	4D automatically takes this file into account when building the double-clickable application (the *.icns* file is renamed *ApplicationName.icns* and copied into the Resources folder; the *CFBundleFileIcon* entry of the *info.plist* file is updated).

*	Windows - When building a double-clickable application, 4D handles the customizing of its icon.

	In order to do this, you must create an icon file (.ico extension), prior to building the application file, and place it next to the interpreted structure file.

	Your icon file must have the same name as the interpreted structure file and include the .ico extension. 

	4D automatically takes this file into account when building the double-clickable application.





### Client/Server

On this tab, you can build customized client-server applications that are homogenous, cross-platform and with an automatic update option. 

![](assets/en/Project/buildappCSProj.png)

A *Client Server executable* folder is created in the destination folder containing:

*	**Compiled Client** folder - all files necessary for operation of the application
*	**Compiled Server** folder - all files necessary for operation of the application. If the option(s) to allow automatic updates is selected, a Windows/macOS client application is integrated into the server application.

#### Build server application

Check this option to generate the server part of your application during the building phase. You must designate the location on your disk of the 4D Server application to be used. This 4D Server must correspond to the current platform (which will also be the platform of the server application). 

*	**4D Server folder** - Click on the **[...]** button and use the *Browse for folder* dialog box to locate the 4D Server application. In macOS, you must select the 4D Server package directly.
	
*	**Current version** - Used to indicate the current version number for the application generated. You may then accept or reject connections by client applications according to their version number. The interval of compatibility for client and server applications is set using specific XML keys (see [XML keys of parameters](https://livedoc.4d.com/4D-Design-Reference-18/Finalizing-and-deploying-final-applications/Application-builder.300-4575549.en.html#516023)).	
	
*	**Data linking mode** - This option lets you choose the linking mode between the merged application and the local data file. Two data linking modes are available.

	*	**By application name** (default) - The 4D application automatically opens the most recently opened data file corresponding to the structure file. This allows you to move the application package freely on the disk.  This options should generally be used for merged applications, unless you specifically need to duplicate your application. 

	*	**By application path** - The merged 4D application will parse the application's *lastDataPath.xml* file and try to open the data file with an "executablePath" attribute that matches the application's full path. If such an entry is found, its corresponding data file (defined through its "dataFilePath" attribute) is opened. Otherwise, the last opened data file is opened (default mode).
	
		This mode allows you to duplicate your merged applications without breaking the link to the data file. However, with this option, if the application package is moved on the disk, the user will be prompted for a data file, since the application path will no longer match the "executablePath" attribute (after a user has selected a data file, the *lastDataPath.xml* file is updated accordingly).

		For more information about the data linking mode, refer to the [Configuring the data linking mode](https://livedoc.4d.com/4D-Design-Reference-18/Finalizing-and-deploying-final-applications/Data-file-management-in-final-applications.300-4575558.en.html#2893496) section.


#### Build client application

Checking this option generates the client part of your application during the building phase. 

*	**4D Volume Desktop** - In order to build a stand-alone application, you must first designate the location of the 4D Volume Desktop folder and select the folder containing the 4D Volume Desktop file:

	*	*Windows* -the folder contains the 4D Volume Desktop.4DE, 4D Volume Desktop.RSR, as well as various files and folders required for its operation. These items must be placed at the same level as the selected folder.
	*	*macOS* - 4D Volume Desktop is provided in the form of a structured software package containing various generic files and folders.

	To select the 4D Volume Desktop folder, click on the [...] button. A dialog box appears allowing you to designate the 4D Volume Desktop folder (Windows) or package (Mac OS.

	Once the folder is selected, its complete pathname is displayed and, if it actually contains 4D Volume Desktop, the option for building an executable application is activated.
	
	If you want to build a client application for a “concurrent” platform, you must carry out an additional build operation using a 4D application running on that platform. This is only necessary for the initial version of the client application since subsequent updates can be handled directly on the same platform using the automatic update mechanism. For more information about this point, see [Customizing 4D Server and/or 4D Client folders](#customizing-4d-server-and-or-4d-client-folders).

	> As of 4D v15, the 4D Volume Desktop version number must match the 4D Developer Edition version number. For example, if you use 4D Developer v15.4, you must select a 4D Volume Desktop v15.4.
	
* **Copy of client applications in the server application** - The options of this area to set up the mechanism for updating the client parts of your client/server applications using the network each time a new version of the application is generated.

	*	*Allow automatic update of Windows client application* - Check these options so that your Windows client/server application can take advantage of the automatic update mechanism for clients via the network. 
	*	*Allow automatic update of Macintosh client application* - Check these options so that your Macintosh client/server application can take advantage of the automatic update mechanism for clients via the network. 
	
*	**Allow automatic update of Macintosh client application** - If you want to create a cross-platform client application, you must designate the location on your disk of the 4D Volume Desktop application that corresponds to the “concurrent” platform of the build platform. 

	For example, if you build your application in Windows, you must use the **[...]** button to designate the 4D Volume Desktop macOS application (provided as a package).


#### Customizing 4D Server and/or 4D Client folders  

During the build of the executable client/server application, 4D duplicates the contents of the 4D Server folder in the Server subfolder of the destination folder and the contents of the 4D Volume Desktop folder in the Client subfolder of the destination folder. You can then totally customize the contents of the original 4D Server and 4D Volume Desktop folders as necessary. 

For example, you can:

*	Install a version of 4D Server that corresponds to a specific language;
*	Add files or folders in the PlugIns folder;
*	Customize the 4D Extensions folder contents.

>In macOS, 4D Server is provided as a package. You must first display its contents (**Control+click** on its icon) to be able to modify it.>


#### Displaying update notification    

The client application update notification is carried out automatically following the server application update.

It works as follows: when a new version of the client/server application is built using the application builder, the new client portion is copied as a compressed file in the **Upgrade4DClient** subfolder of the **ApplicationName** Server folder (in macOS, these folders are included in the server package). If you have followed the process for generating a cross-platform client application, a .*4darchive* update file is available for each platform:

To trigger client application update notifications, simply replace the old version of the server application with the new one and then execute it. The rest of the process is automatic. 

On the client side, when the “old” client application tries to connect to the updated server application, a dialog box is displayed on the client machine, indicating that a new version is available. The user can either update their version or cancel the dialog box.

*	If the user clicks **OK**, the new version is downloaded to the client machine over the network. Once the download is complete, the old client application is closed and the new version is launched and connects to the server. The old version of the application is then placed in the machine’s recycle bin.
*	If the user clicks **Cancel**, the update is cancelled; if the old version of the client application is not in the range of versions accepted by the server (please refer to the following paragraph), the application is closed and connection is impossible. Otherwise (by default), the connection is established.

#### Forcing automatic updates  

In some cases, you may want to prevent client applications from being able to cancel the update download. For example, if you used a new version of the 4D Server source application, the new version of the client application must absolutely be installed on each client machine.

To force the update, simply exclude the current version number of client applications (X-1 and earlier) in the version number range compatible with the server application. In this case, the update mechanism will not allow non-updated client applications to connect. For example, if the new version of the client-server application is 6, you can stipulate that any client application with a version number lower than 6 will not be allowed to connect. 

The current version number is set on the Client-Server page of the Build Application dialog box (see above). The intervals of authorized numbers are set in the application project using specific XML keys. For more information about this, refer to [XML keys of parameters](https://livedoc.4d.com/4D-Design-Reference-18/Finalizing-and-deploying-final-applications/Application-builder.300-4575549.en.html#516023).

#### Update Error  

If 4D cannot carry out the update of the client application, the client machine displays the following error message: “The update of the client application failed. The application is now going to quit.”

There are many possible causes for this error. When you get this message, it is advisable to check the following parameters first off:

*	**Pathnames** - Check the validity of the pathnames set in the application project via the Application builder dialog box or via XML keys (for example *ClientMacFolderToWin*). More particularly, check the pathnames to the versions of 4D Volume Desktop.
*	**Read/write privileges** - On the client machine, check that the current user has write access rights for the client application update.


#### Generated files  

Once a client/server application is built, you will find a new folder in the destination folder named **Client Server executable**. This folder contains two subfolders, *\<ApplicationName>Client* and *\<ApplicationName>Server*.

>These folders are not generated if an error occurs. In this case, open the log file (see [Log file](https://livedoc.4d.com/4D-Design-Reference-18/Finalizing-and-deploying-final-applications/Application-builder.300-4575549.en.html#952774)) in order to find out the cause of the error. 

The *\<ApplicationName>Client* folder contains the client portion of the application corresponding to the execution platform of the application builder. This folder must be installed on each client machine. The *\<ApplicationName>Server* folder contains the server portion of the application. 

The contents of these folders vary depending on the current platform:

*	*Windows* - Each folder contains the application executable file, named *\<ApplicationName>Client.exe* for the client part and *\<ApplicationName>Server.exe* for the server part as well as the corresponding .rsr files. The folders also contain various files and folders necessary for the applications to work and customized items that may be in the original 4D Volume Desktop and 4D Server folders.
*	*macOS* - Each folder contains only the application package, named ApplicationName Client for the client part and ApplicationName Server for the server part. Each package contains all the necessary items for the application to work. Under Mac OS, launch a package by double-clicking it. 

	>	The macOS packages built contain the same items as the Windows subfolders. You can display their contents (**Control+click** on the icon) in order to be able to modify them. 

If you check the “Allow automatic update of client application” option, an additional subfolder called *Upgrade4DClient* is added in the *\<ApplicationName>Server* folder/package. This subfolder contains the client application in macOS and/or Windows format as a compressed file. This file is used during the automatic client application update.

#### Location of Web files  

If the server and/or client part of your double-clickable application is used as a Web server, the files and folders required by the server must be installed in specific locations. These items are the following:

*cert.pem* and *key.pem* files (optional): These files are used for SSL connections and by data encryption commands,
Default Web root folder (WebFolder).

*	**Windows**
	*	**Server application** - Items must be installed in the *Client Server executable\ \<ApplicationName>Server\Server Database* subfolder.
	*	**Client application** - Items must be installed in the *Client Server executable\ \<ApplicationName>Client* subfolder.

*	**macOS**
	*	**Server application** - Items must be installed next to the *\<ApplicationName>Server* software package.
	*	**Client application** - Items must be installed next to the *\<ApplicationName>Client* software package.





### Plugins & components

On this tab, you set each plug-in and each component that you will use in your single-user or client-server application. For more information about 4D plug-ins and components, refer to the [Installing plugins or components](https://livedoc.4d.com/4D-Design-Reference-18/Managing-4D-databases/Installing-plugins-or-components.300-4575696.en.html) section. 

The page lists the elements loaded by the current 4D application:

![](assets/en/Project/buildapppluginsProj.png)

*	 **Active** column - Indicates that the items will be integrated into the application package built. All the items are checked by default. To exclude a plug-in or a component, deselect the check box next to it. 

*	**Plugins and components** column - Displays the name of the plug-in/component.

*	**ID** column - Displays the plug-in/component's identification number (if any).

*	**Type** column - Indicates the type of item: plug-in or component.

If you want to integrate other plug-ins or components into the executable application, you just need to place them in a **PlugIns** or **Components** folder next to the 4D Volume Desktop application or next to the 4D Server application. The mechanism for copying the contents of the source application folder (see [Customizing the 4D Volume Desktop folder](#customizing-4d-volume-desktop-folder)) can be used to integrate any type of file into the executable application.

If there is a conflict between two different versions of the same plug-in (one loaded by 4D and the other located in the source application folder), priority goes to the plug-in installed in the 4D Volume Desktop/4D Server folder. However, if there are two instances of the same component, the application will not open.

>The use of plug-ins and/or components in a deployment version requires the necessary license numbers.







### Licenses & Certificate
	
The Licences & Certificate page can be used to:

*	designate the license number(s) that you want to integrate into your single-user stand-alone application
*	sign the application by means of a certificate in OS X.


![](assets/en/Project/buildapplicenseProj.png)

#### Licenses

This tab displays the list of available deployment licenses that you can integrate into your application. By default, the list is empty. You must explicitly add your *4D Developer Professional* license as well as each *4D Desktop Volume* license to be used in the application built. You can add another 4D Developer Professional number and its associated licenses other than the one currently being used.

To remove or add a license, use the **[+]** and **[-]** buttons at the bottom of the window. 

When you click on the [+] button, an open file dialog box appears displaying by default the contents of the *Licenses* folder of your machine. For more information about the location of this folder, refer to [Licenses Folder](https://livedoc.4d.com/4D-Language-Reference-18/4D-Environment/Get-4D-folder.301-4505365.en.html#11712) in the description of the [Get 4D folder](https://livedoc.4d.com/4D-Language-Reference-18/4D-Environment/Get-4D-folder.301-4505365.en.html) command.

You must designate the files that contain your Developer license as well as those containing your deployment licenses. These files were generated or updated when the *4D Developer Professional* license and the *4D Desktop Volume* licenses were purchased. 

Once you have selected a file, the list will indicate the characteristics of the license that it contains.

*	**License #** - Product license number
*	**License** - Name of the product
*	**Expiration date** - Expiration date of the license (if any)
*	**Path** -  Location on disk

If a license is not valid, a message will warn you. 

You can designate as many valid files as you want. When building an executable application, 4D will use the most appropriate license available.

>Dedicated "R" licenses are required to build applications based upon "R-release" versions (license numbers for "R" products start with "R-4DDP").

After the application is built, a new deployment license file is automatically included in the Licenses folder next to the executable application (Windows) or in the package (macOS).


#### OS X signing certificate


The application builder can sign merged 4D applications under OS X (single-user applications, 4D Server and client parts under OS X). Signing an application authorizes it to be executed using the Gatekeeper functionality of OS X when the "Mac App Store and identified Developers" option is selected (see "About Gatekeeper" below).

Check the Sign application option to include certification in the application builder procedure for OS X. 4D will check the availability of elements required for certification when the build occurs: 

![](assets/en/Project/buildapposxcertProj.png)

This option is displayed under both Windows and OS X, but it is only taken into account for OS X versions.

*	**Name of certificate** - Enter the name of your developer certificate validated by Apple in this entry area. The certificate name is usually the name of the certificate in the Keychain Access utility:

To obtain a developer certificate from Apple, Inc., you can use the commands of the Keychain Access menu or go here: [http://developer.apple.com/library/mac/#documentation/Security/Conceptual/CodeSigningGuide/Procedures/Procedures.html](http://developer.apple.com/library/mac/#documentation/Security/Conceptual/CodeSigningGuide/Procedures/Procedures.html).

>This certificate requires the presence of the Apple codesign utility, which is provided by default and usually located in the “/usr/bin/” folder. If an error occurs, make sure that this utility is present on your disk.


#### About Gatekeeper  

Gatekeeper is a security feature of OS X that controls the execution of applications downloaded from the Internet. The **Mac App Store and identified Developers** option is selected by default starting with OS X 10.8 Mountain Lion (Apple does not recommend selecting the lowest level "Anywhere" option). If a downloaded application does not come from the Apple Store or is not signed, it is rejected and cannot be launched. 

The **Sign application** option of the 4D application builder lets you generate applications that are compatible with this option by default.

Specifications concerning Gatekeeper evolve with each version of OS X. More specifically, codesign signatures are either type "v1" and/or "v2" depending on the OS where they are generated. On the Gatekeeper side, "v1" or "v2" signatures are accepted based on the OS where the final application is executed. The following table summarizes the principles of compatibility:

|OS X Version|	Signature generated by codesign	|Acceptance by Gatekeeper|
|---|---|---|
|10.8.x and prior|	v1	|only applications signed v1|
|10.9.0 to 10.9.4|	v1 and v2|	applications signed v1 or v2|
|10.9.5 and higher	|v1 and v2|	only applications signed v2|
