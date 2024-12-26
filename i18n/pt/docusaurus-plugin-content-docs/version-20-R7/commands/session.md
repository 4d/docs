---
id: session
title: Session
displayed_sidebar: docs
---

<!-- REF #_command_.Session.Syntax -->**Session** : 4D.Session<!-- END REF -->

<!--REF #_command_.Session.Params-->

| Parâmetro | Tipo                        |   | Descrição       |
| --------- | --------------------------- | - | --------------- |
| Resultado | 4D. Session | ← | Objecto Session |

<!-- END REF-->

<details><summary>História</summary>

| Release | Mudanças                                               |
| ------- | ------------------------------------------------------ |
| 20 R5   | Support of remote client and stored procedure sessions |
| 18 R6   | Adicionado                                             |

</details>

#### Descrição

The `Session` command <!-- REF #_command_.Session.Summary -->returns the `Session` object corresponding to the current user session<!-- END REF -->.

Dependendo do processo a partir do qual o comando é chamado, a sessão atual do usuário pode ser:

- uma sessão web (quando [sessões escaláveis são ativadas](WebServer/sessions.md#enabling-sessions)),
- uma sessão de cliente remoto,
- a sessão de procedimentos armazenados.

For more information, see the [Session types](../command/session.md-types) paragraph.

If the command is called from a non supported context (single-user application, scalable sessions disabled...), it returns *Null*.

#### Sessões web

The `Session` object of web sessions is available from any web process:

- `On Web Authentication`, `On Web Connection`, and `On REST Authentication` database methods,
- código processado a través das etiquetas 4D nas páginas semidinâmicas (4DTEXT, 4DHTML, 4DEVAL, 4DSCRIPT/, 4DCODE)
- os métodos projeto com o atributo "Available through 4D tags and URLs (4DACTION...)" e chamados através de 4DACTION/ urls,
- [`On Mobile App Authentication`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication) and [`On Mobile App Action`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-action) database methods for mobile requests,
- Funções ORDA [chamadas com solicitações REST](../REST/ClassFunctions.md).

For more information on web user sessions, please refer to the [Web Server Sessions](../WebServer/sessions.md) section.

#### Sessões cliente remoto

The `Session` object of remote client sessions is available from:

- Métodos de projeto que têm o atributo [Execute on Server](../Project/code-overview.md#execute-on-server) (são executados no processo "geminado" do processo do cliente),
- Triggers,
- 'Conexão aberta com o servidor' e 'Conexão com o servidor' métodos de banco de dados.

Para mais informações em sessões usuários remotos, consulte o parágrafo [**Sessões usuário cliente remoto**](../Desktop/clientServer.md#remote-user-sessions).

#### a sessão de procedimentos armazenados

Todos os processos de procedimento armazenado compartilham a mesma sessão de usuário virtual. O objeto `Session` de procedimentos armazenados está disponível em:

- métodos chamados com o comando [`Execute on server`](../commands-legacy/execute-on-server.md),
- `On Server Startup`, `On Server Shutdown`, `On Backup Startup`, `On Backup Shutdown`, and `On System event` database methods

For information on stored procedures virtual user session, please refer to the [4D Server and the 4D Language](https://doc.4d.com/4Dv20R5/4D/20-R5/4D-Server-and-the-4D-Language.300-6932726.en.html) page.

#### Exemplo

You have defined the `action_Session` method with attribute "Available through 4D tags and URLs". Pode chamar ao método introduzindo a URL abaixo no navegador:

```
IP:port/4DACTION/action_Session
```

```4d
  //action_Session method
 Case of
    :(Session#Null)
       If(Session.hasPrivilege("WebAdmin")) //calling the hasPrivilege function
          WEB SEND TEXT("4DACTION --> Session is WebAdmin")
       Else
          WEB SEND TEXT("4DACTION --> Session is not WebAdmin")
       End if
    Else
       WEB SEND TEXT("4DACTION --> Session is null")
 End case
```

### Veja também

[Session storage](../commands-legacy/session-storage.md)\
[Session API](../API/SessionClass.md)\
[Web server user sessions](../WebServer/sessions.md)
