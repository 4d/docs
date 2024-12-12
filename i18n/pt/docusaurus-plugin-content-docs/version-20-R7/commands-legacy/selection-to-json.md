---
id: selection-to-json
title: Selection to JSON
slug: /commands/selection-to-json
displayed_sidebar: docs
---

<!--REF #_command_.Selection to JSON.Syntax-->**Selection to JSON** ( *aTabela* {; *oCampo*}{; *oCampo2* ; ... ; *oCampoN*}{; *modelo*})  : Text<!-- END REF-->
<!--REF #_command_.Selection to JSON.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Tabela a serializar |
| oField | Field | &#8594;  | Campo(s) cujo(s) conteúdos devem ser serializados |
| modelo | Object | &#8594;  | Objeto para a seleção de etiquetas e de campos |
| Resultado | Text | &#8592; | Cadeia que contém o array JSON serializado |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Selection to JSON.Summary-->O comando **Selection to JSON** devolve uma cadeia JSON que contém os valores dos campos da seleção atual de *aTabela*.<!-- END REF--> Cada elemento do array é um objeto JSON contendo as etiquetas e valores dos campos da seleção.

Caso passe só o parâmetro *aTabela*, o comando inclui, na cadeia JSON, os valores de todos os campos da tabela que podem ser expressados em JSON. Os campos tipo BLOB e imagem são ignorados.  
  
Se não deseja incluir todos os campos de *aTabela*, pode utilizar o parâmetro *oCampo* ou o parâmetro *modelo*:

* *oCampo*: passe um ou mais campos neste parâmetro. Só os valores dos campos definidos são incluídos na cadeia JSON.
* *modelo*: passe um objeto 4D que contém um ou mais pares *nome/valor* onde *valor* contém um ponteiro a um campo à incluir (ver o exemplo 3).

Este comando suporta campos tipo Objeto: os dados desses campos são automaticamente convertidos ao formato JSON. Note que o comando 4D abaixo pode ser interpretado como "produza JSON de todos os valores de objetoCampo na seleção atual da tabela":  

```4d
 Selection to JSON([aTable];objectField)
```

**Nota:** Depois de uma chamada a **Selection to JSON**, a seleção atual e registro atual permanecem o mesmo, mas o registro atual não é mais carregado. e poderia ter mudado (o último registro da seleçao atual é então o registro atual). Depois do comando Selection to JSON, utilize os comandos [LOAD RECORD](load-record.md) em combinação com [GOTO SELECTED RECORD](goto-selected-record.md) (se for necessário) utilize os valores dos campos no registro atual.

#### Exemplo 1 

Quer criar uma cadeia JSON que represente esta seleção:

![](../assets/en/commands/pict1205203.en.png)

1) Deseja incluir os valores de todos os campos da tabela \[Members\]:  

```4d
 $jsonString :=Selection to JSON([Members])
  // $jsonString =[{"LastName":"Durant","FirstName":"Mark","Address":
  //"25 Park St","Zip code":"15205","City":"Pittsburgh"},{"LastName":
  //"Smith","FirstName":"John","Address":"24 Philadelphia Ave","Zip code":
  //"75203","City":"Dallas"},{"LastName":"Anderson","FirstName"
  //:"Adeline","Address":"37 Market St","Zip code":"45205","City":"Cincinnati"},...]
```

2) Deseja reduzir a seleção e só incluir dois campos na cadeia JSON utilizando a sintaxe baseada nos campos:  

```4d
 QUERY([Members];[Members]LastName="A@")
 $jsonString :=Selection to JSON([Members];[Members]LastName;[Members]City)
  // $jsonString = [{"LastName":"Anderson","City":"Cincinnati"},
  // {"LastName":"Albert","City":"Houston"}]
```

3) Só deseja incluir um campo na cadeia JSON utilizando a sintaxe do modelo:  

```4d
 var $template : Object
 OB SET($template;"LastName";->[Members]LastName) // um só campo
 ALL RECORDS([Members])
 $jsonString :=Selection to JSON([Members];$template)
  // $jsonString = [{"LastName":"Durant"},{"LastName":"Smith"},{"LastName":"Anderson"},{"LastName":"Albert"},
  // {"LastName":"Leonard"},{"LastName":"Pradel"}]
```

#### Exemplo 2 

Pode usar a sintaxe *modelo* para exportar campos de tabelas diferentes:

```4d
 var $template : Object
 var $jsonString : Text
 OB SET($template;"Last name";->[Emp]LastName)
 OB SET($template;"First name";->[Emp]FirstName)
 OB SET($template;"Company";->[Company]LastName) //etiqueta personalizada de outro modo entra em conflito com campo [Emp]LastName
 ALL RECORDS([Emp])
 SET FIELD RELATION([Emp]UUID_Company;Automatic;Do not modify)
 $jsonString:=Selection to JSON([Emp];$template)
 SET FIELD RELATION([Emp]UUID_Company;Structure configuration;Do not modify)
```

#### Ver também 

[JSON TO SELECTION](json-to-selection.md)  