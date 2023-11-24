import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import useForm from '../../hooks/useForm';
import * as gameService from '../../services/gameService';
import AuthContext from "../../contexts/AuthContext";

const Edit = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [game, setGame] = useState({
        userText: '',
        title: '',
        difficulty: '',
        time: ''
    });

    const { username } = useContext(AuthContext);

    useEffect(() => {
        gameService.getOne(id)
            .then(result => {
                setGame(result)
            })
    }, [id]);

    const editGameSubmitHandler = async (values) => {

        try {
            await gameService.edit(id, values)

            navigate('/games')
        } catch (err) {
            console.log(err);
        };

    };

    const { values, onChangeHandler, onSubmitHandler } = useForm(editGameSubmitHandler, game);

    return (
        <div className="flex flex-col mt-[-112px] items-center w-full justify-center h-screen flex-1 px-20 text-center">
            <form className="bg-zinc-700 shadow-2xl flex w-2/3 max-w-5xl  border-2 border-black rounded-md border-b-8 border-l-8" onSubmit={onSubmitHandler}>
                <div className="w-3/5 p-10">
                    <div className="text-left font-bold text-5xl text-[#D1D0C5]">
                        <span className="text-white">You are in</span> editing mode, {username}
                        <div className="border-2 w-10 mt-2 border-amber-300"></div>
                    </div>
                    <div className="flex flex-col items-center">
                        <textarea className="text-black bg-[#D1D0C5] border-2 border-black rounded-md border-b-4 border-l-4 text-3xl w-full h-80 p-2 mt-[50px] resize-none placeholder-black"
                            id="userText"
                            name="userText"
                            type="text"
                            placeholder="Type your words here"
                            onChange={onChangeHandler}
                            value={values.userText}
                        />
                    </div>
                    <Link to={`/games`} className="flex flex-col justify-center item border-2 border-black rounded-md border-b-4 border-l-4 w-24 h-12 font-black px-2 text-2xl text-[#D1D0C5] mt-8">Back</Link>
                </div>
                <div className="w-2/5 bg-zinc-800 text-[#D1D0C5] py-24 px-12">
                    <div className="text-center font-bold text-4xl">
                        <span className="text-white">Change</span> the game
                    </div>
                    <div className="flex flex-col mt-11">
                        <input className="h-12 text-[#D1D0C5] border-2 border-black rounded-md border-b-4 border-l-4 bg-zinc-800 pl-2 placeholder-[#D1D0C5] text-2xl" type="text"
                            id="title"
                            name="title"
                            placeholder="Game name"
                            onChange={onChangeHandler}
                            value={values.title}
                        />
                    </div>
                    <p className="mt-7 text-xl">Difficulty:</p>

                    <div className="text-black text-2xl font-normal justify-center flex gap-2 pt-2">
                        <select
                            className={`border-2 bg-zinc-800 border-black text-[#D1D0C5] rounded-md border-b-4 border-l-4 font-black px-2 w-36 `}
                            id="difficulty"
                            name="difficulty"
                            value={values.difficulty}
                            onChange={onChangeHandler}
                        >
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>

                    </div>
                    <p className="mt-7">Time:</p>
                    <div className="text-black text-2xl font-normal justify-center flex gap gap-2 pt-2">

                        <select
                            className={`border-2 bg-zinc-800 border-black text-[#D1D0C5] rounded-md border-b-4 border-l-4 font-black px-2 w-36 `}
                            id="time"
                            name="time"
                            value={values.time}
                            onChange={onChangeHandler}
                        >
                            <option value="15">15</option>
                            <option value="30">30</option>
                            <option value="60">60</option>
                        </select>
                    </div>
                    <div className="text-[#D1D0C5] text-2xl font-normal justify-center flex gap gap-2 pt-10">
                        <button className="border-2 border-black rounded-md border-b-4 border-l-4 w-36 h-12 font-black px-2 mt-10 bg-amber-400 text-[#D1D0C5]" type="submit" value="Create Game"><span className="drop-shadow-[0_0.1px_1.1px_rgba(0,0,0,10)]">Save</span>
                        </button>
                        <button className="border-2 border-black rounded-md border-b-4 border-l-4 w-36 h-12 font-black px-2 mt-10">Cancel</button>
                    </div>

                </div>
            </form >
        </div >
    )
};

export default Edit;


// #D1D0C5