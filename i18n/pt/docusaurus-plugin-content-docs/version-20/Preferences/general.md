---
id: general
title: Página Geral
---

Esta página contém várias opções para configurar o funcionamento geral da sua aplicação 4D.

## Opções

### Na inicialização

Esta opção permite configurar o ecrã 4D por padrão no arranque, quando o usuário inicia apenas a aplicação.

*   **Não fazer nada**: só aparece a janela da aplicação, vazia.
*   **Diálogo Abrir Projeto Local**: 4D apresenta uma caixa de diálogo padrão para abrir um documento, permitindo-lhe selecionar um projeto local.
*   **Abrir o último projeto utilizado**: 4D abre diretamente o último projeto utilizado; não aparece nenhuma caixa de diálogo de abertura. **Abrir o último projeto utilizado**: 4D abre diretamente o último projeto utilizado; não aparece nenhuma caixa de diálogo de abertura.
*   **Diálogo Abrir Projeto Remoto**: 4D mostra o diálogo de logon padrão do 4D Server, permitindo selecionar um projeto publicado na rede.
*   **Abra a caixa de diálogo Welcome Wizard** (configuração de fábrica): O 4D exibe a caixa de diálogo Welcome Wizard (Assistente de boas-vindas).
> > > > > **4D Server**: O aplicativo 4D Server ignora essa opção. Nesse ambiente, o modo **Do nothing** é sempre usado.

### Criação de formulários automática

> Essa opção é usada somente em bancos de dados binários; ela é ignorada na arquitetura do projeto. Ver doc.4d.com.

### Janela com guias (somente macOS)

A partir do macOS Sierra, os aplicativos Mac podem se beneficiar do recurso Automatic Window Tabbing, que ajuda a organizar várias janelas: as janelas de documentos são empilhadas em uma única janela principal e podem ser navegadas por meio de guias. Esse recurso é útil em telas pequenas e/ou ao usar um trackpad.

Você pode se beneficiar desse recurso nos seguintes ambientes (somente com versões 4D de 64 bits):

*   Method Editor windows
*   Janelas do editor de formulários

Todas as janelas destes editores podem ser colocadas no formulário de tabulação:

![](../assets/en/Preferences/general2.png)

Um conjunto de comandos no menu **Janela** permite gerenciar as abas:

![](../assets/en/Preferences/general3.png)

Na caixa de diálogo Preferências do 4D, a opção **Janela guia** permite controlar esse recurso:

![](../assets/en/Preferences/general4.png)

Estão disponíveis três opções:

*   **Conforme as Preferências do sistema** (padrão): as janelas 4D se comportarão como definido nas Preferências do sistema do macOS (Em tela cheia, Sempre ou Manualmente).
*   **Never**: Abrir um novo documento no 4D form editor ou no Code Editor sempre resultará na criação de uma nova janela (as guias nunca são criadas).
*   **Sempre**: abrir um novo documento no editor de formulários 4D ou nos editores de métodos sempre resultará na criação de uma nova guia.

### Aparência (somente macOS)

Esse menu permite que você selecione o esquema de cores a ser usado no ambiente de desenvolvimento do **4D** . O esquema especificado será aplicado a todos os editores e janelas do modo Design.

> Você também pode definir o esquema de cores a ser usado nos aplicativos de desktop **** na página "Interface" da caixa de diálogo Settings.

Estão disponíveis três opções:

*   **De acordo com as Preferências do esquema de cores do sistema** (padrão): Usar o esquema de cores definido nas Preferências do Sistema do macOS.
*   **Claro**: utilizar o tema claro
*   **Escuro**: utilizar o tema escuro

> Esta preferência só é suportada no macOS. No Windows, é sempre utilizado o esquema "Light".


### Sair do modo Desenho ao passar para o modo Aplicação

Se essa opção estiver marcada, quando o usuário alternar para o ambiente do aplicativo usando o comando de menu **Test Application** , todas as janelas do ambiente de design serão fechadas. Se essa opção não estiver marcada (configuração padrão), as janelas do ambiente Design permanecerão visíveis no plano de fundo do ambiente Application.


### Ativar a criação de bases de dados binárias

Se você marcar essa opção, dois itens serão adicionados ao menu **File > New** e ao botão da barra de ferramentas **New** :

*   **Base de dados...**
*   **Base de dados a partir da definição da estrutura...**

![](../assets/en/Preferences/general5.png)

