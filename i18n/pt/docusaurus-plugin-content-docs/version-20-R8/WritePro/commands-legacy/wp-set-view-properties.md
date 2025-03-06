---
id: wp-set-view-properties
title: WP SET VIEW PROPERTIES
slug: /WritePro/commands/wp-set-view-properties
displayed_sidebar: docs
---

<!--REF #_command_.WP SET VIEW PROPERTIES.Syntax-->**WP SET VIEW PROPERTIES** ( {* ;} *wpArea* ; *wpViewProps* )<!-- END REF-->
<!--REF #_command_.WP SET VIEW PROPERTIES.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, wpArea é um nome de objeto formulário (string). Se omitido, wpArea é um campo objeto ou variável (documento) |
| wpArea | Text, Object | &#8594;  | Nome objeto formulário (se * for especificado) ou viarável ou campo objeto 4D Wriote Pro (se * for omitido) |
| wpViewProps | Object | &#8594;  | Propriedades de vista a modificar |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WP SET VIEW PROPERTIES.Summary-->O comando **WP SET VIEW PROPERTIES** le permite configurar dinamicamente uma ou mais propriedades de vista da área 4D Write Pro *wpArea*.<!-- END REF--> 

Se passar o parâmetro opcional *\**, indica que *wpArea* é um nome de objeto de formulário (string). Se não passar este parâmetro, indica que *wpArea* é um documento 4D Write Pro (variável ou campo objeto ). Este comando só pode ser utilizado se *wpArea* estiver associada com um objeto de formulário (ou seja, se mostrar no formulário), em qualquer página de formulario. Se o documento 4D Write Pro for mostrado em vários objetos de formulário, é necessário utilizar o parâmetro *\** para definir qué vista configurar.

Em *wpViewProps*, passe um objeto no qual cada propriedade seja uma propriedad vista que queira modificar na área 4D Write Pro. As propriedades vista que não estejam incluidas no objeto wpViewProps manterão seus valores anteriores. Pode utilizar as constantes abaixo:

| Constante                    | Valor                  | Comentário                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---------------------------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| wk display formula as symbol | displayFormulaAsSymbol | Mostra as referências das fórmulas como um símbolo ![](../../assets/en/WritePro/commands/pict6013182.pt.png). Só funciona se as fórmulas forem mostradas como referências (ver wk visible references). Valores possiveis: True/False                                                                                                                                                                                               |
| wk formula highlight         | formulaHighlight       | Modo de vista ressaltar fórmula. Valores possíveis: wk references (padrão): Fórmulas exibidas como referências são ressaltadas wk values: Fórmulas exibidas como valores são ressaltados wk always: Fórmulas são sempre ressaltadas, qualquer que seja seu modo exibição wk never: Fórmulas nunca são ressaltadas, não importa o modo de exibição Cor de fórmula ressaltada pode ser estabelecida como wk formula highlight color. |
| wk formula highlight color   | formulaHighlightColor  | Cor de fórmulas ressaltadas (ver wk formula highlight). Valores possíveis: uma string CSS cor ("#010101" ou "#FFFFFF" ou "red"). um valor 4D cor longint                                                                                                                                                                                                                                                                           |
| wk page view mode            | pageMode               | Modo para exibição do documento 4D Write Pro na área de formulário onscreen. Valores possíveis (string): "draft": modo esboço com propriedades de documento básicas "page": modo de vista completo, que inclui sumários de páginas, margens, quebras, cabeçalhos e rodapés, etc. "embedded": modo de vista compatível para áreas embebidas                                                                                         |
| wk resolution                | dpi                    | Resolução de tela para os conteúdos da área 4D Write Pro. Valores possíveis: wk auto (0) Número maior que 1                                                                                                                                                                                                                                                                                                                        |
| wk spell enable              | spellEnabled           | Ativa o corretor autográfico. Valores possíveis: True/False                                                                                                                                                                                                                                                                                                                                                                        |
| wk visible background        | visibleBackground      | Exibe tanto as imagens de fundo quanto a cor de fundo (efeito visível apenas nos modos de Página e Vista Embebida). Valores Possíveis: True/False                                                                                                                                                                                                                                                                                  |
| wk visible empty images      | visibleEmptyImages     | Mostra um retângulo negro como padrão para as imagens que não podem ser carregadas ou calculadas (imagens vazias ou em um formato não compatível). Valores possíveis: True/False. Valor padrão: True Se o valor for False, os elementos imagem que faltem não são mostrados em absoluto mesmo que tenham bordas, largura, altura ou fundo; isso pode afetar o design da página para as imagens inline.                             |
| wk visible footers           | visibleFooters         | Exibe os cabeçalhos (efeito visível apenas em modo Página). Valores possíveis: True/False                                                                                                                                                                                                                                                                                                                                          |
| wk visible headers           | visibleHeaders         | Exibe o cabeçalho (efeito visível apenas em modo Página). Valores possíveis: True/False                                                                                                                                                                                                                                                                                                                                            |
| wk visible hidden characters | visibleHiddenChars     | Exibe caracteres invisíveis. Valores possíveis: True/False                                                                                                                                                                                                                                                                                                                                                                         |
| wk visible horizontal ruler  | visibleHorizontalRuler | Exibe a régua horizontal. Valores possíveis: True/False                                                                                                                                                                                                                                                                                                                                                                            |
| wk visible HTML WYSIWYG      | htmlWYSIWIGEnabled     | Ativa a visão HTML WYSIWYG Valores possíveis: True/False                                                                                                                                                                                                                                                                                                                                                                           |
| wk visible page frames       | visiblePageFrames      | Exibe a frame da página (efeitos visíveis apenas no modo Página). Valores possíveis: True/False                                                                                                                                                                                                                                                                                                                                    |
| wk visible references        | visibleReferences      | Exibe todas as expressões 4D inseridas no documento como referência. Valores possíveis: True/False                                                                                                                                                                                                                                                                                                                                 |
| wk visible vertical ruler    | visibleVerticalRuler   | Exibe a régua vertical (efeito visível no modo Página apenas). Valores possíveis: True/False                                                                                                                                                                                                                                                                                                                                       |
| wk zoom                      | zoom                   | Porcentagem de Zoom para exibir os conteúdos da área 4D Write Pro. Valores possíveis: Número maior que 1                                                                                                                                                                                                                                                                                                                           |

Todas as propriedades podem ser modificadas a qualqueer momento, mas algumas só são levadas em consideração se for usado um modo de compatível com 4D Write Pro. Portanto, mesmo se modificar uma propriedade de vista, é possível que não tenha um efeito visível no modo de visualização atual.

**Nota:** para mais informação sobre as propriedades vista, consulte a página *Criar uma área 4D Write Pro*. 

Quando tiver estabelecido as propriedades de vista para *wpArea* utilizando este comando, são aplicadas enquanto a área de formulario é usada, desde que não seja modificada por outra chamada. As modificações de propriedade não são salvadas com o documento ou o formulário

#### Exemplo 

Se quiser definir algumas propriedades de vista para uma área 4D Write Pro:

```4d
 var $viewProps : Object
 $viewProps:=New object
 
 $viewProps[wk page view mode]:="page"
  // o $viewProps.pageMode="page"
 
 $viewProps[wk visible horizontal ruler]:=True
  // o $viewProps.visibleHorizontalRuler:=True
 
 $viewProps[wk visible vertical ruler]:=True
  // o $viewProps.visibleVerticalRuler:=True
 
 WP SET VIEW PROPERTIES(*;"4DWPArea";$viewProps)
```

#### Ver também 

[WP Get view properties](wp-get-view-properties.md)  