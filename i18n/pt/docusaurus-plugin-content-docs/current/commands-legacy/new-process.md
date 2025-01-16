---
id: new-process
title: New process
slug: /commands/new-process
displayed_sidebar: docs
---

<!--REF #_command_.New process.Syntax-->**New process** ( *metodo* ; *pilha* {; *nome* {; *param* {; *param2* ; ... ; *paramN*}}}{; *} ) : Integer<!-- END REF-->
<!--REF #_command_.New process.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| metodo | Text | &#8594;  | Método a executar no processo |
| pilha | Integer | &#8594;  | Tamanho da pilha em bytes |
| nome | Text | &#8594;  | Nome do processo criado |
| param | Expression | &#8594;  | Parâmetros do método |
| * | Operador | &#8594;  | Processo único |
| Resultado | Integer | &#8592; | Número do processo criado recentemente ou do processo que está sendo executado |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.New process.Summary-->O comando New process inicia um novo processo ( na mesma máquina) e devolve o número deste processo.<!-- END REF-->

Caso não foi possível criar o processo (por exemplo, se não têm suficiente memória), New process devolve zero (0) e é gerado um erro. Pode interceptar este erro utilizando um método de gestão de erros instalado pelo comando [ON ERR CALL](on-err-call.md "ON ERR CALL").

##### Método de processo 

 Em *metodo*, é passado o nome do método de gestão do novo processo. Uma vez que 4D tenha definido o contexto para o novo processo, começa a execução deste método que se converte no método de processo.

Se o contexto de execução for compatível com modo preemptivo e se *método* for declaro como "thread seguro", o novo processo 4D será executado em uma thread preemptiva quando a aplicação rodar em modo compilado. Para saber mais, veja a página *Processos 4D Preemptivos*. 

##### Pilha de processo 

Em *pilha*, passa a quantidade de memória atribuída para a pilha do processo. Este valor representa o espaço em memória utilizado para “empilhar” as chamadas de métodos, as variáveis locais, os parâmetros de sub rotinas e os registros empilhados.

* Passe 0 em *pilha* para usar o tamanho normal de pilha, adequado para a maioria dos aplicativos (recomendado).
* Em certos casos, pode desejar usar um valor personalizado. Deve ser expresso em bytes. Esta configuração deve ser usada com cuidado, depende da cadeia de processo de chamada e da plataforma.

**Nota:** a pilha NÃO é a memória total reservada para o processo. Os processos compartilham memória para os registros, as variáveis inter-processo, etc. Um processo utiliza igualmente a memória extra para armazenar suas variáveis processo. A pilha contém diferente informação 4D: a quantidade de informação depende do número de chamadas de métodos aninhados, o número de formulários que abrirá antes de fechá-los e o número e tamanho de variaveis locais utilizadas em cada chamada de método aninhado.

##### Nome do processo 

Passe o nome do novo processo em *nome*. Este nome aparecerá na lista de processos do Runtime Explorer e será devolvido pelo comando [Process info](../commands/process-info.md) quando for aplicado a este novo processo. Pode omitir esse parâmetro; se assim o fizer, o nome do processo será uma string vazia. Pode fazer que um processo seja local em seu escopo ao prefixar seu nome com o símbolo de cifrão (*$*).  
  
**Importante:** Lembre que os processos locais não deveriam acessar dados em Cliente/Servidor Para saber mais veja a seção *Processos globais e locais*

##### Parâmetros do método processo 

 É possível passar parâmetros ao método de processo usando um ou mais parâmetros *param*. Se passa os parâmetros da mesmam maneira que se passaria os parâmetros em uma subrotina (ver ). Ao iniciar a execução no contexto do novo processo, o método de processo recebe os valores dos parâmetros em *$1*, *$2*, etc. Lembre que arrays não podem ser passados como parâmetros a um método. Além disso, estas considerações adicionais devem ser levadas em consideração no contexto do comando **New process**:

* ponteiros a tabelas ou campos são permitidos.
* ponteiros a variáveis, em particular variáveis locais e processo, não são recomendadas, já que estas variáveis podem ser indefinidas no momento em que forem acessadas pelo método de processo
* s parâmetros padrão de tipo objeto ou coleção são passados **por cópia**, ou seja, 4D criará uma cópia do objeto ou a coleção no processo de destino ao invés de uma referência. Se quiser passar um objeto ou um parâmetro de coleção **por referência**, deve utilizar um objeto ou coleção compartidos (ver *Objetos compartidos e Coleções compartidas*).

**Nota:** se passar parâmetros ao método de processo, deve passar o parâmetro *nome*; não pode ser omitido neste caso.

##### Parâmetro opcional \* 

Lhe indica a 4D que deve verificar primeiro se está executando um processo com o nome que você passou em *nome*. Se é assim, 4D não inicia um novo processo e devolve o número do processo com este nome.

#### Exemplo 

Vejamos o seguinte método de projeto:

```4d
  // ADICIONAR CLIENTES
 SET MENU BAR(1)
 Repeat
    ADD RECORD([Clientes];*)
 Until(OK=0)
```

Se associa este método de projeto a um comando de menu criado no Editor de barras de menu e lhe atribuí a propriedade **Iniciar um novo processo**, 4D automaticamente iniciará um novo processo no momento da execução do método. A instrução [SET MENU BAR](set-menu-bar.md)(1) associa esta barra de menus ao novo processo. Em ausência de janelas (que poderia ser aberta O \[#cmd id="153"/\]), a chamada a [ADD RECORD](add-record.md) abrirá automaticamente uma.

Para poder iniciar o processo Adicionar clientes fazendo clique em um botão situado no painel de controle personalizado, pode escrever: 

```4d
  // Método de objeto botão bAdicionarClientes
 $vlProcessoID:=New process("Adicionar Clientes";32*1024;"Adicionar Clientes")
```

O botão faz o mesmo que o comando de menu personalizado.

Se quando seleciona o elemento de menu ou faz clique no botão, você quer que o processo comece (se não existe) ou passado ao primeiro plano (se já se está executando), pode criar o método INICIAR AGREGAR CLIENTES:

```4d
  // INICIAR AGREGAR CLIENTES
 $vlProcessoID:=New process("Adicionar Clientes";32*1024;"Adição de clientes";*)
 If($vlProcessoID#0)
    BRING TO FRONT($vlProcessoID)
 End if
```

O método de objeto de *bAdicionarClientes* é convertido em:

```4d
  // Método de objeto do botão bAdicionarClientes
 INICIAR ADICIONAR CLIENTES
```

No editor de barras de menus, pode substituir ADICIONAR CLIENTES pelo método INICIAR ADICIONAR CLIENTES, e cancelar a seleção da propriedade **Iniciar um novo processo** para o comando de menu. 

#### Ver também 

[Execute on server](execute-on-server.md)  
*Processos*  
*Processos 4D Preemptivos*  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 317 |
| Thread-seguro | &check; |


