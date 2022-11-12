let obj = [
    {id: '1', name: 'DEPORTIVA 1', categoria: 'deportivas', stock: '20', price: '35000',  foto:'https://i.ibb.co/zhTjSYk/adidas-galaxy.png'},
    {id: '2', name: 'DEPORTIVA 2', categoria: 'deportivas', stock: '25', price: '27500',  foto:'https://i.ibb.co/pwxHHtf/puma-comet.png'},
    {id: '3', name: 'DEPORTIVA 3', categoria: 'deportivas', stock: '15', price: '22000',  foto:'https://i.ibb.co/QJ5Q1q7/topper-drive.png'},

    {id: '4', name: 'MODA 1', categoria: 'moda', stock: '15', price: '38500',  foto:'https://i.ibb.co/6Y5NGGm/adidas-superstar.png'},
    {id: '5', name: 'MODA 2', categoria: 'moda', stock: '15', price: '33600',  foto:'https://i.ibb.co/GtP4tw0/nike-airmax-excee.png'},
    {id: '6', name: 'MODA 3', categoria: 'moda', stock: '15', price: '19800',  foto:'https://i.ibb.co/YTLz6qd/vans-19.png'},

    {id: '7', name: 'ACCESORIOS 1', categoria: 'accesorios', stock: '5', price: '6500',  foto:'https://i.ibb.co/JB8zDxK/gorra-hangloose.png'},
    {id: '8', name: 'ACCESORIOS 2', categoria: 'accesorios', stock: '5', price: '5999',  foto:'https://i.ibb.co/bW3YtJH/gorra-legaxy-nike.png'},
    {id: '9', name: 'ACCESORIOS 3', categoria: 'accesorios', stock: '5', price: '5500',  foto:'https://i.ibb.co/PWDdjxH/piluso-puma-mercedesb.png'},
]

export const gFetch = (id) => {
    return new Promise( ( resuleto, rechazada ) => {
        setTimeout(()=>{
            resuleto(obj)
        }, 2000)
        
    })
}
