import React from "react";
import { useState, useEffect } from "react";

//components
import CompanyDetails from "../components/CompanyDetails";
import CompanyForm from "../components/CompanyForm";

import axios from "axios";
const Home = () => {
  const [companies, setCompanies] = useState(null);

  const deleteCompany=(id)=>{
    const newCompanies=companies.filter((company)=>company._id!=id)
    setCompanies(newCompanies)
  }

 
  useEffect(() => {

    //using axios
    const fetchCompanies = async () => {
      const {data} = await axios.get(
        "http://localhost:4000"
      );
      
     
     setCompanies(data.length === 0 ? [] :data);
      
    };


  //   const fetchCompanies=async ()=>{
  //     //the proxy simply doesn't works for now so full url has to be there
  //     const response=await fetch('https://campuscompaniesbackend.onrender.com/api/companies')
  //     const json=await response.json()

  //     if (response.ok){
  //       setCompanies(json)
  //     }
  //   }
    fetchCompanies();
  }, []);

  return (
    <div className="home">
      <div className="companies">
        {companies &&
          companies.map((company) => (
            <CompanyDetails
              company={company}
              key={company._id}
              deleteCompany={deleteCompany}
            />
          )
             
         )} 
      </div>
      <CompanyForm setCompanies={setCompanies}/>
    </div>
  );
};

export default Home;
