---
id: form-edit
title: FORM EDIT
displayed_sidebar: docs
---

<!--REF #_command_.FORM EDIT.Syntax-->**FORM EDIT** ( {*aTable* ;} *form* )<br/>**FORM EDIT** ( {*aTable* ;} *form* ; *object* )<!-- END REF-->

<!--REF #_command_.FORM EDIT.Params-->

| Parâmetro | Tipo   |                             | Descrição                                                                                 |
| --------- | ------ | --------------------------- | ----------------------------------------------------------------------------------------- |
| aTable    | Tabela | &#8594; | Table owning the form or If omitted: default table or use of project form |
| form      | Text   | &#8594; | Nome do formulario                                                                        |
| object    | Text   | &#8594; | Nome do objeto do formulário ou nome do grupo                                             |

<!-- END REF-->

<details><summary>História</summary>

| Release | Mudanças                      |
| ------- | ----------------------------- |
| 20 R8   | Suporte ao parâmetro *objeto* |

</details>

#### Descrição

<!--REF #_command_.FORM EDIT.Summary-->The **FORM EDIT** command opens the *form* associated to *aTable* in the 4D Form editor, with optionnally *object* selected.<!-- END REF-->The **FORM EDIT** command opens the *form* associated to *aTable* in the 4D Form editor, with optionnally *object* selected.The **FORM EDIT** command opens the *form* associated to *aTable* in the 4D Form editor, with optionnally *object* selected.The **FORM EDIT** command opens the *form* associated to *aTable* in the 4D Form editor, with optionnally *object* selected.The **FORM EDIT** command opens the *form* associated to *aTable* in the 4D Form editor, with optionnally *object* selected.The **FORM EDIT** command opens the *form* associated to *aTable* in the 4D Form editor, with optionnally *object* selected.The **FORM EDIT** command opens the *form* associated to *aTable* in the 4D Form editor, with optionnally *object* selected.O comando **FORM EDIT** abre o *formulário* associado a *aTable* no editor do formulário 4D, com opcionalmente *objeto* selecionado. Note que você deve ter acesso ao ambiente de Design, caso contrário o erro -9804 ("Impossível abrir formulário") será gerado.

O comando é assíncrono: ele retorna imediatamente ao método de chamada e não espera que a forma seja aberta.

Se você passar o parâmetro opcional *aTable*, você indica a tabela associada ao *formulário*. Se você omitir este parâmetro, você indica que *forma* é um formulário de projeto.

No parâmetro *formulário*, passe o nome da forma para abrir no editor de Formulário 4D. Se você passar um nome que não existe, o erro 81 é gerado ("Formulário não encontrado").

Opcionalmente, você pode passar no *objeto* o nome de um objeto de formulário ou de um grupo para selecionar automaticamente no editor do formulário 4D. Este recurso permite, por exemplo, economizar tempo quando depurar um formulário baseado em erros de expressão retornados por [`Compilar projeto`](compile-project.md).

Se *objeto* não for encontrado em *formulário*, o formulário é aberto e nenhum erro é retornado.

Passa uma seqüência de caracteres vazia em *objeto* para desmarcar todos os objetos da *forma* aberta.

#### Exemplos

Para abrir o formulário *Contacts* da tabela *Address*:

```4d
FORM EDIT([Contatos]; "Endereço")
```

Para abrir o formulário do projeto *ContactList*:

```4d
 FORM EDIT("ContactList")
```

Para abrir o formulário de projeto *ContatoPage* com o objeto "nome-entrada" selecionado:

```4d
 FORM EDIT("ContactList"; "name-input")
```

#### Veja também

*Design de Comandos de Acesso aos Objetos*

#### Propriedades

|                |                                 |
| -------------- | ------------------------------- |
| Command number | 1749                            |
| Thread safe    | &amp;cross; |


