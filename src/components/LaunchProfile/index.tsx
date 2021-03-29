import React,{useEffect} from "react";
import { useLaunchProfileQuery } from "./../../generated/graphql";
import LaunchProfile from "./launchProfile";

interface OwnProps {
    id: number
}

const LaunchListContainer = ({id}: OwnProps) =>{

const {data, error, loading, refetch} = useLaunchProfileQuery({

    variables: {id: String(id)}
});

useEffect(() => {
    refetch();
}, [id]);
if(loading) return <h1>...loading</h1>

if(error) return <h1>Error</h1>

if(!data) return <h1>Select a flight from the panel</h1>
return (
 <LaunchProfile data={data} />
 
)
 
}
export default LaunchListContainer