import {useNavigate} from "react-router-dom";


const GenreBadge = ({genres}) => {

    const {id,name} = genres;
    const navigate = useNavigate();

    return (
        <>
            <span
                style={{
                    background:`rgb(${name.length* 30} ${name.length*20} ${name.length*10})`,
                    display:'inline-block',
                    borderRadius:'5px',
                    color:'white',
                    fontSize:'14px',
                    padding:'1px 5px',
                    cursor:'pointer'
            }}
                onClick={()=>navigate(`/filterMovie/genre/${id}`)}
            >{name}</span>
        </>
    );
};

export {GenreBadge};