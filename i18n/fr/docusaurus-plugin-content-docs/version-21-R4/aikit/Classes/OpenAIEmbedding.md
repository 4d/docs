---
id: openaiembedding
title: OpenAIEmbedding
---

# OpenAIEmbedding

La classe `OpenAIEmbedding` représente un encodage vectoriel (*embedding*) généré par l'API OpenAI, contenant des informations sur le vecteur et son indice dans la liste des représentations vectorielles.

## Propriétés

| Propriété   | Type        | Description                                                                                                                                        |
| ----------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `index`     | Integer     | L'indice de la représentation vectorielle dans la liste des représentations vectorielles.                                          |
| `embedding` | `4D.Vector` | Le vecteur. La longueur du vecteur dépend du modèle, comme indiqué dans le guide de la représentation vectorielle. |
| `object`    | Text        | Valeur du texte "embedding".                                                                                                       |

## Voir également

- [OpenAIEmbeddingsResult](OpenAIEmbeddingsResult.md)
