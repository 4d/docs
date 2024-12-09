---
id: form-set-output
title: FORM SET OUTPUT
slug: /commands/form-set-output
displayed_sidebar: docs
---

<!--REF #_command_.FORM SET OUTPUT.Syntax-->**FORM  SET OUTPUT** ( {*tabela* ;} *formulario* {; *formUsuario*} )<!-- END REF-->
<!--REF #_command_.FORM SET OUTPUT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela para a qual vai estabelecer o formulário output, ou tabela padrão, se omitido |
| formulario | Text, Object | &#8594;  | Nome formulário |
| formUsuario | Text | &#8594;  | Nome de formulário usuário a utilizar |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.FORM SET OUTPUT.Summary-->O comando FORM SET OUTPUT define o formulário de salida atual de *formulario* ou *formUsuario*.<!-- END REF--> O formulário deve pertencer a *tabela*.

O parâmetro formulário é o formulário que será exibido. Passe:  
  
 o nome de um formulário;  
 a rota (em sintaxe POSIX) para um arquivo json válido contendo uma descrição doe formulário a usar. Veja *Form file path*;  
 um objeto que contenha a descrição do formulário.  

O alcance de este comando é o processo atual. Cada tabela tem seu próprio formulário de saída em cada processo.

**Nota**: por razões estruturais, este comando não é compatível com formulários de projeto. Se passa um formulário de projeto em formulário, o comando não faz nada.

FORM SET OUTPUT não mostra o formulário; simplesmente designa o formulário que deve imprimir, mostrar, ou utilizar outro comando. Para maior informação sobre a criação de formulários, consulte o .

O formulário de saída padrão é definido na janela do Explorador no ambiente Desenho para cada tabela. Este formulário de saída padrão é utilizado se o comando FORM SET OUTPUT não é utilizado para especificar um formulário de saída, ou se você especificar um formulário que não existe.

O parâmetro opcional *formUsuario* lhe permite especificar um formulário usuário (que vem desde *formulario*) como formulário de saída padrão. Se passar um nome de formulário de usuário correto, este formulário será utilizado automaticamente ao invés do formulário de saída no processo atual. Isto lhe permite ter simultâneamente diferentes formulários de usuário personalizados (gerados utilizando o comando *CREATE USER FORM*) e utilizar o que convenha de acordo ao contexto.

Para maior informação sobre formulários usuário, consulte a seção . 

Os formulários de saída são utilizados por três grupos de comandos. Um grupo mostra uma lista de registros em tela, outro grupo gera relatórios, e o terceiro grupo exporta dados. Os comandos [DISPLAY SELECTION](display-selection.md "DISPLAY SELECTION") e [MODIFY SELECTION](modify-selection.md "MODIFY SELECTION") mostram uma lista de registros utilizando um formulário de saída. Utilize o formulário de saída durante a criação de relatórios com os comandos [PRINT LABEL](print-label.md "PRINT LABEL") e [PRINT SELECTION](print-selection.md "PRINT SELECTION"). Cada um dos comandos de exportação ([EXPORT DIF](export-dif.md "EXPORT DIF"), [EXPORT SYLK](export-sylk.md "EXPORT SYLK") e [EXPORT TEXT](export-text.md "EXPORT TEXT")) utiliza também o formulário de saída.

#### Exemplo 1 

O exemplo a seguir mostra um uso típico de **FORM SET OUTPUT**.. Note que mesmo que o comando **FORM SET OUTPUT**. aparece imediatamente antes de que o formulário seja utilizado, não é obrigatório. Realmente, o comando poderia ser executado em um método completamente diferente, sempre e quando seja executado antes deste método:

```4d
 FORM SET INPUT([Partes];"Entrada partes") // Seleção do formulário de entrada
 FORM SET OUTPUT([Partes];"Lista partes") // Seleção do formulário de saída
 MODIFY SELECTION([Partes]) // Este comando utiliza ambos formulários
```

#### Exemplo 2 

Os exemplos abaixo usam a rota a um formulário json para imprimir os registros em uma lista de empregados: 

```4d
 FORM SET OUTPUT([Personnel];"/RESOURCES/PersonnelForm.json")
 ALL RECORDS([Personnel])
 PRINT SELECTION([Personnel])
```

#### Ver também 

[DISPLAY SELECTION](display-selection.md)  
[EXPORT DIF](export-dif.md)  
[EXPORT SYLK](export-sylk.md)  
[EXPORT TEXT](export-text.md)  
[FORM SET INPUT](form-set-input.md)  
[MODIFY SELECTION](modify-selection.md)  
[PRINT LABEL](print-label.md)  
[PRINT SELECTION](print-selection.md)  