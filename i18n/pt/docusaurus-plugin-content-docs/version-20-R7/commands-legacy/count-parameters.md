---
id: count-parameters
title: Count parameters
slug: /commands/count-parameters
displayed_sidebar: docs
---

<!--REF #_command_.Count parameters.Syntax-->**Count parameters**  : Integer<!-- END REF-->
<!--REF #_command_.Count parameters.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Integer | &#8592; | Número de parâmetros realmente passado |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Count parameters.Summary-->O comando Count parameters devolve o número de parâmetros passados a um método de projeto.<!-- END REF-->Count parameters é significativo apenas em um método de projeto que tenha sido chamado por outro método (método de projeto ou outro). Se o método de projeto que chama Count parameters está associado a um menu, Count parameters devolve 0.

#### Exemplo 1 

Os métodos de projeto de 4D aceitam parâmetros opcionais, a partir da direita.  
Por exemplo, pode chamar ao método MeuMetodo(a;b;c;d) das seguintes formas: 

```4d
 MeuMetodo(a;b;c;d) // Todos os parâmetros são passados
 MeuMetodo(a;b;c) // O último parâmetro não se passa
 MeuMetodo(a;b) // os dois últimos parâmetros não são passados
 MeuMetodo(a) // Só é passado o primeiro parâmetro
 MeuMetodo // Não se passa nenhum parâmetro
```

Utilizando Count parameters desde MeuMetodo, pode detectar o número de parâmetros passados e realizar diferentes operações dependendo do que tenha recebido. O exemplo a seguir mostra uma mensagem de texto e pode inserir o texto em uma área 4D Write ou enviar o texto a um documento em disco:

```4d
  // Método de projeto AGREGAR TEXTO
  // AGREGAR TEXTO ( Texto { ; Inteiro longo { ; Hora } } )
  // AGREGAR TEXT ( Texto { ; Área 4D Write { ; RefDoc } } )
 
 var $1 : Text
 var $2 : Time
 var $3 : Integer
 
 MESSAGE($1)
 If(Count parameters>=3)
    SEND PACKET($3;$1)
 Else
    If(Count parameters>=2)
       WR INSERT TEXT($2;$1)
    End if
 End if
```

Depois de adicionar este método de projeto a sua aplicação, pode escrever:

```4d
 AGREGAR TEXTO(vtText) // Mostrar só a mensagem de texto
 AGREGAR TEXTO(vtText;$wrArea) // Mostrar a mensagem de texto e adicionar o texto a $wrArea
 AGREGAR TEXTO(vtText;0;$vhRefDoc) // Mostrar a mensagem de texto e escrevê-la em $vhDocRef
```

#### Exemplo 2 

Os métodos de projeto de 4D aceitam um número variável de parâmetros do mesmo tipo, a partir da direita. Para declarar estes parâmetros, utilize as diretivas de compilação às quais você passa *${N}* como uma variável, onde N especifica o primeiro parâmetro. Utilizando Count parameters pode referenciar estes parâmetros com um loop For e a sintaxe de indireção de parâmetro. Este exemplo é uma função que retorna o número mais grande recebido como parâmetro: 

```4d
  // Método de projeto Max de
  // Max de ( Real { ; Real2... ; RealN } ) -> Real
  // Max de ( Valor { ; Valor2... ; ValorN } ) -> Valor máximo
 
 var $0;${1} : Real // Todos os parâmetros são de tipo REAL assim como o resultado da função
 $0:=${1}
 For($vlParam;2;Count parameters)
    If(${$vlParam}>$0)
       $0:=${$vlParam}
    End if
 End for
```

Depois de adicionar este método de projeto a sua aplicação, pode escrever:

```4d
 vrResult:=Max of(Records in set("Operação A");Records in set("Operação B"))
```

ou:

```4d
 vrResult:=Max of(r1;r2;r3;r4;r5;r6)
```

#### Ver também 

*Comandos de Compilação*  
[Copy parameters](copy-parameters.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 259 |
| Thread-seguro | &check; |
| Proibido no servidor ||


