---
id: wp-get-position
title: WP Get position
slug: /WritePro/commands/wp-get-position
displayed_sidebar: docs
---

<!--REF #_command_.WP Get position.Syntax-->**WP Get position** ( *objRange* {; *layout*} ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Get position.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| objRange | Object | &#8594;  | Elemento ou range ou documento 4D Write &#124;Pro |
| layout | Integer | &#8594;  | Layout documento 4D Write Pro usado para avaliação: 0 (padrão) = 4D Write Pro layout; 1= HTML WYSWYG |
| Resultado | Object | &#8592; | Informação posição |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WP Get position.Summary-->O comando **WP Get position** devolve um objeto que descreve a posição atual de *objRange*.<!-- END REF-->

No parâmetro *objRange*, pode passar:

* uma range, ou
* um elemento (tabela / fila / parágrafo / corpo / cabeçalho/ rodapé / imagem/seção/ subseção/ caixa de texto), ou
* um documento 4D Write Pro

O comando devolve a informação de posição em um objeto com as propriedades abaixo:

| **Nome da propriedade** | **Tipo** | **Descrição**                                                                                                                                                                                                                                                           |
| ----------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| seção                   | Número   | Número da primeira seção que intersecta *objRango*                                                                                                                                                                                                                      |
| página                  | Número   | Número da primeira página que intersecta *objRango*                                                                                                                                                                                                                     |
| coluna                  | Número   | Índice da primeira coluna que intersecta *objRango* (baseado-1)                                                                                                                                                                                                         |
| linha                   | Número   | Índice da primeira linha que intersecta *objRange* (relativo à coluna - ou página se não houver nenhuma coluna com base - 1)                                                                                                                                            |
| posição                 | Número   | Posição na linha do primeiro caractere de *objRange* (baseado -1)                                                                                                                                                                                                       |
| delimitadores           | Objeto   | Coordenadas de retângulo delimitador de objRange, expressas na unidade de documento atual e em relação com o canto superior esquerdo da página. Se levam em consideração os tamanhos de preenchimento e borda (se houver); as margens e as réguas não são consideradas. |
| acima                   | Número   | Coordenada superior de retângulo                                                                                                                                                                                                                                        |
| esquerda                | Número   | Coordenada esquerda de retângulo                                                                                                                                                                                                                                        |
| abaixo                  | Número   | Coordenada inferior de retângulo                                                                                                                                                                                                                                        |
| direita                 | Número   | Coordenada direita de retângulo                                                                                                                                                                                                                                         |
| rangeAltura             | Número   | Altura de retângulo delimitador de objRange. Este valor pode ser diferente das opções bounds.bottom-bounds.top se objRange for estendido sobre várias colunas (ver exemplo 4)                                                                                           |

Se *objRango* for uma range vazio, **WP Get position** devolve a informação de posição ao início da range.  
Se *objRango* é um texto no cabeçalho ou no rodapé, **WP Get position** devolve a informação de posição onde são mostrados o cabeçalho e o rodapé na primeira seção/página.  
Se *objRango* é uma imagem ancorada (que pode ser replicada em várias páginas), **WP Get position** devolve a informação de posição onde a imagem estiver ancorada na primeira seção/página.  
Se *objRango* é uma subseção, WP Get position retorna a informação de posição da primeira página da seção pai.

O parâmetro opcional *layout* pode ser usada para definir a vista HTML wysiwyg para a avaliação *objRange*. Pode passar uma das constantes abaixo do tema "4D Write Pro":

| Constante              | Tipo          | Valor | Comentário                                                                                                         |
| ---------------------- | ------------- | ----- | ------------------------------------------------------------------------------------------------------------------ |
| wk 4D Write Pro layout | Inteiro longo | 0     | Layout 4D Write Pro padrão, que pode incluir atributos de estilo específicos                                       |
| wk html wysiwyg        | Inteiro longo | 1     | Neste formato, os atributos avançados 4D Write Pro que não são compatíveis com todos os navegadores são eliminados |

Se omitir *layout*, o design de 4D Write Pro se usa de forma pré-determinada.

A mesma configuração de visualização que para o comando [WP PRINT](wp-print.md) se usa com **WP Get position**:

