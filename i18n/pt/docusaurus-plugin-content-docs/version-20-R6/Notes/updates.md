---
id: updates
title: Notas de lançamento
---

## 4D 20 R6

Leia [**O que há de novo no 4D 20 R6**](https://blog.4d.com/en-whats-new-in-4d-20-R6/), o post do blog que lista todos os novos recursos e aprimoramentos em 4D 20 R6.

#### Destaques

- Operadores de comparação em [referências a objetos](../Concepts/dt_object.md#object-operators) e [referências a coleções](../Concepts/dt_collection.md#collection-operators). [`collection.query()`](../API/CollectionClass.md#query) agora suporta [referências a objetos e coleções como valores de consulta](../API/CollectionClass.md#object-or-collection-reference-as-value).
- Quando um componente tiver um [declared namespace](../Extensions/develop-components.md#declaring-the-component-namespace), suas classes agora são automaticamente compartilhadas entre todos os componentes carregados no projeto host por meio de [`cs.<namespace>`](../Concepts/classes.md#cs).
- Gerenciador de componentes: Suporte de [componentes armazenados no GitHub](../Project/components.md#declaring-components-stored-on-github).
- Nova função [`entitySelection.clean()`](../API/EntitySelectionClass.md#clean) e [`$clean`](../REST/$clean.md) REST API para obter uma nova seleção de entidades com base na seleção de entidades original, mas sem as entidades excluídas.
- Nova função [`session.getPrivileges()`](../API/SessionClass.md#getprivileges) e [`$info/privileges`](../REST/$info.md) REST API para inspecionar os privilégios da sessão para facilitar a depuração.
- New [4DCEFParameters.json file](../FormObjects/webArea_overview.md#4dcefparametersjson) to customize 4D embedded web areas.
- New [HTTPAgent](../API/HTTPAgentClass.md) class and new [`agent`](../API/HTTPRequestClass.md#options-parameter) property for HTTPRequest class.
- Novas funções [`enableState()`](../API/WebFormClass.md) e [`disableState()`](../API/WebFormClass.md) para monitorar os estados da página Qodly a partir do servidor.
- Nova [`$singleton` API](../REST/$singleton.md) para chamar funções singleton expostas do REST e novos [privilégios associados](../ORDA/privileges.md).
- Um [novo botão de configurações](../settings/web.md#activate-rest-authentication-through-dsauthentify-function) ajuda você a atualizar seu projeto para usar o modo REST de "login forçado" (o método de banco de dados `On REST Authentication` agora está obsoleto).
- Uma [nova guia de configurações](../Project/compiler.md#warnings) ajuda a definir a geração de avisos globalmente.
- Vários comandos, principalmente do tema "4D Environment", agora são thread-safe ([veja a lista completa](https://doc.4d.com/4Dv20R6/4D/Preemptive_6957385.999-2878208.en.html)), bem como alguns seletores dos comandos [`SET DATABASE PARAMETER`](https://doc.4d.com/4dv20R/help/command/en/page642.html)/[`Get database parameter`](https://doc.4d.com/4dv20R/help/command/en/page643.html).
- Novo componente [4D-QPDF] (https://github.com/4d/4D-QPDF) que fornece o comando `PDF Get attachments` para extrair anexos de um documento PDF/A3.
- Comandos da linguagem 4D: [página Novidades](https://doc.4d.com/4Dv20R6/4D/20-R6/What-s-new.901-6957482.en.html) em doc.4d.com.
- 4D Write Pro: [Página Novidades] (https://doc.4d.com/4Dv20R6/4D/20-R6/What-s-new.901-6993921.en.html) em doc.4d.com.
- [**Lista de erros corrigida**](https://bugs.4d.fr/fixedbugslist?version=20_R6): lista de todos os bugs corrigidos em 4D 20 R6.

#### Mudanças de comportamento

- Rolagem nos formulários conectada: subformas pai agora rolam automaticamente quando tiverem objetos roláveis incorporados ([verticalmente](../FormObjects/properties_Appearance.md#vertical-scroll-bar) ou [horizontalmente](. /FormObjects/properties_Appearance.md#horizontal-scroll-bar)) atingiram os limites e o usuário continua rolando usando o mouse ou rastreador (overscrolling).
- A API REST [`$catalog`](../REST/$catalog.md) agora retorna singletons (se houver).

## 4D 20 R5

Leia [**O que há de novo no 4D 20 R5**](https://blog.4d.com/en-whats-new-in-4d-20-R5/), o post do blog que lista todos os novos recursos e aprimoramentos em 4D 20 R5.

#### Destaques

- Novo [Gerenciador de componentes](../Project/components.md) para lidar com componentes por meio de um arquivo `dependencies.json`.
- Suporte a estruturas de tratamento de erros [`Try...Catch...End try`](../Concepts/error-handling.md#trycatchend-try).
- A camada de rede QUIC agora suporta [broadcasting](../Desktop/clientServer.md#opening-a-remote-project), [SSO](https://doc.4d.com/4Dv20R5/4D/20-R5/Single-Sign-On-SSO-on-Windows.300-6932709.en.html), e [IPv6](https://doc.4d.com/4Dv20R5/4D/20-R5/IP-Settings.300-6932707.en.html).
- Soporte de [selecciones de entidades restringidas](../ORDA/entities.md#restricting-entity-selections).
- Soporte de [clases compartidas](../Concepts/classes.md#shared-classes) y de [clases singleton](../Concepts/classes.md#singleton-classes). Novas propriedades de classe: [`isShared`](../API/ClassClass.md#isshared), [`isSingleton`](../API/ClassClass.md#isingleton), [`me`](../API/ClassClass.md#me).
- Suporte à [inicializando uma propriedade de classe em sua linha de declaração](../Concepts/classes.md/#initializing-the-property-in-the-declaration-line).
- Novo modo [forçar  login para solicitações REST](../REST/authUsers.md#force-login-mode) com um suporte específico [no Qodly Studio para 4D](../WebServer/qodly-studio.md#force-login).
- Novo [$format](../REST/$format.md) parâmetro REST.
- O objeto [`Session`](../API/SessionClass.md#session) agora está disponível em sessões de usuários remotos e sessões de procedimentos armazenados.
- Comandos da linguagem 4D: [página Novidades](https://doc.4d.com/4Dv20R5/4D/20-R5/What-s-new.901-6817247.en.html) em doc.4d.com.
- 4D Write Pro: [Página de novidades] (https://doc.4d.com/4Dv20R5/4D/20-R5/What-s-new.901-6851780.en.html) em doc.4d.com.
- [**Lista de erros corrigida**](https://bugs.4d.fr/fixedbugslist?version=20_R5): lista de todos os bugs corrigidos em 4D 20 R5.

#### Mudanças de comportamento

- Os plug-ins *4D Internet Commands* e *4D for OCI* não estão mais incluídos nos instaladores do 4D. Para obter esses plug-ins, você precisa se conectar ao [**Portal de descarrega de produtos 4D**](https://product-download.4d.com/).
- Alterações feitas no editor de estrutura com relação à aparência gráfica de tabelas e campos (cor, posição, ordem...) agora são salvas em um arquivo separado chamado `catalog_editor.json` armazenado na pasta [`Sources`](../Project/architecture.md#sources) do projeto.

## 4D 20 R4

Leia [**O que há de novo no 4D v20 R4**](https://blog.4d.com/en-whats-new-in-4d-v20-R4/), o post do blog que lista todos os novos recursos e aprimoramentos em 4D v20 R4.

#### Destaques

- formato de criptografia [`ECDSA`](../Admin/tls.md#encryption) para certificados TLS.
- As conexões TLS cliente/servidor e servidor SQL agora são [configuradas dinamicamente](../Admin/tls.md#enabling-tls-with-the-other-servers) (não são necessários arquivos de certificado).
- Formato HTML direto para [exportações de definição de estrutura] (https://doc.4d.com/4Dv20R4/4D/20-R4/Exporting-and-importing-structure-definitions.300-6654851.en.html).
- Novo [Code Live Checker](../code-editor/write-class-method.md#warnings-and-errors) que aprimora o controle de código durante a digitação de código, a verificação de sintaxe e as etapas de compilação para evitar erros de execução.
- Os parâmetros do método declarados nos protótipos `#DECLARE` não são mais necessários nos métodos "Compiler_" (../Concepts/parameters.md#compilation).
- Suporte de [formatos personalizados de data e hora](../Project/date-time-formats.md)
- Nova palavra-chave [`Try(expression)`](../Concepts/error-handling.md#tryexpression) para tratar casos de erro simples.
- Novo comando [`HTTP Parse message`](../API/HTTPRequestClass.md#http-parse-message).
- Nova opção de compatibilidade [Non-blocking printing](../settings/compatibility.md).
- Novo [modo de edição](../Admin/dataExplorer.md#editing-data) no Data Explorer.
- Comandos da linguagem 4D: [Novidades de página](https://doc.4d.com/4Dv20R4/4D/20-R4/What-s-new.901-6655756.en.html) em doc.4d.com.
- 4D Write Pro: [Página Novidades] (https://doc.4d.com/4Dv20R4/4D/20-R4/What-s-new.901-6683440.en.html) em doc.4d.com.
- [**Lista de erros corrigida**](https://bugs.4d.fr/fixedbugslist?version=20_R4): lista de todos os bugs corrigidos em 4D 20 R4.

#### Mudanças de comportamento

- Usando uma sintaxe legada para declarar parâmetros (por exemplo, `C_TEXT($1)` ou `var $1 : Text`) está agora obsoleto e gera avisos na digitação de código, verificação de sintaxe e etapas de compilação.
- As seleções agora são mantidas consistentes depois que alguns registros forem excluídos e outros criados (consulte [esta postagem no blog](https://blog.4d.com/4d-keeps-your-selections-of-records-consistent-regarding-deletion-of-records/).
- Na [biblioteca OpenSSL] atualizada (#library-table), o nível de segurança SSL/TLS padrão foi alterado de 1 para 2. Chaves RSA, DSA e DH de 1024 bits ou mais e menos de 2048 bits, assim como chaves ECC de 160 bits ou mais e menos de 224 bits, agora não são mais permitidas. Por padrão, a compressão TLS já estava desativada nas versões anteriores do OpenSSL. No nível de segurança 2, ele não pode ser habilitado.
- Para permitir a verificação de senha quando o diretório do usuário [4D usar o algoritmo bcrypt](https://blog.4d. om/bcrypt-support-for-passwords/), o valor da "senha" no parâmetro *connectionInfo* do [`Open datastore`](../API/DataStoreClass.md#open-datastore) agora é enviado de forma clara por padrão. Certifique-se de que seu método de banco de dados "On REST authentication" possa lidar com senhas em formato claro (o terceiro parâmetro é, então, **False**) e que o `Open datastore` criptografe sua conexão passando a opção "tls" para **True** em *connectionInfo*. Em casos específicos, uma nova opção "passwordAlgorithm" também pode ser usada para fins de compatibilidade (consulte o comando [`Open datastore`](../API/DataStoreClass.md#open-datastore)).

## 4D 20 R3

Leia [**O que há de novo no 4D v20 R3**](https://blog.4d.com/en-whats-new-in-4d-v20-R3/), o post do blog que lista todos os novos recursos e aprimoramentos em 4D v20 R3.

#### Destaques

- Nova função [`collection.multiSort`](../API/CollectionClass.md#multisort).
- parâmetro *context* em [`Formula from string`](../API/FunctionClass.md#formula-from-string).
- propriedade `headers` no parâmetro *connectionHandler* de [4D.WebSocket.new](../API/WebSocketClass.md#4dwebsocketnew).
- [Carimbo de modificação global](../ORDA/global-stamp.md) para ajudar a implementar módulos de sincronização de dados. Novas funções: [`ds.getGlobalStamp`](../API/DataStoreClass.md#getglobalstamp) e [`ds.setGlobalStamp`](../API/DataStoreClass.md#setglobalstamp).
- Atribuindo referências ao arquivo de atributos de imagem/blob é [compatível com ORDA](../ORDA/entities.md#d#assigning-files-to-picture-or-blob-attributes).
- [inicializar o valor e o tipo de dados da variável na linha de declaração](../Concepts/variables/#initializing-variables-in-the-declaration-line).
- As configurações de arquivos de log agora são [salvas com o arquivo de dados atual](../Backup/settings.md#log-file-management)
- Nova sintaxe para [declarar parâmetros variádicos](../Concepts/parameters.md#declaring-variadic-parameters)
- 4D View Pro: compatibilidade com [importação](../ViewPro/commands/vp-import-from-blob) e de [exportação](../ViewPro/commands/vp-export-to-blob) de documentos 4D View Pro ao formato Blob.
- Comandos da linguagem 4D: [Novidades de página](https://doc.4d.com/4Dv20R3/4D/20-R3/What-s-new.901-6531224.en.html) em doc.4d.com.
- 4D Write Pro: [Página Novidades] (https://doc.4d.com/4Dv20R3/4D/20-R3/What-s-new.901-6475174.en.html) em doc.4d.com.
- [**Lista de erros corrigida**](https://bugs.4d.fr/fixedbugslist?version=20_R3): lista de todos os bugs corrigidos em 4D 20 R3.

#### Mudanças de comportamento

- Alguns erros foram capturados pelo seu [método de tratamento de erros](../Concepts/error-handling.md) somente no modo interpretado. Foi feita uma correção para que os seguintes erros agora sejam pegos também no modo compilado: *Índice fora do intervalo*, *Tipo incompatível* e *Dereferenciando um ponteiro Nulo*. Entretanto, para esses erros nos processadores Intel, o procedimento ainda é interrompido como antes, enquanto nos processadores Apple Silicon o procedimento só é interrompido se você chamar o comando [`ABORT`] (https://doc.4d.com/4dv20/help/command/en/page156.html).
- 4D não inclui mais um interpretador PHP interno. Você precisa [configurar e executar seu próprio interpretador PHP] (https://blog.4d.com/deprecation-of-php-commands-and-removal-of-4d-built-in-php-interpreter) para usar os comandos PHP.

## 4D 20 R2

Leia [**O que há de novo no 4D v20 R2**](https://blog.4d.com/en-whats-new-in-4d-v20-R2/), o post do blog que lista todos os novos recursos e aprimoramentos em 4D v20 R2.

:::warning Nota de segurança

Se suas aplicações 4D utilizam conexões TLS, é recomendado que você faça a atualização para a versão 4D 20 R2 HF1 build 100440 ou superior. Para obter mais informações, consulte este [Boletim de segurança] (https://blog.4d.com/security-bulletin-two-cves-and-how-to-stay-secure/).

:::

#### Destaques

- Nova classe [WebSocket] (../API/WebSocketClass.md) para criar e gerenciar conexões WebSocket do cliente a partir de 4D.
- Nova camada de rede QUIC [configuração de interface](../settings/client-server.md#network-layer).
- 4D View Pro: compatibilidade do formato de arquivo **.sjs** para o [import](../ViewPro/commands/vp-import-document) e [export](../ViewPro/commands/vp-export-documento) dos documentos.
- Comandos da linguagem 4D: [Novidades de página](https://doc.4d.com/4Dv20R2/4D/20-R2/What-s-new.901-6398284.en.html) em doc.4d.com.
- 4D Write Pro: [Página Novidades] (https://doc.4d.com/4Dv20R2/4D/20-R2/What-s-new.901-6390313.en.html) em doc.4d.com.
- Interface 4D Write Pro: Novo [Table Wizard](../WritePro/writeprointerface.md).
- [**Lista de erros corrigida**](https://bugs.4d.fr/fixedbugslist?version=20_R2): lista de todos os bugs corrigidos em 4D 20 R2.

#### Mudanças de comportamento

- **Aviso**: O valor inicial dos objetos [`offset`](../API/FileHandleClass.md#offset) de [4D.FileHandle](../API/FileHandleClass.md) era configurado incorretamente para 1 ao invés de 0. Foi feita uma correção no 4D a partir das versões **20.1 HF1** e **20 R2** e o valor agora é 0.

## 4D 20.x LTS

Veja [**Notas de lançamento 4D 20.x LTS**](../../version-20/Notes/updates.md).

## Tabela da biblioteca

| Biblioteca | Versão atual                              | Atualizado em 4D | Comentário                                                                                                                                |
| ---------- | ----------------------------------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| BoringSSL  | 0aa300b                                   | **20 R6**        | Usado para QUIC                                                                                                                           |
| CEF        | 121                                       | 20 R5            | Chromium 6167                                                                                                                             |
| Hunspell   | 7.3.27    | 20               | Usado para verificação ortográfica em formulários 4D e 4D Write Pro                                                                       |
| ICU        | 73.2                      | 20               | Essa grande atualização força uma reconstrução automática dos índices alfanuméricos, de texto e de objetos.               |
| libldap    | **2.6.7** | **20 R6**        |                                                                                                                                           |
| libsasl    | 2.1.28    | 20               |                                                                                                                                           |
| Libuv      | 1.48                      | **20 R6**        | Usado para QUIC                                                                                                                           |
| libZip     | 19.5                      | 20               | Utilizado pelos componentes zip class, 4D Write Pro, svg e serverNet                                                                      |
| LZMA       | 5.4.1     | 20               |                                                                                                                                           |
| OpenSSL    | 3.2.0     | 20 R4            | O nível de segurança TLS/SSL padrão foi atualizado. Veja [mudanças de comportamento](#behavior-changes) para versão 20 R4 |
| PDFWriter  | 4.3                       | 20               | Dependência FreeType na 12.2.1                                                                            |
| PHP        | 8.2.4     | 20               |                                                                                                                                           |
| SpreadJS   | 16.2.6    | 20 R4            | Motor 4D View Pro                                                                                                                         |
| webKit     | WKWebView                                 | 19               |                                                                                                                                           |
| Zlib       | 14.1.6    | 20               |                                                                                                                                           |
