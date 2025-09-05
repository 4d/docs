---
id: webServer
slug: overview
title: Serveur Web
---

4D in local mode and 4D Server include a web server engine (aka http server) that enables you to design and publish powerful web applications that can make the most of your 4D databases.

:::warning Deprecated feature

Using the web server on a remote 4D is **deprecated** as of 4D 21. It is no longer recommended to use this feature.

:::

## Administration simplifiée

Vous pouvez démarrer ou arrêter la publication de l'application web à tout moment. Pour ce faire, il suffit de sélectionner une commande dans un menu ou d'exécuter une ligne de code.

Monitoring the 4D web server is easy and can be done using the [4D Server administration window](../ServerWindow/http-server.md) or through [special URLs](webServerAdmin.md#administration-urls).

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

Le serveur web 4D permet d'accéder aux données stockées dans vos applications 4D via des requêtes REST. REST requests provide direct access to any [ORDA](../ORDA/overview.md) operation such as adding, reading, editing, ordering, or searching data.

Les requêtes REST sont détaillées dans la section [serveur REST](../REST/gettingStarted.md).

## Extension des paramètres

The 4D web server configuration is defined through a comprehensive set of application-level settings that can also be customized for the session using the `webServer` object properties or the [`WEB SET OPTION`](../commands-legacy/web-set-option.md) command.

## Templates et URLs

Le serveur web 4D offre un accès aux données stockées dans vos applications 4D à travers des pages de template et des URLs spécifiques.

- **Authentification** : [fonctionnalités d'authentification](authentication.md) flexibles et personnalisables, basées sur des paramètres intégrés, ainsi que des Méthodes base de secours ([](authentication.md#on-web-authentication) pour le serveur web et []

- [Les URLs spécifiques](httpRequests.md) permettent à 4D d'être appelé pour exécuter tout type d'action. Ces URLs peuvent également être utilisées comme des actions de formulaire pour déclencher des traitements de données quand l'utilisateur poste des form

## Méthodes base dédiées

Le serveur web 4D offre un accès aux données stockées dans vos applications 4D à travers des pages de template et des URLs spécifiques.
