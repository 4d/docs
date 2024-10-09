---
id: object-set-vertical-alignment
title: OBJECT SET VERTICAL ALIGNMENT
slug: /commands/object-set-vertical-alignment
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET VERTICAL ALIGNMENT.Syntax-->**OBJECT SET VERTICAL ALIGNMENT** ( {* ;} *objeto* ; *alinhamento* )<!-- END REF-->
<!--REF #_command_.OBJECT SET VERTICAL ALIGNMENT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &srarr; | Se especificado, objeto é um nome de objeto (cadeia)Se omitido, objeto é uma variável |
| objeto | any | &srarr; | Nome de objeto (se especificado *) ou Variável (se omitido *) |
| alinhamento | Integer | &srarr; | Código de alinhamento |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT SET VERTICAL ALIGNMENT.Summary-->O comando **OBJECT SET VERTICAL ALIGNMENT** modifica por programação o tipo de alinhamento vertical aplicada ao objeto designado pelos parâmetros *objeto* e *\**.<!-- END REF-->  
  
Passa-se o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (uma cadeia). Se não passa este parâmetro, isto indica que o parâmetro *objeto* é uma variável. Neste caso, se passa uma referencia de variável em lugar de uma cadeia.  
  
Em *alinhamento*, pode passar uma das seguintes constantes, do tema *Propriedades dos objetos* :  
  
| Constante     | Tipo          | Valor |
| ------------- | ------------- | ----- |
| Align bottom  | Inteiro longo | 4     |
| Align center  | Inteiro longo | 3     |
| Align default | Inteiro longo | 1     |
| Align top     | Inteiro longo | 2     |
  
  
A alienação vertical pode aplicar-se aos seguintes tipos de objetos de formulário:
* list boxes
* colunas de list box,
* cabeçalhos e rodapés de list box.

#### Ver também 

[OBJECT Get horizontal alignment](object-get-horizontal-alignment.md)  
[OBJECT Get vertical alignment](object-get-vertical-alignment.md)  
[OBJECT SET HORIZONTAL ALIGNMENT](object-set-horizontal-alignment.md)  