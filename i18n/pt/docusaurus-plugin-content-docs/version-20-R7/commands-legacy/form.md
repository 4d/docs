---
id: form
title: Form
slug: /commands/form
displayed_sidebar: docs
---

<!--REF #_command_.Form.Syntax-->**Form**  : Object<!-- END REF-->
<!--REF #_command_.Form.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Object | &#8592; | Formulário de dados associado ao formulário atual |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.Form.Summary-->O comando **Form** devolve o objeto associado com o formulário atual, se houver.<!-- END REF--> 4D associa automaticamente um objeto ao formulário atual nos casos abaixo:

* o formulário atual tiver sido mostrado pelo comando [DIALOG](dialog.md),
* o formulário atual for um subformulário.
* um formulário tabela estiver exibido atualmente na tela.

##### formulário DIALOG 

Se o formulário atual for mostrado mediante uma chamada ao comando [DIALOG](dialog.md), **Form** devolve ou um objeto vazio, ou o objeto *formData* passado como parâmetro a este comando, se houver.

##### Subformulário 

Se o formulàrio atual for um subformulário, o objeto devolvido depende da variável container pai:

* Se a variável associada ao container principal tiver sido escrita como um objeto ([C\_OBJECT](c-object.md)), **Form** devolve o valor desta variável.  
Neste caso, o objeto devolvido por **Form** é o mesmo que o devolvido pela expressão abaixo:  
```4d  
 (OBJECT Get pointer(Object subform container))->  
```
* Se a variável associada ao container pai não tiver sido escrita como um objeto, **Form** devolve um objeto criado automaticamente, mantido por 4D no contexto de subformulário.

Para mais informação, consulte a seção *Subformulários em modo página*.

##### Formulário tabela 

**Form** retorna o objeto associado com o formulário tabela exibido na tela. No contexto de um formulário input exibido a partir de um formulário output (ou seja, depois de um duplo clique em um registro), o objeto retornado contém as propriedades abaixo: 

| **Propriedade** | **Tipo** | **Descrição**                            |
| --------------- | -------- | ---------------------------------------- |
| parentForm      | object   | **Form** objeto do formulário output pai |

#### Exemplo 

Em um formulário exibindo o registro de uma pessoa, um botão "Check children" abre um diálogo para verificar/modificar os nomes e idades dos filhos:

![](../assets/en/commands/pict3542015.en.png)

**Nota:** O campo objeto "Children" é representado apenas para mostrar sua estrutura para esse exemplo.

No formulário de verificação, se tiver atribuido algumas propriedades de objeto a variáveis [Form](form.md):

![](../assets/en/commands/pict3541682.en.png)

Abaixo o código para o botão "Check children":

```4d
 var $win;$n;$i : Integer
 var $save : Boolean
 ARRAY OBJECT($children;0)
 OB GET ARRAY([Person]Children;"children";$children) //obtém a coleção children
 $save:=False //initializa a variável save
 
 $n:=Size of array($children)
 If($n>0)
    $win:=Open form window("Edit_Children";Movable form dialog box)
    SET WINDOW TITLE("Check children for "+[Person]Name)
    For($i;1;$n) //para cada child
       DIALOG("Edit_Children";$children{$i}) //exibe diálogo preenchido com valores
       If(OK=1) //o usuário clica OK
          $save:=True
       End if
    End for
    If($save=True)
       [Person]Children:=[Person]Children //força a atualização do campo objeto
    End if
    CLOSE WINDOW($win)
 Else
    ALERT("No child to check.")
 End if
```

**Nota:** Esse exemplo exige que a notação de objeto esteja ativada no banco de dados (ver *Página Compatibilidade*).

O formulário exibe informação para cada campo:

![](../assets/en/commands/pict3515152.en.png)

Se os valores forem editados e o botão OK button for clicaod, o campo é atualizado (o registro pai deve ser salvo depois). 

#### Ver também 

[DIALOG](dialog.md)  