---
id: listbox-get-footer-calculation
title: LISTBOX Get footer calculation
slug: /commands/listbox-get-footer-calculation
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get footer calculation.Syntax-->**LISTBOX Get footer calculation** ( {* ;} *objeto* ) : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get footer calculation.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto(cadeia)Se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome de objeto (se especificado *) ou Variável (se omitido *) |
| resultado | Integer | &#8592; | Tipo de cálculo |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.LISTBOX Get footer calculation.Summary-->O novo comando **LISTBOX Get footer calculation** devolve o tipo de cálculo associado à área de rodapé de página do list box designado pelos parâmetros *objeto* e *\**.<!-- END REF-->  
  
Se passado o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (uma cadeia). Se não passa este parâmetro, isto indica que o parâmetro *objeto* é una variável. Neste caso, é passada uma referencia de variável em lugar de uma cadeia.  
  
O parâmetro *objeto* pode designar:  

* a variável e o nome de uma área de rodapé de página. Neste caso, o comando devolve o cálculo associado a esta área.
* a variável e o nome de uma coluna de list box. Neste caso, el comando devolve o cálculo associado a esta área de rodapé de página desta coluna.
Pode comparar o valor devolvido com as constantes do tema *Listbox Footer Calculation* (ver o comando [LISTBOX SET FOOTER CALCULATION](listbox-set-footer-calculation.md)).

#### Ver também 

[LISTBOX SET FOOTER CALCULATION](listbox-set-footer-calculation.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1150 |
| Thread-seguro | &check; |
| Proibido no servidor ||


