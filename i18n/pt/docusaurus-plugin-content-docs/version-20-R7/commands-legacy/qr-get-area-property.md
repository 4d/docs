---
id: qr-get-area-property
title: QR Get area property
slug: /commands/qr-get-area-property
displayed_sidebar: docs
---

<!--REF #_command_.QR Get area property.Syntax-->**QR Get area property** ( *area* ; *propriedade* ) : Integer<!-- END REF-->
<!--REF #_command_.QR Get area property.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referência da área |
| propriedade | Integer | &#8594;  | Elemento de interface |
| Resultado | Integer | &#8592; | 1-exibir, 0 - ocultar |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.QR Get area property.Summary-->O comando **QR Get area property** devolve 0 se não mostra o elemento de interface (barra de ferramentas ou barra de menus) passado em *propriedade*; do contrário, devolve 1\.<!-- END REF--> 

O comando pode ser usado só com uma área Relatório Rápido embebida em um formulário.

Pode utilizar as constantes do tema *QR Propriedades de área* em *propriedade*:

| Constante                | Valor |
| ------------------------ | ----- |
| qr view contextual menus | 7     |

Se passa um número de *area* inválido, se gera o erro -9850.  
Se o parâmetro *propriedade* for incorreto, se gera o erro -9852.

#### Ver também 

[QR SET AREA PROPERTY](qr-set-area-property.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 795 |
| Thread-seguro | &check; |
| Modificar variáveis | error |
| Proibido no servidor ||


