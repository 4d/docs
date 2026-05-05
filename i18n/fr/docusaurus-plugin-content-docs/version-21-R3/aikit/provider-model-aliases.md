---
id: provider-model-aliases
title: Alias de fournisseurs et de modèles
---

# Alias de fournisseurs et de modèles

Le client OpenAI prend en charge les alias de fournisseurs et de modèles, ce qui vous permet de définir des configurations de fournisseurs et des alias de modèles nommés dans des fichiers JSON et de les référencer à l'aide de syntaxes simples.

## Vue d’ensemble

Au lieu de coder en dur les points de terminaison et les identifiants de l'API dans votre code, vous pouvez :

- Définir les configurations des fournisseurs dans un fichier JSON
- Utiliser la syntaxe `provider:model` pour spécifier directement un fournisseur et un modèle
- Définir des alias de modèles nommés qui correspondent à un fournisseur et à un identifiant de modèle
- Utiliser l'alias d'un modèle nommé par son simple nom (par exemple, `my-gpt`)
- Passer d'un fournisseur à l'autre (OpenAI, Anthropic, Ollama local, etc.) facilement

## Fichiers de configuration

Le client charge automatiquement les configurations du fournisseur à partir du premier fichier existant trouvé (par ordre de priorité) :

| Priorité                              | Emplacement | Emplacement du fichier                            |
| ------------------------------------- | ----------- | ------------------------------------------------- |
| 1 (le plus élevé)  | userData    | `<data folder>/Settings/AIProviders.json`         |
| 2                                     | user        | `<project root folder>/Settings/AIProviders.json` |
| 3 (le plus faible) | structure   | `/SOURCES/AIProviders.json`                       |

**Important:** Seul le **premier fichier existant** est chargé. Il n'y a pas de fusion de plusieurs fichiers.

### Format du fichier de configuration

```json
{
  "providers": {
    "provider_name": {
      "baseURL": "https://api.example.com/v1",
      "apiKey": "optional-key",
      "organization": "optional-org-id",
      "project": "optional-project-id"
    }
  },
  "models": {
    "model_alias_name": {
      "provider": "provider_name",
      "model": "actual-model-id",
    }
  }
}
```

### Champs du fournisseur

| Champ          | Type | Obligatoire | Description                                                               |
| -------------- | ---- | ----------- | ------------------------------------------------------------------------- |
| `baseURL`      | Text | Oui         | URL du point de terminaison de l'API                                      |
| `apiKey`       | Text | Non         | Valeur de la clé API                                                      |
| `organisation` | Text | Non         | ID de l'organisation (facultatif, spécifique à OpenAI) |
| `project`      | Text | Non         | ID du projet (facultatif, spécifique à OpenAI)         |

### Champs d'alias de modèle

| Champ      | Type | Obligatoire | Description                                                           |
| ---------- | ---- | ----------- | --------------------------------------------------------------------- |
| `provider` | Text | Oui         | Nom du fournisseur (doit exister dans `providers`) |
| `model`    | Text | Oui         | ID du modèle utilisé par le fournisseur                               |

### Exemple de configuration

```json
{
  "providers": {
    "openai": {
      "baseURL": "https://api.openai.com/v1"
    },
    "anthropic": {
      "baseURL": "https://api.anthropic.com/v1"
    },
    "local": {
      "baseURL": "http://localhost:11434/v1"
    },
    "mistral": {
      "baseURL": "https://api.mistral.ai/v1",
      "apiKey": "your-mistral-key"
    }
  },
  "models": {
    "my-gpt": {
      "provider": "openai",
      "model": "gpt-5.1"
    },
    "my-claude": {
      "provider": "anthropic",
      "model": "claude-3-5-sonnet-20241022"
    },
    "my-embedding": {
      "provider": "openai",
      "model": "text-embedding-3-small",
      }
    }
  }
}
```

## Utilisation dans les appels d'API

### Formats de paramétrage du modèle

Deux syntaxes sont prises en charge :

| Syntaxe               | Description                                                                                |
| --------------------- | ------------------------------------------------------------------------------------------ |
| `provider:model_name` | Alias de fournisseur - spécifie directement le fournisseur et le modèle                    |
| `:model_alias`        | Alias de modèle — référence un modèle nommé de la configuration `models` par un nom simple |

#### Syntaxe alias de fournisseur

