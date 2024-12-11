---
id: object-get-rgb-colors
title: OBJECT GET RGB COLORS
slug: /commands/object-get-rgb-colors
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET RGB COLORS.Syntax-->**OBJECT GET RGB COLORS** ( {* ;} *objeto* ; *corPrimeiroPlano* {; *corFundo* {; *corFundoAlternativo*}} )<!-- END REF-->
<!--REF #_command_.OBJECT GET RGB COLORS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificar, objeto é um nome de objeto (string) se omitido, objeto é uma variável ou campo. |
| objeto | any | &#8594;  | Nome do objeto (se * é especificado) ou Variável ou Campo (se * é omitido) |
| corPrimeiroPlano | Text, Integer | &#8592; | Valor da cor RGB do primeiro plano |
| corFundo | Text, Integer | &#8592; | Valor da cor do RGB para segundo plano (fundo) |
| corFundoAlternativo | Text, Integer | &#8592; | Valor da cor RGB do fundo alternativo |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT GET RGB COLORS.Summary-->O comando OBJECT GET RGB COLORS devolve as cores de fundo e primeiro plano do objeto ou grupo de objetos designados por *objeto*.<!-- END REF-->  
  
Se passa o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (string). Se não passa este parâmetro, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, é passada uma referência de campo ou variável (campo ou variável objeto unicamente) ao invés de um string.   
  
Quando o comando é aplicado a um objeto de tipo List box, a cor de fundo alternativo das filas podem ser devolvidos no parâmetro *corFundoAlternativo*. Neste caso, o valor de *corFundo* é utilizado para o fundo das linhas ímpares.   
  
Os valores de cores RGB devolvidos nos parâmetros a *corPrimerPlano*, *corFundo* e *corFundoAlternativo* dependem do tipo de parâmetro: 

* se passar um parâmetro de tipo texto, a cor é devolvida em formato CSS com a sintaxe "#rrggbb" (por exemplo: "# 0000FF")
* Se passar um parâmetro de tipo [inteiro longo](# "Number between -2^31..(2^31)-1 (4-byte Integer)"), a cor pode ser um inteiro longo de 4 bytes de formato (0x00RRGGBB) ou valores negativos correspondentes às cores de "sistema".

Para obter mais informação sobre do formato dos parâmetros *corPrimeiroPlano*, *corFundo* e *corFundoAlt*, consulte a descrição do comando [OBJECT SET RGB COLORS](object-set-rgb-colors.md).

#### Ver também 

[OBJECT SET RGB COLORS](object-set-rgb-colors.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1074 |
| Thread-seguro | &check; |
| Proibido no servidor ||


