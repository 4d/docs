---
id: overview
title: Aperçu
---

4D includes a full application backup and restore module.

This module allows backing up an application currently in use without having to exit it. Chaque sauvegarde peut inclure le dossier du projet, le fichier de données et tout fichier ou dossier supplémentaire. These parameters are first set in the Settings.

Les sauvegardes peuvent être déclenchées manuellement ou automatiquement, à intervalles réguliers et sans intervention de l’utilisateur. Des commandes de langage ainsi que des méthodes base spécifiques permettent d’intégrer les fonctions de sauvegarde à une interface personnalisée.

Applications can be restored automatically when a damaged application is opened.

En outre, le module de sauvegarde intégré tire parti du fichier .journal ([ d’historique](log.md)). Ce fichier conserve une trace de chaque opération effectuée sur les données et assure ainsi une sécurité totale entre deux sauvegardes. In case of problems with an application in use, any operations missing in the data file are automatically reintegrated the next time the application is opened. Vous pouvez visualiser à tout moment le contenu du fichier d’historique.

> You can also implement alternative solutions for replicating and synchronizing data in order to maintain identical versions of applications for backup purposes. Ces solutions peuvent être basées sur les technologies et mécanismes suivants :  
> - Mise en place d'un miroir logique avec 4D Server (utilise les mécanismes du module de sauvegarde intégré)  
> - Synchronisation via le SQL - Synchronisation via le HTTP (/rest/url)


> Consultez le document [4D Security guide](https://blog.4d.com/4d-security-guide/) pour une vue d'ensemble des fonctions de sécurité de 4D.
