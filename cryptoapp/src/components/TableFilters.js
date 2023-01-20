import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setListDisplay } from '../actions/list.action';
import { setStableState } from '../actions/stable.action';

const TableFilters = () => {

    const [showStable, setShowStable] = useState(true);
    const [showFavList , setShoWFavList ] = useState(false);

    const dispath = useDispatch();

    useEffect(()=>{
        dispath(setStableState(showStable));
        dispath(setListDisplay(showFavList));
    },[dispath, showStable, showFavList])

    return (
       <div className="table-filters">
            <div className="table-filters-container">

                <div className="stable-checkbox-container">
                    <input type="checkbox"  id="stableCoin" defaultChecked={true} 
                    onChange={()=>setShowStable(!showStable)}/>
                    <label htmlFor="stableCoin">{showStable? "Avec": "Sans"} Stable Coin</label>
                </div>
                <div className={showFavList? "no-list-btn": "no-list-btn active"}
                    onClick={()=>setShoWFavList(false)}
                    >
                    <p>Aucune liste</p>
                </div>
                    <div className={showFavList? "fav-list active": "fav-list"}
                         onClick={()=>setShoWFavList(true)}
                        >
                        <p>listes des favories</p>
                        <img src="./assets/star-full.svg" alt="" />
                    </div>
            </div>
       
       </div>
    );
};

export default TableFilters;