import { createContext, useState } from "react";

export const AuthorizationContext = createContext(null);
function Authorization({children}){
    const [isAuth,setIsAuth] = useState(false);
    return (
        <AuthorizationContext.Provider value={{isAuth}}>
            {children}
        </AuthorizationContext.Provider>
    )
}

export default Authorization;