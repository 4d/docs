---
id: FileHandleClass
title: FileHandle
---

A classe `FileHandle` tem funções que lhe permitem ler sequencialmente ou anexar conteúdos a um objeto aberto [`File`](FileClass). O manuseamento de um arquivo pode acessar a qualquer parte de um documento.

Os objetos File handle são criados usando a função [`file.open()`](FileClass#open).

> Para ler ou escrever um documento inteiro de uma só vez, pode considerar a utilização das funções [file.getText()](FileClass.md#gettext) e [file.setText()](FileClass.md#settext).

Thanks to the standard 4D object *refcounting*, a file handle is automatically deleted when it is no longer referenced and thus, the requested [`File`](FileClass) object is automatically closed. Consequentemente, com os handles dos arquivos não precisa de se preocupar com o encerramento de documentos.

:::note

Os recursos de um objeto, como documentos, são liberados quando não existem mais referências na memória, que acontece, por exemplo, no final do método de execução das variáveis locais. Se você quiser "forçar" a liberação dos recursos do objeto a qualquer momento, você pode [anular suas referências](../Concepts/dt_object.md#resources).

:::

### Exemplo

```code4d
var $f : 4D.File
var $fhandle : 4D.FileHandle
$f:=Folder(Database folder).file("example.txt")

//Writing line by line from the start
$fhandle:=$f.open("write")
$text:="Hello World"
For ($line; 1; 4)
    $fhandle.writeLine($text+String($line))
End for

//Writing line by line from the end
$fhandle:=$f.open("append")
$text:="Hello New World!"
For ($line; 1; 4)
    $fhandle.writeLine($text+String($line))
End for

//Reading using a stop character and an object parameter
$o:=New object()
$o.mode:="read"
$o.charset:="UTF-8"
$o.breakModeRead:=Document with CRLF
$stopChar:="!"
$fhandle:=$f.open($o)
$text:=$fhandle.readText($stopChar)

//Reading line by line
$lines:=New collection
$fhandle:=$f.open("read")
While (Not($fhandle.eof))
	$lines.push($fhandle.readLine())
End while

```

### Objeto FileHandle

Os objectos handle de arquivos não podem ser partilhados.

|                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #FileHandleClass.breakModeRead.Syntax -->](#breakmoderead)<br/><!-- INCLUDE #FileHandleClass.breakModeRead.Summary -->    |
| [<!-- INCLUDE #FileHandleClass.breakModeWrite.Syntax -->](#breakmodewrite)<br/><!-- INCLUDE #FileHandleClass.breakModeWrite.Summary --> |
| [<!-- INCLUDE #FileHandleClass.charset.Syntax -->](#charset)<br/><!-- INCLUDE #FileHandleClass.charset.Summary -->                      |
| [<!-- INCLUDE #FileHandleClass.eof.Syntax -->](#eof)<br/><!-- INCLUDE #FileHandleClass.eof.Summary -->                                  |
| [<!-- INCLUDE #FileHandleClass.file.Syntax -->](#file)<br/><!-- INCLUDE #FileHandleClass.file.Summary -->                               |
| [<!-- INCLUDE #FileHandleClass.getSize().Syntax -->](#getsize)<br/><!-- INCLUDE #FileHandleClass.getSize().Summary -->                  |
| [<!-- INCLUDE #FileHandleClass.mode.Syntax -->](#mode)<br/><!-- INCLUDE #FileHandleClass.mode.Summary -->                               |
| [<!-- INCLUDE #FileHandleClass.offset.Syntax -->](#offset)<br/><!-- INCLUDE #FileHandleClass.offset.Summary -->                         |
| [<!-- INCLUDE #FileHandleClass.readBlob().Syntax -->](#readblob)<br/><!-- INCLUDE #FileHandleClass.readBlob().Summary -->               |
| [<!-- INCLUDE #FileHandleClass.readLine().Syntax -->](#readline)<br/><!-- INCLUDE #FileHandleClass.readLine().Summary -->               |
| [<!-- INCLUDE #FileHandleClass.readText().Syntax -->](#readtext)<br/><!-- INCLUDE #FileHandleClass.readText().Summary -->               |
| [<!-- INCLUDE #FileHandleClass.setSize().Syntax -->](#setsize)<br/><!-- INCLUDE #FileHandleClass.setSize().Summary -->                  |
| [<!-- INCLUDE #FileHandleClass.writeBlob().Syntax -->](#writeblob)<br/><!-- INCLUDE #FileHandleClass.writeBlob().Summary -->            |
| [<!-- INCLUDE #FileHandleClass.writeLine().Syntax -->](#writeline)<br/><!-- INCLUDE #FileHandleClass.writeLine().Summary -->            |
| [<!-- INCLUDE #FileHandleClass.writeText().Syntax -->](#writetext)<br/><!-- INCLUDE #FileHandleClass.writeText().Summary -->            |

<!-- REF FileHandleClass.breakModeRead.Desc -->

## .breakModeRead

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!-- REF #FileHandleClass.breakModeRead.Syntax -->**.breakModeRead** : Text<!-- END REF -->

#### Descrição

A propriedade `.breakModeRead` retorna <!-- REF #FileHandleClass.breakModeRead.Summary -->o modo de processamento de quebras de linha usado ao ler o arquivo<!-- END REF -->.

A propriedade `.breakModeRead` pode ser definida na criação do identificador com a função [`file.open()`](FileClass.md#open) (consulte [a função `.open()`](FileClass.md#open) para obter mais informações). O padrão é "nativo".

> The `.breakModeRead` property always contains a text value, even if the `.open()` option was set using a number (constant).

Essa propriedade é **somente leitura**.

<!-- END REF -->

<!-- REF FileHandleClass.breakModeWrite.Desc -->

## .breakModeWrite

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!-- REF #FileHandleClass.breakModeWrite.Syntax -->**.breakModeWrite** : Text<!-- END REF -->

#### Descrição

A propriedade `.breakModeWrite` retorna <!-- REF #FileHandleClass.breakModeWrite.Summary --> o modo de processamento de quebras de linha usado ao escrever no arquivo<!-- END REF -->.

A propriedade `.breakModeWrite` pode ser definida na criação do identificador com a função [`file.open()`](FileClass.md#open) (consulte [a função `.open()`](FileClass.md#open) para obter mais informações). O padrão é "nativo".

> The `.breakModeWrite` property always contains a text value, even if the `.open()` option was set using a number (constant).

Essa propriedade é **somente leitura**.

<!-- END REF -->

<!-- REF FileHandleClass.charset.Desc -->

## .charset

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!-- REF #FileHandleClass.charset.Syntax -->**.charset** : Text<!-- END REF -->

#### Descrição

A propriedade `.charset` retorna <!-- REF #FileHandleClass.charset.Summary --> o conjunto de caracteres usado durante a leitura ou escrita para o arquivo<!-- END REF -->.

O conjunto de caracteres pode ser definido na criação do identificador com a função [`file.open()`](FileClass#open). Por padrão é "UTF-8".

Essa propriedade é **somente leitura**.

<!-- END REF -->

<!-- REF FileHandleClass.eof.Desc -->

## .eof

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!-- REF #FileHandleClass.eof.Syntax -->**.eof** : Boolean<!-- END REF -->

#### Descrição

A propriedade `.eof` retorna <!-- REF #FileHandleClass.eof.Summary -->True é o `offset` chegou ao fim do arquivo, e False caso contrário<!-- END REF -->.

Essa propriedade é **somente leitura**.

<!-- END REF -->

<!-- REF FileHandleClass.file.Desc -->

## .file

<!-- REF #FileHandleClass.file.Syntax -->**.file** : 4D.File<!-- END REF -->

#### Descrição

A propriedade `.file` retorna <!-- REF #FileHandleClass.file.Summary -->o objeto [4D.File](FileClass.md) no qual o identificador foi criado<!-- END REF -->.

Essa propriedade é **somente leitura**.

<!-- END REF -->

<!-- REF FileHandleClass.getSize().Desc -->

## .getSize()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!--REF #FileHandleClass.getSize().Syntax -->**.getSize()** : Real <!-- END REF -->

<!--REF #FileHandleClass.getSize().Params -->

| Parâmetro  | Tipo |                             | Descrição                     |
| ---------- | ---- | --------------------------- | ----------------------------- |
| Resultados | Real | <- | Tamanho do documento em bytes |

<!-- END REF -->

#### Descrição

A função `.getSize()` <!-- REF #FileHandleClass.getSize().Summary -->retorna o tamanho atual do documento, expresso em bytes<!-- END REF -->.

> Essa função retorna o mesmo valor que a propriedade ([.size](FileClass#size)) da classe `File`.

#### Veja também

[.setSize()](#setsize), [file.size](FileClass#size)

<!-- END REF -->

<!-- REF FileHandleClass.mode.Desc -->

## .mode

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!-- REF #FileHandleClass.mode.Syntax -->**.mode** : Text<!-- END REF -->

#### Descrição

A propriedade `.mode` retorna <!-- REF #FileHandleClass.mode.Summary --> o modo em que o identificador de arquivos foi criado: "read", "write", ou "append"<!-- END REF -->.

O modo pode ser definido na criação do identificador com a função [`file.open()`](FileClass#open). O padrão é "read".

Essa propriedade é **somente leitura**.

<!-- END REF -->

<!-- REF FileHandleClass.offset.Desc -->

## .offset

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!-- REF #FileHandleClass.offset.Syntax -->**.offset** : Real<!-- END REF -->

#### Descrição

A propriedade `.offset` retorna <!-- REF #FileHandleClass.offset.Summary --> o deslocamento atual do fluxo de dados (posição no documento)<!-- END REF -->. O valor do offset é automaticamente atualizado após as operações de leitura e escrita.

Setting the `.offset` will change its current value at the moment of the next read or write operation.

- Se o valor passado for negativo, o `.offset` é definido para o início do arquivo (zero).
- If the passed value is higher than the size of the file,  the `.offset` is set to the end of the file (size of file).

Essa propriedade é **leitura/escrita**.

:::caution

Quando um identificador de arquivo é criado, o valor `.offset` é um número de bytes. No entanto, a unidade de medida do deslocamento difere conforme a função de leitura: com [`readBlob()`](#readblob), `.offset` é um número de bytes, enquanto com [`readText()`](#readtext)/[`readLine()`](#readline) ele é um número de caracteres. Dependendo do conjunto de caracteres do arquivo, um caractere corresponde a um ou mais bytes. Dependendo do conjunto de caracteres do arquivo, um caractere corresponde a um ou mais bytes. Dependendo do conjunto de caracteres do arquivo, um caractere corresponde a um ou mais bytes. Por exemplo:

```4d
  // Open a european text file using utf-16 encoding (two bytes per character)
  // We want to read the first 10 characters as bytes, then the remaining as text.
$fh:=File("/RESOURCES/sample_utf_16.txt").open()
  // read the 20 first bytes (i.e. 10 characters)
$b:=$fh.readBlob(20) // $fh.offset=20
  // then read all text skipping the first 10 characters we just read in previous blob
  // because we are now reading text instead of bytes, the meaning of 'offset' is not the same.
  // We need to translate it from bytes to characters.
$fh.offset:=10 // ask to skip 10 utf-16 characters (20 bytes)
$s:=$fh.readText()
```

:::

<!-- END REF -->

<!-- REF FileHandleClass.readBlob().Desc -->

## .readBlob()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!--REF #FileHandleClass.readBlob().Syntax -->**.readBlob**( *bytes* : Real ) : 4D.Blob<!-- END REF -->

<!--REF #FileHandleClass.readBlob().Params -->

| Parâmetro  | Tipo                                 |                             | Descrição              |
| ---------- | ------------------------------------ | --------------------------- | ---------------------- |
| *bytes*    | Real                                 | ->                          | Número de bytes a ler  |
| Resultados | [4D.Blob](BlobClass) | <- | Bytes lidos do arquivo |

<!-- END REF -->

#### Descrição

A função `.readBlob()` <!-- REF #FileHandleClass.readBlob().Summary -->retorna um blob de tamanho *bytes* do arquivo, começando da posição atual <!-- END REF -->.

Quando esta função é executada, a posição atual ([.offset](#offset)) é atualizada após a leitura do último byte.

#### Veja também

[.writeBlob()](#writeblob)

<!-- END REF -->

<!-- REF FileHandleClass.readLine().Desc -->

## .readLine()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!--REF #FileHandleClass.readLine().Syntax -->**.readLine()** : Text <!-- END REF -->

<!--REF #FileHandleClass.readLine().Params -->

| Parâmetro  | Tipo |                             | Descrição      |
| ---------- | ---- | --------------------------- | -------------- |
| Resultados | Text | <- | Linha de texto |

<!-- END REF -->

#### Descrição

A função `.readLine()` <!-- REF #FileHandleClass.readLine().Summary -->retorna uma linha de texto da posição atual até que um delimitador de fim de linha seja encontrado ou o final do documento seja alcançado<!-- END REF -->.

Quando essa função é executada, a posição atual ([`.offset`](#offset)) é atualizada.

:::caution Aviso

Essa função assume que a propriedade [`.offset`](#offset) é um número de caracteres, não um número de bytes. Para obter mais informações, consulte [descrição de .offset](#offset).

:::

> Quando esta função é executada pela primeira vez num handle de arquivo, todo o conteúdo do documento é carregado num buffer.

#### Veja também

[.readText()](#readtext), [.writeLine()](#writeline)

<!-- END REF -->

<!-- REF FileHandleClass.readText().Desc -->

## .readText()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!--REF #FileHandleClass.readText().Syntax -->**.readText**( { *stopChar* : Text } ) : Text <!-- END REF -->

<!--REF #FileHandleClass.readText().Params -->

| Parâmetro  | Tipo |                             | Descrição                        |
| ---------- | ---- | --------------------------- | -------------------------------- |
| *stopChar* | Text | ->                          | Caracter no qual parar a leitura |
| Resultados | Text | <- | Texto do arquivo                 |

<!-- END REF -->

#### Descrição

A função `.readText()` <!-- REF #FileHandleClass.readText().Summary -->retorna texto do arquivo, a partir da posição atual até que a primeira string *stopChar* seja encontrada (se passada) ou o fim do arquivo seja alcançada<!-- END REF -->.

A string de caracteres *stopChar* não está incluída no texto devolvido. Se omitir o parâmetro *stopChar*, todo o texto do documento é devolvido.

Quando essa função é executada, o ([.offset](#offset)) é colocado logo após a string *stopChar*.

:::caution Aviso

Essa função assume que a propriedade [`.offset`](#offset) é um número de caracteres, não um número de bytes. Para obter mais informações, consulte [descrição de .offset](#offset).

:::

Se o parâmetro *stopChar* for passado e não for encontrado, `.readText()` retorna uma string vazia e o [.offset](#offset) permanecerá intocado.

> Quando esta função é executada pela primeira vez num handle de arquivo, todo o conteúdo do documento é carregado num buffer.

#### Veja também

[.readLine()](#readline), [.writeText()](#writetext)

<!-- END REF -->

<!-- REF FileHandleClass.setSize().Desc -->

## .setSize()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!--REF #FileHandleClass.setSize().Syntax -->**.setSize**( *size* : Real )<!-- END REF -->

<!--REF #FileHandleClass.setSize().Params -->

| Parâmetro | Tipo |    | Descrição                          |
| --------- | ---- | -- | ---------------------------------- |
| size      | Real | -> | Novo tamanho do documento em bytes |

<!-- END REF -->

#### Descrição

A função `.setSize()` <!-- REF #FileHandleClass.setSize().Summary -->define um novo tamanho de *size* em bytes para o documento<!-- END REF -->.

If the *size* value is less than the current document size, the document content is truncated from the beginning to get the new *size* .

#### Veja também

[.getSize()](#getsize), [file.size](FileClass#size)

<!-- END REF -->

<!-- REF FileHandleClass.writeBlob().Desc -->

## .writeBlob()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!--REF #FileHandleClass.writeBlob().Syntax -->**.writeBlob**( *blob* : 4D.Blob ) <!-- END REF -->

<!--REF #FileHandleClass.writeBlob().Params -->

| Parâmetro | Tipo                                 |    | Descrição                     |
| --------- | ------------------------------------ | -- | ----------------------------- |
| *blob*    | [4D.Blob](BlobClass) | -> | Blob para escrever no arquivo |

<!-- END REF -->

#### Descrição

A função `.writeBlob()` <!-- REF #FileHandleClass.writeBlob().Summary -->escreve *blob* no arquivo, começando pela posição atual<!-- END REF -->.

Quando esta função é executada, a posição atual ([.offset](#offset)) é atualizada após do último byte escrito.

#### Veja também

[.readBlob()](#readblob)

<!-- END REF -->

<!-- REF FileHandleClass.writeLine().Desc -->

## .writeLine()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!--REF #FileHandleClass.writeLine().Syntax -->**.writeLine**( *lineOfText* : Text ) <!-- END REF -->

<!--REF #FileHandleClass.writeLine().Params -->

| Parâmetro    | Tipo |    | Descrição         |
| ------------ | ---- | -- | ----------------- |
| *lineOfText* | Text | -> | Texto para string |

<!-- END REF -->

#### Descrição

A função `.writeLine()` <!-- REF #FileHandleClass.writeLine().Summary -->escreve o conteúdo *lineOfText* na posição atual e insere um delimitador de linha <!-- END REF --> (diferente da função [.writeText()](#writetext)). Por padrão, um delimitador de fim de linha nativo é usado, mas você pode definir outro delimitador quando [abrir o identificador do arquivo](FileClass.md#open) definindo a propriedade [`.breakModeWrite`](#breakmodewrite).

Quando esta função é executada, a posição atual ([.offset](#offset)) é atualizada após o delimitador de fim de linha.

#### Veja também

[.breakModeWrite](#breakmodewrite), [.readLine()](#readline), [.writeText()](#writetext)

<!-- END REF -->

<!-- REF FileHandleClass.writeText().Desc -->

## .writeText()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!--REF #FileHandleClass.writeText().Syntax -->**.writeText**( *textToWrite* : Text )<!-- END REF -->

<!--REF #FileHandleClass.writeText().Params -->

| Parâmetro     | Tipo |    | Descrição         |
| ------------- | ---- | -- | ----------------- |
| *textToWrite* | Text | -> | Texto para string |

<!-- END REF -->

#### Descrição

A função `.writeText()` <!-- REF #FileHandleClass.writeText().Summary -->escreve o conteúdo *textToWrite* na posição atual e não insere um delimitador final de fim-de-linha<!-- END REF --> (ao contrário da função [.writeLine()](#writeline)). Por padrão, o delimitador nativo é usado, mas você pode definir outro delimitador quando [abrir o identificador do arquivo](FileClass.md#open) definindo a propriedade [`.breakModeWrite`](#breakmodewrite).

Quando esta função é executada, a posição atual ([.offset](#offset)) é atualizada após o próximo delimitador de fim de linha.

#### Veja também

[.breakModeWrite](#breakmodewrite), [.readText()](#readtext), [.writeLine()](#writeline)

<!-- END REF -->
