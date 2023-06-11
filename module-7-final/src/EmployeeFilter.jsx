import React from 'react'
import { useNavigate , useSearchParams} from 'react-router-dom'


export default function EmployeeFilter({handleFilterChange}) {
    const navigate = useNavigate();
    
    const [searchParams] = useSearchParams();
   
        return (
            <div>Currenty Employed
                {' '}
                <select 
                value={searchParams.get('employed') || ''}
                onChange= {(e) => {
                    handleFilterChange(e);
                    console.log(e.target.value);
                   navigate(
                      e.target.value ? `/employees?employed=${e.target.value}`:
                            `/employees`

                   )
                }}>
                    <option value="">All</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                
                </select>
            </div>
        )
    
}