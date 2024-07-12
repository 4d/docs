---
id: overview
title: Sauvegarde et restitution
---

4D inclut un module complet de sauvegarde et de récupération de l'application en cas d’incident.

Ce module permet de sauvegarder une application en cours d’exploitation, sans qu’il soit nécessaire de quitter l’application. Chaque sauvegarde peut inclure le dossier du projet, le fichier de données et tout fichier ou dossier supplémentaire. Ces paramètres sont définis au préalable dans les Propriétés.

Les sauvegardes peuvent être déclenchées manuellement ou automatiquement, à intervalles réguliers et sans intervention de l’utilisateur. Des commandes de langage ainsi que des méthodes base spécifiques permettent d’intégrer les fonctions de sauvegarde à une interface personnalisée.

La restitution d’une application après incident peut s’effectuer automatiquement lors de l’ouverture d’une application endommagée.

En outre, le module de sauvegarde intégré tire parti du fichier .journal ([ d’historique](log.md)). Ce fichier conserve une trace de chaque opération effectuée sur les données et assure ainsi une sécurité totale entre deux sauvegardes. Vous pouvez visualiser à tout moment le contenu du fichier d’historique. Vous pouvez visualiser à tout moment le contenu du fichier d’historique.

> Vous pouvez également mettre en place des solutions alternatives de réplication et de synchronisation des données permettant de maintenir des versions identiques des applications à des fins de sauvegarde. Ces solutions peuvent être basées sur les mécanismes et les technologies suivants :
>
> - Mise en place d'un miroir logique avec 4D Server (en utilisant les mécanismes du module de sauvegarde intégré)
> - Synchronisation en utilisant SQL
> - Synchronisation en utilisant HTTP (/rest/url)

> Consultez le document [4D Security guide](https://blog.4d.com/4d-security-guide/) pour une vue d'ensemble des fonctions de sécurité de 4D.
