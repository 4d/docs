---
id: replace-string
title: Replace string
slug: /commands/replace-string
displayed_sidebar: docs
---

<!--REF #_command_.Replace string.Syntax-->**Replace string** ( *fonte* ; *obsoleto* ; *novo* {; *quantasVezes*}{; *} ) : Text<!-- END REF-->
<!--REF #_command_.Replace string.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| fonte | Text | &#8594;  | Cadeia original |
| obsoleto | Text | &#8594;  | Caracteres a substituir |
| novo | Text | &#8594;  | Cadeia que vai substituir a velha (se estiver vazia, as ocorrências são apagadas) |
| quantasVezes | Integer | &#8594;  | Quantas vezes substituir; se omitido, todas as ocorrências serão substituídas |
| * | Operador | &#8594;  | Se passado: avaliação baseada em códigos de caracteres |
| Resultado | Text | &#8592; | Cadeia resultante |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Replace string.Summary-->Replace string substitui um número *quantasVezes* de ocorrências, em *fonte,* de *obsoleto* por *novo* .<!-- END REF-->  
  
Se *novo* for uma cadeia vazia (""), Replace string apaga cada ocorrência de *obsoleto* em *fonte*.

Se *quantasVezes* for especificada, Replace string apenas substituirá o número de ocorrências de *obsoleto* especificadas, a partir do primeiro caractere de *fonte*. Se *quantasVezes* não for especificada, então todas as ocorrências de *obsoleto* serão substituídas.  
  
Se *obsoleto* for uma cadeia vazia,Replace string devolve *fonte* intacto.

Como padrão, o comando faz comparações globais que consideram particularidades linguísticas e das letras que podem ser escritas com um ou mais caracteres (por exemplo æ = ae). Por outro lado, se não for diacrítico (a=A, a=à, etc.) e não considerar os caracteres "ignoráveis" tais como os caracteres cujo código for < 9 (especificação Unicode).

Para modificar este funcionamento, passe como último parâmetro *\**. Neste caso, as comparações estarão baseadas em códigos de caracteres. 

Deve passar o parâmetro *\**:

* Se deseja substituir os caracteres especiais, utilizados por exemplo como delimitadores (**Char**(1)...),
* Se o substituto de caracteres deve considerar as maiúsculas, minúsculas e os caracteres acentuados (a#A, a#à, etc.).
* Note que nesse modo, a avaliação não lida com variações na maneira como as palavras são escritas.

**Nota**: Em 4D v15 R3 e superior, uma otimização significativa foi feita ao algoritmo usado pelo comando quando substituir uma string por outra de um tamanho diferente, independente da sintaxe usada. Isto resulta em uma considerável aceleração do processamento. 

#### Exemplo 1 

O exemplo abaixo ilustra o uso de Replace string. Os resultados, descritos nos comentários, são atribuídos a variável *vtResult*. 

```4d
 vtResult:=Replace string("Filho";"lh";"tr") // vtResult é igual a "Filtro"
 vtResult:=Replace string(General"; "ne";"")  // vtResultes igual a "Geral"
 vtResult:=Replace string(vtOutraVar;Char(Tab);",";*) // Substitui todas as tabulações em vtOutraVar por vírgulas
```

#### Exemplo 2 

O exemplo abaixo elimina os retornos de carro e as tabulações do texto na variável *vtResult*: 

```4d
 vtResult:=Replace string(Replace string(vtResult;Char(Carriage return);"";*);Char(Tab);"")
```

#### Exemplo 3 

O exemplo abaixo ilustra o uso do parâmetro \* no caso de uma avaliação diacrítica: 

```4d
 vtResult:=Replace string("Crème brûlée";"Brulee";"caramel") //vtResult é igual a "Crème caramel"
 vtResult:=Replace string("Crème brûlée";"Brulee";"caramel";*) //vtResult é igual a "Crème brûlée"
```

#### Ver também 

[Change string](change-string.md)  
[Delete string](delete-string.md)  
[Insert string](insert-string.md)  