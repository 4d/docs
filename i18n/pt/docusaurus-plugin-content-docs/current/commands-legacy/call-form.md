---
id: call-form
title: CALL FORM
slug: /commands/call-form
displayed_sidebar: docs
---

<!--REF #_command_.CALL FORM.Syntax-->**CALL FORM** ( *janela* ; *metodo* {; *param*}{; *param2* ; ... ; *paramN*} )<!-- END REF-->
<!--REF #_command_.CALL FORM.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| janela | Integer | &#8594;  | Número de referência da janela |
| metodo | Object, Text | &#8594;  | Nome do método de projeto a chamar |
| param | Expression | &#8594;  | Parâmetros passados ao método |

<!-- END REF-->

#### Gestão de erros 

<!--REF #_command_.CALL FORM.Summary-->O comando **CALL FORM** executa o método de projeto cujo nome passou em *metodo* com um ou vários *param*(s) no contexto de um formulário que se mostra em uma *janela*, independentemente do processo ao que pertence a janela.<!-- END REF-->

Da mesma forma que na comunicação entre processos baseada nos workers (ver *Sobre Workers*), um quadro de mensagem está associado a janela e pode ser utilizado quando a janela mostra um formulário (depois do evento On Load). **CALL FORM** encapsula o nome de método e seus argumentos em uma mensagem que tenha sido enviada no quadro de mensagens da janela. O formulário abaixo, executa a mensagem em seu próprio processo. O processo de chamada pode ser cooperativo o preemptivo, portanto, esta funcionalidade permite a um processo preemptivo intercambiar informação com os formulários.

Em *janela*, passe o número de referência da janela que mostra o formulário chamado.

Em formula, designe o código 4D que se executará no contexto do processo pai de janela. Pode passar:

* um objeto fórmula (ver Objetos Fórmula). Os objetos fórmula podem encapsular qualquer expressão executável, incluindo funções e métodos projeto;
* uma string que contenha o nome de um método projeto.

Também pode passar parâmetros ao método que utilizam um ou mais parámetros *param*. Passe os parâmetros da mesma maneira que os passaria a uma subrotina (ver ). Ao iniciar a execução no contexto do formulário, o método recebe os valores parâmetro em *$1*, *$2*, etc. Lembre que os arrays não podem ser passados ​​como parâmetros a um método. Além disso, no contexto de comando **CALL FORM**, as seguintes considerações adicionais devem ser levadas em conta:

* Ponteiros a tabelas ou campos são permitidos.
* Não é recomendado ponteiros à variáveis, particularmente as variáveis locais e de processo, já que estas variáveis podem não estar definidas no momento em que o método de processo as acessar.
* Se passar um parâmetro de tipo Objeto ou Coleção, 4D cria uma cópia de objeto no processo de destino se o formulário estiver em um processo diferente do qual chama ao comando **CALL FORM**.

#### Exemplo 1 

Pode utilizar o comando **CALL FORM** para passar configurações personalizadas a um formulário, por exemplo valores de configuração, sem precisar utilizar variáveis processo:

```4d
 $win:=Open form window("form")
 CALL FORM($win;Formula(configure);param1;param2)
 DIALOG("form")
```

#### Exemplo 2 

Se quiser abrir duas janelas de diálogo diferentes no mesmo formulário, mas com diferentes cores de fundo e diferentes mensagens. Também deseja enviar mensagens despois e mostrar as mensagens em cada janela de diálogo.

No formulário principal, um botão abre os dois diálogos:

```4d
  //Criar método objeto formulários
  // primeira janela
 formRef1:=Open form window("FormMessage";Palette form window;On the left)
 SET WINDOW TITLE("MyForm1";formRef1)
 DIALOG("FormMessage";*)
 SHOW WINDOW(formRef1)
 
  //segunda janela
 formRef2:=Open form window("FormMessage";Palette form window;On the left+500)
 SET WINDOW TITLE("MyForm2";formRef2)
 DIALOG("FormMessage";*)
 SHOW WINDOW(formRef2)
 
  //Enviar cores
 CALL FORM(formRef1;"doSetColor";0x00E6F2FF)
 CALL FORM(formRef2;"doSetColor";0x00F2E6FF)
  //criar  mensagens
 CALL FORM(formRef1;"doAddMessage";Current process name;"Hello Form 1")
 CALL FORM(formRef2;"doAddMessage";Current process name;"Hello Form 2")
```

O método *doAddMessage* só adiciona uma linha num list box no formulario "FormMessage":

```4d
 var $1 : Text // nome do chamador
 var $2 : Text // mensagem a mostrar
  // reciber mensagem desde $2 e log a mensagem em list box
 $p:=OBJECT Get pointer(Object named;"Column1")
 INSERT IN ARRAY($p->;1)
 $p->{1}:=$1+" sends "+$2
```

Em execução, obtém o seguinte resultado:

![](../assets/en/commands/pict2896824.en.png)

Depois pode adicionar outras mensagens executando o comando **CALL FORM** novamente:

```4d
 CALL FORM(formRef1;"doAddMessage";Current process name;"Hello 2 Form 1")
 CALL FORM(formRef2;"doAddMessage";Current process name;"Hello 2 Form 2")
```

![](../assets/en/commands/pict2896833.en.png)

#### Ver também 

  
[CALL WORKER](call-worker.md)  
[DIALOG](../commands/dialog.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1391 |
| Thread-seguro | &check; |


