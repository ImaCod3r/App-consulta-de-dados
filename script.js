const form = document.querySelector("#data-form");
const viewData = document.querySelector('.view-data');
const api = 'https://consulta.edgarsingui.ao/consultar/';

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = e.target.elements.user_data.value;
    
    // Requisicao fetch
    fetch(api + id).then(
        Response => Response.json()
    ).then(
        data => renderData(data)
    ).catch(
        error => renderError(error)
    );
    
});

function renderData(data){
    let html = `<div class="view-line">
                    <span>
                        Seu nome
                        <b>${data.name}</b>
                    </span>
                </div>
                <div class="view-line">
                    <span>
                        Nome do pai
                        <b>${data.pai}</b>
                    </span>
                </div>
                <div class="view-line">
                    <span>
                        Nome da mãe
                        <b>${data.mae}</b>
                    </span>
                </div>
                <div class="view-line">
                    <span>
                        Data de nascimento
                        <b>${data.data_de_nascimento}</b>
                    </span>
                </div>
                <div class="view-line">
                    <span>
                        Naturalidade
                        <b>${data.morada}</b>
                    </span>
                </div>`;

    if(data.error){
        html = `<div class="error"></div>
                <h3>${data.message}</h3>`;
    }
    viewData.innerHTML = html;
}

function renderError(){
    html = `<div class="error"></div>
            <h3>Algo deu Errado</h3>`;
    viewData.innerHTML = html;
}