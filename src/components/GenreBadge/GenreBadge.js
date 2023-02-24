import {useNavigate} from "react-router-dom";


const GenreBadge = ({genres}) => {

    const {id,name} = genres;
    const navigate = useNavigate();

    return (
        <>
            <span
                style={{
                    background:`rgb(${name.length* 40} ${name.length*20} ${name.length*10})`,
                    display:'inline-block',
                    borderRadius:'5px',
                    color:'white',
                    fontSize:'12px',
                    padding:'2.5px 5px',
                    cursor:'pointer',
                    marginLeft:'2px'

            }}
                onClick={()=>navigate(`/filterMovie/genre/${id}`)}
            >{name}</span>
        </>
    );
};

export {GenreBadge};