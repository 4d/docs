---
id: process-number
title: Process number
slug: /commands/process-number
displayed_sidebar: docs
---

<!--REF #_command_.Process number.Syntax-->**Process number** ( *name* {; *} ) : Integer<br/>**Process number** ( *id* {; *} ) : Integer<!-- END REF-->

<!--REF #_command_.Process number.Params-->

| Parâmetro | Tipo     |   | Descrição                                                             |
| --------- | -------- | - | --------------------------------------------------------------------- |
| name      | Text     | → | Nome do processo para o qual se deseja recuperar o número do processo |
| id        | Text     | → | ID do processo para o qual se deseja recuperar o número do processo   |
| \*        | Operador | → | Retorna o número do processo do servidor                              |
| Resultado | Integer  | ← | Process number                                                        |

<!-- END REF-->

<details><summary>História</summary>

| Release | Mudanças                |
| ------- | ----------------------- |
| 20 R7   | Suporte do parâmetro id |

</details>

#### Descrição

<!--REF #_command_.Process number.Summary-->`Process number` returns the number of the process whose *name* or *id* you pass in the first parameter<!-- END REF-->`Process number` retorna o número do processo cujo *name* ou *id* você passou no primeiro parâmetro. Se nenhum processo for encontrado, `Process number` retornará 0.

O parâmetro opcional \* permite que você recupere, de um 4D remoto, o número de um processo executado no servidor. Nesse caso, o valor retornado é negativo. Essa opção é especialmente útil ao usar os comandos [GET PROCESS VARIABLE](../commands-legacy/get-process-variable.md), [SET PROCESS VARIABLE](../commands-legacy/set-process-variable.md) e [VARIABLE TO VARIABLE](../commands-legacy/variable-to-variable.md).

Se o comando for executado com o parâmetro \* de um processo no computador do servidor, o valor retornado será positivo.

#### Veja também

[GET PROCESS VARIABLE](../commands-legacy/get-process-variable.md)\
[Process state](../commands-legacy/process-state.md)\
[SET PROCESS VARIABLE](../commands-legacy/set-process-variable.md)

#### Propriedades

|                |                                 |
| -------------- | ------------------------------- |
| Command number | 372                             |
| Thread safe    | &amp;check; |
