---
id: qr-set-text-property
title: QR SET TEXT PROPERTY
slug: /commands/qr-set-text-property
displayed_sidebar: docs
---

<!--REF #_command_.QR SET TEXT PROPERTY.Syntax-->**QR SET TEXT PROPERTY** ( *area* ; *numColuna* ; *numLinha* ; *propriedade* ; *valor* )<!-- END REF-->
<!--REF #_command_.QR SET TEXT PROPERTY.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referência da área |
| numColuna | Integer | &#8594;  | Nº da coluna |
| numLinha | Integer | &#8594;  | N° da linha |
| propriedade | Integer | &#8594;  | Valor do operador para a célula |
| valor | Integer, Text | &#8594;  | Valor para a propriedade selecionada |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.QR SET TEXT PROPERTY.Summary-->O comando QR SET TEXT PROPERTY permite definir as propriedades de texto da célula determinada pelos parâmetros *numColuna* e *numLinha*.<!-- END REF-->  
  
*area* é a referência da área do relatório rápido.  
  
*numColuna* é o número da coluna da célula.  

*numLinha* é a referência da linha da célula. Pode passar:

* um valor positivo, designando a linha do subtotal correspondente.
* uma das constantes do tema *QR Filas para propriedades*:  

| Constante      | Tipo          | Valor |  
| -------------- | ------------- | ----- |  
| qr detail      | Inteiro longo | \-2   |  
| qr footer      | Inteiro longo | \-5   |  
| qr grand total | Inteiro longo | \-3   |  
| qr header      | Inteiro longo | \-4   |  
| qr title       | Inteiro longo | \-1   |
**Nota**: quando passa -4 ou -5 em *numLinha*, necessita passar um número de coluna em *numColuna*, inclusive se não o utilizar.  
  
**Nota**: em modo tabelas cruzadas, o principio é similar exceto para os valores das linhas, que sempre são positivos.  
  
*propriedade* é o valor do atributo de texto a atribuir. Pode utilizar as constantes do tema *QR Propriedades de texto* e os seguintes valores podem ser definidos  

| Constante                     | Tipo          | Valor | Comentário                                                                   |
| ----------------------------- | ------------- | ----- | ---------------------------------------------------------------------------- |
| \_o\_qr font                  | Inteiro longo | 1     | Obsoleto desde 4D v14R3 (utilize qr font name)                               |
| qr alternate background color | Inteiro longo | 9     |                                                                              |
| qr background color           | Inteiro longo | 8     |                                                                              |
| qr bold                       | Inteiro longo | 3     |                                                                              |
| qr font name                  | Inteiro longo | 10    | Nome da fonte como a devolve por exemplo o comando [FONT LIST](font-list.md) |
| qr font size                  | Inteiro longo | 2     |                                                                              |
| qr italic                     | Inteiro longo | 4     |                                                                              |
| qr justification              | Inteiro longo | 7     |                                                                              |
| qr text color                 | Inteiro longo | 6     |                                                                              |
| qr underline                  | Inteiro longo | 5     |                                                                              |

  
Se passa um número de *area* inválido, se gera o erro -9850.  
Se o parâmetro *numColuna* incorreto, se gera o erro -9852.  
Se o parâmetro *numLinha* incorreto, se gera o erro -9853.  
Se o parâmetro *propriedade* incorreto, se gera o erro -9854.

#### Exemplo 

Este método define vários atributos para o título da primeira coluna:

```4d
  //Atribui a fonte Times:
 QR SET TEXT PROPERTY(qr_area;1;-1;qr font name;"Times")
  //atribui o tamanho de fonte de 10 pontos:
 QR SET TEXT PROPERTY(qr_area;1;-1;qr font size;10)
  //designa o atributo de fonte negrito:
 QR SET TEXT PROPERTY(qr_area;1;-1;qr bold;1)
  //designa o atributo de fonte Itálica:
 QR SET TEXT PROPERTY(qr_area;1;-1;qr italic;1)
  //designa o atributo de fonte sublinhado:
 QR SET TEXT PROPERTY(qr_area;1;-1;qr underline;1)
  //designa a cor verde claro:
 QR SET TEXT PROPERTY(qr_area;1;-1;qr text color;0x0000FF00)
```

#### Ver também 

[QR Get text property](qr-get-text-property.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 759 |
| Thread-seguro | &cross; |
| Modificar variáveis | error |


