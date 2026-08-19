---
id: menus
title: Menus
---

L'interface de l'application 4D Server se compose des menus **Fichier**, **Édition**, **Fenêtre**, **Aide**. Sous macOS, certaines commandes se trouvent dans le menu **4D Server** (menu application).

## File

### Nouveau

Cette commande hiérarchique comporte des sous-menus permettant de [créer un projet](../GettingStarted/creating.md#creating-a-project) ou un nouveau fichier de données sur le serveur.

### Ouvrir.../Ouvrir récent

Ces commandes permettent d'[ouvrir un projet avec 4D Server](../Desktop/clientServer.md#opening-a-remote-project). La commande **Ouvrir récent>** affiche un sous-menu répertoriant les projets récemment ouverts par 4D Server. Pour réinitialiser ce menu, sélectionnez la commande **Effacer le menu**.

### Fermer le projet...

Cette commande referme le projet courant sans quitter l'application 4D Server. Lorsque vous sélectionnez cette commande, la boîte de dialogue d'arrêt du serveur s'affiche afin que vous puissiez [définir le mode de déconnexion](../server/exit.md) pour tous les clients éventuellement connectés.

### Fermer la fenêtre

Cette commande ferme la fenêtre au premier plan de l'application 4D Server.

### Fermer les fenêtres

Cette commande provoque la fermeture de toutes les fenêtres de l'application 4D Server. Notez que, dans ce cas, seul le fait que la commande **Fermer le projet...** soit active dans le menu **Fichier** permettra de savoir si le projet est toujours publié.

### Enregistrer l'application comme un service / Désenregistrer la base courante / Désenregistrer tous les services serveur

(Commandes disponibles sous Windows) Ces commandes permettent de gérer l'[enregistrement de l'application en tant que service](./service.md).

### Ecrire cache données

Cette commande permet de "forcer" l'enregistrement sur le disque des données placées dans le cache. Par défaut, 4D Server écrit automatiquement le cache sur le disque après un [délai défini dans les paramètres](../settings/database.md#database-cache-settings).

### Sauvegarde

Cette commande vous permet de démarrer une sauvegarde du projet à tout moment. Lorsque vous sélectionnez cette commande, la boîte de dialogue suivante s'affiche :

![](../assets/en/server/backup.png)

- Le bouton **Sauvegarde** lance immédiatement une sauvegarde qui tient compte des [paramètres définis dans les Paramètres](../settings/backup.md) de l'application (fichiers à sauvegarder, emplacement des archives, nombre de jeux conservés, etc.).
- Le bouton **Propriétés de la base** ouvre la [section "Sauvegarde" des Propriétés](../settings/backup.md), qui vous permet de consulter et, si nécessaire, de modifier les paramètres de sauvegarde courants.
- Le bouton **Annuler** interrompt le processus de sauvegarde.

### Restituer...

Cette commande affiche une boîte de dialogue d'ouverture vous permettant de sélectionner une archive à restituer.

### Quitter

Cette commande vous permet de [fermer l'application 4D Server](./exit.md).

:::note

Sous macOS, la commande **Quitter** se trouve dans le menu **4D Server** (menu application).

:::

## Edition

Le menu **Édition** de 4D Server comprend les commandes classiques de copier/coller, la commande **Afficher le presse-papiers**, etc.

Ce menu comprend également les commandes **Préférences...** (sous Windows) et **Propriétés**, qui ouvrent les boîtes de dialogue correspondantes de l'application. Ces boîtes de dialogue permettent de définir les [préférences](../Preferences/overview.md) du développeur ainsi que divers [paramètres](../settings/overview.md) du projet.

:::note

Sous macOS, la commande **Préférences...** se trouve dans le menu **4D Server** (menu application).

:::

Le menu **Édition** comprend également les commandes **Détacher le débogueur** et **Attacher le débogueur au lancement**, qui vous permettent de contrôler le débogage du code :

### Détacher le débogueur

Si vous sélectionnez cette option, le débogueur peut être attaché à un 4D distant. La commande du menu devient **Attacher le débogueur**, afin que vous puissiez rattacher le débogueur au serveur (s'il n'est pas encore attaché à un 4D distant).

### Attacher le débogueur au lancement

(sélectionnée par défaut) Cette option attache automatiquement le débogueur au serveur à chaque lancement du projet. Désélectionnez cette option si vous souhaitez associer de manière permanente le débogueur à un 4D distant.

*Attention* : Si cette option est sélectionnée pour un serveur qui est ensuite lancé en mode *headless*, il ne sera pas possible d'utiliser le débogueur sur ce serveur.

Pour plus d'informations, veuillez consulter la section [Débogage depuis des machines distantes](../Debugging/debugging-remote.md).

## Fenêtre

Le menu **Fenêtre** comporte en premier lieu des commandes standard permettant d'organiser les fenêtres de l'espace de travail (ces commandes varient selon la plate-forme).

Il contient également les commandes d'affichage des fenêtres spécifiques de 4D Server :

### Administration

Cette commande affiche la [fenêtre d'administration de 4D Server](../ServerWindow/overview.md) si celle-ci a été fermée ou réduite.

### Dépendences du projet

Affiche le [Gestionnaire de dépendances](../Project/components.md).

### Explorateur d'exécution

Cette commande affiche la fenêtre de l'Explorateur d'exécution de 4D Server.

![](../assets/en/server/runtime-explorer.png)

L'Explorateur d'exécution permet de visualiser le comportement des différents éléments structurels de la base et de vérifier que les ressources disponibles sont correctement exploitées. L’Explorateur d’exécution est particulièrement utile en phase de développement et d’analyse d’une base de données.

La fenêtre comporte quatre onglets accessibles en cliquant sur les boutons correspondants : **Evaluation**, **Process**, **Point d’arrêt** et **Arrêt sur commande**. Le fonctionnement de l'Explorateur d'exécution sur 4D Server est identique à celui de 4D.

### Explorateur de données dans le navigateur

Affiche l'[Explorateur de données](../Admin/dataExplorer.md) dans votre navigateur par défaut.

### Qodly Studio

Affiche l'[interface de Qodly Studio](https://developer.4d.com/qodly/4DQodlyPro/qodlyStudioInterface) dans votre navigateur par défaut sur le serveur.

### Aperçu de l'application Qodly

Affiche la page d'accueil de votre application Qodly dans votre navigateur par défaut sur le serveur. Pour plus d'informations, consultez [cette section](https://developer.4d.com/qodly/4DQodlyPro/gettingStarted#preview-qodly-application).

## Aide

### Centre de sécurité et de maintenance

Cette commande affiche le [Centre de maintenance et de sécurité](../MSC/overview.md) (CSM), qui regroupe tous les outils nécessaires à la vérification, l'analyse, la maintenance, la sauvegarde, la compression et l'encryptage des fichiers de données et de structure.
Cette commande est disponible même lorsqu'aucun projet n'est ouvert par 4D Server : dans ce cas, elle permet d'ouvrir un projet en "mode maintenance" (elle affiche la boîte de dialogue standard d'ouverture de fichier afin que vous puissiez sélectionner le projet à ouvrir). Le mode maintenance est notamment utilisé pour des opérations telles que le compactage ou la restauration de projets endommagés.

### Documentation en ligne

Ouvre la page d'accueil de la documentation 4D.

### Gestionnaire de licences...

Cette commande affiche le Gestionnaire de licences, qui permet de consulter, de gérer et d'activer les [licences](../Admin/licenses.md) dans votre environnement 4D.

### About 4D Server...

Affiche la fenêtre **À propos de...** de 4D Server.
