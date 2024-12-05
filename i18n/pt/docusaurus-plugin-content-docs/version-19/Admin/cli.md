---
id: cli
title: Interface de linha de comando
---

Você pode usar o terminal macOS ou o console do Windows para conduzir seus aplicativos 4D (4D e 4D Server) usando linhas de comando. Mais especificamente, essa funcionalidade permite que:

- lance um banco de dados remotamente, que pode ser útil especialmente para administrar servidores Web.
- roda automaticamente testes para suas aplicações.

## Informação básica

Pode executar linhas de comando para aplicações 4D usando o terminal macOS ou o console Windows.

- Em macOS, precisa usar o comando `open`.
- Em Windows pode passar os argumentos diretamente.

> Em macOS pode passar os argumentos diretamente indo à pasta onde está a aplicação dentro do pacote (rota Contents/MacOS) que permite dirigir o stream stderr. Por exemplo se o pacote 4D estiver na pasta `MyFolder`,  deve escrever a linha de comando abaixo: `/MyFolder/4D.app/Contents/MacOS/4D`. Entretanto, recomandos usar o comando `open` sempre que não precisar acessar o stream stderr.

## Lançar uma aplicação 4D

Aqui está uma descrição das linhas de comando e dos argumentos compatíveis com o lançamento de aplicações 4D.

