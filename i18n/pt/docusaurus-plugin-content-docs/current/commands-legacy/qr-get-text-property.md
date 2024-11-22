---
id: qr-get-text-property
title: QR Get text property
slug: /commands/qr-get-text-property
displayed_sidebar: docs
---

<!--REF #_command_.QR Get text property.Syntax-->**QR Get text property** ( *area* ; *numColuna* ; *numLinha* ; *propriedade* ) : any<!-- END REF-->
<!--REF #_command_.QR Get text property.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referência da área |
| numColuna | Integer | &#8594;  | Nº da coluna |
| numLinha | Integer | &#8594;  | N° da linha |
| propriedade | Integer | &#8594;  | Número da propriedade |
| Function result | Inteiro longo, String | &#8592; | Valor da propriedade selecionada |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.QR Get text property.Summary-->O comando QR Get text property devolve o valor da propriedade dos atributos de texto na célula determinada por *numColuna* e *numLinha*.<!-- END REF-->  
  
*area* é a referencia da área do relatório rápido.  
  
*numColuna* é o número da coluna da célula.  
  
*numLinha* é a referência da linha da célula. Pode passar

* um valor positivo designando o nível de ruptura do subtotal correspondente.
* uma das constantes do tema :  

| Constante      | Tipo          | Valor |  
| -------------- | ------------- | ----- |  
| qr detail      | Inteiro longo | \-2   |  
| qr footer      | Inteiro longo | \-5   |  
| qr grand total | Inteiro longo | \-3   |  
| qr header      | Inteiro longo | \-4   |  
| qr title       | Inteiro longo | \-1   |

  
**Nota**: quando passa -4 ou -5 em *numLinha*, necessita passar um número de coluna em *numColuna*, inclusive se não for utilizado.  

**Nota**: em modo tabela cruzada, o princípio é similar exceto para os valores das linhas, que sempre são positivos.  

*propriedade* é o valor da propriedade de texto a obter. Pode utilizar as constantes do tema *QR Propriedades de texto* e os seguintes valores podem ser devolvidos:  
  
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
  
  
Se pasa um número de *area* inválido, se gera o erro -9850.  
Se o parâmetro *numColuna* é incorreto, se gera o erro -9852.  
Se o parâmetro *numLinha* é incorreto, se gera o erro -9853.  
Se o parâmetro *propriedade* é incorreto, se gera o erro -9854. 

#### Ver também 

[QR SET TEXT PROPERTY](qr-set-text-property.md)  