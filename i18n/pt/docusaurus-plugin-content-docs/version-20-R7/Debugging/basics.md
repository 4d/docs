---
id: basics
title: Depuração
---

Os erros são comuns. Seria incomum escrever um número substancial de linhas de código sem gerar quaisquer erros. Por outro lado, tratar e/ou corrigir erros também é normal!

O ambiente de desenvolvimento 4D fornece várias ferramentas de depuração para todos os tipos de erros.

## Tipos de erro

### Erros de dactilografia

Os erros de digitação são detectados pelo editor de código. São exibidos em vermelho e são fornecidas informações adicionais na parte inferior da janela. Aqui está um erro de dactilografia:

![break-point](../assets/en/Debugging/typing-error.png)

Esses erros de digitação geralmente causam erros de sintaxe (na imagem acima, o nome da tabela é desconhecido). Obtém a descrição do erro quando validar a linha de código. Quando isso ocorrer, corrija o erro de digitação e digite Enter para validar a correção.

### Erros de sintaxe

Alguns erros só podem ser detectados quando o método for executado. A [Janela de Erro de Sintaxe](#syntax-error-window) aparece quando ocorre um erro durante a execução do código. Por exemplo:

![syntax-error](../assets/en/Debugging/syntax-error.png)

Expanda a área Details para apresentar o último erro e o seu número.

### Erros ambientais

Ocasionalmente, pode não haver memória suficiente para criar um BLOB. Ou, quando acessar  um documento no disco, o documento pode não existir ou pode já estar aberto por outra aplicação. Estes erros ambientais não ocorrem diretamente devido ao seu código ou à forma como o escreveu. Na maioria das vezes, estes erros são fáceis de tratar com um [método de captura de erros](Concepts/error-handling.md) instalado usando o comando `NO ERR CALL`.

### Erros de concepção ou de lógica

Estes são geralmente o tipo de erro mais difícil de encontrar. Com exceção dos erros de digitação, todos os tipos de erros acima enumerados são, em certa medida, abrangidos pela expressão "erro de conceção ou de lógica". Use o [Debugger](debugger.md) para detectá-los. Por exemplo:

- Um *erro de sintaxe* pode ocorrer quando você tentar usar uma variável que ainda não foi inicializada.
- Um *erro ambiental* pode ocorrer quando você tenta abrir um documento, porque o nome desse documento é recebido por uma subrotina que não obteve o valor certo como parâmetro.

Os erros de concepção ou lógicos incluem também situações como:

- Um registro não está corretamente atualizado porque, enquanto chamava `SAVE RECORD`, você esqueceu primeiro de testar se o registro foi ou não bloqueado.
- Um método não faz exatamente o que se espera, porque a presença de um parâmetro opcional não é testada.

Por vezes, a parte do código que apresenta o erro pode ser diferente do código que está efetivamente na origem do problema.

### Erros de execução

No modo Aplicação, pode obter erros que não se vêem no modo interpretado. Aqui está um exemplo:

![runtime-error](../assets/en/Debugging/runtimeError.png)

Para encontrar rapidamente a origem do problema, reabrir a versão interpretada do ficheiro da estrutura, abrir o método e ir para a linha correspondente.

## Janela de erro sintáctico

A janela erro de sintaxe aparece automaticamente quando a execução de um método é interrompida. Isto pode acontecer quando:

- um erro impede a continuação da execução do código
- o método produz uma afirmação falsa (veja o comando `ASSERT`)

![syntax-error](../assets/en/Debugging/syntax-error.png)

A área de texto superior apresenta uma mensagem que descreve o erro. A área de texto inferior mostra a linha que estava a ser executada quando ocorreu o erro; a área onde ocorreu o erro é realçada. A secção Detalhes expandidos contém a "pilha" de erros relacionados com o processo.

A janela de erro de sintaxe propõe várias opções:

- **Editar**: interrompe toda a execução do método. 4D muda para o ambiente de Design e o método com o erro é aberto no Editor de Código, permitindo sua correção. Utilize esta opção quando reconhecer imediatamente o erro e puder corrigi-lo sem mais investigações.

- **Rastrear**: entra en modo Rastrear/Depurador. A janela [Debugger](debugger.md) é exibida. Se a linha atual só tiver sido executada parcialmente, poderá ter de clicar várias vezes no botão Trace.

- **Continuar**: a execução continua. A linha com o erro pode ser parcialmente executada, dependendo da localização do erro. Continue com cuidado: o erro pode impedir que o resto do seu método seja executado corretamente. Recomendamos clicar em **Continuar** somente se o erro estiver em uma chamada trivial (como `SET WINDOW TITLE`) que não impede a execução e o resto do seu código.

> Dica: Para ignorar um erro que ocorre repetidamente (por exemplo, em loops), você pode transformar o botão **Continuar** em um botão **Ignorar**. Mantenha pressionada a tecla Alt (Windows) ou Opção (macOS) e clique no botão Continuar na primeira vez que ele aparecer. O botão rótulo muda para **Ignorar** se a caixa de diálogo for chamada novamente para o mesmo erro.

- **Abortar**: Interrompe a execução do método e retorna ao estado antes do método começar a executar:

    - Se um método formulário ou um método objeto estiver a ser executado em resposta a um evento, é interrompido e o usuário regressa ao formulário.
    - Se o método estiver sendo executado a partir do ambiente Application, o usuário regressa a esse ambiente.

- **Copiar**: copia as informações de depuração na área de transferência. A informação descreve o ambiente interno do erro (número, componente interno, etc.). Eles são formatados como texto tabulado.

- **Salvar...**: Salva o conteúdo da janela de erro de sintaxe e a cadeia de chamadas em um arquivo `.txt`.

## Depurador

Un error común de los principiantes al tratar con la detección de errores es hacer clic en **Abandonar** en la ventana de error de sintaxis, volver al editor de código, y tratar de averiguar lo que está pasando mirando el código. Não faça isso! Poupará muito tempo e energia se utilizar sempre o Depurador\*\*.

O depurador permite-lhe percorrer os métodos lentamente. Apresenta todas as informações necessárias para compreender o motivo do erro. Assim que tiver esta informação, saberá como corrigir o erro.

Outra razão para utilizar o depurador é para desenvolver código. Por vezes, pode escrever um algoritmo que é mais complexo do que o habitual. Apesar de todos os sentimentos de realização, não pode ter a certeza absoluta de que a sua codificação está 100% correcta. En lugar de ejecutarlo "ciego", puede utilizar el comando `TRACE` al comienzo de su código, luego ejecutarlo paso a paso para mantener un ojo en lo que sucede.

## Rupturas

No processo de depuração, pode ser necessário saltar o rastreio de algumas partes do código até uma determinada linha. Ou, você pode querer rastrear o código quando uma determinada expressão tiver um determinado valor (por exemplo). . "$myVar > 1000"), ou toda vez que um comando 4D específico é chamado.

Estas necessidades são cobertas pelos  pontos de interrupção e pelas funcionalidades de  captura de comandos. Podem ser configurados a partir do editor de código, do depurador ou do explorador de execução.