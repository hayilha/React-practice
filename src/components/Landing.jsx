import React, { useEffect, useState } from 'react';
import './Lan.css'
const Landing = () => {
    const [first, setFirst] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        const jsonData = {
            "data": [
                {
                    "PROPOSAL_NUMBER": "PCLP1006001180227148",
                    "POLICY_NUMBER": "CLP1006001180227148",
                    "ISSUE_DATE": "15-05-2018",
                    "MATURITY_DATE": "15-05-2028",
                    "STATUS": "DEATH",
                    "PRODUCT": "CHILD LIFELINE PLUS",
                    "CLIENT": "KWABENA AGADZI",
                    "PREMIUM": "24",
                    "Date_of_Birth": "15-03-1990",
                    "Gender": "Male",
                    "Marital_Status": "Single",
                    "Phone_Number": "0245678590",
                    "ID_No": "GHA-4525669954-545",
                    "ID_Type": "Ghana Card",
                    "Residential_Address": "123 Main St, Accra, Ghana",
                    "Postal_Address": "P.O. Box 123, Accra, Ghana",
                    "Email": "kwabena.agadzi@example.com",
                    "Occupation": "Teacher",
                    "Policy_Term": "10 years",
                    "Sum_Assured": "10000",
                    "Payment_Frequency": "Monthly"
                },
                {
                    "PROPOSAL_NUMBER": "PWMP1006001070227115",
                    "POLICY_NUMBER": "WMP1006001070227115",
                    "ISSUE_DATE": "15-11-2007",
                    "MATURITY_DATE": "15-11-2010",
                    "STATUS": "MATURED",
                    "PRODUCT": "WEALTH MASTER PLAN",
                    "CLIENT": "KWABENA AGADZI",
                    "PREMIUM": "40",
                    "Date_of_Birth": "15-03-1990",
                    "Gender": "Male",
                    "Marital_Status": "Single",
                    "Phone_Number": "0245678590",
                    "ID_No": "GHA-4525669954-545",
                    "ID_Type": "Ghana Card",
                    "Residential_Address": "45 Sunshine Ave, Kumasi, Ghana",
                    "Postal_Address": "P.O. Box 456, Kumasi, Ghana",
                    "Email": "kwabena.agadzi@example.com",
                    "Occupation": "Engineer",
                    "Policy_Term": "3 years",
                    "Sum_Assured": "15000",
                    "Payment_Frequency": "Quarterly"
                }
            ]
        };

        function apa() {
            const login = JSON.parse(localStorage.getItem('email'));
            if (login) {
                const firstName = login.split('@')[0];
                setFirst(firstName);
            }
        }

        apa();
        setData(jsonData.data);
    }, []);

    return (
        <div className='Landing page'>
            <h2>Welcome, {first ? first : 'Guest'}</h2>
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
    );
}

export default Landing;
