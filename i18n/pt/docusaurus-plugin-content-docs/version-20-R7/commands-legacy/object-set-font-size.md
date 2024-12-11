---
id: object-set-font-size
title: OBJECT SET FONT SIZE
slug: /commands/object-set-font-size
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET FONT SIZE.Syntax-->**OBJECT SET FONT SIZE** ( {* ;} *objeto* ; *tamanho* )<!-- END REF-->
<!--REF #_command_.OBJECT SET FONT SIZE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | se especificado, objeto é um nome de objeto (string), se omitido, objeto é um campo ou uma variável |
| objeto | any | &#8594;  | Nome de objeto (se* é especificado) ou Variável (se * é omitido) |
| tamanho | Integer | &#8594;  | Tamanho da fonte em pontos |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT SET FONT SIZE.Summary-->OBJECT SET FONT SIZE define o tamanho da fonte dos objetos de formulário especificados por *objeto* utilizando o tamanho de fonte que se passa em *tamanho*.<!-- END REF-->

Se especificar o parâmetro opcional *\**, indica um nome de objeto (uma string) em *objeto*. Se omite o parâmetro opcional \*, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, você especifica uma referência de um campo ou de uma variável (objetos campo ou variável unicamente) ao invés de uma string. Para maior informação sobre nomes de objetos, consulte a seção *Propriedades dos objetos*

O *tamanho* pode ser qualquer inteiro entre 1 e 255\. Se o tamanho de fonte exato no existe, os caracteres são redimensionados proporcionalmente.

A área para o objeto, como se definiu no formulário, deve ser suficientemente grande para mostrar os dados no novo tamanho. Do contrário, o texto pode ser truncado ou não ser visualizado.

Nota: Se usar este comando ou um objeto que esteja usando uma folha de estilo, a referência para a folha de estilo é apagada automaticamente do objeto - mesmo se atribuir os mesmos atributtos à folha de estilo.

#### Exemplo 1 

O exemplo a seguir define o tamanho de fonte para uma variável chamada *vtInfo*: 

```4d
 OBJECT SET FONT SIZE(vtInfo;14)
```

#### Exemplo 2 

O exemplo a seguir define o tamanho de fonte para todos os objetos de formulário cujo nome começa por "hl": 

```4d
 OBJECT SET FONT SIZE(*;"hl@";14)
```

  

#### Ver também 

*Interação de comandos genéricos com textos multi estilos*  
[OBJECT Get font size](object-get-font-size.md)  
[OBJECT SET FONT](object-set-font.md)  
[OBJECT SET FONT STYLE](object-set-font-style.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 165 |
| Thread-seguro | &check; |
| Proibido no servidor ||


