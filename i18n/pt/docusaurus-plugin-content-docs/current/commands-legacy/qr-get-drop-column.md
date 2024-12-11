---
id: qr-get-drop-column
title: QR Get drop column
slug: /commands/qr-get-drop-column
displayed_sidebar: docs
---

<!--REF #_command_.QR Get drop column.Syntax-->**QR Get drop column** ( *area* ) : Integer<!-- END REF-->
<!--REF #_command_.QR Get drop column.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referência da área |
| Resultado | Integer | &#8592; | Espaço de soltar |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.QR Get drop column.Summary-->O comando QR Get drop column devolve um valor dependendo de onde se realiza uma ação soltar:

* se o valor for negativo, indica um número de coluna (por exemplo, -3 indica que uma ação soltar se realizou na coluna número 3)
* se o valor for positivo, indica que a ação de soltar se realizou em um separador situado na frente da coluna (por exemplo, 3 indica que um soltar foi realizado na coluna 2).<!-- END REF--> Lembre que a ação de soltar não é considerada antes de uma coluna existente.

Se passa um número de *area* inválido, se gera o erro -9850.

#### Ver também 

[QR DELETE COLUMN](qr-delete-column.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 747 |
| Thread-seguro | &check; |
| Modificar variáveis | error |
| Proibido no servidor ||


