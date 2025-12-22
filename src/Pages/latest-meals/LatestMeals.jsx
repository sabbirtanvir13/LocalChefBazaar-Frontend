

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import LoadingSpinner from '../Shared/LoadingSpinner'
import Container from '../Shared/Container'

import { Link } from 'react-router'
import Card from '../Meals/Card'

const LatestMeals = () => {

  const { data: meals = [], isLoading } = useQuery({
    queryKey: ['latest-meals'],
    queryFn: async () => {
      const res = await axios(`${import.meta.env.VITE_API_URL}/latest-meals`)
      return res.data
    }
  })

  if (isLoading) return <LoadingSpinner />

  return (
    <Container>
      {/* SECTION TITLE */}
      {/* <div className="text-center mt-14">
        <h2 className="text-4xl font-bold text-indigo-500">
          Latest Meals
        </h2>
        <p className="text-gray-500 mt-2">
          Freshly added meals from our chefs
        </p>
      </div> */}

      {/* GRID */}
      {meals.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-14">
          {meals.map(meal => (
            <Card key={meal._id} meal={meal} />
          ))}
        </div>
      )}

      {/* ALL MEALS BUTTON */}
      <div className="text-center mb-14">
        <Link
          to="/meals"
          className="inline-block hover:bg-orange-500 transition
          text-black px-8 py-3 rounded-full font-semibold shadow-md 
          hover:shadow-lg hover:scale-105 "
        >
          View All Meals
        </Link>
      </div>
    </Container>
  )
}

export default LatestMeals
