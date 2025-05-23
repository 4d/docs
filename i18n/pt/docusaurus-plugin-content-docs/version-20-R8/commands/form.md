---
id: form
title: Formulário
displayed_sidebar: docs
---

<!--REF #_command_.Form.Syntax-->**Form**  : Object<!-- END REF-->

<!--REF #_command_.Form.Params-->

| Parâmetro | Tipo   |                             | Descrição                 |
| --------- | ------ | --------------------------- | ------------------------- |
| Resultado | Object | &#8592; | Dados do formulário atual |

<!-- END REF-->

<details><summary>História</summary>

| Release | Mudanças                           |
| ------- | ---------------------------------- |
| 20 R8   | Suporte das classes de formulários |

</details>

## Descrição

<!--REF #_command_.Form.Summary-->The **Form** command returns the object associated with the current form (instantiated from the *formData* parameter or the user class assigned in the Form editor).<!-- END REF-->O comando **Form** retorna o objeto associado ao formulário atual (instanciado a partir do parâmetro *formData* ou da classe usuário atribuída no editor de formulários). O 4D associa automaticamente um objeto ao formulário atual nos seguintes casos:

- o formulário atual foi carregado por um dos comandos [`DIALOG`](dialog.md), [`Print form`](print-form.md) ou [`FORM LOAD`](form-load.md),
- o formulário atual é um subformulário,
- um formulário de tabela é exibido na tela no momento.

### Comandos (DIALOG...)

Se o formulário atual estiver sendo exibido ou carregado por uma chamada aos comandos [DIALOG](dialog.md), [`Print form`](print-form.md) ou [`FORM LOAD`](form-load.md), **Form** retornará um dos dois:

- o objeto *formData* passado como parâmetro para esse comando, se houver,
- ou, um objeto instanciado da [classe de usuário associada ao formulário](../FormEditor/properties_FormProperties.md#form-class), se houver,
- ou um objeto vazio.

### Subformulário

Se o formulário atual for um subformulário, o objeto retornado dependerá da variável do contêiner pai:

- **Form** returns the object associated with the table form displayed on screen.\
 **Form** returns the object associated with the table form displayed on screen.\
 In the context of an input form displayed from an output form (i.e. after a double-click on a record), the returned object contains the following property:

```4d
 (OBJECT Get pointer(Object subform container))->  
```

- Se a variável associada ao contêiner pai não foi tipada como um objeto, **Forma** retorna um objeto vazio, mantido por 4D no contexto do subformulário.

Para mais informações, consulte a seção *Subformulários de Páginas*.

### Formulário de tabela

**Form** returns the object associated with the table form displayed on screen.\
**Form** returns the object associated with the table form displayed on screen.\
In the context of an input form displayed from an output form (i.e. after a double-click on a record), the returned object contains the following property: **Form** returns the object associated with the table form displayed on screen.\
In the context of an input form displayed from an output form (i.e. after a double-click on a record), the returned object contains the following property:

| **Propriedade** | **Tipo** | **Description**                            |
| --------------- | -------- | ------------------------------------------ |
| parentForm      | object   | Objeto **form** do formulário de saída pai |

## Exemplo

Em um formulário que exibe o registro de uma pessoa, o botão "Check children" (Verificar filhos) abre uma caixa de diálogo para verificar/modificar os nomes e as idades dos filhos:

![](../assets/en/commands/pict3542015.en.png)

**Nota:** O campo de objeto "Children" é representado apenas para mostrar sua estrutura neste exemplo.

No formulário de verificação, você atribuiu algumas propriedades do objeto Form aos inputs:

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

## Veja também

[DIALOG](dialog.md)

## Propriedades

|                   |                             |
| ----------------- | --------------------------- |
| Número de comando | 1466                        |
| Thread safe       | &cross; |


