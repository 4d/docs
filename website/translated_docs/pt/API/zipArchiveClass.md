---
id: ZipArchiveClass
title: ZIPArchive
---


A 4D ZIP archive is a `File` or `Folder` object containing one or more files or folders, which are compressed to be smaller than their original size. These archives are created with a ".zip" extension and can be used to save disk space or transfer files via mediums which may have size limitations (e.g., email or network).

- You create a 4D ZIP archive with the [ZIP Create archive](#zip-create-archive) command.
- 4D [`ZIPFile`](ZipFileClass.md) and [`ZIPFolder`](ZipFolderClass.md) instances are available through the [`root`](#root) property (`ZIPFolder`) of the object returned by [ZIP Read archive](#zip-read-archive) command.


### Exemplo

To retrieve and view the contents of a ZIP file object:

```4d
var $path; $archive : 4D. File
var $zipFile : 4D. ZipFile
var $zipFolder : 4D. ZipFolder
var $txt : Text

$path:=Folder(fk desktop folder).file("MyDocs/Archive.zip")
$archive:=ZIP Read archive($path)
$zipFolder:=$archive.root // armazenar a pasta principal zip
$zipFile:=$zipFolder.files()[0] //ler o primeiro arquivo zipado If($zipFile.extension=".txt")
    $txt:=$zipFile.getText()
End if
```

### Resumo

|                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #ZipArchiveClass.root.Syntax -->](#root)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #ZipArchiveClass.root.Summary -->|


## ZIP Create archive

<details><summary>Histórico</summary>
| Versão | Mudanças                                                              |
| ------ | --------------------------------------------------------------------- |
| v19 R3 | Added `ZIP Compression LZMA`, `ZIP Compression xy`, `.level` property |
| v18    | Adicionado                                                            |
</details>

<!-- REF #_command_.ZIP Create archive.Syntax -->
**ZIP Create archive** ( *fileToZip* : 4D. File ; *destinationFile* : 4D. File ) : Object<br>**ZIP Create archive** ( *folderToZip* : 4D. Folder ; *destinationFile* : 4D. File { ; *options* : Integer }) : Object<br>**ZIP Create archive** ( *zipStructure* : Object ; *destinationFile* : 4D. File ) : Object<!-- END REF -->

<!-- REF #_command_.ZIP Create archive.Params -->
| Parameter       | Type       |    | Descrição                                            |
| --------------- | ---------- |:--:| ---------------------------------------------------- |
| fileToZip       | 4D. File   | -> | Objeto File ou Folder a comprimir                    |
| folderToZip     | 4D. Folder | -> | Objeto File ou Folder a comprimir                    |
| zipStructure    | Objeto     | -> | Objeto File ou Folder a comprimir                    |
| destinationFile | 4D. File   | -> | Arquivo destino para o arquivo                       |
| options         | Integer    | -> | *folderToZip* option: `ZIP Without enclosing folder` |
| Resultado       | Objeto     | <- | Objeto de estado                                     |
<!-- END REF -->


#### Descrição

O comando `ZIP Create archive`<!-- REF #_command_.ZIP Create archive. Summary -->cria um arquivo compactado ZIP e retorna o estado da operação<!-- END REF -->.

Pode passar um objeto 4D. File,  4D. Folder, ou um objeto de estrutura zip como primeiro parâmetro:

- *fileToZip*: You simply pass a `4D.File` to compress.

- *folderToZip*: You pass a `4D. Folder` to compress. In this case, the *options* parameter allows you to compress only the contents of the folder (i.e., exclude the enclosing folder). By default, `ZIP Create archive` will compress the folder and its contents, so that the decompressing operation will recreate a folder. If you want the decompressing operation to restore only the contents of the folder, pass the `ZIP Without enclosing folder` constant in the *options* parameter.

- *zipStructure*: You pass an object describing the ZIP archive object. The following properties are available to define the structure:

| Propriedade | Type         | Descrição                                                                                                                                                                                                                                                                                              |
| ----------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| compression | Integer      | <p><li>`ZIP Compression standard`: Deflate compression (default)</li></p><p><li>`ZIP Compression LZMA`: LZMA compression</li></p><p><li>`ZIP Compression XZ`: XZ compression</li></p><p><li>`ZIP Compression none`: No compression</li></p>                                                                                                                                                                                                   |
| level       | Integer      | Compression level. Possible values: 1 to 10. A lower value will produce a larger file, while a higher value will produce a smaller file. Compression level has however an impact on performance. Default values if omitted: <p><li>`ZIP Compression standard`: 6</li></p><p><li>`ZIP Compression LZMA`: 4</li></p><p><li>`ZIP Compression XZ`: 4</li></p> |
| encryption  | Integer      | The encryption to use if a password is set:<p><li>`ZIP Encryption AES128`: criptografia AES com uma chave de 128-bits.</li></p><p><li>`ZIP Encryption AES192`: criptografia AES com uma chave de 192-bits.</li></p><p><li>`ZIP Encryption AES256`: criptografia AES com chave de 256-bits (padrão se uma senha for estabelecida).</li></p><p><li>`ZIP Encryption none`: os dados não são criptografados (padrão se não estabelecer uma senha)</li></p>                                                                                                                                                      |
| senha       | Texto        | A password to use if encryption is required.                                                                                                                                                                                                                                                           |
| files       | Coleção      | <p><li>uma coleção de objetos '4D. File' ou '4D. Folder' ou</li></p><p><li>uma coleção de objetos com as propriedades abaixo:</li></p><table><tr><td>Propriedade</td><td>Type</td><td>Descrição</td></tr><tr><td>source</td><td>4D. File ou 4D. Folder<td>File ou Folder</td></tr><tr><td>destination</td><td>Texto</td><td>(opcional) especifique uma rota de arquivo relativa para mudar a organização dos conteúdos do arquivo</td></tr><tr><td>option</td><td>number</td><td>(opcional) - 'ZIP ignore invisible files' ou 0 para compactar o arquivo inteiro</td></tr></table>                                                                                                                                                                                                                         |
| callback    | 4D. Function | A callback formula that will receive the compression progress (0 - 100) in $1.                                                                                                                                                                                                                         |

No parâmetro *destinationFile* passe um `4D. File` objeto descrevendo o arquivo ZIP a criar (nome, local, etc.). É recomendado usar a extensão ".zip" se quiser que o arquivo ZIP seja processado automaticamente por um software.

Quando um arquivo for criado, pode usar o comando [ZIP Read archive](#zip-read-archive) para acessá-lo.

**Objeto de estado**

O estado do objeto retornado contém as propriedades abaixo:

| Propriedade | Type     | Descrição                                                                                                                                |
| ----------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| statusText  | Texto    | Error message (if any):<li>Cannot open ZIP archive</li><li>Cannot create ZIP archive</li><li>Password is required for encryption |
| status      | Integer  | Código de estado                                                                                                                         |
| success     | Booleano | True if archive created successfully, else false                                                                                         |


#### Exemplo 1

Para comprimir um `4D. File`:

```4d
 var $file; $destination : 4D. File
 var $status : Object

 $destination:=Folder(fk desktop folder).file("MyDocs/file.zip")
 $file:=Folder(fk desktop folder).file("MyDocs/text.txt")

 $status:=ZIP Create archive($file;$destination)
```


#### Exemplo 2

Para comprimir uma `4D. Folder` sem a pasta em si:

```4D
 var $folder : 4D. Folder
 var $destination : 4D. File
 var $status : Object

 $destination:=Folder(fk desktop folder).file("MyDocs/Images.zip")
 $folder:=Folder(fk desktop folder).folder("MyDocs/Images")

 $status:=ZIP Create archive($folder;$destination;ZIP Without enclosing folder)
```

#### Exemplo 3

Para compactar uma estrutura de arquivo ZIP sem uma senha e barra de progresso:

```4d
 var $destination : 4D. File
 var $zip;$status : Object
 var progID : Integer

 $destination:=Folder(fk desktop folder).file("MyDocs/Archive.zip")

 $zip:=New object
 $zip.files:=Folder(fk desktop folder).folder("MyDocs/Resources").folders()
 $zip.password:="password"
 $zip.callback:=Formula(myFormulaCompressingMethod($1))

 progID:=Progress New //we use the 4D Progress component

 $status:=ZIP Create archive($zip;$destination)

 Progress QUIT(progID)
```

`myFormulaCompressingMethod`:

```4d
 var $1 : Integer
 Progress SET PROGRESS(progID;Num($1/100))
```


#### Exemplo 4

Pode passar uma coleção de pastas e arquivos para compactar ao objeto *zipStructure*:

```4d
 var $destination : 4D. File
 var $zip;$err : Object
 $zip:=New object
 $zip.files:=New collection
 $zip.files.push(New object("source";Folder(fk desktop folder).file("Tests/text.txt")))
 $zip.files.push(New object("source";Folder(fk desktop folder).file("Tests/text2.txt")))
 $zip.files.push(New object("source";Folder(fk desktop folder).file("Images/image.png")))

 $destination:=Folder(fk desktop folder).file("file.zip")
 $err:=ZIP Create archive($zip;$destination)
```


#### Exemplo 5

You want to use an alternative compression algorithm with a high compression level:

```4d
var $destination : 4D. File
var $zip; $err : Object

$zip:=New object
$zip.files:=New collection
$zip.files.push(Folder(fk desktop folder).folder("images"))
$zip.compression:=ZIP Compression LZMA
$zip.level:=7 //default is 4

$destination:=Folder(fk desktop folder).file("images.zip")
$err:=ZIP Create archive($zip; $destination)
```

## ZIP Read archive

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v18    | Adicionado |
</details>

<!-- REF #_command_.ZIP Read archive.Syntax -->
**ZIP Read archive** ( *zipFile* : 4D. File { ; *password* : Text }) : 4D. ZipArchive<!-- END REF -->

<!-- REF #_command_.ZIP Read archive.Params -->
| Parameter | Type           |    | Descrição                       |
| --------- | -------------- |:--:| ------------------------------- |
| zipFile   | 4D. File       | -> | Arquivos Zip                    |
| senha     | Texto          | -> | Senha do arquivo ZIP, se houver |
| Resultado | 4D. ZipArchive | <- | Objeto arquivo                  |
<!-- END REF -->


#### Descrição

O comando `ZIP Read archive`<!-- REF #_command_.ZIP Read archive. Summary -->recupera os conteúdos de *zipFile* e retorna como um objeto `4D. ZipArchive`<!-- END REF -->.

> This command does not uncompress the ZIP archive, it only provides a view of its contents. To extract the contents of an archive, you need to use methods such as [file.copyTo()](Document.md#copyto) or [folder.copyTo()](Directory.md#copyto).

Passe um objeto `4D. File` referenciando o arquivo ZIP compactado no parâmetro *zipFile*. O arquivo alvo ficará aberto quando `ZIP Read archive` tenha terminado sua execução e todos os conteúdos/referências tenham sido extraídos e então fechará automaticamente.

Se *zipFile* for protegido por uma senha, precisa usar o parâmetro opcional *password* ´para fornecer uma senha. Se uma senha for exigida mas não for passada, quando tentar ler os conteúdos do arquivo um erro será gerado.


**Objeto arquivo**

A propriedade `.root` contém<!-- REF #ZipArchiveClass.root. Summary -->uma pasta virtual que oferece acesso aos conteúdos do arquivo ZIP<!-- END REF -->


.



#### Exemplo

To retrieve and view the contents of a ZIP file object:

```4d
 var $archive : 4D. ZipArchive
 var $path : 4D. File

 $path:=Folder(fk desktop folder).file("MyDocs/Archive.zip")
 $archive:=ZIP Read archive($path)
```

Para recuperar a lista dos arquivos e pastas no arquivo:

```4d
 $folders:=$archive.root.folders()
 $files:=$archive.root.files()
```

Para ler todos os conteúdos de um arquivo sem extraí-lo da pasta raiz:

```4d

 If($files[$i].extension=".txt")
    $txt:=$files[$i].getText()
 Else
    $blob:=$files[$i].getContent()
 End if
```

Para extrair da pasta raiz:

```4d
  //extrair um arquivo
 $folderResult:=$files[$i].copyTo(Folder(fk desktop folder).folder("MyDocs"))

  //extrair todos os arquivos
 $folderResult:=$archive.root.copyTo(Folder(fk desktop folder).folder("MyDocs"))
```



## .root<!-- REF #ZipArchiveClass.root.Syntax -->**.root** : 4D. ZipFolder<!-- END REF -->#### Descrição

O objeto retornado `4D. ZipArchive` contém apenas uma propriedade [`root`](#root) cujo valor é um objeto `4D. ZipFolder`. Essa pasta descreve os conteúdos completos do arquivo ZIP.

A pasta `root` e seus conteúdos podem ser manipulados com as funções e propriedades [ZipFile](ZipFileClass.md) e [ZipFolder](ZipFolderClass.md).

Essa propriedade é**apenas leitura**.


<style> h2 { background: #d9ebff;}</style>
