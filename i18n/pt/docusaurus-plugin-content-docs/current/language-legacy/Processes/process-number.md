---
id: process-number
title: Process number
slug: /commands/process-number
displayed_sidebar: docs
---

<!--REF #_command_.Process number.Syntax-->**Process number** ( *name* : Text {; *} ) : Integer<br/>**Process number** ( *id* : Text {; *} ) : Integer<!-- END REF-->

<!--REF #_command_.Process number.Params-->

| Parâmetro | Tipo     |                             | Descrição                                                             |
| --------- | -------- | --------------------------- | --------------------------------------------------------------------- |
| name      | Text     | &#8594; | Nome do processo para o qual se deseja recuperar o número do processo |
| id        | Text     | &#8594; | ID do processo para o qual se deseja recuperar o número do processo   |
| \*        | Operador | &#8594; | Retorna o número do processo do servidor                              |
| Resultado | Integer  | &#8592; | Process number                                                        |

<!-- END REF-->

<details><summary>História</summary>

| Release | Mudanças                |
| ------- | ----------------------- |
| 20 R7   | Suporte do parâmetro id |

</details>

## Descrição

<!--REF #_command_.Process number.Summary-->The `Process number` command returns the number of the process whose *name* or *id* you pass in the first parameter<!-- END REF-->The `Process number` command returns the number of the process whose *name* or *id* you pass in the first parameter. Se nenhum processo for encontrado, `Process number` retornará 0.

O parâmetro opcional \* permite que você recupere, de um 4D remoto, o número de um processo executado no servidor. Nesse caso, o valor retornado é negativo. Essa opção é especialmente útil ao usar os comandos [GET PROCESS VARIABLE](../commands/get-process-variable), [SET PROCESS VARIABLE](../commands/set-process-variable) e [VARIABLE TO VARIABLE](../commands/variable-to-variable).

Se o comando for executado com o parâmetro \* de um processo no computador do servidor, o valor retornado será positivo.

## Veja também

[GET PROCESS VARIABLE](../commands/get-process-variable)\
[Process state](../commands/process-state)\
[SET PROCESS VARIABLE](../commands/set-process-variable)

## Propriedades

|                   |     |
| ----------------- | --- |
| Número de comando | 372 |
| Thread safe       | sim |



