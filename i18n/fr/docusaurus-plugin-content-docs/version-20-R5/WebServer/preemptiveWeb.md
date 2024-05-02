---
id: preemptiveWeb
title: Using preemptive web processes
---

Le Web Server de 4D vous permet de tirer pleinement parti des ordinateurs multi-coeurs en utilisant des process Web préemptifs dans vos applications compilées. Vous pouvez configurer votre code lié au Web, y compris les balises 4D, les méthodes base Web ou les fonctions de classe REST de ORDA, afin qu'il s'exécute simultanément sur le plus grand nombre de coeurs possibles.

For in-depth information on preemptive process in 4D, please refer to the _Preemptive 4D processes_ section in the [_4D Language Reference_](https://doc.4d.com).

## Disponibilité du mode préemptif pour les pocess Web

Le tableau suivant permet d'indiquer si l'utilisation du mode préemptif pour les process Web est disponible dans le contexte d'exécution suivant :

| 4D Server           | Interpreted ([debugger attached](../Debugging/debugging-remote.md)) | Interprété (non associé au débogueur) | Compilé       |
| ------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------- | ------------- |
| Serveur REST        | coopératif                                                                             | preemptive                                               | preemptive    |
| Serveur Web         | coopératif                                                                             | coopératif                                               | _web setting_ |
| Server Web Services | coopératif                                                                             | coopératif                                               | _web setting_ |

| 4D distant/monoposte | Interprété | Compilé       |
| -------------------- | ---------- | ------------- |
| Serveur REST         | coopératif | preemptive    |
| Serveur Web          | coopératif | _web setting_ |
| Server Web Services  | coopératif | _web setting_ |

- REST Server: handles [ORDA data model class functions](../REST/ClassFunctions.md)
- Web Server: handles [web templates](templates.md), [4DACTION and database methods](httpRequests.md)
- Serveur de services Web : gère les requêtes SOAP
- _**web setting**_ means that the preemptive mode depends on a setting value:
  - when [**Scalable sessions**](sessions.md#enabling-sessions) option is selected, the [preemptive mode is automatically used](sessions.md#preemptive-mode) for web processes.
  - otherwise, the [**Use preemptive processes**](webServerConfig.md#use-preemptive-processes) option is taken into account.
  - regarding Web service processes (server or client), preemptive mode is supported at method level. You just have to select "Can be run in preemptive processes" property for published SOAP server methods (see [Publishing a Web Service with 4D](https://doc.4d.com/4Dv19/4D/19/Publishing-a-Web-Service-with-4D.300-5416868.en.html)) or proxy client methods (see [Subscribing to a Web Service in 4D](https://doc.4d.com/4Dv19/4D/19/Subscribing-to-a-Web-Service-in-4D.300-5416870.en.html)) and make sure they are confirmed thread-safe by the compiler.

## Ecrire du code serveur Web thread-safe

Tout le code 4D exécuté par le serveur Web doit être thread-safe si vous souhaitez que les process Web soient lancés en mode préemptif. When the [preemptive mode is enabled](#availability-of-preemptive-mode-for-web-processes), the following parts of the application will be automatically evaluated by the 4D compiler:

- Toutes les méthodes base liées au web :
  - [`On Web Authentication`](authentication.md#on-web-authentication)
  - [`On Web Connection`](httpRequests.md#on-web-connection)
  - [`On REST Authentication`](REST/configuration.md#using-the-on-rest-authentication-database-method)
  - [`On Mobile App Authentication`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication) and [`On Mobile App Action`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-action)

- The `compiler_web` project method (regardless of its actual "Execution mode" property);

- Basically any code processed by the [`PROCESS 4D TAGS`](https://doc.4d.com/4dv19R/help/command/en/page816.html) command in the web context, for example through .shtml pages

- Any project method with the "Available through 4D tags and URLS (`4DACTION`, etc.)" attribute

- Triggers pour les tables comportant l'attribut "Expose as REST resource"

- [ORDA data model class functions](../REST/ClassFunctions.md) called via REST

Pour chacune de ces méthodes ou parties de code, le compilateur vérifiera si les règles thread-safe sont respectées, et retournera une erreur en cas de problème. For more information about thread-safety rules, please refer to the _Writing a thread-safe method_ paragraph in the _Processes_ chapter of the [4D Language Reference](https://doc.4d.com) manual.

## Code web 4D thread-safe

La plupart des commandes et fonctions 4D, des méthodes base et des URL 4D sont thread-safe et peuvent être utilisées en mode préemptif.

### 4D commands and database methods

All 4D web-related commands are thread-safe, _i.e._:

- all commands from the _Web Server_ theme,
- all commands from the _HTTP Client_ theme.

The web-related database methods are thread-safe and can be used in preemptive mode (see above): `On Web Authentication`, `On Web Connection`, `On REST Authentication`...).

Bien sûr, le code exécuté par ces méthodes doit aussi être thread-safe.

### URL Web Server

Les URLs Web Server ci-dessous sont thread-safe et peuvent être utilisées en mode préemptif :

- _4daction/_ (the called project method must also be thread-safe)
- _4dcgi/_ (the called database methods must also be thread-safe)
- _4dwebtest/_
- _4dblank/_
- _4dstats/_
- _4dhtmlstats/_
- _4dcacheclear/_
- _rest/_
- _4dimgfield/_ (generated by `PROCESS 4D TAGS` for web request on picture fields)
- _4dimg/_ (generated by `PROCESS 4D TAGS` for web request on picture variables)

### Preemptive web process icon

Dans l'Explorateur d'exécution et dans la fenêtre d'administration de 4D Server, une icone spécifique s'affiche pour les process Web préemptifs :

| Type de process                                    | Icône                                       |
| -------------------------------------------------- | ------------------------------------------- |
| Méthode Web (process préemptif) | ![](../assets/en/WebServer/processIcon.png) |
