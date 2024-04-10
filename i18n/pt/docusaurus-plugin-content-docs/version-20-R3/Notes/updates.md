---
id: updates
title: Notas de Lançamento
---


## 4D 20 R3

Read [**What’s new in 4D 20 R3**](https://blog.4d.com/en-whats-new-in-4d-v20-R3/), the blog post that lists all new features and enhancements in 4D 20 R3.


#### Destaques

- New [`collection.multiSort`](../API/CollectionClass.md#multisort) function.
- Support of *context* parameter in [`Formula from string`](../API/FunctionClass.md#formula-from-string).
- Support of `headers` property in *connectionHandler* parameter of [4D.WebSocket.new](../API/WebSocketClass.md#4dwebsocketnew).
- [Global modification stamp](../ORDA/global-stamp.md) to help implementing data synchronization modules. New functions: [`ds.getGlobalStamp`](../API/DataStoreClass.md#getglobalstamp) and [`ds.setGlobalStamp`](../API/DataStoreClass.md#setglobalstamp).
- Assigning file references to picture/blob attributes is [supported in ORDA](../ORDA/entities.md#d#assigning-files-to-picture-or-blob-attributes).
- Support for [initializing the variable's value and data type in the declaration line](../Concepts/variables/#initializing-variables-in-the-declaration-line).
- Log file settings are now [saved with the current data file](../Backup/settings.md#log-file-management)
- New syntax for [declaring variadic parameters](../Concepts/parameters.md#declaring-variadic-parameters)
- 4D View Pro: Suporte para a [importação](../ViewPro/method-list.md#vp-import-from-blob) e [exportação](../ViewPro/method-list.md#vp-export-to-blob) de documentos 4D View Pro no formato Blob.
- Comandos da linguagem 4D: [página Novidades](https://doc.4d.com/4Dv20R3/4D/20-R3/What-s-new.901-6531224.en.html) em doc.4d.com.
- 4D Write Pro: [página Novidades](https://doc.4d.com/4Dv20R3/4D/20-R3/What-s-new.901-6475174.en.html) em doc.4d.com.
- [**Fixed bug list**](https://bugs.4d.fr/fixedbugslist?version=20_R3): list of all bugs that have been fixed in 4D 20 R3.


#### Mudanças de comportamento

- Some errors were catchable by your [error handling method](../Concepts/error-handling.md) in interpreted mode only. Foi feita uma correção para que os erros abaixo, a partir de agora sejam detectados também no modo compilado: *Indice out of range*, *Type incompatible*, e *Dereferencing a Null pointer*. However, for such errors on Intel processors, the procedure is still interrupted as before, whereas on Apple Silicon processors the procedure is only interrupted if you call the [`ABORT`](https://doc.4d.com/4dv20/help/command/en/page156.html) command.
- 4D não inclui mais um interpretador PHP interno. You need to [set up and run your own PHP interpreter](https://blog.4d.com/deprecation-of-php-commands-and-removal-of-4d-built-in-php-interpreter) to use PHP commands.


## 4D 20 R2

Read [**What’s new in 4D 20 R2**](https://blog.4d.com/en-whats-new-in-4d-v20-R2/), the blog post that lists all new features and enhancements in 4D 20 R2.

:::warning Nota de segurança

If your 4D applications use TLS connections, it is recommended that you upgrade to 4D 20 R2 HF1 build 100440 or higher. Para obter mais informações, consulte este [boletim de segurança](https://blog.4d.com/security-bulletin-two-cves-and-how-to-stay-secure/).

:::

#### Destaques

- New [WebSocket class](../API/WebSocketClass.md) to create and manage client WebSocket connections from 4D.
- New QUIC network layer [interface setting](../settings/client-server.md#network-layer).
- 4D View Pro: suporte ao formato de arquivo **.sjs** para [importação](../ViewPro/method-list.md#vp-import-document) e [exportação](../ViewPro/method-list.md#vp-export-document) de documentos.
- Comandos da linguagem 4D: [Novidades de página](https://doc.4d.com/4Dv20R2/4D/20-R2/What-s-new.901-6398284.en.html) em doc.4d.com.
- 4D Write Pro: [página Novidades](https://doc.4d.com/4Dv20R2/4D/20-R2/What-s-new.901-6390313.en.html) em doc.4d.com.
- 4D Write Pro Interface: New [Table Wizard](../WritePro/writeprointerface.md).
- [**Fixed bug list**](https://bugs.4d.fr/fixedbugslist?version=20_R2): list of all bugs that have been fixed in 4D 20 R2.


#### Mudanças de comportamento

- **Warning**: The starting [`offset`](../API/FileHandleClass.md#offset) value of [4D.FileHandle](../API/FileHandleClass.md) objects was incorrectly set to 1 instead of 0. A fix has been made in 4D as of versions **20.1 HF1** and **20 R2** and the value is now 0.

## 4D 20.x

Read [**What’s new in 4D 20**](https://blog.4d.com/en-whats-new-in-4d-v20/), the blog post that lists all new features and enhancements in 4D 20.

:::caution Versão mínima cliente para 4D Server v20.2 e posterior

For internal reasons, the version of remote clients connecting to 4D Server v20.2 and later must be at least 4D 20.2.

:::

:::warning Nota de segurança

If your 4D applications use TLS connections, it is recommended that you upgrade to 4D 20.2 LTS build 100956 or higher. Para obter mais informações, consulte este [boletim de segurança](https://blog.4d.com/security-bulletin-two-cves-and-how-to-stay-secure/).

:::

#### Aviso de reconstrução do índice

4D 20 includes an ICU library update (see below) which will force an automatic rebuild of indexes of type alpha, text, and object. Dependendo do tamanho do ficheiro de dados, esta operação pode demorar algum tempo e pode necessitar de ser planeada.

:::caution 4D 20.1 index rebuild and client/server versions

4D 20.1 also includes an ICU library update, which has the following consequences:

- Isso forçará uma reconstrução automática dos índices do tipo alfa, texto e objeto.
- Because of sorting consistency, it requires that 4D remote clients and 4D Server use the same version: only remote 4D 20.1 can connect to 4D Server v20.1 and vice versa.

:::


#### Destaques

- 4D 20.2 is certified on macOS Sonoma (macOS 14).
- (4D 20.1) New `plugins` property in the *options* parameter for the [`Compile project`](https://doc.4d.com/4dv20/help/command/en/page1760.html) command.
- 4D Server automatically integrates multiple journals: [Automatic restore](../Backup/settings.md#automatic-restore).
- [IMAP Transporter Class](../API/IMAPTransporterClass.md): [`.getBoxInfo()`](../API/IMAPTransporterClass#getboxinfo) returns *id*, [`.selectBox()`](../API/IMAPTransporterClass.md#selectbox) returns *id*, *flags* and *permanentFlags*, [`.addFlags()`](../API/IMAPTransporterClass.md#addflags) and [`.removeFlags()`](../API/IMAPTransporterClass.md#removeflags) support custom keywords.
- New [WebSocketServer](../API/WebSocketServerClass.md) and [WebSocketConnection](../API/WebSocketConnectionClass.md) classes to create and manage WebSocket connections from 4D.
- Support of [`property`](../Concepts/classes.md#property) keyword in user class definitions.
- New functions to lock/unlock the datastore: [`.flushAndLock()`](../API/DataStoreClass.md#flushandlock), [`.locked()`](../API/DataStoreClass.md#locked), [`.unlock()`](../API/DataStoreClass.md#unlock).
- New [`.at()`](../API/EntitySelectionClass.md#at) function in the Entity selection class.
- New functions in the Collection class: [`.at()`](../API/CollectionClass.md#at), [`.first()`](../API/CollectionClass.md#first), [`.flat()`](../API/CollectionClass.md#flat), [`.flatMap()`](../API/CollectionClass.md#flatmap),[`.includes()`](../API/CollectionClass.md#includes), [`.last()`](../API/CollectionClass.md#last), [`.reduceRight()`](../API/CollectionClass.md#reduceright).
- Code editor: enhanced [Find and replace features](../code-editor/write-class-method.md#find-and-replace).
- New searchable "property" Language element in the [**Find in design...**](https://doc.4d.com/4Dv20/4D/20/Performing-a-search.300-6263762.en.html#6337726) dialog box.
- To simplify code, some comparison operators can now be used with [Undefined values](../Concepts/dt_null_undefined.md#undefined-operators) without generating errors.
- Support of *headerOnly* parameter in [`POP3Transporter.getMail()`](../API/POP3TransporterClass.md#getmail).
- Support of `count values` option in [`entitySelection.distinct()`](../API/EntitySelectionClass.md#distinct) and [`collection.distinct()`](../API/CollectionClass.md#distinct) functions.
- New [`entitySelection.distinctPaths()`](../API/EntitySelectionClass.md#distinctpaths) function.
- Support of `count values` option in [`entitySelection.distinct()`](../API/EntitySelectionClass.md#distinct) and [`collection.distinct()`](../API/CollectionClass.md#distinct) functions.
- ORDA requests logs are now available [on the server](../Debugging/debugLogFiles.md#orda-requests), new parameter for [`.startRequestLog()`](../API/DataStoreClass.md#startrequestlog) function.
- New tools for code execution in CLI: [tool4d](../Admin/cli.md#tool4d) and [4D Server in utility mode](../Admin/cli.md#4d-server-in-utility-mode).
- [Data Explorer](../Admin/dataExplorer.md#opening-the-data-explorer): new button and display in a 4D window.
- New properties for buttons, check boxes and radio buttons: [Image hugs title](../FormObjects/properties_TextAndPicture.md#image-hugs-title) and [Horizontal Alignment](../FormObjects/properties_Text.md#horizontal-alignment).
- Support of `WinIcon` in [`file.setAppInfo()`](../API/FileClass.md#setappinfo) function.
- New `validateTLSCertificate` option for [`4D.HTTPRequest.new()`](../API/HTTPRequestClass.md#new) allowing you to control the automatic certificate validation.
- Comandos da linguagem 4D: [página Novidades](https://doc.4d.com/4Dv20/4D/20/What-s-new.901-6237190.en.html) em doc.4d.com.
- 4D Write Pro: [página Novidades](https://doc.4d.com/4Dv20/4D/20/What-s-new.901-6229455.en.html) em doc.4d.com.
- Fixed bug lists: [4D 20](https://bugs.4d.fr/fixedbugslist?version=20) - [4D 20.1](https://bugs.4d.fr/fixedbugslist?version=20.1).


#### Mudanças de comportamento

- As of v20.2, 4D 20 LTS is no longer compatible with Windows Server 2012 R2.
- **Warning**: The starting [`offset`](../API/FileHandleClass.md#offset) value of [4D.FileHandle](../API/FileHandleClass.md) objects was incorrectly set to 1 instead of 0. A fix has been made in 4D as of versions **20.1 HF1** and **20 R2** and the value is now 0.
- Para conformidade com HTTP RFC, [`HTTPRequestClass.response.headers`](../API/HTTPRequestClass.md#response) propriedade devolve agora todos os nomes de cabeçalho **em minúsculas**. Se quiser que o seu código continue a funcionar como antes, utilize a nova propriedade [`HTTPRequestClass.response.rawHeaders`](../API/HTTPRequestClass.md#response).
- Os certificados TLS agora são validados automaticamente por 4D ao enviar solicitações HTTP com [`4D.HTTPRequest.new()`](../API/HTTPRequestClass.md#new) e rejeitados com um erro se forem inválidos. Uma nova propriedade *option* permite-lhe controlar esta validação.
- TLS v1.0 e TLS v1.1 são obsoletos, não são mais suportados como `Min TLS versão` no 4D Server. A versão 1.3 agora é selecionada por padrão sendo usada automaticamente se as constantes `_o_TLSv1_0` ou `_o_TLSv1_1` forem definidas com [`SET DATABASE PARAMETER`](https://doc.4d.com/4dv20/help/command/en/page642.html).
- For consistency, all buttons, checkboxes, and radio buttons are now rendered with a "3D" type at runtime: respectively `Object type 3D button`, `Object type 3D checkbox`, and `Object type 3D radio button` are returned by [`OBJECT Get type`](https://doc.4d.com/4dv20/help/command/en/page642.html) for these objects.
- As of 4D 20, [4D for Mobile](https://developer.4d.com/go-mobile/) is no longer installed by default in the 4D environment. To benefit from the 4D for Mobile development features in 4D, you need to [install the 4D Mobile App component](https://developer.4d.com/go-mobile/docs/getting-started/installation) in the ["Components"](../Project/architecture.md#components) folder of your projects. Se um projeto convertido usar recursos do componente [4D Mobile App Server](https://github.com/4d/4D-Mobile-App-Server#4d-mobile-app-server), certifique-se de instalá-lo também na pasta "Components" do projeto.


## 4D 19 R8

Read [**What’s new in 4D 19 R8**](https://blog.4d.com/en-whats-new-in-4d-v19-r8/), the blog post that lists all new features and enhancements in 4D 19 R8.


#### Destaques

- Error management methods can be installed for [global and component execution contexts](../Concepts/error-handling.md#scope-and-components).
- Listboxes with collection or entity selection datasources now support [Automatic Row Height](../FormObjects/properties_CoordinatesAndSizing.md#automatic-row-height) column property.
- ORDA: Support of the *roles.json* file to define [privileges](../ORDA/privileges.md) assigned to the session with [`setPrivileges()`](../API/SessionClass.md#setprivileges).
- Support of [SDI mode in test application mode](../Menus/sdi.md#sdi-mode-availability) on Windows.
-
:::
    - suporte a temas em tabelas: novos comandos [VP SET TABLE THEME](../ViewPro/method-list.md#vp-set-table-theme) e [VP Get table theme](../ViewPro/method-list.md#vp-get-table-theme), suporte a opções de tema no [VP CREATE TABLE](../ViewPro/method-list.md#vp-create-table)
    - novo comando [VP Get table dirty rows](../ViewPro/method-list.md#vp-get-table-dirty-rows)
- Comandos da linguagem 4D: [página Novidades](https://doc.4d.com/4Dv19R8/4D/19-R8/What-s-new.901-6101683.en.html) em doc.4d.com.
- 4D Write Pro: [página Novidades](https://doc.4d.com/4Dv19R8/4D/19-R8/What-s-new.901-6130471.en.html) em doc.4d.com.
- [**Fixed bug list**](https://bugs.4d.fr/fixedbugslist?version=19_R8): list of all bugs that have been fixed in 4D 19 R8.


#### Mudanças de comportamento

- Para conformidade com HTTP RFC, [`HTTPRequestClass.response.headers`](../API/HTTPRequestClass.md#response) propriedade devolve agora todos os nomes de cabeçalho **em minúsculas**. Se quiser que o seu código continue a funcionar como antes, utilize a nova propriedade [`HTTPRequestClass.response.rawHeaders`](../API/HTTPRequestClass.md#response).
- When a [bevel button with linked pop-up menu](../FormObjects/properties_TextAndPicture.md/#with-pop-up-menu) is assigned a standard action, the standard action is no longer generated if a pop-up menu option is selected.
- Nas áreas da Web que usam blink (CEF), as caixas de diálogo exibidas a partir de scripts externos agora estão bloqueando se não forem chamadas a partir de uma função `setTimeout()` JS. Isso se deve às atualizações atuais da CEF, nas quais as caixas de diálogo exibidas por funções como `alert()` ou `print()` não são mais tratadas pelo sistema operacional, mas pela área da Web. See [`WA Evaluate JavaScript`](https://doc.4d.com/4dv19/help/command/en/page1029.html) and [`WA EXECUTE JAVASCRIPT`](https://doc.4d.com/4dv19/help/command/en/page1043.html).



## 4D 19 R7

Read [**What’s new in 4D 19 R7**](https://blog.4d.com/en-whats-new-in-4d-v19-r7/), the blog post that lists all new features and enhancements in 4D 19 R7.


#### Destaques

- Related data and computed/alias attributes can be displayed in the [Data Explorer](../Admin/dataExplorer#basics).
- New [FileHandle](../API/FileHandleClass.md) class and new [`.open()`](../API/FileClass.md#open) function in the `File` class.
- [Entity selection Class](../API/EntitySelectionClass.md): [`.add()`](../API/EntitySelectionClass.md#add) supports an *entitySelection* parameter, [`.minus()`](../API/EntitySelectionClass.md#minus) supports a *keepOrder* parameter.
- Suporte às opções *automaticRedirections* e *decodeData* em [`4D.HTTPRequest.new()`](../API/HTTPRequestClass.md#4dhttprequestnew).
- Novo arquivo histórico [4DHTTPClientLog.txt](../Debugging/debugLogFiles.md#4dhttpclientlog).
- 4D View Pro: new table commands [VP Find table](../ViewPro/method-list.md#vp-find-table), [VP Get table column attributes](../ViewPro/method-list.md#vp-get-table-column-attributes), [VP Get table column index](../ViewPro/method-list.md#vp-get-table-column-index), [VP Get tables](../ViewPro/method-list.md#vp-get-tables), [VP INSERT TABLE COLUMNS](../ViewPro/method-list.md#vp-insert-table-columns), [VP INSERT TABLE ROWS](../ViewPro/method-list.md#vp-insert-table-rows), [VP REMOVE TABLE COLUMNS](../ViewPro/method-list.md#vp-remove-table-columns), [VP REMOVE TABLE ROWS](../ViewPro/method-list.md#vp-remove-table-rows), [VP RESIZE TABLE](../ViewPro/method-list.md#vp-resize-table), [VP SET TABLE COLUMN ATTRIBUTES](../ViewPro/method-list.md#vp-set-table-column-attributes).
- Component namespaces are now [displayed in the Explorer](../Extensions/develop-components.md#declaring-the-component-namespace).
- Text area and Input form objects now support the [corner radius property](../FormObjects/properties_CoordinatesAndSizing.md#corner-radius).
- Comandos da linguagem 4D: [página Novidades](https://doc.4d.com/4Dv19R7/4D/19-R7/What-s-new.901-5944528.en.html) em doc.4d.com.
- 4D Write Pro: [página Novidades](https://doc.4d.com/4Dv19R7/4D/19-R7/What-s-new.901-6011873.en.html) em doc.4d.com.
- [**Fixed bug list**](https://bugs.4d.fr/fixedbugslist?version=19_R7): list of all bugs that have been fixed in 4D 19 R7.


#### Mudanças de comportamento

- Para manter a consistência com as interfaces padrão (por exemplo, exploradores de arquivos do sistema operacional), as regras da caixa de listagem para seleção de linhas/arrastar e soltar foram modificadas. Uma seleção contínua ou descontínua de linhas pode ser arrastada simplesmente clicando e movendo uma linha selecionada; a tecla **Alt** não é mais necessária (mas ainda pode ser usada como na versão anterior). When the **Shift** or **Ctrl/Command** key is pressed, a mouse click is taken into account when the click is down. For more information on drag and drop in list boxes, you can refer to [this blog post](https:/blog.4d.com/list-boxes-say-goodbye-to-alt-key/) and download [this HDI 4D project](https://github.com/4d-depot/HDI_LB_DragAndDrop).
- The 4D internal build numbering has been modified as of 4D 19 R7:
    - releases up to 4D 19 R6 (included) are numbered 282xxx,
    - releases from 4D 19 R7 will be numbered 100xxx.   
      Note that a specific 4D version is still uniquely identified by a branch name and a build number. O número de build aumenta cronologicamente.
- A capacidade de usar o protocolo REST do Wakanda/4D Mobile para chamar um método de projeto foi removida. You can use [ORDA data model class functions](../REST/ClassFunctions.md) or [/4DACTION urls](../WebServer/httpRequests.md#4daction) instead.


## 4D 19 R6

- New [HTTPRequest](../API/HTTPRequestClass.md) class.
- Collection functions that can call code now support function objects as *formula* parameter: [`.every()`](../API/CollectionClass.md#every), [`.filter()`](../API/CollectionClass.md#filter), [`.find()`](../API/CollectionClass.md#find), [`.findIndex()`](../API/CollectionClass.md#findindex), [`.map()`](../API/CollectionClass.md#map), [`.orderByMethod()`](../API/CollectionClass.md#orderbymethod), [`.reduce()`](../API/CollectionClass.md#reduce), [`.some()`](../API/CollectionClass.md#some), [`.sort()`](../API/CollectionClass.md#sort)
- Listbox cells support [horizontal](../FormObjects/properties_CoordinatesAndSizing.md#horizontal-padding) and [vertical](../FormObjects/properties_CoordinatesAndSizing.md#vertical-padding) padding.
- 4D View Pro: new [VP CREATE TABLE](../ViewPro/method-list.md#vp-create-table) and [VP REMOVE TABLE](../ViewPro/method-list.md#vp-remove-table) commands to handle tables in sheets.
- Ability to see related, computed, and alias attributes in the [Web Data Explorer](../Admin/dataExplorer.md#basics).
- Para nos ajudar a tornar nossos produtos cada vez melhores, agora coletamos automaticamente dados sobre estatísticas de uso em aplicativos 4D Server em execução. Este fato não terá qualquer impacto no desempenho. See the new page explaining [why and how 4D collects data](../Admin/data-collect.md).
- Components compiled for Silicon: On macOS Silicon platforms (Apple ARM CPUs), components must be recompiled with 4D 19 R6 or higher to be used with this release.




## 4D 19 R5

- The project [directory.json file](Users/editing#directoryjson-file) can now be [embedded in the server](../Desktop/building.md#embed-the-project-users-and-groups-in-built-server-application) at build time, allowing you to deploy a client/server application with a basic security user and group configuration.
- You can now [deselect useless modules](../Desktop/building.md#deselecting-modules) in your built applications.
- A biblioteca *MeCab* está incluída por padrão em todos os aplicativos 4D no macOS. Em versões anteriores, essa biblioteca, especificamente projetada para gerenciar texto em japonês, estava disponível apenas na versão japonesa do 4D no macOS. If you do not need this library in your final applications, you can now [deselect it](../Desktop/building.md#deselecting-modules).
- [Client/Server optimization](../ORDA/remoteDatastores.md#clientserver-optimization): New class functions allow you to handle the ORDA cache and the contents of an optimization context. See [Preconfiguring contexts](../ORDA/remoteDatastores.md#preconfiguring-contexts) and [ORDA Cache](../ORDA/remoteDatastores.md#orda-cache) for more information.

   > Essas funções são destinadas a desenvolvedores que precisam personalizar os recursos padrão do ORDA para configurações específicas. Na maioria dos casos, você não precisará usá-los.
- [DataClass class](../API/DataClassClass.md): The new [.getCount()](../API/DataClassClass.md#getcount) function returns the number of entities in a dataclass.
- The *4DDiagnosticLog.txt* file only records high-level information by default ([INFO level](../Debugging/debugLogFiles.md#4ddiagnosticlogtxt). Agora é possível selecionar o nível de informação a ser registrado (por exemplo, informações de nível DEBUG) usando o seletor `Diagnostic log level` do comando `SET DATABASE PARAMETER` ou o arquivo de configuração de log.
- Chamar `Use()` em um objeto não compartilhado ou em uma coleção não compartilhada não faz nada (não gera mais um erro). Portanto, agora é inútil testar se o objeto ou coleção passado para Use() é realmente compartilhado.
- Para fins de esclarecimento, dois comandos SQL foram prefixados: `GET DATA SOURCE LIST` foi renomeado para `SQL GET DATA SOURCE LIST`, `Get current data source` foi renomeado para `SQL Get current data source`.
- **4D View Pro**:
    - The new [VP SET DATA CONTEXT](../ViewPro/method-list.md#vp-set-data-context), [VP Get data context](../ViewPro/method-list.md#vp-get-data-context), [VP SET BINDING PATH](../ViewPro/method-list.md#vp-set-binding-path), [VP Get binding path](../ViewPro/method-list.md#vp-get-binding-path) commands allow you to create data contexts and bind their contents to sheet cells.
    - [VP EXPORT DOCUMENT](../ViewPro/method-list.md#vp-get-binding-path) and [VP Export to object](../ViewPro/method-list.md#vp-get-binding-path) now accept the new `includeBindingSource` option that exports the contents of a data context as cell values.
    - (Apenas Windows) As áreas 4D View Pro utilizam agora uma nova janela de parâmetros de impressão.
- **Web areas**:
    + New Windows system rendering engine: Web Areas using the [Windows system rendering engine](../FormObjects/webArea_overview.md#web-rendering-engine) are now based upon **Microsoft Edge WebView2**. Isto afeta as seguintes funcionalidades:
        * Os comandos `WA Create URL history menu` e `WA GET URL HISTORY` retornam apenas o URL atual.
        - The [Progression variable](../FormObjects/properties_WebArea.md#progression) is no longer updated.
        - Os recursos de arrastar e soltar são gerenciados por uma API do Windows que é classificada como "experimental" pela Microsoft. Consequentemente, as áreas da Web podem não funcionar como esperado quando essa API não estiver instalada: Arrastar e soltar pode parecer permitido mesmo quando a preferência `WA enable URL drop` tiver sido definida como False. However, the drop action is blocked by default, and you can control the allowed URLs using the [`On Window Opening Denied` event](../Events/onWindowOpeningDenied.md) (see below).
    - (Somente Windows) Quando o usuário seleciona **Print...** em uma área da Web usando o mecanismo de renderização da Web incorporado, uma nova janela de configurações de impressão é exibida.
    - Para refletir seu efeito real nas áreas da Web (aumentar ou diminuir o nível de zoom da página), dois comandos foram renomeados: `WA SET PAGE TEXT LARGER` foi renomeado para `WA ZOOM IN`, `WA SET PAGE TEXT SMALLER` foi renomeado para `WA ZOOM OUT`.
    - Enhanced security in web areas that use the [embedded web rendering engine](../FormObjects/properties_WebArea.md#use-embedded-web-rendering-engine) or the [Windows system rendering engine](../FormObjects/webArea_overview.md#web-rendering-engine) (based on Microsoft Edge WebView2):
        - As políticas CORS agora se aplicam ao acesso a arquivos em disco em áreas da Web. Por exemplo, ao abrir um arquivo .html com `WA OPEN URL`, esse arquivo .html não pode conter links que apontem para arquivos fora de sua pasta
        - Dropping external contents in web areas is now always blocked and triggers the [`On Window Opening Denied` event](../Events/onWindowOpeningDenied.md) when the `WA enable URL drop` preference is set to True (when set to False, the `WA enable URL drop` preference only modifies the drop cursor icon and filters the `On Window Opening Denied` event). Para permitir uma ação de soltar, você precisa executar um código adicional no método de objeto da área da Web:

```4d
WA OPEN URL(*;"WebArea";WA Get last filtered URL(*;"WebArea"))

```



## 4D 19 R4

- [Alias attributes](../ORDA/ordaClasses.md#alias-attributes-1) are available in ORDA classes.
- Support for [break and continue](../Concepts/flow-control.md#break-and-continue) statements in loops.
- Support for [return](../Concepts/flow-control.md#return-expression) statement and [return expression](../Concepts/parameters.md#return-expression) to return values.
- Support for [compound assignment operators](../Concepts/operators.md#compound-assignment-operators), [short-circuit operators](../Concepts/operators.md#short-circuit-operators), and [ternary operator](../Concepts/operators.md#ternary-operator)
- O [Code Editor](../code-editor/overview.md) agora inclui uma ferramenta suspensa e suporta marcadores para melhorar a navegação do código.
- New Preferences: [**Include tokens in project source files**](../Preferences/general.md#include-tokens-in-project-source-files) and [**Show clipboards**](../Preferences/methods.md#show-clipboards) option on the Methods page.
- New REST request to [lock/unlock](../REST/$lock.md) entities.
- [4D View Pro](../ViewPro/getting-started.md) chapter added with new commands: [VP Copy to object](../ViewPro/method-list.md#vp-copy-to-object), [VP MOVE CELLS](../ViewPro/method-list.md#vp-move-cells), [VP PASTE FROM OBJECT](../ViewPro/method-list.md#vp-paste-from-object).
- New [SystemWorker class](../API/SystemWorkerClass.md).
- A constante `Alias selection` foi renomeada para `Allow alias files` para resolver um conflito resultante do suporte de atributos de alias no ORDA.
- For better compliance with ORDA specifications, the *Map NULL values to blank values* field property is now unchecked by default in databases created with 4D 19 R4 and higher. Você também pode ativar esse comportamento padrão em seus bancos de dados convertidos de versões anteriores selecionando a configuração de compatibilidade Mapear valores NULOS para valores em branco desmarcada por padrão na criação do campo. Agora é recomendável trabalhar com valores nulos, pois eles são totalmente compatíveis com o ORDA.
- Because of the support of the [ternary operator](../Concepts/operators.md#ternary-operator), the colon ":" is no longer allowed in variable, field, constant, function, plugin and project method names. Se o seu banco de dados/projeto contiver identificadores com dois-pontos, você deverá substituí-los antes de convertê-lo para a v19 R4 ou superior; caso contrário, poderão ocorrer erros no seu código. Por exemplo, se você tiver uma variável denominada *a:b*, ela poderá ser interpretada como sintaxe de operador ternário:

```4d
$value:=($size>1000)? a:b // Aqui 'a:b' é visto como um operador ternário.
```



## 4D 19 R3

- [Computed properties](../Concepts/classes.md#function-get-and-function-set) are available in classes.
- [Computed attributes](../ORDA/ordaClasses.md#computed-attributes) are available in ORDA classes. They are similar to computed properties but also support [query](../ORDA/ordaClasses.md#function-query-attributename) and [orderBy](../ORDA/ordaClasses.md#function-orderby-attributename) functions.
- New ORDA dataclass [attributes](../API/DataClassClass.md#attributename): `exposed` and `readOnly`.
- [ZIP archives](../API/ZipArchiveClass.md#zip-create-archive) now supports *LZMA* and *xz* compression algorithms.
- A [new build option](../Desktop/building.md#allow-connection-of-silicon-mac-clients) makes it easier to include Silicon Mac clients in Server applications on Windows.
- Extended [support of dark mode](../Preferences/general.md#appearance-macos-only) on macOS.
- Support of **OAuth2 token object** in [`IMAP New transporter`](../API/IMAPTransporterClass.md#imap-new-transporter), [`POP3 New transporter`](../API/POP3TransporterClass.md#pop3-new-transporter), and [`SMTP New transporter`](../API/SMTPTransporterClass.md#smtp-new-transporter).
- Users can now load a [log configuration file](../Debugging/debugLogFiles.md#using-a-log-configuration-file) using a button in the [server administration window](../ServerWindow/maintenance.md#load-logs-configuration-file).
- Handling [optional parameters](../Concepts/parameters.md#optional-parameters) is more flexible in the 4D language when accessing parameters declared but not passed. Por exemplo, o código seguinte já não provoca um erro:

```4d
// "concate" function of myClass Function concate ($param1 : Text ; $param2 : Text)
ALERT($param1+" "+$param2)
  // Calling method
 $class:=cs.myClass.new()
 $class.concate("Hello";" world") // Displays "Hello world"
 $class.concate("Hello") // Displays "Hello "
 $class.concate() // Displays " "
```
Para obter informações pormenorizadas, consulte [esta publicação do blogue](https://blog.4d.com/stop-press-accessing-parameters-not-being-passed-is-possible). Para beneficiar desta simplificação global, é necessário recompilar tanto os métodos chamados como os que são chamados; assim, os componentes devem ser recompilados.
- Debugging web server sessions [is easier on 4D Server](../WebServer/sessions.md#preemptive-mode).
- The new [4D NetKit](https://github.com/4d/4D-NetKit) component allows you to connect to third-party APIs such as Microsoft Graph.
- 4D 19 R3 uses a stronger hashing algorithm for 4D user passwords: Bcrypt. Esse novo algoritmo é usado automaticamente quando uma senha é alterada usando a Caixa de ferramentas, o comando `CHANGE PASSWORD` ou o comando `Set user properties` . Once a password is modified, opening the database with a version prior to 4D 19 R3 will cause an authentication denial for this account. If you use 4D passwords, it is highly recommended to backup the .4db file (binary databases) or directory.json file (projects) before upgrading to 4D 19 R3 or later.
- Para fins de precisão, a constante `4D digest` foi renomeada para `4D REST digest`.

- End-of-line and BOM management for XML commands: When opened in 4D 19 R3, projects or databases created with previous releases behave differently regarding default end-of-line characters and BOM management in XML documents: line feed (LF) characters are used instead of CR (on macOS), and byte order marks (BOM) are not included. Isso permite uma melhor compatibilidade com as ferramentas VCS. Se necessário, você pode restaurar o comportamento da v19 R2 usando o comando `XML SET OPTIONS` . Em projetos ou bancos de dados convertidos de versões anteriores ao 19 R2, essas opções são gerenciadas por duas configurações de compatibilidade.
- Atalho do Runtime Explorer removido em projetos criados: O atalho **Cmd/Ctrl+Shift+F9** não exibe mais a janela do Runtime Explorer em aplicativos de projetos mesclados de usuário único. Esse atalho agora pode ser um atalho de aplicativo do usuário. Você pode chamar a janela do Runtime Explorer usando o novo comando `OPEN RUNTIME EXPLORER` .
- Recursos de depuração ampliados com o 4D Server: No modo interpretado, o 4D Server agora pode depurar todos os tipos de processos, incluindo sessões da Web escalonáveis. Isso está disponível quando o depurador está conectado ao servidor ou a um cliente remoto.   
  *Aviso: No modo interpretado, para disponibilizar a depuração estendida no computador do servidor, todos os processos do servidor agora são executados automaticamente no modo cooperativo quando o depurador está conectado ao servidor (configuração padrão). Isso pode ter um impacto significativo no desempenho de seus aplicativos convertidos quando eles são executados com o 4D Server v19 R3 e superior. Para restaurar a execução preemptiva no servidor nesse caso, tudo o que você precisa fazer é desconectar o depurador do servidor (e conectá-lo a um cliente remoto, se necessário).*
- On Windows, 4D projects and databases created with 4D 19 R3 and higher use the [DirectWrite API](https://docs.microsoft.com/en-us/windows/win32/DirectWrite/direct-write-portal) in forms. Essa API melhora a renderização de texto, especialmente em configurações de DPI alto. O DirectWrite é usado para renderização de texto com texto estático e de entrada, caixas de seleção, botões e botões de rádio. Observe que as caixas de listagem já usam DirectWrite. A compatibility option allows you to enable DirectWrite in projects and databases created with previous 4D ersions.
- If you use components compiled with 4D 19.0 for Silicon (Apple ARM CPUs) which call the `Count parameters` command, we recommend to recompile them with 4D 19 R3 to provide compatibility with 4D 19 R3 and future releases. Se um componente não for compilado para o Silicon, não será necessário recompilar.








## 4D 19 R2

- A [default .gitignore file](../Preferences/general#create-gitignore-file) can be created with new projects
- New [Blob class API](../API/BlobClass.md) to handle new [`4D.Blob` objects](Concepts/dt_blob.md#blob-types)
- `no-bom` support and new default end-of-line characters in [`.setText()`](../API/FileClass.md#settext)


## Lançamentos anteriores

<details><summary>Clique para ver as notas de lançamento das versões anteriores</summary>

### 4D 19

:::warning Nota de segurança

If your 4D applications use TLS connections, it is recommended that you upgrade to 4D 19.7 LTS build 288986 or higher. Para obter mais informações, consulte este [boletim de segurança](https://blog.4d.com/security-bulletin-two-cves-and-how-to-stay-secure/).

:::

- [IMAPTransporter Class](../API/IMAPTransporterClass.md): new `.createBox()`, `.deleteBox()`, `.renameBox()`, `.subscribe()`, and `.unsubscribe()` functions.
- [File Class](../API/FileClass.md): new `setAppInfo()` and `getAppInfo()` functions.
- New [4DEACH](../Tags/tags.md#4deach-and-4dendeach) transformation tag.
- Web Server: new [SameSite session cookie](../WebServer/webServerConfig.md#session-cookie-samesite) setting.
- Dark and light color scheme support for [forms](../FormEditor/properties_FormProperties.md#color-scheme) and [style sheets](../FormEditor/stylesheets#media-queries)
- New default dark and light themes in [Code Editor preferences](../Preferences/methods.md#theme-list).
- [Native compilation](../Project/compiler.md#compiler-methods-for) for Silicon processors.
- [Variable calculation](../FormObjects/properties_Object.md#variable-calculation) property is now supported by entity selection list box columns.
- New, comprehensive [CLI](../Admin/cli.md) page.



### 4D 18 R6

- [Entity Selection Class](../API/EntitySelectionClass.md): `.average()`, `.max()` and `.min()` functions now return *undefined* if the entity selection is empty.
- [IMAP Mail](../API/IMAPTransporterClass.md), [POP3 Mail](../API/POP3TransporterClass.md) and [SMTP Mail](../API/SMTPTransporterClass.md): `authenticationMode` property enables OAuth 2.0
- [IMAP Mail](../API/IMAPTransporterClass.md): new `.expunge()` and `.append()` functions
- New [WebAdmin](../Admin/webAdmin.md) web server component
- New [DataExplorer](../Admin/dataExplorer.md) interface
- New web [user sessions](../WebServer/sessions.md) and [their API](../API/SessionClass.md).


</details>


## Library table



| Biblioteca | Versão atual | Atualizado em 4D | Comentário                                                                                                  |
| ---------- | ------------ | ---------------- | ----------------------------------------------------------------------------------------------------------- |
| ICU        | 73.2         | 20.1             | Essa grande atualização força uma reconstrução automática dos índices alfanuméricos, de texto e de objetos. |
| CEF        | 118          | 20 R3            | Chromium 5993                                                                                               |
| Hunspell   | 7.3.27       | 20               | Usado para verificação ortográfica em formulários 4D e 4D Write Pro                                         |
| PDFWriter  | 4.3          | 20               | Dependência FreeType na 12.2.1                                                                              |
| SpreadJS   | 19.6         | 20               | Motor 4D View Pro                                                                                           |
| OpenSSL    | 3.1.1        | 20               |                                                                                                             |
| libZip     | 19.5         | 20               | Utilizado pelos componentes zip class, 4D Write Pro, svg e serverNet                                        |
| LZMA       | 5.4.1        | 20               |                                                                                                             |
| Zlib       | 14.1.6       | 20               |                                                                                                             |
| webKit     | WKWebView    | 19               |                                                                                                             |
| PHP        | 8.2.4        | 20               |                                                                                                             |
| libldap    | 2.6.4        | 20 R3            |                                                                                                             |
| libsasl    | 2.1.28       | 20               |                                                                                                             |

