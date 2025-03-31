---
id: webServer
slug: overview
title: Vue d’ensemble
---

4D en mode local et distant ainsi que 4D Server disposent d'un moteur de serveur web intégré (aussi appelé serveur Http) qui vous permet de créer et publier des applications web afin de tirer le maximum de vos bases de données 4D.

## Administration simplifiée

Vous pouvez démarrer ou arrêter la publication de l'application web à tout moment. Pour ce faire, il suffit de sélectionner une commande dans un menu ou d'exécuter une ligne de code.

Vous pouvez aisément suivre l'activité du serveur web 4D dans la fenêtre d'administration de 4D, ou via des [URLs spéciales](webServerAdmin.md#administration-urls).

## Prêt à l'emploi

Le serveur web 4D crée automatiquement un dossier racine et une page d'accueil par défaut, disponibles immédiatement.

## Sécurité

La sécurité des données est présente à tous les stades d'implémentation du serveur web 4D. Les niveaux de sécurité sont évolutifs, et les options les plus sécurisées sont généralement sélectionées par défaut. La sécurité du serveur web 4D est basée sur les éléments suivants :

* Prise en charge étendue du [**protocole TLS (HTTPS)**](../Admin/tls.md),

* **Authentification**: [fonctions d'authentification](authentication.md) souples et personnalisables basées sur des paramètres intégrés ainsi que sur des méthodes base "fallback" ([`On Web Authentication`](authentication.md#on-web-authentication) pour le serveur web et [`On REST Authentication`](../REST/configuration.md#using-the-on-rest-authentication-database-method) pour le serveur REST),

* **Contrôle du contenu exposé** : Seul le contenu que vous exposez explicitement est disponible via des requêtes web directes ou des requêtes REST. Vous devez déclarer :
  * [Project methods](templates.md#accessing-4d-methods-via-the-web) exposed through HTTP requests
  * [Fonctions ORDA](../ORDA/ordaClasses.md#exposed-vs-non-exposed-functions) exposées par le biais de requêtes REST
  * [Les tables et champs](REST/configuration.md#exposing-tables-and-fields) que vous ne voulez pas rendre disponibles via requêtes REST

* **Sandboxing** via la définition d'un [dossier HTML racine](webServerConfig.md#root-folder) par défaut

* **Contrôle de l'utilisation des ressources du serveur** (par exemple, option relative au [nombre maximal de process web simultanés](webServerConfig.md#maximum-concurrent-web-processes) ).
> Consultez le document [4D Security guide](https://blog.4d.com/4d-security-guide/) pour une vue d'ensemble des fonctions de sécurité de 4D.

## Sessions Utilisateur

Le serveur Web 4D inclut des fonctionnalités automatiques complètes pour une gestion facilitée des [sessions web](sessions.md) (sessions utilisateur) basée sur les cookies.

## Point d'accès pour requêtes REST

Le serveur web 4D permet d'accéder aux données stockées dans vos applications 4D via des requêtes REST. Les requêtes REST offrent un accès direct à toutes les opérations de bases de données telles que l'ajout, la lecture, la modification, l'organisation ou la recherche.

Les requêtes REST sont détaillées dans la section [serveur REST](REST/gettingStarted.md).

## Extension des paramètres

Les requêtes REST sont détaillées dans la section [serveur REST](REST/gettingStarted.md).

## Templates et URLs

Le serveur web 4D offre un accès aux données stockées dans vos applications 4D à travers des pages de template et des URLs spécifiques.

* **Authentification** : [fonctionnalités d'authentification](authentication.md) flexibles et personnalisables, basées sur des paramètres intégrés, ainsi que des Méthodes base de secours ([`Sur authentification Web`](authentication.md#on-web-authentication) pour le serveur web et [`Sur authentification REST`](REST/configuration.md#using-the-on-rest-authentication-database-method) pour le serveur REST),

* [Les URLs spécifiques](httpRequests.md) permettent à 4D d'être appelé pour exécuter tout type d'action. Ces URLs peuvent également être utilisées comme des actions de formulaire pour déclencher des traitements de données quand l'utilisateur poste des formulaires HTML.

## Méthodes base dédiées

Le serveur web 4D offre un accès aux données stockées dans vos applications 4D à travers des pages de template et des URLs spécifiques.
