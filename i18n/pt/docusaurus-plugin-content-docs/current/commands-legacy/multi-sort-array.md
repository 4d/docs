---
id: multi-sort-array
title: MULTI SORT ARRAY
slug: /commands/multi-sort-array
displayed_sidebar: docs
---

<!--REF #_command_.MULTI SORT ARRAY.Syntax-->**MULTI SORT ARRAY** ( *array* {; *ordem*}{; *array2* ; *ordem2* ; ... ; *arrayN* ; *ordemN*} ) <br/>
**MULTI SORT ARRAY** ( *ptrArrayNome*  ; *sortArrayNome*  )<!-- END REF-->
<!--REF #_command_.MULTI SORT ARRAY.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| array | Array | &#8594;  | Array a ser ordenado |
| ordem | * | &#8594;  | ">" para ordernar em ordem crescente ou "<" para ordenar em ordem decrescente, se omitido "aa" sem ordem |
| MULTI SORT ARRAY ( ptrArrayNome  ; sortArrayNome  ) |
| Parâmetro | Tipo | Descrição |
| ptrArrayNome | Pointer array | &#8594;  | Array de um array de ponteiros |
| sortArrayNome | Integer array | &#8594;  | Ordenação do array (1 = ordenar em ordem crescente, -1 = ordenar em ordem descrescente, 0 = sincronização com a ordenação anterior) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.MULTI SORT ARRAY.Summary-->O comando MULTI SORT ARRAY lhe permite realizar um tipo de ordenação multi-nível em um conjunto de arrays.<!-- END REF-->

Este comando aceita duas sintaxes diferentes.

* **Primeira sintaxe: MULTI SORT ARRAY (array{; ordem}{; array2; ordem2; ...; arrayN; ordemN})**

  
Essa sintaxe é a mais simples, que permite passar diretamente os nomes dos arrays sincronizados onde você deseja aplicar uma ordenação com multi-critérios.

Você pode passar um número ilimitado de pares *(Array;> or <)*  e/ou somente matrizes. Todos os arrays passados como parâmetros são ordenados de forma sincronizada.

Você pode passar arrays de qualquer tipo, exceto para Ponteiros ou arrays de Imagens. Você pode ordenar um elemento de um array bidimensional (i.e. *a2DArray{$vlThisElement}*), mas não pode classificar o array 2D em si (i.e. *a2DArray*).

Para utilizar o conteúdo de um array como critério de ordenação, passe o parâmetro de *ordem*. O valor do parâmetro (*\>* ou *<*) determina a ordem (ascendente ou descendente), no qual o array será ordenado. Se o parâmetro de *ordem* for omitido, o conteúdo do array não será utilizado como critério de classificação.

**Nota:** tenha em mente que pelo menos um critério de ordenação deve ser passado para que o comando funcione. Se nenhum critério de ordenação é definido, é gerado um erro.

Os níveis de ordenação são determinados pela ordem em que os arrays são passados para o comando: a posição de um array com um critério de classificação na sintaxe determina o seu nível de classificação.

**• Segunda sintaxe: MULTI SORT ARRAY (ptrArrayNome; sortArrayNome)**

Esta sintaxe, mais complexa, é também um valor incalculável para desenvolvimentos genéricos (por exemplo, você pode criar um método genérico para classificar arrays de todos os tipos, ou ainda, criar o equivalente de um comando genérico [SORT ARRAY](sort-array.md)).

O parâmetro *ptrArrayNome* contém o nome de um array de array de ponteiros; cada elemento desse array é um ponteiro que designa um array para ser ordenado. As ordenações são executadas na ordem do array de ponteiros definido por *ptrArrayNome*.    
**Atenção**: todos os arrays apontados pelo *ptrArrayNome* devem ter o mesmo número de elementos.

**Nota:** *ptrArrayNome* pode ser um array de processo local ($ptrArrayNome), um processo (ptrArrayNome) ou um inter-processo (<>ptrArrayNome) de ponteiros. Por outro lado, os elementos desse array devem apontar para um processo ou arrays de inter-processo.

