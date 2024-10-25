---
id: copy-document
title: COPY DOCUMENT
slug: /commands/copy-document
displayed_sidebar: docs
---

<!--REF #_command_.COPY DOCUMENT.Syntax-->**COPY DOCUMENT** ( *nomFonte* ; *nomDest* {; *newName*} {; *} )<!-- END REF-->
<!--REF #_command_.COPY DOCUMENT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| nomFonte | Text | &#8594;  | Nome do documento a copiar |
| nomDest | Text | &#8594;  | Nome do documento copiado |
| newName | Text | &#8594;  | New name of copied file or folder |
| * | Operador | &#8594;  | Substituir documento existente, se houver |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.COPY DOCUMENT.Summary-->O comando **COPY DOCUMENT** copia o documento especificado por *nomFonte* na localização especificada por *nomDest*.<!-- END REF-->

* **Cópia de arquivos**  
Este caso, o parâmetro *nomFonte* deve conter um caminho de arquivo completo, expressa em relação à raiz do volume.  
O parâmetro *nomDest* pode conter vários tipos de locais:  
   * um caminho de arquivo completo expressa com relação à raiz do volume: o arquivo é copiado para este local  
   * um nome de arquivo ou caminho do arquivo relativo: o arquivo é copiado para a pasta de banco de dados (as subpastas já deve existir)  
   * um caminho de pasta completo ou um caminho relativo para a pasta base de dados (*nomDest* deve terminar com o separador de pasta para a plataforma): o arquivo é copiado para a pasta designada. Essas pastas já devem existir no disco, não são criadas.  
Será gerado um erro se já houver um documento chamado *nomDest* a menos que tenha especificado o parâmetro opcional *\** que lhe indica a **COPY DOCUMENT** que apague e substitua o documento existente pelo documento de destino.
* **Cópia de pasta** **s**  
Para indicar que você está designando uma pasta, as sequências passadas em *nomFonte* e *nomDest* deve terminar com um separador de pasta para a plataforma. Por exemplo, no Windows "C:\\\\Element\\\\" designa uma pasta e "C:\\\\Element" designa um arquivo.  
Para copiar uma pasta, passe o seu caminho completo em *nomFonte*. Esta pasta já deve existir no disco. Quando uma pasta é definida no parâmetro *nomFonte*, a pasta deve também ser designada no parâmetro *nomDest*. Deve passar uma rota de acesso completa de pasta (cada elemento já deve existir no disco).  
Se yá existir uma pasta com o mesmo nome da pasta designada pelo parâmetro *nomFonte* na localização definida pelo parâmetro *nomDest* e não está vazia, 4D verifica seu conteúdo antes de copiar os elementos. Um erro é gerado quando já existe um arquivo com o mesmo nome, a menos que tenha passado o parâmetro opcional *\**, que indica ao comando excluir e substituir o arquivo no lugar de destino.  
    
Note que você pode passar um arquivo no parâmetro *nomFonte* e uma pasta no parâmetro *nomDest*, a fim de copiar um arquivo em uma pasta.  
    
O parâmetro opcional *novoNome*, se passar, permite renomear o documento copiado a sua localização de destino (arquivo ou pasta). Quando se passa no contexto de uma cópia de arquivo, este parâmetro substitui o nome (se existir) passado no parâmetro *nomDest*.

#### Exemplo 1 

O exemplo abaixo duplica um documento em sua própria pasta: 

```4d
 COPY DOCUMENT("C:\\PASTA\\DocNome";"C:\\PASTA\\DocNome2")
```

#### Exemplo 2 

O exemplo abaixo copia um documento na pasta do banco (sempre e quando C:\\\\PASTA não seja a pasta do banco): 

```4d
 COPY DOCUMENT("C:\\PASTA \\DocNome";"DocNome")
```

#### Exemplo 3 

O exemplo abaixo copia um documento de um volume a outro: 

```4d
 COPY DOCUMENT("C:\\PASTA \\DocNome";"F:\\Arquivos\\DocNome.OLD")
```

#### Exemplo 4 

O exemplo abaixo duplica um documento em sua própria pasta, substituindo uma cópia existente: 

```4d
 COPY DOCUMENT("C:\\PASTA \\DocNome";"C:\\PASTA \\DocNome2";*)
```

#### Exemplo 5 

Cópia de um arquivo em uma pasta específica, mantendo o mesmo nome:

```4d
 COPY DOCUMENT("C:\\Projects\\DocName";"C:\\Projects\\")
```

#### Exemplo 6 

Cópia de um arquivo em uma pasta específica, mantendo o mesmo nome e substituir o documento existente:

```4d
 COPY DOCUMENT("C:\\Projects\\DocName";"C:\\Projects\\"; *)
```

#### Exemplo 7 

Copia de uma pasta para outra pasta (ambas as pastas já devem estar presentes no disco):

```4d
 COPY DOCUMENT("C:\\Projects\\";"C\\Archives\\2011\\")
```

#### Exemplo 8 

Os seguintes exemplos criam diferentes arquivos e pastas na pasta da base (exemplos em Windows). Em cada caso, a pasta "folder2" deve existir:

```4d
 COPY DOCUMENT("folder1\\name1";"folder2\\")
  //Cria o arquivo "folder2/name1"
 
 COPY DOCUMENT("folder1\\name1";"folder2\\" ; "new")
  //Cria o arquivo "folder2/new"
 
 COPY DOCUMENT("folder1\\name1";"folder2\\name2")
  //Cria o arquivo "folder2/name2"
 
 COPY DOCUMENT("folder1\\name1";"folder2\\name2";"new")
  //Cria o arquivo "folder2/new" (name2 se ignora)
 
 COPY DOCUMENT("folder1\\" ; "folder2\\")
  //Cria a pasta "folder2/folder1/"
 
 COPY DOCUMENT("folder1\\" ; "folder2\\" ; "new")
  //Cria a pasta "folder2/new/"
```

#### Ver também 

*Documentos de Sistema*  
[MOVE DOCUMENT](move-document.md)  