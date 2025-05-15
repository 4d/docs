---
id: dialog
title: DIALOG
displayed_sidebar: docs
---

<!--REF #_command_.DIALOG.Syntax-->**DIALOG** ( {*aTable* ;} *form* {; *formData*}{; *} )<!-- END REF-->

<!--REF #_command_.DIALOG.Params-->

| Parâmetro | Tipo         |                             | Descrição                                                                                                                                                                                                                  |
| --------- | ------------ | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| aTable    | Tabela       | &#8594; | Tabela possuindo o formulário ou se omitido: tabela padrão ou uso do formulário projeto                                                                                                                    |
| form      | Text, Object | &#8594; | Nome (string) da tabela ou formulário do projeto, ou um caminho POSIX (string) para um arquivo .json descrevendo o formulário, ou um objeto descrevendo o formulário |
| formData  | Object       | &#8594; | Dados para associar ao formulário                                                                                                                                                                                          |
| \*        | Operador     | &#8594; | Usar o mesmo processo                                                                                                                                                                                                      |

<!-- END REF-->

## Descrição

<!--REF #_command_.DIALOG.Summary-->O comando **DIALOG** apresenta o *formulário* ao usuário, juntamente com o(s) parâmetro(s) *formData* (opcional).<!-- END REF--> 

Esse comando foi projetado para trabalhar com interfaces de usuário personalizadas e avançadas baseadas em formulários. Você pode usá-lo para exibir informações provenientes do banco de dados ou de outros locais, ou para fornecer recursos de entrada de dados. Diferentemente de [ADD RECORD](../commands-legacy/add-record.md) ou [MODIFY RECORD](../commands-legacy/modify-record.md), **DIALOG** lhe dá controle total sobre o formulário, seu conteúdo e os botões de navegação e validação.

Normalmente, esse comando é chamado junto com [Open form window](../commands-legacy/open-form-window.md) para exibir formulários sofisticados, conforme mostrado no exemplo a seguir:

![](../assets/en/commands/pict3541609.en.png)

O comando **DIALOG** também pode ser usado em vez de [ALERT](../commands-legacy/alert.md), [CONFIRM](../commands-legacy/confirm.md) ou [Request](../commands-legacy/request.md) quando as informações a serem apresentadas ou reunidas são mais complexas do que esses comandos podem gerir.

No parâmetro *form*, você pode passar:

- o nome de um formulário (formulário de projeto ou formulário de tabela) a ser usado;
- o caminho (na sintaxe POSIX) para um arquivo .json válido que contém uma descrição do formulário a ser usado;
- um objeto que contém uma descrição do formulário a ser usado.

Opcionalmente, você pode passar parâmetro(s) para o *formulário* usando um objeto "dados do formulário". Todas as propriedades do objeto de dados do formulário estarão disponíveis no contexto do formulário por meio do comando [Form](form.md). Por exemplo, se você usar um objeto de dados de formulário contendo {"version"; "12"}, poderá obter ou definir o valor da propriedade "version" no formulário chamando:

```4d
 $v:=Form.version //"12"
 Form.version:=13
```

Para preencher o objeto "form data", você tem duas possibilidades:

- use o parâmetro *formData*. O uso de uma variável local para *formData* permite que você passe parâmetros com segurança para seus formulários, independentemente do contexto de chamada. Em particular, se o mesmo formulário for chamado de diferentes lugares no mesmo processo, você sempre poderá acessar seus valores específicos simplesmente chamando [Form](form.md).myProperty. Além disso, uma vez que os objetos são passados por referência, se o usuário modifica um valor de propriedade no formulário, ele será automaticamente salvo no objeto em si.