O parâmetro *sortArrayNome* contém o nome de um array no qual cada elemento indica a ordem de classificação (-1, 0 ou 1) do elemento correspondente do array de ponteiros:  
  
\-1 = Ordenar por ordem decrescente.  
0 = O array não é usado como um critério de ordenação, mas deve ser classificado de acordo com as outras ordenações.   
1 = Ordenar por ordem crescente.

Para cada elemento do array *ptrArrayNome*, deve haver um elemento correspondente do array *sortArrayNome*. Ambos os arrays devem, portanto, ter exatamente o mesmo número de elementos.

**Notas:** 

Você não pode ordenar arrays do tipo Ponteiro ou imagem. Você pode ordenar os elementos de um array bidimensional (ou seja um.2DArray{$vlThisElement}), mas não pode ordenar o array 2D em si (isto é, . um 2DArray).

É possível ordenar arrays Objeto. Elementos Null são agrupados e elementos arrays são ordenados com uma ordem interna.

#### Exemplo 1 

O exemplo a seguir usa a primeira sintaxe: ele cria quatro arrays e os classifica por cidade (ordem crescente) e depois por salário (por ordem decrescente) com os dois últimos arrays, *names\_array* e *telNum\_array*, sendo sincronizados de acordo com os critérios de classificação anteriores:

```4d
 ALL RECORDS([Empregados])
 SELECTION TO ARRAY([Empregados]Cidade;cidades;[Empregados]Salario;salarios;[Empregados]Nome;
 nomes;[Empregados]TelNum;telNums)
 MULTI SORT ARRAY(cidades;>;salarios;<;nomes;telNums)
```

Se você quiser que os nomes dos arrays sejam usados como um terceiro critério de ordenação, basta adicionar > ou < após o parâmetro *names\_array.*   
Note que a sintaxe:

```4d
 MULTI SORT ARRAY(cidades;>;salarios;nomes;telNums)
```

é equivalente a:

```4d
 SORT ARRAY(cidades;salarios;nomes;telNums;>)
```

#### Exemplo 2 

O exemplo a seguir usa a segunda sintaxe: ele cria quatro arrays e os classifica por cidade (ordem crescente) e companhia (ordem decrescente); os dois últimos arrays, nomes\_Array e telNum\_Array, sendo sincronizados de acordo com critérios de classificação anteriores:

```4d
 ALL RECORDS([Empregados])
 SELECTION TO ARRAY([Empregados]Cidade;cidades;[Empregados]Empresa;empresas;[Empregados]Nome;
 nomes;[Empregados]TelNum;telNums)
 ARRAY POINTER(ponteiros_Array;4)
 ARRAY LONGINT(sorts_Array;4)
 Array_ponteiros{1}:=->cidades
 Array_ordem{1}:=1
 Array_ponteiros{2}:=->empresas
 Array_ordem{2}:=-1
 Array_ponteiros{3}:=->nomes
 Array_ordem{3}:=0
 Array_ponteiros{4}:=->telNums
 Array_ordem{4}:=0
 MULTI SORT ARRAY(Array_ponteiros;Array_ordem)
```

Se quiser que o array de nomes seja usado como um terceiro critério de ordenação, você precisa atribuir o valor 1 para o elemento Ordem\_array{3}. Ou então, se você quiser os arrays sejam classificados pelo critério único da cidade, atribua o valor 0 para os elementos ordem\_array{2}, ordem\_array{3} e ordem\_array{4} . Desta forma, você obtém um resultado idêntico ao. *SORT ARRAY(cidades; empresas; nomes; telNums;>).* 

#### Ver também 

[ORDER BY](order-by.md)  
[SELECTION TO ARRAY](selection-to-array.md)  
[SORT ARRAY](sort-array.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 718 |
| Thread-seguro | &check; |
| Proibido no servidor ||


