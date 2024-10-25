---
id: document-list
title: DOCUMENT LIST
slug: /commands/document-list
displayed_sidebar: docs
---

<!--REF #_command_.DOCUMENT LIST.Syntax-->**DOCUMENT LIST** ( *nomeRota* ; *documentos* {; *opções*} )<!-- END REF-->
<!--REF #_command_.DOCUMENT LIST.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| nomeRota | Text | &#8594;  | Rota de acesso ao volume, diretório ou pasta |
| documentos | Text array | &#8592; | Nomes dos documentos presentes na localização |
| opções | Integer | &#8594;  | Opções para construir lista |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.DOCUMENT LIST.Summary-->O comando **DOCUMENT LIST** preenche o array *documentos* de tipo texto ou alfa com os nomes dos documentos localizados na rota de acesso que se passa em *rotaAcesso*.<!-- END REF-->

**Nota**: o parâmetro *rotaAcesso* apenas aceita rotas de acesso absolutas.  
  
Por padrão, se você omitir o parâmetro *opções*, apenas os nomes dos documentos são retornados no array *documentos*. Você pode modificar esta passando, no parâmetro *opções*, uma ou mais das seguintes constantes, encontrado no tema *Documentos Sistema*:

| Constante         | Tipo          | Valor | Comentário                                                                        |
| ----------------- | ------------- | ----- | --------------------------------------------------------------------------------- |
| Absolute path     | Inteiro longo | 2     | O array documentos contém as rotas de acesso absolutas                            |
| Ignore invisible  | Inteiro longo | 8     | Os documentos invisíveis não são listados.                                        |
| Posix path        | Inteiro longo | 4     | O array documentos contém rotas de acesso ao formato POSIX                        |
| Recursive parsing | Inteiro longo | 1     | O array documentos contém os arquivos e todas as subpastas da pasta especificada. |

**Notas:**

* Com a opção Recursive parsing no modo relativo (opção1 somente), os caminhos de documentos localizados em subpastas começar com os caracteres ":" ou "\\" dependendo da plataforma.
* Com a opção Posix path no modo relativo (opção 4 somente), os caminhos não começam com "/".
* Com a opção Posix path no modo absoluto (opção 4 + 2), os caminhos sempre começam com "/".

Se não houver documentos na localização especificada, o comando retorna um array vazio. Se a rota de acesso que for passada em *rotaAcesso* for incorreta, **DOCUMENT LIST**  gera um erro de administrador de arquivos que pode interceptar utilizando o método [ON ERR CALL](on-err-call.md).

#### Exemplo 1 

Lista de todos os documentos em uma pasta (sintaxe padrão):

```4d
 DOCUMENT LIST("C:\\";arrFiles)
```

\-> arrFiles:  
 Text1.txt  
 Text2.txt

#### Exemplo 2 

Lista de todos os documentos em uma pasta em modo absoluto:

```4d
 DOCUMENT LIST("C:\\";arrFiles; Absolute path)
```

\-> arrFiles:  
 C:\\Text1.txt  
 C:\\Text2.txt

#### Exemplo 3 

Lista de todos os documentos no modo recursivo (relativo):

```4d
 DOCUMENT LIST("C:\\";arrFiles;Recursive parsing)
```

  
\-> arrFiles:  
 Text1.txt  
 Text2.txt  
 \\Folder1\\Text3.txt  
 \\Folder1\\Text4.txt  
 \\Folder2\\Text5.txt  
 \\Folder2\\Folder3\\Picture1.png

#### Exemplo 4 

Lista de todos os documentos em modo absoluto recursivo:

```4d
 DOCUMENT LIST("C:\\";arrFiles;Recursive parsing)
```

\-> arrFiles:  
 C:\\MyFolder\\MyText1.txt  
 C:\\MyFolder\\MyText2.txt  
 C:\\MyFolder\\Folder1\\MyText3.txt  
 C:\\MyFolder\\Folder1\\MyText4.txt  
 C:\\MyFolder\\Folder2\\MyText5.txt  
 C:\\MyFolder\\Folder2\\Folder3\\MyPicture1.png

#### Exemplo 5 

Lista de todos os documentos em modo recursivo Posix (relativo):

```4d
 DOCUMENT LIST("C:\\MyFolder\\";arrFiles;Recursive parsing+Posix path)
```

\-> arrFiles:  
 MyText1.txt  
 MyText2.txt  
 Folder1/MyText3.txt  
 Folder1/MyText4.txt  
 Folder2/MyText5.txt  
 Folder2/Folder3/MyPicture1.png

#### Ver também 

[FOLDER LIST](folder-list.md)  
[VOLUME LIST](volume-list.md)  