import React from "react"
import { Admin, Resource } from "react-admin"
import fakeDataProvider from "ra-data-fakerest"
import PostList from "./components/PostList"
import PostCreate from "./components/PostCreate"
import PostEdit from "./components/PostEdit"
import PostShow from "./components/Show"
import MyPostList from "./components/MyPosts"
import Grid from "./Grid";


// const LoginPage = () => {
//   return <div> Login </div>
// }

// const authProvider = {
//   // authentication
//   login: (params) => Promise.resolve(),
//   checkError: (error) => Promise.resolve(),
//   checkAuth: (params) => Promise.resolve(),
//   logout: () => Promise.resolve(),
//   getIdentity: () => Promise.resolve(),
//   // authorization
//   getPermissions: (params) => Promise.resolve(),
// }

function App() {
  return (
    <Admin
      //   authProvider={authProvider}
      dataProvider={fakeDataProvider({
        posts: [
          {
            id: "1",
            title: "Post1",
            body: "This is post discription",
            publishedAt: "01-02-2022",
          },
          {
            id: "2",
            title: "Post2",
            body: "This is post discription",
            publishedAt: "01-02-2022",
          },
          {
            id: "3",
            title: "Post3",
            body: "This is post discription",
            publishedAt: "01-02-2022",
          },
          {
            id: "4",
            title: "Post4",
            body: "This is post discription",
            publishedAt: "01-02-2022",
          },
        ],
        myposts: [
          {
            id: "1",
            title: "Post1",
            body: "This is post discription",
            publishedAt: "01-02-2022",
          },
          {
            id: "2",
            title: "Post2",
            body: "This is post discription",
            publishedAt: "01-02-2022",
          },
          {
            id: "3",
            title: "Post3",
            body: "This is post discription",
            publishedAt: "01-02-2022",
          },
          {
            id: "4",
            title: "Post4",
            body: "This is post discription",
            publishedAt: "01-02-2022",
          },
        ]
      })}
    >
      <Resource name="posts" list={PostList} create={PostCreate} show={PostShow} edit={PostEdit} />
      <Resource name="myposts" list={MyPostList} create={PostCreate} show={PostShow} edit={PostEdit} />
      <Resource name="gridView" list={Grid} create={PostCreate} show={PostShow} edit={PostEdit}/> 
    </Admin>
  )
}

export default App
