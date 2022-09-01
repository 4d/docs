---
id: preemptiveWeb
title: Using preemptive web processes
---


The 4D Web Server allows you to take full advantage of multi-core computers by using preemptive web processes in your compiled applications. You can configure your web-related code, including 4D tags and web database methods, to run simultaneously on as many cores as possible.

Pour plus d'informations sur la fonctionnalité des process préemptifs dans 4D, veuillez vous référer à la section *Process 4D préemptifs* du [*manuel de language 4D*](https://doc.4d.com).

## Disponibilité du mode préemptif pour les pocess Web

Le tableau suivant permet d'indiquer si l'utilisation du mode préemptif pour les process Web est disponible dans le contexte d'exécution suivant :

| 4D Server           | Interpreted, project ([client connected locally](../Desktop/clientServer.md#using-4d-and-4d-server-on-the-same-machine)) | Interpreted, project (no client connected locally) or binary | Compilé         |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ | --------------- |
| Serveur REST        | coopératif                                                                                                               | préemptif                                                    | préemptif       |
| Serveur Web         | coopératif                                                                                                               | *paramètre web*                                              | *paramètre web* |
| Server Web Services | coopératif                                                                                                               | *paramètre web*                                              | *paramètre web* |
| Legacy REST         | coopératif                                                                                                               | *paramètre web*                                              | *paramètre web* |

| 4D distant/monoposte | Interprété | Compilé         |
| -------------------- | ---------- | --------------- |
| Serveur REST         | coopératif | préemptif       |
| Serveur Web          | coopératif | *paramètre web* |
| Server Web Services  | coopératif | *paramètre web* |
| Legacy REST          | coopératif | *paramètre web* |

- Serveur REST : gère les [fonctions de classe du modèle de données ORDA](../REST/ClassFunctions.md)
- Serveur Web : gère les [modèles Web](templates.md), [4DACTION et les méthodes base](httpRequests.md)
- Serveur de services Web : gère les requêtes SOAP
- Legacy REST: direct requests to 4D methods (`/rest/{table}/{methodName}`)
- ***web setting*** signifie que le mode préemptif dépend d'une valeur de réglage :
  - lorsque l'option [**Scalable sessions est sélectionnée**](sessions.md#enabling-sessions), le [mode préemptif est automatiquement utilisé](sessions.md#preemptive-mode) pour les process web.
  - otherwise, the [**Use preemptive processes**](webServerConfig.md#use-preemptive-processes) option is taken into account.
  - regarding Web service processes (server or client), preemptive mode is supported at method level. You just have to select "Can be run in preemptive processes" property for published SOAP server methods (see [Publishing a Web Service with 4D](https://doc.4d.com/4Dv19/4D/19/Publishing-a-Web-Service-with-4D.300-5416868.en.html)) or proxy client methods (see [Subscribing to a Web Service in 4D](https://doc.4d.com/4Dv19/4D/19/Subscribing-to-a-Web-Service-in-4D.300-5416870.en.html)) and make sure they are confirmed thread-safe by the compiler.

## Ecrire du code serveur Web thread-safe

Tout le code 4D exécuté par le serveur Web doit être thread-safe si vous souhaitez que les process Web soient lancés en mode préemptif. When the **Use preemptive processes** option is checked in the Settings dialog box, the following parts of the application will be automatically evaluated by the 4D compiler:

- Toutes les méthodes base liées au web :
  - [`On Web Authentication`](authentication.md#on-web-authentication)
  - [`On Web Connection`](httpRequests.md#on-web-connection)
  - [`On REST Authentication`](REST/configuration.md#using-the-on-rest-authentication-database-method)
  - [`On Mobile App Authentication`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication)

- La méthode projet `compiler_web` (indépendamment de sa propriété "Mode d'exécution") ;

- Basically any code processed by the `PROCESS 4D TAGS` command in the web context, for example through .shtml pages.

- Toute méthode projet comportant l'attribut "Available through 4D tags and URLS (`4DACTION`, etc.)"

- Triggers pour les tables comportant l'attribut "Expose as REST resource"

- [Fonctions de classe du modèle de données ORDA](../REST/ClassFunctions.md) appelées via REST

- Project methods with "REST Server" property checked (legacy REST calls)

Pour chacune de ces méthodes ou parties de code, le compilateur vérifiera si les règles thread-safe sont respectées, et retournera une erreur en cas de problème. Pour plus d'informations à propos des règles thread-safe, veuillez vous référer au paragraphe *Ecrire une méthode thread-safe* dans le chapitre *Process* du manuel de [Langage 4D](https://doc.4d.com).

## Code web 4D thread-safe

La plupart des commandes et fonctions 4D, des méthodes base et des URL 4D sont thread-safe et peuvent être utilisées en mode préemptif.

### 4D commands and database methods

Toutes les commandes 4D relatives au Web sont thread-safe, à savoir :

- toutes les commandes du thème *Web Server*
- toutes les commandes du thème *Client HTTP*.

The web-related database methods are thread-safe and can be used in preemptive mode (see below): `On Web Authentication`, `On Web Connection`, `On REST Authentication`...).

Bien sûr, le code exécuté par ces méthodes doit aussi être thread-safe.

### URL Web Server

Les URLs Web Server ci-dessous sont thread-safe et peuvent être utilisées en mode préemptif :

- *4daction/* (la méthode projet appelée doit également être à thread-safe)
- *4dcgi/* (les méthodes base appelées doivent également être thread-safe)
- *4dwebtest/*
- *4dblank/*
- *4dstats/*
- *4dhtmlstats/*
- *4dcacheclear/*
- *rest/*
- *4dimgfield/* (généré par `PROCESS 4D TAGS` pour les requêtes web relatives aux champs images)
- *4dimg/* (généré par `PROCESS 4D TAGS` pour les requêtes web sur les variables image)

### Preemptive web process icon

Dans l'Explorateur d'exécution et dans la fenêtre d'administration de 4D Server, une icone spécifique s'affiche pour les process Web préemptifs :

| Type de process                 | Icône                                       |
| ------------------------------- | ------------------------------------------- |
| Méthode Web (process préemptif) | ![](../assets/en/WebServer/processIcon.png) |
