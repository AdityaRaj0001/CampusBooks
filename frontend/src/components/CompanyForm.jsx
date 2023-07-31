import { useState } from "react";
import axios from "axios";
const CompanyForm = ({setCompanies}) => {
  const [name, setName] = useState("");
  const [cg, setCg] = useState("");
  const [domain, setDomain] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const company = { name, cg, domain };
    setCompanies((prevElements)=>{
        return [{ Name: name,
            Cg_Criteria: cg,
            Domain: domain},...prevElements]
    })
    const resp = await axios.post("https://campuscompaniesbackend.onrender.com/api/companies", {
      Name: name,
      Cg_Criteria: cg,
      Domain: domain,
    });

    if (resp.data) {
      setError(null);
      setName("");
      setCg("");
      setDomain("");
      console.log("new company added", resp.data);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="create">
      <h3>Add a new Company</h3>

      <label>Company Name:</label>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />

      <label>Cg Criteria(above):</label>
      <input
        type="number"
        onChange={(e) => {
          setCg(e.target.value);
        }}
        value={cg}
      />

      <label>Domain:</label>
      <input
        type="text"
        onChange={(e) => {
          setDomain(e.target.value);
        }}
        value={domain}
      />

      <button type="submit">Add Company</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default CompanyForm;
