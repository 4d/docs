---
id: web
title: Página da Web
---

Usando as guias na página **Web**, você pode configurar vários aspectos do servidor Web integrado de 4D (segurança, inicialização, conexões, serviços Web, etc.). Para mais informações sobre como o servidor Web 4D funciona, consulte [Servidor web](../WebServer/webServer.md). Para mais informações sobre os serviços web de 4D, consulte o capítulo [Publicação e uso de serviços web](https://doc.4d.com/4Dv19/4D/19/Publication-and-use-of-Web-Services.200-5416624.en.html).

## Configuração

### Informações de publicação

#### Iniciar o servidor Web no arranque

Indica se o servidor Web será iniciado ao iniciar a aplicação 4D. Essa opção está descrita na seção [Administração do servidor Web](../WebServer/webServerAdmin.md#starting-the-4d-web-server).

#### Ativar HTTP

Indica se o servidor web vai ou não aceitar conexões não seguras. Ver [Ativar HTTP](../WebServer/webServerConfig.md#enable-http).

#### Porta HTTP

Número da porta IP (TCP) de escuta para HTTP. Ver [Puerto HTTP](../WebServer/webServerConfig.md#http-port).

#### Endereço IP

Endereço IP em que o servidor web 4D vai receber solicitações HTTP (4D local e 4D Server). Ver [Dirección IP a escuchar](../WebServer/webServerConfig.md#ip-address-to-listen).

#### Ativar HTTPS

Indica se o servidor web vai ou não aceitar conexões seguras. Ver [Ativar HTTPS](../WebServer/webServerConfig.md#enable-https).

#### Porta HTTPS

Permite modificar o número da porta TCP/IP usada pelo servidor Web para as conexões HTTP seguras sobre TLS (protocolo HTTPS). Ver [Puerto HTTPS](../WebServer/webServerConfig.md#https-port).

#### Permitir o acesso ao banco de dados por meio de URLs 4DSYNC

_Nota de compatibilidade_: Essa opção está [obsoleta](../WebServer/webServerConfig.md#deprecated-settings). Para acesso ao banco de dados por meio de HTTP, agora é recomendado usar as funcionalidades de armazenamento remoto do ORDA e solicitações REST.

### Caminhos

#### Raiz HTML padrão

Define a localização padrão dos arquivos do site e indicar o nível hierárquico no disco acima do qual os arquivos não serão acessíveis. Ver [Pasta Raiz](../WebServer/webServerConfig.md#root-folder).

#### Página inicial predefinida

Designar uma página inicial padrão para o servidor Web. Ver [Página de inicio por defecto](../WebServer/webServerConfig.md#default-home-page).

## Opções (I)

### Cache

#### Usar o cache Web 4D

Ativar o cache da página Web. Consulte [Cache](../WebServer/webServerConfig.md#cache).

#### Tamanho da cache das Páginas

Define o tamanho da cache. Consulte [Cache](../WebServer/webServerConfig.md#cache).

#### Limpar cache

A qualquer momento, você pode limpar o cache das páginas e imagens que ele contém (se, por exemplo, você tiver modificado uma página estática e quiser recarregá-la no cache).
Para fazer isso, você só precisa clicar no botão **Limpar Cache**. A cache é então imediatamente limpa.

> Você também pode usar a URL especial [/4DCACHECLEAR](../WebServer/webServerAdmin.md#4dcacheclear).

### Processo Web

Essa área permite configurar como o servidor Web tratará as sessões de usuário e seus processos associados.

> A opção **Legacy sessions** só está disponível para compatibilidade em bancos de dados/projetos criados com versões do 4D anteriores ao 4D v18 R6.

#### Sessões escaláveis (sessões multi-processo)

Quando selecionat esta opção (recomendado), uma sessão de usuário é gerenciada através de um objeto **Session**. Veja a [página de sessões do usuário](../WebServer/sessions.md#enabling-sessions).

#### Sem sessões

Quando esta opção é selecionada, o servidor web não fornece nenhum suporte específico para [sessões de usuários](../WebServer/sessions.md). As solicitações sucessivas de clientes da Web são sempre independentes e nenhum contexto é mantido no servidor.

Neste modo, pode configurar parâmetros do servidor Web adicionais:

- [Máximo de Processos Web Concorrentes](#maximum-concurrent-web-processes)
- [Reutilização dos contextos temporários (4D em modo remoto)](#reuse-temporary-contexts)
- [Usar processos preemptivos](#use-preemptive-web-processes)

#### Sessões herdadas (sessões de processo único)

_Nota de compatibilidad:_ esta opción sólo está disponible en las bases/proyectos creados con una versión 4D anterior a 4D v18 R6.

Esta opção permite o gerenciamento de sessões de usuário legadas pelo servidor 4D HTTP. Esse mecanismo é descrito na seção [Web Sessions Management (Legacy)] (https://doc.4d.com/4Dv19/4D/19/Web-Sessions-Management-Legacy.300-5391806.en.html). Veja [Manter Sessão](../WebServer/webServerConfig.md#keep-session).

Quando selecionada, a opção [Reutilizar Contextos Temporários (4D em modo remoto)](#reuse-temporary-contexts) é marcada automaticamente (e bloqueada).

#### Processos Web em simultâneo máximo

Não disponível com [sessões escaláveis](../WebServer/sessions.md).

Limite estritamente superior de processos Web em simultâneo. Veja [Máximo Processos Web Concorrentes](../WebServer/webServerConfig.md#maximum-concurrent-web-processes).

#### Reutilização de contextos temporários

Não disponível com [sessões escaláveis](../WebServer/sessions.md).

Permite otimizar a operação do servidor Web 4D no modo remoto. Veja [Reutilizar contextos temporários em modo remoto)](../WebServer/webServerConfig.md#reuse-temporary-contexts-in-remote-mode).

#### Utilizar processos preemptivos

Não disponível com [sessões escalonáveis](../WebServer/sessions.md).

Permite processos web preemptivos nas suas aplicações compiladas. Quando **usar processos preventivos** for selecionado, A elegibilidade de seu código relacionado à Web (incluindo tags 4D e métodos de banco de dados web) para a execução preventiva será avaliada durante a compilação. Para mais informações, consulte [Utilizando processos Web preemptivos](../WebServer/preemptiveWeb.md).

> Essa opção não se aplica a sessões dimensionáveis, processos REST (modo compilado) e processos de serviço Web (servidor ou cliente).  Consulte [Ativação do modo preemptivo para o servidor Web](../WebServer/preemptiveWeb.md#enabling-the-preemptive-mode-for-the-web-server).

#### Tempo limite do processo inativo

Não disponível com [sessões escalonáveis](../WebServer/sessions.md).

Permite que você defina o tempo limite máximo antes de fechar os processos inativos da Web no servidor. Veja [Tempo Limite do Processo Inativo](../WebServer/webServerConfig.md#inactive-process-timeout).

### Senhas da Web

Defina o sistema de autenticação que você deseja aplicar ao seu servidor Web. São propostas três opções:

Personalizado (padrão)
Senhas com protocolo BASIC
Senhas com protocolo DIGEST

É recomendado usar a autenticação personalizada. Veja o capítulo [**Autenticação**](../WebServer/authentication.md) na documentação _Desenvolvimento Web_.

## Opções (II)

### Conversão texto

#### Enviar diretamente caracteres expandidos

Ver [Propiedades obsoletas](../WebServer/webServerConfig.md#deprecated-settings).

#### Standard Set

Defina o conjunto de caracteres a serem usados pelo servidor Web 4D. Ver [Conjunto de caracteres](../WebServer/webServerConfig.md#character-set).

### Ligações Keep-Alive

Ver [Propiedades obsoletas](../WebServer/webServerConfig.md#keep-alive-connections).

### Parâmetros CORS

#### Ativar CORS

Ativa o serviço Cross-origin resource sharing (CORS). Ver [Ativar CORS](../WebServer/webServerConfig.md#enable-cors-service).

#### Nomes de domínio/Métodos HTTP permitidos

Lista de hosts e métodos permitidos para o serviço CORS. Ver [Parámetros CORS](../WebServer/webServerConfig.md#cors-settings).

## Registo (tipo)

### Formato do histórico

Inicia ou interrompe o registro das solicitações recebidas pelo servidor da Web 4D no arquivo _logweb.txt_ e define seu formato. Ver [Registro de logs](../WebServer/webServerConfig.md#log-recording).

> A ativação e desativação do arquivo de log de solicitações também pode ser realizada pela programação usando o comando [WEB SET OPTION](https://doc.4d.com/4dv19R/help/command/en/page1210.html).

O menu de formato do histórico oferece as seguintes opções:

- **Sem arquivo de registro**: Quando esta opção for selecionada, o 4D não irá gerar um arquivo de registro de requisições.

- **CLF (Formato de Log Comum)**: Quando esta opção for selecionada, o log de pedidos é gerado no formato CLF Com o formato CLF, cada linha do arquivo representa uma solicitação, como:\
  host rfc931 usuário [DD/MMM/AAAA:HH:MM:SS] "solicitação" estado tamanho\
  Cada campo é separado por um espaço e cada linha termina com a sequência CR/LF (caractere 13, caractere 10).

  - host: endereço IP do cliente (ex. 192.100.100.10)
  - rfc931: informação não é gerada por 4D, é sempre - (um sinal de menos)
  - usuário: nome de usuário como ele está autenticado, ou então é - (um sinal menos). Se o nome de usuário contiver espaços, eles serão substituídos por _ (um sublinhado).
  - DD: dia, MMM: uma abreviação de 3 letras para o nome do mês (Jan, Feb,...), YYYY: ano, HH: hora, MM: minutos, SS: segundos

> A data e a hora são locais para o servidor.

- petição: petição enviada pelo cliente (por exemplo, GET /index.htm HTTP/1.0)
- estado: resposta dada pelo servidor.
- length: tamanho dos dados devolvidos (exceto o cabeçalho HTTP) ou 0.

> **Nota:** Por razões de desempenho, as operações são salvas em um buffer de memória em pacotes de 1Kb antes de serem escritas em disco. As operações também são gravadas no disco se nenhuma solicitação tiver sido enviada a cada 5 segundos.
> Os valores possíveis de estado são os seguintes:
> 200: OK
> 204: No contents
> 302: Redirection
> 304: Not modified
> 400: Incorrect request
> 401: Authentication required
> 404: Not found
> 500: Internal error
> O formato CLF não pode ser personalizado.

- **DLF (Combined Log Format)**: Quando esta opção é selecionada, o registro de solicitações é gerado no formato DLF. O formato DLF é semelhante ao formato CLF e usa exatamente a mesma estrutura. Simplesmente adiciona dois campos HTTP adicionais no final de cada solicitação: Referer e User-agent.

  - Referer: contém o URL da página que aponta para o documento solicitado.
  - User-agent: Contém o nome e a versão do navegador ou software do cliente que origina a solicitação.

> O formato DLF não pode ser personalizado.

- **ELF (Extended Log Format)**: Quando essa opção é selecionada, o registro da solicitação é gerado no formato ELF. O formato ELF está muito difundido no mundo dos navegadores HTTP. Ele pode ser usado para criar registros sofisticados que atendam a necessidades específicas. Por esse motivo, o formato ELF pode ser personalizado: é possível escolher os campos a serem registrados, bem como sua ordem de inserção no arquivo.

- **WLF (WebStar Log Format)**: Quando essa opção é selecionada, o registro da solicitação é gerado no formato WLF. O formato WLF foi desenvolvido especificamente para o servidor 4D WebSTAR. Ele é semelhante ao formato ELF, com apenas alguns campos adicionais. Tal como o formato ELF, pode ser personalizado.

**Configuração dos campos**
Quando você escolhe o formato ELF (Extended Log Format) ou WLF (WebStar Log Format), a área "Weg Log Token Selection" exibe os campos disponíveis para o formato escolhido. Você precisará selecionar cada campo a ser incluído no registro. Para fazer isso, use os botões de seta ou simplesmente arraste e solte os campos desejados na área "Tokens Selecionados".

**Nota**: Não é possível selecionar o mesmo campo duas vezes.

A tabela a seguir lista os campos disponíveis para cada formato (em ordem alfabética) e descreve seu conteúdo:

| Campo                                                  | ELF | WLF | Valor                                                                                                                                                        |
| ------------------------------------------------------ | --- | --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| BYTES_RECEIVED                    |     | X   | Número de bytes recebidos pelo servidor                                                                                                                      |
| BYTES_SENT                        | X   | X   | Número de bytes enviados pelo servidor ao cliente                                                                                                            |
| C_DNS                             | X   | X   | Endereço IP do DNS (ELF: campo idêntico ao campo C_IP)                                               |
| C_IP                              | X   | X   | Endereço IP do cliente (por exemplo, 192.100.100.10)                                      |
| CONNECTION_ID                     |     | X   | Número de identificação da ligação                                                                                                                           |
| CS(COOKIE)                          | X   | X   | Informações sobre as cookies contidas na petição HTTP                                                                                                        |
| CS(HOST)                            | X   | X   | Campo Host do pedido HTTP                                                                                                                                    |
| CS(REFERER)                         | X   | X   | URL da página que aponta para o documento solicitado                                                                                                         |
| CS(USER_AGENT) | X   | X   | Informações sobre o software e o sistema operacional do cliente                                                                                              |
| CS_SIP                            | X   | X   | Endereço IP do servidor                                                                                                                                      |
| CS_URI                            | X   | X   | URI onde o pedido é efectuado                                                                                                                                |
| CS_URI_QUERY | X   | X   | Parâmetros da consulta                                                                                                                                       |
| CS_URI_STEM  | X   | X   | Parte da solicitação sem parâmetros de consulta                                                                                                              |
| DATE                                                   | X   | X   | DDD: dia, MMM: abreviação de 3 letras por mês (jan, fev, etc.), YYYY: ano |
| METHOD                                                 | X   | X   | Método HTTP utilizado para o pedido enviado ao servidor                                                                                                      |
| PATH_ARGS                         |     | X   | Parâmetros CGI: cadeia de caracteres localizada após o caractere "$"                                                                         |
| STATUS                                                 | X   | X   | Resposta fornecida pelo servidor                                                                                                                             |
| TIME                                                   | X   | X   | HH: hora, MM: minutos, SS: segundos                                                                          |
| TRANSFER_TIME                     | X   | X   | Tempo solicitado pelo servidor para gerar a resposta                                                                                                         |
| USER                                                   | X   | X   | Nome do usuário se estiver autenticado; caso contrário, - (sinal de menos).                                               |
|                                                        |     |     | Se o nome do usuário contiver espaços, eles serão substituídos por _ (sublinhado)                                    |
| URL                                                    |     | X   | URL solicitado pelo cliente                                                                                                                                  |

> As datas e horas são indicadas em GMT.

## Histórico (backup)

Configure os parâmetros de backup automático para o registro de solicitações. Primeiro, você deve escolher a frequência (dias, semanas, etc.) ou o critério de limite de tamanho de arquivo clicando no botão de rádio correspondente. Você deve então especificar o momento exato do backup, se necessário.

- **Sem Backup**: a função de backup agendada está desativada.
- **A cada X hora(s)**: Esta opção é utilizada para programar backups de forma horária. Pode digitar um valor entre 1 e 24.

  - **iniciando em**: Usado para definir a hora em que o primeiro backup começará.
- **A cada X dia(s) às X**: Esta opção é usada para programar backups diários. Introduza 1 se pretender efetuar uma cópia de segurança diária. Quando essa opção estiver marcada, você deve indicar a hora em que o backup deve ser iniciado.
- **A cada X semana(s), dia em X**: Essa opção é usada para programar backups semanais. Digite 1 se quiser realizar o backup 1 vez por semana. Digite 1 se quiser realizar o backup 1 vez por semana. Você pode selecionar vários dias da semana, se desejar. Por exemplo, você pode usar essa opção para definir dois backups semanais: um às quartas-feiras e outro às sextas-feiras.
- **A cada X mês(es), dia X às X**: Essa opção é usada para programar backups mensais. Digite 1 se quiser realizar uma cópia de segurança mensal. Digite 1 se quiser realizar uma cópia de segurança mensal.
- **Todos los X MB**: esta opción se utiliza para programar las copias de seguridad en función del tamaño del archivo de registro actual. Um backup é acionado automaticamente quando o arquivo atinge o tamanho definido. Pode definir um limite de tamanho de 1, 10, 100 ou 1000 MB.

> No caso de backups programados, se o servidor Web não foi iniciado quando o backup estava programado para ocorrer, na próxima inicialização o 4D considera o backup como falho e aplica as configurações apropriadas, definidas nas Propriedades.

## Serviços Web

As opções dessa guia são usadas para ativar e configurar os serviços da Web para o projeto 4D, tanto para a publicação (lado do servidor) quanto para a assinatura (lado do cliente).

Para obter mais informações sobre o suporte de serviços da Web em 4D, consulte o capítulo [Publicação e uso de serviços da Web] (https://doc.4d.com/What-s-new/4D-Design-Reference-19-R4/Publication-and-use-of-Web-Services.200-5736722.en.html).

### Servidor

Essa área contém várias opções relacionadas ao uso de 4D como um "servidor" de serviços da Web, ou seja, a publicação de métodos projeto na forma de serviços Web.

- **Autorizar peticiones de servicios web**: Esta opção permite que você inicialize a publicação de Serviços Web. Se essa opção não tiver sido marcada, o 4D recusará solicitações SOAP e não gerará um WSDL, mesmo que os métodos tenham o atributo _Published in WSDL_. Quando essa opção está marcada, 4D cria o arquivo WSDL.
- **Nome do Serviço Web**: Esta área permite que você altere o "nome genérico" do Serviço Web. Esse nome é usado para diferenciar os serviços no nível do servidor SOAP (quando o servidor publica vários serviços Web diferentes), bem como nos diretórios de serviços Web. Por padrão, 4D usa o nome A_WebService.
- **Namespace de Serviços Web**: Essa área é usada para alterar o namespace dos serviços da Web publicados por 4D. Cada serviço Web publicado na Internet deve ser único. A singularidade dos nomes dos Serviços Web é assegurada pelo uso de namespaces XML. Um namespace é uma cadeia de caracteres arbitrária usada para identificar um conjunto de tags XML de forma exclusiva. Normalmente, o namespace começa com a URL da empresa (http://mycompany.com/mynamespace). Nesse caso, não é indispensável ter algo em particular no URL indicado; o que importa é que a cadeia de caracteres usada seja exclusiva. Por padrão, o 4D usa o seguinte namespace: http://www.4d.com/namespace/default.

> Em conformidade com o padrão XML para nomes de tags, as cadeias de caracteres usadas não devem conter espaços nem começar com um número. Além disso, para evitar qualquer risco de incompatibilidade, recomendamos que você não use nenhum caractere estendido (como caracteres acentuados).

### Cliente

Essa área contém várias opções relacionadas ao uso de 4D como um "cliente" de serviços Web, ou seja, a assinatura de serviços publicados na rede.

- **Prefixo do Método do Wizard**: Esta área permite que você altere o prefixo que é adicionado automaticamente por 4D ao nome dos métodos proxy gerados pelo Assistente de Serviços Web. Os métodos do projeto de proxy formam um link entre a aplicação 4D e o servidor de Serviços Web. Por padrão, 4D usa o prefixo "proxy_".

## Funcionalidades Web

Essa página contém as opções usadas para ativar e controlar recursos avançados da Web, como o servidor REST.

### Publicação

#### Expor como servidor REST

Inicia e pára o servidor REST. Ver [Configuración del servidor REST](../REST/configuration.md).

### Acesso

:::info Obsoleto

**Esta seção está obsoleta** a partir de 4D 20 R6. Se a configuração atual do projeto estiver obsoleta e precisar ser atualizada, essa seção, incluindo o botão **Ativar autenticação REST por meio da função ds.authentify()** (veja abaixo), será exibida. If your project is already compatible with the [Force login](../REST/authUsers.md#force-login-mode) mode, the section is missing and you can ignore this paragraph.

:::

See [Users and sessions](../REST/authUsers.md) to know the recommended way to control and manage REST access in your 4D projects.

#### Ativar a autenticação REST por meio da função ds.authentify()

Clique no botão **Ativar autenticação REST por meio da função ds.authentify()** para atualizar automaticamente o projeto em relação ao acesso do usuário REST. Observe que essa operação não pode ser revertida e pode exigir que você modifique seu código (uma caixa de diálogo de aviso é exibida quando você clica no botão).

:::note

Esse botão só está disponível em projetos abertos com a aplicação 4D (usuário único).

:::

O botão aciona a seguinte sequência de atualização:

- O grupo de usuários da API REST definido no menu **Leitura/Escrita** é removido.
- O método de banco de dados `On REST Authentication` é excluído (movido para a lixeira do sistema).
- Um arquivo padrão ["roles.json"](../ORDA/privileges.md#rolesjson-file) é criado na pasta [Sources](../Project/architecture.md#sources) do projeto, caso ainda não exista, com seu atributo `forceLogin` como `True`.

Lembre-se de reiniciar seu projeto após realizar essa atualização.

A próxima etapa é modificar seu código adequadamente. [**Veja esta postagem do blog para saber como proceder**] (https://blog.4d.com/force-login-becomes-default-for-all-rest-auth/).

### Qodly Studio

#### Ativar o acesso a Qodly Studio

:::note

Essa opção só aparece se a licença do Qodly Studio estiver ativada.

:::

Essa opção permite o acesso do usuário ao [Qodly Studio](../WebServer/qodly-studio.md) para o projeto atual. Note que o acesso global deve ser permitido no [nível da aplicação](../Admin/webAdmin.md).
