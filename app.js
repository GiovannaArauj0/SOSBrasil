function buscarEmergencia() {
    

    let section = document.getElementById("resultado-pesquisa");  // Obtém a seção HTML onde os resultados da pesquisa serão exibidos.

    let campoPesquisa = document.getElementById("campo-pesquisa").value   // Obtém o valor digitado no campo de pesquisa e converte para minúsculas para a comparação.


    // Verifica se o campo de pesquisa está vazio.

    if (!campoPesquisa) {

        // Se o campo estiver vazio, exibe uma mensagem de erro.

        section.innerHTML = "<p class='descricao-aviso'>Nada foi encontrado. Você precisa digitar a emergência, nome do serviço ou número telefônico.</p>"

        return // Interrompe a função

    }

    campoPesquisa = campoPesquisa.toLowerCase()


    // Inicializa uma string vazia para armazenar os resultados da pesquisa.

    let resultados = "";

    // Converte todos os valores relevantes para minúsculas para facilitar a comparação.

    let nome = "";
    let telefone = "";
    let motivos = "";
    let descricao = "";
    let abrangencia = "";
    let tags = "";


    // Itera sobre cada serviço de emergência.

    for (let emergencia of servicosEmergencia) {

        nome = emergencia.nome.toLowerCase()
        telefoneString = emergencia.telefone.toString() 
        motivos = emergencia.motivos.map(motivo => motivo.toLowerCase());
        descricao = emergencia.descricao.toLowerCase()
        abrangencia = emergencia.abrangencia.toLowerCase()
        tags = emergencia.tags.toLowerCase()

        if (nome.includes(campoPesquisa) || telefoneString.includes(campoPesquisa) || motivos.includes(campoPesquisa) || descricao.includes(campoPesquisa) || abrangencia.includes(campoPesquisa) || tags.includes(campoPesquisa) || campoPesquisa == "todos") {

            // Se o termo foi encontrado, adiciona o serviço aos resultados.

            resultados += `
            <div class="item-resultado">
                <p class="descricao-meta"><strong>Nome: </strong>${emergencia.nome}</p>
                <p class="descricao-meta"><strong>Ligue: </strong>${emergencia.telefone}</p>
                <p class="descricao-meta"><strong>Por quais motivos ligar? </strong>${emergencia.motivos}</p>
                <p class="descricao-meta"><strong>Descrição: </strong>${emergencia.descricao}</p>
                <p class="descricao-meta"><strong>Nível de Abrangência: </strong>${emergencia.abrangencia}</p>
            </div>
        `; 

        }

    }

    // Verifica se foram encontrados resultados.

    if (!resultados) {

    // Se não houver resultados, exibe uma mensagem informando.

        resultados = "<p class='descricao-aviso'>Nada foi encontrado</p>"

    }
    
  // Atualiza o HTML da seção de resultados com os resultados encontrados.

    section.innerHTML = resultados;

}