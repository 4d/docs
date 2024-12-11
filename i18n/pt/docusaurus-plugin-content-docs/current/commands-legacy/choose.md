---
id: choose
title: Choose
slug: /commands/choose
displayed_sidebar: docs
---

<!--REF #_command_.Choose.Syntax-->**Choose** ( *criterio* ; *valor* {; *valor2* ; ... ; *valorN*} )  : any<!-- END REF-->
<!--REF #_command_.Choose.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| criterio | Boolean, Integer | &#8594;  | Valor a testar |
| valor | Expression | &#8594;  | Valores possíveis |
| Resultado | any | &#8592; | Valor do critério |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Choose.Summary-->O comando **Choose** retorna um dos valores passados nos parâmetros *valor1, valor2*, etc.<!-- END REF--> em função do valor do parâmetro *criterio*.

  
Pode passar um parâmetro *criterio* de tipo booleano ou numérico:

* Se *criterio* for um booleano, Choose retorna *valor1* se o booleano é igual a True e *valor2* se o booleano é igual a False. Neste caso, o comando espera exatamente três parâmetros: *criterio, valor1* e *valor2*.
* Se *criterio* for um inteiro, Choose retorna o valor cuja posição corresponde a *criterio*. Atenção, a numeração dos valores começa em 0 (a posição de *valor1* é 0). Neste caso, o comando espera ao menos dois parâmetros: *criterio* e *valor1*.

  
O comando aceita todo os tipos de dados para o/os parâmetro(s) *valor*, exceto imagens, ponteiros, BLOBS e arrays. Entretanto, deve ter certeza de que todos os valores passados sejam do mesmo tipo, 4D não realizará nenhuma verificação neste ponto.  
  
Se nenhum *valor* corresponde ao critério, Choose retorna um valor “nulo” relativo ao tipo do parâmetro *valor* (por exemplo, 0 para o tipo numérico, “” para o tipo string, etc.).  
  
Este comando permite gerar código conciso que substitui os testes de tipo “Case of” que ocupam várias linhas (ver exemplo 2). Também é muito útil nos lugares onde podem ser executadas fórmulas: editor de pesquisas, aplicar uma fórmula, editor de relatórios rápidos, coluna calculada de listbox, etc.

**Aviso:** O comando **Choose** avalia cada parâmetro *valor* antes de sua execução. Isso significa que:

* Se *valor* for uma expressão dinâmica que causa efeitos colaterais (atualização de um contador, modificações de qualquer tipo) estes efeitos vão acotnecer em todos os casos;
* se um parâmetro valor for uma expressão inválida, **Choose** vai retornar um erro em todos os casos. Por exemplo, o código seguinte vai retornar um erro:  
```4d  
 $res:=Choose(True;"red1";"blue"+2) //error  
```

#### Exemplo 1 

Este é um exemplo do uso típico deste comando com um critério de tipo booleano: 

```4d
 vTitulo:=Choose([Pessoa]Masculino;"Sr";"Sra")
```

Este código é estritamente equivalente a:

```4d
 If([Pessoa]Masculino)
    vTitulo:="Sr"
 Else
    vTitulo:="Sra"
 End if
```

#### Exemplo 2 

Este é um exemplo do uso típico deste comando com um critério de tipo numérico: 

```4d
 vEstado:=Choose([Pessoa]Estado;"Solteiro";"Casado";'"Viúvo";"Separado")
```

Este código é estritamente equivalente a:

```4d
 Case of
    :([Pessoa]Estado=0)
       vEstado:="Solteiro"
    :([Pessoa]Estado=1)
       vEstado:="Casado"
    :([Pessoa]Estado=2)
       vEstado:="Viúvo"
    :([Pessoa]Estado=3)
       vEstado:="Separado"
 End case
```


#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 955 |
| Thread-seguro | &check; |
| Proibido no servidor ||


