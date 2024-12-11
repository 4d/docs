---
id: value-type
title: Value type
slug: /commands/value-type
displayed_sidebar: docs
---

<!--REF #_command_.Value type.Syntax-->**Value type** ( *expressão* ) : Integer<!-- END REF-->
<!--REF #_command_.Value type.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| expressão | Expression | &#8594;  | Expressão cujo valor resultante será testado |
| Resultado | Integer | &#8592; | Número do tipo de dado |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Value type.Summary-->O comando Value type devolve o tipo de valor resultante da avaliação da *expressão* que passou como parâmetro.<!-- END REF--> 

O comando devolve um valor numérico que pode ser comparado com uma das constantes abaixo do tema *Tipos de campos e variáveis*: 

| Constante     | Tipo          | Valor |
| ------------- | ------------- | ----- |
| \_o\_Is float | Inteiro longo | 35    |
| Is BLOB       | Inteiro longo | 30    |
| Is Boolean    | Inteiro longo | 6     |
| Is collection | Inteiro longo | 42    |
| Is date       | Inteiro longo | 4     |
| Is longint    | Inteiro longo | 9     |
| Is null       | Inteiro longo | 255   |
| Is object     | Inteiro longo | 38    |
| Is picture    | Inteiro longo | 3     |
| Is pointer    | Inteiro longo | 23    |
| Is real       | Inteiro longo | 1     |
| Is text       | Inteiro longo | 2     |
| Is time       | Inteiro longo | 11    |
| Is undefined  | Inteiro longo | 5     |
| Is variant    | Inteiro longo | 12    |
| Object array  | Inteiro longo | 39    |

Este comando foi criado para devolver o tipo de uma expressão escalar, ou seja, valores armazenados ou devolvidos pela *expressão*. Em particular, pode ser aplicada às seguintes expressões 4D:

* Propriedades de objetos (*emp.name*),
* Elementos da coleção (*myCol\[5\]*).

Nota: As propriedades numéricas dos objetos sempre são consideradas valores reais:

```4d
 var $o : Object
 $o:=New object("value";42)
 $vType:=Value type($o.value) //$vType=Is real
```

Value type pode ser aplicado a qualquer expressão 4D válida, incluindo campos, variáveis e parâmetros. Neste caso, diferente do comando [Type](type.md), **Value type** devolve o tipo *internal* de valor resultante da avaliação da *expressão e* não seu tipo declarado. Dado que a linguagem 4D converte alguns tipos de valores internamente, o resultado de **Value type** pode diferir do tipo declarado. Por exemplo, 4D converte internamente os valores de campo de tipo "*Inteiro 64 bits*". Isso dá os resultados abaixo:

```4d
 $vType1:=Type([myTable]Long64field) //$vType=Is integer 64 bits
 $vType2:=Value type([myTable]Long64field) //$vType=Is real (em modo interpretado)
```

Outras diferenças estão relacionadas com arrays (a avaliação de um array devolve o índice de elementos atual) e o modo compilado. Na tabela abaixo estas diferenças são numeradas:

| **Tipo declarado**      | [Type](type.md) **resultado** | **Value type resultado (interpretado)** | **Value type resultado (compilado)** | **Comentário**                                                                                         |
| ----------------------- | ----------------------------- | --------------------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| ARRAY TEXT($t;1)        | Text array                    | Is real                                 | Is longint                           | $t contém o índice de elemento atual, que é um número                                                  |
| Campo *Alfa*            | Is alpha field                | Is text                                 | Is text                              | 4D maneja internamente todas as strings como textos                                                    |
| Campo *Inteiro*         | Is integer                    | Is real                                 | Is longint                           | Por motivos de otimização, em modo interpretado todos os valores numéricos são considerados reais e... |
| Campo *Inteiro Longo*   | Is longint                    | Is real                                 | Is longint                           | ... em modo compilado, todos os valores inteiros são considerados inteiros longos                      |
| Campo *Inteiro 64 bits* | Is integer 64 bits            | Is real                                 | Is longint                           |                                                                                                        |

Se quiser escrever um teste para um valor de tipo numérico válido para os modos compilado e interpretado, pode considerar o uso de um código como:

```4d
 If(Value type($myValue)=Is longint)|(Value type($myValue)=Is real)
```

Nota de compatibilidade: A partir de 4D v16 R6, datas são armazenadas em propriedades de objeto ou com o tipo data ou como texto em formato data ISO. Para saber mais veja os comandos Dates inside objects ou [SET DATABASE PARAMETER](set-database-parameter.md).

#### Exemplo 1 

Se quiser manejar os vários tipos possíveis de um valor propriedade objeto:

```4d
 Case of
    :(Value type($o.value)=Is real)
  //maneja um valor numérico
    :(Value type($o.value)=Is text)
  //maneja um texto
    :(Value type($o.value)=Is object)
  //maneja um sub-objeto
       ...
 End case
```

#### Exemplo 2 

Se quiser somar todos os valores númericos em uma coleção

```4d
 var $col : Collection
 
var $sum : Real
 $col:=New collection("Hello";20;"World2";15;50;Current date;True;10)
 For($i;0;$col.length-1) //-1 já que coleções começam em  0
    If(Value type($col[$i])=Is real)
       $sum:=$sum+$col[$i]
    End if
 End for
 ALERT(String($sum)) //95


```

#### Ver também 

[OB Get type](ob-get-type.md)  
[Type](type.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1509 |
| Thread-seguro | &check; |
| Proibido no servidor ||


