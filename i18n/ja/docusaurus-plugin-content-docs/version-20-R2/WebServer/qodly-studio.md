---
id: qodly-studio
title: Qodly Studio
---

:::caution デベロッパー・プレビュー

4D の Qodly Studio は現在、**デベロッパー・プレビュー** の段階です。 本番環境で使用すべきではありません。

:::

**Qodly Studio** は、設計・テスト・公開がすべて Qodlyクラウドでおこなわれる Webビジネスアプリケーションの開発に特化した **Qodly プラットフォーム** の一部です。

4D v20 R2 では、 4D から直接 Qodly Studio を使用して、モダンで洗練された Webインターフェースをビルドし、既存の 4Dプロジェクトに簡単に統合して、**オンプレミス** で運用することができます。

Qodly Studio では、全く新しい WebUI を使い、データソースの概念に慣れ、次の操作を学ぶことができます:

- ページ上にコンポーネントを配置して Webフォームを作成する
- コンポーネントをデータにマッピングする
- イベントを設定して 4Dコードをトリガーする
- さらに沢山のことが可能です

:::info

4D で Qodly Studio を使用するには、専用のライセンスが必要です。 ライセンスが有効化されていない場合、Qodly Studio に関するオプションやメニュー項目は表示されません。

:::

## 設定

### 要件

#### ブラウザー

Qodly Studio は、以下の Webブラウザーをサポートしています:

- Chrome
- Edge
- FireFox

推奨解像度は 1920x1080 です。

#### 4Dアプリケーション

- 開発: 4D v20 R2 以上
- 運用: 4D Server v20 R2 以上
- Qodly Studio は 4Dプロジェクトでのみ動作します (バイナリデータベースはサポートされていません)。


### Qodly Studio へのアクセスを有効化する

デフォルトでは、Qodly Studio へのアクセスは許可されていません。

Qodly Studioは、[WebAdmin Webサーバー](../Admin/webAdmin.md) によって提供され、表示される 4Dプロジェクトのデータは [4D Webサーバー](webServer.md) によって処理されます。

Qodly Studio へのアクセスを有効化するには、2つのレベルで明示的に許可する必要があります:

* 4Dレベルで (4D または 4D Server)
* プロジェクトレベルで

2つのレベルのいずれか (または両方) が有効でない場合、Qodly Studio　へのアクセスは拒否されます (403ページが返されます)。

#### 4Dレベルで

