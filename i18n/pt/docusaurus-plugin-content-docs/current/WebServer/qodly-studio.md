---
id: qodly-studio
title: Qodly Studio
---

:::caution Developer Preview

Qodly Studio in 4D is currently in the **Developer Preview** phase. Não deve ser usado na produção.

:::

**Qodly Studio** is an interface builder for web applications. It provides developers with a graphical form editor to design applications running in web browsers or smartphones. It supports natively the [ORDA objects](../ORDA/overview.md).

You can use Qodly Studio directly from your **4D environment** to build modern and sophisticated interfaces that you can easily integrate to your existing 4D projects and deploy **on premise**.

Qodly Studio can also be used in the [**Qodly Cloud platform**](qodly.com), dedicated to the development of web business applications.

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

* a nível 4D (4D ou 4D Server)
* a nível do projeto

If one of the two levels (or both) are not enabled, access to Qodly Studio is denied (a 403 page is returned).

#### No nível 4D

As a first security level, you need to [allow access to Qodly Studio on the WebAdmin web server](../Admin/webAdmin.md#enable-access-to-qodly-studio).

This setting applies to the 4D application (4D or 4D Server) on the host machine. Todos os projetos abertos com essa aplicação 4D consideram essa configuração.

Keep this option unchecked if you want to make sure no access to Qodly Studio is allowed on the application.

Marque esta opção para ser possível acessar a Qodly Studio. No entanto, você ainda precisa habilitá-lo em todos os níveis do projeto.

Além disso, você pode [configurar a porta HTTP/HTTPS do servidor WebAdmin usada](../Admin/webAdmin.md#accept-http-connections-on-localhost).

:::note

After any change to these settings, you must [restart the WebAdmin web server](../Admin/webAdmin.md#start-and-stop) for the new configuration to be effective.

:::

#### A nível do projeto

After you have enabled access to Qodly Studio at the 4D level, you need to explicitly designate every project that can be accessed. The **Enable access to Qodly Studio** option must be enabled on the [Web Features page of the 4D application's Settings](../settings/web.md#enable-access-to-qodly-studio).

Keep in mind that [user settings](../settings/overview.md) can be defined at several levels, and that priorities apply.


### Ativando autenticação

Authentication on the WebAdmin web server is granted using an access key. Para obter mais detalhes, consulte [Chave de acesso](../Admin/webAdmin.md#access-key).

### Ativação da renderização

To enable the rendering of Qodly forms, the following options must be set.

* The 4D project's **Settings** > **Web** > **Web Features** > [**Expose as REST server**](../settings/web.md#exposed-as-rest-server) option must be activated
* O [servidor web 4D](webServer.md) deve estar em execução

When rendering Qodly forms in the Qodly Studio, the renderer will connect to the 4D web server through HTTP or HTTPS, depending on the settings, following the same HTTP/HTTPS connection pattern as for the [WebAdmin web server](../Admin/webAdmin.md#accept-http-connections-on-localhost).

:::info

See [this page](https://developer.qodly.com/docs/studio/rendering) for information on how to render Qodly forms in Qodly.

:::

Note that when you click on the "Preview in a new tab" button, a tab will open at `IP:port/$lib/renderer/?w=QodlyFormName` on your machine.

Keep in mind that the Qodly Studio runs through the 4D WebAdmin web server. When you use Qodly Studio as a developer, even when you preview a Qodly form in the studio, you're using the 4D WebAdmin web server. This allows you to see dataclasses, functions and attributes that are not exposed as REST resources for example (they are greyed out).

However, form rendering happens outside 4D Web Studio, and is served by the standard 4D web server. In this situation, your web application cannot access assets that are not exposed as REST resources. See [Exposed vs non-exposed functions](../ORDA/ordaClasses.md#exposed-vs-non-exposed-functions) and [Exposing tables](../REST/configuration.md#exposing-tables) for more information on how to expose assets.

:::note

[Renderer buttons](https://developer.qodly.com/docs/studio/rendering#how-to-render-a-webform) are hidden if the configuration options are not activated.

:::

### WebAdmin server and deployment

For deployment, the WebAdmin server is not necessary. End-user access to your web application made with Qodly Studio is based on the 4D REST protocol, and as such, it works as through a conventional 4D remote application.


### Uso de métodos projeto

Recomendamos o uso de funções classe em vez de métodos projeto. Apenas as funções de classe podem ser chamadas a partir de componentes. No entanto, você ainda pode usar seus métodos projeto no Qodly Studio de duas maneiras:

- Você pode chamar seus métodos a partir de funções classe.
- Você pode executar diretamente [seus métodos](https://developer.qodly.com/docs/studio/coding#methods-and-classes) a partir de Qodly Explorer.

## Abertura do Qodly Studio

The Qodly Studio page is available when the [WebAdmin web server is running](../Admin/webAdmin.md#start-and-stop) and authentication is activated (see above).

Há duas maneiras de acessar Qodly Studio:

* from your 4D single-user application, go to **Design** > **Qodly Studio...**. If the WebAdmin web server is already running, depending on its configuration, your default browser opens at `IPaddress:HTTPPort/studio` or `IPaddress:HTTPSPort/studio`. Otherwise, you will be prompted if you want to start the WebAdmin web server first.

* on a browser, with the WebAdmin web server running (launched from 4D or 4D Server), enter the following address:

`IPaddress:HTTPPort/studio`

ou:

`IPaddress:HTTPSPort/studio`

For example, after launching a local web server on port 7080, type this address in your browser:

`localhost:7080/studio`

You will then be prompted to enter the [access key](../Admin/webAdmin.md#access-key) to access Qodly Studio.


## Utilizar Qodly Studio

A documentação oficial de Qodly Studio está disponível no site de documentação de Qodly [](https://developer.qodly.com/docs/studio/overview).

You can rely on this documentation and its associated resources for developing web applications powered by Qodly forms. However, depending on implementation stage, 4D developers will either use Qodly Studio or 4D IDE.

:::info

There is no direct compatibility between apps implemented with 4D and apps implemented with Qodly.

:::

### Comparação de funcionalidades

|                                                                      | Qodly Studio para desenvolvedores 4D que usam o IDE 4D                                      | Qodly Studio para desenvolvedores Qodly |
| -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | --------------------------------------- |
| Visualizar e editar tabelas (classes de dados), atributos e relações | Editor de estrutura 4D(1)                                                                   | Qodly Studio Model Editor               |
| Qodly form                                                           | Qodly Studio Webform Editor                                                                 | Qodly Studio Webform Editor             |
| Formulários para desktop                                             | 4D IDE                                                                                      | *não suportado*                         |
| Linguagem de programação                                             | Linguagem 4D com ORDA                                                                       | QodlyScript com ORDA                    |
| IDE de codificação                                                   | 4D IDE code editor/VS Code with [4D extension](https://github.com/4d/4D-Analyzer-VSCode)(2) | Editor de código Qodly Studio           |
| Depurador                                                            | Depurador 4D IDE                                                                            | Depurador Qodly Studio                  |
| REST/Web roles and privileges                                        | roles.json direct edit/Qodly Studio roles and privileges editor                             | Qodly Studio role and privileges editor |

(1) If you click on the **Model** button in Qodly Studio, nothing happens. (2) When you open some 4D code in Qodly Studio, syntax coloring is not available and a "Lsp not loaded" warning is displayed.


### Gerenciamento de projetos

In accordance with the management of 4D projects, only the following usages are supported:

- development with Qodly Studio must be done using **4D** (single-user).
- deployment of 4D applications powered with Qodly forms must be done using **4D Server**.



### De QodlyScript à linguagem 4D

4D developers can use the [Qodly Studio documentation](developer.qodly.com/docs/studio) to learn how to design their Qodly forms in Qodly Studio. Code examples are provided in QodlyScript, but since QodlyScript inherits from the 4D Language, you won't be lost. Converting QodlyScript code to 4D language is easy, it only requires some adaptations:

#### Nomes de variáveis

QodlyScript only support local variables, so variables in QodlyScript examples are not prefixed with `$`. In the 4D code, make sure to **prefix variable names with `$`** so that they are identifed as local variables by 4D.

#### Símbolos e palavras-chave

Some basic symbols, operators, and keywords differ in QodlyScript and must be adapted to the 4D Language. Eles estão listados abaixo:

| QodlyScript | Línguagem 4D                                                | Comentário              |
| ----------- | ----------------------------------------------------------- | ----------------------- |
| ,           | ;                                                           | separador de argumentos |
| =           | :=                                                          | operador de atribuição  |
| ==          | =                                                           | operador de comparação  |
| declare     | #Declare                                                    |                         |
| switch      | Case of                                                     |                         |
| constructor | Class constructor                                           |                         |
| extends     | Class extends                                               |                         |
| end         | End for, End For each, End if, End case, End use, End while |                         |
| forEach     | For each                                                    |                         |
| string      | Text                                                        | var type                |
| number      | Real                                                        | var type                |

Some other items have a different case (ex: `this` vs `This`) but can be pasted directly in 4D code.


#### Nomes de comandos

Os nomes dos comandos QodlyScript são escritos em letras maiúsculas e minúsculas, sem espaços. Talvez você precise adaptar esses comandos à linguagem 4D.

- Normalmente, você só precisará converter os nomes. For example, `newCollection` in QodlyScript is `New collection` in 4D Language.
- No entanto, alguns comandos foram renomeados para uma melhor conformidade. Eles estão listados abaixo:

| QodlyScript            | Línguagem 4D     |
| ---------------------- | ---------------- |
| `atan`                 | `Arctan`         |
| `highestProcessNumber` | `Count tasks`    |
| `callChain`            | `Get call chain` |
| `objectClass`          | `OB Class`       |
| `objectCopy`           | `OB Copy`        |
| `objectEntries`        | `OB Entries`     |
| `instanceOf`           | `OB Instance of` |
| `objectIsDefined`      | `OB Is defined`  |
| `objectIsEmpty`        | `OB Is empty`    |
| `objectIsShared`       | `OB Is shared`   |
| `objectKeys`           | `OB Keys`        |
| `objectRemove`         | `OB REMOVE`      |
| `objectValues`         | `OB Values`      |
| `sqrt`                 | `Square root`    |


#### Exemplo

- Código QodlyScript:

```qs
 declare(entitySelection : 4D.EntitySelection)  
 var dataClass : 4D.DataClass
 var entity, duplicate : 4D.Entity
 var status : object
 dataClass=entitySelection.getDataClass()
 forEach(entity,entitySelection)
    duplicate=dataClass.new()
    duplicate.fromObject(entity.toObject())
    duplicate[dataClass.getInfo().primaryKey]=null
    status=duplicate.save()
 end
```



- Código 4D equivalente no linguajem:

```4d
 #DECLARE ( $entitySelection : 4D.EntitySelection )  
 var $dataClass : 4D.DataClass
 var $entity; $duplicate : 4D.Entity
 var $status : Object
 $dataClass:=$entitySelection.getDataClass()
 For each($entity;$entitySelection)
    $duplicate:=$dataClass.new()
    $duplicate.fromObject($entity.toObject())
    $duplicate[$dataClass.getInfo().primaryKey]:=Null
    $status:=$duplicate.save()
 End for each

```

### Uso fora de linha

You can develop with Qodly Studio while your computer is not connected to the internet. Nesse caso, entretanto, os seguintes recursos não estão disponíveis:

- [Modelos](https://developer.qodly.com/docs/studio/design-webforms/templates): a biblioteca de modelos está vazia
- UI tips: they are not displayed when you click on ![alt-text](../assets/en/WebServer/tips.png) icons.


## Sobre a licença de uso

To render Qodly forms, you must have an available license, as rendering a Qodly form opens a session on the project database's main web server.

### Esquemas URL

Qodly Studio's URL scheme configuration (HTTP and HTTPS) determines how many licenses are retained when rendering Qodly forms. With the appropriate configuration, you can avoid unnecessary license retaining.

As explained in the [configuration](#configuration) section, the WebAdmin web server provides a secured web access to Qodly Studio. On the other hand, the [renderer](#rendering-webforms) communicates with the 4D web server of the database using REST requests. Dessa forma, se comporta como um Cliente 4D convencional.

Se você executar o renderizador a partir do Qodly Studio e esses dois servidores web não forem acessados através do mesmo esquema de URL (HTTP ou HTTPS), isso pode levar a uma contagem incorreta de licenças.

#### Exemplo

1. You run the Qodly Studio on an HTTPS URL scheme (e.g. `https://127.0.0.1:7443/studio/`)

2. O servidor da Web do seu banco de dados é iniciado somente em uma porta HTTP.

![alt-text](../assets/en/WebServer/schemes.png)

3. In Qodly Studio, you click on the **rendering** icon. You are warned that the two web servers are started on different schemes, but despite this you click on the **Confirm** button.

![alt-text](../assets/en/WebServer/render-button.png)

Como resultado, duas licenças são mantidas.

:::note

You can enable/disable the display of the renderer pop over using a Qodly Studio user setting.

:::

### Atributo SameSite

O comportamento descrito anteriormente é devido ao cookie de sessão do servidor web 4D. This session cookie has a `SameSite` attribute that determines if the session cookie is sent to the web server.

If the `SameSite` attribute's value is `Strict` (default), the session cookie is not sent to the web server, so a new session is opened each time a page is rendered or refreshed.

Para obter mais informações sobre o atributo `SameSite`, consulte [esta post do blog](https://blog.4d.com/get-ready-for-the-new-SameSite-and-secure-attributes-for-cookies/).

### Recomendações

To avoid using more licenses than necessary, we recommend doing one of the following:

- Run the renderer on another browser tab (by entering the rendered URL of your Web form: `IP:port/$lib/renderer/?w=QodlyFormName`).
- Assegure-se de que o Qodly Studio e seu banco de dados sejam acessados no mesmo esquema de URL.
- Use the `Lax` value for the [session cookie](webServerConfig.md#session-cookie-samesite) of your project database's web server.




## Hello, World

This 5-minute video provides a "Hello World" example and covers how to enable access to the studio, create a basic interface, and configure an event that greets the user by their name:

<iframe width="560" height="315" src="https://www.youtube.com/embed/GwIdic4OhPQ" title="Leitor de vídeo do YouTube" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
