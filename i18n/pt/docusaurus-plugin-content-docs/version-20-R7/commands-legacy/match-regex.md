---
id: match-regex
title: Match regex
slug: /commands/match-regex
displayed_sidebar: docs
---

<!--REF #_command_.Match regex.Syntax-->**Match regex** ( *padrao* ; *umaCadeia* ; *posiçao* {; pos_encont ; compr_encont}{; *} ) -> Resultado <br/>
**Match regex** ( *padrao* ; *umaCadeia* ) -> Resultado<!-- END REF-->
<!--REF #_command_.Match regex.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| padrao | Text | &#8594;  | Expressão regular |
| umaCadeia | Text | &#8594;  | Cadeia na qual será realizada a pesquisa |
| posiçao | Integer | &#8594;  | Posição em umaCadeia onde começa a pesquisa |
| pos_encont | Integer array, Integer | &#8592; | Posição da ocorrência |
| compr_encont | Integer array, Integer | &#8592; | Comprimento da ocorrência |
| * | Operador | &#8594;  | Se passado, a função pesquisa apenas na posição indicada |
| Resultado | Boolean | &#8592; | True=pesquisa encontrou uma ocorrência, se não, False |
| Match regex ( padrao ; umaCadeia ) -> Resultado |
| Parâmetro | Tipo | Descrição |
| padrao | Text | &#8594;  | Expressão regular (igualdade completa) |
| umaCadeia | Text | &#8594;  | Cadeia na qual será realizada a pesquisa |
| Resultado | Boolean | &#8592; | True = pesquisa encontrou uma ocorrência, se não, False |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Match regex.Summary-->O comando **Match regex** permite provar a conformidade de uma cadeia de caracteres relativo a um conjunto de regras sintetizadas por meio de um metalinguagem chamado “expressão regular” ou “expressão racional.<!-- END REF-->” A abreviação regex é comumente empregada para indicar estes tipos de notações.

Passe em *padrao* a expressão regular a procurar. Consiste em um conjunto de caracteres utilizado para descrever uma cadeia de caracteres, utilizando caracteres especiais.  
  
Passe em *umaCadeia* a cadeia na qual buscar a expressão regular.  
  
Passe em *início*, a posição em *umaCadeia* onde deve começar a pesquisa.  
  
Se *pos\_encont*. e *compr\_encont* são variáveis, o comando devolve a posição e o comprimento da ocorrência nestas variáveis. Se passa arrays, o comando devolve a posição e o comprimento da ocorrência no elemento zero dos arrays e as posições e comprimentos dos grupos capturados pela expressão regular nos elementos seguintes.  
  
O parâmetro opcional *\** indica, quando for passado, que a pesquisa deve ser realizada na posição especificada por *início* e para de pesquisar em caso de falhas.  
  
O comando devolve **True** se a pesquisa encontrar uma ocorrência.  
  
Para maior informação sobre regex, consulte o seguinte endereço:  
[http://pt.wikipedia.org/wiki/Express%C3%A3o\_regular](http://en.wikipedia.org/wiki/Regular%5Fexpression)

Para maior informação sobre a sintaxe das expressões regulares passadas no parâmetro *padrao*, consulte o seguinte endereço:  
*https://unicode-org.github.io/icu/userguide/strings/regexp.html#regular-expressions*

#### Exemplo 1 

Pesquisa de igualdade completa: 

```4d
 vencont:=Match regex(motivo;meutexto)
 QUERY BY FORMULA([Empregados];Match regex(".*vargas.*";[Empregados]sobrenome))
```

#### Exemplo 2 

Pesquisa no texto por posição: 

```4d
 vencont:=Match regex(motivo;meutexto;inicio;pos_encont;compr_encont)
```

Exemplo para mostrar todas as etiquetas de $1:

```4d
 inicio:=1
 Repeat
    vencont:=Match regex("<.*>";$1;inicio;pos_encont;compr_encont)
    If(vencont)
       ALERT(Substring($1;pos_encont;compr_encont))
       inicio:=pos_encont+compr_encont
    End if
 Until(Not(vencont))
```

#### Exemplo 3 

Pesquisa compatível com “grupos capturados” através de parênteses. ( ) são utilizadas para especificar grupos nos regex:    
*vencont:=Match regex(motivo;meutexto; inicio; pos\_encont; compr\_encont\_array)* 

```4d
 ARRAY LONGINT(pos_encont_array;0)
 ARRAY LONGINT(compr_encont_array;0)
 vencont:=Match regex("(.*)stuff(.*)";$1;1;pos_encont_array;compr_encont_array)
 If(vencont)
    $grupo1:=Substring($1;pos_encont_array{1};compr_encont_array{1})
    $grupo2:=Substring($1;pos_encont_array{2};compr_encont_array{2})
 End if
```

#### Exemplo 4 

Pesquisa limitando a comparação do motivo a posição indicada:  
Adicionar una estrela ao final de uma das duas sintaxes anteriores. 

```4d
 vencont:=Match regex("a.b";"---a-b---";1;$pos_encont;$compr_encont )
  //devolve True
 vencont:=Match regex("a.b";"---a-b---";1;$pos_encont;$compr_encont ;*)
  //devolve False
 vencont:=Match regex("a.b";"---a-b---";4;$pos_encont;$compr_encont ;*)
  //devolve True
```

**Nota:** as posições e comprimentos retornados são significativos apenas em modo Unicode ou se o texto manipulado for de tipo ASCII 7-bits.

#### Gestão de erros 

Em caso de erro, o comando gera um erro que pode interceptar através de um método instalado pelo comando [ON ERR CALL](on-err-call.md "ON ERR CALL").


#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1019 |
| Thread-seguro | &check; |
| Modificar variáveis | error |
| Proibido no servidor ||


