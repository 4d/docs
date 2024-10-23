---
id: object-set-three-states-checkbox
title: OBJECT SET THREE STATES CHECKBOX
slug: /commands/object-set-three-states-checkbox
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET THREE STATES CHECKBOX.Syntax-->**OBJECT SET THREE STATES CHECKBOX** ( {* ;} *objeto* ; *tresEsta* )<!-- END REF-->
<!--REF #_command_.OBJECT SET THREE STATES CHECKBOX.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se for especificado, objeto é um nome de objeto (cadeia) Se for omitido, objeto é um campo ou uma variável |
| objeto | any | &#8594;  | Nome de objeto (se * for especificado ) ou Campo ou variável (se * for omitido) |
| tresEsta | Boolean | &#8594;  | True = caixa de seleção de três estados, False = caixa de seleção padrão |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.OBJECT SET THREE STATES CHECKBOX.Summary-->O comando **OBJECT SET THREE STATES CHECKBOX**  modifica para o processo atual, a propriedade de "Três Estados" da(s) caixa(s) de seleção designada(s) pelos parâmetros *objeto* e *\** .<!-- END REF-->  
  
A opção de "Três estados" permite utilizar o estado adicional "semi selecionado" para as caixas a selecionar. Para obter mais informação, consulte *Caixa de seleção de Três Estados* no manual de *Desenho*.  
  
Ao passar o parâmetro opcional *\** indica que o parâmetro *objeto* é um nome de objeto (cadeia). Se não passar este parâmetro, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, é passada uma referência de campo ou variável no lugar de uma cadeia (campo ou variável objeto unicamente).  
  
Este comando só se aplica a caixas de seleção associadas as variáveis, e não aos campos booleanos representados como caixas de seleção.  
  
No parâmetro *tresEsta*, passe **True** para ativar o modo "três estados", ou **False** para desativar.

#### Ver também 

[OBJECT Get three states checkbox](object-get-three-states-checkbox.md)  