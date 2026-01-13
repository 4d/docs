---
id: openaiembeddingsapi
title: OpenAIEmbeddingsAPI
---

# OpenAIEmbeddingsAPI

L'interface `OpenAIEmbeddingsAPI` fournit des fonctionnalités pour créer des représentations vectorielles (*embeddings*) en utilisant l'API de l'OpenAI.

https://platform.openai.com/docs/api-reference/embeddings

## Fonctions

### create()

**create**(*input* : Text; *model*: Text; *parameters* : OpenAIEmbeddingsParameters) : OpenAIEmbeddingsResult

Crée une représentation vectorielle pour l'entrée, le modèle et les paramètres fournis.

| Paramètre    | Type                                                        | Description                                                                                            |
| ------------ | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| *input*      | Text ou Collection de textes                                | L'entrée à vectoriser.                                                                 |
| *model*      | Text                                                        | Le [modèle à utiliser](https://platform.openai.com/docs/guides/embeddings#embedding-models)            |
| *parameters* | [OpenAIEmbeddingsParameters](OpenAIEmbeddingsParameters.md) | Les paramètres permettant de personnaliser la requête de représentations vectorielles. |
| Résultat     | [OpenAIEmbeddingsResult](OpenAIEmbeddingsResult.md)         | Les représentations vectorielles                                                                       |

#### Exemples d'utilisation

##### Obtenir un vecteur pour une entrée de texte unique

```4d
var $result:=$client.embeddings.create("it rains cats and dogs"; "text-embedding-ada-002")
var $vector: 4D.Vector:=$result.vector
// ou var $embedding: cs.AIKit.OpenAIEmbedding:=$result.embedding
```

##### Obtenir des vecteurs pour une collection d'entrées de texte

```4d
var $inputs:=["it rains cats and dogs" ; "il pleut à boire debout"]
var $result:=$client.embeddings.create($inputs; "text-embedding-ada-002")
var $vectors : Collection:=$result.vectors // collection de 4D.Vector
```

##### Utiliser un autre service

> Avant d'utiliser les représentations vectorielles avec un service spécifique, veuillez consulter sa documentation pour vérifier si les *embeddings* sont pris en charge et sélectionner le modèle de représentation vectorielle approprié.

Par exemple, pour Mistral, utilisez [mistral-embed ou codestral-embed](https://docs.mistral.ai/capabilities/embeddings/)

```4d
var $result:=$client.embeddings.create($inputs; "mistral-embed")
```
