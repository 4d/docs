---
id: server-admin
title: Fenêtre d'administration de 4D Server
---


When 4D Server is launched with interface under Windows or macOS, a graphical administration window is available, providing many analysis and control tools for the published 4D application. To display the 4D Server Administration window for the opened project, select the **Window > Administration** menu item, or press **Ctrl+U**.

> L'accès à la fenêtre d'administration de 4D Server s'effectue par un 4D distant. For more information about this point, please refer to Administration from Remote Machines.


## Page Moniteur

La Page **Moniteur** affiche des informations dynamiques relatives à l’exploitation de la base de données ainsi que des informations sur le système et l’application 4D Server.

![](assets/en/Admin/server-admin.png)

> On Windows, some of the system information displayed on this page are retrieved via the Windows "Performance Analyzer" tools. These tools can only be accessed when the user that opened the session where 4D Server was launched has the necessary administration authorization.

#### Zone graphique

La zone graphique permet de visualiser l’évolution en temps réel de plusieurs paramètres : le taux d’utilisation des processeurs, le trafic réseau et l'état de la mémoire. Vous sélectionnez le paramètre à afficher via le menu situé au centre la fenêtre :

![](assets/en/Admin/server-graphic.png)

- **Utilisation processeurs** : Taux d’utilisation globale du ou des processeur(s) de la machine, toutes applications confondues. La part spécifique de 4D Server dans ce taux d’utilisation est fournie dans la zone d’informations "Processeurs".
- **Réseau** : Nombre d’octets reçus par seconde par la machine (serveur ou client). Le nombre d’octets envoyés est fourni dans la zone d’informations "Réseau".
- **Mémoire physique** : Quantité de mémoire RAM de la machine utilisée par 4D Server. Une vue plus détaillée de l’utilisation de la mémoire est fournie dans la zone d’informations "Mémoire".
- **Mémoire virtuelle** : Affiche dans la zone graphique la quantité de mémoire virtuelle utilisée par l’application 4D Server. Cette mémoire est allouée par le système en fonction des besoins de l’application. La valeur située en bas à droite de la zone indique la quantité de mémoire en cours d’utilisation. La valeur située en haut à gauche indique la quantité maximale de mémoire virtuelle utilisable. La valeur maximale est calculée dynamiquement en fonction des paramètres mémoire généraux de l’application.
- **Cache** : Affiche dans la zone graphique la quantité de mémoire cache utilisée par l’application 4D Server. La valeur située en bas à droite de la zone indique la quantité de mémoire en cours d’utilisation. La valeur située en haut à gauche indique la taille totale de la mémoire cache, telle que définie via les Propriétés de la base.

A noter que lorsque cette option est sélectionnée, le défilement de la zone graphique est ralenti car une analyse efficace du cache s’effectue généralement sur une période d’observation assez longue.


#### Zone Vue d’ensemble

La zone "Vue d’ensemble" fournit diverses informations relatives au système, à l’application et aux licences installées sur la machine de 4D Server.

- **Informations système** : Ordinateur, système et adresse IP du serveur
- **Informations application** : Numéro de version interne de 4D Server et statut du Volume Shadow Copy
- **Connexions maximum** : Nombre de connexions simultanées autorisées par type de serveur
- **Licence** : Description de la licence. Lorsque la licence produit ou l'une de ses expansions expire dans moins de 10 jours, dans le cas d'un abonnement, 4D Server tente de renouveler automatiquement la licence depuis le compte de l'utilisateur 4D. Dans ce cas, si le renouvellement automatique échoue pour une raison quelconque (erreur de connexion, statut du compte invalide, contrat non prolongé...), une icône d'avertissement est affichée à côté de la licence afin d'alerter l'administrateur du serveur. Des informations supplémentaires relatives au statut du renouvellement de la licence peuvent être affichées dans une info-bulle lorsque vous survolez la zone avec la souris :

![](assets/en/Admin/server-licence-failed.png)

Généralement, vous devrez vérifier le [**Gestionnaire de licences**](licenses.md).

#### Zone Détails

La zone "Détails" reprend une partie des informations affichées dans la zone graphique et propose des informations complémentaires.

