---
id: error-handling
title: Gestão de erros
---

O manejo de erros é o processo de antecipar e responder aos erros que possam ocorrer em sua aplicação. 4D oferece assistência completa à detecção e notificação de erros no tempo de execução, assim como a análise de suas condições.

Manejo de erros responde à duas necessidades principais:

- descobrir e consertar erros potenciais e bugs no código durante a fase de desenvolvimento,
- detectar e recuperar de erros inesperados nas aplicações implementadas; em particular pode substituir diálogos de erros de sistemas (disco cheio, arquivo faltando, etc) com sua própria interface.
> > > > É recomendado instalar um método de gerenciamento de erros em 4D Server, para todos os códigos rodando no servidor. Esse método evitaria a exibição de caixas de diálogo inesperadas no computador do servidor e poderia registrar os erros em um arquivo dedicado para análises posteriores.

## Instalação de um método de gestão de erros

Em 4D, todos os erros podem ser capturados e tratados em um método de projeto específico, o método **de tratamento de erros** (ou **captura de erros**).

Esse método de projeto é instalado para o processo atual e será chamado automaticamente para qualquer erro que ocorra no processo, no modo interpretado ou compilado. Para *instalar* esse método projeto, você só precisa chamar o comando `ON ERR CALL` com o nome do método projeto como parâmetro. Por exemplo:

```4d
ON ERR CALL("IO_ERRORS") //Instala o método de tratamento de erros
```

Para parar de capturar erros e devolver a mão ao 4D, chame `ON ERR CALL` com uma string vazia:
```4d
ON ERR CALL("") //devolve o controlo a 4D
```

### Alcance e componentes

Pode definir um único método de captura de erros para toda a aplicação ou diferentes métodos por módulo de aplicação. No entanto, somente um método pode ser instalado por processo.

Um método de tratamento de erros instalado pelo comando `ON ERR CALL` só se aplica ao banco de dados em execução. No caso de um erro gerado por um **componente**, o método de tratamento de erros `ON ERR CALL` do banco de dados host não é chamado, e vice-versa.

O comando `Method called on error` permite saber o nome do método instalado por `ON ERR CALL` para o processo atual. É particularmente útil no contexto de componentes, pois permite que você altere temporariamente e depois restaure o método de captura de erros do banco de dados host:

```4d
 $methCurrent:=Method called on error
 ON ERR CALL("NewMethod")
  //Se o documento não pouder ser aberto, um erro é gerado
 $ref:=Open document("MyDocument")
  //Reinstalação do método anterior
 ON ERR CALL($methCurrent)

```

### Manejo de erros dentro do método

No método de erro personalizado, você tem acesso a várias informações que ajudarão você a identificar o erro:

- 4D mantém automaticamente uma série de variáveis chamadas **variáveis sistema**, respondendo a diferentes necessidades (veja o manual *Linguagem 4D*):

  - `Error` (inteiro longo): código de erro
  - `Error method`(texto): nome do método que provocou o erro
  - `Error line` (entero largo): número de línea do método que provocou o erro
  - `Error formula` (text): fórmula do código 4D (texto bruto) que está na origem do erro.

- o comando `GET LAST ERROR STACK` que retorna informações sobre a pilha de erros atual da aplicação 4D.
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
