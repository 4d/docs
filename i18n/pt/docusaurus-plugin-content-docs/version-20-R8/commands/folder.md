---
id: folder
title: Folder
displayed_sidebar: docs
---

<details><summary>História</summary>

| Release | Mudanças                    |
| ------- | --------------------------- |
| 19 R8   | Suporte de `fk home folder` |
| 17 R5   | Adicionado                  |

</details>

<!-- REF #_command_.Folder.Syntax -->**Folder** ( *path* : Text { ; *pathType* : Integer }{ ; \* } ) : 4D.Folder<br/>**Folder** ( *folderConstant* : Integer { ; \* } ) : 4D.Folder<!-- END REF -->

<!-- REF #_command_.Folder.Params -->

| Parâmetro      | Tipo                       |     | Descrição                                                         |
| -------------- | -------------------------- | :-: | ----------------------------------------------------------------- |
| path           | Text                       |  →  | Folder path                                                       |
| folderConstant | Integer                    |  →  | Constante Pasta 4D                                                |
| pathType       | Integer                    |  →  | `fk posix path` (padrão) ou `fk platform path` |
| \*             | operator                   |  →  | \* para devolver a pasta da base de dados do anfitrião            |
| Resultados     | 4D. Folder |  ←  | Novo Objeto Folder                                                |

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

If the command is called from a component, pass the optional `*` parameter to get the path of the host database. Caso contrário, se omitir o parâmetro `*`, um objecto nulo é sempre devolvido.

> No Windows, em clientes mesclados, o local das pastas incorporadas é modificado se a chave `ShareLocalResourcesOnWindowsClient` [BuildApp key](../Desktop/building.md#buildapp4dsettings) for usada.

#### Veja também

[File](file.md)\
[Object to path](../commands-legacy/object-to-path.md)\
[Path to object](../commands-legacy/path-to-object.md)

#### Propriedades

|                |                                 |
| -------------- | ------------------------------- |
| Command number | 1567                            |
| Thread safe    | &amp;check; |
