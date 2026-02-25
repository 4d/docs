---
id: count-user-processes
title: Count user processes
slug: /commands/count-user-processes
displayed_sidebar: docs
---

<!--REF #_command_.Count user processes.Syntax-->**Count user processes**  : Integer<!-- END REF-->
<!--REF #_command_.Count user processes.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Integer | &#8592; | Número de processos abertos (com exceção dos processos kernel) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|11 SQL Release 3|Modificado|
|<6|Criado|

</details>
</div>

## Descrição 

<!--REF #_command_.Count user processes.Summary-->Count user processes devolve o número dos processos abertos direto ou indiretamente pelo usuário (processos para os quais o parâmetro *origem* devolvido pelo comando Count user processes é maior ou igual a 0).<!-- END REF-->

## Ver também 

[Count tasks](../commands/count-tasks)  
[Count users](../commands/count-users)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 343 |
| Thread-seguro | yes |


