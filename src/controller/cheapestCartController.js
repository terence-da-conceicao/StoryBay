

function getCheapestCart(cart, offers) {
    const newCart = applyReduce1(cart, offers); //panier avec prix baissés de 5%
    return newCart
}

export  function getReducedTotal(cart, offers) {
    let reducedTotal = 0
    let newCart = getCheapestCart(cart, offers)
    newCart.forEach((book) => reducedTotal += book.price)
    console.log("reducedotal:", reducedTotal)
    return { reducedTotal, newCart }
}

function applyReduce1(cart, offers) {
    const percentage = offers.offers[0].value / 100; //on récupère la valeur correspondant à 0,05
    const newCart = cart.map((book) => ({
        ...book, 
        price: parseInt((book.price * (1-percentage)).toFixed(2))
    }));
    return newCart
}

    // const reducedTotal2 = applyReduce2(reducedTotal);
    // console.log(reducedTotal%100)





    // if ((reducedTotal%100) == 0) {
    //     const reducedTotal3 = applyReduce3(reducedTotal2)
    //     console.log("total avec réduction dans getCheapestCart():",reducedTotal2)
    //     console.log("cart avec réduction1: ",newCart);
    //     return reducedTotal3 
    // } else {
    //     console.log("total avec réduction dans getCheapestCart():",reducedTotal2)
    //     console.log("cart avec réduction1: ",newCart);
    //     return { newCart, reducedTotal: reducedTotal2 }
    // }

