import { createPortal } from "react-dom";

export default function SignupModal({ isSignupOpen, setIsSignupOpen }) {
  return createPortal(
    <div
      onClick={() => {
        setIsSignupOpen(false);
      }}
      className={`fixed inset-0 flex items-center justify-center bg-zinc-800/40 px-4 ${isSignupOpen ? "" : "hidden"}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-2xl grow rounded-lg bg-zinc-700 p-4 shadow-lg"
      >
        <div className="text-xl font-bold">Sign Up</div>
        <div className="my-3 px-4 py-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              placeholder="First Name"
              className="w-full rounded border border-gray-600 bg-zinc-800 px-2 py-1"
              type="text"
            />
            <input
              placeholder="Last Name"
              className="w-full rounded border border-gray-600 bg-zinc-800 px-2 py-1"
              type="text"
            />
            <input
              placeholder="Email"
              className="w-full rounded border border-gray-600 bg-zinc-800 px-2 py-1"
              type="email"
            />
            <input
              placeholder="Password"
              className="w-full rounded border border-gray-600 bg-zinc-800 px-2 py-1"
              type="password"
            />
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <button
            onClick={() => {
              setIsSignupOpen(false);
            }}
            className="rounded-md bg-gray-500 px-6 py-2 font-semibold hover:bg-gray-600/80 active:bg-gray-400/60"
          >
            Cancel
          </button>
          <button className="rounded-md bg-cyan-500 px-6 py-2 font-semibold hover:bg-cyan-600/80 active:bg-blue-400/60">
            Sign In
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("portal"),
  );
}
