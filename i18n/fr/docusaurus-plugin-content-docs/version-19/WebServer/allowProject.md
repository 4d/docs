---
id: allowProject
title: Méthodes projet
---

  
Les balises 4D telles que `4DEVAL`, `4DTEXT`, `4DHTML`, etc. ainsi que l'[`URL /4DACTION`](httpRequests.md#/4daction) vous permettent de déclencher l'exécution de toute méthode projet d'un projet 4D publié sur le Web. For example, the request *<http://www.server.com/4DACTION/login>* causes the execution of the ***login*** project method, if it exists.

Ce mécanisme présente donc un risque de sécurité pour l'application, notamment si un internaute déclenche intentionnellement (ou non) une méthode non destinée à être exécutée via le web. Vous pouvez éviter ce risque comme suit :

* Filtrez les méthodes appelées via les URL à l'aide de la méthode base [`On Web Authentication`](authentication.md#on-web-authentication). Inconvénients : si la base de données comprend un grand nombre de méthodes, ce système peut être difficile à gérer.

* Utilisez l'option **Available through 4D tags and URLs (4DACTION...)** de la boîte de dialogue Propriétés de la méthode :

![](../assets/en/WebServer/methodProperties.png)

This option is used to individually designate each project method that can be called using the `4DACTION` special URL, or the `4DTEXT`, `4DHTML`, `4DEVAL`, `4DSCRIPT`, `4DIF`, `4DELSEIF` or `4DLOOP` tags. When it is not checked, the project method concerned cannot be directly executed through an HTTP request. Conversely, it can be executed using other types of calls (formulas, other methods, etc.).

This option is unchecked by default. Methods that can be executed through `4DACTION` or specific tags must be specifically indicated.

In the Explorer, Project methods with this property are given a specific icon:

 ![](../assets/en/WebServer/methodIcon.png)
