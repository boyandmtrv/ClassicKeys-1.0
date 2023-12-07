import { useState } from "react";

const useForm = (submitHandler, initialValues) => {
    
    const [values, setValues] = useState(initialValues);
    
    const onChangeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        submitHandler(values)
    };

    return {
        values,
        onChangeHandler,
        onSubmitHandler
    };
};

export default useForm;