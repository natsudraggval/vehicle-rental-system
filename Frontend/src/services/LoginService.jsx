import axios from 'axios'

const login = async (email, password, navigate) => {
    try{
        let response = await axios.get("https://api-vehicles.vercel.app/api/users", 
            {
          params: { email, password },
        }
        )
        localStorage.setItem('id', response.data.id)
        localStorage.setItem('email', response.data.email)

        if(response.data.role === "admin"){
            navigate('/admin')
        }else{
            navigate('/')
        }
    }catch(e){
        console.log(e)
    }
}

export default login;
