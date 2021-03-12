window.addEventListener('DOMContentLoaded', () => {

    
    const list = document.querySelector('.icon-th-list')
    const large = document.querySelector('.icon-th-large')
    const productItems = document.querySelectorAll('.product__item')

    list.addEventListener('click', () => {
        productItems.forEach(item => item.classList.add('list'));
        list.classList.add('active');
        large.classList.remove('active');
    })

    large.addEventListener('click', () => {
        productItems.forEach(item => item.classList.remove('list'))
        list.classList.remove('active');
        large.classList.add('active');
    })

    
    
}) 