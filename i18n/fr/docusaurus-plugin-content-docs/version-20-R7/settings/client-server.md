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

Cette option vous permet de modifier le nom de publication d'une base de données 4D Server, c'est-à-dire le nom affiché dans l'onglet dynamique **Disponible** de la boîte de dialogue de connexion (voir le paragraphe [Ouverture d'un projet distant](../Desktop/clientServer/md#opening-a-remote-project)). Par défaut, 4D Server utilise le nom du fichier de projet. Vous pouvez saisir le nom personnalisé de votre choix.

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
- **DB4D Server** (serveur de base de données) : 19814 par défaut. Ce numéro de port ne peut pas être modifié directement mais il est toujours composé du numéro de port du serveur d'application + 1.
  Lorsqu'un client 4D se connecte à 4D Server, il utilise le port TCP du serveur d'application (19813 ou le port indiqué après le signe ':' dans l'adresse IP affichée dans la boîte de dialogue de connexion). La connexion aux autres serveurs via leurs ports respectifs est alors automatique ; il n'est plus nécessaire de les spécifier.\
  Notez que dans le cas d'un accès via un routeur ou un pare-feu, les ports TCP doivent être ouverts explicitement.
- [**Débogueur à distance**](../Debugging/debugging-remote.md) : 19815 par défaut. Ce numéro de port ne peut pas être modifié directement mais il est toujours composé du numéro de port du serveur d'application + 2.

#### Authentification de l'utilisateur auprès du serveur de domaine

Cette option vous permet de mettre en œuvre des fonctionnalités SSO (_Single Sign On_) dans votre base de données 4D Server sous Windows. Lorsque vous cochez cette option, 4D se connecte de manière transparente à l'Active directory du serveur de domaine Windows et obtient les tokens d'authentification disponibles. Cette option est décrite dans la section [Single Sign On (SSO) sous Windows](https://doc.4d.com/4Dv20R5/4D/20-R5/Single-Sign-On-SSO-on-Windows.300-6932709.en.html).

#### Nom Principal de Service

Lorsque l'authentification unique (SSO) est activée (voir ci-dessus), vous devez remplir ce champ si vous souhaitez utiliser Kerberos comme protocole d'authentification. Cette option est décrite dans la section [Single Sign On (SSO) sous Windows](https://doc.4d.com/4Dv20R5/4D/20-R5/Single-Sign-On-SSO-on-Windows.300-6932709.en.html).

#### Couche réseau

Cette liste déroulante contient 3 options de couche réseau : **Historique**, **ServerNet** et **QUIC** (uniquement en mode projet), qui sont utilisées pour gérer les communications entre le serveur 4D et les machines 4D distantes (clients).

- **Historique** : Cette ancienne couche réseau "historique" est toujours prise en charge afin d'assurer la compatibilité avec les bases de données créées avant la version 15. Cette couche réseau peut également être activée par programmation à l'aide de la commande [SET DATABASE PARAMETER](https://doc.4d.com/4Dv20/help/command/page642.html).
- **ServerNet** (par défaut) : Active la couche réseau ServerNet sur le serveur (disponible depuis 4D v15).
- **QUIC** (disponible uniquement en mode projet) : Active la couche réseau QUIC sur le serveur.

  **Notes** :

  - La sélection de cette option remplace l'option Utiliser l'ancienne couche réseau si elle a été définie à l'aide de la commande [SET DATABASE PARAMETER](https://doc.4d.com/4Dv20/help/command/page642.html).
  - You can know if a 4D application is running with a QUIC network layer using the [Application info](https://doc.4d.com/4Dv20/help/command/page1599.html) command.
  - Étant donné que QUIC utilise le protocole UDP, assurez-vous que l'UDP est autorisé dans les paramètres de sécurité de votre réseau.
  - QUIC se connecte automatiquement au port 19813 à la fois pour le serveur d'application et le serveur DB4D.
  - Lorsque l'option de couche QUIC est sélectionnée :
    - Un message bêta et une icône d'alerte sont affichés près du sélecteur.
    - Les paramètres de [délai avant déconnexion client-serveur](#Client-Server-Connections-Timeout) sont masqués
    - L'option [Crypter les communications Client-Serveur](#Crypter-les-communications-Client-Serveur) est masquée (les communications QUIC sont toujours en TLS, quel que soit votre mode sécurisé).
  - **Compatibilité** : Vous devez déployer vos applications client/serveur avec 4D 20 ou une version supérieure avant de passer à la couche réseau QUIC.

:::note

En cas de modification, vous devez redémarrer l'application pour que le changement soit pris en compte. Toute application cliente qui était connectée doit également être redémarrée afin de se connecter avec la nouvelle couche réseau.

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

Ce paramètre permet de définir globalement le mode de mise à jour de l'instance locale du dossier **Resources** sur les machines 4D connectées lorsque le dossier **Resources** de la base de données est modifié en cours de session (le dossier **Ressources** est automatiquement synchronisé sur la machine distante à chaque ouverture de session). Trois paramètres sont disponibles :

- **Jamais** : Le dossier **Resources** local n'est pas mis à jour pendant la session. La notification envoyée par le serveur est ignorée. Le dossier **Resources** local peut être mis à jour manuellement à l'aide de la commande **Update Local Resources** du menu d'action (voir [Utilisation de l'explorateur de ressources](https://doc.4d.com/4Dv19/4D/19/Using-the-Resources-explorer.300-5416788.en.html)).
- **Toujours** : La synchronisation du dossier local **Resources** est automatiquement effectuée pendant la session chaque fois qu'une notification est envoyée par le serveur.
- **Demander** : Lorsque la notification est envoyée par le serveur, une boîte de dialogue est affichée sur les postes clients, indiquant la modification. L'utilisateur peut ensuite accepter ou refuser la synchronisation du dossier **Resources** local.\
  Le dossier **Resources** centralise les fichiers personnalisés nécessaires à l'interface de la base de données (fichiers de traduction, images, etc.). Des mécanismes automatiques ou manuels permettent de notifier chaque client lorsque le contenu de ce dossier a été modifié. Pour plus d'informations, reportez-vous à la section [Gestion du dossier Resources](https://doc.4d.com/4Dv19/4D/19/Gestion-du-dossier-Resources.300-5422466.fe.html).

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
