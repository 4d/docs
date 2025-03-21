---
id: verify
title: Página Verificação
sidebar_label: Página Verificação
---

Esta página é utilizada para verificar a integridade dos dados. A verificação pode ser efetuada em registos e/ou índices. Esta página apenas verifica a integridade dos dados. Se forem encontrados erros e forem necessários reparos, você será aconselhado a usar a [página Reparo](repair.md).


## Acções

A página contém botões de ação que fornecem acesso direto às funções de verificação.
> Quando o banco de dados é criptografado, a verificação inclui a validação da consistência dos dados criptografados. Se ainda não tiver sido fornecida uma chave de dados válida, é apresentada um diálogo que pede a frase-chave ou a chave de dados.


- **Verifica os registros e os índices:** inicia o procedimento de verificação total dos dados.
- **Verificar somente os registros**: inicia o procedimento de verificação somente para os registros (os índices não são verificados).
- **Verificar somente os índices**: inicia o procedimento de verificação apenas para os índices (os registros não são verificados).
> > > > > > A verificação de registros e índices também pode ser realizada no modo detalhado, tabela por tabela (consulte a seção Detalhes abaixo).


## Abrir arquivo de registo

Independente da verificação solicitada, 4D gera um arquivo de histórico na pasta `Logs` do banco de dados. Esse arquivo lista todas as verificações realizadas e indica os erros encontrados, quando aplicável ([OK] é exibido quando a verificação está correta). It is created in XML format and is named: *ApplicationName**Verify_Log**yyyy-mm-dd hh-mm-ss*.xml where:

- *NomBase* é o nome do arquivo de estrutura sem extensão, por exemplo "Faturas",
- *yyyy-mm-dd hh-mm-ss* é o carimbo de data/hora do arquivo, com base na hora do sistema local quando a operação de manutenção foi iniciada, por exemplo "2019-02-11 15-20-45".

Quando clica no botão **Abrir arquivo de registo** , 4D mostra o arquivo de registo mais recente no navegador predefinido da máquina.


## Detalhes

O botão **Lista de tabelas** exibe uma página detalhada que pode ser usada para visualizar e selecionar os registros e índices reais a serem verificados:

![](../assets/en/MSC/MSC_Verify.png)


A especificação dos itens a serem verificados permite que você economize tempo durante o procedimento de verificação.

A lista principal apresenta todas as tabelas da base de dados. Para cada tabela, é possível limitar a verificação aos registros e/ou a cada índice. Expanda o conteúdo de uma tabela ou os campos indexados e marque/desmarque as caixas de seleção conforme desejado. Por padrão, tudo está selecionado. Também é possível usar os botões de atalho **Selecionar tudo**, **Desmarcar tudo**, **Todos os registros** e **Todos os índices**.

Para cada linha da tabela, a coluna "Ação" indica as operações a realizar. Quando a tabela é expandida, as linhas "Registros" e "Campos indexados" indicam o número de itens em questão.

A coluna "Estado" exibe o estado de verificação de cada item usando símbolos:

| ![](../assets/en/MSC/MSC_OK.png)  | A verificação foi efetuada sem problema      |
| --------------------------------- | -------------------------------------------- |
| ![](../assets/en/MSC/MSC_KO2.png) | Verificação efectuada, problemas encontrados |
| ![](../assets/en/MSC/MSC_KO3.png) | Verificação parcialmente efectuada           |
| ![](../assets/en/MSC/MSC_KO.png)  | Verificação não efectuada                    |

Clique em **Verificar** para iniciar a verificação ou em **Padrão** para voltar à página padrão.

O botão **Abrir arquivo de registro** pode ser usado para exibir o arquivo de registro no navegador padrão da máquina (consulte [Open log file](#open-log-file) acima).
> A página padrão não considerará as modificações feitas na página detalhada: quando você clica em um botão de verificação na página padrão, todos os itens são verificados. Por outro lado, as configurações feitas na página detalhada são mantidas de uma sessão para outra.
