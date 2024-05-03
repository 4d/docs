---
id: webAdmin
title: WebAdmin
---

An embedded web server component, named `WebAdmin`, is used by 4D and 4D Server to provide a secured web access to specific management features such as the [Data Explorer](dataExplorer.md). Ce serveur est accessible en local ou à distance, depuis un navigateur ou une application web, et permet d'accéder à l'application 4D associée.

Le WebAdmin gère l'authentification des utilisateurs via des privilèges "WebAdmin", leur permettant d'ouvrir des sessions en tant qu'administrateurs et d'accéder à des interfaces dédiées.

Cette fonctionnalité est disponible pour les applications 4D avec ou sans interfaces.

## Démarrer le WebAdmin web server

By default, the `WebAdmin` web server is not launched. Il faut configurer son lancement automatique au démarrage, ou (dans les versions avec une interface) le lancer manuellement via un menu.

### Lancement au démarrage

You can configure the `WebAdmin` web server to be launched at 4D or 4D Server application startup (before any project is loaded).

- If you use a 4D application with interface, select the **File > Web Administration > Settings...** menu item.

![alt-text](../assets/en/Admin/waMenu1.png)

Check the **Launch WebAdmin server at startup** option in the settings dialog box:

![alt-text](../assets/en/Admin/waSettings.png)

- Whether you use 4D application which is headless or not, you can enable the automatic startup mode using the following _Command Line Interface_ argument:

```
open ~/Desktop/4D.app --webadmin-auto-start true
```

