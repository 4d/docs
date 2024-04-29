---
id: webServer
slug: overview
title: Serveur Web
---

4D en mode local et remote ainsi que 4D Server disposent d'un moteur de serveur web intégré (aussi appelé serveur HTTP) qui vous permet de créer et publier des applications web afin de tirer le maximum de vos bases de données 4D.

## Administration simplifiée

Vous pouvez démarrer ou arrêter la publication de l'application web à tout moment. Pour ce faire, il suffit de sélectionner une commande dans un menu ou d'exécuter une ligne de code.

Monitoring the 4D web server is easy and can be done using the 4D Server administration window or through [special URLs](webServerAdmin.md#administration-urls).

## Prêt à l'emploi

Le serveur web 4D crée automatiquement un dossier racine et une page d'accueil par défaut, disponibles immédiatement.

## Sécurité

La sécurité des données est présente à tous les stades d'implémentation du serveur web 4D. Les niveaux de sécurité sont évolutifs, et les options les plus sécurisées sont généralement sélectionées par défaut. La sécurité du serveur web 4D est basée sur les éléments suivants :

- Extended support of the [**TLS Protocol (HTTPS)**](../Admin/tls.md),

- **Authentication**: flexible and customizable [authentication features](authentication.md) based upon built-it settings as well as fallback database methods ([`On Web Authentication`](authentication.md#on-web-authentication) for the web server and [`On REST Authentication`](../REST/configuration.md#using-the-on-rest-authentication-database-method) for the REST server),

- **Control of exposed contents**: only elements that you expose explicitely can be available from direct web or REST requests. Vous devez déclarer :
  - [Project methods](templates.md#allowing-project-methods) exposed through HTTP requests
  - [ORDA functions](../ORDA/ordaClasses.md#exposed-vs-non-exposed-functions) exposed through REST requests
  - [Tables and fields](REST/configuration.md#exposing-tables-and-fields) that you don't want to be available to REST requests.

- **Sandboxing** through the definition of a [HTML Root](webServerConfig.md#root-folder) folder by default,

- **Control of server resource usage** (e.g. [maximum concurrent web processes](webServerConfig.md#maximum-concurrent-web-processes) option).

> For a general overview of 4D's security features, see the [4D Security guide](https://blog.4d.com/4d-security-guide/).

## Sessions Utilisateur

The 4D web server includes complete automatic features for easily managing [web sessions](sessions.md) (user sessions) based on cookies.

## Point d'accès pour requêtes REST

Le serveur web 4D permet d'accéder aux données stockées dans vos applications 4D via des requêtes REST. Les requêtes REST offrent un accès direct à toutes les opérations de bases de données telles que l'ajout, la lecture, la modification, l'organisation ou la recherche.

REST requests are detailed in the [REST server](REST/gettingStarted.md) section.

## Extension des paramètres

The 4D web server configuration is defined through a comprehensive set of application-level settings that can also be customized for the session using the `webServer` object properties or the `WEB SET OPTION` command.

## Templates et URLs

Le serveur web 4D offre un accès aux données stockées dans vos applications 4D à travers des pages de template et des URLs spécifiques.

- Template pages contain [special tags](templates.md) that initiate web server processing at the time when they are sent to browsers.

- [specific URLs](httpRequests.md) enable 4D to be called in order to execute any action; these URLs can also be used as form actions to trigger processing when the user posts HTML forms.

## Méthodes base dédiées

`On Web Authentication`, `On Web Connection`, as well as `On REST Authentication` database methods are the entry points of requests in the web server; they can be used to evaluate and route any type of request.
