import React from "react";

export function Footer() {
  return (
    <footer className="p-5 pt-10 text-white">
      <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between">
        <p className="font-semibold text-sm">Oliver Rodríguez Frontend Developer</p>
        <div className="flex gap-5">
          <a
            href="https://www.instagram.com/oarn_09/"
            className="instagram w-8 h-8 bg-[url('/instagram_icon.png')] block bg-cover bg-center hover:border-b-2"
            target={"_blank"}
          ></a>
          <a
            href="https://mobile.twitter.com/Oliverantonio09"
            className="twitter w-8 h-8 bg-[url('/twitter_icon.png')] block bg-cover bg-center hover:border-b-2"
            target={"_blank"}
          ></a>
          <a href="https://github.com/oliverrod09" target={"_blank"} className="twitter w-8 h-8 bg-[url('/github_icon.png')] block bg-cover bg-center hover:border-b-2"></a>
        </div>
      </div>
    </footer>
  );
}
