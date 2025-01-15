---
id: resolve-pointer
title: RESOLVE POINTER
slug: /commands/resolve-pointer
displayed_sidebar: docs
---

<!--REF #_command_.RESOLVE POINTER.Syntax-->**RESOLVE POINTER** ( *umPonteiro* ; *nomeVar* ; *numTabela* ; *numCampo* )<!-- END REF-->
<!--REF #_command_.RESOLVE POINTER.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| umPointer | Pointer | &#8594;  | Ponteiro do qual recuperar o objeto referenciado |
| nomeVar | Text | &#8592; | Nome da variável referenciada ou da string vazia |
| numTabela | Integer | &#8592; | Número de tabela referenciada ou elemento array ou 0 ou -1 |
| numCampo | Integer | &#8592; | Número de campo referenciado ou 0 |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.RESOLVE POINTER.Summary-->O comando RESOLVE POINTER recupera a informação do objeto referenciado pela expressão de ponteiro *ponteiro* e a devolve nos parâmetros *nomVar*, *numTabela,* e *numCamp*.<!-- END REF-->

Dependendo da natureza do objeto referenciado, RESOLVE POINTER devolve os seguintes valores:

| **Objeto referenciado** | **Parâmetros**    |                           |                 |
| ----------------------- | ----------------- | ------------------------- | --------------- |
| nomVar                  | numTabela         | numCamp                   |                 |
| Nada (NIL pointer)      | "" (string vazia) | 0                         | 0               |
| Variável                | Nome da variável  | \-1                       | 0               |
| Array                   | Nome do array     | \-1                       | 0               |
| Elemento de array 2D    | Nome do array     | número do elemento coluna | 0               |
| Tabela                  | "" (string vazia) | número da tabela          | 0               |
| Campo                   | "" (string vazia) | número da tabela          | número do campo |

**Notas:** 

* Se o valor que passa em *ponteiro* não for uma expressão de tipo ponteiro, será gerado um erro de sintaxe.
* O comando RESOLVE POINTER não funciona com ponteiros a variáveis locais. Na verdade, por definição muitas variáveis locais com o mesmo nome poderiam existir em diferentes lugares, de maneira que não é possível para o comando encontrar a variável correta.

#### Exemplo 1 

Em um formulário, você cria um grupo de 100 variáveis editáveis chamadas v1, v2... v100\. Para fazer isto, você realiza os seguintes passos: 

a. Cria uma variável editável que chama v. 

b. Define as propriedades do objeto. 

c. Associa o seguinte método ao objeto:

```4d
 FazerAlgo(Self) // FazerAlgo é um método de projeto de seu banco
```

  
d. Neste ponto, pode duplicar a variável tantas vezes como seja necessária, ou utilizar a funcionalidade Duplicar sobre matriz no editor de formulários.

e. No método FazerAlgo, é necessário conhecer o índice da variável para a qual se chama o método, escreve:

```4d
 RESOLVE POINTER($1;$vsNomVar;$vlNumTabela;$vlNumCampo)
 $vlNomVar:=Num(Substring($vsNomVar;2))
```

Note que construindo seu formulário desta maneira, você escreve os métodos para as 100 variáveis apenas uma vez; não necessita escrever FazerAlgo (1), FazerAlgo (2)...,FazerAlgo (100).

#### Exemplo 2 

Por propósitos de depuração, necessita verificar que o segundo parâmetro ($2) de um método é um ponteiro a uma tabela. Ao começo deste método, escreve: 

```4d
  // ...
 If(◊DebugOn)
    RESOLVE POINTER($2;$vsNomVar;$vlNumTabela;$vlNumCampo)
    If(Not(($vlNumTabela>0) & ($vlNumCampo=-1) & ($vsNomVar="")))
  // ATENÇAO: O ponteiro nao é uma referência a uma tabela
       TRACE
       End
    End if
  // ...
```

#### Exemplo 3 

Ver o exemplo do comando DRAG AND DROP PROPERTIES.

#### Exemplo 4 

Este é um exemplo de ponteiro a um array 2D:

```4d
 ARRAY TEXT(atCities;100;50)
 var $city : Pointer
 atCities{1}{2}:="Rome"
 atCities{1}{5}:="Paris"
 atCities{2}{6}:="New York"
  // ...outros valores
 $city:=->atCities{1}{5}
 RESOLVE POINTER($city;$var;$rowNum;$colNum)
  //$var="atCities"
  //$rowNum="1"
  //$colNum="5"
```

#### Ver também 

[Field](field.md)  
[Get pointer](get-pointer.md)  
[Is a variable](is-a-variable.md)  
[Is nil pointer](is-nil-pointer.md)  
[Table](table.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 394 |
| Thread-seguro | &check; |


