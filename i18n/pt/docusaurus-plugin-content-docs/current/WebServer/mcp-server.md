---
id: mcp-server
title: Servidor MCP
---

<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|21 R6|Adicionado|

</details>

O 4D Web Server inclui um servidor nativo [Model Context Protocol (MCP)](https://modelcontextprotocol.io). Assistentes e agentes de IA (Claude Desktop, Claude Code, MCP Inspector, etc.) podem se conectar a ele para descobrir e chamar a lógica de negócios e os dados da sua aplicação.

O servidor MCP publica dois tipos de **ferramentas**:

- as [ferramentas personalizadas](#custom-tools) que você escreve como funções de classe ORDA ou singleton declaradas com `exposed MCP Function`,
- as [ferramentas CRUD integradas](#built-in-crud-tools), que permitem a um cliente ler e escrever dados do datastore.

Você não precisa escrever a camada MCP: o 4D gera o catálogo de ferramentas, converte os argumentos e resultados, e aplica os mesmos [papéis e privilégios](../ORDA/privileges.md) que para requisições REST. Os clientes se autenticam com um [Fine-Grained Token](#fine-grained-tokens) gerado pela sua aplicação, ou através do modo opcional [OAuth 2.1](#oauth-21-mode).

## Antes de habilitar o MCP

O MCP dá acesso aos agentes de IA aos seus dados e funções sob o mesmo [`roles.json`](../ORDA/privileges.md) que o REST, esteja ou não o [servidor REST](../REST/configuration.md) habilitado. O servidor MCP não depende do servidor REST: ele roda independentemente da exposição do banco de dados como servidor REST, e segue as configurações **Expose as REST resource** por dataclass e atributo.

Habilite-o apenas após revisar:

- o [modo restrito](../ORDA/privileges.md#restriction-modes): defina `restrictedByDefault` e `forceLogin` como true em produção. Sem o modo restrito, todo token lê e escreve em todo dataclass que não esteja explicitamente proibido;
- as permissões de cada dataclass e atributo que os agentes podem acessar, e os privilégios que você concede aos [tokens](#fine-grained-tokens);
- as [ferramentas CRUD integradas](#built-in-crud-tools): todas as nove, incluindo escritas, estão disponíveis por padrão ([`mcp.crudTools`](../API/WebServerClass.md#mcp));
- suas [ferramentas personalizadas](#custom-tools) (`exposed MCP Function`), especialmente aquelas com permissão **promote**: elas rodam com o privilégio promovido para qualquer um autorizado a chamá-las.

Assim como no REST (veja [Controlando o acesso REST](../REST/configuration.md#controlling-rest-access)), não é recomendado abrir dados para todos os usuários.

## Habilitando o servidor MCP

O servidor MCP vem desabilitado por padrão. Ele requer:

- o servidor web da aplicação hospedeira (o servidor MCP não está disponível em [servidores web de componentes](webServerObject.md)),
- [sessões escaláveis](sessions.md#enabling-web-sessions). Se as sessões escaláveis estiverem desabilitadas, o servidor MCP não inicia, o 4D registra uma mensagem no [log de diagnóstico](../Debugging/debugLogFiles.md#4ddiagnosticlogtxt), e `/mcp` responde 404.

Você habilita o servidor MCP com a propriedade `enabled` do objeto [`mcp`](../API/WebServerClass.md#mcp) do servidor web. Você pode defini-la no parâmetro *settings* de [`.start()`](../API/WebServerClass.md#start), ou em tempo de execução sem reiniciar o servidor web:

```4d
var $webServer : 4D.WebServer:=WEB Server
$webServer.mcp.enabled:=True // /mcp agora aceita requisições MCP
```

Quando você define `mcp.enabled` como **False**, as chamadas em execução terminam e recebem suas respostas, todas as requisições posteriores recebem status 404, e as sessões MCP são fechadas (suas licenças são liberadas).

O objeto [`mcp`](../API/WebServerClass.md#mcp) também contém as demais configurações do servidor MCP (nome do servidor, instruções, ferramentas permitidas, proxies, etc.). Essas configurações são mantidas quando o servidor web é reiniciado.

#### Exemplo

Você inicia o servidor web com o servidor MCP habilitado e uma descrição da aplicação para os clientes:

```4d
var $settings:={mcp: {enabled: True; serverName: "Vendas"; instructions: "Chame describeModel primeiro para conhecer o modelo de dados."}}
var $status:=WEB Server.start($settings)
```

## Endpoint MCP

O servidor MCP responde na URL `/mcp` do servidor web (por exemplo `https://meuservidor.exemplo.com/mcp`). Ele implementa apenas a revisão stateless MCP **2026-07-28**, via HTTP ou HTTPS.

Cada requisição é um `POST` auto-descritivo:

- seu corpo é uma única requisição JSON-RPC 2.0,
- o cabeçalho `MCP-Protocol-Version` contém `2026-07-28`,
- o cabeçalho `Mcp-Method` contém o método JSON-RPC, e o cabeçalho `Mcp-Name` contém o nome da ferramenta para `tools/call`. Esses cabeçalhos devem corresponder ao corpo. Um valor que não seja ASCII puro é enviado como `=?base64?<base64 do valor UTF-8>?=`,
- o cabeçalho `Authorization: Bearer <token>` contém o [token](#authentication), exceto para `server/discover` e `ping`.

Por exemplo:

```
POST /mcp HTTP/1.1
Host: meuservidor.exemplo.com
Content-Type: application/json
Authorization: Bearer 4dfgt_...
MCP-Protocol-Version: 2026-07-28
Mcp-Method: tools/call
Mcp-Name: queryEntities

{"jsonrpc": "2.0", "id": 1, "method": "tools/call", "params": {"name": "queryEntities", "arguments": {"dataClass": "Customer", "filter": "city = :1", "params": ["Paris"]}}}
```

As respostas são `application/json`. Todo resultado contém uma propriedade `resultType` (`"complete"`, ou `"input_required"` quando o usuário deve [responder a uma pergunta](#asking-the-user-for-confirmation)). O 4D nunca lê nem envia um cabeçalho `Mcp-Session-Id`.

Os seguintes métodos são suportados:

|Método|Token necessário|Descrição|
|---|---|---|
|`server/discover`|Não|Retorna as capacidades do servidor (veja abaixo)|
|`ping`|Não|Retorna um resultado vazio|
|`tools/list`|Sim|Retorna o [catálogo de ferramentas](#tool-catalog) da sessão|
|`tools/call`|Sim|Chama uma [ferramenta personalizada](#calling-a-custom-tool) ou uma [ferramenta CRUD integrada](#built-in-crud-tools)|

Os clientes podem chamar `tools/list` e `tools/call` diretamente, sem chamar `server/discover` antes. A requisição legada `initialize` de revisões anteriores do MCP não é suportada.

#### `server/discover`

O resultado de `server/discover` é o mesmo para todos os chamadores. Ele contém:

|Propriedade|Descrição|
|---|---|
|`supportedVersions`|`["2026-07-28"]`|
|`capabilities`|`{"tools": {"listChanged": false}}`|
|`_meta["io.modelcontextprotocol/serverInfo"]`|`name`: [`mcp.serverName`](../API/WebServerClass.md#mcp), ou o nome da aplicação por padrão. `version`: `mcp.serverVersion`, ou por padrão a versão da aplicação compilada (`"0.0.0"` se a aplicação não estiver compilada)|
|`instructions`|[`mcp.instructions`](../API/WebServerClass.md#mcp) (vazio por padrão)|
|`cacheScope`|`"public"`|
|`ttlMs`|`3600000` (o cliente pode manter o resultado por uma hora)|

#### Exemplo

Você verifica a partir do 4D que o servidor MCP responde na máquina local:

```4d
var $headers:={}
$headers["MCP-Protocol-Version"]:="2026-07-28"
$headers["Mcp-Method"]:="server/discover"

var $request:=4D.HTTPRequest.new("http://127.0.0.1/mcp"; {method: "POST"; headers: $headers; body: {jsonrpc: "2.0"; id: 1; method: "server/discover"}})
$request.wait()
// $request.response.status é 200
// $request.response.body.result.supportedVersions é ["2026-07-28"]
```

### Verificações e erros de requisição

O 4D verifica cada requisição na seguinte ordem, antes de executar qualquer código da aplicação. A primeira verificação que falhar determina a resposta:

|Verificação|Status HTTP|Erro JSON-RPC|
|---|---|---|
|Servidor MCP desabilitado|404, sem corpo||
|HTTP puro não permitido (veja [Conexões seguras](#secure-connections))|404, sem corpo||
|Método diferente de `POST`|405, sem corpo (`Allow: POST`)||
|Cabeçalho `Origin` presente (requisições de navegadores web)|403, sem corpo||
|Corpo não é JSON válido|400|`-32700`|
|Corpo não é uma única requisição ou notificação JSON-RPC (array batch, resposta, ausência de `jsonrpc` ou `method`)|400|`-32600`|
|Notificação JSON-RPC (sem `id`): aceita, nada é executado|202, sem corpo||
|Falta de cabeçalho `MCP-Protocol-Version`, `Mcp-Method` ou `Mcp-Name`, ou cabeçalho que não corresponde ao corpo. Uma requisição legada `initialize` recebe uma mensagem nomeando a revisão `2026-07-28`|400|`-32020`|
|Versão de protocolo não suportada (`data.supported` lista as versões suportadas)|400|`-32022`|
|Método desconhecido|404|`-32601`|

Depois, para métodos que requerem token:

|Caso|Status HTTP|
|---|---|
|Sem token, ou token desconhecido, inválido, expirado ou revogado|401 (com um desafio `WWW-Authenticate` em [modo OAuth](#oauth-21-mode))|
|Sem licença 4D disponível para uma nova sessão MCP|503 com cabeçalho `Retry-After` e erro JSON-RPC "No 4D license available"|
|[Quota](#quotas) excedida|429 com cabeçalho `Retry-After`|

Erros das próprias ferramentas são retornados como resultados de ferramenta com `isError: true` (veja [Chamando uma ferramenta personalizada](#calling-a-custom-tool) e [Ferramentas CRUD integradas](#built-in-crud-tools)). Uma ferramenta que não existe ou que a sessão não tem permissão para chamar recebe o erro JSON-RPC `-32602` "Unknown tool: \<name\>".

## Conexões seguras

O servidor MCP usa a configuração TLS do servidor web: não há certificado específico. Para um servidor de testes com certificado autoassinado, o certificado deve ser confiado no lado do cliente (por exemplo, com a variável de ambiente `NODE_EXTRA_CA_CERTS` para clientes Node.js).

Um token é um segredo de longa duração: o 4D nunca o aceita em claro pela rede. Requisições para `/mcp` (e para suas [URLs binárias](#binary-attributes)) via HTTP puro só são atendidas:

- de um endereço de loopback (`127.0.0.1`, `::1`),
- ou de um proxy reverso listado em [`mcp.trustedProxies`](../API/WebServerClass.md#mcp) que envie `X-Forwarded-Proto: https` (TLS terminado pelo proxy).

Qualquer outra requisição HTTP puro recebe status 404 antes da autenticação, e o 4D registra uma mensagem no [log de diagnóstico](../Debugging/debugLogFiles.md#4ddiagnosticlogtxt). Em uma rede local sem certificado, você pode definir [`mcp.allowInsecureHTTP`](../API/WebServerClass.md#mcp) como **True** para aceitar requisições HTTP puro (não recomendado). Essa configuração nunca se aplica aos endpoints [OAuth](#oauth-21-mode).

Requisições com cabeçalho `Origin` são recusadas (403) para proteger o servidor contra ataques de DNS rebinding vindos de navegadores web.

#### Proxies e URL pública

O 4D publica algumas URLs (metadados e endpoints OAuth, URLs binárias). Sua base é:

- [`mcp.publicURL`](../API/WebServerClass.md#mcp) se estiver definida (recomendado quando o servidor é acessível por vários nomes),
- caso contrário, o esquema e o cabeçalho `Host` da requisição. Os cabeçalhos `X-Forwarded-Proto` e `X-Forwarded-Host` só são usados quando a requisição vem de um proxy listado em `mcp.trustedProxies`.

O **endereço IP do chamador**, usado para [identificar sessões MCP](#mcp-sessions) e para os limites do [OAuth](#client-registration), é o endereço da conexão ou, quando a conexão vem de um proxy confiável, o endereço mais à direita do cabeçalho `X-Forwarded-For` que não seja ele mesmo um proxy confiável.

#### Exemplo

Seu servidor 4D está atrás de um proxy reverso em 10.0.0.5 que termina o TLS para `https://vendas.exemplo.com`:

```4d
var $webServer : 4D.WebServer:=WEB Server
var $mcp:={enabled: True; trustedProxies: ["10.0.0.5"]; publicURL: "https://vendas.exemplo.com"}
var $status:=$webServer.start({mcp: $mcp})
```

## Autenticação

Cada requisição (exceto `server/discover` e `ping`) carrega um token em seu cabeçalho `Authorization: Bearer <token>`. Não há sessão MCP anônima. Dois tipos de tokens são aceitos simultaneamente:

||Fine-Grained Token|OAuth 2.1 (opcional)|
|---|---|---|
|Quem autentica o usuário|Sua aplicação, do seu jeito, antes de gerar o token|4D, por meio de uma página de login que chama sua função [`ds.mcpGrant()`](../ORDA/ordaClasses.md#function-mcpgrant)|
|Token|`4dfgt_…`|JWT assinado pelo 4D|
|Privilégios|Definidos na geração do token|Retornados por `ds.mcpGrant()`|
|Tempo de vida|Data de expiração escolhida na geração (máximo de 366 dias)|15 minutos, renovado com um refresh token|
|Revogação|[`ds.revokeFineGrainedToken()`](../API/DataStoreClass.md#revokefinegrainedtoken)|[`ds.revokeOAuthGrant()`](../API/DataStoreClass.md#revokeoauthgrant)|
|Uso típico|Serviços, o [Claude Desktop bundle](#claude-desktop-bundle), aplicações com login próprio|Login interativo de cada usuário em seu cliente de IA|

### Fine-Grained Tokens

Um Fine-Grained Token (FGT) é gerado pela sua aplicação, com os privilégios a serem concedidos ao cliente MCP, após o usuário ter sido autenticado pela aplicação (por exemplo, através da função [`authentify()`](../REST/authUsers.md#function-authentify)). Você entrega o token ao usuário, que o insere na configuração do cliente de IA.

- [`ds.generateFineGrainedToken()`](../API/DataStoreClass.md#generatefinegrainedtoken) cria um token. Só pode ser chamada a partir de uma sessão web ou REST, e apenas com privilégios que a sessão possui.
- [`ds.listFineGrainedTokens()`](../API/DataStoreClass.md#listfinegrainedtokens) lista os tokens (nunca os próprios tokens).
- [`ds.revokeFineGrainedToken()`](../API/DataStoreClass.md#revokefinegrainedtoken) revoga um token. Ele para de funcionar na próxima requisição.

Os tokens são armazenados de forma hash no arquivo `fgt.json` da pasta de dados. O próprio token é retornado apenas uma vez, na geração.

Quando uma requisição chega com um FGT, o 4D verifica o token a cada requisição, depois aplica seus privilégios antes de executar qualquer código da aplicação. Um privilégio ou papel nomeado pelo token e removido desde então do arquivo `roles.json` é ignorado (o 4D registra uma mensagem). Um token sem nenhum privilégio declarado recebe status 401.

#### Exemplo

Na classe DataStore, uma função exposta permite que um usuário autenticado obtenha um token para seu cliente de IA:

```4d
// cs.DataStore class
Class extends DataStoreImplementation

exposed Function getMCPToken() : Text
	var $expiry:=Add to date(Current date; 0; 3; 0) // válido por 3 meses
	var $result:=ds.generateFineGrainedToken("salesReader"; "Claude - "+Session.userName; $expiry; {userName: Session.userName})
	return $result.token // "4dfgt_..."
```

### Sessões MCP

As requisições são stateless, mas o 4D mantém uma sessão web por token e endereço IP do chamador (ou por usuário e cliente em [modo OAuth](#oauth-21-mode)), para que requisições repetidas reutilizem a mesma sessão:

- Quando a sessão é criada, ela consome uma licença 4D. Se não houver licença disponível, a requisição recebe status 503 e nenhuma sessão é criada.
- Seu [`Session.info.type`](../API/SessionClass.md#info) é `"mcp"`. Sessões MCP aparecem com esse tipo na janela de administração do 4D Server, e nos resultados dos comandos [`Process activity`](../commands/process-activity) e [`License usage`](../commands/license-usage).
- Seus privilégios são os do token. Em seguida, o 4D chama a função [`ds.mcpAuthenticated()`](../ORDA/ordaClasses.md#function-mcpauthenticated) da sua classe DataStore, se definida, uma vez por sessão: você pode usá-la para preencher o [`Session.storage`](../API/SessionClass.md#storage) a partir das informações armazenadas com o token.
- A sessão é fechada após o [timeout de inatividade das sessões web](sessions.md#session-lifetime), quando seu token é revogado ou expira, ou quando o servidor MCP é desabilitado. Sua licença é então liberada.

### Modo OAuth 2.1

No modo OAuth, o 4D é o servidor de autorização OAuth: os usuários fazem login a partir de seu cliente de IA por meio de uma página de login do 4D, sem nenhum provedor de identidade externo. O modo OAuth é habilitado quando sua classe DataStore define a função [`mcpGrant()`](../ORDA/ordaClasses.md#function-mcpgrant). Fine-Grained Tokens continuam sendo aceitos.

O fluxo é o padrão *authorization code* com PKCE (S256):

1. Uma requisição sem token válido recebe status 401 com o cabeçalho `WWW-Authenticate: Bearer resource_metadata="<base>/.well-known/oauth-protected-resource"`. O cliente lê esses metadados, depois os metadados do servidor de autorização.
2. O cliente [registra-se](#client-registration) e abre a URL de autorização no navegador.
3. O 4D exibe sua página de login. Quando o usuário a envia, o 4D chama `ds.mcpGrant($user; $password; $clientId)`, que retorna os privilégios a conceder, ou um valor vazio para recusar o login.
4. O 4D redireciona para o cliente com um código de uso único, que o cliente troca por um access token (JWT) e um refresh token.
5. O cliente envia o access token em cada requisição `/mcp`. O 4D o verifica e aplica os privilégios retornados por `ds.mcpGrant()`.

O 4D serve os seguintes endpoints, sob a [URL base pública](#proxies-e-url-pública):

|Endpoint|Descrição|
|---|---|
|`/.well-known/oauth-protected-resource`|Metadados do recurso protegido (RFC 9728)|
|`/.well-known/oauth-authorization-server`|Metadados do servidor de autorização (RFC 8414). O issuer é a URL `/mcp`|
|`/mcp/oauth/authorize`|Página de login (GET) e login (POST)|
|`/mcp/oauth/token`|Troca de código e refresh de token|
|`/mcp/oauth/register`|[Registro dinâmico de cliente](#client-registration), quando `mcp.oauthDynamicRegistration` é True|

As URLs de metadados também são servidas com `/mcp` anexado (por exemplo, `/.well-known/oauth-protected-resource/mcp`). Esses endpoints respondem 404 quando o modo OAuth está desabilitado, e via HTTP puro fora de loopback e proxies confiáveis, independentemente do valor de [`mcp.allowInsecureHTTP`](../API/WebServerClass.md#mcp).

**Tokens e grants**

Cada login de um usuário em um cliente cria um **grant**, que mantém os privilégios retornados por `ds.mcpGrant()`:

- O access token é um JWT assinado pelo 4D (HS256), válido por 15 minutos. Ele não contém os privilégios, apenas o id do grant: o 4D verifica a cada requisição se o grant ainda existe.
- O refresh token é válido por 30 dias após ser emitido, e no máximo 90 dias após o login. Cada refresh emite um novo refresh token. Se um refresh token já usado for apresentado novamente, todo o grant é revogado.
- O authorization code é válido por 60 segundos e pode ser usado uma vez.
- Sessões OAuth são identificadas pelo usuário (claim `sub`) e pelo cliente, e seu nome de usuário é o claim `sub`.

Você lista os grants com [`ds.listOAuthGrants()`](../API/DataStoreClass.md#listoauthgrants) e os revoga com [`ds.revokeOAuthGrant()`](../API/DataStoreClass.md#revokeoauthgrant): os access tokens do grant recebem status 401 a partir da próxima requisição, e seu refresh token é recusado. Ao desativar um usuário da sua aplicação, revogue seus grants e Fine-Grained Tokens.

:::warning

A chave de assinatura dos access tokens e os grants são armazenados na pasta de dados (arquivo `fgt.json`). Uma cópia desse arquivo permite ao seu detentor usar os grants existentes: proteja os backups da pasta de dados como os próprios dados.

:::

:::note

A página de login verifica um nome de usuário e senha com `ds.mcpGrant()`: single sign-on e autenticação multifator não são suportados nesse modo. Se você precisar deles, autentique os usuários do seu jeito e gere [Fine-Grained Tokens](#fine-grained-tokens).

:::

### Registro de cliente

No modo OAuth, um cliente é identificado pelo URL HTTPS de um **Client ID Metadata Document** (CIMD) ou por um id emitido por **registro dinâmico de cliente** (DCR, RFC 7591). Esse client id é passado para `ds.mcpGrant()` em *$clientId*.

- **Client ID Metadata Documents**: o 4D baixa o documento apenas via HTTPS, de um nome de host (não um endereço IP) que resolva apenas para endereços públicos (sem loopback, privado, link-local ou multicast), sem seguir redirecionamentos, em até 5 segundos e 5 KB. O `client_id` do documento deve ser sua URL. O 4D mantém o documento em cache conforme os cabeçalhos HTTP de cache, entre 5 minutos e 24 horas.
- **Registro dinâmico de cliente**: disponível quando [`mcp.oauthDynamicRegistration`](../API/WebServerClass.md#mcp) é **True** (padrão). O 4D aceita 10 registros por endereço IP do chamador por hora (status 429 além disso), e 1000 clientes dinâmicos no total (status 503 além disso). Um cliente dinâmico não usado por 30 dias é excluído.
- **Redirect URIs** devem ser URLs HTTPS, ou URLs `http://127.0.0.1` / `http://localhost` em qualquer porta. Qualquer outro redirect URI é recusado, no registro ou na autorização.

A página de login exibe o nome do cliente e o domínio de seu documento de metadados, ou o host de seu redirect URI, para que os usuários possam verificar quem está solicitando acesso.

Para proteger a página de login contra tentativas de adivinhação de senha:

- após 10 logins falhos de um endereço IP em 15 minutos, esse endereço recebe status 429 por 15 minutos,
- após 20 logins falhos para um nome de usuário em 15 minutos, esse nome de usuário é recusado por 15 minutos, com a mesma mensagem de senha incorreta.

## Autorização

O servidor MCP usa o arquivo [`roles.json`](../ORDA/privileges.md) do projeto, exatamente como o servidor REST. Revise-o antes de habilitar o MCP (veja [Antes de habilitar o MCP](#before-enabling-mcp)):

- uma ferramenta personalizada requer permissão **execute** em sua função (e se beneficia da permissão **promote**),
- as ferramentas CRUD integradas requerem permissão **read**, **create**, **update** ou **drop** no dataclass e seus atributos,
- `restrictedByDefault` se aplica às ferramentas assim como às requisições REST.

O catálogo de ferramentas lista apenas as ferramentas que a sessão pode chamar, mas cada chamada é verificada novamente. Uma ferramenta que a sessão não pode chamar recebe o mesmo erro "Unknown tool" que uma ferramenta inexistente (o motivo é registrado no servidor).

Dados acessados pelas ferramentas passam pelo ORDA, então [entity selections restritas](../ORDA/entities.md#restricting-entity-selections) (`Function event restrict`) se aplicam. Você pode filtrar de forma diferente para sessões MCP testando `Session.info.type`.

#### Exemplo

Clientes MCP só veem os pedidos do usuário cujo ID foi armazenado em `Session.storage` por [`ds.mcpAuthenticated()`](../ORDA/ordaClasses.md#function-mcpauthenticated):

```4d
// cs.Order class
Class extends DataClass

Function event restrict() : cs.OrderSelection
	If (Session#Null) && (Session.info.type="mcp")
		return This.query("ownerID = :1"; Session.storage.user.ID)
	End if
	return Null // sem filtro para outras sessões
```

## Ferramentas personalizadas

Você publica uma função de classe como ferramenta MCP declarando-a com as palavras-chave `exposed` e `MCP`:

```4d
exposed MCP Function <functionName>(<parameters>) : <type>
```

Funções das seguintes classes podem ser publicadas:

- a classe DataStore,
- classes DataClass,
- classes Entity,
- classes singleton compartilhadas.

Funções declaradas sem `exposed` ou sem `MCP`, e funções de classes EntitySelection, não são publicadas. Veja [`exposed MCP Function`](../ORDA/ordaClasses.md#exposed-mcp-function).

O [bloco de comentário](../Concepts/classes.md#function-comments) escrito acima da declaração fornece a descrição da ferramenta, de seus parâmetros e suas tags de comportamento. Uma função sem descrição é publicada, com um aviso no log de diagnóstico.

#### Exemplo

Você publica uma função de uma classe singleton compartilhada como ferramenta somente leitura:

```4d
// cs.OrderManager shared singleton class
shared singleton Class constructor()

// Retorna o valor total dos pedidos de um cliente em um ano
// $customerID: ID do cliente
// $year: ano dos pedidos
// MCP: @readOnly @idempotent
exposed MCP Function getYearTotal($customerID : Integer; $year : Integer) : Real
	return ds.Order.query("customer.ID = :1 and year = :2"; $customerID; $year).sum("amount")
```

Esta função é publicada como a ferramenta `OrderManager-getYearTotal`.

### Catálogo de ferramentas

O método `tools/list` retorna as ferramentas personalizadas para as quais a sessão tem permissão **execute**, e as [ferramentas CRUD integradas](#built-in-crud-tools) quando a sessão tem permissão de dados. As ferramentas são ordenadas por nome, em páginas de 100 ferramentas (`cursor` / `nextCursor`).

O catálogo é construído a partir do código em execução: em modo interpretado, uma função adicionada ou modificada aparece no próximo `tools/list`, sem reiniciar. Cada página contém uma propriedade `cacheScope: "private"` e uma propriedade `ttlMs` (`0` em modo interpretado, `300000` em modo compilado) que informa ao cliente por quanto tempo pode manter o catálogo.

Cada ferramenta é descrita da seguinte forma:

- **name**: `ClassName-functionName`, ou o nome da função para função de classe DataStore. O nome deve corresponder a `^[A-Za-z0-9_-]{1,64}$` e não pode ser o nome de outra ferramenta, incluindo uma ferramenta CRUD integrada. Caso contrário, a função não é publicada e o 4D registra uma mensagem.
- **description**: as linhas de descrição `MCP:` do bloco de comentário, ou suas linhas de descrição.
- **inputSchema**: um objeto com uma propriedade por parâmetro, nomeada sem o `$`, com os tipos convertidos para JSON Schema conforme descrito em [MCP tool metadata](../Concepts/classes.md#mcp-tool-metadata), e `"additionalProperties": false`:
  - todo parâmetro é obrigatório, exceto os documentados com `{$name}`,
  - parâmetros variádicos tipados (`... : Type`) são um array opcional `args` (uma função que declara ambos `$args` e parâmetros variádicos não é publicada),
  - uma função de classe Entity recebe uma propriedade obrigatória `key` (string ou inteiro): a chave primária da entidade sobre a qual a função é chamada. Uma função de classe Entity que declara um parâmetro `$key` não é publicada.
- **outputSchema**, derivado do tipo de retorno:

|Tipo de retorno|outputSchema|
|---|---|
|`cs.<DataClass>Entity`|Schema da entidade, com os atributos que a sessão pode ler|
|`cs.<DataClass>Selection`|`{entities, total, truncated}`|
|Classe do usuário|Propriedades declaradas com a palavra-chave `property`|
|Collection|`{result: array}`|
|Object, Variant, tipos escalares, sem retorno|Sem output schema|

- **annotations**: as dicas das [tags de comportamento](../Concepts/classes.md#mcp-tool-metadata). `openWorldHint` é `false` a menos que a função use `@openWorld`. Dicas contraditórias são omitidas. Anotações são dicas para o cliente: não protegem nada (veja [Solicitando confirmação do usuário](#asking-the-user-for-confirmation)).

### Chamando uma ferramenta personalizada

Quando um cliente chama uma ferramenta personalizada (`tools/call`), o 4D verifica a permissão **execute**, depois os argumentos:

- Um argumento ausente, desconhecido ou cujo tipo não corresponde ao schema resulta em um resultado `isError` "Invalid parameters", e a função não é executada.
- Argumentos são convertidos: uma string `YYYY-MM-DD` para Date, um número de segundos para Time, uma string base64 para `4D.Blob` ou Picture, e um número para Real para parâmetro Variant.
- Argumentos são passados na ordem dos parâmetros, até o último fornecido: parâmetros finais omitidos não são passados ([`Count parameters`](../commands/count-parameters) retorna o número de argumentos fornecidos), e um parâmetro omitido seguido de um fornecido recebe o valor padrão de seu tipo. Os itens de `args` são passados após os parâmetros declarados.
- Para função de classe Entity, `This` é a entidade de `key`, carregada com permissão **read** do dataclass e seu filtro de restrição. Uma chave desconhecida, filtrada ou invisível resulta em erro "Entity not found".

A função roda na sessão MCP, com as mesmas permissões de uma chamada REST. O valor retornado é convertido em resultado de ferramenta:

|Valor retornado|Resultado|
|---|---|
|Text, number, Boolean, Date, Time|Conteúdo de texto (datas como `YYYY-MM-DD`, tempos em segundos)|
|Object|`structuredContent` com o objeto, e sua renderização em texto|
|Collection|`structuredContent` com `{result: [...]}`|
|Entity|A entidade, serializada como pelas [ferramentas CRUD](#entities-in-results) com os atributos que a sessão pode ler (`null` se a sessão não puder lê-la)|
|Entity selection|`{entities, total, truncated}`: no máximo [`mcp.maxResults`](../API/WebServerClass.md#mcp) entidades|
|Blob, Picture|Uma URL de download, válida por 10 minutos (veja [Atributos binários](#binary-attributes))|

Em objetos e coleções retornados, datas estão em formato ISO, valores binários são URLs de download, entidades são `{__KEY, __DATACLASS}` e entity selections são `{__DATACLASS, __COUNT}`.

Se a função lançar um erro, o resultado é um resultado `isError` com a mensagem de erro. Se o cliente desconectar durante a chamada, a função roda até o fim e seu resultado é descartado.

:::caution

Dados lidos com permissão **promote** e retornados em objeto ou coleção construída pelo seu código são retornados como estão, independentemente dos privilégios da sessão.

:::

#### Exemplo

Você chama a ferramenta `OrderManager-getYearTotal` com:

```json
{"name": "OrderManager-getYearTotal", "arguments": {"customerID": 120, "year": 2026}}
```

O resultado contém um conteúdo de texto com o valor, por exemplo `"15240.5"`. Se a função lançar um erro, o cliente o recebe como erro da ferramenta:

```4d
exposed MCP Function getYearTotal($customerID : Integer; $year : Integer) : Real
	If ($year>Year of(Current date))
		throw(1; "O ano não pode estar no futuro")
	End if
	return ds.Order.query("customer.ID = :1 and year = :2"; $customerID; $year).sum("amount")
```

## Solicitando confirmação do usuário

Uma ferramenta personalizada pode solicitar que o usuário confirme uma ação ou forneça valores antes de executá-la. O comando [`MCP`](../commands/mcp) retorna o objeto [`4D.MCPContext`](../API/MCPContextClass.md) da chamada atual:

1. A função chama [`MCP.requireInput()`](../API/MCPContextClass.md#requireinput) com os campos a exibir, e retorna. O 4D responde à chamada com `resultType: "input_required"`, um formulário (`elicitation/create`) e um `requestState` assinado pelo 4D.
2. O cliente exibe o formulário ao usuário, depois chama a ferramenta novamente com os mesmos argumentos, as respostas (`inputResponses`) e o `requestState`.
3. O 4D verifica o `requestState` e executa a função novamente **do início**. [`MCP.hasInput()`](../API/MCPContextClass.md#hasinput) agora retorna **True** e [`MCP.input`](../API/MCPContextClass.md#input) contém as respostas.

O `requestState` é assinado pelo 4D para o token (ou grant OAuth), a ferramenta, os argumentos convertidos, os campos solicitados e o valor *bind* passado para `requireInput()`. Ele é válido por 10 minutos, e até o servidor MCP ser desabilitado. Se estiver ausente, modificado, expirado ou se os argumentos mudaram, as respostas são ignoradas e a entrada é solicitada novamente. A confirmação é, portanto, garantida pelo 4D, independentemente do cliente.

- Se o cliente não suporta formulários (sem capacidade `elicitation`), `MCP.requireInput()` não solicita nada e a chamada retorna o resultado `isError` "This action requires a confirmation your client cannot display": a ação nunca é executada.
- Não solicite segredos como senhas com `MCP.requireInput()`.
- O valor *bind* é assinado, não criptografado: o cliente pode lê-lo.

#### Exemplo

Você deseja que o usuário confirme o cancelamento de uma fatura:

```4d
// cs.InvoiceEntity class
Class extends Entity

// Cancela a fatura
exposed MCP Function cancel() : Text
	If (Not(MCP.hasInput("confirm")))
		MCP.requireInput({message: "Cancelar fatura "+String(This.number)+"?"; confirm: {type: "boolean"; title: "Cancelar a fatura"}}; This.getStamp())
		return
	End if
	If (MCP.bound#This.getStamp()) // a fatura foi modificada após a confirmação ser solicitada
		MCP.error("A fatura foi modificada, tente novamente")
		return
	End if
	If (MCP.input.confirm)
		This.status:="cancelled"
		This.save()
	End if
	return This.status
```

## Ferramentas CRUD integradas

As ferramentas CRUD integradas permitem que um cliente leia e escreva os dados do datastore sem código personalizado. Elas são listadas quando a sessão tem pelo menos uma permissão de dados (**read**, **create**, **update** ou **drop**) em um dataclass, e cada chamada requer a permissão correspondente:

|Ferramenta|Argumentos|Resultado|Permissão|
|---|---|---|---|
|`describeModel`|Nenhum|Os dataclasses que a sessão pode acessar, seus atributos legíveis ou graváveis e suas relações com esses dataclasses|Qualquer permissão de dados|
|`getEntity`|`dataClass`, `key`, `attributes`|A entidade|read|
|`queryEntities`|`dataClass`, `filter`, `params`, `attributes`, `orderBy`, `limit`, `skip`|`{entities, total, skip, nextSkip}`|read|
|`aggregateEntities`|`dataClass`, `attribute`, `filter`, `params`|`count`, e com `attribute`: `countNotNull`, `sum`, `average`, `min`, `max`|read|
|`addEntity`|`dataClass`, `data`|A entidade criada|create|
|`updateEntity`|`dataClass`, `key`, `data`, `stamp`|A entidade atualizada|update|
|`dropEntity`|`dataClass`, `key`, `stamp`|Exclui a entidade após confirmação do usuário|drop|
|`getBinaryAttribute`|`dataClass`, `key`, `attribute`|Uma imagem, ou uma URL de download|read|
|`setBinaryAttribute`|`dataClass`, `key`, `attribute`, `data`, `mimeType`|Armazena o valor, ou retorna uma URL de upload|update|

- `key` é a chave primária da entidade, como string ou inteiro.
- `attributes` é uma coleção de caminhos de atributos a retornar (caminhos pontilhados para atributos relacionados, por exemplo `["lastName"; "employer.name"]`). Por padrão, todos os atributos que a sessão pode ler são retornados.
- `limit` é o número máximo de entidades a retornar: 20 por padrão, entre 1 e [`mcp.maxResults`](../API/WebServerClass.md#mcp). `skip` é o número de entidades a pular (0 por padrão): para ler a próxima página, passe o valor `nextSkip` da página anterior. `nextSkip` é `null` na última página.
- `orderBy` contém caminhos de atributos seguidos de `asc` ou `desc` (por exemplo `"lastName asc, salary desc"`). As entidades são ordenadas por `orderBy`, depois pela chave primária, para que páginas não pulem nem repitam entidades.
- Em `aggregateEntities`, `average` é `sum/countNotNull`. `sum` e `average` são `null` para atributos não numéricos.
- Em `data`, atributos são fornecidos por nome. Datas são strings `YYYY-MM-DD` e tempos são números de segundos. Uma relação N-para-1 é definida com a chave primária da entidade relacionada: `{"employer": {"__KEY": "12"}}` (um `__DATACLASS` opcional deve corresponder ao dataclass relacionado, e a entidade relacionada deve ser legível). Atributos binários (use `setBinaryAttribute`), relações 1-para-N, atributos somente leitura, `__KEY` e `__STAMP` são recusados.
- `addEntity` sempre cria uma nova entidade.
- Em `updateEntity` e `dropEntity`, passe em `stamp` o valor `__STAMP` que você leu: a operação é recusada se a entidade foi modificada desde então.
- `dropEntity` sempre solicita ao usuário a confirmação da exclusão (um campo booleano `confirm`, veja [Solicitando confirmação do usuário](#asking-the-user-for-confirmation)). A entidade só é excluída quando a confirmação vem das respostas do usuário, nunca dos argumentos.

Você pode restringir as ferramentas disponíveis com a configuração [`mcp.crudTools`](../API/WebServerClass.md#mcp) (todas as nove ferramentas por padrão). Uma ferramenta que não está nessa coleção não é listada e recebe o erro "Unknown tool". Um nome desconhecido nessa coleção é ignorado, e o 4D registra uma mensagem.

As ferramentas CRUD usam as mesmas permissões, filtros de restrição e permissões de atributo que requisições REST. Um dataclass ou atributo que a sessão não pode ver recebe o mesmo erro que um inexistente, enquanto um visível com operação proibida recebe o erro "Insufficient privileges for \<operation\> on \<dataClass\>".

#### Exemplo

Você deseja publicar apenas as ferramentas de leitura:

```4d
var $mcp:={enabled: True; crudTools: ["describeModel"; "getEntity"; "queryEntities"; "aggregateEntities"]}
var $status:=WEB Server.start({mcp: $mcp})
```

### Filtros

O argumento `filter` de `queryEntities` e `aggregateEntities` usa a [sintaxe de consulta ORDA](../API/DataClassClass.md#query), com placeholders (`:1`, `:2`...) cujos valores são passados na coleção `params`. Por exemplo: `"lastName = :1 AND employer.name = :2"`.

- Operadores são `=`, `!=`, `>`, `>=`, `<`, `<=`, `AND`, `OR`, `NOT`, e `@` é o coringa. Datas são escritas como `YYYY-MM-DD`.
- Cada item de `params` é um valor escalar, `null`, uma coleção de valores escalares ou um objeto de comparação vetorial `{vector; metric; threshold}`.
- Fórmulas (incluindo `eval()`) são recusadas com o erro "Formulas are not allowed in filter". `order by` é recusado em `filter` (use `orderBy`).
- Todo atributo de um caminho, incluindo atributos de relação, requer permissão **read**.

### Entidades nos resultados

Entidades retornadas pelas ferramentas contêm:

- `__KEY`: a chave primária, sempre como string,
- `__STAMP`: o stamp da entidade,
- os atributos que a sessão pode ler. Uma relação N-para-1 é retornada como `{__KEY, __DATACLASS}`, ou como objeto com os atributos solicitados quando projetada com `attributes`. Relações 1-para-N e atributos binários não são retornados. Datas são strings `YYYY-MM-DD` e tempos são números de segundos.

As ferramentas retornam seu resultado em `structuredContent`, ou um resultado `isError` com uma das seguintes mensagens:

|Mensagem|Caso|
|---|---|
|Invalid parameters: ...|Argumento ausente, desconhecido ou inválido|
|Formulas are not allowed in filter|`filter` contém uma fórmula|
|Entity not found|Chave desconhecida, entidade filtrada por restrição ou dataclass invisível|
|Insufficient privileges for \<operation\> on \<dataClass\>|A operação não é permitida em um dataclass visível|
|Entity was modified since it was read|O `stamp` não corresponde (o stamp atual é retornado)|
|Entity is locked, retry later|A entidade está bloqueada por outro processo|

### Atributos binários

Conteúdos binários (imagens e blobs) não passam pelo contexto do modelo:

- `getBinaryAttribute` retorna uma imagem PNG, JPEG, GIF ou WebP de até 1 MB como conteúdo `image`. Para qualquer outro valor, retorna uma URL de download `{url, method, expiresAt}`: uma requisição `GET` nessa URL retorna o valor com seu MIME type.
- `setBinaryAttribute` com `data` base64 de até 64 KB (após decodificado) armazena o valor diretamente (`mimeType` é obrigatório para imagem). Sem `data`, retorna uma URL de upload: uma requisição `PUT` nessa URL com o valor bruto no corpo e seu `Content-Type` armazena o valor. Dados inline maiores resultam em erro "Invalid parameters".

URLs binárias têm o formato `<public base URL>/mcp/binary/<token>`. Elas são assinadas pelo 4D, válidas por 10 minutos, e não contêm nenhum id de sessão: a URL é a credencial, e permanece válida até expirar, mesmo que o token da sessão seja revogado. Uma URL de upload pode ser usada apenas uma vez. Uma URL inválida, expirada ou já usada recebe status 403 sem corpo. URLs binárias deixam de ser válidas quando o servidor MCP é desabilitado. As regras de [conexão segura](#secure-connections) se aplicam a essas URLs.

## Quotas

Requisições MCP são requisições do servidor web: as [quotas do servidor web](quotas.md) se aplicam a elas, e requisições acima da quota recebem status 429 antes de qualquer código ser executado. Cada sessão MCP conta nas quotas de sessão.

#### Exemplo

Você limita cada sessão MCP (e cada sessão web) a 60 requisições por minuto:

```4d
var $webServer : 4D.WebServer:=WEB Server
$webServer.quotas.nbRequestsPerMinPerSession:=60
```

## Claude Desktop bundle

O Claude Desktop executa servidores MCP locais via stdio e não fala a revisão `2026-07-28`. Para permitir que ele acesse um servidor 4D na rede local sem expor esse servidor na internet, o 4D fornece um **MCP Bundle** de referência (arquivo `.mcpb`). O bundle é um pequeno adaptador Node.js executado pelo Claude Desktop:

- ele responde `initialize` e `ping` por conta própria, e encaminha as demais requisições para a URL `/mcp` do 4D,
- autentica-se com um Fine-Grained Token quando um é informado, caso contrário com o [modo OAuth](#oauth-21-mode) (registro dinâmico de cliente e login no navegador),
- exibe os formulários de [confirmação](#asking-the-user-for-confirmation), como a confirmação de `dropEntity`, em uma página do navegador em `127.0.0.1`, já que o Claude Desktop não os exibe,
- quando o Claude Desktop cancela uma requisição, ele cancela a requisição correspondente no 4D.

Para instalar, abra o arquivo `.mcpb` (ou arraste-o em **Configurações > Extensões** do Claude Desktop), depois preencha o formulário de instalação:

|Campo|Descrição|
|---|---|
|URL do servidor MCP 4D|A URL `/mcp` do servidor web 4D, por exemplo `https://meuserver.local/mcp`|
|Fine-Grained Token|Um token gerado pela aplicação com [`ds.generateFineGrainedToken()`](../API/DataStoreClass.md#generatefinegrainedtoken). O Claude Desktop o armazena no keychain do sistema. Deixe em branco para fazer login via OAuth|
|Certificado CA|Um certificado PEM a ser confiado, para servidor com certificado autoassinado ou emitido por autoridade privada|
|Permitir conexão insegura|**Apenas para testes.** Permite URLs `http://` para outra máquina e desabilita a verificação do certificado|

O bundle se recusa a iniciar, e registra o motivo, quando a URL é um `http://` para outra máquina e **Permitir conexão insegura** não está marcada, ou quando nenhum token é informado e o servidor não oferece login OAuth com registro dinâmico de cliente.

No modo OAuth, o cliente e seus tokens são armazenados na pasta `.4d-mcp-bundle` da pasta home do usuário: exclua sua subpasta para sair.

Editores de software podem rebrandear o bundle (nome, ícone, URL padrão do servidor em seu arquivo `manifest.json`) e reempacotá-lo para seus clientes com a ferramenta `mcpb`, conforme descrito em seu arquivo README.

## Veja também

- [`WebServer.mcp`](../API/WebServerClass.md#mcp)
- [`exposed MCP Function`](../ORDA/ordaClasses.md#exposed-mcp-function)
- Comando [`MCP`](../commands/mcp)
- Classe [`4D.MCPContext`](../API/MCPContextClass.md)
- [Papéis e privilégios](../ORDA/privileges.md)
