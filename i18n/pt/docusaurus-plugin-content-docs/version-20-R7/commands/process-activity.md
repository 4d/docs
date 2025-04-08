---
id: process-activity
title: Process activity
displayed_sidebar: docs
---

<!--REF #_command_.Process activity.Syntax-->**Process activity** () : Object<br/>**Process activity** ( *options* ) : Object<br/>**Process activity** ( *sessionID* ) : Object<br/>**Process activity** ( *sessionID* ; *options* ) : Object<!-- END REF-->

<!--REF #_command_.Process activity.Params-->

| Parâmetro | Tipo    |                             | Descrição                                                                                |
| --------- | ------- | --------------------------- | ---------------------------------------------------------------------------------------- |
| sessionID | Text    | &#8594; | ID da sessão                                                                             |
| options   | Integer | &#8594; | Opções de retorno                                                                        |
| Resultado | Object  | &#8592; | Snapshot de sessões de usuários em execução e/ou (apenas 4D Servidor) |

<!-- END REF-->

<details><summary>História</summary>

| Release | Mudanças                               |
| ------- | -------------------------------------- |
| 20 R7   | Compatibilidade do parâmetro sessionID |

</details>

## Descrição

<!--REF #_command_.Process activity.Summary-->The **Process activity** command returns a snapshot of running processes and/or (4D Server only) connected user sessions at a given time.<!-- END REF-->O comando **Atividade de Processo** retorna um snapshot dos processos em execução e/ou (4D Server apenas) sessões de usuário conectadas em um dado momento. Este comando retorna todos os processos, incluindo processos internos que não são alcançáveis pelo comando [Informações do processo](process-info.md). 

Por padrão quando usado sem quaisquer parâmetros, a **atividade de processo** retorna um objeto que contém as seguintes propriedades:

- "processos", uma coleção de todos os processos
- "sessões" (apenas 4D Servidor), uma coleção de todas as sessões

No Servidor 4D, você pode filtrar informações para serem retornadas usando os parâmetros opcionais *sessionID* e *opções*:

- Se você passar um ID de sessão de usuário no parâmetro *sessionID*, o comando retorna somente informações relacionadas a esta sessão. Por padrão se o parâmetro *options* for omitido, o objeto retornado contém uma coleção com todos os processos relacionados à sessão e uma coleção com um único objeto descrevendo a sessão. Se você passar um ID de sessão inválido, um objeto **null** será retornado.
- Você pode selecionar a(s) coleção(ões) a retornar passando uma das seguintes constantes no parâmetro *opções*:

| Parâmetros             | Valor | Comentário                                                                  |
| ---------------------- | ----- | --------------------------------------------------------------------------- |
| Processes and sessions | 0     | Retorna as listas "processos" e "sessões" (valor padrão) |
| Processes only         | 1     | Retorna apenas a lista de "processos"                                       |
| Sessions only          | 2     | Retorna apenas a lista de "sessões"                                         |

:::note

Quando executado em 4D em modo remoto ou local, `Processar atividade` sempre retorna a lista de processos em execução (*sessionID* e parâmetros de *opções* são ignorados).

:::

**Sessões**

A propriedade "sessões" contém uma coleção de objetos descrevendo todas as sessões em execução no servidor. Para obter uma descrição das propriedades do objeto de sessão, consulte o comando [`Session info`](session-info.md).

:::note Notes

- Você pode obter o objeto de uma sessão usando o comando [Session](session.md).
- 'Process ativity' retorna sessões de cliente remoto, sessão de procedimento armazenado e sessões repouso, mas não sessões Web (limitação).

:::

**Processos**

A propriedade "processes" contém uma coleção de objetos de processo descrevendo todos os processos em execução. Para obter uma descrição das propriedades do objeto de processo, consulte o comando [`Process info`](process-info.md).

No servidor, o comando `Process activity` retorna uma propriedade adicional de "session":

| Propriedade adicional | Tipo   | Descrição                                                                                                                                                                                    |   |
| --------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | - |
| session               | Object | A propriedade [`.info`](../API/SessionClass.md#info) da sessão onde o processo está sendo executado. Indefinido se o parâmetro `Processes only` for passado. |   |

## Exemplo 1

Se quiser obter a coleção de todas as sessões de usuários:

```4d
  //Para ser executado no servidor
 
 var $o : Object
 var $i : Integer
 vat $processName;$userName : Text

 
 $o:=Process activity //obter informação de processo e sessão
 For($i;0;($o.processes.length)-1) //Iterar sobre a coleção "processes" 
    $processName:=$o.processes[$i].name
    $userName:=String($o.processes[$i].session.userName) // Acesso fácil a  userName
  //use String porque o objeto de sessão pode ser indefinido
 End for
```

## Exemplo 2

Se quiser obter todos os processos relacionados à sessão atual:

```4d
  //a ser executado no servidor
 
 var $sessionID : Text:=Session.id
 var $o : Object
 
 $o:=Process activity($sessionID ;Processes only)

```

## Veja também

[Session storage](../commands-legacy/session-storage.md)\
[WEB Get server info](../commands-legacy/web-get-server-info.md)