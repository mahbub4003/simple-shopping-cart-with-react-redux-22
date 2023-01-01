import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asusCountDecrement, asusCountIncrement, canonCountDecrement, canonCountIncrement, delCountDecrement, delCountIncrement } from '../redux/action';
import {asus_price,del_price, canon_price} from '../redux/constant'
import CartElement from './CartElement';

const Cart = () => {
    const selector = useSelector((state)=>state)
    const dispatch = useDispatch()

   const incrementAsusCount =()=>{
    if(selector.asusCount < 20 ){
        return (dispatch(asusCountIncrement()))
    }
    }
    const decrementAsusCount =()=>{
            return (dispatch(asusCountDecrement()))
        
    }

    const incrementDelCount =()=>{
        if(selector.delCount < 35){
            return  dispatch(delCountIncrement())
        }
    }
    const decrementDelCount =()=>{
        dispatch(delCountDecrement())
    }

    const incrementCanonCount =()=>{
        if(selector.canonCount < 72){
            return dispatch(canonCountIncrement())
        }
    }
    const decrementCanonCount =()=>{
        dispatch(canonCountDecrement())
    }



    const asusTotalAmaunt = selector.asusCount * asus_price;
    const delTotalAmaunt = selector.delCount * del_price;
    const canonTotalAmaunt = selector.canonCount * canon_price


    return (
        <div>
              <div
                        className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4"
                    >
                        <div>
                            
                            {selector.asusCount > 0 && <CartElement header={'Asus Vivobook X515MA'} increment={incrementAsusCount} decrement={decrementAsusCount} amaunt={asusTotalAmaunt}/>}
                        </div>

                        <div>
                            
                            {selector.delCount >0 && <CartElement header={'Dell E1916HV 18.5 Inch'} increment={incrementDelCount} decrement={decrementDelCount} amaunt={delTotalAmaunt}/>}
                        </div>

                        <div>
                            {selector.canonCount > 0 && <CartElement header={'Canon Eos 4000D 18MP'} increment={incrementCanonCount} decrement={decrementCanonCount} amaunt={canonTotalAmaunt}/>}
                        </div>

                        <div
                            className="flex justify-center items-center text-center"
                        >
                            <div className="text-xl font-semibold">
                                <p>Total Item</p>
                                <p className="text-5xl">{selector.asusCount + selector.delCount + selector.canonCount}</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4"
                    >
                        <div
                            className="flex justify-center items-center text-center"
                        >
                            <div className="text-xl font-semibold">
                                <p>Total Price</p>
                                <p className="text-5xl">TK {canonTotalAmaunt+delTotalAmaunt+asusTotalAmaunt}</p>
                            </div>
                        </div>
                    </div>
        </div>
    );
}

export default Cart;
 