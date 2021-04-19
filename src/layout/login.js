import React, {useState} from 'react';
import './login.scss'

const Login = () => {

    // State para inciar sesión

    const [usuario, guardarUsuario] = useState({
        text:'',
        password:''
    })
    //Extraigo suuario
    const {text, password} = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    const camposVacios = () => {
        var icono = document.getElementById("iconobot");
        if((text=='')||(password==''))
        {
            icono.className=""
            console.log(icono)
        } else {
            icono.className="is_active"
            console.log(icono)
        }
    }


    return ( 
    <div className="background-login">
        <div className="box-login">
        <h1>Iniciar sesión</h1>
            <form>
                <div>
                    <input 
                        type="text" 
                        id="text"
                        name="text"
                        value={text}
                        onChange={onChange}
                    />
                    <label>USUARIO</label>
                </div>
                <div>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                    />
                    <label>CONTRASEÑA</label>
                </div> 
                <input type="button" id="iconobot" className=""  onClick={camposVacios()}></input>
            </form>
            <div>
            <a 
            onClick={()=>{alert("Renovar contraseña")}}
            >¿Olvidaste tu contraseña?</a>
            </div>
            <div>
            <a onClick={()=>{alert("Crear cuenta")}}>Crear cuenta</a>
            </div>
            
        </div>
    </div> 
    );
}
 
export default Login;