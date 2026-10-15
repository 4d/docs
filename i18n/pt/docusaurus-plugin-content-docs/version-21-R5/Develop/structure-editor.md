---
id: structure-editor
title: Editor de estrutura
---

Você usa o editor de estrutura para gerenciar a estrutura do banco de dados — as tabelas e suas relações. Ele oferece controle sobre tabelas, propriedades de tabelas, campos, propriedades de campos incluindo índices, e relações entre tabelas.

Você pode acessar o **editor de estrutura** escolhendo o comando **Estrutura do Banco de Dados** no menu **Design** ou clicando no botão Estrutura ![](../assets/en/Develop/structure-button.png) na barra de ferramentas do 4D.

O editor de estrutura fornece uma visualização gráfica da estrutura de um banco de dados, além de uma barra de ferramentas e menus de contexto que você pode usar para realizar operações de design do banco de dados. Cada tabela é representada por uma imagem de tabela. Ela mostra os campos e seus tipos na forma de ícones. Uma barra de informações exibe as características das tabelas e campos à medida que o mouse passa sobre eles.

Uma **paleta flutuante do Inspetor** pode ser usada para visualizar e modificar as propriedades dos objetos de estrutura e do próprio editor de estrutura. Esta janela é descrita na seção [Paleta do Inspetor](#inspector-palette).

## Barra de ferramentas

O editor de estrutura possui uma barra de ferramentas contendo funções como adição de objetos, além de opções de navegação e exibição:

![](../assets/en/Develop/structure-toolbar.png)

Da esquerda para a direita, os ícones executam as seguintes ações:

- adicionar objetos (tabelas, campos, índice, relações)
- pesquisar no editor
- ocultar/exibir tabelas de acordo com as pastas definidas na página Inicial do Explorer
- exibir filtros
- Ferramentas (tamanho, alinhamento, ordenação)
- cores
- Janela de lista de índices
- Gerenciador de chave primária

### Informações de bloqueio

Um ícone de cadeado fechado ![](../assets/en/Develop/structure-lock.png) é exibido se o arquivo de estrutura estiver bloqueado.  
O bloqueio pode ocorrer tanto em modo de projeto quanto em modo cliente/servidor quando:

- O arquivo `catalog.4DCatalog` está *Somente leitura* (apenas Projetos). Clicar no ícone de cadeado exibirá um alerta para desbloqueá-lo, se possível.  
- Dois ou mais usuários tentam modificar a mesma estrutura ao mesmo tempo. A estrutura não pode ser usada até que o primeiro usuário a libere fechando a janela. *(Apenas cliente/servidor)*  

Em ambos os casos, a estrutura pode ser aberta em *Somente leitura*, mas não pode ser usada até que o bloqueio seja removido.


## Barra de informações

A parte inferior da janela do editor é uma barra de informações que exibe dados correspondentes à área sobre a qual o mouse está: tabela, campo ou relação.

#### Informações sobre uma tabela

- Nome e número da tabela  
- Triggers da tabela:  
  - **NEW:** Ao salvar novo registro  
  - **SAVE:** Ao salvar registro existente  
  - **DEL:** Ao excluir um registro  

#### Informações sobre um campo

- Nome e número da tabela  
- Nome e número do campo  
- Tipo do campo  
- Atributos do campo:  
  - **NUL:** Mapear valores nulos para valores em branco  
  - **UNI:** Único  

#### Informações sobre uma relação

- Tabela e campo de origem (campo muitos)  
- Tabela e campo de destino (campo um)  
- Tipo de relação e nome ORDA:  
  - **N→1** (muitos para um) e nome do atributo de relação `relatedEntities`  
  - **1→N** (um para muitos) e nome do atributo de relação `relatedEntity`  

:::note

Para mais informações sobre nomes ORDA, consulte a página [Data Model Objects](../ORDA/dsMapping.md#structure-mapping).

:::



## Paleta do Inspetor 

As propriedades dos objetos do editor de estrutura (tabelas, campos e relações) podem ser visualizadas e modificadas através da paleta do Inspetor:

![](../assets/en/Develop/structure-inspector.png)

Esta paleta aparece quando você dá um duplo clique em um objeto. Quando está exibida, seu conteúdo é atualizado dinamicamente dependendo dos objetos selecionados. O Inspetor exibe as [propriedades gerais da janela do editor de estrutura](#customizing-the-editor-window) quando você clica em uma área vazia da janela.

As diferentes áreas da paleta podem ser expandidas/colapsadas. Você pode clicar nos triângulos adjacentes para exibir ou ocultar as informações correspondentes.

Os seguintes atalhos podem ser usados:

- **Shift+clique** na barra de título de um painel colapsado expande esse painel e colapsa todos os outros.
- **Alt** (Windows) ou **Option** (macOS) + **clique** na barra de título de um painel colapsado expande todos os painéis.
- **Alt** (Windows) ou **Option** (macOS) + **clique** na barra de título de um painel expandido colapsa todos os painéis.

A posição da paleta e os estados expandidos/colapsados de seus painéis são salvos.


## Selecionando um objeto

Para trabalhar com a imagem de um objeto no editor de estrutura, você deve primeiro selecioná-lo. Você pode então especificar suas propriedades, movê-lo, redimensioná-lo, excluí-lo, etc. É possível selecionar vários objetos do mesmo tipo simultaneamente para modificar suas propriedades comuns na paleta do Inspetor.

Para selecionar:

- **Uma tabela:** Clique na imagem da tabela, ou pressione `Tab` / `Shift+Tab` para selecionar cada tabela sucessivamente.
- **Um campo ou relação:** Clique no campo ou relação, ou use as teclas de seta para navegar.
- **Vários objetos:** Use `Shift+Clique` para objetos adjacentes, `Ctrl+Clique` (Windows) ou `Command+Clique` (macOS) para objetos não adjacentes.  



## Trabalhando com imagens de tabelas

Você pode redimensionar ou mover as imagens das tabelas no editor de estrutura conforme necessário.

**4D Server**: No [modo de desenvolvimento](../Desktop/clientServer.md#development-mode), qualquer modificação nas imagens das tabelas (redimensionamento, localização...) é propagada para todos os desenvolvedores no ambiente Design.


### Rolando a lista de campos

Quando você adiciona campos a uma tabela ou reduz o tamanho de uma tabela, pode haver mais campos na tabela do que a imagem pode exibir. Quando isso acontece, o 4D adiciona automaticamente um cursor que você pode usar para rolar a lista de campos visíveis:

![](../assets/en/Develop/structure-table1.png)

### Redimensionando uma imagem de tabela

Você pode redimensionar uma imagem de tabela para exibir mais nomes de campos ou reorganizar sua tela.  

* **Redimensionamento manual**: Basta clicar e arrastar a parte inferior da imagem da tabela ou seu canto inferior direito.

![](../assets/en/Develop/structure-table2.png)

* **Tamanho Ótimo**: Esta opção redimensiona automaticamente a(s) tabela(s) selecionada(s) para que seu tamanho corresponda exatamente ao número de campos que contêm (nenhuma linha vazia é exibida). Para aplicar o comando **Tamanho Ótimo** a uma ou mais tabelas, selecione **Tamanho Ótimo** no menu associado ao botão da barra de ferramentas do editor ou no menu de contexto do editor (clique em uma tabela).

* **Recolher**: A função **Recolher** recolhe a(s) imagem(ns) da tabela selecionada(s) para que apenas seus nomes fiquem visíveis. Isso é útil para estruturas grandes.

Para aplicar o comando **Recolher** a uma ou mais tabelas, você pode:

	- Selecionar **Recolher** no menu de contexto do editor (clique na área do título da tabela).  
	- **Shift+Duplo clique** na área do nome da tabela para alternar pela mesma sequência *tamanho original → recolher.*

:::note Notas

- Um duplo clique padrão na área do nome da tabela abre o **Inspetor**.  
- **Alt** (Windows) ou **Option** (macOS) + duplo clique abre o método trigger da tabela no **Editor de métodos**.  
- **Ctrl** (Windows) ou **Command** (macOS) + duplo clique abre o **Explorer** na página Formulários.

:::



### Movendo imagens de tabelas

Você pode mover imagens de tabelas para agrupá-las de acordo com a função ou para reorganizar a janela do editor de estrutura. Você também pode alinhá-las para melhorar a legibilidade da estrutura. Quaisquer relações são redesenhadas automaticamente para corresponder às novas localizações das tabelas.

Para mover uma imagem de tabela manualmente, clique no nome de uma tabela e arraste-a usando o cursor do mouse. Arraste apenas a barra de nome da tabela. Arrastar outras partes da imagem da tabela pode produzir efeitos diferentes, como criar uma nova relação de tabela ou alterar o tamanho da imagem da tabela.

Para alinhar duas ou mais tabelas, selecione as tabelas a serem alinhadas e escolha uma opção de alinhamento no menu de ferramentas:

![](../assets/en/Develop/structure-align.png)

Esses comandos só ficam ativos quando pelo menos duas tabelas estão selecionadas.


## Rolagem

Funções específicas de rolagem facilitam a navegação em estruturas grandes:

* A roda do mouse pode ser usada para rolar o conteúdo da janela do editor verticalmente. Isso também rolará os campos de uma tabela quando o cursor estiver sobre ela.
* Segurando **Shift** enquanto usa a roda do mouse rola o conteúdo da janela horizontalmente.
* Pressionar **Shift** ativa a ferramenta "mão", que pode ser usada para arrastar todo o conteúdo da janela clicando em uma área vazia.

## Zoom

Você pode modificar a escala de exibição da estrutura do banco de dados usando o menu **Zoom** no lado direito da barra de informações. 100% é o valor padrão ao abrir um banco de dados. A ação de zoom é focada na seleção, se houver uma.

A configuração de zoom atual é específica para cada usuário e é memorizada ao fechar a janela.

:::note

Você pode [configurar o renderizador gráfico do editor de estrutura durante um zoom](../Preferences/structure.md#graphic-quality-of-the-structure) usando uma preferência.

:::

## Exibição por tipo de objeto

O botão **Exibir** na barra de ferramentas do editor de estrutura está associado a um menu e permite escolher os objetos a serem exibidos na estrutura de acordo com seu tipo:

![](../assets/en/Develop/structure-display.png)

Por padrão, todos os objetos são exibidos. Este recurso permite várias representações ou visualizações — da mais simples à mais completa — e fornece uma ferramenta de análise para a estrutura com base no nível de informação necessário.  

As escolhas são aplicadas a todas as tabelas e campos. Elas são salvas por usuário e memorizadas ao fechar a janela. Ocultar objetos não altera a posição das tabelas.

- Quando vários tipos de campos estão marcados, um operador lógico OR é usado para determinar os objetos a serem exibidos. Por exemplo, se *Campos invisíveis* e *Campos não indexados* estiverem ambos marcados, todos os campos não indexados e invisíveis (indexados ou não) são exibidos.
- Tabelas têm prioridade sobre campos: se uma tabela não for exibida, seus campos não serão exibidos.
- Se você adicionar um objeto cujo tipo não está sendo exibido (tabela, campo ou relação), ele se torna visível. Para ocultá-lo novamente, você deve desmarcar a opção correspondente no menu **Exibir**.


## Destacar/atenuar tabelas por pasta

Você pode ocultar grupos de tabelas no editor de estrutura com base nas pastas definidas na **Página Inicial** da janela do Explorer. Você configura essa exibição usando o botão **Pastas** na barra de ferramentas do editor de estrutura.

O menu associado a este botão exibe comandos que gerenciam a exibição, bem como a lista de pastas no banco de dados. Uma marca de seleção aparece ao lado de cada pasta exibida. Você pode modificar a exibição atual selecionando ou desmarcando uma pasta neste menu.

Os comandos **Destacar todas as pastas** e **Atenuar todas as pastas** podem ser usados para exibir ou ocultar todas as tabelas nas pastas do banco de dados.

Cada clique no botão de pastas da barra de ferramentas inverte a exibição das tabelas: tabelas destacadas são atenuadas e vice-versa.

Quando as tabelas estão atenuadas, apenas seus contornos aparecem na janela de estrutura. Tabelas que não estão atenuadas permanecem totalmente visíveis.

![](../assets/en/Develop/structure-dimmed.png)


:::note

Você pode definir a aparência das tabelas atenuadas no editor de estrutura como *Atenuadas* ou *Invisíveis* usando uma [opção na página **Estrutura** das Preferências](../Preferences/structure.md#when-a-folder-is-dimmed-its-contents-are). É necessário fechar e reabrir a janela do editor de estrutura para que essa preferência tenha efeito.

:::

## Personalizando a janela do editor

A janela do editor de estrutura possui propriedades específicas que podem ser definidas usando o **Inspetor**.

Para exibir essas propriedades, você pode:
- Dar um duplo clique (ou clique, se a janela já estiver exibida) em uma área vazia da janela, ou  
- Clicar com o botão direito em uma área vazia e escolher **Propriedades da Estrutura** no menu de contexto.

A paleta do Inspetor exibe as propriedades da Estrutura.  

![](../assets/en/Develop/structure-properties.png)

As seguintes propriedades podem ser definidas:

- **Imagem de fundo:** Você pode adicionar ou modificar a imagem de fundo utilizada, bem como seu formato de exibição. Para adicionar ou modificar a imagem, clique no botão **Abrir** ou clique com o botão direito na área de visualização e escolha **Abrir** no menu de contexto; em seguida, selecione o arquivo contendo a imagem a ser exibida. Você pode usar qualquer formato de imagem. A imagem selecionada é exibida imediatamente na área de visualização e na janela do editor. 
Para alterar o formato de exibição da imagem, escolha um valor no menu Formato da Imagem. Os formatos fornecidos são os formatos padrão de exibição de imagens do 4D.
Para excluir uma imagem personalizada, clique no botão **Limpar** ou clique com o botão direito na área de visualização e escolha **Limpar** no menu de contexto.
- **Cor de preenchimento:** Você pode alterar a cor usada para o fundo da janela do editor. Para isso, clique na área de seleção de cor e escolha uma cor no menu de seleção.
- **Fonte padrão:** Para alterar a fonte padrão usada para nomes de tabelas e campos, escolha um valor neste menu. Você também pode usar o menu Tamanho para alterar o tamanho padrão da fonte.


## Buscar na Estrutura

O 4D permite realizar buscas diretamente na janela do editor de estrutura. As buscas podem ser feitas entre os seguintes elementos:

- Nomes de tabelas e/ou nomes de campos  
- Números de tabelas  

Para realizar uma busca, digite um texto ou número de tabela no campo **Buscar** do editor de estrutura. À medida que você digita, uma barra aparece abaixo onde você pode especificar opções de busca:

![](../assets/en/Develop/structure-search.png)

- **Escopo**: *Tabelas e campos* ou *Tabelas* (ou seja, apenas tabelas).  
- **Tipos**:  
  - *Contém* (padrão): digitando "le" encontra "Tabela", "Letra", etc.  
  - *Começa com*: digitando "pa" encontra "papel", "pago", mas não "reparar".  
  - *Número*: digitando "2" encontra tabelas numeradas 2, 12, 20, etc.

As buscas são realizadas em tempo real enquanto você digita. Tabelas e campos que correspondem são destacados. Se nada for encontrado, a área de busca fica vermelha. Para sair do modo **Buscar**, clique no botão **X** na barra de busca ou apague todos os caracteres da área de busca.

