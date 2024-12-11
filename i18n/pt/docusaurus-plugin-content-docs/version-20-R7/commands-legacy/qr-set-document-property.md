---
id: qr-set-document-property
title: QR SET DOCUMENT PROPERTY
slug: /commands/qr-set-document-property
displayed_sidebar: docs
---

<!--REF #_command_.QR SET DOCUMENT PROPERTY.Syntax-->**QR SET DOCUMENT PROPERTY** ( *area* ; *propriedade* ; *valor* )<!-- END REF-->
<!--REF #_command_.QR SET DOCUMENT PROPERTY.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referência da área |
| propriedade | Integer | &#8594;  | 1=Diálogo de impressão, 2=Unidade do documento |
| valor | Integer | &#8594;  | Valor da propriedade |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.QR SET DOCUMENT PROPERTY.Summary-->O comando QR SET DOCUMENT PROPERTY permite mostrar a caixa de diálogo de impressão ou definir a unidade utilizada pelo documento.<!-- END REF-->  
  
 Em *propriedade*, pode passar uma das constantes do tema *QR Propriedades de documento*:  
  
| Constante           | Tipo          | Valor | Comentário                                                                                                                                                                                                                    |
| ------------------- | ------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| qr field separator  | Inteiro longo | 3     | Código de caracteres do separador de campos. O valor padrão é a variável do sistema FldDelimit (Tab por padrão).                                                                                                              |
| qr printing dialog  | Inteiro longo | 1     | Visualização da caixa de diálogo de impressão: Se valor = 0, a caixa de diálogo de impressão não se mostra antes da impressão. Se valor = 1, a caixa de diálogo de impressão se mostra antes da impressão (valor por padrão). |
| qr record separator | Inteiro longo | 4     | Código de caracteres do separador de registros. O valor por padrão é a variável de sistema RecDelimit (Retorno de carro por padrão).                                                                                          |
| qr unit             | Inteiro longo | 2     | Unidade de documento: Se valor = 0, a unidade do documento é em pontos. Se valor = 1, a unidade do documento é o centímetro. Se valor = 2, a unidade do documento é a polegada.                                               |
  
  
se passa um número de área incorreto, se gera o erro -9850.  
Se passa um valor incorreto do parâmetro propriedade, se gera o erro -9852 ou -9853.

#### Ver também 

[QR Get document property](qr-get-document-property.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 772 |
| Thread-seguro | &check; |
| Modificar variáveis | error |
| Proibido no servidor ||


