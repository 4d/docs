---
id: getting-started
title: Começando
---

4D View Pro is a [4D component](Concepts/components.md) that includes a [4D form area](FormObjects/viewProArea_overview.md) and specific [commands](commands.md). Permite que você incorpore funcionalidades avançadas de planilha em seus projetos.

![](../assets/en/ViewPro/vpSpreadsheet.png)

Uma planilha é uma aplicação que contém uma grade de células onde você pode inserir informações, executar cálculos ou exibir imagens. 4D View Pro es alimentado por la [solución de hoja de cálculo SpreadJS](https://developer.mescius.com/spreadjs) integrada en 4D.

A incorporação de áreas do 4D View Pro em seus formulários permite importar e exportar documentos de planilhas eletrônicas usando os comandos do 4D View Pro.

## Instalação e ativação

4D View Pro must be installed in your projects. The 4D View Pro component is available from the [**4D-ViewPro github repository**](https://github.com/4d/4D-ViewPro).

The easiest way to install 4D View Pro in an opened project is to use the Dependency Manager:

1. Open the [Dependency Manager](../Project/components.md) window.
2. Click on the **+** button to add a component.
3. Click on the **GitHub** tab.
4. Select **4d/4D-ViewPro** in the [default list of components](../Extensions/overview.md) and (recommended) **Follow 4D version** as [Dependency rule](../Project/components.md#defining-a-github-dependency-version-range), then click **Add**.

![](../assets/en/ViewPro/install.png)

Once you restart the project, the 4D View Pro component is installed as a [Github dependency](../Project/components.md#adding-a-github-dependency).

4D View Pro requires a license. Você precisa ativar essa licença em seu aplicativo para usar seus recursos. Ao usar esse componente sem uma licença, o conteúdo de um objeto que requer um recurso do 4D View Pro não é exibido em tempo de execução; em vez disso, é exibida uma mensagem de erro:

![](../assets/en/ViewPro/licenseError.png)

## Inserção de uma área 4D View Pro

Los documentos de 4D View Pro se muestran y editan manualmente en un [objeto de formulario 4D](FormObjects/viewProArea_overview.md) llamado 4D View Pro. Para selecionar este objeto, clique na última ferramenta da barra de objetos:

![](../assets/en/ViewPro/vpArea.png)

También puede seleccionar un área 4D View Pro preconfigurada en la [librería de objetos](FormEditor/objectLibrary.md).

> Las áreas 4D View Pro también pueden ser [creadas y utilizadas fuera de la pantalla](commands/vp-run-offscreen-area.md).

Puede [configurar el área](configuring.md) utilizando los comandos de la Lista de Propiedades y 4D View Pro.

## Noções básicas de seleção, introdução e navegação

As folhas de cálculo são compostas por linhas e colunas. A cada linha está associado um número. Uma letra (ou grupo de letras, uma vez que o número de colunas ultrapassa o número de letras do alfabeto) é associada a cada coluna. A intersecção de uma linha e de uma coluna constitui uma célula. As células podem ser seleccionadas e o seu conteúdo editado.

### Seleção de células, colunas e linhas

- Para selecionar uma célula, basta clicar nela ou usar as setas de direção do teclado. O seu conteúdo (ou fórmula) é apresentado na célula.

- Para selecionar várias células contínuas, arraste o mouse de uma extremidade da seleção para a outra. Você também pode clicar nas duas extremidades da seleção enquanto mantém pressionada a tecla Shift.

- To select all cells in the spreadsheet, click on the cell at the top left of the area:
  ![](../assets/en/ViewPro/vpSelectAll.PNG)

- Para selecionar uma coluna, clique na letra correspondente (ou conjunto de letras).

- Para selecionar uma linha, clique no número correspondente.

- Para seleccionar un grupo de celdas que no sean continuas, mantenga presionada la tecla **Ctrl** (Windows) o la tecla **Comando** (Mac) y haga clic en cada celda que desee seleccionar.

- Para anular a seleção de células, basta clicar em qualquer parte da folha de cálculo.

### Introdução de dados

Clicar duas vezes em uma célula permite passar para o modo entrada na célula relevante. Se a célula não estiver vazia, o cursor de inserção será colocado após o conteúdo da célula.

![](../assets/en/ViewPro/vpInput.PNG)

Os dados podem ser inseridos diretamente quando uma célula já estiver selecionada, mesmo que o cursor de inserção não esteja visível. The input then replaces the content of the cell.

La tecla **Tab** valida la entrada de la celda y selecciona la celda a su derecha. Combinando las teclas **Mayús + Tab** se valida la entrada de la celda y se selecciona la celda a su izquierda.

La tecla **Retorno de carro** valida la entrada de la celda y selecciona la celda de abajo. Combinando las teclas **Mayús + Retorno de carro** se valida la entrada de la celda y se selecciona la celda superior.

As teclas de direção (setas) permitem que você mova uma célula na direção indicada pela seta.

### Utilizar o menu de contexto

As áreas do 4D View Pro se beneficiam de um menu de contexto automático que oferece recursos de edição padrão, como copiar e colar, mas também recursos básicos de planilha eletrônica:

![](../assets/en/ViewPro/vpContext.PNG)

> Os recursos Copiar/Cortar e Colar do menu de contexto funcionam apenas na área da planilha, não tendo acesso à área de transferência do sistema. Sin embargo, los atajos del sistema como **Ctrl+c/Ctrl+v** funcionan y pueden utilizarse para intercambiar datos entre el área y otras aplicaciones.

Dependendo da área clicada, as seguintes opções também estão disponíveis:

- haga clic en el encabezado de una columna o línea: **Insertar**, **Borrar**, **Ocultar**, o **Mostrar** el contenido
- clique numa célula ou num intervalo de células:
  - **Filtrar**: permite ocultar la línea mediante filtros (ver "Filtrar las líneas" en la [documentación de SpreadJS](https://developer.mescius.com/spreadjs/docs/)).
  - **Ordenar**: ordena el contenido de la columna.
  - **Insertar comentario**: permite al usuario introducir un comentario para un área. When a comment has been entered for an area, the top left cell of the area displays a small red triangle:\
    ![](../assets/en/ViewPro/vpContext2.PNG)

## Uso dos comandos 4D View Pro

4D View Pro commands can be used in the 4D Code Editor, just like 4D language commands.

Since 4D View Pro is a built-in 4D component, you can access its list of commands from the Explorer, in the **Component Methods** section:

![component-methods](../assets/en/ViewPro/explorer-methods.png)

Para obtener una lista detallada, consulte [Comandos](commands.md).

### Processamento de uma zona 4D View Pro

Uma área 4D View Pro lida com vários objetos e elementos.

![](../assets/en/ViewPro/vpDocument.PNG)

Most of 4D View Pro commands require a *vpAreaName* parameter, which is the [**4D View Pro form area name**](FormObjects/viewProArea_overview.md) (4D form object). Este nombre es la propiedad del [nombre del objeto](FormObjects/properties_Object.md#object-name).

Por exemplo, se quiser definir o número total de colunas de uma área chamada "myVpArea", escreva:

```4d
VP SET COLUMN COUNT("myVpArea";5)
```

> Cuando se carga un objeto 4D View Pro en un área de formulario, 4D genera el evento formulario [On VP Ready](../Events/onVpReady.md) una vez que se carga toda el área. Você deve executar qualquer código 4D View Pro que lide com a área neste evento, caso contrário um erro é devolvido.

### Utilização de objectos de intervalo

Algunos comandos 4D View Pro requieren un parámetro *rangeObj*. No 4D View Pro, um intervalo é um objeto que referir-se a uma área em uma planilha. Esta área pode ser composta por uma ou várias células. Using 4D View Pro commands, you can create ranges and pass them to other commands to read from or write to specific locations in your document.

Por exemplo, para criar um objeto intervalo para as seguintes células:

![](../assets/en/ViewPro/vp-cells.png)

Puede utilizar el método [VP Cell](commands/vp-cells.md):

```4d
var $myRange : Object
$myRange:=VP Cells("ViewProArea";2;4;2;3) // C5 a D7
```

Você pode então passar `$myRange` para outro método 4D View Pro para modificar essas células (por exemplo, adicione uma borda ao conjunto de células com [VP SET BORDER](commands/vp-set-border.md)).

Os objectos intervalo 4D View Pro são compostos por várias propriedades:

- área - O nome da área 4D View Pro
- intervalos - Uma coleção de objeto(s) intervalo. As propriedades disponíveis em cada objeto de intervalo dependem do tipo de objeto de intervalo. Por ejemplo, un objeto rango de tipo columna sólo incluirá las propiedades *.column* y *.sheet*.

| Propriedade |                                                                                       | Tipo       | Descrição                                                                                                       | Disponível para                                              |
| ----------- | ------------------------------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| area        |                                                                                       | text       | Nome de objeto formulário área 4D View Pro                                                                      | sempre disponível                                            |
| ranges      |                                                                                       | collection | Coleção de intervalo(s)                                                                      | sempre disponível                                            |
|             | \[ ].name        | text       | Nome do intervalo                                                                                               | name                                                         |
|             | \[ ].sheet       | number     | Índice da folha (índice da folha atual por padrão) (contagem começa em 0) | célula, células, linha, linhas, coluna, colunas, todas, nome |
|             | \[ ].row         | number     | Índice da linha (a contagem começa em 0)                                                     | célula, células, linha, linhas                               |
|             | \[ ].rowCount    | number     | Contagem de linhas                                                                                              | células, linhas                                              |
|             | \[ ].column      | number     | Índice da coluna (a contagem começa em 0)                                                    | célula, células, coluna, colunas                             |
|             | \[ ].columnCount | number     | Contagem das colunas                                                                                            | células, colunas                                             |

## Importação e exportação de documentos

4D View Pro suporta a importação e exportação de vários formatos de documentos:

- .4vp
- .xlsx
- .txt e .csv
- .sjs
- .pdf (apenas para exportação)

Para obter mais detalhes, confira a descrição de [VP IMPORT DOCUMENT](commands/vp-import-document.md) e [VP EXPORT DOCUMENT](commands/vp-export-document.md).
