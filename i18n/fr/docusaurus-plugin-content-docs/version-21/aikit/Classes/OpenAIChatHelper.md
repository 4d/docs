---
id: openaichathelper
title: OpenAIChatHelper
---

# OpenAIChatHelper

L'assistant de conversation permet de conserver une liste de messages en mémoire et d'effectuer des invites consécutives.

## Propriétés

| Nom de propriété      | Type                                                                  | Valeur par défaut                                      | Description                                                                                                          |
| --------------------- | --------------------------------------------------------------------- | ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| `chat`                | [OpenAIChatAPI](OpenAIChatAPI.md)                                     | -                                                      | L'instance de l'API de conversation utilisée pour la communication avec OpenAI.                      |
| `systemPrompt`        | [OpenAIMessage](OpenAIMessage.md)                                     | -                                                      | Le message d'invite du système qui guide les réponses de l'assistant de conversation.                |
| `numberOfMessages`    | Integer                                                               | 15                                                     | Le nombre maximum de messages à conserver dans l'historique des conversations.                       |
| `paramètres`          | [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md) | -                                                      | Les paramètres pour la requête OpenAI de génération de réponse conversationnelle.                    |
| `messages`            | Collection de [OpenAIMessage](OpenAIMessage.md)                       | [] | La collection de messages échangés dans la session de conversation.                                  |
| `tools`               | Collection de [OpenAIModel](OpenAITool.md)                            | [] | Liste des outils OpenAI enregistrés pour l'appel de fonctions.                                       |
| `autoHandleToolCalls` | Boolean                                                               | True                                                   | Booléen indiquant si les appels d'outils sont gérés automatiquement à l'aide des outils enregistrés. |
| `lastErrors`          | Collection                                                            | -                                                      | Collection contenant les dernières erreurs rencontrées lors des opérations de chat.                  |

## Constructor

Pour créer une nouvelle instance de `OpenAIChatHelper`, il est préférable d'utiliser la méthode `create()` de l'[API de conversation du client OpenAI](OpenAIChatAPI.md) :

```4D
var $chatHelper:=$client.chat.create("Vous êtes un assistant utile.")
```

Cette méthode crée un nouvel assistant de conversation avec l'invite système spécifiée et l'initialise avec les paramètres par défaut. L'invite du système définit le rôle et le comportement de l'assistant tout au long de la conversation.

## Fonctions

### prompt()

**prompt**(*prompt* : Text) : OpenAIChatCompletionsResult

| Paramètres | Type                                                          | Description                                                                |
| ---------- | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
| *prompt*   | Text                                                          | Texte d'invite à envoyer au modèle de conversation OpenAI. |
| Résultat   | [OpenAIChatCompletionsResult](OpenAIChatCompletionsResult.md) | La réponse conversationnelle générée.                      |

Envoie une invite utilisateur au modèle de conversation et retourne la réponse générée.

#### Exemple d'utilisation

```4D
var $result:=$chatHelper.prompt("Hello, how can I help you today?")
$result:=$chatHelper.prompt("Why 42?")
```

### reset()

**reset**()

Réinitialise le contexte de la conversation en effaçant tous les messages et en désenregistrant tous les outils. Cela permet d'entamer une nouvelle conversation tout en conservant l'invite et les paramètres du système.

#### Exemple de réinitialisation

```4D
$chatHelper.prompt("Hello !")
$chatHelper.reset() // Efface tous les messages et outils précédents
```

### registerTool()

**registerTool**(*tool* : Object; *handler* : Object)

| Paramètres | Type   | Description                                                                                                                                                                                             |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| *tool*     | Object | Objet de définition d'outil (ou instance [OpenAITool](OpenAITool.md))                                                                                                                |
| *handler*  | Object | Fonction pour gérer les appels d'outils ([4D.Function](../../API/FunctionClass.md) ou Object), facultative si elle est définie dans *tool* comme propriété *handler* |

Enregistre un outil avec sa fonction de gestion automatique des appels d'outils.

Le paramètre *handler* peut être :

- Un objet **4D.Function** : Fonction de gestion directe
- Un **Object** : Objet contenant une propriété `formula` correspondant au nom de la fonction de l'outil

La fonction de gestion reçoit un objet contenant les paramètres transmis par l'appel à l'outil OpenAI. Cet objet contient des paires clé-valeur dont les clés correspondent aux noms des paramètres définis dans le schéma de l'outil et dont les valeurs sont les arguments réels fournis par le modèle d'IA.

