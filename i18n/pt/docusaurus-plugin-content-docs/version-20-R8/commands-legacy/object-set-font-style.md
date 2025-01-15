---
id: object-set-font-style
title: OBJECT SET FONT STYLE
slug: /commands/object-set-font-style
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET FONT STYLE.Syntax-->**OBJECT SET FONT STYLE** ( {* ;} *objeto* ; *estilos* )<!-- END REF-->
<!--REF #_command_.OBJECT SET FONT STYLE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | se especificado, objeto é um nome de objeto (string), se omitido, objeto é um campo ou uma variável |
| objeto | any | &#8594;  | Nome de objeto (se* é especificado) ou Campo ou Variável (se * é omitido) |
| estilos | Integer | &#8594;  | Estilo de fonte |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT SET FONT STYLE.Summary-->OBJECT SET FONT STYLE atribui o estilo de fonte de *estilos* aos objetos de formulário especificados por *objeto*.<!-- END REF-->

Se especifica o parâmetro opcional *\**, indica um nome de objeto (uma cadena) em *objeto*. Se omite o parâmetro opcional \*, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, é especificado uma referência de um campo ou de uma variável (campo o variável tipo objeto unicamente) ao invés de uma string. Para maior informação sobre nomes de objetos, consulte a seção . 

Em estilos se passa uma das constantes predefinidas que define a seleção de estilo de fonte. As seguintes são constantes predefinidas de 4D:  

| Constante | Tipo          | Valor |
| --------- | ------------- | ----- |
| Plain     | Inteiro longo | 0     |
| Bold      | Inteiro longo | 1     |
| Italic    | Inteiro longo | 2     |
| Underline | Inteiro longo | 4     |

#### Exemplo 1 

Este exemplo define o estilo de fonte para um botão chamado *bAdicionarNovo*. O estilo de fonte definido é negrito itálico: 

```4d
 OBJECT SET FONT STYLE(bAdicionarNovo;Bold+Italic)
```

#### Exemplo 2 

Este exemplo define o estilo de fonte Plain para todos os objetos de formulário que começam por “vt”: 

```4d
 OBJECT SET FONT STYLE(*;"vt@";Plain)
```

#### Ver também 

*Interação de comandos genéricos com textos multi estilos*  
[OBJECT Get font style](object-get-font-style.md)  
[OBJECT SET FONT](object-set-font.md)  
[OBJECT SET FONT SIZE](object-set-font-size.md)  
[SET LIST ITEM PROPERTIES](set-list-item-properties.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 166 |
| Thread-seguro | &cross; |


