import {useState} from 'react';
import axios from 'axios';
export function useStockContainer(){
    let [unvalidStock, setUnvalidStock] = useState([]);
    let [validStock, setValidStock] = useState([]);
    let [index, setIndex] = useState(0);
    let [empty, setEmpty] = useState(true);

    function refreshStock(tokken){
        if(empty){
            axios
            .get('/api/products', {
                headers: {Authorization: 'Bearer ' + tokken},
            })
            .then(response => {
                setUnvalidStock(response.data.data)
                setEmpty(false)
            })
            .catch(error => console.log(error));
        }
    }
    function getStock(){
        return validStock
    }
    function getProduct(){
        return unvalidStock[index]
    }
    function nextProduct(){
        var tmpIndex = index + 1
        if(tmpIndex > unvalidStock.length-1)tmpIndex = 0
        setIndex(tmpIndex)
    }
    function previousProduct(){
        var tmpIndex = index - 1
        if(tmpIndex < 0)tmpIndex = unvalidStock.length-1
        setIndex(tmpIndex)
    }
    function changeQuantity(quantity){
        console.log(quantity)
        var tmpUnvalidStock = unvalidStock
        tmpUnvalidStock[index].stock = quantity
    }
    function validateProduct(){
        var tmpValidStock = validStock
        var tmpUnvalidStock = unvalidStock
        tmpValidStock.push(unvalidStock[index])
        tmpUnvalidStock.splice(index, 1)
        setValidStock(tmpValidStock)
        setUnvalidStock(tmpUnvalidStock)
        nextProduct()
    }
    function validateStock(){
    }
    
    return {refreshStock, getStock, getProduct, nextProduct, previousProduct, changeQuantity, validateProduct, validateStock};
}
