---
id: ZipArchiveClass
title: ZIPArchive
---


Um arquivo 4D Zip é um  objeto`File` ou `Folder` contendo um ou mais arquivos ou pastas, que são comprimidos para ter um tamanho menor que o original. Esses arquivos são criados com uma extensão ".zip" e podem ser usados para poupar espaço em disco ou transferir arquivos via meios que tenham limitações de tamanho (por exemplo, um email ou por uma rede).

- Pode criar um arquivo 4D ZIP com o comando [ZIP Create archive](#zip-create-archive).
- As instâncias [`ZIPFile`](ZipFileClass.md) e [`ZIPFolder`](ZipFolderClass.md) de 4D estão disponíveis vai a propriedade [`root`](#root) (`ZIPFolder`) do objeto retornado pelo comando [ZIP Read archive](#zip-read-archive).


### Exemplo

Para recuperar e ver os conteúdos de um objeto ZIP file:

```4d
var $path; $archive : 4D.File
var $zipFile : 4D.ZipFile
var $zipFolder : 4D.ZipFolder
var $txt : Text

$path:=Folder(fk desktop folder).file("MyDocs/Archive.zip")
$archive:=ZIP Read archive($path)
$zipFolder:=$archive.root // armazenar a pasta principal zip
$zipFile:=$zipFolder.files()[0] //ler o primeiro arquivo zipado

If($zipFile.extension=".txt")
    $txt:=$zipFile.getText()
End if
```

### Resumo

|                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #ZipArchiveClass.root.Syntax -->](#root)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #ZipArchiveClass.root.Summary -->|


## ZIP Create archive

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v18    | Adicionado |
</details>

<!-- REF #_command_.ZIP Create archive.Syntax -->
**ZIP Create archive** ( *fileToZip* : 4D.File ; *destinationFile* : 4D.File ) : Object<br>**ZIP Create archive** ( *folderToZip* : 4D.Folder ; *destinationFile* : 4D.File { ; *options* : Integer }) : Object<br>**ZIP Create archive** ( *zipStructure* : Object ; *destinationFile* : 4D.File ) : Object<!-- END REF -->

<!-- REF #_command_.ZIP Create archive.Params -->
| Parâmetros      | Tipo      |    | Descrição                                            |
| --------------- | --------- |:--:| ---------------------------------------------------- |
| fileToZip       | 4D.File   | -> | Objeto File ou Folder a comprimir                    |
| folderToZip     | 4D.Folder | -> | Objeto File ou Folder a comprimir                    |
| zipStructure    | Objeto    | -> | Objeto File ou Folder a comprimir                    |
| destinationFile | 4D.File   | -> | Arquivo destino para o arquivo                       |
| options         | Integer   | -> | *folderToZip* option: `ZIP Without enclosing folder` |
| Resultados      | Objeto    | <- | Objeto de estado                                     |
<!-- END REF -->


#### Descrição

O comando `ZIP Create archive` <!-- REF #_command_.ZIP Create archive.Summary -->cria um arquivo compactado ZIP e retorna o estado da operação<!-- END REF -->.

Pode passar um objeto 4D.File,  4D.Folder, ou um objeto de estrutura zip como primeiro parâmetro:

- *fileToZip*: simplesmente passar  `4D.File` para compactar.

- *folderToZip*: Passa um `4D.Folder` para compactar. Nesse caso, o parâmetro *options* permite compactar só os conteúdos da pasta (ou seja, excluir a pasta parente). Como padrão, `ZIP Create archive` compacta a pasta e seus conteúdos, assim a operação de descompactação vai recriar a pasta. Se quiser que a operação de descompactação restaure apenas os conteúdos da pasta, passe a cosntante `ZIP Without enclosing folder` no parâmetro *options*.

- *zipStructure*: pode passar um objeto descrevendo o objeto ZIP archive. As propriedades abaixo estão disponíveis para definir a estrutura:

| Propriedade | Tipo        | Descrição                                                                                                                                                                                                                                                                                                                         |
| ----------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| compression | Texto       | <p><li>`ZIP Compression standard`: Deflate compression (default)</li></p><p><li>`ZIP Compression LZMA`: LZMA compression</li></p><p><li>`ZIP Compression XZ`: XZ compression</li></p><p><li>`ZIP Compression none`: No compression</li></p>                                                                                                                                                                                                                              |
| níveis      | Integer     | Nível de compressão. Valores possíveis: de 1 a 10. Um valor pequeno produz um arquivo de maior tamanho, enquanto um valor grande produz um arquivo de tamanho menor. O nível de compactação tem um impacto na performance. Valores padrão se omitidos: <p><li>`ZIP Compression standard`: 6</li></p><p><li>`ZIP Compression LZMA`: 4</li></p><p><li>`ZIP Compression XZ`: 4</li></p> |
| encryption  | Texto       | A criptografia a usar se uma senha for estabelecida:<p><li>`ZIP Encryption AES128`: AES encryption using 128-bit key.</li></p><p><li>`ZIP Encryption AES192`: AES encryption using 192-bit key.</li></p><p><li>`ZIP Encryption AES256`: AES encryption using 256-bit key (default if password is set).</li></p><p><li>`ZIP Encryption none`: Data is not encrypted (default if no password is set)</li></p>                                                                                                                                                                        |
| senha       | Texto       | Uma senha a usar se a criptografia for necessária.                                                                                                                                                                                                                                                                                |
| files       | Collection  | <p><li>a collection of `4D.File` or `4D.Folder` objects or</li></p><p><li>a collection of objects with the following properties:</li></p><table><tr><td>Property</td><td>Type</td><td>Description</td></tr><tr><td>source</td><td>4D.File or 4D.Folder<td>File or Folder</td></tr><tr><td>destination</td><td>Texto</td><td>(optional) - Specify a relative filepath to change the organization of the contents of the archive</td></tr><tr><td>option</td><td>number</td><td>(optional) - `ZIP Ignore invisible files` or 0 to compress all of the file</td></tr></table>                                                                                                                                                                                                                                                    |
| callback    | 4D.Function | Uma fórmula de callback (retrochamada) que recebe o progresso da compactação (0-100) em $1.                                                                                                                                                                                                                                       |

No parâmetro *destinationFile* passe um `4D.File` objeto descrevendo o arquivo ZIP a criar (nome, local, etc.). É recomendado usar a extensão ".zip" se quiser que o arquivo ZIP seja processado automaticamente por um software.

Quando um arquivo for criado, pode usar o comando [ZIP Read archive](#zip-read-archive) para acessá-lo.

**Objeto de estado**

O estado do objeto retornado contém as propriedades abaixo:

| Propriedade | Tipo     | Descrição                                                                                                                                           |
| ----------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusText  | Texto    | Mensagem de erro (se houver):<li>Impossível abrir o arquivo ZIP</li><li>IMpossível criar o arquivo ZIP</li><li>Uma senha é necessária para criptografia |
| status      | Integer  | Código de estado                                                                                                                                    |
| success     | Booleano | True se o arquivo for criado com sucesso, senão false                                                                                               |


#### Exemplo 1

Para comprimir um `4D.File`:

```4d
 var $file; $destination : 4D.File
 var $status : Object

 $destination:=Folder(fk desktop folder).file("MyDocs/file.zip")
 $file:=Folder(fk desktop folder).file("MyDocs/text.txt")

 $status:=ZIP Create archive($file;$destination)
```


#### Exemplo 2

Para comprimir uma `4D.Folder` sem a pasta em si:

```4D
 var $folder : 4D.Folder
 var $destination : 4D.File
 var $status : Object

 $destination:=Folder(fk desktop folder).file("MyDocs/Images.zip")
 $folder:=Folder(fk desktop folder).folder("MyDocs/Images")

 $status:=ZIP Create archive($folder;$destination;ZIP Without enclosing folder)
```

#### Exemplo 3

Para compactar uma estrutura de arquivo ZIP sem uma senha e barra de progresso:

```4d
 var $destination : 4D.File
 var $zip;$status : Object
 var progID : Integer

 $destination:=Folder(fk desktop folder).file("MyDocs/Archive.zip")

 $zip:=New object
 $zip.files:=Folder(fk desktop folder).folder("MyDocs/Resources").folders()
 $zip.password:="password"
 $zip.callback:=Formula(myFormulaCompressingMethod($1))

 progID:=Progress New //utilizamos o componente 4D Progress

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
 var $destination : 4D.File
 var $zip;$err : Object
 $zip:=New object
 $zip.files:=New collection
 $zip.files.push(New object("source";Folder(fk desktop folder).file("Tests/text.txt")))
 $zip.files.push(New object("source";Folder(fk desktop folder).file("Tests/text2.txt")))
 $zip.files.push(New object("source";Folder(fk desktop folder).file("Images/image.png")))

 $destination:=Folder(fk desktop folder).file("file.zip")
 $err:=ZIP Create archive($zip;$destination)
```




## ZIP Read archive

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v18    | Adicionado |
</details>

<!-- REF #_command_.ZIP Read archive.Syntax -->
**ZIP Read archive** ( *zipFile* : 4D.File { ; *password* : Text }) : 4D.ZipArchive<!-- END REF -->

<!-- REF #_command_.ZIP Read archive.Params -->
| Parâmetros | Tipo          |    | Descrição                       |
| ---------- | ------------- |:--:| ------------------------------- |
| zipFile    | 4D.File       | -> | Arquivos Zip                    |
| senha      | Texto         | -> | Senha do arquivo ZIP, se houver |
| Resultados | 4D.ZipArchive | <- | Objeto arquivo                  |
<!-- END REF -->


#### Descrição

O comando `ZIP Read archive` <!-- REF #_command_.ZIP Read archive.Summary -->recupera os conteúdos de *zipFile* e retorna como um objeto `4D.ZipArchive`<!-- END REF -->.

> O comando não descompacta o arquivo ZIP, apenas oferece uma visão de seus conteúdos. Para extrair os conteúdos do arquivo, precisa usar métodos como [file.copyTo()](Document.md#copyto) ou [folder.copyTo()](Directory.md#copyto).

Passe um objeto `4D.File` referenciando o arquivo ZIP compactado no parâmetro *zipFile*. O arquivo alvo ficará aberto quando `ZIP Read archive` tenha terminado sua execução e todos os conteúdos/referências tenham sido extraídos e então fechará automaticamente.

Se *zipFile* for protegido por uma senha, precisa usar o parâmetro opcional *password* ´para fornecer uma senha. Se uma senha for exigida mas não for passada, quando tentar ler os conteúdos do arquivo um erro será gerado.


**Objeto arquivo**

O objeto retornado `4D.ZipArchive` contém apenas uma propriedade [`root`](#root) cujo valor é um objeto `4D.ZipFolder`. Essa pasta descreve os conteúdos completos do arquivo ZIP.



#### Exemplo

Para recuperar e ver os conteúdos de um objeto ZIP file:

```4d
 var $archive : 4D.ZipArchive
 var $path : 4D.File

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



## .root

<!-- REF #ZipArchiveClass.root.Syntax -->
**.root** : 4D.ZipFolder<!-- END REF -->


#### Descrição

A propriedade `.root` contém <!-- REF #ZipArchiveClass.root.Summary -->uma pasta virtual que oferece acesso aos conteúdos do arquivo ZIP<!-- END REF -->.

A pasta `root` e seus conteúdos podem ser manipulados com as funções e propriedades [ZipFile](ZipFileClass.md) e [ZipFolder](ZipFolderClass.md).

Essa propriedade é **apenas leitura**.


<style> h2 { background: #d9ebff;}</style>