#### Exemple de Register Tool

```4D
// Exemple 1: Enregistrement simple avec gestionnaire direct
var $tool:={type: "function"; function: {name: "get_weather"; description: "Get current weather"; parameters: {type: "object"; properties: {location: {type: "string"; description: "City name"}}}}}
var $handler:=Formula(return "Sunny, 25°C in "+$1.location)

$chatHelper.registerTool($tool; $handler)

// Exemple 2: Outil avec propriété handler (pas de deuxième paramètre)
var $tool:={name: "calculate"; description: "Perform calculations"; handler: Formula(return String(Num($1.expression)))}
$chatHelper.registerTool($tool)

// Exemple 3: Utilisation de notation objet
$chatHelper.registerTool({tool: $tool; handler: $handler})

// Exemple 4: Objet avec fonction correspondant au nom d'outil
var $tool:={name: "getTime"; description: "Get current time"}
var $handlerObj:=cs.MyTimeTool.new() // classe avec fonction getTime
$chatHelper.registerTool($tool; $handlerObj)
```

### registerTools()

**registerTools**(*toolsWithHandlers* : Variant)

| Paramètres          | Type    | Description                                                     |
| ------------------- | ------- | --------------------------------------------------------------- |
| *toolsWithHandlers* | Variant | Objet ou collection contenant les outils et leurs gestionnaires |

Enregistre plusieurs outils à la fois. Le paramètre peut être :

- **Collection** : Tableau d'objets outils (avec des gestionnaires intégrés ou séparés)
- **Objet** : Objet dont les propriétés sont des noms de fonctions correspondant à des définitions d'outils
- **Objet avec attribut `tools`** : Objet contenant une collection `tools` et des propriétés formula correspondant à des noms d'outils

#### Exemple de Register Multiple Tools

##### Exemple 1 : Format collection avec des gestionnaires dans les outils

```4D
var $weatherTool:={name: "getWeather"; description: "Get current weather"; handler: Formula(return "Sunny, 25°C in "+$1.location)}
var $calculatorTool:={name: "calculate"; description: "Perform calculations"; handler: Formula(return String(Num($1.expression)))}

$chatHelper.registerTools([$weatherTool; $calculatorTool])
```

##### Exemple 2 : Format objet avec outil et gestionnaire séparés

```4D
var $toolsWithSeparateHandlers:={}
$toolsWithSeparateHandlers.getWeather:={tool : $weatherToolDefinition; handler : $weatherHandler}
$toolsWithSeparateHandlers.calculate:={tool : $calculatorToolDefinition; handler : $calculatorHandler}

$chatHelper.registerTools($toolsWithSeparateHandlers)
```

##### Exemple 3 : Objet avec attribut collection d'outils et propriétés formules (fonctions)

Classe MyTools :

```4D

Class constructor
    this.tools:=[{name: "getWeather"; description: "Get current weather"}; \
                 {name: "getTime"; description: "Get current time"}]  // Collection of tool definitions

Function getWeather($parameters: Object)
    return "Sunny, 25°C"

Function getTime($parameters: Object)
    return String(Current time)
```

```4D
$chatHelper.registerTools(cs.MyTools.new())
```

##### Exemple 4 : Format objet simple avec outils en tant que propriétés

```4D
var $tools:={}
$tools.getWeather:=$weatherTool  // Outil avec propriété handler
$tools.calculate:=$calculatorTool  // Outil avec propriété handler

$chatHelper.registerTools($tools)
```

### unregisterTool()

**unregisterTool**(*functionName* : Text)

| Paramètres     | Type | Description                              |
| -------------- | ---- | ---------------------------------------- |
| *functionName* | Text | Le nom de l'outil fonction à désinscrire |

Désenregistre un outil spécifique via son nom de fonction. Cette opération supprime l'outil de la collection d'outils enregistrés, efface son gestionnaire et le supprime des paramètres.

#### Exemple de Unregister Tool

```4D
$chatHelper.registerTool($weatherTool; $weatherHandler)
$chatHelper.unregisterTool("get_weather") // Supprime l'outil météo
```

### unregisterTools()

**unregisterTools**()

Désenregistre tous les outils en même temps. Cette opération efface tous les gestionnaires d'outils, vide la collection d'outils et supprime tous les outils des paramètres.

#### Exemple de Unregister All Tools

```4D
$chatHelper.registerTools($multipleTools)
$chatHelper.unregisterTools() // Supprimer tous les outils
```