---
id: get-text-keywords
title: GET TEXT KEYWORDS
slug: /commands/get-text-keywords
displayed_sidebar: docs
---

<!--REF #_command_.GET TEXT KEYWORDS.Syntax-->**GET TEXT KEYWORDS** ( *texto* ; *arrPalavrasChaves* {; *} )<!-- END REF-->
<!--REF #_command_.GET TEXT KEYWORDS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| texto | Text | &#8594;  | Texto original |
| arrPalavrasChaves | Text array | &#8592; | Array que contém as palavras-chave |
| * | Operador | &#8594;  | Se passado = palavras únicas |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.GET TEXT KEYWORDS.Summary-->O comando **GET TEXT KEYWORDS** divide todo o *texto* em palavras individuais e cria, para cada palavra obtida, um elemento no array texto *arrPalavrasChaves* para cada palavra.<!-- END REF-->  
  
4D utiliza o mesmo algoritmo para dividir o texto em palavras individuais que utiliza para criar os *Índice de palabras-chaves*. Este algoritmo está baseado na livraria ICU. Para mais informação sobre como se separa um texto em palavras, consulte o seguinte endereço: <http://userguide.icu-project.org/boundaryanalysis>.  
  
**Nota**: por pedido dos usuários, foi introduzida uma exceção para o francês e o italiano: o apóstrofe (') seguido por uma vogal ou a letra "h" se considera como um separador de palavra. Por exemplo, as cadeias "L'homme" ou "l'arbre" se dividem em "L’"+"homme" y "l'"+"arbre".  
  
O algoritmo utilizado difere se a opção **Considerar só caracteres não alfanuméricos para as palavras-chaves** está selecionada nas [propriedades da base](../settings/database.md#text-comparison).  
  
No parâmetro *texto*, passe o texto original a dividir em palavras. Este texto pode ter estilo, cujo caso as etiquetas de estilo são ignoradas.   
  
Para o parâmetro *arrPalavrasChaves*, o comando enche este array texto com as palavras extraídas do texto.   
  
Si passa el parâmetro opcional *\**, o comando só armazena cada palavra diferente uma vez em *arrPalavrasChaves*. Por defeito, se este parâmetro é omitido, todas as palavras extraídas do texto se guardam no array, inclusive se aparecem varias vezes.  
  
Este comando permite efetuar de maneira simples as pesquisas entre os registros que contém grandes quantidades de texto garantindo utilizar as mesmas palavras-chaves que 4D. Por exemplo, imagine que você tem um texto que contém "10,000 Jean-Pierre BC45". Se este texto se divide nas palavras-chaves "10,000" + "Jean-Pierre" + "BC45", o array conterá 4 elementos. Então é fácil fazer um bucle neste array para encontrar os registros que contém uma ou mais destas palavras-chave utilizando o operador % (ver exemplos).

#### Exemplo 1 

Em um formularia que contém uma área de pesquisa, os usuários podem introduzir uma ou mais palavras. Quando um usuário valida este formulário, buscamos os registros cujo campo *Meucampo* contenha ao menos uma das palavras-chaves introduzidas pelo usuário.   

```4d
  // vSearch é a variável da área de pesquisa no formulário
 GET TEXT KEYWORDS(vSearch;arrSearch;*)
  //* no caso de que um usuário introduza a mesma palavra mais de uma vez
 CREATE SET([MinhaTabela];"Totalfound")
 $n:=Size of array(arrSearch)
 For($i;1;$n)
    QUERY([MinhaTabela];[MinhaTabela]MeuCampo% arrSearch{$i})
    CREATE SET(([MinhaTabela];"encontrado")
    UNION("Totalfound";"encontrado";"Totalfound")
 End for
 USE SET("Totalfound")
```

#### Exemplo 2 

No mesmo formulário que antes, buscamos os registros onde o campo *MeuCampo* contenha todas as palavras-chaves introduzidas pelo usuário.

```4d
  // vSearch é a variável da área de entrada no formulário
 GET TEXT KEYWORDS(vSearch;arrSearch;*)
 $n:=Size of array(arrSearch)
 QUERY([MinhaTabela];[MinhaTabela]MeuCampo>=0;*)
  // iniciar a busca = todos os registros
 For($i;1;$n)
    QUERY([MyTable];&;[MyTable]MyField % arrSearch{$i};*)
  // adicionar o critério
 End for
 QUERY([MinhaTabela]) //busca
```

#### Exemplo 3 

Para contar as palavras de um texto:

```4d
 GET TEXT KEYWORDS(vText;arrWords) // todas as palavras
 $n:=Size of array(arrWords)
 GET TEXT KEYWORDS(vText;arrWords;*) // palavras diferentes
 $m:=Size of array(arrWords)
 ALERT("Este texto contém "+String($n)+" palavras de "+String($m))
```

#### Ver também 

[DISTINCT VALUES](distinct-values.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1141 |
| Thread-seguro | &check; |


