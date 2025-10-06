---
id: updates
title: Notas de lançamento
---

## 4D 20 R9

Leia [**O que há de novo no 4D 20 R9**](https://blog.4d.com/en-whats-new-in-4d-20-R9/), o post do blog que lista todos os novos recursos e aprimoramentos em 4D 20 R9.

#### Destaques

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
 - A [biblioteca \*MeCab](../settings/database.md#support-of-mecab-japanese-version) (usada para classificação/busca na língua japonesa) está obsoleta e seu suporte será removido na próxima versão.
 - [**Lista de erros corrigida**](https://bugs.4d.fr/fixedbugslist?version=20_R9): lista de todos os bugs corrigidos em 4D 20 R7.

## 4D 20 R8

Leia [**O que há de novo no 4D 20 R8**](https://blog.4d.com/en-whats-new-in-4d-20-R8/), o post do blog que lista todos os novos recursos e aprimoramentos em 4D 20 R8.

#### Destaques

- Implemente seus próprios [**HTTP request handlers**](../WebServer/http-request-handler.md) usando a nova classe [`4D.IncomingMessage`](../API/IncomingMessageClass.md).
- As expressões usadas em [form object properties](../FormObjects/properties_Reference.md) agora se beneficiam da verificação de sintaxe na [Property list](../FormEditor/formEditor.md#property-list) e no [Compiler](../Project/compiler.md#check-syntax).
- Você pode [associar uma classe a um formulário](../FormEditor/properties_FormProperties.md#form-class) para ativar a antecipação do tipo de código e a instanciação automática dos dados do formulário ao usar o comando [`Form`](../commands/form.md).
- Suporte de [sessões autônomas](../API/SessionClass.md) para simplificar a codificação local para aplicações cliente/servidor.
- [Depurador 4D](../Debugging/debugger.md): novo design e salvamento automático, recursos do modo de exibição.
- [Nova arquitetura de componentes construída](../Desktop/building.md#build-component) para um melhor cumprimento das diretrizes da notarização da Apple.
- Agora você pode facilmente [criar aplicativos de avaliação](../Desktop/building.md#build-an-evaluation-application) na caixa de diálogo Criar aplicativo.
- Dependências: Use o gerenciador de dependências para [verificar se há novas versões](../Project/components.md#checking-for-new-versions) e [atualizar](../Project/components.md#updating-dependencies) os componentes do GitHub.
- Novas classes [`TCPConnection`](../API/TCPConnectionClass.md) e [`TCPEvent`](../API/TCPEventClass.md) para gerenciar conexões de clientes TCP, manipular eventos e aprimorar o controle sobre a transmissão de dados. Adicionado [`4DTCPLog.txt`](../Debugging/debugLogFiles.md#4dtcplogtxt) para registro detalhado de eventos TCP.
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

 - Depois de uma modificação do arquivo de log usando [`SELECT LOG FILE`](../commands/select-log-file.md) ou as [configurações do backup](../Backup/settings.md#log-management), o comando [`New log file`](../commands/new-log-file.md) valida a alteração agora sem esperar por um backup. O erro -4447 (backup necessário) não foi mais gerado.
 - Devido à sua [nova arquitetura](../Desktop/building.md#build-component), os componentes criados com o 4D 20 R8 e superior não podem ser instalados em versões anteriores do 4D.

## 4D 20 R7

Leia [**O que há de novo no 4D 20 R7**](https://blog.4d.com/en-whats-new-in-4d-20-R7/), o post do blog que lista todos os novos recursos e aprimoramentos em 4D 20 R7.

#### Destaques

- As colunas e cabeçalhos da list box de tipo tempo agora suportam a opção ["blankIfNull"](../FormObjects/properties_Display.md#time-format).
- Novas propriedades em [`.getBoxInfo()`](../API/IMAPTransporterClass.md#getboxinfo) e [`.getBoxList()`](../API/IMAPTransporterClass.md#getboxlist).
- Agora você pode [adicionar e remover componentes usando a interface do gerenciador de componentes](../Project/components.md#monitoring-project-dependencies).
- Novo modo [**direct typing mode**](../Project/compiler.md#enabling-direct-typing) no qual você declara todas as variáveis e parâmetros em seu código usando as palavras-chave `var` e `#DECLARE`/`Function` (somente o modo suportado em novos projetos). A [funcionalidade verificação de sintaxe](../Project/compiler.md#check-syntax) foi aprimorado de acordo.
- Suporte a [Session singletons](../Concepts/classes.md#singleton-classes) e à nova propriedade de classe [`.isSessionSingleton`](../API/ClassClass.md#issessionsingleton).
- Nova palavra-chave da função [`onHTTPGet`](../ORDA/ordaClasses.md#onhttpget-keyword) para definir funções singleton ou ORDA que podem ser chamadas por meio de [solicitações HTTP REST GET](../REST/ClassFunctions.md#function-calls).
- Nova classe [`4D.OutgoingMessage`](../API/OutgoingMessageClass.md) para que o servidor REST retorne qualquer conteúdo Web.
- Qodly Studio: agora você pode [anexar o depurador Qodly a 4D Server](../WebServer/qodly-studio.md#using-qodly-debugger-on-4d-server).
- New Build Application keys para aplicativos 4D remotos para validar a autoridade de certificação do servidor [signatures](https://doc.4d.com/4Dv20R7/4D/20-R7/CertificateAuthoritiesCertificates.300-7425900.en.html) e/ou [domain](https://doc.4d.com/4Dv20R7/4D/20-R7/CertificateDomainName.300-7425906.en.html).
- Capacidade de [criar aplicações independentes sem licenças incorporadas](../Desktop/building.md#licenses).
- Línguagem 4D:
  - Novos comandos: [Process info](../commands/process-info.md), [Session info](../commands/session-info.md), [SET WINDOW DOCUMENT ICON](../commands/set-window-document-icon.md)
  - Comandos modificados: [Process activity](../commands/process-activity.md), [Process number](../commands/process-number.md)
  - Deprecated commands (replacement): `GET LAST ERROR STACK` ([Last errors](../commands-legacy/last-errors.md)), `GET SERIAL INFORMATION` ([License info](../commands/license-info.md)), `PROCESS PROPERTIES` ([Process info](../commands/process-info.md)), `SET SCREEN DEPTH`, `C_XXX` commands ([var](../Concepts/variables.md#declaring-variables) and [#DECLARE/Function](../Concepts/parameters.md#declaring-parameters) declarations). Deprecated commands are prefixed with "\*O\*".
- 4D Write Pro:
  - Novo comando: [WP DELETE SECTION](../WritePro/commands/wp-delete-section.md)
  - Comandos modificados: [WP DELETE SUBSECTION](../WritePro/commands/wp-delete-subsection.md) e [WP RESET ATTRIBUTES](../WritePro/commands/wp-reset-attributes.md)
- [**Lista de erros corrigida**](https://bugs.4d.fr/fixedbugslist?version=20_R7): lista de todos os bugs corrigidos em 4D 20 R7.

#### Mudanças de comportamento

 - As documentações para [Linguagem 4D](../commands/command-index.md) e [Linguagem 4D Write Pro](../WritePro/commands/command-index.md) estão agora totalmente disponíveis em developer.4d.com. Saiba mais sobre todos os novos recursos e alterações referentes a essas documentações nesta nota de versão.
 - O comando [`File`](../commands/file.md) (assim como [`4D.File. ew()`](../API/FileClass.md#4dfilenew)) é mais rigorosa quando se trata de verificar a sintaxe do *caminho* fornecido como um parâmetro.
 - A ação de [permission](../ORDA/privileges.md#permission-actions) **describe** foi removida das ações disponíveis. Acesso às urls [`/rest/$catalog`](../REST/$catalog.md) não é mais controlado. Os privilégios *describe* da sessão agora são ignorados.

## 4D 20 R6

Leia [**O que há de novo no 4D 20 R6**](https://blog.4d.com/en-whats-new-in-4d-20-R6/), o post do blog que lista todos os novos recursos e aprimoramentos em 4D 20 R6.

#### Destaques

 - Operadores de comparação nas [referências a objetos](../Concepts/dt_object.md#object-operators) e nas [referências a coleções](../Concepts/dt_collection.md#collection-operators). [`collection.query()`](../API/CollectionClass.md#query) agora suporta [objeto e referências da coleção como valores de consulta](../API/CollectionClass.md#object-or-collection-reference-as-value).
 - Quando um componente tiver um [declared namespace](../Extensions/develop-components.md#declaring-the-component-namespace), suas classes agora são automaticamente compartilhadas entre todos os componentes carregados no projeto host por meio de [`cs.<namespace>`](../Concepts/classes.md#cs).
 - Gerenciador de componentes: suporte de [componentes armazenados no GitHub](../Project/components.md#components-stored-on-github).
 - Novo [`entitySeletion. lean()`](../API/EntitySelectionClass.md#clean) função e [`$clean`](../REST/$clean.md) REST API para obter uma nova seleção de entidade baseada na seleção da entidade original, mas sem as entidades excluídas.
 - Nova função [`session.getPrivileges()`](../API/SessionClass.md#getprivileges) e [`$info/privileges`](../REST/$info.md) API REST para inspecionar os privilégios de sessão para uma depuração mais fácil.
 - Novo [arquivo 4DCEFParameters.json](../FormObjects/webArea_overview.md#4dcefparametersjson) para personalizar áreas web embutidas no 4D.
 - Nova classe [HTTPAgent](../API/HTTPAgentClass.md) e nova propriedade [`agent`](../API/HTTPRequestClass.md#options-parameter) para a classe HTTPRequest.
 - Novas funções [`enableState()`](../API/WebFormClass.md) e [`disableState()`](../API/WebFormClass.md) para monitorar os estados da página Qodly a partir do servidor.
 - Nova [`$singleton` API](../REST/$singleton.md) para chamar funções singleton expostas do REST e novos [privilégios associados](../ORDA/privileges.md).
 - Um [novo botão de configurações](../settings/web.md#activate-rest-authentication-through-dsauthentify-function) ajuda você a atualizar seu projeto para usar o modo REST de "login forçado" (o método de banco de dados `On REST Authentication` agora está obsoleto).
 - Uma [nova guia de parametros](../Project/compiler.md#warnings) ajuda a definir a geração de avisos globalmente.
 - Vários comandos, principalmente do tema "4D Environment", agora estão seguros bem como alguns seletores dos comandos [`SET DATABASE PARAMETER`](../commands-legacy/set-database-parameter.md)/[`Obter parâmetro de banco de dados`](../commands-legacy/get-database-parameter.md).
 - Novo [componente 4D-QPDF](https://github.com/4d/4D-QPDF) que fornece o comando `PDF Obter anexos` para extrair anexos de um documento PDF/A3.
 - [**Lista de erros corrigida**](https://bugs.4d.fr/fixedbugslist?version=20_R6): lista de todos os bugs corrigidos em 4D 20 R6.

#### Mudanças de comportamento

 - É possível rolagem acomplada nos formulários: subformulário pai agora rolam automaticamente quando objetos roláveis incorporados ([verticalmente](../FormObjects/properties_Appearance.md#vertical-scroll-bar) ou [horizontalmente](. /FormObjects/properties_Appearance.md#horizontal-scroll-bar)) atingirem os limites e o usuário continuar rolando usando o mouse ou rastreador (overscrolling).
 - A API REST [`$catalog`](../REST/$catalog.md) agora retorna singletons (se houver).

## 4D 20 R5

Leia [**O que há de novo no 4D 20 R5**](https://blog.4d.com/en-whats-new-in-4d-20-R5/), o post do blog que lista todos os novos recursos e aprimoramentos em 4D 20 R5.

#### Destaques

 - Novo [Gerenciador de componentes](../Project/components.md) para lidar com componentes por meio de um arquivo `dependencies.json`.
 - Suporte a estruturas de tratamento de erros [`Try...Catch...End try`](../Concepts/error-handling.md#trycatchend-try).
 - A camada de rede QUIC agora suporta [broadcasting](../Desktop/clientServer.md#opening-a-remote-project), [SSO](https://doc.4d.com/4Dv20R5/4D/20-R5/Single-Sign-On-SSO-on-Windows.300-6932709.en.html), e [IPv6](https://doc.4d.com/4Dv20R5/4D/20-R5/IP-Settings.300-6932707.en.html).
 - Compatibilidade de [seleções da entidade restritas](../ORDA/entities.md#restricting-entity-selections).
 - Compatibilidade de [clases compartidas](../Concepts/classes.md#shared-classes) e de [classes singleton](../Concepts/classes.md#singleton-classes). Novas propriedades de classe: [`isShared`](../API/ClassClass.md#isshared), [`isSingleton`](../API/ClassClass.md#issingleton), [`me`](../API/ClassClass.md#me).
 - Compatibilidade com [inicializando uma propriedade de classe em sua linha de declaração](../Concepts/classes.md#initializing-the-property-in-the-declaration-line).
 - Novo modo [forçar  login para solicitações REST](../REST/authUsers.md#force-login-mode) com um suporte específico [no Qodly Studio para 4D](../WebServer/qodly-studio.md#force-login).
 - Novo parâmetro REST [$format](../REST/$format.md).
 - O objeto [`Session`](../commands/session.md) agora está disponível em sessões de usuários remotos e sessões de procedimentos armazenados.
 - [**Lista de erros corrigida**](https://bugs.4d.fr/fixedbugslist?version=20_R5): lista de todos os bugs corrigidos em 4D 20 R5.

#### Mudanças de comportamento

 - Os plug-ins *4D Internet Commands* e *4D for OCI* não estão mais incluídos nos instaladores do 4D. Para obter esses plug-ins, você precisa se conectar ao [**Portal de descarrega de produtos 4D**](https://product-download.4d.com/).
 - Alterações feitas no editor de estrutura com relação à aparência gráfica de tabelas e campos (cor, posição, ordem...) agora são salvas em um arquivo separado chamado `catalog_editor.json` armazenado na pasta [`Sources`](../Project/architecture.md#sources) do projeto.

## 4D 20 R4

Leia [**O que há de novo no 4D v20 R4**](https://blog.4d.com/en-whats-new-in-4d-v20-R4/), o post do blog que lista todos os novos recursos e aprimoramentos em 4D v20 R4.

#### Destaques

 - Compatibilidade do [formato de criptografia `ECDSA`](../Admin/tls.md#encryption) para os certificados TLS.
 - As conexões TLS cliente/servidor e servidor SQL agora são [configuradas dinamicamente](../Admin/tls.md#enabling-tls-with-the-other-servers) (não são necessários arquivos de certificado).
 - Formato HTML direto para [exportações de definição de estrutura](https://doc.4d.com/4Dv20R4/4D/20-R4/Exporting-and-importing-structure-definitions.300-6654851.en.html).
 - Novo [Code Live Checker](../code-editor/write-class-method.md#warnings-and-errors) que aprimora o controle de código durante a digitação de código, a verificação de sintaxe e as etapas de compilação para evitar erros de execução.
 - Os parâmetros de métodos declarados nos protótipos `#DECLARE` [não são mais necessários nos métodos "Compiler_"](../Concepts/parameters.md).
 - Compatibilidade de [formatos personalizados de data e hora](../Project/date-time-formats.md)
 - Nova palavra-chave [`Try(expression)`](../Concepts/error-handling.md#tryexpression) para tratar casos de erro simples.
 - Novo comando [`HTTP Parse message`](../commands/http-parse-message.md).
 - Nova opção de compatibilidade [Impressão sem bloqueio](../settings/compatibility.md).
 - Novo [modo de edição](../Admin/dataExplorer.md#editing-data) no Data Explorer.
 - [**Lista de erros corrigida**](https://bugs.4d.fr/fixedbugslist?version=20_R4): lista de todos os bugs corrigidos em 4D 20 R4.

#### Mudanças de comportamento

 - O uso de uma sintaxe herdada para declarar parâmetros (por exemplo, `C_TEXT($1)` ou `var $1 : Text`) agora está obsoleto e gera avisos nas etapas de digitação de código, verificação de sintaxe e compilação.
 - As seleções agora são mantidas consistentes após alguns registros terem sido apagados e outros registros criados (veja [este post de blog](https://blog.4d.com/4d-keeps-your-selections-of-records-consistent-regarding-deletion-of-records/).
 - Na atualização da [biblioteca OpenSSL](#library-table), o nível de segurança SSL/TLS padrão foi alterado de 1 para 2. Chaves RSA, DSA e DH de 1024 bits ou mais e menos de 2048 bits, assim como chaves ECC de 160 bits ou mais e menos de 224 bits, agora não são mais permitidas. Por padrão, a compressão TLS já estava desativada nas versões anteriores do OpenSSL. No nível de segurança 2, ele não pode ser habilitado.
 - Para permitir a verificação de senha quando o diretório do usuário [4D usa o algoritmo bcrypt](https://blog.4d.com/bcrypt-support-for-passwords/), o valor da "senha" no parâmetro *connectionInfo* do comando [`Open datastore`](../commands/open-datastore.md) agora é enviado de forma clara por padrão. Certifique-se de que seu método de banco de dados "Na autenticação REST" pode manipular senhas em forma clara (terceiro parâmetro é então **False**) e que `Abrir datastore` criptografa sua conexão passando a opção "tls" para **True** em *connectionInfo*. Em casos específicos, uma nova opção "passwordAlgorithm" também pode ser usada para fins de compatibilidade (consulte o comando [`Open datastore`](../commands/open-datastore.md)).

## 4D 20 R3

Leia [**O que há de novo no 4D v20 R3**](https://blog.4d.com/en-whats-new-in-4d-20-vR3/), o post do blog que lista todos os novos recursos e aprimoramentos em 4D v20 R3.

#### Destaques

 - Nova função [`collection.multiSort`](../API/CollectionClass.md#multisort).
 - Compatibilidade do parâmetro *context* em [`Formula from string`](../commands/formula-from-string.md).
 - Support of `headers` property in *connectionHandler* parameter of [4D.WebSocket.new](../API/WebSocketClass.md#4dwebsocketnew).
 - [Marcador de modificação global](../ORDA/global-stamp.md) para facilitar a implementação de módulos de sincronização de dados. Novas funções: [`ds.getGlobalStamp`](../API/DataStoreClass.md#getglobalstamp) e [`ds.setGlobalStamp`](../API/DataStoreClass.md#setglobalstamp).
 - Atribuindo arquivo de referências a atributos de imagem/blob é [suportado no ORDA](../ORDA/entities.md#assigning-files-to-picture-or-blob-attributes).
 - Compatibilidade para [inicializar o valor e tipo de dados da variável na linha de declaração](../Concepts/variables/#initializing-variables-in-the-declaration-line).
 - As configurações de arquivos de log agora são [salvas com o arquivo de dados atual](../Backup/settings.md#log-management)
 - Nova sintaxe para [declarar parâmetros variádicos](../Concepts/parameters.md#declaring-variadic-parameters)
 - Visualização 4D Pro: compatibilidade para o [import](../ViewPro/commands/vp-import-from-blob) e [export](../ViewPro/commands/vp-export-to-blob) dos documentos 4D View Pro no formato Blob.
 - [**Lista de erros corrigida**](https://bugs.4d.fr/fixedbugslist?version=20_R3): lista de todos os bugs corrigidos em 4D 20 R3.

#### Mudanças de comportamento

 - Alguns erros foram capturados pelo seu [método de tratamento de erros](../Concepts/error-handling.md) somente no modo interpretado. Foi feita uma correção para que os seguintes erros agora sejam pegos também no modo compilado: *Índice fora do intervalo*, *Tipo incompatível* e *Dereferenciando um ponteiro Nulo*. Entretanto, para esses erros nos processadores Intel, o procedimento ainda é interrompido como antes, enquanto nos processadores Apple Silicon o procedimento só é interrompido se você chamar o comando [`ABORT`](../commands-legacy/abort.md).
 - 4D não inclui mais um interpretador PHP interno. Você precisa [configurar e executar seu próprio interpretador PHP](https://blog.4d.com/deprecation-of-php-commands-and-removal-of-4d-built-in-php-interpreter) para usar comandos PHP.

## 4D 20 R2

Leia [**O que há de novo no 4D v20 R2**](https://blog.4d.com/en-whats-new-in-4d-v20-R2/), o post do blog que lista todos os novos recursos e aprimoramentos em 4D v20 R2.

:::warning Nota de segurança

Se suas aplicações 4D utilizam conexões TLS, é recomendado que você faça a atualização para a versão 4D 20 R2 HF1 build 100440 ou superior. Para mais informações, consulte este [Boletim de segurança](https://blog.4d.com/security-bulletin-two-cves-and-how-to-stay-secure/).

:::

#### Destaques

 - Nova classe [WebSocket](../API/WebSocketClass.md) para criar e gerenciar conexões WebSocket do cliente a partir de 4D.
 - Nova [configuração de interface](../settings/client-server.md#network-layer) para a camada de rede QUIC.
 - 4D View Pro: Compatibilidade do formato de arquivo **.sjs** para o [import](../ViewPro/commands/vp-import-document) e [export](../ViewPro/commands/vp-export-document) dos documentos.
 - Comandos da linguagem 4D: [Novidades de página](https://doc.4d.com/4Dv20R2/4D/20-R2/What-s-new.901-6398284.en.html) em doc.4d.com.
 - [**Lista de erros corrigida**](https://bugs.4d.fr/fixedbugslist?version=20_R2): lista de todos os bugs corrigidos em 4D 20 R2.

#### Mudanças de comportamento

 - **Aviso**: o valor inicial dos objetos [`offset`](../API/FileHandleClass.md#offset) de [4D.FileHandle](../API/FileHandleClass.md) era configurado incorretamente para 1 ao invés de 0. Foi feita uma correção no 4D a partir das versões **20.1 HF1** e **20 R2** e o valor agora é 0.

## 4D 20.x LTS

Veja [**Notas de lançamento 4D 20.x LTS**](../../version-20/Notes/updates.md).

## Tabela da biblioteca

| Biblioteca | Versão atual                           | Atualizado em 4D | Comentário                                                                                                                                |
| ---------- | -------------------------------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| BoringSSL  | 0aa300b                                | 20 R6            | Usado para QUIC                                                                                                                           |
| CEF        | 131                                    | 20 R8            | Chromium 6778                                                                                                                             |
| Hunspell   | 7.3.27 | 20               | Usado para verificação ortográfica em formulários 4D e 4D Write Pro                                                                       |
| ICU        | 73.2                   | 20               | Essa grande atualização força uma reconstrução automática dos índices alfanuméricos, de texto e de objetos.               |
| libldap    | 2.6.7  | 20 R6            |                                                                                                                                           |
| libsasl    | 2.1.28 | 20               |                                                                                                                                           |
| Libuv      | 1.48                   | 20 R6            | Usado para QUIC                                                                                                                           |
| libZip     | 19.5                   | 20               | Utilizado pelos componentes zip class, 4D Write Pro, svg e serverNet                                                                      |
| LZMA       | 5.4.1  | 20               |                                                                                                                                           |
| OpenSSL    | 3.3.2  | 20 R7            | O nível de segurança TLS/SSL padrão foi atualizado. Veja [mudanças de comportamento](#behavior-changes) para versão 20 R4 |
| PDFWriter  | 4.5.11 | 20 R3            |                                                                                                                                           |
| PHP        | 8.2.4  | 20               |                                                                                                                                           |
| SpreadJS   | 17.1.0 | 20 R7            | Veja [este post de blog](https://blog.4d.com/4d-view-pro-whats-new-in-4d-20-r7/) para uma visão geral dos novos recursos                  |
| webKit     | WKWebView                              | 19               |                                                                                                                                           |
| Zlib       | 14.1.6 | 20               |                                                                                                                                           |
