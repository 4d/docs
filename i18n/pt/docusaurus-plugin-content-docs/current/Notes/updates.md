---
id: updates
title: Notas de lançamento
---

## 4D 21

Leia [**O que há de novo no 4D 21**](https://blog.4d.com/en-whats-new-in-4d-21/), o post do blog que lista todos os novos recursos e aprimoramentos em 4D 21.

#### Destaques

- The code of a loaded, interpreted component can now be [edited from a dedicated tab](../Extensions/develop-components.md#editing-all-component-code) in the 4D Explorer.
- Support of TLS encryption for the [4D.TCPConnection](../API/TCPConnectionClass.md#4dtcpconnectionnew) class.
- Línguagem 4D:
     - New "trim" commands to remove leading and trailing spaces from a string: [`Trim`](../commands/trim.md), [`Trim start`](../commands/trim-start.md), and [`Trim end`](../commands/trim-end.md).
     - [`Num`](../commands/num.md) and [`String`](../commands/string.md) commands have been updated to support conversions in different bases (radix).

#### Mudanças de comportamento

- Web services (SOAP): when [scalable sessions](../WebServer/sessions.md#enabling-web-sessions) are enabled, web services now run in [**preemptive processes**](../Develop/preemptive.md) in compiled mode. Make sure your SOAP code is thread-safe.
- Web server: the support of deprecated `4DSYNC/` and `4DCGI/` URLs is removed. No specific processing is done on these URLs anymore.
- Web user sessions are now returned by [`Process activity`](../commands/process-activity.md).

#### Mudanças de comportamento

 - Web services (SOAP): when [scalable sessions](../WebServer/sessions.md#enabling-web-sessions) are enabled, web services now run in [**preemptive processes**](../Develop/preemptive.md) in compiled mode. Make sure your SOAP code is thread-safe.
 - Web server: the support of deprecated `4DSYNC/` and `4DCGI/` URLs is removed. No specific processing is done on these URLs anymore.
 - Web user sessions are now returned by [`Process activity`](../commands/process-activity.md).

#### Mudanças de comportamento

 - Web services (SOAP): when [scalable sessions](../WebServer/sessions.md#enabling-web-sessions) are enabled, web services now run in [**preemptive processes**](../Develop/preemptive.md) in compiled mode. Make sure your SOAP code is thread-safe.
 - Web server: the support of deprecated `4DSYNC/` and `4DCGI/` URLs is removed. No specific processing is done on these URLs anymore.
 - Web user sessions are now returned by [`Process activity`](../commands/process-activity.md).

## 4D 20 R10

Leia [**O que há de novo no 4D 20 R10**](https://blog.4d.com/en-whats-new-in-4d-20-R10/), o post do blog que lista todos os novos recursos e aprimoramentos em 4D 20 R10.

#### Destaques

- Handling of [ORDA events on data](../ORDA/orda-events.md).
- Nova opção `connectionTimeout` no parâmetro [`options`](../API/TCPConnectionClass.md#options-parameter) da função [`4D.TCPConnection.new()`](../API/TCPConnectionClass.md#4dtcpconnectionnew).
- New [`4D.Vector`](../API/VectorClass.md) class to process and compare vectors, usually calculated by AIs.
- New options to generate UUIDs in **version 7** for [4D automatic fields](../settings/database.md#auto-uuid-version) and [`Generate UUID`](../commands/generate-uuid) command.
- New [`UDPSocket`](../API/UDPSocketClass.md) and [`UDPEvent`](../API/UDPEventClass.md) classes to send data using UDP sockets. Support of detailed logging for UDP events in the [`4DTCPUDPLog.txt`](../Debugging/debugLogFiles.md#4dtcpudplogtxt) log file (renamed from `4DTCPLog.txt`).
- [Automatic selection of licenses to embed](../Desktop/building.md#application-automatically-embedding-available-licenses) in the Build application dialog box, modified [`Create deployment license`](../commands/create-deployment-license.md) command, new [`AutomaticLicenseIntegration`](https://doc.4d.com/4Dv20R10/4D/20-R10/AutomaticLicenseIntegration.300-7611090.en.html) BuildApplication xml key.
- Enhanced security for formula copy/paste in [4D Write Pro](../WritePro/managing-formulas.md) and [styled text areas](../FormObjects/input_overview.md): formulas copied from outside the current 4D application are now always pasted as values only.
- 4D AIKit component: new [OpenAIEmbeddingsAPI class](../aikit/Classes/OpenAIEmbeddingsAPI.md) to create embeddings using OpenAI's API.
- You can now [associate a class](../Develop/field-properties.md) to an object field in the structure editor.
- Automatic handling of [recursive dependencies](../Project/components.md#automatic-dependency-resolution).
- Línguagem 4D:
     - For consistency, [`Create entity selection`](../commands/create-entity-selection.md) and [`USE ENTITY SELECTION`](../commands/use-entity-selection.md) commands have been moved from the ["4D Environment"](../commands/theme/4D_Environment.md) to the ["Selection"](../commands/theme/Selection.md) themes.
     - New [`OBJECT SET DATA SOURCE FORMULA`](../commands/object-set-data-source-formula.md) and [`OBJECT Get data source formula`](../commands/object-get-data-source-formula.md) commands to assign and read `Formula` objects as data sources for form objects.
     - [`LISTBOX SET PROPERTY`](../commands/listbox-set-property.md) e [`LISTBOX Get property`](../commands/listbox-get-property.md) suporta três novas constantes: `lk current item`, `lk current item position` e `lk selected items expression`.
- [**Fixed bug list**](https://bugs.4d.fr/fixedbugslist?version=20_R10): list of all bugs that have been fixed in 4D 20 R10.

#### Mudanças de comportamento

- On Windows, current printer fonts intended only for printing (i.e. not usable on screen) are no longer loaded by 4D at startup.
- The *MeCab* library has been removed. This change only affects the processing of Japanese text.
- When an object variable or parameter is declared with a ["cs" class](../Concepts/classes.md#cs) type, assigning it with an object instance of a different class now generates a syntax error.
- The [`Time`](../commands/time) command now returns a negative time expression when the *timeValue* parameter is negative. For instance, `Time("-01:02:03")` will return **-01:02:03**. In previous releases, the negative sign was ignored.

## 4D 20 R9

Leia [**O que há de novo no 4D 20 R9**](https://blog.4d.com/en-whats-new-in-4d-20-R9/), o post do blog que lista todos os novos recursos e aprimoramentos em 4D 20 R9.

#### Destaques

 - The [*MeCab* library](../settings/database.md#support-of-mecab-japanese-version) is now deprecated and will be removed in the next release.
 - Suporte de [tokens de sessão](../WebServer/sessions.md#session-token-otp) manipulado com as novas funções [`Session.createOTP()`](../API/SessionClass.md#createotp) e [`Session.restore()`](../API/SessionClass.md#restore).
 - O assistente de etiqueta agora usa o editor de fórmula para adicionar ou editar fórmulas na [área de design de etiqueta](../Desktop/labels.md#label-preview).
 - New [`TCPListener`](../API/TCPListenerClass.md) class to create TCP server connections; new properties in related classes: `address`, `listener` and `port` in [`TCPConnection`](../API/TCPConnectionClass.md) class, `address` and `port` in [`TCPEvent`](../API/TCPEventClass.md) class.
 - Os comandos e constantes obsoletos agora geram warnings específicos no [live checker e no compilador](../code-editor/write-class-method.md#warnings-and-errors). Você pode saber se um comando está obsoleto usando o comando [`Command name`](../commands/command-name.md).
 - Novos comandos [WA SET CONTEXT](../commands/wa-set-context.md) e [WA Get context](../commands/wa-get-context.md) para controlar o conteúdo de [$4d](../FormObjects/webArea_overview.md#4d-object) em áreas da Web.
 - Novo [parâmetro de banco de dados `RD`](../commands-legacy/set-database-parameter.md#rdp-optimization-133) para otimizar, por exemplo, a área de transferência compartilhada ao usar o protocolo remoto desktop com 4D.
 - Os componentes interpretados agora podem ser [editados a partir do projeto host](../Extensions/develop-components.md#editing-components-from-the-host).
 - [Licencias](../Admin/licenses.md) são agora atualizadas automaticamente na inicialização.
 - Nova [4D AIKit component](../aikit/overview.md) permitindo a interação com APIs de terceiros.
 - Os seguintes comandos de callbacks de comando VP agora esperam que todas as funções personalizadas 4D completem seus cálculos: [VP IMPORT DOCUMENT](../ViewPro/commands/vp-import-document.md), [VP IMPORT FORM BLOB](../ViewPro/commands/vp-import-from-blob.md), [VP IMPORT FROM OBJECT](../ViewPro/commands/vp-import-from-object.md) e [VP FLUSH COMMANDS](../ViewPro/commands/vp-flush-commands.md).
 - Novos recursos [4D Netkit](https://developer.4d.com/4D-NetKit/) para gerenciar agendas do Google e do Microsoft 365; capacidade de usar o servidor web de hospedagem para autenticação OAuth 2.0.
 - 4D Write Pro Interface: New [integrated AI](../WritePro/writeprointerface.md#integrated-ai) to interact with **chatGTP** from your 4D Write Pro documents.
 - [**Lista de bugs corrigidos**](https://bugs.4d.fr/fixedbugslist?version=20_R9): lista de todos os bugs que foram corrigidos no 4D 20 R9.

## 4D 20 R8

Leia [**O que há de novo no 4D 20 R8**](https://blog.4d.com/en-whats-new-in-4d-20-R8/), o post do blog que lista todos os novos recursos e aprimoramentos em 4D 20 R8.

#### Destaques

- Implemente seus próprios [**HTTP request handlers**](../WebServer/http-request-handler.md) usando a nova classe [`4D.IncomingMessage`](../API/IncomingMessageClass.md).
- As expressões usadas em [form object properties](../FormObjects/properties_Reference.md) agora se beneficiam da verificação de sintaxe na [Property list](../FormEditor/formEditor.md#property-list) e no [Compiler](../Project/compiler.md#check-syntax).
- Você pode [associar uma classe a um formulário](../FormEditor/properties_FormProperties.md#form-class) para ativar a antecipação do tipo de código e a instanciação automática dos dados do formulário ao usar o comando [`Form`](../commands/form.md).
- Suporte de [sessões autônomas](../API/SessionClass.md) para simplificar a codificação local para aplicações cliente/servidor.
- [Depurador 4D](../Debugging/debugger.md): novo design e salvamento automático, recursos do modo de exibição.
- [Nova arquitetura de componentes construída](../Desktop/building.md#build-component) para um melhor cumprimento das diretrizes da notarização da Apple.
- Agora você pode facilmente [criar aplicativos de avaliação](../Desktop/building.md#evaluation-application) na caixa de diálogo Criar aplicativo.
- Dependências: Use o gerenciador de dependências para [verificar se há novas versões](../Project/components.md#checking-for-new-versions) e [atualizar](../Project/components.md#updating-dependencies) os componentes do GitHub.
- Novas classes [`TCPConnection`](../API/TCPConnectionClass.md) e [`TCPEvent`](../API/TCPEventClass.md) para gerenciar conexões de clientes TCP, manipular eventos e aprimorar o controle sobre a transmissão de dados. Adicionado [`4DTCPLog.txt`](../Debugging/debugLogFiles.md#4dtcpudplogtxt) para registro detalhado de eventos TCP.
- Novas opções em [VP EXPORT DOCUMENT](../ViewPro/commands/vp-export-document.md) e [VP IMPORT DOCUMENT](../ViewPro/commands/vp-import-document.md) para controlar estilos, fórmulas, integridade de dados e proteção por senha.
- 4D Write Pro:
     - Os seguintes comandos agora permitem parâmetros, como objetos ou coleções: [WP SET ATTRIBUTES](../WritePro/commands/wp-set-attributes.md), [WP Obter atributos](../WritePro/commands/wp-get-attributes.md), [WP REDEFINIR ATTRIBUTES](../WritePro/commands/wp-reset-attributes.md), [Tabela WP anexa linha](../WritePro/commands/wp-table-append-row.md), [documento de importação do WP](../WritePro/commands/wp-import-document.md), [WP EXPORT DOCUMENT](../WritePro/commands/wp-export-document.md), [WP Add picture](../WritePro/commands/wp-add-picture.md), e [WP Insert picture](../WritePro/commands/wp-insert-picture.md).
     - [WP Insert formula](../WritePro/commands/wp-insert-formula.md), [WP Insert document body](../WritePro/commands/wp-insert-document-body.md) e [WP Insert break](../WritePro/commands/wp-insert-break.md), agora são funções que retornam intervalos.
     - Novas expressões relacionadas a atributos de documentos: [This.sectionIndex](../WritePro/managing-formulas.md), [This.sectionName](../WritePro/managing-formulas.md) e [This.pageIndex](../WritePro/managing-formulas.md).
- Línguagem 4D:
     - Comandos modificados: [`FORM EDIT`](../commands/form-edit.md)
     - [`.sign()`](../API/CryptoKeyClass.md#sign) and [`.verify()`](../API/CryptoKeyClass.md#verify) functions of the [4D.CryptoKey class](../API/CryptoKeyClass.md) support Blob in the *message* parameter.
- [**Lista de erros corrigida**](https://bugs.4d.fr/fixedbugslist?version=20_R8): lista de todos os bugs corrigidos em 4D 20 R8.

#### Mudanças de comportamento

 - After a log file modification using [`SELECT LOG FILE`](../commands/select-log-file.md) or the [Backup settings](../Backup/settings.md#log-management), the [`New log file`](../commands/new-log-file.md) command now validates the change, without waiting for a backup. The error -4447 (backup required) is no longer raised.
 - Devido à sua [nova arquitetura](../Desktop/building.md#build-component), os componentes criados com o 4D 20 R8 e superior não podem ser instalados em versões anteriores do 4D.

## 4D 20 R7

Leia [**O que há de novo no 4D 20 R7**](https://blog.4d.com/en-whats-new-in-4d-20-R7/), o post do blog que lista todos os novos recursos e aprimoramentos em 4D 20 R7.

#### Destaques

- As colunas e cabeçalhos da list box de tipo tempo agora suportam a opção ["blankIfNull"](../FormObjects/properties_Display.md#time-format).
- Novas propriedades em [`.getBoxInfo()`](../API/IMAPTransporterClass.md#getboxinfo) e [`.getBoxList()`](../API/IMAPTransporterClass.md#getboxlist).
- Agora você pode [adicionar e remover componentes usando a interface do gerenciador de componentes](../Project/components.md#monitoring-project-dependencies).
- Novo modo [**direct typing mode**](../Project/compiler.md#enabling-direct-typing) no qual você declara todas as variáveis e parâmetros em seu código usando as palavras-chave `var` e `#DECLARE`/`Function` (somente o modo suportado em novos projetos). A [funcionalidade verificação de sintaxe](../Project/compiler.md#check-syntax) foi aprimorado de acordo.
- Suporte a [Session singletons](../Concepts/classes.md#singleton-classes) e à nova propriedade de classe [`.isSessionSingleton`](../API/ClassClass.md#issessionsingleton).
- New [`onHTTPGet` function keyword](../ORDA/ordaClasses.md#onhttpget-keyword) to define singleton or ORDA functions that can be called through [HTTP REST GET requests](../REST/ClassFunctions.md#function-calls).
- Nova classe [`4D.OutgoingMessage`](../API/OutgoingMessageClass.md) para que o servidor REST retorne qualquer conteúdo Web.
- Qodly Studio: agora você pode [anexar o depurador Qodly a 4D Server](../WebServer/qodly-studio.md#using-qodly-debugger-on-4d-server).
- New Build Application keys para aplicativos 4D remotos para validar a autoridade de certificação do servidor [signatures](https://doc.4d.com/4Dv20R7/4D/20-R7/CertificateAuthoritiesCertificates.300-7425900.en.html) e/ou [domain](https://doc.4d.com/4Dv20R7/4D/20-R7/CertificateDomainName.300-7425906.en.html).
- Capacidade de [criar aplicações independentes sem licenças incorporadas](../Desktop/building.md#licenses).
- Línguagem 4D:
     - Novos comandos: [Process info](../commands/process-info.md), [Session info](../commands/session-info.md), [SET WINDOW DOCUMENT ICON](../commands/set-window-document-icon.md)
     - Comandos modificados: [Process activity](../commands/process-activity.md), [Process number](../commands/process-number.md)
     - Deprecated commands (replacement): `GET LAST ERROR STACK` ([Last errors](../commands/last-errors.md)), `GET SERIAL INFORMATION` ([License info](../commands/license-info.md)), `PROCESS PROPERTIES` ([Process info](../commands/process-info.md)), `SET SCREEN DEPTH`, `C_XXX` commands ([var](../Concepts/variables.md#declaring-variables) and [#DECLARE/Function](../Concepts/parameters.md#declaring-parameters) declarations). Deprecated commands are prefixed with "\*o\*".
- 4D Write Pro:
     - Novo comando: [WP DELETE SECTION](../WritePro/commands/wp-delete-section.md)
     - Comandos modificados: [WP DELETE SUBSECTION](../WritePro/commands/wp-delete-subsection.md) e [WP RESET ATTRIBUTES](../WritePro/commands/wp-reset-attributes.md)
- [**Lista de erros corrigida**](https://bugs.4d.fr/fixedbugslist?version=20_R7): lista de todos os bugs corrigidos em 4D 20 R7.

#### Mudanças de comportamento

 - As documentações para [Linguagem 4D](../commands/command-index.md) e [Linguagem 4D Write Pro](../WritePro/commands/command-index.md) estão agora totalmente disponíveis em developer.4d.com. Saiba mais sobre todos os novos recursos e alterações referentes a essas documentações nesta nota de versão.
 - The [`File`](../commands/file.md) command (as well as [`4D.File.new()`](../API/FileClass.md#4dfilenew)) is stricter when it comes to checking the syntax of the *path* supplied as a parameter.
 - A ação de [permission](../ORDA/privileges.md#permission-actions) **describe** foi removida das ações disponíveis. Acesso às urls [`/rest/$catalog`](../REST/$catalog.md) não é mais controlado. Session *describe* privileges are now ignored.

## 4D 20 R6

Leia [**O que há de novo no 4D 20 R6**](https://blog.4d.com/en-whats-new-in-4d-20-R6/), o post do blog que lista todos os novos recursos e aprimoramentos em 4D 20 R6.

#### Destaques

 - Operadores de comparação nas [referências a objetos](../Concepts/dt_object.md#object-operators) e nas [referências a coleções](../Concepts/dt_collection.md#collection-operators). [`collection.query()`](../API/CollectionClass.md#query) now supports [object and collection references as query values](../API/CollectionClass.md#object-or-collection-reference-as-value).
 - When a component has a [declared namespace](../Extensions/develop-components.md#declaring-the-component-namespace), its classes are now automatically shared between all loaded components in the host project via [`cs.<namespace>`](../Concepts/classes.md#cs).
 - Gerenciador de componentes: suporte de [componentes armazenados no GitHub](../Project/components.md#components-stored-on-github).
 - Novo [`entitySeletion. lean()`](../API/EntitySelectionClass.md#clean) função e [`$clean`](../REST/$clean.md) REST API para obter uma nova seleção de entidade baseada na seleção da entidade original, mas sem as entidades excluídas.
 - Nova função [`session.getPrivileges()`](../API/SessionClass.md#getprivileges) e [`$info/privileges`](../REST/$info.md) API REST para inspecionar os privilégios de sessão para uma depuração mais fácil.
 - Novo [arquivo 4DCEFParameters.json](../FormObjects/webArea_overview.md#4dcefparametersjson) para personalizar áreas web embutidas no 4D.
 - Nova classe [HTTPAgent](../API/HTTPAgentClass.md) e nova propriedade [`agent`](../API/HTTPRequestClass.md#options-parameter) para a classe HTTPRequest.
 - Novas funções [`enableState()`](../API/WebFormClass.md) e [`disableState()`](../API/WebFormClass.md) para monitorar os estados da página Qodly a partir do servidor.
 - Nova [`$singleton` API](../REST/$singleton.md) para chamar funções singleton expostas do REST e novos [privilégios associados](../ORDA/privileges.md).
 - Um [novo botão de configurações](../settings/web.md#activate-rest-authentication-through-dsauthentify-function) ajuda você a atualizar seu projeto para usar o modo REST de "login forçado" (o método de banco de dados `On REST Authentication` agora está obsoleto).
 - Uma [nova guia de parametros](../Project/compiler.md#warnings) ajuda a definir a geração de avisos globalmente.
 - Several commands, mainly from the "4D Environment" theme, are now thread-safe, as well as some selectors of the [`SET DATABASE PARAMETER`](../commands-legacy/set-database-parameter.md)/[`Get database parameter`](../commands-legacy/get-database-parameter.md) commands.
 - New [4D-QPDF component](https://github.com/4d/4D-QPDF) that provides the `PDF Get attachments` command to extract attachments from a PDF/A3 document.
 - [**Lista de erros corrigida**](https://bugs.4d.fr/fixedbugslist?version=20_R6): lista de todos os bugs corrigidos em 4D 20 R6.

#### Mudanças de comportamento

 - Suporte para perseguir a rolagem nos formulários: subformas pai agora rolam automaticamente quando objetos roláveis incorporados ([verticalmente](../FormObjects/properties_Appearance.md#vertical-scroll-bar) ou [horizontalmente](. /FormObjects/properties_Appearance.md#horizontal-scroll-bar)) atingiram os limites e o usuário continua rolando usando o mouse ou rastreador (overscrolling).
 - A API REST [`$catalog`](../REST/$catalog.md) agora retorna singletons (se houver).

## 4D 20 R5

Leia [**O que há de novo no 4D 20 R5**](https://blog.4d.com/en-whats-new-in-4d-20-R5/), o post do blog que lista todos os novos recursos e aprimoramentos em 4D 20 R5.

#### Destaques

 - Novo [Gerenciador de componentes](../Project/components.md) para lidar com componentes por meio de um arquivo `dependencies.json`.
 - Suporte a estruturas de tratamento de erros [`Try...Catch...End try`](../Concepts/error-handling.md#trycatchend-try).
 - QUIC network layer now supports [broadcasting](../Desktop/clientServer.md#opening-a-remote-project), [SSO](https://doc.4d.com/4Dv20R5/4D/20-R5/Single-Sign-On-SSO-on-Windows.300-6932709.en.html), and [IPv6](https://doc.4d.com/4Dv20R5/4D/20-R5/IP-Settings.300-6932707.en.html).
 - Soporte de [selecciones de entidades restringidas](../ORDA/entities.md#restricting-entity-selections).
 - Soporte de [clases compartidas](../Concepts/classes.md#shared-classes) y de [clases singleton](../Concepts/classes.md#singleton-classes). Novas propriedades de classe: [`isShared`](../API/ClassClass.md#isshared), [`isSingleton`](../API/ClassClass.md#issingleton), [`me`](../API/ClassClass.md#me).
 - Suporte à [inicializando uma propriedade de classe em sua linha de declaração](../Concepts/classes.md#initializing-the-property-in-the-declaration-line).
 - Novo modo [forçar  login para solicitações REST](../REST/authUsers.md#force-login-mode) com um suporte específico [no Qodly Studio para 4D](../WebServer/qodly-studio.md#force-login).
 - Novo parâmetro REST [$format](../REST/$format.md).
 - O objeto [`Session`](../commands/session.md) agora está disponível em sessões de usuários remotos e sessões de procedimentos armazenados.
 - [**Lista de erros corrigida**](https://bugs.4d.fr/fixedbugslist?version=20_R5): lista de todos os bugs corrigidos em 4D 20 R5.

#### Mudanças de comportamento

 - Os plug-ins *4D Internet Commands* e *4D for OCI* não estão mais incluídos nos instaladores do 4D. Para obter esses plug-ins, você precisa se conectar ao [**Portal de descarrega de produtos 4D**](https://product-download.4d.com/).
 - Changes made in the Structure editor regarding graphical appearance of tables and fields (color, position, order...) agora são salvas em um arquivo separado chamado `catalog_editor.json` armazenado na pasta [`Sources`](../Project/architecture.md#sources) do projeto.

## 4D 20 R4

Leia [**O que há de novo no 4D v20 R4**](https://blog.4d.com/en-whats-new-in-4d-v20-R4/), o post do blog que lista todos os novos recursos e aprimoramentos em 4D v20 R4.

#### Destaques

 - Suporte do [formato de criptografia `ECDSA`](../Admin/tls.md#encryption) para os certificados TLS.
 - As conexões TLS cliente/servidor e servidor SQL agora são [configuradas dinamicamente](../Admin/tls.md#enabling-tls-with-the-other-servers) (não são necessários arquivos de certificado).
 - Direct HTML format for [structure definition exports](https://doc.4d.com/4Dv20R4/4D/20-R4/Exporting-and-importing-structure-definitions.300-6654851.en.html).
 - Novo [Code Live Checker](../code-editor/write-class-method.md#warnings-and-errors) que aprimora o controle de código durante a digitação de código, a verificação de sintaxe e as etapas de compilação para evitar erros de execução.
 - Os parâmetros de métodos declarados nos protótipos `#DECLARE` [não são mais necessários nos métodos "Compiler_"](../Concepts/parameters.md).
 - Suporte de [formatos personalizados de data e hora](../Project/date-time-formats.md)
 - Nova palavra-chave [`Try(expression)`](../Concepts/error-handling.md#tryexpression) para tratar casos de erro simples.
 - Novo comando [`HTTP Parse message`](../commands/http-parse-message.md).
 - Nova opção de compatibilidade [Impressão sem bloqueio](../settings/compatibility.md).
 - Nuevo [modo de edición](../Admin/dataExplorer.md#editing-data) en el Explorador de datos.
 - [**Lista de erros corrigida**](https://bugs.4d.fr/fixedbugslist?version=20_R4): lista de todos os bugs corrigidos em 4D 20 R4.

#### Mudanças de comportamento

 - Usando uma sintaxe legada para declarar parâmetros (por exemplo, `C_TEXT($1)` ou `var $1 : Text`) está agora obsoleto e gera avisos na digitação de código, verificação de sintaxe e etapas de compilação.
 - La coherencia de las selecciones ahora se mantiene después de que se hayan eliminado algunos registros y se hayan creado otros (ver [esta entrada de blog](https://blog.4d.com/4d-keeps-your-selections-of-records-consistent-regarding-deletion-of-records/)).
 - Na atualização da [biblioteca OpenSSL](#library-table), o nível de segurança SSL/TLS padrão foi alterado de 1 para 2. Chaves RSA, DSA e DH de 1024 bits ou mais e menos de 2048 bits, assim como chaves ECC de 160 bits ou mais e menos de 224 bits, agora não são mais permitidas. Por padrão, a compressão TLS já estava desativada nas versões anteriores do OpenSSL. No nível de segurança 2, ele não pode ser habilitado.
 - Make sure your "On REST authentication" database method can handle passwords in clear form (third parameter is then **False**) and that `Open datastore` encrypts your connection by passing the "tls" option to **True** in *connectionInfo*. In order to allow password verification when the [4D user directory uses the bcrypt algorithm](https://blog.4d.com/bcrypt-support-for-passwords/), the "password" value in the *connectionInfo* parameter of the [`Open datastore`](../commands/open-datastore.md) command is now sent in clear form by default. Em casos específicos, uma nova opção "passwordAlgorithm" também pode ser usada para fins de compatibilidade (consulte o comando [`Open datastore`](../commands/open-datastore.md)).

## 4D 20 R3

Leia [**O que há de novo no 4D v20 R3**](https://blog.4d.com/en-whats-new-in-4d-20-vR3/), o post do blog que lista todos os novos recursos e aprimoramentos em 4D v20 R3.

#### Destaques

 - Nova função [`collection.multiSort`](../API/CollectionClass.md#multisort).
 - Support of *context* parameter in [`Formula from string`](../commands/formula-from-string.md).
 - Support of `headers` property in *connectionHandler* parameter of [4D.WebSocket.new](../API/WebSocketClass.md#4dwebsocketnew).
 - [Marcador de modificação global](../ORDA/global-stamp.md) para facilitar a implementação de módulos de sincronização de dados. Novas funções: [`ds.getGlobalStamp`](../API/DataStoreClass.md#getglobalstamp) e [`ds.setGlobalStamp`](../API/DataStoreClass.md#setglobalstamp).
 - Atribuindo arquivo de referências a atributos de imagem/blob é [suportado no ORDA](../ORDA/entities.md#assigning-files-to-picture-or-blob-attributes).
 - Support for [initializing the variable's value and data type in the declaration line](../Concepts/variables/#initializing-variables-in-the-declaration-line).
 - As configurações de arquivos de log agora são [salvas com o arquivo de dados atual](../Backup/settings.md#log-management)
 - Nova sintaxe para [declarar parâmetros variádicos](../Concepts/parameters.md#declaring-variadic-parameters)
 - 4D View Pro: soporte de la [importación](../ViewPro/commands/vp-import-from-blob) y de la [exportación](../ViewPro/commands/vp-export-to-blob) de documentos 4D View Pro al formato Blob.
 - [**Lista de erros corrigida**](https://bugs.4d.fr/fixedbugslist?version=20_R3): lista de todos os bugs corrigidos em 4D 20 R3.

#### Mudanças de comportamento

 - Alguns erros foram capturados pelo seu [método de tratamento de erros](../Concepts/error-handling.md) somente no modo interpretado. A fix has been done, so that the following errors will now be caught also in compiled mode: *Indice out of range*, *Type incompatible*, and *Dereferencing a Null pointer*. Entretanto, para esses erros nos processadores Intel, o procedimento ainda é interrompido como antes, enquanto nos processadores Apple Silicon o procedimento só é interrompido se você chamar o comando [`ABORT`](../commands-legacy/abort.md).
 - 4D não inclui mais um interpretador PHP interno. You need to [set up and run your own PHP interpreter](https://blog.4d.com/deprecation-of-php-commands-and-removal-of-4d-built-in-php-interpreter) to use PHP commands.

## 4D 20 R2

Leia [**O que há de novo no 4D v20 R2**](https://blog.4d.com/en-whats-new-in-4d-v20-R2/), o post do blog que lista todos os novos recursos e aprimoramentos em 4D v20 R2.

:::warning Nota de segurança

Se suas aplicações 4D utilizam conexões TLS, é recomendado que você faça a atualização para a versão 4D 20 R2 HF1 build 100440 ou superior. For more information, refer to this [Security bulletin](https://blog.4d.com/security-bulletin-two-cves-and-how-to-stay-secure/).

:::

#### Destaques

 - Nova classe [WebSocket](../API/WebSocketClass.md) para criar e gerenciar conexões WebSocket do cliente a partir de 4D.
 - Nova [configuração de interface](../settings/client-server.md#network-layer) para a camada de rede QUIC.
 - 4D View Pro: soporte del formato de archivo **.sjs** para [la importación](../ViewPro/commands/vp-import-document) y la [exportación](../ViewPro/commands/vp-export-document) de documentos.
 - Interface 4D Write Pro: novo [Table Wizard](../WritePro/writeprointerface.md).
 - [**Lista de erros corrigida**](https://bugs.4d.fr/fixedbugslist?version=20_R2): lista de todos os bugs corrigidos em 4D 20 R2.

#### Mudanças de comportamento

 - **Aviso**: o valor inicial dos objetos [`offset`](../API/FileHandleClass.md#offset) de [4D.FileHandle](../API/FileHandleClass.md) era configurado incorretamente para 1 ao invés de 0. Foi feita uma correção no 4D a partir das versões **20.1 HF1** e **20 R2** e o valor agora é 0.

## 4D 20.x LTS

Veja [**Notas de lançamento para 4D 20.x LTS**](../../versioned_docs/version-20/Notas/updates.md).

## Tabela da biblioteca

| Biblioteca | Versão atual                           | Atualizado em 4D | Comentário                                                                                                                                         |
| ---------- | -------------------------------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| BoringSSL  | 0697c88                                | **21**           | Usado para QUIC                                                                                                                                    |
| CEF        | 7258                                   | **21**           | Chromium 139                                                                                                                                       |
| Hunspell   | 7.3.27 | 20               | Usado para verificação ortográfica em formulários 4D e 4D Write Pro                                                                                |
| ICU        | 73.2                   | 20               | Essa grande atualização força uma reconstrução automática dos índices alfanuméricos, de texto e de objetos.                        |
| libldap    | 2.6.7  | 20 R6            |                                                                                                                                                    |
| libsasl    | 2.1.28 | 20               |                                                                                                                                                    |
| Liblsquic  | 4.2.0  | 20 R10           | Usado para QUIC                                                                                                                                    |
| Libuv      | 1.51.0 | **21**           | Usado para QUIC                                                                                                                                    |
| libZip     | 19.5                   | 20               | Utilizado pelos componentes zip class, 4D Write Pro, svg e serverNet                                                                               |
| LZMA       | 5.4.1  | 20               |                                                                                                                                                    |
| ngtcp2     | 1.14.0 | **21**           | Usado para QUIC                                                                                                                                    |
| OpenSSL    | 3.5.2  | **21**           |                                                                                                                                                    |
| PDFWriter  | 4.7.0  | **21**           | Used for [`WP Export document`](../WritePro/commands/wp-export-document.md) and [`WP Export variable`](../WritePro/commands/wp-export-variable.md) |
| PHP        | 8.2.4  | 20               |                                                                                                                                                    |
| SpreadJS   | 17.1.0 | 20 R7            | Veja [este post de blog](https://blog.4d.com/4d-view-pro-whats-new-in-4d-20-r7/) para uma visão geral dos novos recursos                           |
| webKit     | WKWebView                              | 19               |                                                                                                                                                    |
| Zlib       | 14.1.6 | 20               |                                                                                                                                                    |
