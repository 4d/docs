---
id: verify
title: Página Verificação
sidebar_label: Página Verificação
---

Esta página é utilizada para verificar a integridade dos dados. A verificação pode ser efetuada em registos e/ou índices.
Esta página apenas verifica a integridade dos dados. Si se encuentran errores y es necesario repararlos, se le indicará que utilice la página [Reparación](repair.md).

## Acções

A página contém botões de ação que fornecem acesso direto às funções de verificação.

> Quando o banco de dados é criptografado, a verificação inclui a validação da consistência dos dados criptografados. Se ainda não tiver sido fornecida uma chave de dados válida, é apresentada um diálogo que pede a frase-chave ou a chave de dados.

- **Verificar los registros y los índices:** inicia el procedimiento de verificación total de los datos.
- **Verificar sólo los registros**: inicia el procedimiento de verificación sólo para los registros (los índices no se verifican).
- **Verificar sólo los índices**: inicia el procedimiento de verificación sólo para los índices(los registros no se verifican).

> &#062; &#062; &#062; &#062; &#062; A verificação de registros e índices também pode ser realizada no modo detalhado, tabela por tabela (consulte a seção Detalhes abaixo).

## Abrir arquivo de registo

Independientemente de la verificación solicitada, 4D genera un archivo de historial en la carpeta `Logs` de la aplicación. Esse arquivo lista todas as verificações realizadas e indica os erros encontrados, quando aplicável ([OK] é exibido quando a verificação está correta). It is created in XML format and is named: *ApplicationName__Verify_Log__yyyy-mm-dd hh-mm-ss*.xml where:

- *ApplicationName* es el nombre del archivo del proyecto sin ninguna extensión, por ejemplo "Facturas",
- *yyyy-mm-dd hh-mm-ss* es la marca de tiempo del archivo, basada en la hora del sistema local cuando se inició la operación de mantenimiento, por ejemplo "2019-02-11 15-20-45".

Al presionar el botón **Abrir archivo de historial**, 4D muestra el archivo de historial más reciente en el navegador por defecto de la máquina.

## Detalhes

El botón **Lista de tablas** muestra una página detallada que puede utilizarse para ver y seleccionar los registros e índices reales que se van a verificar:

![](../assets/en/MSC/MSC_Verify.png)

A especificação dos itens a serem verificados permite que você economize tempo durante o procedimento de verificação.

A lista principal apresenta todas as tabelas da base de dados. Para cada tabela, é possível limitar a verificação aos registros e/ou a cada índice. Expanda o conteúdo de uma tabela ou os campos indexados e marque/desmarque as caixas de seleção conforme desejado. Por padrão, tudo está selecionado. También puede utilizar los botones de acceso directo **Seleccionar todo**, **Deseleccionar todo**, **Todos los registros** y **Todos los índices**.

Para cada linha da tabela, a coluna "Ação" indica as operações a realizar. Quando a tabela é expandida, as linhas "Registros" e "Campos indexados" indicam o número de itens em questão.

A coluna "Estado" exibe o estado de verificação de cada item usando símbolos:

| ![](../assets/en/MSC/MSC_OK.png)  | A verificação foi efetuada sem problema      |
| --------------------------------- | -------------------------------------------- |
| ![](../assets/en/MSC/MSC_KO2.png) | Verificação efectuada, problemas encontrados |
| ![](../assets/en/MSC/MSC_KO3.png) | Verificação parcialmente efectuada           |
| ![](../assets/en/MSC/MSC_KO.png)  | Verificação não efectuada                    |

Haga clic en **Verificar** para comenzar la verificación o en **Estándar** para volver a la página estándar.

El botón **Abrir archivo de historial** puede utilizarse para mostrar el archivo de historialen el navegador predeterminado de la máquina (ver [Abrir archivo de historial](#abrir-archivo-de-registro) arriba).

> A página padrão não considerará as modificações feitas na página detalhada: quando você clica em um botão de verificação na página padrão, todos os itens são verificados. Por outro lado, as configurações feitas na página detalhada são mantidas de uma sessão para outra.
