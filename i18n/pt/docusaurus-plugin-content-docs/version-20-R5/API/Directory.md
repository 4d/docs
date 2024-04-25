---
id: Directory
title: Directory Class
---

<!-- REF directory.creationDate.Desc -->

## .creationDate

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #directory.creationDate.Syntax -->**.creationDate** : Date<!-- END REF -->

#### Descrição

The `.creationDate` property returns <!-- REF #directory.creationDate.Summary -->the creation date of the folder<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

---

<!-- REF directory.creationTime.Desc -->

## .creationTime

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #directory.creationTime.Syntax -->**.creationTime** : Time<!-- END REF -->

#### Descrição

The `.creationTime` property returns <!-- REF #directory.creationTime.Summary -->the creation time of the folder<!-- END REF --> (expressed as a number of seconds beginning at 00:00).

This property is **read-only**.

<!-- END REF -->

---

<!-- REF directory.exists.Desc -->

## .exists

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #directory.exists.Syntax -->**.exists** : Boolean<!-- END REF -->

#### Descrição

The `.exists` property returns <!-- REF #directory.exists.Summary -->true if the folder exists on disk<!-- END REF -->, and false otherwise.

This property is **read-only**.

<!-- END REF -->

---

<!-- REF directory.extension.Desc -->

## .extension

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #directory.extension.Syntax -->**.extension** : Text<!-- END REF -->

#### Descrição

The `.extension` property <!-- REF #directory.extension.Summary -->returns the extension of the folder name (if any)<!-- END REF -->. Uma extensão sempre começa com ".". Uma extensão sempre começa com "." A propriedade devolve uma string vazia se o nome da pasta não tiver extensão.

This property is **read-only**.

<!-- END REF -->

---

<!-- REF directory.fullName.Desc -->

## .fullName

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #directory.fullName.Syntax -->**.fullName** : Text<!-- END REF -->

#### Descrição

The `.fullName` property <!-- REF #directory.fullName.Summary -->returns the full name of the folder, including its extension (if any)<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

---

<!-- REF directory.hidden.Desc -->

## .hidden

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #directory.hidden.Syntax -->**.hidden** : Boolean<!-- END REF -->

#### Descrição

The `.hidden` property returns <!-- REF #directory.hidden.Summary --> true if the folder is set as "hidden" at the system level<!-- END REF -->, and false otherwise.

This property is **read-only**.

<!-- END REF -->

---

<!-- REF directory.isAlias.Desc -->

## .isAlias

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #directory.isAlias.Syntax -->**.isAlias** : Boolean<!-- END REF -->

#### Descrição

The `.isAlias` property returns <!-- REF #directory.isAlias.Summary -->always **false** for a `Folder` object<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

---

<!-- REF directory.isFile.Desc -->

## .isFile

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #directory.isFile.Syntax -->**.isFile** : Boolean<!-- END REF -->

#### Descrição

The `.isFile` property returns <!-- REF #directory.isFile.Summary -->always **false** for a folder<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

---

<!-- REF directory.isFolder.Desc -->

## .isFolder

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #directory.isFolder.Syntax -->**.isFolder** : Boolean<!-- END REF -->

#### Descrição

The `.isFolder` property returns <!-- REF #directory.isFolder.Summary -->always **true** for a folder<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

---

<!-- REF directory.isPackage.Desc -->

## .isPackage

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #directory.isPackage.Syntax -->**.isPackage** : Boolean<!-- END REF -->

#### Descrição

The `.isPackage` property returns <!-- REF #directory.isPackage.Summary -->true if the folder is a package on macOS  (and exists on disk)<!-- END REF -->. .

On Windows, `.isPackage` always returns **false**.

This property is **read-only**.

<!-- END REF -->

---

<!-- REF directory.modificationDate.Desc -->

## .modificationDate

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #directory.modificationDate.Syntax -->**.modificationDate** : Date<!-- END REF -->

#### Descrição

The `.modificationDate` property returns <!-- REF #directory.modificationDate.Summary --> the date of the folder's last modification<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

---

<!-- REF directory.modificationTime.Desc -->

## .modificationTime

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #directory.modificationTime.Syntax -->**.modificationTime** : Time<!-- END REF -->

#### Descrição

The `.modificationTime` property returns <!-- REF #directory.modificationTime.Summary -->the time of the folder's last modification<!-- END REF --> (expressed as a number of seconds beginning at 00:00).

This property is **read-only**.

<!-- END REF -->

---

<!-- REF directory.name.Desc -->

## .name

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #directory.name.Syntax -->**.name** : Text<!-- END REF -->

#### Descrição

The `.name` property returns <!-- REF #directory.name.Summary --> the name of the folder, without extension (if any)<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

---

<!-- REF directory.original.Desc -->

## .original

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #directory.original.Syntax -->**.original** : 4D.Folder<!-- END REF -->

#### Descrição

The `.original` property returns <!-- REF #directory.original.Summary -->the same Folder object as the folder<!-- END REF -->.

