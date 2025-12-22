---
id: preemptiveWeb
title: Utiliser des process web préemptifs
---

Le Web Server de 4D vous permet de tirer pleinement parti des ordinateurs multi-coeurs en utilisant des process Web préemptifs dans vos applications compilées. Vous pouvez configurer votre code lié au Web, y compris les balises 4D, les méthodes base Web ou les fonctions de classe REST de ORDA, afin qu'il s'exécute simultanément sur le plus grand nombre de coeurs possibles.

Pour plus d'informations sur les process préemptifs dans 4D, veuillez consulter la section [Process préemptifs](../Develop/preemptive.md).

## Disponibilité du mode préemptif pour les process Web

Le tableau suivant indique si l'utilisation du mode préemptif pour les process Web est disponible selon le contexte d'exécution :

| 4D Server           | Interprété ([associé au débogueur](../Debugging/debugging-remote.md)) | Interprété (non associé au débogueur) | Compilé          |
| ------------------- | ---------------------------------------------------------------------------------------- | -------------------------------------------------------- | ---------------- |
| Serveur REST        | coopératif                                                                               | préemptif                                                | préemptif        |
| Serveur Web         | coopératif                                                                               | coopératif                                               | *paramètres web* |
| Server Web Services | coopératif                                                                               | coopératif                                               | *paramètres web* |

| 4D distant/monoposte | Interprété | Compilé          |
| -------------------- | ---------- | ---------------- |
| Serveur REST         | coopératif | préemptif        |
| Serveur Web          | coopératif | *paramètres web* |
| Server Web Services  | coopératif | *paramètres web* |

- Serveur REST : gère les [fonctions de classe du modèle de données ORDA](../REST/ClassFunctions.md)
- Serveur Web : gère les [modèles Web](templates.md), [4DACTION et les méthodes base](httpRequests.md)
- Serveur de services Web : gère les requêtes SOAP
- ***paramètres web*** signifie que le mode préemptif dépend du statut [**sessions évolutives**](sessions.md#enabling-web-sessions) :
  - si les sessions évolutives sont activées, le mode préemptif est automatiquement utilisé pour les process web et web service.
  - si les sessions évolutives ne sont pas activées :
    - pour les process web, l'option [**Utiliser des process préemptifs**](webServerConfig.md#use-preemptive-processes) est prise en compte.
    - pour les process de web services (serveur ou client), le mode préemptif est pris en charge au niveau de la méthode.

## Ecrire du code serveur Web thread-safe

Tout le code 4D exécuté par le serveur Web doit être thread-safe si vous souhaitez que les process Web soient lancés en mode préemptif. Lorsque l'option [Utiliser des process préemptifs](#availability-of-preemptive-mode-for-web-processes) est cochée dans le dialogue des Propriétés, les parties de l'application listées ci-dessous sont automatiquement évaluées par 4D Compiler :

- Toutes les méthodes base liées au web :
  - [`On Web Authentication`](authentication.md#on-web-authentication)
  - [`On Web Connection`](httpRequests.md#on-web-connection)
  - `On REST Authentication`
  - [`On Mobile App Authentication`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication) et [`On Mobile App Action`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-action)

- La méthode projet `compiler_web` (indépendamment de sa propriété "Mode d'exécution") ;

- En principe, tout code traité par la commande [`PROCESS 4D TAGS`](../commands-legacy/process-4d-tags.md) dans le contexte du web, par exemple par le biais de pages .shtml

- Toute méthode projet comportant l'attribut "Available through 4D tags and URLS (`4DACTION`, etc.)"

- Triggers pour les tables comportant l'attribut "Expose as REST resource"

- [Fonctions de classe du modèle de données ORDA](../REST/ClassFunctions.md) appelées via REST

Pour chacune de ces parties de méthodes et de code, le compilateur vérifiera si les [règles du thread-safe sont respectées](../Develop/preemptive.md#writing-a-thread-safe-method), et renverra des erreurs en cas de problème.

## Code web 4D thread-safe

La plupart des commandes, fonctions, méthodes base et URLs 4D sont thread-safe et peuvent être utilisées en mode préemptif.

### Commandes 4D et méthodes base

Toutes les commandes 4D relatives au Web sont thread-safe, à savoir :

- toutes les commandes du thème *Web Server*
- toutes les commandes du thème *Client HTTP*.

Les méthodes base ci-dessous sont thread-safe et peuvent être utilisées en mode préemptif (voir ci-dessus) : `On Web Authentication`, `On Web Connection`, `On REST Authentication`...).

Bien sûr, le code exécuté par ces méthodes doit aussi être thread-safe.

### URL Web Server

Les URLs Web Server ci-dessous sont thread-safe et peuvent être utilisées en mode préemptif :

- *4daction/* (la méthode projet appelée doit également être à thread-safe)
- *4dwebtest/*
- *4dblank/*
- *4dstats/*
- *4dhtmlstats/*
- *4dcacheclear/*
- *rest/*
- *4dimgfield/* (généré par `PROCESS 4D TAGS` pour les requêtes web relatives aux champs images)
- *4dimg/* (généré par `PROCESS 4D TAGS` pour les requêtes web sur les variables image)

### Icône de process web préemptif

Dans l'Explorateur d'exécution et dans la fenêtre d'administration de 4D Server, une icone spécifique s'affiche pour les process Web préemptifs :

| Type de process                                    | Icône                                       |
| -------------------------------------------------- | ------------------------------------------- |
| Méthode Web (process préemptif) | ![](../assets/en/WebServer/processIcon.png) |
