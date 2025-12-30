---
id: webAdmin
title: Serveur d'administration Web
---

Un serveur web intégré, appelé `WebAdmin`, est utilisé par 4D et 4D Server pour fournir un accès web sécurisé à des fonctions spécifiques :

- Les accès REST au projet
- l'[Explorateur de données](dataExplorer.md)
- le [rendu de la prévisualisation de Qodly Studio](https://developer.4d.com/qodly/4DQodlyPro/rendering#preview-in-qodly-studio)

Ce serveur est accessible en local ou à distance, depuis un navigateur ou une application web, et permet d'accéder à l'application 4D associée.

Le serveur d'administration Web gère l'authentification des utilisateurs disposant des privilèges `WebAdmin`, afin qu'ils puissent ouvrir des sessions d'administration et accéder à des interfaces dédiées.

Cette fonctionnalité est disponible pour les applications 4D avec ou sans interfaces.

## Démarrage du serveur d'administration Web

Par défaut, le serveur d'administration Web n'est pas lancé. Il faut configurer son lancement automatique au démarrage, ou (dans les versions avec une interface) le lancer manuellement via un menu.

### Lancement au démarrage

Vous pouvez configurer le serveur d'administration Web pour qu'il soit lancé au démarrage de l'application 4D ou 4D Server (avant le chargement de tout projet).

- Si vous utilisez une application 4D avec une interface, sélectionnez **Fichier > Administration Web > Propriétés...**.

![alt-text](../assets/en/Admin/waMenu1.png)

Cochez l'option **Lancer le serveur WebAdmin au démarrage** dans la boîte de dialogue des paramètres :

![alt-text](../assets/en/Admin/waSettings.png)

- Que vous utilisiez une application 4D avec ou sans interface, vous pouvez activer le lancement automatique au démarrage en utilisant l'argument suivant dans *L'interface de ligne de commande* :

```
open ~/Desktop/4D.app --webadmin-auto-start true
```

> Si le port TCP utilisé par le serveur d'administration Web ([HTTPS](#https-port) ou [HTTP](#http-port), selon les paramètres) n'est pas libre au démarrage, 4D essaiera successivement les 20 ports suivants et utilisera le premier qui est disponible. Si aucun port n'est disponible, le serveur web ne se lance pas et un message d'erreur s'affiche. Pour les applications sans interface, il apparaît dans la console.

### Démarrage et arrêt

Si vous utilisez une application 4D avec interface, vous pouvez à tout moment démarrer ou arrêter le serveur d'administration Web pour votre projet :

Sélectionnez **Fichier> Administration web > Démarrer le serveur**.

![alt-text](../assets/en/Admin/waMenu2.png)

La ligne de menu devient **Arrêter le serveur** lorsque le serveur est lancé ; sélectionnez **Arrêter le serveur** pour arrêter le Serveur d'administration Web.

## Propriétés {#settings}

La configuration du serveur d'administration Web est obligatoire, en particulier pour définir la [**clé d'accès**](#access-key). Par défaut, quand la clé d'accès n'est pas configurée, les connexions via url ne sont pas autorisées.

Vous pouvez configurer le serveur d'administration Web à l'aide de la [boîte de dialogue des Propriétés d'administration Web](#settings-dialog-box) (voir ci-dessous).

> Si vous utilisez une application 4D sans interface, vous pouvez utiliser les [arguments de l'*Interface de ligne de commande*](#webadmin-headless-configuration) pour définir les paramètres de base. La définition de paramètres avancés se fait via le fichier de paramètres.

### Boîte de dialogue des Propriétés

Pour ouvrir la fenêtre de configuration des paramètres d'administration web, sélectionnez **Fichier > Administration web > Propriétés...**.

![alt-text](../assets/en/Admin/waMenu1.png)

La fenêtre suivante s'affiche :

![alt-text](../assets/en/Admin/waSettings2.png)

#### Lancer le serveur WebAdmin au démarrage

Cochez cette option si vous souhaitez que le serveur d'administration Web soit automatiquement lancé au démarrage de l'application 4D ou 4D Server ([voir ci-dessus](#launch-at-startup)). Cette option n'est pas cochée par défaut.

#### Connexions HTTP sur localhost acceptées

Lorsque cette option est cochée, vous pourrez vous connecter au serveur d'administration Web via HTTP sur la même machine que l'application 4D. Cette option est activée par défaut.

:::note Notes

- Les connexions HTTP autres que sur localhost ne sont jamais acceptées.
- Même si cette option est cochée, lorsque [HTTPS accepté](#accept-https) est coché et que la configuration TLS est valide, les connexions locahost utilisent HTTPS.

:::

#### Port HTTP

Numéro de port à utiliser pour les connexions HTTP au serveur d'administration Web lorsque l'option **Connexions HTTP sur localhost acceptées** est cochée. La valeur par défaut est 7080.

#### HTTPS Accepté

Lorsque cette option est cochée, vous pouvez vous connecter au serveur d'administration Web via HTTPS. Cette option est activée par défaut.

#### Port HTTPS

Numéro de port à utiliser pour les connexions par HTTPS au serveur d'administration Web lorsque l'option **HTTPS accepté** est cochée. La valeur par défaut est 7443.

#### Chemin du dossier de certificat

Chemin du dossier qui contient les fichiers de certificat TLS. Par défaut, le chemin du dossier de certificat est vide, et 4D ou 4D server utilise les fichiers de certificat contenus dans l'application 4D (les certificats personnalisés doivent être stockés au niveau du dossier de projet).

#### Mode du debug log

Statut ou format du fichier de logs des requêtes HTTP (HTTPDebugLog_*nn*.txt, stocké dans le dossier "Logs" de l'application. --*nn* représente le numéro du fichier). Les options suivantes sont disponibles :

- **Désactivé** (valeur par défaut)
- **Avec tous les body** - activé avec toutes les parts des body des requêtes et réponses
- **Sans les body** - activé sans les parts des body (la taille du body est indiquée)
- **Avec les body des requêtes** - activé avec les parts des body uniquement dans les requêtes
- **Avec la réponse corps** - activé avec les parts des body uniquement dans les réponses

#### Clé d'accès

La définition d'une clé d'accès est obligatoire pour déverrouiller l'accès au serveur d'administration Web via une URL (l'accès via une commande de menu 4D ne nécessite pas de clé d'accès). Lorsque aucune clé d'accès n'est définie, il n'est pas possible pour les clients web d'accéder aux interfaces d'administration web telles que l'[Explorateur de données](dataExplorer.md) via des URL. En cas de requête de connexion, une page d'erreur est retournée:

![alt-text](../assets/en/Admin/accessKey.png)

Une clé d'accès est similaire à un mot de passe, mais sans login associé.

- Pour définir une nouvelle clé d'accès, cliquez sur le bouton **Définir**, entrez une chaîne de caractères et cliquez sur **OK**. Une fois fait, le label du bouton devient **Modifier**.
- Pour modifier la clé d'accès, cliquez sur **Modifier**, entrez la nouvelle clé d'accès et cliquez sur **OK**.
- Pour supprimer la clé d'accès, cliquez sur **Modifier**, laissez le champ d'entrée vide et cliquez sur **OK**.

#### Activer l'accès à Qodly Studio

:::note

Cette option n'apparaît que si la licence Qodly Studio est activée.

:::

Cette option permet l'accès utilisateur à [Qodly Studio](../WebServer/qodly-studio.md) au niveau de l'application 4D. Notez que vous devez également [activer l'accès au niveau de chaque projet](../settings/web.md#enable-access-to-qodly-studio).

:::note

Cette option est automatiquement cochée si vous avez utilisé la [Boîte de dialogue de configuration en un clic](https://developer.4d.com/qodly/4DQodlyPro/gettingStarted#one-click-configuration).

:::

## Configuration sans interface

Toutes les [propriétés du serveur d'administration Web](#settings) sont stockées dans le fichier `WebAdmin.4DSettings`. Il existe un fichier `WebAdmin.4DSettings` par défaut pour chaque application 4D et 4D Server, de sorte qu'il est possible de déployer plusieurs applications sur la même machine hôte.

Dans le cas d'une application 4D ou 4D Server sans interface, vous pouvez configurer et utiliser le fichier `WebAdmin.4DSettings` par défaut, ou désigner un fichier `.4DSettings` personnalisé.

Pour définir le contenu du fichier, vous pouvez utiliser la [boîte de dialogue des propriétés WebAdmin](#settings-dialog-box) de l'application 4D avec interface et l'exécuter ensuite sans interface. Le fichier par défaut `WebAdmin.4DSettings` est alors utilisé.

Vous pouvez aussi définir un fichier `.4DSettings`. (format XML) et l'utiliser à la place du fichier par défaut. Plusieurs arguments dédiés sont disponibles dans [l'interface de ligne de commande](cli.md) pour prendre en charge cette fonctionnalité.

> La clé d'accès n'est pas stockée en clair dans le fichier `.4DSettings`.

Voici un exemple :

```
"%HOMEPATH%\Desktop\4D Server.exe" MyApp.4DLink --webadmin-access-key 
	"my Fabulous AccessKey" --webadmin-auto-start true   
	--webadmin-store-settings

```

## Authentification

Lorsqu'on accède à une page web contrôlée par le serveur d'administration Web en saisissant une URL et sans identification préalable, une authentification est requise. L'utilisateur doit entrer la [clé d'accès](#access-key) dans une fenêtre d'authentification:

![alt-text](../assets/en/Admin/accessKeyEnter.png)

Si la clé d'accès n'a pas été définie dans les propriétés du serveur d'administration Web, l'accès par URL n'est pas possible (un message spécifique s'affiche).

Lorsqu'on accède à une page web contrôlée par la page du serveur d'administration Web directement à partir d'une ligne de menu de 4D ou de 4D Server (tel que **Enregistrements > Explorateur de données** ou **Fenêtre > Explorateur de données** (4D Server)), l'accès est accordé sans authentification, l'utilisateur est automatiquement authentifié.

:::note

Une fois l'accès accordé, une [session web](WebServer/sessions.md) avec un privilège spécifique "WebAdmin" est créée par le serveur d'administration Web. Ce privilège permet d'accéder librement à toutes les données via les process web, dès lors qu'aucune [autorisation spécifique n'est appliquée aux ressources](../ORDA/privileges.md).

:::

