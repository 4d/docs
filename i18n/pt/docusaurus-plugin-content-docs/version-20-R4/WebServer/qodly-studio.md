---
id: qodly-studio
title: Qodly Studio no 4D
---

:::caution Prévia do desenvolvedor

Qodly Studio in 4D is currently in the **Developer Preview** phase. Não deve ser usado na produção.

:::

**Qodly Studio** is an interface builder for web applications. It provides developers with a graphical form editor to design applications running in web browsers or smartphones. It supports natively the [ORDA objects](../ORDA/overview.md).

You can use Qodly Studio directly from your **4D environment** to build modern and sophisticated interfaces that you can easily integrate to your existing 4D projects and deploy **on premise**.

Qodly Studio can also be used in the [**Qodly Cloud platform**](https://qodly.com), dedicated to the development of web business applications.

With Qodly Studio, you will discover a totally new web UI, get familiar with the concept of datasources, and learn how to:

- create Qodly forms by placing components on a page
- mapear componentes para dados
- acionar o código 4D configurando eventos
- e muito mais.

:::info

The development with Qodly Studio in 4D requires at least a [4D Silver Partner license](https://us.4d.com/4d-partner-program). Qodly Studio options and menu items won't appear if the license is not activated.

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

Authentication on the WebAdmin web server is granted using an access key. For more details, see [Access key](../Admin/webAdmin.md#access-key).

### Gerenciamento de projetos

In accordance with the management of 4D projects, only the following usages are supported:

- development with Qodly Studio must be done using **4D** (single-user).
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
| Formulário Qodly                                                                        | Qodly Studio Webform Editor                                                                                    | Qodly Studio Webform Editor                                                         |
| Formulários para desktop                                                                | 4D IDE                                                                                                         | _não suportado_                                                                     |
| Linguagem de programação                                                                | Linguagem 4D com ORDA                                                                                          | [QodlyScript](https://developer.qodly.com/docs/category/qodlyscript) featuring ORDA |
| IDE de codificação                                                                      | 4D IDE code editor/VS Code with [4D extension](https://github.com/4d/4D-Analyzer-VSCode)(2) | Editor de código Qodly Studio                                                       |
| Depurador                                                                               | Depurador 4D IDE                                                                                               | Depurador Qodly Studio                                                              |
| REST/Web roles and privileges                                                           | roles.json direct edit/Qodly Studio roles and privileges editor                                | Qodly Studio role and privileges editor                                             |

(1) If you click on the **Model** button in Qodly Studio, nothing happens.
(2) When you open some 4D code in Qodly Studio, syntax coloring is not available and a "Lsp not loaded" warning is displayed.

### Línguagem

The following commands and classes are dedicated to the server-side management of Qodly forms:

- [`Web Form`](../API/WebFormClass.md#web-form) command: returns the Qodly form as an object.
- [`Web Event`](../API/WebFormClass.md#web-event) command: returns events triggered within Qodly form components.
- [`WebForm`](../API/WebFormClass.md) class: functions and properties to manage the rendered Qodly form.
- [`WebFormItem`](../API/WebFormItemClass.md) class: functions and properties to manage Qodly form components.

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

Qodly Studio encapsulates Qodly forms, including layout, data connections, and event-driven logic, in a structured JSON file. This JSON file is processed on-the-fly by the **Qodly renderer** to serve a fully functional web page.

:::info

See [this page](https://developer.qodly.com/docs/studio/rendering) for detailed information on how to render Qodly forms in Qodly.

:::

To enable the rendering of Qodly forms, the following options must be set.

- The 4D project's **Settings** > **Web** > **Web Features** > [**Expose as REST server**](../settings/web.md#exposed-as-rest-server) option must be activated.
- The [4D web server](webServer.md) must be running.

:::note

[Renderer buttons](https://developer.qodly.com/docs/studio/rendering#how-to-render-a-webform) are not available if the configuration options are not activated.

:::

### Escopo dos formulários Qodly

When rendering Qodly forms in the Qodly Studio, the renderer will connect to the 4D web server through HTTP or HTTPS, depending on the settings, following the same HTTP/HTTPS connection pattern as for the [4D WebAdmin web server](../Admin/webAdmin.md#accept-http-connections-on-localhost). See also [this paragraph](#about-license_usage) about URL schemes and license usage.

Keep in mind that Qodly Studio runs through the 4D WebAdmin web server. When you use Qodly Studio as a developer, even when you preview a Qodly form in the studio, you're using the 4D WebAdmin web server. This allows you to see dataclasses, functions and attributes that are not exposed as REST resources for example (they are greyed out).

However, form rendering happens outside Qodly Studio, and is served by the standard 4D web server. In this situation, your web application cannot access assets that are not exposed as REST resources. See [Exposed vs non-exposed functions](../ORDA/ordaClasses.md#exposed-vs-non-exposed-functions) and [Exposing tables](../REST/configuration.md#exposing-tables) for more information on how to expose assets.

### Acesso aos formulários Qodly

For deployment, the WebAdmin server is not necessary. End-user access to your web application made with Qodly Studio is based on the 4D REST protocol, and as such, it works as through a conventional 4D remote application.

Your Qodly forms are available through the following url:

```
IP:port/$lib/renderer/?w=QodlyFormName
```

...where _IP:port_ represents the address of the web server and _QodlyFormName_ is the name of the Qodly form.

Por exemplo:

```
https://www.myWebSite.com/$lib/renderer/?w=welcome
```

## Sobre a licença de uso

To render Qodly forms, you must have an available license, as rendering a Qodly form opens a session on the project database's main web server.

### Esquemas URL

Qodly Studio's URL scheme configuration (HTTP and HTTPS) determines how many licenses are retained when rendering Qodly forms. With the appropriate configuration, you can avoid unnecessary license retaining.

As explained in the [configuration](#configuration) section, the WebAdmin web server provides a secured web access to Qodly Studio. On the other hand, the [renderer](#rendering-webforms) communicates with the 4D web server of the database using REST requests. Dessa forma, se comporta como um Cliente 4D convencional.

Se você executar o renderizador a partir do Qodly Studio e esses dois servidores web não forem acessados através do mesmo esquema de URL (HTTP ou HTTPS), isso pode levar a uma contagem incorreta de licenças.

#### Exemplo

1. Você executa Qodly Studio em um esquema URL HTTPS (por exemplo, `https://127.0.0.1:7443/studio/`)

2. O servidor da Web do seu banco de dados é iniciado somente em uma porta HTTP.

![alt-text](../assets/en/WebServer/schemes.png)

3. In Qodly Studio, you click on the **Preview** icon. You are warned that the two web servers are started on different schemes, but despite this you click on the **Confirm** button.

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

- Run the renderer on another browser tab (by entering the rendered URL of your Web form: `IP:port/$lib/renderer/?w=QodlyFormName`).
- Assegure-se de que o Qodly Studio e seu banco de dados sejam acessados no mesmo esquema de URL.
- Use the `Lax` value for the [session cookie](webServerConfig.md#session-cookie-samesite) of your project database's web server.

## Hello, World

This 5-minute video provides a "Hello World" example and covers how to enable access to the studio, create a basic interface, and configure an event that greets the user by their name:

<iframe width="560" height="315" src="https://www.youtube.com/embed/GwIdic4OhPQ" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
