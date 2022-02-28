---
id: client-server
title: Page Client/Serveur
---

Les pages Client-serveur regroupent les propriétés liées à l'utilisation de la base de données en mode client-serveur. Bien entendu, ces propriétés ne sont prises en compte que lorsque la base de données est utilisée en mode distant.

## Page Options réseau

### Réseau

#### Publier la base au démarrage

Cette option vous permet d'indiquer si la base de données 4D Server apparaîtra ou non dans la liste des bases de données publiées.

-   Lorsque cette option est cochée (par défaut), la base de données est rendue publique et apparaît dans la liste des bases de données publiées (onglet **Disponible**).
-   Lorsque l'option n'est pas cochée, la base de données n'est pas rendue publique et n'apparaît pas dans la liste des bases de données publiées. Pour se connecter, les utilisateurs doivent saisir manuellement l'adresse de la base de données dans l'onglet **Personnalisé** de la boîte de dialogue de connexion.

> Si vous modifiez ce paramètre, vous devez redémarrer la base du serveur pour qu'il soit pris en compte.

#### Nom de publication

Cette option vous permet de modifier le nom de publication d'une base de données 4D Server, c'est-à-dire le nom affiché dans l'onglet dynamique **Disponible** de la boîte de dialogue de connexion (voir la section [Connexion à une base de données 4D Server](https://doc.4d.com/4Dv19/4D/19/Connecting-to-a-4D-Server-Database.300-5422486.en.html)). Par défaut, 4D Server utilise le nom du fichier de projet. Vous pouvez saisir le nom personnalisé de votre choix.

> Ce paramètre n'est pas pris en compte dans les applications client-serveur personnalisées. En théorie, l'application client se connecte directement à l'application serveur, sans passer par la boîte de dialogue de connexion. Toutefois, en cas d'erreur, cette boîte de dialogue peut apparaître ; dans ce cas, le nom de publication de l'application serveur correspond au nom du projet compilé.

#### Numéro de port

Cette option vous permet de modifier le numéro du port TCP sur lequel 4D Server publie la base de données. Cette information est stockée dans le projet et sur chaque machine cliente. Par défaut, le numéro de port TCP utilisé par 4D Server et 4D en mode distant est 19813.

La personnalisation de cette valeur est nécessaire lorsque vous souhaitez utiliser plusieurs applications 4D sur la même machine ; dans ce cas, vous devez spécifier un numéro de port différent pour chaque application. Lorsque vous modifiez cette valeur depuis 4D Server ou 4D, elle est automatiquement passée à toutes les machines 4D connectées à la base de données.

Pour mettre à jour les autres machines clientes qui ne sont pas connectées, il suffit de saisir le nouveau numéro de port (précédé de deux points) après l'adresse IP de la machine serveur dans l'onglet **Personnalisé** de la boîte de dialogue de connexion lors de la prochaine connexion. Par exemple, si le nouveau numéro de port est 19888 :

![](assets/en/settings/client-server-network.png)

> Seules les bases de données publiées sur le même port que celui défini dans 4D client sont visibles sur la page de publication dynamique TCP/IP.

#### 4D Server et numéros de port

4D Server utilise trois ports TCP pour les communications entre les serveurs internes et les clients :

-   **SQL Server** : 19812 par défaut (peut être modifié via la page "SQL/Configuration" des Préférences).
-   **Serveur d'application** : 19813 par défaut (peut être modifié via la page "Client-Serveur/Configuration" des Préférences, voir ci-dessus).
-   **Serveur DB4D** (serveur de base de données) : 19814 par défaut. Ce numéro de port ne peut pas être modifié directement mais il est toujours constitué du numéro de port du serveur d'application + 1.\ Lorsqu'un client 4D se connecte à 4D Server, il utilise le port TCP du serveur d'application (19813 ou le port indiqué après les deux points " : " dans l'adresse IP affichée dans la boîte de dialogue de connexion). La connexion aux autres serveurs via leurs ports respectifs est alors automatique ; il n'est plus nécessaire de les spécifier.\ A noter que dans le cas d'un accès via un routeur ou un pare-feu, les trois ports TCP doivent être ouverts explicitement.

