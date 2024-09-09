---
id: Document
title: Document Class
---

## Descrição

<!-- REF document.creationDate.Desc -->

## .creationDate

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #document.creationDate.Syntax -->**.creationDate** : Date<!-- END REF -->

#### Descrição

The `.creationDate` property returns <!-- REF #document.creationDate.Summary -->the creation date of the file<!-- END REF -->.

Essa propriedade é **somente leitura**.

<!-- END REF -->

<!-- REF document.creationTime.Desc -->

## .creationTime

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #document.creationTime.Syntax -->**.creationTime** : Time<!-- END REF -->

#### Descrição

The `.creationTime` property  returns <!-- REF #document.creationTime.Summary -->the creation  time of the file<!-- END REF --> (expressed as a number of seconds beginning at 00:00).

Essa propriedade é **somente leitura**.

<!-- END REF -->

<!-- REF document.exists.Desc -->

## .exists

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #document.exists.Syntax -->**.exists** : Boolean<!-- END REF -->

#### Descrição

The `.exists` property returns <!-- REF #document.exists.Summary -->true if the file exists on disk<!-- END REF -->, and false otherwise.

Essa propriedade é **somente leitura**.

<!-- END REF -->

<!-- REF document.extension.Desc -->

## .extension

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #document.extension.Syntax -->**.extension** : Text<!-- END REF -->

#### Descrição

The `.extension` property returns <!-- REF #document.extension.Summary -->the extension of the file name (if any)<!-- END REF -->. Uma extensão sempre começa com ".". Uma extensão sempre começa com "." A propriedade devolve uma string vazia se o nome do arquivo não tiver extensão.

Essa propriedade é **somente leitura**.

<!-- END REF -->

<!-- REF document.fullName.Desc -->

## .fullName

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #document.fullName.Syntax -->**.fullName** : Text<!-- END REF -->

#### Descrição

The `.fullName` property returns <!-- REF #document.fullName.Summary -->the full name of the file, including its extension (if any)<!-- END REF -->.

Essa propriedade é **somente leitura**.

<!-- END REF -->

<!-- REF document.hidden.Desc -->

## .hidden

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #document.hidden.Syntax -->**.hidden** : Boolean<!-- END REF -->

#### Descrição

The `.hidden` property returns <!-- REF #document.hidden.Summary -->true if the file is set as "hidden" at the system level<!-- END REF -->, and false otherwise.

Essa propriedade é **leitura/escrita**.

<!-- END REF -->

<!-- REF document.isAlias.Desc -->

## .isAlias

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #document.isAlias.Syntax -->**.isAlias** : Boolean<!-- END REF -->

#### Descrição

The `.isAlias` property returns <!-- REF #document.isAlias.Summary -->true if the file is an alias, a shortcut, or a symbolic link<!-- END REF -->, and false otherwise.

Essa propriedade é **somente leitura**.

<!-- END REF -->

<!-- REF document.isFile.Desc -->

## .isFile

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #document.isFile.Syntax -->**.isFile** : Boolean<!-- END REF -->

#### Descrição

The `.isFile` property returns <!-- REF #document.isFile.Summary -->always true for a file<!-- END REF -->.

Essa propriedade é **somente leitura**.

<!-- END REF -->

<!-- REF document.isFolder.Desc -->

## .isFolder

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #document.isFolder.Syntax -->**.isFolder** : Boolean<!-- END REF -->

#### Descrição

The `.isFolder` property returns <!-- REF #document.isFolder.Summary -->always false for a file<!-- END REF -->.

Essa propriedade é **somente leitura**.

<!-- END REF -->

<!-- REF document.isWritable.Desc -->

## .isWritable

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #document.isWritable.Syntax -->**.isWritable** : Boolean<!-- END REF -->

#### Descrição

The `.isWritable` property returns <!-- REF #document.isWritable.Summary -->true if the file exists on disk and is writable<!-- END REF -->.

> The property checks the ability of the 4D application to write on the disk (access rights), it does not solely rely on the *writable* attribute of the file.

