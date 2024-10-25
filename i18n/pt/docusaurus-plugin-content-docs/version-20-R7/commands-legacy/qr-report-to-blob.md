---
id: qr-report-to-blob
title: QR REPORT TO BLOB
slug: /commands/qr-report-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.QR REPORT TO BLOB.Syntax-->**QR REPORT TO BLOB** ( *area* ; *BLOB* )<!-- END REF-->
<!--REF #_command_.QR REPORT TO BLOB.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referência da área |
| Blob | Blob | &#8592; | BLOB a hospedar o Relatório Rápido |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.QR REPORT TO BLOB.Summary-->O comando QR REPORT TO BLOB coloca o relatório cuja referência foi passada em *area* em um *BLOB* (variável ou campo).<!-- END REF-->

Se passa um número de *area* incorreto, se gera o erro -9850.

#### Exemplo 

A seguinte instrução atribui o relatório rápido armazenado na área MinhaArea a um campo BLOB.

```4d
 QR REPORT TO BLOB(MinhaArea;[Tabela 1]Campo4)
```

#### Ver também 

[QR BLOB TO REPORT](qr-blob-to-report.md)  