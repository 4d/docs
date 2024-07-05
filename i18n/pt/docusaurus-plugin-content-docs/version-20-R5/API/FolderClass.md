---
id: FolderClass
title: Folder
---

`Folder` objects are created with the [`Folder`](#folder) command. Contêm referências a pastas que podem ou não existir efectivamente no disco. For example, when you execute the `Folder` command to create a new folder, a valid `Folder` object is created but nothing is actually stored on disk until you call the [`folder.create()`](#create) function.

### Exemplo

O exemplo seguinte cria uma pasta "JohnSmith":

```code4d
Form.curfolder:=Folder(fk database folder)
Form.curfolder:=Folder("C:\\Users\\JohnSmith\\";fk platform path)
```

### Pathnames

`Folder` objects support several pathnames, including `filesystems` or `posix` syntax. Supported pathnames are detailed in the [**Pathnames**](../Concepts/paths.md) page.

### Objecto Folder

|                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #directory.copyTo().Syntax -->](#copyto)<br/><!-- INCLUDE #directory.copyTo().Summary -->                           |
| [<!-- INCLUDE #FolderClass.create().Syntax -->](#create)<br/><!-- INCLUDE #FolderClass.create().Summary -->                       |
| [<!-- INCLUDE #FolderClass.createAlias().Syntax -->](#createalias)<br/><!-- INCLUDE #FolderClass.createAlias().Summary -->        |
| [<!-- INCLUDE #directory.creationDate.Syntax -->](#creationdate)<br/><!-- INCLUDE #directory.creationDate.Summary -->             |
| [<!-- INCLUDE #directory.creationTime.Syntax -->](#creationtime)<br/><!-- INCLUDE #directory.creationTime.Summary -->             |
| [<!-- INCLUDE #FolderClass.delete().Syntax -->](#delete)<br/><!-- INCLUDE #FolderClass.delete().Summary -->                       |
| [<!-- INCLUDE #directory.exists.Syntax -->](#exists)<br/><!-- INCLUDE #directory.exists.Summary -->                               |
| [<!-- INCLUDE #directory.extension.Syntax -->](#extension)<br/><!-- INCLUDE #directory.extension.Summary -->                      |
| [<!-- INCLUDE #directory.file().Syntax -->](#file)<br/><!-- INCLUDE #directory.file().Summary -->                                 |
| [<!-- INCLUDE #directory.files().Syntax -->](#files)<br/><!-- INCLUDE #directory.files().Summary -->                              |
| [<!-- INCLUDE #directory.folder().Syntax -->](#folder)<br/><!-- INCLUDE #directory.folder().Summary -->                           |
| [<!-- INCLUDE #directory.folders().Syntax -->](#folders)<br/><!-- INCLUDE #directory.folders().Summary -->                        |
| [<!-- INCLUDE #directory.fullName.Syntax -->](#fullname)<br/><!-- INCLUDE #directory.fullName.Summary -->                         |
| [<!-- INCLUDE #directory.getIcon().Syntax -->](#geticon)<br/><!-- INCLUDE #directory.getIcon().Summary -->                        |
| [<!-- INCLUDE #directory.hidden.Syntax -->](#hidden)<br/><!-- INCLUDE #directory.hidden.Summary -->                               |
| [<!-- INCLUDE #FileHandleClass.eof.Syntax -->](#eof)<br/><!-- INCLUDE #FileHandleClass.eof.Summary -->                            |
| [<!-- INCLUDE #directory.isFile.Syntax -->](#isfile)<br/><!-- INCLUDE #directory.isFile.Summary -->                               |
| [<!-- INCLUDE #directory.isFolder.Syntax -->](#isfolder)<br/><!-- INCLUDE #directory.isFolder.Summary -->                         |
| [<!-- INCLUDE #directory.isPackage.Syntax -->](#ispackage)<br/><!-- INCLUDE #directory.isPackage.Summary -->                      |
| [<!-- INCLUDE #directory.modificationDate.Syntax -->](#modificationdate)<br/><!-- INCLUDE #directory.modificationDate.Summary --> |
| [<!-- INCLUDE #directory.modificationTime.Syntax -->](#modificationtime)<br/><!-- INCLUDE #directory.modificationTime.Summary --> |
| [<!-- INCLUDE #directory.name.Syntax -->](#name)<br/><!-- INCLUDE #directory.name.Summary -->                                     |
| [<!-- INCLUDE #directory.original.Syntax -->](#original)<br/><!-- INCLUDE #directory.original.Summary -->                         |
| [<!-- INCLUDE #directory.parent.Syntax -->](#parent)<br/><!-- INCLUDE #directory.parent.Summary -->                               |
| [<!-- INCLUDE #directory.path.Syntax -->](#path)<br/><!-- INCLUDE #directory.path.Summary -->                                     |
| [<!-- INCLUDE #directory.platformPath.Syntax -->](#platformpath)<br/><!-- INCLUDE #directory.platformPath.Summary -->             |
| [<!-- INCLUDE #FolderClass.moveTo().Syntax -->](#moveto)<br/><!-- INCLUDE #FolderClass.moveTo().Summary -->                       |
| [<!-- INCLUDE #FolderClass.rename().Syntax -->](#rename)<br/><!-- INCLUDE #FolderClass.rename().Summary -->                       |

## Folder

<details><summary>História</summary>

| Release | Mudanças                    |
| ------- | --------------------------- |
| 19 R8   | Support of `fk home folder` |
| 17 R5   | Adicionado                  |

</details>

<!-- REF #_command_.Folder.Syntax -->**Folder** ( *path* : Text { ; *pathType* : Integer }{ ; \* } ) : 4D.Folder<br/>**Folder** ( *folderConstant* : Integer { ; \* } ) : 4D.Folder<!-- END REF -->

<!-- REF #_command_.Folder.Params -->

| Parâmetro      | Tipo                       |     | Descrição                                                         |
| -------------- | -------------------------- | :-: | ----------------------------------------------------------------- |
| path           | Text                       |  -> | Folder path                                                       |
| folderConstant | Integer                    |  -> | Constante Pasta 4D                                                |
| pathType       | Integer                    |  -> | `fk posix path` (padrão) ou `fk platform path` |
| -              |                            |  -> | * para devolver a pasta da base de dados do anfitrião             |
| Resultados     | 4D. Folder |  <- | Novo Objeto Folder                                                |

<!-- END REF -->

#### Descrição

The `Folder` command <!-- REF #_command_.Folder.Summary -->creates and returns a new object of the `4D.Folder` type<!-- END REF -->. O comando aceita duas sintaxes:

**Folder ( path { ; pathType } { ; \* } )**

In the *path* parameter, pass a folder path string. You can use a custom string or a [filesystem](../Concepts/paths.md#filesystem-pathnames) (e.g., "/DATA").

> Only absolute pathnames are supported with the `Folder` command.

Como padrão, 4D espera um caminho expresso com a sintaxe POSIX. If you work with platform pathnames (Windows or macOS), you must declare it using the *pathType* parameter. Estão disponíveis as seguintes constantes:

| Parâmetros       | Valor | Comentário                                                                                                                  |
| ---------------- | ----- | --------------------------------------------------------------------------------------------------------------------------- |
| fk platform path | 1     | Caminho expresso com uma sintaxe específica da plataforma (obrigatória em caso de caminho de plataforma) |
| fk posix path    | 0     | Caminho expresso com a sintaxe POSIX (por padrão)                                                        |

**Folder ( folderConstant { ; \* } )**

In the *folderConstant* parameter, pass a 4D built-in or system folder, using one of the following constants:

| Parâmetros                 | Valor | Comentário                                                                                                                                  |
| -------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| fk applications folder     | 116   |                                                                                                                                             |
| fk data folder             | 9     | Sistema de ficheiros associado: "/DATA"                                                                                     |
| fk database folder         | 4     | Sistema de arquivos associado: "/PACKAGE"                                                                                   |
| fk desktop folder          | 115   |                                                                                                                                             |
| fk documents folder        | 117   | Pasta de documentos do utilizador                                                                                                           |
| fk home folder             | 118   | Current home folder of the user (usually `/Users/<username>/`)                                                           |
| fk licenses folder         | 1     | Pasta contendo os arquivos de licença 4D da máquina                                                                                         |
| fk logs folder             | 7     | Sistema de arquivos associado: "/LOGS"                                                                                      |
| fk mobileApps folder       | 10    |                                                                                                                                             |
| fk remote database folder  | 3     | Pasta de base de dados 4D criada em cada máquina 4D remota                                                                                  |
| fk resources folder        | 6     | Sistema de arquivos associado: "/DATA"                                                                                      |
| fk system folder           | 100   |                                                                                                                                             |
| fk user preferences folder | 0     | 4D folder that stores user preference files within the <code>\\<userName&gt;</code> directory.         |
| fk web root folder         | 8     | Pasta raiz atual da Web da base de dados: se estiver dentro do pacote "/PACKAGE/percurso", caso contrário, caminho completo |

If the command is called from a component, pass the optional *parameter to get the path of the host database. Otherwise, if you omit the* parameter, a null object is always returned.

> On Windows, in merged clients, the location of built-in folders is modified if the `ShareLocalResourcesOnWindowsClient` [BuildApp key](../Desktop/building.md#buildapp4dsettings) is used.

## 4D. Folder.new()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!-- REF #4D.Folder.new().Syntax -->

**4D.Folder.new** ( *path* : Text { ; *pathType* : Integer }{ ; \* } ) : 4D.Folder<br/>**4D.Folder.new** ( *folderConstant* : Integer { ; \* } ) : 4D.Folder<!-- END REF -->

#### Descrição

The `4D.Folder.new()` function <!-- REF #4D.Folder.new().Summary -->creates and returns a new object of the `4D.Folder` type<!-- END REF -->. It is identical to the [`Folder`](#folder) command (shortcut).

> It is recommended to use the [`Folder`](#folder) shortcut command instead of `4D.Folder.new()`.

<!-- INCLUDE directory.copyTo().Desc -->

<!-- REF folder.create().Desc -->

## .create()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!--REF #FolderClass.create().Syntax -->**.create()** : Boolean<!-- END REF -->

<!--REF #FolderClass.create().Params -->

| Parâmetro  | Tipo       |    | Descrição                                                    |
| ---------- | ---------- | -- | ------------------------------------------------------------ |
| Resultados | Parâmetros | <- | True se a pasta foi criada com sucesso, false caso contrário |

<!-- END REF -->

#### Descrição

The `.create()` function <!-- REF #FolderClass.create().Summary -->creates a folder on disk according to the properties of the `Folder` object<!-- END REF -->.

If necessary, the function creates the folder hierachy as described in the [platformPath](#platformpath) or [path](#path) properties. Se a pasta já existir no disco, a função não faz nada (não é atirado nenhum erro) e retorna falso.

**Valor retornado**

- **True** if the folder is created successfully;
- **False** if a folder with the same name already exists or if an error occured.

#### Exemplo 1

Criar uma pasta vazia na pasta da base de dados:

```4d
var $created : Boolean
$created:=Folder("/PACKAGE/SpecialPrefs").create()
```

#### Exemplo 2

Criação da pasta "/Arquivos2019/Janeiro/" na pasta da base de dados:

```4d
$newFolder:=Folder("/PACKAGE/Archives2019/January")
If($newFolder.create())
 ALERT("The "+$newFolder.name+" folder was created.")
Else
 ALERT("Impossible to create a "+$newFolder.name+" folder.")
End if
```

<!-- END REF -->

<!-- REF folder.createAlias().Desc -->

## .createAlias()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!--REF #FolderClass.createAlias().Syntax -->**.createAlias**( *destinationFolder* : 4D.Folder ; *aliasName* : Text { ; *aliasType* : Integer } ) : 4D.File<!-- END REF -->

<!--REF #FolderClass.createAlias().Params -->

| Parâmetro         | Tipo                       |    | Descrição                                    |
| ----------------- | -------------------------- | -- | -------------------------------------------- |
| destinationFolder | 4D. Folder | -> | Pasta de destino para o pseudónimo ou atalho |
| aliasName         | Text                       | -> | Nome do pseudónimo ou atalho                 |
| aliasType         | Integer                    | -> | Tipo de ligação do pseudónimo                |
| Resultados        | 4D. File   | <- | Alias ou referência de atalho                |

<!-- END REF -->

#### Descrição

The `.createAlias()` function <!-- REF #FolderClass.createAlias().Summary -->creates an alias (macOS) or a shortcut (Windows)<!-- END REF --> to the folder with the specified *aliasName* name in the folder designated by the *destinationFolder* object.

Pass the name of the alias or shortcut to create in the *aliasName* parameter.

Por padrão em macOS, a função cria um pseudónimo padrão. You can also create a symbolic link by using the *aliasType* parameter. Estão disponíveis as seguintes constantes:

| Parâmetros         | Valor | Comentário                                      |
| ------------------ | ----- | ----------------------------------------------- |
| `fk alias link`    | 0     | Alias link (padrão)          |
| `fk symbolic link` | 1     | Link simbólico (só em macOS) |

On Windows, a shortcut (.lnk file) is always created (the *aliasType* parameter is ignored).

**Objeto devolvido**

A `4D.File` object with the `isAlias` property set to **true**.

#### Exemplo

Deseja criar um pseudónimo para uma pasta de arquivo na sua pasta de base de dados:

```4d
$myFolder:=Folder("C:\\Documents\\Archives\\2019\\January";fk platform path)
$aliasFile:=$myFolder.createAlias(Folder("/PACKAGE");"Jan2019")
```

<!-- END REF -->

<!-- INCLUDE directory.creationDate.Desc -->

<!-- INCLUDE directory.creationTime.Desc -->

<!-- REF folder.delete().Desc -->

## .delete()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!--REF #FolderClass.delete().Syntax -->**.delete**( { *option* : Integer } )<!-- END REF -->

<!-- REF #FolderClass.delete().Params -->

| Parâmetro | Tipo    |    | Descrição                    |
| --------- | ------- | -- | ---------------------------- |
| option    | Integer | -> | Opção de eliminação de pasta |

<!-- END REF -->

#### Descrição

The `.delete()` function <!-- REF #FolderClass.delete().Summary -->deletes the folder<!-- END REF -->.

By default, for security reasons, if you omit the option parameter, `.delete( )` only allows empty folders to be deleted. Se quiser que o comando possa apagar pastas que não estejam vazias, deve utilizar o parâmetro de opção com uma das seguintes constantes:

| Parâmetros             | Valor | Comentário                                             |
| ---------------------- | ----- | ------------------------------------------------------ |
| `Delete only if empty` | 0     | Elimina a pasta apenas quando está vazia               |
| `Delete with contents` | 1     | Apaga a pasta juntamente com tudo o que a mesma contém |

When `Delete only if empty` is passed or if you omit the option parameter:

- A pasta só é apagada se estiver vazia; caso contrário, o comando não faz nada e é gerado um erro -47.
- Se a pasta não existir, o erro -120 é gerado.

When `Delete with contents` is passed:

- A pasta, juntamente com todo o seu conteúdo, é apagada.
  **Warning**: Even when this folder and/or its contents are locked or set to read-only, if the current user has suitable access rights, the folder (and contents) is still deleted.
- Se esta pasta, ou qualquer dos arquivos que conter, não puder ser apagada, a eliminação é abortada assim que o primeiro elemento inacessível for detectado, e um erro(\*) é devolvido. Neste caso, a pasta pode ser apenas parcialmente apagada. When deletion is aborted, you can use the `GET LAST ERROR STACK` command to retrieve the name and path of the offending file.
- Se a pasta não existir, o comando não faz nada e nenhum erro é devolvido.
  (\*) Windows: -54 (Attempt to open locked file for writing) macOS: -45 (The file is locked or the pathname is not correct)

<!-- END REF -->

<!-- INCLUDE directory.exists.Desc -->

<!-- INCLUDE directory.extension.Desc -->

<!-- INCLUDE directory.file().Desc -->

<!-- INCLUDE directory.files().Desc -->

<!-- INCLUDE directory.folder().Desc -->

<!-- INCLUDE directory.folders().Desc -->

<!-- INCLUDE directory.fullName.Desc -->

<!-- INCLUDE directory.getIcon().Desc -->

<!-- INCLUDE directory.hidden.Desc -->

<!-- INCLUDE directory.isAlias.Desc -->

<!-- INCLUDE directory.isFile.Desc -->

<!-- INCLUDE directory.isFolder.Desc -->

<!-- INCLUDE directory.isPackage.Desc -->

<!-- INCLUDE directory.modificationDate.Desc -->

<!-- INCLUDE directory.modificationTime.Desc -->

<!-- REF folder.moveTo().Desc -->

## .moveTo()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!--REF #FolderClass.moveTo().Syntax -->**.moveTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } ) : 4D.Folder<!-- END REF -->

<!--REF #FolderClass.moveTo().Params -->

| Parâmetro         | Tipo                       |    | Descrição                         |
| ----------------- | -------------------------- | -- | --------------------------------- |
| destinationFolder | 4D. Folder | -> | Pasta de destino                  |
| newName           | Text                       | -> | Nome completo para a pasta movida |
| Resultados        | 4D. Folder | <- | Pasta movida                      |

<!-- END REF -->

#### Descrição

The `.moveTo( )` function <!-- REF #FolderClass.moveTo().Summary -->moves or renames the `Folder` object (source folder) into the specified *destinationFolder*<!-- END REF -->.

The *destinationFolder* must exist on disk, otherwise an error is generated.

Por padrão, a pasta mantém o seu nome quando movida. If you want to rename the moved folder, pass the new full name in the *newName* parameter. O novo nome deve cumprir com as regras de nomenclatura (por exemplo, não deve conter caracteres como ":", "/", etc.), do contrário se devolve um erro.

**Objeto devolvido**

O objeto `Folder` movido.

#### Exemplo

Quer mover-se e renomear uma pasta:

```4d
 var $tomove; $moved : Object
 $docs:=Folder(fk documents folder)
 $tomove:=$docs.folder("Pictures")
 $tomove2:=$tomove.moveTo($docs.folder("Archives");"Pic_Archives")
```

<!-- END REF -->

<!-- INCLUDE directory.name.Desc -->

<!-- INCLUDE directory.original.Desc -->

<!-- INCLUDE directory.parent.Desc -->

<!-- INCLUDE directory.path.Desc -->

<!-- INCLUDE directory.platformPath.Desc -->

<!-- REF folder.rename().Desc -->

## .rename()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!--REF #FolderClass.rename().Syntax -->**.rename**( *newName* : Text ) : 4D.Folder<!-- END REF -->

<!--REF #FolderClass.rename().Params -->

| Parâmetro  | Tipo                       |    | Descrição                       |
| ---------- | -------------------------- | -- | ------------------------------- |
| newName    | Text                       | -> | Novo nome completo para a pasta |
| Resultados | 4D. Folder | <- | Renomeado arquivo               |

<!-- END REF -->

#### Descrição

The `.rename()` function <!-- REF #FolderClass.rename().Summary -->renames the folder with the name you passed in *newName* and returns the renamed `Folder` object<!-- END REF -->.

The *newName* parameter must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned. Se já existir um ficheiro com o mesmo nome, é devolvido um erro.

**Objeto devolvido**

The renamed `Folder` object.

#### Exemplo

```4d
 var $toRename : 4D. Folder
 $toRename:=Folder("/RESOURCES/Pictures").rename("Images")
```

<!-- END REF -->
