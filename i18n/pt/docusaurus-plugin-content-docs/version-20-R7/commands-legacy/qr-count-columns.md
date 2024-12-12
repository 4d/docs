---
id: qr-count-columns
title: QR Count columns
slug: /commands/qr-count-columns
displayed_sidebar: docs
---

<!--REF #_command_.QR Count columns.Syntax-->**QR Count columns** ( *area* ) : Integer<!-- END REF-->
<!--REF #_command_.QR Count columns.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referência da área |
| Resultado | Integer | &#8592; | Número de colunas em área |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.QR Count columns.Summary-->O comando QR Count columns devolve o número de colunas presentes na *area* do relatório rápido.<!-- END REF-->

Se passa um número de *area* inválido, é gerado o erro -9850.

#### Exemplo 

O código a seguir permite adicionar uma coluna adicional à direita da última coluna da área:

```4d
 $ColNb:=QR Count columns(MinhaArea)
 QR INSERT COLUMN(MinhaArea;$ColNb+1;->[Tabela 1]Campo2)
```

#### Ver também 

[QR DELETE COLUMN](qr-delete-column.md)  
[QR INSERT COLUMN](qr-insert-column.md)  