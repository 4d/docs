---
id: wp-get-page-count
title: WP Get page count
slug: /WritePro/commands/wp-get-page-count
displayed_sidebar: docs
---

<!--REF #_command_.WP Get page count.Syntax-->**WP Get page count** ( *docWP* ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Get page count.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| docWP | Object | &#8594;  | Documento 4D Write Pro |
| Resultado | Integer | &#8592; | Número de páginas em documento |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WP Get page count.Summary-->O comando **WP Get page count** devolve o número total de páginas definidas no documento 4D Write Pro *docWP*.<!-- END REF-->

Em *objAlvo*, é possível passar:

* uma seção/subseção ou
* um documento 4D Write Pro

O comando retorna o número de páginas de *objAlvo*. Se passar uma subseção, o número de páginas da seção pai é retornada.

As mesmas configurações de visão, como para o comando [WP PRINT](wp-print.md), são usadas com **WP Get page count**:

* cabeçalhos: visíveis
* rodapés: visíveis
* expressões: computadas e exibidas
* modo página: página ou rascunho

Se *targetObj* for exibido em uma área de formulário 4D Write Pro, tenha certeza que as configurações de vista da área correspondem com as configurações de vista do comando para informações consistentes. Note também que se essas configurações forem diferentes na área, 4D Write Pro vai "clonar" o documento para calcular o layout para cada chamada do comando, o que pode consumir muito tempo. Por razões de performance, é recomendado nesse caso que se construa o documento offline e que o copie para a área de formulário objeto quando estiver completo.

#### Exemplo 

Se quiser saber o número total de páginas de documentos 4D Write Pro armazenados no campo "Manual" dentro da seleção atual de elementos. Pode escrever:

```4d
 var $pageCount : Integer
 var $totalCount : Integer
 FIRST RECORD([Items])
 While(Not(End selection([Items]))
    $pageCount:=WP Get page count([Items]Manual)
    $totalCount:=$totalCount+$pageCount
    NEXT RECORD([Items])
 End while
 ALERT("Número total de páginas de manual: "+String($totalCount))
```