Utilisez la syntaxe `provider:model_name` dans tout appel d'API qui accepte un modèle en paramètre :

```4d
var $client := cs.AIKit.OpenAI.new()

// Complétions de chat
var $result := $client.chat.completions.create($messages; {model: "openai:gpt-5.1"})
var $result := $client.chat.completions.create($messages; {model: "anthropic:claude-3-opus"})
var $result := $client.chat.completions.create($messages; {model: "local:llama3"})

// Embeddings
var $result := $client.embeddings.create("text"; "openai:text-embedding-3-small")
var $result := $client.embeddings.create("text"; "local:nomic-embed-text")

// Génération d'images
var $result := $client.images.generate("prompt"; {model: "openai:dall-e-3"})
```

#### Syntaxe alias de modèle

Utilisez un nom de modèle simple pour référencer un modèle nommé défini dans la section `models` du fichier de configuration. Le fournisseur, l'ID du modèle et les informations d'identification sont résolus automatiquement :

```4d
var $client := cs.AIKit.OpenAI.new()

// Utiliser un alias de modèle nommé
var $result := $client.chat.completions.create($messages; {model: ":my-gpt"})
var $result := $client.chat.completions.create($messages; {model: ":my-claude"})

// Embeddings avec un alias de modèle nommé
var $result := $client.embeddings.create("text"; ":my-embedding")
```

### Comment ça marche

#### Alias de fournisseur (`provider:model`)

Lorsque vous utilisez la syntaxe `provider:model`, le client automatiquement :

1. **analyse** la chaîne du modèle pour extraire le nom du fournisseur et le nom du modèle
   - Exemple : `"openai:gpt-5.1"` → provider=`"openai"`, model=`"gpt-5.1"`

2. **recherche** la configuration du fournisseur à partir du fichier JSON chargé
   - Récupère `baseURL`, `apiKey`, `organization`, `project`

3. **effectue la requête API** en utilisant la configuration résolue
   - Envoie une requête à la `baseURL` du fournisseur avec la `apiKey` correcte

#### Alias de modèle (nom simple)

Lorsque vous utilisez un nom de modèle simple qui correspond à un alias configuré, le client automatiquement :

1. **recherche** l'alias du modèle dans la section `models` de la configuration
   - Exemple : `":my-gpt"` → trouve une entrée avec `provider : "openai"`, `model : "gpt-5.1"`

2. **résoud** le fournisseur associé pour obtenir `baseURL` et `apiKey`

3. **effectue la requête API** en utilisant le point de terminaison du fournisseur et l'ID du modèle stocké.

### Utiliser des noms de modèles seuls

Si vous spécifiez un nom de modèle **sans** préfixe de fournisseur ou avec un préfixe `:`, le client utilise la configuration de son constructeur :

```4d
// Utiliser la configuration du constructeur
var $client := cs.AIKit.OpenAI.new({apiKey : "sk-..." ; baseURL : "https://api.openai.com/v1"})
var $result := $client.chat.completions.create($messages; {model : "gpt-5.1"})

// Surcharge avec l'alias du fournisseur
var $result := $client.chat.completions.create($messages; {model : "anthropic:claude-3-opus"})

// Surcharge avec l'alias du modèle (nom simple)
var $result := $client.chat.completions.create($messages; {model : ":my-gpt"})

```

## Exemples

### Application de chat multi-fournisseurs

```4d
var $client := cs.AIKit.OpenAI.new()
var $messages := []
$messages.push({role : "user" ; content : "Quelle est la capitale de la France ?"})

// On essaie OpenAI
var $result := $client.chat.completions.create($messages; {model : "openai:gpt-5.1"})

// On essaie Anthropic
var $result := $client.chat.completions.create($messages; {model : "anthropic:claude-3-5-sonnet"})

// On essaie Ollama local
var $result := $client.chat.completions.create($messages; {model : "local:llama3.2"})
```

### Embeddings avec plusieurs fournisseurs

```4d
var $client := cs.AIKit.OpenAI.new()
var $text := "Hello world"

// Utiliser les embeddings OpenAI
var $embedding1 := $client.embeddings.create($text; "openai:text-embedding-3-small")

// Utiliser les embeddings locaux
var $embedding2 := $client.embeddings.create($text; "local:nomic-embed-text")
```

## Gestion des configurations

