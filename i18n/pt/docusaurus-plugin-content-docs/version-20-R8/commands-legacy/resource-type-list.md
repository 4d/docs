---
id: resource-type-list
title: RESOURCE TYPE LIST
slug: /commands/resource-type-list
displayed_sidebar: docs
---

<!--REF #_command_.RESOURCE TYPE LIST.Syntax-->**RESOURCE TYPE LIST** ( *resTipos* {; *resArquivo*} )<!-- END REF-->
<!--REF #_command_.RESOURCE TYPE LIST.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| resTipos | Text array | &#8592; | Lista de tipos resources disponíveis |
| resArquivo | Time | &#8594;  | Número de referência do arquivo Resource, ou todos os arquivos de referência abertos, se omitido |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.RESOURCE TYPE LIST.Summary-->O comando RESOURCE TYPE LIST preenche o array *resTipos* com os tipos de recursos presentes no(os) arquivo(s) de recursos aberto(s).<!-- END REF-->  
  
Se passa um número de referência de arquivo de recursos válido no parâmetro opcional *resArquivo*, apenas são listados os recursos desse arquivo. Se não passa *resArquivo*, são listados todos os recursos dos arquivos de recursos abertos.  
  
Pode pré-declarar o array *resTipos* como um array tipo Alfa ou Texto antes de chamar a RESOURCE TYPE LIST. Se não pré-declarar o array, o comando cria *resTipos* como um array tipo Texto.  
  
Depois da chamada, pode testar o número de tipo de recursos encontrados aplicando o comando [Size of Array](size-of-array.md "Size of Array") ao array *resTipos*.

#### Exemplo 1 

O exemplo a seguir preenche o array *atResTipo* com os tipos de recursos presentes nos arquivos de recursos abertos: 

```4d
 RESOURCE TYPE LIST(atResTipo)
```

#### Exemplo 2 

O arquivo mostra se o arquivo de estrutura Mac OS usa o conteúdo dos antigos plug-ins 4D, que deverão ser atualizados para usar o banco em Windows: 

```4d
 $vhResArquivo:=Open resource file(Structure file)
 RESOURCE TYPE LIST(atResTipo;$vhResArquivo)
 If(Find in array(atResTipo;"4DEX")>0)
    ALERT("Este banco contém os plug-ins 4D do modelo antigo."+(Char(13)*2)+
    "Terá que atualizá-los para utilizar este banco em Windows.")
 End if
```

**Nota:** O arquivo de estrutura não é o único arquivo no qual os plug-ins da versão anterior podem ser armazenados. O banco também pode incluir um arquivo Proc.Ext.

#### Exemplo 3 

O método de projeto a seguir retorna o número de recursos presentes em um arquivo de recursos:

```4d
  // Método de projeto Contar recursos
  // Contar recursos ( Hora) -> Intero longo
  // Contar recursos ( DocRef ) -> Número de recursos
 
 var $0 : Integer
 var $1 : Time
 
 $0:=0
 RESOURCE TYPE LIST($atResTipo;$1)
 For($vlElem;1;Size of array($atResTipo))
    RESOURCE LIST($atResTipo{$vlElem};$alResNum;$atResNom;$1)
    $0:=$0+Size of array($alResNum)
 End for
```

Quando este método de projeto for implementado em um banco, pode escrever:

```4d
 $vhResArchivo:=Open resource file("")
 If(OK=1)
    ALERT("O arquivo “"+Document+"” contém "+String(Count resources($vhResArquivo))+" recurso(s).")
    CLOSE RESOURCE FILE($vhResArquivo)
 End if
```

#### Ver também 

[RESOURCE LIST](resource-list.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 499 |
| Thread-seguro | &cross; |


