import {useState} from 'react';
import axios from 'axios';
export function useStockContainer(){
    let [unvalidStock, setUnvalidStock] = useState([]);
    let [validStock, setValidStock] = useState([]);
    let [index, setIndex] = useState(0);

    function setStock(products){

    }
    function getStock(){

    }
    function getProduct(){

    }
    function nextProduct(){

    }
    function previousProduct(){

    }
    function changeQuantity(quantity){

    }
    function validateProduct(){

    }
    function validateStock(){

    }
    
    return {setStock, getStock, getProduct, nextProduct, previousProduct, changeQuantity, validateProduct, validateStock};
}
