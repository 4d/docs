---
id: get-file-from-pasteboard
title: Get file from pasteboard
slug: /commands/get-file-from-pasteboard
displayed_sidebar: docs
---

<!--REF #_command_.Get file from pasteboard.Syntax-->**Get file from pasteboard** ( *indiceN* ) : Text<!-- END REF-->
<!--REF #_command_.Get file from pasteboard.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| indiceN | Integer | &#8594;  | Arquivo N incluído na ação de arrastar |
| Resultado | Text | &#8592; | Rota do arquivo extraído da área de transferência |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Get file from pasteboard.Summary-->O comando Get file from pasteboard devolve a rota de acesso absoluto de um arquivo incluído em uma operação de arrastar e soltar.<!-- END REF--> Vários arquivos podem ser selecionados e movidos simultâneamente. O parâmetro *indiceN* são utilizados para designar um arquivo entre um conjunto de arquivos selecionados. 

Se não houver arquivo N no porta-papéis, o comando devolve uma string vazia.

#### Exemplo 

O exemplo a seguir pode ser utilizado para recuperar em um array todas as rotas de acesso aos arquivos incluídos na operação arrastar e soltar:

```4d
 ARRAY TEXT($arrayArquivos;0)
 var $vtarquivo : Text
 var $n : Integer
 $n:=1
 Repeat
    $vtarquivo:=Get file from pasteboard($n)
    If($vtarchivo#"")
       APPEND TO ARRAY($arrayArquivos;$vtarquivo)
       $n:=$n+1
    End if
 Until($vtarquivo="")
```

#### Ver também 

[SET FILE TO PASTEBOARD](set-file-to-pasteboard.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 976 |
| Thread-seguro | &check; |
| Proibido no servidor ||


