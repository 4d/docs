---
id: wa-run-offscreen-area
title: WA Run offscreen area
slug: /commands/wa-run-offscreen-area
displayed_sidebar: docs
---

<!--REF #_command_.WA Run offscreen area.Syntax-->**WA Run offscreen area** ( *parâmetro* ) : any<!-- END REF-->
<!--REF #_command_.WA Run offscreen area.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| parâmetro | Object | &#8594;  | Objeto que contém os atributos da área web |
| Resultado | any | &#8592; | Valor retornado pelo método de callback |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.WA Run offscreen area.Summary-->O comando **WA Run offscreen area** cria uma área web na memória que pode ser usada para carregar automaticamente e analisar as páginas web

**Nota:** Esse comando usa o motor de renderização web embebido.<!-- END REF--> .

No objeto *parâmetros*, pasesqualquer dos atributos opcionais abaixo para a área web. Estas propiedades estarão disponíveis através do comando [This ](this.md) dentro do método onEvent e fazem referência à instância: 

| **Propriedade <br/>** | **Tipo <br/>** | **Descrição <br/>**                                                                                                                                                                                                                                                                                                                           |
| ----------------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| url                           | text \| file object    | A URL ou arquivo a ser carregado na área web. Se omitido ou null, uma página em branco é carregada.                                                                                                                                                                                                                                                   |
| areaName                      | text                   | O nome da área web. Se omitido ou null, um nome genérico é atribuido (por exemplo, OffscreenArea1).                                                                                                                                                                                                                                                   |
| onEvent                       | object                 | Um método de callback que será lançado quando a área web estiver pronta.<br/><br/>Como padrão, o método de callback é chamado nos eventos On Load, On Unload, On End URL Loading, On Timer ou On URL Loading Error.                                                                                                                   |
| autoQuit                      | boolean                | True (valor normal) se o comando precisar parar a execução da fórmula quando acontecerem os eventos On End URL Loading ou On URL Loading Error.<br/><br/>Se false, precisa usar os comandos [CANCEL](cancel.md) ou [ACCEPT](accept.md) no método de callback ou nos métodos projeto chamados com o objeto $4d para fechar a área web. |
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

* [ACCEPT](accept.md)
* [CANCEL](cancel.md)
* [SET TIMER](set-timer.md)
* [WA Evaluate JavaScript](wa-evaluate-javascript.md)
* [WA EXECUTE JAVASCRIPT FUNCTION](wa-execute-javascript-function.md)
* [WA Get current URL](wa-get-current-url.md)
* [WA GET LAST URL ERROR](wa-get-last-url-error.md)
* [WA Get page content](wa-get-page-content.md)
* [WA Get page title](wa-get-page-title.md)
* [WA OPEN URL](wa-open-url.md)
* [WA REFRESH CURRENT URL](wa-refresh-current-url.md)
* [WA STOP LOADING URL](wa-stop-loading-url.md)

#### Exemplo 

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

#### Variáveis e conjuntos do sistema 

A variável de sistema OK é estabelecida como 0 se o timeout foi alcançaddo ou [CANCEL](cancel.md) for chamado em *onEvent*, senão é estabelecida como 1.

#### Ver também 

[FORM Event](../commands/form-event.md)  
*Gestão programada de áreas web*  
[WA OPEN WEB INSPECTOR](wa-open-web-inspector.md)  