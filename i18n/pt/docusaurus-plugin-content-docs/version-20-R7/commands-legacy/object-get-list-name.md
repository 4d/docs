---
id: object-get-list-name
title: OBJECT Get list name
slug: /commands/object-get-list-name
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get list name.Syntax-->**OBJECT Get list name** ( {* ;} *objeto* {; *tipoLista*} ) : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get list name.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (string). Se omitido, objeto é uma variável ou campo. |
| objeto | any | &#8594;  | Nome de objeto (se * for especificado) ou Variável ou campo (se * for omitido) |
| tipoLista | Integer | &#8594;  | Tipo de lista: lista de seleção, lista de obrigatórios ou lista de excluídos |
| Resultado | Text | &#8592; | Nome da lista de escolha (especificado no modo Desenho) |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.OBJECT Get list name.Summary-->O comando OBJECT Get list name devolve o nome da lista associada ao objeto ou a um grupo de objetos designados por *objeto*.<!-- END REF--> 4D lhe permite associar uma lista de opções (criada com o editor de listas em modo Desenho) com objetos de formulário utilizando o editor de formulários ou o comando [OBJECT SET LIST BY NAME](object-set-list-by-name.md).  
  
Se pasa o parâmetro opcional *\**, indica que o parâmetro objeto é um nome de objeto (cadeia). Se não passa este parâmetro, indica que o parâmetro objeto é um campo ou uma variável. Neeste caso, se passa uma referência de campo ou variável (campo ou variável objeto unicamente) ao invés de uma cadeia.  
  
Pode utilizar o parâmetro opcional *tipoLista* para designar o tipo de lista que deseja obter. Por padrão, se omitir este parâmetro, o comando devolve o nome da lista de opções (lista de valores) associado ao objeto. Também pode obter os nomes das listas obrigatórias ou das listas de excluídos passando, em *tipoLista*, uma das seguintes constantes que se encontram no tema "*Propriedades dos objetos* ":  
  
| Constante     | Tipo          | Valor | Comentário                                                                                |
| ------------- | ------------- | ----- | ----------------------------------------------------------------------------------------- |
| Choice list   | Inteiro longo | 0     | Lista simples de seleção de valores (opção "Lista" na Lista de Propriedades) (por padrão) |
| Excluded list | Inteiro longo | 2     | Lista de valores não aceitos para a entrada (Opção "Exclusões" na lista de propriedades)  |
| Required list | Inteiro longo | 1     | Lista só os valores aceitos para a entrada (Opção "Obrigatória" na Lista de Propriedades) |
  
  
Se nenhuma lista do tipo definido está associada ao *objeto*, o comando devolve uma cadeia vazia ("").

#### Ver também 

[OBJECT Get list reference](object-get-list-reference.md)  
[OBJECT SET LIST BY NAME](object-set-list-by-name.md)  