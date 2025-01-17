---
id: qr-delete-column
title: QR DELETE COLUMN
slug: /commands/qr-delete-column
displayed_sidebar: docs
---

<!--REF #_command_.QR DELETE COLUMN.Syntax-->**QR DELETE COLUMN** ( *area* ; *numColuna* )<!-- END REF-->
<!--REF #_command_.QR DELETE COLUMN.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referência da área |
| numColuna | Integer | &#8594;  | Número de Coluna |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.QR DELETE COLUMN.Summary-->O comando QR DELETE COLUMN apaga da *area* a coluna cujo número se passou em *numColuna*.<!-- END REF--> Este comando não aplica aos relatórios de tabelas cruzadas.

Se passa um número de *area* inválido, se gera o erro -9850.  
Se o parâmetro *numColun*a for incorreto, se gera o erro -9852.

#### Exemplo 

O exemplo a seguir garante de que o relatório seja listado e apaga a terceira coluna: 

```4d
 If(QR Get report kind(MinhaArea)=qr list report)
    QR DELETE COLUMN(MinhaArea;3)
 End if
```

#### Ver também 

[QR INSERT COLUMN](qr-insert-column.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 749 |
| Thread-seguro | &cross; |
| Modificar variáveis | error |


