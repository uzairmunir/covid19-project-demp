
import React from 'react'

const SortData = (data) => {
            const sortedData=[...data];
            sortedData.sort((a,b)=>{
                if(a.active > b.active){
                    return -1;
                }
                else{
                    return 1;
                }
            })
    
        
    
}

export default SortData;
