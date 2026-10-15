---
id: legacy-to-import
title: develop-legacy
draft: true
---



<!-- REF develop-semaphores.Desc -->
## Semáforos     

um semáforo lhe permite ter certeza  de que dois ou mais processos não modifiquem o mesmo recurso ao mesmo tempo. Só o processo que define o semáforo pode eliminá-lo.


:::info

[Signals](../API/SignalClass.md) can also be used to manage interactions. Signals allow you to make sure one or more process(es) will wait for a specific task to be completed before continuing execution. Any process can wait and/or release a signal.

:::

### O que é um semáforo?  

Em um programa de computador, um semáforo é uma ferramenta que é usada para proteger as ações que devem ser realizadas por um único processo ou usuário por vez.

Em 4D, a necessidade convencional de uso de um semáforo é para modificar um array inter-processo: se um processo estiver modificando os valores do array, outro processo não deve poder fazer a mesma coisa ao mesmo tempo. O desenvolvedor utiliza um semáforo para indicar a um processo que só pode realizar sua sequência de operações se nenhum outro processo estiver realizando as mesmas tarefas. Quando um processo encontra com um semáforo, há três possibilidades:

- Obtém imediatamente o direito a passar
- Espera seu turno até que obtém o direito a passar
- Continua seu caminho, abandonando a ideia de realizar as tarefas.

Portanto, o semáforo protege partes do código. Se permite passar só um processo de cada vez e bloqueia o acesso até que o processo que possui atualmente o direito de uso renuncie a este direito, liberando o semáforo.


### Comandos para trabalhar com semáfoross  

Em 4D, um semáforo é estabelecido chamando a função Semaphore. Para liberar um semáforo, se chama o comando CLEAR SEMAPHORE.

A função Semaphore tem um comportamento muito especial já que realiza potencialmente duas ações de cada vez:

- Se o semáforo já estiver assignado, a função devolve True
- Se não for assignado o semáforo, a função o assigna ao processo e devolve False ao mesmo tempo.

Esta ação dupla realizada pelo mesmo comando assegura que nenhuma operação externa pode ser inserida entre a proba do semáforo e sua atribuição.

Pode utilizar o comando Test semaphore para saber se um semáforo já estiver assignado ou não. Este comando se utiliza principalmente como parte das operações longas, tais como o fechamento anual das contas onde Test semaphore lhe permite controlar a interface para evitar o acesso a certas operações tais como a adição dos dados contáveis.

### Como usar semáforos  

Os semáforos devem ser utilizados respeitando os princípios a seguir:

- um semáforo deve ser definido e lançado no mesmo método,
- a execução de código protegido pelo semáforo deve ser a mas curta possível,
- o código deve ser temporizado por meio do parâmetro contTics da função Semaphore para esperar a liberação do semáforo.


Este é o código típico para o uso de um semáforo:

```4d
 While(Semaphore("MySemaphore";300))
    IDLE
 End while
  // place code protected by semaphore here
 CLEAR SEMAPHORE("MySemaphore")
```

Um semáforo que não se libera pode bloquear parte do banco de dados. Configurar e liberar o semáforo no mesmo método ajuda a eliminar este risco.

Minimizar o código protegido pelo semáforo aumenta a fluidez da aplicação e evita que o semáforo seja um gargalo.

Por último, utilizando o parâmetro opcional contTics do comando Semaphore é essencial para otimizar a espera do semáforo a liberar. Utilizando este parâmetro, os comandos funcionam da maneira abaixo:

- O processo espera um número máximo especificado de tics (300 no exemplo) para que o semáforo esteja disponível, sem a execução de código passar para a próxima linha,
Se o semáforo for liberado antes do final deste limite, ele é atribuído imediatamente ao processo (Semaphore devolve False) e se reinicia a execução de código,
Se o semáforo não for liberado antes do final deste limite,  a execução do código recomeça.
- O comando também dá prioridade às petições estabelecendo uma fila. Desta maneira, o primeiro processo que solicitar um semáforo será o primeiro em obter um.

Lembre que o tempo de espera se estabelece em função das características específicas da aplicação.

### Semáforos globais ou locais 

Há dois tipos de semáforos em 4D: semáforos locais e semáforos globais.

- Um semáforo local é visível para todos os processos de um mesmo posto  e só no posto. Um semáforo local pode ser criado ao adicionar um prefixo ao nome do semáforo um sinal de dólar ($). Se utilizar semáforos locais para supervisar as operações entre os diferentes processos que são executados na mesma máquina.  Por exemplo, um semáforo local pode ser utilizado para controlar o acesso a um array interprocesso compartido por todos os processos de um banco de dados mono usuário ou de um equipo cliente.
- Um semáforo global é acessível a todos os usuários e todos seus processos. Os semáforos globais são utilizados para controlar as operações entre os usuários de um banco de dados multi-usuário.

Os semáforos globais e locais são idênticos em sua lógica. A diferença está em seu alcance.

No modo cliente-servidor, os semáforos globais são compartidos entre todos os processos que são executados em todos os clientes e servidores. Um semáforo local somente se comparte entre os processos que se executam na máquina onde foi criado.

Em 4D, os semáforos globais ou locais têm o mesmo alcance, já que você é o único usuario. Entretanto, se seu banco de dados estiver sendo usado em ambas configurações, tenha certeza de usar semáforos globais ou locais, dependendo do que quiser fazer.

Nota: é recomendado o uso de semáforos locais quando precisar de um semáforo para gerenciar um aspecto local para um cliente da aplicação, tais como a interface ou um conjunto de variáveis inter processo. Se usar um semáforo global neste caso, não apenas haveria intercâmbios de rede desnecessários, mas também poderia afetar a outras máquinas clientes desnecessariamente. O uso de um semáforo local evitaria estes efeitos secundários indesejáveis.


<!-- END REF -->