---
id: open-resource-file
title: Open resource file
slug: /commands/open-resource-file
displayed_sidebar: docs
---

<!--REF #_command_.Open resource file.Syntax-->**Open resource file** ( *resNomArq* {; *tipoArquivo*} ) : Time<!-- END REF-->
<!--REF #_command_.Open resource file.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| resNomArq | Text | &#8594;  | Nome curto ou longo ou arquivo de resource ou string Vazia para caixa de diálogo Abrir Arquivo |
| tipoArquivo | Text | &#8594;  | Tipo de arquivo Mac OS (string de 4-caracteres), ou arquivo de extensao Windows  (string 1- a 3-caracteres), ou Todos arquivos, se omitido. |
| Resultado | Time | &#8592; | Número de referência do arquivo de Resouce |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Open resource file.Summary-->O comando **Open resource file** abre o arquivo de recursos cujo nome ou rota de acesso completa se passa em *resNomArquivo*.<!-- END REF-->  
  
Se passar um nome de arquivo, o arquivo deve estar localizado na mesma pasta que o arquivo de estrutura da banco. Para abrir um arquivo de recursos localizado em outra pasta, passe uma rota de acesso completa.  
  
Se passar uma string vazia em *resNomArquivo*, a caixa de diálogo padrão de abertura de arquivos aparece, permitindo ao usuário selecionar o arquivo a abrir. Se o usuário clicar em Cancelar nesta caixa de diálogo, nenhum arquivo de recursos é aberto; **Open resource file** retorna um valor nulo em DocRef e a variável oK toma o valor 0.

  
Se o arquivo de recursos for aberto corretamente, **Open resource file** retorna seu número de referência de arquivo e a variável oK toma o valor 1\. Se o arquivo de recursos não existir ou se o arquivo que intenta abrir não for um arquivo de recursos, um erro é gerado.  
  
Em Macintosh, a caixa de diálogo padrão de apertura de arquivos é utilizada, todos os arquivos são apresentados por padrão. Para mostrar arquivos de um tipo em particular, especifique o tipo do arquivo no parâmetro opcional *tipoArquivo*.  
  
Em Windows, Se utiliza a caixa de diálogo padrão de apertura de arquivos, todos os arquivos se apresentam por padrão. Para mostrar arquivos de um tipo particular, passe em *tipoArquivo*, uma extensão de arquivo Windows de 1 a 3 caracteres ou um tipo de arquivo Macintosh associado a uma extensão Windows utilizando o comando *\_o\_MAP FILE TYPES*.  
  
Lembre chamar [CLOSE RESOURCE FILE](close-resource-file.md) para o arquivo de recursos. Note, entretanto, que 4D fecha automaticamente todos os arquivos de recursos abertos utilizando **Open resource file**.  
  
Ao contrário do comando [Open document](open-document.md), que abre por padrão um documento com um acesso exclusivo em leitura escritura, **Open resource file**, permite abrir um arquivo de recursos já aberto desde a sessão 4D. Por exemplo, se tentar abrir o mesmo documento duas vezes com [Open document](open-document.md), um erro de E/S será devolvido na segunda tentativa. Por outro lado, se tentar abrir um arquivo de recursos já aberto desde a sessão 4D, **Open resource file** devolverá seu número de referência. Mesmo se abrir um arquivo de recursos várias vezes, necessita chamar [CLOSE RESOURCE FILE](close-resource-file.md) uma única vez para fechar esse arquivo. Note que este funcionamento é válido apenas se o arquivo de recursos estiver aberto desde a sessão 4D; Se tentar abrir um arquivo de recursos já aberto por outra aplicação, obterá um erro E/S.

**Advertência:**

