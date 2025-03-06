---
id: call-worker
title: CALL WORKER
slug: /commands/call-worker
displayed_sidebar: docs
---

<!--REF #_command_.CALL WORKER.Syntax-->**CALL WORKER** ( *processo* ; *método* {; *param*}{; *param2* ; ... ; *paramN*} )<!-- END REF-->
<!--REF #_command_.CALL WORKER.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| processo | Text, Integer | &#8594;  | Nome ou número de processo do worker |
| método | Object, Text | &#8594;  | Nome do método de projeto a chamar |
| param | Expression | &#8594;  | Parâmetros passados ao método |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.CALL WORKER.Summary-->O comando **CALL WORKER** cria ou chama o processo worker cujo nome ou ID se passa em *processo* e pede a execução do *metodo* em seu contexto com o parâmetro opcional *param*.<!-- END REF-->

O comando **CALL WORKER** encapsula os parâmetros *param* em uma mensagem e o envia no quadro de mensagem de worker. Para obter mais informação sobre os processos worker, consulte *Sobre Workers*.

No parâmetro *processo*, pode especificar o worker utilizando seu nome ou seu número de processo:

* Se passar o número de um processo que não existir, ou se o processo especificado não foi criado por **CALL WORKER** nem por 4D (tal como o processo principal da aplicação), **CALL WORKER** não faz nada.
* Se passar o nome de um processo que nãoo existe, um novo processo worker é criado.

**Nota:** o **processo principal**, criado por 4D quando se abre um banco de dados para a interface de usuário e o modo de aplicação, é um processo trabalhador e pode ser chamado por **CALL WORKER**.Entretanto, já que seu nome pode variar em função da linguagem de 4D, é preferível designar este processo utilizando seu número (sempre 1) quando for utilizado **CALL WORKER**. \[

O processo worker aparece na lista de processos de Explorador de execução e é devolvido pelo comando [Process info](../commands/process-info.md) quando se aplicar a este processo.

Em formula, designe o código 4D que se executará no contexto do processo pai de janela. Pode passar:

um objeto fórmula (ver Objetos Fórmula). Os objetos fórmula podem encapsular qualquer expressão executável, incluindo funções e métodos projeto;

uma string que contenha o nome do método projeto. Pode se passar uma string vazia, neste caso, o worker executa o metodo que usou originalmente para iniciar seu processo, se houver ( ou seja, o método de inicio do worker).  
  
Em *metodo*, se passa o nome de método de projeto a executar no contexto do processo worker. Pode passar uma string vazia; neste caso, o trabalhador executa o método que se utilizou originalmente para começar seu processo, se houver (ou seja, o método de inicio do worker).

**Nota:** não é possível passar uma string vazia no método quando o comando chamar ao processo principal (processo número 1), já que não foi iniciado utilizando um método projeto. **CALL WORKER* (1;"")* não faz nada.

Também pode passar parâmetros ao *metodo* utilizando um ou mais parâmetros opcionaiss *param*. Passe os parâmetros da mesma maneira que os passaria a uma subrotina (ver ). Ao iniciar a execução no contexto do processo, o método de processo recebe os valores de parâmetro em *$1*, *$2*, e assim sucessivamente. Lembre que os arrays não podem ser passados ​​como parâmetros a um método. Além disso, no contexto do comando **CALL WORKER**, as seguintes considerações adicionais devem ser levadas em consideração:

* Se permite ponteiros a tabelas ou campos.
* Os ponteiros as variáveis, particularmente as variáveis locais e de processo, não são recomendadas já que estas variáveis podem estar indefinidas no momento de seu acesso pelo método de processo.
* Se passar um parâmetro de tipo Objeto ou uma Coleção **por cópia**, ou seja, 4D cria uma copia do objeto ou da coleção no processo de destino se o worker for encontrado em um processo diferente do que chama ao comando **CALL WORKER**. Neste contexto, se passar um parâmetro objeto ou coleção **por referência**, deve usar um objeto ou coleção partilhados (ver *Objetos compartidos e Coleções compartidas*).

Um processo worker se mantém vivo até que a aplicação esteja fechada ou o comando [KILL WORKER](kill-worker.md) se chame explicitamente. Para liberar memória, não esqueça de chamar a este comando quando um processo worker já não for necessário.

#### Exemplo 

Em um formulário, um botão inicia um cálculo, por exemplo as estatísticas relativas ao ano selecionado. O botâo cria ou chama a um processo de trabalho que vai calcular os dados enquanto o usuário pode continuar trabalhando no formulário.  
  
O método do botão é:

```4d
  //chamar ao trabalhador myWorker com o parâmetro
 var $vYear: Integer
 vYear:=2015 // poderia ter sido selecionado pelo usuário no formulário
 CALL WORKER("myWorker";"workerMethod";vYear;Current form window)
```

O código de *workerMethod é*:

```4d
  // este é o método do trabalhador
  // pode ser apropriativo ou cooperativo
 #DECLARE($vYearInteger;$windowInteger) //referencia da janela e ano
 var $vStatResults : Object //para armazenar os resultados das estatísticas 

... //calcular estatísticas
  //quando tiver terminado, volta a chamar o formulário com os valores calculados
  //vStatResults poderia mostrar os resultados no formulário
 CALL FORM($2;"displayStats";vStatResults)


```

#### Ver também 

[CALL FORM](call-form.md)  
[Current process name](current-process-name.md)  
[KILL WORKER](kill-worker.md)  
*Sobre Workers*  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1389 |
| Thread-seguro | &check; |


