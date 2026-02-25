---
id: form-unload
title: FORM UNLOAD
slug: /commands/form-unload
displayed_sidebar: docs
---

<!--REF #_command_.FORM UNLOAD.Syntax-->**FORM UNLOAD**<!-- END REF-->
<!--REF #_command_.FORM UNLOAD.Params-->
<div class="no-index">

| Este comando não requer parâmetros |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|14|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.FORM UNLOAD.Summary-->O comando **FORM UNLOAD** libera da memória o formulário atual designado utilizando o comando [FORM LOAD](../commands/form-load).<!-- END REF-->

Chamar este comando é necessário quando se utiliza o comando [FORM LOAD](../commands/form-load) fora do contexto de impressão (no caso da impressão, o formulário atual é novamente fechado de forma automática quando o comando for chamado [CLOSE PRINTING JOB](../commands/close-printing-job)).

## Ver também 

[FORM LOAD](../commands/form-load)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1299 |
| Thread-seguro | no |



