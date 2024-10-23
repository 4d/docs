---
id: highlight-text
title: HIGHLIGHT TEXT
slug: /commands/highlight-text
displayed_sidebar: docs
---

<!--REF #_command_.HIGHLIGHT TEXT.Syntax-->**HIGHLIGHT TEXT** ( {* ;} *area* ; *inicioSel* ; *fimSel* )<!-- END REF-->
<!--REF #_command_.HIGHLIGHT TEXT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (string); se omitido, objeto é um campo ou variável. |
| area | Field, Variable, any | &#8594;  | Nome de objeto (se * for especificado), ou campo editável ou variável (se * for omitido) |
| inicioSel | Integer | &#8594;  | Posição inicial da seleção de texto |
| fimSel | Integer | &#8594;  | Posição final da seleção de texto |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.HIGHLIGHT TEXT.Summary-->O comando HIGHLIGHT TEXT seleciona uma parte de texto em *objeto*.<!-- END REF-->  

Se passa o parâmetro opcional \*, indica que o parâmetro *objeto* é um nome de um objeto (uma string) Se não passar o parâmetro \*, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, passe a referência do campo ou da variável (campos ou variáveis de formulário apenas) ao invés de uma string.  
  
Se *objeto* não for o objeto que está sendo modificado, esta área recupera o foco.  
  
**Nota**: Este comando não pode ser utilizado com campos em um subformulário.  
  
O parâmetro *inicioSel* representa a posição do primeiro caractere a selecionar, e o parâmetro *fimSel* representa a posição do último caractere a selecionar mais um. Se *inicioSel* e *fimSel* são iguais, o ponto de inserção está localizado antes do caractere especificado por *inicioSel*, e nenhum caractere está selecionado.  
  
Se *fimSel* for superior ao número de caracteres em objeto, todos os caracteres entre *inicioSel* e o final do texto são selecionados.

#### Exemplo 1 

O exemplo abaixo seleciona todos os caracteres no campo editável *\[Produtos\]Notas*: 

```4d
 HIGHLIGHT TEXT([Produtos]Notas;1;Length([Produtos]Notas)+1)
```

#### Exemplo 2 

O exemplo abaixo move o ponto de inserção ao começo do campo editável *\[Produtos\]Notas*: 

```4d
 HIGHLIGHT TEXT([Produtos]Notas;1;1)
```

#### Exemplo 3 

O exemplo abaixo move o ponto de inserção ao final do campo editável *\[Produtos\]Notas*: 

```4d
 $vLen:=Length([Produtos]Notas)+1HIGHLIGHT TEXT([Produtos]Notas;$vLen;$vLen)
```

#### Exemplo 4 

Ver o exemplo do comando [FILTER KEYSTROKE](filter-keystroke.md "FILTER KEYSTROKE").

#### Ver também 

[GET HIGHLIGHT](get-highlight.md)  