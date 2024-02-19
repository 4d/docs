---
id: updates
title: Notas de Lançamento
---


## 4D v20 R3

Leia [**O que há de novo no 4D v20 R3**](https://blog.4d.com/en-whats-new-in-4d-v20-R3/), a postagem do blog que lista todos os novos recursos e aprimoramentos no 4D v20 R3.


#### Destaques

- Nova função [`collection.multiSort`](../API/CollectionClass.md#multisort).
- Suporte do parâmetro *context* em [`Formula from string`](../API/FunctionClass.md#formula-from-string).
- Compatibilidade com a propriedade  `cabeçalhos` no parâmetro *connectionHandler*  de [4D.WebSocket.new](../API/WebSocketClass.md#4dwebsocketnew).
- [Carimbo de modificação global](../ORDA/global-stamp.md) para ajudar a implementar módulos de sincronização de dados. New functions: [`ds.getGlobalStamp`](../API/DataStoreClass.md#getglobalstamp) and [`ds.setGlobalStamp`](../API/DataStoreClass.md#setglobalstamp).
- Assigning file references to picture/blob attributes is [supported in ORDA](../ORDA/entities.md#d#assigning-files-to-picture-or-blob-attributes).
- Suporte para [inicialização do valor da variável e do tipo de dados na linha de declaração](../Concepts/variables/#initializing-variables-in-the-declaration-line).
- Os parâmetros do arquivo de historial agora são [salvos com o arquivo de dados atual](../Backup/settings.md#log-file-management)
- Nova sintaxe para [declaração de parâmetros variáveis](../Concepts/parameters.md#declaring-variadic-parameters)
- 4D View Pro: Suporte para a [importação ](../ViewPro/method-list.md#vp-import-from-blob) e [exportação ](../ViewPro/method-list.md#vp-export-to-blob) de documentos do 4D View Pro no formato Blob.
- Comandos de linguagem 4D: [O que é a nova página](https://doc.4d.com/4Dv20R3/4D/20-R3/What-s-new.901-6531224.en.html) em doc.4d.com.
- 4D Write Pro: [página Novidades](https://doc.4d.com/4Dv20R3/4D/20-R3/What-s-new.901-6475174.en.html) em doc.4d.com.
- [**Lista de bugs corrigidos**](https://falhas.4d.fr/fixedbugslist?version=20_R3): lista de todos os bugs corrigidos em 4D v20 R3.


#### Mudanças de comportamento

- Some errors were catchable by your [error handling method](../Concepts/error-handling.md) in interpreted mode only. A fix has been done, so that the following errors will now be caught also in compiled mode: *Indice out of range*, *Type incompatible*, and *Dereferencing a Null pointer*. However, for such errors on Intel processors, the procedure is still interrupted as before, whereas on Apple Silicon processors the procedure is only interrupted if you call the [`ABORT`](https://doc.4d.com/4dv20/help/command/en/page156.html) command.
- 4D não inclui mais um interpretador PHP interno. You need to [set up and run your own PHP interpreter](https://blog.4d.com/deprecation-of-php-commands-and-removal-of-4d-built-in-php-interpreter) to use PHP commands.


## 4D v20 R2

Leia [**O que há de novo no 4D v20 R2**](https://blog.4d.com/en-whats-new-in-4d-v20-R2/), a postagem do blog que lista todos os novos recursos e aprimoramentos no 4D v20 R2.

:::warning Nota de segurança

If your 4D applications use TLS connections, it is recommended that you upgrade to 4D v20 R2 HF1 build 100440 or higher. Para obter mais informações, consulte este [boletim de segurança](https://blog.4d.com/security-bulletin-two-cves-and-how-to-stay-secure/).

:::

#### Destaques

- Nova classe [WebSocket](../API/WebSocketClass.md) para criar e gerenciar conexões WebSocket cliente a partir de 4D.
- Nova camada de rede QUIC [configuração de interface](../settings/client-server.md#network-layer).
- 4D View Pro: Suporte ao formato de arquivo **.sjs** para a importação [](../ViewPro/method-list.md#vp-import-document) e exportação [](../ViewPro/method-list.md#vp-export-document) de documentos.
- Comandos da linguagem 4D: [Novidades de página](https://doc.4d.com/4Dv20R2/4D/20-R2/What-s-new.901-6398284.en.html) em doc.4d.com.
- 4D Write Pro: [página Novidades](https://doc.4d.com/4Dv20R2/4D/20-R2/What-s-new.901-6390313.en.html) em doc.4d.com.
- Interface do 4D Write Pro: Novo assistente de tabela [](../WritePro/writeprointerface.md).
- [**Lista de bugs corrigidos**](https://bugs.4d.fr/fixedbugslist?version=20_R2): lista de todos os bugs corrigidos em 4D v20 R2.


#### Mudanças de comportamento

- **Aviso**: O valor inicial do  [`offset/deslocamento`](../API/FileHandleClass.md#offset) dos objetos [4D.FileHandle](../API/FileHandleClass.md) foi incorretamente definido como 1 em vez de 0. Foi feita uma correção no 4D a partir das versões **20.1 HF1** e **20 R2** e o valor agora é 0.

## 4D v20.x

See the [**previous Release notes**](https://doc.4d.com/4Dv19/4D/19.4/4D-v19x-Release-Notes.100-6044726.en.html) on doc.4d.com.

:::caution Versão mínima cliente para 4D Server v20.2 e posterior

For internal reasons, the version of remote clients connecting to 4D Server v20.2 and later must be at least 4D v20.2.

:::

:::warning Nota de segurança

If your 4D applications use TLS connections, it is recommended that you upgrade to 4D v20.2 LTS build 100956 or higher. Para obter mais informações, consulte este [boletim de segurança](https://blog.4d.com/security-bulletin-two-cves-and-how-to-stay-secure/).

:::

#### Aviso de reconstrução do índice

4D v20 inclui uma atualização da biblioteca da UCI (ver abaixo) que forçará uma reconstrução automática de índices do tipo alfa, texto e objeto. Dependendo do tamanho do ficheiro de dados, esta operação pode demorar algum tempo e pode necessitar de ser planeada.

:::caution 4D v20.1 reconstrução do índice e versões cliente/servidor

4D v20.1 também inclui uma atualização da biblioteca ICU, que tem as seguintes consequências:

- Isso forçará uma reconstrução automática dos índices do tipo alfa, texto e objeto.
- Por causa da consistência de ordenação, é necessário que os clientes remotos 4D e o 4D Server usem a mesma versão: somente o 4D v20.1 remoto pode se conectar ao 4D Server v20.1 e vice-versa.

:::


#### Destaques

- 4D v20.2 é certificado no macOS Sonoma (macOS 14).
- (4D v20.1) Nova propriedade `plugins` no parâmetro *options* para o comando [`Compile project`](https://doc.4d.com/4dv20/help/command/en/page1760.html).
- O Servidor 4D integra automaticamente múltiplos journals: [Restauração automática](../Backup/settings.md#automatic-restore).
- [Classe de transportador IMAP](../API/IMAPTransporterClass.md): [`.getBoxInfo()`](../API/IMAPTransporterClass#getboxinfo) retorna *id*, [`.selectBox()`](../API/IMAPTransporterClass.md#selectbox) retorna *id*, *flags* e *permanentFlags*, [`.addFlags()`](../API/IMAPTransporterClass.md#addflags) e [`.removeFlags()`](../API/IMAPTransporterClass.md#removeflags) suportam palavras-chave personalizadas.
- Novo [WebSocketServer](../API/WebSocketServerClass.md) e [WebSocketConnection](../API/WebSocketConnectionClass.md) classes para criar e gerir ligações WebSocket a partir de 4D.
- Apoio da propriedade [``](../Concepts/classes.md#property) palavra-chave em definições de classe de utilizador.
- Novas funções para bloquear/desbloquear o datastore: [`.flushAndLock()`](../API/DataStoreClass.md#flushandlock), [`.locked()`](../API/DataStoreClass.md#locked), [`.unlock()`](../API/DataStoreClass.md#unlock).
- Novo [`.at()`](../API/EntitySelectionClass.md#at) função na classe de seleção da Entidade.
- Novas funções na classe Collection: [`.at()`](../API/CollectionClass.md#at), [`.first()`](../API/CollectionClass.md#first), [`.flat()`](../API/CollectionClass.md#flat), [`.flatMap()`](../API/CollectionClass.md#flatmap),[`.includes()`](../API/CollectionClass.md#includes), [`.last()`](../API/CollectionClass.md#last), [`.reduceRight()`](../API/CollectionClass.md#reduceright).
- Editor de código: melhorado [Encontrar e substituir características](../code-editor/write-class-method.md#find-and-replace).
- Novo elemento de linguagem "propriedade" pesquisável na caixa de diálogo [**Find in design...**](https://doc.4d.com/4Dv20/4D/20/Performing-a-search.300-6263762.en.html#6337726) .
- Para simplificar o código, alguns operadores de comparação podem agora ser utilizados com [Valores indefinidos](../Concepts/dt_null_undefined.md#undefined-operators) sem gerar erros.
- Suporte de *headerOnly* parâmetro em [`POP3Transporter.getMail()`](../API/POP3TransporterClass.md#getmail).
- Suporte de `valores de contagem` opção em as funções [`entitySelection.distinct()`](../API/EntitySelectionClass.md#distinct) e [`collection.distinct()`](../API/CollectionClass.md#distinct).
- Novo function [`entitySelection.distinctPaths()`](../API/EntitySelectionClass.md#distinctpaths).
- Suporte de `valores de contagem` opção em as funções [`entitySelection.distinct()`](../API/EntitySelectionClass.md#distinct) e [`collection.distinct()`](../API/CollectionClass.md#distinct).
- Os registros de solicitações ORDA agora estão disponíveis [no servidor](../Debugging/debugLogFiles.md#orda-requests), novo parâmetro para a função [`.startRequestLog()`](../API/DataStoreClass.md#startrequestlog) .
- Novas ferramentas para execução de código no CLI: [tool4d](../Admin/cli.md#tool4d) e [4D Server em modo utilitário](../Admin/cli.md#4d-server-in-utility-mode).
- [Explorador da Data](../Admin/dataExplorer.md#opening-the-data-explorer): novo botão e visualização numa janela 4D.
- Novas propriedades para botões, caixas de selecção e botões de rádio: [Abraços de imagem título](../FormObjects/properties_TextAndPicture.md#image-hugs-title) e [Alinhamento horizontal](../FormObjects/properties_Text.md#horizontal-alignment).
- Suporte do `WinIcon` na função [`file.setAppInfo()`](../API/FileClass.md#setappinfo).
- Nova opção `validateTLSCertificate` para [`4D.HTTPRequest.new()`](../API/HTTPRequestClass.md#new) que permite controlar a validação automática do certificado.
- Comandos de linguagem 4D: [O que é a nova página](https://doc.4d.com/4Dv20/4D/20/What-s-new.901-6237190.en.html) em doc.4d.com.
- 4D Write Pro: [página Novidades](https://doc.4d.com/4Dv20/4D/20/What-s-new.901-6229455.en.html) em doc.4d.com.
- Listas de erros corrigidas: [4D v20](https://bugs.4d.fr/fixedbugslist?version=20) - [4D v20.1](https://bugs.4d.fr/fixedbugslist?version=20.1).


#### Mudanças de comportamento

- As of v20.2, 4D v20 LTS is no longer compatible with Windows Server 2012 R2.
- **Aviso**: O valor inicial do  [`offset/deslocamento`](../API/FileHandleClass.md#offset) dos objetos [4D.FileHandle](../API/FileHandleClass.md) foi incorretamente definido como 1 em vez de 0. Foi feita uma correção no 4D a partir das versões **20.1 HF1** e **20 R2** e o valor agora é 0.
- Para conformidade com HTTP RFC, [`HTTPRequestClass.response.headers`](../API/HTTPRequestClass.md#response) propriedade devolve agora todos os nomes de cabeçalho **em minúsculas**. Se quiser que o seu código continue a funcionar como antes, utilize a nova propriedade [`HTTPRequestClass.response.rawHeaders`](../API/HTTPRequestClass.md#response).
- Os certificados TLS agora são validados automaticamente por 4D ao enviar solicitações HTTP com [`4D.HTTPRequest.new()`](../API/HTTPRequestClass.md#new) e rejeitados com um erro se forem inválidos. A new *option* property allows you to control this validation.
- TLS v1.0 and TLS v1.1 are deprecated, they are no longer supported as `Min TLS version` on 4D Server. A versão 1.3 agora é selecionada por padrão sendo usada automaticamente se as constantes `_o_TLSv1_0` ou `_o_TLSv1_1` forem definidas com [`SET DATABASE PARAMETER`](https://doc.4d.com/4dv20/help/command/en/page642.html).
- For consistency, all buttons, checkboxes, and radio buttons are now rendered with a "3D" type at runtime: respectively `Object type 3D button`, `Object type 3D checkbox`, and `Object type 3D radio button` are returned by [`OBJECT Get type`](https://doc.4d.com/4dv20/help/command/en/page642.html) for these objects.
- A partir do 4D v20, o [4D for Mobile](https://developer.4d.com/go-mobile/) não é mais instalado por padrão no ambiente 4D. To benefit from the 4D for Mobile development features in 4D, you need to [install the 4D Mobile App component](https://developer.4d.com/go-mobile/docs/getting-started/installation) in the ["Components"](../Project/architecture.md#components) folder of your projects. Se um projeto convertido usar recursos do componente [4D Mobile App Server](https://github.com/4d/4D-Mobile-App-Server#4d-mobile-app-server), certifique-se de instalá-lo também na pasta "Components" do projeto.


## 4D v19.5

4D v19.5 é certificado em macOS Ventura (macOS 13)


#### Destaques

- Os métodos de gerenciamento de erros podem ser instalados para [contextos de execução global e de componentes](../Concepts/error-handling.md#scope-and-components).
- As caixas de listagem com fontes de dados de seleção de coleção ou entidade agora são compatíveis com a propriedade de coluna [Automatic Row Height](../FormObjects/properties_CoordinatesAndSizing.md#automatic-row-height) .
- ORDA: Suporte do arquivo *roles.json* para definir os privilégios [](../ORDA/privileges.md) atribuídos à sessão com [`setPrivileges()`](../API/SessionClass.md#setprivileges).
- Suporte do modo [SDI no modo de aplicativo de teste](../Menus/sdi.md#sdi-mode-availability) no Windows.
- 4D View Pro:
    - Suporte de temas em tabelas: novos comandos [VP SET TABLE THEME](../ViewPro/method-list.md#vp-set-table-theme) e [VP Get table theme](../ViewPro/method-list.md#vp-get-table-theme) , suporte de opções de tema em [VP CREATE TABLE](../ViewPro/method-list.md#vp-create-table)
    - new [VP Obter linhas sujas da tabela](../ViewPro/method-list.md#vp-get-table-dirty-rows) command
- Comandos de linguagem 4D: [O que é a nova página](https://doc.4d.com/4Dv19R8/4D/19-R8/What-s-new.901-6101683.en.html) em doc.4d.com.
- 4D Write Pro: [Novidades na página](https://doc.4d.com/4Dv19R8/4D/19-R8/What-s-new.901-6130471.en.html) em doc.4d.com.
- [**Lista de bugs corrigidos**](https://bugs.4d.fr/fixedbugslist?version=19.5): lista de todos os bugs que foram corrigidos em 4D v19.5.


#### Mudanças de comportamento

- Para conformidade com HTTP RFC, [`HTTPRequestClass.response.headers`](../API/HTTPRequestClass.md#response) propriedade devolve agora todos os nomes de cabeçalho **em minúsculas**. Se quiser que o seu código continue a funcionar como antes, utilize a nova propriedade [`HTTPRequestClass.response.rawHeaders`](../API/HTTPRequestClass.md#response).
- Quando um botão chanfrado [com menu pop-up vinculado](../FormObjects/properties_TextAndPicture.md/#with-pop-up-menu) é atribuído a uma ação padrão, a ação padrão não é mais gerada se uma opção de menu pop-up for selecionada.
- Nas áreas da Web que usam blink (CEF), as caixas de diálogo exibidas a partir de scripts externos agora estão bloqueando se não forem chamadas a partir de uma função `setTimeout()` JS. Isso se deve às atualizações atuais da CEF, nas quais as caixas de diálogo exibidas por funções como `alert()` ou `print()` não são mais tratadas pelo sistema operacional, mas pela área da Web. Consulte [`WA Evaluate JavaScript`](https://doc.4d.com/4dv19/help/command/en/page1029.html) e [`WA EXECUTE JAVASCRIPT`](https://doc.4d.com/4dv19/help/command/en/page1043.html).



## 4D v19 R7

Leia [**O que há de novo em 4D v19**](https://blog.4d.com/en-whats-new-in-4d-v19/), o post do blog que lista todas as novas funcionalidades e melhorias em 4D v19 LTS.


#### Destaques

- Os dados relacionados e os atributos computados/alias podem ser exibidos no [Data Explorer](../Admin/dataExplorer#basics).
- Nova classe [FileHandle](../API/FileHandleClass.md) e nova função [`.open()`](../API/FileClass.md#open) na classe `File` .
- [Classe de seleção de entidade](../API/EntitySelectionClass.md): [`.add()`](../API/EntitySelectionClass.md#add) suporta um parâmetro *entitySelection* , [`.minus()`](../API/EntitySelectionClass.md#minus) suporta um parâmetro *keepOrder* .
- Suporte às opções *automaticRedirections* e *decodeData* em [`4D.HTTPRequest.new()`](../API/HTTPRequestClass.md#4dhttprequestnew).
- Novo arquivo histórico [4DHTTPClientLog.txt](../Debugging/debugLogFiles.md#4dhttpclientlog).
- 4D View Pro: Novos comandos de tabela [VP Localizar tabela](../ViewPro/method-list.md#vp-find-table), [VP Obter atributos de coluna de tabela](../ViewPro/method-list.md#vp-get-table-column-attributes), [VP Obter índice de coluna de tabela](../ViewPro/method-list.md#vp-get-table-column-index), [VP Obter tabelas](../ViewPro/method-list.md#vp-get-tables), [VP INSERIR COLUNAS DE TABELA](../ViewPro/method-list.md#vp-insert-table-columns), [VP INSERT TABLE ROWS](../ViewPro/method-list.md#vp-insert-table-rows), [VP REMOVE TABLE COLUMNS](../ViewPro/method-list.md#vp-remove-table-columns), [VP REMOVE TABLE ROWS](../ViewPro/method-list.md#vp-remove-table-rows), [VP RESIZE TABLE](../ViewPro/method-list.md#vp-resize-table), [VP SET TABLE COLUMN ATTRIBUTES](../ViewPro/method-list.md#vp-set-table-column-attributes).
- Os namespaces de componentes agora são [exibidos no Explorer](../Extensions/develop-components.md#declaring-the-component-namespace).
- Os objetos de área de texto e formulário de entrada agora suportam a propriedade [corner radius](../FormObjects/properties_CoordinatesAndSizing.md#corner-radius).
- Comandos da linguagem 4D: [O que há de novo na página](https://doc.4d.com/4Dv19R7/4D/19-R7/What-s-new.901-5944528.en.html) em doc.4d.com.
- 4D Write Pro: [Novidades na página](https://doc.4d.com/4Dv19R7/4D/19-R7/What-s-new.901-6011873.en.html) em doc.4d.com.
- A versão SpreadJS foi atualizada (14.1.6).


#### Mudanças de comportamento

- Para manter a consistência com as interfaces padrão (por exemplo, exploradores de arquivos do sistema operacional), as regras da caixa de listagem para seleção de linhas/arrastar e soltar foram modificadas. Uma seleção contínua ou descontínua de linhas pode ser arrastada simplesmente clicando e movendo uma linha selecionada; a tecla **Alt** não é mais necessária (mas ainda pode ser usada como na versão anterior). Quando a tecla **Shift** ou **Ctrl/Command** é pressionada, um clique do mouse é levado em consideração quando o clique é para baixo. Para obter mais informações sobre arrastar e soltar em caixas de listagem, consulte [esta postagem do blog](https:/blog.4d.com/list-boxes-say-goodbye-to-alt-key/) e faça download de [este projeto HDI 4D](https://github.com/4d-depot/HDI_LB_DragAndDrop).
- A numeração de compilação interna do 4D foi modificada a partir do 4D v19 R7:
    - as versões até 4D v19 R6 (inclusive) são numeradas como 282xxx,
    - releases from 4D v19 R7 will be numbered 100xxx.   
      Note that a specific 4D version is still uniquely identified by a branch name and a build number. O número de build aumenta cronologicamente.
- A capacidade de usar o protocolo REST do Wakanda/4D Mobile para chamar um método de projeto foi removida. Em vez disso, você pode usar as funções de classe do modelo de dados [ORDA](../REST/ClassFunctions.md) ou [/4DACTION urls](../WebServer/httpRequests.md#4daction) .


## 4D v19.5 é certificado no Windows 11 22H2

- Nova classe [HTTPRequest](../API/HTTPRequestClass.md).
- As funções de coleção que podem chamar o código agora suportam objetos de função como parâmetro da fórmula ** : [`.every()`](../API/CollectionClass.md#every), [`.filter()`](../API/CollectionClass.md#filter), [`.find()`](../API/CollectionClass.md#find), [`.findIndex()`](../API/CollectionClass.md#findindex), [`.map()`](../API/CollectionClass.md#map), [`.orderByMethod()`](../API/CollectionClass.md#orderbymethod), [`.reduce()`](../API/CollectionClass.md#reduce), [`.some()`](../API/CollectionClass.md#some), [`.sort()`](../API/CollectionClass.md#sort)
- Listbox cells support [horizontal](../FormObjects/properties_CoordinatesAndSizing.md#horizontal-padding) and [vertical](../FormObjects/properties_CoordinatesAndSizing.md#vertical-padding) padding.
- 4D View Pro: novos comandos [VP CREATE TABLE](../ViewPro/method-list.md#vp-create-table) e [VP REMOVE TABLE](../ViewPro/method-list.md#vp-remove-table) para tratar tabelas em folhas.
- Capacidade de ver atributos relacionados, computados e de alias no [Web Data Explorer](../Admin/dataExplorer.md#basics).
- Para nos ajudar a tornar nossos produtos cada vez melhores, agora coletamos automaticamente dados sobre estatísticas de uso em aplicativos 4D Server em execução. Este fato não terá qualquer impacto no desempenho. Veja a nova página que explica [por que e como 4D coleta dados](../Admin/data-collect.md).
- Componentes compilados para Silicon: Nas plataformas macOS Silicon (CPUs ARM da Apple), os componentes devem ser recompilados com o 4D v19 R6 ou superior para serem usados com esta versão.




## 4D v19 R5

- O arquivo [directory.json do projeto](Users/editing#directoryjson-file) agora pode ser [incorporado ao servidor](../Desktop/building.md#embed-the-project-users-and-groups-in-built-server-application) no momento da compilação, permitindo a implementação de um aplicativo cliente/servidor com uma configuração básica de segurança de usuário e grupo.
- Agora você pode [desmarcar módulos inúteis](../Desktop/building.md#deselecting-modules) em seus aplicativos criados.
- A biblioteca *MeCab* está incluída por padrão em todos os aplicativos 4D no macOS. Em versões anteriores, essa biblioteca, especificamente projetada para gerenciar texto em japonês, estava disponível apenas na versão japonesa do 4D no macOS. Se não precisar dessa biblioteca em seus aplicativos finais, agora você pode [desmarcá-la](../Desktop/building.md#deselecting-modules).
- [Otimização cliente/servidor](../ORDA/remoteDatastores.md#clientserver-optimization): Novas funções de classe permitem que você manipule o cache ORDA e o conteúdo de um contexto de otimização. Consulte [Preconfiguring contexts (Pré-configuração de contextos)](../ORDA/remoteDatastores.md#preconfiguring-contexts) e [ORDA Cache](../ORDA/remoteDatastores.md#orda-cache) para obter mais informações.

   > Essas funções são destinadas a desenvolvedores que precisam personalizar os recursos padrão do ORDA para configurações específicas. Na maioria dos casos, você não precisará usá-los.
- [Classe DataClass](../API/DataClassClass.md): A nova função [.getCount()](../API/DataClassClass.md#getcount) retorna o número de entidades em uma classe de dados.
- O arquivo *4DDiagnosticLog.txt* registra apenas informações de alto nível por padrão ([nível INFO](../Debugging/debugLogFiles.md#4ddiagnosticlogtxt). Agora é possível selecionar o nível de informação a ser registrado (por exemplo, informações de nível DEBUG) usando o seletor `Diagnostic log level` do comando `SET DATABASE PARAMETER` ou o arquivo de configuração de log.
- Chamar `Use()` em um objeto não compartilhado ou em uma coleção não compartilhada não faz nada (não gera mais um erro). Portanto, agora é inútil testar se o objeto ou coleção passado para Use() é realmente compartilhado.
- Para fins de esclarecimento, dois comandos SQL foram prefixados: `GET DATA SOURCE LIST` foi renomeado para `SQL GET DATA SOURCE LIST`, `Get current data source` foi renomeado para `SQL Get current data source`.
- **4D View Pro**:
    - Os novos comandos [VP SET DATA CONTEXT](../ViewPro/method-list.md#vp-set-data-context), [VP Get data context](../ViewPro/method-list.md#vp-get-data-context), [VP SET BINDING PATH](../ViewPro/method-list.md#vp-set-binding-path), [VP Get binding path](../ViewPro/method-list.md#vp-get-binding-path) permitem criar contextos de dados e vincular seu conteúdo a células da planilha.
    - [VP EXPORT DOCUMENT](../ViewPro/method-list.md#vp-get-binding-path) e [VP Export to object](../ViewPro/method-list.md#vp-get-binding-path) agora aceitam a nova opção `includeBindingSource` que exporta o conteúdo de um contexto de dados como valores de célula.
    - (Apenas Windows) As áreas 4D View Pro utilizam agora uma nova janela de parâmetros de impressão.
- **Áreas Web**:
    + Novo mecanismo de renderização do sistema Windows: As áreas da Web que usam o mecanismo de renderização do sistema Windows [](../FormObjects/webArea_overview.md#web-rendering-engine) agora são baseadas no **Microsoft Edge WebView2**. Isto afeta as seguintes funcionalidades:
        * Os comandos `WA Create URL history menu` e `WA GET URL HISTORY` retornam apenas o URL atual.
        - A variável [Progression](../FormObjects/properties_WebArea.md#progression) não é mais atualizada.
        - Os recursos de arrastar e soltar são gerenciados por uma API do Windows que é classificada como "experimental" pela Microsoft. Consequentemente, as áreas da Web podem não funcionar como esperado quando essa API não estiver instalada: Arrastar e soltar pode parecer permitido mesmo quando a preferência `WA enable URL drop` tiver sido definida como False. No entanto, a ação de soltar é bloqueada por padrão, e você pode controlar os URLs permitidos usando o evento [`On Window Opening Denied`](../Events/onWindowOpeningDenied.md) (veja abaixo).
    - (Somente Windows) Quando o usuário seleciona **Print...** em uma área da Web usando o mecanismo de renderização da Web incorporado, uma nova janela de configurações de impressão é exibida.
    - Para refletir seu efeito real nas áreas da Web (aumentar ou diminuir o nível de zoom da página), dois comandos foram renomeados: `WA SET PAGE TEXT LARGER` foi renomeado para `WA ZOOM IN`, `WA SET PAGE TEXT SMALLER` foi renomeado para `WA ZOOM OUT`.
    - Segurança aprimorada em áreas da Web que usam o mecanismo de renderização da Web incorporado [](../FormObjects/properties_WebArea.md#use-embedded-web-rendering-engine) ou o mecanismo de renderização do sistema Windows [](../FormObjects/webArea_overview.md#web-rendering-engine) (baseado no Microsoft Edge WebView2):
        - As políticas CORS agora se aplicam ao acesso a arquivos em disco em áreas da Web. Por exemplo, ao abrir um arquivo .html com `WA OPEN URL`, esse arquivo .html não pode conter links que apontem para arquivos fora de sua pasta
        - A remoção de conteúdo externo em áreas da Web agora está sempre bloqueada e aciona o evento [`On Window Opening Denied`](../Events/onWindowOpeningDenied.md) quando a preferência `WA enable URL drop` está definida como True (quando definida como False, a preferência `WA enable URL drop` modifica apenas o ícone do cursor de remoção e filtra o evento `On Window Opening Denied`). Para permitir uma ação de soltar, você precisa executar um código adicional no método de objeto da área da Web:

```4d
WA OPEN URL(*;"WebArea";WA Get last filtered URL(*;"WebArea"))

```



## 4D v19 R4

- [Atributos Alias](../ORDA/ordaClasses.md#alias-attributes-1) estão disponíveis nas classes ORDA.
- Support for [break and continue](../Concepts/flow-control.md#break-and-continue) statements in loops.
- Support for [return](../Concepts/flow-control.md#return-expression) statement and [return expression](../Concepts/parameters.md#return-expression) to return values.
- Suporte para os operadores de atribuição composta [](../Concepts/operators.md#compound-assignment-operators), [operadores de curto-circuito](../Concepts/operators.md#short-circuit-operators)e [operador ternário](../Concepts/operators.md#ternary-operator)
- O [Code Editor](../code-editor/overview.md) agora inclui uma ferramenta suspensa e suporta marcadores para melhorar a navegação do código.
- Novas preferências: [**Incluir tokens nos arquivos de origem do projeto**](../Preferences/general.md#include-tokens-in-project-source-files) e [**Mostrar pranchetas**](../Preferences/methods.md#show-clipboards) opção na página Métodos.
- New REST request to [lock/unlock](../REST/$lock.md) entities.
- [4D View Pro](../ViewPro/getting-started.md) capítulo adicionado com novos comandos: [VP Copy to object](../ViewPro/method-list.md#vp-copy-to-object), [VP MOVE CELLS](../ViewPro/method-list.md#vp-move-cells), [VP PASTE FROM OBJECT](../ViewPro/method-list.md#vp-paste-from-object).
- Novo [Classe SystemWorker](../API/SystemWorkerClass.md).
- A constante `Alias selection` foi renomeada para `Allow alias files` para resolver um conflito resultante do suporte de atributos de alias no ORDA.
- Para melhor conformidade com as especificações ORDA, a propriedade de campo *Map NULL values to blank values* agora está desmarcada por padrão em bancos de dados criados com 4D v19 R4 e superior. Você também pode ativar esse comportamento padrão em seus bancos de dados convertidos de versões anteriores selecionando a configuração de compatibilidade Mapear valores NULOS para valores em branco desmarcada por padrão na criação do campo. Agora é recomendável trabalhar com valores nulos, pois eles são totalmente compatíveis com o ORDA.
- Devido ao suporte do operador ternário [](../Concepts/operators.md#ternary-operator), os dois pontos ":" não são mais permitidos em nomes de variáveis, campos, constantes, funções, plugins e métodos de projetos. Se o seu banco de dados/projeto contiver identificadores com dois-pontos, você deverá substituí-los antes de convertê-lo para a v19 R4 ou superior; caso contrário, poderão ocorrer erros no seu código. Por exemplo, se você tiver uma variável denominada *a:b*, ela poderá ser interpretada como sintaxe de operador ternário:

```4d
$value:=($size>1000)? a:b // Aqui 'a:b' é visto como um operador ternário.
```



## 4D v19 R3

- As [propriedades computadas](../Concepts/classes.md#function-get-and-function-set) estão disponíveis em classes.
- [Atributos computados](../ORDA/ordaClasses.md#computed-attributes) estão disponíveis nas classes ORDA. Elas são semelhantes às propriedades computadas, mas também suportam as funções [query](../ORDA/ordaClasses.md#function-query-attributename) e [orderBy](../ORDA/ordaClasses.md#function-orderby-attributename) .
- New ORDA dataclass [attributes](../API/DataClassClass.md#attributename): `exposed` and `readOnly`.
- [Arquivos ZIP](../API/ZipArchiveClass.md#zip-create-archive) agora suportam os algoritmos de compactação *LZMA* e *xz* .
- Uma nova opção de compilação [](../Desktop/building.md#allow-connection-of-silicon-mac-clients) facilita a inclusão de clientes Silicon Mac em aplicativos de servidor no Windows.
- Suporte estendido para [do modo escuro](../Preferences/general.md#appearance-macos-only) no macOS.
- Suporte do objeto de token **OAuth2** em [`IMAP Novo transportador`](../API/IMAPTransporterClass.md#imap-new-transporter), [`POP3 Novo transportador`](../API/POP3TransporterClass.md#pop3-new-transporter)e [`SMTP Novo transportador`](../API/SMTPTransporterClass.md#smtp-new-transporter).
- Os usuários agora podem carregar um arquivo de configuração de registro [](../Debugging/debugLogFiles.md#using-a-log-configuration-file) usando um botão na janela de administração do servidor [](../ServerWindow/maintenance.md#load-logs-configuration-file).
- Manuseio de [parâmetros opcionais](../Concepts/parameters.md#optional-parameters) é mais flexível na linguagem 4D ao acessar parâmetros declarados, mas não passados. Por exemplo, o código seguinte já não provoca um erro:

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
- A depuração das sessões do servidor web [é mais fácil no 4D Server](../WebServer/sessions.md#preemptive-mode).
- O novo componente [4D NetKit](https://github.com/4d/4D-NetKit) permite que você se conecte a APIs de terceiros, como o Microsoft Graph.
- 4D v19 R3 usa um algoritmo de hashing mais forte para senhas de usuário 4D: Bcrypt. Esse novo algoritmo é usado automaticamente quando uma senha é alterada usando a Caixa de ferramentas, o comando `CHANGE PASSWORD` ou o comando `Set user properties` . Depois que a senha for modificada, a abertura do banco de dados com uma versão anterior ao 4D v19 R3 causará uma recusa de autenticação para essa conta. Se você usa senhas 4D, é altamente recomendável fazer backup do arquivo .4db (bancos de dados binários) ou do arquivo directory.json (projetos) antes de atualizar para o 4D v19 R3 ou posterior.
- Para fins de precisão, a constante `4D digest` foi renomeada para `4D REST digest`.

- Gerenciamento de fim de linha e BOM para comandos XML: Quando abertos no 4D v19 R3, os projetos ou bancos de dados criados com versões anteriores se comportam de forma diferente em relação aos caracteres de fim de linha padrão e ao gerenciamento de BOM em documentos XML: os caracteres de avanço de linha (LF) são usados em vez de CR (no macOS) e as marcas de ordem de byte (BOM) não são incluídas. Isso permite uma melhor compatibilidade com as ferramentas VCS. Se necessário, você pode restaurar o comportamento da v19 R2 usando o comando `XML SET OPTIONS` . Em projetos ou bancos de dados convertidos de versões anteriores ao 19 R2, essas opções são gerenciadas por duas configurações de compatibilidade.
- Atalho do Runtime Explorer removido em projetos criados: O atalho **Cmd/Ctrl+Shift+F9** não exibe mais a janela do Runtime Explorer em aplicativos de projetos mesclados de usuário único. Esse atalho agora pode ser um atalho de aplicativo do usuário. Você pode chamar a janela do Runtime Explorer usando o novo comando `OPEN RUNTIME EXPLORER` .
- Recursos de depuração ampliados com o 4D Server: No modo interpretado, o 4D Server agora pode depurar todos os tipos de processos, incluindo sessões da Web escalonáveis. Isso está disponível quando o depurador está conectado ao servidor ou a um cliente remoto.   
  *Aviso: No modo interpretado, para disponibilizar a depuração estendida no computador do servidor, todos os processos do servidor agora são executados automaticamente no modo cooperativo quando o depurador está conectado ao servidor (configuração padrão). Isso pode ter um impacto significativo no desempenho de seus aplicativos convertidos quando eles são executados com o 4D Server v19 R3 e superior. Para restaurar a execução preemptiva no servidor nesse caso, tudo o que você precisa fazer é desconectar o depurador do servidor (e conectá-lo a um cliente remoto, se necessário).*
- No Windows, os projetos e bancos de dados 4D criados com o 4D v19 R3 e superior usam a API [DirectWrite](https://docs.microsoft.com/en-us/windows/win32/DirectWrite/direct-write-portal) em formulários. Essa API melhora a renderização de texto, especialmente em configurações de DPI alto. O DirectWrite é usado para renderização de texto com texto estático e de entrada, caixas de seleção, botões e botões de rádio. Observe que as caixas de listagem já usam DirectWrite. Uma opção de compatibilidade permite que você ative o DirectWrite em projetos e bancos de dados criados com versões anteriores do 4D.
- Se você usa componentes compilados com o 4D v19.0 para Silicon (CPUs ARM da Apple) que chamam o comando `Count parameters` , recomendamos recompilá-los com o 4D v19 R3 para oferecer compatibilidade com o 4D v19 R3 e versões futuras. Se um componente não for compilado para o Silicon, não será necessário recompilar.








## 4D v19 R2

- Um [arquivo .gitignore padrão](../Preferences/general#create-gitignore-file) pode ser criado com os novos projetos
- New [Blob class API](../API/BlobClass.md) to handle new [`4D. Blob` objects](Concepts/dt_blob.md#blob-types)
- `Suporte a no-bom` e novos caracteres de fim de linha padrão em [`.setText()`](../API/FileClass.md#settext)


## Lançamentos anteriores

<details><summary>Clique para ver as notas de lançamento das versões anteriores</summary>

### 4D v19

:::warning Nota de segurança

If your 4D applications use TLS connections, it is recommended that you upgrade to 4D v19.7 LTS build 288986 or higher. Para obter mais informações, consulte este [boletim de segurança](https://blog.4d.com/security-bulletin-two-cves-and-how-to-stay-secure/).

:::

- [Classe IMAPTransporter](../API/IMAPTransporterClass.md): novas funções `.createBox()`, `.deleteBox()`, `.renameBox()`, `.subscribe()` e `.unsubscribe()`.
- [Classe File](../API/FileClass.md): novas funções `setAppInfo()` e `getAppInfo()`.
- Nova etiqueta de transformação [4DEACH](../Tags/tags.md#4deach-and-4dendeach).
- Web Server: new [SameSite session cookie](../WebServer/webServerConfig.md#session-cookie-samesite) setting.
- Dark and light color scheme support for [forms](../FormEditor/properties_FormProperties.md#color-scheme) and [style sheets](../FormEditor/stylesheets#media-queries)
- New default dark and light themes in [Code Editor preferences](../Preferences/methods.md#theme-list).
- [Native compilation](../Project/compiler.md#compiler-methods-for) for Silicon processors.
- [Variable calculation](../FormObjects/properties_Object.md#variable-calculation) property is now supported by entity selection list box columns.
- Nova página [CLI](../Admin/cli.md) completa.



### 18 R6

- [Entity Selection Class](../API/EntitySelectionClass.md): `.average()`, `.max()` and `.min()` functions now return *undefined* if the entity selection is empty.
- [IMAP Mail](../API/IMAPTransporterClass.md), [POP3 Mail](../API/POP3TransporterClass.md) and [SMTP Mail](../API/SMTPTransporterClass.md): `authenticationMode` property enables OAuth 2.0
- [IMAP Mail](../API/IMAPTransporterClass.md): novas funções `.expunge()` e `.append()`
- Novo componente [WebAdmin](../Admin/webAdmin.md) do servidor Web
- Nova interface [DataExplorer](../Admin/dataExplorer.md)
- Novas [sessões de usuário](../WebServer/sessions.md) Web e [sua API](../API/SessionClass.md).


</details>


## Tabela da biblioteca



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

