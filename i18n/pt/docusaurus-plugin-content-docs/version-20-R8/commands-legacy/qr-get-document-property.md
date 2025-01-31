---
id: qr-get-document-property
title: QR Get document property
slug: /commands/qr-get-document-property
displayed_sidebar: docs
---

<!--REF #_command_.QR Get document property.Syntax-->**QR Get document property** ( *area* ; *propriedade* ) : Integer<!-- END REF-->
<!--REF #_command_.QR Get document property.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referência da área |
| propriedade | Integer | &#8594;  | 1 = Diálogo de Impressão, 2 = Unidade de documento |
| Resultado | Integer | &#8592; | Valor da propriedade |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.QR Get document property.Summary-->O comando QR Get document property permite recuperar o estado mostrado para a caixa de diálogo de impressão ou a unidade utilizada para o documento presente na *area*.<!-- END REF-->  
  
 Em *propriedade* pode utilizar uma das constantes do tema *QR Propriedades de documento*:

| Constante           | Tipo          | Valor | Comentário                                                                                                                                                                                                                    |
| ------------------- | ------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| qr field separator  | Inteiro longo | 3     | Código de caracteres do separador de campos. O valor padrão é a variável do sistema FldDelimit (Tab por padrão).                                                                                                              |
| qr printing dialog  | Inteiro longo | 1     | Visualização da caixa de diálogo de impressão: Se valor = 0, a caixa de diálogo de impressão não se mostra antes da impressão. Se valor = 1, a caixa de diálogo de impressão se mostra antes da impressão (valor por padrão). |
| qr record separator | Inteiro longo | 4     | Código de caracteres do separador de registros. O valor por padrão é a variável de sistema RecDelimit (Retorno de carro por padrão).                                                                                          |
| qr unit             | Inteiro longo | 2     | Unidade de documento: Se valor = 0, a unidade do documento é em pontos. Se valor = 1, a unidade do documento é o centímetro. Se valor = 2, a unidade do documento é a polegada.                                               |
  
  
* Se *propriedade* for igual a 1, o comando aplica para a visualização da caixa de diálogo de impressão.
 \- Se valor for igual a 1, a caixa de diálogo de impressão se mostra antes da impressão.  
 \- Se valor for igual a 0, a caixa de diálogo de impressão não se mostra antes da impressão.  
 O valor por padrão é 1.  
  
* Se a *propriedade* for igual a 2, o comando aplica à unidade do documento.

 \- Se valor for igual a 0, a unidade do documento é o ponto.  
 \- Se valor for igual a 1, a unidade do documento é o centímetro.  
 \- Se valor for igual a 2, a unidade do documento é a polegada.  
  
Se passa um número de *area* inválido, se gera o erro -9850.  
Se passa um valor incorreto do parâmetro *propriedade*, se gera o erro -9852.

#### Ver também 

[QR SET DOCUMENT PROPERTY](qr-set-document-property.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 773 |
| Thread-seguro | &cross; |


