---
id: open-database
title: OPEN DATABASE
slug: /commands/open-database
displayed_sidebar: docs
---

<!--REF #_command_.OPEN DATABASE.Syntax-->**OPEN DATABASE** ( *filePath* )<!-- END REF-->
<!--REF #_command_.OPEN DATABASE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| filePath | Text | &#8594;  | Nome ou via de acesso completa do arquivo de base de dados a abrir (.4db, .4dc, .4dbase ou .4dlink) |

<!-- END REF-->

#### Nota 

<!--REF #_command_.OPEN DATABASE.Summary-->O comando **OPEN DATABASE** fecha o banco de dados 4D atual e abre, com o processo em andamento, o banco definido por *rotaArquivo*.<!-- END REF--> Este comando é útil para realizar provas automáticas ou para voltar a abrir uma base de forma automática depois de uma compilação, , ou para permitir fusionar uma aplicação remota 4D para selecionar o servidor do banco de dados ao qual vai conectar.

No parâmetro *rotaArquivo*, passe o nome ou a rota de acesso completa da base a abrir. Pode utilizar os arquivos com uma das seguintes extensões:

* .4db (arquivo de estrutura interpretado),
* .4dc (arquivo de estrutura compilado),
* .4dbase (pacote OS X),
* 4dproject (arquivo do banco de dados projeto)
* .4dz (arquivo de lançamento dos bancos de dados projeto)
* .4dlink (arquivo de acesso direto).

Se passar unicamente o nome de arquivo, deve ser colocado no mesmo nível que o arquivo de estrutura da base atual.

Se a rota de acesso estabelecer um banco de dados válido, 4D fecha o banco em progresso e abre o banco de dados especificado. No modo monousuário, o [Semaphore](semaphore.md) do banco de dados fechado e o do banco aberto são chamados sucessivamente.

**Atenção:** dado que este comando faz que a aplicação se feche antes da reabertura do banco de dados especificado, não se recomenda seu uso no [Método banco de dados On Startup](metodo-banco-de-dados-on-startup.md), ou em um método chamado por este método banco.

O comando se executa de forma assíncrona: depois de sua chamada, 4D continua executando o resto do método.   
Logo, a aplicação se comporta como se o comando **Sair** do menu **Arquivo** estivesse selecionado: as caixas de diálogo de abertura se cancelam, todos os processos abertos têm 10 segundos para terminar antes de serem terminados, etc.

Se o arquivo da base objetivo não se encontra ou é inválido, se devolve um erro sistema estandarte do administrador de arquivos e 4D não faz nada.

#### Exemplo 1 

```4d
 OPEN DATABASE("C:\\databases\\Invoices\\Invoices.4db")
```

#### Exemplo 2 

Se quiser selecionar um servidor no início desde uma aplicação monousuário. Pode executar este código desde um processo lançado por [Método banco de dados On Startup](metodo-banco-de-dados-on-startup.md):

```4d
 var $xml : Text
 $xml:=""
 $databaseName:="myServer"
 $IP:="192.168.6.7:19813"
 
 If(Shift down)
    $IP:=Request("IP address to connect to "+$databaseName;$IP)
 Else
    ok:=1
 End if
 
 If(ok=1)
    $xml:=Replace string($xml;"{databaseName}";$databaseName)
    $xml:=Replace string($xml;"{IP}";$IP)
    var $link : Object
    $link:=Folder(fk user preferences folder).file("server.4dlink")
    $link.setText($xml)
    OPEN DATABASE($link.platformPath)
 Else
    QUIT 4D
 End if
```
