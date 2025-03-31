---
id: spell-checking
title: SPELL CHECKING
slug: /commands/spell-checking
displayed_sidebar: docs
---

<!--REF #_command_.SPELL CHECKING.Syntax-->**SPELL CHECKING**<!-- END REF-->
<!--REF #_command_.SPELL CHECKING.Params-->
| Este comando não requer parâmetros |  |
| --- | --- |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SPELL CHECKING.Summary-->O comando **SPELL CHECKING** ativa a revisão ortográfica de campo ou variável que tem o foco no formulário em tela.<!-- END REF--> O objeto verificado deve ser de tipo Alfa ou Texto.

**Nota:** se deseja ativar o corretor ortográfico clicando no botão no formulário, tenha certeza de que este botão nãoo tenha a propriedade "enfocável".

A verificação ortográfica começa com a primeira palavra de campo ou variável. Se for detectada uma palavra desconhecida, aparece a caixa de diálogo de correção (para saber mais, consulte o Manual de Desenho de 4D). 4D utiliza o dicionario atual (correspondente a linguagem da aplicação) a não ser que tenha utilizado o comando [SPELL SET CURRENT DICTIONARY](spell-set-current-dictionary.md).

**Aten** **ção:** o comando **SPELL CHECKING** afeta o texto que está sendo introduzido no formulário, e não a fonte de dados associada (campo ou variável). Isto significa que é chamado a este comando desde os eventos de formulário On Data Change ou On Losing Focus (não recomendado), isto não afetará o texto armazenado já que 4D tenha sido assignado o texto introduzido a fonte de dados. Neste caso, é necessário atribuir o resultado editado a fonte de dados, usando o comando [Get edited text](get-edited-text.md). Por exemplo:  

```4d
 If(Form event code=On Data Change)
    SPELL CHECKING
    theVariable:=Get edited text
 End if
```

#### Ver também 

[SPELL CHECK TEXT](spell-check-text.md)  
[SPELL SET CURRENT DICTIONARY](spell-set-current-dictionary.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 900 |
| Thread-seguro | &cross; |


