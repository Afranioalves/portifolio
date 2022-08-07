// import styles from './Funcionario.module.scss'

import { CgGoogle } from "react-icons/cg";
import {FaLinkedinIn} from "react-icons/fa"
import {BsFacebook, BsApple} from "react-icons/bs"

export default function Funcionario() {
    return (
        <>
            <div>
                <h1>O seu próximo emprego está aqui.</h1>
                <h3>Acesse e candidate-se à milhares de vagas.</h3>
                <div className='botoes'>
                    <button><a href="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&client_id=445241175380-reeapd4i0gkerf9gqkmhuo38ik8g1vbo.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Flogin.infojobs.com.br%2Fsignin-oidc-google&scope=openid%20profile%20email&state=CfDJ8D1yaK_XoUJMhMvPyj-qyzI8n-G3D_nIV7Wiys0XgK376vriEp7jMpdIJjvCaOtGeCXA3ghR3Kf9jogC4x75aLQ1DWFSOT-Wwrem8AHnOAP0jB99nX5WrY0ohsr7Kju8vtJkY_U5A-54sDotkX1lwKtvZd30EkhCJNVu-zc3QWBK7zO4V8upbbSWsIHumSN_hE_JW3Hcw-IToyTbnQmSDI-W7Cc0CULP8KfCehLQawkWUp93CEurAiYPNWIzNUZy_SE6ncguxOLZyKhltyh9GLA&flowName=GeneralOAuthFlow"><CgGoogle></CgGoogle></a></button>
                    <button><a href="https://www.linkedin.com/uas/login?session_redirect=%2Foauth%2Fv2%2Flogin-success%3Fapp_id%3D108833024%26auth_type%3DAC%26flow%3D%257B%2522scope%2522%253A%2522r_liteprofile%2Br_emailaddress%2522%252C%2522appId%2522%253A108833024%252C%2522authorizationType%2522%253A%2522OAUTH2_AUTHORIZATION_CODE%2522%252C%2522redirectUri%2522%253A%2522https%253A%252F%252Flogin.infojobs.com.br%252Fsignin-oidc-linkedin%2522%252C%2522currentStage%2522%253A%2522LOGIN_SUCCESS%2522%252C%2522currentSubStage%2522%253A0%252C%2522authFlowName%2522%253A%2522generic-permission-list%2522%252C%2522creationTime%2522%253A1659310933612%252C%2522state%2522%253A%2522CfDJ8D1yaK_XoUJMhMvPyj-qyzLfrBV8Yk-3D2QLHSqjmBvNWkimZD575ZypoqbXl8AsWKTrzruCjUCd1m0J7GRfBgcayOz87tLbtWng9SIAZsn1ePmleAgQEdFUrRGBpo0gRScEG_okop17xIEq2LrQt3zphCyiSe_fOHXMDwK98X9L07xjREji_wgmpFL29uV3tv0KnQsiIchoCeEOXqbuNXit43CgjvKNXgJWOA6CKviqG8GXxpZ_BvtbP9WmsPBiukAwnNfkUqtHE4cS9TIvyqk%2522%257D&fromSignIn=1&trk=oauth&cancel_redirect=%2Foauth%2Fv2%2Flogin-cancel%3Fapp_id%3D108833024%26auth_type%3DAC%26flow%3D%257B%2522scope%2522%253A%2522r_liteprofile%2Br_emailaddress%2522%252C%2522appId%2522%253A108833024%252C%2522authorizationType%2522%253A%2522OAUTH2_AUTHORIZATION_CODE%2522%252C%2522redirectUri%2522%253A%2522https%253A%252F%252Flogin.infojobs.com.br%252Fsignin-oidc-linkedin%2522%252C%2522currentStage%2522%253A%2522LOGIN_SUCCESS%2522%252C%2522currentSubStage%2522%253A0%252C%2522authFlowName%2522%253A%2522generic-permission-list%2522%252C%2522creationTime%2522%253A1659310933612%252C%2522state%2522%253A%2522CfDJ8D1yaK_XoUJMhMvPyj-qyzLfrBV8Yk-3D2QLHSqjmBvNWkimZD575ZypoqbXl8AsWKTrzruCjUCd1m0J7GRfBgcayOz87tLbtWng9SIAZsn1ePmleAgQEdFUrRGBpo0gRScEG_okop17xIEq2LrQt3zphCyiSe_fOHXMDwK98X9L07xjREji_wgmpFL29uV3tv0KnQsiIchoCeEOXqbuNXit43CgjvKNXgJWOA6CKviqG8GXxpZ_BvtbP9WmsPBiukAwnNfkUqtHE4cS9TIvyqk%2522%257D"><FaLinkedinIn></FaLinkedinIn></a></button>
                    <button><a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=1300724300385148&kid_directed_site=0&app_id=1300724300385148&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv3.3%2Fdialog%2Foauth%3Fclient_id%3D1300724300385148%26scope%3Demail%26response_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Flogin.infojobs.com.br%252Fsignin-oidc-facebook%26state%3DCfDJ8D1yaK_XoUJMhMvPyj-qyzKrwaaljnxRO8rj3Z6nrnHgJ6fMgACzyRaN5W-BxxMGW5vgwVpNXnXKpIuDeb6LOP0KgHd3AxpkAAe33RxxUOioryKuPyfSqIyqiYvgRv5i6FfY4YgKQh5VRV6skF2NdAKZsnkfZNMmMMu1LG0Nw0rxOkmnxAKll8cIfiiElAWwifWS7MmO4j7nFzI5Mgm5W6EmRVloT-Vmo2mV8ffagmJFMzUAYQtkj3pKL_r4CDrsoEHcpn53n4xatqFJ7gIfi80%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D84fbecdf-ae55-49d4-9c22-4c01bea35564%26tp%3Dunspecified&cancel_url=https%3A%2F%2Flogin.infojobs.com.br%2Fsignin-oidc-facebook%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3DCfDJ8D1yaK_XoUJMhMvPyj-qyzKrwaaljnxRO8rj3Z6nrnHgJ6fMgACzyRaN5W-BxxMGW5vgwVpNXnXKpIuDeb6LOP0KgHd3AxpkAAe33RxxUOioryKuPyfSqIyqiYvgRv5i6FfY4YgKQh5VRV6skF2NdAKZsnkfZNMmMMu1LG0Nw0rxOkmnxAKll8cIfiiElAWwifWS7MmO4j7nFzI5Mgm5W6EmRVloT-Vmo2mV8ffagmJFMzUAYQtkj3pKL_r4CDrsoEHcpn53n4xatqFJ7gIfi80%23_%3D_&display=page&locale=pt_BR&pl_dbl=0"><BsFacebook></BsFacebook></a></button>
                    <button><a href="https://appleid.apple.com/auth/authorize?client_id=br.com.infojobs.identity&scope=openid%20email%20name&response_type=code&redirect_uri=https%3A%2F%2Flogin.infojobs.com.br%2Fsignin-oidc-apple&state=CfDJ8D1yaK_XoUJMhMvPyj-qyzK5_NOQ2_oH2WGzPkap-uqzAo7W4OPmpMXt03TH4kOvUfa2yOxNlLcYPWsmvleLOSU8S2a-IMcWi4Hczvjz_fXs6G6wHBiEBqF6RYVamZNBWzf-2bGha-NOaNpZ4L0X11HxkKB3wdClWDDT018YLOG0FU1lnHeV9ch_awoib7fNAcwTajhEqecHpJqXfwlz1x4qfr5-aIu8OBmQLxkDk-IT5iSbwUcwmo3EdZKEyhtRz9gyABRcd0jT7mXOu7ybY_M&response_mode=form_post"><BsApple></BsApple></a></button>
                </div>
            </div>
            <div>
                <h1>Ou continue acessando por aqui</h1>
                <label>Digite seu nome:</label>
                <input type="text" placeholder='Nome' required />
                <label>Diga seu Email:</label>
                <input type="email" name="email" id="email" required/>
                <label>Data de nascimento</label>
                <input type="date" name="data" id="data" required/>
                <label>Nos de uma breve descrição sobre voce</label>
                <input type="text" required />
                <label>Diga seu objetivo na empresa</label>
                <input type="text" required/>
            </div>
        </>
    )
}