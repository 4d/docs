---
id: svg-set-attribute
title: SVG SET ATTRIBUTE
slug: /commands/svg-set-attribute
displayed_sidebar: docs
---

<!--REF #_command_.SVG SET ATTRIBUTE.Syntax-->**SVG SET ATTRIBUTE** ( {* ;} *objetoImagem* ; id_Elemento ; *nomeAtrib* ; *valorAtributo* {; *nomeAtrib2* ; *valorAtributo2* ; ... ; *nomeAtribN* ; *valorAtributoN*} {; *})<!-- END REF-->
<!--REF #_command_.SVG SET ATTRIBUTE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objImagem é um nome objeto (string). Se omitido, objImagem é uma variável |
| objetoPicture | Picture | &#8594;  | Nome de objeto (se * for especificado) ou variável ou campo (se * for otimido) |
| id_Elemento | Text | &#8594;  | ID do elemento onde um ou mais atributos são estabelecidos |
| nomeAtrib | Text | &#8594;  | Atributo a estabelecer |
| valorAtributo | Text, Integer | &#8594;  | Novo valor do atributo |
| * | Operador | &#8594;  | Se passado = modifica a própria imagem SVG |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SVG SET ATTRIBUTE.Summary-->**O comando SVG SET ATTRIBUTE** é usado para modificar o valor de um atributo existente na árvore de renderização SVG de uma imagem exibida ou na árvore interna DOM de uma imagem.<!-- END REF--> 

Se passar o parâmetro opcional \*, indica que o parâmetro objImagem é um nome de objeto (string). Neste caso, o comando aplica aos parâmetros da imagem renderizada anexada ao objeto (note que os parâmetros, e portanto a imagem renderizada do objeto, são criados apenas se o comando **SVG SET ATTRIBUTE** for chamado pelo menos uma vez).   
Se não passar o parâmetro \*, indica que o parâmetro objImagem é uma variável ou campo. Portanto, passa uma variável (apenas variável objeto) ou referência de campo ao invés de uma string. Neste caso, o comando se aplica às imagens renderizadas de todos os objetos que usam a variável ou o campo.

Como padrão, este comando modifica apenas a imagem renderizada nos objetos formulário correspondentes a objImagem no contexto do formulário, e não faz nada se nenhum objeto o usar. Se passar o segundo \* como último parâmetro, o comando modifica a própria imagem SVG, mesmo se nenhum objeto formulário o usar. Neste caso, todos os objetos formulário existentes ou futuros que usam a imagem SVG serão modificados, em todos os contextos. 

**Notas:**

* O último \* não serve pra nada se o parâmetro *objImagem* referenciar um objeto formulário.
* Para mudar a data source de uma imagem SVG, também pode usar os comandos *XML DOM* ou **4D SVG component** fornecido por 4D.

O parâmetro *element\_ID* é usado para especificar o ID (atributo "id" ou "xml:id") do elemento cujos atributos quer modificar.

Nos parâmetros *attribName* e *attribValue*, passe, respectivamente, o atributo a estabelecer e seu valor (como variáveis, campos ou valores literais). Pode passar quantos pares de atributo/valor quantos quiser. 

O comando **SVG SET ATTRIBUTE** é usado para modificar (mas não para adicionar ou apagar) a maioria dos atributos SVG, como por exemplo, 'fill', 'opacity', 'font-family', e assim por diante. Para uma definição completa dos atributos SVG, veja os documentos de referência disponíveis na Internet, por exemplo: *http://www.w3.org/TR/SVG11/attindex.html*. A imagem renderizada é atualizada imediatamente, as modificações são transferidas para os elementos filhos para estilos herdados. 

Note que por razões técnicas, os atributos de certos elementos, e também certos atributos, não podem ser modificados. A tabela abaixo lista os elementos que podem ou não ser modificados, assim como os atributos que não podem ser mudados.

**Elementos cujos atributos podem ser modificados**   

| svg                                                                                                 | Restrições :                                                                                                                       |
| --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| \- "width" e "height" não podem ser modificados(1)                                                  |                                                                                                                                    |
| \- "viewBox" só pode ser modificado se "width" e "height" forem especificados no documento original |                                                                                                                                    |
| g                                                                                                   |                                                                                                                                    |
| defs                                                                                                |                                                                                                                                    |
| use                                                                                                 |                                                                                                                                    |
| filter                                                                                              | Restrição: elementos filhos fe\_xxx não podem ser modificados                                                                      |
| circle                                                                                              |                                                                                                                                    |
| ellipse                                                                                             |                                                                                                                                    |
| line                                                                                                |                                                                                                                                    |
| polyline                                                                                            |                                                                                                                                    |
| polygon                                                                                             |                                                                                                                                    |
| path                                                                                                |                                                                                                                                    |
| rect                                                                                                |                                                                                                                                    |
| text, tspan, textArea                                                                               | O atributo especifico specific "4d-text" é usado para modificar o texto de um elemento "text", "tspan" ou "textArea" (ver exemplo) |
| Image                                                                                               |                                                                                                                                    |

**Elementos cujos atributos não podem ser modificados**   

| linearGradient, radialGradient, Stop, solidColor, marker, symbol, clipPath, filter e elementos que começam por fe, style, pattern | Este grupo designa todos os elementos que podem ser referenciados ou contidos em um elemento que pode ser referenciado. Isso significa que não é possível, por exemplo, redefinir os atributos de um gradiente (mas é possível mudar o gradiente usado). Da mesma forma, para mudar um marcador de cor preto para um marcador velho, precisa definir ambos marcadores no documento SVG (um preto e outro vermelho) e selecionar um deles. Não é possível por exemplo modificar a cor do retângulo se seu objeto pai for um símbolo ou elemento marker |
| --------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Atributos que não podem ser modificados**  

| id ou xml:id       |                                                      |
| ------------------ | ---------------------------------------------------- |
| lang ou xml:lang   |                                                      |
| class ou xml:class |                                                      |
| width, height      | Apenas em relação aos atributos do elemento 'svg'(1) |

(1) Estes atributos não podem ser modificados porque eles definem e estruturam a imagem resultante. Os atributos *width* e *height do elemento* *svg* são usados para definir as dimensões iniciais da imagem em 4D e estas dimensões devem se manter constantes depois que a imagem for criada (é possível entretanto modificar as dimensões da imagem resultado com o comando 4D[TRANSFORM PICTURE](transform-picture.md)).

Também pode referenciar a descrição do comando [SVG GET ATTRIBUTE](svg-get-attribute.md) para ver a lista de atributos 4D que são reservados e dedicados à animação

Se tentar modificar o atributo de um elemento que não for compatível ou um de seus elementos filhos, o comando não faz nada e nenhum erro é gerado

Se o comando não for executado no contexto de um formulário ou se um *objImagem* for passado, a variável OK é estabelecida em 0\. Se o comando for executado corretamente, é estabelecido em 1 .

#### Exemplo 

Modificação do conteúdo de um elemento de tipo texto:

```4d
 SVG SET ATTRIBUTE(*;picture_object_name;text_element_ID;"4d-text";"Este é um texto")
```

**Nota:** não há nenhum namespace para que o atributo possa ser utilizado em uma folha de estilo CSS sem risco de conflito.

#### Ver também 

[SVG GET ATTRIBUTE](svg-get-attribute.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1055 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |


