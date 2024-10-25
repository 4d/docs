---
id: get-query-destination
title: GET QUERY DESTINATION
slug: /commands/get-query-destination
displayed_sidebar: docs
---

<!--REF #_command_.GET QUERY DESTINATION.Syntax-->**GET QUERY DESTINATION** ( *destinoTipo* ; *destinoObjeto* ; *destinoPont* )<!-- END REF-->
<!--REF #_command_.GET QUERY DESTINATION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| destinoTipo | Integer | &#8592; | 0=seleção atual, 1=conjunto, 2=seleção temporal, 3=variável |
| destinoObjeto | Text | &#8592; | Nome do conjunto ou Nome da seleção temporal ou Cadeia vazia |
| destinoPont | Pointer | &#8592; | Ponteiro à variável local se destinoTipo=3 |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.GET QUERY DESTINATION.Summary-->O comando **GET QUERY DESTINATION** devolve o destino atual dos resultados das pesquisas para o processo em curso.<!-- END REF--> Por defeito, os resultados das pesquisas modificam a seleção atual, mas pode modificar este funcionamento com a ajuda do comando [SET QUERY DESTINATION](set-query-destination.md).

No parâmetro *destinoTipo*, 4D devolve um valor indicando o destino atual das pesquisas e no parâmetro *destinoObjeto* devolve o nome do destino (se aplicado). Pode comparar o valor do parâmetro *destinoTipo* com as constantes do tema *Destinos de pesquisa*:

| Constante              | Tipo          | Valor |
| ---------------------- | ------------- | ----- |
| Into current selection | Inteiro longo | 0     |
| Into named selection   | Inteiro longo | 2     |
| Into set               | Inteiro longo | 1     |
| Into variable          | Inteiro longo | 3     |

O valor devolvido no parâmetro *destinoObjeto* depende do valor do parâmetro *destinoTipo*:

| **Parâmetro destinoTipo** | **Parâmetro destinoObjeto**                                             |
| ------------------------- | ----------------------------------------------------------------------- |
| 0 (seleção atual)         | *destinoObjeto* é una cadeia vazia                                      |
| 1 (conjunto)              | *destinoObjeto* contém o nome do conjunto                               |
| 2 (seleção temporal)      | *destinoObjeto* contém o nome da seleção                                |
| 3 (variável)              | *destinoObjeto* é uma cadeia vazia (utilizar o parâmetro *destinoPont*) |

 Quando o destino das pesquisas é uma variável local (*destinoTipo* devolve 3), 4D devolve no parâmetro *destinoPont* um ponteiro a esta variável.

#### Exemplo 

Queremos modificar temporariamente o destino de pesquisa e restabelecer os parâmetros prévios:

```4d
 GET QUERY DESTINATION($vType;$vName;$ptr)
  //recuperação dos parâmetros atuais
 SET QUERY DESTINATION(Into set;"$temp")
  //modificação temporal do destino
 QUERY(...) //pesquisa
 SET QUERY DESTINATION($vType;$vName;$ptr)
  //restauração dos parâmetros
```

#### Ver também 

[SET QUERY DESTINATION](set-query-destination.md)  