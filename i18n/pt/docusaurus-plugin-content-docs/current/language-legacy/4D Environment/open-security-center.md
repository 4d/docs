---
id: open-security-center
title: OPEN SECURITY CENTER
slug: /commands/open-security-center
displayed_sidebar: docs
---

<!--REF #_command_.OPEN SECURITY CENTER.Syntax-->**OPEN SECURITY CENTER**<!-- END REF-->
<!--REF #_command_.OPEN SECURITY CENTER.Params-->
<div class="no-index">

| Este comando não requer parâmetros |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|11 SQL|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.OPEN SECURITY CENTER.Summary-->O comando OPEN SECURITY CENTERmostra a janela do Centro de segurança e manutenção (CSM).<!-- END REF--> Para saber mais veja a página *Centro de segurança e manutenção*.   
  
Dependendo dos privilegios de acesso do usuário atual, certas funções disponíveis nesta janela poderiam ser desativadas.

**Nota:** 

* este comando funciona com o mesmo princípio que uma chamada a [DIALOG](../commands/dialog) com o parâmetro *\**: o CSM se mostra em uma janela e o comando devolve imediatamente o controle do código 4D. Se o processo atual termina, a janela é fechada automaticamente mediante a simulação de um [CANCEL](../commands/cancel). Por isso deve gerenciar sua visualização através do código do processo em execução.
* Este comando não pode ser executado em uma aplicação 4D remota.

## Ver também 

[VERIFY CURRENT DATA FILE](../commands/verify-current-data-file)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1018 |
| Thread-seguro | no |