As a first security level, you need to [allow access to Qodly Studio on the WebAdmin web server](../Admin/webAdmin.md#enable-access-to-qodly-studio).

This setting applies to the 4D application (4D or 4D Server) on the host machine. All projects opened with that 4D application take this setting into account.

Keep this option unchecked if you want to make sure no access to Qodly Studio is allowed on the application.

Check this option to make it possible to access Qodly Studio. However, you still need to enable it at every project level.

Additionally, you can [configure the WebAdmin web server's HTTP/HTTPS port used](../Admin/webAdmin.md#accept-http-connections-on-localhost).

:::note

After any change to these settings, you must [restart the WebAdmin web server](../Admin/webAdmin.md#start-and-stop) for the new configuration to be effective.

:::

#### At project level

After you have enabled access to Qodly Studio at the 4D level, you need to explicitly designate every project that can be accessed. The **Enable access to Qodly Studio** option must be enabled on the [Web Features page of the 4D application's Settings](../settings/web.md#enable-access-to-qodly-studio).

Keep in mind that [user settings](../settings/overview.md) can be defined at several levels, and that priorities apply.


### Activating authentication

Authentication on the WebAdmin web server is granted using an access key. For more details, see [Access key](../Admin/webAdmin.md#access-key).

### Enabling rendering

To enable the rendering of webforms that are created in Qodly Studio, the following options must be set.

* The 4D project's **Settings** > **Web** > **Web Features** > [**Expose as REST server**](../settings/web.md#exposed-as-rest-server) option must be activated
* The [4D web server](webServer.md) must be running

When rendering webforms in the Web Studio, the renderer will connect to the 4D web server through HTTP or HTTPS, depending on the settings, following the same HTTP/HTTPS connection pattern as for the [WebAdmin web server](../Admin/webAdmin.md#accept-http-connections-on-localhost).

:::info

See [this page](https://developer.qodly.com/docs/studio/rendering) for information on how to render webforms in Qodly.

:::

Note that when you click on the "Preview in a new tab" button, a tab will open at `IP:port/$lib/renderer/?w=WebFormName` on your machine.

Keep in mind that the Qodly Web Studio runs through the 4D WebAdmin web server. When you use Qodly Web Studio as a developer, even when you preview a webform in the studio, you're using the 4D WebAdmin web server. This allows you to see dataclasses, functions and attributes that are not exposed as REST resources for example (they are greyed out).

However, webform rendering happens outside 4D Web Studio, and is served by the standard 4D web server. In this situation, your web application cannot access assets that are not exposed as REST resources. See [Exposed vs non-exposed functions](../ORDA/ordaClasses.md#exposed-vs-non-exposed-functions) and [Exposing tables](../REST/configuration.md#exposing-tables) for more information on how to expose assets.

:::note

[Renderer buttons](https://developer.qodly.com/docs/studio/rendering#how-to-render-a-webform) are hidden if the configuration options are not activated.

:::

### WebAdmin server and deployment

For deployment, the WebAdmin server is not necessary. End-user access to your web application made with Qodly Studio is based on the 4D REST protocol, and as such, it works as through a conventional 4D remote application.


### Using project methods

We recommend using class functions over methods, but you can still use your project methods as REST functions in the studio.

To be used in Qodly Studio, project methods must be defined as Datastore, Dataclass, Entity or Entity selection class functions.

To check if a method is available as REST function:
1. In the Explorer of your 4D application, **right-click a project method** > **Edit Properties...** to open the Method Properties dialog.
2. Check that the **REST Server** option is checked.

Selecting **Scope** > **Catalog** designates the project method as a function of the Datastore class. No table (dataclass) is assigned in this case.


## Opening Qodly Studio

The Qodly Studio page is available when the [WebAdmin web server is running](../Admin/webAdmin.md#start-and-stop) and authentication is activated (see above).

There are two ways to access Qodly Studio:

* from your 4D single-user application, go to **Design** > **Qodly Studio...**. If the WebAdmin web server is already running, depending on its configuration, your default browser opens at `IPaddress:HTTPPort/studio` or `IPaddress:HTTPSPort/studio`. Otherwise, you will be prompted if you want to start the WebAdmin web server first.

* on a browser, with the WebAdmin web server running (launched from 4D or 4D Server), enter the following address:

`IPaddress:HTTPPort/studio`

または:

`IPaddress:HTTPSPort/studio`

For example, after launching a local web server on port 7080, type this address in your browser:

`localhost:7080/studio`

You will then be prompted to enter the [access key](../Admin/webAdmin.md#access-key) to access Qodly Studio.


## Using Qodly Studio

The official Qodly Studio documentation is available on the [Qodly documentation website](developer.qodly.com/docs/studio/overview.md).

You can rely on this documentation and its associated resources for developing web applications powered by webforms. However, depending on implementation stage, 4D developers will either use Qodly Studio or 4D IDE.

:::info

There is no direct compatibility between apps implemented with 4D and apps implemented with Qodly.

:::

### Feature comparison

|                                                              | Qodly Studio for 4D developers using 4D IDE                                                 | Qodly Studio for Qodly developers       |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------- | --------------------------------------- |
| View and edit tables (dataclasses), attributes and relations | 4D Structure Editor(1)                                                                      | Qodly Studio Model Editor               |
| Webforms                                                     | Qodly Studio Webform Editor                                                                 | Qodly Studio Webform Editor             |
| Desktop forms                                                | 4D IDE                                                                                      | *not supported*                         |
| Programming language                                         | 4D Language featuring ORDA                                                                  | QodlyScript featuring ORDA              |
| Coding IDE                                                   | 4D IDE code editor/VS Code with [4D extension](https://github.com/4d/4D-Analyzer-VSCode)(2) | Qodly Studio code editor                |
| デバッガー                                                        | 4D IDE debugger                                                                             | Qodly Studio debugger                   |
| REST/Web roles and privileges                                | roles.json direct edit/Qodly Studio roles and privileges editor                             | Qodly Studio role and privileges editor |

(1) If you click on the **Model** button in Qodly Studio, nothing happens. (2) When you open some 4D code in Qodly Studio, syntax coloring is not available and a "Lsp not loaded" warning is displayed.


### Project management

In accordance with the management of 4D projects, only the following usages are supported:

- development with Qodly Studio must be done using **4D** (single-user).
- deployment of 4D applications powered with Qodly webforms must be done using **4D Server**.


### Known issue

- In the current implementation, building merged 4D applications (stand-alone and server) that use Qodly webforms requires that the *.4dz* packed architecture be disabled, otherwise 404 errors are returned. If you build such merged applications, make sure you set the [`PackProject` XML key](https://doc.4d.com/4Dv20R2/4D/20-R2/PackProject.300-6439954.en.html) to `False` in the buildApp.4DSettings file.


### From QodlyScript to 4D Language

4D developers can use the [Qodly Studio documentation](developer.qodly.com/docs/studio) to learn how to design their webforms in Qodly Studio. Code examples are provided in QodlyScript, but since QodlyScript inherits from the 4D Language, you won't be lost. Converting QodlyScript code to 4D language is easy, it only requires some adaptations:

#### Variable names

QodlyScript only support local variables, so variables in QodlyScript examples are not prefixed with `$`. In the 4D code, make sure to **prefix variable names with `$`** so that they are identifed as local variables by 4D.

#### Symbols and keywords

Some basic symbols, operators, and keywords differ in QodlyScript and must be adapted to the 4D Language. They are listed below:

| QodlyScript | 4D Language                                                 | 説明                  |
| ----------- | ----------------------------------------------------------- | ------------------- |
| ,           | ;                                                           | argument separator  |
| =           | :=                                                          | assignment operator |
| ==          | =                                                           | comparison operator |
| declare     | #Declare                                                    |                     |
| switch      | Case of                                                     |                     |
| constructor | Class constructor                                           |                     |
| extends     | Class extends                                               |                     |
| end         | End for, End For each, End if, End case, End use, End while |                     |
| forEach     | For each                                                    |                     |
| string      | Text                                                        | var type            |
| number      | Real                                                        | var type            |

Some other items have a different case (ex: `this` vs `This`) but can be pasted directly in 4D code.


#### Command names

QodlyScript command names are written in camel case without spaces. You might need to adapt these commands to the 4D Language.

- Usually, you will only have to simply convert names. For example, `newCollection` in QodlyScript is `New collection` in 4D Language.
- However, some command have been renamed for a better compliance. They are listed below:

| QodlyScript            | 4D Language      |
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


#### 例題

- QodlyScript code:

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



- 4D Language equivalent code:

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

## About license usage

To render webforms, you must have an available license, as rendering a webform opens a session on the project database's main web server.

### URL Schemes

Qodly Studio's URL scheme configuration (HTTP and HTTPS) determines how many licenses are retained when rendering webforms. With the appropriate configuration, you can avoid unnecessary license retaining.

As explained in the [configuration](#configuration) section, the WebAdmin web server provides a secured web access to Qodly Studio. On the other hand, the [renderer](#rendering-webforms) communicates with the 4D web server of the database using REST requests. As such, it behaves like a conventional 4D Client.

If you run the renderer from the Qodly Studio and these two web servers are not reached through the same URL scheme (HTTP or HTTPS), it might lead to wrong licence counting.

#### 例題

1. You run the Qodly Studio on an HTTPS URL scheme (e.g. `https://127.0.0.1:7443/studio/`)

2. The web server of your database is started only on an HTTP port.

![alt-text](../assets/en/WebServer/schemes.png)

3. In Qodly Studio, you click on the **rendering** icon. You are warned that the two web servers are started on different schemes, but despite this you click on the **Confirm** button.

![alt-text](../assets/en/WebServer/render-button.png)

As a result, two licenses are retained.

:::note

You can enable/disable the display of the renderer pop over using a Qodly Studio user setting.

:::

### SameSite attribute

The behavior previously described is due to the session cookie of the 4D web server. This session cookie has a `SameSite` attribute that determines if the session cookie is sent to the web server.

If the `SameSite` attribute's value is `Strict` (default), the session cookie is not sent to the web server, so a new session is opened each time a page is rendered or refreshed.

For more information on the `SameSite` attribute, check out [this blog post](https://blog.4d.com/get-ready-for-the-new-<code>SameSite</code>-and-secure-attributes-for-cookies/).

### Recommendations

To avoid using more licenses than necessary, we recommend doing one of the following:

- Run the renderer on another browser tab (by entering the rendered URL of your Web form: `IP:port/$lib/renderer/?w=WebFormName`).
- Ensure the Qodly Studio and your database are reached on the same URL scheme.
- Use the `Lax` value for the [session cookie](webServerConfig.md#session-cookie-samesite) of your project database's web server.




## Hello, World

This 5-minute video provides a "Hello World" example and covers how to enable access to the studio, create a basic interface, and configure an event that greets the user by their name:

<iframe width="560" height="315" src="https://www.youtube.com/embed/GwIdic4OhPQ" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
