import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthorizationContext } from "../components/Authorization";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setIsAuth } = useContext(AuthorizationContext);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (email && password) {
            setIsAuth(true);
            navigate("/payments");
        }
    };

    return (
        <div>
            <h1>Login Page</h1>

            <form onSubmit={handleLogin}>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;
