---
id: object-get-list-reference
title: OBJECT Get list reference
slug: /commands/object-get-list-reference
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get list reference.Syntax-->**OBJECT Get list reference** ( {* ;} *objeto* {; *tipoLista*} ) : Integer<!-- END REF-->
<!--REF #_command_.OBJECT Get list reference.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (cadeia) Se omitido, objeto é um campo ou uma variável |
| objeto | any | &#8594;  | Nome de objeto (se * for especificado) ou Campo ou variável (se * for omitido) |
| tipoLista | Integer | &#8594;  | Tipo de lista: lista de Seleção, lista obrigatória ou a lista de excluídos |
| Resultado | Integer | &#8592; | Número de referência de lista |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT Get list reference.Summary-->O comando **OBJECT Get list reference** devolve o número de referência (*RefList*) da lista hierárquica associada ao objeto ou grupo de objetos designados pelos parâmetros *objeto* e *\** .<!-- END REF-->  
  
Se passar o parâmetro opcional *\** indica que o parâmetro *objeto* é um nome de objeto (cadeia). Se não passar este parâmetro, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, se passa uma referência de campo ou variável em lugar de uma cadeia (campo ou variável objeto unicamente).  
  
Por padrão, se omite o parâmetro *tipoLista*, o comando devolve o nome da lista de opções (lista de valores) associado ao objeto. Também pode obter o número de referência das listas obrigatória ou as listas de excluídos passando em *tipoLista*, uma das seguintes constantes do tema "*Propriedades dos objetos* ":  
  
| Constante     | Tipo          | Valor | Comentário                                                                                |
| ------------- | ------------- | ----- | ----------------------------------------------------------------------------------------- |
| Choice list   | Inteiro longo | 0     | Lista simples de seleção de valores (opção "Lista" na Lista de Propriedades) (por padrão) |
| Excluded list | Inteiro longo | 2     | Lista de valores não aceitos para a entrada (Opção "Exclusões" na lista de propriedades)  |
| Required list | Inteiro longo | 1     | Lista só os valores aceitos para a entrada (Opção "Obrigatória" na Lista de Propriedades) |

  
Se não há uma lista hierárquica associada ao objeto para o *tipoLista* definido, o comando devolve 0.

#### Ver também 

[OBJECT Get list name](object-get-list-name.md)  
[OBJECT SET LIST BY REFERENCE](object-set-list-by-reference.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1267 |
| Thread-seguro | &cross; |


