// Main
import useSigninForm from "./signinForm.logic";
import Link from "next/link";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const SigninForm = () => {
    const { register, handleSubmit, errors, handleAuth } = useSigninForm();

    const ErrorMessage = ({ name }: { name: "identifier" | "password" }) => {
        if (!errors[name]?.message) return null;
        return (
            <p className="text-xs text-red-600 font-sans mt-1 pl-1">
                <FontAwesomeIcon icon={faInfoCircle} /> {errors[name].message}
            </p>
        );
    };

    return (
        <div className="shadow-sm border-2 sm:w-2/3 lg:w-1/3 p-4 bg-white">
            <h1 className="mb-6 text-4xl text-center text-gray-600 font-thin">
                Welcome
            </h1>

            <form onSubmit={handleSubmit((data) => handleAuth(data))}>
                <div className="mb-4">
                    <input
                        className="formInput"
                        {...register("identifier")}
                        placeholder="Email address"
                    />
                    <ErrorMessage name="identifier" />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        className="formInput"
                        {...register("password")}
                        placeholder="Password"
                    />
                    <ErrorMessage name="password" />
                </div>

                <button
                    type="submit"
                    className="w-full text-white text-lg bg-blue-700 py-2"
                >
                    Signin
                </button>
            </form>

            <p className="text-center mt-6 mb-4 text-sm text-gray-400 font-semibold">
                By signing in, you agree to Smart Family{" "}
                <Link href="terms_conditions">
                    <a className="hover:underline text-blue-500">
                        Terms and Conditions
                    </a>
                </Link>{" "}
                and{" "}
                <Link href="privacy_policy">
                    <a className="hover:underline text-blue-500">
                        Privacy Policy
                    </a>
                </Link>
            </p>

            <hr />

            <div className="mt-6">
                <p className="text-sm text-gray-400 text-center mb-2">
                    New to Smart Family?
                </p>

                <button className="w-full hover:bg-gray-100 text-yellow-600 border border-yellow-600 text-lg  py-2">
                    create account
                </button>
            </div>

            {/* <div className="flex w-full items-center justify-between my-4">
                <span className="h-px bg-gray-200 w-full" />
                <span className="mx-3 text-gray-700 font-mono text-lg">OR</span>
                <span className="h-px bg-gray-200 w-full" />
            </div> */}
        </div>
    );
};

export default SigninForm;
