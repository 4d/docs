---
id: wp-export-document
title: WP EXPORT DOCUMENT
slug: /WritePro/commands/wp-export-document
displayed_sidebar: docs
---

<!--REF #_command_.WP EXPORT DOCUMENT.Syntax-->**WP EXPORT DOCUMENT** ( *docWP* ; *rotaArquivo* {; *formato* {; *opcoes*}} )<!-- END REF-->
<!--REF #_command_.WP EXPORT DOCUMENT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| docWP | Object | &#8594;  | Variável 4D Write Pro |
| rotaArquivo | Text | &#8594;  | Rota do arquivo exportado |
| formato | Integer | &#8594;  | Formato de saída do documento |
| opcoes | Object, Integer | &#8594;  | Opções de exportar |

<!-- END REF-->

## Descrição 

<!--REF #_command_.WP EXPORT DOCUMENT.Summary-->O comando **WP EXPORT DOCUMENT** exporta o objeto 4D Write Pro *docWP* em um documento no disco segundo o parâmetro *rotaArquivo* assim como os parâmetros opcionais.<!-- END REF-->

Em *docWP*, passe o objeto 4D Write Pro que deseja exportar.

Em *rotaArquivo*, passe a rota de destino e o nome do documento a exportar. Se passar só o nome do documento, será guardado no mesmo nível que o arquivo de estrutura de 4D. Por padrão, se omitido o parâmetro *formato*, o comando utiliza a extensão do arquivo para determinar o formato do arquivo.

Pode omitir o parâmetro formato, em cujo caso deverá especificar a extensão em rotaArquivo. Também pode passar uma constante do tema *Constantes 4D Write Pro* no parâmetro *formato*. Neste caso, 4D adiciona a extensão correspondente ao nome de arquivo se for necessário. O seguinte formato é suportado:

| Constante            | Valor | Comentário                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| -------------------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| wk 4wp               | 4     | O documento 4D Write Pro é salvado em um formato de arquivo nativo (HTML zipado e imagens salvadas em uma pasta separada). Etiquetas 4D específicas são incluídas e expressões 4D não são computadas. Este formato é particularmente adequado para salvar e arquivar documentos 4D Write Pro em disco sem nenhuma perda.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| wk docx              | 7     | a extensão .docx de documentos 4D Write Pro é salvada no formato Microsoft Word. Compatibilidade certificada para Microsoft Word 2016 ou mais novo, Entretanto, também é compatível com qualquer versão que seja compatível com formatos .docx (por exemplo, Microsoft Word 2007). <br/> <br/>As partes do documento exportadas são: <br/>Corpo/cabeçalho/rodapés/seçõesPágina / configurações de impressão (margens, cor de fundo/i,agem/bordas/preenchimento/tamanho de papel/orientações)Imagens - inline, ancorada, e padrão de imagem de fundo (definido com wk background image)Variáveis compatíveis e expressões (número de página, número total de páginas, datas, hora, metadata). Variáveis não compatíveis e expressões serão avaliadas e congeladas antes de exportar.BookmarksNote que configurações 4D Write Pro podem não estar disponíveis ou podem se comportar diferente em Microsoft Word. |
| wk mime html         | 1     | O documento 4D Write Pro se guardam como MIME HTML com documentos os documentos html e as imagens embebidas como partes MIME (codificado em base 64). As expressões se calculam e as etiquetas 4D específicas se eliminam. Este formato é especialmente adequado para o envio de mensagens de email HTML com o comando .<br/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| wk pdf               | 5     | Extensão .pdf. O documento 4D Write Pro se guarda em formato PDF, em função do modo de vista Página. Os seguintes metadados são exportados em um documento PDF: Título Autor Assunto Criador de conteúdo **Notas**: As expressõs se congelam automaticamente quando se exporta o documento Os links aos métodos NÃO são exportados                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| wk svg               | 8     | A página documento 4D Write Pro é salva em formato SVG, baseado em modo vista Página. **Nota:** Quando exportar a SVG, pode exportar só uma página por vez. Use wk page index para especificar que página a exportar.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| wk web page complete | 2     | Extensão .htm ou .html. O documento se guarda como HTML estandarte e seus recursos se guardam separadamente. As etiquetas 4D específicas se eliminam e as expressões se calculam. Este formato é especialmente adequado quando se quer mostrar um documento 4D Write Pro em um navegador web.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

