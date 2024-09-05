---
id: paths
title: Pathnames
---

As funções, propriedades e comandos de File e Folders permitem tratar arquivos e pastas como objetos. Isto torna a gestão de arquivos e pastas poderosa e flexível. Por exemplo, para criar um novo arquivo na pasta Documentos do utilizador atual, pode escrever:

```4d
$ok:=Folder(fk documents folder).file("Archives/John4D.prefs").create()
```

Além disso, os objectos de arquivos e pastas suportam `fileSystems`, que fornecem o caminho contextual para as pastas principais da aplicação.


4D aceita vários `filesystem` pathnames que designam pastas 4D específicas com localização variável em macOS e Windows. A filesystem path is evaluated with regards to the context and is returned as an absolute path.

Os nomes de caminho do sistema de arquivos são úteis por duas razões principais:

- Independência: Pode mover a sua solução de um local para outro, independentemente do sistema operativo, sem ter de se preocupar com caminhos,
- Segurança: Nenhum código pode acessar elementos localizados acima da raiz do sistema de arquivos no disco (sandboxing).

São compatíveis os seguintes nomes de caminho do sistema de arquivos:

| filesystem   | Designa                                               | Exemplo                                              |
| ------------ | ----------------------------------------------------- | ---------------------------------------------------- |
| "/DATA"      | Pasta de dados actual                                 | "C:\\MyApps\\Students\\Data\\"               |
| "/LOGS"      | Pasta Logs                                            | "C:\\MyApps\\Students\\Data\\Logs\\"       |
| "/PACKAGE"   | Pasta de raiz do projeto (com ou sem extensão 4dbase) | "C:\\MyApps\\Students\\"                       |
| "/PROJECT"   | Pasta Project                                         | "C:\\MyApps\\Students\\Project\\"            |
| "/RESOURCES" | Pasta de recursos do projeto atual                    | "C:\\MyApps\\Students\\Resources\\"          |
| "/SOURCES"   | Pasta de fontes do projeto atual                      | "C:\\MyApps\\Students\\Project\\Sources\\" |

## Sintaxe POSIX

A sintaxe POSIX é suportada em todas as plataformas. **A sintaxe POSIX é recomendada** por ser a mais flexível. É utilizado por predefinição (devolvido pelas propriedades [file.path](../API/FileClass.md#path) e [folder.path](../API/FolderClass.md#path)).

Com esta sintaxe:

- as pastas são separadas por "/"
- os nomes de caminho absolutos começam com um "/"
- para subir uma pasta num caminho relativo, utilize "../" à frente do nome do caminho (por segurança, não pode subir no sistema de arquivos).

Na sintaxe POSIX, utiliza-se geralmente `filesystem` pathnames com os comandos [`File`](../API/FileClass.md#file) e [`Folder`](../API/FolderClass.md#folder) , por exemplo:

```4d
var $pathFile : 4D.File
var $pathFolder : 4D.Folder

$pathFile:=File("/DATA/Archives/file 2.txt")
$pathFolder:=Folder("/RESOURCES/Pictures")
```




## Sintaxe específica da plataforma

A sintaxe específica da plataforma depende do sistema operativo em que o comando é executado. Note-se que, ao criar um objeto de ficheiro ou pasta com esta sintaxe, é necessário declará-lo utilizando como parâmetro a constante `fk platform path` .

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

A linguagem 4D permite a utilização das sequências de escape [](quick-tour.md#escape-sequences). As sequências de fuga começam com uma barra invertida `\`, seguida de um carácter. Por exemplo, `\t` é a sequência de escape para o carácter `Tab` .

Uma vez que o carácter `\` também é utilizado como separador nos nomes de caminho no Windows, é necessário introduzir um duplo `\\` nos nomes de caminho do Windows.

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

### Construtores `File` e `Folder`

[`Os comandos File`](../API/FileClass.md#file) e [`Folder`](../API/FolderClass.md#folder) só aceitam **nomes de caminho absolutos**. Os nomes de caminho relativos não são suportados e devolverão erros. Por exemplo, o seguinte código não é permitido:

```4d
    //ERROR
$ko:=Folder("myFolder").create() //nome do caminho relativo com construtor
```

Se quiser tratar a arquivos pastas em várias localizações (pasta do projeto, pastas do sistema, etc.), pode utilizar os  `filesystems` (ver acima). Por exemplo, pode escrever:

```4d
$okFolder:=Folder("/PACKAGE/myFolder").create() //pasta criada ao nível da estrutura
$okFile:=File("/DATA/Prefs/tempo.txt").create() //ficheiro criado na pasta de dados
```

### `.file()` and `.folder()` folder methods

As funções dos objetos pasta, tais como [`folder.file()`](../API/FolderClass.md#file) e [`folder.folder()`](../API/FolderClass.md#folder-1) esperam nomes de caminho POSIX relativos. Por exemplo:

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
