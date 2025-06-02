import React from 'react'

export default function Footer () {
  return (
    <div className="w-full h-1/2 flex text-blue-400">
      <div className="bg-backdrop w-36 h-36 shadow-2xl">backdrop</div>
      <div className="bg-primary w-36 h-36 shadow-2xl">primary</div>
      <div className="bg-light w-36 h-36 shadow-2xl">light</div>
      <div className="bg-dark w-36 h-36 shadow-2xl">dark</div>
      <div className="bg-secondary w-36 h-36 shadow-2xl">secondary</div>
      <div className="bg-accent w-36 h-36 shadow-2xl">accent</div>
    </div>
  );
}

