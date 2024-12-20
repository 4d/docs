---
id: authentication
title: Autenticação
---

Authenticating users is necessary when you want to provide specific access rights to web users. Authentication designates the way the information concerning the user credentials (usually name and password) are collected and processed.

## Modos de autenticação

El servidor web 4D ofrece tres modos de autenticación, que puede seleccionar en la página **Web**/**Opciones (I)** de la ventana Propiedades:

![](../assets/en/WebServer/authentication.png)

> Se recomienda utilizar una autenticación **personalizada**.

### Visão Geral

O funcionamento do sistema de acesso do servidor web 4D está resumido no diagrama seguinte:

![](../assets/en/WebServer/serverAccess.png)

> Las peticiones que comienzan por `rest/` son gestionadas directamente por el [servidor REST](REST/configuration.md).

### Personalizado (padrão)

Basically in this mode, it's up to the developer to define how to authenticate users. 4D sólo evalúa las peticiones HTTP [que requieren una autenticación](#method-calls).

Este modo de autenticação é o mais flexível porque permite que você:

- ou delegar a autenticação do usuário a um aplicativo de terceiros (por exemplo, uma rede social, SSO);
- o bien, ofrecer una interfaz al usuario (por ejemplo, un formulario web) para que pueda crear su cuenta en su base de datos clientes; luego, puede autenticar a los usuarios con cualquier algoritmo personalizado (ver [este ejemplo](sessions.md#example) del O importante é que você nunca armazene a senha de forma não protegida, usando esse código:

```4d
//... criar conta de usuário
ds.webUser.password:=Generate password hash($password)  
ds.webUser.save()
```

Ver también [este ejemplo](gettingStarted.md#authenticating-users) del capítulo "Cómo comenzar".

If no custom authentication is provided, 4D calls the [`On Web Authentication`](#on-web-authentication) database method (if it exists). In addition to $urll and $content, only the IP addresses of the browser and the server ($IPClient and $IPServer) are provided, the user name and password ($user and $password) are empty. El método debe devolver **True** en $0 si el usuario se autentifica con éxito, entonces se sirve el recurso solicitado, o **False** en $0 si la autenticación falló.

> **Atención**: si el método de base de datos `On Web Authentication` no existe, las conexiones se aceptan automáticamente (modo de prueba).

### Protocolo Basic

When a user connects to the server, a standard dialog box appears on their browser in order for them to enter their user name and password.

> O nome e a palavra-passe introduzidos pelo utilizador são enviados sem encriptação no cabeçalho do pedido HTTP. Este modo requer normalmente HTTPS para garantir a confidencialidade.

Os valores introduzidos são então avaliados:

- Si la opción **Incluir contraseñas de 4D** está marcada, las credenciales de los usuarios se evaluarán primero contra la [tabla interna de usuarios 4D](Users/overview.md).
  - Se o nome de usuário enviado pelo navegador existir na tabela de usuários 4D e a senha estiver correta, a conexão será aceita. Se a palavra-passe estiver incorreta, a ligação é recusada.
  - Se o nome de usuário não existir na tabela de usuários 4D, o método de banco de dados [`On Web Authentication`](#on-web-authentication) será chamado. Si el método base `On Web Authentication` no existe, se rechazan las conexiones.
- If the **Include 4D passwords** option is not checked, user credentials are sent to the [`On Web Authentication`](#on-web-authentication) database method along with the other connection parameters (IP address and port, URL...) para que você possa processá-los. Si el método base `On Web Authentication` no existe, se rechazan las conexiones.

> Com o servidor da Web 4D Client, lembre-se de que todos os sites publicados pelas máquinas 4D Client compartilharão a mesma tabela de usuários. Validação de usuários/senhas é realizada pela aplicação 4D Server.

### Protocolo DIGEST

This mode provides a greater level of security since the authentication information is processed by a one-way process called hashing which makes their contents impossible to decipher.

Como no modo BASIC, os usuários devem digitar seu nome e senha ao se conectarem. O método banco de dados [`On Web Authentication`](#on-web-authentication) é então chamado. When the DIGEST mode is activated, the $password parameter (password) is always returned empty. In fact, when using this mode, this information does not pass by the network as clear text (unencrypted). Por lo tanto, en este caso es imprescindible evaluar las solicitudes de conexión mediante el comando `WEB Validate digest`.

> Você deve reiniciar o servidor Web para que as alterações feitas nesses parâmetros sejam levadas em conta.

## On Web Authentication

El método de base de datos `On Web Authentication` se encarga de gestionar el acceso al motor del servidor web. É chamado por 4D ou 4D Server quando uma solicitação HTTP dinâmica é recebida.

### Chamadas métodos de base

El método base `On Web Authentication` se llama automáticamente cuando una solicitud o procesamiento requiere la ejecución de algún código 4D (excepto para las llamadas REST). It is also called when the web server receives an invalid static URL (for example, if the static page requested does not exist).

Por tanto, se llama al método base `On Web Authentication`:

- quando o servidor da Web recebe um URL solicitando um recurso que não existe
- cuando el servidor web recibe una URL que empieza por `4DACTION/`, `4DCGI/`...
- cuando el servidor web recibe una URL de acceso a la raíz y no se ha definido ninguna página de inicio en la Configuración o mediante el comando `WEB SET HOME PAGE`
- cuando el servidor web procesa una etiqueta que ejecuta código (por ejemplo, `4DSCRIPT`) en una página semidinámica.

Por tanto, NO se llama al método base `On Web Authentication`:

- quando o servidor Web recebe um URL solicitando uma página estática válida.
- quando o servidor da Web recebe um URL que começa com `rest/` e o servidor REST é iniciado (nesse caso, a autenticação é tratada por meio da função [`ds.authentify`](../REST/authUsers#force-login-mode) ou (obsoleto) o método de banco de dados [`On REST Authentication`](REST/configuration.md#using-the-on-rest-authentication-database-method) ou [Configurações de estrutura](REST/configuration.md#using-the-structure-settings)).

### Sintaxe

**On Web Authentication**( *$url* : Text ; *$content* : Text ; *$IPClient* : Text ; *$IPServer* : Text ; *$user* : Text ; *$password* : Text ) -> $accept : Boolean

| Parâmetros | Tipo       |                             | Descrição                                                                |
| ---------- | ---------- | :-------------------------: | ------------------------------------------------------------------------ |
| $url       | Text       | <- | URL                                                                      |
| $content   | Text       | <- | Cabeçalhos HTTP + corpo HTTP (até um limite de 32 kb) |
| $IPClient  | Text       | <- | Endereço IP do cliente Web (browser)                  |
| $IPServer  | Text       | <- | Endereço IP do servidor                                                  |
| $user      | Text       | <- | Nome de usuario                                                          |
| $password  | Text       | <- | Senha                                                                    |
| $accept    | Parâmetros |              ->             | True = pedido aceite, False = pedido rejeitado                           |

Estes parâmetros devem ser declarados da seguinte forma:

```4d
// On Web Authentication database method
#DECLARE ($url : Text; $content : Text; \
  $IPClient : Text; $IPServer : Text; \
  $user : Text; $password : Text) \
  -> $accept : Boolean

//Code for the method

```

:::note

Todos los parámetros del método base `On Web Authentication` no están necesariamente rellenados. La información recibida por el método base depende del [modo de autenticación](#authentication-mode) seleccionado).

:::

#### $url - URL

The first parameter (`$url`) is the URL received by the server, from which the host address has been removed.

Vejamos o exemplo de uma ligação Intranet. Suponha que o endereço IP do seu Web Server 4D é 123.45.67.89. The following table shows the values of $urll depending on the URL entered in the Web browser:

| URL introduzido no navegador Web                                                                                                                  | Valor do parâmetro $urll                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| 123.45.67.89                                                                                      | /                                                                                     |
| http://123.45.67.89                                                               | /                                                                                     |
| 123.45.67.89/Customers                                                                            | /Customers                                                                            |
| http://123.45.67.89/Customers/Add                                                 | /Customers/Add                                                                        |
| 123.45.67.89/Do_This/If_OK/Do_That | /Do_This/If_OK/Do_That |

#### $content - Header and Body of the HTTP request

The second parameter (`$content`) is the header and the body of the HTTP request sent by the web browser. Tenga en cuenta que esta información se pasa a su método base `On Web Authentication` tal cual. Its contents will vary depending on the nature of the web browser which is attempting the connection.

If your application uses this information, it is up to you to parse the header and the body. Puede utilizar los comandos `WEB GET HTTP HEADER` y `WEB GET HTTP BODY`.

> For performance reasons, the size of data passing through the $content parameter must not exceed 32 KB. Para além deste tamanho, são truncados pelo servidor HTTP 4D.

#### $IPClient - Endereço IP do cliente Web

O parâmetro `$IPClient` recebe o endereço IP da máquina do navegador. This information can allow you to distinguish between intranet and internet connections.

> 4D devolve endereços IPv4 em formato híbrido IPv6/IPv4 escritos com um prefixo de 96 bits, por exemplo ::ffff:192.168.2.34 para o endereço IPv4 192.168.2.34. Para más información, consulte la sección [Soporte IPv6](webServerConfig.md#about-ipv6-support).

#### $IPServer - Endereço IP do servidor

The `$IPServer` parameter receives the IP address used to call the web server. 4D allows for multi-homing, which allows you to exploit machines with more than one IP address. Para más información, consulte la [página Configuración](webServerConfig.md#ip-address-to-listen).

#### $user e $password - Nome de usuário e senha

The `$user` and `$password` parameters receive the user name and password entered by the user in the standard identification dialog box displayed by the browser. Esta caja de diálogo aparece para cada conexión, si se selecciona la autenticación [basic](#basic-protocol) o [digest](#digest-protocol).

> If the user name sent by the browser exists in 4D, the $password parameter (the user’s password) is not returned for security reasons.

#### $accept - Retorno de função

The `On Web Authentication` database method returns a boolean:

- If it is True, the connection is accepted.

- If it is False, the connection is refused.

El método base `On Web Connection` sólo se ejecuta si la conexión ha sido aceptada por `On Web Authentication`.

:::warning

- If no value is returned, the connection is considered as **accepted** and the `On Web Connection` database method is executed.
- Do not call any interface elements in the `On Web Authentication` database method (`ALERT`, `DIALOG`, etc.) because otherwise its execution will be interrupted and the connection refused. O mesmo acontecerá se ocorrer um erro durante seu processamento.

:::

### Exemplo

Ejemplo del método base `On Web Authentication` en [Modo DIGEST](#digest-protocol):

```4d
 // On Web Authentication Database Method
 #DECLARE ($url : Text; $header : Text; $ipB : Text; $ipS : Text; \
 	$user : Text; $pw : Text) -> $valid : Boolean
  
 var $found : cs.WebUserSelection
 $valid:=False

 $found:=ds.WebUser.query("User === :1";$user)
 If($found.length=1) // User is found
 	$valid:=WEB Validate digest($user;[WebUser]password)
 Else
    $valid:=False // User does not exist
 End if
```
