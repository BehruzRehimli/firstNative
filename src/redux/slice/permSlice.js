import { apiSlice } from "./apiSlice";


export const permApiSlice= apiSlice.injectEndpoints({
    endpoints: builder=>({
        getPerms: builder.query({
            query:()=>'/perm',
            keepUnusedDataFor:2,
            transformResponse:(res)=>res.data,
            providesTags:["Perms"]
        }),
        deletePerm: builder.mutation({
            query:(id)=>({
                url:`/perm/${id}`,
                method:"DELETE"
            }),
            invalidatesTags:["Perms"]

        })
    })
    
})

export const {useGetPermsQuery , useDeletePermMutation}=permApiSlice