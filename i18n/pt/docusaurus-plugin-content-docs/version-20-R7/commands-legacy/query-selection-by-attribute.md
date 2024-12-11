---
id: query-selection-by-attribute
title: QUERY SELECTION BY ATTRIBUTE
slug: /commands/query-selection-by-attribute
displayed_sidebar: docs
---

<!--REF #_command_.QUERY SELECTION BY ATTRIBUTE.Syntax-->**QUERY SELECTION BY ATTRIBUTE** ( {*umaTabela*}{;}{*operadorConj* ;} *campoObj* ; *rotaAtributo* ; *operadorPesq* ; *valor* {; *} )<!-- END REF-->
<!--REF #_command_.QUERY SELECTION BY ATTRIBUTE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| umaTable | Table | &#8594;  | Tabela para a quel vai retornar uma seleção de registros, ou tabela Padrão se omitido |
| operadorConj | * | &#8594;  | Operador Conjunção para usar para unir múltiplas pesquisas (se alguma) |
| campoObj | Field | &#8594;  | Campo objeto para atributos de pesquisa |
| rotaAtributo | Text | &#8594;  | Nome ou rota do atributo |
| operadorPesq | *, Text | &#8594;  | Operador Pesquisa (comparador) |
| valor | Text, Number, Date, Time | &#8594;  | Valor a comparar |
| * | Operador | &#8594;  | Continua flag de pesquisa |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.QUERY SELECTION BY ATTRIBUTE.Summary-->**QUERY SELECTION BY ATTRIBUTE** realiza as mesmas ações que [QUERY BY ATTRIBUTE](query-by-attribute.md).<!-- END REF--> A diferença entre os dois comandos é o alcance da pesquisa:

* [QUERY BY ATTRIBUTE](query-by-attribute.md) procura por registros entre todos os registros na tabela.
* **QUERY SELECTION BY ATTRIBUTE** procura por registros entre os registros atualmente selecionados na tabela.

**QUERY SELECTION BY ATTRIBUTE** procura por registros em uma *umaTabela*. O comando **QUERY SELECTION BY ATTRIBUTE** muda a seleção de *tabela* para o processo atual e faz com que o primeiro reigstro da nova seleção vire o registro atual.

Para saber mais, veja a descrição do comando [QUERY BY ATTRIBUTE](query-by-attribute.md).

O comando **QUERY SELECTION BY ATTRIBUTE** é útil quando uma pesquisa não pode ser definida usando uma combinação de [QUERY BY ATTRIBUTE](query-by-attribute.md) (e [QUERY](query.md)) pode ser unidos com o parâmetro \* . Tipicamente, é o caso quando quiser pesquisar uma seleção atual que não resulta de uma pesquisa anterior, mas de comandos tais como [USE SET](use-set.md). 

#### Exemplo 

Se quiser encontrar pessoas com uma idade entre 20 e 30 nos registros que foram anteriormente ressaltados pelo usuário:

```4d
 USE SET("UserSet") //cria uma nova selecao atual
 QUERY SELECTION BY ATTRIBUTE([Persons];[Persons]OB_Info;"age";>;20;*)
 QUERY SELECTION BY ATTRIBUTE([Persons];&;[Persons]OB_Info;"age";<;30) //ativa a pesquisa
```

#### Ver também 

[QUERY BY ATTRIBUTE](query-by-attribute.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1424 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |
| Modificar o registro atual ||
| Modificar a seleção atual ||
| Proibido no servidor ||


