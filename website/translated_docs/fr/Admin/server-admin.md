---
id: server-admin
title: Fenêtre d'administration de 4D Server
---


Lorsque 4D Server est lancé avec interface sous Windows ou macOS, une fenêtre d'administration graphique est disponible, fournissant de nombreux outils d'analyse et de contrôle pour l'application 4D publiée. Pour afficher la fenêtre d'administration de 4D Server du projet ouvert, sélectionnez l'élément de menu **Window > Administration**, ou appuyez sur **Ctrl+U**.

> L'accès à la fenêtre d'administration de 4D Server s'effectue par un 4D distant. Pour plus d'informations sur ce point, veuillez vous reporter à la section Administration depuis les machines distantes.


## Page Moniteur

La Page **Moniteur** affiche des informations dynamiques relatives à l’exploitation de la base de données ainsi que des informations sur le système et l’application 4D Server.

![](assets/en/Admin/server-admin.png)

> Sous Windows, certaines informations système affichées sur cette page sont récupérées via les outils "Analyseur de performance" de Windows. Ces outils sont accessibles uniquement si l'utilisateur ayant ouvert la session sur laquelle 4D Server a été lancé dispose des autorisations d'administration nécessaires.

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

- Type de process (cf. ci-dessous),
- Session:
    - Process 4D - vide,
    - Process utilisateur - nom de l'utilisateur 4D,
    - Process web - chemin URL,
- Nom du process,
- Numéro du process (tel que retourné par la fonction [`Nouveau process`](https://doc.4d.com/4dv19/help/command/en/page317.html) par exemple). Le numéro du process est le numéro attribué sur le serveur. Dans le cas d’un process global, ce numéro peut être différent de celui attribué sur le poste client.
- Etat courant du process,
- Temps (en secondes) d'exécution du process depuis sa création,
- Pourcentage du temps que 4D Server a consacré à ce process (ratio).

### Type du process

Chaque process est identifié par une icône et un type. La couleur et la forme de l’icône indiquent la famille du process :

| icon                                    | type                                                                                                                                                                                                                                        |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](assets/en/Admin/server-icon-1.png)  | Serveur d’application                                                                                                                                                                                                                       |
| ![](assets/en/Admin/server-icon-2.png)  | Serveur SQL                                                                                                                                                                                                                                 |
| ![](assets/en/Admin/server-icon-3.png)  | Serveur DB4D (moteur de base de données)                                                                                                                                                                                                    |
| ![](assets/en/Admin/server-icon-4.png)  | Serveur Web                                                                                                                                                                                                                                 |
| ![](assets/en/Admin/server-icon-5.png)  | Serveur SOAP                                                                                                                                                                                                                                |
| ![](assets/en/Admin/server-icon-6.png)  | Process client 4D protégé (process développement d’un 4D connecté)                                                                                                                                                                          |
| ![](assets/en/Admin/server-icon-7.png)  | Process client 4D principal (process principal d’un 4D connecté. Process collaboratif, équivalent sur le serveur du process créé sur le poste client). Process collaboratif, équivalent sur le serveur du process créé sur le poste client) |
| ![](assets/en/Admin/server-icon-8.png)  | Process base 4D client (process parallèle à un process 4D client. Process préemptif chargé de contrôler le process client 4D principal correspondant)                                                                                       |
| ![](assets/en/Admin/server-icon-9.png)  | Process en attente (ancien ou futur "Process client 4D base de données")                                                                                                                                                                    |
| ![](assets/en/Admin/server-icon-10.png) | Worker serveur SQL                                                                                                                                                                                                                          |
| ![](assets/en/Admin/server-icon-11.png) | Worker serveur HTTP                                                                                                                                                                                                                         |
| ![](assets/en/Admin/server-icon-12.png) | Process 4D client (process coopératif tournant sur le 4D connecté)                                                                                                                                                                          |
| ![](assets/en/Admin/server-icon-13.png) | Procédure stockée (process coopératif lancé par un 4D connecté et tournant sur le serveur)                                                                                                                                                  |
| ![](assets/en/Admin/server-icon-14.png) | Méthode Web (lancée par un 4DACTION par exemple)                                                                                                                                                                                            |
| ![](assets/en/Admin/server-icon-15.png) | Méthode Web (process préemptif)                                                                                                                                                                                                             |
| ![](assets/en/Admin/server-icon-16.png) | Méthode SOAP (lancée par un Web Service)                                                                                                                                                                                                    |
| ![](assets/en/Admin/server-icon-17.png) | Méthode SOAP (process préemptif)                                                                                                                                                                                                            |
| ![](assets/en/Admin/server-icon-18.png) | Logger                                                                                                                                                                                                                                      |
| ![](assets/en/Admin/server-icon-19.png) | Listener connexion TCP                                                                                                                                                                                                                      |
| ![](assets/en/Admin/server-icon-20.png) | Manager session TCP                                                                                                                                                                                                                         |
| ![](assets/en/Admin/server-icon-21.png) | Autre process                                                                                                                                                                                                                               |
| ![](assets/en/Admin/server-icon-22.png) | Process worker (coopératif)                                                                                                                                                                                                                 |
| ![](assets/en/Admin/server-icon-23.png) | Process 4D client (préemptif)                                                                                                                                                                                                               |
| ![](assets/en/Admin/server-icon-24.png) | Procédure stockée (process préemptif)                                                                                                                                                                                                       |
| ![](assets/en/Admin/server-icon-25.png) | Process worker (préemptif)                                                                                                                                                                                                                  |

