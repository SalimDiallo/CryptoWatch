import React, { useEffect, useState } from 'react';

const StarIcon = ({coinId}) => {

        const [like, setLike] = useState(false);
      

        useEffect(()=>{
            if (window.localStorage.coinlist) {
                let favlist = window.localStorage.coinlist.split(",");
                if (favlist.includes(coinId)) {
                setLike(true);
                }
                
            }
        },[]);


        const addCoin = (id)=>{
            let favList = null;

            if (window.localStorage.coinlist) {
                 favList = window.localStorage.coinlist.split(",");
                if (favList) {
                    if (favList.includes(id)) {
                        window.localStorage.coinlist = favList.filter((coin)=> coin !== id);
                        setLike(false);
                    }else{
                window.localStorage.coinlist = [...favList, id];
                setLike(true);
            }
            }
            }else{
                    
                    window.localStorage.coinlist = id;
                    setLike(true);
             }
        }
    return (
        <img src={(like)? "./assets/star-full.svg": "./assets/star-empty.svg"} 
            alt="icon-start" 
            onClick={()=> addCoin(coinId)}/>
    );
};

export default StarIcon;