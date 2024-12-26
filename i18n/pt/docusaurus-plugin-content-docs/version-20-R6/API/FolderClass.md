---
id: FolderClass
title: Folder
---

Parâmetros Contêm referências a pastas que podem ou não existir efectivamente no disco. Por exemplo, quando executa o comando ’Folder`para criar uma pasta, é criado um objeto válido`Folder` mas nada é realmente armazenado no disco até chamar a função [`folder.create()\\\`](#create).

### Exemplo

O exemplo seguinte cria uma pasta "JohnSmith":

```code4d
Form.curfolder:=Folder(fk database folder)
Form.curfolder:=Folder("C:\\Users\\JohnSmith\\";fk platform path)
```

### Pathnames

Os objetos `Folder` suportam vários pathnames, incluindo a sintaxe `filesystems` ou `posix`. Os nomes de caminho compatíveis são detalhados na página [**Rotas de acesso**](../Concepts/paths.md).

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
| 19 R8   | Suporte de `fk home folder` |
| 17 R5   | Adicionado                  |

</details>

<!-- REF #_command_.Folder.Syntax -->**Folder** ( *path* : Text { ; *pathType* : Integer }{ ; \* } ) : 4D.Folder<br/>**Folder** ( *folderConstant* : Integer { ; \* } ) : 4D.Folder<!-- END REF -->

<!-- REF #_command_.Folder.Params -->

| Parâmetro      | Tipo                       |                             | Descrição                                                         |
| -------------- | -------------------------- | :-------------------------: | ----------------------------------------------------------------- |
| path           | Text                       |              ->             | Folder path                                                       |
| folderConstant | Integer                    |              ->             | Constante Pasta 4D                                                |
| pathType       | Integer                    |              ->             | `fk posix path` (padrão) ou `fk platform path` |
| \*             |                            |              ->             | \* para devolver a pasta da base de dados do anfitrião            |
| Resultados     | 4D. Folder | <- | Novo Objeto Folder                                                |

<!-- END REF -->

#### Descrição

Parâmetro O comando aceita duas sintaxes:

**Folder ( path { ; pathType } { ; \* } )**

No parâmetro *path*, passe uma string de rotas de pasta. Você pode usar uma cadeia de caracteres personalizada ou um [sistema de arquivos](../Concepts/paths.md#filesystem-pathnames) (por exemplo, "/DATA").

> Apenas são compatíveis com os nomes de caminho absolutos com o comando `Folder`.

Como padrão, 4D espera um caminho expresso com a sintaxe POSIX. If you work with platform pathnames (Windows or macOS), you must declare it using the *pathType* parameter. Estão disponíveis as seguintes constantes:

| Parâmetros       | Valor | Comentário                                                                                                                  |
| ---------------- | ----- | --------------------------------------------------------------------------------------------------------------------------- |
| fk platform path | 1     | Caminho expresso com uma sintaxe específica da plataforma (obrigatória em caso de caminho de plataforma) |
| fk posix path    | 0     | Caminho expresso com a sintaxe POSIX (por padrão)                                                        |

**Folder ( folderConstant { ; \* } )**

No parâmetro *folderConstant*, passe uma pasta 4D incorporada ou de sistema, utilizando uma das seguintes constantes:

| Parâmetros                 | Valor | Comentário                                                                                                                                                  |
| -------------------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fk applications folder     | 116   |                                                                                                                                                             |
| fk data folder             | 9     | Sistema de ficheiros associado: "/DATA"                                                                                                     |
| fk database folder         | 4     | Sistema de arquivos associado: "/PACKAGE"                                                                                                   |
| fk desktop folder          | 115   |                                                                                                                                                             |
| fk documents folder        | 117   | Pasta de documentos do utilizador                                                                                                                           |
| fk home folder             | 118   | Pasta atual do usuário (normalmente `/Users/<username>/`)                                                                                |
| fk licenses folder         | 1     | Pasta contendo os arquivos de licença 4D da máquina                                                                                                         |
| fk logs folder             | 7     | Sistema de arquivos associado: "/LOGS"                                                                                                      |
| fk mobileApps folder       | 10    |                                                                                                                                                             |
| fk remote database folder  | 3     | Pasta de base de dados 4D criada em cada máquina 4D remota                                                                                                  |
| fk resources folder        | 6     | Sistema de arquivos associado: "/DATA"                                                                                                      |
| fk system folder           | 100   |                                                                                                                                                             |
| fk user preferences folder | 0     | 4D folder that stores user preference files within the <code>\<userName&gt;</code> directory. |
| fk web root folder         | 8     | Pasta raiz atual da Web da base de dados: se estiver dentro do pacote "/PACKAGE/percurso", caso contrário, caminho completo                 |

Se o comando for chamado a partir de um componente, passe o parâmetro opcional \* para obter o caminho da base de dados anfitriã. Caso contrário, se omitir o parâmetro \*, um objeto nulo é sempre devolvido.

> No Windows, em clientes mesclados, o local das pastas incorporadas é modificado se a chave `ShareLocalResourcesOnWindowsClient` [BuildApp key](../Desktop/building.md#buildapp4dsettings) for usada.

## 4D. Folder.new()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!-- REF #4D.Folder.new().Syntax -->

**4D.Folder.new** ( *path* : Text { ; *pathType* : Integer }{ ; \* } ) : 4D.Folder<br/>**4D.Folder.new** ( *folderConstant* : Integer { ; \* } ) : 4D.Folder<!-- END REF -->

#### Descrição

A função `4D.Folder.new()` <!-- REF #4D.Folder.new().Summary -->cria e retorna um novo objeto do tipo `4D.Folder`<!-- END REF -->. É idêntico ao comando [`Folder`](#folder) (atalho).

> Recomenda-se usar o comando de atalho [`Folder`](#folder) em vez de `4D.Folder.new()`.

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

| Parâmetro  | Tipo       |                             | Descrição                                                    |
| ---------- | ---------- | --------------------------- | ------------------------------------------------------------ |
| Resultados | Parâmetros | <- | True se a pasta foi criada com sucesso, false caso contrário |

<!-- END REF -->

#### Descrição

A função `.create()` <!-- REF #FolderClass.create().Summary -->cria uma pasta no disco de acordo com as propriedades do objeto `Folder`<!-- END REF -->.

Se necessário, a função cria a hierarquia de pastas conforme descrito nas propriedades [platformPath](#platformpath) ou [path](#path). Se a pasta já existir no disco, a função não faz nada (não é atirado nenhum erro) e retorna falso.

**Valor retornado**

- **True** se a pasta for criada com sucesso;
- **False** se já existir uma pasta com o mesmo nome ou se tiver ocorrido um erro.

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

| Parâmetro         | Tipo                       |                             | Descrição                                    |
| ----------------- | -------------------------- | --------------------------- | -------------------------------------------- |
| destinationFolder | 4D. Folder | ->                          | Pasta de destino para o pseudónimo ou atalho |
| aliasName         | Text                       | ->                          | Nome do pseudónimo ou atalho                 |
| aliasType         | Integer                    | ->                          | Tipo de ligação do pseudónimo                |
| Resultados        | 4D. File   | <- | Alias ou referência de atalho                |

<!-- END REF -->

#### Descrição

A função `.createAlias()` <!-- REF #FolderClass.createAlias().Summary -->cria um alias (macOS) ou um atalho (Windows)<!-- END REF --> para a pasta com o nome *aliasName* especificado na pasta designada pelo objeto *destinationFolder*.

Passar o nome do alias ou atalho para criar no parâmetro *aliasName*.

Por padrão em macOS, a função cria um pseudónimo padrão. Também pode criar uma ligação simbólica utilizando o parâmetro *aliasType*. Estão disponíveis as seguintes constantes:

| Parâmetros         | Valor | Comentário                                      |
| ------------------ | ----- | ----------------------------------------------- |
| `fk alias link`    | 0     | Alias link (padrão)          |
| `fk symbolic link` | 1     | Link simbólico (só em macOS) |

No Windows, é sempre criado um atalho (arquivo.lnk) (o parâmetro *aliasType* é ignorado).

**Objeto devolvido**

Um objeto `4D.File` com a propriedade `isAlias` definida como **true**.

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

A função `.delete()` <!-- REF #FolderClass.delete().Summary -->exclui a pasta<!-- END REF -->.

Por padrão, por razões de segurança, se omitir o parâmetro de opção, `.delete( )` só permite a eliminação de pastas vazias. Se quiser que o comando possa apagar pastas que não estejam vazias, deve utilizar o parâmetro de opção com uma das seguintes constantes:

| Parâmetros             | Valor | Comentário                                             |
| ---------------------- | ----- | ------------------------------------------------------ |
| `Delete only if empty` | 0     | Elimina a pasta apenas quando está vazia               |
| `Delete with contents` | 1     | Apaga a pasta juntamente com tudo o que a mesma contém |

Quando `Delete only if empty` for passado ou se você omitir o parâmetro de opção:

- A pasta só é apagada se estiver vazia; caso contrário, o comando não faz nada e é gerado um erro -47.
- Se a pasta não existir, o erro -120 é gerado.

Quando `Delete with contents` é passado:

- A pasta, juntamente com todo o seu conteúdo, é apagada.
  **Aviso**: mesmo quando esta pasta e/ou o seu conteúdo estiver bloqueado ou definido para apenas leitura, se o usuário atual tiver direitos de acesso adequados, a pasta (e conteúdo) continua a ser eliminada.
- Se esta pasta, ou qualquer dos arquivos que conter, não puder ser apagada, a eliminação é abortada assim que o primeiro elemento inacessível for detectado, e um erro(\*) é devolvido. Neste caso, a pasta pode ser apenas parcialmente apagada. Quando a eliminação é abortada, pode utilizar o comando `GET LAST ERROR STACK` para recuperar o nome e o caminho do ficheiro ofensivo.
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

| Parâmetro         | Tipo                       |                             | Descrição                         |
| ----------------- | -------------------------- | --------------------------- | --------------------------------- |
| destinationFolder | 4D. Folder | ->                          | Pasta de destino                  |
| newName           | Text                       | ->                          | Nome completo para a pasta movida |
| Resultados        | 4D. Folder | <- | Pasta movida                      |

<!-- END REF -->

#### Descrição

A função `.moveTo( )` <!-- REF #FolderClass.moveTo().Summary -->move ou renomeia o objeto `Folder` (pasta de origem) para a *destinationFolder* especificada<!-- END REF -->.

The *destinationFolder* must exist on disk, otherwise an error is generated.

Por padrão, a pasta mantém o seu nome quando movida. Por padrão, a pasta mantém o seu nome quando movida. O novo nome deve cumprir com as regras de nomenclatura (por exemplo, não deve conter caracteres como ":", "/", etc.), do contrário se devolve um erro.

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

| Parâmetro  | Tipo                       |                             | Descrição                       |
| ---------- | -------------------------- | --------------------------- | ------------------------------- |
| newName    | Text                       | ->                          | Novo nome completo para a pasta |
| Resultados | 4D. Folder | <- | Renomeado arquivo               |

<!-- END REF -->

#### Descrição

A função `.rename()` <!-- REF #FolderClass.rename().Summary -->renomeia a pasta com o nome que você passou em *newName* e retorna o objeto `Folder` renomeado<!-- END REF -->.

The *newName* parameter must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned. Se já existir um ficheiro com o mesmo nome, é devolvido um erro.

**Objeto devolvido**

O objeto `Folder` renomeado.

#### Exemplo

```4d
 var $toRename : 4D. Folder
 $toRename:=Folder("/RESOURCES/Pictures").rename("Images")
```

<!-- END REF -->
