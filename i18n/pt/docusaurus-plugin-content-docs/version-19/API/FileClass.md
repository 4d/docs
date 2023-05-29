---
id: FileClass
title: File
---

`Os objectos do ficheiro` são criados com o comando [`Arquivo`](#file) . Contêm referências a ficheiros de disco que podem ou não existir efectivamente no disco. Por exemplo, quando executa o comando `File` para criar um novo ficheiro, é criado um objecto válido `File` mas nada é realmente armazenado no disco até chamar a função [`file.create( )`](#create) .

### Exemplo

O exemplo seguinte cria um arquivo de preferências na pasta do projecto:

```code4d
var $created : Boolean
$created:=File("/PACKAGE/SpecialPrefs/"+Current user+".myPrefs").create()
```

### Pathnames

`Os objectos` suportam vários pathnames, incluindo `filesystems` ou `posix` syntax. Os pathnames suportados são detalhados na página [**Pathnames**](../Concepts/paths.md) .


### Objeto File

|                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #document.copyTo().Syntax -->](#copyto)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.copyTo().Summary -->|
| [<!-- INCLUDE #FileClass.create().Syntax -->](#create)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.create().Summary -->|
| [<!-- INCLUDE #FileClass.createAlias().Syntax -->](#createalias)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.createAlias().Summary -->|
| [<!-- INCLUDE #document.creationDate.Syntax -->](#creationdate)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.creationDate.Summary -->|
| [<!-- INCLUDE #document.creationTime.Syntax -->](#creationtime)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.creationTime.Summary -->|
| [<!-- INCLUDE #FileClass.delete().Syntax -->](#delete)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.delete().Summary -->|
| [<!-- INCLUDE #document.exists.Syntax -->](#exists)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.exists.Summary -->|
| [<!-- INCLUDE #document.extension.Syntax -->](#extension)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.extension.Summary -->|
| [<!-- INCLUDE #document.fullName.Syntax -->](#fullname)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.fullName.Summary -->|
| [<!-- INCLUDE #FileClass.getAppInfo().Syntax -->](#getappinfo)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.getAppInfo().Summary -->|
| [<!-- INCLUDE #document.getContent().Syntax -->](#getcontent)<!-- INCLUDE #document.getContent().Summary -->|
| [<!-- INCLUDE #document.getIcon().Syntax -->](#geticon)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.getIcon().Summary -->|
| [<!-- INCLUDE #document.getText().Syntax -->](#gettext)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.getText().Summary -->|
| [<!-- INCLUDE #document.hidden.Syntax -->](#hidden)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.hidden.Summary -->|
| [<!-- INCLUDE #document.isAlias.Syntax -->](#isalias)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.isAlias.Summary -->|
| [<!-- INCLUDE #document.isFile.Syntax -->](#isfile)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.isFile.Summary -->|
| [<!-- INCLUDE #document.isFolder.Syntax -->](#isfolder)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.isFolder.Summary -->|
| [<!-- INCLUDE #document.isWritable.Syntax -->](#iswritable)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.isWritable.Summary -->|
| [<!-- INCLUDE #document.modificationDate.Syntax -->](#modificationdate)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.modificationDate.Summary -->|
| [<!-- INCLUDE #document.modificationTime.Syntax -->](#modificationtime)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.modificationTime.Summary -->|
| [<!-- INCLUDE #FileClass.moveTo().Syntax -->](#moveto)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.moveTo().Summary -->|
| [<!-- INCLUDE #document.name.Syntax -->](#name)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.name.Summary -->|
| [<!-- INCLUDE #document.original.Syntax -->](#original)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.original.Summary -->|
| [<!-- INCLUDE #document.parent.Syntax -->](#parent)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.parent.Summary -->|
| [<!-- INCLUDE #document.path.Syntax -->](#path)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.path.Summary -->|
| [<!-- INCLUDE #document.platformPath.Syntax -->](#platformpath)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.platformPath.Summary -->|
| [<!-- INCLUDE #FileClass.rename().Syntax -->](#rename)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.rename().Summary -->|
| [<!-- INCLUDE #FileClass.setAppInfo().Syntax -->](#setappinfo)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.setAppInfo().Summary -->|
| [<!-- INCLUDE #FileClass.setContent().Syntax -->](#setcontent)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.setContent().Summary -->|
| [<!-- INCLUDE #FileClass.setText().Syntax -->](#settext)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.setText().Summary -->|
| [<!-- INCLUDE #document.size.Syntax -->](#size)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.size.Summary -->|

## File

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |

</details>

<!-- REF #_command_.File.Syntax -->|<!-- END REF -->


<!-- REF #_command_.File.Params -->
| Parâmetro    | Tipo     |    | Descrição                                           |
| ------------ | -------- |:--:| --------------------------------------------------- |
| path         | Text     | -> | Rota do arquivo                                     |
| fileConstant | Integer  | -> | Constante de arquivo 4D                             |
| pathType     | Integer  | -> | `fk posix path` (por defeito) ou `fk platform path` |
| *            |          | -> | * para devolver o arquivo da base de dados anfitriã |
| Resultados   | 4D. File | <- | Novo objeto arquivo|<!-- END REF -->

|

#### Descrição

O comando `File` <!-- REF #_command_.File.Summary -->cria e devolve um novo objecto do tipo `4D.File`<!-- END REF -->. O comando aceita duas sintaxes:

**File ( path { ; pathType } { ; * })**

No parâmetro *path* , passe um file path string. Pode utilizar uma string personalizada ou um sistema de ficheiros (por exemplo, "/DATA/myfile.txt").

> Apenas são compatíveis os nomes de caminho absolutos com o comando `File` .

Como padrão, 4D espera um caminho expresso com a sintaxe POSIX. Se trabalhar com pathnames de plataforma (Windows ou macOS), deve declará-lo usando o parâmetro *pathType* . Estão disponíveis as seguintes constantes:

| Parâmetros       | Valor | Comentário                                                                                               |
| ---------------- | ----- | -------------------------------------------------------------------------------------------------------- |
| fk platform path | 1     | Caminho expresso com uma sintaxe específica da plataforma (obrigatória em caso de caminho de plataforma) |
| fk posix path    | 0     | Caminho expresso com a sintaxe POSIX (por padrão)                                                        |

**File ( fileConstant { ; * } )**

No parâmetro *fileConstant* , passe um ficheiro 4D incorporado ou de sistema, utilizando uma das constantes seguintes:

| Parâmetros                        | Valor | Comentário                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --------------------------------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Backup history file               | 19    | Arquivo de histórico de cópias de segurança (ver Arquivos de configuração e rastreio). Armazenado na pasta de destino de cópia de segurança.                                                                                                                                                                                                                                                                                                  |
| Backup log file                   | 13    | Arquivo atual do diário de backup. Armazenado na pasta Logs da aplicação.                                                                                                                                                                                                                                                                                                                                                                     |
| Backup settings file              | 1     | Arquivo padrão backup.4DSettings (formato xml), armazenado na pasta Settings do projecto                                                                                                                                                                                                                                                                                                                                                      |
| Backup settings file for data     | 17    | backup.4DSettings file (formato xml) para o arquivo de dados, armazenado na pasta Settings da pasta de dados                                                                                                                                                                                                                                                                                                                                  |
| Build application log file        | 14    | Arquivo de registo atual em formato xml do construtor da aplicação. Armazenado na pasta Logs.                                                                                                                                                                                                                                                                                                                                                 |
| Build application settings file   | 20    | Arquivo de configurações padrão do construtor da aplicação ("buildApp.4DSettings"). Armazenado na pasta Settings do projecto.                                                                                                                                                                                                                                                                                                                 |
| Compacting log file               | 6     | Arquivo de registo da mais recente compactação feita com o comando Compact data file ou o centro de Manutenção e segurança. Armazenado na pasta Logs.                                                                                                                                                                                                                                                                                         |
| Current backup settings file      | 18    | arquivo backup.4DSettings utilizado actualmente pela aplicação. Pode ser o arquivo de definições de backup (predefinido) ou um arquivo personalizado de definições de backup do usuário definido para o arquivo de dados                                                                                                                                                                                                                      |
| Debug log file                    | 12    | Arquivo de registo criado pelo comando `SET DATABASE PARAMETER(Debug log recording)` . Armazenado na pasta Logs.                                                                                                                                                                                                                                                                                                                              |
| Diagnostic log file               | 11    | Arquivo de registo criado pelo comando `SET DATABASE PARAMETER(Diagnostic log recording)` . Armazenado na pasta Logs.                                                                                                                                                                                                                                                                                                                         |
| Directory file                    | 16    | directório.json, contendo a descrição dos usuários e grupos (se houver) para a aplicação do projecto. Pode ser localizado ou na pasta de configurações do usuário (por padrão, global ao projecto), ou na pasta de definições de dados (específica a um arquivo de dados).                                                                                                                                                                    |
| HTTP debug log file               | 9     | Arquivo de registo criado pelo comando `WEB SET OPTION(Web debug log)` . Armazenado na pasta Logs.                                                                                                                                                                                                                                                                                                                                            |
| HTTP log file                     | 8     | Arquivo de registo criado pelo comando `WEB SET OPTION(Web log recording)` . Armazenado na pasta Logs.                                                                                                                                                                                                                                                                                                                                        |
| IMAP Log file                     | 23    | Arquivo de registo criado pelo comando `SET DATABASE PARAMETER(IMAP Log)` . Armazenado na pasta Logs.                                                                                                                                                                                                                                                                                                                                         |
| Last backup file                  | 2     | Último arrquivo de cópia de segurança, denominado `\<applicationName>[bkpNum].4BK`, armazenado num local personalizado.                                                                                                                                                                                                                                                                                                                |
| Last journal integration log file | 22    | Nome completo do último arquivo de registo de integração do diário (armazenado na pasta Logs da aplicação restaurada), se existir. Este arquivo é criado, em modo de auto-reparação, assim que ocorrer a integração de um arquivo de registo                                                                                                                                                                                                  |
| Repair log file                   | 7     | Arquivo de registo das reparações da base de dados efetuadas na base de dados no Centro de Manutenção e Segurança (MSC). Armazenado na pasta Logs.                                                                                                                                                                                                                                                                                            |
| Request log file                  | 10    | Arquivo padrão de registo de pedido de cliente/servidor (excluindo pedidos Web) criado pelos comandos `SET DATABASE PARAMETER(4D Server log recording)` ou `SET DATABASE PARAMETER(Client log recording)` . Se executado no servidor, o ficheiro de registo do servidor é devolvido (armazenado na pasta Logs do servidor). Se executado no cliente, o arquivo de registo do cliente é devolvido (armazenado na pasta local Logs do cliente). |
| SMTP log file                     | 15    | Arquivo de registo criado pelo comando `SET DATABASE PARAMETER(SMTP Log)` . Armazenado na pasta Logs.                                                                                                                                                                                                                                                                                                                                         |
| User settings file                | 3     | settings.4DSettings arquivo para todos os arquivos de dados, guardados na pasta Preferências ao lado do arquivo de estrutura, se ativado.                                                                                                                                                                                                                                                                                                     |
| User settings file for data       | 4     | arquivo settings.4DSettings para dados atual, guardado na pasta Preferências ao lado do arquivo de dados.                                                                                                                                                                                                                                                                                                                                     |
| Verification log file             | 5     | Arquivo Log criado pelos comandos `VERIFY CURRENT DATA FILE` e `VERIFY DATA FILE` ou pelo Maintenance and Security Center (MSC). Armazenado na pasta Logs.                                                                                                                                                                                                                                                                                    |

Se o alvo *fileConstant* não existir, um objecto nulo é devolvido. Não se levantam erros.

Se o comando for chamado a partir de um componente, passe o parâmetro opcional `*` para obter o caminho da base de dados anfitriã. Caso contrário, se omitir o parâmetro `*` , um objecto nulo é sempre devolvido.

## 4D. File.new()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v18 R6 | Adicionado |
</details>

<!-- REF #4D.File.new().Syntax -->
**4D. File.new** ( *path* : Text { ; *pathType* : Integer }{ ; * } ) : 4D. File<br/>**4D. File.new** ( *fileConstant* : Integer { ; * } ) : 4D. File<!-- END REF -->

#### Descrição

A função `4D. File.new()` <!-- REF #4D.File.new().Summary -->cria e devolve um novo objecto do tipo `4D.File`<!-- END REF -->. É idêntico ao comando [`File`](#file) (atalho).

> It is recommended to use the [`File`](#file) shortcut command instead of `4D. File.new()`.

<!-- INCLUDE document.copyTo().Desc -->

<!-- REF file.create().Desc -->
## .create()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!--REF file.create().Note -->
**Não disponível para arquivos ZIP**<!-- END REF -->

<!--REF #FileClass.create().Syntax -->**.create()** : Boolean <!-- END REF -->


<!--REF #FileClass.create().Params -->
| Parâmetro  | Tipo       |    | Descrição                                                                                      |
| ---------- | ---------- | -- | ---------------------------------------------------------------------------------------------- |
| Resultados | Parâmetros | <- | Verdadeiro se o arquivo foi criado com sucesso, falso caso contrário<!-- END REF -->

|

#### Descrição

A função `.create()` <!-- REF #FileClass.create().Summary -->cria um arquivo em disco de acordo com as propriedades do objecto `File`<!-- END REF -->.

Se necessário, a função cria a pasta hierachy como descrito na [platformPath](#platformpath) ou [caminho](#path) propriedades. Se o arquivo já existir no disco, a função não faz nada (não é atirado nenhum erro) e retorna falso.

**Valor retornado**

* **Verdadeiro** se o arquivo for criado com sucesso;
* **Falso** se já existir um arquivo com o mesmo nome ou se tiver ocorrido um erro.

#### Exemplo

Criação de um arquivo de preferências na pasta da base de dados:

```4d
 var $created : Boolean
 $created:=File("/PACKAGE/SpecialPrefs/"+Current user+".myPrefs").create()
```
<!-- END REF -->

<!-- REF file.createAlias().Desc -->
## .createAlias()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!--REF #FileClass.createAlias().Syntax -->**.createAlias**( *destinationFolder* : 4D. Folder ; *aliasName* : Text { ; *aliasType* : Integer } ) : 4D. File<!-- END REF -->


<!--REF #FileClass.createAlias().Params -->
| Parâmetro         | Tipo       |    | Descrição                                                                |
| ----------------- | ---------- | -- | ------------------------------------------------------------------------ |
| destinationFolder | 4D. Folder | -> | Pasta de destino para o pseudónimo ou atalho                             |
| aliasName         | Text       | -> | Nome do pseudónimo ou atalho                                             |
| aliasType         | Integer    | -> | Tipo de ligação do pseudónimo                                            |
| Resultados        | 4D. File   | <- | Referência a pseudónimo ou ficheiro de atalho|<!-- END REF -->

|

#### Descrição

A função `.createAlias()` <!-- REF #FileClass.createAlias().Summary -->cria um pseudónimo (macOS) ou um atalho (Windows)<!-- END REF --> para o arquivo com o nome *aliasName* especificado na pasta designada pelo objecto *destinationFolder* .

Passar o nome do pseudónimo ou atalho para criar no parâmetro *aliasName* .

Por padrão em macOS, a função cria um pseudónimo padrão. Também pode criar uma ligação simbólica utilizando o parâmetro *aliasType* . Estão disponíveis as seguintes constantes:

| Parâmetros         | Valor | Comentário                   |
| ------------------ | ----- | ---------------------------- |
| `fk alias link`    | 0     | Alias link (padrão)          |
| `fk symbolic link` | 1     | Link simbólico (só em macOS) |

No Windows, é sempre criado um atalho (arquivo .lnk) (o parâmetro *aliasType* é ignorado).

**Objeto devolvido**

A `4D. File` object with the `isAlias` property set to **true**.

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

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!--REF #FileClass.delete().Syntax -->**.delete( )**<!-- END REF -->


<!-- REF #FileClass.delete().Params -->
| Parâmetro | Tipo |  | Descrição                                             |
| --------- | ---- |  | ----------------------------------------------------- |
|           |      |  | Não exige nenhum parâmetro|<!-- END REF -->

|

#### Descrição

A função `.delete()` <!-- REF #FileClass.delete().Summary -->apaga o arquivo<!-- END REF -->.

Se o arquivo estiver aberto atualmente, um erro é gerado.

Se o arquivo não existir no disco, a função não faz nada (não é gerado nenhum erro).
> **ATENÇÃO**: `.delete( )` pode apagar qualquer arquivo de um disco. Isto inclui documentos criados com outras aplicações, bem como as próprias aplicações. `.delete( )` deve ser utilizado com extrema cautela. A eliminação de um arquivo é uma operação permanente e não pode ser desfeita.

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

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v19    | Adicionado |
</details>

<!--REF #FileClass.getAppInfo().Syntax -->**.getAppInfo**() : Object<!-- END REF -->


<!--REF #FileClass.getAppInfo().Params -->
| Parâmetro  | Tipo   |    | Descrição                                                                            |
| ---------- | ------ | -- | ------------------------------------------------------------------------------------ |
| Resultados | Objeto | <- | Conteúdo do recurso da versão .exe/.dll ou arquivo .plist|<!-- END REF -->

|

#### Descrição

A função `.getAppInfo()` <!-- REF #FileClass.getAppInfo().Summary -->retorna os conteúdos de um arquivo **.exe**, **.dll** ou **.plist** como um objeto.<!-- END REF -->.

A função deve ser utilizada com um arquivo .exe, .dll ou .plist existente. Se o arquivo não existir no disco ou não for um ficheiro .exe, .dll ou .plist válido, a função devolve um objecto vazio (não é gerado nenhum erro).

> A função apenas é compatível com arquivos .plist em formato xml (baseado em texto). Um erro é retornado se usado com um arquivo .plist em formato binário.

**Objeto devolvido com um arquivo .exe ou .dll**

> A leitura de um .exe ou .dll só é possível no Windows.

Todos os valores de propriedade são Texto.

| Propriedade  | Tipo |
| ------------ | ---- |
| InternalName | Text |
| ProductName  | Text |

|CompanyName|Text| |LegalCopyright|Text| |ProductVersion|Text| |FileDescription|Text| |FileVersion|Text| |OriginalFilename|Text|

**Objecto devolvido com um arquivo .plist**

O conteúdo do arquivo xml é analisado e as chaves são devolvidas como propriedades do objeto, preservando os seus tipos (texto, booleano, número). `.plist dict` é devolvido como um objeto JSON e `.plist array` é devolvido como um JSON array.

#### Exemplo

```4d
 // display copyright info of application .exe file (windows)
var $exeFile : 4D. File
var $info : Object
$exeFile:=File(Application file; fk platform path)
$info:=$exeFile.getAppInfo()
ALERT($info. LegalCopyright)

  // display copyright info of an info.plist (any platform)
var $infoPlistFile : 4D. File
var $info : Object
$infoPlistFile:=File("/RESOURCES/info.plist")
$info:=$infoPlistFile.getAppInfo()
ALERT($info.
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

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!--REF #FileClass.moveTo().Syntax -->**.moveTo**( *destinationFolder* : 4D. Folder { ; *newName* : Text } ) : 4D. File<!-- END REF -->

<!--REF #FileClass.moveTo().Params -->
| Parâmetro         | Tipo       |    | Descrição                                 |
| ----------------- | ---------- | -- | ----------------------------------------- |
| destinationFolder | 4D. Folder | -> | Pasta de destino                          |
| newName           | Text       | -> | Nome completo para o arquivo movido       |
| Resultados        | 4D. File   | <- | Arquivo movido|<!-- END REF -->


|


#### Descrição

A função `.moveTo()` <!-- REF #FileClass.moveTo().Summary -->move ou renomeia o arquivo `` para o objeto especificado *destinationFolder*<!-- END REF -->.

A *destinationFolder* deve existir em disco, senão um erro é gerado.

Como padrão, o arquivo mantém o seu nome quando é movido. Se quiser renomear o arquivo movido, passe o novo nome completo no parâmetro *newName* . O novo nome deve cumprir com as regras de nomenclatura (por exemplo, não deve conter caracteres como ":", "/", etc.), do contrário se devolve um erro.

**Objeto devolvido**

O objecto `File` movido.

#### Exemplo

```4d
$DocFolder:=Folder(fk documents folder)
$myFile:=$DocFolder.file("Current/Infos.txt")
$myFile.moveTo($DocFolder.folder("Archives");"Infos_old.txt")
```
<!-- END REF -->

<!-- INCLUDE document.name.Desc -->

<!-- INCLUDE document.original.Desc -->

<!-- INCLUDE document.parent.Desc -->

<!-- INCLUDE document.path.Desc -->

<!-- INCLUDE document.platformPath.Desc -->

<!-- REF file.rename().Desc -->
## .rename()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!--REF #FileClass.rename().Syntax -->|<!-- END REF -->


<!--REF #FileClass.rename().Params -->
| Parâmetro  | Tipo     |    | Descrição                                    |
| ---------- | -------- | -- | -------------------------------------------- |
| newName    | Text     | -> | Novo nome completo para o arquivo            |
| Resultados | 4D. File | <- | Renomeado arquivo|<!-- END REF -->

|

#### Descrição

A função `.rename()` <!-- REF #FileClass.rename().Summary -->renomeia o arquivo com o nome que passou em *newName* e devolve o objecto renomeado `File`<!-- END REF -->.

O parâmetro *newName* deve cumprir as regras de nomeação (por exemplo, não deve conter caracteres como ":", "/", etc.), caso contrário é devolvido um erro. Se já existir um arquivo com o mesmo nome, é devolvido um erro.

Note que a função modifica o nome completo do ficheiro, isto é, se não passar uma extensão em *newName*, o ficheiro terá um nome sem uma extensão.

**Objeto devolvido**

O objecto `File` renomeado.

#### Exemplo

Se quiser renomear "ReadMe.txt" em "ReadMe_new.txt":

```4d
 $toRename:=File("C:\\Documents\\Archives\\ReadMe.txt";fk platform path)
 $newName:=$toRename.rename($toRename.name+"_new"+$toRename.extension)
```
<!-- END REF -->

<!-- REF file.setAppInfo().Desc -->
## .setAppInfo()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v19    | Adicionado |
</details>

<!--REF #FileClass.setAppInfo().Syntax -->**.setAppInfo**( *info* : Object )<!-- END REF -->


<!--REF #FileClass.setAppInfo().Params -->
| Parâmetro | Tipo   |    | Descrição                                                                                              |
| --------- | ------ | -- | ------------------------------------------------------------------------------------------------------ |
| info      | Objeto | -> | Propriedades para escrever no recurso da versão .exe/.dll ou arquivo .plist|<!-- END REF -->

|

#### Descrição

A função `.setAppInfo()` <!-- REF #FileClass.setAppInfo().Summary -->escreve as propriedades *info* como conteúdo informativo de um arquivo **.exe**, **.dll** ou **.plist**<!-- END REF -->.

A função deve ser utilizada com um arquivo .exe, .dll ou .plist existente. A função deve ser utilizada com um arquivo .exe, .dll ou .plist existente.

> A função apenas é compatível com arquivos .plist em formato xml (baseado em texto). Um erro é retornado se usado com um arquivo .plist em formato binário.

***info* objecto de parâmetro com um arquivo .exe ou .dll**

> A escrita de um arquivo .exe ou .dll só é possível no Windows.

Cada propriedade válida definida no parâmetro de objecto *info* está escrita no recurso de versão do arquivo .exe ou .dll. As propriedades disponíveis são (qualquer outra propriedade será ignorada):

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

If you pass a null or empty text as value, an empty string is written in the property. Se passar um tipo de valor diferente do texto, este é transformado em string.

***info* objeto de parâmetro com um arquivo  .plist**

Cada propriedade válida definida no parâmetro do objecto *info* está escrita no arquivo  .plist como uma chave. Qualquer nome chave é aceito. Os tipos de valores são preservados sempre que possível.

Se um conjunto de chaves no parâmetro *info* já estiver definido no arquivo .plist, o seu valor é atualizado, mantendo o seu tipo original. Outras chaves existentes no arquivo .plist são deixadas intocadas.

> Para definir um valor de tipo de data, o formato a utilizar é uma string de carimbo temporal json formada em ISO UTC sem milissegundos ("2003-02-01T01:02:03Z") como no editor plist de Xcode.

#### Exemplo

```4d
  // definir copyright e versão de um arquivo .exe (Windows)
var $exeFile : 4D.File
var $info : Object
$exeFile:=File(Application file; fk platform path)
$info:=New object
$info.LegalCopyright:="Copyright 4D 2021"
$info.ProductVersion:="1.0.0"
$exeFile.setAppInfo($info)
```

```4d
  // definir algumas chaves num ficheiro info.plist (todas as plataformas)
var $infoPlistFile : 4D.File
var $info : Object
$infoPlistFile:=File("/RESOURCES/info.plist")
$info:=New object
$info.Copyright:="Copyright 4D 2021" //texto
$info.ProductVersion:=12 //inteiro
$info.ShipmentDate:="2021-04-22T06:00:00Z" //timestamp
$infoPlistFile.setAppInfo($info)
```

#### Veja também

[.getAppInfo()](#getappinfo)

<!-- REF file.setContent().Desc -->
## .setContent()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!--REF #FileClass.setContent().Syntax -->**.setContent** ( *content* : Blob ) <!-- END REF -->


<!--REF #FileClass.setContent().Params -->
| Parâmetro | Tipo |    | Descrição                                                 |
| --------- | ---- | -- | --------------------------------------------------------- |
| content   | BLOB | -> | Novos conteúdos para o arquivo|<!-- END REF -->


|


#### Descrição

reescreve todo o conteúdo do arquivo utilizando os dados armazenados no conteúdo ** BLOB <!-- REF #FileClass.setContent().Summary -->A função `.setContent()`<!-- END REF -->. Para informações sobre BLOBs, consultar a secção [BLOB](Concepts/dt_blob.md) .

#### Exemplo

```4d
 $myFile:=Folder(fk documents folder).file("Archives/data.txt")
 $myFile.setContent([aTable]aBlobField)
```
<!-- END REF -->

<!-- REF file.setText().Desc -->
## .setText()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!--REF #FileClass.setText().Syntax -->**.setText** ( *text* : Text {; *charSetName* : Text { ; *breakMode* : Integer } } )<br/>**.setText** ( *text* : Text {; *charSetNum* : Integer { ; *breakMode* : Integer } } )<!-- END REF -->


<!--REF #FileClass.setText().Params -->
| Parâmetro   | Tipo    |    | Descrição                                                              |
| ----------- | ------- | -- | ---------------------------------------------------------------------- |
| text        | Text    | -> | Texto a armazenar no arquivo                                           |
| charSetName | Text    | -> | Nome do conjunto de caracteres                                         |
| charSetNum  | Integer | -> | Número de conjuntos de caracteres                                      |
| breakMode   | Integer | -> | Modo de processamento para quebras de linha|<!-- END REF -->


|


#### Descrição

A função `.setText()` <!-- REF #FileClass.setText().Summary -->escreve o texto ** como o novo conteúdo do arquivo<!-- END REF -->.

Se o arquivo referenciado no arquivo `` não existir no disco, ele é criado pela função. Quando o arquivo já existir no disco, o seu conteúdo anterior é apagado, exceto se já estiver aberto, caso em que o seu conteúdo é bloqueado e é gerado um erro.

No texto **, passe o texto para escrever para o arquivo. Pode ser um literal ("o meu texto"), ou um campo de texto 4D ou variável.

Opcionalmente, pode designar o conjunto de caracteres a ser utilizado para a escrita do conteúdo. Você pode passar também:

* in *charSetName*, a string containing the standard set name (for example "ISO-8859-1" or ""UTF-8"),
* ou em *charSetNum*, o MIBEnum ID (número) do nome de configuração padrão.

> Para a lista de conjuntos de caracteres suportados por 4D, consulte a descrição do comando `CONVERT FROM TEXT`.

If a Byte Order Mark (BOM) exists for the character set, 4D inserts it into the file. If you do not specify a character set, by default 4D uses the "UTF-8" character set and a BOM.

Em *breakMode*, pode passar um número indicando o processamento a aplicar aos caracteres de fim de linha antes de os guardar no arquivo. The following constants, found in the **System Documents** theme are available:

| Parâmetros                    | Valor | Comentário                                                                                                                                               |
| ----------------------------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Document unchanged`          | 0     | Não processado                                                                                                                                           |
| `Document with native format` | 1     | (Default) Line breaks are converted to the native format of the operating system: LF (line feed) on macOS, CRLF (carriage return + line feed) on Windows |
| `Documento com CRLF`          | 2     | As quebras de linha são convertidas para CRLF (carriage return + line feed), o formato padrão do Windows                                                 |
| `Documento com CR`            | 3     | As quebras de linha são convertidas para CR (carriage return), o formato padrão do Classic Mac OS                                                        |
| `Documento com LF`            | 4     | As quebras de linha são convertidas para LF (line feed), o formato padrão Unix e macOS                                                                   |

Por padrão, ao omitir o parâmetro *breakMode* , as quebras de linha são processadas no modo nativo (1).

#### Exemplo

```4d
$myFile:=File("C:\\Documents\\Hello.txt";fk platform path)
$myFile.setText("Hello world")
```
<!-- END REF -->

<!-- INCLUDE document.size.Desc -->
