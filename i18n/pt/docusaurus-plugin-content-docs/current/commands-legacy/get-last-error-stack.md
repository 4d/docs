---
id: get-last-error-stack
title: GET LAST ERROR STACK
slug: /commands/get-last-error-stack
displayed_sidebar: docs
---

<!--REF #_command_.GET LAST ERROR STACK.Syntax-->**GET LAST ERROR STACK** ( *arrayCodigos* ; *arrayCompInternos* ; *arrayTextos* )<!-- END REF-->
<!--REF #_command_.GET LAST ERROR STACK.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| arrayCodigos | Integer array | &#x1F858; | Número do erro |
| arrayCompInternos | Text array | &#x1F858; | Códigos de componentes internos |
| arrayTextos | Text array | &#x1F858; | Texto de erros |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.GET LAST ERROR STACK.Summary-->O comando GET LAST ERROR STACK devolve informação sobre a pilha de erros atual relacionada com o uso do kernel SQL da aplicação 4D.<!-- END REF--> Quando uma instrução 4D provoca um erro, a pilha de erros atual contém uma descrição do erro como também de todas as séries de erros geradas. Por exemplo, um erro de tipo "disk full" provoca um erro de escritura no arquivo depois um erro no comando de guardar registro: a pilha portanto conterá três erros. Se a última instrução 4D não gerou um erro, a pilha de erros atual está vazia.

Este comando genérico pode ser utilizado para processar todo tipo de erro que possa ocorrer na aplicação 4D.

**Nota:** entretanto, para obter a informação detalhada correspondente aos erros gerados por uma fonte ODBC, será necessário utilizar o comando [SQL GET LAST ERROR](sql-get-last-error.md).

Este comando deve ser chamado desde um método de chamada de erros instalado pelo comando [ON ERR CALL](on-err-call.md "ON ERR CALL").

A informação é devolvida em três arrays sincronizados:

* *arrayCodigos*: este array recebe a lista de códigos de erro gerados.
* *arrayCompInternos*: este array contém os códigos dos componentes internos associados com cada erro.
* *arrayTextos*: este array contém o texto de cada erro.

A lista de códigos de erro e seu texto se encontra nas seções *Códigos de Erro* do tema "Códigos de erro".

#### Ver também 

[Last errors](last-errors.md)  
[ON ERR CALL](on-err-call.md)  
[SQL GET LAST ERROR](sql-get-last-error.md)  