---
id: error-handling
title: Gestão de erros
---

O manejo de erros é o processo de antecipar e responder aos erros que possam ocorrer em sua aplicação. 4D oferece assistência completa à detecção e notificação de erros no tempo de execução, assim como a análise de suas condições.

Manejo de erros responde à duas necessidades principais:

- descobrir e consertar erros potenciais e bugs no código durante a fase de desenvolvimento,
- detectar e recuperar de erros inesperados nas aplicações implementadas; em particular pode substituir diálogos de erros de sistemas (disco cheio, arquivo faltando, etc) com sua própria interface.
> > It is highly recommended to install an error-handling method on 4D Server, for all code running on the server. Esse método evitaria a aparição de caixas de diálogo inesperadas no servidor e poderia registrar os erros em um arquivo especifico para sua análise posterior.

## Instalação de um método de gestão de erros

Em 4D todos os erros podem ser capturados e manejados em um método projeto específico, o método **gestão de erros** (ou **captura de erros**).

Este método projeto se instala para o processo atual e será chamado automaticamente para qualquer erro que se produza no processo, em modo interpretado ou compilado. Para *instalar* este método projeto, basta com chamar ao comando `ON ERR CALL` com o nome do método projeto como parâmetro. Por exemplo:

```4d
ON ERR CALL("IO_ERRORS") //Instala o método de gestão de erros
```

Para deixar de detectar erros e devolver o controle a 4D, chame a `ON ERR CALL` com uma string vazia:
```4d
ON ERR CALL("") //devolve o controle a 4D
```

### Alcance e componentes

Pode definir um único método de captura de erros para toda a aplicação ou diferentes métodos por módulo de aplicação. Entretanto, apenas um método pode ser instalado por processo.

Um método de gestão de erros instalado pelo comando `ON ERR CALL` só se aplica ao banco de dados em execução. No caso de um erro gerado por um **componente**, não se chama ao método `ON ERR CALL` de gestão de erros do banco de dados local, e vice versa.

O comando `Method called on error` permite conhecer o nome do método instalado por `ON ERR CALL` para o processo atual. É particularmente útil no contexto dos componentes porque permite mudar temporariamente e depois restaurar o método de captura de erros do banco de dados local:

```4d
 $methCurrent:=Method called on error
 ON ERR CALL("NewMethod")
  //Se o documento não pouder ser aberto, um erro é gerado
 $ref:=Open document("MyDocument")
  //Reinstalação do método anterior
 ON ERR CALL($methCurrent)

```

### Manejo de erros dentro do método

Dentro do método de erro personalizado, tem acesso a várias informações que lhe ajudará a identificar o erro:

- 4D automatically maintains a number of variables called **system variables**, meeting different needs (see the *4D Language Reference manual*):

  - `Error` (inteiro longo): código de erro
  - `Error method`(texto): nome do método que provocou o erro
  - `Error line` (entero largo): número de línea do método que provocou o erro
  - `Error formula` (text): fórmula do código 4D (texto bruto) que está na origem do erro.

- o comando `GET LAST ERROR STACK` que devolve informação sobre a pilha de erros atual da aplicação 4D.
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
