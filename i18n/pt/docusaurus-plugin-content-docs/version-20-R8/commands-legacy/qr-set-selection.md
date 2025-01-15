---
id: qr-set-selection
title: QR SET SELECTION
slug: /commands/qr-set-selection
displayed_sidebar: docs
---

<!--REF #_command_.QR SET SELECTION.Syntax-->**QR SET SELECTION** ( *area* ; *esquerda* ; *superior* {; *direita* {; *inferior* }} )<!-- END REF-->
<!--REF #_command_.QR SET SELECTION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referência da área |
| esquerda | Integer | &#8594;  | Borda esquerda |
| superior | Integer | &#8594;  | margem superiro |
| direita | Integer | &#8594;  | limite direita |
| inferior | Integer | &#8594;  | limite inferior |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.QR SET SELECTION.Summary-->O comando QR SET SELECTION permite selecionar uma célula, uma fila, uma coluna ou toda uma *area* como seria feito com um mouse.<!-- END REF--> Este comando também lhe permite desmarcar a seleção atual.  
  
*esquerdo* é o número do limite esquerdo. Se *esquerdo* é igual a 0, toda a linha é selecionada.  
*superior* é o número do limite superior. Se *superior* é igual a 0, toda a coluna é selecionada.  
*direito* é o número do limite direito.  
*inferior* é o número do limite inferior.  
  
**Notas:**  
• Se *esquerdo* e *superior* são iguais a 0, toda a área é selecionada.  
• Para desmarcar tudo, passe -1 em *esquerdo, direito, superior* e *inferior*.  
  
Se passa um número de *area* inválido, se gera o erro -9850.

#### Ver também 

[QR GET SELECTION](qr-get-selection.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 794 |
| Thread-seguro | &cross; |
| Modificar variáveis | error |