> If the TCP port used by the `WebAdmin` web server ([HTTPS](#https-port) or [HTTP](#http-port), depending on the settings) is not free at startup, 4D will try successively the 20 following ports, and use the first one that is available. Si aucun port n'est disponible, le serveur web ne se lance pas et un message d'erreur s'affiche. Pour les applications sans interface, il apparaît dans la console.

### Démarrage et arrêt

If you use a 4D application with interface, you can start or stop the `WebAdmin` web server for your project at any moment:

Select the **File > Web Administration > Start Server** menu item.

![alt-text](../assets/en/Admin/waMenu2.png)

The menu item becomes **Stop Server** when the server is launched; select **Stop Server** to stop the `WebAdmin` web server.

## Propriétés WebAdmin

Configuring the `WebAdmin` component is mandatory in particular to define the [**access key**](#access-key). Par défaut, quand la clé d'accès n'est pas configurée, les connexions via url ne sont pas autorisées.

You can configure the `WebAdmin` component using the [Web Administration settings dialog box](#settings-dialog-box) (see below).

> If you use a headless 4D application, you can use [_Command Line Interface_ arguments](#webadmin-headless-configuration) to define basic settings. La définition de paramètres avancés se fait via le fichier de paramètres.

### Fenêtre de configuration

To open the Web Administration settings dialog box, select the **File > Web Administration > Settings...** menu item.

![alt-text](../assets/en/Admin/waMenu1.png)

La fenêtre suivante s'affiche :

![alt-text](../assets/en/Admin/waSettings2.png)

#### Lancer le serveur WebAdmin au démarrage

Check this option if you want the `WebAdmin` web server to be automatically launched when the 4D or 4D Server application starts ([see above](#launching-at-startup)). Cette option n'est pas cochée par défaut.

#### Connexions HTTP sur localhost acceptées

When this option is checked, you will be able to connect to the `WebAdmin` web server through HTTP on the same machine as the 4D application. Cette option est activée par défaut.

**Notes:**

- Les connections HTTP autres que sur localhost ne sont jamais acceptées.
- Even if this option is checked, when [Accept HTTPS](#accept-https) is checked and the TLS configuration is valid, localhost connections use HTTPS.

#### Port HTTP

Port number to use for connections through HTTP to the `WebAdmin` web server when the **Accept HTTP connections on localhost** option is checked. La valeur par défaut est 7080.

#### HTTPS Accepté

When this option is checked, you will be able to connect to the `WebAdmin` web server through HTTPS. Cette option est activée par défaut.

#### Port HTTPS

Port number to use for connections through HTTPS to the `WebAdmin` web server when the **Accept HTTPS** option is checked. La valeur par défaut est 7443.

#### Chemin du dossier de certificat

Chemin du dossier qui contient les fichiers de certificat TLS. Par défaut, le chemin du dossier de certificat est vide, et 4D ou 4D server utilise les fichiers de certificat contenus dans l'application 4D (les certificats personnalisés doivent être stockés au niveau du dossier de projet).

#### Mode du debug log

Status or format of the HTTP request log file (HTTPDebugLog__nn_.txt, stored in the "Logs" folder of the application -- _nn_ is the file number). Les options suivantes sont disponibles :

- **Disable** (default)
- **With all body parts** - enabled with body parts in response and request
- **Without body parts** - enabled without body parts (body size is provided)
- **With request body** - enabled with body part in request only
- **With response body** - enabled with body part in response only

#### Clé d'accès

Defining an access key is mandatory to unlock access to the `WebAdmin` web server through a URL (access via a 4D menu command does not require an access key). When no access key is defined, no web client is allowed to connect through a URL to a web administration interface like the [Data Explorer page](dataExplorer.md). En cas de requête de connexion, une page d'erreur est retournée:

![alt-text](../assets/en/Admin/accessKey.png)

Une clé d'accès est similaire à un mot de passe, mais sans login associé.

- To define a new access key: click the **Define** button, enter the access key string in the dialog box and click **OK**. The button label becomes **Modify**.
- To modify the access key: click the **Modify** button, enter the new access key string in the dialog box and click **OK**.
- To delete the access key: click the **Modify** button, let the access key area empty and click **OK**.

#### Activer l'accès à Qodly Studio

:::note

Cette option n'apparaît que si la licence Qodly Studio est activée.

:::

This option enables user access to [Qodly Studio](../WebServer/qodly-studio.md) at the 4D application level. Note that you also need to [enable the access at every project level](../settings/web.md#enable-access-to-qodly-studio).

## Configuration de WebAdmin sans interface

All [WebAdmin settings](#webadmin-settings) are stored in the `WebAdmin.4DSettings` file. There is one default `WebAdmin.4DSettings` file per 4D and 4D Server application, so that it is possible to deploy multiple applications on the same host machine.

When running a 4D or 4D Server application headless, you can set and use the default `WebAdmin.4DSettings` file, or designate a custom `.4DSettings` file.

To set the file contents, you can use the [WebAdmin settings dialog](#settings-dialog-box) of the 4D application with interface and run it headless afterwards. The default `WebAdmin.4DSettings` file is then used.

Or, you can set a custom `.4DSettings` file (xml format) and use it instead of the default file. Several dedicated arguments are available in the [Command line interface](cli.md) to support this feature.

> The access key is not stored in clear in the `.4DSettings` file.

Voici un exemple :

```
"%HOMEPATH%\Desktop\4D Server.exe" MyApp.4DLink --webadmin-access-key 
	"my Fabulous AccessKey" --webadmin-auto-start true   
	--webadmin-store-settings

```

## Authentification et Session

- Lorsqu'on accède à une page de gestion web en entrant une URL et sans identification préalable, une authentification est nécessaire. The user must enter the [access key](#access-key) in an authentication dialog box. If the access key was not defined in the `WebAdmin` settings, no access via URL is possible.

- When a web management page is accessed directly from a 4D or 4D Server menu item (such as **Records > Data Explorer** or **Window > Data Explorer** (4D Server)), access is granted without authentication, the user is automatically authenticated.

Once the access is granted, a web [session](WebServer/sessions.md) with the "WebAdmin" privilege is created on the 4D application. As long as the current session has "WebAdmin" privilege, the `WebAdmin` component delivers requested pages.
