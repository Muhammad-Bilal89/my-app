import Button from '@restart/ui/esm/Button';
import React, { useState,useEffect } from 'react'
import reactDom from 'react-dom';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import history from '../history';
import { FaSortUp ,FaSortDown} from 'react-icons/fa';
import {GrEdit} from 'react-icons/gr';
import {AiFillDelete} from 'react-icons/ai'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Pagination from './Pagination';
import Loader from "react-loader-spinner";
import './main.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function Index()
{
      const [data,setData]  = useState([])
      const [currentPage, setCurrentPage] = useState(1);
      const [postsPerPage] = useState(5);
      const [sortState, setsortState] = useState(true);
      const [sortStateA, setsortStateA] = useState(true);
      const [sortStateB, setsortStateB] = useState(true);
      const [sortStateId, setsortStateId] = useState(true);
      const [isPending,setisPending]=useState(true);
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

        useEffect(()=>{
            console.log("use Effect");
            setTimeout(() => {
                fetch("http://localhost:50083/api/UserRecord").then(res=>res.json()).then(result=>{
                setData(result.result);
                setisPending(false);
            }).catch(err=>{
                console.log(err)
            })
            }, 1000);
        }, [data])
        
        toast.configure();
        function del(id)
        {
            console.log("Delete Call");
            if (window.confirm('Are you sure you wish to delete this item?')){
                console.log(id);
            fetch("http://localhost:50083/api/UserRecord/"+id, { method: 'DELETE'})
            .then(res => res.json())
            .then(toast.success("Deleted SuccesFully"));
           
            }
            
        }

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    
        return(
            
        <div>
        {isPending && <Loader className="loader"
                    type="Bars" color="#00BFFF" height={80} width={80}
                    timeout={isPending?1000000:3000} //3 secs
                />}
                <br />
                <table hover="true" className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>FirstName</th>
                            <th>LastName Name</th>
                            <th>Email</th>
                            <th>Product</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            currentPosts.map(bh => (

                                <tr key={bh.id}>
                                    <td>{bh.id}</td>
                                    <td>{bh.firstName}</td>
                                    <td>{bh.lastName}</td>
                                    <td>{bh.email}</td>
                                    <td>{bh.product}</td>
                                    <td>
                                        <Button onClick={() => history.push({ pathname: "/update", state: { id: bh.id } })} className="btn btnn btn-success"><GrEdit /> </Button>
                                        <Button onClick={() => { del(bh.id) }} className="btn btn-dark"><AiFillDelete /></Button>
                                    </td>
                                </tr>

                            )
                            )
                        }
                    </tbody>
                </table>
                { isPending==false && <div className="pagination">
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={data.length}
                        paginate={paginate} />
                </div>}
            </div>
        )
}

export default Index;