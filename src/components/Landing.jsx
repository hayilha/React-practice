import React, { useEffect, useState } from 'react';
import './Lan.css'
import {data} from './Policy_data.js'
const Landing = () => {
   
    const [first, setFirst] = useState("");
    const[search,setSearch]=useState("")
    const[select,setSelect]=useState(null)

    function dance(event){
        setSearch(event.target.value)
    }

    const filteredData = data.filter(item => {
       
        const clientMatches = item.CLIENT.toLowerCase().includes(search.toLowerCase());
        
     
        return clientMatches;
    });

   const handleChange=(event)=>{
setSelect(event.target.value)
   }

   function filterData(dataList,selected,query){
let filteredData=dataList 
if(query){
    filterData=filteredData.filter(item=> item.CLIENT.toLowerCase().includes(query.toLowerCase()))
}
if(selected){
    filterData=filterData.filter(item => item.PRODUCT===selected||item.STATUS===selected)
}
return filteredData;
}
    useEffect(() => {
      

        function apa() {
            const login = localStorage.getItem('currentEmail');
            if (login) {
              
                const firstName = login.split('@')[0];
                setFirst(firstName);
            }
        }

        apa();
        
    }, []);

    return (
        <div className='LandingPage'>
            <div className='space'> 
                <a className='list' href="#home">Home</a>
            <a className='list'href="#Products">Products</a>
            <a className='list'href="#Proposal">Proposal Form</a>
            <a className='list'href="#Customer">Customer Service</a>
            <a className='list'href="#Compliance">Compliance Form</a>
            <a className='list'href="#About us">About us</a>

            </div>
           
            <h2>Welcome, {first ? first : 'Guest'}!</h2>
            <div>
                <input
                type='text'
                placeholder="Search by Client..."
                value={search}
                onChange={dance}
                className='search-input'/>
            </div>
            <div className='data-tab'>
            <table className="data-tab">
                <thead>
                    <tr>
                        <th>PROPOSAL NUMBER</th>
                        <th>POLICY NUMBER</th>
                        <th>ISSUE DATE</th>
                        <th>MATURITY DATE</th>
                        <th>STATUS</th>
                        <th>PRODUCT</th>
                        <th>CLIENT</th>
                        <th>PREMIUM</th>
                        <th>DATE OF BIRTH</th>
                        <th>GENDER</th>
                        <th>MARITAL STATUS</th>
                        <th>PHONE NUMBER</th>
                        <th>ID NO</th>
                        <th>ID TYPE</th>
                        <th>RESIDENTIAL ADDRESS</th>
                        <th>POSTAL ADDRESS</th>
                        <th>EMAIL</th>
                        <th>OCCUPATION</th>
                        <th>POLICY TERM</th>
                        <th>SUM ASSURED</th>
                        <th>PAYMENT FREQUENCY</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.PROPOSAL_NUMBER}</td>
                            <td>{item.POLICY_NUMBER}</td>
                            <td>{item.ISSUE_DATE}</td>
                            <td>{item.MATURITY_DATE}</td>
                            <td>{item.STATUS}</td>
                            <td>{item.PRODUCT}</td>
                            <td>{item.CLIENT}</td>
                            <td>{item.PREMIUM}</td>
                            <td>{item.Date_of_Birth}</td>
                            <td>{item.Gender}</td>
                            <td>{item.Marital_Status}</td>
                            <td>{item.Phone_Number}</td>
                            <td>{item.ID_No}</td>
                            <td>{item.ID_Type}</td>
                            <td>{item.Residential_Address}</td>
                            <td>{item.Postal_Address}</td>
                            <td>{item.Email}</td>
                            <td>{item.Occupation}</td>
                            <td>{item.Policy_Term}</td>
                            <td>{item.Sum_Assured}</td>
                            <td>{item.Payment_Frequency}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default Landing;
