let cartCount=0;
document.querrySelectorAll('.add-to-cart').forEach(button=>
    {button.addEventListener('click', ()=>{cartCount++;
    document.getElementById('cartCount').innerText=cartCount;
alert ( `${button.dataset.name}has been added to your cart!`);
});
});


