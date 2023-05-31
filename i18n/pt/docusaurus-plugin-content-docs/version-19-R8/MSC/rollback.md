---
id: rollback
title: Página Retrocesso
sidebar_label: Página Retrocesso
---

A página Rollback é utilizada para acessar à função de rollback entre as operações executadas no arquivo de dados. Assemelha-se a uma função de reverter aplicada a vários níveis. É particularmente útil quando um registo foi eliminado por engano numa base de dados.

Esta função só está disponível quando o banco de dados funcionar com um arquivo de histórico de dados.

![](../assets/en/MSC/MSC_rollback1.png)

> Se a base de dados estiver criptografada e não tiver sido fornecida uma chave de dados válida correspondente ao arquivo de histórico aberto, os valores encriptados não são apresentados na coluna **Values** e é apresentada uma caixa de diálogo a pedir a frase-chave ou a chave de criptografia se clicar no botão **Rollback** .

O conteúdo e o funcionamento da lista de operações são os mesmos que para a janela [Análise de actividade](analysis.md) .

Para executar uma reversão entre as operações, selecionar a linha após a qual todas as operações devem ser canceladas. A operação da linha seleccionada será a última a ser mantida. Se, por exemplo, desejar anular uma eliminação, seleccione a operação situada imediatamente antes da mesma. A operação de eliminação, assim como todas as operações subsequentes, serão anuladas.

![](../assets/en/MSC/MSC_rollback2.png)

Em seguida, clique no botão **Rollback** . 4D pede-lhe para confirmar a operação. Se clicar em **OK**, os dados são restaurados para o estado exato em que se encontravam no momento da ação selecionada.

Utilize o menu que se encontra na parte inferior da janela para selecionar um arquivo de registo de dados que vai ser utilizado quando aplicar a função de reversão a uma base de dados restaurada a partir de um arquivo. Neste caso, é necessário especificar o arquivo de registo de dados correspondente ao arquivado.

Aqui está como a função de rollback funciona: quando o usuário clica no botão **Rollback** , 4D fecha o banco de dados atual e restaura o último backup dos dados do banco de dados. A base de dados restaurada é então aberta e 4D integra as operações do arquivo de registo de dados até à operação seleccionada. Se a base de dados ainda não foi guardada, 4D começa com um arquivo de dados em branco.