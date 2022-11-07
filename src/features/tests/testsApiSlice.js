import { createSelector, createEntityAdapter } from '@reduxjs/toolkit'
import { apiSlice } from '../../app/api/apiSlice'

const testsAdapter = createEntityAdapter({})

const initialState = testsAdapter.getInitialState()

export const testsApiSlice = apiSlice.injectEndpoints({
  // The apiSlice generates hooks depending on the endpoint builder
  endpoints: (builder) => ({
    getTests: builder.query({
      query: () => '/tests',
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError
      },
      // seconds (change to 60 in deploy)
      keepUnusedDataFor: 5,
      // transform _id into id to help the reading of normalized data
      transformResponse: (responseData) => {
        const loadedTests = responseData.map((test) => {
          test.id = test._id
          return test
        })
        // normalized data stored in testsAdapter (entity)
        return testsAdapter.setAll(initialState, loadedTests)
      },
      providesTags: (result, error, tag) => {
        // validates if there are ids in response
        if (result?.ids) {
          return [
            { type: 'Test', id: 'LIST' },
            ...result.ids.map((id) => ({ type: 'Test', id })),
          ]
        } else return [{ type: 'Test', id: 'LIST' }]
      },
    }),
    addNewTest: builder.mutation({
      query: (initialTest) => ({
        url: '/tests',
        method: 'POST',
        body: {
          ...initialTest,
        },
      }),
      invalidatesTags: [{ type: 'Test', id: 'LIST' }],
    }),
    updateTest: builder.mutation({
      query: (initialTest) => ({
        url: '/tests',
        method: 'PATCH',
        body: {
          ...initialTest,
        },
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'Test', id: arg.id }],
    }),
    deleteTest: builder.mutation({
      query: ({ id }) => ({
        url: `/tests`,
        method: 'DELETE',
        body: { id },
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'Test', id: arg.id }],
    }),
  }),
})

export const {
  useGetTestsQuery,
  useAddNewTestMutation,
  useUpdateTestMutation,
  useDeleteTestMutation,
} = testsApiSlice

// returns the query result object
export const selectTestsResult = testsApiSlice.endpoints.getTests.select()

// creates memoized selector
const selectTestsData = createSelector(
  selectTestsResult,
  (testsResult) => testsResult.data // normalized state object with ids & entities
)

// getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllTests,
  selectById: selectTestById,
  selectIds: selectTestIds,
  // pass in a selector that returns the tests slice of state
} = testsAdapter.getSelectors((state) => selectTestsData(state) ?? initialState) // if selectTestsData(state) is null, return initialState
