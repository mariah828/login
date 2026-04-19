function encontrar() {
    let user = document.getElementById('user').value
    let senha = document.getElementById('senha').value
    let img = document.getElementById('imagem')
    let userft = document.getElementById('userft')
    let use = document.getElementById('use')
    let but = document.getElementById('but')
    const senhaCorreta = "828"
    const userCorreto = "mariah"

    if (user !== "" && senha !== "") {
        if (senha !== senhaCorreta || user !== userCorreto) {
            while (senha !== senhaCorreta || user !== userCorreto) {
                alert("[ERRO] senha ou nome incorreto")
                break
            }
        } else {    
            userft.innerHTML = "Seja bem-vinda, Mariah!"
            img.src = 'girl.jpg'
        }
    } else {
        window.alert('Digite um nome e uma senha!')
    }
}