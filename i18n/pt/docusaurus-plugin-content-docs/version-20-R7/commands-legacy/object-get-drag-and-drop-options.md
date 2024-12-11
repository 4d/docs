---
id: object-get-drag-and-drop-options
title: OBJECT GET DRAG AND DROP OPTIONS
slug: /commands/object-get-drag-and-drop-options
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET DRAG AND DROP OPTIONS.Syntax-->**OBJECT GET DRAG AND DROP OPTIONS** ( {* ;} *objeto* ; *arrastavel* ; *arrastavelAuto* ; *soltavel* ; *soltavelAuto* )<!-- END REF-->
<!--REF #_command_.OBJECT GET DRAG AND DROP OPTIONS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto(cadeia)Se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome de objeto (se especificado *) ou Variável (se omitido *) |
| arrastavel | Boolean | &#8592; | 0 = False, 1 = True |
| arrastavelAuto | Boolean | &#8592; | 0 = False, 1 = True |
| soltavel | Boolean | &#8592; | 0 = False, 1 = True |
| soltavelAuto | Boolean | &#8592; | 0 = False, 1 = True |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT GET DRAG AND DROP OPTIONS.Summary-->O comando **OBJECT GET DRAG AND DROP OPTIONS** devolve as opções de arrastar e soltar para o objeto o os objetos designados pelos parâmetros *objeto* e *\** para o processo atual.<!-- END REF-->  
  
Se passado o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (uma cadeia). Se não passa este parâmetro, isto indica que o parâmetro *objeto* é uma variável. Neste caso, é passada uma referencia de variável em lugar de uma cadeia.  
  
O comando devolve as opções de arrastar e soltar atuais, como estão definidas em modo *Desenho* ou para o processo atual utilizando o comando [OBJECT SET DRAG AND DROP OPTIONS](object-set-drag-and-drop-options.md).  
  
Cada parâmetro devolve True ou False dependendo se a opção correspondente está ativa ou inativa. 

* *arrastavel* \= True: objeto arrastável em modo programado
* *arrastavelAuto* \= True (utilizável unicamente com os campos e variáveis texto, combo box e list box): Objeto arrastável em modo automático
* *soltavel* \= True: objeto aceita soltar em modo programado  
*soltavelAuto* \= True (utilizável unicamente com os campos e variáveis imagem, texto, combo box e list box): Objeto aceita soltar em modo automático

#### Ver também 

[OBJECT SET DRAG AND DROP OPTIONS](object-set-drag-and-drop-options.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1184 |
| Thread-seguro | &check; |
| Proibido no servidor ||


