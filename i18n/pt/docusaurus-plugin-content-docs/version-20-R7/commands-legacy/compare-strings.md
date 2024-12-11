---
id: compare-strings
title: Compare strings
slug: /commands/compare-strings
displayed_sidebar: docs
---

<!--REF #_command_.Compare strings.Syntax-->**Compare strings** ( *string* ; *stringB* {; *opções*} ) : Integer<!-- END REF-->
<!--REF #_command_.Compare strings.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| string | Text | &#8594;  | String a comparar |
| stringB | Text | &#8594;  | String a ser comparada |
| opções | Integer | &#8594;  | Regras de comparação |
| Resultado | Integer | &#8592; | Resultado da comparação de strings |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Compare strings.Summary-->O comando **Compare strings** retorna um valor negativo, zero ou positivo dependendo de se *stringA* for avaliada como menor, igual ou maior que *stringB*.<!-- END REF--> 

No parâmetro *stringA*, passe um valor [texto](# "A character string that may contain from 0 to 2 GB of text"). 

No parâmetro *stringB*, passe um valor texto  a ser comparado com *stringA*. 

Como padrão, **Compare strings** funciona como se o operador "<" (menor que) fosse usado. (Ver *String operators*). Isso pode ser modificado com o parâmetro *opções*. Pode passar uma constante ou uma combinação das constantes a seguir do tema *Strings*: 

| Constante                | Valor | Comentário                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------------ | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sk case insensitive      | 2     | As strings são comparadas segundo a linguagem atual dos dados sem levar em consideração as diferenças de maiúsculas e minúsculas. Note que os signos diacríticos são levados em consideração. Por exemplo, "A" é considerado a mesma coisa que "a". Entretanto "a" não é considerado o mesmo que "à". Como padrão, a comparação de strings 4D não considera maiúsculas e minúsculas. <br/>Pode ser combinado com: sk char codes OU sk diacritic insensitive sk whole word ([Position](position.md) apenas comando Essa constante implica o uso das constantes abaixo (que podem ser combinadas para melhorar a legibilidade): sk kana insensitive sk width insensitive sk strict                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| sk char codes            | 1     | As strings são comparadas segundo os códigos de caracteres. Os parâmetros atuais da linguagem de dados não são levados em consideração durante a comparação. Pode ser combinada com: sk case insensitive Só para os intervalos "a-z" ou "A-Z". (por exemplo., Alpha = alpha, mas Alpha # âlphà)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| sk diacritic insensitive | 4     | As strings são comparadas de acordo com a linguagem atual dos dados. Entretanto, os acentos ou símbolos das letras são ignorados. Por exemplo, "a" é considerado a mesma coisa que "à". Pode ser combinado com sk case insensitive sk whole word ([Position](position.md) só comandos) Essa constante implica o uso das constantes abaixo (que podem também ser combinados para melhor a legibilidade): sk kana insensitive sk width insensitive sk strict                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| sk kana insensitive      | 8     | Para a linguagem japonesa. Controla a diferenciação entre as sílabas em Hiragana e Katakana. De um ponto de vista semântico, a diferença entre Hiragana e Katana é geralmente importante, msa não captura tantos resultados quanto possível. O modo padrão em 4D é ignorar a diferença (kana insensitive). Por exemplo, "あ" é considerado como a mesma coisa que "ア". A opção sk strict realiza comparações sensíveis a kana. sk kana insensitive pode ser usado para parcialmente relaxar a regra de insensível a kana. **Nota:** A linguagem de dados deve ser estabelecida para Japonês para usar essa opção. Para todas as outras linguagens, essa opção é ignorada e [Compare strings](compare-strings.md) vai funcionar como se sk strict tivesse sido especificada. Ou seja, estabelecer essa opção para contextos não-japoneses faria com que a comparação fosse sensível a kana (o efeito oposto). Pode ser combinado com: sk case insensitive sk diacritic insensitive Essa constante implica o uso das constantes abaixo (que podem também ser combinados para melhor a legibilidade): sk width insensitive sk strict                                                                                                                                                                                                                                                                     |
| sk strict                | 0     | Strings são comparadas para correspondências exatas de acordo com a linguagem atual. Na maioria dos casos, capitalização e marcas diacríticas de letras são levadas em consideração durante a comparação. Pode ser combinado com: sk case insensitive sk diacritic insensitive sk kana insensitive Essa constante implica o uso das constantes abaixo (que podem também ser combinados para melhor a legibilidade): sk width insensitive                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| sk width insensitive     | 16    | Para a linguagem japonesa. Corresponde à norma Unicode "East Asian Width", definida em [Anexo #11 do padrão Unicode](http://www.unicode.org/reports/tr11/).Desde um ponto de vista semântico, a diferença entre um carácter "estreito" e "largo" ou um caractere "largura completa" e "meia largura" costuma ser insignificante, que é o modo normal em 4D.Por exemplo, "ｱ" se considera a mesma coisa que "ア". A opção sk strict realiza uma comparação sensível à largura.  Strings são comparadas por tamanho de caractere de acordo com a linguagem de dados atual. por exemplo, "ｱ" é considerado o mesmo que "ア". **Notas:** O idioma dos dados deve ser o japonês para poder usar essa opção. Para todos os demais idiomas, a opção é ignorada e [Compare strings](compare-strings.md) funcionará como se especificasse sk strict. Em outras palavras, estabelecer essa opção em um contexto que não seja japonês faria que a comparação fosse sensível à largura (o efeito contrário). Esta opção é ignorada pela função [Position](position.md). A comparação insensìvel à largura de Unicode é assimétrica e impossível de localizar por posição ou largura. Pode ser combinada com: sk case insensitive sk diacritic insensitive sk kana insensitive sk strict Essa constante implica o uso das constantes abaixo (que podem também ser combinados para melhor a legibilidade): sk strict |

**Aviso:** Você não pode usar o caractere coringa @ com **Compare strings**. Por exemplo se passar *"abc@"* em *stringA* ou *stringB* o comando vai realmente avaliar a string *"abc@"* e não uma string "abc" mais qualquer caractere.

**Valores retornados**

O comando retorna os valores longint a seguir:

| **Valor** | **Descrição <br/>**     |
| --------- | ------------------------------- |
| \-1       | *stringA* antes de *stringB*    |
| 0         | *stringA* é igual a *stringB*   |
| 1         | *stringA* é depois de *stringB* |

#### Exemplo 1 

Se quiser comparar as strings:

```4d
 $string1:="alpha Bravo charlie Delta Echo Fox-Trot"
 $string2:="Alpha Bravo Charlie Delta Echo Fox-Trot"
 
  //comparar ls strings utilizando o código de caracteres
 $result:=Compare strings($string1;$string2;sk char codes)
  // $result = 1
 
  //comparar as strings utilizando o código de caracteres mas ignorando as maiúsculas e minúsculas
 $result:=Compare strings($string1;$string2;sk char codes+sk case insensitive)
  // $result = 0
```

#### Exemplo 2 

Os exemplos abaixo ilustram o impacto específico das opções no **contexto da linguagem de dados japonês**:

```4d
  //como padrão não é sensível a kana
 $result:=Compare strings("イロハ";"いろは") // igual
 $result:=Compare strings("イロハ";"いろは";sk strict) // não é igual
 $result:=Compare strings("イロハ";"いろは";sk kana insensitive) // iguais
```

```4d
  //como padrão não diferencia entre maiúsculas e minúsculas
 $result:=Compare strings("さつき";"さっき") // igual
 $result:=Compare strings("さつき";"さっき";sk strict) // não é igual
 $result:=Compare strings("さつき";"さっき";sk case insensitive) // igual
```

```4d
  //como padrão é sensível aos diacríticos quando o idioma dos dados for o japonês (diferente do resto de idiomas)
 $result:=Compare strings("ete";"été") // igual no idioma de dato diferentes do japonés
 $result:=Compare strings("ete";"été") // diferente na linguagem de dados japonesa
 $result:=Compare strings("うがい";"うかい") // não é igual
 $result:=Compare strings("うがい";"うかい";sk strict) // não é igual
 $result:=Compare strings("うがい";"うかい";sk diacritic insensitive) // igual
```

**Nota:** a opção "Ordenação adequada para a pesquisa" (ver ) tem um impacto no comando **Compare strings**. Em particular, a "Marca sonora katakana-hiragana prolongada" ou "長音記号" se interpretará de forma diferente. O ajuste também impacta nas "marcas de iteração japonesas" como "ゝ" ou "ゞ". Por exemplo:

```4d
 $result:=Compare strings("いすず";"いすゞ") // igual se a opção estiver desativada
 $result:=Compare strings("いすず";"いすゞ") // não é igual se a opção estiver desativada
 $result:=Compare strings("ラーメン";"ﾗｰﾒﾝ") // igual se a opção estiver desativada
 $result:=Compare strings("ラーメン";"ﾗｱﾒﾝ") // nã é igual se a opção estiver desativada
```

#### Ver também 

[Position](position.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1756 |
| Thread-seguro | &check; |
| Proibido no servidor ||