* cabeçalhos: visíveis
* rodapés: visíveis
* expressõs: computadas e mostradas
* modo página: página ou rascunho (vista wysiwyg HTML segundo o definido pelo comando)

Se *objRango* mostrar em uma área de formulário 4D Write Pro, tenha certeza de que a configuração de visualização da área coincida com a configuração de visualização do comando para obter informação consistente. Lembre também que se estas configurações forem diferentes na área, 4D Write Pro terá que "clonar" o documento para calcular o design em cada chamada do comando, o que pode levar muito tempo. Por motivos de rendimento, neste caso, se recomenda construir o documento fora de linha e copiá-lo na área de objetos de formulário só quando se complete a compilação.

* Este comando não deve ser chamado dentro de eventos que são frequentemente gerados (tais como On After Edit) já que *result.rangeHeight* por exemplo pode exigir cálculos que consumem muito tempo e que terão que ser feitos a cada chamada de evento

#### Exemplo 1 

Se quiser saber o número de página de uma range:

```4d
 var $range;$rangePosition : Object
 $range:=WP Text range(WParea) //range da seleção de usuário
 $rangePosition:=WP Get position($range;wk 4D Write Pro layout)
 ALERT("First page number in selection is "+String($rangePosition.page))
```

#### Exemplo 2 

Se quiser definir na cor azul o texto na primeira e última página do documento:

```4d
 var $nbPages : Integer
 var $body : Object
 var $_paragraphs : Collection
 
 $nbPages:=WP Get page count([DOC]Sample)
 $body:=WP Get body([DOC]Sample)
 $_paragraphs:=WP Get elements($body;wk type paragraph)
 For each($paragraph;$_paragraphs)
    $info:=WP Get position($paragraph)
    If($info.page=1)|($info.page=$nbPages) //parágrafos da primeira e última página em azul
       WP SET ATTRIBUTES($paragraph;wk text color;"blue")
    Else //outros parágrafos de página em preto
       WP SET ATTRIBUTES($paragraph;wk text color;"black")
    End if
 End for each
```

  
#### Exemplo 3 

Enquanto cria um documento, se quiser evitar divisões de parágrafo:

```4d
 var WParea;$body : Object
 var $_paragraphs : Collection
 WParea:=WP New
 
 $body:=WP Get body([DOC]Sample)
 $_paragraphs:=WP Get elements($body;wk type paragraph)
 
 For each($paragraph;$_paragraphs)
    $insert:=WP New($paragraph)
 
  //memoriza a range atual e o número de página
    $rangeBefore:=WP Text range(WParea;wk end text;wk end text)
    $info:=WP Get position($rangeBefore)
    $memoPage:=$info.page
 
  //insere o conteúdo, conserva a range intacta
    WP INSERT DOCUMENT($rangeBefore;$insert;wk append;wk exclude from range)
 
  //verifica a posição depois da inserção
    $rangeAfter:=WP Text range(WParea;wk end text;wk end text)
    $info:=WP Get position($rangeAfter)
 
    If($memoPage#$info.page) // se a página tiver mudado, insere um salto de página
       WP INSERT BREAK($rangeBefore;wk page break;wk replace)
    End if
 
 End for each
```

#### Exemplo 4 

Os exemplos abaixo ilustram as coordenadas do retângulo delimitador devolvidas, segundo o *objRange*.

```4d
 $default:=WP Text range(WPArea) //range predeterminada (texto)
 $textCoordinates:=WP Get position($default) //linha de pontos vermelha
 
 $paragraph:=WP Create paragraph range($default) //range de parágrafo
 $paraCoordinates:=WP Get position($paragraph) // línha pontilhada verde
```

![](../../assets/en/WritePro/commands/pict4096405.en.png)

*Línha de pontos vermelha:* *valores de objeto $textCoordinates* 
*Línha de pontos verde:* *valores de objeto $* *paraCoordinates* 

**Nota: no** caso de uma visualização em várias colunas, a propriedade *rangeHeight* (línhas sem formato) podería ser maior que *bounds.bottom*\-*bounds.top* (linhas de pontos):

![](../../assets/en/WritePro/commands/pict4096411.en.png)  

#### Ver também 

[WP PRINT](wp-print.md)  