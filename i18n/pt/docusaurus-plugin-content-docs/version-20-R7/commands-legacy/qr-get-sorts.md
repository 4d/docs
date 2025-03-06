---
id: qr-get-sorts
title: QR GET SORTS
slug: /commands/qr-get-sorts
displayed_sidebar: docs
---

<!--REF #_command_.QR GET SORTS.Syntax-->**QR GET SORTS** ( *area* ; *aColunas* ; *aOrdem* )<!-- END REF-->
<!--REF #_command_.QR GET SORTS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referência da área |
| aColunas | Real array | &#8592; | Colunas que estão ordenadas |
| aOrdem | Real array | &#8592; | Sentido da ordenação |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.QR GET SORTS.Summary-->O comando QR GET SORTS preenche dois arrays:  
  
* *aColunas* Este array inclui todas as colunas que tenham um sentido de ordenação.<!-- END REF-->
* *aOrdem* Cada elemento deste array contém o sentido de ordenação da coluna correspondente.

> \- Se *aOrdem{$i}* for igual a 1, o sentido da ordenação é ascendente.  
> \- Se *aOrdem{$i}* for igual -1, o sentido da ordenação é descendente.  

##### Relatório tabelas cruzadas 

No caso deste tipo de relatórios, os arrays resultantes não podem ter mais de dois elementos já que a ordenação só pode ser realizada nas colunas (1) e as filas (2). (Valores para *aColunas).*

Se passa um número de área inválido, se gera o erro -9850.

#### Ver também 

[QR SET SORTS](qr-set-sorts.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 753 |
| Thread-seguro | &cross; |
| Modificar variáveis | error |


