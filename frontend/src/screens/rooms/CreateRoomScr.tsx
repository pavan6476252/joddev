import React, { useState } from 'react';
import { RoomResponse } from '../../types';
import { useNavigate } from 'react-router-dom';

const CreateRoomScreen = () => {
  const [startTime, setStartTime] = useState('');
  const [isPublic, setIsPublic] = useState(true);
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const navigate = useNavigate();

  const handleCreateRoom = async () => {

    try {
      const response = await fetch('http://localhost:3000/api/room/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjAzZDA3YmJjM2Q3NWM2OTQyNzUxMGY2MTc0ZWIyZjE2NTQ3ZDRhN2QiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiUGF2YW4gS3VtYXIiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jSnpxdjZjTnFndDJsNFRtX0J3MjlwRF9VZUI4MGlDWl9GbVJGc2sxVElSalU4PXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2pvZGRldi0zNDlhZSIsImF1ZCI6ImpvZGRldi0zNDlhZSIsImF1dGhfdGltZSI6MTY5ODE2MjI5NCwidXNlcl9pZCI6InNzVnBVcmZmbUNZUjJ4Qjhnc1ZmOUphcXlCbTIiLCJzdWIiOiJzc1ZwVXJmZm1DWVIyeEI4Z3NWZjlKYXF5Qm0yIiwiaWF0IjoxNjk4MTYyMjk2LCJleHAiOjE2OTgxNjU4OTYsImVtYWlsIjoibWVlc2FsYXBhdmFuMjAwM0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjEwMzg3MDMwODM2NzU1NDAxMDMxNyJdLCJlbWFpbCI6WyJtZWVzYWxhcGF2YW4yMDAzQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.eSyQc9zfVOZBJiMDtG4yGkhMkViZTXSjYhPupgkRdtKzVTvdXfEK6IuT8xVTbvcVEKp4wP92ctqel-yaWdYfzck3luX4BiiApLIn2hQmvUJn6F77D88kqKQGRcojiPcXi64HW_KFMQk-JPDoc6WouwtozZNTR6D0V9ObtdmEdtXZ3NZfRkL3OghuFu5s1QjqmkTeA6fyhbbKQ5Er3ir-LnJtxC1QV_3t6Ox5n_44i6mYQMWLor1l48HAyxl3Zm9l366rVO5v4_czuJs1ZajRlOQ7VyNSC1sgzI5oS6Er_wugnEgoygRSVZ1dD-ThPgWljNK9KLRV3DuzSXFDiALtjA'
        },
        body: JSON.stringify({
          startTime,
          public: isPublic,
          title,
          subTitle,
          thumbnail,
        }),
      });

      if (response.status === 201) {
        const data: RoomResponse = await response.json()
        navigate(`/rooms/view/${data._id}`,)
      } else {
        // Handle error cases
      }
    } catch (error) {
      // Handle network or server errors
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Create a Room</h1>
      <div className="p-4 bg-white rounded-md shadow-md">
        <div className="mb-4">
          <label htmlFor="title" className="block font-semibold">
            Title:
          </label>
          <input
            type="text"
            id="title"
            className="w-full border rounded-md p-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subTitle" className="block font-semibold">
            Subtitle:
          </label>
          <input
            type="text"
            id="subTitle"
            className="w-full border rounded-md p-2"
            value={subTitle}
            onChange={(e) => setSubTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="thumbnail" className="block font-semibold">
            Thumbnail URL:
          </label>
          <input
            type="text"
            id="thumbnail"
            className="w-full border rounded-md p-2"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Start Time:</label>
          <input
            type="datetime-local"
            className="w-full border rounded-md p-2"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Public:</label>
          <input
            type="checkbox"
            className="mr-2"
            checked={isPublic}
            onChange={() => setIsPublic(!isPublic)}
          />
          <span className="text-gray-700">Public room</span>
        </div>
        <button
          onClick={handleCreateRoom}
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Create Room
        </button>
      </div>
    </div>
  );
};

export default CreateRoomScreen;
