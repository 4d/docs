---
id: webServer
slug: overview
title: Serveur Web
---

4D en mode local et 4D Server incluent un moteur de serveur web (aussi appelé serveur HTTP) qui vous permet de concevoir et de publier de puissantes applications web qui peuvent tirer le meilleur parti de vos bases de données 4D.

:::warning Fonctionnalité obsolète

L'utilisation du serveur web sur un 4D distant est **dépréciée** à partir de 4D 21. Il n'est plus recommandé d'utiliser cette fonctionnalité.

:::

## Administration simplifiée

Vous pouvez démarrer ou arrêter la publication de l'application web à tout moment. Pour ce faire, il suffit de sélectionner une commande dans un menu ou d'exécuter une ligne de code.

Le contrôle du serveur web 4D est facile et peut être effectué à l'aide de la [fenêtre d'administration du serveur 4D](../ServerWindow/http-server.md) ou par le biais d'[URL spéciales](webServerAdmin.md#administration-urls).

## Prêt à l'emploi

Le serveur web 4D crée automatiquement un dossier racine et une page d'accueil par défaut, disponibles immédiatement.

## Sécurité

La sécurité des données est présente à tous les stades d'implémentation du serveur web 4D. Les niveaux de sécurité sont évolutifs, et les options les plus sécurisées sont généralement sélectionées par défaut. La sécurité du serveur web 4D est basée sur les éléments suivants :

- Extension du support du [**Protocole TLS (HTTPS)**](../Admin/tls.md),

- **Authentification** : [ Fonctionnalités d'authentification ](authentication.md) flexibles et personnalisables basées sur les paramètres intégrés ainsi que sur les méthodes de base de données de secours ([`On Web Authentication`](authentication.md#on-web-authentication) pour le serveur web et `On REST Authentication` pour le serveur REST),

- **Contrôle du contenu exposé** : Seul le contenu que vous exposez explicitement est disponible via des requêtes web directes ou des requêtes REST. Vous devez déclarer :
  - [Les méthodes projet](templates.md#accessing-4d-methods-via-the-web) exposées via des requêtes HTTP
  - Les [fonctions ORDA](../ORDA/ordaClasses.md#fonctions-exposées-vs-non-exposées) exposées via des requêtes REST
  - [Les tables et champs](REST/configuration.md#exposing-tables-and-fields) que vous ne voulez pas rendre disponibles via des requêtes REST.

- **Sandboxing** via la définition d'un [dossier HTML racine](webServerConfig.md#root-folder) par défaut

- **Contrôle de l'utilisation des ressources du serveur** (par exemple, option [nombre maximal de process web simultanés](webServerConfig.md#maximum-concurrent-web-processes)).

> Consultez le document [4D Security guide](https://blog.4d.com/4d-security-guide/) pour une vue d'ensemble des fonctions de sécurité de 4D.

## Sessions Utilisateur

Le serveur Web 4D inclut des fonctionnalités automatiques complètes pour une gestion facilitée des [sessions web](sessions.md) (sessions utilisateur) basée sur les cookies.

## Point d'accès pour requêtes REST

Le serveur web 4D permet d'accéder aux données stockées dans vos applications 4D via des requêtes REST. Les requêtes REST fournissent un accès direct à toute opération [ORDA](../ORDA/overview.md) telle que l'ajout, la lecture, l'édition, la commande ou la recherche de données.

Les requêtes REST sont détaillées dans la section [serveur REST](../REST/gettingStarted.md).

## Extension des paramètres

La configuration du serveur web 4D est définie par un ensemble complet de paramètres au niveau application qui peuvent également être personnalisés pour la session en utilisant les propriétés de l'objet `webServer` ou la commande [`WEB SET OPTION`](../commands-legacy/web-set-option.md).

## Templates et URLs

Le serveur web 4D offre un accès aux données stockées dans vos applications 4D à travers des pages de template et des URLs spécifiques.

- **Authentification** : [fonctionnalités d'authentification](authentication.md) flexibles et personnalisables, basées sur des paramètres intégrés, ainsi que des Méthodes base de secours ([](authentication.md#on-web-authentication) pour le serveur web et []

- [Les URLs spécifiques](httpRequests.md) permettent à 4D d'être appelé pour exécuter tout type d'action. Ces URLs peuvent également être utilisées comme des actions de formulaire pour déclencher des traitements de données quand l'utilisateur poste des form

## Méthodes base dédiées

Le serveur web 4D offre un accès aux données stockées dans vos applications 4D à travers des pages de template et des URLs spécifiques.
