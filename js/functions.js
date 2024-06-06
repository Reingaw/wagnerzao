document.addEventListener("DOMContentLoaded", () => {
	let canFill = true

	const fillChart = (windowTop) => {

        if (windowTop >= 385 && canFill) {
            const rating = document.querySelectorAll('.rating')
    
            rating.forEach(el => {
                let cl
                let j = 1
    
                if(el.classList.contains('h')) {
                    cl = 'html'
                }else if(el.classList.contains('c')) {
                    cl = 'css'
                }else if(el.classList.contains('j')) {
                    cl = 'js'
                }else if(el.classList.contains('r')) {
                    cl = 'react'
                }else if(el.classList.contains('v')) {
                    cl = 'vue'
                }else if(el.classList.contains('w')) {
                    cl = 'wor'
                }
    
                for(let i = 1; i < 100; i++) {
                    el.innerHTML += `<div class="block ${cl}"></div>`
                }
                
                let block = document.querySelectorAll(`.block.${cl}`)
                
                block.forEach(c => {
                    c.style.transform = `rotate(${3.6 * j}deg)`
                    c.style.animationDelay = `${j/40}s`
                    j++
                })
    
                let counter = document.querySelector(`.counter.${cl}`)
                counter.innerHTML = 0
    
                let target = +counter.getAttribute('data-target')
    
                const numberCounter = () => {
                    const value = +counter.innerHTML
                    if(value < target) {
                        counter.innerHTML = Math.ceil(value + 1)
                        setTimeout(() => {
                            numberCounter()
                        }, 15)
                    }
                }
                numberCounter()
            });
            canFill = false
        }
    }

    const debounce = (func, wait, immediate) =>{
        let timeout;
        return function(...args) {
            const context = this;
            const later = function() {
                timeout = null;
                if(!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if(callNow) func.apply(context, args);
        };
    }
    
    window.addEventListener('scroll', debounce(function() {
        const windowTop = window.scrollY
        
        fillChart(windowTop)    
    }, 200));
})