Les configurations de fournisseurs peuvent être gérées via les [Paramètres de 4D](https://developer.4d.com/docs/settings/ai) ou en modifiant directement les fichiers JSON.

**Pour ajouter ou modifier des fournisseurs :**

1. Utilisez l'interface des Paramètres 4D (recommandé), ou
2. Modifiez le fichier JSON approprié (fichier données utilisateur, utilisateur ou structure)
3. Redémarrez votre application ou créez une nouvelle instance de client OpenAI pour tenir compte des modifications.

**Emplacement du fichier recommandé :**

- **Pour les configurations spécifiques à l'utilisateur :** `<dossier données>/Settings/AIProviders.json`
- **Pour les valeurs par défaut de l'application :** `/SOURCES/AIProviders.json`

### Pas de capacité de rechargement

Une fois qu'un client est instancié, il ne peut pas recharger les configurations de fournisseurs. Pour prendre en compte les changements de configuration :

```4d
// Configuration modifiée - création d'un nouveau client
var $client := cs.AIKit.OpenAI.new()
```

## Considérations sur la sécurité

Lors de l'utilisation de 4D en mode client/serveur, il est **fortement recommandé** d'exécuter le code lié à l'IA côté serveur afin de protéger les tokens et les informations d'identification de l'API de l'exposition aux machines clientes.

## Scénarios d'application courants

### Développement local avec Ollama

```json
{
  "providers": {
    "local": {
      "baseURL": "http://localhost:11434/v1"
    }
  }
}
```

```4d
var $client := cs.AIKit.OpenAI.new()
var $result := $client.chat.completions.create($messages; {model: "local:llama3.2"})
```

### Alias de modèles nommés

Définir les modèles une fois, les utiliser partout par leur nom :

```json
{
  "providers": {
    "openai": {
      "baseURL": "https://api.openai.com/v1",
      "apiKey": "your-openai-key"
    },
    "anthropic": {
      "baseURL": "https://api.anthropic.com/v1",
      "apiKey": "your-anthropic-key"
    }
  },
  "models": {
    "chat": {
      "provider": "openai",
      "model": "gpt-5.1"
    },
    "fast": {
      "provider": "anthropic",
      "model": "claude-3-5-haiku-20241022"
    },
    "embedding": {
      "provider": "openai",
      "model": "text-embedding-3-small",
    }
  }
}
```

```4d
var $client := cs.AIKit.OpenAI.new()

// Utiliser des alias de modèles nommés — pas besoin de se souvenir du fournisseur ou de l'ID du modèle
var $result := $client.chat.completions.create($messages; {model: ":chat"})
var $result := $client.chat.completions.create($messages; {model: ":fast"})
var $embedding := $client.embeddings.create("text"; ":embedding")
```

### Lister tous les modèles configurés

```4d
var $providers := cs.AIKit.OpenAIProviders.new()
var $models := $providers.modelAliases()
// Renvoie : [{name: "chat", provider: "openai", model: "gpt-5.1"}, ...]
```

### Production avec plusieurs fournisseurs de services dans le cloud

```json
{
  "providers": {
    "openai": {
      "baseURL": "https://api.openai.com/v1",
      "apiKey": "your-openai-key"
    },
    "anthropic": {
      "baseURL": "https://api.anthropic.com/v1",
      "apiKey": "your-anthropic-key"
    },
    "azure": {
      "baseURL": "https://your-resource.openai.azure.com",
      "apiKey": "your-azure-key"
    }
  }
}
```

### Organisations spécifiques des fournisseurs

```json
{
  "providers": {
    "openai-team-a": {
      "baseURL": "https://api.openai.com/v1",
      "organization": "org-team-a-id"
    },
    "openai-team-b": {
      "baseURL": "https://api.openai.com/v1",
      "organization": "org-team-b-id"
    }
  }
}
```

```4d
// Routage vers différentes organisations
var $resultA := $client.chat.completions.create($messages; {model : "openai-team-a:gpt-5.1"})
var $resultB := $client.chat.completions.create($messages; {model : "openai-team-b:gpt-5.1"})
```

## Documentation liée

- [Classe OpenAI](Classes/OpenAI.md) - Classe client principale
- [Classe OpenAIProviders](Classes/OpenAIProviders.md) - Gestion de la configuration des fournisseurs
- [API OpenAI compatibles](compatible-openai.md) - Liste des fournisseurs compatibles
