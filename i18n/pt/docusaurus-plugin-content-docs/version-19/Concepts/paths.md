---
id: paths
title: Pathnames
---

As funções, propriedades e comandos de File e Folders permitem tratar arquivos e pastas como objetos. Isto torna a gestão de arquivos e pastas poderosa e flexível. Por exemplo, para criar um novo arquivo na pasta Documentos do utilizador atual, pode escrever:

```4d
$ok:=Folder(fk documents folder).file("Archives/John4D.prefs").create()
```

Além disso, os objectos de arquivos e pastas suportam `fileSystems`, que fornecem o caminho contextual para as pastas principais da aplicação.


## Filesystem pathnames

4D aceita vários `filesystem` pathnames que designam pastas 4D específicas com localização variável em macOS e Windows. Os nomes de caminho do sistema de arquivos são úteis por duas razões principais:

- Independência: Pode mover a sua solução de um local para outro, independentemente do sistema operativo, sem ter de se preocupar com caminhos,
- Segurança: Nenhum código pode acessar elementos localizados acima da raiz do sistema de arquivos no disco (sandboxing).

São compatíveis os seguintes nomes de caminho do sistema de arquivos:

| filesystem   | Designa                                               |
| ------------ | ----------------------------------------------------- |
| "/DATA"      | Pasta de dados actual                                 |
| "/LOGS"      | Pasta Logs                                            |
| "/PACKAGE"   | Pasta de raiz do projeto (com ou sem extensão 4dbase) |
| "/PROJECT"   | Pasta Project                                         |
| "/RESOURCES" | Pasta de recursos do projeto atual                    |
| "/SOURCES"   | Pasta de fontes do projeto atual                      |

## Sintaxe POSIX

A sintaxe POSIX é suportada em todas as plataformas. **A sintaxe POSIX é recomendada** por ser a mais flexível. É utilizado por predefinição (devolvido pelas propriedades [file.path](../API/FileClass.md#path) e [folder.path](../API/FolderClass.md#path)).

Com esta sintaxe:

- as pastas são separadas por "/"
- os nomes de caminho absolutos começam com um "/"
- para subir uma pasta num caminho relativo, utilize "../" à frente do nome do caminho (por segurança, não pode subir no sistema de arquivos).

Na sintaxe POSIX, utiliza-se geralmente `filesystem` pathnames com os comandos [`File`](../API/FileClass.md#file) e [`Folder`](../API/FolderClass.md#folder) , por exemplo:

```4d
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

The 4D code editor allows the use of escape sequences. An escape sequence is a set of characters that are used to replace a "special" character. The sequence begins with a backslash `\`, followed by a character. Por exemplo, `\t` é a sequência de escape para o carácter `Tab` .

The `\` character is also used as the separator in pathnames in Windows. In general, 4D will correctly interpret Windows pathnames that are entered in the code editor by replacing single backslashes `\` with double backslashes ``\\`. For example,``C:\Folder`will become`C:\\Folder`.

However, if you write `C:\MyDocuments\New`, 4D will display `C:\\MyDocuments\New`. In this case, the second `\` is incorrectly interpreted as `\N` (an existing escape sequence). You must therefore enter a double `\\` when you want to insert a backslash before a character that is used in one of the escape sequences recognized by 4D.

The following escape sequences are recognized by 4D:

| Escape sequence              | Carácter substituído      |
| ---------------------------- | ------------------------- |
| `\n`                        | LF (Nova linha)           |
| `\t`                        | HT (Tabulação horizontal) |
| `\r`                        | CR (Carriage return)      |
| ``\\`|``&#96; (Backslash) |                           |
| `\"`                        | `"` (Quotes)              |

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