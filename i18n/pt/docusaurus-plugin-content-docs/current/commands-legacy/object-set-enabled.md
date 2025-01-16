---
id: object-set-enabled
title: OBJECT SET ENABLED
slug: /commands/object-set-enabled
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET ENABLED.Syntax-->**OBJECT SET ENABLED** ( {* ;} *objeto* ; *ativo* )<!-- END REF-->
<!--REF #_command_.OBJECT SET ENABLED.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto(string), se omitido, objeto é uma variável ou um campo. |
| objeto | any | &#8594;  | Nome de objeto (se * é especificado)ou variável (se * é omitido) |
| ativo | Boolean | &#8594;  | True = objeto ativo, ou então False |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT SET ENABLED.Summary-->O comando OBJECT SET ENABLED utilizado para ativar ou desativar o objeto ou grupo de objetos especificado por *objeto no* formulário atual.<!-- END REF-->   
  
Um objeto ativo reaciona aos cliques e atalhos de teclado.  
  
Se passa o parâmetro opcional *\**, indica que o parâmetro *objeto é* um nome de objeto (string). Se não passa este parâmetro, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, se passa uma referência de campo ou variável (campo ou variável objeto únicamente) ao invés de uma string.   
  
Passe *True* no parâmetro *ativo* para ativar os objetos e *False* para desativá-las.  
  
Este comando pode ser aplicado aos seguintes tipos de objetos:  
  
* Botão, Botão padrão, Botão 3D, Botão invisível, Botão invertido
* Botão opção, Botão de opção 3D, Botão Imagem
* Caixa de seleção, Caixa de seleção 3D
* Menu pop-up , Lista suspensa, Combo box, Menu/lista suspensa
* Termômetro, Régua
  
**Nota**: este comando não tem efeito com um objeto ao que foi atribuido uma ação padrão (4D se encarrega de modificar o estado deste objeto quando seja necessário), exceto no caso das ações Confirmar e Cancelar.

#### Ver também 

[OBJECT Get enabled](object-get-enabled.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1123 |
| Thread-seguro | &cross; |


