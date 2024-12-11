---
id: svg-find-element-ids-by-rect
title: SVG Find element IDs by rect
slug: /commands/svg-find-element-ids-by-rect
displayed_sidebar: docs
---

<!--REF #_command_.SVG Find element IDs by rect.Syntax-->**SVG Find element IDs by rect** ( {* ;} *objetoImagem* ; *x* ; *y* ; *largura* ; *alto* ; *arrIDs* ) : Boolean<!-- END REF-->
<!--REF #_command_.SVG Find element IDs by rect.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objetoImagem é um nome de objeto (string). Se omitido, objetoImagem é uma variável |
| objetoPicture | Picture | &#8594;  | Nome do objeto (se * for especificado) ou Campo ou variável (se * for omitido) |
| x | Integer | &#8594;  | Coordenada horizontal da esquina esquerda superior do retângulo de seleção |
| y | Integer | &#8594;  | Coordenada vertical da esquina superior esquerda do retângulo de seleção |
| largura | Integer | &#8594;  | Largura da seleção retangular |
| alto | Integer | &#8594;  | Altura da seleção retangular |
| arrIDs | Text array | &#8592; | IDs dos elementos cujas molduras do retângulo intersecciona com o retângulo de seleção |
| Resultado | Boolean | &#8592; | True = ao menos um elemento é encontrado |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SVG Find element IDs by rect.Summary-->O comando SVG Find element IDs by rect preenche o array texto arrIDs com os IDs (atributo "id" ou "xml:id") dos elementos XML cujo retângulo circundante está em intersecção com o retângulo de seleção na localização definida pelos parâmetros *x* e *y*.<!-- END REF-->  
  
O comando retorna True se for encontrado ao menos um elemento (em outras palavras se o array *arrIDs* não estiver vazio) e do contrário retorna False. 

Este comando permite administrar interfaces gráficas interativas.  
  
Se passa o parâmetro opcional \*, indica que o parâmetro *objetoImagem* é um nome de objeto (string). Se não passar este parâmetro, indica que o parâmetro *objetoImagem* é um campo ou uma variável. Neste caso, passe uma referência de campo ou variável (campo ou variável objeto unicamente) ao invés de uma string. 

Se trabalha com um campo ou variável imagem, o comando utiliza a imagem de origen, correspondente a fonte de dados. Entretanto, se trabalha com um objeto de formulário, o comando utiliza a imagem atual, que pode ser modificada através do comando [SVG SET ATTRIBUTE](svg-set-attribute.md) e que é conservado com as propriedades do objeto de formulário.  
  
As coordenadas passadas nos parâmetros *x* e *y* devem expressos em píxels em relação com a esquina superior esquerda da imagem (0,0). Pode utilizar os valores devolvidos pelas Variávels de sistema MouseX e MouseY. Estas variáveis são atualizadas nos eventos de formulário On Clicked e On Double Clicked assim como nos eventos de formulário On Mouse Enter e On Mouse Enter e On Mouse Move.  

**Nota**: no sistema de coordenadas das imagens, \[x;y\] sempre especifica o mesmo ponto, sem importar o formato de visualização da imagem, exceto pelo formato "Replicado".   
  
Todos os elementos cujo retângulo circundante está em intersecção com o retângulo de seleção são considerados, mesmo os que estão em outros elementos.

#### Ver também 

[SVG Find element ID by coordinates](svg-find-element-id-by-coordinates.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1109 |
| Thread-seguro | &check; |
| Proibido no servidor ||


