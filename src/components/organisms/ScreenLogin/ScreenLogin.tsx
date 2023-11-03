import React from "react";
import LoginContainer from "../LoginContainer/LoginContainer";

function ScreenLogin() {
  return (
    <main
      className="
    w-full
    flex
    justify-center
    items-center"
    >
      <section className="md:w-1/2 h-[450px] max-w-[350px] bg-zinc-950 rounded-3xl flex items-center">
        <div
          className="
        basis-full
        flex
        flex-col
        text-white
        items-center
        px-10
       "
        >
          <h1 className="items-start">Faça o seu login</h1>
          <LoginContainer />
        </div>
      </section>
    </main>
  );
}

export default ScreenLogin;
