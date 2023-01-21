import React from "react";

export function Loading() {
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <figure className="w-32 h-32 animate-spin">
          <img src="/loading.svg" alt="" className="h-full w-full" />
        </figure>
      </div>
    </>
  );
}
