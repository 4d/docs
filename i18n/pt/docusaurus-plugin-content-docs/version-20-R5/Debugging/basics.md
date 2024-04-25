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

Alguns erros só podem ser detectados quando o método for executado. The [Syntax Error Window](#syntax-error-window) appears when an error occurs during code execution. Por exemplo:

![syntax-error](../assets/en/Debugging/syntax-error.png)

Expand the **Details** area to display the last error and its number.

### Erros ambientais

Ocasionalmente, pode não haver memória suficiente para criar um BLOB. Ou, quando se acede a um documento no disco, o documento pode não existir ou pode já estar aberto por outra aplicação. Estes erros ambientais não ocorrem diretamente devido ao seu código ou à forma como o escreveu. Most of the time, these errors are easy to treat with an [error catching method](Concepts/error-handling.md) installed using the `ON ERR CALL` command.

### Erros de concepção ou de lógica

Estes são geralmente o tipo de erro mais difícil de encontrar. Com exceção dos erros de digitação, todos os tipos de erros acima enumerados são, em certa medida, abrangidos pela expressão "erro de conceção ou de lógica". Use the [Debugger](debugger.md) to detect them. Por exemplo:

- A _syntax error_ may occur when you try to use a variable that is not yet initialized.
- An _environmental error_ can occur when you try to open a document, because that document's name is received by a subroutine that did not get the right value as a parameter.

Os erros de concepção ou lógicos incluem também situações como:

- A record is not properly updated because, while calling `SAVE RECORD`, you forgot to first test whether or not the record was locked.
- Um método não faz exatamente o que se espera, porque a presença de um parâmetro opcional não é testada.

Por vezes, a parte do código que apresenta o erro pode ser diferente do código que está efetivamente na origem do problema.

### Erros de execução

No modo Aplicação, pode obter erros que não se vêem no modo interpretado. Aqui está um exemplo:

![runtime-error](../assets/en/Debugging/runtimeError.png)

Para encontrar rapidamente a origem do problema, reabrir a versão interpretada do ficheiro da estrutura, abrir o método e ir para a linha correspondente.

## Janela de erro sintáctico

A janela erro de sintaxe aparece automaticamente quando a execução de um método é interrompida. Isto pode acontecer quando:

- um erro impede a continuação da execução do código
- the method produces a false assertion (see the `ASSERT` command)

![syntax-error](../assets/en/Debugging/syntax-error.png)

A área de texto superior apresenta uma mensagem que descreve o erro. A área de texto inferior mostra a linha que estava a ser executada quando ocorreu o erro; a área onde ocorreu o erro é realçada. A secção Detalhes expandidos contém a "pilha" de erros relacionados com o processo.

A janela de erro de sintaxe propõe várias opções:

- **Edit**: Stops all method execution. 4D muda para o ambiente de Design e o método com o erro é aberto no Editor de Código, permitindo sua correção. Utilize esta opção quando reconhecer imediatamente o erro e puder corrigi-lo sem mais investigações.

- **Trace**: Enters Trace/Debugger mode. The [Debugger](debugger.md) window is displayed. If the current line has only executed partially, you may have to click the **Trace** button several times.

- **Continue**: Execution continues. A linha com o erro pode ser parcialmente executada, dependendo da localização do erro. Continue com cuidado: o erro pode impedir que o resto do seu método seja executado corretamente. We recommend clicking **Continue** only if the error is in a trivial call (such as `SET WINDOW TITLE`) that does not prevent executing and testing the rest of your code.

> Tip: To ignore an error that occurs repeatedly (for example, in loops), you can turn the **Continue** button into an **Ignore** button. Hold down **Alt** (Windows) or **Option** (macOS) key and click the **Continue** button the first time it appears. The button label changes to **Ignore** if the dialog is called again for the same error.

- **Abort**: Stops method execution and returns to the state before the method started executing:

  - Se um método formulário ou um método objeto estiver a ser executado em resposta a um evento, é interrompido e o usuário regressa ao formulário.
  - Se o método estiver sendo executado a partir do ambiente Application, o usuário regressa a esse ambiente.

- **Copy**: Copies the debugging information into the clipboard. A informação descreve o ambiente interno do erro (número, componente interno, etc.). Eles são formatados como texto tabulado.

- **Save...**: Saves the contents of the syntax error window and the call chain in a `.txt` file.

## Depurador

A common beginner mistake in dealing with error detection is to click **Abort** in the Syntax Error Window, go back to the Code Editor, and try to figure out what's going by looking at the code. Não faça isso! You will save plenty of time and energy by always using the **Debugger**.

O depurador permite-lhe percorrer os métodos lentamente. Apresenta todas as informações necessárias para compreender o motivo do erro. Assim que tiver esta informação, saberá como corrigir o erro.

Outra razão para utilizar o depurador é para desenvolver código. Por vezes, pode escrever um algoritmo que é mais complexo do que o habitual. Apesar de todos os sentimentos de realização, não pode ter a certeza absoluta de que a sua codificação está 100% correcta. Instead of running it "blind", you can use the `TRACE` command at the beginning of your code, then execute it step by step to keep an eye on what happens.

## Rupturas

No processo de depuração, pode ser necessário saltar o rastreio de algumas partes do código até uma determinada linha. Or, you may want to trace the code when a given expression has a certain value (e.g. "$myVar > 1000"), or every time a specific 4D command is called.

These needs are covered by **breakpoints** and **command catching** features. Podem ser configurados a partir do editor de código, do depurador ou do explorador de execução.
