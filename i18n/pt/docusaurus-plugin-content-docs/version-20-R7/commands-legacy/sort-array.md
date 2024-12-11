---
id: sort-array
title: SORT ARRAY
slug: /commands/sort-array
displayed_sidebar: docs
---

<!--REF #_command_.SORT ARRAY.Syntax-->**SORT ARRAY** ( *array* {; *array2* ; ... ; *arrayN*}{; > or <} )<!-- END REF-->
<!--REF #_command_.SORT ARRAY.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| array | Array | &#8594;  | Array a ser ordenado |
| > or < | Operador | &#8594;  | ">" para ordenar em ordem crescente, ou "<" para ordernar em ordem decrescente, ou ordem crescente se omitido |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SORT ARRAY.Summary-->O comando SORT ARRAY ordena um ou mais arrays em ordem ascendente ou descendente.<!-- END REF--> 
Você não pode ordenar arrays *Ponteiro* ou *imagem*. Você pode classificar os elementos de um array bidimensional (i.e., a2DArray{$*vlThisElem*}), mas você não pode classificar o array bidimensional em si (i.e., *a2DArray*).  
Pode ordenar arrays Objeto. Elementos Null são agrupados e elementos array são ordenados com ordem interna

O último parâmetro especifica se ordenar o *array* em ordem ascendente ou descendente. O símbolo "maior que" (>) indica uma classificação crescente, o símbolo de "menor que" (<) indica uma ordenação descendente. Se você não especificar a ordem de classificação, então, a classificação é ascendente.

Se mais de um array for especificado, os arrays são classificados segundo a ordem de classificação do primeiro array; nenhuma ordenação multinível é realizada aqui.

No seu lugar pode utilizar o comando [MULTI SORT ARRAY](multi-sort-array.md) se deseja ordenar arrays sincronizados.

#### Exemplo 1 

O exemplo a seguir cria duas matrizes e, em seguida, ordena-as pela empresa:

```4d
 ALL RECORDS([Pessoas])
 SELECTION TO ARRAY([Pessoas]Nome;asNomes;[Pessoas]Empresa;asEmpresas)
 SORT ARRAY(asEmpresas;asNomes;>)
```

No entanto, devido a que SORT ARRAY não realiza ordenação multi-nível, você vai acabar com os nomes das pessoas em ordem aleatória dentro de cada empresa. Para ordenar as pessoas pelo nome, dentro de cada empresa, você poderia escrever:

```4d
 ALL RECORDS([Pessoas])
 ORDER BY([Pessoas];[Pessoas]Empresa;>;[Pessoas]Nome;>)
 SELECTION TO ARRAY([Pessoas]Nome;asNomes;[Pessoas]Empresa;asEmpresas)
```

#### Exemplo 2 

Você exibe os nomes da tabela *\[Pessoas\]* em uma janela flutuante. Quando você clicar nos botões na janela, você pode classificar essa lista de nomes de A a Z ou de Z a A. Como várias pessoas podem ter o mesmo nome, você também pode usar um campo de número *\[Pessoas\]ID*, que é índice único. Quando você clicar na lista de nomes, você irá recuperar o registro para o nome que você clicou. Por manter um array sincronizado e escondido de números de identificação, você terá certeza que vai acessar o registro correspondente ao nome que você clicou:

```4d
  // Método de objeto do array asNomes
 Case of
    :(Form event code=On Load)
       ALL RECORDS([Pessoas])
       SELECTION TO ARRAY([Pessoas]Nome;asNomes;[Pessoas]Numero ID;todosIDs)
       SORT ARRAY(asNomes;todosIDs;>)
    :(Form event code=On Unload)
       CLEAR VARIABLE(asNomes)
       CLEAR VARIABLE(todosiDs)
    :(Form event code=On Clicked)
       If(asNomes#0)
  // Utilize o array todoslDs para obter o registro correto
          QUERY([Pessoas];[Pessoas]Numero ID=todosIDs{asNomes})
  // Fazer algo com o registro
       End if
 End case
 
  // Método de objeto do botão bA2Z
  // Ordenação dos arrays em ordem crescente conservando a sincronização
 SORT ARRAY(asNomes;todosIDs;>)
 
  // Método de objeto do botão bZ2A
  // Ordenação dos arrays em ordem decrescente conservando a sincronização
 SORT ARRAY(asNomes;todosIDs;<)
```

#### Ver também 

[Find in sorted array](find-in-sorted-array.md)  
[MULTI SORT ARRAY](multi-sort-array.md)  
[ORDER BY](order-by.md)  
[SELECTION TO ARRAY](selection-to-array.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 229 |
| Thread-seguro | &check; |
| Proibido no servidor ||


