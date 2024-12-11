---
id: qr-set-borders
title: QR SET BORDERS
slug: /commands/qr-set-borders
displayed_sidebar: docs
---

<!--REF #_command_.QR SET BORDERS.Syntax-->**QR SET BORDERS** ( *area* ; *coluna* ; *linha* ; *borda* ; linha | nivel  {; *cor*} )<!-- END REF-->
<!--REF #_command_.QR SET BORDERS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referência da área |
| coluna | Integer | &#8594;  | Número de coluna |
| linha | Integer | &#8594;  | Nº da linha |
| borda | Integer | &#8594;  | Valor composto da borda |
| linha &#124; nivel | Inteiro longo | &#8594;  | Largura da linha |
| cor | Integer | &#8594;  | Cor da linha |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.QR SET BORDERS.Summary-->O comando QR SET BORDERS permite definir o estilo da borda de uma célula dada.<!-- END REF-->   
  
*area* é a referência da área do relatório rápido.  
  
*coluna* é o número da coluna da célula.  
  
*linha* é o número de linha da célula.  
 • se *linha* é igual a -1, o título do relatório é afetado  
 • se *linha* é igual a -2, o detalhe do relatório é afetado  
 • se *linha* é igual a -3, o total geral do relatório é afetado   
 • se *linha* é um inteiro positivo, designa a linha do subtotal correspondente.

Pode utilizar as constantes do tema *QR Filas para propriedades* para designar o elemento da linha (*qr title= -1, qr detail=-2, qr grand total=-3*).  
  
*borda* é um valor composto que indica as bordas da célula a modificar:  
  
* 1 indica a borda esquerda
* 2 indica a borda superior
* 4 indica a borda direita
* 8 indica a borda inferior
* 16 indica a borda interior vertical
* 32 indica a borda interior horizontal.
Pode utilizar as constantes do tema *QR Bordes* para designar o elemento da borda.  
  
 Por exemplo, se passa 5 na *borda* as bordas esquerda e direita serão afetadas.  
  
*largura* é a largura da linha:  
  
* 0 indica que não há linha
* 1 indica uma largura de linha de 1/4 ponto
* 2 indica uma largura de linha de 1/2 ponto
* 3 indica uma largura de linha de 1 ponto
* 4 indica uma largura de linha de 2 pontos

*cor* é a cor da linha:  
  
 \* Se *cor* é um valor positivo, indica um cor específico.  
 \* Se *cor* é igual a 0, a cor é negro.  
 \* Se *cor* é igual a -1, a cor não muda.  
  
**Nota**: a cor automática é negro.  
  
Se passa um número de *area* inválido, se gera o erro -9850.  
Se o parâmetro *coluna* é incorreto, se gera o erro -9852.  
Se o parâmetro *linha* é incorreto, se gera o erro -9853.  
Se o parâmetro *borda* é incorreto, se gera o erro -9854.  
Se o parâmetro *largura* é incorreto, se gera o erro -9855.

#### Ver também 

[QR GET BORDERS](qr-get-borders.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 797 |
| Thread-seguro | &check; |
| Modificar variáveis | error |
| Proibido no servidor ||


