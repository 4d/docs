---
id: qr-get-html-template
title: QR Get HTML template
slug: /commands/qr-get-html-template
displayed_sidebar: docs
---

<!--REF #_command_.QR Get HTML template.Syntax-->**QR Get HTML template** ( *area* ) : Text<!-- END REF-->
<!--REF #_command_.QR Get HTML template.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referência da área |
| Resultado | Text | &#8592; | Código HTML usado como modelo |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.QR Get HTML template.Summary-->O comando QR Get HTML template devolve o modelo HTML utilizado atualmente pela área do relatório rápido referenciada por área.<!-- END REF--> O valor devolvido de tipo texto e inclui a totalidade do código HTML utilizado como modelo.  
  
Se não foi definido um modelo específico, se devolve o modelo padrão automático. Por favor considere que não se devolverá nenhum valor se o formato de destino HTML não for definido para o relatório, manualmente ou por programação.  
  
Se passa um número de *area* inválido, se gera o erro -9850.

#### Ver também 

[QR SET HTML TEMPLATE](qr-set-html-template.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 751 |
| Thread-seguro | &check; |
| Modificar variáveis | error |
| Proibido no servidor ||


