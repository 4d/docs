---
id: qr-get-info-row
title: QR Get info row
slug: /commands/qr-get-info-row
displayed_sidebar: docs
---

<!--REF #_command_.QR Get info row.Syntax-->**QR Get info row** ( *area* ; *linha* ) : Integer<!-- END REF-->
<!--REF #_command_.QR Get info row.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referência da área criada |
| linha | Integer | &#8594;  | Designa a Linha |
| Resultado | Integer | &#8592; | 0=exibir, 1=ocultar |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.QR Get info row.Summary-->O comando QR Get info row indica se *linha* se mostra o se oculta na *area*.<!-- END REF-->  

*linha* designa a linha a verificar:

* Se *linha* for igual a -1, verifica o título do relatório
* Se *linha* for igual a -2, verifica a área de detalhe do relatório
* Se *linha* for igual a -3, verifica a área do total general
* Se *linha* for um inteiro positivo, designa a linha de subtotal correspondente.

Pode utilizar as constantes do tema *QR Filas para propriedades* para designar o elemento da linha (*qr title*\= -1, *qr detail*\=-2, *qr grand total*\=-3)  
  
O resultado da função especifica se a linha está visível ou oculta. Se for igual a 1, a linha está oculta; se for igual a 0, a linha é visível.  
  
Se passa um número de *area* inválido, se gera o erro -9850.  
Se o parâmetro *linha* é incorreto, se gera o erro -9852.

#### Ver também 

[QR GET INFO COLUMN](qr-get-info-column.md)  
[QR SET INFO COLUMN](qr-set-info-column.md)  
[QR SET INFO ROW](qr-set-info-row.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 769 |
| Thread-seguro | &check; |
| Modificar variáveis | error |
| Proibido no servidor ||