#### Authentification de l'utilisateur auprès du serveur de domaine

Cette option vous permet de mettre en œuvre des fonctionnalités SSO (*Single Sign On*) dans votre base de données 4D Server sous Windows. Lorsque vous cochez cette option, 4D se connecte de manière transparente à l'Active directory du serveur de domaine Windows et obtient les tokens d'authentification disponibles. Cette option est décrite dans la section [Single Sign On (SSO) sur Windows](https://doc.4d.com/4Dv19/4D/19/Single-Sign-On-SSO-on-Windows.300-5422467.en.html).

#### Service Principal Name

Lorsque l'authentification unique (SSO) est activée (voir ci-dessus), vous devez remplir ce champ si vous souhaitez utiliser Kerberos comme protocole d'authentification. Cette option est décrite dans la section [Single Sign On (SSO) sur Windows](https://doc.4d.com/4Dv19/4D/19/Single-Sign-On-SSO-on-Windows.300-5422467.en.html).

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

-   **Jamais** : Le dossier **Resources** local n'est pas mis à jour pendant la session. La notification envoyée par le serveur est ignorée. Le dossier **Resources** local peut être mis à jour manuellement à l'aide de la commande **Update Local Resources** du menu d'action (voir [Utilisation de l'explorateur de ressources](https://doc.4d.com/4Dv19/4D/19/Using-the-Resources-explorer.300-5416788.en.html)).
-   **Toujours** : La synchronisation du dossier local **Resources** est automatiquement effectuée pendant la session chaque fois qu'une notification est envoyée par le serveur.
-   **Demander** : Lorsque la notification est envoyée par le serveur, une boîte de dialogue est affichée sur les postes clients, indiquant la modification. The user can then accept or refuse the synchronization of the local **Resources** folder.\ The **Resources** folder centralizes the custom files required for the database interface (translation files, pictures, etc.). Automatic or manual mechanisms can be used to notify each client when the contents of this folder have been modified. For more information, please refer to the [Managing the Resources folder](https://doc.4d.com/4Dv19/4D/19/Managing-the-Resources-folder.300-5422466.en.html) section.


## IP configuration page

### Allow-Deny Configuration Table

This table allows you to set access control rules for the database depending on 4D remote machine IP addresses. This option allows reinforcing security, for example, for strategic applications.

> This configuration table does not control Web connections.

The behavior of the configuration table is as follows:

- The "Allow-Deny" column allows selecting the type of rule to apply (Allow or Deny) using a pop-up menu. To add a rule, click on the Add button. A new row appears in the table. The **Delete** button lets you remove the current row.
- The "IP Address" column allows setting the IP address(es) concerned by the rule. To specify an address, click in the column and enter the address in the following form: 123.45.67.89 (IPv4 format) or 2001:0DB8:0000:85A3:0000:0000:AC1F:8001 (IPv6 format). You can use an * (asterisk) character to specify "starts with" type addresses. For example, 192.168.* indicates all addresses starting with 192.168.
- The application of rules is based on the display order of the table. If two rules are contradictory, priority is given to the rule located highest in the table. You can re-order rows by modifying the current sort (click the header of the column to alternate the direction of the sort). You can also move rows using drag and drop.
- For security reasons, only addresses that actually match a rule will be allowed to connect. In other words, if the table only contains one or more Deny rules, all addresses will be refused because none will match at least one rule. If you want to deny only certain addresses (and allow others), add an Allow * rule at the end of the table. Par exemple :
    - Deny 192.168.* (deny all addresses beginning with 192.168)
    - Allow * (but allow all other addresses)

By default, no connection restrictions are applied by 4D Server: the first row of the table contains the Allow label and the * (all addresses) character.