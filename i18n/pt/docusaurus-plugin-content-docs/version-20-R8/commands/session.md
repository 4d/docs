---
id: session
title: Session
displayed_sidebar: docs
---

<!-- REF #_command_.Session.Syntax -->**Session** : 4D.Session<!-- END REF -->

<!--REF #_command_.Session.Params-->

| Parâmetro | Tipo                        |                             | Descrição       |
| --------- | --------------------------- | --------------------------- | --------------- |
| Resultado | 4D. Session | &#8592; | Objecto Session |

<!-- END REF-->

<details><summary>História</summary>

| Release | Mudanças                                               |
| ------- | ------------------------------------------------------ |
| 20 R8   | Support of standalone sessions                         |
| 20 R5   | Support of remote client and stored procedure sessions |
| 18 R6   | Adicionado                                             |

</details>

## Descrição

O comando `Session` <!-- REF #_command_.Session.Summary -->retorna o objeto `Session` correspondente à sessão atual do usuário<!-- END REF -->.

Dependendo do processo a partir do qual o comando é chamado, a sessão atual do usuário pode ser:

- uma sessão web (quando [sessões escaláveis são ativadas](WebServer/sessions.md#enabling-web-sessions)),
- uma sessão de cliente remoto,
- a sessão de procedimentos armazenados,
- a sessão *designer* em um aplicativo autônomo.

Para obter mais informações, consulte [Tipos de sessão](../API/SessionClass.md#session-types).

If the command is called from a non supported context (e.g. scalable sessions disabled), it returns *Null*.

## Sessões web

The `Session` object of web sessions is available from any web process:

- `On Web Authentication`, `On Web Connection`, and `On REST Authentication` database methods,
- código processado a través das etiquetas 4D nas páginas semidinâmicas (4DTEXT, 4DHTML, 4DEVAL, 4DSCRIPT/, 4DCODE)
- os métodos projeto com o atributo "Available through 4D tags and URLs (4DACTION...)" e chamados através de 4DACTION/ urls,
- [`On Mobile App Authentication`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication) and [`On Mobile App Action`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-action) database methods for mobile requests,
- Funções ORDA [chamadas com solicitações REST](../REST/ClassFunctions.md).

Para obter mais informações sobre as sessões dos usuários da web, consulte a seção [Sessões de Servidor Web](../WebServer/sessions.md).

## Sessões cliente remoto

The `Session` object of remote client sessions is available from:

- Métodos de projeto que têm o atributo [Execute on Server](../Project/code-overview.md#execute-on-server) (são executados no processo "geminado" do processo do cliente),
- Triggers,
- 'Conexão aberta com o servidor' e 'Conexão com o servidor' métodos de banco de dados.

Para mais informações em sessões usuários remotos, consulte o parágrafo [**Sessões usuário cliente remoto**](../Desktop/clientServer.md#remote-user-sessions).

## a sessão de procedimentos armazenados

Todos os processos de procedimento armazenado compartilham a mesma sessão de usuário virtual. O objeto `Session` de procedimentos armazenados está disponível em:

- métodos chamados com o comando [`Execute on server`](../commands-legacy/execute-on-server.md),
- `On Server Startup`, `On Server Shutdown`, `On Backup Startup`, `On Backup Shutdown`, and `On System event` database methods

Para informações sobre procedimentos armazenados, consulte a página [4D Server e 4D Language](https://doc.4d.com/4Dv20/4D/20/4D-Server-and-the-4D-Language.300-6330554.en.html).

## Standalone session

The `Session` object is available from any process in standalone (single-user) applications so that you can write and test your client/server code using the `Session` object in your 4D development environment.

## Exemplo

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

[Session storage](session-storage.md)\
[Session API](../API/SessionClass.md)\
[Web server user sessions](../WebServer/sessions.md)

## Propriedades

|                   |                             |
| ----------------- | --------------------------- |
| Número de comando | 1714                        |
| Thread safe       | &check; |


