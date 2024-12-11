---
id: get-printed-height
title: Get printed height
slug: /commands/get-printed-height
displayed_sidebar: docs
---

<!--REF #_command_.Get printed height.Syntax-->**Get printed height**  : Integer<!-- END REF-->
<!--REF #_command_.Get printed height.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Integer | &#8592; | Posição do marcador |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Get printed height.Summary-->O comando Get printed height devolve a altura global (em píxels) da seção impressa pelo comando [Print form](../commands/print-form.md).<!-- END REF-->

O valor devolvido estará entre 0 (a borda superior da página) e a altura total devolvida pelo comando [GET PRINTABLE AREA](get-printable-area.md) (o tamanho máximo da área de impressão). 

Se imprime uma nova seção utilizando o comando [Print form](../commands/print-form.md) , a altura da nova seção se adiciona a este valor. Se a área de impressão disponível for insuficiente para conter esta seção, é gerado uma nova página e o valor devolvido é 0.

As margens de impressão direita e esquerda não influem no valor devolvido, diferente das margens inferior e superior (as quais podem ser definidas utilizando o comando [SET PRINTABLE MARGIN](set-printable-margin.md) ).

**Nota:** para maior informação sobre gestão de impressão e terminologia em 4D, consulte a descrição do comando [GET PRINTABLE MARGIN](get-printable-margin.md).

#### Ver também 

[GET PRINTABLE AREA](get-printable-area.md)  
[Print form](../commands/print-form.md)  
[SET PRINTABLE MARGIN](set-printable-margin.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 702 |
| Thread-seguro | &check; |
| Proibido no servidor ||


