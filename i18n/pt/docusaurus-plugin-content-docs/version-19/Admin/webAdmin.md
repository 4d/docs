---
id: webAdmin
title: Administração Web
---


Um componente de servidor web integrado, chamado `WebAdmin`, é utilizado por 4D e 4D Server para dar um acesso web seguro a funções de gestão específicas como [Explorador de dados](dataExplorer.md). Pode conectar localmente ou remotamente ao servidor web de um navegador ou uma aplicação web e acessar a aplicação 4D associada.

O webAdmin maneja a autenticação de usuários com privilégios "WebAdmin" de forma que possa abrir sessões administrativas e acessar interfaces dedicadas.

Essa funcionalidade pode ser usada em aplicações 4D rodando headless (sem monitor e periféricos) assim como aplicações 4D rodando sem interfaces.

## Iniciar o web server WebAdmin

Como padrão, o servidor web `WebAdmin` não é lançado. Precisa configurar o lançamento ao início ou (em versões com interface) lançar manualmente usando um item de menu.

### Lançar ao início

Pode configurar o servidor web `WebAdmin` para que se lance ao início da aplicação 4D ou 4D Server (antes de que se carregue qualquer projeto).

- Se utilizar uma aplicação 4D con interface, selecione a opção de menu **Arquivo > Administração web > Propriedades...**.

![alt-text](../assets/en/Admin/waMenu1.png)

Selecione a opção **Inicio automático da administração do servidor web** na caixa de diálogo de configuração:

![alt-text](../assets/en/Admin/waSettings.png)

- Se usar uma aplicação 4D que tenha ou não interface, pode habilitar o modo de inicio automático utilizando o argumento abaixo *Interface de linha de comandos*:

```
open ~/Desktop/4D.app --webadmin-auto-start true
```