- **Disque dur** : Capacité globale du disque dur et répartition entre l’espace occupé par les données de la base (fichier de données + index des données), l’espace occupé par les autres fichiers et l’espace disponible.
- **Mémoire** : Mémoire RAM installée sur la machine et quantité de mémoire occupée par 4D Server, par les autres applications ainsi que mémoire disponible. La mémoire occupée par 4D Server peut également être affichée dynamiquement dans la zone graphique.
- **Processeurs** : Taux instantané d’occupation du ou des processeurs(s) de la machine par 4D Server et par les autres applications. Ce taux est recalculé en permanence. Le taux d’occupation par 4D Server peut également être affiché dynamiquement dans la zone graphique.
- **Réseau** : Nombre instantané d’octets envoyés et reçus par la machine (serveur ou client). Cette valeur est réactualisée en permanence. Le nombre d’octets reçus peut également être affiché dynamiquement dans la zone graphique.


## Page Utilisateurs

La page **Utilisateurs** liste les utilisateurs 4D connectés au serveur.


![](assets/en/Admin/server-users.png)

Le bouton "Utilisateurs" indique entre parenthèses le nombre total d’utilisateurs connectés au serveur (ce nombre ne tient pas compte des éventuels filtres d’affichage appliqués à la fenêtre). La page contient également une zone de recherche dynamique et des boutons de commande. Vous pouvez modifier l’ordre des colonnes par simple glisser-déposer de la zone d’en-tête des colonnes.

Vous pouvez également trier la liste sur les valeurs d’une colonne en cliquant sur son en-tête. Cliquez plusieurs fois pour définir alternativement un ordre croissant/décroissant.

![](assets/en/Admin/server-users-sort.png)

### Liste des utilisateurs

Pour chaque utilisateur connecté à la base, la liste fournit les informations suivantes :

- Système de la machine cliente (macOS ou Windows) sous forme d’icône.
- **Utilisateur 4D** : Nom d’utilisateur 4D ou alias s'il est défini avec la commande [`SET USER ALIAS`](https://doc.4d.com/4dv19/help/command/en/page1666.html) sur le poste de l'utilisateur. Si les mots de passe ne sont pas activés et si aucun alias n'a été défini, tous les utilisateurs 4D sont nommés "Super_Utilisateur".
- **Nom de machine** : Nom de la machine distante.
- **Nom de session** : Nom de la session ouverte sur la machine distante.
- **Adresse IP** : Adresse IP de la machine distante.
- **Connexion** : Date et heure de la connexion de la machine distante.
- **Temps CPU** : Temps processeur consommé par cet utilisateur depuis la connexion.
- **Activité** : Ratio du temps que 4D Server consacre à cet utilisateur (affichage dynamique). "Endormi" si la machine du poste client est passée en veille (cf. ci-dessous).

#### Gestion des utilisateurs endormis

4D Server gère spécifiquement le cas où la machine d'une application distante 4D passe en mode veille alors que la connexion au serveur est toujours active. Dans ce cas, l'application distante 4D connectée notifie automatiquement 4D Server de sa déconnexion imminente. Sur le serveur, l'utilisateur connecté prend le statut d'activité **Endormi** :

![](assets/en/Admin/server-sleeping.png)

Ce statut libère les ressources sur le serveur. En outre, l'application 4D distante se reconnecte automatiquement à 4D Server après la sortie du mode veille.

Le scénario suivant est pris en charge : un utilisateur distant cesse de travailler durant un certain laps de temps, par exemple durant la pause déjeuner, mais garde ouverte la connexion au serveur. La machine passe en mode veille. Au retour de l'utilisateur, la machine sort du mode veille et l'application 4D distante récupère automatiquement sa connexion au serveur ainsi que son contexte de session.

