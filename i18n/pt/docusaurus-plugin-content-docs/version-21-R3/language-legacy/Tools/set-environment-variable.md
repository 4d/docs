---
id: set-environment-variable
title: SET ENVIRONMENT VARIABLE
slug: /commands/set-environment-variable
displayed_sidebar: docs
---

<!--REF #_command_.SET ENVIRONMENT VARIABLE.Syntax-->**SET ENVIRONMENT VARIABLE** ( *nomeVar* : Text ; *valorVar* : Text )<!-- END REF-->
<!--REF #_command_.SET ENVIRONMENT VARIABLE.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| nomeVar | Text | &#8594; | nome da variável a estabelecer. |
| valorVar | Text | &#8594; | Valor da variável ou "" para resetar para o valor padrão |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|11 SQL|Modificado|
|<6|Criado|

</details>
</div>

:::info Compatibilidade

Recomenda-se usar a classe [`4D.SystemWorker class`](../../API/SystemWorkerClass.md).

:::

## Descrição 

<!--REF #_command_.SET ENVIRONMENT VARIABLE.Summary-->O comando **SET ENVIRONMENT VARIABLE** permite fixar o valor de uma variável de ambiente em macOS e Windows.<!-- END REF--> Está projetado para ser utilizado com o comando [LAUNCH EXTERNAL PROCESS](../commands/launch-external-process).
  
Passe o nome da variável a definir em *nomVar* e seu valor em *valorVar*.

* Para obter a lista geral das variáveis de ambiente e seus possíveis valores, por favor consulte a documentação técnica de seu sistema operativo.
* Três variáveis ambiente específicas estão disponíveis para uso no contexto do comando [LAUNCH EXTERNAL PROCESS](../commands/launch-external-process): :

*\_4D\_OPTION\_CURRENT\_DIRECTORY*:   
*\_4D\_OPTION\_HIDE\_CONSOLE* (só em Windows)  
*\_4D\_OPTION\_BLOCKING\_EXTERNAL\_PROCESS*  
  
Para informação sobre estas variáveis, consulte a documentação do comando [LAUNCH EXTERNAL PROCESS](../commands/launch-external-process).

## Exemplo 

Consulte os exemplos do comando [LAUNCH EXTERNAL PROCESS](launch-external-process.md "LAUNCH EXTERNAL PROCESS").

## Ver também 

[LAUNCH EXTERNAL PROCESS](../commands/launch-external-process)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 812 |
| Thread-seguro | yes |


