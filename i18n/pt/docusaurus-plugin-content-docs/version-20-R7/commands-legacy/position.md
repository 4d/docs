---
id: position
title: Position
slug: /commands/position
displayed_sidebar: docs
---

<!--REF #_command_.Position.Syntax-->**Position** ( *pesquisar* ; *cadeia* {; *inicio* {; *comprEncont*}}{; *} ) -> Resultado  <br/>
**Position** ( *pesquisar* ; *string* ; *inicio* ; *comprimentoEncontrado* ; *opções* ) -> Resultado<!-- END REF-->
<!--REF #_command_.Position.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| pesquisar | Text | &#8594;  | Cadeia a procurar |
| cadeia | Text | &#8594;  | Cadeia na qual procurar |
| inicio | Integer | &#8594;  | Posição na cadeia onde iniciar a pesquisa |
| comprEncont | Integer | &#8592; | Comprimento da cadeia encontrada |
| * | Operador | &#8594;  | Se passado: avaliação baseada em códigos de caracteres |
| Resultado | Integer | &#8592; | Posição da primeira ocorrência |
| Position ( pesquisar ; string ; inicio ; comprimentoEncontrado ; opções ) -> Resultado |
| Parâmetro | Tipo | Descrição |
| pesquisar | Text | &#8594;  | String a pesquisar |
| string | Text | &#8594;  | texto no qual procurar |
| inicio | Integer | &#8594;  | Posição no texto onde a pesquisa começa |
| comprimentoEncontrado | Integer | &#8594;  | Comprimento do texto encontrado |
| opções | Integer | &#8594;  | Condições de pesquisa |
| Resultado | Integer | &#8592; | Posição da primeira ocorrência |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Position.Summary-->Position devolve a posição da primeira ocorrência de *pesquisar* em *cadeia*.<!-- END REF-->

Se *cadeia* não contiver *pesquisar*, devolve zero (0).

Se Position localiza uma ocorrência de *pesquisar*, a função devolve a posição do primeiro caractere desta ocorrência em *cadeia*.  
  
Se pergunta pela posição de uma cadeia vazia dentro de uma cadeia vazia, Position devolve zero (0).

