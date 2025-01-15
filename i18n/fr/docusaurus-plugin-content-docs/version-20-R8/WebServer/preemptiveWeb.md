---
id: preemptiveWeb
title: Using preemptive web processes
---

Le Web Server de 4D vous permet de tirer pleinement parti des ordinateurs multi-coeurs en utilisant des process Web préemptifs dans vos applications compilées. Vous pouvez configurer votre code lié au Web, y compris les balises 4D, les méthodes base Web ou les fonctions de classe REST de ORDA, afin qu'il s'exécute simultanément sur le plus grand nombre de coeurs possibles.

For in-depth information on preemptive process in 4D, please refer to the [Preemptive Processes](../Develop/preemptive.md) section.

## Disponibilité du mode préemptif pour les pocess Web

Le tableau suivant permet d'indiquer si l'utilisation du mode préemptif pour les process Web est disponible dans le contexte d'exécution suivant :

| 4D Server           | Interprété ([associé au débogueur](../Debugging/debugging-remote.md)) | Interprété (non associé au débogueur) | Compilé          |
| ------------------- | ---------------------------------------------------------------------------------------- | -------------------------------------------------------- | ---------------- |
| Serveur REST        | coopératif                                                                               | preemptive                                               | preemptive       |
| Serveur Web         | coopératif                                                                               | coopératif                                               | _paramètres web_ |
| Server Web Services | coopératif                                                                               | coopératif                                               | _paramètres web_ |

| 4D distant/monoposte | Interprété | Compilé          |
| -------------------- | ---------- | ---------------- |
| Serveur REST         | coopératif | preemptive       |
| Serveur Web          | coopératif | _paramètres web_ |
| Server Web Services  | coopératif | _paramètres web_ |

- Serveur REST : gère les [fonctions de classe du modèle de données ORDA](../REST/ClassFunctions.md)
- Serveur Web : gère les [modèles Web](templates.md), [4DACTION et les méthodes base](httpRequests.md)
- Serveur de services Web : gère les requêtes SOAP
- _**web setting**_ signifie que le mode préemptif dépend d'une valeur de réglage :
  - lorsque l'option [**Scalable sessions**](sessions.md#enabling-sessions) est sélectionnée, le [mode préemptif est automatiquement utilisé](sessions.md#preemptive-mode) pour les process web.
  - sinon, l'option [**Utiliser des process préemptifs**](webServerConfig.md#use-preemptive-processes) est prise en compte.
  - regarding Web service processes (server or client), preemptive mode is supported at method level. You just have to select "Can be run in preemptive processes" property for published SOAP server methods (see [Publishing a Web Service with 4D](https://doc.4d.com/4Dv20/4D/20.2/Publishing-a-Web-Service-with-4D.300-6750334.en.html)) or proxy client methods (see [Subscribing to a Web Service in 4D](https://doc.4d.com/4Dv20/4D/20.2/Subscribing-to-a-Web-Service-in-4D.300-6750336.en.html)) and make sure they are confirmed thread-safe by the compiler.

## Ecrire du code serveur Web thread-safe

Tout le code 4D exécuté par le serveur Web doit être thread-safe si vous souhaitez que les process Web soient lancés en mode préemptif. Lorsque l'option [Utiliser des process préemptifs](#availability-of-preemptive-mode-for-web-processes) est cochée dans le dialogue des Propriétés, les parties de l'application listées ci-dessous sont automatiquement évaluées par 4D Compiler :

- Toutes les méthodes base liées au web :
  - [`On Web Authentication`](authentication.md#on-web-authentication)
  - [`On Web Connection`](httpRequests.md#on-web-connection)
  - [`On REST Authentication`](REST/configuration.md#using-the-on-rest-authentication-database-method)
  - [`On Mobile App Authentication`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication) et [`On Mobile App Action`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-action)

- La méthode projet `compiler_web` (indépendamment de sa propriété "Mode d'exécution") ;

- Essentiellement tout code traité par la commande [`PROCESS 4D TAGS`](https://doc.4d.com/4dv20/help/command/fr/page816.html) en contexte web, par exemple à travers les pages .shtml

- Toute méthode projet comportant l'attribut "Available through 4D tags and URLS (`4DACTION`, etc.)"

- Triggers pour les tables comportant l'attribut "Expose as REST resource"

- [Fonctions de classe du modèle de données ORDA](../REST/ClassFunctions.md) appelées via REST

Pour chacune de ces méthodes ou parties de code, le compilateur vérifiera si les règles thread-safe sont respectées, et retournera une erreur en cas de problème. Pour plus d'informations à propos des règles thread-safe, veuillez vous référer au paragraphe _Ecrire une méthode thread-safe_ dans le chapitre _Process_ du manuel de [Langage 4D](https://doc.4d.com).

## Code web 4D thread-safe

La plupart des commandes et fonctions 4D, des méthodes base et des URL 4D sont thread-safe et peuvent être utilisées en mode préemptif.

### 4D commands and database methods

Toutes les commandes 4D relatives au Web sont thread-safe, à savoir :

- toutes les commandes du thème _Web Server_
- toutes les commandes du thème _Client HTTP_.

Les méthodes base ci-dessous sont thread-safe et peuvent être utilisées en mode préemptif (voir ci-dessus) : `On Web Authentication`, `On Web Connection`, `On REST Authentication`...).

Bien sûr, le code exécuté par ces méthodes doit aussi être thread-safe.

### URL Web Server

Les URLs Web Server ci-dessous sont thread-safe et peuvent être utilisées en mode préemptif :

- _4daction/_ (la méthode projet appelée doit également être à thread-safe)
- _4dcgi/_ (les méthodes base appelées doivent également être thread-safe)
- _4dwebtest/_
- _4dblank/_
- _4dstats/_
- _4dhtmlstats/_
- _4dcacheclear/_
- _rest/_
- _4dimgfield/_ (généré par `PROCESS 4D TAGS` pour les requêtes web relatives aux champs images)
- _4dimg/_ (généré par `PROCESS 4D TAGS` pour les requêtes web sur les variables image)

### Preemptive web process icon

Dans l'Explorateur d'exécution et dans la fenêtre d'administration de 4D Server, une icone spécifique s'affiche pour les process Web préemptifs :

| Type de process                                    | Icône                                       |
| -------------------------------------------------- | ------------------------------------------- |
| Méthode Web (process préemptif) | ![](../assets/en/WebServer/processIcon.png) |