Sintaxe:
```
<applicationPath> [--version] [--help] [--project] [<projectPath | packagePath | 4dlinkPath> [--data <dataPath>]]
[--opening-mode interpreted | compiled] [--create-data] [--user-param <user string>] [--headless] [--dataless]
[--webadmin-settings-file] [--webadmin-access-key] [--webadmin-auto-start] [--webadmin-store-settings]
```
| Argumento                   | Valor                                            | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `applicationPath`           | Caminho do 4D, 4D Server ou aplicação fundida    | Lance a aplicação. Idêntico ao duplo clique na aplicação 4D. Quando chamado sem argumento de arquivo de estrutura, a aplicação é executada e a caixa de diálogo "selecionar banco de dados" é exibida.                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `--version`                 |                                                  | Exibe a versão da aplicação e termina                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `--help`                    |                                                  | Exibe ajuda e sai. Outros argumentos: -?, -h                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `--project`                 | projectPath &#124; packagePath &#124; 4dlinkPath | Arquivo de projeto para abrir com o arquivo de dados atual. Não aparece nenhuma caixa de diálogo.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `--data`                    | dataPath                                         | Arquivo de dados a abrir com o arquivo de projeto designado. Se não for especificado, 4D usa o último ficheiro de dados aberto.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `--opening-mode`            | interpreted &#124; compiled                      | Pede para o banco de dados abrir em modo interpretado ou compilado. Nenhum erro é gerado se o modo pedido estiver indisponível.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `--create-data`             |                                                  | Cria automaticamente um novo arquivo de dados se nenhum arquivo válido for encontrado. Não aparece nenhuma caixa de diálogo. 4D usa o nome de arquivo passado no argumento "--data" se houver (gera um erro se um arquivo com o mesmo nome já existir).                                                                                                                                                                                                                                                                                                                                                                         |
| `--user-param`              | String usuário personalizada                     | Uma string que estará disponível na aplicação 4D por meio do comando Get database parameter (a string não deve começar com um caractere "-", reservado).                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `--headless`                |                                                  | Lança 4D, Servidor 4D, ou a aplicação fusionada, sem uma interface (modo headless). Nesse modo:<li> O modo Design nãoe stá disponível, o banco começa em modo Aplicação</li><li> Sem barra de ferramentas, sem barra de menu, sem janela MDI ou tela de apresentação.</li><li>Nenhum ícone é exibido no dock ou na barra de tarefas.</li><li>O banco de dados aberto não é registrado no menu "Bancos recentes"</li><li>O histórico de diagnósticos é iniciado automaticamente (ver [SET DATABASE PARAMETER](https://doc.4d.com/4dv19/help/command/en/page642.html), selector 79)</li><li>Toda chamada para uma caixa de diálogo é interceptada e uma resposta automaticamente é fornecida (por exemplo OK para o comando [ALERT](https://doc.4d.com/4dv19/help/command/en/page41.html) , Abortar para um diálogo de erro...). Todos os comandos interceptados (*) são gravados no histórico de diagnóstico.</li><br/>Para questões de manutenção é possível enviar qualquer texto para streams normais de output usando o comando [LOG EVENT](https://doc.4d.com/4dv19/help/command/en/page667.html). Note que aplicações headless 4D só podem ser fechadas com uma chamada a [QUIT 4D](https://doc.4d.com/4dv19/help/command/en/page291.html) ou usando o gerente de tarefas do OS. |
| `--dataless`                |                                                  | Lança 4D, 4D Server ou aplicação fundida em modo dataless. Dataless mode is useful when 4D runs tasks with no need for data (project compilation for example). Nesse modo: <li>Nenhum arquivo contendo dados é aberto, mesmo se especificado na linha de comando ou no arquivo `.4DLink`, ou se usar os comandos `CREATE DATA FILE` e `OPEN DATA FILE`</li><li>Comandos que manipulam dados vão causar um erro. Por exemplo , `CREATE RECORD` gera a mensagem “nenhuma tabela está disponível para aplicar este comando”.</li><br/>**Nota**:<li>Se passado na linha de comando, o modo sem dados se aplica a todos os bancos de dados abertos em 4D, desde que a aplicação seja fechada.</li><li>Se passado no arquivo `.4DLink`, modo dataless só se aplica aos bancos especificados no arquivo `.4DLink`. Para saber mais sobre arquivos `.4DLink` veja [Project opening shortcuts](../Project/creating.md#project-opening-shortcuts).</li>                                                                                                                                                                                                                                                                                                                              |
| `--webadmin-settings-file`  | Rota do arquivo                                  | Rota do arquivo WebAdmin `.4DSettings` personalizado para o [servidor Web WebAdmin](webAdmin.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `--webadmin-access-key`     | Text                                             | Chave de acesso para o servidor web [WebAdmin](webAdmin.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `--webadmin-auto-start`     | Parâmetros                                       | Estado do início automático para o [servidor WebAdmin](webAdmin.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `--webadmin-store-settings` |                                                  | Armazena a chave de acesso e inicia automaticamente os parâmetros nas configurações de arquivo utilizadas (ou seja, o arquivo padrão [`WebAdmin.4DSettings`](webAdmin.md#webadmin-settings) ou um arquivo personalizado designado pelo parâmetro `--webadmin-settings-path`). Use o argumento `--webadmin-store-settings` para salvar essos parâmetros se necessário                                                                                                                                                                                                                                                            |
 (*) Alguns diálogos são exibidos antes do banco de dados ser aberto, para que seja impossível escrever no 

[arquivo Diagnóstico de log](debugLogFiles.md#4ddiagnosticlogtxt) (alerta de licença, diálogo de conversão, seleção de banco de dados, seleção de arquivo de dados). Nesses casos, uma mensagem de erro é criada tanto no stream stderr e no arquivo de eventos do sistema, e então a aplicação fecha.

### Exemplos

> A pasta atual do usuário é alcançada usando o comando  "~ " em macOS e o comando "%HOMEPATH%" em Windows.

Lance uma aplicação 4D armazenada no desktop:

*   macOS:


```bash
open ~/Desktop/4D.app
open "~/Desktop/4D Server.app"
```

*   Windows:


```bash
%HOMEPATH%\Desktop\4D\4D.exe
%HOMEPATH%\Desktop\"4D Server.exe"
```


Abrir um ficheiro de pacote em macOS:

```bash
--args ~/Documents/myDB.4dbase
```

Abrir um ficheiro de projecto:

*   macOS:


```bash
--args ~/Documentos/myProj/Projecto/myProj.4DProject
```


*   Windows:


```bash
%HOMEPATH%\Documents\myProj\Project\myProj.4DProject
```



Abrir um ficheiro de projecto e um ficheiro de dados:

*   macOS:


```bash
--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD
```

*   Windows:


```bash
--project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject --data %HOMEPATH%\Documents\data\myData.4DD
ou:
/project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject /data %HOMEPATH%\Documents\data\myData.4DD
```

Abrir um ficheiro .4DLink:

*   macOS:


```bash
~/Desktop/MyDatabase.4DLink
```


*   Windows:


```bash
%HOMEPATH%\Desktop\MyDatabase.4DLink
```

Abrir em modo compilado e criar um arquivo de dados se não disponível:

*   macOS:


```bash
~/Documents/myBase.4dbase --args --opening-mode compiled --create-data true
```

*   Windows:


```bash
%HOMEPATH%\Documents\myBase.4dbase\myDB.4db --opening-mode compiled --create-data true
```

Abrir um ficheiro projeto e um arquivo de dados e passar uma “string” como parâmetro do usuário:

*   macOS:


```bash
--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD --user-param "Hello world"
```

*   Windows:


```bash
--project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject --data %HOMEPATH%\Documents\data\myData.4DD --user-param "Hello world"
```

Aberto sem interface (modo headless):

*   macOS:


```bash
--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD --headless  
```

*   Windows:


```bash
--project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject --data %HOMEPATH%\Documents\data\myData.4DD --headless
```
