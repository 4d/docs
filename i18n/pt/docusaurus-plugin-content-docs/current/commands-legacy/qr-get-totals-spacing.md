---
id: qr-get-totals-spacing
title: QR GET TOTALS SPACING
slug: /commands/qr-get-totals-spacing
displayed_sidebar: docs
---

<!--REF #_command_.QR GET TOTALS SPACING.Syntax-->**QR GET TOTALS SPACING** ( *area* ; *subtotal* ; *valor* )<!-- END REF-->
<!--REF #_command_.QR GET TOTALS SPACING.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referência da área |
| subtotal | Integer | &#8594;  | Nº de subtotal |
| valor | Integer | &#8592; | 0= sem espaço, 32000=insere um salto de página, >0=espaço adicionado no topo do nível de quebra, <0=incremento proporcional |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.QR GET TOTALS SPACING.Summary-->O comando QR GET TOTALS SPACING permite recuperar o valor do espaço adicionado sobre uma linha de subtotal.<!-- END REF--> Aplica unicamente em modo listado.  

*area* é a referência da área do relatório rápido.  
  
*subtotal* é o nível do subtotal (o nível de quebra) que se afetará. *subtotal* é um valor entre 1 e o número de linhas do subtotal/quebra.  
  
*valor* define o valor do espaço:

* Se *valo*r for igual a 0, no se adiciona nenhum espaço.
* Se *valor* for igual a 32000, se insere um salto de página.
* Se *valor* for um valor positivo, expressa o espaço a adicionar em píxels.
* Se *valor* for um valor negativo, expressa o espaço como uma porcentagem da linha de subtotal. Por exemplo, o valor -100 indicará um espaço debaixo da linha do subtotal correspondente a 100% da altura da linha.

Se passa um número de *area* inválido, se gera o erro -9850.  
Se o parâmetro *subtotal* for incorreto, se gera o erro -9852.

#### Ver também 

[QR SET TOTALS SPACING](qr-set-totals-spacing.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 762 |
| Thread-seguro | &cross; |
| Modificar variáveis | error |


