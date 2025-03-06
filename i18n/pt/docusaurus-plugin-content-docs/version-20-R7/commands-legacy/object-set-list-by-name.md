---
id: object-set-list-by-name
title: OBJECT SET LIST BY NAME
slug: /commands/object-set-list-by-name
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET LIST BY NAME.Syntax-->**OBJECT SET LIST BY NAME** ( {* ;} *objeto* {; *tipoLista*}; *lista* )<!-- END REF-->
<!--REF #_command_.OBJECT SET LIST BY NAME.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | se especificado, objeto é um nome de objeto (string), se omitido, objeto é um campo ou uma variável |
| objeto | any | &#8594;  | Nome de objeto (se* é especificado) ou Campo ou Variável (se * é omitido) |
| tipoLista | Integer | &#8594;  | Tipo de lista: lista de seleção, lista de obrigatórios ou lista de excluídos |
| lista | Text | &#8594;  | Nome da lista a ser usada como Lista de Escolha (definida no ambiente Desenho) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT SET LIST BY NAME.Summary-->O comando OBJECT SET LIST BY NAME define ou substitui a lista associada ao objeto o grupo de objetos designado por *objeto* A lista cujo nome é passado no parâmetro *lista* deve ter sido criada no editor de listas, em modo Desenho*.<!-- END REF-->*  
  
Este comando pode ser aplicado a um formulário de entrada ou diálogo, a campos e variáveis editáveis cujos valores podem ser introduzidos como texto.

Se passa o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (uma cadeia). Se for omitido o parâmetro *\**, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, você especifica uma referência de um campo ou de uma variável (campo ou variável de tipo objeto unicamente) ao invés de uma cadeia.

**Nota:** Este comando não pode ser utilizado com campos localizados em um formulário listado de um subformulário.

O comando **OBJECT SET LIST BY NAME** lhe permite definir ou substituir todos os tipos de listas associadas aos objetos designados pelos parâmetros *objeto* e *\**: listas de seleção, lista de valores obrigatórios e listas de valores excluídos. Para isso, no parâmetro *tipoLista* passe uma das seguintes constantes, que se encontra no tema "*Propriedades dos objetos* ":  
  
| Constante     | Tipo          | Valor | Comentário                                                                                |
| ------------- | ------------- | ----- | ----------------------------------------------------------------------------------------- |
| Choice list   | Inteiro longo | 0     | Lista simples de seleção de valores (opção "Lista" na Lista de Propriedades) (por padrão) |
| Excluded list | Inteiro longo | 2     | Lista de valores não aceitos para a entrada (Opção "Exclusões" na lista de propriedades)  |
| Required list | Inteiro longo | 1     | Lista só os valores aceitos para a entrada (Opção "Obrigatória" na Lista de Propriedades) |
  
  
Se omite este parâmetro, o valor 0 (lista de seleção) se utiliza por padrão.  
  
No processo atual, para desvincular uma lista que se associou ao *objeto*, passe uma cadeia vazia ("") no parâmetro *lista* para o tipo de lista concernente. 

Lista de valores existentes são substituidas dependendo de como a lista é associada ao objeto formulário:

* usar uma lista de escolha: a lista mesma é substituida.
* usar um array: a lista é copiada em elementos array.
* usar um objeto (não compatível com bancos de dados binários): a lista é copiada como elementos coleção na propriedade valores do objeto.

#### Exemplo 1 

O exemplo a seguir define uma lista associada a um campo Envio. Se o envio deve ser realizado na noite, então a lista mostra as empresas que realizam envios na noite. Caso contrário, são atribuídas as empresas de envios comum:

```4d
 If([Envios]Overnight)
    
OBJECT SET LIST BY NAME([Envios]Empresa;"Envios de noite")
 Else
    OBJECT SET LIST BY NAME([Envios]Empresa;"Envios comum")
 End if


```

#### Exemplo 2 

Associa a lista "color\_choice" como uma lista deslocável simples chamada "DoorColor":

```4d
 OBJECT SET LIST BY NAME(*;"DoorColor";Choice list;"color_choice")
  // neste caso, o terceiro parâmetro (constante) pode ser omitido
```

#### Exemplo 3 

Você deseja associar a lista "color\_choice" ao combo box "WallColor". Como este combo box é editável, você deseja que não seja possível usar certas cores como o "preto", "morado", etc. Estas cores se colocam na lista "excl\_colors":

```4d
 OBJECT SET LIST BY NAME(*;"WallColor";Choice list;"color_choice")
 OBJECT SET LIST BY NAME(*;"WallColor";Excluded list;"excl_colors")
```

#### Exemplo 4 

Você quer eliminar a lista de associações:

```4d
  // eliminação de uma lista de seleção
 OBJECT SET LIST BY NAME(*;"DoorColor";Choice list;"")
  // eliminação de uma lista de valores que não são permitidos
 OBJECT SET LIST BY NAME(*;"WallColor";Excluded list;"")
```

#### Ver também 

[OBJECT Get list name](object-get-list-name.md)  
[OBJECT SET LIST BY REFERENCE](object-set-list-by-reference.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 237 |
| Thread-seguro | &cross; |