Essa propriedade é **somente leitura**.

**Exemplo**

```4d
 $myFile:=File("C:\\Documents\\Archives\\ReadMe.txt";fk platform path)
 If($myFile.isWritable)
    $myNewFile:=$myFile.setText("Added text")
 End if
```

<!-- END REF -->

<!-- REF document.modificationDate.Desc -->

## .modificationDate

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #document.modificationDate.Syntax -->**.modificationDate** : Date<!-- END REF -->

#### Descrição

The `.modificationDate` property returns <!-- REF #document.modificationDate.Summary -->the date of the file's last modification<!-- END REF -->.

Essa propriedade é **somente leitura**.

<!-- END REF -->

<!-- REF document.modificationTime.Desc -->

## .modificationTime

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #document.modificationTime.Syntax -->**.modificationTime** : Time<!-- END REF -->

##### Descrição

The `.modificationTime` property returns <!-- REF #document.modificationTime.Summary -->the time of the file's last modification<!-- END REF --> (expressed as a number of seconds beginning at 00:00).

Essa propriedade é **somente leitura**.

<!-- END REF -->

<!-- REF document.name.Desc -->

## .name

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #document.name.Syntax -->**.name** : Text<!-- END REF -->

#### Descrição

The `.name` property returns <!-- REF #document.name.Summary -->the name of the file without extension (if any)<!-- END REF -->.

Essa propriedade é **somente leitura**.

<!-- END REF -->

<!-- REF document.original.Desc -->

## .original

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #document.original.Syntax -->**.original** : 4D.File<br/>**.original** : 4D.Folder<!-- END REF -->

#### Descrição

The `.original` property returns <!-- REF #document.original.Summary -->the target element for an alias, a shortcut, or a symbolic link file<!-- END REF -->. O elemento alvo pode ser:

- um objeto File
- um objeto folder

Para arquivos não-alias, a propriedade retorna o mesmo objeto de arquivo que o arquivo.

Essa propriedade é **somente leitura**.

<!-- END REF -->

<!-- REF document.parent.Desc -->

## .parent

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #document.parent.Syntax -->**.parent** : 4D.Folder<!-- END REF -->

#### Descrição

The `.parent` property returns <!-- REF #document.parent.Summary -->the parent folder object of the file<!-- END REF -->. .

Essa propriedade é **somente leitura**.

<!-- END REF -->

<!-- REF document.path.Desc -->

## .path

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #document.path.Syntax -->**.path** : Text<!-- END REF -->

#### Descrição

The `.path` property returns <!-- REF #document.path.Summary -->the POSIX path of the file<!-- END REF -->. .

Essa propriedade é **somente leitura**.

<!-- END REF -->

<!-- REF document.platformPath.Desc -->

## .platformPath

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #document.platformPath.Syntax -->**.platformPath** : Text<!-- END REF -->

#### Descrição

The `.platformPath` property returns <!-- REF #document.platformPath.Summary -->the path of the file expressed with the current platform syntax<!-- END REF -->.

Essa propriedade é **somente leitura**.

<!-- END REF -->

<!-- REF document.size.Desc -->

## .size

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #document.size.Syntax -->**.size** : Real<!-- END REF -->

#### Descrição

The `.size` property returns <!-- REF #document.size.Summary -->the size of the file expressed in bytes<!-- END REF -->. Se o arquivo não existir em disco, o tamanho é 0.

Essa propriedade é **somente leitura**.

<!-- END REF -->

<!-- REF document.copyTo().Desc -->

## .copyTo()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #document.copyTo().Syntax -->**.copyTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } { ; *overwrite* : Integer } ) : 4D.File<!-- END REF -->

<!-- REF #document.copyTo().Params -->

