export class HomeComponent {
    constructor() {
        
    }
    render() {
        return `
        <nav>
            <ul style="display:flex; list-style:none; justify-content:center; background:black; margin:0px;" >
                <li style="padding:5px 15px; background:white; border:4px solid black; border-radius:5px;"><a href = "http://localhost:9000" style="text-decoration:none; color:black;">HOME</a></li>
                <li style="padding:5px 15px;"><a href = "http://localhost:9000/#/login" style="text-decoration:none; color:white;">LOGIN</a></li>
                <li style="padding:5px 15px;"><a href = "http://localhost:9000/#/signup" style="text-decoration:none; color:white;">SIGNUP</a></li>
            </ul>
        </nav>
        `;
    }
}
