---
id: dataExplorer
title: Web Data Explorer
---

O Data Explorer oferece uma interface web para visualizar, pesquisar e editar dados na sua datastore de projeto. Ao usar esta ferramente, pode navegar facilmente entre todas suas entidades e pesquisar, ordenar ou filtrar valores de atributos. Isso ajuda você a identificar rapidamente problemas em qualquer etapa do processo de desenvolvimento, bem como controlar e editar dados.

![alt-text](../assets/en/Admin/dataExplorer1.png)

## Configuração

O Data Explorer depende do componente web server [`WebAdmin`](webAdmin.md) para a configuração e preferências de autentificação.

- **configuração**: a configuração de Data Explorer reutiliza as configurações [`WebAdmin` de servidor web](webAdmin.md#webadmin-settings),
- **authentication**: acesso ao Data Explorer é oferecido quando  [a sessão de usuário for autenticada](webAdmin.md#authentication-and-session) e tem o privilégio "WebAdmin". Quando o Data Explorer for acessado através do item de menu \*\* Data Explorer\*\* (ver abaixo), uma autenticação automática é oferecida.

> O acesso ao Data Explorer pode ser desativado usando a função [`.setAdminProtection()`](API/DataStoreClass.md#setadminprotection).

## Abrindo o Data Explorer

[O servidor web `WebAdmin`](webAdmin.md#starting-the-webadmin-web-server) é iniciado automaticamente, se necessário, quando o Data Explorer é clicado.

Para ligar à página Web do Explorador de dados:

- A partir de uma aplicação 4D (com interface):
  - Se usar a aplicação 4D com interface, selecione o comando **Data Explorer...** :
  - Para abrir o Explorador de dados num separador de browser externo, seleccione **Explorador de dados no browser** no menu **Registos** ou prima a tecla **Alt** (Windows)/**Option** (macOS) e clique no botão **Dados** na barra de ferramentas principal.

- no menu **Window**  (em 4D Server)

- mesmo se usar uma aplicação 4D headless, pode abrir seu navegador web e digitar o endereço abaixo:

`IPaddress:HTTPPort/dataexplorer`
ou
`IPaddress:HTTPSPort/dataexplorer`

Neste contexto será pedido que digite a [chave de acesso](webAdmin.md#access-key) para abrir uma sessão `WebAdmin` no servidor:

![alt-text](../assets/en/Admin/accessKeyEnter.png)

> [Os valores HTTPPort](webAdmin.md#http-port) e [HTTPSPort](webAdmin.md#https-port) são configurados nas definições `WebAdmin` .

## Requisitos

O Data Explorer suporta os seguintes navegadores web:

- Chrome
- Safari
- Edge
- FireFox

A resolução mínima para utilizar o Data Explorer é de 1280x720. A resolução recomendada é 1920x1080.

## Navegação de dados

Para além de uma visão abrangente e personalizável dos seus dados, o Explorador de Dados permite-lhe consultar e ordenar os seus dados.

### Básicos

O Data Explorer proporciona um acesso global ao modelo de dados ORDA em relação às regras de mapeamento ORDA .

:::info

Quando o modelo ou dados ORDA é modificado no lado da base de dados (tabela adicionada, registo editado ou apagado, etc.), basta atualizar a página do Data Explorer no browser (usando a tecla F5, por exemplo).

:::

Pode mudar para o modo escuro \*\*\*\* mostrar o tema usando o selector no fundo da página:

![alt-text](../assets/en/Admin/dark.png)

![alt-text](../assets/en/Admin/dataExplorer2.png)

A página contém várias áreas:

- Do lado esquerdo encontra-se a área **Dataclasses** e **Attributes area**, permitindo-lhe seleccionar os dataclasses e atributos a exibir. Os atributos são ordenados de acordo com a ordem de criação da estrutura subjacente. A chave primária e os atributos indexados têm um ícone específico. É possível filtrar a lista de nomes de dataclass propostos e nomes de atributos utilizando as respectivas áreas de pesquisa.
  ![alt-text](../assets/en/Admin/dataExplorer3.png)

- A parte central contém a área de pesquisa \*\*\*\* e a grade de dados \*\*\*\* (lista de entidades da classe de dados seleccionada). Cada coluna da grade representa um atributo de datastore.
  - Como padrão, todas as entidades são exibidas. É possível filtrar as entidades apresentadas utilizando a área de pesquisa. Estão disponíveis dois modos de consulta: [Consulta sobre atributos](#query-on-attributes) (seleccionado por defeito), e a consulta avançada [com expressão](#advanced-query-with-expression). Você seleciona o modo de consulta clicando no botão correspondente (o botão **X** permite reiniciar a área de consulta e assim parar a filtragem):
    ![alt-text](../assets/en/Admin/dataExplorer4b.png)
  - O nome da classe de dados seleccionada é adicionado como um separador por cima da grelha de dados. Utilizando estas abas, é possível alternar entre os valores já selecionados. Pode remover um dataclass referenciado clicando no ícone "remover" à direita do nome do dataclass.
  - É possível reduzir o número de colunas desmarcando os atributos do lado esquerdo. Também pode mudar as colunas da grade de dados utilizando arrastar e soltar. Pode clicar no cabeçalho de uma coluna  para [ordenar entidades](#ordering-entities) de acordo com seus valores (quando for possível).
  - Se uma operação exigir muito tempo, é mostrada uma barra de progresso. Você pode parar a operação a qualquer momento clicando no botão vermelho:<br/>
    ![alt-text](../assets/en/Admin/dataExplorer5.png)

- No lado direito está a área **Detalhes**: exibe os valores de atributo da entidade selecionada, bem como **dados relacionados**, se houver. Pode navegar entre as entidades da dataclass cliando nos links **First** / **Previous** / **Next** / **Last** na parte inferior da área.
  - Todos os tipos de atributos são exibidos, incluindo imagens, objetos (expressos em json) assim como atributos [calculados](../ORDA/ordaClasses.md#computed-attributes-1) e atributos [alias](../ORDA/ordaClasses.md#alias-attributes-1).
  - Dados relacionados (many-to-one e one-to-many relações) podem ser exibidos através de áreas expansíveis/collapsable:<br/>
    ![alt-text](../assets/en/Admin/dataExplorerRelated.png)
  - **Ctrl+Click** (Windows) ou **Command+Click** (macOS) em um nome de atributo relacionado na área do lado direito exibe os valores do atributo em um independente. área flutuante:<br/>
    ![alt-text](. /assets/pt-BR/Admin/dataExplorerFloat.png)

### Ordenar entidades

É possível reordenar a lista de entidades apresentada de acordo com os valores dos atributos. Todos os tipos de atributos podem ser utilizados para uma espécie, exceto imagem e objeto.

- Clique no cabeçalho de uma coluna para encomendar entidades de acordo com os valores dos atributos correspondentes. Como padrão, a ordem é ascendente. Clicar duas vezes para uma ordem decrescente. Uma coluna utilizada para classificar entidades é exibida com um pequeno ícone e o seu nome está em *itálico*.

![alt-text](../assets/en/Admin/dataExplorer7.png)

- É possível ordenar atributos em vários níveis. Por exemplo, é possível classificar os empregados por cidade e depois por salário. Para fazer isso, mantenha apertada a tecla **Shift** e clique sequencialmente no cabeçalho de cada coluna para incluir na ordem.

### Consulta sobre atributos

Neste modo, é possível filtrar entidades introduzindo valores a encontrar (ou a excluir) nas áreas acima da lista de atributos. Pode filtrar um ou vários atributos. A lista de entidades é automaticamente atualizada quando se digita.

![alt-text](../assets/en/Admin/dataExplorer6.png)

Se introduzir vários atributos, é automaticamente aplicado um AND. Por exemplo, o filtro a seguir exibe entidades com *primeiro nome* atributo começando com "flo" e *salário* valor do atributo > 50000:

![alt-text](../assets/en/Admin/dataExplorer9.png)

O botão **X** permite remover os atributos introduzidos e assim parar a filtragem.

Estão disponíveis diferentes operadores e opções de consulta, dependendo do tipo de dados do atributo.

> Não é possível filtrar em imagens ou atributos de objectos.

#### Operadores de números

Com atributos numéricos, de data e hora, o operador "=" é seleccionado por defeito. Contudo, pode selecionar outro operador da lista de operadores (clicar no ícone "=" para exibir a lista):

![alt-text](../assets/en/Admin/DEFilter1.png)

#### Datas

Com atributos de data, pode introduzir a data a utilizar através de um widget de escolha de data (clique na área de data para exibir o calendário):

![alt-text](../assets/en/Admin/DEFilter2.png)

#### Booleanos

Ao clicar numa área de atributos booleanos, pode filtrar em **valores verdadeiros**/**valores falsos** ou também em **null**/**e não null**:

![alt-text](../assets/en/Admin/DEFilter3.png)

- **nulo** indica que o valor do atributo não foi definido
- **não nulo** indica que o valor do atributo está definido (portanto verdadeiro ou falso).

#### Text

Os filtros de texto não são diacríticos (a = A).

O filtro é do tipo "começa com". Por exemplo, a entrada "Jim" mostrará os valores "Jim" e "Jimmy".

Também pode usar o caractere coringa (@) para substituir um ou mais caracteres iniciais. Por exemplo:

| Um filtro com       | Resultados                                                                |
| ------------------- | ------------------------------------------------------------------------- |
| Bel                 | Todos os valores que começam com "Bel                                     |
| @do    | Todos os valores contendo "do"                                            |
| Bel@do | Todos os valores que começam com "Bel" e que contêm "do". |

Se quiser criar consultas mais específicas, tais como "é exatamente", poderá ter de utilizar a funcionalidade de consultas avançadas.

### Consultas avançadas com expressão

Ao seleccionar esta opção, é exibida uma área de consulta acima da lista de entidades, permitindo-lhe introduzir qualquer expressão a utilizar para filtrar o conteúdo:

![alt-text](../assets/en/Admin/dataExplorer8.png)

Pode introduzir consultas avançadas que não estão disponíveis como consultas de atributos. Por exemplo, se quiser encontrar entidades com *primeiro nome* atributo contendo "Jim" mas não "Jimmy", pode escrever:

```
firstname=="Jim"
```

Você pode usar qualquer expressão de consulta ORDA como [documentado com a função `query()`](API/DataClassClass.md#query), com as seguintes limitações ou diferenças:

- Por segurança, você não pode executar fórmulas usando `eval()`.
- Os marcadores de lugar não podem ser utilizados; é necessário escrever uma consulta *queryString* com valores.
- Os valores das strings contendo caracteres espaciais devem ser incorporados entre aspas duplas ("").

Por exemplo, com o Dataclass Employee, pode escrever:

```
firstname = "Marie Sophie" E manager.lastname = "@th"
```

Você pode clicar no ícone `v` para exibir ambos [`queryPlan`](API/DataClassClassClass.md#queryplan) e [`queryPath`](API/DataClassClassClass.md#querypath). Na área, pode pairar sobre os blocos de subconsulta para ter informações detalhadas por subconsulta:

![alt-text](../assets/en/Admin/dataExplorer12.png)

Clique com o botão direito do mouse na área de consulta para exibir as consultas válidas anteriores:

![alt-text](../assets/en/Admin/dataExplorer11.png)

## Edição de dados

O Data Explorer permite que você modifique os valores dos atributos, adicione ou exclua entidades. Essa funcionalidade é destinada aos administradores, por exemplo, para testar implementações ou corrigir problemas com dados inválidos.

### Permitir edição

Por motivos de segurança, para poder editar dados através do Explorador de Dados, primeiro é necessário habilitar o modo de edição usando o seletor **Permitir edição**. Quando ativado, os botões de ação de edição são exibidos no lado direito:

![allow-editing](../assets/en/Admin/editing.png)

Este seletor está ativado **por dataclass** e **por sessão do navegador**.

:::info

O seletor destina-se a prevenir modificações acidentais, uma vez que nenhuma caixa de diálogo de confirmação é exibida ao editar dados através do Explorador de Dados.

:::

### Inserção de valores

Quando o seletor **Permitir edição** estiver habilitado para uma classe de dados, você pode inserir valores para uma nova entidade ou entidade selecionada através de widgets de entrada dedicados na área **Detalhes** para a classe de dados selecionada.

Os seguintes valores de atributos escalares podem ser editados:

- text
- boolean
- numeric
- date
- time
- imagem (você pode carregar ou arrastar e soltar uma imagem)
- objeto (string JSON)

Atributos do Blob não podem ser modificados.

Novos valores ou valores modificados são armazenados no cache local, você precisa [salvá-los explicitamente](#saving-modifications) para armazená-los nos dados.

### Criação de entidades

Você pode criar uma entidade nova e vazia na tabela selecionada clicando no botão de criação![new-entity](../assets/en/Admin/data-explorer-new.png). Você pode então [inserir valores](#entering-values) para esta entidade.

A nova entidade é mantida no cache local, você precisa [salvá-la explicitamente](#saving-modifications) para armazená-la nos dados.

:::info

Valores de atributo que precisam ser calculados pelo 4D (IDs, atributos calculados) serão retornados apenas após você salvar a entidade.

:::

### Carregamento de valores

O botão **recarregar**![reload](../assets/en/Admin/data-explorer-reload.png) recarrega os valores de atributo de entidade do arquivo de dados. Este botão é útil, por exemplo, quando você deseja se certificar de que os valores exibidos são os valores salvos mais recentes.

### Salvar modificações

Exceto pela exclusão  (veja abaixo), as modificações da entidade são feitas localmente e precisam ser salvas para que sejam armazenadas no arquivo de dados.

Para salvar modificações ou para salvar uma entidade que você criou no Explorador de Dados, clique no botão **Salvar**![save](../assets/en/Admin/data-explorer-save.png).

:::info

Modificações em uma entidade existente são automaticamente salvas quando você seleciona outra entidade da mesma classe de dados.

:::

Em caso de conflito (por exemplo, outro usuário modificou o mesmo valor de atributo na mesma entidade), uma mensagem de erro é exibida na parte inferior do Explorador de Dados. Você pode clicar no botão [**Recarregar**](#reloading-values) para obter o novo valor a partir dos dados e então, aplicar e salvar suas modificações.

### Excluindo entidades

Você pode excluir entidades clicando no botão **excluir**![delete](../assets/en/Admin/data-explorer-delete.png).

Para excluir um conjunto de entidades, selecione duas ou mais entidades na área da lista usando **Shift+clique** (seleção contínua) ou **Ctrl/Command+clique** (seleção descontínua) e clique no botão **excluir**.

:::note

Se algumas entidades não puderem ser excluídas devido a um conflito (por exemplo, entidades bloqueadas no servidor), elas serão destacadas na lista.

:::

:::caution

Nenhuma caixa de diálogo de confirmação é exibida quando você exclui entidades. As entidades selecionadas são imediatamente excluídas dos dados.

:::
