---
id: object-get-keyboard-layout
title: OBJECT Get keyboard layout
slug: /commands/object-get-keyboard-layout
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get keyboard layout.Syntax-->**OBJECT Get keyboard layout** ( {* ;} *objeto* ) -> Resultado<!-- END REF-->
<!--REF #_command_.OBJECT Get keyboard layout.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#x1F852; | Se especificado, objeto é um nome de objeto(cadeia)Se omitido, objeto é uma variável ou um campo |
| objeto | Objeto de formulário | &#x1F852; | Nome de objeto (se especificado *) ou Variável ou campo(se omitido *) |
| Resultado | String | &#x1F850; | Código da linguagem de configuração, "" = sem configuração |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT Get keyboard layout.Summary-->O comando **OBJECT Get keyboard layout** devolve a configuração do teclado atual associada aos objetos designados pelos parâmetros *objeto* e *\** para o processo atual.<!-- END REF-->  
  
Se passa o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (uma cadeia). Se não passa este parâmetro, indica que o parâmetro *objeto* é uma variável ou um campo. Neste caso, passe uma referencia em lugar de um nome.  
  
O comando devolve uma cadeia indicando o código da linguagem utilizada, baseado em RFC3066, ISO639 e ISO3166\. Para maior informação, consulte a descrição do comando [SET DATABASE LOCALIZATION](set-database-localization.md). 

#### Ver também 

[OBJECT SET KEYBOARD LAYOUT](object-set-keyboard-layout.md)  