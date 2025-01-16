---
id: longint-array-from-selection
title: LONGINT ARRAY FROM SELECTION
slug: /commands/longint-array-from-selection
displayed_sidebar: docs
---

<!--REF #_command_.LONGINT ARRAY FROM SELECTION.Syntax-->**LONGINT ARRAY FROM SELECTION** ( *tabela* ; *arrayRegistro* {; *seleçao*} )<!-- END REF-->
<!--REF #_command_.LONGINT ARRAY FROM SELECTION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela da seleção atual |
| arrayRegistro | Integer array | &#8592; | Array dos números gravados |
| seleçao | Text | &#8594;  | Nome da seleção escolhida ou a seleção atual se este parâmetro for omitido |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.LONGINT ARRAY FROM SELECTION.Summary-->O comando LONGINT ARRAY FROM SELECTION preenche o array *arrReg* com os números (absolutos) dos registros que estão em *seleçao*.<!-- END REF-->

Se você não passar o parâmetro *seleçao*, o comando utiliza a seleção atual da *tabela*. 

**Nota:** o elemento número 0 do array é inicializado em -1.

#### Exemplo 

Se quiser recuperar os números dos registros da seleção atual:

```4d
 ARRAY LONGINT($_arrRecNum;0) //obrigatório para o modo compilado
 LONGINT ARRAY FROM SELECTION([Clients];$_arrRecNum)
```

#### Ver também 

[CREATE SELECTION FROM ARRAY](create-selection-from-array.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 647 |
| Thread-seguro | &check; |


