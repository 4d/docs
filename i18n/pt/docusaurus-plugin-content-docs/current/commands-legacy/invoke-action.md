---
id: invoke-action
title: INVOKE ACTION
slug: /commands/invoke-action
displayed_sidebar: docs
---

<!--REF #_command_.INVOKE ACTION.Syntax-->**INVOKE ACTION** ( *ação* {; *alvo*} )<!-- END REF-->
<!--REF #_command_.INVOKE ACTION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| ação | Text | &#8594;  | Nome ação padrão ou padrão incluindo parâmetro se exigido |
| alvo | Integer | &#8594;  | Define onde executar a ação: formulário atual (padrão) ou formulário principal |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.INVOKE ACTION.Summary-->O comando **INVOKE ACTION** ativa a ação padrão definida pelo parâmetro ação, opcionalmente no contexto objetivo.<!-- END REF-->

Em *ação*, passe o nome da ação padrão a executar. Pode ser uma string ou uma constante de tema *Ação estandarte*.

Todas as ações disponíveis são listadas na seção *Ações padrões* do manual de *Desenho 4D*.

**Nota**: também se oferecem ações específicas adicionais para os documentos 4D Write Pro. São detalhadas na seção *Usando ações padrão* do manual de referencia de 4D Write Pro.

##### 

Em *objetivo*, pode passar o contexto de formulário no que se deve executar a *ação*. Pode utilizar uma das seguintes constantes de tema *Ação estandarte*:

| Constante       | Tipo          | Valor | Comentário                                                                                                                                                                 |
| --------------- | ------------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ak current form | Inteiro longo | 1     | O formulário atual é o formulário onde se chamou a ação. Poderia ser o formulário principal ou um formulário tipo paleta diante do formulário principal do processo atual. |
| ak main form    | Inteiro longo | 2     | O formulário principal é o documento mais a frente ou o formulário diálogo do processo, excluindo qualquer janela flutuante ou pop up                                      |

**Nota:** se for omitido *objetivo*, é utilizado como padrão o contexto ak current form. 

Dependendo do *objetivo*, a execução do comando **INVOKE ACTION** é sincrônica ou assincrônica:

* Com ak current form como *objetivo*, o comando **INVOKE ACTION** é sincrônico; a ação é executada no ciclo atual no momento em que se chama ao comando.
* Com ak main form como *objetivo*, o comando **INVOKE ACTION** é assincrônico; a ação é executada no seguinte ciclo depois do final da execução do método objeto de formulário.

**Nota:** as ações de edição padrão (Cortar, Copiar, Colar, Selecionar tudo, Apagar, Desfazer/Refazer) ignoram o parâmetro *objetivo*, se for passado. Tais ações podem ser executadas sempre de forma sincrônica no contexto de objeto editável que tenha o foco.

O comando **INVOKE ACTION** não gera um erro, por exemplo, se a ação solicitada não estiver disponível no contexto atual. Deve validar a ação esperada utilizando o comando [Action info](action-info.md). 

#### Exemplo 1 

Se quiser executar a ação padrão **Copiar** no formulário atual:

```4d
 INVOKE ACTION(ak copy;ak current form)
```

#### Exemplo 2 

Se quiser executar uma ação padrão **Goto page** (página 3) no formulário principal:

```4d
 INVOKE ACTION(ak goto page+"?value=3";ak main form)
```

#### Ver também 

[Action info](action-info.md)  