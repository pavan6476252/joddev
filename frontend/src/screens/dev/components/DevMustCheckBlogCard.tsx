import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import React from "react";

export function DevMustCheckBlogCard() {
  return (
    <div className="w-60 relative rounded-lg group hover:scale-105 hover:transition-transform">
    <img
      src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      alt="Blog Cover Image"
      className="rounded-lg w-full h-60 object-cover object-center"
    />
    <div className="absolute rounded-lg inset-0 bg-gradient-to-t from-black/80 via-black/50 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
      <div className="absolute inset-0 flex flex-col justify-end p-6 bg-transparent text-white">
        <h2 className="text-xl font-medium mb-2">How we design and code open-source projects?</h2>
        <p className="text-gray-400">Subtitle goes here</p>
        <a href="#" className="mt-4 text-black-600 hover:underline">Read More</a>
      </div>
    </div>
  </div>
  

  );
}