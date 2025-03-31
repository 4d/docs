---
id: wp-table-merge-cells
title: WP TABLE MERGE CELLS
slug: /WritePro/commands/wp-table-merge-cells
displayed_sidebar: docs
---

<!--REF #_command_.WP TABLE MERGE CELLS.Syntax-->**WP TABLE MERGE CELLS** ( *targetObj* ) | ( *tableRef* ; *startColumn* ; *startRow* {; *columnCount*{; *rowCount*}} )<!-- END REF-->
<!--REF #_command_.WP TABLE MERGE CELLS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | Intervalo ou elemento ou documento 4D Write Pro |
| tableRef | Object | &#8594;  | Referência de Tabela |
| startColumn | Integer | &#8594;  | Posição da primeira célula da coluna |
| startRow | Integer | &#8594;  | Posição da primeira linha da coluna |
| columnCount | Integer | &#8594;  | Número de colunas para fundir |
| rowCount | Integer | &#8594;  | Número de linhas a fundir |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.WP TABLE MERGE CELLS.Summary-->o comando **WP TABLE MERGE CELLS** fusiona a seleção de células em *targetObj* ou *tableRef* (definido por *startColumn*, *startRow*, *columnCount* e *rowCount*).<!-- END REF-->

Passe qualquer dos dois:

* *targetObj:*  
   * um intervalo ou  
   * um elemento (tabela / línha / corpo / parágrafo / imagem ancorada / cabeçalho /rodapé/ seção / subseção), ou  
   * um documento 4D Write Pro

Se *targetObj* não se intersecta con uma tabela ou intervalo de texto onde se possa recuperar uma seleção de células, o comando não faz nada.

Se *targetObj* intersecta só uma célula, o comando **WP TABLE MERGE CELLS** não faz nada.

**Ou**

* startColumn e *startRow* \- definem as coordenadas superior esquerda da primeira célula a combinar.
* columnCount e rowCount - (opcionais) - especificam respectivamente o número de colunas e o número de línhas a fusionar.  
    
Se omitir rowCount, equivale a passar 1 (valor padrão). Se omitir tanto columnCount quanto rowCount, equivale a interseptar uma única celda, por isso não ocorre nada.

Se startColumn mais ColumnCount ou *startRow* mais rowCount exceder o número de colunas/línjas em *tableRef*, ou se startColumn ou *startRow* for maior que o número de colunas/linhas em *tableRef*, o intervalo devolvido contém o máximo possível de colunas/línhas o que significa que toda a tabela se fusiona em uma grande célulaa.

#### Exemplo 

Se quiser designar um intervalo de células e fusioná\~lo:

```4d
 WP TABLE MERGE CELLS($table;3;2;2;4)
  //ou
 $cells:=WP Table get cells($table;3;2;2;4)
 WP TABLE MERGE CELLS($cells)
```

Resultado:

![](../../assets/en/WritePro/commands/pict6398108.en.png)

  
Os dados existentes das células originais sã concatenadas na célula fusionada resultante.

Para mais detalhes, consulte *Fundir e separar células*.

#### Ver também 

*Gerenciar tabelas*  
[WP TABLE SPLIT CELLS](wp-table-split-cells.md)  