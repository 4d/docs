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

| Release | Mudanças                                                      |
| ------- | ------------------------------------------------------------- |
| 20 R5   | Suporte a sessões de procedimento armazenado e cliente remoto |
| 18 R6   | Adicionado                                                    |

</details>

## Descrição

O comando `Sessão` <!-- REF #_command_.Session.Summary -->retorna o objeto `Session` correspondente à sessão atual do usuário<!-- FIM REF -->.

Dependendo do processo a partir do qual o comando é chamado, a sessão atual do usuário pode ser:

- uma sessão web (quando [sessões escaláveis são ativadas](WebServer/sessions.md#enabling-web-sessions)),
- uma sessão de cliente remoto,
- a sessão de procedimentos armazenados.

Para obter mais informações, consulte [Tipos de sessão](../command/session.md-types).

Se o comando for chamado de um contexto não compatível (aplicativo de usuário único, sessões dimensionáveis desativadas...), ele retornará Null\*.

## Sessões web

O objeto `Session` das sessões web está disponível em qualquer processo web:

- nos métodos de database `On Web Authentication`, `On Web Connection` e`On REST Authentication`,
- no código processado a través das etiquetas 4D nas páginas semidinâmicas (4DTEXT, 4DHTML, 4DEVAL, 4DSCRIPT/, 4DCODE)
- nos métodos projeto com o atributo "Available through 4D tags and URLs (4DACTION...)" e chamados através de 4DACTION/ urls,
- nos métodos de database para petições móveis [`On Mobile App Authentication`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication) and [`On Mobile App Action`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-action),
- Funções ORDA [chamadas com solicitações REST](../REST/ClassFunctions.md).

Para obter mais informações sobre as sessões dos usuários da web, consulte a seção [Sessões de Servidor Web](../WebServer/sessions.md).

## Sessões cliente remoto

O objeto `Session` das sessões remotas de clientes está disponível em:

- Métodos de projeto que têm o atributo [Execute on Server](../Project/code-overview.md#execute-on-server) (são executados no processo "geminado" do processo do cliente),
- Triggers,
- 'Conexão aberta com o servidor' e 'Conexão com o servidor' métodos de banco de dados.

Para mais informações em sessões usuários remotos, consulte o parágrafo [**Sessões usuário cliente remoto**](../Desktop/clientServer.md#remote-user-sessions).

## a sessão de procedimentos armazenados

Todos os processos de procedimento armazenado compartilham a mesma sessão de usuário virtual. O objeto `Session` de procedimentos armazenados está disponível em:

- métodos chamados com o comando [`Execute on server`](../commands-legacy/execute-on-server.md),
- Métodos de database `On Server Startup`, `On Server Shutdown`, `On Backup Startup`, `On Backup Shutdown` e`On System event`

Para informações sobre procedimentos armazenados, consulte a página [4D Server e 4D Language](https://doc.4d.com/4Dv20/4D/20/4D-Server-and-the-4D-Language.300-6330554.en.html).

## Exemplo

Você definiu o método `action_Session` com o atributo "Disponível através de tags 4D e URLs". Pode chamar ao método introduzindo a URL abaixo no navegador:

```
IP:port/4DACTION/action_Session
```

```4d
  //Método action_Session
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

## Propriedades

|                   |                             |
| ----------------- | --------------------------- |
| Número de comando | 1714                        |
| Thread safe       | &check; |


