---
id: REST_requests
title: Sobre petições REST
---

As estrutyuras abaixo são compatíveis com petições REST:

| URI                                                              | Recurso                                                                                                           | /? ou &\{filter\} (saída)                                                                                                                                    |
| ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| http://{servername}:{port}/rest/ | [\{dataClass\}](dataClass.md)                                                                                   | [$filter]($filter.md), [$attributes]($attributes.md), [$skip]($skip.md), [$method=...]($method.md)... |
|                                                                  | [\{dataClass\}](dataClass.md)/[$entityset/\{entitySetID\}]($entityset.md#entitysetentitysetid)                | [$method=...]($method.md)                                                                                                                             |
|                                                                  | [\{dataClass\}({key})](dataClass.md#dataclasskey)                                            | [$attributes]($attributes.md)                                                                                                                                                                         |
|                                                                  | [\{dataClass\}:\{attribute\}(value)](dataClass.md#dataclassattributevalue) |                                                                                                                                                                                                       |

Todas as petições REST devem conter os parâmetros URI e Resource, mas o parâmetro Subresource (que filtra os dados retornados) é opcional.

Como com todas as URIs, o primeiro parâmetro é definido por um “?” e todos os parâmetros subsequentes por “&”. Por exemplo:

`GET  /rest/Person/?$filter="lastName!=Jones"&$method=entityset&$timeout=600`

> Pode colocar todos os valores entre aspas para evitar ambiguidades. Por exemplo, no exemplo anterior, poderíamos colocar o valor para o último nome em aspas simples: "lastName!='Jones'".

Os parâmetros permitem que manipule dados em dataclasses em seu projeto 4D. Además de recuperar datos mediante los métodos HTTP `GET`, también se pueden añadir, actualizar y eliminar entidades de una clase de datos utilizando los métodos HTTP `POST`.

Se quiser que os dados sejam retornados em um array em vez de JSON, use o parâmetro [`$asArray`]($asArray.md).

## Estado e resposta REST

Com cada petição REST, o servidor retorna o estado e uma resposta (com ou sem um erro).

### Estado da petição

Com cada petição REST, se obtém o estado junto com a resposta. Abaixo estão alguns estados que podem surgir:

| Estado                    | Descrição                                                                                         |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| 0                         | Petição não processada (servidor pode não ter iniciado).       |
| 200 OK                    | Petição processada sem erro.                                                      |
| 401 Unauthorized          | Erro de autorização (verifique as permissões do usuário).      |
| 402 No session            | Número máximo de sessões foi alcançado.                                           |
| 404 Not Found             | A classe de dados não é acessível via REST ou o conjunto de entidades não existe. |
| 500 Internal Server Error | Erro processando a petição REST.                                                  |

### Resposta

A resposta (em formato JSON) varia dependendo da petição.

Se um erro surgir, será enviado junto com a resposta do servidor ou será a resposta do servidor.
