import React, { useEffect, useState } from 'react';
import './Lan.css';
import { data } from '../data/Policy_data.json';

const Landing = () => {
    const [first, setFirst] = useState("");
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const recordsPerPage = 5;
    

    // function filterData(dataList, query) {
    //     if (!query) {
    //         return dataList;
    //     }
    //     return dataList.filter(item => {
    //         return Object.values(item).some(value => value.toString().toLowerCase().includes(query.toLowerCase()));
    //     });
    // }




// Filter data based on search query
function filterData(dataList, query) {
    if (!query) {
        return dataList;  // Return all data if no search query
    }
    return dataList.filter(item => {
        return Object.values(item).some(value => {
            // Only attempt to call toString() if the value is not null or undefined
            if (value && value.toString) {
                return value.toString().toLowerCase().includes(query.toLowerCase());
            }
            return false; // Return false if the value is null/undefined
        });
    });
}




    
    const filteredData = filterData(data, search);

    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = filteredData.slice(firstIndex, lastIndex);

  
    const npage = Math.ceil(filteredData.length / recordsPerPage);

   
    function handleSearch(event) {
        setSearch(event.target.value);
    }

    function prePage() {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    function nextPage() {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1);
        } else {
            setCurrentPage(1);  
        }
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
                <a className='list' href="#Products">Products</a>
                <a className='list' href="#Proposal">Proposal Form</a>
                <a className='list' href="#Customer">Customer Service</a>
                <a className='list' href="#Compliance">Compliance Form</a>
                <a className='list' href="#About us">About us</a>
            </div>
           
            <h2>Welcome, {first ? first : 'Guest'}!</h2>
            
            <div>
                <input
                    type='search'
                    placeholder="Search by..."
                    value={search}
                    onChange={handleSearch}
                    className='search-input'
                />
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
                        {filteredData.length > 0 ? (
                            records.map((item, index) => (
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
                            ))
                        ) : (
                            <tr>
                                <td colSpan="20" className='no-results'>No results found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            
            {filteredData.length > 0 && (
                <nav>
                    <div className='pagination'> 
                      
                        <section className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                            <button className='page-link' onClick={prePage}>Prev</button>

                            
                        </section>

                      
                        <section className={`page-item ${currentPage === npage ? 'disabled' : ''}`}>
                            <button className='page-link' onClick={nextPage}>Next</button>
                        </section>
                    </div>
                </nav>
            )}
        </div>
    );
}

export default Landing;
