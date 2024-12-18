---
id: compiler
title: Compilação
---

Você pode compilar seus projetos, ou seja, traduzir todos os seus métodos para a linguagem da máquina. Compilar um projeto permite que você verifique a consistência do código e acelere a sua execução, Além de tornar possível ofuscar o código na sua totalidade. A compilação constitui um passo indispensável entre o desenvolvimento de projectos que utilizam o 4D e a sua implantação como aplicações isoladas.


## Compilar

A compilação é tratada do seu aplicativo 4D e é inteiramente automática.

> En macOS, la compilación requiere que instale `Xcode`. Consulte [esta seção](#silicon-compiler) para obter mais informações sobre esse requisito.

1. Abra a janela do compilador selecionando o comando **Compiler...** no menu **Desenho** ou o botão da barra de ferramentas **Compiler**.

    ![](../assets/en/Project/compilerWin1.png)

    ![](../assets/en/Project/comp1.png)

> Você também pode iniciar diretamente a compilação selecionando o item de menu **Iniciar Compilação** do menu **Desenho**.

2. Clique no botão **Compilar** para iniciar a compilação usando as atuais configurações [de compilação](#compiler-settings).

Se nenhum erro for detectado, a compilação atual começa e a mensagem "Compilação com sucesso" é exibida na parte inferior da janela quando a compilação é concluída:

![](../assets/en/Project/success.png)

Você pode imediatamente [executar sua aplicação em modo compilado](#run-compiled) e ver o quão mais rápido ela é.

Se erros forem detectados, o processo é interrompido e a mensagem "Compilação falhou" é exibida. A área de informação da janela exibe os nomes de métodos e números de linha envolvidos em uma lista hierárquica:

![](../assets/en/Project/compilerWin2.png)

Clique duas vezes em cada erro detectado para abrir o método ou a classe em questão diretamente no Editor de Código 4D. A linha que contém o erro é destacada e o tipo de erro é exibido na área de sintaxe da janela.

Use os comandos **Previous Error (Erro anterior** )/ **Next Error (Próximo erro** ) do menu **Method (Método** ) para navegar de um erro para o próximo.

O número de erros encontrados durante as suas primeiras compilações pode ser um desafio, mas não deixe isso te avisar. Logo você descobrirá que eles muitas vezes nascem da mesma fonte, ou seja, não conformidade com certas convenções do projeto. O compilador sempre fornece um [diagnóstico preciso](#error-file) dos erros para ajudá-lo a corrigi-los.

> A compilação requer uma licença adequada. Sem esta licença, não é possível realizar uma compilação (os botões estão desativados). No entanto, ainda é possível verificar a sintaxe e gerar métodos de digitação.

## Executar a compilação

Depois que um projeto é compilado, é possível mudar do [modo interpretado para o modo compilado](Concepts/interpreted.md), e vice-versa, a qualquer momento e sem precisar sair do aplicativo 4D (exceto quando o código interpretado tiver sido removido). Para fazer isso, use o tge **Reiniciar Interpretado** e **Reiniciar os comandos** do menu **Executar**. A [caixa de diálogo Abrir projeto](GettingStarted/creating.md#options) também oferece uma opção entre o modo interpretado ou compilado para a inicialização do banco de dados.

Quando você alternar de um modo para o outro, a 4D fecha o modo atual e abre o novo. Isto é equivalente a sair e reabrir a aplicação. Cada vez que você mudar de um modo para outro, O 4D executa os dois seguintes métodos de banco de dados (se especificado) nessa ordem: `On Exit` -> `On Startup`.

Se você modificar seu projeto em modo interpretado, é necessário recompilá-lo para que suas edições sejam consideradas no modo compilado.

## Características da janela do compilador

Além do botão[**Compilar**](#compile), a janela Compilador oferece recursos adicionais que são úteis durante a fase de desenvolvimento do projeto.

### Verificar sintaxe

O botão **Verificar sintaxe** inicia a execução da fase de verificação de sintaxe. No final do processo de verificação, todos os erros detectados são listados na área de informações. Você pode clicar duas vezes em uma linha de erro para exibir o método correspondente.

A verificação de sintaxe também pode ser iniciada diretamente usando o comando **Check Syntax** associado ao botão da barra de ferramentas **Compiler**. Esta é a única opção disponível se você não tiver uma licença adequada para permitir a compilação de aplicativos.

### Gerar digitação

O botão **Generate Typing (Gerar digitação** ) cria ou atualiza os métodos do compilador de digitação. Os métodos do Compilador são métodos do projeto que agrupam todas as declarações de digitação de variável e matriz (processo e interprocesso), assim como os parâmetros do [método](../Concepts/parameters.md#compiler_methods-method). Esses métodos, quando eles existem, são usados diretamente pelo compilador durante a compilação de código, resultando em tempos de compilação mais rápidos.

O nome desses métodos deve começar com `Compiler_`. Você pode definir o nome padrão para cada um dos 5 métodos do compilador na janela de configurações [do compilador](#compiler-methods-for). Os métodos do compilador que são gerados e mantidos pelo 4D automaticamente têm o atributo `Invisível`:

![](../assets/en/Project/compilerWin3.png)

Apenas os métodos necessários do compilador (ou seja, aqueles para os quais os itens já existem no projeto) são gerados.

A área de informação indica quaisquer erros encontrados durante a criação ou atualização de métodos. Clicar duas vezes em uma linha de erro faz com que o método e a linha em questão sejam exibidos no Editor de código.


### Limpar código compilado

O botão **Limpar código compilado** exclui o código compilado do projeto. Quando você clica nela, todo o [código gerado durante a compilação](#classic-compiler) é excluído, o comando **Reiniciar compilado** do menu **Executar** é desativado e a opção "Projeto compilado" não está disponível na inicialização.


### Mostrar/ocultar avisos

Avisos são mensagens específicas geradas pelo compilador quando verifica a sintaxe. Essas mensagens têm o objetivo de chamar sua atenção para declarações que podem levar a erros de execução. Não impedem a compilação.

Dependendo das circunstâncias e do estilo de programação usado, esses avisos podem ser mais ou menos relevantes. Você pode ativar ou desativar os avisos clicando no botão **Show/Hide Warnings (Mostrar/Ocultar avisos** ):

![](../assets/en/Project/compilerWin4.png)

Quando essa opção for marcada, os avisos (se houver) são exibidos na janela, após os outros tipos de erro. Estas aparecem em itálico:

![](../assets/en/Project/compilerWin5.png)

Um duplo clique num aviso abre o método correspondente.

#### Desativar os avisos durante a compilação

Você pode desativar seletivamente determinados avisos durante a compilação inserindo o seguinte no código de um método 4D:

```4d
  //%W-<warning number>
```

Apenas os avisos com números podem ser desactivados. Os números de aviso são especificados no final de cada mensagem na lista de erros de compilação. Por exemplo, para desativar o seguinte aviso:

*1: Ponteiro numa declaração de array (518.5)*

... você só precisa escrever o seguinte comentário em um método 4D, de preferência um método `COMPILER_xxx` (método compilado primeiro):

```4d
  //%W-518.5
```



## Parâmetros do compilador

A página "Compiler" (Compilador) da caixa de diálogo Settings (Configurações) permite que você defina parâmetros relacionados à compilação do projeto. Você pode abrir diretamente esta página a partir da janela do compilador [](#compiler-window) clicando no botão **Configurações do Compilador**:

![](../assets/en/Project/compilerWin6.png)


### Opções de compilação

Essa área agrupa as opções genéricas usadas durante o processo de compilação.

#### Gerar o arquivo de símbolo

Usado para gerar o arquivo de símbolo (veja \[arquivo de símbolo\](#símbolo-arquivo). O arquivo de símbolo é criado na pasta [Logs](Project/architecture.md#logs) do projeto com o nome `ProjectName_symbols.txt`.

#### Gerar arquivo de erro

Usado para gerar o arquivo de erro (consulte \[arquivo de erro\](#error-file)) no momento da verificação de sintaxe. O arquivo de símbolo é criado na pasta [Logs](Project/architecture.md#logs) do projeto com o nome `ProjectName_symbols.txt`.


#### Caminho de compilação

Usado para definir o número de passagens (análise de código) realizadas pelo compilador e, portanto, a duração da compilação.

- **Digite as variáveis**: Passes por todos os estágios que tornam possível a compilação.
- **As variáveis de processo e interprocesso são digitadas**: O passe para digitação de processo e variáveis de interprocesso, bem como parâmetros de método, não é realizado. Esta opção pode ser usada quando você já realizou a digitação de todos os seus processos e variáveis de processo por conta própria ou usando a função para a geração automática de métodos do compilador.
- **Todas as variáveis são digitadas**: A passagem para a digitação de variáveis locais, de processo e interprocessos, bem como de parâmetros de método, não é executada. Use essa opção quando tiver certeza de que todo o processo, interprocessos e variáveis locais, bem como parâmetros de métodos, foram claramente digitados.

#### Objectivo de compilação

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19      | Adicionado |

</details>

Esta configuração permite selecionar a família de processadores para a qual seu projeto 4D deve ser compilado nativamente. O compilador 4D pode criar código nativo para duas famílias de processadores:

- Os processadores **Intel/AMD** (todas as máquinas),
- os processadores **Apple Silicon**.

Duas opções de alvo estão disponíveis. O resultado depende do processador da máquina em que 4D está em execução.

| *Opção*                                                | *no Windows Intel/AMD*                                                                    | *macOS Intel*                                                                                             | *no macOS Silicon*                                                                                          |
| ------------------------------------------------------ | ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| **Todos os processadores (Intel/AMD e Apple Silicon)** | Código para Intel/AMD<br/>*Não é possível produzir código Apple Silicon no Windows* | Código para Apple Silicon + Código para Intel/AMD<br/>*Dois códigos compilados estarão disponíveis* | Código para o Apple Silicon + Código para Intel/AMD<br/>*Dois códigos compilados estarão disponíveis* |
| **O meu processador (processador)**                    | Código para Intel/AMD                                                                     | Código para Intel/AMD                                                                                     | Código para Apple Silicon                                                                                   |

> O alvo do compilador Apple Silicon requer que o aplicativo **Clang** esteja instalado em sua máquina. Clang vem com a versão mais recente do Xcode. Consulte os [requisitos do compilador Silicon](#requirements) para obter mais informações.

### Digitação padrão

Use esta área para definir o tipo padrão para objetos de banco de dados ambíguos.

- **Numérico**: Usado para forçar a digitação numérica de forma inequívoca, seja em real ou longint. Isso não substituirá as diretivas que você possa ter definido no seu projeto. Você pode otimizar a execução do seu banco de dados escolhendo o tipo Longint.
- **Botão**: Usado para forçar a digitação do botão de maneira inequívoca, seja em real ou longint. Isso não substituirá as diretivas que você possa ter definido em seu projeto. Este tipo se aplica a botões, bem como caixas de seleção, botões de imagem, grades de botão, botões de rádio, imagens de menus pop-up e listas suspensas.

### Compiler Methods for

Esta área permite renomear os métodos do Compilador gerados automaticamente pelo compilador quando você clica em [Gerar Typing](#generate-typing).

Podem ser gerados até 5 métodos de compilação; um método de compilação só é gerado se o projeto contiver os seguintes itens:

- **Variáveis**: Agrupa as declarações de variáveis do processo;
- **Variáveis de interprocessos**: Agrupa as declarações de variáveis interprocessuais;
- **Arrays**: Agrupa as declarações de arrays de processos;
- **Arrays de interprocessos**: Agrupa declarações de matrizes interprocessos;
- **Métodos**: Agrupa as declarações de parâmetro do método (por exemplo, `C_LONGINT(meumétodo;$1;$2)`). Para obter mais informações, consulte [`Compiler_Methods` method](../Concepts/parameters.md#compiler_methods-method).

Você pode renomear cada um desses métodos nas áreas correspondentes, mas eles sempre serão precedidos pela etiqueta `Compiler_` (não modificável). O nome de cada método (prefixo incluído) não deve ter mais de 31 caracteres. Ele também deve ser único e cumprir as regras [4D para nomear métodos](Concepts/identifiers.md#project-methods).


## Ferramentas de compilação

### Arquivo Symbol

Se você marcar a opção [**Gerar o arquivo de símbolos**](#generate-the-symbol-file) nas configurações do compilador, um arquivo de símbolos chamado `ProjectName_symbols.txt` será criado na [pasta Logs](Project/architecture.md#logs) do projeto durante a compilação. Está dividido en varias partes:

#### Lista das variáveis processo e interprocesso

Estas duas listas contêm quatro colunas:

- Nomes de variáveis e matrizes de processo e interprocesso usadas em seu projeto. Estas variáveis são enumeradas por ordem alfabética.
- Tipo da variável. Os tipos são definidos por comandos da diretiva do compilador ou são determinados pelo compilador com base na utilização da variável. Se o tipo de uma variável não puder ser determinado, a coluna estará vazia.
- Número de dimensões se a variável for um array.
- Referência ao contexto no qual o compilador estabeleceu o tipo da variável. Se a variável é usada em vários contextos, o contexto mencionado é o usado pelo compilador para determinar seu tipo.
    - Se a variável foi encontrada em um método de banco de dados, o nome do método de banco de dados é dado, precedido por (M)*.
    - Se a variável foi encontrada em um método do projeto, o método é identificado como foi definido em 4D, precedido por (M).
    - Se a variável for encontrada em um gatilho, o nome da tabela é dado, precedido por (TM).
    - Se a variável foi encontrada em um método do formulário, o nome do formulário é dado, precedido pelo nome da tabela e (FM).
    - Se a variável foi encontrada em um método do objeto, o nome do método do objeto é fornecido, precedido pelo nome do formulário, nome da tabela, e por (OM).
    - Se a variável for um objeto em um formulário e não aparecer em qualquer projeto, formulário, método do objeto, ou gatilho, o nome do formulário em que aparece é dado, precedido por (F). No final de cada lista, você pode encontrar os tamanhos das variáveis do processo e interprocessos em bytes.

> Durante a compilação, o compilador não pode determinar em qual processo uma determinada variável de processo é usada. Uma variável processo pode ter um valor diferente em cada processo. Consequentemente, todas as variáveis do processo são sistematicamente duplicadas à medida que cada novo processo é lançado: portanto, é aconselhável ter cuidado com a quantidade de memória que eles vão utilizar. Além disso, lembre-se de que o espaço para as variáveis do processo não está relacionado ao tamanho da pilha do processo.

#### Lista de variáveis locais

A lista de variáveis locais é classificada pelo método do banco de dados, método do projeto, acionado, método do formulário e método do objeto, na mesma ordem que em 4D.

Esta lista está dividida em três colunas:

- lista das variáveis locais utilizadas no método;
- tipo da variável;
- número de dimensões se a variável for um array.

#### Lista completa de métodos

Uma lista completa de seus métodos banco de dados e projeto é apresentada no final do ficheiro com:

- o seu tipo (procedimento ou função que devolve um valor)
- os tipos de dados de seus parâmetros e o resultado retornado
- o número de chamadas
- a propriedade Thread Safe ou Thread Unsafe.

Esta informação aparece da seguinte forma:

```
Procedimiento o función <Method name>(tipos de datos de los parámetros):
tipo resultado, número de llamadas, Thread Safe o Thread Unsafe
```

### Arquivo de erros

Você pode escolher se deseja ou não gerar um arquivo de erro durante a compilação usando a opção [**Gerar arquivo de erro**](#generate-error-file) nas configurações do compilador. O arquivo de erro é automaticamente denominado `projectName_errors.xml` e é colocado na [pasta Logs](Project/architecture.md#logs) do projeto.

Embora os erros possam ser acessados diretamente pela [janela do compilador](#compile), pode ser útil ter um arquivo de erros que possa ser transmitido de uma máquina para outra. O arquivo de erro é gerado no formato XML para facilitar a análise automática de seu conteúdo. Também permite a criação de interfaces customizadas de exibição de erros.

O tamanho do arquivo de erros depende do número de erros e avisos emitidos pelo compilador.

A estrutura do ficheiro de erros é a seguinte:

- Na parte superior do arquivo está a lista de erros e avisos, classificados por método e em sua ordem de criação em 4D.
- **General errors**: These are errors that make it impossible to compile the project. There are two cases in which the compiler reports a general error:
    - número da linha no método (0 indica erros gerais)
    - atributo de aviso indicando se a anomalia detectada é um aviso (warning="true") ou um erro (warning="false")
    - diagnóstico que descreve o erro

Se o seu projeto não tiver nenhum erro geral, o arquivo não terá uma seção de *erros gerais*.

Um arquivo de erro pode conter três tipos de mensagens:

- **Erros vinculados a uma linha específica**: esses erros são exibidos no contexto — a linha em que foram encontrados — com uma explicação. O compilador relata esse tipo de erro quando encontra uma expressão em que vê uma inconsistência relacionada ao tipo de dados ou sintaxe. Na janela do compilador, clique duas vezes em cada erro detectado para abrir o método em questão diretamente no Editor de Código 4D, com a linha que contém o erro destacado.

- **Erros gerais**: São erros que impossibilitam a compilação do projeto. Há dois casos em que o compilador informa um erro geral:
    - Não foi possível determinar o tipo de dados de uma variável processo.
    - Dois tipos diferentes de objetos têm o mesmo nome.

Os erros gerais são assim chamados porque não podem ser vinculados a nenhum método específico. No primeiro caso, o compilador não pôde executar uma digitação especificada em nenhum lugar do projeto. No segundo, ele não conseguiu decidir se associava um determinado nome a um objeto e não a outro.

- **Avisos**: os avisos não são erros. Eles não impedem que o projeto seja compilado, mas simplesmente apontam possíveis erros de código. Na janela do compilador, os avisos aparecem em itálico. Clique duas vezes em cada aviso para abrir o método em questão diretamente no Editor de Código 4D, com a linha que contém o aviso destacado.




### Verificação do intervalo

O código gerado pelo compilador 4D verifica automaticamente que todo acesso a um elemento de array ou uma referência de caractere é feito dentro do intervalo real de elementos do array ou de caracteres de string. Os acessos fora do intervalo provocarão erros de execução em tempo de execução.

Em alguns casos, pode preferir que a verificação de intervalos não se aplique a certas partes do código consideradas fiáveis. Mais especificamente, no caso de repetições que se repetem por diversas vezes. e ao executar a base de dados compilada em máquinas mais antigas, a verificação por intervalo pode diminuir significativamente o processamento. Se você tiver certeza absoluta de que o código em questão é confiável e não pode causar erros no sistema, poderá desativar a verificação de intervalo localmente.

Para fazer isso, você deve cercar o código a ser excluído da verificação de intervalo com os comentários especiais `//%R-` e `//%R+`. O comentário `//%R-` desativa a verificação de intervalo e `//%R+` a ativa novamente:

```4d
  // %R- para desativar o intervalo verificando
 
 ... //Coloque o código a ser excluído do intervalo verificando aqui
 
  // %R+ para habilitar a verificação de intervalo novamente para o resto
```

## Sobre os compiladores

4D contém dois compiladores:

- um compilador "clássico", usado para compilar código nativo para processadores Intel/AMD;
- um compilador Silicon, para compilar código nativo para processadores Apple Silicon.

O compilador clássico pode ser usado em qualquer plataforma, enquanto o compilador do Silicon só pode ser usado em uma máquina Mac:

|             | Compilar para Windows | Compilar para Intel Mac | Compilar para Silicon Mac |
| ----------- |:---------------------:|:-----------------------:|:-------------------------:|
| Em Windows  |       &#10003;        |        &#10003;         |         &#10007;          |
| Intel Mac   |       &#10003;        |        &#10003;         |         &#10003;          |
| Silicon Mac |       &#10003;        |        &#10003;         |         &#10003;          |


Ambos os compiladores estão integrados em 4D. O compilador apropriado é selecionado automaticamente, dependendo da opção de [destino da compilação](#compilation-target).



### Compilador clássico

O compilador clássico gera código compilado nativo para processadores Intel/AMD em qualquer máquina. Não necessita de qualquer configuração específica.

O código compilado resultante é armazenado na pasta [DerivedData](architecture.md#deriveddata) do projeto.


### Compilador Silicon

O compilador Silicon gera código compilado nativo para processadores Apple Silicon, como o *Apple M1*.

O código compilado resultante é armazenado na pasta [Bibliotecas](architecture.md#libraries) do projeto.


#### Requisitos

- **Máquina Apple**: O compilador Silicon só pode ser executado por uma máquina Apple.
- A arquitetura do projeto **4D**: O compilador Silicon só está disponível para desenvolvimentos 4D usando a arquitetura [do projeto](architecture.md).
- **Xcode ou Ferramentas do Desenvolvedor**: O compilador Silicon chama o compilador macOS **Clang** de código aberto para compilar o projeto a partir do código C++ no segundo passo [](#incremental-compiler) da compilação. *clang* requer bibliotecas nativas da Apple, que são fornecidas pelo pacote **Xcode** ou **Developer Tools**.
    - **Se você já tiver** Xcode ou Ferramentas de Desenvolvedor instalado no seu computador, você só precisa se certificar de que a sua versão está de acordo com os requisitos 4D.
    - **Se você não tiver** nenhuma dessas ferramentas instaladas no seu computador, você precisará baixar uma delas, no site do desenvolvedor Apple.

> Recomendamos instalar o **Xcode**, o que é muito simples de instalar. Você pode optar por instalar o **Developer Tools**, que é mais compacto, mas sua instalação é um pouco mais complexa.

Em quaisquer casos, o compilador 4D de Silicon irá avisá-lo se sua configuração não estiver de acordo com seus requisitos.


#### Compilador incremental

O compilador Silicon é incremental, o que significa que:

- Durante a primeira compilação, **todos os métodos 4D** são compilados. Esta etapa pode demorar algum tempo. No entanto, só ocorre uma vez.
- Durante todas as compilações subsequentes, apenas **métodos novos ou modificados** são processados, reduzindo assim drasticamente o tempo de compilação. 