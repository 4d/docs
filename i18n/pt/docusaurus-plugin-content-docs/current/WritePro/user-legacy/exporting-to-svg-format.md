---
id: exporting-to-svg-format
title: Exportar para formato SVG
displayed_sidebar: docs
---

#### 

Pode exportar páginas de documentos 4D Write Pro a formato SVG utilizando os comandos [WP EXPORT DOCUMENT](../commands/wp-export-document) e [WP EXPORT VARIABLE](../commands/wp-export-variable). Esta página contém informação adicional e notas sobre a exportação SVG.

#### Renderização SVG 

As imagens SVG e as caixas de texto são renderizadas de acordo com a configuração da página mostrada no modo vista Página. São levadas em consideração as propiedades abaixo:

* Atributos de fundo (se forem exportados)
* Bordas
* Margens
* Orientação
* Preenchimento
* Tamanho de página
* Seções (a renderização SVG leva em consideração os atributos de seção, mas as seções em si não são exportadas)

 Partes do documento que são exportadas a SVG:

* Corpo
* Imagens online
* Caixas de texto
* Título (metadatos wk title)

Partes do documento que são exportadas a SVG em função do parâmetro *opcion*:

* Cabeçalhos
* Rodapés
* Referências ou valores (em relação aos valores, a opção wk recompute formulas determina se as fórmulas são avaliadas antes da exportação)
* Cores de fundo
* Imagens definidas como imagens de fundo e imagens ancoradas

Os elementos abaixo não são exportados a SVG:

* Fontes (convertidas a estilos CSS, mas não aninhadas no SVG exportado. Ver *Gerenciamento de fontes*)
* Links a marcadores (renderizados mas não ativos)
* Links a URLs (renderizados mas não ativos)
* Realce de fórmulas personalizado
* Caixas de texto ancoradas ao modo de vista aninhada
* Metadatos  
   * Autor  
   * Assunto  
   * Data de criação  
   * Data de modificação

#### Gerenciamento de fontes 

As fontes não estão aninhadas no SVG exportado, por isso o texto será renderizado corretamente apeans se a família de fontes e o estilo forem compatíveis com a plataforma na que se renderiza a imagen SVG.

Se quiser ter certeza de que a renderização será equivalente em todas as plataformas, mesmo quando as fontes não estão disponíveis, pode utilizar a opção wk import google fonts ao exportar um documento 4D Write Pro.

As fontes Google importadas sustituem às fontes nativas quando se renderizar o SVG. Se quiser renderizar a imagem SVG na mesma plataforma, recomendamos que não utilize a opção wk import google fonts já que a renderização com fontes nativas é sempre melhor.

**Nota:** só são conservados os estilos de negrito e cursiva. Não é garantida uma compatibilidade de 100% entre os estilos de fontes nativas e a definição de estilos de fontes em CSS (e por tanto, em SVG). A exportação a PDF é mais adequada para a distribuição a todas as plataformas ou para uma melhor compatibilidade WYSIWYG com as fontes, já que estão aninhadas no PDF.

#### Exemplo 

Este exemplo exporta uma página de documento a formato SVG e cria uma vista prévia da imagem utilizando [SVG EXPORT TO PICTURE](../../commands/svg-export-to-picture).

```4d
 var $preview : Picture
 var $options : Object
 var $svgRoot : Text
 var $options : Object
 
 $options:=New object
 $options[wk max picture DPI]:=96
 WP EXPORT VARIABLE(wpDoc;$text;wk svg;$options)
 $svgRoot:=DOM Parse XML variable($text;False)
 SVG EXPORT TO PICTURE($svgRoot;$preview;Own XML data source)
```