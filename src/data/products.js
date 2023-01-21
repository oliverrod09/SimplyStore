const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd9f2a3c606msh422de14f38e81aap1feaaejsn00f34f973e4b',
		'X-RapidAPI-Host': 'my-store2.p.rapidapi.com'
	}
};

export const listProducts = () => {
    
    return(fetch('https://fakestoreapi.com/products', options)
    .then(res=>res.json()))
};

export const ProductId = (productId) => {
    
    return(fetch(`https://fakestoreapi.com/products/${productId}`, options)
    .then(res=>res.json()))
};


// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);
