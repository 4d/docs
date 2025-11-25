---
id: overview
title: 4D-AIKit
---

# 4D-AIKit

## Vue d’ensemble

4D AIKit est un composant 4D intégré qui permet une interaction avec des API d'IA tierces.

## OpenAI

La classe [`OpenAI`](Classes/OpenAI.md) vous permet d'envoyer des requêtes à l'[API OpenAI](https://platform.openai.com/docs/api-reference/).

### Configuration

Tout d'abord, initialisez le client OpenAI en utilisant votre clé API

```4d
var $client:=cs.AIKit.OpenAI.new("your api key")
```

Pour l'API d'un [founisseur compatible](compatible-openai.md), vous devez configurer l'URL du serveur en définissant le paramètre `baseURL`.

```4d
var $client:=cs.AIKit.OpenAI.new({apiKey: "your api key"; baseURL: "https://your.server.ai"})
```

ou

```4d
$client.baseURL:="https://your.server.ai"
```

### Formuler des requêtes

`OpenAI` fournit différents points de terminaison appelés ressources, chacun offrant diverses fonctions.

```4d
var $result:=$client.<resource>.<function>(<parameters...>)
```

Le résultat `$result` contient la requête `HTTPRequest`, un statut `success`, une collection de `errors` et plus encore. Voir [OpenAIResult](Classes/OpenAIResult.md)

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

##### Helper de discussion (chat)

Cet assistant vous permet de maintenir une liste de messages d'utilisateurs et de réponses de l'assistant.

```4d
var $helper:=$client.chat.create("You are a helpful assistant.")
var $result:=$helper.prompt("Could you explain me why 42 is a special number")
$result:=$helper.prompt("and could you decompose this number")
// conversation dans $helper.messages
```

##### Helper de vision

Cet assistant permet l'analyse des images à travers la discussion.

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

#### Files

https://platform.openai.com/docs/api-reference/files

Upload a file for use with other endpoints

```4d
var $file:=File("/path/to/your/file.jsonl")
var $result:=$client.files.create($file; "fine-tune")
var $fileId:=$result.file.id
```

List all files

```4d
var $files:=$client.files.list().files
```

Retrieve file information

```4d
var $fileInfo:=$client.files.retrieve($fileId).file
```

Delete a file

```4d
var $deleteResult:=$client.files.delete($fileId)
```

:::tip Article(s) de blog sur le sujet

[Transform Static Documents into Actionable Knowledge with 4D AIKit](https://blog.4d.com/transform-static-documents-into-actionable-knowledge-with-4d-aikit).

:::

#### Modérations

https://platform.openai.com/docs/api-reference/moderations

```4d
var $moderation:=$client.moderations.create("This text contains inappropriate language and offensive behavior.").moderation
```

#### Code asynchrone

Si vous ne souhaitez pas attendre la réponse de l'OpenAPI lorsque vous envoyez une requête à son API, vous devez utiliser un code asynchrone. L'objet résultat sera reçu dans une fonction de callback.

Voir [documentation détaillée pour les exemples](asynchronous-call.md)

## Droits d'auteur

- Cette bibliothèque n'est pas affiliée à OpenAI, ni approuvée par elle, ni officiellement liée à elle de quelque manière que ce soit.
- "OpenAI" et toutes les marques associées sont des marques commerciales ou des marques déposées d'OpenAI, LLC. Tous les droits liés aux services, API et technologies de l'OpenAI restent la propriété de OpenAI.
- Ce projet fournit simplement une interface aux services d'OpenAI et ne revendique aucune propriété sur leur technologie, leur marque ou leur propriété intellectuelle.