- [associar uma classe de usuário ao formulário](../FormEditor/properties_FormProperties.md#form-class), caso em que o 4D instanciará automaticamente um objeto dessa classe quando o formulário for carregado. As propriedades e funções do objeto estarão automaticamente disponíveis através do objeto retornado por [Form](form.md). Você poderia escrever por exemplo `Form.myFunction()`.

:::note

- O parâmetro *formData* tem prioridade sobre uma classe de formulário (o objeto de classe não é instanciado se um parâmetro *formData* for passado).
- Se você não passar o parâmetro *formData* (ou se passar um objeto indefinido) e nenhuma classe de usuário estiver associada ao formulário, **DIALOG** criará um novo objeto vazio vinculado ao *formulário*.

:::

A caixa de diálogo é fechada pelo usuário com uma ação de "aceitação" (acionada pela ação padrão ak accept, pela tecla Enter ou pelo comando [ACCEPT](../commands-legacy/accept.md)) ou com uma ação de "cancelamento" (acionada pela ação padrão ak cancel, pela tecla Escape ou pelo comando [CANCEL](../commands-legacy/cancel.md)). Uma ação de aceitação definirá a variável de sistema OK como 1, enquanto uma ação de cancelamento definirá OK como 0\.

Lembre-se de que a validação não é igual a gravação: se o diálogo incluir campos, você deve chamar explicitamente o comando [SAVE RECORD](../commands-legacy/save-record.md) para salvar todos os dados que foram modificados.

Se você passar o parâmetro opcional *\**, o formulário será carregado e exibido na última janela aberta do processo atual e o comando terminará sua execução deixando o formulário ativo na tela.\
Esse formulário reage "normalmente" às ações do usuário e é fechado usando uma ação padrão ou quando o código 4D relacionado ao formulário (método de objeto ou método de formulário) chama o comando [CANCEL] (../commands-legacy/cancel.md) ou [ACCEPT] (../commands-legacy/accept.md). Se o processo atual for encerrado, os formulários criados dessa forma serão automaticamente fechados da mesma forma como se um comando [CANCEL](../commands-legacy/cancel.md) tivesse sido chamado. Esse modo de abertura é particularmente útil para exibir uma paleta flutuante com um documento, sem necessariamente exigir outro processo.

**Notas:**

- Você pode combinar o uso da sintaxe **DIALOG**(formulário;\*) com o comando [CHAMAR FORM](../commands-legacy/call-form.md) para estabelecer a comunicação entre os formulários.
- Você deve criar uma janela antes de chamar a instrução **DIALOG**(formulário;\*). Não é possível usar a janela de diálogo atual no processo nem a janela criada por padrão para cada processo. Caso contrário, o erro -9909 é gerado.
- Quando o parâmetro *\** é usado, a janela é fechada automaticamente após uma ação padrão ou uma chamada para o comando [CANCEL](../commands-legacy/cancel.md) ou [ACCEPT](../commands-legacy/accept.md). Você não tem que gerenciar o fechamento da janela em si.

## Exemplo 1

O exemplo a seguir pode ser usado para criar uma paleta de ferramentas:

```4d
  //Exibe a paleta de ferramentas
 $palette_window:=Open form window("tools";Palette form window)
 DIALOG("tools";*) //Devolve o controle imediatamente
  //Exibe a janela do documento principal
 $document_window:=Open form window("doc";Plain form window)
 DIALOG("doc")
```

## Exemplo 2

Em um formulário que exibe o registro de uma pessoa, o botão "Check children" (Verificar filhos) abre uma caixa de diálogo para verificar/modificar os nomes e as idades dos filhos:

![](../assets/en/commands/pict3542015.en.png)

**Nota:** O campo de objeto "Children" é representado apenas para mostrar sua estrutura neste exemplo.

No formulário de verificação, você atribuiu algumas propriedades do objeto [Form](form.md) a variáveis:

![](../assets/en/commands/pict3541682.en.png)

Aqui está o código do botão "Check children":

```4d
 var $win;$n;$i : Integer
 var $save : Boolean
 ARRAY OBJECT($children; )
 OB GET ARRAY([Person]crianças;"crianças";$children) //get a coleção dos filhos
 $save:=False //initialize a variável de salvamento
 
 $n:=Size of array($children)
 If($n>0)
    $win:=Abrir janela de forma ("Edit_Children"; Caixa de diálogo de formulário ovable)
    SET WINDOW TITLE("Cheque os filhos para "+[Person]Nome)
    For($i; ;$n) //para cada criança
       DIALOG("Edit_Children";$children{$i}) //exibe um diálogo cheio de valores
       If(OK=1) ///o usuário clicou em OK
          $save:=Verdadeiro
       End se
    End para
    If($save=True)
       [Person]Children:=[Person]Filhos//força atualização do campo de objeto
    End se
    CLOSE WINDOW($win)
 Else
    ALERT("Não há filho para verificar. )
 finais, se
```

O formulário exibe informações de cada criança:

![](../assets/en/commands/pict3515152.en.png)

Se os valores forem editados e o botão OK for clicado, o campo será atualizado (o registro pai deverá ser salvo em seguida).

## Exemplo 3

O exemplo a seguir usa o caminho para um formulário .json para exibir os registros em uma lista de funcionários:

```4d
 Open form window("/RESOURCES/OutputPersonnel.json";Plain form window)
 ALL RECORDS([Personnel])
 DIALOG("/RESOURCES/OutputPersonnel.json";*)
```

que é exibido:

![](../assets/en/commands/pict3687439.en.png)

## Exemplo

O exemplo a seguir usa um arquivo .json como um objeto e modifica algumas propriedades:

```4d
 var $form : Object
 $form:=JSON Parse(Document to text(Get 4D folder(Current resources folder)+"OutputPersonnel.json"))
 $form.windowTitle:="The Avengers"
 $form.pages[1].objects.logo.picture:="/RESOURCES/Images/Avengers.png"
 $form.pages[1].objects.myListBox.borderStyle:="double"
 Open form window($form;Plain form window)
 DIALOG($form;*)
```

O formulário alterado é exibido com o título, o logotipo e a borda modificados:

![](../assets/en/commands/pict3688356.en.png)

## Variáveis e configurações do sistema

Depois de uma chamada para **DIALOG**, se a caixa de diálogo for aceita, OK está definido como 1; se for cancelado, OK está definido como 0.

## Veja também

[ACCEPT](../commands-legacy/accept.md)\
[ADD RECORD](../commands-legacy/add-record.md)\
[CALL FORM](../commands-legacy/call-form.md)\
[CANCEL](../commands-legacy/cancel.md)\
[Form](form.md)\
[Open window](../commands-legacy/open-window.md)

## Propriedades

|                       |                             |
| --------------------- | --------------------------- |
| Número de comando     | 40                          |
| Thread safe           | &cross; |
| Modifica as variáveis | OK, error                   |

