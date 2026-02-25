---
id: wa-run-offscreen-area
title: WA Run offscreen area
slug: /commands/wa-run-offscreen-area
displayed_sidebar: docs
---

<!--REF #_command_.WA Run offscreen area.Syntax-->**WA Run offscreen area** ( *parâmetro* : Object ) : any<!-- END REF-->
<!--REF #_command_.WA Run offscreen area.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| parâmetro | Object | &#8594; | Objeto que contém os atributos da área web |
| Resultado | any | &#8592; | Valor retornado pelo método de callback |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|18 R6|Modificado|
|18 R3|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.WA Run offscreen area.Summary-->O comando **WA Run offscreen area** cria uma área web na memória que pode ser usada para carregar automaticamente e analisar as páginas web

**Nota:** Esse comando usa o motor de renderização web embebido.<!-- END REF--> .

No objeto *parâmetros*, pasesqualquer dos atributos opcionais abaixo para a área web. Estas propiedades estarão disponíveis através do comando [This ](../commands/this) dentro do método onEvent e fazem referência à instância: 

| **Propriedade <br/>** | **Tipo <br/>** | **Descrição <br/>**                                                                                                                                                                                                                                                                                                                           |
| ----------------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| url                           | text \| file object    | A URL ou arquivo a ser carregado na área web. Se omitido ou null, uma página em branco é carregada.                                                                                                                                                                                                                                                   |
| areaName                      | text                   | O nome da área web. Se omitido ou null, um nome genérico é atribuido (por exemplo, OffscreenArea1).                                                                                                                                                                                                                                                   |
| onEvent                       | object                 | Um método de callback que será lançado quando a área web estiver pronta.<br/><br/>Como padrão, o método de callback é chamado nos eventos On Load, On Unload, On End URL Loading, On Timer ou On URL Loading Error.                                                                                                                   |
| autoQuit                      | boolean                | True (valor normal) se o comando precisar parar a execução da fórmula quando acontecerem os eventos On End URL Loading ou On URL Loading Error.<br/><br/>Se false, precisa usar os comandos [CANCEL](../commands/cancel) ou [ACCEPT](../commands/accept) no método de callback ou nos métodos projeto chamados com o objeto $4d para fechar a área web. |
| timeout                       | real                   | Tempo máximo permitido (expresso em segundos) entre chamadas de evento. Se estabelecida em 0, nenhum limite é aplicado. Valor padrão: 60                                                                                                                                                                                                              |
| result                        | mixed                  | Resultado do processamento a retornar (se houver)                                                                                                                                                                                                                                                                                                     |
| <customProperty>              | mixed                  | Qualquer atributo personalizado vai estar disponível na callback ou no método $4d.                                                                                                                                                                                                                                                                    |

O comando agrega automaticamente a propriedade abaixo se for necessário:

| **Propriedade <br/>** | **Tipo** | **Descrição**                                   |
| ----------------------------- | -------- | ----------------------------------------------- |
| timeoutReached                | booleano | Adiciona valor **true** se timeout foi excedido |

Se passar um valor nulo em parâmetros, será criada uma área web em branco e depois se fechará automaticamente.

**Notas**: 

* A área web offscreen está disponível apenas durante a execução do comando **WA Run offscreen area**. Vai ser destruida automaticamente quando a execução tiver terminado.
* Métodos 4D podem ser chamados a partir do código JavaScript executado na área web. Veja *Acessar aos métodos 4D*.

Os comandos abaixo podem ser usados no método callback:

* [ACCEPT](../commands/accept)
* [CANCEL](../commands/cancel)
* [SET TIMER](../commands/set-timer)
* [WA Evaluate JavaScript](../commands/wa-evaluate-javascript)
* [WA EXECUTE JAVASCRIPT FUNCTION](../commands/wa-execute-javascript-function)
* [WA Get current URL](../commands/wa-get-current-url)
* [WA GET LAST URL ERROR](../commands/wa-get-last-url-error)
* [WA Get page content](../commands/wa-get-page-content)
* [WA Get page title](../commands/wa-get-page-title)
* [WA OPEN URL](../commands/wa-open-url)
* [WA REFRESH CURRENT URL](../commands/wa-refresh-current-url)
* [WA STOP LOADING URL](../commands/wa-stop-loading-url)

## Exemplo 

Se quiser criar e manejar uma área web offscreen usando uma função da classe OffscreenArea:

```4d
 $config:=cs.OffscreenArea.new()
 $result:=WA Run offscreen area($config)
 If($config.timeoutReached) //automaticamente retornado em caso de timeout
    ALERT("Timeout reached")
 End if
```

Na **classe OffscreenArea**:

```4d
 Class constructor
 This.url:=File("/RESOURCES/compute.html")
 This.areaName:="myWAOffscreen"
 
 Function onEvent
 Case of
    :(FORM Event.code=On End URL Loading)
       This.result:=WA Evaluate JavaScript(*;This.areaName;"myJSMethod();")
 End case
```

## Variáveis e conjuntos do sistema 

A variável de sistema OK é estabelecida como 0 se o timeout foi alcançaddo ou [CANCEL](../commands/cancel) for chamado em *onEvent*, senão é estabelecida como 1.

## Ver também 

[FORM Event](../commands/form-event)  
*Gestão programada de áreas web*  
[WA OPEN WEB INSPECTOR](../commands/wa-open-web-inspector)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1727 |
| Thread-seguro | no |
| Modificar variáveis | OK |



