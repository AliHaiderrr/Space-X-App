import React from "react";
import { useLaunchlistQuery } from "./../../generated/graphql";
import  LaunchList, { OwnProps }  from "./LaunchList";


const LaunchListContainer = (props: OwnProps) =>{

const {data, error, loading} = useLaunchlistQuery();

if(loading) return <h1>...loading</h1>

if(error|| !data) return <h1>Error</h1>


return (

    < LaunchList data = {data} {...props}/>
)
 
}
export default LaunchListContainer