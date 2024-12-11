---
id: object-get-scrollbar
title: OBJECT GET SCROLLBAR
slug: /commands/object-get-scrollbar
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET SCROLLBAR.Syntax-->**OBJECT GET SCROLLBAR** ( {* ;} *objeto* ; *horizontal* ; *vertical* )<!-- END REF-->
<!--REF #_command_.OBJECT GET SCROLLBAR.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | se especificado, objeto é um nome de objeto (string). Se omitido, objeto é uma variável ou um campo. |
| objeto | any | &#8594;  | Nome de objeto (se* for especificado) ou variável (se * é omitido) |
| horizontal | Boolean, Integer | &#8592; | True = exibido, False = escondido |
| vertical | Boolean, Integer | &#8592; | True = disponível, False = escondido |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT GET SCROLLBAR.Summary-->O comando OBJECT GET SCROLLBAR se utiliza para mostrar ou ocultar as barras de deslocamento horizontal e/ou vertical no objeto designado pelos parâmetros *objeto* e *\**.<!-- END REF-->   
  
Se passa o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (cadeia). Se não passa este parâmetro, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, se passa uma referência de campo ou variável (campo ou variável objeto únicamente) ao invés de uma cadeia.   

Nos parâmetros *horizontal* e *vertical*, pode passar variáveis de tipo Booleano ou inteiro longo:

* Quando passe variáveis Booleanas, o valor devolvido reflete o estado **atual** da barra de deslocamento:  
   * Se a barra de deslocamento foi definido como oculta, o parâmetro recebe False,  
   * Se a barra de deslocamento foi definido como visível, o parâmetro recebe True,  
   * Se a barra de deslocamento foi definido em modo automático, o parâmetro recebe True ou False dependendo do estado de visualização atual do objeto.
* Quando passe variáveis inteiros longos, o valor devolvido reflete a visibilidade definida para a barra de deslocamento:  
   * Se a barra de deslocamento foi definido como oculta, o parâmetro recebe 0,  
   * Se a barra de deslocamento foi definido como visível, o parâmetro recebe 1,  
   * Se a barra de deslocamento foi definido em modo automático, o parâmetro recebe 2.
Este comando pode ser utilizado com os seguintes objetos de formulário:   
* campos e variáveis objeto texto ou imagen
* list boxes,
* listas hierárquicas,
* sub formulários.

Para obter mais informação, consulte a descrição do comando [OBJECT SET SCROLLBAR](object-set-scrollbar.md).

#### Ver também 

[OBJECT SET SCROLLBAR](object-set-scrollbar.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1076 |
| Thread-seguro | &check; |
| Proibido no servidor ||


