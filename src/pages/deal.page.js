//import React, { useState } from 'react';
      
import { FullContainer } from '../components/containers';
import { List } from '../components/containers'
import { DealCard } from '../components/dealCard';


export const Deals = ({deals, onEdit, onRemove }) =>{
 return (

    
    <FullContainer>
    <List>
        {deals.map((deal) => {           //pereberem vse nashi zna4eniya i vernem
        return <DealCard 
        key={deal.id} 
        deal={deal} 
        onRemove={()=> onRemove(deal.id)}
        onEdit={(status) =>{
            onEdit({...deal, status})
        }}
        />;
        })}
        </List>
    </FullContainer>
   
 );  
};