This property is **read-only**.

> Esta propriedade está disponible nas pastas para permitir que o código genérico processe pastas ou arquivos.

<!-- END REF -->

---

<!-- REF directory.parent.Desc -->

## .parent

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #directory.parent.Syntax -->**.parent** : 4D.Folder<!-- END REF -->

#### Descrição

The `.parent` property returns <!-- REF #directory.parent.Summary -->the parent folder object of the folder<!-- END REF -->. .

Se a pasta não tiver um pai (raiz), é devolvido o valor nulo.

This property is **read-only**.

<!-- END REF -->

---

<!-- REF directory.path.Desc -->

## .path

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #directory.path.Syntax -->**.path** : Text<!-- END REF -->

#### Descrição

The `.path` property returns <!-- REF #directory.path.Summary -->the POSIX path of the folder<!-- END REF -->. .

This property is **read-only**.

<!-- END REF -->

---

<!-- REF directory.platformPath.Desc -->

## .platformPath

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #directory.platformPath.Syntax -->**.platformPath** : Text<!-- END REF -->

#### Descrição

The `.platformPath` property returns <!-- REF #directory.platformPath.Summary -->the path of the folder expressed with the current platform syntax<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

---

<!-- REF directory.copyTo().Desc -->

## .copyTo()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #directory.copyTo().Syntax -->**.copyTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } { ; *overwrite* : Integer } ) : 4D.Folder<!-- END REF -->

<!-- REF #directory.copyTo().Params -->

| Parâmetro         | Tipo                       |     | Descrição                                   |
| ----------------- | -------------------------- | :-: | ------------------------------------------- |
| destinationFolder | 4D. Folder |  -> | Pasta de destino                            |
| newName           | Text                       |  -> | Nome para a copia                           |
| overwrite         | Integer                    |  -> | `fk overwrite` to replace existing elements |
| Resultados        | 4D. Folder |  <- | Pasta ou arquivo copiado                    |

<!-- END REF -->

#### Descrição

The `.copyTo()` function <!-- REF #directory.copyTo().Summary -->copies the `Folder` object into the specified _destinationFolder_<!-- END REF -->.

The _destinationFolder_ must exist on disk, otherwise an error is generated.

Como padrão, a pasta é copiada com o nome da pasta original. If you want to rename the copy, pass the new name in the _newName_ parameter. O novo nome deve cumprir com as regras de nomenclatura (por exemplo, não deve conter caracteres como ":", "/", etc.), do contrário se devolve um erro.

If a folder with the same name already exists in the _destinationFolder_, by default 4D generates an error. You can pass the `fk overwrite` constant in the _overwrite_ parameter to ignore and overwrite the existing file

| Parâmetros     | Valor | Comentário                                      |
| -------------- | ----- | ----------------------------------------------- |
| `fk overwrite` | 4     | Sobrescrever os elementos existentes, se houver |

**Valor retornado**

The copied `Folder` object.

#### Exemplo

You want to copy a Pictures _folder_ from the user's Document folder to the Database folder:

```4d
var $userImages; $copiedImages : 4D.Folder
$userImages:=Folder(fk documents folder).folder("Pictures")
$copiedImages:=$userImages.copyTo(Folder(fk database folder);fk overwrite)
```

<!-- END REF -->

---

<!-- REF directory.file().Desc -->

## .file()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #directory.file().Syntax -->**.file**( *path* : Text ) : 4D.File<!-- END REF -->

<!-- REF #directory.file().Params -->

| Parâmetro  | Tipo                     |    | Descrição                                               |
| ---------- | ------------------------ | -- | ------------------------------------------------------- |
| path       | Text                     | -> | Rota POSIX relativa                                     |
| Resultados | 4D. File | <- | `File` object (null if invalid path) |

<!-- END REF -->

#### Descrição

The `.file()` function creates <!-- REF #directory.file().Summary -->a `File` object inside the `Folder` object and returns its reference<!-- END REF -->.

In _path_, pass a relative POSIX path to designate the file to return. A rota se avaliará a partir da pasta pai como raíz.

**Valor retornado**

A `File` object or null if _path_ is invalid.

#### Exemplo

```4d
var $myPDF : 4D. File
$myPDF:=Folder(fk documents folder).file("Pictures/info.pdf")
```

<!-- END REF -->

---

<!-- REF directory.files().Desc -->

## .files()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #directory.files().Syntax -->**.files**( { *options* : Integer } ) : Collection<!-- END REF -->

<!-- REF #directory.files().Params -->

| Parâmetro  | Tipo       |    | Descrição                           |
| ---------- | ---------- | -- | ----------------------------------- |
| options    | Integer    | -> | Opções da lista de arquivos         |
| Resultados | Collection | <- | Coleção de objetos de arquivo filho |

<!-- END REF -->

#### Descrição

The `.files()` function returns <!-- REF #directory.files().Summary -->a collection of `File` objects contained in the folder<!-- END REF -->.

