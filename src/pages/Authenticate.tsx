import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/AuthStore";

const Authenticate = () => {
  const {
      isOpen,
    openLogin,
    openRegister,
    closeModal,
    mode,
  } = useAuthStore();

  if (!isOpen) return null;
  

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={closeModal}
    >
      <div
        className="w-[90%] max-w-md rounded-xl bg-white p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {mode === "login" ? (
          /* LOGIN */
          <form className="flex flex-col gap-4">
            <h1 className="font-semibold text-2xl">
              User Login
            </h1>

            <div className="flex flex-col gap-1">
              <label htmlFor="login-email">
                Email
              </label>

              <input
                type="email"
                id="login-email"
                placeholder="type here"
                className="rounded-lg border p-2 outline-0"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="login-password">
                Password
              </label>

              <input
                type="password"
                id="login-password"
                placeholder="type here"
                className="rounded-lg border p-2 outline-0"
              />
            </div>

            <p>
              Create an account?{" "}
              <button
                type="button"
                onClick={openRegister}
                className="text-blue-700"
              >
                Click here
              </button>
            </p>

            <button
              type="button"
              onClick={closeModal}
              className="w-full rounded-lg bg-blue-700 py-2 font-semibold text-white"
            >
              Login
            </button>
          </form>
        ) : (
          /* REGISTER */
          <form className="flex flex-col gap-4">
            <h1 className="font-semibold text-2xl">
              User Sign Up
            </h1>

            <div className="flex flex-col gap-1">
              <label htmlFor="name">
                Name
              </label>

              <input
                type="text"
                id="name"
                placeholder="type here"
                className="rounded-lg border p-2 outline-0"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="register-email">
                Email
              </label>

              <input
                type="email"
                id="register-email"
                placeholder="type here"
                className="rounded-lg border p-2 outline-0"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="register-password">
                Password
              </label>

              <input
                type="password"
                id="register-password"
                placeholder="type here"
                className="rounded-lg border p-2 outline-0"
              />
            </div>

            <p>
              Already have an account?{" "}
              <button
                type="button"
                onClick={openLogin}
                className="text-blue-700"
              >
                Click here
              </button>
            </p>

            <button
              type="button"
              onClick={closeModal}
              className="w-full rounded-lg bg-blue-700 py-2 font-semibold text-white"
            >
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Authenticate;