* Está proibido acessar aos arquivos de recursos das aplicações 4D e dos bancos fusionados com 4D Desktop.
* Mesmo que seja tecnicamente possível, não é recomendável utilizar o arquivo de recursos da estrutura do banco porque seu código não funcionará. Se o banco estiver compilado e fusionado com 4D Desktop.
* Entretanto, se acessar ao arquivo de recursos da estrutura e deseja adicionar, apagar ou modificar os recursos por programação, tenha certeza de provar o ambiente no qual o banco é executado. Com 4D Server, isso provavelmente levará a sérios problemas. Por exemplo, se modificar um recurso na máquina do servidor (através de um método de banco de dados ou um procedimento armazenado), definitivamente afetará o sistema de administração integrado de 4D Server que distribui recursos (de manera transparente) às estações de trabalho. Note que com 4D Client, você não tem acesso direto ao arquivo de estrutura; está localizado na máquina servidora.
* Por todas estas razões, se utiliza os recursos, guarde-os em seus próprios arquivos.
* Quando trabalhe com seus próprios recursos, não utilize números de recursos negativos; os números negativos estão reservados para o sistema operativo. Não utilize números de recursos entre 0 e 14.999; esta faixa está reservada para 4D. Utilize a faixa entre 15.000 e 32.767 para seus próprios recursos. Lembre que uma vez tenha aberto um arquivo de recursos, será o primeiro arquivo onde será pesquisado na string de arquivos de recursos. Um recurso nesse arquivo foi guardado com um número que pertence às faixas reservadas para o Sistema ou para 4D, este recurso será utilizado não apenas por comandos como [GET RESOURCE](get-resource.md) como também por rotinas internas da aplicação 4D. Este pode poderia ser o resultado que você deseja obter, mas se não tiver certeza, NÃO utilize estas faixas, já que podem produzir erros do Sistema.
* Um arquivo de recursos é altamente estruturado e não pode aceitar mais de 2.700 recursos por arquivo. Se deseja trabalhar com arquivos que contenham um grande número de recursos, é recomendável provar esse número antes de adicionar novos recursos a um arquivo. Consulte os exemplos de Count resources na descrição do comando [RESOURCE TYPE LIST](resource-type-list.md).

Quando tiver aberto um arquivo de recursos, pode analizar seu conteúdo utilizando os comandos [RESOURCE TYPE LIST](resource-type-list.md) e [RESOURCE LIST](resource-list.md).

#### Exemplo 1 

O exemplo a seguir abre, em Windows, o arquivo de recursos “MyPrefs.res” localizado na pasta do banco: 

```4d
 $vhResArquivo:=Open resource file("MinhasPrefs";"res ")
```

Em Macintosh, o exemplo trata de abrir o arquivo “MinhasPrefs”.

#### Exemplo 2 

O exemplo a seguir tenta abrir em Windows o arquivo de recursos “MinhasPrefs.rsr” localizado na pasta do banco: 

```4d
 $vhResArchivo:=Open resource file("MinhasPrefs";"rsr")
```

Em Mac OS, o exemplo tentará abrir o arquivo “MnhasPrefs”.

#### Exemplo 3 

O exemplo a seguir mostra a caixa de diálogo padrão de abertura de arquivos, na qual são mostradas todos os tipos de documentos: 

```4d
 $vhResArchivo:=Open resource file("")
```

#### Exemplo 4 

O exemplo a seguir mostra a caixa de diálogo padrão de abertura de arquivos, na qual apenas são mostrados os documentos criados com a ajuda da função Create resource file, e que são utilizadas o tipo padrão: 

```4d
 $vhResArchivo:=Open resource file("";"res ")
 If(OK=1)
    ALERT("Acaba de abrir“"+Document+"”.")
    CLOSE RESOURCE FILE($vhResArquivo)
 End if
```

#### Variáveis e conjuntos do sistema 

Se o arquivo de recursos for aberto corretamente, a variável sistema OK assume o valor 1\. Se o arquivo de recursos não puder ser aberto ou se o usuário clicar em Cancelar na caixa de diálogo padrão de abertura de arquivos, a variável OK assume o valor 0 (zero).

Se o arquivo de recursos for aberto corretamente usando a caixa de diálogo padrão de abertura de arquivos, a variável sistema Document contém a rota de acesso ao arquivo.

#### Gestão de erros 

Se o arquivo de recursos não puder ser aberto por um problema do recurso ou de E/S, um erro é gerado. Pode interceptar esse erro com um método de gestão de erros instalado pelo comando [ON ERR CALL](on-err-call.md "ON ERR CALL").

#### Ver também 

[CLOSE RESOURCE FILE](close-resource-file.md)  
*Recursos*  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 497 |
| Thread-seguro | &check; |
| Modificar variáveis | OK, Document, error |
| Proibido no servidor ||


