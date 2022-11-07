import { createSelector, createEntityAdapter } from '@reduxjs/toolkit'
import { apiSlice } from '../../app/api/apiSlice'

const usersAdapter = createEntityAdapter({})

const initialState = usersAdapter.getInitialState()

export const usersApiSlice = apiSlice.injectEndpoints({
  // The apiSlice generates hooks depending on the endpoint builder
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users',
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError
      },
      // seconds (change to 60 in deploy)
      keepUnusedDataFor: 5,
      // transform _id into id to help the reading of normalized data
      transformResponse: (responseData) => {
        const loadedUsers = responseData.map((user) => {
          user.id = user._id
          return user
        })
        // normalized data stored in usersAdapter (entity)
        return usersAdapter.setAll(initialState, loadedUsers)
      },
      providesTags: (result, error, tag) => {
        // validates if there are ids in response
        if (result?.ids) {
          return [
            { type: 'User', id: 'LIST' },
            ...result.ids.map((id) => ({ type: 'User', id })),
          ]
        } else return [{ type: 'User', id: 'LIST' }]
      },
    }),
    addNewUser: builder.mutation({
      query: (initialUserData) => ({
        url: '/users',
        method: 'POST',
        body: {
          ...initialUserData,
        },
      }),
      invalidatesTags: [
        // This allows updates in displayed data
        { type: 'User', id: 'LIST' },
      ],
    }),
    updateUser: builder.mutation({
      query: (initialUserData) => ({
        url: '/users',
        method: 'PATCH',
        body: {
          ...initialUserData,
        },
      }),
      invalidatesTags: (result, error, arg) => [
        // This allows updates only in user's specific data
        { type: 'User', id: arg.id },
      ],
    }),
    deleteUser: builder.mutation({
      query: ({ id }) => ({
        url: `/users`,
        method: 'DELETE',
        body: { id },
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'User', id: arg.id }],
    }),
  }),
})

export const {
  useGetUsersQuery,
  useAddNewUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = usersApiSlice

// returns the query result object
export const selectUsersResult = usersApiSlice.endpoints.getUsers.select()

// creates memoized selector
const selectUsersData = createSelector(
  selectUsersResult,
  (usersResult) => usersResult.data // normalized state object with ids & entities
)

// getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUserIds,
  // pass in a selector that returns the users slice of state
} = usersAdapter.getSelectors((state) => selectUsersData(state) ?? initialState) // if selectUsersData(state) is null, return initialState
