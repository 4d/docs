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

- as [ferramentas personalizadas](#custom-tools) que você escreve como funções de classe ORDA ou singleton declaradas com `exposed mcp Function`,
- as [ferramentas CRUD integradas](#built-in-crud-tools), que permitem a um cliente ler e gravar dados do datastore.

Você não precisa escrever a camada MCP: o 4D gera o catálogo de ferramentas, converte os argumentos e os resultados, e aplica os mesmos [papéis e privilégios](../ORDA/privileges.md) que para requisições REST. Os clientes se autenticam com um [Token Granular](#fine-grained-tokens) gerado pela sua aplicação, ou através do modo opcional [OAuth 2.1](#oauth-21-mode).

## Antes de habilitar o MCP

O MCP dá aos agentes de IA acesso aos seus dados e funções sob o mesmo [`roles.json`](../ORDA/privileges.md) que o REST, esteja ou não o [servidor REST](../REST/configuration.md) habilitado. O servidor MCP não depende do servidor REST: ele roda independentemente de o banco de dados estar exposto como servidor REST, e segue as configurações **Expor como recurso REST** por dataclass e por atributo.

Habilite-o apenas após revisar:

- o [modo restrito](../ORDA/privileges.md#restriction-modes): defina `restrictedByDefault` e `forceLogin` como true em produção. Sem o modo restrito, todo token lê e grava todo dataclass que não for explicitamente proibido;
- as permissões de cada dataclass e atributo que os agentes podem acessar, e os privilégios que você concede aos [tokens](#fine-grained-tokens);
- as [ferramentas CRUD integradas](#built-in-crud-tools): todas as nove, incluindo gravações, estão disponíveis por padrão ([`mcp.crudTools`](../API/WebServerClass.md#mcp));
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

Quando você define `mcp.enabled` como **False**, as chamadas em execução terminam e recebem sua resposta, todas as requisições posteriores recebem status 404, e as sessões MCP são fechadas (suas licenças são liberadas).

Uma alteração em tempo de execução de `mcp.enabled` se aplica apenas à execução atual: o 4D não grava isso em nenhum arquivo de configuração, e o próximo início do 4D usará as configurações.

O objeto [`mcp`](../API/WebServerClass.md#mcp) também contém as demais configurações do servidor MCP (nome do servidor, instruções, ferramentas permitidas, proxies, etc.). Você as define nas configurações ou as passa no parâmetro *settings* de [`.start()`](../API/WebServerClass.md#start) (veja o exemplo abaixo): no objeto `WEB Server`, elas são somente leitura. As configurações MCP são mantidas quando o servidor web é reiniciado.

#### Exemplo

Você inicia o servidor web com o servidor MCP habilitado e uma descrição da aplicação para os clientes:

```4d
var $settings:={mcp: {enabled: True; serverName: "Vendas"; instructions: "Chame describeModel primeiro para conhecer o modelo de dados."}}
var $status:=WEB Server.start($settings)
```

## Endpoint MCP

O servidor MCP responde na URL `/mcp` do servidor web (por exemplo `https://meuservidor.exemplo.com/mcp`). Ele implementa apenas a revisão MCP stateless **2026-07-28**, via HTTP ou HTTPS.

Cada requisição é uma requisição `POST` autodescritiva:

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

As respostas são `application/json`, qualquer que seja o cabeçalho `Accept` da requisição: `/mcp` nunca responde com outro tipo de conteúdo, nem com status 406. Todo resultado contém uma propriedade `resultType` (`"complete"`, ou `"input_required"` quando o usuário deve [responder a uma pergunta](#asking-the-user-for-confirmation)). O 4D nunca lê nem envia um cabeçalho `Mcp-Session-Id`.

Os seguintes métodos são suportados:

|Método|Token necessário|Descrição|
|---|---|---|
|`server/discover`|Não|Retorna as capacidades do servidor (veja abaixo)|
|`ping`|Não|Retorna um resultado vazio|
|`tools/list`|Sim|Retorna o [catálogo de ferramentas](#tool-catalog) da sessão|
|`tools/call`|Sim|Chama uma [ferramenta personalizada](#calling-a-custom-tool) ou uma [ferramenta CRUD integrada](#built-in-crud-tools)|

Os clientes podem chamar `tools/list` e `tools/call` diretamente, sem chamar `server/discover` antes. A requisição `initialize` das revisões MCP anteriores não é suportada.

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

### Verificações e erros das requisições

O 4D verifica cada requisição na seguinte ordem, antes de executar qualquer código da aplicação. A primeira verificação que falhar determina a resposta:

|Verificação|Status HTTP|Erro JSON-RPC|
|---|---|---|
|[Quota](#quotas) excedida|429 com cabeçalho `Retry-After`||
|Servidor MCP desabilitado|404, sem corpo||
|HTTP puro não permitido (veja [Conexões seguras](#secure-connections))|404, sem corpo||
|Método diferente de `POST`|405, sem corpo (`Allow: POST`)||
|Cabeçalho `Origin` presente (requisições de navegadores web)|403, sem corpo||
|Corpo não é JSON válido|400|`-32700`|
|Corpo não é uma única requisição ou notificação JSON-RPC (array batch, resposta, ausência de `jsonrpc` ou `method`)|400|`-32600`|
|Notificação JSON-RPC (sem `id`): aceita, nada é executado|202, sem corpo||
|Falta de cabeçalho `MCP-Protocol-Version`, `Mcp-Method` ou `Mcp-Name`, ou cabeçalho que não corresponde ao corpo. Uma requisição `initialize` legada recebe uma mensagem nomeando a revisão `2026-07-28`|400|`-32020`|
|Versão de protocolo não suportada (`data.supported` lista as versões suportadas)|400|`-32022`|
|Método desconhecido|404|`-32601`|

Uma resposta "sem corpo" realmente não tem corpo: `Content-Length: 0`, e nenhuma página de erro após isso.

Depois, para métodos que requerem token:

|Caso|Status HTTP|
|---|---|
|Sem token, ou token desconhecido, inválido, expirado ou revogado|401 (com desafio `WWW-Authenticate` em [modo OAuth](#oauth-21-mode))|
|Sem licença 4D disponível para uma nova sessão MCP|503 com cabeçalho `Retry-After` e erro JSON-RPC "No 4D license available"|

Erros das próprias ferramentas são retornados como resultados de ferramenta com `isError: true` (veja [Chamando uma ferramenta personalizada](#calling-a-custom-tool) e [Ferramentas CRUD integradas](#built-in-crud-tools)). Uma ferramenta que não existe ou que a sessão não pode chamar recebe o erro JSON-RPC `-32602` "Unknown tool: \<name\>".

## Conexões seguras

O servidor MCP usa a configuração TLS do servidor web: não há certificado específico. Para um servidor de testes com certificado autoassinado, o certificado deve ser confiável no lado do cliente (por exemplo, com a variável de ambiente `NODE_EXTRA_CA_CERTS` para clientes Node.js).

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

Cada requisição (exceto `server/discover` e `ping`) carrega um token em seu cabeçalho `Authorization: Bearer <token>`. Não há sessão MCP anônima. Dois tipos de tokens são aceitos lado a lado:

||Token Granular|OAuth 2.1 (opcional)|
|---|---|---|
|Quem autentica o usuário|Sua aplicação, do seu jeito, antes de gerar o token|4D, por meio de uma página de login que chama sua função [`ds.mcpGrant()`](../ORDA/ordaClasses.md#function-mcpgrant)|
|Token|`4dfgt_…`|JWT assinado pelo 4D|
|Privilégios|Definidos na geração do token|Retornados por `ds.mcpGrant()`|
|Validade|Data de expiração escolhida na geração (máximo de 366 dias)|15 minutos, renovado com um refresh token|
|Revogação|[`ds.revokeFineGrainedToken()`](../API/DataStoreClass.md#revokefinegrainedtoken)|[`ds.revokeOAuthGrant()`](../API/DataStoreClass.md#revokeoauthgrant)|
|Uso típico|Serviços, o [Claude Desktop bundle](#claude-desktop-bundle), aplicações com login próprio|Login interativo de cada usuário em seu cliente de IA|

### Tokens Granulares

Um Token Granular (FGT) é gerado pela sua aplicação, com os privilégios a serem concedidos ao cliente MCP, após o usuário ter sido autenticado pela aplicação (por exemplo, através da função [`authentify()`](../REST/authUsers.md#function-authentify)). Você entrega o token ao usuário, que o insere na configuração do cliente de IA.

- [`ds.generateFineGrainedToken()`](../API/DataStoreClass.md#generatefinegrainedtoken) cria um token. Só pode ser chamada a partir de uma sessão web ou REST, e apenas com privilégios que a sessão possui.
- [`ds.listFineGrainedTokens()`](../API/DataStoreClass.md#listfinegrainedtokens) lista os tokens (nunca os próprios tokens).
- [`ds.revokeFineGrainedToken()`](../API/DataStoreClass.md#revokefinegrainedtoken) revoga um token. Ele para de funcionar na próxima requisição.

Os tokens são armazenados com hash no arquivo `fgt.json` da pasta de dados. O próprio token é retornado apenas uma vez, na geração.

Esses nomes de função (e os de `ds.listOAuthGrants()` e `ds.revokeOAuthGrant()`) são reservados: uma função da sua classe DataStore com um desses nomes é um erro no editor de código, na checagem de sintaxe e na compilação.

Quando uma requisição chega com um FGT, o 4D verifica o token a cada requisição, depois aplica seus privilégios antes de executar qualquer código da aplicação. Um privilégio ou papel nomeado pelo token e removido desde então do arquivo `roles.json` é ignorado (o 4D registra uma mensagem). Um token sem nenhum privilégio declarado recebe status 401.

#### Exemplo

Na classe DataStore, uma função exposta permite que um usuário autenticado obtenha um token para seu cliente de IA:

```4d
// classe cs.DataStore
Class extends DataStoreImplementation

exposed Function getMCPToken() : Text
	var $expiry:=Add to date(Current date; 0; 3; 0) // válido por 3 meses
	var $result:=ds.generateFineGrainedToken("salesReader"; "Claude - "+Session.userName; $expiry; {userName: Session.userName})
	return $result.token // "4dfgt_..."
```

### Sessões MCP

As requisições são stateless, mas o 4D mantém uma sessão web por token e endereço IP do chamador (ou por usuário e cliente no [modo OAuth](#oauth-21-mode)), para que requisições repetidas reutilizem a mesma sessão:

- Quando a sessão é criada, ela consome uma licença 4D. Se não houver licença disponível, a requisição recebe status 503 e nenhuma sessão é criada.
- Seu [`Session.info.type`](../API/SessionClass.md#info) é `"mcp"`. Sessões MCP aparecem com esse tipo na janela de administração do 4D Server, e nos resultados dos comandos [`Process activity`](../commands/process-activity) e [`License usage`](../commands/license-usage).
- Seus privilégios são os do token. Em seguida, o 4D chama a função [`ds.mcpAuthenticated()`](../ORDA/ordaClasses.md#function-mcpauthenticated) da sua classe DataStore, se definida, uma vez por sessão: você pode usá-la para preencher o [`Session.storage`](../API/SessionClass.md#storage) a partir das informações armazenadas com o token. Seu parâmetro *$info* recebe o registro do token ou do grant OAuth que abriu a sessão, diferenciados por `$info.type` (`"fineGrainedToken"` ou `"oauth"`). O objeto *info* que você passou para `ds.generateFineGrainedToken()` está em `$info.info`.
- Seu [`Session.userName`](../API/SessionClass.md#username) é o nome do Token Granular ou, no modo OAuth, o `userName` retornado por `ds.mcpGrant()` (o nome de usuário digitado na página de login se não retornar nenhum).
- Apenas o 4D chama `ds.mcpAuthenticated()` e `ds.mcpGrant()`. Uma requisição REST ou chamada de datastore remoto nunca as executa: se não estiverem declaradas como `exposed`, recebe a resposta usual para função não exposta (404 para REST, "not a function" para datastore remoto); se estiverem declaradas como `exposed`, recebe um erro de permissão nomeando a função (403 para REST, erro 1561 para datastore remoto), e o 4D registra um aviso.
- A sessão é fechada após o [timeout de inatividade das sessões web](sessions.md#session-lifetime), quando seu token é revogado ou expira, ou quando o servidor MCP é desabilitado. Sua licença é então liberada.

### Modo OAuth 2.1

No modo OAuth, o 4D é o servidor de autorização OAuth: os usuários fazem login a partir de seu cliente de IA por meio de uma página de login do 4D, sem nenhum provedor de identidade externo. O modo OAuth é habilitado quando sua classe DataStore define a função [`mcpGrant()`](../ORDA/ordaClasses.md#function-mcpgrant). Tokens Granulares continuam sendo aceitos.

O fluxo é o padrão *authorization code* com PKCE (S256):

1. Uma requisição sem token válido recebe status 401 com o cabeçalho `WWW-Authenticate: Bearer resource_metadata="<base>/.well-known/oauth-protected-resource"`. O cliente lê esses metadados, depois os metadados do servidor de autorização.
2. O cliente [registra-se](#client-registration) e abre a URL de autorização no navegador.
3. O 4D exibe sua página de login. Quando o usuário a envia, o 4D chama `ds.mcpGrant($user; $password; $clientId)`, que retorna os privilégios a conceder, ou um valor vazio para recusar o login.
4. O 4D redireciona para o cliente com um código de uso único, que o cliente troca por um access token (JWT) e um refresh token.
5. O cliente envia o access token com cada requisição `/mcp`. O 4D o verifica e aplica os privilégios retornados por `ds.mcpGrant()`.

O 4D serve os seguintes endpoints, sob a [URL base pública](#proxies-and-public-url):

|Endpoint|Descrição|
|---|---|
|`/.well-known/oauth-protected-resource`|Metadados do recurso protegido (RFC 9728)|
|`/.well-known/oauth-authorization-server`|Metadados do servidor de autorização (RFC 8414). O issuer é a URL `/mcp`|
|`/mcp/oauth/authorize`|Página de login (GET) e login (POST)|
|`/mcp/oauth/token`|Troca de código e refresh de token|
|`/mcp/oauth/register`|[Registro dinâmico de cliente](#client-registration), quando `mcp.oauthDynamicRegistration` é True|

As URLs de metadados também são servidas com `/mcp` anexado (por exemplo, `/.well-known/oauth-protected-resource/mcp`). Esses endpoints respondem 404 quando o modo OAuth está desabilitado, e via HTTP puro fora de loopback e proxies confiáveis, qualquer que seja o valor de [`mcp.allowInsecureHTTP`](../API/WebServerClass.md#mcp).

**Tokens e grants**

Cada login de um usuário em um cliente cria um **grant**, que mantém os privilégios retornados por `ds.mcpGrant()`:

- O access token é um JWT assinado pelo 4D (HS256), válido por 15 minutos. Ele não contém os privilégios, apenas o id do grant: o 4D verifica a cada requisição se o grant ainda existe.
- O refresh token é válido por 30 dias após ser emitido, e no máximo 90 dias após o login. Cada refresh emite um novo refresh token. Se um refresh token já usado for apresentado novamente, todo o grant é revogado.
- O authorization code é válido por 60 segundos e pode ser usado uma vez.
- Sessões OAuth são identificadas pelo usuário (claim `sub`) e pelo cliente, e seu nome de usuário é o claim `sub`.

Você lista os grants com [`ds.listOAuthGrants()`](../API/DataStoreClass.md#listoauthgrants) e os revoga com [`ds.revokeOAuthGrant()`](../API/DataStoreClass.md#revokeoauthgrant): os access tokens do grant recebem status 401 a partir da próxima requisição, e seu refresh token é recusado. Ao desativar um usuário da sua aplicação, revogue seus grants e Tokens Granulares.

:::warning

A chave de assinatura dos access tokens e os grants são armazenados na pasta de dados (arquivo `fgt.json`). Uma cópia desse arquivo permite ao portador usar os grants existentes: proteja os backups da pasta de dados como os próprios dados.

:::

:::note

A página de login verifica um nome de usuário e uma senha com `ds.mcpGrant()`: single sign-on e autenticação multifator não são suportados nesse modo. Se você precisar deles, autentique os usuários do seu jeito e gere [Tokens Granulares](#fine-grained-tokens).

:::

### Registro de cliente

No modo OAuth, um cliente é identificado pelo URL HTTPS de um **Client ID Metadata Document** (CIMD) ou por um id emitido por **registro dinâmico de cliente** (DCR, RFC 7591). Esse client id é passado para `ds.mcpGrant()` em *$clientId*.

- **Client ID Metadata Documents**: o 4D baixa o documento apenas via HTTPS, de um nome de host (não um endereço IP) que resolva apenas para endereços públicos (sem loopback, privado, link-local ou multicast), sem seguir redirecionamentos, em até 5 segundos e 5 KB. O `client_id` do documento deve ser sua URL. O 4D mantém o documento em cache conforme os cabeçalhos HTTP de cache, entre 5 minutos e 24 horas.
- **Registro dinâmico de cliente**: disponível quando [`mcp.oauthDynamicRegistration`](../API/WebServerClass.md#mcp) é **True** (padrão). O 4D aceita 10 registros por endereço IP do chamador por hora (status 429 além disso), e 1000 clientes dinâmicos no total (status 503 além disso). Um cliente dinâmico não usado por 30 dias é excluído.
- **Redirect URIs** devem ser URLs HTTPS, ou URLs `http://127.0.0.1` / `http://localhost` em qualquer porta. Qualquer outro redirect URI é recusado, no registro ou na autorização.

A página de login exibe o nome do cliente e o domínio de seu documento de metadados, ou o host de seu redirect URI, para que os usuários possam verificar quem está pedindo acesso. Ela é exibida no idioma do navegador (cabeçalho `Accept-Language`) entre inglês, francês, alemão, espanhol e japonês, e em inglês caso contrário.

Para proteger a página de login contra tentativas de adivinhação de senha:

- após 10 logins falhos de um endereço IP em 15 minutos, esse endereço recebe status 429 por 15 minutos,
- após 20 logins falhos para um nome de usuário em 15 minutos, esse nome de usuário é recusado por 15 minutos, com a mesma mensagem de senha incorreta.

## Permissões

O servidor MCP usa o arquivo [`roles.json`](../ORDA/privileges.md) do projeto, exatamente como o servidor REST. Revise-o antes de habilitar o MCP (veja [Antes de habilitar o MCP](#before-enabling-mcp)):

- uma [ferramenta personalizada](#custom-tools) requer permissão **execute** em sua função e se beneficia da permissão **promote**,
- as [ferramentas CRUD integradas](#built-in-crud-tools) requerem permissão **read**, **create**, **update** ou **drop** no dataclass e em seus atributos,
- As ferramentas CRUD só são listadas se a sessão tiver pelo menos uma permissão de dados em um dataclass, e a ferramenta `describeModel` só descreve os dataclasses nos quais a sessão tem permissão de dados, com seus atributos legíveis ou graváveis.
- `restrictedByDefault` se aplica às ferramentas assim como às requisições REST.

O catálogo de ferramentas só lista as ferramentas que a sessão pode chamar, mas cada chamada é verificada novamente. Uma ferramenta que a sessão não pode chamar recebe o mesmo erro "Unknown tool" que uma ferramenta que não existe (o motivo é registrado no servidor).

Por exemplo, esta configuração permite que um cliente MCP com o privilégio `salesReader` leia os dataclasses `Customer` e `Order` com ferramentas CRUD, e chame ferramentas publicadas pelo singleton `OrderManager`, como `OrderManager-getYearTotal`:

```json
{
	"privileges": [{"privilege": "salesReader", "includes": []}],
	"roles": [],
	"permissions": {
		"allowed": [
			{"applyTo": "Customer", "type": "dataclass", "read": ["salesReader"]},
			{"applyTo": "Order", "type": "dataclass", "read": ["salesReader"]},
			{"applyTo": "OrderManager", "type": "singleton", "execute": ["salesReader"]}
		]
	},
	"restrictedByDefault": true
}
```


### Entity selections restritas

Os dados acessados pelas ferramentas passam pelo ORDA, então [entity selections restritas](../ORDA/entities.md#restricting-entity-selections) (`Function event restrict`) se aplicam. Você pode filtrar de forma diferente para sessões MCP testando `Session.info.type`.

#### Exemplo

Clientes MCP só veem os pedidos do usuário cujo ID foi armazenado em `Session.storage` por [`ds.mcpAuthenticated()`](../ORDA/ordaClasses.md#function-mcpauthenticated):

```4d
// classe cs.Order
Class extends DataClass

Function event restrict() : cs.OrderSelection
	If (Session#Null) && (Session.info.type="mcp")
		return This.query("ownerID = :1"; Session.storage.user.ID)
	End if
	return Null // sem filtro para outras sessões
```


## Ferramentas personalizadas

Você publica uma função de classe como ferramenta MCP declarando-a com as palavras-chave `exposed` e `mcp`:

```4d
exposed mcp Function <functionName>(<parameters>) : <type>
```

Funções das seguintes classes podem ser publicadas:

- a classe DataStore,
- classes DataClass,
- classes Entity,
- classes singleton compartilhadas.

Funções declaradas sem `exposed` ou sem `mcp`, e funções de classes EntitySelection, não são publicadas. Veja [`exposed mcp Function`](../ORDA/ordaClasses.md#exposed-mcp-function).


### Descrevendo as ferramentas

O [bloco de comentário](../Concepts/comments.md#syntax-description) escrito acima da declaração fornece a descrição da ferramenta, de seus parâmetros e suas tags de comportamento. Uma função sem descrição é publicada, com um aviso no log de diagnóstico.

As seguintes tags são suportadas para as ferramentas MCP:

|Linha|Significado|
|---|---|
|`// <texto>`|Descrição padrão da função (veja [Comentários](../Concepts/comments.md)). Várias linhas de descrição são combinadas na ordem, com suas quebras de linha. Linhas `//` vazias no início ou fim do bloco são ignoradas.|
|`// $nome: <texto>`|Descrição do parâmetro *$nome*.|
|`// {$nome}: <texto>`|Descrição do parâmetro *$nome*, marcado como opcional para o MCP.|
|`// ...: <texto>`|Descrição dos [parâmetros variádicos](../Concepts/parameters.md#declaring-variadic-parameters) (`... : Type`).|
|`// param: $nome <texto>`, `// param: {$nome} <texto>`, `// param: ... <texto>`|Equivalente a `$nome:`, `{$nome}:` e `...:`.|
|`// MCP: <texto>`|Descrição da função apenas para MCP. Várias linhas `MCP:` são combinadas na ordem.|
|`// MCP: @tag {@tag}` ou `// @tag {@tag}`|Tags de comportamento MCP (veja [Metadados da ferramenta MCP](../WebServer/mcp-server.md#mcp-tool-metadata)). A linha deve conter apenas tags suportadas, caso contrário é uma linha de descrição.|

Uma linha `$nome:` ou `{$nome}:` é uma descrição de parâmetro apenas se *$nome* for um parâmetro da assinatura da função. Caso contrário, é uma linha de descrição (por exemplo, `// $120: preço em dólares`). Uma linha `...:` é uma descrição de parâmetro apenas se a função tiver parâmetros variádicos.

A assistência de código exibe as linhas de descrição, depois uma linha em branco, depois as linhas de parâmetro como escritas. Linhas `MCP:` nunca são exibidas na assistência de código.

Ao [compilar](../Project/compiler.md) o projeto, o compilador reporta um [aviso](../Project/compiler.md#warnings-on-function-comments) para cada parâmetro da assinatura que não tenha linha `$nome:` ou `{$nome}:` no bloco de comentário, e para tags de comportamento MCP contraditórias. Funções sem bloco de comentário não são verificadas.

:::note

Blocos de comentário são suportados em classes de projeto (incluindo classes compartilhadas e singleton) e em classes de componente. Para componentes compilados, as descrições são fornecidas pelo [arquivo de sintaxe](../Extensions/develop-components.md#code-completion-for-compiled-components).

:::

#### Avisos sobre comentários

Quando uma função de classe ou construtor de classe tem um bloco de comentário acima de sua declaração, o compilador o verifica e reporta um aviso:

- para cada parâmetro da assinatura que não está documentado por uma linha `$nome:` ou `{$nome}:` (parâmetros variádicos não são verificados),
- quando as tags de comportamento `MCP:` se contradizem (`@readOnly`, `@destructive` e `@additive` usadas juntas). Nesse caso, as dicas correspondentes são omitidas dos [metadados da ferramenta MCP](../WebServer/mcp-server.md#mcp-tool-metadata).

Funções sem bloco de comentário não são verificadas. Por exemplo, a função abaixo gera um aviso para o parâmetro *$factor* e um aviso para as tags `@readOnly` e `@destructive`:

```4d
// Escala um valor por um fator
// MCP: @readOnly @destructive
// $value: valor a escalar
Function scale($value : Real; $factor : Real) : Real
	return $value*$factor
```



#### Exemplo

Você publica uma função de uma classe singleton compartilhada como ferramenta somente leitura:

```4d
// classe cs.OrderManager singleton compartilhada
shared singleton Class constructor()

// Retorna o valor total dos pedidos de um cliente em um ano
// $customerID: ID do cliente
// $year: ano dos pedidos
// MCP: @readOnly @idempotent
exposed mcp Function getYearTotal($customerID : Integer; $year : Integer) : Real
	return ds.Order.query("customer.ID = :1 and year = :2"; $customerID; $year).sum("amount")
```

Esta função é publicada como a ferramenta `OrderManager-getYearTotal`.

### Catálogo de ferramentas

O método `tools/list` retorna as ferramentas personalizadas para as quais a sessão tem permissão **execute**, e as [ferramentas CRUD integradas](#built-in-crud-tools) quando a sessão tem permissão de dados. As ferramentas são ordenadas por nome, em páginas de 100 ferramentas (`cursor` / `nextCursor`).

O catálogo segue o código sem reiniciar:

- em modo interpretado, é construído a partir das declarações do código em execução: uma função que você adicionar ou modificar aparece no próximo `tools/list`,
- em modo compilado, é lido do arquivo `Project/DerivedData/syntaxMCP.json` gerado pelo compilador (veja [Metadados da ferramenta MCP](../Concepts/classes.md#mcp-tool-metadata)). Se o projeto contiver um arquivo `Resources/syntaxMCP.json`, escrito após a compilação para adaptar os textos a um cliente, o 4D o aplica sobre o arquivo gerado: ele só pode substituir a descrição de uma ferramenta e as descrições de seus parâmetros, correspondendo por nome da ferramenta e nome do parâmetro. As ferramentas, schemas e anotações sempre vêm do arquivo gerado. Qualquer outra coisa em `Resources/syntaxMCP.json` (outras propriedades, ferramentas ou parâmetros desconhecidos) é ignorada, e o 4D registra isso no [log de diagnóstico](../Debugging/debugLogFiles.md#4ddiagnosticlogtxt) ao carregar o arquivo.

Cada página contém uma propriedade `cacheScope: "private"` e uma propriedade `ttlMs` (`0` em modo interpretado, `300000` em modo compilado) que informa ao cliente por quanto tempo pode manter o catálogo.

Cada ferramenta é descrita da seguinte forma:

- **name**: `ClassName-functionName`, ou o nome da função para função da classe DataStore. O nome deve corresponder a `^[A-Za-z0-9_-]{1,64}$` e não pode ser o nome de outra ferramenta, incluindo uma ferramenta CRUD integrada. Caso contrário, a função não é publicada e o 4D registra uma mensagem.
- **description**: as linhas de descrição `MCP:` do bloco de comentário, ou suas linhas de descrição.
- **inputSchema**: um objeto com uma propriedade por parâmetro, nomeada sem o `$`, com os tipos convertidos para JSON Schema conforme descrito em [Metadados da ferramenta MCP](#mcp-tool-metadata), e `"additionalProperties": false`:
  - todo parâmetro é obrigatório, exceto os documentados com `{$nome}`,
  - parâmetros variádicos tipados (`... : Type`) são um array opcional `args` (uma função que declara tanto `$args` quanto parâmetros variádicos não é publicada),
  - uma função de classe Entity recebe uma propriedade obrigatória `key` (string ou inteiro): a chave primária da entidade na qual a função é chamada. Sua descrição informa o tipo da chave primária. Uma função de classe Entity que declara um parâmetro `$key` não é publicada,
  - uma função com parâmetro `Pointer` não é publicada (em modo interpretado, o 4D registra no log de diagnóstico; em modo compilado, o compilador reporta um aviso).
- **outputSchema**, derivado do tipo de retorno:

|Tipo de retorno|outputSchema|
|---|---|
|`cs.<DataClass>Entity`|Schema da entidade, com os atributos que a sessão pode ler|
|`cs.<DataClass>Selection`|`{entities, total, truncated}`|
|Classe de usuário|Propriedades declaradas com a palavra-chave `property`|
|Text, Boolean, Integer, Real, Date, Time, Collection|O schema do tipo, envolto em uma propriedade `result`: `{"type": "object", "properties": {"result": <schema do tipo>}}`|
|Object (sem tipo), Variant, sem retorno|Sem output schema|

Valores de retorno Blob, `4D.Blob` e Picture são retornados como URLs de download (veja abaixo).

- **annotations**: as dicas das [tags de comportamento](#mcp-tool-metadata). `openWorldHint` é `false` a menos que a função use `@openWorld`. Dicas contraditórias são omitidas. Anotações são dicas para o cliente: não protegem nada (veja [Pedindo confirmação ao usuário](#asking-the-user-for-confirmation)).

### Metadados da ferramenta MCP

Os [blocos de comentário das declarações `exposed MCP Function`](#describing-the-tools) também descrevem essas funções como ferramentas MCP. Quando o projeto é compilado, o 4D gera o arquivo `Project/DerivedData/syntaxMCP.json`, que contém os metadados dessas ferramentas em um array `toolList`.

Apenas funções das seguintes classes são listadas:

- a classe DataStore,
- classes DataClass e Entity,
- classes singleton.

Funções de classes EntitySelection e de outras classes, assim como funções não declaradas `exposed MCP Function`, não são listadas, mesmo que seu bloco de comentário contenha linhas `MCP:`.

:::note

Se existir um arquivo `Resources/syntaxMCP.json` no projeto, ele é usado em vez do arquivo gerado. O compilador nunca o sobrescreve. Veja [pasta `Resources`](../Project/architecture.md#resources).

:::

O servidor MCP do 4D constrói seu catálogo de ferramentas a partir dos mesmos blocos de comentário e das mesmas conversões de tipo, usando o código em execução: em modo interpretado, uma função que você adicionar ou modificar é publicada no próximo `tools/list`, sem reiniciar. O catálogo também adiciona os elementos necessários para chamar as ferramentas, como um argumento `key` para funções de classe Entity e `"additionalProperties": false` em `inputSchema` (veja [Catálogo de ferramentas](#tool-catalog)). As seguintes funções não são publicadas, e o 4D registra uma mensagem:

- uma função cujo nome de ferramenta tem mais de 64 caracteres, contém caracteres diferentes de letras, dígitos, `_` e `-`, ou é o nome de outra ferramenta (incluindo uma ferramenta CRUD integrada),
- uma função de classe Entity que declara um parâmetro `$key`,
- uma função que declara tanto um parâmetro `$args` quanto parâmetros variádicos.

Uma função sem descrição é publicada, e o 4D registra um aviso.

Cada ferramenta do array `toolList` é um objeto com as seguintes propriedades:

|Propriedade|Descrição|
|---|---|
|`name`|Nome da ferramenta: nome da função para função da classe DataStore, `ClassName-functionName` para outras classes|
|`description`|Texto das linhas de descrição `MCP:`, ou das linhas de descrição se não houver `MCP:`. Omitido se não houver descrição|
|`inputSchema`|`{"type": "object", "properties": {...}, "required": [...]}`: uma propriedade por parâmetro da assinatura, nomeada sem o `$`, com o comentário do parâmetro como `description`|
|`outputSchema`|Schema do tipo de retorno. Omitido se a função não retorna nada ou retorna Variant|
|`annotations`|Dicas de comportamento derivadas das tags de comportamento `MCP:`|

Em `inputSchema`:

- todo parâmetro é listado em `required`, exceto os documentados com linha `{$nome}:`. `required` é omitido se estiver vazio.
- parâmetros variádicos tipados (`... : Type`) são representados por uma propriedade opcional `args` do tipo `array`, cujos `items` têm o schema de *Type*. A linha `...:` é sua descrição.

Tipos de parâmetro e retorno são convertidos para JSON Schema conforme abaixo:

|Tipo 4D|JSON Schema|
|---|---|
|Text|`{"type": "string"}`|
|Integer|`{"type": "integer"}`|
|Real|`{"type": "number"}`|
|Boolean|`{"type": "boolean"}`|
|Date|`{"type": "string", "format": "date"}`|
|Time|`{"type": "integer", "description": "duration in seconds"}`|
|Object, instância de classe|`{"type": "object"}`|
|Collection|`{"type": "array"}`|
|Blob, 4D.Blob, Picture|`{"type": "string", "contentEncoding": "base64"}`|
|Variant, ou sem tipo|`{}`|

As tags de comportamento suportadas são convertidas para anotações conforme abaixo:

|Tag|Anotação|
|---|---|
|`@readOnly`|`"readOnlyHint": true`|
|`@destructive`|`"destructiveHint": true`|
|`@additive`|`"destructiveHint": false`|
|`@idempotent`|`"idempotentHint": true`|
|`@openWorld`|`"openWorldHint": true`|

`openWorldHint` está sempre presente: é `false` se `@openWorld` não for usada. Outras dicas são omitidas quando sua tag não é usada. `@readOnly`, `@destructive` e `@additive` se contradizem: se uma função usar duas ou mais delas, o compilador reporta um aviso e as dicas correspondentes são omitidas. Tags desconhecidas são ignoradas.

#### Exemplo

Você documenta as ferramentas MCP de uma classe singleton `DateTime`:

```4d
// Classe: DateTime

singleton Class constructor()
	This.date:=Current date

// Adiciona um número de dias à data
// MCP: Adiciona dias ao date-time
// $days: número de dias a adicionar (negativo para subtrair)
exposed MCP Function addDays($days : Integer) : Date
	This.date:=Add to date(This.date; 0; 0; $days)
	return This.date

// Adiciona zero ou mais deslocamentos de dia à data e retorna a data atualizada
// MCP: Adiciona deslocamentos de dia ao date-time
// MCP: @idempotent
// ...: deslocamentos de dia a adicionar (negativo para subtrair)
exposed MCP Function addDayOffsets(... : Integer) : Date
	var $offsetIndex; $totalDays : Integer
	For ($offsetIndex; 1; Count parameters)
		$totalDays+=${$offsetIndex}
	End for
	This.date:=Add to date(This.date; 0; 0; $totalDays)
	return This.date
```

Após a compilação, `Project/DerivedData/syntaxMCP.json` contém:

```json
{
  "toolList": [
    {
      "name": "DateTime-addDays",
      "description": "Adiciona dias ao date-time",
      "inputSchema": {
        "type": "object",
        "properties": {
          "days": { "type": "integer", "description": "número de dias a adicionar (negativo para subtrair)" }
        },
        "required": ["days"]
      },
      "outputSchema": { "type": "string", "format": "date" },
      "annotations": { "openWorldHint": false }
    },
    {
      "name": "DateTime-addDayOffsets",
      "description": "Adiciona deslocamentos de dia ao date-time",
      "inputSchema": {
        "type": "object",
        "properties": {
          "args": {
            "type": "array",
            "items": { "type": "integer" },
            "description": "deslocamentos de dia a adicionar (negativo para subtrair)"
          }
        }
      },
      "outputSchema": { "type": "string", "format": "date" },
      "annotations": { "idempotentHint": true, "openWorldHint": false }
    }
  ]
}
```

#### Exemplo

Você deseja ler os nomes das ferramentas MCP geradas na última compilação:

```4d
var $file : 4D.File:=File("/PACKAGE/Project/DerivedData/syntaxMCP.json")
var $metadata : Object:=JSON Parse($file.getText())
var $names : Collection:=$metadata.toolList.extract("name")
// $names é ["DateTime-addDays";"DateTime-addDayOffsets"]
```

#### Exemplo

Você documenta uma ferramenta com linhas `param:` e uma linha de tag de comportamento sem o prefixo `MCP:`:

```4d
// Classe: Stock

shared singleton Class constructor()

// Retorna a quantidade em estoque de um produto
// param: $reference referência do produto
// param: {$warehouse} código do depósito (todos os depósitos se omitido)
// @readOnly
exposed MCP Function getQuantity($reference : Text; $warehouse : Text) : Integer
	If ($warehouse="")
		return ds.Stock.query("reference = :1"; $reference).sum("quantity")
	End if
	return ds.Stock.query("reference = :1 and warehouse = :2"; $reference; $warehouse).sum("quantity")
```

A ferramenta `Stock-getQuantity` tem uma propriedade obrigatória `reference`, uma propriedade opcional `warehouse` e a anotação `"readOnlyHint": true`.


### Chamando uma ferramenta personalizada

Quando um cliente chama uma ferramenta personalizada (`tools/call`), o 4D verifica a permissão **execute**, depois os argumentos:

- Um argumento ausente, desconhecido ou cujo tipo não corresponde ao schema gera um resultado `isError` "Invalid parameters", e a função não é executada.
- Os argumentos são convertidos: uma string `YYYY-MM-DD` para Date, um número de segundos para Time, uma string base64 para `4D.Blob` ou Picture, e um número para Real para parâmetro Variant.
- Os argumentos são passados na ordem dos parâmetros, até o último fornecido: parâmetros finais omitidos não são passados ([`Count parameters`](../commands/count-parameters) retorna o número de argumentos fornecidos), e um parâmetro omitido seguido de um fornecido recebe o valor padrão de seu tipo. Os itens de `args` são passados após os parâmetros declarados.
- Para uma função de classe Entity, `This` é a entidade de `key`, carregada com permissão **read** do dataclass e seu filtro de restrição. Uma chave desconhecida, filtrada ou invisível gera o erro "Entity not found".

A função roda na sessão MCP, com as mesmas permissões de uma chamada REST. O valor retornado é convertido em resultado de ferramenta:

|Valor retornado|Resultado|
|---|---|
|Text, number, Boolean, Date, Time|`structuredContent` com `{result: <valor>}`, e um conteúdo texto (datas como `YYYY-MM-DD`, tempos em segundos). Um valor escalar retornado por função cujo tipo de retorno é Variant gera apenas o conteúdo texto|
|Object|`structuredContent` com o objeto, e sua representação em texto|
|Collection|`structuredContent` com `{result: [...]}`, e sua representação em texto|
|Entity|A entidade, serializada como pelas [ferramentas CRUD](#entities-in-results) com os atributos que a sessão pode ler (`null` se a sessão não puder ler)|
|Entity selection|`{entities, total, truncated}`: no máximo [`mcp.maxResults`](../API/WebServerClass.md#mcp) entidades|
|Blob, Picture|Uma URL de download, válida por 10 minutos (veja [Atributos binários](#binary-attributes))|

Em objetos e coleções retornados, datas estão em formato ISO, valores binários são URLs de download, entidades são `{__KEY, __DATACLASS}` e entity selections são `{__DATACLASS, __COUNT}`.

Se a função lançar um erro (com [`throw`](../commands/throw) ou erro de tempo de execução) ou chamar [`MCP.error()`](../API/MCPContextClass.md#error), a chamada termina com um resultado `isError` contendo a mensagem de erro. O erro termina com essa chamada: nunca chega a uma requisição posterior, desta sessão ou de outra. Se o cliente desconectar durante a chamada, a função roda até o fim e seu resultado é descartado.

:::caution

Dados lidos com permissão **promote** e retornados em um objeto ou coleção construídos pelo seu código são retornados como estão, independentemente dos privilégios da sessão.

:::

#### Exemplo

Você chama a ferramenta `OrderManager-getYearTotal` com:

```json
{"name": "OrderManager-getYearTotal", "arguments": {"customerID": 120, "year": 2026}}
```

O resultado contém o valor em `structuredContent`, por exemplo `{"result": 15240.5}`, e como conteúdo texto (`"15240.5"`). Se a função lançar um erro, o cliente o recebe como erro da ferramenta:

```4d
exposed mcp Function getYearTotal($customerID : Integer; $year : Integer) : Real
	If ($year>Year of(Current date))
		throw(1; "O ano não pode estar no futuro")
	End if
	return ds.Order.query("customer.ID = :1 and year = :2"; $customerID; $year).sum("amount")
```

## Pedindo confirmação ao usuário

Uma ferramenta personalizada pode pedir ao usuário para confirmar uma ação ou fornecer valores antes de executá-la. O comando [`MCP`](../commands/mcp) retorna o objeto [`4D.MCPContext`](../API/MCPContextClass.md) da chamada atual:

1. A função chama [`MCP.requireInput()`](../API/MCPContextClass.md#requireinput) com os campos a exibir, e retorna. O 4D responde à chamada com `resultType: "input_required"`, um formulário (`elicitation/create`) e um `requestState` assinado pelo 4D.
2. O cliente exibe o formulário ao usuário, depois chama a ferramenta novamente com os mesmos argumentos, as respostas (`inputResponses`) e o `requestState`.
3. O 4D verifica o `requestState` e executa a função novamente **do início**. [`MCP.hasInput()`](../API/MCPContextClass.md#hasinput) agora retorna **True** e [`MCP.input`](../API/MCPContextClass.md#input) contém as respostas.

Como a função roda novamente do início, o código escrito antes da chamada a `MCP.requireInput()` roda duas vezes: ele não deve ter efeitos colaterais (sem gravação, sem envio de mensagem).

Cada campo passado para `MCP.requireInput()` tem um tipo JSON Schema: `"string"`, `"number"`, `"integer"` ou `"boolean"`. Uma escolha é um campo `"string"` com uma lista `enum` de valores. Qualquer outro tipo gera um erro nomeando o campo, e a chamada termina com resultado `isError`.

O `requestState` é assinado pelo 4D para o token (ou grant OAuth), a ferramenta, os argumentos convertidos, os campos solicitados e o valor *bind* passado para `requireInput()`. Ele é válido por 10 minutos, e até o servidor MCP ser desabilitado. Se estiver ausente, modificado, expirado ou se os argumentos mudaram, as respostas são ignoradas e a entrada é solicitada novamente. A confirmação é, portanto, garantida pelo 4D, independentemente do cliente.

Um `requestState` é usado uma vez: quando o 4D aceita uma chamada confirmada e executa a função, qualquer chamada posterior com o mesmo `requestState` conta como não confirmada e a entrada é solicitada novamente, qualquer que seja o resultado da primeira execução. Assim, uma resposta do usuário nunca executa a ação duas vezes.

Os argumentos fazem parte da assinatura, então a ferramenta integrada `dropEntity` sempre exclui a entidade cujo `key` foi confirmado. Quando uma ferramenta age sobre várias entidades, passe em *bind* as entidades mostradas ao usuário (suas chaves, ou um resumo delas), não apenas seu número: uma contagem só detecta mudança de tamanho, não outras entidades ocupando o lugar das que o usuário viu. Depois compare [`MCP.bound`](../API/MCPContextClass.md#bound) com as entidades atuais, e peça novamente se forem diferentes. Uma ferramenta que não deve rodar duas vezes (uma fatura, um pagamento, uma mensagem) também verifica uma chave de negócio.

- Se o cliente não suporta formulários (sem capacidade `elicitation`), `MCP.requireInput()` não pede nada e a chamada retorna o resultado `isError` "This action requires a confirmation your client cannot display": a ação nunca é executada.
- Não peça segredos como senhas com `MCP.requireInput()`.
- O valor *bind* é assinado, não criptografado: o cliente pode lê-lo.

#### Exemplo

Você quer que o usuário confirme o cancelamento de uma fatura:

```4d
// classe cs.InvoiceEntity
Class extends Entity

// Cancela a fatura
exposed mcp Function cancel() : Text
	If (Not(MCP.hasInput("confirm")))
		MCP.requireInput({confirm: {type: "boolean"; prompt: "Cancelar fatura "+String(This.number)+"?"}}; This.getStamp())
		return
	End if
	If (MCP.bound#This.getStamp()) // a fatura foi modificada após o pedido de confirmação
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

As ferramentas CRUD integradas permitem que um cliente leia e grave os dados do datastore sem código personalizado. Elas são listadas quando a sessão tem pelo menos uma permissão de dados (**read**, **create**, **update** ou **drop**) em um dataclass, e cada chamada requer a permissão correspondente:

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
- `attributes` é uma coleção de caminhos de atributos a retornar (caminhos pontilhados para atributos relacionados, por exemplo `["lastName"; "employer.name"]`). Por padrão, todos os atributos que a sessão pode ler são retornados. Um atributo picture ou blob não pode ser nomeado em `attributes` ("Invalid parameters"): leia-o com `getBinaryAttribute`.
- `limit` é o número máximo de entidades a retornar: 20 por padrão, entre 1 e [`mcp.maxResults`](../API/WebServerClass.md#mcp). `skip` é o número de entidades a pular (0 por padrão): para ler a próxima página, passe o valor `nextSkip` da página anterior. `nextSkip` é `null` na última página.
- `orderBy` contém caminhos de atributos seguidos de `asc` ou `desc` (por exemplo, `"lastName asc, salary desc"`). As entidades são ordenadas por `orderBy`, depois pela chave primária, para que páginas não pulem nem repitam entidades.
- Em `aggregateEntities`, `average` é `sum/countNotNull`. `sum` e `average` são `null` para atributos não numéricos.
- Em `data`, atributos são dados por nome. Datas são strings `YYYY-MM-DD` e tempos são números de segundos. Uma relação N-para-1 é definida com a chave primária da entidade relacionada: `{"employer": {"__KEY": "12"}}` (um `__DATACLASS` opcional deve corresponder ao dataclass relacionado, e a entidade relacionada deve ser legível). Atributos binários (use `setBinaryAttribute`), relações 1-para-N, atributos somente leitura, `__KEY` e `__STAMP` são recusados.
- `addEntity` sempre cria uma nova entidade.
- Em `updateEntity` e `dropEntity`, passe em `stamp` o valor `__STAMP` que você leu: a operação é recusada se a entidade foi modificada desde então.
- `dropEntity` sempre pede ao usuário para confirmar a exclusão (um campo booleano `confirm`, veja [Pedindo confirmação ao usuário](#asking-the-user-for-confirmation)). A entidade só é excluída quando a confirmação vem das respostas do usuário, nunca dos argumentos.

Você pode restringir as ferramentas disponíveis com a configuração [`mcp.crudTools`](../API/WebServerClass.md#mcp) (todas as nove ferramentas por padrão). Uma ferramenta que não está nessa coleção não é listada e recebe o erro "Unknown tool". Um nome desconhecido nessa coleção é ignorado, e o 4D registra uma mensagem.

As ferramentas CRUD usam as mesmas permissões, filtros de restrição e permissões de atributo que requisições REST. Um dataclass ou atributo que a sessão não pode ver recebe o mesmo erro que um que não existe, enquanto um visível com operação proibida recebe o erro "Insufficient privileges for \<operation\> on \<dataClass\>".

#### Exemplo

Você só quer publicar as ferramentas de leitura:

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
- os atributos que a sessão pode ler. Uma relação N-para-1 é retornada como `{__KEY, __DATACLASS}`, ou como objeto com os atributos solicitados quando projetada com `attributes`. Relações 1-para-N não são retornadas. Datas são strings `YYYY-MM-DD` e tempos são números de segundos.
- para atributo picture ou blob, apenas um marcador indicando que há valor: `{"__BINARY": "picture"}` ou `{"__BINARY": "blob"}`, ou `null` quando o atributo está vazio. Seu conteúdo é lido com [`getBinaryAttribute`](#binary-attributes).
- para vetor (um `4D.Vector` armazenado em atributo objeto), o marcador `{"__VECTOR": <dimension>}`, nunca seus valores. Comparações vetoriais em `filter` funcionam como descrito em [Filtros](#filters).

Entidades retornadas por [ferramentas personalizadas](#calling-a-custom-tool) são serializadas da mesma forma.

As ferramentas retornam seu resultado em `structuredContent`, ou um resultado `isError` com uma das mensagens abaixo:

|Mensagem|Caso|
|---|---|
|Invalid parameters: ...|Argumento ausente, desconhecido ou inválido (incluindo atributo picture ou blob em `attributes`)|
|Formulas are not allowed in filter|`filter` contém fórmula|
|Entity not found|Chave desconhecida, entidade filtrada por restrição ou dataclass invisível|
|Insufficient privileges for \<operation\> on \<dataClass\>|A operação não é permitida em dataclass visível|
|Entity was modified since it was read|O `stamp` não corresponde (o stamp atual é retornado)|
|Entity is locked, retry later|A entidade está bloqueada por outro processo|

### Atributos binários

Conteúdos binários (imagens e blobs) não passam pelo contexto do modelo:

- `getBinaryAttribute` retorna uma imagem de até 1 MB como conteúdo `image`: como está para PNG, JPEG ou GIF, convertida para JPEG para imagem em outro formato que o 4D possa ler (TIFF, HEIC, etc.). Para qualquer outro valor (imagem maior, blob), retorna uma URL de download `{url, method, expiresAt}`: uma requisição `GET` nessa URL retorna o valor com seu MIME type.
- `setBinaryAttribute` com `data` base64 de até 64 KB (após decodificar) armazena o valor diretamente (`mimeType` é obrigatório para imagem). Sem `data`, retorna uma URL de upload: uma requisição `PUT` nessa URL com o valor bruto no corpo e seu `Content-Type` armazena o valor. `data` inline maior recebe erro "Invalid parameters". Uma imagem em formato que o 4D não possa ler é recusada: `data` inline recebe erro "Invalid parameters", e um `PUT` na URL de upload recebe status 415 sem corpo.

URLs binárias têm o formato `<public base URL>/mcp/binary/<token>`. Elas são assinadas pelo 4D, válidas por 10 minutos, e não contêm nenhum id de sessão: a URL é a credencial, e permanece válida até expirar, mesmo que o token da sessão seja revogado. Uma URL de upload pode ser usada apenas uma vez. Uma URL inválida, expirada ou já usada recebe status 403 sem corpo. URLs binárias deixam de ser válidas quando o servidor MCP é desabilitado. As regras de [conexão segura](#secure-connections) se aplicam a essas URLs.

## Quotas

Requisições MCP são requisições do servidor web: as [quotas do servidor web](quotas.md) se aplicam a elas, e requisições acima da quota recebem status 429 antes de qualquer código rodar. Cada sessão MCP conta nas quotas de sessão. Sessões MCP não podem ter quotas próprias: as quotas de sessão se aplicam a toda sessão web igualmente.

#### Exemplo

Você limita cada sessão MCP (e cada sessão web) a 60 requisições por minuto:

```4d
var $webServer : 4D.WebServer:=WEB Server
$webServer.quotas.nbRequestsPerMinPerSession:=60
```

## Claude Desktop bundle

O Claude Desktop executa servidores MCP locais via stdio e não fala a revisão `2026-07-28`. Para permitir que ele acesse um servidor 4D na rede local sem expor esse servidor na internet, o 4D fornece um **MCP Bundle** de referência (arquivo `.mcpb`). O bundle é um pequeno adaptador Node.js executado pelo Claude Desktop:

- ele responde `initialize` e `ping` por conta própria, e repassa as demais requisições para a URL `/mcp` do 4D,
- autentica-se com um Token Granular quando um é informado, caso contrário com o [modo OAuth](#oauth-21-mode) (registro dinâmico de cliente e login no navegador),
- exibe os formulários de [pedidos de confirmação](#asking-the-user-for-confirmation), como a confirmação de `dropEntity`, em uma página de navegador em `127.0.0.1`, já que o Claude Desktop não os exibe,
- quando o Claude Desktop cancela uma requisição, ele cancela a requisição correspondente ao 4D.

Para instalar, abra o arquivo `.mcpb` (ou arraste-o em **Configurações > Extensões** do Claude Desktop), depois preencha o formulário de instalação:

|Campo|Descrição|
|---|---|
|URL do servidor MCP 4D|A URL `/mcp` do servidor web 4D, por exemplo `https://meuservidor.local/mcp`|
|Token Granular|Um token gerado pela aplicação com [`ds.generateFineGrainedToken()`](../API/DataStoreClass.md#generatefinegrainedtoken). O Claude Desktop o armazena no keychain do sistema. Deixe em branco para fazer login com OAuth|
|Certificado CA|Um certificado PEM a ser confiado, para servidor com certificado autoassinado ou emitido por autoridade privada|
|Permitir conexão insegura|**Apenas para testes.** Permite URLs `http://` para outra máquina e desabilita a verificação de certificado|

O bundle se recusa a iniciar, e registra o motivo, quando a URL é uma URL `http://` para outra máquina e **Permitir conexão insegura** não está marcada, ou quando nenhum token é informado e o servidor não oferece login OAuth com registro dinâmico de cliente.

No modo OAuth, o cliente e seus tokens são armazenados na pasta `.4d-mcp-bundle` da pasta home do usuário: exclua sua subpasta para sair.

Editores de software podem rebrandear o bundle (nome, ícone, URL padrão do servidor em seu arquivo `manifest.json`) e reempacotá-lo para seus clientes com a ferramenta `mcpb`, conforme descrito em seu arquivo README.

## Veja também

- [`WebServer.mcp`](../API/WebServerClass.md#mcp)
- [`exposed mcp Function`](../ORDA/ordaClasses.md#exposed-mcp-function)
- Comando [`MCP`](../commands/mcp)
- Classe [`4D.MCPContext`](../API/MCPContextClass.md)
- [Papéis e privilégios](../ORDA/privileges.md)
