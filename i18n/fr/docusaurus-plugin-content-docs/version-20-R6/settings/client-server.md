---
id: client-server
title: Page Client/Serveur
---

Les pages Client-serveur regroupent les propriétés liées à l'utilisation de la base de données en mode client-serveur. Bien entendu, ces propriétés ne sont prises en compte que lorsque la base de données est utilisée en mode distant.

## Page Options réseau

### Réseau

#### Publier la base au démarrage

Cette option vous permet d'indiquer si la base de données 4D Server apparaîtra ou non dans la liste des bases de données publiées.

- Lorsque cette option est cochée (par défaut), la base de données est rendue publique et apparaît dans la liste des bases de données publiées (onglet **Disponible**).
- Lorsque l'option n'est pas cochée, la base de données n'est pas rendue publique et n'apparaît pas dans la liste des bases de données publiées. Pour se connecter, les utilisateurs doivent saisir manuellement l'adresse de la base de données dans l'onglet **Personnalisé** de la boîte de dialogue de connexion.

:::note

Si vous modifiez ce paramètre, vous devez redémarrer la base du serveur pour qu'il soit pris en compte.

:::

#### Nom de publication

This option lets you change the publication name of a 4D Server database, *i.e.*, the name displayed on the dynamic **Available** tab of the connection dialog box (see the [Opening a remote project](../Desktop/clientServer/md#opening-a-remote-project) paragraph). Par défaut, 4D Server utilise le nom du fichier de projet. Vous pouvez saisir le nom personnalisé de votre choix.

:::note

Ce paramètre n'est pas pris en compte dans les applications client-serveur personnalisées. En théorie, l'application client se connecte directement à l'application serveur, sans passer par la boîte de dialogue de connexion. Toutefois, en cas d'erreur, cette boîte de dialogue peut apparaître ; dans ce cas, le nom de publication de l'application serveur correspond au nom du projet compilé.

:::

#### Numéro de port

Cette option vous permet de modifier le numéro du port TCP sur lequel 4D Server publie la base de données. Cette information est stockée dans le projet et sur chaque machine cliente. Par défaut, le numéro de port TCP utilisé par 4D Server et 4D en mode distant est 19813.

La personnalisation de cette valeur est nécessaire lorsque vous souhaitez utiliser plusieurs applications 4D sur la même machine ; dans ce cas, vous devez spécifier un numéro de port différent pour chaque application.
Lorsque vous modifiez cette valeur depuis 4D Server ou 4D, elle est automatiquement passée à toutes les machines 4D connectées à la base de données.

Pour mettre à jour les autres machines clientes qui ne sont pas connectées, il suffit de saisir le nouveau numéro de port (précédé de deux points) après l'adresse IP de la machine serveur dans l'onglet **Personnalisé** de la boîte de dialogue de connexion Par exemple, si le nouveau numéro de port est 19888 :

![](../assets/en/settings/client-server-network.png)

> Seules les bases de données publiées sur le même port que celui défini dans 4D client sont visibles sur la page de publication dynamique TCP/IP.

#### 4D Server et numéros de port

4D Server utilise trois ports TCP pour les communications entre les serveurs internes et les clients :

- **SQL Server** : 19812 par défaut (peut être modifié via la page "SQL/Configuration" des Préférences).
- **Serveur d'application** : 19813 par défaut (peut être modifié via la page "Client-Serveur/Configuration" des Préférences, voir ci-dessus).
- **Serveur DB4D** (serveur de base de données) : 19814 par défaut. This port number cannot be modified directly but it always consists of the application server port number + 1.\
  When a 4D client connects to 4D Server, it uses the TCP port of the application server (19813 or the port indicated after the colon ':' in the IP address shown in the connection dialog box). Connection to other servers via their respective ports is then automatic; it is no longer necessary to specify them.\
  Note that in the case of access via a router or a firewall, the three TCP ports must be opened explicitly.

#### Authentification de l'utilisateur auprès du serveur de domaine

Cette option vous permet de mettre en œuvre des fonctionnalités SSO (*Single Sign On*) dans votre base de données 4D Server sous Windows. Lorsque vous cochez cette option, 4D se connecte de manière transparente à l'Active directory du serveur de domaine Windows et obtient les tokens d'authentification disponibles. This option is described in the [Single Sign On (SSO) on Windows](https://doc.4d.com/4Dv20R5/4D/20-R5/Single-Sign-On-SSO-on-Windows.300-6932709.en.html) section.

#### Service Principal Name

Lorsque l'authentification unique (SSO) est activée (voir ci-dessus), vous devez remplir ce champ si vous souhaitez utiliser Kerberos comme protocole d'authentification. This option is described in the [Single Sign On (SSO) on Windows](https://doc.4d.com/4Dv20R5/4D/20-R5/Single-Sign-On-SSO-on-Windows.300-6932709.en.html) section.

#### Network Layer

This drop-down box contains 3 network layer options to choose between: **legacy**, **ServerNet** and **QUIC** (only in project mode), which are used to handle communications between 4D Server and remote 4D machines (clients).

- **Legacy**: This former "legacy" network layer is still supported in order to ensure compatibility for databases created prior to v15. This network layer can also be enabled by programming using the [SET DATABASE PARAMETER](https://doc.4d.com/4Dv20/help/command/page642.html) command.
- **ServerNet** (by default): Enables the ServerNet network layer on the server (available since 4D v15).
- **QUIC** (available only in project mode): Enables the QUIC network layer on the server.

  **Notes**:

  - Selecting this option overrides the Use legacy network layer option in case it has been set using the [SET DATABASE PARAMETER](https://doc.4d.com/4Dv20/help/command/page642.html) command.
  - You can know if a 4D application is running with a QUIC network layer using the [Get application info](https://doc.4d.com/4Dv20/help/command/page1599.html) command.
  - Since QUIC uses the UDP protocol, make sure UDP is allowed in your network security settings.
  - QUIC automatically connects to the port 19813 for both application server and DB4D server.
  - When the QUIC layer option is selected:
    - A beta message and an alert icon are displayed near the selector.
    - [Client-server Connections Timeout settings](#Client-Server-Connections-Timeout) are hidden
    - The [Encrypt Client-Server communication checkbox](#Encrypt-Client-Server-Communications) is hidden (QUIC communications are always in TLS, whatever your secured mode is.).
  - **Compatibility**: You need to deploy your client/server applications with 4D v20 or higher before switching to the QUIC network layer.

:::note

In case of a modification, you need to restart the application for the change to be taken into account. Toute application cliente qui était connectée doit également être redémarrée afin de se connecter avec la nouvelle couche réseau.

:::

#### Délai avant déconnexion Client-Serveur

Ce dispositif permet de définir le timeout (période d'inactivité au-delà de laquelle la connexion est fermée) entre 4D Server et les machines clientes qui s'y connectent. L'option "Illimité" supprime le timeout. Lorsque cette option est sélectionnée, le contrôle de l'activité du client est éliminé.

Lorsqu'un délai d'attente est sélectionné, le serveur ferme la connexion d'un client s'il ne reçoit aucune demande de ce dernier pendant le délai spécifié.

### Communication client-serveur

#### Inscrire les clients au démarrage pour Exécuter sur client

Lorsque cette option est cochée, toutes les machines distantes 4D se connectant à la base de données peuvent exécuter des méthodes à distance. Ce mécanisme est détaillé dans la section [Procédures stockées sur les machines clientes](https://doc.4d.com/4Dv19/4D/19/Stored-procedures-on-client-machines.300-5422461.en.html).

#### Crypter les communications Client-Serveur

Cette option permet d'activer le mode sécurisé pour les communications entre la machine serveur et les machines distantes 4D. Cette option est détaillée dans la section [Crypter les connexions Client-Serveur](https://doc.4d.com/4Dv19/4D/19/Encrypting-ClientServer-Connections.300-5422465.en.html).

#### Mise à jour du dossier Resources en cours de session

This setting can be used to globally set the updating mode for the local instance of the **Resources** folder on the connected 4D machines when the **Resources** folder of the database is modified during the session (the **Resources** folder is automatically synchronized on the remote machine each time a session is opened). Trois paramètres sont disponibles :

- **Jamais** : Le dossier **Resources** local n'est pas mis à jour pendant la session. La notification envoyée par le serveur est ignorée. Le dossier **Resources** local peut être mis à jour manuellement à l'aide de la commande **Update Local Resources** du menu d'action (voir [Utilisation de l'explorateur de ressources](https://doc.4d.com/4Dv19/4D/19/Using-the-Resources-explorer.300-5416788
- **Toujours** : La synchronisation du dossier local **Resources** est automatiquement effectuée pendant la session chaque fois qu'une notification est envoyée par le serveur.
- **Demander** : Lorsque la notification est envoyée par le serveur, une boîte de dialogue est affichée sur les postes clients, indiquant la modification. The user can then accept or refuse the synchronization of the local **Resources** folder.\
  The **Resources** folder centralizes the custom files required for the database interface (translation files, pictures, etc.). Des mécanismes automatiques ou manuels permettent de notifier chaque client lorsque le contenu de ce dossier a été modifié. Pour plus d'informations, reportez-vous à la section [Gestion du dossier Resources](https://doc.4d.com/4Dv19/4D/19/Gestion-du-dossier-Resources.300-5422466.fe.html).

## Page Configuration IP

### Table de configuration Autoriser-Refuser

Cette table vous permet de définir des règles de contrôle d’accès à la base en fonction de l’adresse IP des postes 4D distants. Cette option permet de renforcer la sécurité par exemple pour des applications stratégiques.

> Cette table de configuration ne contrôle pas les connexions Web.

Le fonctionnement de la table de configuration est le suivant :

- La colonne “Autoriser-Refuser” permet de sélectionner le type de règle à appliquer (Autoriser ou Refuser) à l’aide d’un pop up menu. Pour ajouter une règle d’adresses, cliquez sur le bouton Ajouter. Une nouvelle ligne apparaît dans la table. Le bouton **Supprimer** permet de supprimer la ligne courante.
- La colonne “Adresse IP” permet de désigner la ou les adresse(s) IP concernée(s) par la règle. Pour spécifier une adresse, cliquez dans la colonne et saisissez l’adresse sous la forme 123.45.67.89 (format IPv4) ou 2001:0DB8:0000:85A3:0000:0000:AC1F:8001 (format IPv6). Vous pouvez utiliser le caractère \* (étoile) pour spécifier des adresses du type “commence par”. Par exemple, 192.168.\* indique toutes les adresses débutant par 192.168.
- L’application des règles s’effectue dans l’ordre d’affichage de la table. Si deux règles sont contradictoires, la priorité sera accordée à la règle située le plus haut dans le tableau. Vous pouvez réordonner les lignes en modifiant le tri courant (cliquez sur un en-tête de colonne pour alterner le sens de tri). Vous pouvez également déplacer des lignes par glisser-déposer.
- Pour des raisons de sécurité, seules les adresses correspondant à une règle d’autorisation explicite pourront se connecter. En particulier, si la table contient uniquement une ou plusieurs règle(s) de type Refuser, toutes les adresses seront refusées car aucune ne satisfera à au moins une règle. Si vous souhaitez refuser certaines adresses et autoriser toutes les autres, ajoutez une règle Autoriser \* à la fin de la table. Par exemple :
  - Refuser 192.168.\* (refuser toutes adresses débutant par 192.168)
  - Autoriser \* (et autoriser les autres)

Par défaut, aucune restriction de connexion n’est appliquée par 4D Server : la première ligne de la table contient le libellé Autoriser et le caractère \* (toute adresse).
