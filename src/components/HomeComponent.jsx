import { useTypewriter, Cursor } from "react-simple-typewriter";

const HomeComponent = () => {

    const [text] = useTypewriter({
        words: ['Clikie', 'Clikes', '//Clikni'],
        typeSpeed: 100,
        deleteSpeed: 100,
        delaySpeed: 80
    });

    return (
        <>
            <div className="home">
                <div className="left">
                    <div className="nav">
                        <i className='bx bx-home'></i>
                        <div className="left-nav">
                            <a href="/"><i className='bx bxs-keyboard'></i></a>
                            <a href="/"><i className='bx bxs-dashboard' ></i></a>
                            <a href="/"><i className='bx bx-user-check' ></i></a>
                            <a href="/"><i className='bx bx-user-plus' ></i></a>
                        </div>
                        <div className="heading">
                            <h1>{text} <Cursor /></h1>
                            {/* <p><span>// </span>Test <span>// </span>Compete <span>//</span> Improve</p> */}
                            <li><a href="/">/* Start Typing */</a></li>
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