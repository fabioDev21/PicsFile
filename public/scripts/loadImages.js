let grupoImgs = document.getElementsByClassName("imagens")[0]


function mostraImagens(nome, src, local, _id){
    grupoImgs.innerHTML += `<div class="card-image">
    <div>
        <p class="card-image__desc">Título:</p>
        <span>${nome}</span>
    </div>
    <div>
        <p class="card-image__desc">Localização:</p>
        <span>${local}</span>
    </div>
    <img src="${src}" alt="${nome}"></img>
    <form class="card-image__btn method="post" action="/images/${_id}" onsubmit ="DeleteImage(event)"">
        <label for="trashBtn"><i class="fa-solid fa-trash"></i></label>
        <input type="submit" name="trashBtn" id="trashBtn">
    </form>
    </div>`
}

function DeleteImage(event){
    event.preventDefault();
    const form = event.target

    fetch(form.action, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            _method: form._method
        })
    }).then(response => {
        if(!response.ok) {
            location.reload()
        } else{
            alert("Exclusão sem sucesso...")
        }
    }).catch(error => {
        console.log(error)
    })
    return false;
}

const url = "/images/json"
async function puxaImagens(){
    const response = await fetch(url)
    const images = await response.json()

    images.forEach(dado => {
        let nome = dado.name
        let { src } = dado
        let { local } = dado
        var { _id } = dado
        mostraImagens(nome, src, local, _id)
    });
}
puxaImagens()








//TODO: Método de edição
{/* <form class="card-image__btnEdit">
<label for="editBtn${editBtnCount}"><i class="fa-solid fa-pen"></i></label>
<input id="editBtn${editBtnCount}" type="checkbox" name="editBtn">
</form> */}