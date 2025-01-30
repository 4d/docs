---
id: general
title: Página Geral
---

Esta página contém várias opções para configurar o funcionamento geral da sua aplicação 4D.

## Opções

### Na inicialização

Esta opção permite configurar o ecrã 4D por padrão no arranque, quando o usuário inicia apenas a aplicação.

* **Não fazer nada**: só aparece a janela da aplicação, vazia.
* **Diálogo Abrir Projeto Local**: 4D apresenta uma caixa de diálogo padrão para abrir um documento, permitindo-lhe selecionar um projeto local.
* **Abrir o último projeto utilizado**: 4D abre diretamente o último projeto utilizado; não aparece nenhuma caixa de diálogo de abertura.
> Para forçar a apresentação da caixa de diálogo de abertura quando esta opção é selecionada, mantenha premida a tecla **Alt** (Windows) ou **Opção** (macOS) enquanto inicia o projeto.

* **Diálogo Abrir Projeto Remoto**: 4D mostra o diálogo de logon padrão do 4D Server, permitindo selecionar um projeto publicado na rede.
* **Abra a caixa de diálogo Welcome Wizard** (configuração de fábrica): O 4D exibe a caixa de diálogo Welcome Wizard (Assistente de boas-vindas).
> > > > > **4D Server**: O aplicativo 4D Server ignora essa opção. Nesse ambiente, o modo **Do nothing** é sempre usado.

### Criação de formulários automática

> Essa opção é usada somente em bancos de dados binários; ela é ignorada na arquitetura do projeto. Ver doc.4d.com.

#### Janela com guias (somente macOS)

A partir do macOS Sierra, os aplicativos Mac podem se beneficiar do recurso Automatic Window Tabbing, que ajuda a organizar várias janelas: as janelas de documentos são empilhadas em uma única janela principal e podem ser navegadas por meio de guias. Esse recurso é útil em telas pequenas e/ou ao usar um trackpad.

Você pode se beneficiar desse recurso nos seguintes ambientes (somente com versões 4D de 64 bits):

* Janelas do Editor de Métodos
* Janelas do editor de formulários

Todas as janelas destes editores podem ser colocadas no formulário de tabulação:

![](../assets/en/Preferences/general2.png)

Um conjunto de comandos no menu **Janela** permite gerenciar as abas:

![](../assets/en/Preferences/general3.png)

Na caixa de diálogo Preferências do 4D, a opção **Janela guia** permite controlar esse recurso:

![](../assets/en/Preferences/general4.png)

Estão disponíveis três opções:

* **Conforme as Preferências do sistema** (padrão): as janelas 4D se comportarão como definido nas Preferências do sistema do macOS (Em tela cheia, Sempre ou Manualmente).
* **Nunca**: abrir um novo documento no editor de formulários ou no editor de métodos sempre resultará na criação de uma nova janela (as guias nunca são criadas).
* **Sempre**: abrir um novo documento no editor de formulários 4D ou nos editores de métodos sempre resultará na criação de uma nova guia.

### Sair do modo Desenho ao passar para o modo Aplicação

Se essa opção estiver marcada, quando o usuário alternar para o ambiente do aplicativo usando o comando de menu **Test Application** , todas as janelas do ambiente de design serão fechadas. Se essa opção não estiver marcada (configuração padrão), as janelas do ambiente Design permanecerão visíveis no plano de fundo do ambiente Application.

### Ativar a criação de bases de dados binárias

Se você marcar essa opção, dois itens serão adicionados ao menu **File > New** e ao botão da barra de ferramentas **New** :

* **Base de dados...**
* **Base de dados a partir da definição da estrutura...**

![](../assets/en/Preferences/general5.png)

