---
id: updates
title: Notas de lançamento
---


:::tip

Leia [**O que há de novo no 4D 20**](https://blog.4d.com/en-whats-new-in-4d-v20/), a postagem do blog que lista todos os novos recursos e aprimoramentos no 4D 20.x LTS.

:::

## 4D 20.6 LTS

#### Destaques

- 4D 20.6 LTS is certified on Windows Server 2025

:::warning KNOWN ISSUE ON WINDOWS SERVER 2025

On Windows Server 2025, some custom options in the new Windows Print dialog box are not available and are still under investigation. A fix will be available in the next hotfix.

:::

- Capacidade de [construir aplicações autônomas sem licenças incorporadas](../Desktop/building.md#licenses).
- [**Fixed bugs list**](https://bugs.4d.com/fixes?version=20.6): list of all bugs that have been fixed in 4D 20.6 LTS.



## 4D 20.5 LTS

#### Destaques

- 4D 20.5 LTS é certificado no Windows 11 24H2.
- O 4D 20.5 LTS é certificado no macOS Sequoia (macOS 15).

:::warning Problema conhecido no Windows 11 24H2

No Windows 11 24H2, a geração de PDF usando o driver Microsoft Print to PDF pode falhar devido a um problema que ainda está sendo investigado. Se você imprime PDFs com frequência com sua aplicação 4D, atualmente recomendamos que não faça a atualização para o Windows 11 24H2.

:::

- [**Lista de bugs corrigidos**](https://bugs.4d.com/fixes?version=20.5): lista de todos os erros corrigidos no 4D 20.5 LTS.


## 4D 20.4 LTS

#### Destaques

- [**Lista de bugs corrigidos**](https://bugs.4d.com/fixes?version=20.4): lista de todos os erros corrigidos no 4D 20.4 LTS.

## 4D 20.3 LTS

#### Destaques

- CEF atualizado para o Chromium 5993
- SpreadJS atualizado para a versão 16.2.6 (em 4D 20.2 HF1).
- [**Lista de bugs corrigidos**](https://bugs.4d.com/fixes?version=20.3): lista de todos os erros corrigidos no 4D 20.3 LTS.

#### Mudanças de comportamento

- A partir do 4D 20.3, para permitir a verificação da senha quando o [diretório de usuários 4D usa o algoritmo bcrypt](https://blog.4d.com/bcrypt-support-for-passwords/), o valor da "senha" no parâmetro *connectionInfo* do comando [`` `Open datastore` ``](../API/DataStoreClass.md#open-datastore) agora é enviado em texto claro por padrão. Certifique-se de que seu método banco de dados "On REST authentication" possa lidar com senhas em formato claro (o terceiro parâmetro é **False**) e que `Open datastore` criptografe sua conexão passando a opção "tls" para **True** em *connectionInfo*. Em casos específicos, uma nova opção "passwordAlgorithm" também pode ser usada para compatibilidade (consulte o comando[`Open datastore`](../API/DataStoreClass.md#open-datastore)).


## 4D 20.2 LTS

#### Destaques

- 4D 20.2 é certificado em macOS Sonoma (macOS 14).

:::warning Nota de segurança

Se suas aplicações 4D utilizam conexões TLS, é recomendado que você faça a atualização para a versão 4D 20.2 LTS build 100956 ou superior. Para obter mais informações, consulte este [boletim de segurança](https://blog.4d.com/security-bulletin-two-cves-and-how-to-stay-secure/).

:::

:::caution Versão mínima cliente para 4D Server v20.2 e posterior

Por razões internas, a versão de clientes remotos conectando ao 4D Server 20.2 e posterior deve ser pelo menos 4D 20.2.

:::

- [**Lista de bugs corrigidos**](https://bugs.4d.com/fixes?version=20.2): lista de todos os erros corrigidos no 4D 20.2 LTS.

#### Mudanças de comportamento

- A partir da 20.2, o 4D 20 LTS não é mais compatível com o Windows Server 2012 R2.
- **Aviso**: O valor inicial do [`offset/deslocamento`](../API/FileHandleClass.md#offset) dos objetos [4D. FileHandle](../API/FileHandleClass.md) foi incorretamente definido como 1 em vez de 0. Foi feita uma correção no 4D a partir das versões **20.2** (20.1 HF1) e **20 R2** e o valor agora é 0.

## 4D 20.1 LTS

#### Destaques

:::caution 4D 20.1 reconstrução do índice e versões cliente/servidor

4D 20.1 também inclui uma atualização da biblioteca ICU, que tem as seguintes consequências:

- Isso forçará uma reconstrução automática dos índices do tipo alfa, texto e objeto.
- Por causa da consistência de ordenação, é necessário que os clientes remotos 4D e o 4D Server usem a mesma versão: somente o 4D 20.1 remoto pode se conectar ao 4D Server 20.1 e vice-versa.

:::


- [**Lista de bugs corrigidos**](https://bugs.4d.com/fixes?version=20.1): lista de todos os erros corrigidos no 4D 20.1 LTS.

## 4D 20 LTS


#### Destaques

:::caution Reconstrução dos índices

4D 20 inclui uma atualização da biblioteca ICU (veja abaixo) que forçará uma reconstrução automática dos índices do tipo alfa, texto e objeto. Dependendo do tamanho do ficheiro de dados, esta operação pode demorar algum tempo e pode necessitar de ser planeada.

:::

- Nova propriedade `plugins` no parâmetro *opções* para o comando [`Compilar projeto`](https://doc.4d.com/4dv20/help/command/en/page1760.html).
- O Servidor 4D integra automaticamente múltiplos journals: [Restauração automática](../Backup/settings.md#automatic-restore).
- [Classe IMAP Transporter](../API/IMAPTransporterClass.md): [`.getBoxInfo()`](../API/IMAPTransporterClass#getboxinfo) retorna *id*, [`.selectBox()`](../API/IMAPTransporterClass.md#selectbox) retorna *id*, *flags* e *permanentFlags*, [`.addFlags()`](../API/IMAPTransporterClass.md#addflags) e [`.removeFlags()`](../API/IMAPTransporterClass.md#removeflags) suportam palavras-chave personalizadas.
- Novo [WebSocketServer](../API/WebSocketServerClass.md) e [WebSocketConnection](../API/WebSocketConnectionClass.md) classes para criar e gerir ligações WebSocket a partir de 4D.
- Apoio da palavra-chave [`property`](../Concepts/classes.md#property) em definições de classe de utilizador.
- Novas funções para bloquear/desbloquear o datastore: [`.flushAndLock()`](../API/DataStoreClass.md#flushandlock), [`.locked()`](../API/DataStoreClass.md#locked), [`.unlock()`](../API/DataStoreClass.md#unlock).
- Novo [`.at()`](../API/EntitySelectionClass.md#at) função na classe de seleção da Entidade.
- Novas funções na classe Collection: [`.at()`](../API/CollectionClass.md#at), [`.first()`](../API/CollectionClass.md#first), [`.flat()`](../API/CollectionClass.md#flat), [`.flatMap()`](../API/CollectionClass.md#flatmap),[`.includes()`](../API/CollectionClass.md#includes), [`.last()`](../API/CollectionClass.md#last), [`.reduceRight()`](../API/CollectionClass.md#reduceright).
- Editor de código: recursos aprimorados de [Localizar e substituir](../code-editor/write-class-method.md#find-and-replace).
- Novo elemento de idioma "propriedade" pesquisável em [**Localizar no design...**](https://doc.4d.com/4Dv20/4D/20/Performing-a-search.300-6263762.en.html#6337726) caixa de diálogo.
- Para simplificar o código, alguns operadores de comparação podem agora ser utilizados com [Valores indefinidos](../Concepts/dt_null_undefined.md#undefined-operators) sem gerar erros.
- Suporte de *headerOnly* parâmetro em [`POP3Transporter.getMail()`](../API/POP3TransporterClass.md#getmail).
- Suporte da opção `count values` na função [`entitySelection.distinct()`](../API/EntitySelectionClass.md#distinct) e [`collection.distinct()`](../API/CollectionClass.md#distinct).
- Nova função [`entitySelection.distinctPaths()`](../API/EntitySelectionClass.md#distinctpaths).
- Suporte da opção `count values` na função [`entitySelection.distinct()`](../API/EntitySelectionClass.md#distinct) e [`collection.distinct()`](../API/CollectionClass.md#distinct).
- Os logs das solicitações do ORDA estão agora disponíveis [no servidor](../Debugging/debugLogFiles.md#orda-requests), novo parâmetro para [`.startRequestLog()`](../API/DataStoreClass.md#startrequestlog) função.
- Novas ferramentas para execução de código no CLI: [tool4d](../Admin/cli.md#tool4d) e [4D Server no modo de utilidade](../Admin/cli.md#4d-server-in-utility-mode).
- [Explorador de Dados](../Admin/dataExplorer.md#opening-the-data-explorer): novo botão e será exibido em uma janela 4D.
- Novas propriedades para botões, caixas de seleção e botões de rádio: [Imagem abraça título](../FormObjects/properties_TextAndPicture.md#image-hugs-title) e [Alinhamento horizontal](../FormObjects/properties_Text.md#horizontal-alignment).
- Suporte do `WinIcon` na função [`file.setAppInfo()`](../API/FileClass.md#setappinfo).
- Nova opção `validateTLSCertificate` para [`4D.HTTPRequest.new()`](../API/HTTPRequestClass.md#new) que permite controlar a validação automática do certificado.
- Comandos da linguagem 4D: [página Novidades](https://doc.4d.com/4Dv20/4D/20/What-s-new.901-6237190.en.html) em doc.4d.com.
- 4D Write Pro: [página Novidades](https://doc.4d.com/4Dv20/4D/20/What-s-new.901-6229455.en.html) em doc.4d.com.
- [**Lista de bugs corrigidos**](https://bugs.4d.com/fixes?version=20): lista de todos os erros corrigidos no 4D 20 LTS.


#### Mudanças de comportamento

- Para conformidade com HTTP RFC, [`HTTPRequestClass.response.headers`](../API/HTTPRequestClass.md#response) propriedade devolve agora todos os nomes de cabeçalho **em minúsculas**. Se quiser que o seu código continue a funcionar como antes, utilize a nova propriedade [`HTTPRequestClass.response.rawHeaders`](../API/HTTPRequestClass.md#response).
- Os certificados TLS agora são validados automaticamente por 4D ao enviar solicitações HTTP com [`4D.HTTPRequest.new()`](../API/HTTPRequestClass.md#new) e rejeitados com um erro se forem inválidos. Uma nova propriedade *option* permite-lhe controlar esta validação.
- TLS v1.0 e TLS v1.1 são obsoletos, não são mais suportados como `Min TLS versão` no 4D Server. A versão 1.3 agora é selecionada por padrão sendo usada automaticamente se as constantes `_o_TLSv1_0` ou `_o_TLSv1_1` forem definidas com [`SET DATABASE PARAMETER`](https://doc.4d.com/4dv20/help/command/en/page642.html).
- Para fins de consistência, todos os botões, caixas de seleção e botões de rádio agora são renderizados com um tipo "3D" em tempo de execução: respectivamente `Object type 3D button`, `Object type 3D checkbox`e `Object type 3D radio button` são retornados por [`OBJECT Get type`](https://doc.4d.com/4dv20/help/command/en/page642.html) para esses objetos.
- Para se beneficiar da 4D para recursos de desenvolvimento móvel em 4D, você precisa [instalar o componente 4D Mobile App](https://developer.4d.com/go-mobile/docs/getting-started/installation) na pasta ["Components"](../Project/architecture.md#components) de seus projetos. Se um projeto convertido usar recursos do componente [4D Mobile App Server](https://github.com/4d/4D-Mobile-App-Server#4d-mobile-app-server), certifique-se de instalá-lo também na pasta "Components" do projeto. A partir de 4D 20, [4D para Mobile](https://developer.4d.com/go-mobile/) não está mais instalado por padrão no ambiente 4D.


### 4D 19 R8

Leia [**O que há de novo no 4D v19 R2**](https://blog.4d.com/en-whats-new-in-4d-v19-r8/), a postagem do blog que lista todos os novos recursos e aprimoramentos no 4D v19 R2.


#### Destaques

- Os métodos de gerenciamento de erros podem ser instalados para [contextos de execução global e de componentes](../Concepts/error-handling.md#scope-and-components).
- As caixas de listagem com fontes de dados de seleção de coleção ou entidade agora são compatíveis com a propriedade de coluna [Automatic Row Height](../FormObjects/properties_CoordinatesAndSizing.md#automatic-row-height) .
- ORDA: Suporte do arquivo *roles.json* para definir os privilégios [](../ORDA/privileges.md) atribuídos à sessão com [`setPrivileges()`](../API/SessionClass.md#setprivileges).
- Suporte do modo [SDI no modo de aplicativo de teste](../Menus/sdi.md#sdi-mode-availability) no Windows.
-
:::
    - suporte a temas em tabelas: novos comandos [VP SET TABLE THEME](../ViewPro/method-list.md#vp-set-table-theme) e [VP Get table theme](../ViewPro/method-list.md#vp-get-table-theme), suporte a opções de tema no [VP CREATE TABLE](../ViewPro/method-list.md#vp-create-table)
    - novo comando [VP Get table dirty rows](../ViewPro/method-list.md#vp-get-table-dirty-rows)
- Comandos da linguagem 4D: [página Novidades](https://doc.4d.com/4Dv19R8/4D/19-R8/What-s-new.901-6101683.en.html) em doc.4d.com.
- 4D Write Pro: [página Novidades](https://doc.4d.com/4Dv19R8/4D/19-R8/What-s-new.901-6130471.en.html) em doc.4d.com.
- [**Lista de erros corrigidos**](https://bugs.4d.fr/fixedbugslist?version=19_R8): lista de todos os bugs que foram corrigidos em 4D 19 R3.


#### Mudanças de comportamento

- Para conformidade com HTTP RFC, [`HTTPRequestClass.response.headers`](../API/HTTPRequestClass.md#response) propriedade devolve agora todos os nomes de cabeçalho **em minúsculas**. Se quiser que o seu código continue a funcionar como antes, utilize a nova propriedade [`HTTPRequestClass.response.rawHeaders`](../API/HTTPRequestClass.md#response).
- Quando um botão bevel[com menu pop-up vinculado](../FormObjects/properties_TextAndPicture.md#with-pop-up-menu) é atribuído a uma ação padrão, a ação padrão não é mais gerada se uma opção de menu pop-up for selecionada.
- Nas áreas da Web que usam blink (CEF), as caixas de diálogo exibidas a partir de scripts externos agora estão bloqueando se não forem chamadas a partir de uma função `setTimeout()` JS. Isso se deve às atualizações atuais da CEF, nas quais as caixas de diálogo exibidas por funções como `alert()` ou `print()` não são mais tratadas pelo sistema operacional, mas pela área da Web. Veja [`WA Avaliar JavaScript`](https://doc.4d.com/4dv19/help/command/en/page1029.html) e [`WA EXECUTE JAVASCRIPT`](https://doc.4d.com/4dv19/help/command/en/page1043.html).



### 4D 19 R7

Leia [**O que há de novo em 4D 19 R7**](https://blog.4d.com/en-whats-new-in-4d-v19-r7/), o post do blog que lista todas as novas funcionalidades e melhorias em 4D 19 R7.


#### Destaques

- Os dados relacionados e os atributos computados/alias podem ser exibidos no [Data Explorer](../Admin/dataExplorer#basics).
- Nova classe [FileHandle](../API/FileHandleClass.md) e nova [`.open()`](../API/FileClass.md#open) função na classe `File`.
- [Classe de seleção de entidade](../API/EntitySelectionClass.md): [`.add()`](../API/EntitySelectionClass.md#add) suporta um parâmetro *entitySelection*, [`.minus()`](../API/EntitySelectionClass.md#minus) suporta um parâmetro *keepOrder*.
- Suporte às opções *automaticRedirections* e *decodeData* em [`4D.HTTPRequest.new()`](../API/HTTPRequestClass.md#4dhttprequestnew).
- Novo arquivo histórico [4DHTTPClientLog.txt](../Debugging/debugLogFiles.md#4dhttpclientlog).
- 4D View Pro: novos comandos de tablea [VP Find table](../ViewPro/method-list.md#vp-find-table), [VP Get table column attributes](../ViewPro/method-list.md#vp-get-table-column-attributes), [VP Get table column index](../ViewPro/method-list.md#vp-get-table-column-index), [VP Get tables](../ViewPro/method-list.md#vp-get-tables), [VP INSERT TABLE COLUMNS](../ViewPro/method-list.md#vp-insert-table-columns), [VP INSERT TABLE ROWS](../ViewPro/method-list.md#vp-insert-table-rows), [VP REMOVE TABLE COLUMNS](../ViewPro/method-list.md#vp-remove-table-columns), [VP REMOVE TABLE ROWS](../ViewPro/method-list.md#vp-remove-table-rows), [VP RESIZE TABLE](../ViewPro/method-list.md#vp-resize-table), [VP SET TABLE COLUMN ATTRIBUTES](../ViewPro/method-list.md#vp-set-table-column-attributes).
- Os namespaces de componentes agora são [exibidos no Explorer](../Extensions/develop-components.md#declaring-the-component-namespace).
- Os objetos de área de texto e formulário de entrada agora suportam a propriedade [corner radius](../FormObjects/properties_CoordinatesAndSizing.md#corner-radius).
- Comandos da linguagem 4D: [página Novidades](https://doc.4d.com/4Dv19R7/4D/19-R7/What-s-new.901-5944528.en.html) em doc.4d.com.
- 4D Write Pro: [página Novidades](https://doc.4d.com/4Dv19R7/4D/19-R7/What-s-new.901-6011873.en.html) em doc.4d.com.
- [**Fixa lista de erros**](https://bugs.4d.fr/fixedbugslist?version=19_R7): lista de todos os bugs que foram corrigidos em 4D 19 R7.


#### Mudanças de comportamento

- Para manter a consistência com as interfaces padrão (por exemplo, exploradores de arquivos do sistema operacional), as regras da caixa de listagem para seleção de linhas/arrastar e soltar foram modificadas. Uma seleção contínua ou descontínua de linhas pode ser arrastada simplesmente clicando e movendo uma linha selecionada; a tecla **Alt** não é mais necessária (mas ainda pode ser usada como na versão anterior). Quando a tecla **Shift** ou **Ctrl/Command** é pressionada, um clique do mouse é levado em consideração quando o clique é para baixo. Para obter mais informações sobre arrastar e soltar em caixas de listagem, você pode consultar [esta postagem do blog](https:/blog.4d.com/list-boxes-say-goodbye-to-alt-key/) e fazer download do [este projeto HDI 4D](https://github.com/4d-depot/HDI_LB_DragAndDrop).
- A numeração de compilação interna do 4D foi modificada a partir do 4D 19 R7:
    - as versões até 4D 19 R6 (inclusive) são numeradas como 282xxx,
    - lançamentos de 4D 19 R7 serão numerados 100xxx.   
      Note que uma versão 4D específica ainda é identificada exclusivamente por um nome de branch e um número de compilação. O número de build aumenta cronologicamente.
- A capacidade de usar o protocolo REST do Wakanda/4D Mobile para chamar um método de projeto foi removida. Você pode usar [ORDA data model class funções](../REST/ClassFunctions.md) ou [/4DACTION urls](../WebServer/httpRequests.md#4daction) em vez disso.


### 4D 19 R6

- Nova classe [HTTPRequest](../API/HTTPRequestClass.md).
- Funções de coleção que podem chamar código agora suportam objetos de função como parâmetro *fórmula*: [`.every()`](../API/CollectionClass.md#every), [`.filter()`](../API/CollectionClass.md#filter), [`.find()`](../API/CollectionClass.md#find), [`.findIndex()`](../API/CollectionClass.md#findindex), [`.map()`](../API/CollectionClass.md#map), [`.orderByMethod()`](../API/CollectionClass.md#orderbymethod), [`.reduce()`](../API/CollectionClass.md#reduce), [`.some()`](../API/CollectionClass.md#some), [`.sort()`](../API/CollectionClass.md#sort)
- As células de listbox suportam preenchimento [horizontal](../FormObjects/properties_CoordinatesAndSizing.md#horizontal-padding) e [vertical](../FormObjects/properties_CoordinatesAndSizing.md#vertical-padding).
- 4D View Pro: novos comandos [VP CREATE TABLE](../ViewPro/method-list.md#vp-create-table) e [VP REMOVE TABLE](../ViewPro/method-list.md#vp-remove-table) para lidar com tabelas em planilhas.
- Capacidade de ver atributos relacionados, computados e de alias no [Web Data Explorer](../Admin/dataExplorer.md#basics).
- Para nos ajudar a tornar nossos produtos cada vez melhores, agora coletamos automaticamente dados sobre estatísticas de uso em aplicativos 4D Server em execução. Este fato não terá qualquer impacto no desempenho. Veja a nova página que explica [por que e como 4D coleta dados](../Admin/data-collect.md).
- Componentes compilados para Silicon: Nas plataformas macOS Silicon (CPUs ARM da Apple), os componentes devem ser recompilados com o 4D 19 R6 ou superior para serem usados com esta versão.




### 4D 19 R5

- O [arquivo directory.json](../Users/handling_users_groups.md#directoryjson-file) do projeto agora pode ser [incorporado ao servidor](../Desktop/building.md#embed-the-project-users-and-groups-in-built-server-application) no momento da compilação, permitindo a implementação de uma aplicação cliente/servidor com uma configuração básica de segurança de usuário e grupos.
- Agora você pode [desmarcar módulos inúteis](../Desktop/building.md#deselecting-modules) em seus aplicativos criados.
- A biblioteca *MeCab* está incluída por padrão em todos os aplicativos 4D no macOS. Em versões anteriores, essa biblioteca, especificamente projetada para gerenciar texto em japonês, estava disponível apenas na versão japonesa do 4D no macOS. Se não precisar dessa biblioteca em seus aplicativos finais, agora você pode [desmarcá-la](../Desktop/building.md#deselecting-modules).
- [Otimização cliente/servidor](../ORDA/remoteDatastores.md#clientserver-optimization): novas funções de classe permitem que você manipule o cache ORDA e o conteúdo de um contexto de otimização. Consulte [pré-configurando contextos](../ORDA/remoteDatastores.md#preconfiguring-contexts) e [Cache ORDA](../ORDA/remoteDatastores.md#orda-cache) para obter mais informações.

   > Essas funções são destinadas a desenvolvedores que precisam personalizar os recursos padrão do ORDA para configurações específicas. Na maioria dos casos, você não precisará usá-los.
- [Classe DataClass](../API/DataClassClass.md): A nova função [.getCount()](../API/DataClassClass.md#getcount) retorna o número de entidades em uma classe de dados.
- O arquivo *4DDiagnosticLog.txt* registra apenas informações de alto nível por padrão ([nível INFO](../Debugging/debugLogFiles.md#4ddiagnosticlogtxt)). Agora é possível selecionar o nível de informação a ser registrado (por exemplo, informações de nível DEBUG) usando o seletor `Diagnostic log level` do comando `SET DATABASE PARAMETER` ou o arquivo de configuração de log.
- Chamar `Use()` em um objeto não compartilhado ou em uma coleção não compartilhada não faz nada (não gera mais um erro). Portanto, agora é inútil testar se o objeto ou coleção passado para Use() é realmente compartilhado.
- Para fins de esclarecimento, dois comandos SQL foram prefixados: `GET DATA SOURCE LIST` foi renomeado para `SQL GET DATA SOURCE LIST`, `Get current data source` foi renomeado para `SQL Get current data source`.
- **4D View Pro**:
    - Os novos comandos [VP SET DATA CONTEXT](../ViewPro/method-list.md#vp-set-data-context), [VP Get data context](../ViewPro/method-list.md#vp-get-data-context), [VP SET BINDING PATH](../ViewPro/method-list.md#vp-set-binding-path) e [VP Get binding path](../ViewPro/method-list.md#vp-get-binding-path) permitem que você crie contextos de dados e vincule seu conteúdo a células da planilha.
    - [VP EXPORT DOCUMENT](../ViewPro/method-list.md#vp-get-binding-path) e [VP Export to object](../ViewPro/method-list.md#vp-get-binding-path) agora aceitam a nova opção `includeBindingSource` que exporta o conteúdo de um contexto de dados como valores de células.
    - (Apenas Windows) As áreas 4D View Pro utilizam agora uma nova janela de parâmetros de impressão.
- **Áreas Web**:
    + Novo mecanismo de renderização do sistema Windows: As áreas da Web que usam o mecanismo de renderização do sistema Windows [](../FormObjects/webArea_overview.md#web-rendering-engine) agora são baseadas no **Microsoft Edge WebView2**. Isto afeta as seguintes funcionalidades:
        * Os comandos `WA Create URL history menu` e `WA GET URL HISTORY` retornam apenas o URL atual.
        - A variável [Progression](../FormObjects/properties_WebArea.md#progression) não é mais atualizada.
        - Os recursos de arrastar e soltar são gerenciados por uma API do Windows que é classificada como "experimental" pela Microsoft. Consequentemente, as áreas da Web podem não funcionar como esperado quando essa API não estiver instalada: Arrastar e soltar pode parecer permitido mesmo quando a preferência `WA enable URL drop` tiver sido definida como False. No entanto, a ação de soltar é bloqueada por padrão, e você pode controlar os URLs permitidos usando o evento [`On Window Opening Denied`](../Events/onWindowOpeningDenied.md) (veja abaixo).
    - (Somente Windows) Quando o usuário seleciona **Print...** em uma área da Web usando o mecanismo de renderização da Web incorporado, uma nova janela de configurações de impressão é exibida.
    - Para refletir seu efeito real nas áreas da Web (aumentar ou diminuir o nível de zoom da página), dois comandos foram renomeados: `WA SET PAGE TEXT LARGER` foi renomeado para `WA ZOOM IN`, `WA SET PAGE TEXT SMALLER` foi renomeado para `WA ZOOM OUT`.
    - Segurança aprimorada em áreas da web que utilizam o [motor de renderização da web incorporado](../FormObjects/properties_WebArea.md#use-embedded-web-rendering-engine) ou o [motor de renderização do sistema Windows](../FormObjects/webArea_overview.md#web-rendering-engine) (baseado no Microsoft Edge WebView2):
        - As políticas CORS agora se aplicam ao acesso a arquivos em disco em áreas da Web. Por exemplo, ao abrir um arquivo .html com `WA OPEN URL`, esse arquivo .html não pode conter links que apontem para arquivos fora de sua pasta
        - Soltar um conteúdo externo dentro das áreas da web agora está bloqueado e aciona o evento [`On Window Opening Denied` ](../Events/onWindowOpeningDenied.md) quando a preferência `WA enable URL drop` for definida como Verdadeiro (quando definido como falso, a preferência `WA enable URL drop`  modifica só o ícone de cursor  e filtra o evento `On Window Opening Denied`). Para permitir uma ação de soltar, você precisa executar um código adicional no método de objeto da área da Web:

```4d
WA OPEN URL(*;"WebArea";WA Get last filtered URL(*;"WebArea"))
```



### 4D 19 R4

- [Atributos de alias](../ORDA/ordaClasses.md#alias-attributes-1) estão disponíveis nas classes ORDA.
- Suporte a instruções [break e continue](../Concepts/flow-control.md#break-and-continue) em loops.
- Suporte para a declaração [return](../Concepts/flow-control.md#return-expression) e [return expression](../Concepts/parameters.md#return-expression) para retornar valores.
- Suporte para [operadores de atribuição compostos](../Concepts/operators.md#compound-assignment-operators), [operadores de curto-circuito](../Concepts/operators.md#short-circuit-operators) e [operador ternário](../Concepts/operators.md#ternary-operator)
- O [Code Editor](../code-editor/overview.md) agora inclui uma ferramenta suspensa e suporta marcadores para melhorar a navegação do código.
- Novas Preferências: [**Incluir tokens nos arquivos de origem do projeto**](../Preferences/general.md#include-tokens-in-project-source-files) e a opção [**Mostrar pranchetas**](../Preferences/methods.md#show-clipboards) na página de Métodos.
- Nova solicitação REST para [bloquear/desbloquear entidades](../REST/$lock.md).
- [4D View Pro](../ViewPro/getting-started.md) capítulo adicionado com novos comandos: [VP Copy to object](../ViewPro/method-list.md#vp-copy-to-object), [VP MOVE CELLS](../ViewPro/method-list.md#vp-move-cells), [VP PASTE FROM OBJECT](../ViewPro/method-list.md#vp-paste-from-object).
- Nova classe [SystemWorker](../API/SystemWorkerClass.md).
- A constante `Alias selection` foi renomeada para `Allow alias files` para resolver um conflito resultante do suporte de atributos de alias no ORDA.
- Para melhor conformidade com as especificações ORDA, a propriedade de campo *Map NULL values to blank values* agora está desmarcada por padrão em bancos de dados criados com 4D 19 R4 e superior. Você também pode ativar esse comportamento padrão em seus bancos de dados convertidos de versões anteriores selecionando a configuração de compatibilidade Mapear valores NULOS para valores em branco desmarcada por padrão na criação do campo. Agora é recomendável trabalhar com valores nulos, pois eles são totalmente compatíveis com o ORDA.
- Por causa do suporte do operador [ternário](../Concepts/operators.md#ternary-operator), o dois pontos ":" não é mais permitido em nomes de variáveis, campo, constante, função, plugin e o método do projeto. Se o seu banco de dados/projeto contiver identificadores com dois-pontos, você deverá substituí-los antes de convertê-lo para a v19 R4 ou superior; caso contrário, poderão ocorrer erros no seu código. Por exemplo, se você tiver uma variável denominada *a:b*, ela poderá ser interpretada como sintaxe de operador ternário:

```4d
$value:=($size>1000)? a:b // Aqui 'a:b' é visto como um operador ternário.
```



### 4D 19 R3

- [Propriedades calculadas](../Concepts/classes.md#function-get-and-function-set) estão disponíveis em classes.
- [Atributos computados](../ORDA/ordaClasses.md#computed-attributes) estão disponíveis nas classes ORDA. Eles são semelhantes às propriedades calculadas, mas também suportam as funções [query](../ORDA/ordaClasses.md#function-query-attributename) e [orderBy](../ORDA/ordaClasses.md#function-orderby-attributename).
- Novas [propriedades](../API/DataClassClass.md#attributename) da classe de dados ORDA: `exposed` e `readOnly`.
- [Arquivos ZIP](../API/ZipArchiveClass.md#zip-create-archive) agora suportam os algoritmos de compactação *LZMA* e *xz* .
- Uma nova opção de compilação [](../Desktop/building.md#allow-connection-of-silicon-mac-clients) facilita a inclusão de clientes Silicon Mac em aplicativos de servidor no Windows.
- Suporte estendido [do modo escuro](../Preferences/general.md#appearance-macos-only) no macOS.
- Suporte do **objeto de token OAuth2** em [`Novo transportador IMAP`](../API/IMAPTransporterClass.md#imap-new-transporter), [`Novo transportador POP3`](../API/POP3TransporterClass.md#pop3-new-transporter) e [`Novo transportador SMTP`](../API/SMTPTransporterClass.md#smtp-new-transporter).
- Agora os usuários podem carregar um [arquivo de configuração de log](../Debugging/debugLogFiles.md#using-a-log-configuration-file) usando um botão na janela de administração do servidor.
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
- Esse novo algoritmo é usado automaticamente quando uma senha é alterada usando a Caixa de ferramentas, o comando `CHANGE PASSWORD` ou o comando `Set user properties` . 4D 19 R3 usa um algoritmo hash mais forte para senhas de usuários 4D: Bcrypt. Depois que a senha for modificada, abrir o banco de dados com uma versão anterior ao 4D 19 R3 causará uma recusa de autenticação para essa conta. Se você usa senhas 4D, é altamente recomendável fazer backup do arquivo .4db (bancos de dados binários) ou do arquivo directory.json (projetos) antes de atualizar para o 4D 19 R3 ou posterior.
- Para fins de precisão, a constante `4D digest` foi renomeada para `4D REST digest`.

- Gerenciamento de fim de linha e BOM para comandos XML: Quando abertos no 4D 19 R3, os projetos ou bancos de dados criados com versões anteriores se comportam de forma diferente em relação aos caracteres de fim de linha padrão e ao gerenciamento de BOM em documentos XML: os caracteres de avanço de linha (LF) são usados em vez de CR (no macOS) e as marcas de ordem de byte (BOM) não são incluídas. Isso permite uma melhor compatibilidade com as ferramentas VCS. Isso permite uma melhor compatibilidade com as ferramentas VCS. Isso permite uma melhor compatibilidade com as ferramentas VCS. Se necessário, você pode restaurar o comportamento da v19 R2 usando o comando `XML SET OPTIONS` . Em projetos ou bancos de dados convertidos de versões anteriores ao 19 R2, essas opções são gerenciadas por duas configurações de compatibilidade.
- Atalho do Runtime Explorer removido em projetos criados: O atalho **Cmd/Ctrl+Shift+F9** não exibe mais a janela do Runtime Explorer em aplicativos de projetos mesclados de usuário único. Esse atalho agora pode ser um atalho de aplicativo do usuário. Você pode chamar a janela do Runtime Explorer usando o novo comando `OPEN RUNTIME EXPLORER` .
- Recursos de depuração ampliados com o 4D Server: No modo interpretado, o 4D Server agora pode depurar todos os tipos de processos, incluindo sessões da Web escalonáveis. Isso está disponível quando o depurador está conectado ao servidor ou a um cliente remoto.   
  *Aviso: No modo interpretado, para disponibilizar a depuração estendida no computador do servidor, todos os processos do servidor agora são executados automaticamente no modo cooperativo quando o depurador está conectado ao servidor (configuração padrão). Isso pode ter um impacto significativo no desempenho de seus aplicativos convertidos quando eles são executados com o 4D Server v19 R3 e superior. Para restaurar a execução preemptiva no servidor nesse caso, tudo o que você precisa fazer é desconectar o depurador do servidor (e conectá-lo a um cliente remoto, se necessário).*
- No Windows, os projetos e bancos de dados 4D criados com o 4D 19 R3 e superior usam a [API DirectWrite](https://docs.microsoft.com/en-us/windows/win32/DirectWrite/direct-write-portal) em formulários. Essa API melhora a renderização de texto, especialmente em configurações de DPI alto. O DirectWrite é usado para renderização de texto com texto estático e de entrada, caixas de seleção, botões e botões de rádio. Observe que as caixas de listagem já usam DirectWrite. Uma opção de compatibilidade permite que você ative o DirectWrite em projetos e bancos de dados criados com versões anteriores do 4D.
- Se você usar componentes compilados com o 4D 19.0 para Silicon (CPUs ARM da Apple) que chamam o comando `Count parameters`, recomendamos recompilá-los com o 4D 19 R3 para oferecer compatibilidade com o 4D 19 R3 e versões futuras. Se um componente não for compilado para o Silicon, não será necessário recompilar.








### 4D 19 R2

- Um [arquivo .gitignore padrão](../Preferences/general.md#create-gitignore-file) pode ser criado com novos projetos
- Nova API de classe [Blob](../API/BlobClass.md) para lidar com novos objetos [`4D. Blob`](Concepts/dt_blob.md#blob-types)
- `Suporte a no-bom` e novos caracteres de fim de linha padrão em [`.setText()`](../API/FileClass.md#settext)


## 4D 19.x LTS


Veja [**Notas de lançamento para 4D 19.x LTS**](../../version-19/Notes/updates.md).



## Tabela das bibliotecas (4D 20 LTS)



| Biblioteca | Versão atual | Atualizado em 4D | Comentário                                                                                                  |
| ---------- | ------------ | ---------------- | ----------------------------------------------------------------------------------------------------------- |
| ICU        | 73.2         | 20.1             | Essa grande atualização força uma reconstrução automática dos índices alfanuméricos, de texto e de objetos. |
| CEF        | 118          | 20.3             | Chromium 5993                                                                                               |
| Hunspell   | 7.3.27       | 20               | Usado para verificação ortográfica em formulários 4D e 4D Write Pro                                         |
| PDFWriter  | 4.3          | 20               | Dependência FreeType na 12.2.1                                                                              |
| SpreadJS   | 16.2.6       | 20.2 HF1         | Motor 4D View Pro                                                                                           |
|            | 19.6         | 20               |                                                                                                             |
| OpenSSL    | 3.1.6        | **20.4 HF2**     |                                                                                                             |
| libZip     | 19.5         | 20               | Utilizado pelos componentes zip class, 4D Write Pro, svg e serverNet                                        |
| LZMA       | 5.4.1        | 20               |                                                                                                             |
| Zlib       | 14.1.6       | 20               |                                                                                                             |
| webKit     | WKWebView    | 19               |                                                                                                             |
| PHP        | 8.2.4        | 20               |                                                                                                             |
| libldap    | 2.6.4        | 20               |                                                                                                             |
| libsasl    | 2.1.28       | 20               |                                                                                                             |
