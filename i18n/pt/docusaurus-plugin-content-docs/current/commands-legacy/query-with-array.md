---
id: query-with-array
title: QUERY WITH ARRAY
slug: /commands/query-with-array
displayed_sidebar: docs
---

<!--REF #_command_.QUERY WITH ARRAY.Syntax-->**QUERY WITH ARRAY** ( *campoAlvo* ; *array* )<!-- END REF-->
<!--REF #_command_.QUERY WITH ARRAY.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| campoAlvo | Field | &#8594;  | Campo usado para comparar os valores |
| array | Array | &#8594;  | Array de valores pesquisados |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.QUERY WITH ARRAY.Summary-->O comando **QUERY WITH ARRAY** busca na tabela do campo passado no primeiro parâmetro todos os registros para os quais o valor de *campoAlvo*, for igual ao menos a um dos valores dos elementos em [Array](# "An array of values").<!-- END REF--> Os registros encontrados constituem a nova seleção atual. 

Este comando lhe permite construir rápida e simplesmente uma pesquisa em múltiplos valores. 

**Notas:**  
  
• Este comando não pode ser utilizado com campos de tipo Imagem, subcampo e BLOB.  
• *campoAlvo* e [Array](# "An array of values") devem ser do mesmo tipo. Exceção: pode utilizar um array de tipo Inteiro longo com um campo de tipo Hora. 

#### Exemplo 

O exemplo a seguir lhe permite recuperar os registros de clientes franceses e americanos:

```4d
 ARRAY TEXT(ArrayPesquisa;2)
 ArrayPesquisa{1}:="FR"
 ArrayPesquisa{2}:="US"
 QUERY WITH ARRAY([Clientes]Países;ArrayPesquisa)
```

#### Ver também 

[QUERY SELECTION WITH ARRAY](query-selection-with-array.md)  