> Se a porta TCP usada pelo  `WebAdmin` servidor web ([HTTPS](#https-port) ou [HTTP](#http-port), dependendo das configurações) não estiver disponível ao início, 4D vai tentar repetidademente os 20 portos a seguintes, e usar o primeiro que estiver disponível. Se nenhum porto estiver disponível, o servidor web não é lançado e um erro é exibido (ou em aplicação headless, aparece no console)

### Iniciar e parar

Se utilizar uma aplicação 4D com interface, pode iniciar ou parar o servidor web `WebAdmin` de seu projeto a qualquer momento:

Selecione a opção de menu **Arquivo > Administração web > Iniciar o servidor**.

![alt-text](../assets/en/Admin/waMenu2.png)

O item de menu vira **Stop Server** quando o servidor for lançado; selecione **Parar o servidor** para parar o `WebAdmin` servidor web.

## Propriedades WebAdmin

A configuração do componente `WebAdmin` é obrigatória, em particular para definir a[** chave de acesso**](#access-key). Por padrão, quando a chave de acesso não for estabelecida, o acesso via uma url não é permitido.

Pode configurar o componente `WebAdmin` usando [Web Administration a caixa de diálogo de configurações](#settings-dialog-box) (ver abaixo).

> Se usar uma aplicação 4D headless pode usar os argumentos da[*Interface de Linha de comando* ](#webadmin-headless-configuration) para definir as configurações básicas. Se quiser personalizar o arquivo de configurações para definir os parâmetros avançados.

### Caixa de diálogos de configurações

Para abrir a caixa de diálogo de configurações de administração web, selecione o item de menu **File > Web Administration > Configurações...**.

![alt-text](../assets/en/Admin/waMenu1.png)

A caixa de diálogo abaixo é mostrada:

![alt-text](../assets/en/Admin/waSettings2.png)

#### Inicio automático da administração de servidor web

Marque esta opção para lançar o servidor web `WebAdmin` automaticamente quando iniciar a aplicação 4D ou 4D Server (ver ([acima](#launching-at-startup)). Como padrão essa opção não é marcada.

#### Conexões HTTP em localhost aceitas

Quando esta opção for marcada, pode conectar ao servidor web `WebAdmin` através de HTTP na mesma máquina que a aplicação 4D. Como padrão, essa opção é marcada.

**Notas:**

- Conexões com HTTP outras que localhost nunca são aceitas.
- Mesmo se esta opção for marcada, quando [Accept HTTPS](#accept-https) for marcado e a configuração  TLS for válida, as conexões localhost vão usar HTTPS.

#### Porta HTTP

Número de porta a usar para conexões com HTTP para o servidor web `WebAdmin` web server quando a opção **Accept HTTP connections on localhost** estiver marcada. Valor normal padrão é 7080

#### Aceitar HTTPS

Quando esta opção for marcada, pode se conectar ao servidor web `WebAdmin` através de HTTPS. Como padrão, essa opção é marcada.

#### Porta HTTPS

Número de porta a utilizar para as conexôes ao servidor web `WebAdmin` através de HTTPS quando a opção **HTTPS aceita** estiver marcada. Valor normal padrão é 7443

#### Rota da pasta de certificados

Rota da pasta onde o certificado TLS está localizado. Como padrão, a rota da pasta de certificados está vazia e 4D ou Servidor 4D usa os arquivos de certificados contidos na apicação 4D (certificados personalizados devem ser armazenados do lado da pasta projeto).

#### Modo de registro de depuração

O estado ou formato do arquivo de registro da petição HTTP (HTTPDebugLog_*nn*.txt, armazenada na pasta "Logs" da aplicação -- *nn* é o número do arquivo). As opções abaixo estão disponíveis:

- **Desativado** (padrão)
- **Com todas as partes do corpo** - habilitado com partes do cuerpo das petições e respostas
- **Sem as partes do corpo** - ativado sem partes do corpo (se indica o tamanho do corpo)
- **Com os corpos das petições** - ativado com as partes do corpo unicamente nas petições
- **Com a resposta corpos** - ativado com as partes do corpo unicamente nas respostas

#### Chave de acesso

A configuração de uma chave de acesso é obrigatória para desbloquear o acesso ao servidor web `WebAdmin` através de uma URL (o acesso através de um comando do menu 4D não exige uma chave de acesso). Quando nenhuma chave de acesso for definida, não é permitido que nenhum cliente web se conecte através de uma URL a uma interface de administração web como a página [Explorador de dados](dataExplorer.md). Uma página de erro é retornada no caso uma solicitação de conexão:

![alt-text](../assets/en/Admin/accessKey.png)

Uma chave de acesso é parecida a uma senha, mas não está associada com um login.

- Para definir uma nova chave de acesso: clique no botão **Definir**, introduza a string da chave de acesso na caixa de diálogo e clique em **OK**. A etiqueta botão vira **Modificar**.
- Para modificar a chave de acesso: clique no botão **Modificar**, introduza a nova string da chave de acesso na caixa de diálogo e clique em **OK**.
- Para eliminar a chave de acesso: clique no botão**Modificar**, deixe vazia a área daa chave de acesso e clique em **OK**.

## Configuração de WebAdmin sem interface

Todos [os parâmetros de WebAdmin](#webadmin-settings) são armazenados no arquivo `WebAdmin.4DSettings`. Ha un arquivo `WebAdmin.4DSettings` por padrão para cada aplicação 4D e 4D Server, pelo qual é possível lançar várias aplicações na mesma máquina local.

Quando rodar uma aplicação sem interface 4D ou 4D Servidor, pode estabelecer e usar o arquivo padrão `WebAdmin.4DSettings` , ou determinar um arquivo personalizado `.4DSettings`.

Para estabelecer o conteúdo do arquivo, pode utilizar a [janela de parâmetros WebAdmin](#settings-dialog-box) da aplicação 4D com uma interface e ejecutá-la depois sem interface. Se utiliza então o arquivo padrão `WebAdmin.4DSettings`.

Ou, pode estabelecer um arquivo personalizado `.4DSettings` (formato xml) e usar ao invés do arquivo padrão. Na [Interfaz de linha de comandos](cli.md) há vários argumentos dedicados para compatibilidade com esta funcionalidade.

> A chave de acesso não é armazenada de forma transparente no arquivo `.4DSettings`.

Exemplo:

```
"%HOMEPATH%\Desktop\4D Server.exe" MyApp.4DLink --webadmin-access-key 
 "my Fabulous AccessKey" --webadmin-auto-start true   
 --webadmin-store-settings

```

## Autenticação e sessão

- Quando acessar uma página de gestão entrando um URL e sem identificação prévia, uma autenticação é exigida. O usuário deve introduzir a [chave-de-acesso](#access-key) em uma janela de autenticação. Se a chave de acesso nâo foi definida na configuração de `WebAdmin`, não é possível o acesso via URL.

- Quando uma página de gerenciamento é acessada diretamentee de um item menu 4D ou 4D Servidor (tal como **Records > Data Explorer** ou **Window > Data Explorer** (4D Server)), o acesso é garantido sem autenticação, e o usuário é autenticado automaticamente.

Quando o acesso é concedido, uma  [sessão web](WebServer/sessions.md) com o privilégio "WebAdmin" é criado na aplicação 4D. Enquanto a sessão atual tiver o privilégio "WebAdmin", o componente `WebAdmin` entrega páginas  solicitadas.
