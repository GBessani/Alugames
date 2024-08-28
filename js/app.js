function alterarStatus(id)
{
    let game = document.getElementById(`game-${id}`);
    let Imagem = game.querySelector('.dashboard__item__img');
    let botão = game.querySelector('.dashboard__item__button');
    
    if(Imagem.classList.contains('dashboard__item__img--rented'))
    {
        Imagem.classList.remove('dashboard__item__img--rented');
        botão.classList.remove('dashboard__item__button--return')
        botão.textContent = 'Alugar'
    
    }else{
        Imagem.classList.add('dashboard__item__img--rented');
        botão.classList.add('dashboard__item__button--return')
        botão.textContent = 'Devolver'
    }
}