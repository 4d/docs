---
id: wp-export-variable
title: WP EXPORT VARIABLE
slug: /WritePro/commands/wp-export-variable
displayed_sidebar: docs
---

<!--REF #_command_.WP EXPORT VARIABLE.Syntax-->**WP EXPORT VARIABLE** ( *wpDoc* : Object ; *destination* : Text, Blob ; *format* : Integer {; *option* : Object, Integer} )<!-- END REF-->

<!--REF #_command_.WP EXPORT VARIABLE.Params-->

<div class="no-index">

| Parâmetro   | Tipo            |                             | Descrição                             |
| ----------- | --------------- | --------------------------- | ------------------------------------- |
| wpDoc       | Object          | &#8594; | Variável 4D Write Pro                 |
| destination | Text, Blob      | &#8594; | Variable to receive exported contents |
| format      | Integer         | &#8594; | Formato de saída variável             |
| option      | Object, Integer | &#8594; | Opções de exportação                  |

</div>
<!-- END REF-->

## Descrição

<!--REF #_command_.WP EXPORT VARIABLE.Summary-->The **WP EXPORT VARIABLE** command exports the *wpDoc* 4D Write Pro object to the 4D *destination* variable in the specified *format*.<!-- END REF-->

Em *wpDoc*, passe o objeto 4D Write Pro que você deseja exportar.

In *destination*, pass the variable that you want to fill with the exported 4D Write Pro object. O tipo dessa variável depende do formato de exportação especificado no parâmetro *format*:

- If you pass the native .4wp format or the .docx format, the variable will be of the Blob type,
- If you pass an HTML or SVG format, the variable will be of the Text type.

In the *format* parameter, pass a constant from the *4D Write Pro Constants* theme to set the export format you want to use. Each format is related to a specific use. São suportados os seguintes formatos:

| Parâmetros          | Tipo    | Valor | Comentário                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------- | ------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| wk 4wp              | Integer | 4     | O documento 4D Write Pro é salvo em um formato de arquivo nativo (zipado HTML e imagens salvas em uma pasta separada). Tags específicas 4D estão incluídas e expressões 4D não são calculadas. Este formato é particularmente adequado para salvar e arquivar documentos 4D Write Pro no disco sem qualquer perda.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| wk docx             | Integer | 7     | Extensão .docx. O documento 4D Write Pro é salvo no formato Microsoft Word . Suporte certificado para Microsoft Word 2010 e mais recentes. <br/>The document parts exported are: <ul><li>Body / headers / footers / sections</li><li>Page / print settings (margins, background color / image, borders, padding, paper size / orientation)</li><li>Images - inline, anchored, and background image pattern (defined with wk background image)</li><li>Style sheets (character, paragraph)</li><li>Compatible variables and expressions (page number, number of pages, date, time, metadata). Non-compatible variables and expressions will be evaluated and frozen before export.</li><li>Links - Bookmarks and URLs</li></ul>Note that some 4D Write Pro settings may not be available or may behave differently in Microsoft Word. |
| wk mime html        | Integer | 1     | O documento 4D Write Pro é salvo como MIME HTML padrão com documentos HTML e imagens incorporadas como partes MIME (codificado em base64). As expressões são calculadas e links de métodos e tags 4D específicos são removidos. Apenas caixas de texto ancoradas na visualização incorporada são exportadas (como divs). This format is particularly suitable for sending HTML emails.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| wk pdf              | Integer | 5     | Extensão .pdf. O documento 4D Write Pro é salvo no formato PDF, com base no modo de visualização de página. Os seguintes metadados são exportados em um documento PDF: título autor título conteúdo autor **Notas**: As expressões são calculadas automaticamente e os valores são congelados ao exportar o documento. Os links a métodos NÂO são exportados.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| wk svg              | Integer | 8     | A página 4D Write Pro documento é salva no formato SVG, com base no modo de visualização de página. **Nota:** ao exportar para SVG, você só pode exportar uma página de cada vez. Use wk page index para especificar qual página exportar.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| wk web page html 4D | Integer | 3     | 4D Write Pro document is saved as HTML and includes 4D specific tags; each expression is inserted as a non-breaking space. Since this format is lossless, it is appropriate for storing purposes in a text field.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

**Notas:**

