---
id: zip-read-archive
title: ZIP Read archive
displayed_sidebar: docs
---

<!-- REF #_command_.ZIP Read archive.Syntax -->**ZIP Read archive** ( *zipFile* : 4D.File { ; *password* : Text }) : 4D.ZipArchive<!-- END REF -->

<!-- REF #_command_.ZIP Read archive.Params -->

| Parâmetro  | Tipo                     |                             | Descrição                       |
| ---------- | ------------------------ | :-------------------------: | ------------------------------- |
| zipFile    | 4D. File | &#8594; | Arquivos Zip                    |
| senha      | Text                     | &#8594; | Senha do arquivo ZIP, se houver |
| Resultados | Parâmetros               | &#8592; | Objeto arquivo                  |

<!-- END REF -->

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18      | Adicionado |

</details>

## Descrição

O comando `ZIP Read archive` <!-- REF #_command_.ZIP Read archive.Summary -->recupera o conteúdo do *zipFile* e o retorna como um objeto `4D.ZipArchive`<!-- END REF -->.

> O comando não descompacta o arquivo ZIP, apenas oferece uma visão de seus conteúdos. Para extrair os conteúdos do arquivo, precisa usar métodos como [file.copyTo()](../API/Document.md#copyto) ou [folder.copyTo()](../API/Directory.md#copyto).

Passe um objeto `4D.File` referenciando o arquivo ZIP comprimido no parâmetro *zipFile*. The target archive file will be opened until the `ZIP Read archive` has finished executing and all contents/references have been extracted/released, then it will be closed automatically.

If the *zipFile* is password protected, you need to use the optional *password* parameter to provide a password. Se uma senha for exigida mas não for passada, quando tentar ler os conteúdos do arquivo um erro será gerado.

**Objeto arquivo**

O objeto `4D.ZipArchive` retornado contém uma única propriedade [`root`](../API/ZipArchiveClass.md#root) cujo valor é um objeto `4D.ZipFolder`. Esta pasta descreve todo o conteúdo do ficheiro ZIP.

## Exemplo

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

Para extrair da pasta root:

```4d

 If($files[$i].extension=".txt")
    $txt:=$files[$i].getText()
 Else
    $blob:=$files[$i].getContent()
 End if
```

Para ler todos os conteúdos de um arquivo sem extraí-lo da pasta root:

```4d
  //extract a file
 $folderResult:=$files[$i].copyTo(Folder(fk desktop folder).folder("MyDocs"))

  //extract all files
 $folderResult:=$archive.root.copyTo(Folder(fk desktop folder).folder("MyDocs"))
```

## Veja também

[ZipArchive Class](../API/ZipArchiveClass.md)
[ZipFile Class](../API/ZipFileClass.md)
[ZipFolder Class](../API/ZipFolderClass.md)
[`ZIP Create archive`](zip-create-archive.md)

## Propriedades

|                   |                             |
| ----------------- | --------------------------- |
| Número de comando | 1637                        |
| Thread safe       | &check; |


