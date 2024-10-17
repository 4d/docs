---
id: allowProject
title: Méthodes projet
---

Les balises 4D telles que `4DEVAL`, `4DTEXT`, `4DHTML`... ainsi que l'URL [`/4DACTION`](httpRequests.md#/4daction) vous permettent de déclencher l'exécution de toute méthode projet d'un projet 4D publié sur le Web. Par exemple, la requête _http://www.server.com/4DACTION/login_ entraîne l'exécution de la méthode projet _**login**_, si elle existe.

Ce mécanisme présente donc un risque de sécurité pour l'application, notamment si un internaute déclenche intentionnellement (ou non) une méthode non destinée à être exécutée via le web. Vous pouvez éviter ce risque comme suit :

- Filtrez les méthodes appelées via les URL à l'aide de la méthode base [`On Web Authentication`](authentication.md#on-web-authentication). Inconvénients : si le projet comprend un grand nombre de méthodes, ce système peut être difficile à gérer.

- Utilisez l'option **Disponible via Balises HTML et URLs 4D (4DACTION...)** située dans la boîte de dialogue des Propriétés de la méthode :

![](../assets/en/WebServer/methodProperties.png)

Cette option est utilisée pour désigner individuellement chaque méthode projet qui peut être appelée en utilisant l'URL spéciale `4DACTION`, ou les balises `4DTEXT`, `4DHTML`, `4DEVAL`, `4DSCRIPT`, `4DIF`, `4DELSEIF` ou `4DLOOP`. Lorsqu'elle n'est pas cochée, la méthode projet concernée ne peut pas être directement exécutée via une requête HTTP. Cependant, elle peut toujours être exécutée en utilisant d'autres types d'appels (formules, autres méthodes, etc.).

Cette option n'est pas cochée par défaut. Les méthodes qui peuvent être exécutées via `4DACTION` ou des balises spécifiques doivent être spécifiquement indiquées.

Dans l'Explorateur, les méthodes projet avec cette propriété bénéficient d'une icône spécifique :

![](../assets/en/WebServer/methodIcon.png)
