---
id: openaitool
title: OpenAITool
---

# OpenAITool

La classe `OpenAITool` représente un outil qui peut être appelé par le modèle OpenAI au cours d'une conversation. Les outils permettent à l'IA d'exécuter des fonctions spécifiques et d'interagir avec des systèmes externes ou d'extraire des informations.

Voir [OpenAIMessage](OpenAIMessage.md) pour savoir comment répondre à un appel d'outil.

> **Note :** Les appels d'outils sont gérés automatiquement lorsque vous utilisez [OpenAIChatHelper](OpenAIChatHelper.md) avec l'option `autoHandleToolCalls` activée.

## Propriétés

### Propriétés root

| Propriété | Type    | Par défaut   | Description                                                                                                                                   |
| --------- | ------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`    | Text    | `"function"` | Le type d'outil. Prend en charge actuellement les types `"function"`, `"custom"`, et d'autres types intégrés. |
| `strict`  | Boolean | `False`      | Appliquer ou non une validation stricte du schéma pour les paramètres de la fonction.                                         |

### Propriétés communes

| Propriété     | Type | Description                                                                          |
| ------------- | ---- | ------------------------------------------------------------------------------------ |
| `name`        | Text | Le nom de l'outil, qui sert d'identifiant.                           |
| `description` | Text | Description de l'outil pour aider le LLM à décider quand l'utiliser. |

### Propriétés spécifiques des fonctions

| Propriété    | Type   | Description                                                                        |
| ------------ | ------ | ---------------------------------------------------------------------------------- |
| `parameters` | Object | Définition des paramètres de la fonction au format du schéma JSON. |

## Constructeur

### new()

**new**(*object* : Object) : OpenAITool

| Paramètres | Type       | Description                       |
| ---------- | ---------- | --------------------------------- |
| *object*   | Object     | Objet de configuration de l'outil |
| Résultat   | OpenAITool | Nouvelle instance d'OpenAITool    |

Crée une nouvelle instance d'OpenAITool. Le constructeur accepte à la fois le format simplifié et le format de l'API OpenAI.

#### Formats pris en charge

**Format simplifié :**

```4d
var $tool := cs.OpenAITool.new({ \
  name: "get_weather"; \
  description: "Get current weather for a location"; \
  parameters: { \
    type: "object"; \
    properties: { \
      location: {type: "string"; description: "City name"} \
    }; \
    required: ["location"] \
  } \
})
```

**Format de l'API OpenAI :**

```4d
var $tool := cs.OpenAITool.new({ \
  type: "function"; \
  strict: True; \
  function: { \
    name: "get_weather"; \
    description: "Get current weather for a location"; \
    parameters: { \
      type: "object"; \
      properties: { \
        location: {type: "string"; description: "City name"} \
      }; \
      required: ["location"] \
    } \
  } \
})
```

## Intégration avec les générateurs de réponses conversationnelles

Les outils sont généralement utilisés avec la propriété `OpenAIChatCompletionsParameters.tools` :

```4d
var $parameters := cs.AIKit.OpenAIChatCompletionsParameters.new({ \
  model: "gpt-4o-mini"; \
  tools: [$tool1; $tool2; $tool3] \
})
```

> **Note :** Vous pouvez passer des objets simples directement - ils seront automatiquement convertis en instances `OpenAITool`. Il n'est pas nécessaire de créer explicitement des objets `OpenAITool`.

## Voir aussi

- [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md) - Pour la configuration de l'outil
- [OpenAIChatHelper](OpenAIChatHelper.md) - Pour la gestion automatique des appels d'outils
- [OpenAIMessage](OpenAIMessage.md) - Pour les réponses aux appels d'outils