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

<!--REF #_command_.Form.Summary-->O comando **Form** retorna o objeto associado ao formulário atual (instanciado a partir do parâmetro *formData* ou da classe usuário atribuída no editor de formulários).<!-- END REF--> O 4D associa automaticamente um objeto ao formulário atual nos seguintes casos:

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

- Se a variável associada ao contêiner pai tiver sido digitada como um objeto, **Form** retornará o valor dessa variável.\
 **Form** returns the object associated with the table form displayed on screen.\
 In the context of an input form displayed from an output form (i.e. after a double-click on a record), the returned object contains the following property:

```4d
 (OBJECT Get pointer(Object subform container))->  
```

- Se a variável associada ao contêiner pai não foi tipada como um objeto, **Forma** retorna um objeto vazio, mantido por 4D no contexto do subformulário.

Para mais informações, consulte a seção *Subformulários de Páginas*.

### Formulário de tabela

**Formulário** retorna o objeto associado com o formulário da tabela exibido na tela. No contexto de um formulário de entrada exibido a partir de um formulário de saída (ou seja, após um clique duplo em um registro), o objeto retornado contém a seguinte propriedade:

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
 ARRAY OBJECT($children;0)
 OB GET ARRAY([Person]Children; "children";$children) //obtém a coleção de filhos
 $save:=False //inicializa a variável de salvamento
 
 $n:=Size of array($children)
 If($n>0)
    $win:=Open form window("Edit_Children";Movable form dialog box)
    SET WINDOW TITLE("Check children for "+[Person]Name)
    For($i;1;$n) //para cada filho
       DIALOG("Edit_Children";$children{$i}) //exibe a caixa de diálogo preenchida com valores
       If(OK=1) //o usuário clicou em OK
          $save:=True
       End if
    End for
    If($save=True)
       [Person]Children:=[Person]Children //força a atualização do campo de objeto
    End if
    CLOSE WINDOW($win)
 Else
    ALERT("No child to check.")
 End if
```

O formulário exibe informações para cada filho:

![](../assets/en/commands/pict3515152.en.png)

Se os valores são editados e o botão OK é clicado, o campo é atualizado (o registro pai deve ser salvo depois).

## Veja também

[DIALOG](dialog.md)

## Propriedades

|                   |                             |
| ----------------- | --------------------------- |
| Número de comando | 1466                        |
| Thread safe       | &cross; |


