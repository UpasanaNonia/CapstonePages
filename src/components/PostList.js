import * as React from "react"
import { List, Datagrid, EditButton, DeleteButton, DateField, TextField, ShowButton, TextInput } from "react-admin"
import {Redirect, useHistory} from "react-router-dom";
import { useEffect, useState } from "react";

const postFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  // <ReferenceInput source="userId" label="User" reference="users" allowEmpty>
  //     <SelectInput optionText="name" />
  // </ReferenceInput>,
]

const PostList = (props) => {

  // const YourComponent = () => {
    const history = useHistory();

    const handleClick = () => {
        // history.push("/path/to/push");
        window.location.assign("http://localhost:3001/");
    }

  const{isAuth, setIsAuth} = useState(true);
  if(isAuth){
    return <Redirect to="http://localhost:3001/accounts/signin/"/>
  }
  return (
    <><div>
      <button onClick={handleClick} type="button">LogOut</button>
    </div><><div>
      {/* <button onClick={() => setIsAuth(false)}>LogOut</button><br></br> */}
    </div><List {...props} bulkActionButtons={false} filters={postFilters}>
          <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <DateField source="publishedAt" />
            {/* <EditButton basePath="/posts"/>
          <DeleteButton basePath="/posts"/> */}
            <ShowButton basePath="/posts" />
          </Datagrid>
        </List></></>
  )
}

export default PostList
