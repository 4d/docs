---
id: qr-get-totals-data
title: QR GET TOTALS DATA
slug: /commands/qr-get-totals-data
displayed_sidebar: docs
---

<!--REF #_command_.QR GET TOTALS DATA.Syntax-->**QR GET TOTALS DATA** ( *area* ; *numColuna* ; *numQuebra* ; *operador* ; *texto* )<!-- END REF-->
<!--REF #_command_.QR GET TOTALS DATA.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referência da área |
| numColuna | Integer | &#8594;  | Nº da coluna |
| numQuebra | Integer | &#8594;  | Número de quebra |
| operador | Integer | &#8592; | Valor do operador para a célula |
| texto | Text | &#8592; | Conteúdo da célula |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.QR GET TOTALS DATA.Summary-->##### List Mode 

O comando QR GET TOTALS DATA permite recuperar o conteúdo de uma linha de quebra específica.<!-- END REF-->  
  
*area* é a referencia da área do relatório rápido.  
  
*numColuna* é o número da coluna da célula cujos dados serão recuperados.  
*numQuebra* é o número da linha de quebra cujos dados serão recuperados (subtotal ou total geral). Para uma linha de subtotal, *numQuebra* corresponde ao número da linha. Para o total geral, *numQuebra* vale -3 (também pode utilizar a constante *qr grand total*).  

*operador* devolve a soma de todos os operadores presentes na célula. Pode utilizar as constantes do tema *QR Operadores* para tratar os valores devolvidos:  

| Constante             | Tipo          | Valor |
| --------------------- | ------------- | ----- |
| qr sum                | Inteiro longo | 1     |
| qr average            | Inteiro longo | 2     |
| qr min                | Inteiro longo | 4     |
| qr max                | Inteiro longo | 8     |
| qr count              | Inteiro longo | 16    |
| qr standard deviation | Inteiro longo | 32    |
  
  
Se *operador* devolve 0, a célula não contém nenhum operador.  
  
*texto* devolve o texto na célula.  
  
**Nota**: *operador* e *texto* são mutuamente exclusivos, de maneira que só um dos dois parâmetros devolve um valor.

##### Relatório de tabela cruzada 

O comando QR GET TOTALS DATA permite recuperar o conteúdo de una célula específica.  
  
*area* é a referência da área do relatório rápido.  
  
*numColuna* é o número da coluna da célula cujos dados vão a ser recuperados.  
  
*numQuebra* é o número da linha da célula cujos dados vão a ser recuperados.  

*operador* devolve a soma de todos os operadores presentes na célula. Pode utilizar as constantes do tema *QR Operadores* para processar o valor devolvido (ver o parágrafo anterior).  
  
*texto* devolve o texto na célula.  
  
A seguinte imagem mostra como os parâmetros *numColuna* e *numQuebra* são combinados em uma tabela cruzada:  
  
![](../assets/en/commands/pict30726.en.png)  
  
Se passa um número de *area* inválido, se gera o erro -9850.  
Se o parâmetro *numColuna* é incorreto, se gera o erro -9852.  
Se o parâmetro *numQuebra* é incorreto, se gera o erro -9853.

#### Ver também 

[QR SET TOTALS DATA](qr-set-totals-data.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 768 |
| Thread-seguro | &check; |
| Modificar variáveis | error |
| Proibido no servidor ||


