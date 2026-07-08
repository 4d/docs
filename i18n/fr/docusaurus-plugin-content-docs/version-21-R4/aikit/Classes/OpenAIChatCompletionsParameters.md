---
id: openaichatcompletionsparameters
title: OpenAIChatCompletionsParameters
---

# OpenAIChatCompletionsParameters

The `OpenAIChatCompletionsParameters` class is designed to handle the parameters required for chat completions using the OpenAI API.

## Hérite de

- [OpenAIParameters](OpenAIParameters.md)

## Propriétés

| Propriété               | Type       | Valeur par défaut | Description                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----------------------- | ---------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `model`                 | Text       | `"gpt-4o-mini"`   | ID du modèle à utiliser. Prend en charge [provider:model aliases](../provider-model-aliases.md) pour une utilisation multi-fournisseurs (par exemple, `"openai:gpt-4o"`, `"anthropic:claude-3-opus"`).                                                                                                                                                                |
| `stream`                | Boolean    | `False`           | Indique si la progression partielle doit être retransmise en continu. Si cette option est activée, les tokens seront envoyés sous forme de données uniquement. Une formule de rappel est requise.                                                                                                                                                                                        |
| `stream_options`        | Object     | `Null`            | Propriété pour stream=True. Par exemple : `{include_usage: True}`                                                                                                                                                                                                                                                                                                                                        |
| `max_completion_tokens` | Integer    | `0`               | Le nombre maximum de tokens qui peuvent être générés dans la réponse.                                                                                                                                                                                                                                                                                                                                                    |
| `n`                     | Integer    | `1`               | Nombre de réponses à générer pour chaque invite (prompt).                                                                                                                                                                                                                                                                                                                                             |
| `temperature`           | Real       | `-1`              | Température d'échantillonnage à utiliser, entre 0 et 2. Les valeurs élevées rendent la sortie plus aléatoire, tandis que des valeurs faibles la rendent plus ciblée et déterministe.                                                                                                                                                                                                                     |
| `top_p`                 | Real       | `-1`              | An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered. Only sent when the value is greater than 0 (omitted when `<= 0`, with default `-1`). |
| `store`                 | Boolean    | `False`           | Stocker ou non le résultat de cette requête de génération de réponse conversationnelle.                                                                                                                                                                                                                                                                                                                                  |
| `reasoning_effort`      | Text       | `Null`            | Contraintes sur l'effort de raisonnement pour les modèles de raisonnement. Les valeurs actuellement prises en charge sont "low", "medium" et "high".                                                                                                                                                                                                                                                     |
| `response_format`       | Object     | `Null`            | Un objet spécifiant le format que le modèle doit produire. Compatible avec les sorties structurées.                                                                                                                                                                                                                                                                                                      |
| `tools`                 | Collection | `Null`            | Une liste d'outils ([OpenAITool](OpenAITool.md)) que le modèle peut appeler. Seul le type "function" est pris en charge.                                                                                                                                                                                                                                                              |
| `tool_choice`           | Variant    | `Null`            | Contrôle l'outil (le cas échéant) qui est appelé par le modèle. Peut être `"none"`, `"auto"`, `"required"`, ou spécifier un outil particulier.                                                                                                                                                                                                                                        |
| `prediction`            | Object     | `Null`            | Contenu de sortie statique, tel que le contenu d'un fichier texte en cours de régénération.                                                                                                                                                                                                                                                                                                                              |
| `service_tier`          | Text       | `Null`            | Specifies the processing type used for serving the request. `"auto"`, `"auto"`, `"default"`, and `"priority"`.                                                                                                                                                                                                                                                                                           |

### Propriétés du callback asynchrone

\| Property                   | Type    | Description                                                                                       |
\|---------------------------|---------|-------------------------|---------------------------------------------------------------------------------------------------|
\| `onData`<br>(or `formula`)   | 4D.Function | A function to be called asynchronously when receiving data chunk.<br>*Assurez-vous que le process courant ne se termine pas.* |

`onData` will receive as argument a [OpenAIChatCompletionsStreamResult](OpenAIChatCompletionsStreamResult.md)

Voir [OpenAIParameters](OpenAIParameters.md) pour les autres propriétés de callback (rappel).

## Format de réponse

Le paramètre `response_format` vous permet de spécifier le format que le modèle doit produire. Ceci est particulièrement utile lorsque vous avez besoin de données structurées ou que vous voulez vous assurer que la réponse suit un format spécifique.

### Types de formats de réponse pris en charge

#### 1. Format texte (par défaut)

Le format de réponse par défaut renvoie du texte brut :

```4d
var $params := cs.AIKit.OpenAIChatCompletionsParameters.new({ \
    model: "gpt-4o-mini"; \
    response_format: {type: "text"} \
})
```

#### 2. Format d'objet JSON

Force le modèle à répondre avec du JSON valide :

```4d
var $params := cs.AIKit.OpenAIChatCompletionsParameters.new({ \
    model: "gpt-4o-mini"; \
    response_format: {type: "json_object"} \
})

var $messages := [ \
    cs.AIKit.OpenAIMessage.new({ \
        role: "system"; \
        content: "You are a helpful assistant that always responds in JSON format." \
    }) \
]
$messages.push({ \
    role: "user"; \
    content: "Give me information about the number 42 in JSON format with keys 'significance' and 'facts'." \
})

$result := $client.chat.completions.create($messages; $params)
```

#### 3. Format de Schéma JSON (Sorties Structurées)

Pour un contrôle précis de la structure JSON, vous pouvez définir un schéma :

```4d
var $jsonSchema := { \
    type: "object"; \
    properties: { \
        name: {type: "string"}; \
        age: {type: "integer"}; \
        occupation: {type: "string"}; \
        city: {type: "string"} \
    }; \
    required: ["name"; "age"; "occupation"; "city"]; \
    additionalProperties: False \
}

var $params := cs.AIKit.OpenAIChatCompletionsParameters.new({ \
    model: "gpt-4o-mini"; \
    response_format: { \
        type: "json_schema"; \
        json_schema: { \
            name: "person_info"; \
            description: "Information about a person"; \
            schema: $jsonSchema; \
            strict: True \
        } \
    } \
})

var $messages := [{role: "system"; content: "You are a helpful assistant."}]
$messages.push({ role: "user"; content: "Generate information about a person named John Smith."})

$result := $client.chat.completions.create($messages; $params)
```

### Propriétés du schéma JSON

Lorsque vous utilisez le type `json_schema`, vous pouvez spécifier :

- **`name`**: Un nom pour le schéma
- **`description`**: Une description de ce que le schéma représente
- **`schema`**: La définition du schéma JSON
- **`strict`**: Si le schéma doit être respecté de manière stricte

### Notes importantes

- Tous les modèles ne prennent pas en charge les sorties structurées (json_object ou json_schema) ; il convient donc de vérifier les capacités du modèle avant de l'utiliser.
- Lorsque vous utilisez le format `json_object`, vous devez inclure des instructions dans votre message système pour répondre au format JSON
- Le format `json_schema` offre le plus de contrôle et garantit que la réponse correspond exactement à la structure que vous avez spécifiée
- Les réponses JSON non valides entraîneront une erreur lors de l'utilisation des formats JSON
- La validation du schéma JSON garantit la sécurité des types et la présence des champs requis

## Voir également

- [OpenAIChatCompletionsAPI](OpenAIChatCompletionsAPI.md)
