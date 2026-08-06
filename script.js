const counters = document.querySelectorAll(".counter");

const animateCounter = (counter) => {

    const target = Number(counter.dataset.target);

    const speed = 80;

    const updateCounter = () => {

        const current = Number(counter.innerText.replace(/,/g, ""));

        const increment = Math.ceil(target / speed);

        if(current < target){

            let next = current + increment;

            if(next > target){

                next = target;

            }

            counter.innerText = next.toLocaleString();

            requestAnimationFrame(updateCounter);

        }

    };

    updateCounter();

};

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            animateCounter(entry.target);

            observer.unobserve(entry.target);

        }

    });

},{

    threshold:0.5

});

counters.forEach(counter=>{

    observer.observe(counter);

});