Esses itens permitem a criação de bancos de dados binários (consulte a seção [Creating a new database](https://doc.4d.com/4Dv18R6/4D/18-R6/Creating-a-new-database.300-5217610.en.html)). Eles não são mais propostos por padrão porque 4D recomenda o uso de arquitetura baseada em projeto para novos desenvolvimentos.

## Ao criar um novo projeto

### Usar arquivo de registo

Quando essa opção está marcada, um arquivo de registro é iniciado automaticamente e usado quando um novo banco de dados é criado. Para mais informações, consulte o arquivo [Log (.journal)](Backup/log.md).

### Criar pacote

Quando essa opção for marcada, os bancos de dados 4D são criados automaticamente em uma pasta com o sufixo .4dbase.

Graças a esse princípio, no macOS, as pastas do banco de dados aparecem como pacotes com propriedades específicas. No Windows, isto não tem qualquer impacto particular.

### Linguagem de comparação de texto

Esse parâmetro configura o idioma padrão usado para o processamento e a comparação de cadeias de caracteres em novos bancos de dados. A escolha do idioma influencia diretamente a classificação e a pesquisa de texto, bem como as letras maiúsculas e minúsculas, mas não afeta a tradução de textos nem os formatos de data, hora ou moeda, que permanecem no idioma do sistema. Por padrão (configuração de fábrica), 4D usa o idioma do usuário atual definido no sistema.

Um banco de dados 4D pode, portanto, operar em uma linguagem diferente da do sistema. Quando um banco de dados é aberto, o motor 4D detecta a linguagem usada pelo arquivo de dados e fornece a linguagem (modo interpretador ou compilado). As comparações de texto, independentemente de serem realizadas pelo mecanismo de banco de dados ou pelo idioma, são feitas no mesmo idioma.

Ao criar um novo arquivo de dados, o 4D usa o idioma previamente definido nesse menu. Ao abrir um arquivo de dados que não está no mesmo idioma que a estrutura, o idioma do arquivo de dados é usado e o código do idioma é copiado para a estrutura.
> Pode modificar este parâmetro para a base de dados aberta utilizando os parâmetros da base de dados (ver [Comparação de texto](https://doc.4d.com/4Dv18R6/4D/18-R6/DatabaseData-storage-page.300-5217842.en.html#460252)).

## Localização da documentação

Esta área configura o acesso à documentação HTML 4D mostrada no navegador atual:

* Quando o usuário clica duas vezes em um comando da **página Comandos** do Explorador;
* Quando o usuário clica em um nome de comando no editor de métodos e atinge a chave **F1**.

Você pode escolher acessar o site de documentação online 4D diretamente ou acessar uma versão estática armazenada localmente.

### Pasta local

Indica a localização da documentação HTML estática. Por padrão, esta é a subpasta \Help\Command\language. Pode ver a localização clicando no menu associado à zona. Se esta subpasta não estiver presente, a localização é apresentada a vermelho.

Você pode modificar esse local conforme desejar, por exemplo, se quiser exibir a documentação em um idioma diferente do idioma do aplicativo. A documentação HTML estática pode estar localizada em outro volume, em um servidor da Web, etc. A documentação HTML estática pode estar localizada em outro volume, em um servidor da Web, etc. Para designar um local diferente, clique no botão [...] ao lado da área de entrada e escolha uma pasta raiz da documentação (pasta correspondente ao idioma: fr, en, de ou em ja). A documentação HTML estática pode estar localizada em outro volume, em um servidor da Web, etc. Para designar um local diferente, clique no botão [...] ao lado da área de entrada e escolha uma pasta raiz da documentação (pasta correspondente ao idioma: fr, en, de ou em ja).

### Sítio Web

Acesso URL da documentação “on-line” para a versão no 4D Doc Center. 4D cria chamadas para as páginas da documentação com base nessa URL. Você pode modificá-la, por exemplo, se você quiser exibir a documentação em um idioma diferente do idioma da aplicação. O botão de teste à direita da área abre o navegador padrão para ir para a URL especificada.

### Procurar primeiro na pasta local

Esta opção (marcada por padrão) define onde 4D irá procurar a página de documentação chamada usando o Gerenciador ou a tecla F1.

* Quando essa opção está marcada, 4D procura primeiro a página na pasta local. Se for encontrado, 4D mostra a página no navegador atual. Se não, 4D irá automaticamente procurar por ele na documentação on-line do site. Desta forma, é possível aceder à documentação mesmo quando se está offline.
* Quando não estiver checado, 4D procura a página desejada diretamente na documentação on-line do site e a exibe no navegador atual. Se não for encontrado, 4D mostra uma mensagem de erro no navegador.
