import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

function Error(){
    
   const error = useRouteError();
   
   let title = "An error ocured!";
   let message = 'Something went wrong!';

   if(error.status === 500){
      // message = JSON.parse(error.data).message; //data means object thrown by response in loader function
       message = error.data.message; //no need of parsing as we are using json function
   }
   if(error.status === 404){
      title = 'Not found!';
      message='Could not find resource or page';
   }

 return (
    <>
     <MainNavigation/>
     <PageContent title= {title}>
      <p>{message}</p>
    </PageContent>
    </>
 );
}
export default Error;