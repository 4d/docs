---
id: paths
title: Pathnames
---

As funções, propriedades e comandos de File e Folders permitem tratar arquivos e pastas como objetos. Isto torna a gestão de arquivos e pastas poderosa e flexível. Por exemplo, para criar um novo arquivo na pasta Documentos do utilizador atual, pode escrever:

```4d
$ok:=Folder(fk documents folder).file("Archives/John4D.prefs").create()
```

In addition, file and folder objects support `fileSystems`, which provide contextual path to main application folders.

## Filesystem pathnames

4D accepts several `filesystem` pathnames that designate specific 4D folders with variable location on macOS and Windows. Os nomes de caminho do sistema de arquivos são úteis por duas razões principais:

- Independência: Pode mover a sua solução de um local para outro, independentemente do sistema operativo, sem ter de se preocupar com caminhos,
- Segurança: Nenhum código pode acessar elementos localizados acima da raiz do sistema de arquivos no disco (sandboxing).

São compatíveis os seguintes nomes de caminho do sistema de arquivos:

| filesystem   | Designa                                                                  |
| ------------ | ------------------------------------------------------------------------ |
| "/DATA"      | Pasta de dados actual                                                    |
| "/LOGS"      | Pasta Logs                                                               |
| "/PACKAGE"   | Pasta de raiz do projeto (com ou sem extensão 4dbase) |
| "/PROJECT"   | Pasta Project                                                            |
| "/RESOURCES" | Pasta de recursos do projeto atual                                       |
| "/SOURCES"   | Pasta de fontes do projeto atual                                         |

## Sintaxe POSIX

A sintaxe POSIX é suportada em todas as plataformas. **POSIX syntax is recommended** since it is the most flexible. It is used by default (returned by [file.path](../API/FileClass.md#path) and [folder.path](../API/FolderClass.md#path) properties).

Com esta sintaxe:

- as pastas são separadas por "/"
- os nomes de caminho absolutos começam com um "/"
- para subir uma pasta num caminho relativo, utilize "../" à frente do nome do caminho (por segurança, não pode subir no sistema de arquivos).

In POSIX syntax, you will generally use `filesystem` pathnames with [`File`](../API/FileClass.md#file) and [`Folder`](../API/FolderClass.md#folder) commands, for example:

```4d
$pathFile:=File("/DATA/Archives/file 2.txt")
$pathFolder:=Folder("/RESOURCES/Pictures")
```

## Sintaxe específica da plataforma

A sintaxe específica da plataforma depende do sistema operativo em que o comando é executado. Note that when creating a file or folder object with this syntax, you must declare it using the `fk platform path` constant as parameter.

### Windows

São suportados os seguintes padrões:

- os separadores de pasta são "\"
- the text contains ':' and '\' as the second and third character,
- o texto começa por "\\".

Examples with [`Folder`](../API/FolderClass.md#folder):

```4d
$ok:=Folder("C:\\Monday";fk platform path).create()
$ok:=Folder("\\\\svr-internal\\tempo";fk platform path).create()
```

#### Entering Windows pathnames and escape sequences

The 4D language allows the use of [escape sequences](quick-tour.md#escape-sequences). Escape sequences begin with a backslash `\`, followed by a character. For example, `\t` is the escape sequence for the `Tab` character.

Since the `\` character is also used as the separator in pathnames in Windows, you need to enter a double `\\` in windows pathnames.

### macOS

São suportados os seguintes padrões (sintaxe HFS+):

- os separadores de pasta são ":"
- o caminho não deve começar com um ":"

Examples with [`Folder`](../API/FolderClass.md#folder):

```4d
$ok:=Folder("macintosh hd:";fk platform path).create()
$ok:=Folder("Monday:Tuesday";fk platform path).create() //a volume deve ser chamado Monday
```

## Nomes de caminho absolutos e relativos

### `File` and `Folder` constructors

[`File`](../API/FileClass.md#file) and [`Folder`](../API/FolderClass.md#folder) commands only accept **absolute pathnames**. Os nomes de caminho relativos não são suportados e devolverão erros. Por exemplo, o seguinte código não é permitido:

```4d
	//ERROR
$ko:=Folder("myFolder").create() //relative pathname with constructor
```

If you want to handle files or folders in various locations (project folder, system folders, etc.), you can use `filesystems` (see above). Por exemplo, pode escrever:

```4d
$okFolder:=Folder("/PACKAGE/myFolder").create() //pasta criada ao nível da estrutura
$okFile:=File("/DATA/Prefs/tempo.txt").create() //ficheiro criado na pasta de dados
```

### `.file()` and `.folder()` folder functions

Functions of folder objects such as [`folder.file()`](../API/FolderClass.md#file) and [`folder.folder()`](../API/FolderClass.md#folder-1) expect relative POSIX pathnames. Por exemplo:

```4d
  //para referenciar uma pasta "Picture" dentro da pasta de documentos do utilizador
$userImages:=Folder(fk documents folder).folder("Pictures")
  //para criar uma pasta no ambiente de trabalho
$ok:=Folder(fk desktop folder).folder("myFolder").create()
```

Os nomes de caminho absolutos não são suportados e devolverão erros.

## Exemplos

A flexibilidade das funções de arquivos e pastas oferece-lhe várias possibilidades de tratamento de arquivos e pastas, como nos exemplos seguintes:

```4d
$f:=Folder(fk desktop folder).folder("archive/jan2019")
 
$f2:=Folder("/DATA/archive/jan2019").file("total.txt")
 
$f3:=Folder("/DATA/archive/jan2019")
 
$f4:=File("/DATA/info.txt")
 
$f5:=File("c:\\archives\\local\\jan2019.txt";fk platform path)
 
$f6:=File(fk backup log file)
```
