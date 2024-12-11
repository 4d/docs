---
id: object-get-font-style
title: OBJECT Get font style
slug: /commands/object-get-font-style
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get font style.Syntax-->**OBJECT Get font style** ( * ; *objeto* ) : Integer<!-- END REF-->
<!--REF #_command_.OBJECT Get font style.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (string), se omitido, objeto é uma variável ou um campo. |
| objeto | any | &#8594;  | Nome de objeto (se * é especificado) ou Variável ou Campo (se * é omitido) |
| Resultado | Integer | &#8592; | Estilo de fonte |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT Get font style.Summary-->O comando OBJECT Get font style devolve o estilo atual da fonte utilizada pelo objeto de formulário designado por *objeto*.<!-- END REF--> 

Se passa o parâmetro opcional *\**, indica que o parâmetro objeto é um nome de objeto (string). Se não passa este parâmetro, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, é passada uma referência de campo ou variável (campo ou variável objeto unicamente) ao invés de uma string. 

Pode comparar o valor retornado pelo comando com o valor de um ou mais das seguintes constantes predefinidas, localizadas no tema "":

| Constante | Tipo          | Valor |
| --------- | ------------- | ----- |
| Plain     | Inteiro longo | 0     |
| Bold      | Inteiro longo | 1     |
| Italic    | Inteiro longo | 2     |
| Underline | Inteiro longo | 4     |

#### Ver também 

[OBJECT SET FONT STYLE](object-set-font-style.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1071 |
| Thread-seguro | &check; |
| Proibido no servidor ||


