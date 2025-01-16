---
id: vp-export-document
title: VP EXPORT DOCUMENT
---

<details><summary>História</summary>

| Release | Mudanças                                   |
| ------- | ------------------------------------------ |
| 20 R2   | Suporte de documentos .sjs |

</details>

<!-- REF #_method_.VP EXPORT DOCUMENT.Syntax -->

**VP EXPORT DOCUMENT** ( *vpAreaName* : Text ; *filePath* : Text {; *paramObj* : Object} )<!-- END REF -->

<!-- REF #_method_.VP EXPORT DOCUMENT.Params -->

| Parâmetro  | Tipo   |    | Descrição                                  |                  |
| ---------- | ------ | -- | ------------------------------------------ | ---------------- |
| vpAreaName | Text   | -> | Nome de objeto formulário área 4D View Pro |                  |
| filePath   | Text   | -> | Caminho do documento                       |                  |
| paramObj   | Object | -> | Opções de exportação                       | <!-- END REF --> |

#### Descrição

O comando `VP EXPORT DOCUMENT` <!-- REF #_method_.VP EXPORT DOCUMENT.Summary -->exporta o objeto do 4D View Pro anexado à área *vpAreaName* do 4D View Pro para um documento em disco, de acordo com os parâmetros *filePath* e *paramObj*<!-- END REF -->.

Em *vpAreaName*, passe o nome da área 4D View Pro. Se passar um nome que não existe, é devolvido um erro.

Em filePath, passe o caminho de destino e o nome do documento a ser importado. Se você não especificar um caminho, o documento será salvo no mesmo nível da pasta Project.

Você pode especificar o formato do arquivo exportado incluindo uma extensão após o nome do documento:

