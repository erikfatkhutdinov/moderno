window.addEventListener('click', () => {

    const tabs = document.querySelector('.tabs')  //wrapper of tabs
    const tabsContent = document.querySelectorAll('.page-box') //content
    const tabsItems = document.querySelectorAll('.tabs-titles') //tabs

    
    function toggleTabContent(n) {
        tabsContent.forEach(item => {
            item.classList.remove('item-active')
        })
        tabsContent[n].classList.add('item-active')
    }
    

    tabs.addEventListener('click', function (event) {
        let target = event.target;

        if (target && target.classList.contains('tabs-titles')) {
            tabsItems.forEach(item => item.classList.remove('tabs-active'));
            target.classList.add('tabs-active');
            for (let i = 0; i < tabsContent.length; i++) {
                if (target == tabsItems[i]) {
                    toggleTabContent(i)
                    console.log(i)
                }

            }
        }

    });

})