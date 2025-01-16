---
id: method-get-names
title: METHOD GET NAMES
slug: /commands/method-get-names
displayed_sidebar: docs
---

<!--REF #_command_.METHOD GET NAMES.Syntax-->**METHOD GET NAMES** ( *arrayNoms* {; *filtro*}{; *} )<!-- END REF-->
<!--REF #_command_.METHOD GET NAMES.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| arrayNoms | Text array | &#8592; | Arrays de nomes de métodos de projeto |
| filtro | Text | &#8594;  | Filtros de nomes |
| * | Operador | &#8594;  | Se passado = o comando se aplica à base local quando se executa desde um componente (parâmetro ignorado fora deste contexto) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.METHOD GET NAMES.Summary-->O comando **METHOD GET NAMES** enche o array *arrayNoms* com os nomes dos métodos projeto criados na aplicação.<!-- END REF-->  
  
Por defeito, todos os métodos estão listados. Pode restringir esta lista passando uma cadeia de comparação no parâmetro *filtro*, neste caso, o comando somente devolve os métodos cujo nome coincide com o filtro. Deve utilizar o caracter @ com o fim de definir os filtros de tipo "começa por", "termina em" o "contém".  
  
Se executado este comando desde um componente, devolve por defeito os nomes dos métodos projeto do componente. Se passado o parâmetro *\**, o array conterá os métodos projeto da base local.  
  
**Nota**: os métodos localizados no lixeiro não são listados. 

#### Exemplo 

Exemplos de uso:

```4d
  // Lista de todos os métodos projeto da base
 METHOD GET NAMES(t_Names)
 
  //  Lista dos métodos projeto que começam por uma cadeia específica
 METHOD GET NAMES(t_Names;"web_@")
 
  // Lista dos métodos projeto da base local que começam por uma cadeia específica
 METHOD GET NAMES(t_Names;"web_@";*)
```


#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1166 |
| Thread-seguro | &check; |


