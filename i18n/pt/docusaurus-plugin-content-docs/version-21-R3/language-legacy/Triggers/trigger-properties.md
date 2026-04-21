---
id: trigger-properties
title: TRIGGER PROPERTIES
slug: /commands/trigger-properties
displayed_sidebar: docs
---

<!--REF #_command_.TRIGGER PROPERTIES.Syntax-->**TRIGGER PROPERTIES** ( *nivelTrigger* : Integer ; *dbEvent* : Integer ; *numTabela* : Integer ; *numRegistro* : Integer )<!-- END REF-->
<!--REF #_command_.TRIGGER PROPERTIES.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| nivelTrigger | Integer | &#8594; | Nível de ciclo de execução do Trigger |
| dbEvent | Integer | &#8592; | Evento de banco de dados |
| numTabela | Integer | &#8592; | Número de tabela envolvido |
| numRegistro | Integer | &#8592; | Número de registro envolvido |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|11 SQL Release 2|Modificado|
|<6|Criado|

</details>
</div>

## Descrição 

<!--REF #_command_.TRIGGER PROPERTIES.Summary-->O comando TRIGGER PROPERTIES retorna a informação sobre o nível de execução do trigger que se passa em *nivelTrigger*.<!-- END REF--> Pode utilizar [Trigger level](../commands/trigger-level) junto com Trigger level para realizar diferentes ações em função da cascada do trigger. Para maior informação, consulte .  

Se passa um nível de execução de trigger inexistente, o comando retorna 0 (zero) em todos os parâmetros.  
  
A natureza do evento de banco de dados para o nível de execução do trigger é retornado em *dbEvent*. As seguintes constantes pré-definidas são oferecidas no tema *\_o\_LAST SUBRECORD*:  
  
| Constante                       | Tipo          | Valor |
| ------------------------------- | ------------- | ----- |
| On Deleting Record Event        | Inteiro longo | 3     |
| On Saving Existing Record Event | Inteiro longo | 2     |
| On Saving New Record Event      | Inteiro longo | 1     |
  
  
O número de tabela e de registro para o registro relacionado pelo evento de banco de dados para o nível de execução do trigger se retornan em *numTabela* e *numRegistro*.

## Ver também 

*Sobre Números de Registros*  
[Trigger event](../commands/trigger-event)  
[Trigger level](../commands/trigger-level)  
*Triggers*  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 399 |
| Thread-seguro | yes |


