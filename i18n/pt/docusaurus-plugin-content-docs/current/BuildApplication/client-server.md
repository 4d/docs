---
id: client-server
title: Cliente/Servidor
sidebar_label: Cliente/Servidor
sidebar_position: 3
description: "Chaves XML BuildApplication do nó CS, relativas às aplicações cliente/servidor."
keywords: ["BuildApplication", "XML key", "CS", "client/server"]
---

Essas chaves definem opções para as [aplicações cliente/servidor](../Desktop/building.md#clientserver-page). Elas estão localizadas sob o nó `<CS>`.

```xml
<Preferences4D>
  <BuildApp>
    <CS>
      <BuildServerApplication>True</BuildServerApplication>
      <BuildCSUpgradeable>True</BuildCSUpgradeable>
      <IPAddress>myserver.example.com</IPAddress>
      <CurrentVers>3</CurrentVers>
    </CS>
  </BuildApp>
</Preferences4D>
```

## Resumo

| Chave | Valores | Descrição |
|---|---|---|
| [BuildServerApplication](#buildserverapplication) | True / False | Gerar uma aplicação cliente/servidor |
| [BuildCSUpgradeable](#buildcsupgradeable) | True / False | Gerar as aplicações de atualização dos clientes |
| [IPAddress](#ipaddress) | Endereço IP ou nome de host | Endereço do servidor usado pelos clientes |
| [PortNumber](#portnumber) | Número de porta | Porta TCP do servidor usada pelos clientes |
| [ServerSelectionAllowed](#serverselectionallowed) | True / False | Permitir a caixa de diálogo de seleção do servidor quando a conexão falha |
| [HardLink](#hardlink) | Texto (31 caracteres no máx.) | Assinatura das aplicações cliente e servidor |
| [CertificateAuthoritiesCertificates](#certificateauthoritiescertificates) | Caminho | Lista das autoridades de certificação confiáveis, usada pelos clientes para validar o certificado TLS do servidor |
| [CertificateDomainName](#certificatedomainname) | Texto | Nomes de domínio confiáveis do certificado TLS do servidor |
| [CurrentVers](#currentvers) | Número | Versão atual da aplicação gerada |
| [RangeVersMin](#rangeversmin) | Número | Versão mínima de cliente autorizada a se conectar |
| [RangeVersMax](#rangeversmax) | Número | Versão máxima de cliente autorizada a se conectar |
| [LastDataPathLookup](#lastdatapathlookup) | InDbStruct / ByAppName / ByAppPath | Modo de ligação de dados do servidor |
| [MacCompiledDatabaseToWin](#maccompileddatabasetowin) | Caminho | Estrutura compilada macOS para clientes Silicon |
| [MacCompiledDatabaseToWinIncludeIt](#maccompileddatabasetowinincludeit) | True / False | Incluir a estrutura compilada macOS em um servidor Windows |
| [ServerEmbedsProjectDirectoryFile](#serverembedsprojectdirectoryfile) | True / False | Copiar o arquivo directory.json do projeto para o servidor |
| [ServerDataCollection](#serverdatacollection) | True / False | Ativar a coleta de dados no servidor |
| [ServerStructureFolderName](#serverstructurefoldername) | Nome de pasta | Nome da pasta de cache do servidor |
| [ClientServerSystemFolderName](#clientserversystemfoldername) | Nome de pasta | Nome da pasta de cache cliente |
| [ClientUserPreferencesFolderByPath](#clientuserpreferencesfolderbypath) | True / False | Pasta de preferências do usuário separada por caminho de cliente |
| [ClientWinSingleInstance](#clientwinsingleinstance) | True / False | Permitir uma única instância de cliente no Windows |
| [ShareLocalResourcesOnWindowsClient](#sharelocalresourcesonwindowsclient) | True / False | Armazenar os recursos locais dos clientes em uma pasta compartilhada no Windows |
| [HideAdministrationMenuItem](#hideadministrationmenuitem) | True / False | Ocultar a janela de Administração do servidor |
| [HideDataExplorerMenuItem](#hidedataexplorermenuitem) | True / False | Ocultar o item de menu Data Explorer do servidor |
| [HideRuntimeExplorerMenuItem](#hideruntimeexplorermenuitem) | True / False | Ocultar o item de menu Runtime Explorer do servidor |

## Geração

### BuildServerApplication

**Valores**: True / False (padrão)

Se True, uma aplicação cliente/servidor é gerada. O caminho do 4D Server deve ser definido com a chave [ServerWinFolder](./source-files.md#serverwinfolder) ou [ServerMacFolder](./source-files.md#servermacfolder).

### BuildCSUpgradeable

**Valores**: True / False (padrão)

Se True, as aplicações de atualização dos clientes, prontas para download, são geradas para macOS e Windows.

## Conexão

### IPAddress

**Valores**: endereço IP ou nome de host

Endereço do servidor. Essa chave não é obrigatória, já que o 4D dispõe de mecanismos de rede internos, mas é necessária em alguns casos (WAN, números de porta específicos, etc.). Consulte [Gestão da(s) ligação(ões) cliente](../Desktop/merged-client-connections.md).

O endereço é armazenado no arquivo "EnginedServer.4Dlink", na pasta Database da aplicação cliente.

### PortNumber

**Valores**: número de porta (padrão 19813)

Porta TCP do servidor. Essa chave só é necessária quando a porta do servidor foi modificada. A porta é adicionada ao endereço armazenado no arquivo "EnginedServer.4Dlink" da aplicação cliente.

:::caution

Essa chave modifica apenas o número de porta do lado do cliente. Do lado do servidor, é usado o número de porta do banco de dados 4D que gera a aplicação. Para gerar um servidor com uma porta personalizada, use [`SET DATABASE PARAMETER`](../commands/set-database-parameter) antes de chamar [`BUILD APPLICATION`](../commands/build-application):

```4d
tempport:=Get database parameter(Client Server Port ID)
SET DATABASE PARAMETER(Client Server Port ID;21000)
BUILD APPLICATION("")
SET DATABASE PARAMETER(Client Server Port ID;tempport)
```

:::

### ServerSelectionAllowed

**Valores**: True / False

Configura a caixa de diálogo de erro exibida quando os mecanismos de conexão automática falham:

- **True**: a caixa de diálogo dá acesso à janela de seleção do servidor.
- **False**: a caixa de diálogo não dá acesso à janela de seleção do servidor.

Pressionar **Alt** (Windows) ou **Option** (macOS) na inicialização sempre exibe a caixa de diálogo de seleção do servidor. Consulte [Disponibilidade da caixa de diálogo de seleção do servidor em caso de erro](../Desktop/merged-client-connections.md#availability-of-the-server-selection-dialog-box-in-case-of-error).

:::note

Em bancos de dados binários, essa chave requer a opção de compatibilidade **Usar a nova arquitetura para a implementação de aplicações**.

:::

### HardLink

**Valores**: texto (31 caracteres no máximo)

Assinatura das aplicações cliente e servidor.

### CertificateAuthoritiesCertificates

**Valores**: caminho

Caminho de um arquivo contendo a lista das autoridades de certificação (CA) confiáveis e o nome de domínio do certificado do servidor. Essa lista é copiada para a aplicação cliente e é usada para validar o certificado enviado pelo 4D Server na conexão.

Essa chave é útil quando você instala seu próprio certificado [TLS](../Admin/tls.md) em uma aplicação cliente/servidor:

1. Copie seus arquivos personalizados *key.pem* e *cert.pem* na pasta **Resources** da aplicação servidor gerada (ao lado do executável do servidor):
   - Windows: `Client Server executable/<ApplicationName> Server/Resources`
   - macOS: `Client Server executable/<ApplicationName> Server.app` (a pasta Resources fica no primeiro nível do pacote)
2. Adicione o certificado da sua autoridade de certificação (geralmente fornecido pela própria CA) a uma lista de CAs confiáveis em formato PEM, e passe o caminho dessa lista para a chave **CertificateAuthoritiesCertificates**.

   A lista é um arquivo de texto contendo um ou mais certificados, cada um opcionalmente precedido de um título. Por exemplo, com uma CA raiz e uma CA intermediária (o conteúdo dos certificados foi encurtado):

   ```text title="Lista de CAs confiáveis (PEM)"
   Root CA
   ===========================================
   -----BEGIN CERTIFICATE-----
   MIIDdTCCAl2gAwIBAgILBAAAAAABFUtaw5QwDQYJKoZIhvcNAQEFBQAwVzELMAkG
   ...
   -----END CERTIFICATE-----

   Server CA
   ===========================================
   -----BEGIN CERTIFICATE-----
   MIIEkjCCA3qgAwIBAgIEOGPe+DANBgkqhkiG9w0BAQUFADCBtDEUMBIGA1UEChML
   ...
   -----END CERTIFICATE-----
   ```

Para mais informações, consulte [este artigo do blog](https://blog.4d.com/encryption-authentication-certificate-authority-validation).

### CertificateDomainName

**Valores**: texto (lista de nomes de domínio separados por ponto e vírgula)

Lista dos nomes de domínio confiáveis para o certificado enviado pelo 4D Server na conexão. As aplicações cliente usam essa lista para verificar o nome de domínio do certificado, depois de validar sua autoridade de certificação com [CertificateAuthoritiesCertificates](#certificateauthoritiescertificates) (o nome de domínio não pode ser verificado sem uma validação prévia da CA).

## Versões

As versões de cliente autorizadas a se conectar são verificadas pelo servidor usando as chaves a seguir. Consulte [Versão atual](../Desktop/building.md#current-version).

### CurrentVers

**Valores**: número de versão

Número da versão atual da aplicação gerada. Se [RangeVersMin](#rangeversmin) e [RangeVersMax](#rangeversmax) não forem usadas, esse número é apenas informativo. Caso contrário, o servidor o lê para verificar se o cliente pertence ao intervalo autorizado.

### RangeVersMin

**Valores**: número de versão

Versão mínima do cliente (por exemplo 2). Os clientes anteriores são convidados a se atualizar. Usada com [RangeVersMax](#rangeversmax) e [CurrentVers](#currentvers).

### RangeVersMax

**Valores**: número de versão

Versão máxima do cliente (por exemplo 3). Os clientes posteriores são convidados a se atualizar. Usada com [RangeVersMin](#rangeversmin) e [CurrentVers](#currentvers).

## Servidor

### LastDataPathLookup

Define o [modo de ligação de dados](../Desktop/data-file-configuration.md#configuring-the-data-linking-mode) da aplicação servidor:

| Valor | Busca do caminho do arquivo de dados | Armazenamento do caminho do arquivo de dados |
|---|---|---|
| InDbStruct | Caminho armazenado no arquivo de estrutura | Dentro do arquivo de estrutura (comportamento legado) |
| ByAppName | Entrada mais recente em *LastDataPath.xml* | Preferências do usuário |
| ByAppPath | Entrada cujo *executablePath* corresponde ao caminho da aplicação | Preferências do usuário |

A mesma chave existe para aplicações usuário único: [RuntimeVL/LastDataPathLookup](./runtime-vl.md#lastdatapathlookup).

### MacCompiledDatabaseToWin

**Valores**: caminho

Caminho da pasta contendo a estrutura compilada no macOS para Silicon e Intel. Usada com [MacCompiledDatabaseToWinIncludeIt](#maccompileddatabasetowinincludeit) para [permitir a ligação de clientes Silicon Mac](../Desktop/building.md#allow-connection-of-silicon-mac-clients) a um servidor gerado no Windows.

### MacCompiledDatabaseToWinIncludeIt

**Valores**: True / False (padrão)

Ao gerar um servidor no Windows, se True, a estrutura compilada no macOS designada por [MacCompiledDatabaseToWin](#maccompileddatabasetowin) é incluída no servidor.

### ServerEmbedsProjectDirectoryFile

**Valores**: True / False (padrão)

Se True, o arquivo [directory.json](../Users/handling_users_groups.md#directoryjson-file) da pasta de configurações de usuário do projeto é copiado para a pasta de configurações de usuário do servidor gerado. Consulte [Incorporar o projeto Usuários e Grupos na aplicação servidor criada](../Desktop/building.md#embed-the-project-users-and-groups-in-built-server-application).

### ServerDataCollection

**Valores**: True (padrão) / False

Quando False, a [coleta automática de dados](../Admin/data-collect.md) é desativada no servidor gerado.

### ServerStructureFolderName

**Valores**: nome de pasta

Nome personalizado da pasta de cache do servidor, criada na pasta 4D ativa dentro da pasta da aplicação fusionada. Por padrão, o nome é o nome da aplicação fusionada. O nome deve respeitar as regras do sistema operacional para nomes de pastas. Consulte [Pasta de cache do servidor](../Desktop/building.md#server-cache-folder).

```xml
<CS>
  <ServerStructureFolderName>MyCache_v1</ServerStructureFolderName>
</CS>
```

### HideAdministrationMenuItem

**Valores**: True / False (padrão)

Se True, no servidor gerado:

- o item **Administração** é removido do menu **Janela**,
- a janela de Administração não é exibida na inicialização (ela ainda pode ser exibida usando [`OPEN ADMINISTRATION WINDOW`](../commands/open-administration-window)).

### HideDataExplorerMenuItem

**Valores**: True / False (padrão)

Se True, o item de menu **Data Explorer** é removido do servidor gerado.

### HideRuntimeExplorerMenuItem

**Valores**: True / False (padrão)

Se True, o item de menu **Runtime Explorer** e seu atalho (Cmd+Shift+F9 no macOS, Ctrl+Shift+F9 no Windows) são removidos do servidor gerado.

## Cliente

### ClientServerSystemFolderName

**Valores**: nome de pasta

Nome personalizado da pasta de cache local dos clientes fusionados (a pasta retornada por [`Get 4D folder`](../commands/get-4d-folder)`(4D Client database folder)`). Por padrão, o nome é construído a partir das informações da aplicação e do servidor. O nome deve respeitar as regras do sistema operacional para nomes de pastas. Consulte [Pasta de cache cliente](../Desktop/building.md#client-cache-folder).

### ClientUserPreferencesFolderByPath

**Valores**: True / False (padrão)

Útil quando vários clientes fusionados com o mesmo nome, na mesma máquina, se conectam a servidores diferentes. Se True, a pasta de preferências do usuário de cada cliente recebe como sufixo um hash de 3 dígitos do caminho completo do cliente, para que cada cliente tenha sua própria pasta:

- **macOS**: `/Users/{UserAccount}/Library/Application Support/{ApplicationName} Client_{hash}`
- **Windows**: `\Users\{UserAccount}\AppData\Roaming\{ApplicationName}_{hash}`

[`Folder`](../commands/folder)`(fk user preferences folder)` e [`Get 4D folder`](../commands/get-4d-folder)`(Active 4D Folder)` retornam então o caminho com o hash.

:::note

Em bancos de dados binários, essa chave requer a opção de compatibilidade **Usar a nova arquitetura para a implementação de aplicações**.

:::

### ClientWinSingleInstance

**Valores**: True (padrão) / False

No Windows, por padrão, apenas uma instância de uma aplicação cliente pode ser aberta na mesma sessão. Defina essa chave como False para permitir várias instâncias:

```xml
<CS>
  <ClientWinSingleInstance>False</ClientWinSingleInstance>
</CS>
```

### ShareLocalResourcesOnWindowsClient

**Valores**: True / False (padrão)

Define onde os clientes fusionados Windows armazenam os *recursos locais* baixados do servidor (arquivo .4dz, pasta Libraries, pasta Resources...):

- **False**: na pasta do usuário, `\Users\{UserAccount}\AppData\Local\{ApplicationName}\{ServerInformation}_ClientFolderSignature\`
- **True**: em uma pasta compartilhada, `\ProgramData\{ApplicationName}\{ServerInformation}_ClientFolderSignature\`

Uma pasta compartilhada economiza tempo de download e espaço em disco em ambientes Remote Desktop Services ou Citrix. Essa chave só é levada em conta em projetos, para clientes fusionados no Windows.

Quando essa chave é True, a atualização dos clientes requer acesso de leitura/escrita à pasta ProgramData. Um administrador deve:

1. Desconectar todos os usuários e proibir o acesso ao cliente fusionado.
2. Atualizar o servidor fusionado.
3. Na sessão de administrador do Remote Desktop Server, iniciar o cliente fusionado para que ele se atualize (automática ou manualmente) e baixe os recursos locais para a pasta compartilhada.
4. Restabelecer o acesso dos usuários ao cliente fusionado.

Isso evita escritas concorrentes nos recursos locais compartilhados e erros de direitos de acesso.
