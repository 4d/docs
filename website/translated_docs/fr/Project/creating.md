---
id: creating
title: Créer ou ouvrir un projet
---


## Créer un projet

De nouveaux projets d'application 4D peuvent être créés à partir de **4D** ou de **4D Server** (voir [Développer un projet](Project/developing.md)). Dans tous les cas, les fichiers de projet sont stockés sur la machine locale.

Pour créer un nouveau projet :

1. Lancez 4D ou 4D Server.
2. Sélectionnez **Nouveau> Projet...** depuis le menu **Fichier** : <p>![](assets/en/getStart/projectCreate1.png)<p>OU<p>(4D uniquement) Sélectionnez **Projet...** depuis le bouton de la barre d'outils **Nouveau** :<p>![](assets/en/getStart/projectCreate2.png)<p>Un dialogue standard **Sauvegarde** apparaît, de façon à ce que vous choisissiez le nom et l'emplacement du dossier principal du projet 4D.

3. Saisissez le nom du dossier de projet et cliquez sur **Sauvegarder**.<p> Ce nom sera utilisé :
    - comme le nom du dossier du projet,
    - comme nom du fichier .4DProject au premier niveau du dossier "Project".

    Vous pouvez choisir n'importe quel nom autorisé par votre système d'exploitation. Toutefois, si votre projet est destiné à fonctionner sur d'autres systèmes ou à être enregistré via un outil de gestion de version, vous devez tenir compte de leurs recommandations de dénomination spécifiques.

Lorsque vous validez la boîte de dialogue **Enregistrer**, 4D ferme le projet en cours (le cas échéant), crée un dossier de projet à l'emplacement indiqué et y place tous les fichiers nécessaires au projet. Pour plus d'informations, voir [Architecture d'un projet 4D](Project/architecture.md).

Vous pouvez alors commencer à développer votre projet.


## Ouvrir un projet local

Pour ouvrir un projet existant en local depuis 4D :

1. Sélectionnez **Ouvrir un projet d'application local** dans la boite de dialogue de l'Assistant de bienvenue <p>OU<p> Sélectionnez **Ouvrir > Projet local...** à partir du menu **Fichier** ou du bouton **Ouvrir** de la barre d'outils.<p> La boîte de dialogue standard d’ouverture de fichiers apparaît.

2. Sélectionnez le fichier `.4dproject` du projet et cliquez sur **Ouvrir**.<p> Par défaut, le projet est ouvert avec son fichier de données courant. D'autres types de fichiers sont suggérés :

    - *Fichiers de projet compressés* : extension `.4dz` - Projets de déploiement
    - *Fichiers de raccourcis* : extension `.4dlink` - stockent les paramètres supplémentaires nécessaires à l'ouverture de projets ou d'applications (adresses, identifiants, etc.)
    - *Fichiers binaires* : extension `.4db` ou `.4dc` - formats de base de données 4D hérités

### Options

En plus des options système standard, la boîte de dialogue *Ouvrir* de 4D propose deux menus avec des options spécifiques disponibles à l'aide du bouton **Ouvrir** et du menu **Fichier de données**.

- **Ouvrir** - mode d'ouverture du projet :
    - **Interprété** ou **compilé** : ces options sont disponibles lorsque le projet sélectionné contient à la fois du [code interprété et compilé](Concepts/interpreted.md).
    - **[Centre de Maintenance et de Sécurité](MSC/overview.md)** : Ouverture en mode sécurisé permettant d'accéder aux projets endommagés afin d'effectuer les réparations nécessaires.

- **Fichier de données** - spécifie le fichier de données à utiliser avec le projet. Par défaut, l'option **Fichier de données courant** est sélectionnée.


## Ouvrir un projet distant

La première fois que vous vous connectez à un projet 4D Server via un 4D distant, vous utiliserez généralement la boîte de dialogue de connexion standard. Par la suite, vous pourrez vous connecter directement en utilisant le menu **Ouvrir projets récents** ou un fichier de raccourci 4DLink ([voir ci-dessous](#project-opening-shortcuts)).

Pour vous connecter à distance à un projet 4D Server :

1. Sélectionnez **Se connecter à 4D Server** dans la boîte de dialogue de l'Assistant de bienvenue, <p>OU<p> Sélectionnez **Ouvrir > Projet distant...** à partir du menu **Fichier** ou du bouton **Ouvrir** de la barre d'outils.

La boîte de dialogue de connexion à 4D Server apparaît. Cette boîte de dialogue comporte trois onglets : **Récent**, **Disponible** et **Personnalisé**.

Si 4D Server est connecté au même réseau que le 4D distant, sélectionnez **Disponible**. 4D Server inclut un système de diffusion TCP/IP intégré qui, par défaut, publie le nom des projets 4D Server disponibles sur le réseau. La liste est triée par ordre d'apparition et est mise à jour dynamiquement.

![](assets/en/getStart/serverConnect.png)

Pour vous connecter à un serveur de la liste, double-cliquez sur son nom ou sélectionnez-le et cliquez sur le bouton **OK**.

> Un accent circonflexe (^) est placé avant le nom des projets publiés avec l'option de chiffrement activée.

Si le projet publié n'est pas affiché dans la liste **Disponible**, sélectionnez **Personnalisé**. La page Personnalisé vous permet de vous connecter à un serveur publié sur le réseau en utilisant son adresse réseau et en lui attribuant un nom personnalisé.

![](assets/en/getStart/serverConnect2.png)


- **Nom du projet** : définit le nom local du projet 4D Server. Ce nom sera utilisé dans la page **Récent** pour faire référence au projet.
- **Adresse réseau** : L'adresse IP de la machine sur laquelle le 4D Server a été lancé. <p>Si deux serveurs sont exécutés simultanément sur la même machine, l'adresse IP doit être suivie de deux points et d'un numéro de port, par exemple : `192.168.92.104:19814`. <p>Par défaut, le port de publication d'un 4D Server est 19813. Ce numéro peut être modifié dans les paramètres du projet.

Une fois que cette page attribue un serveur, cliquez sur le bouton **OK** pour vous connecter au serveur.

> Si le projet est publié avec l'option de chiffrement activée, vous devez ajouter un accent circonflexe (^) avant le nom, sinon la connexion sera refusée. Pour plus d'informations, reportez-vous à la section Chiffrement des connexions client/serveur.

Une fois la connexion au serveur établie, le projet distant sera répertorié dans l'onglet **Récent**.



## Raccourcis d’ouverture des projets

4D propose deux façons d’ouvrir directement des projets, sans passer par la boîte de dialogue d’ouverture :

- via les options du menu :
    -   *Barre de menu* - **Fichier** > **Ouvrir Projets récents / {project name}**
    -   *Barre d'outils 4D* -  Sélectionnez le projetà partir du menu associé au bouton **Ouvrir**

- via les préférences :
    -   Définissez la préférence générale **Au démarrage** sur **Ouvrir le dernier projet utilisé**. 