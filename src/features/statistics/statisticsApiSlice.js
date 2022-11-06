import { createSelector, createEntityAdapter } from '@reduxjs/toolkit'
import { apiSlice } from '../../app/api/apiSlice'

const statisticsAdapter = createEntityAdapter({})

const initialState = statisticsAdapter.getInitialState()

export const statisticsApiSlice = apiSlice.injectEndpoints({
  // The apiSlice generates hooks depending on the endpoint builder
  endpoints: (builder) => ({
    getStatistics: builder.query({
      query: () => '/statistics',
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError
      },
      // seconds (change to 60 in deploy)
      keepUnusedDataFor: 5,
      // transform _id into id to help the reading of normalized data
      transformResponse: (responseData) => {
        const loadedStatistics = responseData.map((statistic) => {
          statistic.id = statistic._id
          return statistic
        })
        // normalized data stored in statisticsAdapter (entity)
        return statisticsAdapter.setAll(initialState, loadedStatistics)
      },
      providesTags: (result, error, tag) => {
        // validates if there are ids in response
        if (result?.ids) {
          return [
            { type: 'Statistic', id: 'LIST' },
            ...result.ids.map((id) => ({ type: 'Statistic', id })),
          ]
        } else return [{ type: 'Statistic', id: 'LIST' }]
      },
    }),
  }),
})

export const { useGetStatisticsQuery } = statisticsApiSlice

// returns the query result object
export const selectStatisticsResult =
  statisticsApiSlice.endpoints.getStatistics.select()

// creates memoized selector
const selectStatisticsData = createSelector(
  selectStatisticsResult,
  (statisticsResult) => statisticsResult.data // normalized state object with ids & entities
)

// getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllStatistics,
  selectById: selectStatisticById,
  selectIds: selectStatisticIds,
  // pass in a selector that returns the statistics slice of state
} = statisticsAdapter.getSelectors(
  (state) => selectStatisticsData(state) ?? initialState
) // if selectStatisticsData(state) is null, return initialState
