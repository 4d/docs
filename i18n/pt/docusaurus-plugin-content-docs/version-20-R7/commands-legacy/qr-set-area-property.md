---
id: qr-set-area-property
title: QR SET AREA PROPERTY
slug: /commands/qr-set-area-property
displayed_sidebar: docs
---

<!--REF #_command_.QR SET AREA PROPERTY.Syntax-->**QR SET AREA PROPERTY** ( *area* ; *propriedade* ; *valor* )<!-- END REF-->
<!--REF #_command_.QR SET AREA PROPERTY.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referência da área |
| propriedade | Integer | &#8594;  | Elemento de interface |
| valor | Integer | &#8594;  | 1=exibir, 0=ocultar |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.QR SET AREA PROPERTY.Summary-->O comando **QR SET AREA PROPERTY** permite mostrar ou ocultar o elemento de interface (barra de ferramentas ou barra de menus) cuja referência se passa em *propriedade*.<!-- END REF-->

Este comando só pode ser usado com uma área Relatório Rápido embebida em um formulário.

Pode utilizar as constantes do tema *QR Propriedades de área* em *propriedade*:  
  
| Constante                      | Valor |
| ------------------------------ | ----- |
| \_o\_qr view color toolbar     | 5     |
| \_o\_qr view column toolbar    | 6     |
| \_o\_qr view menubar           | 1     |
| \_o\_qr view operators toolbar | 4     |
| \_o\_qr view standard toolbar  | 2     |
| \_o\_qr view style toolbar     | 3     |
| qr view contextual menus       | 7     |
  
  
Se passar um número de *area* inválido, se gera o erro -9850. 

Se o parâmetro *propriedade* for incorreto, se gera o erro -9852.

#### Ver também 

[QR Get area property](qr-get-area-property.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 796 |
| Thread-seguro | &check; |
| Modificar variáveis | error |
| Proibido no servidor ||


