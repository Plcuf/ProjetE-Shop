document.addEventListener("DOMContentLoaded", () => {
    const tri_buttons = document.getElementsByName("sort");
    const items = document.querySelector('.items');
    tri_buttons.forEach(button => {
        button.addEventListener("changed", () => {
            if (button.id === "croissant") {
                console.log('quaso');
                for(let i = 0; i < items.length/2; i++) {
                    let save = items.children[i];
                    items.children[i].innerHTML = items.children[items.length - (i + 1)].innerHTML;
                    items.children[items.children[items.length - (i + 1)]].innerHTML = save.innerHTML;
                }
                
            } else {
                items.style.flexDirection = "row-reversed";
                
            }
        });
    })
})