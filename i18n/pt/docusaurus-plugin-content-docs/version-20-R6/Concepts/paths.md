---
id: paths
title: Pathnames
---

As funções, propriedades e comandos de File e Folders permitem tratar arquivos e pastas como objetos. Isto torna a gestão de arquivos e pastas poderosa e flexível. Por exemplo, para criar um novo arquivo na pasta Documentos do utilizador atual, pode escrever:

```4d
$ok:=Folder(fk documents folder).file("Archives/John4D.prefs").create()
```

Además, los objetos archivo y carpeta soportan los `fileSystems`, que ofrecen una ruta contextual a las carpetas principales de la aplicación.

## Filesystem pathnames

4D acepta varios `filesystem` que designan las carpetas 4D específicas con una ubicación variable en macOS y Windows. A filesystem path is evaluated with regards to the context and is returned as an absolute path.

Os nomes de caminho do sistema de arquivos são úteis por duas razões principais:

- Independência: Pode mover a sua solução de um local para outro, independentemente do sistema operativo, sem ter de se preocupar com caminhos,
- Segurança: Nenhum código pode acessar elementos localizados acima da raiz do sistema de arquivos no disco (sandboxing).

São compatíveis os seguintes nomes de caminho do sistema de arquivos:

| filesystem   | Designa                                                                  | Exemplo                                                          |
| ------------ | ------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| "/DATA"      | Pasta de dados actual                                                    | "C:\\MyApps\\Students\\Data\\"              |
| "/LOGS"      | Pasta Logs                                                               | "C:\\MyApps\\Students\\Data\\Logs\\"       |
| "/PACKAGE"   | Pasta de raiz do projeto (com ou sem extensão 4dbase) | "C:\\MyApps\\Students\\"                     |
| "/PROJECT"   | Pasta Project                                                            | "C:\\MyApps\\Students\\Project\\"           |
| "/RESOURCES" | Pasta de recursos do projeto atual                                       | "C:\\MyApps\\Resources\\"                    |
| "/SOURCES"   | Pasta de fontes do projeto atual                                         | "C:\\MyApps\\Students\\Project\\Sources\\" |

## Sintaxe POSIX

A sintaxe POSIX é suportada em todas as plataformas. **Se recomienda la sintaxis POSIX** ya que es la más flexible. Se utiliza por defecto (devuelto por las propiedades [file.path](../API/FileClass.md#path) y [folder.path](../API/FolderClass.md#path)).

Com esta sintaxe:

- as pastas são separadas por "/"
- os nomes de caminho absolutos começam com um "/"
- para subir uma pasta num caminho relativo, utilize "../" à frente do nome do caminho (por segurança, não pode subir no sistema de arquivos).

In POSIX syntax, you will generally use `filesystem` pathnames with [`File`](../API/FileClass.md#file) and [`Folder`](../API/FolderClass.md#folder) commands, for example:

```4d
var $pathFile : 4D.File
var $pathFolder : 4D.Folder
$pathFile:=File("/DATA/Archives/file 2.txt")
$pathFolder:=Folder("/RESOURCES/Pictures")
```

## Sintaxe específica da plataforma

A sintaxe específica da plataforma depende do sistema operativo em que o comando é executado. Tenga en cuenta que al crear un objeto archivo o carpeta con esta sintaxis, debe declararlo utilizando la constante `fk platform path` como parámetro.

### Windows

São suportados os seguintes padrões:

- os separadores de pasta são "\"
- the text contains ':' and '\' as the second and third character,
- o texto começa por "\\".

Exemplos com [`Folder`](../API/FolderClass.md#folder):

```4d
$ok:=Folder("C:\\Monday";fk platform path).create()
$ok:=Folder("\\\\svr-internal\\tempo";fk platform path).create()
```

#### Entering Windows pathnames and escape sequences

El lenguaje 4D permite utilizar [secuencias de escape](quick-tour.md#escape-sequences). Las secuencias de escape comienzan con una barra invertida `\`, seguida de un caracter. Por ejemplo, `\t` es la secuencia de escape para el caracter `Tab`.

Dado que el caracter `\` también se utiliza como separador en los nombres de rutas en Windows, es necesario introducir un doble `\\` en los nombres de rutas.

### macOS

São suportados os seguintes padrões (sintaxe HFS+):

- os separadores de pasta são ":"
- o caminho não deve começar com um ":"

Exemplos com [`Folder`](../API/FolderClass.md#folder):

```4d
$ok:=Folder("macintosh hd:";fk platform path).create()
$ok:=Folder("Monday:Tuesday";fk platform path).create() //a volume deve ser chamado Monday
```

## Nomes de caminho absolutos e relativos

### Constructores `File` y `Folder`

[`File`](../API/FileClass.md#file) and [`Folder`](../API/FolderClass.md#folder) commands only accept **absolute pathnames**. Os nomes de caminho relativos não são suportados e devolverão erros. Por exemplo, o seguinte código não é permitido:

```4d
	//ERROR
$ko:=Folder("myFolder").create() //relative pathname with constructor
```

Si quiere manejar los archivos o las carpetas en varias ubicaciones (carpeta de proyecto, carpetas sistema, etc.), puede utilizar `filesystems` (ver arriba). Por exemplo, pode escrever:

```4d
$okFolder:=Folder("/PACKAGE/myFolder").create() //pasta criada ao nível da estrutura
$okFile:=File("/DATA/Prefs/tempo.txt").create() //ficheiro criado na pasta de dados
```

### Funciones de carpeta `.file()` y `.folder()`

Functions of folder objects such as [`folder.file()`](../API/FolderClass.md#file) and [`folder.folder()`](../API/FolderClass.md#folder-1) expect relative POSIX pathnames. Por exemplo:

```4d
var $userImages : 4D.Folder
var $ok : Boolean
  //to reference a "Picture" folder within the user documents folder
$userImages:=Folder(fk documents folder).folder("Pictures")
  //to create a folder on the desktop
$ok:=Folder(fk desktop folder).folder("myFolder").create()
```

Os nomes de caminho absolutos não são suportados e devolverão erros.

## Exemplos

A flexibilidade das funções de arquivos e pastas oferece-lhe várias possibilidades de tratamento de arquivos e pastas, como nos exemplos seguintes:

```4d
var $fold : 4D.Folder
var $file : 4D.File

$fold:=Folder(fk desktop folder).folder("archive/jan2019")
$fold:=Folder("/DATA/archive/jan2019")
$file:=Folder("/DATA/archive/jan2019").file("total.txt")
$file:=File("/DATA/info.txt")
$file:=File("c:\\archives\\local\\jan2019.txt";fk platform path)
$file:=File(fk backup log file)
```
