---
id: qr-get-destination
title: QR GET DESTINATION
slug: /commands/qr-get-destination
displayed_sidebar: docs
---

<!--REF #_command_.QR GET DESTINATION.Syntax-->**QR GET DESTINATION** ( *area* ; *tipo* {; *especificos*} )<!-- END REF-->
<!--REF #_command_.QR GET DESTINATION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referência da área |
| tipo | Integer | &#8592; | Tipo de relatório |
| especificos | Text, Variable | &#8592; | Específicos associados ao tipo de saída |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.QR GET DESTINATION.Summary-->O comando QR GET DESTINATION recupera o *tipo* de saída do relatório para a área cuja referência se passou em *area*.<!-- END REF--> 

Pode comparar o valor do parâmetro *tipo* com as constantes do tema .

A tabela a seguir descreve os valores que podem ser recuperados nos parâmetros *tipo* e *especificos*:

| **Destino**   | **Tipo (valor)**     | **Específicos**                |
| ------------- | -------------------- | ------------------------------ |
| Impressora    | qr printer (1)       | N.A.                           |
| Arquivo texto | qr text file (2)     | Rota de acesso ao arquivo      |
| 4D View       | qr 4D View area (3)  | N.A.                           |
| 4D Chart      | qr 4D Chart area (4) | N.A.                           |
| Arquivo HTML  | qr HTML file (5)     | Rota de acesso ao arquivo HTML |

Se passa um número de *area* incorreto, se gera o erro -9850.

#### Ver também 

[QR SET DESTINATION](qr-set-destination.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 756 |
| Thread-seguro | &cross; |
| Modificar variáveis | error |


