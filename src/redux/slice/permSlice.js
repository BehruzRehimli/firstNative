import { apiSlice } from "./apiSlice";


export const permApiSlice= apiSlice.injectEndpoints({
    endpoints: builder=>({
        getPerms: builder.query({
            query:()=>'/perm',
            keepUnusedDataFor:15,
            transformResponse:(res)=>res.data,
        })
    })
})

export const {useGetPermsQuery}=permApiSlice