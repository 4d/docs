---
id: wp-table-insert-rows
title: WP Table insert rows
slug: /WritePro/commands/wp-table-insert-rows
displayed_sidebar: docs
---

<!--REF #_command_.WP Table insert rows.Syntax-->**WP Table insert rows** ( objTarget | {*refTabela* ; *numLinha*} {; *numLinhasInserir*} )  -> Resultado<!-- END REF-->
<!--REF #_command_.WP Table insert rows.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| objTarget | Object | &#8594;  | Range ou elemento ou 4D Write Pro |
| refTabela | Object | &#8594;  | Referência de Tabela |
| numLinha | Integer | &#8594;  | Número índice da linha |
| numLinhasInserir | Integer | &#8594;  | Número de linhas a inserir (valor predeterminado =1) |
| Resultado | Object | &#8592; | Range/seleção de linhas da tabela |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WP Table insert rows.Summary-->O comando **WP Table insert rows** insere uma ou várias linhas em uma tabela 4D Write Pro.<!-- END REF-->

Este comando é compatível com duas sintaxes:

* Se passar um objTarget como primeiro parâmetro, o comando inserte as linhas na primeira tabela que intersere o target. objTarget pode conter:  
   * uma range, ou  
   * um elemento (linha / parágrafo / corpo / cabeçalho / rodapé / imagem inline / seção / subseção), ou  
   * um documento 4D Write Pro.  
         
   Se objTarget não se intersectar com uma tabela ou uma range de texto onde se podem inserir as linhas, o comando não faz nada e devolve Null (não é gerado nenhum erro).
* Se passar os parâmetros *refTabela* e *numLinhas*, o comando inserte as linhas na tabela designada e no índice de linha especificado. Se *numLinhas* for maior que o número de linhas em *refTabela*, as linhas são anexadas na tabela ao invés de serem inseridas.

O parâmetro opcional *numLinhas* define o número de linhas a inserir em objTarget ou *refTabela*. De maneira predeterminada, se omitir este parâmetro, se insere uma linha.

**Resultado**  
  
O comando devolve uma range de linhas que representa as linhas inseridas ou Null se não inserir nada.

#### Exemplo 

Se quiser inserir duas linhas ao final da tabela *Invoice (faturas)*: 

```4d
 var $row : Object
 var $table;$row : Object
 var $rowNum : Integer
 
 $table:=WP Get element by ID(WParea;"Invoice") //consultar a tabela "Invoice"
 
 If($table#Null)
    $rowNum:=$table.rowCount+1 //agregue 1 à última linha para designar onde inserir as linhas
    $row:=WP Table insert rows($table;$rowNum;2)
 End if
```

Insere as duas filas novas na localização corrcta:

![](../../assets/en/WritePro/commands/pict4680266.en.png)

#### Ver também 

[WP Table insert columns](wp-table-insert-columns.md)  