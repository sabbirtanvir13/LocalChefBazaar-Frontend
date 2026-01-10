

import React, { useState } from 'react'
import Card from './Card'
import Container from '../Shared/Container'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import LoadingSpinner from '../Shared/LoadingSpinner'

const ITEMS_PER_PAGE = 10

const Meals = () => {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')

  const { data, isLoading } = useQuery({
    queryKey: ['meals', page, search],
    queryFn: async () => {
      const res = await axios(
        `${import.meta.env.VITE_API_URL}/meals?page=${page}&limit=${ITEMS_PER_PAGE}&search=${search}`
      )
      return res.data
    },
    keepPreviousData: true,
  })

  if (isLoading) return <LoadingSpinner />

  const { meals = [], totalPages } = data || {}

  return (
    <Container>

      {/* 🔍 Search Bar */}
      <div className="flex justify-center mt-8">
        <input
          type="text"
          placeholder="Search food..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
            setPage(1)
          }}
          className="w-full md:w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-lime-300"
        />
      </div>

      {/* 🍽 Meals Grid */}
      {meals.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-14">
          {meals.map(meal => (
            <Card key={meal._id} meal={meal} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 py-14">
          No meals found
        </p>
      )}

      {/* 📄 Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mb-10">
          {[...Array(totalPages).keys()].map(num => (
            <button
              key={num}
              onClick={() => setPage(num + 1)}
              className={`px-4 py-2 rounded-md border
                ${page === num + 1
                  ? 'bg-lime-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
            >
              {num + 1}
            </button>
          ))}
        </div>
      )}

    </Container>
  )
}

export default Meals
