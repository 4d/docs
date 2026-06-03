---
id: openaiproviders
title: OpenAIProviders
---

# OpenAIProviders

## Sommaire

La classe `OpenAIProviders` gère les configurations de fournisseurs d'IA en chargeant la configuration et en gérant la résolution des chaînes de modèles au format `provider:model`.

Pour une documentation complète sur son utilisation, voir [Alias de modèles de fournisseurs](../provider-model-aliases.md).

## Description

Cette classe permet la prise en charge de plusieurs fournisseurs via :

- le chargement des configurations de fournisseurs à partir d'un seul fichier JSON
- le chargement des alias de modèles nommés correspondant à des fournisseurs et à des identifiants de modèles
- la résolution de la syntaxe `provider:model` en configuration complète de l'API
- la résolution des alias de modèles nommés depuis un nom simple en nom du fournisseur complet + les configurations du modèle

La classe `OpenAI` charge automatiquement les configurations des fournisseurs lors de son instanciation.

## Constructeur

```4d
var $providers := cs.AIKit.OpenAIProviders.new()
```

Creates a new instance that loads provider configuration from the `AIProviders.json` file. See [Configuration Files](../provider-model-aliases.md#configuration-files) in the Provider Model Aliases documentation for details on file locations and format.

**Important:**

- Seul le premier fichier existant est chargé. Il n'y a pas de fusion de plusieurs fichiers.
- La configuration est lue une fois au moment de l'instanciation. Si le fichier `AIProviders.json` est modifié par la suite, ces changements ne seront pas reflétés dans l'instance existante. Vous devez créer une nouvelle instance de `OpenAIProviders` pour recharger la configuration mise à jour.

## Utilisation

### Intégration avec la classe OpenAI

```4d
var $client := cs.AIKit.OpenAI.new()

// Utilisation d'alias de modèles avec syntaxe provider:model
var $result := $client.chat.completions.create($messages; {model: "openai:gpt-5.1"})
var $result := $client.chat.completions.create($messages; {model: "anthropic:claude-3-opus"})
var $result := $client.chat.completions.create($messages; {model: "local:llama3"})
```

### Accès direct aux fournisseurs

```4d
var $providers := cs.AIKit.OpenAIProviders.new()

// Obtenir une configuration de fournisseur spécifique
var $config := $providers.get("openai")
// Renvoie : {baseURL : "...", apiKey : "...", modelAliases : [...], ...} ou Null

// Obtenir tous les noms de fournisseurs
var $names := $providers.list()
// Renvoie : ["openai", "anthropic", "mistral", "local"]
```

## Fonctions

### get()

**get**(*name* : Text) : Object

Obtenir la configuration d'un fournisseur par son nom.

| Paramètres | Type   | Description                                                            |
| ---------- | ------ | ---------------------------------------------------------------------- |
| *name*     | Text   | Le nom du fournisseur                                                  |
| Résultat   | Object | Objet de configuration du fournisseur, ou `Null` s'il n'est pas trouvé |

#### Exemple

```4d
var $config := $providers.get("openai")
If ($config # Null)
    // Utiliser $config.baseURL, $config.apiKey, etc.

    // Nous pourrions construire un client avec
    var $client:=cs.AIKit.OpenAI.new($config)
End if
```

### list()

**list**() : Collection

Obtenir les noms de tous les fournisseurs.

| Paramètres | Type       | Description                        |
| ---------- | ---------- | ---------------------------------- |
| Résultat   | Collection | Collection de noms de fournisseurs |

#### Exemple

```4d
var $names := $providers.list()
// Retourne : ["openai", "anthropic", ...]

For each ($name; $names)
    var $config := $providers.get($name)
End for each
```

### modelAliases()

**modelAliases**() : Collection

Récupère tous les alias de modèle configurés.

| Paramètres | Type       | Description                            |
| ---------- | ---------- | -------------------------------------- |
| Résultat   | Collection | Collection d'objets d'alias de modèles |

Chaque objet de la collection contient :

| Propriété  | Type | Description                                 |
| ---------- | ---- | ------------------------------------------- |
| `name`     | Text | Nom de l'alias du modèle                    |
| `provider` | Text | Nom du fournisseur                          |
| `model`    | Text | ID du modèle à utiliser avec le fournisseur |

#### Exemple

```4d
var $models := $providers.modelAliases()
// Renvoie : [{name: "my-gpt", provider: "openai", model: "gpt-5.1"}, ...]

For each ($model; $models)
    // $m.name, $m.provider, $m.model
End for each
```

## Résolution du modèle

Deux syntaxes sont prises en charge pour la résolution des modèles :

### Alias de fournisseur (`provider:model`)

Spécifie directement le nom du fournisseur et du modèle :

```4d
var $client := cs.AIKit.OpenAI.new()
$client.chat.completions.create($messages; {model: "openai:gpt-5.1"})
```

Résolution en interne :

1. Séparation `"openai:gpt-5.1"` en provider=`"openai"` et model=`"gpt-5.1"`
2. Recherche de la configuration du fournisseur `"openai"`
3. Extraction de `baseURL` et `apiKey`
4. Requête API effectuée en utilisant la configuration résolue

**Exemples :**

- `"openai:gpt-5.1"` → Utiliser le fournisseur OpenAI avec le modèle gpt-5.1
- `"anthropic:claude-3-opus"` → Utiliser le fournisseur Anthropic avec claude-3-opus
- `"local:llama3"` → Utiliser un fournisseur local avec le modèle llama3

### Alias de modèle (nom simple)

Utilise un modèle déclaré par son nom simple dans la section `models` de la configuration :

```4d
var $client := cs.AIKit.OpenAI.new()
$client.chat.completions.create($messages; {model: "my-gpt"})
```

Résolution en interne :

1. Recherche de `"my-gpt"` dans la configuration `models`
2. Récupération de son `provider` (par exemple, `"openai"`) et de son `model` (par exemple, `"gpt-5.1"`)
3. Résolution du fournisseur pour obtenir `baseURL` et `apiKey`
4. Requête API effectuée en utilisant la configuration résolue

**Exemples :**

- `"my-gpt"` → Utiliser l'alias de modèle "my-gpt" (résolu par le fournisseur et le modèle configurés)
- `"my-embedding"` → Utiliser l'alias de modèle "my-embedding" pour les opérations d'embedding
