import React from 'react';
import Card from './Card';
import Container from '../Shared/Container';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import LoadingSpinner from '../Shared/LoadingSpinner';

const Meals = () => {
  
     const {data:meals=[],isLoading}=useQuery({
      queryKey:['meals'],
       queryFn: async()=>{
        const result=await axios(`${import.meta.env.VITE_API_URL}/meals`)
        return result.data
       }
  })


  if(isLoading) return <LoadingSpinner></LoadingSpinner>


    return (
        <Container>
        {
          meals && meals.length>0?
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-14">
            {meals.map(meal=><Card key={meal._id} meal={meal}></Card>)}
          </div>:null
        }
      
        </Container>
    );
};

export default Meals;