> Une session distante en veille est automatiquement abandonnée par le serveur après 48 heures d'inactivité. Vous pouvez modifier ce timeout par défaut à l'aide de la commande [`SET DATABASE PARAMETER`](https://doc.4d.com/4dv19/help/command/en/page642.html) avec le sélecteur `Remote connection sleep timeout`.


### Zone de recherche/filtrage

Cette fonction permet de réduire le nombre de lignes affichées dans la liste à celles qui correspondent au texte saisi dans la zone de recherche. La zone indique les colonnes dans lesquelles la recherche/le filtrage sera effectué(e). Dans la page Utilisateurs, il s’agit des colonnes Utilisateur 4D, Nom de machine et Nom de session.

La mise à jour de la liste est effectuée en temps réel à mesure que vous saisissez du texte dans la zone. Il est possible de saisir plus d’une valeur à chercher. Utilisez un point-virgule pour séparer les valeurs. L’opérateur utilisé dans ce cas est du type `OU`. Par exemple, si vous saisissez "Jean;Marie;Pierre", seules les lignes comportant Jean OU Marie OU Pierre dans l’une des colonnes cibles seront conservées.


### Boutons d’administration

La page comporte trois boutons de commande. Ces boutons sont actifs si au moins une ligne est sélectionnée. Vous pouvez sélectionner plusieurs lignes en appuyant sur la touche **Maj** pour une sélection continue ou **Ctrl** (Windows) / **Commande** (macOS) pour une sélection discontinue.

#### Envoyer message

Ce bouton permet d’envoyer un message aux utilisateurs 4D sélectionnés dans la fenêtre. Si aucun utilisateur 4D n’est sélectionné, le bouton est désactivé. Lorsque vous cliquez sur le bouton, une boîte de dialogue apparaît, vous permettant saisir le message. La boîte de dialogue indique le nombre d’utilisateurs qui recevront le message :

![](assets/en/Admin/server-message.png)

Le message sera affiché sous forme d’alerte sur les postes distants.

> Vous pouvez effectuer la même opération pour les utilisateurs distants à l'aide de la commande [`SEND MESSAGE TO REMOTE USER`](https://doc.4d.com/4dv19/help/command/en/page1632.html).


#### Visualiser process

Ce bouton permet de visualiser directement les process du ou des utilisateur(s) sélectionné(s) dans la Page [**Process**](#process-page) de la fenêtre d’administration. Lorsque vous cliquez sur ce bouton, 4D Server bascule sur la page Process et pré-remplit la zone de recherche/filtrage de cette page avec les noms des utilisateurs sélectionnés.

#### Déconnecter

Ce bouton permet de forcer la déconnexion du ou des utilisateur(s) sélectionné(s). Lorsque vous cliquez sur ce bouton, une boîte de dialogue d’alerte apparaît, vous permettant de confirmer ou d’annuler l’opération (appuyez sur la touche **Alt** avant de cliquer sur le bouton **Déconnecter** pour déconnecter directement les utilisateurs sélectionnés sans afficher la boîte de dialogue de confirmation).

> Vous pouvez effectuer la même opération pour les utilisateurs distants à l'aide de la commande [`DROP REMOTE USER`](https://doc.4d.com/4dv19/help/command/en/page1633.html).



## Page Process

La page **Process** liste les process en cours d’exécution.

![](assets/en/Admin/server-admin-process-page.png)


Le bouton "Process" indique entre parenthèses le nombre total de process en cours d’exécution sur le serveur (ce nombre ne tient pas compte des éventuels filtres d’affichage appliqués à la fenêtre ni de l’état de l’option **Afficher les process par groupes**).

Vous pouvez modifier l’ordre des colonnes par simple glisser-déposer de la zone d’en-tête des colonnes. Vous pouvez également trier la liste sur les valeurs d’une colonne en cliquant sur son en-tête.

Tout comme la Page Utilisateurs, cette page contient une [zone de recherche/filtrage](#searchfiltering-area) dynamique, permettant de réduire le nombre de lignes affichées dans la liste à celles qui correspondent au texte saisi dans la zone de recherche. La recherche/le filtrage est effectué(e) dans les colonnes Session et Nom de process.

Vous disposez également de trois boutons-raccourcis permettant de filtrer par famille les process affichés dans la fenêtre :

![](assets/en/Admin/server-process-buttons.png)

- **Process utilisateurs** : Process générés par et pour les sessions utilisateurs. Ces process sont précédés d’une icône en forme de personnage.
- **Process 4D** : Process générés par le moteur de 4D Server. Ces process sont précédés d’une icône en forme de roue crantée.
- **Process en attente** : Process inactifs mais conservés temporairement et pouvant être réutilisés à tout moment. Ce mécanisme permet d’optimiser la réactivité de 4D Server. Ces process sont précédés d’une icône grisée en forme de personnage.

L’option **Afficher les process par groupes** vous permet de regrouper les process internes de 4D Server ainsi que les process clients, pour plus de lisibilité. Lorsque vous cochez cette option :

- les process clients 4D "jumeaux" (Process client 4D principal et Process base 4D client, cf. paragraphe [Type du process](#process-type)) sont groupés en un seul,
- le groupe "Gestionnaires de tâches" est créé ; il inclut les process internes dédiés à la répartition des tâches (Shared balancer, Net session manager, Exclusive pool worker),
- le groupe "Gestionnaires clients" est créé ; il inclut les différents process internes clients.

La zone inférieure de la fenêtre permet d’afficher la représentation graphique de l’activité du ou des process sélectionné(s).

> Vous pouvez sélectionner plusieurs lignes en appuyant sur la touche **Maj** pour une sélection continue ou **Ctrl** (Windows) / **Commande** (macOS) pour une sélection discontinue.

L’activité du process est le pourcentage du temps que 4D Server a consacré à ce process (ratio). La fenêtre fournit les informations suivantes pour chaque process :

- Type du process (cf. ci-dessous),
- Session:
    - 4D process - blank,
    - User process - 4D user name,
    - Web process - URL path,
- Name of the process,
- Numéro du process (tel que retourné par la fonction [`Nouveau process`](https://doc.4d.com/4dv19/help/command/en/page317.html) par exemple). Le numéro du process est le numéro attribué sur le serveur. Dans le cas d’un process global, ce numéro peut être différent de celui attribué sur le poste client.
- Etat courant du process,
- Temps (en secondes) d'exécution du process depuis sa création,
- Pourcentage du temps que 4D Server a consacré à ce process (ratio).

### Type du process

Chaque process est identifié par une icône et un type. La couleur et la forme de l’icône indiquent la famille du process :

| icône                                   | type                                                                                                                                                                                                                                                 |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](assets/en/Admin/server-icon-1.png)  | Serveur d’application                                                                                                                                                                                                                                |
| ![](assets/en/Admin/server-icon-2.png)  | Serveur SQL                                                                                                                                                                                                                                          |
| ![](assets/en/Admin/server-icon-3.png)  | Serveur DB4D (moteur de base de données)                                                                                                                                                                                                             |
| ![](assets/en/Admin/server-icon-4.png)  | Serveur Web                                                                                                                                                                                                                                          |
| ![](assets/en/Admin/server-icon-5.png)  | Serveur SOAP                                                                                                                                                                                                                                         |
| ![](assets/en/Admin/server-icon-6.png)  | Process client 4D protégé (process développement d’un 4D connecté)                                                                                                                                                                                   |
| ![](assets/en/Admin/server-icon-7.png)  | Process client 4D principal (process principal d’un 4D connecté. Process collaboratif, équivalent sur le serveur du process créé sur le poste client). Collaborative process, equivalent on the server of the process created on the client machine) |
| ![](assets/en/Admin/server-icon-8.png)  | 4D client base process (process parallel to a 4D client process. Preemptive process responsible for controlling the corresponding main 4D client process)                                                                                            |
| ![](assets/en/Admin/server-icon-9.png)  | Spare process (former or future "4D client database process")                                                                                                                                                                                        |
| ![](assets/en/Admin/server-icon-10.png) | SQL server worker process                                                                                                                                                                                                                            |
| ![](assets/en/Admin/server-icon-11.png) | HTTP server worker process                                                                                                                                                                                                                           |
| ![](assets/en/Admin/server-icon-12.png) | 4D client process (process running on the connected 4D)                                                                                                                                                                                              |
| ![](assets/en/Admin/server-icon-13.png) | Stored procedure (process launched by a connected 4D and running on the server)                                                                                                                                                                      |
| ![](assets/en/Admin/server-icon-14.png) | Web method (launched by a 4DACTION for example)                                                                                                                                                                                                      |
| ![](assets/en/Admin/server-icon-15.png) | Web method (preemptive)                                                                                                                                                                                                                              |
| ![](assets/en/Admin/server-icon-16.png) | SOAP method (launched by a Web Service)                                                                                                                                                                                                              |
| ![](assets/en/Admin/server-icon-17.png) | SOAP method (preemptive)                                                                                                                                                                                                                             |
| ![](assets/en/Admin/server-icon-18.png) | Logger                                                                                                                                                                                                                                               |
| ![](assets/en/Admin/server-icon-19.png) | TCP connection listener                                                                                                                                                                                                                              |
| ![](assets/en/Admin/server-icon-20.png) | TCP session manager                                                                                                                                                                                                                                  |
| ![](assets/en/Admin/server-icon-21.png) | Other process                                                                                                                                                                                                                                        |
| ![](assets/en/Admin/server-icon-22.png) | Worker process (cooperative)                                                                                                                                                                                                                         |
| ![](assets/en/Admin/server-icon-23.png) | 4D client process (preemptive)                                                                                                                                                                                                                       |
| ![](assets/en/Admin/server-icon-24.png) | Stored procedure (preemptive process)                                                                                                                                                                                                                |
| ![](assets/en/Admin/server-icon-25.png) | Worker process (preemptive)                                                                                                                                                                                                                          |

> Each main 4D client process and its "twinned" 4D client base process are grouped together when the **Display processes by groups** option is checked.


### Boutons d’administration

La page comporte cinq boutons de commande permettant d’agir sur le ou les process sélectionné(s). A noter que vous ne pouvez agir que sur les process utilisateurs.

![](assets/en/Admin/server-process-actions.png)

- **Tuer process** : permet de tuer le ou les process sélectionné(s). Lorsque vous cliquez sur ce bouton, une boîte de dialogue d’alerte apparaît, vous permettant de confirmer ou d’annuler l’opération.

> Vous pouvez tuer directement les process sélectionnés sans afficher la boîte de dialogue de confirmation, en appuyant sur la touche **Alt** avant de cliquer sur le bouton, ou en utilisant la commande [`ABORT PROCESS BY ID`](https://doc.4d.com/4dv19/help/command/en/page1634.html).

- **Endormir process** : permet d’endormir le ou les process sélectionné(s).
- **Réactiver process** : permet de réactiver le ou les process sélectionné(s). Les process doivent avoir été auparavant endormis (via le bouton précédent ou par programmation) sinon le bouton est sans effet.
- **Tracer process** : permet d’ouvrir sur le poste serveur une ou plusieurs fenêtre(s) du débogueur pour le ou les process sélectionné(s). Lorsque vous cliquez sur ce bouton, une boîte de dialogue d’alerte apparaît, vous permettant de confirmer ou d’annuler l’opération. A noter que la fenêtre du débogueur ne s’affiche que lorsque du code 4D est effectivement exécuté sur le poste serveur (par exemple dans le cadre d’un trigger ou de l’exécution d’une méthode ayant l’attribut "Exécuter sur serveur").

> Vous pouvez déboguer un process directement, sans afficher la boîte de dialogue de confirmation : pour cela, appuyez sur la touche **Alt** avant de cliquer sur le bouton.

- **Voir utilisateurs** : permet d’afficher dans la [page Utilisateurs](#users-page) tous les process du ou des utilisateur(s) sélectionné(s). Le bouton est actif lorsqu’un process utilisateur au moins est sélectionné.


## Maintenance Page

The **Maintenance** page of the 4D Server Administration window provides information concerning the current operation of the application. It also provides access to basic maintenance functions:

![](assets/en/Admin/server-maintenance.png)


### Last verification/compacting

These areas indicate the date, time and status of the last [data verification](MSC/verify.md) and [compacting operation](MSC/compact.md) carried out on the database.

#### Verify Records and Indexes

This button can be used to launch the verification operation directly, without interrupting the server. Note that the server may be noticeably slowed down during the operation.

All the records and all the indexes of the database are verified. If you want to be able to target the verification or have additional options available, you will need to use the [Maintenance and Security Center](MSC/overview.md) (MSC).

After verification, a report file is generated in XML format on the server in the [maintenance Logs](Project/architecture.md#logs) folder. The **View Report** button (named **Download Report** if the operation was carried out from a remote machine) lets you display the file in your browser.


This area indicates the date, time and status of the last  carried out on the database data.

#### Compact Data...

Thus button can be used to launch a data compacting operation directly. This operation requires stopping the server: when you click on this button, the 4D Server shutdown dialog box appears so that you can choose how to interrupt the operation:

![](assets/en/Admin/server-shut.png)

After the actual interruption of the application service, 4D Server carries out a standard compacting operation on the database data. If you want to have additional options available, you will need to use the [MSC](MSC/overview.md).

Once the compacting is finished, 4D Server automatically restarts the application. The 4D users can then be reconnected.

> If the request for compacting was carried out from a remote 4D remote machine, this machine is automatically reconnected by 4D Server.

After verification, a report file is generated in XML format on the server in the [maintenance Logs](Project/architecture.md#logs) folder. The **View Report** button (named **Download Report** if the operation was carried out from a remote machine) lets you display the file in your browser.


### Uptime

This area indicates the duration of the 4D Server application execution since the last time it was started (days, hours and minutes).


#### Restart server...

This button can be used to immediately close and restart the project. When you click on this button, the 4D Server shutdown dialog box appears so that you can choose how to interrupt the operation. After validation, 4D Server automatically closes and reopens the project. The 4D users can then be reconnected.

> If the request for restarting was carried out from a remote 4D machine, this machine is automatically reconnected by 4D Server.

### Last backup

This area indicates the date and time of the [last backup](MSC/backup.md) of the database and provides information about the next scheduled automatic backup (if any). Automatic backups are configured using the **Scheduler** page of the structure settings.

- **Last backup**: date and time of last backup.
- **Next backup**: date and time of next scheduled backup.
- **Needed space**: estimated space needed for the backup. The actual size of the backup file may vary according to the settings (compression, etc.) and according to variations of the data file.
- **Available space**: space available on the backup volume.


The **Start backup** button can be used to backup the database immediately using the current backup parameters (files backed up, location of archives, options, etc.). You can view these parameters by clicking on the **Settings...** button. During a backup on the server, the client machines are "blocked" (but not disconnected) and it is not possible for any new clients to connect.


### Request and Debug logs

This area indicates the server log files recording duration (when log files are activated) and allows you to control their activation.

Refer to the [**Description of log files**](debugLogFiles.md) section for details on log files.

#### Start/Stop Request and Debug Logs

The **Start Request and Debug Logs** button starts log files. Since this may noticeably deteriorate server performance, it is to be reserved for the development phase of the application.

> This button only logs operations that are executed on the server.

When the logs have been activated, the button title changes to **Stop Request and Debug Logs**, so that you can stop recording requests at any time. Pay attention to the fact that restarting the log after stopping it "erases" the previous file.

#### View Report

The **View Report** button (named **Download report** if the operation was carried out from a remote desktop client) lets you open a system window displaying the request log file.

#### Load logs configuration file

This button allows you to load a special server [log configuration file](debugLogFiles.md#using-a-log-configuration-file) (`.json` file). Such a file can be provided by 4D technical services to monitor and study specific cases.


#### Pause logging

This button suspends all currently logging operations started on the server. This feature can be useful to temporarily lighten the server tasks.

When the logs have been paused, the button title changes to **Resume logging**, so that you can resume the logging operations.

> You can pause and resume logging using the [SET DATABASE PARAMETER](https://doc.4d.com/4dv19/help/command/en/page642.html) command.


## Application Server Page

The Application Server page groups together information about the desktop application published by 4D Server and can be used to manage this publication.

![](assets/en/Admin/server-admin-application-page.png)


The upper part of the page provides information about the current status of the 4D Server application server.

- **State**: Started or Stopped.
- **Starting time**: Date and time the application server was launched. This date corresponds to the opening of the project by 4D Server.
- **Uptime**: Time elapsed since last opening of the project by the server.

### Accept/Reject New Connections

This button toggles and can be used to manage the access of new desktop client machines to the application server.

By default, when the project is published:
- The button is titled "Reject new connections."
- New desktop clients can connect freely (within the limit of the connections permitted by the license).
- The project name is published in the remote connection dialog box (if the "At Startup Publish Database Name in the Connection Dialog" option is checked in the Preferences).

If you click on the **Reject new connections** button:
- The button title changes to "Accept new connections."
- No new desktop client can then connect. Clients attempting to connect will receive the following message:

![](assets/en/Admin/server-error.png)

- The project name no longer appears in the remote connection dialog box.
- Desktop clients that are already connected are not disconnected and can continue to work normally.

> You can perform the same action with the [`REJECT NEW REMOTE CONNECTIONS`](https://doc.4d.com/4dv19/help/command/en/page1635.html) command.

- If you click on the **Accept new connections button**, the application server returns to its default state.

This feature permits, for example, an administrator to carry out various maintenance operations (verification, compacting, etc.) just after having started the server. If the administrator uses a remote connection, they can be certain to be the only one modifying the data. It is also possible to use this function in preparation of a maintenance operation which requires that there be no desktop client machine connected.

### Information

#### Configuration

This area provides information about the 4D project published by the server: name and location of data and structure files and name of database log file. You can click on the structure or data file name in order to view its complete pathname.

The **Mode** field indicates the current execution mode of the application: compiled or interpreted.

The lower part of the area indicates the server configuration parameters (launched as service, port and IP address) and the enabling of TLS for client-server connections (does not concern SQL nor HTTP connections).

#### Mémoire

This area indicates the **Total cache memory** (parameter set in the settings) and the **Used cache memory** (dynamic allocation by 4D Server according to its needs).


#### Application Server Connections

- **Maximum**: maximum number of simultaneous client connections allowed for the application server. This value depends on the license installed on the server machine.
- **Used**: actual number of connections currently being used.


## SQL Server Page

The SQL Server page groups together information about the integrated SQL server of 4D Server. It also includes a button that can be used to control the activation of the server.

![](assets/en/Admin/server-admin-sql-page.png)


The upper part of the page provides information about the current status of the SQL server of 4D Server.

- **State**: Started or Stopped
- **Starting time**: Date and time the SQL server was last launched.
- **Uptime**: Time elapsed since last startup of the SQL server.

### Start / Stop SQL Server

This button toggles and can be used to control the activation of the 4D Server SQL server.

- When the SQL server state is "Started," the button is titled **Stop SQL Server**. If you click on this button, the 4D Server SQL server is immediately stopped; it no longer replies to any external SQL requests received on the designated TCP port.
- When the SQL server state is "Stopped," the button is titled **Start SQL Server**. If you click on this button, the 4D Server SQL server is immediately started; it replies to any external SQL queries received on the designated TCP port. Note that you will need a suitable license to be able to use the 4D SQL server.

> The SQL server can also be launched automatically on application startup (option in the Settings) or by programming.

### Information

#### Configuration

This area provides information about the SQL server configuration parameters: automatic launching on startup, listening IP address, TCP port (19812 by default) and enabling of SSL for SQL connections (does not concern 4D nor HTTP connections).

These parameters can be modified via the 4D Settings.

#### Connections

Number of SQL connections currently open on 4D Server.

#### Maximum Connections

Maximum number of simultaneous SQL connections allowed. This value depends on the license installed on the server machine.

## HTTP Server Page

The HTTP Server page groups together information about the operation of the Web server and SOAP server of 4D Server. The Web server lets you publish Web content such as HTML pages or pictures for Web browsers, and to handle REST requests. The SOAP server manages the publication of Web Services. These servers rely on the internal HTTP server of 4D Server.

![](assets/en/Admin/server-admin-web-page.png)


The upper part of the page provides information about the current status of the HTTP server of 4D Server.

- **State**: Started or Stopped
- **Starting time**: Date and time the HTTP server was last launched.
- **Uptime**: Time elapsed since last startup of the HTTP server.
- **Total HTTP hits**: Number of (low level) HTTP hits received by the HTTP server since it was started.


### Start/Stop HTTP Server

This button toggles and can be used to control the activation of the 4D Server HTTP server.

- When the HTTP server state is "Started," the button is titled **Stop HTTP Server**. If you click on this button, the 4D Server HTTP server is immediately stopped; the Web server, REST server, and SOAP server no longer accept any requests.
- When the HTTP server state is "Stopped," the button is titled **Start HTTP Server**. If you click on this button, the 4D Server HTTP server is immediately started; Web, REST, and SOAP requests are accepted.

> You must have a suitable license in order to be able to start the HTTP server.
> 
> The HTTP server can also be launched automatically on application startup (Settings) or by programming.

### Web Information

This area provides specific information about the Web server of 4D Server.

- **Web requests**: Accepted or Rejected. This information indicates whether the Web server is activated. Since the Web server is directly linked to the HTTP server, Web requests are accepted when the HTTP server is started and rejected when it is stopped.
- **Maximum connections**: Maximum number of Web connections allowed. This value depends on the license installed on the server machine.

### SOAP Information

This area provides specific information about the SOAP server of 4D Server and includes a control button.

- **SOAP requests**: Accepted or Rejected. This information indicates whether the SOAP server is activated. In order for SOAP requests to be accepted, the HTTP server must be started and the SOAP server must explicitly accept the requests (see the Accept/Reject button).
- **Maximum connections**: Maximum number of SOAP connections allowed. This value depends on the license installed on the server machine.
- **Accept/Reject SOAP requests** button: This button toggles and can be used to control the activation of the 4D Server SOAP server. This button modifies the value of the **Allow Web Services Requests** option on the "Web Services" page of the Settings (and vice versa). You can also use the [`SOAP REJECT NEW REQUESTS`](https://doc.4d.com/4dv19/help/command/en/page1636.html) command to refuse new SOAP requests, however this does not modify the value of the **Allow Web Services Requests** option.

If you click on the **Accept SOAP requests** button and the HTTP server is stopped, 4D automatically starts it.

### HTTP Server Configuration

This area provides information about the configuration parameters and operation of the HTTP server:

- **Auto-launched at startup**: parameter set via the Settings.
- **HTTP Server processes (used/total)**: number of HTTP processes created on the server (current number of processes / total of all processes created).
- **Cache memory**: size of HTTP server cache memory, when it is activated (size actually used by cache / maximum size theoretically allocated to the cache in the Settings). You can click on the **Clear Cache** button to empty the current cache.
- **Listening to IP**, **HTTP Port** (80 by default), **TLS enabled** for HTTP connections (does not concern 4D nor SQL connections) and **HTTPS Port** used: current [configuration parameters](WebServer/webServerConfig.md) of the HTTP server, specified through the Settings or by programming.
- **Log file information**: name, format and date of the next automatic log backup of the HTTP server (logweb.txt file).


## Real Time Monitor Page

The Real Time Monitor page monitors the progress of "long" operations performed by the application in real time. These operations are, for example, sequential queries, execution of formulas, etc.

![](assets/en/Admin/server-admin-monitor-page.png)
> This page is available in the administration window of the server machine and also from a remote 4D machine. In the case of a remote machine, this page displays data from operations performed on the server machine.

A line is added for each long operation performed on the data. This line automatically disappears when the operation is complete (you can check the **Display operations at least 5 seconds** option to keep quick operations on screen for 5 seconds, see below).

The following information is provided for each line:

- **Start Time**: starting time of operation in the format: "dd/mm/yyyy - hh:mm:ss"
- **Duration** (ms): duration in milliseconds of operation in progress
- **Information**: title of operation.
- **Details**: this area displays detailed information which will vary according to the type of operation selected. More specifically:
    + **Created on**: indidates whether the operation results from a client action (Created on client) or if it was started explicitly on the server by means of a stored procedure or the "Execute on server" option (Created on server).
    + **Operation Details**: Operation type and (for query operations) query plan.
    + **Sub-operations** (if any): Dependent operations of the selected operation (e.g. deleting related records before a parent record).
    + **Process Details**: Additional information concerning the table, field, process or client, depending on the type of operation

> Real-time monitoring page uses the [`GET ACTIVITY SNAPSHOT`](https://doc.4d.com/4dv19/help/command/en/page1277.html) command internally. More information can be found in this command description.

The page is active and updated permanently as soon as it is displayed. It should be noted that its operation can significantly slow the execution of the application. It is possible to suspend the updating of this page in one of the following ways:

- clicking on the **Pause** button,
- clicking in the list,
- pressing the space bar.

When you pause the page, a "PAUSED" message appears and the button label changes to **Resume**. You can resume monitoring of the operations by performing the same action as for pausing.

#### Mode avancé

The RTM page can display additional information, if necessary, for each listed operation.

To access the advanced mode for an operation, press **Shift** and select the desired operation. All available information is then displayed in the "Process Details" area without any filtering (as returned by the `GET ACTIVITY SNAPSHOT` command). Available information depends on the operation selected.

Here is an example of information displayed in standard mode:

![](assets/en/Admin/server-admin-monitor-adv1.png)


In advanced mode (**Shift+Click** on the operation), additional information is displayed:

![](assets/en/Admin/server-admin-monitor-adv2.png)

#### Snapshot button

The **Snapshot** button allows you to copy to the clipboard all the operations displayed in the RTM panel, as well as their related details (process and sub-operation info):

![](assets/en/Admin/server-admin-monitor-snapshot.png)


#### Display operations at least 5 seconds

If you check the **Display operations at least 5 seconds** option, any listed operation will be displayed on the page for at least five seconds, even after its execution is finished. Retained operations appear dimmed in the operation list. This feature is useful for getting information about operations that execute very quickly.
