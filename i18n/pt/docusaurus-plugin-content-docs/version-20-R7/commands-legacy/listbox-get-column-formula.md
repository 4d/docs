---
id: listbox-get-column-formula
title: LISTBOX Get column formula
slug: /commands/listbox-get-column-formula
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get column formula.Syntax-->**LISTBOX Get column formula** ( {* ;} *objeto* ) : Text<!-- END REF-->
<!--REF #_command_.LISTBOX Get column formula.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto(cadeia)Se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome de objeto (se especificado *) ou Variável (se omitido *) |
| Resultado | Text | &#8592; | Fórmula associada à coluna |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.LISTBOX Get column formula.Summary-->O comando **LISTBOX Get column formula** devolve a fórmula associada à coluna de list box designada pelos parâmetros *objeto* e *\**.<!-- END REF--> As fórmulas só podem ser utilizadas quando a propriedade “Fonte de dados” do list box for **Seleção atual**, **Seleção temporal**.ou **Coleção ou Seleção de Entidades**. Se nenhuma fórmula estiver associada à coluna, o comando devolve uma cadeia vazia. 

Passado o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (uma cadeia). Caso não passe este parâmetro, isto indica que o parâmetro *objeto* é uma variável. Neste caso, passe uma referencia de variável em lugar de uma cadeia. Este parâmetro deve designar uma coluna do list box.

#### Ver também 

[LISTBOX SET COLUMN FORMULA](listbox-set-column-formula.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1202 |
| Thread-seguro | &cross; |


