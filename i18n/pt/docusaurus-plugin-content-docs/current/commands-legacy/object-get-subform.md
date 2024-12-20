---
id: object-get-subform
title: OBJECT GET SUBFORM
slug: /commands/object-get-subform
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET SUBFORM.Syntax-->**OBJECT GET SUBFORM** ( {* ;} *objeto* ; *pontTabela* ; *subFormDet* {; *subFormList*} )<!-- END REF-->
<!--REF #_command_.OBJECT GET SUBFORM.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto(cadeia)Se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome de objeto (se especificado *) ou Variável (se omitido *) |
| pontTable | Table | &#8592; | Ponteiro à tabela do formulário |
| subFormDet | Text | &#8592; | Nome do formulário detalhado do sub-formulário |
| subFormList | Text | &#8592; | Nome do formulário listado do sub-formulário (formulário tabela) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT GET SUBFORM.Summary-->O comando **OBJECT GET SUBFORM** obtém os nomes dele ou dos formulário(s) associado(s) ao objeto sub-formulário designado pelos parâmetros *objeto* e *\**.<!-- END REF-->  
  
Se passa o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (uma cadeia). Se não passa este parâmetro, isto indica que o parâmetro *objeto* é uma variável. Neste caso, se passa uma referencia de variável em lugar de uma cadeia.  
  
No parâmetro *pontTabela*, o comando devolve um ponteiro à tabela dele ou dos formulário(s) utilizado(s). Se o sub-formulário utiliza um formulário projeto, o parâmetro contém [Is nil pointer](is-nil-pointer.md).  
  
No parâmetro *subFormDet*, e (opcionalmente) subFormList ,o comando devolve:  

* o nome de formulário se o subformulário tiver sido criado no editor formulário 4D
* o atributo de subformulário "nome" se o subformulário tiver sido criado de um arquivo json ou um objeto 4D.
* Em ambos os casos, se o atributo "nome" for indefinido, o comando vai retornar:
* * para um arquivo json, o nome do arquivo json (sem extensão)  
   * para um objeto "sem titulo"
  
Se não houver formulário lista, uma string vazia é devolvida no parâmetro *subFormList*,  
  

#### Ver também 

[OBJECT GET SUBFORM CONTAINER SIZE](object-get-subform-container-size.md)  
[OBJECT SET SUBFORM](object-set-subform.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1139 |
| Thread-seguro | &cross; |

