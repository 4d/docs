---
id: debugger
title: Depurador
---

O depurador é útil quando é necessário detetar erros ou monitorizar a execução de métodos. Permite-lhe percorrer o seu código lentamente e examinar a informação. Este processo é designado por "rastreio".

![debugger-window-local](../assets/en/Debugging/debugger-window-intro.png)

## Chamando o depurador

Há várias formas de exibir o depurador:

- Clicar no botão **Trace** na [janela Syntax Error] (basics.md#syntax-error-window)
- Usando o comando [`TRACE`] (https://doc.4d.com/4dv19/help/command/en/page157.html)
- Clicando no botão **Depurar** na janela Executar método ou selecionando o botão **Executar e depurar...** no Editor de Código
- Usando **Alt+Shift+Botão Direito** (Windows) ou **Ctrl+Option+Cmd+Click** (macOS) enquanto um método está sendo executado, em seguida, selecionando o processo para rastrear no menu pop-up:

![open-debugger](../assets/en/Debugging/openDebugger.png)

- Clicar no botão **Trace** quando um processo for selecionado na página Process (Processo) do Runtime Explorer.
- Adicionar um ponto de interrupção na janela do Editor de código ou nas páginas Break e Catch do Explorador de execução.

Quando chamada, a janela do depurador fornece o nome do método ou da função de classe que rastreia atualmente e a ação que causa o aparecimento inicial da janela do depurador. Por exemplo, na janela do depurador acima:

- \*Clients_BuildLogo é o método que é rastreado
- A janela do depurador apareceu porque detectou uma chamada para o comando `C_PICTURE` e este comando era um dos comandos a ser pego

A exibição de uma nova janela do depurador utiliza a mesma configuração que a última janela exibida na mesma sessão. Se executar vários processos usuário, pode rastreá-los de forma independente e ter uma janela do depurador aberta para cada processo.

A janela do depurador é normalmente apresentada na máquina onde o código é executado. Com uma aplicação monousuário, é sempre apresentado na máquina que executa a aplicação. Com uma aplicação cliente/servidor, é apresentado:

- no 4D remoto para o código que está a ser executado localmente
- no computador do servidor para o código em execução no servidor (por exemplo, um método com a opção **executar no servidor**).

> Se o servidor estiver a funcionar sem interface, não pode ser apresentada qualquer janela do depurador no servidor, pelo ser necessário utilizar o depurador remoto. Ver [Depuración desde máquinas remotas](./debugging-remote.md).

## Botões da barra de ferramentas

A barra de ferramentas do depurador inclui vários botões, associados a atalhos predefinidos:

![execution-control-toolbar-buttons](../assets/en/Debugging/executionToolbarButtons.png)

> Os atalhos padrão podem ser personalizados na página Atalhos da caixa de diálogo Preferências.

#### Retomar execução

Interrompe o modo de rastreamento e retoma o curso normal da execução do método.

> **Shift** + **F5** o **Shift** + clic en el botón **No Trace** retoma la ejecución. Também desativa todas as chamadas TRACE subsequentes para o processo atual.

#### Executar passo a passo

Executa a linha de método atual, indicada pelo contador de programa (a seta amarela). O depurador passa para a linha seguinte.

O botão Executar não entra em sub-rotinas e funções, mantém-se ao nível do método que rastreia atualmente. Se você quiser rastrear também as chamadas de subrotinas e funções, use o botão **Step Into**.

Na depuração remota, se o método for executado no servidor, o método principal é chamado após a execução da última linha do método secundário. Se o método pai for executado no lado remoto, o botão **Step Over** terá o mesmo efeito que o botão **No Trace**.

#### Passo a passo detalhado

Quando uma linha que chama outro método (sub-rotina ou função) é executada, clique neste botão para exibir o outro método e percorrê-lo.

O novo método torna-se o atual (topo) método no [Chame Chain Pane](#call-chain-pane) da janela do Depurador.

Ao executar uma linha que não chama outro método, esse botão tem o mesmo efeito que o botão **Step Over**.

#### Step Out

Se estiver rastreando sub-rotinas e funções, clicar nesse botão permite executar todo o método que está sendo rastreado no momento e voltar ao método chamador. A janela do Depurador é trazida de volta ao método anterior na cadeia de chamadas. Se o método atual for o último método na cadeia de chamadas, a janela do Debugger é fechada.

Na depuração remota, na execução da última linha do método, se o método for executado no servidor, o método pai será chamado. Se o método pai for executado no lado remoto, o botão **Step Over** terá o mesmo efeito que o botão **No Trace**.

#### Step Into Process

Na execução de uma linha que cria um novo processo (ou seja, ao chamar o comando Novo processo), este botão abre uma nova janela do Depurador que permite rastrear o método do processo do processo recém-criado. Na execução de uma linha que não cria um novo processo, esse botão atua da mesma forma que o botão Step Over.

#### Abortar

Interrompe a execução do método e regressa ao estado anterior ao início da execução do método:

- Ao rastrear um método formulário ou um método objeto em execução em resposta a um evento: pára e retorna ao formulário.
- Ao rastrear um método em execução no ambiente do aplicativo: pára e retorna ao ambiente.

#### Abortar e editar

Pausa na execução do método. O método que está sendo executado quando você clica no botão **Abortar e editar** é aberto no Editor de código.

> **Sugestão**: Utilize este botão quando você sabe quais alterações são necessárias no seu código e quando essas alterações são necessárias para prosseguir com o teste dos seus métodos. Quando terminar as alterações, volte a executar o método.

#### Editar

Pausa na execução do método. O método executado no momento em que se clica no botão Editar abre-se no Editor de código.

Se utilizar este botão para modificar um método, as modificações só entram em vigor na próxima vez que este for executado.

> **Dica:** Use este botão quando você souber quais alterações são necessárias no seu código e quando eles não interferem com o resto do código a ser executado ou rastreado.

#### Botão Salvar parâmetros

Salva a configuração atual da janela do depurador e a torna a configuração padrão. Isto inclui:

- o tamanho e a posição da janela
- a posição das linhas de divisão e o conteúdo da área que avalia as expressões

Estes parâmetros são armazenados no projeto.

Essa ação não está disponível no modo de depuração remota (consulte [Depuração de máquinas remotas](./debugging-remote)).

## Janela de expressão

O painel **Watch** é exibido no canto superior esquerdo da janela do depurador, abaixo da barra de ferramentas de controle de execução. Aqui um exemplo simples:

![watch-pane](../assets/en/Debugging/watchPane.png)

> Este painel não está disponível no modo de depuração remota.

O painel de expressão: **Watch Pane** exibe informações gerais úteis sobre o sistema, ambiente 4D e ambiente de execução.

A coluna **Expressão** exibe os nomes dos objetos e das expressões. A coluna **Value** exibe seus valores correspondentes atuais. Clicar em qualquer valor no lado direito do painel permite-lhe modificar o valor do objeto, se tal for permitido para esse objeto.

A qualquer momento, você pode arrastar e soltar temas, sublistas de temas (se houver) e itens de temas para o [Custom Watch Pane] (#custom-watch-pane).

### Lista de expressões

#### Objetos linha

Este tema permite-lhe acompanhar os valores dos objetos ou expressões:

- usado na linha de código a ser executada (aquela marcada com o contador de programas - a seta amarela no [Painel Código-fonte] (#painel código-fonte)),
- utilizado na linha de código anterior

Como a linha de código anterior é a que acabou de ser executada antes, este tema mostra os objetos ou expressões da linha atual antes e depois da execução da linha.  Digamos que executa o seguinte método:

```4d
TRACE
$a:=1
$b:=a+1
$c:=a+b
```

1. Uma janela do depurador é aberta com o contador do programa definido para a linha com `a:=1`. Nesse momento, o tema **Line Objects** é exibido:

   | $a | Indefinido |
   | -- | ---------- |

   A variável `$a` ainda não foi inicializada, mas é exibida porque é usada na linha a ser executada.

2. Você clica no botão **Step Over**. O contador do programa está agora definido para a linha `b:=a+1`. Nesta altura, o tema mostra:

   | $a | 1          |
   | -- | ---------- |
   | $b | Indefinido |

   O valor da variável `$a` é agora 1. A variável `$b` ainda não foi inicializada, mas é exibida porque é usada na linha a ser executada.

3. Você clica no botão **Step Over** novamente. O contador do programa está agora definido na linha com c:=a+b. Neste ponto, é exibido o tema Objetos de linha:

   | $c | Indefinido |
   | -- | ---------- |
   | $a | 1          |
   | $b | 2          |

   O valor da variável `$b` é agora 2. A variável `$c` ainda não foi inicializada, mas é exibida porque é usada na linha a ser executada.

#### Variáveis.

Este tema é composto pelos seguintes subtemas:

| Subtema       | Descrição                                                         | Os valores podem ser modificados? |
| ------------- | ----------------------------------------------------------------- | --------------------------------- |
| Interprocesso | Lista de variáveis interprocessos que são utilizadas agora        | Sim                               |
| Processo      | Lista de variáveis processo utilizadas pelo processo atual        | Sim                               |
| Local         | Lista de variáveis locais utilizadas pelo método rastreado        | Sim                               |
| Parâmetros    | Lista dos parâmetros recebidos pelo método                        | Sim                               |
| Self          | Ponteiro para o objeto atual, quando se rastreia um método objeto | Não                               |

Os arrays, como outras variáveis, aparecem nos subtemas Interprocesso, Processo e Local, dependendo do seu escopo. O depurador apresenta os primeiros 100 elementos. Dentro da coluna **Valor**, você pode modificar os valores dos elementos de matriz, mas não o tamanho das matrizes.

Para exibir os tipos de variáveis e seus nomes internos, clique com o botão direito do mouse e marque a opção **Show Types** no menu de contexto:

![show-types-menu-item](../assets/en/Debugging/showTypes.png)

Aqui está o resultado:

![dynamic-variable-names](../assets/en/Debugging/dynamicVariableNames.png)

#### Valores actuais do formulário

Este tema contém o nome de cada objeto dinâmico incluído no formulário atual, bem como o valor da sua variável associada:

![current-form-value](../assets/en/Debugging/current-form-values.png)

Alguns objetos, como os arrays list box, podem ser apresentados como dois objetos distintos, a variável do próprio objeto e a sua fonte de dados.

#### Constantes

Como a página Constantes da janela Explorer, esse tema exibe as constantes predefinidas oferecidas pelo 4D. As expressões deste tema não podem ser modificadas.

#### Semáforos

Este tema lista os semáforos locais definidos atualmente. Para cada semáforo, a coluna Valor fornece o nome do processo que define o semáforo. As expressões deste tema não podem ser modificadas. The expressions from this theme cannot be modified.

#### Processos

Este tema enumera os processos iniciados desde o início da sessão de trabalho. A coluna do valor apresenta o tempo utilizado e o estado atual de cada processo (ou seja, Executando, pausado, etc.). As expressões deste tema não podem ser modificadas.

#### Tabela

Este tema lista as tabelas e campos na base de dados 4D. Para cada item da Tabela, a coluna Valor exibe o tamanho da seleção atual para o processo atual, bem como o número de **registros bloqueados**.

Para cada item Campo, a coluna Valor apresenta o valor do campo para o registo atual (exceto imagem e BLOB). Pode modificar os valores dos campos, mas não as informações das tabelas.

#### Conjuntos

Este tema lista os conjuntos definidos no processo atual (aquele que está sendo rastreado) e os conjuntos interprocessos. Para cada conjunto, a coluna Valor apresenta o número de registos e o nome da tabela. As expressões deste tema não podem ser modificadas.

#### Seleções temporárias

Este tema lista as seleções temporárias definidas no processo atual (aquele que está sendo rastreado no momento); ele também lista as seleções temporárias entre processos. Para cada seleção temporária, a coluna Valor apresenta o número de registos e o nome da tabela. As expressões deste tema não podem ser modificadas.

#### Informação

Este tema contém informações gerais sobre o funcionamento da base de dados, tais como a tabela predefinida atual (se existir), espaço de memória físico, virtual, livre e utilizado, destino da consulta, etc.

#### Web

Este tema apresenta informações sobre o servidor Web principal da aplicação (apenas disponível se o servidor Web estiver ativo):

- Arquivo Web para Enviar: nome do arquivo Web aguardando ser enviado (se houver)
- Utilização da cache Web: número de páginas presentes na cache Web, bem como a sua percentagem de utilização
- Tempo decorrido do servidor Web: duração da utilização do servidor Web no formato horas:minutos:segundos
- Contagem de visitas à Web: número total de pedidos HTTP recebidos desde o lançamento do servidor Web, bem como o número instantâneo de pedidos por segundo
- Número de processos Web ativos: número de processos Web ativos, todos os processos Web em conjunto

As expressões contidas neste tema não podem ser modificadas.

### Menu contextual

O menu contextual da janela de expressão oferece opções adicionais.

![context-menu](../assets/en/Debugging/contextual-menu.png)

- **Recolher tudo**: Recolhe todos os níveis da lista hierárquica.
- **Expandir tudo**: Expandir todos os níveis da lista hierárquica.
- **Mostrar tipos**: muestra el tipo de cada elemento de la lista (cuando es apropiado).
- \*\*Mostrar os números dos campos e das tabelas: Apresenta o número de cada tabela ou campo. Útil se trabalhar com números de tabelas ou de campos, ou com apontadores utilizando comandos como Table ou Field\`.
- **Mostrar Ícones**: Cada objeto é precedido por um ícone que indica seu tipo. Você pode desativar essa opção para acelerar a exibição, ou apenas porque você prefere usar apenas a opção **Mostrar Tipos**.
- **Tabelas e Campos classificados**: classifica as tabelas e os campos em ordem alfabética em suas respectivas listas.
- **Mostrar números inteiros em hexadecimal**: Os números são normalmente apresentados em notação decimal. Esta opção apresenta-os em notação hexadecimal. Nota: para introduzir um valor numérico em hexadecimal, digite 0x (zero + "x"), seguido dos dígitos hexadecimais.
- **Activar el seguimiento de la actividad**: activa el seguimiento de la actividad (control avanzado de la actividad interna de la aplicación) y muestra la información obtenida en los temas adicionales: **Programador**, **Web** y **Red**.

## Painel da cadeia de chamadas

Um método pode chamar outros métodos ou funções de classe, que podem chamar outros métodos ou funções. O painel Cadeia de chamadas permite-lhe acompanhar essa hierarquia.

![call-chain-pane](../assets/en/Debugging/call-chain-example.png)

Cada item do nível principal é o nome de um método ou função classe. O item superior é o que é atualmente rastreado, o item seguinte do nível principal é o nome do chamador (o método ou função que chamou o que é atualmente rastreado), o item seguinte é o chamador do chamador, e assim por diante.

Na imagem acima:

- `thirdMethod` no ha recibido ningún parámetro
- `$0` actualmente está indefinido, ya que el método no ha asignado ningún valor a `$0` (porque aún no ha ejecutado esta asignación o porque el método es una subrutina y no una función)
- `secondMethod` ha recibido tres parámetros de `firstMethod`:
  - $1 es un puntero a la tabla `[Employee]`
  - $2 es un puntero al campo `ID` en la tabla  `[Employee]`
  - $3 é um parâmetro alfanumérico cujo valor é "Z"

Puede hacer doble clic en el nombre de cualquier método para mostrar su contenido en la [Ventana de código fuente](#source-code-pane).

Clicar no ícone junto ao nome de um método ou função expande, ou recolhe os parâmetros e o resultado (se existir). Os valores aparecem no lado direito do painel. Clicar em qualquer valor do lado direito permite-lhe alterar o valor de qualquer parâmetro ou resultado de função.

Para mostrar el tipo de parámetro, marque la opción **Mostrar tipos** en el menú contextual:

![call-chain-show-types](../assets/en/Debugging/callChainShowTypes.png)

Después de desplegar la lista de parámetros, puede arrastrar y soltar los parámetros y los resultados de las funciones en el [Custom Watch Pane](#custom-watch-pane).

También puede utilizar el comando [Get call chain](https://doc.4d.com/4dv19/help/command/en/page1662.html) para recuperar la cadena de llamadas por programación.

## Painel de Observação Personalizado

O Painel de controle personalizado é útil para avaliar expressões. Es similar al [panel de control](#watch-pane), excepto que aquí usted decide qué expresiones se muestran. Qualquer tipo de expressão pode ser avaliado:

- campo
- variável
- pointer
- cálculo
- Comando 4D
- method
- e qualquer outra coisa que devolva um valor

![custom-Watch-pane](../assets/en/Debugging/custom-watch-pane.png)

É possível avaliar qualquer expressão que possa ser apresentada sob a forma de texto. Isto não abrange os campos ou variáveis imagem e BLOB. Para mostrar el contenido de los BLOB, puede utilizar comandos BLOB, como [BLOB to text](https://doc.4d.com/4dv19/help/command/en/page555.html).

### Manuseamento de expressões

Existem várias formas de adicionar expressões à lista:

- Arraste e solte um objeto ou expressão do painel Watch ou do painel Call Chain
- Seleccione una expresión en el [panel código fuente](#source-code-pane) y presione **ctrl+D**  (Windows) o **cmd+D** (macOS)
- Dê duplo clique em algum lugar no espaço vazio do Custom Watch Pane (adiciona uma expressão com um nome de espaço reservado que você pode editar)

Pode introduzir qualquer fórmula que devolva um resultado.

Para editar una expresión, haga clic en ella para seleccionarla y, a continuación, vuelva a hacer clic o presione **Intro** en su teclado.

Para eliminar una expresión, haga clic en ella para seleccionarla y, a continuación, presione **Retroceso** o **Borrar** en su teclado.

> **Atención:** tenga cuidado cuando evalúe una expresión 4D que modifique el valor de una de las Variables del Sistema (por ejemplo, la variable OK) porque la ejecución del resto del método puede verse alterada.

### Menu contextual

O menu de contexto do Custom Watch Pane lhe dá acesso ao editor de fórmulas 4D e a outras opções:

![custom-watch-pane-context-menu](../assets/en/Debugging/custom-watch-pane-context-menu.png)

**Nueva expresión**: inserta una nueva expresión y muestra el editor de fórmulas de 4D.

![custom-Watch-pane-context-menu](../assets/en/Debugging/custom-watch-pane-formula-editor.png)

For more information on the Formula Editor, see the [4D Design Reference manual](https://doc.4d.com/4Dv20/4D/20.2/4D-Design-Reference.100-6750070.en.html).

- **Insertar comando**: acceso directo para insertar un comando 4D como una nueva expresión.
- **Borrar todo**: elimina todas las expresiones del panel de control personalizado.
- **Expresiones estándar**: copia la lista de expresiones del panel de control.

> This option is not available in remote debugging mode (see [Debugging from Remote Machines](debugging-remote.md).

- **Contraer todo/Expandir todo**: contrae o expande todas las listas jerárquicas.
- **Mostrar tipos**: muestra el tipo de cada elemento de la lista (cuando es apropiado).
- **Mostrar números de campos y tablas**: muestra el número de las tabla o de los **campos**. Es útil si trabaja con números de tablas o de campos, o con punteros utilizando los comandos `Table` o `Field`.
- **Mostrar iconos**: muestra un icono que denota el tipo de cada elemento.
- **Tablas y campos ordenados**: muestra la tabla y los campos en orden alfabético.
- **Mostrar números enteros en hexadecimal**: muestra los números en notación hexadecimal. Para introduzir um valor numérico em hexadecimal, digite 0x (zero + "x"), seguido dos dígitos hexadecimais.

## Panel de código fuente

O painel Código-fonte mostra o código-fonte do método ou função que está sendo rastreado no momento.

This area also allows you to add or remove [**break points**](breakpoints.md).

### Tips

Passe o ponteiro do rato sobre qualquer expressão para visualizar uma dica de ferramenta que indica:

- o tipo declarado da expressão
- o valor atual da expressão

![source-code-pane](../assets/en/Debugging/sourceCodePane.png)

Isto também funciona com as selecções:

![source-code-pane-tip](../assets/en/Debugging/sourcePaneTip.png)

### Adição de expressões ao painel de controle personalizado

Puede copiar toda expresión seleccionada del panel de código fuente en el [Custom Watch Pane](#custom-watch-pane).

1. No painel de código fonte, selecione a expressão a avaliar
2. Faça uma das seguintes opções:
   - Arraste e solte o texto selecionado na área Expression (Expressão) do Custom Watch Pane (Painel de observação personalizada)
   - Presione **Ctrl+D** (Windows) o **Cmd+D** (macOS)
   - Haga clic con el botón derecho en el texto seleccionado **>** **Copiar al panel de expresiones**

### Contador do programa

A seta amarela na margem esquerda do painel Código-fonte é chamada contador de programa. Marca a linha seguinte a ser executada.

Por padrão, a linha do contador de programas (também designada por linha de execução) é realçada no depurador. Puede personalizar el color de resaltado en la [página Métodos de las Preferencias](Preferences/methods.md).

#### Movendo o contador do programa

Para efeitos de depuração, é possível deslocar o contador de programa para o método no topo da cadeia de chamadas (o método atualmente em execução). Para o fazer, clique e arraste a seta amarela para outra linha.

Isto apenas diz ao depurador para prosseguir o rastreio ou a execução a partir de um ponto diferente. Não executa linhas nem anula a sua execução. Todos os parâmetros, campos, variáveis, etc. atuais não são afetados.

Por exemplo:

```4d
  // ...
 If(This condition)
    DO_SOMETHING
 Else
    DO_SOMETHING_ELSE
 End if
  // ...
```

Digamos que el contador del programa se define en la línea `If (This condition)`.
Al hacer clic en el botón **Step over**, el contador del programa se mueve directamente a la línea `DO_SOMETHING_ELSE`.
Para examinar los resultados de la línea `DO_SOMETHING`, puede mover el contador del programa a esa línea y ejecutarla.

### Menu contextual

O menu contextual do painel Código-fonte fornece acesso a várias funções que são úteis ao executar métodos no modo Rastreamento:

![source-code-pane-context-window](../assets/en/Debugging/sourceCodePaneContext.png)

- **Ir a definición**: va al lugar donde se define el objeto seleccionado. Este comando está disponível para:
  - _Métodos proyecto:_ muestra el contenido de los métodos en una nueva ventana del Editor de Código
  - _Campos_: muestra las propiedades de los campos en el inspector de la ventana de estructura
  - _Tablas:_ muestra las propiedades de la tabla en el inspector de la ventana de estructura
  - _Formularios:_ muestra el formulario en el editor de formularios
  - _Variables_ (locales, proceso, interproceso o parámetro $n): muestra la línea en el método actual o entre los métodos del compilador donde se declara la variable
- **Buscar Referencias** (también disponible en el Editor de Código): busca todos los objetos del proyecto (métodos y formularios) en los que se hace referencia al elemento actual del método. O elemento atual é o elemento selecionado ou o elemento onde se encontra o cursor. Pode ser o nome de um campo, variável, comando, cadeia de caracteres, etc. Os resultados da pesquisa são apresentados numa nova janela de resultados padrão.
- **Copiar**: copia estándar de la expresión seleccionada al portapapeles.
- **Copiar en la ventana de expresión**: copiar la expresión seleccionada en la Ventana de evaluación.
- **Ejecutar hasta el cursor**: ejecuta las instrucciones encontradas entre el contador del programa y la línea seleccionada del método (donde se encuentra el cursor).
- **Fijar siguiente instrucción**: mueve el contador del programa a la línea seleccionada sin ejecutar esta línea ni las intermedias. A linha designada só será executada se o usuário clicar em um dos botões de execução.
- **Alternar punto de interrupción** (también disponible en el Editor de código): inserta o elimina alternativamente el punto de interrupción correspondiente a la línea seleccionada. Isso modifica o ponto de interrupção permanentemente: por exemplo, se você remover um ponto de interrupção no depurador, ele não aparecerá mais no método original.
- **Editar punto de interrupción** (también disponible en el Editor de Código): muestra el diálogo Propiedades del punto de interrupción. Quaisquer alterações efetuadas modificam permanentemente o ponto de interrupção.

### Localizar seguinte/anterior

Os atalhos específicos permitem-lhe encontrar cadeias de caracteres idênticas à que foi selecionada:

- Para buscar las siguientes cadenas idénticas, presione **Ctrl+E** (Windows) o **Cmd+E** (macOS)
- Para buscar las cadenas idénticas anteriores, presione **Ctrl+Shift+E** (Windows) o **Cmd+E** (macOS)

A pesquisa só é efetuada se selecionar pelo menos um carácter no painel Código fonte.

## Atalhos

Esta secção lista todos os atalhos disponíveis na janela do depurador.

> La barra de herramientas también tiene [accesos directos](#tool-bar-buttons).

#### Ventana de evaluación & Subventana de evaluación personalizada

- Un **doble clic** en un elemento de la ventana de expresión para copiarlo en la ventana de evaluación
- Un **doble clic** en la ventana de evaluación crea una nueva expresión

#### Panel de código fuente

- Clique na margem esquerda para definir ou remover pontos de quebra.
- **Alt+Mayús+clic** (Windows) o **Option+Mayús+clic** (macOS) define un punto de interrupción temporal.
- **Alt-Clic** (Windows) u **Opción-Clic** muestra la ventana de las propiedades del punto de interrupción para un punto de ruptura nuevo o existente.
- Uma expressão ou objeto selecionado pode ser copiado para a janela de avaliação personalizada através de um simples arrastar e largar.
- **Ctrl+D** (Windows) o **Comando+D** (macOS) en un texto seleccionado lo copia en la ventana de evaluación.
- **Ctrl+E** (Windows) o **Comando+E** (macOS) identifica los canales posteriores que son idénticos al canal seleccionado.
- **Ctrl+Mayús+E** (Windows) o **Comando+Mayús+E** (macOS) identifica los canales posteriores que son idénticos al canal seleccionado.

#### Todas as janelas

- **Ctrl** + **+/-** (Windows) o **Comando** + **+/-** (macOS) aumenta o disminuye el tamaño de la fuente para una mejor legibilidad. O tamanho de letra modificado também é aplicado ao Editor de código sendo guardado nas Preferências.
- **Ctrl + \*** (Windows) o **Comando + \*** (macOS) fuerza la actualización del Panel de Control.
- Si no hay ningún elemento seleccionado en las ventanas, presione **Intro** para avanzar.
- Quando um valor de item é selecionado, utilize as teclas de setas para navegar na lista.
- Ao editar um item, utilize as teclas de seta para mover o cursor. Utilize Ctrl-A/X/C/V (Windows) ou Comandó-A/X/C/V (macOS) como atalhos para os comandos de menu Selecionar tudo/Cortar/Copiar/Colar do menu Editar.
