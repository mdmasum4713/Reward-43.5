import { useState } from "react";

const Registration = () => {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [isSubmit, setIsSubmit] = useState(false);
const [isChecked, setIsChecked] = useState(false);

const handleSubmit = (event) =>{
event.preventDefault();
if(!isChecked){
    return;
}
const user = {
    name: name,
    email: email,
    password: password
}
console.log(user);
setIsSubmit(true)
};
    return (
        <div className="h-screen w-full flex justify-center items-center bg-purple-500">
            <form  
            onSubmit={(event) => handleSubmit(event)}
            className="w-2/3 lg:w-2/3 bg-white rounded shadow-lg p-8">
                <h1 className="text-4xl mb-6 text-purple-500 text-center">
                    Signup Form
                </h1>

                <label className="mb-2 text-lg">Name :</label>
                <input 
                onChange={(event) => setName(event.target.value)}
                type="text"
                    placeholder="Enter your name"
                    className="py-2 px-1 border-2 border-solid border-gray-400 w-full rounded text-lg mb-3"
                    required
                />
                <label className="mb-2 text-lg">Email :</label>
                <input
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                    placeholder="Enter your email"
                    className="py-2 px-1 border-2 border-solid border-gray-400 w-full rounded text-lg mb-3"
                required
               />
                <label className="mb-2 text-lg">Password :</label>
                <input
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                    placeholder="Enter your password"
                    className="py-2 px-1 border-2 border-solid border-gray-400 w-full rounded text-lg mb-3"
                required
                />
                <input type="checkbox" onChange={(event) => setIsChecked(event.target.checked)} />{" "} Do you agree with our terms and conditions?

                <div className="flex justify-end mt-3">
                    <button type="submit"
                    className="bg-purple-500 h-12 w-20 text-xl text-white"
                    >
                        Signup
                    </button>
                   
                </div>
            </form>
           {
            isSubmit && <div className="fixed top-0 flex justify-center items-center h-screen w-full bg-purple-500">
            <div className="w-2/3 h-1/2 rounded bg-purple-300 text-center">
                <h1 className="text-3xl mb-6 text-purple-500">You have submitted the form successfully</h1>
                <p className="text-xl mb-3">Name: {name}</p>
                <p className="text-xl mb-3">Email: {email}</p>
                <div className="flex gap-2" >
                <img className="w-14 ml-4" src="https://i.ibb.co/G3VfQNG/6c8aa3e7-762d-466e-bebf-ae63a1c81587.jpg" alt="" />
                <h4 className="text-xl">Hey Iam Masum</h4>
                </div>

                </div>
        </div>

            }
        </div>
    );
};

export default Registration;