Esses itens permitem a criação de bancos de dados binários (consulte a seção [Creating a new database](https://doc.4d.com/4Dv18R6/4D/18-R6/Creating-a-new-database.300-5217610.en.html)). Eles não são mais propostos por padrão porque 4D recomenda o uso de arquitetura baseada em projeto para novos desenvolvimentos.

## Ao criar um novo projeto

### Usar arquivo de registo

Quando essa opção está marcada, um arquivo de registro é iniciado automaticamente e usado quando um novo banco de dados é criado. Para mais informações, consulte o arquivo [Log (.journal)](Backup/log.md).

### Criar pacote

Quando essa opção for marcada, os bancos de dados 4D são criados automaticamente em uma pasta com o sufixo .4dbase.

Graças a esse princípio, no macOS, as pastas do banco de dados aparecem como pacotes com propriedades específicas. No Windows, isto não tem qualquer impacto particular.

### Incluir tokens no arquivo de origem do projeto

Quando essa opção estiver marcada, os arquivos de origem do método [salvos](../Project/architecture.md#sources) em novos projetos 4D conterão tokens **** para a linguagem clássica e objetos de banco de dados (constantes, comandos, tabelas e campos). Os tokens são caracteres adicionais, como `:C10` ou `:5` , inseridos nos arquivos de código-fonte, que permitem renomear tabelas e campos e identificar elementos, independentemente da versão 4D (consulte [Uso de tokens em fórmulas](https://doc.4d.com/4Dv19R3/4D/19-R3/Using-tokens-in-formulas.300-5583062.en.html)).

Se você pretende usar VCS ou editores de código externos em seus novos projetos, talvez queira desmarcar essa opção para melhorar a legibilidade do código com essas ferramentas.

> Essa opção só pode ser aplicada a projetos (os bancos de dados binários sempre incluem tokens).

> Você sempre pode obter o código com tokens chamando [`METHOD GET CODE`](https://doc.4d.com/4dv19R/help/command/en/page1190.html) com 1 no parâmetro *option* .

#### Excluir tokens em projetos existentes

Você pode configurar seus projetos existentes para salvar o código **sem tokens** inserindo a seguinte chave no arquivo [`<applicationName>.4DProject`](../Project/architecture.md#applicationname4dproject-file) usando um editor de texto:

```
"tokenizedText": false
```

> Este parâmetro só é tida em conta quando os métodos são guardados. Os métodos existentes em seus projetos não são modificados, a menos que você os salve novamente.


### Criar o arquivo `.gitignore`

Talvez você precise ou queira que o git ignore alguns arquivos em seus novos projetos.

Você pode definir essa preferência marcando a opção **Criar arquivo .gitignore**  .

Quando um projeto for criado em 4D e essa caixa está marcada, 4D cria um arquivo `.gitignore` no mesmo nível da pasta `Project` (consulte [Architecture of a Project](Project/architecture.md#gitignore-file-optional)).

Você pode definir o conteúdo padrão do arquivo `.gitignore` clicando no ícone de lápis. Isso abrirá o arquivo de configuração .gitignore em seu editor de texto. O conteúdo deste arquivo será usado para gerar os arquivos `.gitignore` em seus novos projetos.

A [documentação do git oficial](https://git-scm.com/docs/gitignore) é um ótimo recurso para entender como arquivos `.gitignore` funcionam.

### Linguagem de comparação de texto

Esse parâmetro configura o idioma padrão usado para o processamento e a comparação de cadeias de caracteres em novos bancos de dados. A escolha do idioma influencia diretamente a classificação e a pesquisa de texto, bem como as letras maiúsculas e minúsculas, mas não afeta a tradução de textos nem os formatos de data, hora ou moeda, que permanecem no idioma do sistema. Por padrão (configuração de fábrica), 4D usa o idioma do usuário atual definido no sistema.

Um banco de dados 4D pode, portanto, operar em uma linguagem diferente da do sistema. Quando um banco de dados é aberto, o motor 4D detecta a linguagem usada pelo arquivo de dados e fornece a linguagem (modo interpretador ou compilado). As comparações de texto, independentemente de serem realizadas pelo mecanismo de banco de dados ou pelo idioma, são feitas no mesmo idioma.

Ao criar um novo arquivo de dados, o 4D usa o idioma previamente definido nesse menu. Ao abrir um arquivo de dados que não está no mesmo idioma que a estrutura, o idioma do arquivo de dados é usado e o código do idioma é copiado para a estrutura.
> Pode modificar este parâmetro para a base de dados aberta utilizando os parâmetros da base de dados (ver [Comparação de texto](../settings/database.md#text-comparison)).

## Localização da documentação

Esta área configura o acesso à documentação HTML 4D exibida no seu navegador atual:

*   Quando se pressiona a tecla **F1** enquanto o cursor está inserido numa função de classe 4D ou nome de comando no Editor de Código;
*   Ao clicar duas vezes em um comando 4D na **página Comandos** do Explorer.


### Língua da documentação

Linguaje da documentação HTML a apresentar. É possível selecionar uma documentação em um idioma diferente do idioma do aplicativo.

### Procurar primeiro na pasta local

> Esta opção só é tida em conta para o acesso à documentação de comandos (excluindo as funções de classe).

Define onde 4D irá procurar por páginas de documentação.

*   Quando marcado (padrão), 4D primeiro procura a página na pasta local (veja abaixo). Se for encontrado, 4D mostra a página no navegador atual. Se for encontrado, 4D mostra a página no navegador atual. Desta forma, é possível aceder à documentação mesmo quando se está offline.
*   Quando não marcada, 4D procura a página desejada diretamente no site de documentação on-line e a exibe no navegador atual. Se não for encontrado, 4D mostra uma mensagem de erro no navegador.

### Pasta local

> Esta opção só é tida em conta para o acesso à documentação de comandos (excluindo as funções de classe).

Indica a localização da documentação HTML estática. Por padrão, esta é a subpasta \Help\Command\language. Pode ver a localização clicando no menu associado à zona. Se esta subpasta não estiver presente, a localização é apresentada a vermelho.

Você pode modificar esse local conforme desejar, por exemplo, se quiser exibir a documentação em um idioma diferente do idioma do aplicativo. A documentação HTML estática pode estar localizada em outro volume, em um servidor da Web, etc. A documentação HTML estática pode estar localizada em outro volume, em um servidor da Web, etc. Para designar um local diferente, clique no botão [...] ao lado da área de entrada e escolha uma pasta raiz da documentação (pasta correspondente ao idioma: fr, en, de ou em ja). Para designar um local diferente, clique no botão **[...]** ao lado da área de entrada e escolha uma pasta raiz da documentação (pasta correspondente ao idioma: `fr`, `en`, `es`, `de` ou `ja`). 
