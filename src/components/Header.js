const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark d-flex bg-primary ">
            <div className="container-fluid justify-content-around">
                <a className="navbar-brand" style={{"font-size": "200%" }} href="#">
                    {/* <img src="/favicon-32x32.png" width="40" height="40" alt="" className="mr-2" /> */}
                    Encoder and Decoder for Transposition and Substitution Ciphers
                </a>
            </div>
        </nav>
        //
        //
        // <div class="jumbotron jumbotron-fluid bg-dark">
        //         <div class="container  p-3 text-center">
        //             <h1> Encoder and Decoder for Transposition and Substitution Ciphers</h1>
        //             {/* <h1 class="display-4">Fluid jumbotron</h1>
        //             <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> */}
        //         </div>
        //     </div>
    );
};

export default Header;
