const HomeComponent = ({
    onGame,
}) => {

    return (
        <>
            <div className="home">
                <div className="left">
                    <div className="nav">
                        <i className='bx bx-home'></i>
                        <div className="left-nav">
                            <a href="/"><i className='bx bxs-dashboard' ></i></a>
                            <a href="/"><i className='bx bx-user-check' ></i></a>
                            <a href="/"><i className='bx bx-user-plus' ></i></a>
                        </div>
                        <div className="heading">
                            <h1>Clikni<span>,</span></h1>
                            <p>//Test //Compete //Improve</p>
                            <button>Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="right-nav">
                        <a href="/"><i className='bx bxl-github'></i></a>
                        <a href="/"><i className='bx bxl-linkedin' ></i></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeComponent;