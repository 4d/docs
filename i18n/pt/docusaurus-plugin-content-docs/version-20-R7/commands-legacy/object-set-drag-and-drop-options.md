---
id: object-set-drag-and-drop-options
title: OBJECT SET DRAG AND DROP OPTIONS
slug: /commands/object-set-drag-and-drop-options
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET DRAG AND DROP OPTIONS.Syntax-->**OBJECT SET DRAG AND DROP OPTIONS** ( {* ;} *objeto* ; *arrastavel* ; *arrastavelAuto* ; *soltavel* ; *soltavelAuto* )<!-- END REF-->
<!--REF #_command_.OBJECT SET DRAG AND DROP OPTIONS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (cadeia)Se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome de objeto (se especificado *) ou Variável (se omitido *) |
| arrastavel | Boolean | &#8594;  | 0 = False, 1 = True |
| arrastavelAuto | Boolean | &#8594;  | 0 = False, 1 = True |
| soltavel | Boolean | &#8594;  | 0 = False, 1 = True |
| soltavelAuto | Boolean | &#8594;  | 0 = False, 1 = True |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT SET DRAG AND DROP OPTIONS.Summary-->O comando **OBJECT SET DRAG AND DROP OPTIONS** define ou modifica dinamicamente as opções de arrastar e soltar para o objeto ou aos objetos designados pelos parâmetros *objeto* e *\** para o processo atual.<!-- END REF-->

Se passado o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (uma cadeia). Se não passa este parâmetro, indica que o parâmetro *objeto* é uma variável. Neste caso, passe uma referencia de variável no lugar de uma cadeia. 

Em cada parâmetro, passe um valor indicando se a opção correspondente está ativa ou inativa (0).

* *arrastavel* \= True: objeto arrastável em modo programado
* *arrastavelAuto* \= True (utilizável unicamente com os campos e variáveis texto, combo box e list box): objeto arrastável em modo automático
* *soltavel* \= True: objeto aceita soltar em modo programado  
*soltavelAuto* \= True (utilizável unicamente com os campos e variáveis imagem, texto, combo box e list box): objeto aceita soltar em modo automático

#### Exemplo 

Definição de uma área de texto em arrastar e soltar auto: 

```4d
 OBJECT SET DRAG AND DROP OPTIONS(*;"Comments";False;True;False;True)
```

#### Ver também 

[OBJECT GET DRAG AND DROP OPTIONS](object-get-drag-and-drop-options.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1183 |
| Thread-seguro | &check; |
| Proibido no servidor ||


