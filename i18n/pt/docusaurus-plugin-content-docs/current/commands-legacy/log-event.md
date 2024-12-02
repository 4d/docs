---
id: log-event
title: LOG EVENT
slug: /commands/log-event
displayed_sidebar: docs
---

<!--REF #_command_.LOG EVENT.Syntax-->**LOG EVENT** ( {*tipoSaida* ;} *mensagem* {; *importancia*} )<!-- END REF-->
<!--REF #_command_.LOG EVENT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tipoSaida | Integer | &#8594;  | Message output type |
| mensagem | Text | &#8594;  | Contents of the message |
| importancia | Integer | &#8594;  | Message’s importance level |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.LOG EVENT.Summary-->O comando **LOG EVENT** permite configurar um sistema personalizado de registro de eventos internos que ocorrem durante o uso de sua aplicação.<!-- END REF-->

Passe no parâmetro *mensagem* a informação personalizada a notar em função do evento.

O parâmetro opcional *tipoSaida* permite precisar o canal de saida tomado pela *mensagem*. Pode passar neste parâmetro uma das constantes abaixo ubicadas no tema *Historial de eventos*:

| Constante                    | Tipo          | Valor | Comentário                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------------------------- | ------------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Into 4D commands log         | Inteiro longo | 3     | Indica a 4D gravar a *mensagem* no arquivo de histórico dos comandos de 4D, se este arquivo foi ativado. O arquivo de histórico de comandos de 4D pode ser ativado utilizando o comando [SET DATABASE PARAMETER](set-database-parameter.md) (seletor 34).<br/>**Nota:** os arquivos de histórico de 4D se juntam na pasta **Logs** (ver o comando [Get 4D folder](get-4d-folder.md)).                                                                               |
| Into 4D debug message        | Inteiro longo | 1     | Indica a 4D enviar a *mensagem* ao entorno de depuração do sistema. O resultado depende da plataforma:<br/>Baixo Mac OS: o comando envia a mensagem à ConsolaBaixo Windows: o comando envia a mensagem como uma mensagem de depuração. Para poder ler este mensagem, deve ter Microsoft Visual Studio ou DebugView para Windows (<http://technet.microsoft.com/en-us/sysinternals/bb896647.aspx>)                                                                   |
| Into 4D diagnostic log       | Inteiro longo | 5     | Lhe indica a 4D colocar a mensagem no arquivo de diagnóstico de 4D, se este arquivo está ativo.<br/>O arquivo de diagnóstico pode ser ativado com ajuda do comando [SET DATABASE PARAMETER](set-database-parameter.md) (seletor 79).                                                                                                                                                                                                                                |
| Into 4D request log          | Inteiro longo | 2     | Indica a 4D gravar a *mensagem* no arquivo de histórico de petições de 4D, se este arquivo foi ativado                                                                                                                                                                                                                                                                                                                                                                      |
| Into system standard outputs | Inteiro longo | 6     | Indica a 4D que deve enviar a *mensagem* a um fluxo de saída padrão. A mensagem é enviada a: **stdout** se *importance* \= Information message ou Warning message **stderr** se *importance* \= Error message                                                                                                                                                                                                                                                               |
| Into Windows log events      | Inteiro longo | 0     | Indica a 4D enviar o *mensagem* “Log events” de Windows. Este histórico recebe e armazena as mensagens que vem das aplicações em execução. Neste caso, pode definir o nível de importância da *mensagem* via o parâmetro opcional *importância* (ver a continuação).**<br/>Notas:** <br/>Para que esta funcionalidade esteja disponível, o serviço Log Events de Windows deve estar em execução.Baixo Mac OS, o comando não faz nada com este tipo de saída |

Se omitir o parâmetro *tipoSaida,* o valor 0 se utiliza como padrão (Into Windows Log Events).

Você pode atribuir um nível de importância à *mensagem* por meio do parâmetro opcional *importancia*, que o ajuda a ler e entender os eventos de registro. Há três níveis de importância: Informação, Aviso e Erro.  4D lhe fornece as seguintes constantes predefinidas:

| Constante           | Tipo          | Valor |
| ------------------- | ------------- | ----- |
| Error message       | Inteiro longo | 2     |
| Information message | Inteiro longo | 0     |
| Warning message     | Inteiro longo | 1     |

Se não passar nada no parâmetro *importancia* ou se passar um valor inválido, se utiliza o valor como padrão (0).

:::nota
O parâmetro *importancia* só é usado com *tipoSaida* `Into Windows log events`, `Into 4D diagnostic log` e `Into system standard outputs`.
:::

#### Exemplo 

Caso queiras realizar um seguimento das aberturas de sua base baixo Windows, pode escrever a seguinte linha de código no [Método banco de dados On Startup](metodo-banco-de-dados-on-startup.md):

```4d
 LOG EVENT(Into Windows log events;"The Invoice database was opened.")
```

Cada vez que se abre o banco de dados, esta informação será escrita no visor de eventos de Windows e seu nível de importância será 0.

#### Ver também 

[SET DATABASE PARAMETER](set-database-parameter.md)  
