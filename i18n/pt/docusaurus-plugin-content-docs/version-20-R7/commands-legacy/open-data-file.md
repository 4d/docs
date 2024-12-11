---
id: open-data-file
title: OPEN DATA FILE
slug: /commands/open-data-file
displayed_sidebar: docs
---

<!--REF #_command_.OPEN DATA FILE.Syntax-->**OPEN DATA FILE** ( *endAcesso* )<!-- END REF-->
<!--REF #_command_.OPEN DATA FILE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| endAcesso | Text | &#8594;  | Nome o endereço de acesso completo ao arquivo de dados a ser aberto |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OPEN DATA FILE.Summary-->O comando **OPEN DATA FILE** permite alterar os dados do arquivo aberto pela aplicação 4D on-the-fly.<!-- END REF-->

Passe o nome ou o caminho de acesso completo do arquivo de dados a ser aberto (arquivo com extensão ".4DD") no parâmetro *accessPath*. Se você passar somente o nome do arquivo, ele deve ser colocado ao lado da estrutura de arquivo do banco de dados.

Se o caminho de acesso define um arquivo de dados válido, 4D fecha o banco de dados em andamento e re-abre-o com o arquivo de dados especificado. Os métodos de banco de dados [Método banco de dados On Exit](metodo-banco-de-dados-on-exit.md) e [Método banco de dados On Startup](metodo-banco-de-dados-on-startup.md) são sucessivamente chamados.

**Atenção:** Uma vez que este comando faz com que a aplicação seja fechada antes de abrir novamente com o arquivo de dados especificado, não é possível usá-lo no método [Método banco de dados On Exit](metodo-banco-de-dados-on-exit.md) ou em um método chamado por este método de banco de dados.

O comando é executado de forma assíncrona: após a sua chamada, 4D continua a executar o restante do método. Então, a aplicação se comporta como se o comando **Quit** tivesse sido selecionado no menu **Arquivo**: abrir caixas de diálogo são cancelados, todos os processos abertos tem 10 segundos para terminar antes de ser encerrado, etc.

Antes de lançar a operação, o comando verifica a validade do arquivo de dados especificado. Além disso, se o arquivo já foi aberto, o comando verifica se ele corresponde à estrutura atual.

Se você passar uma string vazia em *accessPath*, o comando irá reabrir o banco de dados sem alterar o arquivo de dados.

**4D Server:** Começando com 4D v13, este comando pode ser executado com o 4D Server. Neste contexto, o comando faz uma chamada interna ao comando [QUIT 4D](quit-4d.md) no servidor (o qual faz que apareça uma caixa de diálogo em cada computador remoto indicando que o servidor está no processo de saída) antes de abrir o arquivo designado.

#### Exemplo 

No contexto de implementação de uma aplicação fusionada, se quiser abrir ou criar o arquivo de dados de usuário no método de banco de dados On Startup. Este exemplo usa o arquivo de dados padrão (ver *Gerenciamento de arquivo de dados em aplicativos finais*):

```4d
 If(Data file="@default.4dd")
    If(Version type?? Merged application)
       If(Is data file locked)
          $dataPath:=Get 4D folder(Active 4D Folder)+"data.4dd"
  //se um arquivo local de dados já existir
          If(Test path name($dataPath)=Is a document)
             OPEN DATA FILE($dataPath) //abre o arquivo
          Else
             CREATE DATA FILE($dataPath) //cria o arquivo
          End if
       End if
    End if
 End if
```

#### Ver também 

[CREATE DATA FILE](create-data-file.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 312 |
| Thread-seguro | &check; |
| Proibido no servidor ||


