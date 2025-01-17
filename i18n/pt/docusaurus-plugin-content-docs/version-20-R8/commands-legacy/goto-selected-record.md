---
id: goto-selected-record
title: GOTO SELECTED RECORD
slug: /commands/goto-selected-record
displayed_sidebar: docs
---

<!--REF #_command_.GOTO SELECTED RECORD.Syntax-->**GOTO SELECTED RECORD** ( {*tabela* ;} *posicao* )<!-- END REF-->
<!--REF #_command_.GOTO SELECTED RECORD.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela na qual ir ao registro selecionado ou Tabela por padrão, se omitida |
| posicao | Integer | &#8594;  | Posição do registro na seleção |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.GOTO SELECTED RECORD.Summary-->GOTO SELECTED RECORD move o registro especificado na seleção atual de *tabela* o registro atual.<!-- END REF--> A seleção atual de tabela não muda. O parâmetro *registro* não é o mesmo do número retornado por [Record number](record-number.md); Este parâmetro representa a posição do registro na seleção atual. A posição do registro depende da maneira na qual a seleção tenha sido criada e ordenada.  

**GOTO SELECTED RECORD** não faz nada se:

* não há registros na seleção atual
* *registro* não está na seleção atual,
* *registro* já é o registro atual.
Se passa 0 em *registro,* não haverá registro atual em *tabela*. Este mecanismo permite desmarcar todos os registros em uma lista, especialmente no caso dos subformulários incluídos, quando o modo de seleção é “único”.

#### Exemplo 

O seguinte exemplo carrega dados do campo \[Pessoas\]Sobrenome no array *atNomes*. Um array de inteiros longos, chamado NumReg, se preenche com os números que representarão aos registros selecionados. Depois os dois arrays são ordenados:

```4d
 Tab/] // Criar aqui a seleção da tabela [Pessoas]
 &NBSP; // ...
 &NBSP; // Obter os nomes
 SELECTION TO ARRAY([Pessoas]Sobrenome;atNomes)
 &NBSP; // Criar um array para os números de registros selecionados
 $vlNbRegistros:=Size of array(atNomes)
 &NBSP;ARRAY LONGINT(NumReg;$vlNbRegistros)For($vlRegistro ;1;$vlNbRegistros)NumReg{$vlRegistro }:=$vlRegistro
 &NBSP;End for
  // Ordenar os dois arrays em ordem alfabética
 &NBSP;SORT ARRAY(atNomes;NumReg;>)
```
  
  
Se o array *atNomes* for mostrado em uma área de rolagem, o usuário faz clique em um dos elementos. Como a ordenação dos dois arrays está sincronizada, todo elemento de *numReg* proporciona o número do registro selecionado para o registro cujo nome for guardado no elemento correspondente em *atNomes*.  
  
O seguinte método de objeto para *atNomes* seleciona o registro correto na seleção de \[Pessoas\], de acordo ao nome elegido na área de rolagem:  

```4d
 Case of
       &NBSP;:(Form event code=On Clicked)
       &NBSP;If(atNomes#0)
       &NBSP;GOTO SELECTED RECORD(NumReg{atNomes})
       &NBSP;End if
       &NBSP;End case
```

#### Ver também 

[Selected record number](selected-record-number.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 245 |
| Thread-seguro | &check; |
| Modificar o registro atual ||


