window.addEventListener('click', () => {

    const tabs = document.querySelector('.product-one__tabs-titles')
    const tabsContent = document.querySelectorAll('.tab-item')
    const tabsItems = document.querySelectorAll('.product-one__tab')

    
    function toggleTabContent(n) {
        tabsContent.forEach(item => {
            item.classList.remove('item-active')
            
        })
        tabsContent[n].classList.add('item-active')
    }
    

    tabs.addEventListener('click', function (event) {
        let target = event.target;

        if (target && target.classList.contains('product-one__tab')) {
            tabsItems.forEach(item => item.classList.remove('tab-active'));
            target.classList.add('tab-active');
            console.log(1)
            for (let i = 0; i < tabsContent.length; i++) {
                if (target == tabsItems[i]) {
                    console.log(1)
                    toggleTabContent(i)
                }

            }
        }

    });

})