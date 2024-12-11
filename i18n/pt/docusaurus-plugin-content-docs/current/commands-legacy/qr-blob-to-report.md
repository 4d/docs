---
id: qr-blob-to-report
title: QR BLOB TO REPORT
slug: /commands/qr-blob-to-report
displayed_sidebar: docs
---

<!--REF #_command_.QR BLOB TO REPORT.Syntax-->**QR BLOB TO REPORT** ( *area* ; *BLOB* )<!-- END REF-->
<!--REF #_command_.QR BLOB TO REPORT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referência da área |
| Blob | Blob | &#8594;  | BLOB que contém o relatório |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.QR BLOB TO REPORT.Summary-->O comando QR BLOB TO REPORT coloca o relatório contido no *BLOB* na área de relatório rápido passada em *area*.<!-- END REF--> 

Se passa um número de *area* incorreto, se gera o erro -9850.  
Se o parâmetro *BLOB* for incorreto, se gera o erro -9852.

#### Exemplo 1 

O código a seguir mostra na área MinhaArea, um arquivo de relatório chamado “report.4qr” localizado junto à estrutura do banco. O arquivo de relatório pode ter sido criado com uma versão anterior:

```4d
 var $doc : Blob
 var MinhaArea : Integer
 DOCUMENT TO BLOB("report.4qr";$doc)
 QR BLOB TO REPORT(MinhaArea;$doc)
```

#### Exemplo 2 

A instrução a seguir recupera o relatório rápido armazenado em Campo4 e o mostra em MinhaArea: 

```4d
 QR BLOB TO REPORT(MinhaArea;[Tabela 1]Campo4)
```

#### Ver também 

[QR REPORT TO BLOB](qr-report-to-blob.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 771 |
| Thread-seguro | &check; |
| Modificar variáveis | error |
| Proibido no servidor ||


