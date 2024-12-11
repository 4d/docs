---
id: qr-get-selection
title: QR GET SELECTION
slug: /commands/qr-get-selection
displayed_sidebar: docs
---

<!--REF #_command_.QR GET SELECTION.Syntax-->**QR GET SELECTION** ( *area* ; *esquerda* ; *superior* {; *direita* {; *inferior* }} )<!-- END REF-->
<!--REF #_command_.QR GET SELECTION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referência da área |
| esquerda | Integer | &#8592; | Limite esquerdo |
| superior | Integer | &#8592; | Limite superior |
| direita | Integer | &#8592; | Limite direito |
| inferior | Integer | &#8592; | Limite inferior |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.QR GET SELECTION.Summary-->O comando QR GET SELECTION devolve as coordenadas da seleção atual de *area*.<!-- END REF-->  
  
*esquerdo* devolve o número da coluna que é o limite esquerdo da seleção. Se *esquerdo* é igual a 0, toda a linha é selecionada.  
  
*superior* devolve o número da linha que é o limite superior da seleção. Se *superior* é igual a 0, toda a coluna é selecionada.  
  
**Nota**: se *esquerdo* e *superior* são iguais a 0, toda a área é selecionada.  
  
*direito* é o número da coluna que é o limite direito da seleção.  
  
*inferior* é o número da fila que é o limite superior da seleção.  
  
**Nota**: se não houver seleção, os parâmetros *esquerdo*, *superior, direito* e *inferior* tomam o valor -1.  
  
Se passa um número de *area* inválido, se gera o erro -9850.

#### Ver também 

[QR SET SELECTION](qr-set-selection.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 793 |
| Thread-seguro | &check; |
| Modificar variáveis | error |
| Proibido no servidor ||


