---
id: object-get-enabled
title: OBJECT Get enabled
slug: /commands/object-get-enabled
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get enabled.Syntax-->**OBJECT Get enabled** ( {* ;} *objeto* ) : Boolean<!-- END REF-->
<!--REF #_command_.OBJECT Get enabled.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (string) se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Object name (if * is specified) or <br/>Variable (if * is omitted) |
| Resultado | Boolean | &#8592; | True = objeto ativado: ou então é falso |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT Get enabled.Summary-->O comando OBJECT Get enabled devolve True se o objeto ou grupo de objetos designado por objeto está ativo no formulário e False se não está ativo.<!-- END REF-->   
  
Um objeto ativo reage aos cliques e atalhos de teclado.  
  
Se passa o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (string). Se não passa este parâmetro, indica que o parâmetro *objeto* é uma variável. Neste caso, se passa uma referência de variável (variável objeto unicamente) ao invés de uma string.   
  
Este comando pode ser aplicado aos seguintes tipos de objetos:  
  
* Botão, Botão padrão, Botão 3D, Botão invisível, Botão invertido
* Botão opção, Botão opção 3D, Botão Imagem
* Caixa de seleção, Caixa de seleção 3D
* Pop-up menu, Lista suspensa, Combo box, Menu/Lista suspensa
* Termômetro, Régua

#### Ver também 

[OBJECT SET ENABLED](object-set-enabled.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1079 |
| Thread-seguro | &cross; |


