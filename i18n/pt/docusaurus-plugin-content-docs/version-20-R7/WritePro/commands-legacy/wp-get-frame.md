---
id: wp-get-frame
title: WP Get frame
slug: /WritePro/commands/wp-get-frame
displayed_sidebar: docs
---

<!--REF #_command_.WP Get frame.Syntax-->**WP Get frame** ( {* ;} *wpArea* {; *textBoxID*} ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Get frame.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, wpArea é um nome de objeto de formulário (string). Se omitido, wpArea é um campo de objeto ou variável |
| wpArea | Text | &#8594;  | Nome de objeto de formulário (se * for especificado) ou variável ou campo de objeto 4D Write Pro |
| textBoxID | String | &#x1F858; | ID of the text box (only filled if a text box has the focus) |
| Resultado | Integer | &#8592; | o Frame onde o cursor está atualmente estabelecido |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.WP Get frame.Summary-->O comando **WP Get frame** devolve o marco no qual se encontra atualmente o cursor na área 4D Write Pro *wpArea*.<!-- END REF-->

Se passar o parâmetro opcional \*, indica que *wpArea é* um nome de objeto de formulário (string). Se não passar este parâmetro, indica que *wpArea* é uma variável ou um campo objeto 4D Write Pro.

**Nota**: Este comando pode ser usado se *wpArea* for associado com um objeto formulário (ou seja, é exibido no formulário/página atual).

O valor devolvido pode ser comparado com uma das constantes abaixo do tema *Constantes 4D Write Pro*:

| Constante                         | Tipo          | Valor | Comentário                                                                             |
| --------------------------------- | ------------- | ----- | -------------------------------------------------------------------------------------- |
| wk body                           | Inteiro longo | 0     | Body frame da sessão                                                                   |
| wk current section default footer | Inteiro longo | 10    | Rodapé principal da seção (disponível só se não houver rodapé de sub-seção ativo)      |
| wk current section default header | Inteiro longo | 9     | Cabeçalho principal da seção (disponível só se não houver cabeçalho de subseção ativo) |
| wk current section first footer   | Inteiro longo | 4     | Rodapé da primeira página da seção                                                     |
| wk current section first header   | Inteiro longo | 3     | Cabeçalho da primeira página da seção                                                  |
| wk current section left footer    | Inteiro longo | 6     | Rodapé das páginas esquerdas da seção                                                  |
| wk current section left header    | Inteiro longo | 5     | Cabeçalho das páginas esquerdas da seção<br/>                                  |
| wk current section right footer   | Inteiro longo | 8     | Rodapé das páginas direitas da seção<br/>                                      |
| wk current section right header   | Inteiro longo | 7     | Cabeçalho das páginas direitas da seção                                                |
| wk text box                       | Inteiro longo | 11    | caixa de texto                                                                         |

Se o cursor estiver no momento em um elemento caixa de texto, a id do elemento da caixa de texto é devolvida no parâmetro textBoxID. Em todos os outros casos, este parâmetro se devolve vazio.

#### Exemplo 

Se quiser ter certeza de que o usuàrio tenha colocado o cursor em um marco cabeçalho ou rodapé:

```4d
 var $frameGet Integer

$frameGet: :=WP Get frame(*;"WParea")
 If($frameGet=wk body)|($frameGet=wk text box)
    ALERT("Please select a footer or a header.")
 End if


```

#### Ver também 

[WP Get footer](wp-get-footer.md)  
[WP SET FRAME](wp-set-frame.md)  