**Notas:**

* "Etiquetas 4D específicas" significa o XHTML 4D com namespace e estilos CSS 4D.
* Para saber mais sobre o formato 4D Write Pro, veja *formato de documento .4wp*.
* Para ver uma lista de diferenças e incompatibilidades conhecidas quando usar o formato .docx, veja *Exportar em formato .docx*.

### Parâmetro option 

Passe um objeto na opção que contenha os valores para definir as propriedades de documento exportado. As propiedades abaixo estão disponíveis:

| Constante                                   | Valor              | Comentário                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| wk embedded pictures                        | embeddedPictures   | Apenas SVG Export. Estabelece se as imagens são embebidas no arquivo .svg exportado quando chamar [WP EXPORT DOCUMENT](wp-export-document.md). Valores disponíveis: true (padrão): Imagens são embebidas no arquivo exportado .svg false: Imagens são exportadas em uma pasta chamada "filename\_images" no nível do arquivo exportado .svg, "nomearquivo" é o nome passado para o comando para o arquivo, sem extensão . As imagens não são embebidas, mas referenciadas no arquivo .svg. Note que: se a pasta já existir, é esvaziada antes que o arquivo seja exportado se não houver imagens na página exportada, a pasta é apagada                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| wk google fonts tag                         | googleFontsTag     | Apenas para exportar SVG. Estabelece a regra de importação para fontes googles em SVG exportado. Valores possíveis: false (padrão): Nenhuma regra de importação de fontes google é adicionada. true: Adiciona a regra @import para o arquivo exportado. Útil se quiser usar fontes que não estejam disponíveis como padrão em Windows ou macOS. **Nota:** Essa propriedade é estabelecida como falsa como padrão porque, quando ativado, fontes Google sobrepujam fontes nativa, e fontes nativas são geralmente melhor renderizadas no navegador.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| wk HTML pretty print                        | htmlPrettyPrint    | Código HTML é formatado para ser mais fácil de ler.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| wk max picture DPI                          | maxPictureDPI      | Se utiliza para voltar a reajustar (reduzir) as imagens à resolução preferida. Para imagens SVG em Windows, utilizadas para rasterização (transformar uma imagem vetorial em píxels). Valores pré-determinados: 300 (para wk optimized for \= wk print) 192 (para wk optimized for \= wk screen) Valor máximo possível: 1440                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| wk optimized for                            | optimizedFor       | Define como se otimiza um documento exportado segundo seu suporte. Valores possíveis: wk print (valor predeterminado para wk pdf) As imágens mapa de bits podem ser reduzidas utilizando o DPI definido por wk max picture DPI ou 300 (valor pré-determinado) e podem ser convertirdas a PNG se o códec não for compatível com o tipo de exportação. As imagens vetoriales são convertidas a PNG utilizando o DPI definido por wk max picture DPI ou 300 (Windows unicamente) Si una imagen contiene más de un formato, se utiliza el mejor formato para imprimir (por ejemplo, .tiff o .jpg) wk screen (valor pré-determinado para wk web page complete e wk mime html) As imagens mapa de bits podem ser reduzidas utilizando o DPI definido por wk max picture DPI ou 192 (valor predeterminado) e podem ser convertidas a JPEG (imagens opacas) ou PNG (imagenes transparentes) se o códec não for compatível pelo tipo de exportação As imagens vetoriais são convertidas a PNG utilizando o DPI definido por wk max picture DPI ou 192 (Windows unicamente) Se uma imagem contém mais de um formato, se utiliza o formato para o processamento de tela. |
| wk page index                               | pageIndex          | Apenas para SVG exporte. Índice da página a exportar para formato svg (padrão é 1). Indice página começa em 1 para a primeira página do documento. **Nota:**  índice da página é independente da numeração das páginas.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| wk pdfa version                             | pdfaVersion        | Exporta PDF conforme a uma versión PDF/A. Para saber mais sobre as propriedades e versões de PDF/A, consulte a [página PDF/A em Wikipedia](https://en.wikipedia.org/wiki/PDF/A). Valores possíveis: wk pdfa2: exporta à versão "PDF/A-2" wk pdfa3: exporta à versão "PDF/A-3" **Nota:** em macOS, wk pdfa2 pode exportar a PDF/A-2 ou PDF/A-3 ou superior, dependendo da implementación da plataforma. Além disso, wk pdfa3 significa "exporta ao menos a PDF/A-3". Em Windows, o arquivo PDF de saida sempre será igual a conformidade desejada.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| wk recompute formulas                       | recomputeFormulas  | Define se as fórmulas devem ser recalculadas quando forem exportadas. Valores possíveis: true - Valor padrão. Todas as fórmulas são recalculadas false- Não recalcula as fórmulas                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| wk visible background and anchored elements | visibleBackground  | Exibe tanto as imagens de fundo quanto a cor de fundo (efeito visível apenas nos modos de Página e Vista Embebida). Valores Possíveis: True/False                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| wk visible empty images                     | visibleEmptyImages | Mostra um retângulo negro como padrão para as imagens que não podem ser carregadas ou calculadas (imagens vazias ou em um formato não compatível). Valores possíveis: True/False. Valor padrão: True Se o valor for False, os elementos imagem que faltem não são mostrados em absoluto mesmo que tenham bordas, largura, altura ou fundo; isso pode afetar o design da página para as imagens inline.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| wk visible footers                          | visibleFooters     | Exibe os cabeçalhos (efeito visível apenas em modo Página). Valores possíveis: True/False                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| wk visible headers                          | visibleHeaders     | Exibe o cabeçalho (efeito visível apenas em modo Página). Valores possíveis: True/False                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| wk visible references                       | visibleReferences  | Exibe todas as expressões 4D inseridas no documento como referência. Valores possíveis: True/False                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

A tabela abaixo indica a opção disponível por formato de exportação

| |  **wk 4wp**                                            | **wk docx**                                                                | **wk mime html**                                                          | **wk pdf**                                                                     | **wk web page html 4D**                                                    | **wk svg**                                                                 |                                                                                             |
| -------------------------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |---|
| wk CID host domain name<br/>                     | \-                                                                         | \-                                                                        | ![](../../assets/en/WritePro/commands/pict5058606.en.png)                      | \-                                                                         | \-                                                                         | \-                                                                                          |
| wk HTML pretty print<br/>                        | ![](../../assets/en/WritePro/commands/pict5058606.pt.png) (default: false) | \-                                                                        | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (default: False)     | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (default: False) | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (default: False) | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (default: false)**<br/>** |
| wk max picture DPI<br/>                          | \-                                                                         | always 300                                                                | ![](../../assets/en/WritePro/commands/pict5058606.en.png)                      | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (default: 300)   | \-                                                                         | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (default: 300)                    |
| wk optimized for<br/>                            | \-                                                                         | always wk print                                                           | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (default: wk screen) | always wk print                                                            | \-                                                                         | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (default: wk print)               |
| wk recompute formulas<br/>                       | \-                                                                         | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (default: true) | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (default: true)      | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (default: true)  | \-                                                                         | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (default: true)                   |
| wk visible background and anchored elements<br/> | \-                                                                         | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (default: true) | always true                                                                    | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (default: true)  | \-                                                                         | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (default: true)                   |
| wk visible footers<br/>                          | \-                                                                         | always true                                                               | always false                                                                   | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (default: true)  | \-                                                                         | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (default: true)                   |
| wk visible headers<br/>                          | \-                                                                         | always true                                                               | always false                                                                   | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (default: true)  | \-                                                                         | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (default: true)                   |
| wk visible empty images<br/>                     | \-                                                                         | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (default: true) | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (default: true)      | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (default: true)  | \-                                                                         | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (default: true)                   |
| wk visible references<br/>                       | \-                                                                         | \-                                                                        | \-                                                                             | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (default: false) | \-                                                                         | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (default: false)                  |
| wk pdfa version<br/>                             | \-                                                                         | \-                                                                        | \-                                                                             | ![](../../assets/en/WritePro/commands/pict5058606.en.png)                  | \-                                                                         | \-                                                                                          |
| wk page index<br/>                               | \-                                                                         | \-                                                                        | \-                                                                             | \-                                                                         | \-                                                                         | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (default: 1)                      |
| wk embedded pictures<br/>                        | \-                                                                         | \-                                                                        | \-                                                                             | \-                                                                         | \-                                                                         | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (default: true)                   |
| wk google fonts tag<br/>                         | \-                                                                         | \-                                                                        | \-                                                                             | \-                                                                         | \-                                                                         | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (default: false)                  |

**Nota de compatibilidade:** Passar um valor *longint* em *option* é suportado por razões de compatibilidade, mas é recomendado usar o parametro object. 

### wk files collection 

A propriedade wk files permite [exportar um PDF com arquivos adjuntos](https://blog.4d.com/4d-write-pro-export-to-pdf-with-enclosures). Esta propriedade deve conter uma coleção de objetos que descevam os arquivos que serão adicionados no documento final. Cada objeto da coleção pode conter as propriedades abaixo:

| **Propriedade** | **Tipo**       | **Descrição**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| name            | Text           | Nome de arquivo. Opcional se utilizar a propriedade *file*, em cujo caso o nome é inferido por padrão a partir do nome do arquivo. Obrigatório se usar a propriedade data ((exceto para o primeiro arquivo de uma exportação Factur-X, em que o nome do arquivo é automaticamente "factur-x.xml", ver abaixo).                                                                                                                                                                                                                                                                                                                                                                                         |
| description     | Text           | Opcional. Se for omitido, o valor por padrão para o primeiro arquivo de exportação a Factur-X é "Factur-X/Factura ZUGFeRD", caso contrário estará vazio.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| mimeType        | Text           | Opcional. Se for omitido, o valor predeterminado pode ser adivinhado normalmente a partir da extensão do arquivo, do contrário, se utiliza "application/octet-stream". Se for passada, tenha certeza de usar um tipo mime ISO, do contrário o arquiivo exportado poderia não ser válido.                                                                                                                                                                                                                                                                                                                                                                                                               |
| data            | Text o BLOB    | Obrigatorio se faltar a propriedade *file*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| file            | Objeto 4D.File | Obrigatorio se faltar a propriedade *data*, ignorado em caso contrário.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| relationship    | Text           | Opcional. Se for omitido, o valor predeterminado é "Data". Valores possíveis para o primeiro arquivo Factur-X:para perfis BASIC, EN 16931 ou EXTENDED: "Alternative", "Source" ou "Data" ("Alternative" só para fatura German )para perfis MINIMUM e BASIC WL: "Data" unicamente.para outros perfis: "Alternative", "Source" ou "Data" (con restrições, talvez dependendo do país: consulte a especificação do perfil para obter mais informação sobre outros perfis (por exemplo, para o perfil RECHNUNG só se permite "Alternative")para outros arquivos (exceto o arquivo xml de fatura Factur-X): "Alternative", "Source", "Data", "Supplement" ou "Unspecified"qualquer outro valor gera um erro. |

Se o parâmetro *opcion* também contiver uma propriedade wk factur x, então o primeiro elemento da coleção wk files deve ser o arquivo xml de fatura Factur-X (ZUGFeRD) (ver abaixo).

**Nota:** os arquivos anexos em PDF só são compatíveis com a versão PDF/A-3\. Quando passar a propriedade wk files, a versão "PDF/A-3" se utiliza automaticamente.

### wk factur x object 

A propriedade wk factur x é um objeto que pode conter até duas propriedades:

| **Propriedade** | **Tipo** | **Descrição**                                                                                                                                                                                                                                                                                                                                                              |
| --------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| profile         | Text     | Opcional. Se for omitido, o perfil é determinado a partir do arquivo xml ou texto fornecido (que deve usar um perfil padrão). Se for passado, pode ser um nome de perfil não pasdrão (para usar outros perfis, por exemplo RECHNUNG). **Nota:* os nomes de perfil padrão são:: MINIMUM, BASIC WL, BASIC, EN 16931 (também chamado de COMFORT que é um apelido), EXTENDED.* |
| version         | Text     | Opcional. O valor normal é "1.0"                                                                                                                                                                                                                                                                                                                                           |

  
**Sobre documentos PDF Factur-X / ZUGFeRD PDF** 

  
*Factur-X / ZUGFeRD* é um padrão europeu para faturas eletrônicas híbridas (PDF para usuários e dados XML para automatização de processos). Para saber mais veja [esta entrada de blog](https://blog.4d.com/4d-write-pro-electronic-invoice-generation). 

Para ativar uma exportação PDF "Factur-X", passe as propriedades wk factur x e wk files no parâmetro *opcion* (ver o Exemplo 5). Neste caso:

* se gera um PDF Factur-X (ZUGFeRD),
* o primeiro elemento da coleção wk files se utiliza como arquivo xml de Factur-X,
* se a propriedade wk files falta ou contém uma coleção vazia ou se seu primeiro elemento não for um arquivo xml se gera um erro.

**Nota:** para ver un exemplo detalhado da implementação da exportação Factur-X / ZUGFeRD, pode baixar [este projeto HDI 4D](https://github.com/4d-depot/HDI%5F4DWP%5FGenerateFacturX).

## Exemplo 1 

SE quiser exportar o conteúdo do objeto *myArea* 4D Write Pro em formato HTML e PDF:

```4d
  // export HTML
 var $option : Object
 $option:=New object
 
 $option[wk recompute formulas]:=False
 $option[wk HTML pretty print]:=False
 $option[wk optimized for]:=wk print
 $option[wk max picture DPI]:=600 //substituir o valor pré-determinado para a impressão (300 DPI)
 
 WP EXPORT DOCUMENT(myArea;$path;wk web page complete;$option)
 
  //export PDF
 var $option : Object
 $option:=New object
 
 $option[wk visible headers]:=True
 $option[wk visible footers]:=True
 $option[wk visible background]:=True
 $option[wk max picture DPI]:=96 //substituir o valor pré-determinado para a tela (192 DPI) para limitar o tamanho do documento
 $option[wk optimized for]:=wk screen
 $option[wk recompute formulas]:=True
 
 WP EXPORT DOCUMENT(myArea;$path;wk pdf;$option)
```

## Exemplo 2 

Se quiser exportar os conteúdos do objeto 4D Write Pro myarea no formato .4wp:

```4d
 var $path : Text
 var $docRef : Integer
 
 Case of
    :(Form event code=On Clicked)
 
       $path:=Get 4D folder(Database folder)+"Export"+Folder separator
       $path:=Select document($path;".4wp";" title";File name entry)
 
       If($path#"")
          WP EXPORT DOCUMENT(myArea;document;wk 4wp)
       End if
 End case
```

## Exemplo 3 

Para exportar a segunda página do documento como SV e exportar as imagens do documento:

  
```4d
 var $options : Object
 
 $options:=New object
 $options[wk embedded pictures]:=False
 $options[wk page index]:=2
 
 WP EXPORT DOCUMENT(WPArea;"my exported document";wk svg;$options)
```

## Exemplo 4 

Exportar um documento PDF com conformidade PDF/A-2:

```4d
 var $options: Object:={}
 $options[wk visible empty images] :=False
 $options[wk pdfa version]:=wk pdfa2 // conformidade "PDF/A-2"
 WP EXPORT DOCUMENT(wpDoc;"invoice.pdf";wk pdf;$options)
```

## Exemplo 5 

Exemplos de exportações Factur-X PDF:

```4d
  //BASIC (perfil padrão)
 var $options;$fileInfo : Object
 $options:={}
 $options[wk factur x]:={}
 $options[wk factur x].profile:="BASIC"
 $options[wk factur x].version:="1.0"
 
 $fileInfo:={}
 $fileInfo.file:=$file  //$file é um arquivo 4D.File com um arquivo .xml como objetivo
 $options[wk files]:=[$fileInfo]
 
 WP EXPORT DOCUMENT(wpDoc;"facturX_basic.pdf";wk pdf;$options)
 
  //RECHNUNG profile (custom profile)
 $options:={}
 $options[wk factur x]:={}
 $options[wk factur x].profile:="RECHNUNG"
 $options[wk factur x].version:="2.1" //última versión para RECHNUNG
 
 $fileInfo:={}
 $fileInfo.file:=$file  //$file é um 4D.File com um arquivo .xml como objetivo
 $fileInfo.name:="rechnung.xml" //nome de arquivo obrigatório em PDF para RECHNUNG 
 $fileInfo.relationship:="Alternative" //obrigatório para Alemanha
 $fileInfo.description:="ZUGFeRD Rechnung"
 $options[wk files]:=[$fileInfo]
 
 WP EXPORT DOCUMENT(wpDoc;"facturX_rechnung.pdf";wk pdf;$options)
```

## Ver também 

  
  
  
*Exportar em formato .docx*  
*Exportar para formato SVG*  
*Exportar para formatos HTML e MIME HTMLS*  
[WP EXPORT VARIABLE](wp-export-variable.md)  