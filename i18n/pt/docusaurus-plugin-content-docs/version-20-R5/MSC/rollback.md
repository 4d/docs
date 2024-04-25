---
id: rollback
title: Página Retrocesso
sidebar_label: Página Retrocesso
---

A página Rollback é utilizada para acessar à função de rollback entre as operações executadas no arquivo de dados. Assemelha-se a uma função de reverter aplicada a vários níveis. É particularmente útil quando um registo foi eliminado por engano numa base de dados.

Esta função só está disponível quando o banco de dados funcionar com um arquivo de histórico de dados.

![](../assets/en/MSC/MSC_rollback1.png)

> If the database is encrypted and no valid data key corresponding to the open log file has been provided, encrypted values are not displayed in the **Values** column and a dialog requesting the passphrase or the data key is displayed if you click the **Rollback** button.

The contents and functioning of the list of operations are the same as for the [Activity analysis](analysis.md) window.

Para executar uma reversão entre as operações, selecionar a linha após a qual todas as operações devem ser canceladas. A operação da linha seleccionada será a última a ser mantida. Se, por exemplo, desejar anular uma eliminação, seleccione a operação situada imediatamente antes da mesma. A operação de eliminação, assim como todas as operações subsequentes, serão anuladas.

![](../assets/en/MSC/MSC_rollback2.png)

Next click on the **Rollback** button. 4D pede-lhe para confirmar a operação. If you click **OK**, the data is then restored to the exact state it was in at the moment of the selected action.

Utilize o menu que se encontra na parte inferior da janela para selecionar um arquivo de registo de dados que vai ser utilizado quando aplicar a função de reversão a uma base de dados restaurada a partir de um arquivo. Neste caso, é necessário especificar o arquivo de registo de dados correspondente ao arquivado.

Here is how the rollback function works: when the user clicks the **Rollback** button, 4D shuts the current database and restores the last backup of the database data. A base de dados restaurada é então aberta e 4D integra as operações do arquivo de registo de dados até à operação seleccionada. Se a base de dados ainda não foi guardada, 4D começa com um arquivo de dados em branco.
