---
id: wp-table-split-cells
title: WP TABLE SPLIT CELLS
slug: /WritePro/commands/wp-table-split-cells
displayed_sidebar: docs
---

<!--REF #_command_.WP TABLE SPLIT CELLS.Syntax-->**WP TABLE SPLIT CELLS** ( *objAlvo* ) | ( *TableRef* ; *startColumn* ; *startRow* {; *columnCount*{; *rowCount*}} )<!-- END REF-->
<!--REF #_command_.WP TABLE SPLIT CELLS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| objAlvo | Object | &#8594;  | Intervalo ou elemento ou documento 4D Write Pro |
| TableRef | Object | &#8594;  | Referência de TAbela |
| startColumn | Integer | &#8594;  | Posição da primeira célula de coluna |
| startRow | Integer | &#8594;  | Posição da primeira linha da coluna |
| columnCount | Integer | &#8594;  | Número de colunas a dividir |
| rowCount | Integer | &#8594;  | Número de linhas a dividir |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.WP TABLE SPLIT CELLS.Summary-->O comando **WP TABLE SPLIT CELLS** divide a seleção de intersecção de células em *targetObj* ou *tableRef* (definido por *startColumn*, *startRow*, *columnCount* e *rowCount*).<!-- END REF--> Uma célula será dividida só se tiver sido combinada horizontalmente, verticalmente, ou ambas; do contrario, a célula não será modificada.

Passe qualquer uma das duas:

* *targetObj:*  
   * um intervalo ou  
   * um elemento (tabela / linha / corpo / parágrafo / imagem ancorada / cabeçalho / rodapé / seção / subseção), ou  
   * um documento 4D Write Pro

Se *targetObj* não intersectar com uma tabela ou intervalo de texto onde se possa recuperar uma seleção de células, o comando não faz nada.

Se *targetObj* intersectar uma ou muitas células que não forem fusionadas antes, o comando **WP TABLE SPLIT CELLS** não faz nada.

**Ou**

* startColumn e *startRow* \- definen as coordenadas superior esquerda da primera célula a dividir.
* columnCount e rowCount (opcionais) - especificam respectivamente o número de colunas e o número de línhas a dividir.  
    
Se rowCount for omitido, é equivalente de passar 1 (valor normal). Se tanto columnCount quanto rowCount, forem omitidos, equivale a dividir una única célula e se não forem fusionados antes não acontece nada.

#### Exemplo 

Se quiser atribuir a um intervalo de células (que contenha algumas células já combinadas) e dividí-lo:

```4d
 WP TABLE SPLIT CELLS($table;3;2;1;1)
  //o
 $cells:=WP Table get cells($table;3;2;1;1)
 WP TABLE SPLIT CELLS($cells)
```

Resultado:

![](../../assets/en/WritePro/commands/pict6398103.en.png)

Os dados da célula já fusionada são mantidos todos na primeira célula (superior esquerda) depois da divisão, as outras células resultantes da divisão permanecem vazias.

Para mais detalles, consulte *Fundir e separar células*.

#### Ver também 

*Gerenciar tabelas*  
[WP TABLE MERGE CELLS](wp-table-merge-cells.md)  