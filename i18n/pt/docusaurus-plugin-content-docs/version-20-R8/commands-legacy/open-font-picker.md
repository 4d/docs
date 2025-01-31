---
id: open-font-picker
title: OPEN FONT PICKER
slug: /commands/open-font-picker
displayed_sidebar: docs
---

<!--REF #_command_.OPEN FONT PICKER.Syntax-->**OPEN FONT PICKER**<!-- END REF-->
<!--REF #_command_.OPEN FONT PICKER.Params-->
| Este comando não requer parâmetros |  |
| --- | --- |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OPEN FONT PICKER.Summary-->O comando **OPEN FONT PICKER** mostra a caixa de diálogo de seleção de fonte do sistema .<!-- END REF-->  
  
**Nota**: Esta caixa de diálogo é modal em Windows mas não em OS X.  
  
Se o usuário seleciona uma fonte e/ou um estilo e valida a caixa de diálogo, as mudanças se aplicam a seleção atual de texto no objeto com o foco, se a propriedade "Aceitar seletor cor/fonte" está selecionada para este objeto (ver o manual de *Desenho*). Senão o comando não faz nada.  
  
Se mudar o tipo de fonte, o evento formulário On After Edit é gerado para o objeto.

#### Exemplo 

Em um formulário que quiser adicionar um botão para exibir a seleção de fonte de modo a permitir que os usuários modifiquem a fonte ou o estilo de uma área de texto variável. Tenha certeza que:

* a variável Texto tem a propriedade "Allow font/color picker" marcada .
* a propriedade "Focusable" para o botão não está marcada.

Abaixo o código do botão:

```4d
 Case of
    :(FORM Event=On Clicked)
       GOTO OBJECT(textVar) //dá o foco para a variável
       OPEN FONT PICKER
 End case
```

#### Ver também 

[OPEN COLOR PICKER](open-color-picker.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1303 |
| Thread-seguro | &cross; |


