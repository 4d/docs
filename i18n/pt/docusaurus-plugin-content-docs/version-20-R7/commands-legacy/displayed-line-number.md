---
id: displayed-line-number
title: Displayed line number
slug: /commands/displayed-line-number
displayed_sidebar: docs
---

<!--REF #_command_.Displayed line number.Syntax-->**Displayed line number**  : Integer<!-- END REF-->
<!--REF #_command_.Displayed line number.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Integer | &#8592; | Nº da linha sendo exibida |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Displayed line number.Summary-->O comando Displayed line number funciona unicamente no contexto do evento de formulário On Display Detail.<!-- END REF--> Retorna o número da linha que estiver sendo processada enquanto uma lista de registros é mostrada em tela. Se Displayed line number for chamada quando não se mostra uma lista, retorna 0.  
  
Se a linha mostrada não estiver vazia (quando estiver associada a um registro), o valor retornado por Displayed line number é idêntico ao valor retornado por [Selected record number](selected-record-number.md "Selected record number").  
  
Do mesmo jeito que [Selected record number](selected-record-number.md), Displayed line number começa em 1\. Este comando é útil quando deseja aplicar um processo a cada linha de um formulário listado ou de um list-box mostrado em tela, incluindo as linhas vazias.

#### Exemplo 

Este exemplo lhe permite aplicar uma cor alternativa em um formulário listado mostrado em tela, inclusive para as linhas sem registros: 

```4d
  //Método de formulário listado
 If(Form event code=On Display Detail)
    If(Displayed line number% 2=0)
  //Negro sobre branco para o texto das linhas pares
       OBJECT SET RGB COLORS([Tabela 1]Campo1;-1;0x00FFFFFF)
    Else
  //Negro sobre azul claro para as linhas ímpares
       OBJECT SET RGB COLORS([Tabela 1]Campo1;-1;0x00E0E0FF)
    End if
 End if
```

![](../assets/en/commands/pict32598.en.png)

#### Ver também 

[Form event code](form-event-code.md)  
[Selected record number](selected-record-number.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 897 |
| Thread-seguro | &check; |
| Proibido no servidor ||


