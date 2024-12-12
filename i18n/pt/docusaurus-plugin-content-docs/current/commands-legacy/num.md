---
id: num
title: Num
slug: /commands/num
displayed_sidebar: docs
---

<!--REF #_command_.Num.Syntax-->**Num** ( *expressao* {; *separador*} ) : Real<!-- END REF-->
<!--REF #_command_.Num.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| expressao | Text, Boolean, Integer | &#8594;  | Cadeia para a qual retornar a forma numérica, ou Booleano para devolver 0 ou 1, ou expressão numérica |
| separador | Text | &#8594;  | Separador decimal |
| Resultado | Real | &#8592; | Formato numérico do parâmetro da expressão |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Num.Summary-->O comando Num devolve em forma numérica a expressão de tipo cadeia, booleano, ou numérica que passou em *expressao*.<!-- END REF--> O parâmetro opcional *separador* pode ser utilizado para determinar um separador decimal para a avaliação das expressões de tipo cadeia.  
  
**Expressões de tipo cadeia** 
Se *expressao* consiste apenas de um ou mais caracteres alfabéticos, Num devolve zero. Se *expressao* inclui caracteres alfabéticos e caracteres numéricos, o comando ignora os caracteres alfabéticos. Assim, Num transforma a cadeia "a1b2c3" no número 123.  
  
Há três caracteres reservados que Num trata de maneira especial: o separador decimal definido dentro do sistema (se o parâmetro *separador* não for passado), o hífen “-”, e “*e*” ou “*E*”. Estes caracteres são interpretados como caracteres de formato numérico.  

* O separador decimal é interpretado como uma casa decimal e deve aparecer em uma cadeia numérica. Como padrão, o comando utiliza o separador decimal definido no sistema operativo. Pode modificar este caractere utilizando o parâmetro separador (ver a continuação).
* O hífen define um número ou expoente negativo. O hífen deve aparecer antes dos caracteres numéricos negativos ou depois da “e” para um expoente. Exceto pelo caractere “e”, se um hífen está em uma cadeia numérica, a porção da cadeia depois do hífen é ignorado. Por exemplo, **Num**("123-456") devolve 123, mas **Num**("-9") devolve -9.
* O "e" ou "E" faz com que todos os caracteres numéricos à direita sejam interpretados como a potência de um expoente. O “e” deve estar em uma cadeia numérica. Desta forma, **Num**("123e–2") devolve 1,23.
* Note que no caso de uma cadeia ter mais de um caractere "e", a conversão poderá dar resultados diferentes em Mac OS e em Windows.
O parâmetro *separador* pode ser utilizado para determinar um separador decimal personalizado para a avaliação de *expressao*. Quando a cadeia a avaliar for expressa com um separador decimal diferente do separador do sistema, o comando devolve um resultado incorreto. O parâmetro *separador* pode ser utilizado neste caso para obter uma avaliação correta. Quando se passa este parâmetro, o comando não considera o separador decimal do sistema. Pode passar um ou mais caracteres.  
  
**Nota**: o comando [GET SYSTEM FORMAT](get-system-format.md) pode ser utilizado para descobrir qual o separador decimal atual assim como outros parâmetros de sistema regionais.  
  
**Expressões de tipo Booleano**  
  
Se passar uma expressão booleana, Num devolve 1 se a expressão for True; do contrário devolve *0 (zero)*.  
  
**Expressões numéricas**  
  
Se passar uma expressão numérica no parâmetro *expressao*, Num devolve o valor passado no parâmetro *expressao* da maneira que estiver. Isso pode ser útil especialmente no caso de programação genérica utilizando ponteiros.  
  
  
**Expressões indefinidas**  
Se a *expressao* for avaliada como indefinida, o comando devolve 0 (zero). Isso é útil quando se espera que o resultado de uma expressão (por exemplo, um atributo objeto) seja um número, mesmo se puder ser indefinido.

#### Exemplo 1 

O exemplo abaixo ilustra como funciona Num quando for passado um argumento de tipo cadeia. Cada linha atribui um número à variável *vResult*. Os comentários descrevem os resultados: 

```4d
 vResult:=Num("ABCD") // vResult vale 0
 vResult:=Num("A1B2C3") // vResult vale 123
 vResult:=Num("123") // vResult vale 123
 vResult:=Num("123,4") // vResult vale 123,4
 vResult:=Num("-123") // vResult vale -123
 vResult:=Num("-123e2") // vResult vale -12300
```

#### Exemplo 2 

Neste exemplo, *\[Cliente\]Dívida* é comparado com o valor *$1000*. O comando Num aplicado a esta comparação devolve 1 ou 0\. A multiplicação de uma cadeia por 1 ou 0 devolve a cadeia ou a cadeia vazia. Como resultado, *\[Cliente\]Risco* recebe o valor “Aceitável” ou “Inaceitável”:   
  
```4d
  // Se o cliente tiver dívidas menores a 1000, o risco é aceitável.
  // Se o cliente tiver dívidas superiores a 1000, o risco é inaceitável.
 [Cliente]Risco:=("Aceitável"*Num([Cliente]Dívida<1000))+("Inaceitável"*Num([Cliente]Dívida>=1000))
```

#### Exemplo 3 

Este exemplo compara os resultados obtidos dependendo do separador “atual”: 

```4d
 $umaCadeia:="33,333.33"
 $num:=Num($umaCadeia)
  // by default, $num é igual a 33,33333 em um sistema francês
 $num:=Num($umaCadeia;".")
  // $num será avaliada corretamente sem importar o sistema;
  // por exemplo, 33 333,33 em um sistema francês
```

#### Ver também 

[Bool](bool.md)  
[GET SYSTEM FORMAT](get-system-format.md)  
[String](string.md)  