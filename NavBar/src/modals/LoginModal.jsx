import { createPortal } from "react-dom";

export default function LoginModal({ isLoginOpen, setIsLoginOpen }) {
  return createPortal(
    <div
      onClick={() => {
        setIsLoginOpen(false);
      }}
      className={`fixed inset-0 flex items-center justify-center bg-zinc-800/40 px-4 ${isLoginOpen ? "" : "hidden"}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-2xl grow rounded-lg bg-zinc-700 p-4 shadow-lg"
      >
        <div className="text-xl font-bold">Login</div>
        <div className="-mx-4 my-3 flex flex-wrap gap-4 px-4 py-4">
          <input
            placeholder="Email"
            className="grow rounded border border-gray-600 bg-zinc-800 px-2 py-1"
            type="email"
          />
          <input
            placeholder="Password"
            className="grow rounded border border-gray-600 bg-zinc-800 px-2 py-1"
            type="password"
          />
        </div>
        <div className="flex justify-end gap-4">
          <button
            onClick={() => {
              setIsLoginOpen(false);
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
