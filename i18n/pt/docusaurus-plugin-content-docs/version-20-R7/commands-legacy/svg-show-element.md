---
id: svg-show-element
title: SVG SHOW ELEMENT
slug: /commands/svg-show-element
displayed_sidebar: docs
---

<!--REF #_command_.SVG SHOW ELEMENT.Syntax-->**SVG SHOW ELEMENT** ( {* ;} *objetoImagem* ; *id* {; *margem*} )<!-- END REF-->
<!--REF #_command_.SVG SHOW ELEMENT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objetoImagem é um nome de objeto (string). Se omitido, objetoImagem é uma variável |
| objetoPicture | Picture | &#8594;  | Nome de objeto (se * for especificado) ou variável ou campo (se * for otimido) |
| id | Text | &#8594;  | Atributo ID do elemento a exibir |
| margem | Integer | &#8594;  | Margem de visbilidade (em pixels por padrão) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SVG SHOW ELEMENT.Summary-->O comando SVG SHOW ELEMENT move o documento SVG *objetoImagem* para mostrar o elemento cujo atributo "id" é especificado pelo parâmetro *id*.<!-- END REF-->  
  
Se passa o parâmetro opcional *\**, indica que o parâmetro *objetoImagem* é um nome de objeto (string). Neste caso, o comando é aplicado a imagem renderizada anexa ao objeto. Se não passar este parâmetro, indica que o parâmetro *objetoImagem* é um campo ou uma variável e se passar uma referência de variável (variável objeto unicamente) ou de campo ao invés de uma string. Neste caso, o comando se aplica as imagens renderizadas de todos os objetos que utilizam a variável ou o campo (mas não a imagem renderizada inicial).

O comando move o documento SVG para que todo o objeto, cujos limites estão definidos por seu retângulo de delimitação, seja visível. O parâmetro *margem* é utilizado para configurar a amplitude do movimento ao especificar a distância que deve separar o objeto que é mostrado desde as bordas do documento. Em outras palavras, o retângulo aumentará em *margem* píxels de largura e de altura. Por padrão, o valor de deslocamento é de 4 píxeles.  
  
Este comando apenas tem efeito em modo de visualização "top left" (com barras de rolagem).  
  
Se este comando não for executado no contexto de um formulário ou se for passado um *objetoImagem* inválido, a variável OK toma o valor 0\. Se o comando for executado corretamente, toma o valor 1.


#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1108 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |
| Proibido no servidor ||


