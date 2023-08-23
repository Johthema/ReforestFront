import CardUsuario from '../../../components/cards/cardCadUser/index';
import CardUsuarioEdit from '../../../components/cards/cardCadUser/cardCadEdit/index';
import { useEffect, useState } from 'react';
export default function Informacao(){
    
    const [showEdit, setShowEdit] = useState(false);
  
    const [dadosEditar, setDadosEditar] = useState()
    // const [dadosEditar, setDadosEditar] = useState([
    //     idEditUser,
    //     'PF'
    // ]);

    const handleShowEdit = () =>{
        // console.log("o id a passar agora: ", idUser)
        setShowEdit(true);
        const dadosEditar = [localStorage.getItem("idUs"), 'PF']
        setDadosEditar(dadosEditar);
      }

      useEffect(() => {
        handleShowEdit(dadosEditar)
      },[])
    
    
    return(
        
        <>
        {showEdit &&
         <CardUsuarioEdit handleShowEdit={dadosEditar}/>
         }
             
        </>
    )
}