O parâmetro *comprEncont*, se for passado, devolve o comprimento da cadeia atualmente encontrada pela pesquisa. Este parâmetro é necessário para poder gerir corretamente letras escritas com um ou mais caracteres (exemplo: æ ou ae, ß ou ss, etc.).  
Se passar o parâmetro *\** (ver abaixo), estas letras não são consideradas como sendo equivalentes (æ # ae); em modo diacritico, *comprEncont* sempre é igual ao comprimento de *pesquisar* (se for encontrada uma ocorrência).

Como padrão, o comando faz comparações globais que consideram particularidades linguísticas e letras que podem estar escritas com um ou mais caracteres (por exemplo æ = ae). Por outra parte, se não for diacrítica (a=A, a=à etc.) e não considera os caracteres "ignoráveis". Os caracteres ignoráveis incluem todos os caracteres do subset unicode *CO Control* (U+0000 a U+001F, ascii character control set) exceto os caracteres imprimíveis (U+0009 TAB, U+0010 LF, U+0011 VT, U+0012 FF e U+0013 CR).  
  
Para modificar este funcionamento, pode pasasr

* **(primeira sintaxe - parâmetro**) o asterisco *\** como último parâmetro. Neste caso, as comparações são baseados nos códigos dos caracteres. Deve passar o parâmetro \*:  
   * Se quiser considerar caracteres especiais, utilizados por exemplo como delimitadores (**Char**(1), etc.),  
   * Se quiser que a avaliação de caracteres deve ser sensível às maiúsculas e minúsculas e considerar os caracteres acentuados (a # A, à # a, etc.)
* Note que neste modo, a avaliação não maneja variações na maneira em que as palavras são escritas.

**Nota:** em certos casos, usar o parâmetro *\** pode acelerar significativamente a execução do comando. 

* **(Segunda Sintaxe - parâmetro *opçõe*s)** uma combinação das seguintes constantes do tema *Strings*:
* | Constante                | Valor | Comentário                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |  
| ------------------------ | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| sk case insensitive      | 2     | As strings são comparadas segundo a linguagem atual dos dados sem levar em consideração as diferenças de maiúsculas e minúsculas. Note que os signos diacríticos são levados em consideração. Por exemplo, "A" é considerado a mesma coisa que "a". Entretanto "a" não é considerado o mesmo que "à". Como padrão, a comparação de strings 4D não considera maiúsculas e minúsculas. <br/>Pode ser combinado com: sk char codes OU sk diacritic insensitive sk whole word ([Position](position.md) apenas comando Essa constante implica o uso das constantes abaixo (que podem ser combinadas para melhorar a legibilidade): sk kana insensitive sk width insensitive sk strict                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |  
| sk char codes            | 1     | As strings são comparadas segundo os códigos de caracteres. Os parâmetros atuais da linguagem de dados não são levados em consideração durante a comparação. Pode ser combinada com: sk case insensitive Só para os intervalos "a-z" ou "A-Z". (por exemplo., Alpha = alpha, mas Alpha # âlphà)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |  
| sk diacritic insensitive | 4     | As strings são comparadas de acordo com a linguagem atual dos dados. Entretanto, os acentos ou símbolos das letras são ignorados. Por exemplo, "a" é considerado a mesma coisa que "à". Pode ser combinado com sk case insensitive sk whole word ([Position](position.md) só comandos) Essa constante implica o uso das constantes abaixo (que podem também ser combinados para melhor a legibilidade): sk kana insensitive sk width insensitive sk strict                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |  
| sk kana insensitive      | 8     | Para a linguagem japonesa. Controla a diferenciação entre as sílabas em Hiragana e Katakana. De um ponto de vista semântico, a diferença entre Hiragana e Katana é geralmente importante, msa não captura tantos resultados quanto possível. O modo padrão em 4D é ignorar a diferença (kana insensitive). Por exemplo, "あ" é considerado como a mesma coisa que "ア". A opção sk strict realiza comparações sensíveis a kana. sk kana insensitive pode ser usado para parcialmente relaxar a regra de insensível a kana. **Nota:** A linguagem de dados deve ser estabelecida para Japonês para usar essa opção. Para todas as outras linguagens, essa opção é ignorada e [Compare strings](compare-strings.md) vai funcionar como se sk strict tivesse sido especificada. Ou seja, estabelecer essa opção para contextos não-japoneses faria com que a comparação fosse sensível a kana (o efeito oposto). Pode ser combinado com: sk case insensitive sk diacritic insensitive Essa constante implica o uso das constantes abaixo (que podem também ser combinados para melhor a legibilidade): sk width insensitive sk strict                                                                                                                                                                                                                                                                     |  
| sk strict                | 0     | Strings são comparadas para correspondências exatas de acordo com a linguagem atual. Na maioria dos casos, capitalização e marcas diacríticas de letras são levadas em consideração durante a comparação. Pode ser combinado com: sk case insensitive sk diacritic insensitive sk kana insensitive Essa constante implica o uso das constantes abaixo (que podem também ser combinados para melhor a legibilidade): sk width insensitive                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |  
| sk whole word            | 32    | Strings são comparadas de acordo com a lingaugem de dados atual. Apenas strings que são palavras completas são consideradas. Strings correspondentes a outras strings não são consideradas. Por exemplo, "where" não é considerado quando encontrado dentro de "somewhere". Pode ser combinado com: sk case insensitive ([Position](position.md) apenas comandos) sk diacritic insensitive ([Position](position.md) apenas comandos)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |  
| sk width insensitive     | 16    | Para a linguagem japonesa. Corresponde à norma Unicode "East Asian Width", definida em [Anexo #11 do padrão Unicode](http://www.unicode.org/reports/tr11/).Desde um ponto de vista semântico, a diferença entre um carácter "estreito" e "largo" ou um caractere "largura completa" e "meia largura" costuma ser insignificante, que é o modo normal em 4D.Por exemplo, "ｱ" se considera a mesma coisa que "ア". A opção sk strict realiza uma comparação sensível à largura.  Strings são comparadas por tamanho de caractere de acordo com a linguagem de dados atual. por exemplo, "ｱ" é considerado o mesmo que "ア". **Notas:** O idioma dos dados deve ser o japonês para poder usar essa opção. Para todos os demais idiomas, a opção é ignorada e [Compare strings](compare-strings.md) funcionará como se especificasse sk strict. Em outras palavras, estabelecer essa opção em um contexto que não seja japonês faria que a comparação fosse sensível à largura (o efeito contrário). Esta opção é ignorada pela função [Position](position.md). A comparação insensìvel à largura de Unicode é assimétrica e impossível de localizar por posição ou largura. Pode ser combinada com: sk case insensitive sk diacritic insensitive sk kana insensitive sk strict Essa constante implica o uso das constantes abaixo (que podem também ser combinados para melhor a legibilidade): sk strict |  
    
    
Para informação sobre a definição da linguagem de dados, ver em *Referência de Design*.

**Advertência**: não pode utilizar o caractere arroba @ com Position. Por exemplo, se passa "*abc@*" em *pesquisar*, o comando pesquisará a cadeia "*abc@*" e não por "*abc*" seguido de outros caracteres.

#### Exemplo 1 

Este exemplo ilustra o uso de Position. Os resultados, descritos nos comentários, são atribuídos à variável *vlResult*. 

```4d
 vlResult:=Position("ll";"Bilhar") // vlResult toma o valor 3
 vlResult:=Position(vtText1;vtText2) // Posição da primeira ocorrência de vtText1 em vtText2
 vlResult:=Position("todo";"todos os processos dentro de um método";1) // vlResult toma o valor 1
 vlResult:=Position("todo";"todos os processos dentro de um método";2) // vlResult toma o valor 35
 vlResult:=Position("TODO";"todos os processos dentro de um método";1;*) // vlResult toma o valor 0
 vlResult:=Position("œ";"Bœuf";1;$comprimento) // vlResult =2, $comprimento= 1
```

#### Exemplo 2 

No exemplo abaixo, o parâmetro *comprEncont* permite pesquisar todas as ocorrências de "aegis" em um texto, sem importar como está escrito: 

```4d
 $inicio:=1
 Repeat
    vlResult:=Position("aegis";$text;$inicio;$longEncont)
    $inicio:=$inicio+$comprEncont
 Until(vlResult=0)
```

#### Exemplo 3 

No exemplo abaixo, se quiser encontrar todas as instâncias de uma string e substituí-la:

```4d
 var $lengthFound : Integer
 
 $string:="Hello Joelle and joel!"
 $find:="joel"
 $replace:="Joël"
 $option:=sk case insensitive+sk diacritic insensitive
 
 $p:=0
 Repeat
    $p:=Position($find;$string;$p+1;$lengthFound;$option)
    If($p>0)
       $string:=Substring($string;1;$p-1)+$replace+Substring($string;$p+$lengthFound)
    End if
 Until($p<=0) //resultado: $string -> Hello Joëlle and Joël!
```

#### Ver também 

[Compare strings](compare-strings.md)  
[Substring](substring.md)  