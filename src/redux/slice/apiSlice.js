import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { API_BASE } from "@env";
import { setUser } from "./UserSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE,

  prepareHeaders: (headers, { getState }) => {
    const token = getState().user?.user?.accessToken;
    console.log("token==>",token);
    if (token) {
      
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status == 404) {
    console.log("sending refresh token");
    const refreshResult = await baseQuery(
      "user/login/access-token",
      api,
      extraOptions
    );
    console.log("refresh token=>", refreshResult?.data);

    if (refreshResult?.data) {
      api.dispatch(setUser(refreshResult.data));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(setUser(null));
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
  tagTypes:["Perms"]
});

