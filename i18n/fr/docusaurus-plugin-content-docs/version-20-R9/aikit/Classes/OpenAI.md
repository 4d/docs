---
id: openai
title: OpenAI
---

# OpenAI

La classe OpenAI fournit un client permettant d'accéder à diverses ressources de l'API OpenAI. Il inclut des propriétés de gestion des configurations API et des méthodes pour effectuer des requêtes HTTP vers les points de terminaison OpenAI.

## Propriétés de configuration

| Nom de propriété | Type | Description                                                                    | Optionnel       |
| ---------------- | ---- | ------------------------------------------------------------------------------ | --------------- |
| `apiKey`         | Text | Votre [clé API OpenAI ](https://platform.openai.com/api-keys). | Non pour OpenAI |
| `baseURL`        | Text | URL de base pour les requêtes de l'API OpenAI.                 | Oui             |
| `organisation`   | Text | Votre identifiant d'organisation OpenAI.                       | Oui             |
| `project`        | Text | Votre identifiant de projet OpenAI.                            | Oui             |

### Propriétés HTTP supplémentaires

| Nom de propriété | Type                                                                             | Description                                                          |
| ---------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `timeout`        | Real                                                                             | Time in seconds before timeout occurs.               |
| `maxRetries`     | Real                                                                             | Maximum number of retry attempts in case of failure. |
| `httpAgent`      | [4D.HTTPAgent](https://developer.4d.com/docs/API/HTTPAgentClass) | HTTP agent used for making requests.                 |
| `customHeaders`  | Real                                                                             | Custom headers to be included in the HTTP requests.  |

### Class constructor

Créer une instance de la classe client OpenAI.

| Nom de l'argument | Type         | Description                                                                                     |
| ----------------- | ------------ | ----------------------------------------------------------------------------------------------- |
| *apiKey*          | Text, Object | apiKey if Text as first argument and the second can be an Object of parameters. |

#### Clé API

```4d
// en tant que texte
var $client:=cs.AIKit.OpenAI.new("your api key")
// en tant qu'objet
var $client:=cs.AIKit.OpenAI.new({apiKey: "your api key"})
```

#### URL du serveur

Pour une API [compatible provider](../compatible-openai.md), vous pouvez configurer l'URL du serveur.

```4d
var $client:=cs.AIKit.OpenAI.new({apiKey: "your api key"; baseURL: "https://server.ai"})
```

ou après avoir créé une instance

```4d
$client.baseURL:="https://server.ai"
```

## Ressources API

L'API donne accès à de multiples ressources qui permettent une interaction transparente avec les services de l'OpenAI. Each resource is encapsulated within a dedicated API class, offering a structured and intuitive way to interact with different functionalities.

| Nom de propriété | Type                                            | Description                                    |
| ---------------- | ----------------------------------------------- | ---------------------------------------------- |
| `models`         | [OpenAIModelsAPI](OpenAIModelsAPI.md)           | Accès à l'API des modèles.     |
| `chat`           | [OpenAIChatAPI](OpenAIChatAPI.md)               | Accès à l'API de Chat.         |
| `images`         | [OpenAIImagesAPI](OpenAIImagesAPI.md)           | Accès à l'API Images.          |
| `moderations`    | [OpenAIModerationsAPI](OpenAIModerationsAPI.md) | Accès à l'API des modérations. |

### Exemple d'utilisation

```4d
$client.chat.completions.create(...)
$client.images.generate(...)
$client.model.lists(...)
```
