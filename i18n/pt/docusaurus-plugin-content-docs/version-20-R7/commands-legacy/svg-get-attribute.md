---
id: svg-get-attribute
title: SVG GET ATTRIBUTE
slug: /commands/svg-get-attribute
displayed_sidebar: docs
---

<!--REF #_command_.SVG GET ATTRIBUTE.Syntax-->**SVG GET ATTRIBUTE** ( {* ;} *objetoImagem* ; id_Elemento ; *nomeAtrib* ; *valorAtributo* )<!-- END REF-->
<!--REF #_command_.SVG GET ATTRIBUTE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objetoImagem é um nome de objeto (string). Se omitido, objetoImagem é uma variável |
| objetoPicture | Picture | &#8594;  | Nome de objeto (se * for especificado) ou variável ou campo (se * for omitido) |
| id_Elemento | Text | &#8594;  | ID do elemento cujo valor de atributo você deseja conseguir |
| nomeAtrib | Text | &#8594;  | Atributo cujo valor você deseja obter |
| valorAtributo | Text, Integer | &#8592; | Valor atual do atributo |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.SVG GET ATTRIBUTE.Summary-->O comando SVG GET ATTRIBUTE é utilizado para obter o valor atual do atributo *nomAtrib* em um objeto ou uma imagem SVG.<!-- END REF-->  
  
Se passa o parâmetro opcional *\**, indica que o parâmetro *objetoImagem* é um nome de objeto (string). Neste caso, o comando retorna o valor do atributo da imagem renderizada anexa ao objeto. Este valor pode ter sido modificada por [SVG SET ATTRIBUTE](svg-set-attribute.md), por exemplo.  
Se não passa o parâmetro *\**, indica que o parâmetro *objetoImagem* é uma variável ou um campo. Portanto, se passa uma referência de variável (variável objeto únicamente) ou de campo ao invés de uma string. En este caso, o comando retorna o valor do atributo da imagem inicial renderizada (correspondente a fonte de dados da variável).

**Nota**: este principio também se aplica ao comando [SVG Find element ID by coordinates](svg-find-element-id-by-coordinates.md).  
  
O parâmetro *id\_Element* é utilizada para definir a identificação (atributo "id" ou "xml: id") do elemento cujo valor de atributo deseja obter.  
  
Para obter mais informação acerca dos atributos SVG, consulte a descripção do comando [SVG SET ATTRIBUTE](svg-set-attribute.md). Esta é uma lista de atributos 4D reservados e dedicados a animação:

| **Atributos**                                 | **Acesso**      | **Comentário**                                                                                                                                                                                                           |
| --------------------------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 4D-text                                       | leitura/escrita | Substitui/lê o conteúdo do nó de texto. Utilizável com os elementos 'text' 'tspan' e 'textArea'                                                                                                                          |
| 4D-bringToFront                               | escrita         | Se 'true', mover o nó em frente dos nó irmãos. Apenas pode ser usada com o comando [SVG SET ATTRIBUTE](svg-set-attribute.md)                                                                                             |
| 4D-isOfClass-{IDENT \[\[S\|COMMA\] IDENT\]\*} | leitura         | Retorna 'true' se o atributo de classe herdado do nó contém todos os nomes de classes; do contrário, retorna 'false'. Retorna por exemplo true para "4D-isOfClass-terra" se a classe herdada do nó é "land department01" |

  
4D-enableD2Dleitura/escrituraSe 'false', desativa Direct2D para o motor de renderização SVG. Na verdade, os filtros SVG não são renderizados em Direct2D e sim em GDI/GDIPlus. Esta opção lhe permite se beneficiar dos filtros SVG inclusive se a base está em Direct2D. Note que esta opção só deve ter em conta quando uma imagem já foi carregada em *objetoImagem*. No entanto, como esta opção se aplica globalmente ao motor, só deve ser definida uma vez por sessão (por exemplo com um SVG simples carregado em memória desde uma variável texto ao início da base).\[#/table\]

#### Ver também 

[SVG SET ATTRIBUTE](svg-set-attribute.md)  