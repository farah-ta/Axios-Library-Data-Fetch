import React, {useState,useEffect} from 'react';
import axios from 'axios';
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

function Home() {

const[value,setValue] = useState([])



const fetch = () =>
{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then( res => {setValue(res.data)})
    .catch(err => console.log(err))
  }

 

useEffect(() =>
{
fetch();
},[]);

    return (
       <div>

<table>
<thead>
    <tr>
        <th> ID</th>
        <th> Name</th>
        <th> UserName</th>
        </tr>
</thead>
<tbody>

{  value.map((item) => (
    <tr key={item.id}>
        <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.username}</td>
    </tr>
)
)}


</tbody>

</table>


      
            
       





          

       </div> 
      
    );
}

export default Home;
