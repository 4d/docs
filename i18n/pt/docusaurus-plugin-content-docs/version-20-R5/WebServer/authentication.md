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

If no custom authentication is provided, 4D calls the [`On Web Authentication`](#on-web-authentication) database method (if it exists). In addition to $1 and $2, only the IP addresses of the browser and the server ($3 and $4) are provided, the user name and password ($5 and $6) are empty. El método debe devolver **True** en $0 si el usuario se autentifica con éxito, entonces se sirve el recurso solicitado, o **False** en $0 si la autenticación falló.

> **Atención**: si el método de base de datos `On Web Authentication` no existe, las conexiones se aceptan automáticamente (modo de prueba).

### Protocolo Basic

When a user connects to the server, a standard dialog box appears on their browser in order for them to enter their user name and password.

> O nome e a palavra-passe introduzidos pelo utilizador são enviados sem encriptação no cabeçalho do pedido HTTP. Este modo requer normalmente HTTPS para garantir a confidencialidade.

Os valores introduzidos são então avaliados:

- Si la opción **Incluir contraseñas de 4D** está marcada, las credenciales de los usuarios se evaluarán primero contra la [tabla interna de usuarios 4D](Users/overview.md).
  - Se o nome de usuário enviado pelo navegador existir na tabela de usuários 4D e a senha estiver correta, a conexão será aceita. Se a palavra-passe estiver incorreta, a ligação é recusada.
  - If the user name does not exist in the table of 4D users, the [`On Web Authentication`](#on-web-authentication) database method is called. Si el método base `On Web Authentication` no existe, se rechazan las conexiones.
- If the **Include 4D passwords** option is not checked, user credentials are sent to the [`On Web Authentication`](#on-web-authentication) database method along with the other connection parameters (IP address and port, URL...) so that you can process them. Si el método base `On Web Authentication` no existe, se rechazan las conexiones.

> Com o servidor da Web 4D Client, lembre-se de que todos os sites publicados pelas máquinas 4D Client compartilharão a mesma tabela de usuários. Validação de usuários/senhas é realizada pela aplicação 4D Server.

### Protocolo DIGEST

This mode provides a greater level of security since the authentication information is processed by a one-way process called hashing which makes their contents impossible to decipher.

Como no modo BASIC, os usuários devem digitar seu nome e senha ao se conectarem. The [`On Web Authentication`](#on-web-authentication) database method is then called. When the DIGEST mode is activated, the $6 parameter (password) is always returned empty. In fact, when using this mode, this information does not pass by the network as clear text (unencrypted). Por lo tanto, en este caso es imprescindible evaluar las solicitudes de conexión mediante el comando `WEB Validate digest`.

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
- when the web server reveives a URL beginning with `rest/` and the REST server is launched (in this case, the authentication is handled through the [`On REST Authentication` database method](REST/configuration.md#using-the-on-rest-authentication-database-method) or [Structure settings](REST/configuration.md#using-the-structure-settings)).

### Sintaxe

**On Web Authentication**( _$1_ : Text ; _$2_ : Text ; _$3_ : Text ; _$4_ : Text ; _$5_ : Text ; _$6_ : Text ) -> $0 : Boolean

| Parâmetros | Tipo       |     | Descrição                                                                |
| ---------- | ---------- | :-: | ------------------------------------------------------------------------ |
| $1         | Text       |  <- | URL                                                                      |
| $2         | Text       |  <- | Cabeçalhos HTTP + corpo HTTP (até um limite de 32 kb) |
| $3         | Text       |  <- | Endereço IP do cliente Web (browser)                  |
| $4         | Text       |  <- | Endereço IP do servidor                                                  |
| $5         | Text       |  <- | Nome de usuario                                                          |
| $6         | Text       |  <- | Senha                                                                    |
| $0         | Parâmetros |  -> | True = pedido aceite, False = pedido rejeitado                           |

Estes parâmetros devem ser declarados da seguinte forma:

```4d
//On Web Authentication database method
 
 C_TEXT($1;$2;$3;$4;$5;$6)
 C_BOOLEAN($0)
 
//Code for the method
```

Como alternativa, puede utilizar la sintaxis [parámetros nombrados](Concepts/parameters.md#named-parameters):

```4d
// On Web Authentication database method
#DECLARE ($url : Text; $header : Text; \
  $BrowserIP : Text; $ServerIP : Text; \
  $user : Text; $password : Text) \
  -> $RequestAccepted : Boolean

```

> Todos los parámetros del método base `On Web Authentication` no están necesariamente rellenados. La información recibida por el método base depende del [modo de autenticación](#authentication-mode) seleccionado).

#### $1 - URL

El primer parámetro (`$1`) es la URL recibida por el servidor, de la que se ha eliminado la dirección del host.

Vejamos o exemplo de uma ligação Intranet. Suponha que o endereço IP do seu Web Server 4D é 123.45.67.89. The following table shows the values of $1 depending on the URL entered in the Web browser:

| URL introduzido no navegador Web                                                                                                                  | Valor do parâmetro $1                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| 123.45.67.89                                                                                      | /                                                                                     |
| http://123.45.67.89                                                               | /                                                                                     |
| 123.45.67.89/Customers                                                                            | /Customers                                                                            |
| http://123.45.67.89/Customers/Add                                                 | /Customers/Add                                                                        |
| 123.45.67.89/Do_This/If_OK/Do_That | /Do_This/If_OK/Do_That |

#### $2 - Cabeçalho e corpo do pedido HTTP

El segundo parámetro (`$2`) es el encabezado y el cuerpo de la petición HTTP enviada por el navegador web. Tenga en cuenta que esta información se pasa a su método base `On Web Authentication` tal cual. Its contents will vary depending on the nature of the web browser which is attempting the connection.

If your application uses this information, it is up to you to parse the header and the body. Puede utilizar los comandos `WEB GET HTTP HEADER` y `WEB GET HTTP BODY`.

> For performance reasons, the size of data passing through the $2 parameter must not exceed 32 KB. Para além deste tamanho, são truncados pelo servidor HTTP 4D.

#### $3 - Endereço IP do cliente Web

El parámetro `$3` recibe la dirección IP de la máquina del navegador. This information can allow you to distinguish between intranet and internet connections.

> 4D devolve endereços IPv4 em formato híbrido IPv6/IPv4 escritos com um prefixo de 96 bits, por exemplo ::ffff:192.168.2.34 para o endereço IPv4 192.168.2.34. Para más información, consulte la sección [Soporte IPv6](webServerConfig.md#about-ipv6-support).

#### $4 - Endereço IP do servidor

El parámetro `$4` recibe la dirección IP utilizada para llamar al servidor web. 4D allows for multi-homing, which allows you to exploit machines with more than one IP address. Para más información, consulte la [página Configuración](webServerConfig.md#ip-address-to-listen).

#### $5 e $6 - Nome de usuário e palavra-passe

Los parámetros `$5` y `$6` reciben el nombre de usuario y la contraseña introducidos por el usuario en la caja de diálogo de identificación estándar que muestra el navegador. Esta caja de diálogo aparece para cada conexión, si se selecciona la autenticación [basic](#basic-protocol) o [digest](#digest-protocol).

> If the user name sent by the browser exists in 4D, the $6 parameter (the user’s password) is not returned for security reasons.

#### Parâmetro $0

El método base `On Web Authentication` devuelve un booleano en $0:

- Se $0 é True, a ligação é aceite.

- Se $0 é False, a ligação é recusada.

El método base `On Web Connection` sólo se ejecuta si la conexión ha sido aceptada por `On Web Authentication`.

> **ADVERTENCIA**<br/>Si no se define ningún valor en $0 o si $0 no está definido en el método base `On Web Authentication`, la conexión se considera aceptada y se ejecuta el método base `On Web Connection`.

> - Do not call any interface elements in the `On Web Authentication` database method (`ALERT`, `DIALOG`, etc.) because otherwise its execution will be interrupted and the connection refused. O mesmo acontecerá se ocorrer um erro durante seu processamento.

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
