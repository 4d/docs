---
id: qodly-studio
title: Qodly Studio for 4D
---

:::caution Prévia do desenvolvedor

Qodly Studio for 4D is currently in the **Developer Preview** phase. Não deve ser usado na produção.

:::

**Qodly Studio** é um construtor de interfaces para aplicações web. It provides developers with a graphical page editor to design applications running in web browsers or smartphones. Ele suporta nativamente os [objetos ORDA](../ORDA/overview.md).

You can use Qodly Studio directly from your **4D environment** to build modern and sophisticated interfaces that you can easily integrate to your existing 4D projects and deploy **on premise**.

Qodly Studio can also be used in the [**Qodly Cloud platform**](https://qodly.com), dedicated to the development of web business applications.

With Qodly Studio, you will discover a totally new web UI, get familiar with the concept of Qodly Sources, and learn how to:

- create Qodly pages by placing components on a canvas
- mapear componentes para dados
- acionar o código 4D configurando eventos
- e muito mais.

:::info

The development with Qodly Studio for 4D requires at least a [4D Silver Partner license](https://us.4d.com/4d-partner-program). Qodly Studio options and menu items won't appear if the license is not activated.

:::

## Configuração

### Requisitos

#### Navegador

Qodly Studio suporta os seguintes navegadores Web:

- Chrome
- Edge
- FireFox

A resolução recomendada é 1920x1080.

#### Aplicação 4D

- Desenvolvimento: 4D v20 R2 ou superior
- Desenvolvimento: 4D Server v20 R2 ou superior
- Qodly Studio only works with 4D projects (binary databases are not supported).
- Web sessions (*aka* Scalable sessions) must [be enabled](sessions.md#enabling-web-sessions).
- The 4D code called by Qodly forms must be [thread-safe](preemptiveWeb.md).

### Habilitando o acesso a Qodly Studio

Por padrão, o acesso a Qodly Studio não é concedido.

Qodly Studio is served by the [WebAdmin web server](../Admin/webAdmin.md) and displays data from 4D projects handled by the [4D web server](webServer.md).

Para permitir o acesso ao Qodly Studio, você deve permiti-lo explicitamente em dois níveis:

- a nível 4D (4D ou 4D Server)
- a nível do projeto

If one of the two levels (or both) are not enabled, access to Qodly Studio is denied (a 403 page is returned).

#### No nível 4D

As a first security level, you need to [allow access to Qodly Studio on the WebAdmin web server](../Admin/webAdmin.md#enable-access-to-qodly-studio). This setting applies to the 4D application (4D or 4D Server) on the host machine. Todos os projetos abertos com essa aplicação 4D consideram essa configuração.

Keep this option unchecked if you want to make sure no access to Qodly Studio is allowed on the application. Marque esta opção para ser possível acessar a Qodly Studio. No entanto, você ainda precisa habilitá-lo em todos os níveis do projeto.

Additionally, you can [configure the WebAdmin web server's HTTP/HTTPS port used](../Admin/webAdmin.md#accept-http-connections-on-localhost).

:::note

After any change to these settings, you must [restart the WebAdmin web server](../Admin/webAdmin.md#start-and-stop) for the new configuration to be effective.

:::

#### A nível do projeto

After you have enabled access to Qodly Studio at the 4D level, you need to explicitly designate every project that can be accessed. The **Enable access to Qodly Studio** option must be enabled on the [Web Features page of the 4D application's Settings](../settings/web.md#enable-access-to-qodly-studio).

Keep in mind that [user settings](../settings/overview.md) can be defined at several levels, and that priorities apply.

### Ativando autenticação

Authentication on the WebAdmin web server is granted using an access key. Para mais detalhes, consulte [Chave de Acesso](../Admin/webAdmin.md#access-key).

### Gerenciamento de projetos

In accordance with the management of 4D projects, only the following usages are supported:

- o desenvolvimento com Qodly Studio deve ser feito usando **4D** (monousuário).
- deployment of 4D applications powered with Qodly forms must be done using **4D Server**.

## Abertura do Qodly Studio

The Qodly Studio page is available when the [WebAdmin web server is running](../Admin/webAdmin.md#start-and-stop) and authentication is activated (see above).

Há duas maneiras de acessar Qodly Studio:

- from your 4D single-user application, go to **Design** > **Qodly Studio...**.
  If the WebAdmin web server is already running, depending on its configuration, your default browser opens at `IPaddress:HTTPPort/studio` or `IPaddress:HTTPSPort/studio`. Otherwise, you will be prompted if you want to start the WebAdmin web server first.

- on a browser, with the WebAdmin web server running (launched from 4D or 4D Server), enter the following address:

`IPaddress:HTTPPort/studio`

ou :

`IPaddress:HTTPSPort/studio`

For example, after launching a local web server on port 7080, type this address in your browser:

`localhost:7080/studio`

You will then be prompted to enter the [access key](../Admin/webAdmin.md#access-key) to access Qodly Studio.

## Utilizar Qodly Studio

### Documentation

The official Qodly Studio documentation is available on the [Qodly documentation website](https://developer.qodly.com/docs/studio/overview).

You can rely on this documentation and its associated resources for developing web applications powered by Qodly forms. However, depending on implementation stage, 4D developers will either use Qodly Studio or 4D IDE (see [Feature comparison](#feature-comparison)).

Code examples are provided in [QodlyScript](https://developer.qodly.com/docs/category/qodlyscript), but since QodlyScript inherits from the 4D Language, you won't be lost. For more information, see the [From QodlyScript to 4D Language](from-qodlyscript-to-4d.md) page.

:::info

There is no direct compatibility between apps implemented with 4D and apps implemented with Qodly.

:::

### Comparação de funcionalidades

|                                                                                         | Qodly Studio para desenvolvedores 4D que usam o IDE 4D                                                         | Qodly Studio para desenvolvedores Qodly                                             |
| --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Visualizar e editar tabelas (classes de dados), atributos e relações | Editor de estrutura 4D(1)                                                                   | Qodly Studio Model Editor                                                           |
| Páginas Qodly                                                                           | Editor de páginas Qodly Studio                                                                                 | Editor de páginas Qodly Studio                                                      |
| Formulários para desktop                                                                | 4D IDE                                                                                                         | *não suportado*                                                                     |
| Linguagem de programação                                                                | Linguagem 4D com ORDA                                                                                          | [QodlyScript](https://developer.qodly.com/docs/category/qodlyscript) featuring ORDA |
| IDE de codificação                                                                      | 4D IDE code editor/VS Code with [4D extension](https://github.com/4d/4D-Analyzer-VSCode)(2) | Editor de código Qodly Studio                                                       |
| Depurador                                                                               | Depurador 4D IDE                                                                                               | Depurador Qodly Studio                                                              |
| REST/Web roles and privileges                                                           | roles.json direct edit/Qodly Studio roles and privileges editor                                | Qodly Studio role and privileges editor                                             |

(1) If you click on the **Model** button in Qodly Studio, nothing happens.
(2) When you open some 4D code in Qodly Studio, syntax coloring is not available and a "Lsp not loaded" warning is displayed.

### Línguagem

The following commands and classes are dedicated to the server-side management of Qodly pages:

- [`Web Form`](../API/WebFormClass.md#web-form) command: returns the Qodly page as an object.
- [`Web Event`](../API/WebFormClass.md#web-event) command: returns events triggered within Qodly page components.
- [`WebForm`](../API/WebFormClass.md) class: functions and properties to manage the rendered Qodly page.
- [`WebFormItem`](../API/WebFormItemClass.md) class: functions and properties to manage Qodly page components.

### Uso de métodos projeto

Recomendamos o uso de funções classe em vez de métodos projeto. Apenas as funções de classe podem ser chamadas a partir de componentes. No entanto, você ainda pode usar seus métodos projeto no Qodly Studio de duas maneiras:

- Você pode chamar seus métodos a partir de funções classe.
- You can directly [execute your methods](https://developer.qodly.com/docs/studio/coding#methods-and-classes) from the Qodly Explorer.

### Uso fora de linha

You can develop with Qodly Studio while your computer is not connected to the internet. Nesse caso, entretanto, os seguintes recursos não estão disponíveis:

- [Templates](https://developer.qodly.com/docs/studio/design-webforms/templates): the Template library is empty
- UI tips: they are not displayed when you click on ![alt-text](../assets/en/WebServer/tips.png) icons.

## Deployment

### Ativação da renderização

Qodly Studio encapsulates Qodly pages, including layout, data connections, and event-driven logic, in a structured JSON file. This JSON file is processed on-the-fly by the **Qodly renderer** to serve a fully functional web page.

:::info

See [this page](https://developer.qodly.com/docs/studio/rendering) for detailed information on how to render Qodly pages in Qodly.

:::

To enable the rendering of Qodly pages, the following options must be set.

- The 4D project's **Settings** > **Web** > **Web Features** > [**Expose as REST server**](../settings/web.md#exposed-as-rest-server) option must be activated.
- O [servidor Web 4D] (webServer.md) deve estar em execução.

:::note

[Renderer buttons](https://developer.qodly.com/docs/studio/rendering#how-to-render-a-webform) are not available if the configuration options are not activated.

:::

### Escopo dos formulários Qodly

When rendering Qodly forms in the Qodly Studio, the renderer will connect to the 4D web server through HTTP or HTTPS, depending on the settings, following the same HTTP/HTTPS connection pattern as for the [4D WebAdmin web server](../Admin/webAdmin.md#accept-http-connections-on-localhost). See also [this paragraph](#about-license_usage) about URL schemes and license usage.

Keep in mind that Qodly Studio runs through the 4D WebAdmin web server. When you use Qodly Studio as a developer, even when you preview a Qodly Page in the studio, you're using the 4D WebAdmin web server. This allows you to see dataclasses, functions and attributes that are not exposed as REST resources for example (they are greyed out).

However, page rendering happens outside Qodly Studio, and is served by the standard 4D web server. In this situation, your web application cannot access assets that are not exposed as REST resources. See [Exposed vs non-exposed functions](../ORDA/ordaClasses.md#exposed-vs-non-exposed-functions) and [Exposing tables](../REST/configuration.md#exposing-tables) for more information on how to expose assets.

### Acessar páginas Qodly

For deployment, the WebAdmin server is not necessary. End-user access to your web application made with Qodly Studio is based on the 4D REST protocol, and as such, it works as through a conventional 4D remote application.

Your Qodly pages are available through the following url:

```
IP:port/$lib/renderer/?w=QodlyPageName
```

...where *IP:port* represents the address of the web server and *QodlyPageName* is the name of the Qodly page.

Por exemplo:

```
https://www.myWebSite.com/$lib/renderer/?w=welcome
```

## Force login

With Qodly Studio for 4D, the ["force login" mode](../REST/authUsers.md#force-login-mode) allows you to control the number of opened web sessions that require 4D Client licenses. You can also [logout](#logout) the user at any moment to decrement the number of retained licenses.

### Configuração

Make sure the ["force login" mode](../REST/authUsers.md#force-login-mode) is enabled for your 4D application in the [Roles and Privileges page](https://developer.qodly.com/docs/studio/roles/rolesPrivilegesOverview/), using the **Force login** option:

![alt-text](../assets/en/WebServer/forcelogin.png)

You can also set this option directly in the [**roles.json** file](../ORDA/privileges.md#rolesjson-file).

You just need then to implemented the [`authentify()`](../REST/authUsers.md#function-authentify) function in the datastore class and call it from the Qodly page. A licence will be consumed only when the user is actually logged.

:::note Compatibidade

When the legacy login mode ([deprecated as of 4D 20 R6](https://blog.4d.com/force-login-now-is-the-default-mode-for-all-rest-authentications)) is enabled, any REST request, including the rendering of an authentication Qodly page, creates a web session on the server and gets a 4D Client license, whatever the actual result of the authentication. For more information, refer to [this blog post](https://blog.4d.com/improved-4d-client-licenses-usage-with-qodly-studio-for-4d) that tells the full story.

:::

#### Exemplo

In a simple Qodly page with login/password inputs, a "Submit" button calls the following `authentify()` function we have implemented in the DataStore class:

```4d

exposed Function authentify($credentials : Object) : Text

var $salesPersons : cs.SalesPersonsSelection
var $sp : cs.SalesPersonsEntity

$salesPersons:=ds.SalesPersons.query("identifier = :1"; $credentials.identifier)
$sp:=$salesPersons.first()

If ($sp#Null)
	If (Verify password hash($credentials.password; $sp.password))

		Session.clearPrivileges()
		Session.setPrivileges("") //guest session

		return "Authentication successful"
	Else
		return "Wrong password"
	End if
Else
	return "Wrong user"
End if
```

This call is accepted and as long as the authentication is not successful, `Session.setPrivileges()` is not called, thus no license is consumed. Una vez que se llama a `Session.setPrivileges()`, se utiliza una licencia de cliente de 4D y luego se acepta cualquier solicitud REST.

### Encerrar sessão

When the ["force login" mode is enabled](#setting-the-force-login-mode), Qodly Studio for 4D allows you to implement a logout feature in your application.

To logout the user, you just need to execute the **Logout** standard action from the Qodly page. In Qodly Studio, you can associate this standard action to a button for example:

![alt-text](../assets/en/WebServer/logout.png)

Triggering the logout action from a web user session has the following effects:

- the current web user session loses its privileges, only [descriptive REST requests](../REST/authUsers.md#descriptive-rest-requests) are allowed,
- a licença associada ao 4D é liberada,
- the `Session.storage` is kept until the web session inactivity timeout is reached (at least one hour). During this period after a logout, if the user logs in again, the same session is used and the `Session.storage` shared object is available with its current contents.

## Sobre o uso da licença para renderização

In default mode when any page is rendered, or in "force login" mode when a page handling data or calling a function is rendered, you must have an available license, as rendering Qodly forms targets the project database's main web server.

### Esquemas URL

A configuração do esquema URL de Qodly Studio (HTTP e HTTPS) determina quantas licenças são retidas ao renderizar os formulários Qodly. With the appropriate configuration, you can avoid unnecessary license retaining.

As explained in the [configuration](#configuration) section, the WebAdmin web server provides a secured web access to Qodly Studio. On the other hand, the [renderer](#rendering-webforms) communicates with the 4D web server of the database using REST requests. Dessa forma, se comporta como um Cliente 4D convencional.

Se você executar o renderizador a partir do Qodly Studio e esses dois servidores web não forem acessados através do mesmo esquema de URL (HTTP ou HTTPS), isso pode levar a uma contagem incorreta de licenças.

:::info

Using different schemes might also lead to [session](sessions.md) issues, such as losing [privileges](../ORDA/privileges.md) after a page refresh.

:::

#### Exemplo

1. Você executa Qodly Studio em um esquema URL HTTPS (por exemplo, `https://127.0.0.1:7443/studio/`)

2. O servidor da Web do seu banco de dados é iniciado somente em uma porta HTTP.

![alt-text](../assets/en/WebServer/schemes.png)

3. No Qodly Studio, você clica no ícone **Preview**. You are warned that the two web servers are started on different schemes, but despite this you click on the **Confirm** button.

![alt-text](../assets/en/WebServer/render-button.png)

Como resultado, duas licenças são mantidas.

:::note

You can enable/disable the display of the renderer pop over using a Qodly Studio user setting.

:::

### Atributo SameSite

O comportamento descrito anteriormente é devido ao cookie de sessão do servidor web 4D. This session cookie has a `SameSite` attribute that determines if the session cookie is sent to the web server.

If the `SameSite` attribute's value is `Strict` (default), the session cookie is not sent to the web server, so a new session is opened each time a page is rendered or refreshed.

For more information on the `SameSite` attribute, check out [this blog post](https://blog.4d.com/get-ready-for-the-new-SameSite-and-secure-attributes-for-cookies/).

### Recomendações

To avoid using more licenses than necessary, we recommend doing one of the following:

- Run the renderer on another browser tab (by entering the rendered URL of your Qodly page: `IP:port/$lib/renderer/?w=QodlyPageName`).
- Assegure-se de que o Qodly Studio e seu banco de dados sejam acessados no mesmo esquema de URL.
- Use the `Lax` value for the [session cookie](webServerConfig.md#session-cookie-samesite) of your project database's web server.

## Hello, World

This 5-minute video provides a "Hello World" example and covers how to enable access to the studio, create a basic interface, and configure an event that greets the user by their name:

<iframe width="560" height="315" src="https://www.youtube.com/embed/GwIdic4OhPQ" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
