---
id: error-handling
title: Gestão de erros
---

O manejo de erros é o processo de antecipar e responder aos erros que possam ocorrer em sua aplicação. 4D oferece assistência completa à detecção e notificação de erros no tempo de execução, assim como a análise de suas condições.

Manejo de erros responde à duas necessidades principais:

- descobrir e consertar erros potenciais e bugs no código durante a fase de desenvolvimento,
- detectar e recuperar de erros inesperados nas aplicações implementadas; em particular pode substituir diálogos de erros de sistemas (disco cheio, arquivo faltando, etc) com sua própria interface.

:::dica Boa prática

É altamente recomendável instalar um método global de tratamento de erros no Servidor 4D, para todos os códigos em execução no servidor. Este método evitaria caixas de diálogo inesperadas a serem exibidas na máquina do servidor (se executado com interface), e poderia registar erros num arquivo dedicado para análises posteriores.

:::


## Erro ou status

Muitas funções de classe 4D, tais como `entity.save()` ou `transporter.send()`, devolvem um objecto com o estatuto **. Este objecto é utilizado para armazenar erros "previsíveis" no contexto do tempo de execução, por exemplo, palavra-passe inválida, entidade bloqueada, etc., que não interrompem a execução do programa. Esta categoria de erros pode ser tratada por código normal.

Outros erros "imprevisíveis" incluem erro de gravação em disco, falha de rede, ou em geral qualquer interrupção inesperada. Esta categoria de erros gera exceções e precisa ser tratada através de um método de tratamento de erros.


## Instalação de um método de gestão de erros

Em 4D, todos os erros podem ser apanhados e tratados por métodos de projecto específicos, denominados **manipulação de erros** (ou **captura de erros**) métodos.

Uma vez instalados, os manipuladores de erros são automaticamente chamados em modo interpretado ou compilado em caso de erro na aplicação 4D ou num dos seus componentes. Um manipulador de erros diferente pode ser chamado em função do contexto de execução (ver abaixo).

Para *instalar* um método de projecto de tratamento de erros, basta chamar o comando [`ON ERR CALL`](https://doc.4d.com/4dv19/help/command/en/page155.html) com o nome do método de projecto e (opcionalmente) o âmbito como parâmetros. Por exemplo:

```4d
ON ERR CALL("IO_Errors";ek local) //Instala um método local de tratamento de erros
```

Para parar de apanhar erros para um contexto de execução e devolver a mão, contactar `ON ERR CALL` com uma cadeia vazia:

```4d
ON ERR CALL("";ek local) // dá o controle para o processo local
```

O comando  [`Método chamado por erro`](https://doc.4d.com/4dv19/help/command/en/page704.html) permite saber o nome do método instalado por `ON ERR CALL` para o processo atual. É particularmente útil no contexto do código genérico porque permite alterar temporariamente e depois restaurar o método de captura de erros:

```4d
 $methCurrent:=Método chamado por erro(ek local)
 ON ERR CALL("NewMethod";ek local)
  //Se o documento não puder ser aberto, é gerado um erro
 $ref:=Open document("MyDocument")
  //Reinstalação do método anterior
 ON ERR CALL($methCurrent;ek local)

```

### Alcance e componentes

Um método de tratamento de erros pode ser definido para diferentes contextos de execução:

- para o processo atual ****- um gerenciador de erros local só será chamado para erros que tenham ocorrido no processo actual,
- para toda a aplicação ****- um gerenciador de erros global será chamado para todos os erros que ocorreram no contexto da execução da aplicação,
- para os componentes ****- será chamada no anfitrião para todos os erros que ocorreram nos componentes.

Exemplos:

```4d
ON ERR CALL("IO_Errors";ek local) //Instala um método local de tratamento de erros ON ERR CALL("globalHandler";ek global) //Instala um método global de tratamento de erros ON ERR CALL("componentHandler";ek erros de componentes) //Instala um método de tratamento de erros de componentes
```

Pode instalar um gerenciador de erros global que servirá como "fallback" e métodos de erros locais específicos para certos processos. Um manipulador de erros global é também útil no servidor para evitar diálogos de erro no servidor quando executado com interface.

Pode definir um único método de captura de erros para toda a aplicação ou diferentes métodos por módulo de aplicação. No entanto, apenas um método pode ser instalado por contexto de execução.

Quando ocorre um erro, apenas um método é chamado, mesmo que sejam instalados vários manipuladores de erros "simultâneos":

- se o erro ocorrer no processo actual, o manipulador local é chamado e NÃO o manipulador global;
- se o erro ocorrer num componente e o componente tiver o seu próprio manipulador de erros, o manipulador de erros do componente é chamado e NÃO o manipulador de "erros de componentes" da aplicação anfitriã.


### Manejo de erros dentro do método

Dentro de um método de erro personalizado, tem acesso a várias peças de informação que o ajudarão a identificar o erro:

- variáveis do sistema dedicado:

  - `Error` (inteiro longo): código de erro
  - `Error method`(texto): nome do método que provocou o erro
  - `Error line` (entero largo): número de línea do método que provocou o erro
  - `Error formula` (text): fórmula do código 4D (texto bruto) que está na origem do erro.

:::info

4D mantém automaticamente uma série de variáveis chamadas **variáveis de sistema**, satisfazendo diferentes necessidades. Ver o manual de referência de línguas *4D*.

:::

- o comando [`últimos erros`](https://doc.4d.com/4dv19/help/command/en/page1799.html) que devolve uma coleção da pilha actual de erros que ocorreram na aplicação 4D. Também pode usar o comando [`GET LAST ERROR STACK`](https://doc.4d.com/4dv19/help/command/en/page1015.html) que devolve a mesma informação que os arrays.
- o comando `Get call chain` que devolve uma coleção de objetos que descrevem cada passo da string de chamadas a métodos dentro do processo atual.


#### Exemplo

Aqui está um sistema de gestão de erros simples:

```4d
//instalar o método de gestão de erros
 ON ERR CALL("errorMethod")
 //... executar o código
 ON ERR CALL("") //retorna o controle para 4D
```

```4d
// método projeto errorMethod
 If(Error#1006) //essa não é uma interrupção do usuário
    ALERT("Um erro foi produzido "+String(Error)+". O código em questão é: \""+Error formula+"\"")
 End if
```

### Utilizar um método de gestão de erro vazio

Se quiser que a caixa de diálogo fique escondida, pode instalar um método de gestão de erros vazio. A variável sistema `Error` pode ser provada em qualquer método, ou seja, fora do método de gestão de erros:

```4d
ON ERR CALL("emptyMethod") //emptyMethod exists but is empty
$doc:=Open document( "myFile.txt")
If (Error=-43)
    ALERT("File not found.")
End if
ON ERR CALL("")
```


