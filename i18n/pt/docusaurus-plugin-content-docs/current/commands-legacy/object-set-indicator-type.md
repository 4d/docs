---
id: object-set-indicator-type
title: OBJECT SET INDICATOR TYPE
slug: /commands/object-set-indicator-type
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET INDICATOR TYPE.Syntax-->**OBJECT SET INDICATOR TYPE** ( {* ;} *objeto* ; *indicador* )<!-- END REF-->
<!--REF #_command_.OBJECT SET INDICATOR TYPE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (cadeia) Se omitido, objeto é um campo ou uma variável |
| objeto | any | &#8594;  | Nome de objeto (se * for especificado) ou<br/>Campo ou variável (se * for omitido) |
| indicador | Integer | &#8594;  | Tipo de indicador |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT SET INDICATOR TYPE.Summary-->O comando **OBJECT SET INDICATOR TYPE** modifica o tipo de indicador de progressão do(s) termômetro(s) designado(s) pelos parâmetros *objeto* e *\** no processo atual.<!-- END REF-->  
  
O tipo de indicador define a variante de visualização do termômetro. Para mais informação, consulte *Indicadores* no manual de *Desenho*.  
  
Se passar o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (cadeia). Se não passar este parâmetro, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, se passar uma referência de campo ou variável no lugar de uma cadeia (campo ou variável objeto unicamente).  
  
No parâmetro *indicador*, passe o tipo de indicador a mostrar. Pode utilizar uma das seguintes constantes do tema "*Propriedades dos objetos* ":

| Constante                 | Tipo          | Valor | Comentário                                      |
| ------------------------- | ------------- | ----- | ----------------------------------------------- |
| Asynchronous progress bar | Inteiro longo | 3     | Indicador circular mostra uma animação contínua |
| Barber shop               | Inteiro longo | 2     | Barra que mostra uma animação contínua          |
| Progress bar              | Inteiro longo | 1     | Barra de progresso estandarte                   |

#### Ver também 

[OBJECT Get indicator type](object-get-indicator-type.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1246 |
| Thread-seguro | &check; |
| Proibido no servidor ||


