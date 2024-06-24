import { useLoaderData ,json} from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
  const data = useLoaderData();
  // if(data.isError){
  //   return <p>{data.message}</p>;
  // }
  const events = data.events;
  return (
     <EventsList events={events} />
  );
}

export default EventsPage;

export async function loader(){
  //this function executes in browser so we can use any api's here like localstorage
  //but we can't use hooks like useState(as they are only available in react components)
  //so we can use any browser default features here
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // return {isError:true,message:'Could not fetch events.'};
    // throw new Response(JSON.stringify({message:'Could not fetch events.'}),{status:500,});
    //instead of converting into json format manually,we can use json in react-router-dom

    throw json({message:'Could not fetch events.'},
    {status:500,});
  } else {
    return response; //we can also return response object,as it is supported here
 }
}

