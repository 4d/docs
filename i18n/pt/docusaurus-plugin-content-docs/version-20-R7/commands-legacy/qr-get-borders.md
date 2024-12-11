---
id: qr-get-borders
title: QR GET BORDERS
slug: /commands/qr-get-borders
displayed_sidebar: docs
---

<!--REF #_command_.QR GET BORDERS.Syntax-->**QR GET BORDERS** ( *area* ; *coluna* ; *linha* ; *borda* ; linha | nivel  {; *cor*} )<!-- END REF-->
<!--REF #_command_.QR GET BORDERS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referência da área |
| coluna | Integer | &#8594;  | Número de coluna |
| linha | Integer | &#8594;  | Número da Linha |
| borda | Integer | &#8594;  | Border value |
| linha &#124; nivel | Integer | &#8592; | Grossura da linha |
| cor | Integer | &#8592; | Cor da borda |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.QR GET BORDERS.Summary-->O comando QR GET BORDERS permite recuperar o estilo do borda de uma célula determinada.<!-- END REF-->   
  
*area* é a referência da área do relatório rápido.  
*coluna* é o número de coluna da célula.  
*linha* designa o número de fila da célula.

* passe um valor inteiro positivo para designar o nível (ruptura) subtotal correspondente que está afetado.
* passe uma das seguintes constantes do tema *QR Filas para propriedades*:  

| Constante      | Tipo          | Valor |  
| -------------- | ------------- | ----- |  
| qr detail      | Inteiro longo | \-2   |  
| qr grand total | Inteiro longo | \-3   |  
| qr title       | Inteiro longo | \-1   |

*borda* é o valor que indica que borda da célula se afeta. Passe uma das constantes do tema *QR Bordes*:  

| Constante                   | Tipo          | Valor |
| --------------------------- | ------------- | ----- |
| qr bottom border            | Inteiro longo | 8     |
| qr inside horizontal border | Inteiro longo | 32    |
| qr inside vertical border   | Inteiro longo | 16    |
| qr left border              | Inteiro longo | 1     |
| qr right border             | Inteiro longo | 4     |
| qr top border               | Inteiro longo | 2     |

  
**Nota**: diferente do comando [QR SET BORDERS](qr-set-borders.md), QR GET BORDERS não aceita um valor acumulado. Deve provar por separado todos os parâmetros para ter uma descrição geral da borda da célula.  
  
*grossura* é a largura de linha:  
  
 \* 0 indica que não há linha  
 \* 1 indica uma largura de linha de 1/4 ponto  
 \* 2 indica uma largura de linha de 1/2 ponto  
 \* 3 indica uma largura de linha de 1 ponto  
 \* 4 indica uma largura de linha de 2 pontos  
  
*cor* é a cor da linha; devolve o valor da cor aplicado à linha. 

Se passa um número de *área* inválido, se gera o erro -9850.  
Se o parâmetro *coluna* é incorreto, se gera o erro -9852.  
Se o parâmetro *linha* é incorreto, se gera o erro -9853.  
Se o parâmetro *borda* é incorreto, se gera o erro -9854.

#### Ver também 

[QR SET BORDERS](qr-set-borders.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 798 |
| Thread-seguro | &check; |
| Modificar variáveis | error |
| Proibido no servidor ||