- 4D View Pro (".4vp")
- Microsoft Excel (".xlsx")
- PDF (".pdf")
- CSV (".txt", ou ".csv")
- [Documento SpreadJS](https://developer.mescius.com/spreadjs/docs/features/spreadjs-file-format) (".sjs")

Se a extensão não for incluída, mas o formato for especificado em *paramObj*, o arquivo exportado terá a extensão que corresponde ao formato, exceto para o formato CSV (nenhuma extensão é adicionada nesse caso).

O parâmetro opcional *paramObj* permite que você defina várias propriedades para o objeto exportado do 4D View Pro, bem como inicie um método de retorno de chamada quando a exportação for concluída.

| Propriedade          | Tipo                         | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| -------------------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| format               | text                         | (opcional) Quando presente, designa o formato de arquivo exportado: ".4vp" (padrão), ".csv", ".xlsx", ".pdf" ou ".sjs". Você pode usar as seguintes constantes<li>:`vk 4D View Pro format``vk</li><li> csv format``vk</li><li> MS Excel format</li>``vk<li> pdf</li><li> format``vk sjs format`4D</li>adiciona a extensão apropriada ao nome do arquivo, se necessário. If the format specified doesn't correspond with the extension in *filePath*, it will be added to the end of *filePath*. If a format is not specified and no extension is provided in *filePath*, the default file format is used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| senha                | text                         | Somente Microsoft Excel (opcional) - Senha usada para proteger o documento do MS Excel                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| formula              | 4D. Function | Método de retorno de chamada a ser lançado quando a exportação estiver concluída. O uso de um método de retorno de chamada é necessário quando a exportação é assíncrona (que é o caso dos formatos PDF e Excel) se você precisar que algum código seja executado após a exportação. O método de retorno de chamada deve ser passado com o comando [`Formula`](../../API/FunctionClass.md#formula). Consulte [Passagem de um método de retorno de chamada (fórmula)](#passing-a-callback-method-formula).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| valuesOnly           | boolean                      | Especifica que somente os valores das fórmulas (se houver) serão exportados.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| includeFormatInfo    | boolean                      | Verdadeiro para incluir informações de formatação; caso contrário, falso (o padrão é verdadeiro). As informações de formatação são úteis em alguns casos, por exemplo, para exportação para SVG. Por outro lado, a definição dessa propriedade como False permite reduzir o tempo de exportação.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| includeBindingSource | boolean                      | 4DVP e Microsoft Excel apenas. True (padrão) para exportar os valores do contexto de dados atual como valores de célula no documento exportado (os contextos de dados em si não são exportados). Caso contrário, false. Cell binding sempre é exportada. For data context and cell binding management, see [VP SET DATA CONTEXT](vp-set-data-context.md) and [VP SET BINDING PATH](vp-set-binding-path.md).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| sheetIndex           | number                       | Somente PDF (opcional) - Índice da planilha a ser exportada (a partir de 0). -2=todas as planilhas visíveis (**padrão**), -1=apenas a planilha atual                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| pdfOptions           | object                       | PDF apenas (opcional) - Opções para exportação de PDF <p><table><tr><th>Propriedade</th><th>Type</th><th>Descrição</th></tr><tr><td>criador</td><td>texto</td><td>nome do aplicativo que criou o documento original do qual ele foi convertido.</td></tr><tr><td>título</td><td>texto</td><td>título do documento.</td></tr><tr><td>autor</td><td>texto</td><td>nome da pessoa que criou esse documento.</td></tr><tr><td>palavras-chave</td><td>texto</td><td>palavras-chave associadas ao documento.</td></tr><tr><td>Assunto</td><td>text</td><td>assunto do documento.</td></tr></table></p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| csvOptions           | object                       | Somente CSV (opcional) - Opções para exportação de csv <p><table><tr><th>Propriedade</th><th>Tipo de propriedade</th><th>Descrição</th></tr><tr><td>intervalo</td><td>objeto</td><td>Objeto de intervalo de células</td></tr><tr><td>rowDelimitertext</td><td>Delimitador de linha. Default: <code>"\r\n"</code></td></tr><tr><td>columnDelimiter</td><td>text</td><td>Column delimiter. Default: <code>","</code></td></tr></table></p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| sjsOptions           | object                       | SJS only (optional) - Options for sjs export <p><table><tr><th>Property</th><th>Type</th><th>Description</th></tr><tr><td>includeAutoMergedCells</td><td>boolean</td><td>whether to include the automatically merged cells, default is false.</td></tr><tr><td>includeBindingSource</td><td>boolean</td><td>whether to include the binding source, default is true.</td></tr><tr><td>includeCalcModelCache</td><td>boolean</td><td>whether to include the extra data of calculation. Can be faster when open the file with those data, default is false.</td></tr><tr><td>includeEmptyRegionCells</td><td>boolean</td><td>whether to include any empty cells (cells with no data or only style) outside the used data range, default is true.</td></tr><tr><td>includeFormulas</td><td>boolean</td><td>whether to include the formulas, default is true.</td></tr><tr><td>includeStyles</td><td>boolean</td><td>whether to include the style, default is true.</td></tr><tr><td>includeUnusedNames</td><td>boolean</td><td>whether to include the unused custom names, default is true.</td></tr><tr><td>saveAsView</td><td>boolean</td><td>whether to apply the format string to exporting values, default is false.</td></tr></table></p> |
| `\<customProperty>` | any                          | Qualquer propriedade personalizada que estará disponível por meio do parâmetro $3 no método de retorno de chamada.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

**Notas sobre o formato Excel**:

- Ao exportar um documento do 4D View Pro para um arquivo no formato Microsoft Excel, algumas configurações podem ser perdidas. Por exemplo, os métodos e fórmulas 4D não são suportados pelo Excel. You can verify other settings with [this list from SpreadJS](https://developer.mescius.com/spreadjs/docs/excelimpexp/excelexport).
- Exporting in this format is run asynchronously, use the `formula` property of the *paramObj* for code to be executed after the export.

**Notas sobre o formato PDF**:

- Ao exportar um documento do 4D View Pro em PDF, as fontes usadas no documento são automaticamente incorporadas ao arquivo PDF. Somente fontes OpenType (arquivos .OTF ou .TTF) com um mapa Unicode podem ser incorporadas. Se não for encontrado nenhum arquivo de fonte válido para uma fonte, será usada uma fonte padrão.
- Exporting in this format is run asynchronously, use the `formula` property of the *paramObj* for code to be executed after the export.

**Notas sobre o formato CSV**:

- Ao exportar um documento do 4D View Pro para CSV, algumas configurações podem ser perdidas, pois somente o texto e os valores são salvos.
- Todos os valores são guardados como cadeias de caracteres entre aspas duplas. For more information on delimiter-separated values, see [this article on Wikipedia](https://en.wikipedia.org/wiki/Delimiter-separated_values).
- Exporting in this format is run asynchronously, use the `formula` property of the *paramObj* for code to be executed after the export.

**Notas sobre o formato de arquivo SpreadJS**:

- Os [arquivos SpreadJS](https://developer.mescius.com/spreadjs/docs/features/spreadjs-file-format) são arquivos compactados.
- Exporting in this format is run asynchronously, use the `formula` property of the *paramObj* for code to be executed after the export.

Once the export operation is finished, `VP EXPORT DOCUMENT` automatically triggers the execution of the method set in the *formula* property of the *paramObj*, if used.

#### Passagem de um método de retorno de chamada (fórmula)

When including the optional *paramObj* parameter, the command allows you to use the [`Formula`](../../API/FunctionClass.md#formula) command to call a 4D method which will be executed once the export has completed. O método de retorno de chamada receberá os seguintes valores em parâmetros locais:

| Parâmetro |                               | Tipo    | Descrição                                                                    |
| --------- | ----------------------------- | ------- | ---------------------------------------------------------------------------- |
| param1    |                               | text    | O nome do objeto de área 4D View Pro                                         |
| param2    |                               | text    | O caminho do ficheiro do objeto 4D View Pro exportado                        |
| param3    |                               | object  | Uma referência ao *paramObj* do comando                                      |
| param4    |                               | object  | Um objeto devolvido pelo método com uma mensagem de estado                   |
|           | .success      | boolean | True se a exportação for bem sucedida, False caso contrário. |
|           | .errorCode    | integer | Código de erro.                                              |
|           | .errorMessage | text    | Mensagem de erro.                                            |

#### Exemplo 1

Pretende exportar o conteúdo da área "VPArea" para um documento 4D View Pro no disco:

```4d
var $docPath: Text

$docPath:="C:\\Bases\\ViewProDocs\\MyExport.4VP" VP EXPORT DOCUMENT("VPArea";$docPath)
//MyExport.4VP is saved on your disk
```

#### Exemplo 2

Pretende exportar a folha atual em PDF:

```4d
var $params: Object
$params:=New object
$params.format:=vk pdf format
$params.sheetIndex:=-1
$params.pdfOptions:=New object("title";"Annual Report";"author";Current user)
VP EXPORT DOCUMENT("VPArea";"report.pdf";$params)
```

#### Exemplo 3

Você deseja exportar um documento do 4D View Pro no formato ".xlsx" e chamar um método que iniciará o Microsoft Excel com o documento aberto após a conclusão da exportação:

```4d
 $params:=New object
 $params.formula:=Formula(AfterExport)
 $params.format:=vk MS Excel format //".xlsx"
 $params.valuesOnly:=True

 VP EXPORT DOCUMENT("ViewProArea";"c:\\tmp\\convertedfile";$params)
```

Método ***AfterExport***:

```4d
 #DECLARE($areaName : Text ; $filePath : Text ; $params : Object ; $status : Object )

 If($status.success=False)
    ALERT($status.errorMessage)
 Else
    LAUNCH EXTERNAL PROCESS("C:\\Program Files\\Microsoft Office\\Office15\\excel "+$filePath)
 End if
```

#### Exemplo

You want to export the current sheet to a `.txt` file with pipe-separated values:

![example-export-csv](../../assets/en/ViewPro/vp-export-document-csv.png)

```4d
var $params : Object
$params:=New object
$params.range:=VP Cells("ViewProArea";0;0;2;5)
$params.rowDelimiter:="\n"
$params.columnDelimiter:="|" VP EXPORT DOCUMENT("ViewProArea";"c:\\tmp\\data.txt";New object("format";vk csv format;"csvOptions";$params))
```

Aqui está o resultado:

![example-export-csv](../../assets/en/ViewPro/vp-export-document-csv-result.png)

#### Veja também

[VP Convert to picture](vp-convert-to-picture.md)<br/>
[VP Export to object](vp-export-to-object.md)<br/>
[VP IMPORT DOCUMENT](vp-import-document.md)<br/>
[VP Print](vp-print.md)
