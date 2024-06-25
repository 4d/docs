---
id: FileClass
title: File
---

`File` objects are created with the [`File`](#file) command. Contêm referências a ficheiros de disco que podem ou não existir efectivamente no disco. For example, when you execute the `File` command to create a new file, a valid `File` object is created but nothing is actually stored on disk until you call the [`file.create( )`](#create) function.

### Exemplo

O exemplo seguinte cria um arquivo de preferências na pasta do projecto:

```code4d
var $created : Boolean
$created:=File("/PACKAGE/SpecialPrefs/"+Current user+".myPrefs").create()
```

### Pathnames

`File` objects support several pathnames, including `filesystems` or `posix` syntax. Supported pathnames are detailed in the [**Pathnames**](../Concepts/paths.md) page.

### Objeto File

|                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #document.copyTo().Syntax -->](#copyto)<br/><!-- INCLUDE #document.copyTo().Summary -->                           |
| [<!-- INCLUDE #FileClass.create().Syntax -->](#create)<br/><!-- INCLUDE #FileClass.create().Summary -->                         |
| [<!-- INCLUDE #FileClass.createAlias().Syntax -->](#createalias)<br/><!-- INCLUDE #FileClass.createAlias().Summary -->          |
| [<!-- INCLUDE #document.creationDate.Syntax -->](#creationdate)<br/><!-- INCLUDE #document.creationDate.Summary -->             |
| [<!-- INCLUDE #document.creationTime.Syntax -->](#creationtime)<br/><!-- INCLUDE #document.creationTime.Summary -->             |
| [<!-- INCLUDE #FileClass.delete().Syntax -->](#delete)<br/><!-- INCLUDE #FileClass.delete().Summary -->                         |
| [<!-- INCLUDE #document.exists.Syntax -->](#exists)<br/><!-- INCLUDE #document.exists.Summary -->                               |
| [<!-- INCLUDE #document.extension.Syntax -->](#extension)<br/><!-- INCLUDE #document.extension.Summary -->                      |
| [<!-- INCLUDE #document.fullName.Syntax -->](#fullname)<br/><!-- INCLUDE #document.fullName.Summary -->                         |
| [<!-- INCLUDE #FileClass.getAppInfo().Syntax -->](#getappinfo)<br/><!-- INCLUDE #FileClass.getAppInfo().Summary -->             |
| [<!-- INCLUDE #document.getContent().Syntax -->](#getcontent)<!-- INCLUDE #document.getContent().Summary -->                    |
| [<!-- INCLUDE #document.getIcon().Syntax -->](#geticon)<br/><!-- INCLUDE #document.getIcon().Summary -->                        |
| [<!-- INCLUDE #document.getText().Syntax -->](#gettext)<br/><!-- INCLUDE #document.getText().Summary -->                        |
| [<!-- INCLUDE #document.hidden.Syntax -->](#hidden)<br/><!-- INCLUDE #document.hidden.Summary -->                               |
| [<!-- INCLUDE #document.isAlias.Syntax -->](#isalias)<br/><!-- INCLUDE #document.isAlias.Summary -->                            |
| [<!-- INCLUDE #document.isFile.Syntax -->](#isfile)<br/><!-- INCLUDE #document.isFile.Summary -->                               |
| [<!-- INCLUDE #document.isFolder.Syntax -->](#isfolder)<br/><!-- INCLUDE #document.isFolder.Summary -->                         |
| [<!-- INCLUDE #document.isWritable.Syntax -->](#iswritable)<br/><!-- INCLUDE #document.isWritable.Summary -->                   |
| [<!-- INCLUDE #document.modificationDate.Syntax -->](#modificationdate)<br/><!-- INCLUDE #document.modificationDate.Summary --> |
| [<!-- INCLUDE #document.modificationTime.Syntax -->](#modificationtime)<br/><!-- INCLUDE #document.modificationTime.Summary --> |
| [<!-- INCLUDE #FileClass.moveTo().Syntax -->](#moveto)<br/><!-- INCLUDE #FileClass.moveTo().Summary -->                         |
| [<!-- INCLUDE #document.name.Syntax -->](#name)<br/><!-- INCLUDE #document.name.Summary -->                                     |
| [<!-- INCLUDE #FileClass.open().Syntax -->](#open)<br/><!-- INCLUDE #FileClass.open().Summary -->                               |
| [<!-- INCLUDE #document.original.Syntax -->](#original)<br/><!-- INCLUDE #document.original.Summary -->                         |
| [<!-- INCLUDE #document.parent.Syntax -->](#parent)<br/><!-- INCLUDE #document.parent.Summary -->                               |
| [<!-- INCLUDE #document.path.Syntax -->](#path)<br/><!-- INCLUDE #document.path.Summary -->                                     |
| [<!-- INCLUDE #document.platformPath.Syntax -->](#platformpath)<br/><!-- INCLUDE #document.platformPath.Summary -->             |
| [<!-- INCLUDE #FileClass.rename().Syntax -->](#rename)<br/><!-- INCLUDE #FileClass.rename().Summary -->                         |
| [<!-- INCLUDE #FileClass.setAppInfo().Syntax -->](#setappinfo)<br/><!-- INCLUDE #FileClass.setAppInfo().Summary -->             |
| [<!-- INCLUDE #FileClass.setContent().Syntax -->](#setcontent)<br/><!-- INCLUDE #FileClass.setContent().Summary -->             |
| [<!-- INCLUDE #FileClass.setText().Syntax -->](#settext)<br/><!-- INCLUDE #FileClass.setText().Summary -->                      |
| [<!-- INCLUDE #document.size.Syntax -->](#size)<br/><!-- INCLUDE #document.size.Summary -->                                     |

## File

<details><summary>História</summary>

| Release | Mudanças                            |
| ------- | ----------------------------------- |
| 19 R4   | New `HTTP Client log file` constant |
| 17 R5   | Adicionado                          |

</details>

<!-- REF #_command_.File.Syntax -->**File** ( *path* : Text { ; *pathType* : Integer }{ ; \* } ) : 4D.File<br/>**File** ( *fileConstant* : Integer { ; \* } ) : 4D.File<!-- END REF -->

<!-- REF #_command_.File.Params -->

| Parâmetro    | Tipo                     |     | Descrição                                                         |
| ------------ | ------------------------ | :-: | ----------------------------------------------------------------- |
| path         | Text                     |  -> | Rota do arquivo                                                   |
| fileConstant | Integer                  |  -> | Constante de arquivo 4D                                           |
| pathType     | Integer                  |  -> | `fk posix path` (padrão) ou `fk platform path` |
| -            |                          |  -> | * para devolver o arquivo da base de dados anfitriã               |
| Resultados   | 4D. File |  <- | Novo objeto arquivo                                               |

<!-- END REF -->

#### Descrição

The `File` command <!-- REF #_command_.File.Summary -->creates and returns a new object of the `4D.File` type<!-- END REF -->. O comando aceita duas sintaxes:

**File ( path { ; pathType } { ; \* })**

In the *path* parameter, pass a file path string. Pode utilizar uma string personalizada ou um sistema de ficheiros (por exemplo, "/DATA/myfile.txt").

> Only absolute pathnames are supported with the `File` command.

Como padrão, 4D espera um caminho expresso com a sintaxe POSIX. If you work with platform pathnames (Windows or macOS), you must declare it using the *pathType* parameter. Estão disponíveis as seguintes constantes:

| Parâmetros       | Valor | Comentário                                                                                                                  |
| ---------------- | ----- | --------------------------------------------------------------------------------------------------------------------------- |
| fk platform path | 1     | Caminho expresso com uma sintaxe específica da plataforma (obrigatória em caso de caminho de plataforma) |
| fk posix path    | 0     | Caminho expresso com a sintaxe POSIX (por padrão)                                                        |

**File ( fileConstant { ; \* } )**

In the *fileConstant* parameter, pass a 4D built-in or system file, using one of the following constants:

| Parâmetros                        | Valor | Comentário                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --------------------------------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Backup history file               | 19    | Arquivo de histórico de cópias de segurança (ver Arquivos de configuração e rastreio). Armazenado na pasta de destino de cópia de segurança.                                                                                                                                                                                                                                                                                                                                          |
| Backup log file                   | 13    | Arquivo atual do diário de backup. Armazenado na pasta Logs da aplicação.                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Backup settings file              | 1     | Arquivo padrão backup.4DSettings (formato xml), armazenado na pasta Settings do projecto                                                                                                                                                                                                                                                                                                                                                                                                              |
| Backup settings file for data     | 17    | backup.4DSettings file (formato xml) para o arquivo de dados, armazenado na pasta Settings da pasta de dados                                                                                                                                                                                                                                                                                                                                                                                          |
| Build application log file        | 14    | Arquivo de registo atual em formato xml do construtor da aplicação. Armazenado na pasta Logs.                                                                                                                                                                                                                                                                                                                                                                                                            |
| Build application settings file   | 20    | Arquivo de configurações padrão do construtor da aplicação ("buildApp.4DSettings"). Armazenado na pasta Settings do projecto.                                                                                                                                                                                                                                                                                                                                         |
| Compacting log file               | 6     | Arquivo de registo da mais recente compactação feita com o comando Compact data file ou o centro de Manutenção e segurança. Armazenado na pasta Logs.                                                                                                                                                                                                                                                                                                                                                    |
| Current backup settings file      | 18    | arquivo backup.4DSettings utilizado actualmente pela aplicação. Pode ser o arquivo de definições de backup (predefinido) ou um arquivo personalizado de definições de backup do usuário definido para o arquivo de dados                                                                                                                                                                                                                                                              |
| Debug log file                    | 12    | Log file created by the `SET DATABASE PARAMETER(Debug log recording)` command. Armazenado na pasta Logs.                                                                                                                                                                                                                                                                                                                                                                                                 |
| Diagnostic log file               | 11    | Log file created by the `SET DATABASE PARAMETER(Diagnostic log recording)` command. Armazenado na pasta Logs.                                                                                                                                                                                                                                                                                                                                                                                            |
| Directory file                    | 16    | directório.json, contendo a descrição dos usuários e grupos (se houver) para a aplicação do projecto. Pode ser localizado ou na pasta de configurações do usuário (por padrão, global ao projecto), ou na pasta de definições de dados (específica a um arquivo de dados).                                                                                                                                                      |
| HTTP Client log file              | 24    | Log file created by the `HTTP SET OPTION(HTTP client log)` command. Armazenado na pasta Logs.                                                                                                                                                                                                                                                                                                                                                                                                            |
| HTTP debug log file               | 9     | Log file created by the `WEB SET OPTION(Web debug log)` command. Armazenado na pasta Logs.                                                                                                                                                                                                                                                                                                                                                                                                               |
| HTTP log file                     | 8     | Log file created by the `WEB SET OPTION(Web log recording)` command. Armazenado na pasta Logs.                                                                                                                                                                                                                                                                                                                                                                                                           |
| IMAP Log file                     | 23    | Log file created by the `SET DATABASE PARAMETER(IMAP Log)` command. Armazenado na pasta Logs.                                                                                                                                                                                                                                                                                                                                                                                                            |
| Last backup file                  | 2     | Last backup file, named `\<applicationName>[bkpNum].4BK`, stored at a custom location.                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Last journal integration log file | 22    | Nome completo do último arquivo de registo de integração do diário (armazenado na pasta Logs da aplicação restaurada), se existir. Este arquivo é criado, em modo de auto-reparação, assim que ocorrer a integração de um arquivo de registo                                                                                                                                                                                                                                                          |
| Repair log file                   | 7     | Arquivo de registo das reparações da base de dados efetuadas na base de dados no Centro de Manutenção e Segurança (MSC). Armazenado na pasta Logs.                                                                                                                                                                                                                                                                                                                                    |
| Request log file                  | 10    | Standard client/server request log file (excluding Web requests) created by the `SET DATABASE PARAMETER(4D Server log recording)` or `SET DATABASE PARAMETER(Client log recording)` commands. Se executado no servidor, o ficheiro de registo do servidor é devolvido (armazenado na pasta Logs do servidor). Se executado no cliente, o arquivo de registo do cliente é devolvido (armazenado na pasta local Logs do cliente). |
| SMTP log file                     | 15    | Log file created by the `SET DATABASE PARAMETER(SMTP Log)` command. Armazenado na pasta Logs.                                                                                                                                                                                                                                                                                                                                                                                                            |
| User settings file                | 3     | settings.4DSettings arquivo para todos os arquivos de dados, guardados na pasta Preferências ao lado do arquivo de estrutura, se ativado.                                                                                                                                                                                                                                                                                                                                                                |
| User settings file for data       | 4     | arquivo settings.4DSettings para dados atual, guardado na pasta Preferências ao lado do arquivo de dados.                                                                                                                                                                                                                                                                                                                                                                                                |
| Verification log file             | 5     | Log files created by the `VERIFY CURRENT DATA FILE` and `VERIFY DATA FILE` commands or the Maintenance and Security Center (MSC). Armazenado na pasta Logs.                                                                                                                                                                                                                                                                                                                           |

If the target *fileConstant* does not exist, a null object is returned. Não se levantam erros.

If the command is called from a component, pass the optional `*` parameter to get the path of the host database. Otherwise, if you omit the `*` parameter, a null object is always returned.

## 4D. File.new()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!-- REF #4D.File.new().Syntax -->

**4D.File.new** ( *path* : Text { ; *pathType* : Integer } ) : 4D.File<br/>**4D.File.new** ( *fileConstant* : Integer ) : 4D.File<!-- END REF -->

#### Descrição

The `4D.File.new()` function <!-- REF #4D.File.new().Summary -->creates and returns a new object of the `4D.File` type<!-- END REF -->. It is identical to the [`File`](#file) command (shortcut).

> It is recommended to use the [`File`](#file) shortcut command instead of `4D.File.new()`.

<!-- INCLUDE document.copyTo().Desc -->

<!-- REF file.create().Desc -->

## .create()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!--REF file.create().Note -->

**Not available for ZIP archives**<!-- END REF -->

<!--REF #FileClass.create().Syntax -->**.create()** : Boolean <!-- END REF -->

<!--REF #FileClass.create().Params -->

| Parâmetro  | Tipo       |    | Descrição                                                      |
| ---------- | ---------- | -- | -------------------------------------------------------------- |
| Resultados | Parâmetros | <- | True se o arquivo foi criado com sucesso, false caso contrário |

<!-- END REF -->

#### Descrição

The `.create()` function <!-- REF #FileClass.create().Summary -->creates a file on disk according to the properties of the `File` object<!-- END REF -->.

If necessary, the function creates the folder hierachy as described in the [platformPath](#platformpath) or [path](#path) properties. Se o arquivo já existir no disco, a função não faz nada (não é atirado nenhum erro) e retorna falso.

**Valor retornado**

- **True** if the file is created successfully;
- **False** if a file with the same name already exists or if an error occured.

#### Exemplo

Criação de um arquivo de preferências na pasta da base de dados:

```4d
 var $created : Boolean
 $created:=File("/PACKAGE/SpecialPrefs/"+Current user+".myPrefs").create()
```

<!-- END REF -->

<!-- REF file.createAlias().Desc -->

## .createAlias()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!--REF #FileClass.createAlias().Syntax -->**.createAlias**( *destinationFolder* : 4D.Folder ; *aliasName* : Text { ; *aliasType* : Integer } ) : 4D.File<!-- END REF -->

<!--REF #FileClass.createAlias().Params -->

| Parâmetro         | Tipo                       |    | Descrição                                     |
| ----------------- | -------------------------- | -- | --------------------------------------------- |
| destinationFolder | 4D. Folder | -> | Pasta de destino para o pseudónimo ou atalho  |
| aliasName         | Text                       | -> | Nome do pseudónimo ou atalho                  |
| aliasType         | Integer                    | -> | Tipo de ligação do pseudónimo                 |
| Resultados        | 4D. File   | <- | Referência a pseudónimo ou ficheiro de atalho |

<!-- END REF -->

#### Descrição

The `.createAlias()` function <!-- REF #FileClass.createAlias().Summary -->creates an alias (macOS) or a shortcut (Windows)<!-- END REF --> to the file with the specified *aliasName* name in the folder designated by the *destinationFolder* object.

Pass the name of the alias or shortcut to create in the *aliasName* parameter.

Por padrão em macOS, a função cria um pseudónimo padrão. You can also create a symbolic link by using the *aliasType* parameter. Estão disponíveis as seguintes constantes:

| Parâmetros         | Valor | Comentário                                      |
| ------------------ | ----- | ----------------------------------------------- |
| `fk alias link`    | 0     | Alias link (padrão)          |
| `fk symbolic link` | 1     | Link simbólico (só em macOS) |

On Windows, a shortcut (.lnk file) is always created (the *aliasType* parameter is ignored).

**Returned object**

A `4D.File` object with the `isAlias` property set to **true**.

#### Exemplo

Se quiser criar um alias para um arquivo na sua pasta database:

```4d
 $myFile:=Folder(fk documents folder).file("Archives/ReadMe.txt")
 $aliasFile:=$myFile.createAlias(File("/PACKAGE");"ReadMe")
```

<!-- END REF -->

<!-- INCLUDE document.creationDate.Desc -->

<!-- INCLUDE document.creationTime.Desc -->

<!-- REF file.delete().Desc -->

## .delete()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!--REF #FileClass.delete().Syntax -->**.delete**()<!-- END REF -->

<!-- REF #FileClass.delete().Params -->

| Parâmetro | Tipo |     | Descrição                  |
| --------- | ---- | :-: | -------------------------- |
|           |      |     | Não exige nenhum parâmetro |

<!-- END REF -->

#### Descrição

The `.delete()` function <!-- REF #FileClass.delete().Summary -->deletes the file<!-- END REF -->.

Se o arquivo não existir no disco, a função não faz nada (não é gerado nenhum erro).

Se o ficheiro estiver atualmente aberto, o resultado depende do sistema operativo:

- no Windows, é gerado um erro,
- no macOS, não é gerado qualquer erro e o ficheiro é eliminado.

:::caution

`.delete()` can delete any file on a disk. Isto inclui documentos criados com outras aplicações, bem como as próprias aplicações. `.delete()` should be used with extreme caution. A eliminação de um arquivo é uma operação permanente e não pode ser desfeita.

:::

#### Exemplo

Se quiser apagar um ficheiro específico na pasta da base de dados:

```4d
 $tempo:=File("/PACKAGE/SpecialPrefs/"+Current user+".prefs")
 If($tempo.exists)
    $tempo.delete()
    ALERT("User preference file deleted.")
 End if
```

<!-- END REF -->

<!-- INCLUDE document.exists.Desc -->

<!-- INCLUDE document.extension.Desc -->

<!-- INCLUDE document.fullName.Desc -->

<!-- REF file.getAppInfo().Desc -->

## .getAppInfo()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19      | Adicionado |

</details>

<!--REF #FileClass.getAppInfo().Syntax -->**.getAppInfo**() : Object<!-- END REF -->

<!--REF #FileClass.getAppInfo().Params -->

| Parâmetro  | Tipo   |    | Descrição                                                                                                 |
| ---------- | ------ | -- | --------------------------------------------------------------------------------------------------------- |
| Resultados | Object | <- | Conteúdo do arquivo de versão recurso .exe/.dll ou .plist |

<!-- END REF -->

#### Descrição

The `.getAppInfo()` function <!-- REF #FileClass.getAppInfo().Summary -->returns the contents of a **.exe**, **.dll** or **.plist** file information as an object<!-- END REF -->.

A função deve ser utilizada com um arquivo .exe, .dll ou .plist existente. Se o arquivo não existir no disco ou não for um ficheiro .exe, .dll ou .plist válido, a função devolve um objecto vazio (não é gerado nenhum erro).

> A função apenas é compatível com arquivos .plist em formato xml (baseado em texto). Um erro é retornado se usado com um arquivo .plist em formato binário.

**Objeto devolvido com um arquivo .exe ou .dll**

> A leitura de um .exe ou .dll só é possível no Windows.

Todos os valores de propriedades são Texto.

| Propriedade      | Tipo |
| ---------------- | ---- |
| InternalName     | Text |
| ProductName      | Text |
| CompanyName      | Text |
| LegalCopyright   | Text |
| ProductVersion   | Text |
| FileDescription  | Text |
| FileVersion      | Text |
| OriginalFilename | Text |

**Objeto devolvido com um arquivo .split**

O conteúdo xml do arquivo é analisado e as chaves são devolvidas como propriedades do objeto, preservando os seus tipos (texto, booleano, número). `.plist dict` is returned as a JSON object and `.plist array` is returned as a JSON array.

#### Exemplo

```4d
 // display copyright info of application .exe file (windows)
var $exeFile : 4D.File
var $info : Object
$exeFile:=File(Application file; fk platform path)
$info:=$exeFile.getAppInfo()
ALERT($info.LegalCopyright)

  // display copyright info of an info.plist (any platform)
var $infoPlistFile : 4D.File
var $info : Object
$infoPlistFile:=File("/RESOURCES/info.plist")
$info:=$infoPlistFile.getAppInfo()
ALERT($info.Copyright)
```

#### Veja também

[.setAppInfo()](#setappinfo)

<!-- END REF -->

<!-- INCLUDE document.getContent().Desc -->

<!-- INCLUDE document.getIcon().Desc -->

<!-- INCLUDE document.getText().Desc -->

<!-- INCLUDE document.hidden.Desc -->

<!-- INCLUDE document.isAlias.Desc -->

<!-- INCLUDE document.isFile.Desc -->

<!-- INCLUDE document.isFolder.Desc -->

<!-- INCLUDE document.isWritable.Desc -->

<!-- INCLUDE document.modificationDate.Desc -->

<!-- INCLUDE document.modificationTime.Desc -->

<!-- REF file.moveTo().Desc -->

## .moveTo()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!--REF #FileClass.moveTo().Syntax -->**.moveTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } ) : 4D.File<!-- END REF -->

<!--REF #FileClass.moveTo().Params -->

| Parâmetro         | Tipo                       |    | Descrição                        |
| ----------------- | -------------------------- | -- | -------------------------------- |
| destinationFolder | 4D. Folder | -> | Pasta de destino                 |
| newName           | Text                       | -> | Nome completo do ficheiro movido |
| Resultados        | 4D. File   | <- | Arquivo movido                   |

<!-- END REF -->

#### Descrição

The `.moveTo()` function <!-- REF #FileClass.moveTo().Summary -->moves or renames the `File` object into the specified *destinationFolder*<!-- END REF -->.

The *destinationFolder* must exist on disk, otherwise an error is generated.

Por padrão, o arquivo mantém o seu nome quando é movido. If you want to rename the moved file, pass the new full name in the *newName* parameter. O novo nome deve cumprir com as regras de nomenclatura (por exemplo, não deve conter caracteres como ":", "/", etc.), do contrário se devolve um erro.

**Returned object**

The moved `File` object.

#### Exemplo

```4d
$DocFolder:=Folder(fk documents folder)
$myFile:=$DocFolder.file("Current/Infos.txt")
$myFile.moveTo($DocFolder.folder("Archives");"Infos_old.txt")
```

<!-- END REF -->

<!-- INCLUDE document.name.Desc -->

<!-- REF file.open().Desc -->

## .open()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!--REF #FileClass.open().Syntax -->**.open**( { *mode* : Text } ) : 4D.FileHandle<br/>**.open**( { *options* : Object } ) : 4D.FileHandle<!-- END REF -->

<!--REF #FileClass.open().Params -->

| Parâmetro  | Tipo                                             |    | Descrição                                                   |
| ---------- | ------------------------------------------------ | -- | ----------------------------------------------------------- |
| mode       | Text                                             | -> | Modo de abertura: "read", "write", "append" |
| options    | Object                                           | -> | Opções de abertura                                          |
| Resultados | [4D.FileHandle](FileHandleClass) | <- | Novo objeto File handle                                     |

<!-- END REF -->

#### Descrição

The `.open()` function <!-- REF #FileClass.open().Summary -->creates and returns a new [4D.FileHandle](FileHandleClass) object on the file, in the specified *mode* or with the specified *options*<!-- END REF -->. You can use functions and properties of the [4D.FileHandle](FileHandleClass) class to write, read, or append contents to the file.

If you use the *mode* (text) parameter, pass the opening mode for the file handle:

| *mode*   | Descrição                                                                                                                                                                                                                                                                                         |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "read"   | (Padrão) Cria um file handle para ler os valores do arquivo. Se o arquivo não existir em disco, um erro é retornado. Pode abrir quantos file handles quiser em modo "ler" no mesmo objeto File.                                |
| "write"  | Cria um file handle para escrever os valores no arquivo (começando no início do conteúdo do arquivo). Se o arquivo não existir em disco, é criado. Só se pode abrir um único file handle em modo "write" no mesmo objeto File. |
| "append" | Cria um file handle para escrever os valores no arquivo (começando no fim do conteúdo do arquivo). Se o arquivo não existir em disco, é criado. Só se pode abrir um único file handle em modo "append" no mesmo objeto File.   |

> The *mode* value is case sensitive.

If you use the *options* (object) parameter, you can pass more options for the file handle through the following properties (these properties can be read afterwards from the opened [file handle object](FileHandleClass)):

| *opções*          | Tipo           | Descrição                                                                                                                                                                     | Por padrão    |
| ----------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `.mode`           | Text           | Opening mode (see *mode* above)                                                                                                                            | "read"        |
| `.charset`        | Text           | Conjunto de carateres utilizado para ler ou escrever no ficheiro. Utilizar o nome padrão do conjunto (por exemplo "ISO-8859-1" ou "UTF-8") | "UTF-8"       |
| `.breakModeRead`  | Text ou Number | Modo de tratamento das quebras de linha utilizadas na leitura do arquivo (veja abaixo)                                                                     | "native" ou 1 |
| `.breakModeWrite` | Text ou Number | Modo de processamento das quebras de linha utilizadas ao escrever no ficheiro (ver abaixo)                                                                 | "native" ou 1 |

A função substitui todos os delimitadores de fim de linha originais. Por defeito, é utilizado o delimitador nativo, mas é possível definir outro delimitador. The `.breakModeRead` and `.breakModeWrite` indicate the processing to apply to end-of-line characters in the document. Pode utilizar um dos seguintes valores (texto ou número):

| Modo de interrupção no texto | Break mode em numérico (constante) | Descrição                                                                                                                                                                                                                                             |
| ---------------------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "native"                     | 1 (`Document with native format`)  | (Padrão) As quebras de linha são convertidas para o formato nativo do sistema operativo: LF (avanço de linha) no macOS, CRLF (retorno de carro + avanço de linha) no Windows |
| "crlf"                       | 2 (`Document with CRLF`)           | As quebras de linha são convertidas em CRLF (retorno de carro + avanço de linha), o formato predefinido do Windows                                                                                                                 |
| "cr"                         | 3 (`Document with CR`)             | As quebras de linha são convertidas em CR (carriage return), o formato padrão do Mac OS                                                                                                                                            |
| "lf"                         | 4 (`Document with LF`)             | As quebras de linha são convertidas para LF (line feed), o formato padrão Unix e macOS                                                                                                                                             |

> The *break mode as text* value is case sensitive.

#### Exemplo

Pretende criar um file handle para a leitura do ficheiro "ReadMe.txt":

```4d
var $f : 4D.File
var $fhandle : 4D.FileHandle

$f:=File("C:\\Documents\\Archives\\ReadMe.txt";fk platform path)
$fhandle:=$f.open("read")

```

<!-- END REF -->

<!-- INCLUDE document.original.Desc -->

<!-- INCLUDE document.parent.Desc -->

<!-- INCLUDE document.path.Desc -->

<!-- INCLUDE document.platformPath.Desc -->

<!-- REF file.rename().Desc -->

## .rename()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!--REF #FileClass.rename().Syntax -->**.rename**( *newName* : Text ) : 4D.File<!-- END REF -->

<!--REF #FileClass.rename().Params -->

| Parâmetro  | Tipo                     |    | Descrição                          |
| ---------- | ------------------------ | -- | ---------------------------------- |
| newName    | Text                     | -> | Novo nome completo para o ficheiro |
| Resultados | 4D. File | <- | Ficheiro renomeado                 |

<!-- END REF -->

#### Descrição

The `.rename()` function <!-- REF #FileClass.rename().Summary -->renames the file with the name you passed in *newName* and returns the renamed `File` object<!-- END REF -->.

The *newName* parameter must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned. Se já existir um ficheiro com o mesmo nome, é devolvido um erro.

Note that the function modifies the full name of the file, i.e. if you do not pass an extension in *newName*, the file will have a name without an extension.

**Objeto devolvido**

The renamed `File` object.

#### Exemplo

Se quiser renomear "ReadMe.txt" em "ReadMe_new.txt":

```4d
 $toRename:=File("C:\\Documents\\Archives\\ReadMe.txt";fk platform path)
 $newName:=$toRename.rename($toRename.name+"_new"+$toRename.extension)
```

<!-- END REF -->

<!-- REF file.setAppInfo().Desc -->

## .setAppInfo()

<details><summary>História</summary>

| Release | Mudanças           |
| ------- | ------------------ |
| 20      | Suporte de WinIcon |
| 19      | Adicionado         |

</details>

<!--REF #FileClass.setAppInfo().Syntax -->**.setAppInfo**( *info* : Object )<!-- END REF -->

<!--REF #FileClass.setAppInfo().Params -->

| Parâmetro | Tipo   |    | Descrição                                                                                                                             |
| --------- | ------ | -- | ------------------------------------------------------------------------------------------------------------------------------------- |
| info      | Object | -> | Propriedades para escrever no arquivo .plist ou o recurso versão do arquivo .exe/.dll |

<!-- END REF -->

#### Descrição

The `.setAppInfo()` function <!-- REF #FileClass.setAppInfo().Summary -->writes the *info* properties as information contents of a **.exe**, **.dll** or **.plist** file<!-- END REF -->.

A função deve ser utilizada com um arquivo .exe, .dll ou .plist existente. Se o ficheiro não existir no disco ou não for um ficheiro .exe, .dll ou .plist válido, a função não faz nada (não é gerado qualquer erro).

> A função apenas é compatível com arquivos .plist em formato xml (baseado em texto). Um erro é retornado se usado com um arquivo .plist em formato binário.

***info* parameter object with a .exe or .dll file**

> A escrita de um arquivo .exe ou .dll só é possível no Windows.

Each valid property set in the *info* object parameter is written in the version resource of the .exe or .dll file. As propriedades disponíveis são (qualquer outra propriedade será ignorada):

| Propriedade      | Tipo | Comentário                                                                                                                                                |
| ---------------- | ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| InternalName     | Text |                                                                                                                                                           |
| ProductName      | Text |                                                                                                                                                           |
| CompanyName      | Text |                                                                                                                                                           |
| LegalCopyright   | Text |                                                                                                                                                           |
| ProductVersion   | Text |                                                                                                                                                           |
| FileDescription  | Text |                                                                                                                                                           |
| FileVersion      | Text |                                                                                                                                                           |
| OriginalFilename | Text |                                                                                                                                                           |
| WinIcon          | Text | Caminho Posix do ficheiro .ico. Esta propriedade aplica-se apenas a ficheiros executáveis gerados por 4D. |

For all properties except `WinIcon`, if you pass a null or empty text as value, an empty string is written in the property. Se passar um tipo de valor diferente de texto, este é transformado em string.

For the `WinIcon` property, if the icon file does not exist or has an incorrect format, an error is generated.

***info* parameter object with a .plist file**

Each valid property set in the *info* object parameter is written in the .plist file as a key. Qualquer nome chave é aceito. Os tipos de valores são preservados sempre que possível.

If a key set in the *info* parameter is already defined in the .plist file, its value is updated while keeping its original type. Outras chaves existentes no arquivo .plist são deixadas intocadas.

> Para definir um valor de tipo de data, o formato a utilizar é uma string de carimbo temporal json formada em ISO UTC sem milissegundos ("2003-02-01T01:02:03Z") como no editor plist de Xcode.

#### Exemplo

```4d
  // set copyright and version of a .exe file (Windows)
var $exeFile : 4D. File
var $info : Object
$exeFile:=File(Application file; fk platform path)
$info:=New object
$info. LegalCopyright:="Copyright 4D 2021"
$info. ProductVersion:="1.0.0"
$exeFile.setAppInfo($info)
```

```4d
  // set some keys in an info.plist file (all platforms)
var $infoPlistFile : 4D. File
var $info : Object
$infoPlistFile:=File("/RESOURCES/info.plist")
$info:=New object
$info. Copyright:="Copyright 4D 2021" //text
$info. ProductVersion:=12 //integer
$info. ShipmentDate:="2021-04-22T06:00:00Z" //timestamp
$infoPlistFile.setAppInfo($info)
```

#### Veja também

[.getAppInfo()](#getappinfo)

<!-- REF file.setContent().Desc -->

## .setContent()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!--REF #FileClass.setContent().Syntax -->**.setContent** ( *content* : Blob ) <!-- END REF -->

<!--REF #FileClass.setContent().Params -->

| Parâmetro | Tipo |    | Descrição                      |
| --------- | ---- | -- | ------------------------------ |
| content   | BLOB | -> | Novos conteúdos para o arquivo |

<!-- END REF -->

#### Descrição

The `.setContent( )` function <!-- REF #FileClass.setContent().Summary -->rewrites the entire content of the file using the data stored in the *content* BLOB<!-- END REF -->. For information on BLOBs, please refer to the [BLOB](Concepts/dt_blob.md) section.

#### Exemplo

```4d
 $myFile:=Folder(fk documents folder).file("Archives/data.txt")
 $myFile.setContent([aTable]aBlobField)
```

<!-- END REF -->

<!-- REF file.setText().Desc -->

## .setText()

<details><summary>História</summary>

| Release | Mudanças                                                                                      |
| ------- | --------------------------------------------------------------------------------------------- |
| 19 R3   | Padrão para novos projectos: sem BOM e (macOS) LF para EOL |
| 17 R5   | Adicionado                                                                                    |

</details>

<!--REF #FileClass.setText().Syntax -->**.setText** ( *text* : Text {; *charSetName* : Text { ; *breakMode* : Integer } } )<br/>**.setText** ( *text* : Text {; *charSetNum* : Integer { ; *breakMode* : Integer } } )<!-- END REF -->

<!--REF #FileClass.setText().Params -->

| Parâmetro   | Tipo    |    | Descrição                                   |
| ----------- | ------- | -- | ------------------------------------------- |
| text        | Text    | -> | Texto a armazenar no arquivo                |
| charSetName | Text    | -> | Nome do conjunto de caracteres              |
| charSetNum  | Integer | -> | Número de conjuntos de caracteres           |
| breakMode   | Integer | -> | Modo de processamento para quebras de linha |

<!-- END REF -->

#### Descrição

The `.setText()` function <!-- REF #FileClass.setText().Summary -->writes *text* as the new contents of the file<!-- END REF -->.

If the file referenced in the `File` object does not exist on the disk, it is created by the function. Quando o ficheiro já existir no disco, o seu conteúdo anterior é apagado, exceto se já estiver aberto, caso em que o seu conteúdo é bloqueado e é gerado um erro.

In *text*, pass the text to write to the file. Pode ser um texto literal ("my text"), ou um campo/variável texto 4D.

Opcionalmente, pode designar o conjunto de caracteres a utilizar para escrever o conteúdo. Você pode passar também:

- in *charSetName*, a string containing the standard set name (for example "ISO-8859-1" or "UTF-8"),
- or in *charSetNum*, the MIBEnum ID (number) of the standard set name.

> For the list of character sets supported by 4D, refer to the description of the `CONVERT FROM TEXT` command.

Se uma marca de ordem de byte (BOM) existe para o conjunto de caracteres, 4D a insere no ficheiro a menos que o conjunto de caracteres usado contenha o sufixo "-no-bom" (por exemplo, "UTF-8-no-bom"). Se não especificar um conjunto de caracteres, por defeito 4D usa o conjunto de caracteres "UTF-8" sem BOM.

In *breakMode*, you can pass a number indicating the processing to apply to end-of-line characters before saving them in the file. The following constants, found in the **System Documents** theme, are available:

| Parâmetros                    | Valor | Comentário                                                                                                                                                                                                                                            |
| ----------------------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Document unchanged`          | 0     | Não processado                                                                                                                                                                                                                                        |
| `Document with native format` | 1     | (Padrão) As quebras de linha são convertidas para o formato nativo do sistema operativo: LF (avanço de linha) no macOS, CRLF (retorno de carro + avanço de linha) no Windows |
| `Documento com CRLF`          | 2     | As quebras de linha são convertidas em CRLF (retorno de carro + avanço de linha), o formato predefinido do Windows                                                                                                                 |
| `Documento com CR`            | 3     | As quebras de linha são convertidas em CR (carriage return), o formato padrão do Mac OS                                                                                                                                            |
| `Documento com LF`            | 4     | As quebras de linha são convertidas para LF (line feed), o formato padrão Unix e macOS                                                                                                                                             |

By default, when you omit the *breakMode* parameter, line breaks are processed in native mode (1).

> **Compatibility Note**: Compatibility options are available for EOL and BOM management. See [Compatibility page](https://doc.4d.com/4dv19R/help/title/en/page3239.html) on doc.4d.com.

#### Exemplo

```4d
$myFile:=File("C:\\Documents\\Hello.txt";fk platform path)
$myFile.setText("Hello world")
```

<!-- END REF -->

<!-- INCLUDE document.size.Desc -->