- "4D tags específicas" significa 4D XHTML com um namespace 4D e estilos 4D CSS
- Para mais informações sobre o formato 4D Write Pro do documento, consulte [formato do documento .4wp](https://doc.4d.com/4Dv20/4D/20/Using-a-4D-Write-Pro-area.200-6229460.en.html#2895813).
- Para visualizar uma lista das diferenças conhecidas ou incompatibilidades ao usar o formato .docx, consulte [Importando e Exportando no formato .docx](../user-legacy/importing-and-exporting-in-docx-format.md).
- When exporting to SVG format with this command, images are embedded in base64 format.
- Para obter mais informações sobre exportação para o formato SVG, consulte [Exportando para o formato SVG](https://doc.4d.com/4Dv20/4D/20/Exporting-to-SVG-format.200-6229468.en.html).

### Parâmetro option

Pass in *option* an object containing the values to define the properties of the exported document. As seguintes propriedades estão disponíveis:

| Parâmetros                                  | Valor              | Comentário |
| ------------------------------------------- | ------------------ | ---------- |
| wk CID host domain name                     | cidHostDomain      | Nome de domínio host CID: domínio host que será adicionado aos URLs de CID gerados, incluindo um '@' como separador. Disponível somente quando o formato `wk mime html` é usado. |
| wk embedded pictures                        | embeddedPictures   | Somente para exportação SVG. Define se as imagens são incorporadas no arquivo .svg exportado. |
| wk factur x                                 | facturX            | Somente para exportação em PDF. Valor: objeto Factur-X (consulte [wk factur x object](./wp-export-document.md#wk-factur-x-object)). |
| wk files                                    | files              | Somente para exportação em PDF. Coleção de objetos com arquivos incorporados (consulte [wk files collection](./wp-export-document.md#wk-files-collection)). |
| wk google fonts tag                         | googleFontsTag     | Somente para exportação SVG. Define a regra de importação de fontes Google. |
| wk HTML pretty print                        | htmlPrettyPrint    | Código HTML é formatado para facilitar a leitura. |
| wk max picture DPI                          | maxPictureDPI      | Reamostragem de imagens; padrão 300 (print) e 192 (screen), máximo 1440. |
| wk optimized for                            | optimizedFor       | Otimiza exportação para `wk print` ou `wk screen`. |
| wk page index                               | pageIndex          | Índice da página SVG (inicia em 1). |
| wk pdfa version                             | pdfaVersion        | Exporta conforme PDF/A (`wk pdfa2` ou `wk pdfa3`). |
| wk recompute formulas                       | recomputeFormulas  | true recalcula fórmulas (padrão); false não recalcula. |
| wk visible background and anchored elements | visibleBackground  | Exibe/exporta fundo, imagens ancoradas e caixas de texto. |
| wk visible empty images                     | visibleEmptyImages | Exibe/exporta retângulo padrão para imagens não carregadas. |
| wk visible footers                          | visibleFooters     | Exibe/exporta rodapés. |
| wk visible headers                          | visibleHeaders     | Exibe/exporta cabeçalhos. |
| wk visible references                       | visibleReferences  | Exibe/exporta expressões 4D como referências. |
| wk whitespace                               | whitespace         | Define o valor CSS `white-space` para o formato `wk mime html`. |

A tabela a seguir indica a *option* disponível por *format* de exportação:

|                                             | **wk 4wp**                                                                                                   | **wk docx**                                                                                                 | **wk mime html**                                                                                                  | **wk pdf**                                                                                                   | **wk web page html 4d**                                                                                      | **wk svg**                                                                                                      |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| wk CID host domain name                     | \-                                                                                                          | \-                                                                                                         | ![](../../assets/en/WritePro/commands/pict5058606.en.png)                                                         | \-                                                                                                          | \-                                                                                                          | \-                                                                                                             |
| wk embedded pictures                        | \-                                                                                                          | \-                                                                                                         | \-                                                                                                               | \-                                                                                                          | \-                                                                                                          | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (padrão: true)     |
| wk factur x                                 | \-                                                                                                          | \-                                                                                                         | \-                                                                                                               | ![](../../assets/en/WritePro/commands/pict5058606.en.png)                                                    | \-                                                                                                          | \-                                                                                                             |
| wk files                                    | \-                                                                                                          | \-                                                                                                         | \-                                                                                                               | ![](../../assets/en/WritePro/commands/pict5058606.en.png)                                                    | \-                                                                                                          | \-                                                                                                             |
| wk google fonts tag                         | \-                                                                                                          | \-                                                                                                         | \-                                                                                                               | \-                                                                                                          | \-                                                                                                          | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (padrão: false)    |
| wk HTML pretty print                        | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (padrão: false) | \-                                                                                                         | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (padrão: False)      | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (padrão: False) | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (padrão: False) | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (padrão: false)    |
| wk max picture DPI                          | \-                                                                                                          | sempre 300                                                                                                  | ![](../../assets/en/WritePro/commands/pict5058606.en.png)                                                         | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (padrão: 300)   | \-                                                                                                          | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (padrão: 300)      |
| wk optimized for                            | \-                                                                                                          | always wk print                                                                                             | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (padrão: wk screen)  | always wk print                                                                                              | \-                                                                                                          | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (padrão: wk print) |
| wk page index                               | \-                                                                                                          | \-                                                                                                         | \-                                                                                                               | \-                                                                                                          | \-                                                                                                          | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (padrão: 1)        |
| wk pdfa version                             | \-                                                                                                          | \-                                                                                                         | \-                                                                                                               | ![](../../assets/en/WritePro/commands/pict5058606.en.png)                                                    | \-                                                                                                          | \-                                                                                                             |
| wk recompute formulas                       | \-                                                                                                          | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (padrão: true) | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (padrão: true)       | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (padrão: true)  | \-                                                                                                          | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (padrão: true)     |
| wk visible background and anchored elements | \-                                                                                                          | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (padrão: true) | sempre true                                                                                                       | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (padrão: true)  | \-                                                                                                          | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (padrão: true)     |
| wk visible empty images                     | \-                                                                                                          | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (padrão: true) | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (padrão: true)       | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (padrão: true)  | \-                                                                                                          | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (padrão: true)     |
| wk visible footers                          | \-                                                                                                          | sempre true                                                                                                 | sempre false                                                                                                      | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (padrão: true)  | \-                                                                                                          | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (padrão: true)     |
| wk visible headers                          | \-                                                                                                          | sempre true                                                                                                 | sempre false                                                                                                      | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (padrão: true)  | \-                                                                                                          | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (padrão: true)     |
| wk visible references                       | \-                                                                                                          | \-                                                                                                         | \-                                                                                                               | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (padrão: false) | \-                                                                                                          | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (padrão: false)    |
| wk whitespace                               | \-                                                                                                          | \-                                                                                                         | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (padrão: "pre-wrap") | \-                                                                                                          | \-                                                                                                          | \-                                                                                                             |

**Compatibility Note:** Passing a *longint* value in *option* is supported for compatibility reasons, but it is recommended to use an object parameter.

## Exemplo 1

You want to export the contents of the *myArea* 4D Write Pro object in MIME format and add "gmail.com" as the host domain:

```4d
 var $option;$export : Object
 
 $option[wk CID host domain name]:="gmail.com"
 
 WP EXPORT VARIABLE(myArea;$export;wk mime html;$option)
```

## Exemplo 2

You want to send an email containing styled text, 4D references and images. You can use a 4D Write Pro area exported in MIME format and sent using SMTP:

```4d
  // create the transporter
 $server:=New object
 $server.host:="smtp.gmail.com"
 $server.port:=465
 $server.user:="4D@gmail.com"
 $server.password:="XXXX"
 
 $transporter:=SMTP New transporter($server)
 
 WP EXPORT VARIABLE(WParea;$mime;wk mime html)
 
 $mailTmp:=MAIL Convert from MIME($mime)
 
  // add pictures (if any)
 If($mailTmp.attachments#Null)
    $email.attachments:=$mailTmp.attachments
 End if
 
 $email.bodyStructure:=$mailTmp.bodyStructure
 $email.bodyValues:=$mailTmp.bodyValues
 
 $status:=$transporter.send($email)
 If(Not($status.success))
    ALERT("An error occurred: "+$status.statusText)
 End if
```

## Exemplo 3

To export the first page of a 4D Write Pro as SVG in a Text variable and hide the headers:

```4d
 var $options : Object
 var $destination : Text
 
 $options:=New object
 $options[wk optimized for]:=wk screen
 $options[wk visible headers]:=False
 WP EXPORT VARIABLE(WPArea;$destination;wk svg;$options)
```

## Veja também

[4D QPDF (Component) - PDF Get attachments](https://github.com/4d/4D-QPDF)  
[Blog post - 4D Write Pro: Electronic invoice generation](https://blog.4d.com/4d-write-pro-electronic-invoice-generation)  
[Blog post - 4D Write Pro: Export to PDF with enclosures](https://blog.4d.com/4d-write-pro-export-to-pdf-with-enclosures)  
[Exporting to HTML and MIME HTML formats](../user-legacy/exporting-to-html-and-mime-html-formats.md)<br/>
[Importing and Exporting in .docx format](../user-legacy/importing-and-exporting-in-docx-format.md)<br/>
[WP EXPORT DOCUMENT](../commands/wp-export-document)
