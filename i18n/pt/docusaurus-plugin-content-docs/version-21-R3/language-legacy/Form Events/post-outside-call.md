---
id: post-outside-call
title: POST OUTSIDE CALL
slug: /commands/post-outside-call
displayed_sidebar: docs
---

<!--REF #_command_.POST OUTSIDE CALL.Syntax-->**POST OUTSIDE CALL** ( *processo* : Integer )<!-- END REF-->
<!--REF #_command_.POST OUTSIDE CALL.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| processo | Integer | &#8594; | número de processo |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|16 R5|Renomear|
|<6|Criado|

</details>
</div>

## Nota de compatibilidade 

<!--REF #_command_.POST OUTSIDE CALL.Summary-->Esse comando era chamado **CALL PROCESS** em lançamentos 4D anteriores.<!-- END REF--> 

## Descrição 

POST OUTSIDE CALL chama ao formulário mostrado na janela do primeiro plano de *processo*.  

**Importante**: POST OUTSIDE CALL só funciona entre processos que se executam no mesmo equipo.  
  
 Se chamar a um processo que não existe, não passa nada.

 Se *processo* (o processo chamado) não está mostrando um formulário atualmente, não passa nada. O formulário mostrado no processo chamado recebe um evento [Outside call](outside-call.md "Outside call"). Este evento deve ter sido selecionado para este formulário na janela **Propriedades do formulário** do ambiente Desenho, e você deve administrar o evento no método de formulário. Se o evento não estiver selecionado ou se não for administrado no método de formulário, o comando não faz nada.  
  
Para se comunicar entre processos que não mostram formulários, utilize os comandos [GET PROCESS VARIABLE](../commands/get-process-variable) e [SET PROCESS VARIABLE](../commands/set-process-variable).

**Dica:** **POST OUTSIDE CALL** aceita a sintaxe alterna **POST OUTSIDE CALL**(-1). Para não tornar lenta a execução dos métodos, 4D não redesenha as variáveis interprocesso cada vez que são modificadas. Se passar -1 ao invés de um número de referência de processo no parâmetro *processo*, 4D não chama nenhum processo. Ao invés disso, redesenha todas as variáveis interprocesso mostradas atualmente em todas as janelas de todos os processos que executam na mesma máquina.

## Exemplo 

Ver o exemplo de [On Exit Database Method](metodo-banco-de-dados-on-exit.md "On Exit Database Method").

## Ver também 

[Form event code](../commands/form-event-code)  
[GET PROCESS VARIABLE](../commands/get-process-variable)  
[SET PROCESS VARIABLE](../commands/set-process-variable)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 329 |
| Thread-seguro | no |
| Proibido no servidor ||



