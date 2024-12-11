---
id: object-get-print-variable-frame
title: OBJECT GET PRINT VARIABLE FRAME
slug: /commands/object-get-print-variable-frame
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET PRINT VARIABLE FRAME.Syntax-->**OBJECT GET PRINT VARIABLE FRAME** ( {* ;} *objeto* ; *tamVariavel* {; *subformFixo*} )<!-- END REF-->
<!--REF #_command_.OBJECT GET PRINT VARIABLE FRAME.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (cadeia) Se omitido, objeto é um campo ou uma variável |
| objeto | any | &#8594;  | Nome de objeto (se * for especificado) ou<br/>Campo ou variável (se * for omitido) |
| tamVariavel | Boolean | &#8592; | True = Impressão tamanho variável, False = impressão tamanho fixo |
| subformFixo | Integer | &#8592; | Opção para impressão de sub formulários de tamanho fixo |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT GET PRINT VARIABLE FRAME.Summary-->O comando **OBJECT GET PRINT VARIABLE FRAME** obtém a configuração atual das opções de impressão em tamanho variável do objeto ou dos objetos designado(s) pelos parâmetros *objeto* e *\** .<!-- END REF-->  
  
As propriedades de impressão de tamanho variável podem ser definidas utilizando a lista de propriedades ou o comando [OBJECT SET PRINT VARIABLE FRAME](object-set-print-variable-frame.md).  
Se passar o parâmetro opcional *\** indica que o parâmetro *objeto* é um nome de objeto (cadeia). Se não passar este parâmetro, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, se passar uma referência de campo ou variável no lugar de uma cadeia (campo ou variável objeto unicamente).  
  
No parâmetro *tamVariavel*, o comando devolve uma variável booleana cujo valor indica o estado ativo (**True**) ou inativo (**False**) da impressão em tamanho variável.  
  
Se o *objeto* é um sub formulário e se a impressão em tamanho variável está desativada (**False**), o comando também devolve no parâmetro *subformFixo*, a opção de impressão em tamanho fixo do sub formulário. Pode comparar o valor devolvido com as seguintes constantes, do tema "*Propriedades dos objetos* ":

| Constante                               | Tipo          | Valor | Comentário                                                                                                                                             |
| --------------------------------------- | ------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Print Frame fixed with multiple records | Inteiro longo | 2     | O tamanho inicial do marco permanece do mesmo tamanho, 4D imprime o formulário várias vezes para incluir todos os registros.                           |
| Print Frame fixed with truncation       | Inteiro longo | 1     | 4D imprime só os registros que aparecem na área do subformulário. O formulário se imprime só uma vez e os registros que não se imprimem são ignorados. |

#### Ver também 

[OBJECT SET PRINT VARIABLE FRAME](object-set-print-variable-frame.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1241 |
| Thread-seguro | &check; |
| Proibido no servidor ||


