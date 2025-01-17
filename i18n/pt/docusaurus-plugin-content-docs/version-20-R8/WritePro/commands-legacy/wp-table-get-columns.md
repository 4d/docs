---
id: wp-table-get-columns
title: WP Table get columns
slug: /WritePro/commands/wp-table-get-columns
displayed_sidebar: docs
---

<!--REF #_command_.WP Table get columns.Syntax-->**WP Table get columns**  ( *objTarget* ) | ( *tabREf* ; *colInicio* {; *numCol*} )  -> Resultado<!-- END REF-->
<!--REF #_command_.WP Table get columns.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| objTarget | Object | &#8594;  | Range ou elemento ou documento 4D Write Pro |
| tabREf | Object | &#8594;  | objeto referencia tabela |
| colInicio | Integer | &#8594;  | posição da primeira coluna |
| numCol | Integer | &#8594;  | numero de colunas a obter |
| Resultado | Object | &#8592; | Nova faixa de tabela contendo colunas selecionadas |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WP Table get columns.Summary-->O comando **WP Table get columns** \[#/descv\].<!-- END REF--> devolve um novo objeto de faixa de celulas que contem a seleção de colunas *refTabela* (definida por *colIni* e *numCol)*. \[#/descv\]. 

Passe:

* *objTarget* *:*  
   * uma range ou  
   * um elemento (fila / parágrafo / corpo / cabeçalho / rodapé / imagen inline / seção / subseção), ou  
   * un documento 4D Write Pro

Se *objTarget* não se cruzar com uma tabela ou range de texto onde se pode recuperar uma seleção de colunas, o comando devolve Null.

**Ou**

* *refTabela*\- a referência da tabela cuja seleção de colunas quiser obter.
* *colIni* \- aponta à primeira coluna da tabela a devolver e
* (opcional) *numCol* \- especifica quantas colunas devolver. Se omitir *numCol*, se devolve a única coluna *colIni*.  
    
Se *colIni* mais *numCol* exceder o número de colunas em *refTabela*, ou se *colIni for* maior que o número de colunas em *refTabela*, a range devolvida contém o máximo possível de colunas.

#### Exemplo 1 

Se quiser modificar alguns atributos das duas últimas colunas de uma tabela:

```4d
 var $wpTable;$wpRange;$wpRow1;$wpRow2;$wpRow3;$wpRow4;$wpRow5;$cols : Object
 $wpRange:=WP Create range(WParea;wk start text;wk end text)
 $wpTable:=WP Insert table($wpRange;wk append)
 $wpRow1:=WP Table append row($wpTable;"Paul";"Smith";25)
 $wpRow2:=WP Table append row($wpTable;"John";"Richmond";40)
 $wpRow3:=WP Table append row($wpTable;"Mary";"Trenton";18)
 $wpRow4:=WP Table append row($wpTable;"Christopher";"Lee";53)
 $wpRow5:=WP Table append row($wpTable;"Henry";"Cartier";42)
 
 $cols:=WP Table get columns($wpTable;2;2)
 WP SET ATTRIBUTES($cols;wk background color;0x00E0E0E0;wk text color;"red";wk height;"36pt";wk text align;wk center)
```

Resultado:

![](../../assets/en/WritePro/commands/pict3307213.en.png)

#### Exemplo 2 

Para obter uma faixa de colunas iniciando da décima até o final:

```4d
 WP Table get columns(tableRef;10;MAXLONG)
```

#### Exemplo 3 

Se quiser recuperar as colunas que um usuário for selecionado:

```4d
 var $userSelection;$columns : Object
 
 $userSelection:=WP Selection range(myWPArea)
 
 $columns:=WP Table get columns($userSelection)
```

#### Ver também 

[WP Table get cells](wp-table-get-cells.md)  
[WP Table get rows](wp-table-get-rows.md)  