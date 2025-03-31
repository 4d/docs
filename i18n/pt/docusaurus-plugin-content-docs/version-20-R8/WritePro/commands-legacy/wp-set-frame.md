---
id: wp-set-frame
title: WP SET FRAME
slug: /WritePro/commands/wp-set-frame
displayed_sidebar: docs
---

<!--REF #_command_.WP SET FRAME.Syntax-->**WP SET FRAME** ( {* ;} *wpArea* ; *frameSelector* {; *idTextBox*} )<!-- END REF-->
<!--REF #_command_.WP SET FRAME.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, wpArea é um nome de objeto de formulário (string). Se omitido, wpArea e um campo ou variável objeto |
| wpArea | Text | &#8594;  | nome objeto Form (se * especificado) ou variável objeto 4D Write Pro ou campo (se * for omitido) |
| frameSelector | Integer | &#8594;  | Frame/quadro onde o cursor é estabelecido |
| idTextBox | Text | &#8594;  | id da caixa de texto onde o cursor deve ser estabelecido |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.WP SET FRAME.Summary-->O comando **WP SET FRAME** coloca o cursor no frame designado por *frameSelector* na área *wpArea* 4D Write Pro.<!-- END REF-->

Se passar o parâmetro opcional \*, indica que *wpArea* é um nome de objeto de formulário (string). Se não passar este parâmetro, indica que *wpArea* é uma variável ou um campo objeto 4D Write Pro.

**Nota**: Este comando pode ser uado apenas se *wpArea* for associado com um objeto formulário (ou seja é exibido no formuário/página atual).

Pode passar em *frameSelector* uma das constantes abaixo do tema *Constantes 4D Write Pro*: 

| Constante                         | Tipo          | Valor | Comentário                                                                             |
| --------------------------------- | ------------- | ----- | -------------------------------------------------------------------------------------- |
| wk body                           | Inteiro longo | 0     | Body frame da sessão                                                                   |
| wk current page footer            | Inteiro longo | 2     |                                                                                        |
| wk current page header            | Inteiro longo | 1     |                                                                                        |
| wk current section default footer | Inteiro longo | 10    | Rodapé principal da seção (disponível só se não houver rodapé de sub-seção ativo)      |
| wk current section default header | Inteiro longo | 9     | Cabeçalho principal da seção (disponível só se não houver cabeçalho de subseção ativo) |
| wk current section first footer   | Inteiro longo | 4     | Rodapé da primeira página da seção                                                     |
| wk current section first header   | Inteiro longo | 3     | Cabeçalho da primeira página da seção                                                  |
| wk current section left footer    | Inteiro longo | 6     | Rodapé das páginas esquerdas da seção                                                  |
| wk current section left header    | Inteiro longo | 5     | Cabeçalho das páginas esquerdas da seção<br/>                                  |
| wk current section right footer   | Inteiro longo | 8     | Rodapé das páginas direitas da seção<br/>                                      |
| wk current section right header   | Inteiro longo | 7     | Cabeçalho das páginas direitas da seção                                                |
| wk text box                       | Inteiro longo | 11    | caixa de texto                                                                         |

* Se passar wk current page header ou wk current page footer em *frameSelector*, **WP SET FRAME** dará o foco ao primeiro cabeçalho ou rodapé selecionado, independentemente do tipo de subseção (se não contiver nenhum cabeçalho ou rodapé, o comando não fará nada).
* Se passar alguna das constante wk current section\[...\] em *frameSelector*, **WP SET FRAME** dará o foco ao cabeçalho ou rodapé da primeira seção selecionada (se não contiver nenhum cabeçalho ou rodapé o comando não fará nada).
* **WP SET FRAME** não fará nada se a moldura *frameSelector* não existir para a seção de seleção (por exemplo, wk current section left header quando não há distinção entre as páginas esquerda e direita em *wpArea*).

Se selectorMarco = wk text box, deve passar o parâmetro textBoxID com a id da caixa de texto na qual definir o foco. Neste caso, se omitir textBoxID ou se não houver caixa de texto com a id especificada ou se não houver página correspondente as condições de ancoragem da caixa de texto, o comando não faz nada.

O parâmetro textBoxID se ignora se o selectorMarco # wk text box.

#### Exemplo 

Se quiser colocar o cursor no rodapé esquerdo da seção atual:

```4d
 WP SET FRAME(*;"WPArea";wk current section left footer)
```

#### Ver também 

[WP Get frame](wp-get-frame.md)  