| Parâmetro         | Tipo                       |     | Descrição                                              |
| ----------------- | -------------------------- | :-: | ------------------------------------------------------ |
| destinationFolder | 4D. Folder |  -> | Pasta de destino                                       |
| newName           | Text                       |  -> | Nome para a copia                                      |
| overwrite         | Integer                    |  -> | `fk overwrite` para substituir os elementos existentes |
| Resultados        | 4D. File   |  <- | Arquivo copiado                                        |

<!-- END REF -->

#### Descrição

The `.copyTo()` function <!-- REF #document.copyTo().Summary -->copies the `File` object into the specified *destinationFolder* <!-- END REF -->.

The *destinationFolder* must exist on disk, otherwise an error is generated.

Como padrão, o arquivo é copiado com o nome do arquivo original. If you want to rename the copy, pass the new name in the *newName* parameter. O novo nome deve cumprir com as regras de nomenclatura (por exemplo, não deve conter caracteres como ":", "/", etc.), do contrário se devolve um erro.

If a file with the same name already exists in the *destinationFolder*, by default 4D generates an error. You can pass the `fk overwrite` constant in the *overwrite* parameter to ignore and overwrite the existing file

| Parâmetros     | Valor | Comentário                                      |
| -------------- | ----- | ----------------------------------------------- |
| `fk overwrite` | 4     | Sobrescrever os elementos existentes, se houver |

**Valor retornado**

O objeto `File` copiado.

#### Exemplo

You want to copy a picture *file* from the user's document folder to the application folder:

```4d
var $source; $copy : Object
$source:=Folder(fk documents folder).file("Pictures/photo.png")
$copy:=$source.copyTo(Folder("/PACKAGE");fk overwrite)
```

<!-- END REF -->

<!-- REF document.getContent().Desc -->

## .getContent()

<details><summary>História</summary>

| Release | Mudanças                         |
| ------- | -------------------------------- |
| 19 R2   | Returns 4D. Blob |
| 17 R5   | Adicionado                       |

</details>

<!-- REF #document.getContent().Syntax -->**.getContent( )** : 4D.Blob<!-- END REF -->

<!-- REF #document.getContent().Params -->

| Parâmetro  | Tipo                     |    | Descrição           |
| ---------- | ------------------------ | -- | ------------------- |
| Resultados | 4D. Blob | <- | Conteúdo do arquivo |

<!-- END REF -->

#### Descrição

The `.getContent()` function  <!-- REF #document.getContent().Summary -->returns a `4D.Blob` object containing the entire content of a file<!-- END REF -->. For information on BLOBs, please refer to the [BLOB](Concepts/dt_blob.md) section.

**Valor retornado**

Um objeto `4D.Blob`.

#### Exemplo

Para salvar o conteúdo de um documento em um campo `BLOB`:

```4d
 var $vPath : Text
 $vPath:=Select document(""; "*"; "Select a document";0)
 If(OK=1) //Se tiver sido escolhido um documento
    [aTable]aBlobField:=File($vPath;fk platform path).getContent()
 End if
```

<!-- END REF -->

<!-- REF document.getIcon().Desc -->

## .getIcon()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #document.getIcon().Syntax -->**.getIcon**( { *size* : Integer } ) : Picture<!-- END REF -->

<!-- REF #document.getIcon().Params -->

| Parâmetro  | Tipo    |    | Descrição                                                          |
| ---------- | ------- | -- | ------------------------------------------------------------------ |
| size       | Integer | -> | Longitude de lado da imagem devolvida (píxeles) |
| Resultados | Imagem  | <- | Ícone                                                              |

<!-- END REF -->

#### Descrição

The `.getIcon()` function returns <!-- REF #document.getIcon().Summary -->the icon of the file<!-- END REF -->.

The optional *size* parameter specifies the dimensions in pixels of the returned icon. Este valor representa em realidade a longitude do lado do quadrado que contém o icone. Icones são geralmente definidos como 32x32 píxels ('icones grandes') ou 16x16 ('icones pequenos'). Se passar 0 ou omitir este parâmetro, se devolve a versão 'icone grande'

Se o arquivo não existir no disco, um ícone em branco padrão será retornado.

**Valor retornado**