> Os apelidos ou links simbolicos não são resolvidos.

By default, if you omit the _options_ parameter, only the files at the first level of the folder are returned in the collection, as well as invisible files or folders. You can modify this by passing, in the _options_ parameter, one or more of the following constants:

| Parâmetros            | Valor | Comentário                                                       |
| --------------------- | ----- | ---------------------------------------------------------------- |
| `fk recursive`        | 1     | A coleção contém arquivos da pasta especificada e suas subpastas |
| `fk ignore invisible` | 8     | Arquivos invisíveis não estão listados                           |

**Valor retornado**

Collection of `File` objects.

#### Exemplo 1

Se quiser saber se há arquivos invisíveis na pasta Database:

```4d
 var $all; $noInvisible : Collection
 $all:=Folder(fk database folder).files()
 $noInvisible:=Folder(fk database folder).files(fk ignore invisible)
 If($all.length#$noInvisible.length)
    ALERT("Database folder contains hidden files.")
 End if
```

#### Exemplo 2

Se quiser obter todos os arquivos que não são invisíveis na pasta Documents:

```4d
 var $recursive : Collection
 $recursive:=Folder(fk documents folder).files(fk recursive+fk ignore invisible)
```

<!-- END REF -->

---

<!-- REF directory.folder().Desc -->

## .folder()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #directory.folder().Syntax -->**.folder**( *path* : Text ) : 4D.Folder<!-- END REF -->

<!-- REF #directory.folder().Params -->

| Parâmetro  | Tipo                       |    | Descrição                                                         |
| ---------- | -------------------------- | -- | ----------------------------------------------------------------- |
| path       | Text                       | -> | Rota POSIX relativa                                               |
| Resultados | 4D. Folder | <- | Created folder object (null if invalid _path_) |

<!-- END REF -->

#### Descrição

The `.folder()` function <!-- REF #directory.folder().Summary -->creates a `Folder` object inside the parent `Folder` object and returns its reference<!-- END REF -->.

In _path_, pass a relative POSIX path to designate the folder to return. A rota se avaliará a partir da pasta pai como raíz.

**Valor retornado**

A `Folder` object or null if _path_ is invalid.

#### Exemplo

```4d
 var $mypicts : 4D. Folder
 $mypicts:=Folder(fk documents folder).folder("Pictures")
```

<!-- END REF -->

---

<!-- REF directory.folders().Desc -->

## .folders()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #directory.folders().Syntax -->**.folders**( { *options* : Integer } ) : Collection<!-- END REF -->

<!-- REF #directory.folders().Params -->

| Parâmetro  | Tipo       |    | Descrição                         |
| ---------- | ---------- | -- | --------------------------------- |
| options    | Integer    | -> | Opções da lista de pasta          |
| Resultados | Collection | <- | Coleção de objetos de pasta filho |

<!-- END REF -->

#### Descrição

The `.folders()` function <!-- REF #directory.folders().Summary -->returns a collection of `Folder` objects contained in the parent folder<!-- END REF -->.

By default, if you omit the _options_ parameter, only the folders at the first level of the folder are returned in the collection. You can modify this by passing, in the _options_ parameter, one or more of the following constants:

| Parâmetros            | Valor | Comentário                                                     |
| --------------------- | ----- | -------------------------------------------------------------- |
| `fk recursive`        | 1     | A coleção contém pastas da pasta especificada e suas subpastas |
| `fk ignore invisible` | 8     | Pastas invisíveis não estão listados                           |

**Valor retornado**

Collection of `Folder` objects.

#### Exemplo

Se quiser a coleção de todas as pastas e subpastas da pasta database:

```4d
 var $allFolders : Collection
 $allFolders:=Folder("/PACKAGE").folders(fk recursive)
```

<!-- END REF -->

---

<!-- REF directory.getIcon().Desc -->

## .getIcon()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #directory.getIcon().Syntax -->**.getIcon**( { *size* : Integer } ) : Picture<!-- END REF -->

<!-- REF #directory.getIcon().Params -->

| Parâmetro  | Tipo    |    | Descrição                                                          |
| ---------- | ------- | -- | ------------------------------------------------------------------ |
| size       | Integer | -> | Longitude de lado da imagem devolvida (píxeles) |
| Resultados | Imagem  | <- | Ícone                                                              |

<!-- END REF -->

#### Descrição

The `.getIcon()` function <!-- REF #directory.getIcon().Summary -->returns the icon of the folder<!-- END REF -->.

The optional _size_ parameter specifies the dimensions in pixels of the returned icon. Este valor representa em realidade a longitude do lado do quadrado que contém o icone. Icones são geralmente definidos como 32x32 píxels ('icones grandes') ou 16x16 ('icones pequenos'). Se passar 0 ou omitir este parâmetro, se devolve a versão 'icone grande'

Se a pasta não existir no disco, se devolve um icone vazio como padrão.

**Valor retornado**

Folder icon [picture](Concepts/dt_picture.md).

<!-- END REF -->