> Chaque process client 4D principal et son process base 4D client "jumeau" sont regroupés lorsque l’option **Afficher les process par groupes** est cochée.


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


## Page maintenance

La page **Maintenance** fournit diverses informations relatives au fonctionnement courant de la base. Elle donne également accès aux fonctions de maintenance élémentaires :

![](assets/en/Admin/server-maintenance.png)


### Dernière vérification/dernier compactage

Ces zones indiquent la date, l’heure et le statut de la dernière [vérification des données](MSC/verify.md) et de la dernière [opération de compactage](MSC/compact.md) effectuées sur la base.

#### Vérifier enregistrements et index

Ce bouton permet de lancer directement l’opération de vérification, sans interruption du serveur. A noter que le serveur peut être sensiblement ralenti durant l’opération.

Tous les enregistrements et tous les index de la base sont vérifiés. Si vous souhaitez pouvoir cibler la vérification ou disposer d’options supplémentaires, vous devez utiliser le [Centre de sécurité et de maintenance](MSC/overview.md) (CSM).

A l’issue de la vérification, un fichier de compte-rendu est généré au format XML sur le serveur, dans le dossier [maintenance Logs](Project/architecture.md#logs). Le bouton **Voir le compte rendu** (nommé **Télécharger le compte rendu** si l’opération a été effectuée depuis un poste distant) vous permet d’afficher le fichier dans votre navigateur.


Cette zone indique la date, l’heure et le statut de la dernière opération de vérification/compactage des données de la base.

#### Compacter les données...

Ce bouton permet de lancer directement une opération de compactage des données. Cette opération nécessite de stopper le serveur : lorsque vous cliquez sur le bouton, la boîte de dialogue de fermeture de la base 4D Server apparaît, vous permettant de choisir le mode d’interruption de l’exploitation :

![](assets/en/Admin/server-shut.png)

Après l’interruption effective de la base, 4D Server effectue un compactage standard des données de la base. Si vous souhaitez disposer d’options supplémentaires, vous devez utiliser le [Centre de sécurité et de maintenance (CSM)](MSC/overview.md).

Une fois le compactage terminé, 4D Server relance automatiquement l'application. Les utilisateurs 4D peuvent alors se reconnecter.

> Si la demande de compactage a été effectuée depuis un client 4D distant, ce poste est automatiquement reconnecté par 4D Server.

A l’issue de la vérification, un fichier de compte-rendu est généré au format XML sur le serveur, dans le dossier [maintenance Logs](Project/architecture.md#logs). Le bouton **Voir le compte rendu** (nommé **Télécharger le compte rendu** si l’opération a été effectuée depuis un poste distant) vous permet d’afficher le fichier dans votre navigateur.


### Durée de fonctionnement

Cette zone indique la durée de fonctionnement du serveur depuis son dernier démarrage (jours, heures et minutes).


#### Redémarrer le serveur...

Ce bouton vous permet de provoquer un redémarrage immédiat du serveur. Lorsque vous cliquez sur ce bouton, la boîte de dialogue de fermeture de la base 4D Server apparaît, vous permettant de choisir le mode d’interruption de l’exploitation. Après le redémarrage, 4D Server relance automatiquement la base. Les utilisateurs 4D peuvent alors se reconnecter.

> Si la demande de redémarrage a été effectuée depuis un client 4D distant, ce poste est automatiquement reconnecté par 4D Server.

### Dernière sauvegarde

Cette zone indique la date et l’heure de la [dernière sauvegarde](MSC/backup.md) de la base et fournit des informations relatives à la prochaine sauvegarde automatique, le cas échéant. Les sauvegardes automatiques sont paramétrées via la page **Périodicité** des propriétés de la base.

- **Dernière sauvegarde** : date et heure de la dernière sauvegarde automatique.
- **Prochaine sauvegarde** : date et heure de la prochaine sauvegarde.
- **Place nécessaire estimée** : estimation de la taille nécessaire pour la sauvegarde. La véritable taille réelle du fichier de sauvegarde pourra varier en fonction des paramétrages (compression...) et des variations du fichier de données.
- **Place disponible** : place disponible sur le volume de sauvegarde.


Le bouton **Sauvegarder la base** permet de démarrer une sauvegarde immédiate de la base en utilisant les paramètres de sauvegarde courants (fichiers sauvegardés, emplacement des archives, options, etc.). Vous pouvez visualiser ces paramètres en cliquant sur le bouton **Propriétés...**. Pendant une sauvegarde sur le serveur, les postes clients sont "bloqués" (mais pas déconnectés) et il n’est pas possible à de nouveaux clients de se connecter.


### Requêtes et débogage

Cette zone indique la durée d’enregistrement des fichiers d'historique (lorsqu’ils sont activés) et vous permet de gérer leur activation.

Refer to the [**Description of log files**](debugLogFiles.md) section for details on log files.

#### Start/Stop Request and Debug Logs

Le bouton **Démarrer les journaux des requêtes et de débogage** permet de démarrer les fichiers de compte-rendu. Ce mode pouvant dégrader sensiblement les performances du serveur, il est à réserver à la phase de mise au point de l’application.

> Ce bouton enregistre uniquement les opérations exécutées sur le serveur.

Une fois l’enregistrement des requêtes activé, le libellé du bouton devient **Arrêter les journaux des requêtes et de débogage**, permettant de stopper l’enregistrement des requêtes à tout moment. A noter qu’une reprise de l’enregistrement après un arrêt "écrase" le fichier précédent.

#### Voir le compte rendu

Le bouton **Voir le compte rendu** (nommé **Télécharger le compte rendu** si l’opération a été effectuée depuis un client distant) permet d’ouvrir une fenêtre système affichant le fichier journal.

#### Load logs configuration file

This button allows you to load a special server [log configuration file](debugLogFiles.md#using-a-log-configuration-file) (`.json` file). Such a file can be provided by 4D technical services to monitor and study specific cases.


#### Pause logging

This button suspends all currently logging operations started on the server. This feature can be useful to temporarily lighten the server tasks.

When the logs have been paused, the button title changes to **Resume logging**, so that you can resume the logging operations.

> You can pause and resume logging using the [SET DATABASE PARAMETER](https://doc.4d.com/4dv19/help/command/en/page642.html) command.


## Page Serveur d’application

La Page Serveur d’application regroupe les informations relatives à la base de données publiée par 4D Server et permet de gérer cette publication.

![](assets/en/Admin/server-admin-application-page.png)


La partie supérieure de la page fournit des informations sur le statut courant du serveur d’application de 4D Server.

- **Etat** : Démarré ou Arrêté.
- **Date de démarrage** : Date et heure de lancement de la base serveur. Cette date correspond à l’ouverture de la base par 4D Server.
- **Durée de fonctionnement** : Durée écoulée depuis la dernière ouverture de la base.

### Refuser / Accepter nouvelles connexions

Ce bouton fonctionne en bascule. Il permet de gérer l’accès de nouveaux postes clients à l’application serveur.

Par défaut, lorsque la base est publiée :
- Le libellé du bouton est "Refuser nouvelles connexions"
- De nouveaux clients peuvent se connecter librement (dans les limites des connexions accordées par la licence).
- Le nom de la base est publié dans la boîte de dialogue de connexion (si l’option "Publier le nom de la base au démarrage dans le dialogue de connexion" est cochée dans les Préférences).

Si vous cliquez sur le bouton **Refuser nouvelles connexions** :
- Le libellé du bouton devient "Accepter nouvelles connexions"
- Plus aucun nouveau client ne peut alors se connecter. Les clients qui tenteront de se connecter recevront le message suivant :

![](assets/en/Admin/server-error.png)

- Le nom du projet n’apparaît plus dans la boîte de dialogue de connexion.
- Les clients déjà connectés ne sont pas déconnectés et peuvent continuer à travailler normalement.

> Vous pouvez effectuer la même opération à l'aide de la commande [`REJETER NOUVELLES CONNEXIONS DISTANTES`](https://doc.4d.com/4dv19/help/command/en/page1635.html).

- Si vous cliquez sur le bouton **Accepter nouvelles connexions**, la base retourne dans l’état "par défaut".

Cette fonction permet par exemple à un administrateur, juste après avoir démarré le serveur, d’effectuer diverses opérations de maintenance (vérification, compactage...). S’il utilise une connexion cliente, il a la certitude d’être le seul à modifier les données. Il est également possible d’utiliser cette fonction en préparation d’une opération de maintenance nécessitant qu’aucun poste client ne soit connecté.

### Information

#### Configuration

Cette zone fournit plusieurs informations sur la base de données 4D publiée par le serveur : nom et emplacement des fichiers de structure et de données et nom du fichier journal (fichier d’historique de la base). Vous pouvez cliquer sur le nom du fichier de structure ou de données afin de visualiser son chemin d’accès complet.

Le champ **Mode** indique le mode d'exécution courant de l'application : compilé ou interprété.

La partie inférieure de la zone indique les paramètres de configuration du serveur (démarré comme service, port et adresse IP) et l’activation du TLS pour les connexions client-serveur (ne concerne pas les connexions SQL ni HTTP).

#### Mémoire

Cette zone indique la **mémoire cache totale** (paramètre défini dans les préférences de la base) et la **mémoire cache utilisée** (allocation dynamique par 4D Server en fonction des besoins).


#### Connexions application serveur

- **Maximum** : indique le nombre maximum de connexions clientes simultanées autorisées pour le serveur d'application. Cette valeur dépend de la licence installée sur le poste serveur.
- **Utilisées** : indique le nombre de connexions actuellement consommées.


## Page Serveur SQL

La Page Serveur SQL regroupe les informations relatives au serveur SQL intégré de 4D Server. Elle comporte également un bouton permettant de contrôler l’activation du serveur.

![](assets/en/Admin/server-admin-sql-page.png)


La partie supérieure de la page fournit des informations sur le statut courant du serveur SQL de 4D Server.

- **Etat** : Démarré ou Arrêté
- **Date de démarrage** : Date et heure du dernier lancement du serveur SQL.
- **Durée de fonctionnement** : Délai écoulé depuis le dernier démarrage du serveur SQL.

### Démarrer / Arrêter le serveur SQL

Ce bouton fonctionne en bascule. Il permet de contrôler l’activation du serveur SQL de 4D Server.

- Lorsque l’état du serveur SQL est "Démarré", le bouton est libellé **Arrêter le serveur SQL**. Si vous cliquez sur ce bouton, le serveur SQL de 4D Server est immédiatement stoppé, il ne répond plus aux requêtes SQL externes reçues sur le port TCP désigné.
- Lorsque l’état du serveur SQL est "Arrêté", le bouton est libellé **Démarrer le serveur SQL**. Si vous cliquez sur ce bouton, le serveur SQL de 4D Server est immédiatement démarré, il répond aux requêtes SQL externes reçues sur le port TCP désigné. A noter que vous devez disposer d’une licence adéquate pour pouvoir exploiter le serveur SQL de 4D.

> Le serveur SQL peut également être lancé automatiquement au démarrage de l’application (option des Préférences) ou par programmation.

### Information

#### Configuration

Cette zone fournit plusieurs informations sur les paramètres de configuration du serveur SQL : lancement automatique au démarrage, adresse IP d’écoute, port TCP (19812 par défaut) et activation du SSL pour les connexions SQL (ne concerne pas les connexions 4D ni HTTP).

Ces paramètres peuvent être modifiés via les Préférences de 4D.

#### Connexions

Nombre de connexions SQL actuellement ouvertes sur 4D Server.

#### Connexions maximum

Nombre maximum de connexions SQL simultanées autorisées. Cette valeur dépend de la licence installée sur le poste serveur.

## Page Serveur HTTP

La Page Serveur HTTP regroupe les informations relatives au fonctionnement du serveur Web et du serveur SOAP de 4D Server. Le serveur Web permet de publier du contenu Web tel que des pages HTML ou des images à destination de navigateurs Web et gérer des requêtes REST. Le serveur SOAP gère la publication de Web Services. Ces deux serveurs s’appuient sur le serveur HTTP interne de 4D Server.

![](assets/en/Admin/server-admin-web-page.png)


La partie supérieure de la page fournit des informations sur le statut courant du serveur HTTP de 4D Server.

- **Etat** : Démarré ou Arrêté
- **Date de démarrage** : Date et heure du dernier lancement du serveur HTTP.
- **Durée de fonctionnement** : Délai écoulé depuis le dernier démarrage du serveur HTTP.
- **Nombre de hits HTTP** : nombre de hits HTTP (bas niveau) reçus par le serveur HTTP depuis son démarrage.


### Démarrer / Arrêter le serveur HTTP

Ce bouton fonctionne en bascule. Il permet de contrôler l’activation du serveur HTTP de 4D Server.

- Lorsque l’état du serveur HTTP est "Démarré", le bouton est libellé **Arrêter le serveur HTTP**. Si vous cliquez sur ce bouton, le serveur HTTP de 4D Server est immédiatement stoppé, le serveur Web et le serveur SOAP n’acceptent plus aucune requête.
- Lorsque l’état du serveur HTTP est "Arrêté", le bouton est libellé **Démarrer le serveur HTTP**. Si vous cliquez sur ce bouton, le serveur HTTP de 4D Server est immédiatement démarré : les requêtes Web, REST et SOAP sont acceptées.

> Vous devez disposer d’une licence appropriée pour pouvoir démarrer le serveur HTTP.
> 
> Le serveur HTTP peut également être lancé automatiquement au démarrage de l’application (option des Préférences) ou par programmation.

### Informations Web

Cette zone fournit des informations spécifiques relatives au serveur Web de 4D Server.

- **Requêtes Web** : Acceptées ou Refusées. Cette information indique si le serveur Web est actif. Le serveur Web étant directement relié au serveur HTTP, les requêtes Web sont acceptées lorsque le serveur HTTP est démarré et refusées lorsqu’il est stoppé.
- **Connexions maximum** : Nombre maximum de connexions Web autorisées. Cette valeur dépend de la licence installée sur le poste serveur.

### Informations SOAP

This area provides specific information about the SOAP server of 4D Server and includes a control button.

- **SOAP requests**: Accepted or Rejected. Cette information indique si le serveur SOAP est actif. Pour que les requêtes SOAP soient acceptées, le serveur HTTP doit être démarré et le serveur SOAP doit explicitement accepter les requêtes (cf. bouton Accepter/Refuser).
- **Connexions maximum** : Nombre maximum de connexions SOAP autorisées. Cette valeur dépend de la licence installée sur le poste serveur.
- **Accepter/Refuser les requêtes SOAP** : Ce bouton fonctionne en bascule. Il permet de contrôler l’activation du serveur SOAP de 4D Server. Ce bouton modifie la valeur de l’option **Autoriser requêtes Web Services** dans la page "Web services" des Propriétés de la base (et inversement). Vous pouvez également utiliser la commande [`SOAP REJETER NOUVELLES REQUETES`](https://doc.4d.com/4dv19/help/command/en/page1636.html) pour refuser de nouvelles requêtes SOAP. Toutefois, elle ne modifie pas la valeur de l’option **Autoriser requêtes Web Services**.

Si vous cliquez sur le bouton **Accepter les requêtes SOAP** et que le serveur HTTP est arrêté, 4D le démarre automatiquement.

### Configuration serveur HTTP

Cette zone fournit plusieurs informations sur les paramètres de configuration et le fonctionnement du serveur HTTP :

- **Lancement automatique au démarrage** : paramètre défini via les Propriétés.
- **Process serveur HTTP (en cours/total)** : nombre de process HTTP créés sur le serveur (nombre courant de process / cumul de tous les process créés).
- **Mémoire cache** : taille de la mémoire cache du serveur HTTP, lorsqu’elle est activée (taille réellement occupée par le cache / taille maximale théorique allouée au cache dans les Propriétés). You can click on the **Clear Cache** button to empty the current cache.
- **Adresse IP d’écoute**, **Port HTTPS** (80 par défaut), **TLS activé** pour les connexions HTTP (ne concerne pas les connexions SQL ou 4D) et **Port HTTPS** utilisés : [paramètres de configuration](WebServer/webServerConfig.md) courants du serveur HTTP, définis dans les Propriétés ou par programmation.
- **Informations sur le fichier journal** : nom, format et date de la prochaine sauvegarde automatique du journal du serveur HTTP (fichier logweb.txt).


## Page Moniteur temps réel

La page Moniteur temps réel permet de surveiller en temps réel le déroulement des opérations "longues" effectuées par l’application. Ces opérations sont par exemple les recherches séquentielles, l’exécution de formules, etc.

![](assets/en/Admin/server-admin-monitor-page.png)
> Cette page est disponible dans la fenêtre d’administration du poste serveur et également depuis un poste 4D distant. Dans le cas d’un poste distant, la page affiche les données des opérations effectuées sur le poste serveur.

Chaque opération longue sur les données entraîne l’ajout d’une ligne. La ligne disparaît automatiquement lorsque l’opération est terminée (l'option **Afficher opérations au moins 5 secondes** permet de conserver à l'écran les opérations exécutées rapidement, cf. ci-dessous).

Les informations suivantes sont fournies pour chaque ligne :

- **Heure début** : heure de démarrage de l’opération au format "jj/mm/aaaa - hh:mm:ss"
- **Durée** (ms) : durée en cours de l’opération en millisecondes
- **Informations** : libellé de l’opération.
- **Détails** : cette zone affiche un ensemble d'informations détaillées dont le contenu varie en fonction du type d'opération sélectionné. En particulier :
    + **Créée sur** : indique si l'opération résulte d'une action d'un client (Créée sur client) ou si elle a été démarrée explicitement sur le serveur via une procédure stockée ou l'option "Exécuter sur serveur" (Créée sur serveur).
    + **Détails de l'opération** : décrit le type d'opération ainsi que (pour les opérations de recherche) le plan de recherche.
    + **Sous-opérations** (le cas échéant) : affiche les opérations dépendantes de l'opération sélectionnée (par exemple, suppression des enregistrements liés avant suppression de l'enregistrement parent).
    + **Détails du process** : fournit des informations supplémentaires concernant la table, le champ, le process ou le client, en fonction du type d'opération

> La page d’observation en temps réel utilise en interne la commande [`LIRE APERCU ACTIVITE`](https://doc.4d.com/4dv19/help/command/en/page1277.html). Pour plus d'informations, veuillez vous reporter à la description de cette commande. More information can be found in this command description.

La page est active et mise à jour en permanence dès qu’elle est affichée. Il est à noter que son fonctionnement peut ralentir sensiblement l’exécution de l’application. Il est possible de suspendre la mise à jour de la page d’une des manières suivantes :

- en cliquant sur le bouton **Pause**,
- en cliquant dans la liste,
- en appuyant sur la barre d’espace.

Lorsque la page est en pause, le message "SUSPENDU" est affiché et le libellé du bouton devient **Reprendre**. Il est possible de reprendre l’observation des opérations en effectuant la même action que pour la mise en pause.

#### Mode avancé

La page MTR peut afficher des informations supplémentaires, si nécessaire, pour chaque opération listée.

Pour accéder au mode avancé pour une opération, appuyez sur la touche **Maj** et sélectionnez l'opération. Toutes les informations disponibles sont alors affichées dans la zone "Détails du process" sans aucun filtre (à l'instar de ce qui est retourné par la commande `LIRE APERCU ACTIVITE`). Les informations disponibles dépendent de l'opération sélectionnée.

Voici un exemple d'information affichée en mode standard :

![](assets/en/Admin/server-admin-monitor-adv1.png)


En mode avancé (**Maj+Clic** sur la ligne de l'opération), des informations supplémentaires sont affichées :

![](assets/en/Admin/server-admin-monitor-adv2.png)

#### Bouton Instantané

Le bouton **Instantané** vous permet de copier dans le presse-papiers toutes les opérations affichées dans le panneau du MTR, ainsi que les détails associés (informations sur les process et les sous-opérations) :

![](assets/en/Admin/server-admin-monitor-snapshot.png)


#### Afficher opérations au moins 5 secondes

Si vous cochez l'option **Afficher opérations au moins 5 secondes**, toutes les opérations listées seront affichées dans la page pendant au moins cinq secondes, même après que l'exécution de l'opération soit terminée. Les opérations terminées restant affichées sont grisées dans la liste. Cette fonction est utile lorsque vous voulez observer des opérations dont l'exécution est très rapide.
