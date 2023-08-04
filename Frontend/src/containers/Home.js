import React, {useState} from 'react'
import { Helmet } from 'react-helmet';
import Listings from '../components/Listings'
import ListingForm from '../components/ListingForm';
import Pagination from '../components/Pagination';


const Home=()=> {
  const [listings,setListings]=useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [listingsPerPage, setListingPerPage] =  useState(3);
  const [active,setActive] = useState(1);
  
  const indexOfLastListing = currentPage*listingsPerPage;
  const indexofFistListing = indexOfLastListing - listingsPerPage
  const currentListings = listings.slice(indexofFistListing,indexOfLastListing)

  const visitPage=(page)=>{
    setCurrentPage(page);
    setActive(page);
  }

  const previous_number =()=>{
    if (currentPage!==1){
      setCurrentPage(currentPage-1);
      setActive(currentPage-1)
    }
  }

  const next_number = ()=>{
    if(currentPage!==Math.ceil(listings.length/3)){
      setCurrentPage(currentPage+1)
      setActive(currentPage+1)
    }
  }



  return(
    <main> 
      <Helmet>
        <title>Home Page</title>
        <meta name='description' content='this is home page'/>
      </Helmet>
      <section><ListingForm setListings={setListings}/></section>
      <section><Listings listings={currentListings}/></section>
      <section>
        <div>
          {listings.length !==0?(
            <Pagination 
              itemsPerPage={listingsPerPage}
              count = {listings.length}
              visitPage={visitPage}
              previous={previous_number}
              next={next_number}
              active={active}
              setActive={setActive}
            />
          ):null}  
        </div>    
      </section>
    </main>
  )
}

export default Home;