import {useState} from 'react';
import axios from 'axios';
export function useStockContainer(){
    let [unvalidStock, setUnvalidStock] = useState([]);
    let [validStock, setValidStock] = useState([]);
    let [index, setIndex] = useState(0);

    function setStock(products){
        setUnvalidStock(products)
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
        return unvalidStock[tmpIndex]
    }
    function previousProduct(){
        var tmpIndex = index - 1
        if(tmpIndex < 0)tmpIndex = unvalidStock.length-1
        setIndex(tmpIndex)
        return unvalidStock[tmpIndex]
    }
    function changeQuantity(quantity){
        var tmpUnvalidStock = unvalidStock
        tmpUnvalidStock[index].stock = quantity
    }
    function validateProduct(){
        var tmpvalidStock = validStock
        var tmpunvalidStock = unvalidStock
        tmpvalidStock.push(unvalidStock[index])
        tmpUnvalidStock.splice(index, 1)
        setUnvalidStock(tmpUnvalidStock)
        setValidStock(tmpunvalidStock)
    }
    function validateStock(){
        
    }
    
    return {setStock, getStock, getProduct, nextProduct, previousProduct, changeQuantity, validateProduct, validateStock};
}
