---
id: overview
title: Vue d’ensemble
---

4D inclut un module complet de sauvegarde des bases de données et de récupération en cas d’incident.

Ce module permet de sauvegarder une base de données en cours d’exploitation, sans qu’il soit nécessaire de quitter l’application. Chaque sauvegarde peut inclure le dossier du projet, le fichier de données et tout fichier ou dossier supplémentaire. Ces paramètres sont définis au préalable dans les Propriétés de la base.

Les sauvegardes peuvent être déclenchées manuellement ou automatiquement, à intervalles réguliers et sans intervention de l’utilisateur. Des commandes de langage ainsi que des méthodes base spécifiques permettent d’intégrer les fonctions de sauvegarde à une interface personnalisée.

La restitution d’une base de données après incident peut s’effectuer automatiquement lors de l’ouverture d’une base endommagée.

En outre, le module de sauvegarde intégré tire parti du fichier .journal ([ d’historique](log.md)). Ce fichier conserve une trace de chaque opération effectuée sur les données et assure ainsi une sécurité totale entre deux sauvegardes. En cas d’incident sur une base de données en cours d’exploitation, les opérations éventuellement manquantes dans le fichier de données sont automatiquement réintégrées lors de l’ouverture suivante de la base. Vous pouvez visualiser à tout moment le contenu du fichier d’historique.

> Vous pouvez également mettre en place des solutions alternatives de réplication et de synchronisation des données permettant de maintenir des versions identiques des bases à des fins de sauvegarde. These solutions can be based on the following mechanisms and technologies:  
> - Setting up a logical mirror with 4D Server (using the integrated backup module mechanisms)  
> - Synchronization using SQL - Synchronization using HTTP (/rest/url)


> Consultez le document [4D Security guide](https://blog.4d.com/4d-security-guide/) pour une vue d'ensemble des fonctions de sécurité de 4D.
