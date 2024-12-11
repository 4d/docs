---
id: object-set-print-variable-frame
title: OBJECT SET PRINT VARIABLE FRAME
slug: /commands/object-set-print-variable-frame
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET PRINT VARIABLE FRAME.Syntax-->**OBJECT SET PRINT VARIABLE FRAME** ( {* ;} *objeto* ; *marcoVariavel* {; *subFormFixo*} )<!-- END REF-->
<!--REF #_command_.OBJECT SET PRINT VARIABLE FRAME.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (cadeia) Se omitido, objeto é um campo ou uma variável |
| objeto | any | &#8594;  | Nome de objeto (se * for especificado) ou<br/>Campo ou variável (se * for omitido) |
| marcoVariavel | Boolean | &#8594;  | True = Impressão de marco variável, False = Impressão de marco fixo |
| subFormFixo | Integer | &#8594;  | Opções impressão de sub formulários em tamanho fixo |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT SET PRINT VARIABLE FRAME.Summary-->O comando **OBJECT SET PRINT VARIABLE FRAME** modifica a propriedade de marco de impressão variável do objeto ou dos objetos designados pelos parâmetros *objeto* e *\**.<!-- END REF-->

Esta propriedade está disponível para os objetos abaixo:  

* Variáveis e campos do tipo texto ou imagem (ver *Impressão tamanho variável* no manual Design Reference)
* áreas 4D Write Pro (ver *Utilizar uma área 4D Write Pro* no manual 4D Write Pro).
* subformulários tem uma opção adicional para imprimir tamanho fixo (ver *Impressão* no manual Design Reference); o comando pode ser usado para configurar esta opção usando o parâmetro fixedSubform.

Se passar o parâmetro opcional *\** indica que o parâmetro *objeto* é um nome de objeto (cadeia). Se não passar este parâmetro, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, se passar uma referência de campo ou variável em lugar de uma cadeia (campo ou variável objeto unicamente).

Passe um booleano no parâmetro *marcoVariavel*: se passar **True**, o objeto se imprime com um marco variável. Se passar **False**, se imprime com um marco fixo.  
  
O parâmetro opcional *subformFixo* lhe permite configurar uma opção adicional quando passa **False** no parâmetro *marcoVariavel* e o objeto é um sub formulário (é ignorado em todos os demais casos). Neste caso, pode ser definido o modo de impressão de marco fixo para o sub formulário. Pode passar uma das seguintes constantes, que se encontram no tema "*Propriedades dos objetos* ":

| Constante                               | Tipo          | Valor | Comentário                                                                                                                                             |
| --------------------------------------- | ------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Print Frame fixed with multiple records | Inteiro longo | 2     | O tamanho inicial do marco permanece do mesmo tamanho, 4D imprime o formulário várias vezes para incluir todos os registros.                           |
| Print Frame fixed with truncation       | Inteiro longo | 1     | 4D imprime só os registros que aparecem na área do subformulário. O formulário se imprime só uma vez e os registros que não se imprimem são ignorados. |

#### Ver também 

[OBJECT GET PRINT VARIABLE FRAME](object-get-print-variable-frame.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1240 |
| Thread-seguro | &check; |
| Proibido no servidor ||


