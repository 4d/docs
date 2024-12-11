---
id: open-color-picker
title: OPEN COLOR PICKER
slug: /commands/open-color-picker
displayed_sidebar: docs
---

<!--REF #_command_.OPEN COLOR PICKER.Syntax-->**OPEN COLOR PICKER** {( *textOrBackground* )}<!-- END REF-->
<!--REF #_command_.OPEN COLOR PICKER.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| textOrBackground | Integer | &#8594;  | 0 ou se omite = cor do texto, 1 = cor do fundo do texto |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OPEN COLOR PICKER.Summary-->O comando **OPEN COLOR PICKER** mostra a caixa de diálogo de seleção de cor do sistema.<!-- END REF-->  
  
**Nota**: Esta caixa de diálogo é modal em Windows mas não em OS X.  
  
Se o usuário seleciona uma cor e valida a caixa de diálogo, esta cor se aplica a seleção atual de texto no objeto com o foco, se a propriedade "Aceitar seletor cor/fonte" está selecionada para este objeto (ver o manual de *Desenho*).  
  
Se passar 0 no parâmetro *textOFondo* ou omite este parâmetro, o color selecionado se aplica ao texto. Se passa 1 em *textoFundo*, esta cor se aplica ao fundo do texto.  
  
Se a cor mudou, o evento formulário On After Edit é gerado para o objeto.

#### Ver também 

[OPEN FONT PICKER](open-font-picker.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1304 |
| Thread-seguro | &check; |
| Proibido no servidor ||


