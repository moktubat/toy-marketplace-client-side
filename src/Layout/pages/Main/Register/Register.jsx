import { useContext } from "react";
import register from "../../../../assets/register.jpg";
import { AuthContext } from "../../../../provider/AuthProvider";
import useTitle from "../../../../hooks/useTitel";

const Register = () => {

    const {createUser} = useContext(AuthContext);
    useTitle("Register");
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const image = form.image.value;
        const password = form.password.value;

        console.log(name, email, image, password);

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.log(error))
    }



  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 xl:w-3/5 px-4 order-last lg:order-first">
          <div className="relative max-w-xl mx-auto lg:mx-0 lg:max-w-3xl h-full">
            <img
              className="block max-w-md object-cover rounded-3xl"
              src={register}
              alt=""
            />
          </div>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded-lg">
          <div className="card-body max-w-md mx-auto lg:mr-0 shadow-2xl rounded-lg">
            <h3 className="font-heading text-4xl text-gray-900 font-semibold mb-4">
              Sign Up Here!
            </h3>
            <div className="flex mb-6 items-center">
              <div className="w-full h-px bg-gray-300"></div>

              <div className="w-full h-px bg-gray-300"></div>
            </div>
            <form onSubmit={handleSignUp}>
              <div className="flex">
                <div className="form-control mb-6">
                  <label 
                    className="block mb-1.5 text-sm text-gray-900 font-semibold"
                  >
                    Name
                  </label>
                  <input
                    className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block mb-1.5 text-sm text-gray-900 font-semibold"
                  >
                    Email
                  </label>
                  <input
                    className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="flex">
                <div className="mb-6">
                  <label
                    className="block mb-1.5 text-sm text-gray-900 font-semibold"
                  >
                    Image
                  </label>
                  <input
                    className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                    name="image"
                    type="text"
                    placeholder="Enter your image url"
                  />
                </div>
                <div className="mb-7">
                  <div className="flex mb-1.5 items-center justify-between">
                    <label
                      className="block text-sm text-gray-900 font-semibold"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>
              </div>
              <button
                className="relative group block w-full mb-6 py-3 px-5 text-center text-sm font-semibold text-orange-50 bg-orange-900 rounded-full overflow-hidden"
                type="submit"
              >
                <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                <span className="relative">SIGN UP</span>
              </button>
              
            </form>
            <span className="text-xs font-semibold text-gray-900">
                <span>Already have an account.</span>
                <a
                  className="ml-1 inline-block text-orange-900 hover:text-orange-700"
                  href="login"
                >
                  Sign In
                </a>
              </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
