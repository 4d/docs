---
id: overview
title: 4D-AIKit
---

# 4D-AIKit

## Vue d’ensemble

4D AIKit est un composant 4D intégré qui permet une interaction avec des API d'IA tierces.

## OpenAI

La classe [`OpenAI`](Classes/OpenAI.md) vous permet de faire des demandes à l'[API OpenAI](https://platform.openai.com/docs/api-reference/).

### Configuration

Tout d'abord, initialisez le client OpenAI en utilisant votre clé API

```4d
var $client:=cs.AIKit.OpenAI.new("your api key")
```

Pour une API [ compatible provider ](compatible-openai.md), vous pouvez configurer l'URL du serveur en définissant le paramètre `baseURL`.

```4d
var $client:=cs.AIKit.OpenAI.new({apiKey: "your api key"; baseURL: "https://your.server.ai"})
```

ou

```4d
$client.baseURL:="https://your.server.ai"
```

### Formuler des demandes

`OpenAI` fournit différents points de terminaison appelés ressources, chacun offrant diverses fonctions.

```4d
var $result:=$client.<resource>.<function>(<parameters...>)
```

Le `$result` contient le `HTTPRequest`, un statut `success`, une collection de `errors` et plus encore. Voir [OpenAIResult](Classes/OpenAIResult.md)

Voir quelques exemples ci-dessous.

#### Chat

https://platform.openai.com/docs/api-reference/chat

##### Completions

https://platform.openai.com/docs/api-reference/chat/create

```4d
var $messages:=[{role: "system"; content: "You are a helpful assistant."}]
$messages.push({role: "user"; content: "Could you explain me why 42 is a special number"})
var $result:=$client.chat.completions.create($messages; {model: "gpt-4o-mini"})
// résultat dans $result.choice
```

##### Assistant de chat

Cet assistant vous permet de maintenir une liste de messages d'utilisateurs et de réponses d'assistants.

```4d
var $helper:=$client.chat.create("You are a helpful assistant.")
var $result:=$helper.prompt("Could you explain me why 42 is a special number")
$result:=$helper.prompt("and could you decompose this number")
// conversation dans $helper.messages
```

##### Assistant de vision

Cet assistant permet l'analyse des images à travers le chat.

```4d
var $result:=$client.chat.vision.create($imageUrl).prompt("give me a description of the image")
```

#### Images

https://platform.openai.com/docs/api-reference/images

```4d
var $images:=$client.images.generate("A futuristic city skyline at sunset"; {size: "1024x1024"}).images
```

#### Modèles

https://platform.openai.com/docs/api-reference/models

Obtenir la liste complète des modèles

```4d
var $models:=$client.models.list().models // vous pouvez alors extraire le `id`
```

Obtenir une information de modèle par id

```4d
var $model:=$client.models.retrieve("a model id").model
```

#### Modérations

https://platform.openai.com/docs/api-reference/moderations

```4d
var $moderation:=$client.moderations.create("This text contains inappropriate language and offensive behavior.").moderation
```

#### Code asynchrone

Si vous ne souhaitez pas attendre la réponse de l'OpenAPI lorsque vous envoyez une requête à son API, vous devez utiliser un code asynchrone. L'objet résultat sera reçu dans une fonction de rappel.

Voir [documentation détaillée pour les exemples](asynchronous-call.md)

## Droits d'auteur

- This library is not affiliated with, endorsed by, or officially connected to OpenAI in any way.
- "OpenAI" and any related marks are trademarks or registered trademarks of OpenAI, LLC. All rights related to OpenAI's services, APIs, and technologies remain the property of OpenAI.
- This project simply provides an interface to OpenAI’s services and does not claim any ownership over their technology, branding, or intellectual property.

