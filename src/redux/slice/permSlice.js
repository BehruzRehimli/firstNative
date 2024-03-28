import { apiSlice } from "./apiSlice";


export const permApiSlice= apiSlice.injectEndpoints({
    endpoints: builder=>({
        getPerms: builder.query({
            query:()=>'/perm',
            keepUnusedDataFor:30,
            transformResponse:(res)=>res.data,
            providesTags:["Perms"]
        }),
        deletePerm: builder.mutation({
            query:(id)=>({
                url:`/perm/${id}`,
                method:"DELETE"
            }),
            invalidatesTags:["Perms"]

        }),
        addPerm: builder.mutation({
            query: (data)=>({
                url:"/perm",
                method:"POST",
                body: data
            }),
            invalidatesTags:["Perms"]
        })
    })
    
})

export const {useGetPermsQuery , useDeletePermMutation,useAddPermMutation}=permApiSlice