[Imagen](../Concepts/picture.html) do ícone de arquivo.

<!-- END REF -->

<!-- REF document.getText().Desc -->

## .getText()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #document.getText().Syntax -->**.getText**( { *charSetName* : Text { ; *breakMode* : Integer } } ) : Text<br/>**.getText**( { *charSetNum* : Integer { ; *breakMode* : Integer } } ) : Text<!-- END REF -->

<!-- REF #document.getText().Params -->

| Parâmetro   | Tipo    |    | Descrição                                   |
| ----------- | ------- | -- | ------------------------------------------- |
| charSetName | Text    | -> | Nome do conjunto de caracteres              |
| charSetNum  | Integer | -> | Número de conjuntos de caracteres           |
| breakMode   | Integer | -> | Modo de processamento para quebras de linha |
| Resultados  | Text    | <- | Texto do documento                          |

<!-- END REF -->

#### Descrição

The `.getText()` function <!-- REF #document.getText().Summary -->returns the contents of the file as text <!-- END REF -->.

Opcionalmente, você pode designar o conjunto de caracteres a ser usado na leitura do conteúdo. Você pode passar também:

- in *charSetName*, a string containing the standard set name (for example "ISO-8859-1" or "UTF-8"),
- or in *charSetNum*, the MIBEnum ID (number) of the standard set name.

> For the list of character sets supported by 4D, refer to the description of the `CONVERT FROM TEXT` command.

If the document contains a Byte Order Mark (BOM), 4D uses the character set that it has set instead of the one specified in *charSetName* or *charSetNum* (this parameter is then ignored).
If the document does not contain a BOM and if *charSetName* or *charSetNum* is omitted, by default 4D uses the "UTF-8" character set.

In *breakMode*, you can pass a number indicating the processing to apply to end-of-line characters in the document. As seguintes constantes do tema "Documentos do Sistema" estão disponíveis:

| Parâmetros                    | Valor | Comentário                                                                                                                                                                                                                                              |
| ----------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Document unchanged`          | 0     | Não processado                                                                                                                                                                                                                                          |
| `Document with native format` | 1     | (Padrão) As quebras de linha são convertidas para o formato nativo do sistema operacional: CR (retorno de carro) sob OS X, CRLF (retorno do carro + salto de linha) em Windows |
| `Documento com CRLF`          | 2     | Quebras de linha são convertidas em formato Windows: CRLF (retorno de carro + quebra de linha)                                                                                                                       |
| `Documento com CR`            | 3     | Quebras de linha são convertidas para o formato OS X: CR (retorno de carro)                                                                                                                                          |
| `Documento com LF`            | 4     | Quebras de linha são convertidas em formato Unix: LF (feed de linha)                                                                                                                                                 |

By default, when you omit the *breakMode* parameter, line breaks are processed in native mode (1).

**Valor retornado**

Texto do arquivo.

#### Exemplo

Dado o seguinte documento de texto (os campos são separados por tabulações):

```4d
id name price vat
3 thé 1.06€ 19.6
2 café 1.05€ 19.6
```

Quando você executar este código:

```4d
 $myFile:=Folder(fk documents folder).file("Billing.txt") //UTF-8 por padrão
 $txt:=$myFile.getText()
```

... você obtém o seguinte para `$txt`:

"id\tname\tprice\tvat\r\n3\tthé\t1.06€\t19.6\r\n2\tcafé\t1.05€\t19.6"

with `\t` (tab) as separator and `\r\n` (CRLF) as line delimiter.

Aqui está outro exemplo com o mesmo arquivo, mas um delimitador de linha diferente:

```4d
 $txt:=$myFile.getText("UTF-8"; Document with LF)
```

Neste caso, o conteúdo de `$txt` é o seguinte:

"id\tname\tprice\tvat\n3\tthé\t1.06€\t19.6\n2\tcafé\t1.05€\t19.6"

Este tempo `\n` (LF) é usado como delimitador de linha.

<!-- END REF -->
