import React from 'react'
import axios from 'axios'
const CompanyDetails = ({company,deleteCompany}) => {

  const handleClick=async()=>{
    const resp =await axios.delete('https://campuscompaniesbackend.onrender.com/api/companies/'+`${company._id}`)
    deleteCompany(company._id)
  }
  return (
    <div className="company-details">
      <h4>{company.Name}</h4>
      <p><strong>Cg Criteria(above):</strong>{company.Cg_Criteria}</p>
      <p><strong>Domain:</strong>{company.Domain}</p>
      <p>{company.createdAt}</p>
      <span onClick={handleClick}>delete</span>
    </div>

  )
}

export default CompanyDetails