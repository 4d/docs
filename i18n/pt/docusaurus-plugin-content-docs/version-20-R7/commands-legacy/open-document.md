---
id: open-document
title: Open document
slug: /commands/open-document
displayed_sidebar: docs
---

<!--REF #_command_.Open document.Syntax-->**Open document** ( *documento* {; *tipoArquivo*}{; *modo*} ) : Time<!-- END REF-->
<!--REF #_command_.Open document.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| documento | Text | &#8594;  | Nome de documento ou rota de acesso completa ou string vazia para caixa de diálogo de arquivo |
| tipoArquivo | Text | &#8594;  | Lista de tipos de documentos a serem pesquisados, ou "*" para não pesquisar os documentos |
| modo | Integer | &#8594;  | Modo de abertura do documento |
| Resultado | Time | &#8592; | Número de referência de documento |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Open document.Summary-->O comando Open document abre o documento cujo nome ou rota de acesso se passa em *documento*.<!-- END REF-->  
  
Se passar uma string vazia em *documento*, aparece uma caixa de diálogo padrão de abertura de arquivos, e o usuário pode selecionar o documento a abrir. Se cancelar o diálogo, o documento não é aberto; Open document retorna uma referência de documento nula, e a variável OK toma o valor 0.

* Se o documento abrir corretamente, Open document retorna seu número de referência e a variável OK toma o valor 1.
* Se o documento estiver aberto e o parâmetro *modo* for omitido, Open document abre o documento em modo leitura/escritura e a variável OK toma o valor 1.
* Se o documento já estiver aberto em modo leitura/escritura e você tentar abri-lo em modo escrita, um erro é gerado (-43) No entanto pode abri-lo em modo leitura unicamente, logo a variável OK toma o valor 1.
* Se o documento não existir, um erro é gerado.

No parâmetro *tipoArquivo*, passe os tipos de arquivos que podem ser selecionados na caixa de diálogo de abertura. Pode passar uma lista de vários tipos separados por um ";" (ponto e vírgula). Para cada tipo definido, uma linha nserá adicionada ao menu para escolher o tipo de caixa de diálogo.

Em Mac OS, pode passar o tipo Mac OS clásico (TEXT, APPL, etc.), ou um tipo UTI (Uniform Tipo Identifier). Os tipos UTIs são definidos por Apple para responder as necessidades de padronização dos tipos de arquivos. Por exemplo, "public.text" é o tipo UTI dos arquivos de tipo texto. Para maior informação sobre os UTIs, consulte a seguinte direção:   
*https://developer.apple.com/library/mac/#documentation/FileManagement/Conceptual/understanding\_utis/understand\_utis\_intro/understand\_utis\_intro.html*.

Em Windows, também pode passar um tipo de arquivo clássico Mac OS, 4D realiza a correspondência interna, ou a extensão dos arquivos (.txt, .exe, etc.). Note que em Windows, o usuário pode “forçar” a visualização de todos os tipos de arquivos introduzindo \*.\* na caixa de diálogo. Entretanto, neste caso, 4D realizará uma verificação adicional dos tipos de arquivos selecionados: se o usuário selecionar um tipo de arquivo não autorizado, o comando retorna um erro.

Se não deseja restringir os arquivos mostrados a um ou mais tipos, passe a cadeia "\*" (asterisco) ou ".\*" em *tipoArquivo*.  
  
O parâmetro opcional *modo* permite definir o modo de abertura do arquivo *documento*. Estão disponíveis quatro diferentes modos de abertura. 4D oferece as seguintes constantes pré-definidas, localizadas no tema "*Documentos Sistema*":

| Constante      | Tipo          | Valor |
| -------------- | ------------- | ----- |
| Get Pathname   | Inteiro longo | 3     |
| Read and Write | Inteiro longo | 0     |
| Read Mode      | Inteiro longo | 2     |
| Write Mode     | Inteiro longo | 1     |

Quando um documento for aberto, Open document se localiza inicialmente ao começo do documento, enquanto [Append document](append-document.md) é localizado ao final do documento.  

Quando abrir um documento, pode ler e escrever no documento utilizando os comandos [RECEIVE PACKET](receive-packet.md) e [SEND PACKET](send-packet.md) que pode combinar com os comandos [Get document position](get-document-position.md) e [SET DOCUMENT POSITION](set-document-position.md) para acessar diretamente a qualquer parte do documento.

Não esqueça de, no final, chamar [CLOSE DOCUMENT](close-document.md) para o documento.

#### Exemplo 1 

O exemplo abaixo abre um documento existente chamado Nota, escreve a string “Até logo”, e fecha o documento. Se o documento contiver a string “Olá”, esta string será substituida: 

```4d

//``

  
```4d
 [#code4D]var vhDoc : Time
 vhDoc:=Open document("Note.txt";Read and Write) //Open a document called Note
 If(OK=1)
    SEND PACKET(vhDoc;"Good-bye") //Write one word into the document
    CLOSE DOCUMENT(vhDoc) //Close the document
 End if[#/code4D]
 
 
```

#### Exemplo 2 

Agora pode ler um documento mesmo se estiver aberto em modo escrita: 

```4d
 vDoc:=Open document("PassFile";"TEXT") // O arquivo está aberto
  // Antes de fechar o arquivo, é possível consultá-lo em modo apenas leitura:
 vRef:=Open document("PassFile";"TEXT";Read Mode) // O arquivo está fechado
```

#### Variáveis e conjuntos do sistema 

Se o documento for aberto corretamente, a variável sistema OK assume o valor 1; do contrário, assume o valor 0\. Depois da chamada, a variável sistema Document contém o nome completo do documento.  

Se passa o valor 3 em *modo*, a função retorna ?00:00:00? (sem referência de documento). O documento não é aberto mas as variáveis sistema Document e OK são atualizadas:

* OK toma o valor 1.
* Document contém a rota de acesso e o nome do arquivo *document*.
  
  
**Nota**: se não for encontrado o arquivo definido em *documento* ou se for passado uma string vazia em *documento*, aparece uma caixa de diálogo de abertura de arquivos. Se o usuário escolher um documento e clicar no botão OK, *documento* define a rota ao documento selecionado pelo usuário e OK toma o valor 1\. Se o usuário clicar no botão Cancelar, OK toma o valor 0.

#### Ver também 

[Append document](append-document.md)  
[Create document](create-document.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 264 |
| Thread-seguro | &check; |
| Modificar variáveis | OK, Document, error |
| Proibido no servidor ||


